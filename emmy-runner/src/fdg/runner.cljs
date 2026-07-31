(ns fdg.runner
  (:require [clojure.string :as str]
            [emmy.sci :as emmy-sci]
            [fdg.compat]
            [fdg.output :as output]
            [sci.core :as sci]
            [sci.impl.vars :as sci-vars]
            ["@codemirror/autocomplete" :refer [autocompletion completionKeymap]]
            ["@codemirror/commands" :refer [defaultKeymap history historyKeymap indentWithTab]]
            ["@codemirror/language" :refer [HighlightStyle syntaxHighlighting]]
            ["@codemirror/state" :refer [EditorState]]
            ["@codemirror/view" :refer
             [EditorView drawSelection dropCursor highlightActiveLine highlightSpecialChars hoverTooltip keymap
              lineNumbers]]
            ["@lezer/highlight" :refer [tags]]
            ["@nextjournal/clojure-mode" :refer [complete_keymap default_extensions]]))

(defonce state
  (atom {:manifest [],
         :chapter nil,
         :selected nil,
         :code "",
         :output "Ready.",
         :inspector-ns "fdg.session",
         :inspector-filter "",
         :show-unbound? false,
         :inspected-symbol nil}))

(defonce context (atom nil))

(defonce session-definitions (atom #{}))

(defonce editor (atom nil))

(def editor-highlight-style
  (.define
    HighlightStyle
    #js [#js {:tag #js [(.-keyword tags) (.-operatorKeyword tags)], :color "var(--syntax-keyword)", :fontWeight "650"}
         #js {:tag #js [(.-variableName tags) (.-name tags)], :color "var(--syntax-variable)"}
         #js {:tag #js [(.-string tags) (.-regexp tags)], :color "var(--syntax-string)"}
         #js {:tag #js [(.-number tags) (.-bool tags) (.-null tags) (.-atom tags)], :color "var(--syntax-literal)"}
         #js {:tag #js [(.-comment tags) (.-lineComment tags) (.-blockComment tags)],
              :color "var(--syntax-comment)",
              :fontStyle "italic"}
         #js {:tag #js [(.-operator tags) (.-punctuation tags)], :color "var(--syntax-operator)"}
         #js {:tag (.-bracket tags), :color "var(--syntax-bracket)"}]))

(defn eval-session! [ctx code] (sci/eval-string* ctx (str "(in-ns 'fdg.session)\n" code)))

(defn prepare-block!
  [ctx block]
  (doseq [definition (:definitions block)]
    (when-not (contains? @session-definitions definition)
      (eval-session! ctx (str "(ns-unmap 'fdg.session '" definition ")")))
    (swap! session-definitions conj definition))
  (when (seq (:definitions block)) (eval-session! ctx (str "(declare " (str/join " " (:definitions block)) ")"))))

(defn book-definitions
  []
  (into #{} (mapcat :definitions (filter #(= (:chapter @state) (:chapter %)) (:manifest @state)))))

(defn new-context
  []
  (let [compat-ns (sci/copy-ns fdg.compat (sci/create-ns 'fdg.compat))
        config (update emmy-sci/config :namespaces assoc 'fdg.compat compat-ns)
        ctx (sci/init config)
        definitions (book-definitions)
        referred-names (into #{} (map (comp name key)) (concat (get emmy-sci/namespaces 'emmy.env) compat-ns))
        local-definitions (remove #(contains? referred-names %) definitions)
        emmy-symbols (->> (keys (get emmy-sci/namespaces 'emmy.env))
                          (map name)
                          sort
                          (str/join " "))
        setup (str "(ns fdg.session "
                   "(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "
                   "(:require [emmy.env :refer ["
                   emmy-symbols
                   "]] "
                   "[fdg.compat :refer :all]))\n"
                   "(declare "
                   (str/join " " (sort local-definitions))
                   ")")]
    (sci/eval-string* ctx setup)
    (when-not (= 9 (eval-session! ctx "(square 3)"))
      (throw (js/Error. "The runner failed to install emmy.env into fdg.session")))
    ctx))

(defn reset-context! [] (reset! session-definitions #{}) (reset! context (new-context)))

(defn el
  [tag attrs & children]
  (let [node (.createElement js/document tag)]
    (doseq [[key value] attrs]
      (case key
        :class (set! (.-className node) value)
        :value (set! (.-value node) value)
        :onclick (.addEventListener node "click" value)
        :onchange (.addEventListener node "change" value)
        :selected (set! (.-selected node) value)
        :checked (set! (.-checked node) value)
        (.setAttribute node (name key) value)))
    (doseq [child (remove nil? children)] (.append node (if (string? child) (.createTextNode js/document child) child)))
    node))

(def symbol-character? #"[\w*+!_?.<>=/$%&:#'-]")

(defn symbol-range
  [doc position]
  (let [length (count doc)
        start (loop [index position]
                (if (and (pos? index) (re-matches symbol-character? (subs doc (dec index) index)))
                  (recur (dec index))
                  index))
        end (loop [index position]
              (if (and (< index length) (re-matches symbol-character? (subs doc index (inc index))))
                (recur (inc index))
                index))]
    (when (< start end) {:from start, :to end, :text (subs doc start end)})))

(defn value-kind
  [value]
  (cond (nil? value) "nil"
        (fn? value) "function"
        (boolean? value) "boolean"
        (number? value) "number"
        (string? value) "string"
        (keyword? value) "keyword"
        (symbol? value) "symbol"
        (map? value) "map"
        (vector? value) "vector"
        (set? value) "set"
        (sequential? value) "sequence"
        :else (let [constructor (some-> value
                                        .-constructor
                                        .-name)]
                (if (seq constructor) constructor "object"))))

(defn collection-shape
  [value]
  (when (coll? value)
    (let [bounded-size (if (sequential? value) (bounded-count 1001 value) (count value))
          size (if (> bounded-size 1000) "1000+" bounded-size)
          child (when (and (sequential? value) (seq value)) (collection-shape (first value)))]
      (str size (when child (str " × " child))))))

(defn safe-preview
  [value]
  (try (let [rendered (if (fn? value) "<function>" (output/pr-str-native value))]
         (if (> (count rendered) 600) (str (subs rendered 0 600) "…") rendered))
       (catch :default _ "<value cannot be printed safely>")))

(defn deref-var
  [sci-var]
  (if (sci-vars/hasRoot sci-var)
    (try {:bound? true, :value @sci-var} (catch :default _ {:bound? false}))
    {:bound? false}))

(defn describe-var
  [sci-var]
  (let [metadata (meta sci-var)
        {:keys [bound? value]} (deref-var sci-var)
        kind (if bound? (value-kind value) "unbound")
        shape (when bound? (collection-shape value))]
    {:name (str (:name metadata)),
     :namespace (str (:ns metadata)),
     :qualified-name (str (:ns metadata) "/" (:name metadata)),
     :kind kind,
     :shape shape,
     :arglists (some-> (:arglists metadata)
                       pr-str),
     :doc (:doc metadata),
     :macro? (true? (:macro metadata)),
     :dynamic? (true? (:dynamic metadata)),
     :preview (if bound? (safe-preview value) "<declared, but not defined yet>")}))

(defn inspect-symbol
  [token]
  (when (and @context (seq token))
    (try (when-let [resolved (sci/resolve @context (symbol token))] (describe-var resolved)) (catch :default _ nil))))

(defn namespace-names
  []
  (if-not @context
    []
    (->> (sci/all-ns @context)
         (keep #(some-> %
                        meta
                        :name
                        str))
         distinct
         sort)))

(defn namespace-entries
  [namespace-name]
  (try (let [entries (eval-session! @context (str "(ns-publics '" namespace-name ")"))]
         (->> entries
              vals
              (map describe-var)
              (sort-by :name)))
       (catch :default _ [])))

(defn detail-node
  [info compact?]
  (if-not info
    (el "div"
        {:class "symbol-empty"}
        (if compact?
          "No live var is bound to this symbol."
          "Place the cursor on a symbol, hover over it, or select a var below."))
    (el "div"
        {:class (str "symbol-detail" (when compact? " compact"))}
        (el "div"
            {:class "symbol-title"}
            (el "code" {} (:qualified-name info))
            (el "span" {:class (str "kind kind-" (:kind info))} (:kind info)))
        (when (:shape info) (el "div" {:class "fact"} (el "span" {} "shape") (el "code" {} (:shape info))))
        (when (:arglists info) (el "div" {:class "fact"} (el "span" {} "calls") (el "code" {} (:arglists info))))
        (when (:macro? info) (el "div" {:class "badge"} "macro"))
        (when (:dynamic? info) (el "div" {:class "badge"} "dynamic"))
        (when (:doc info) (el "p" {:class "doc"} (:doc info)))
        (when-not compact? (el "pre" {:class "value-preview"} (:preview info))))))

(defn render-symbol-detail!
  []
  (when-let [target (.getElementById js/document "symbol-detail")]
    (set! (.-innerHTML target) "")
    (.append target (detail-node (:inspected-symbol @state) false))))

(defn inspect-token! [token] (swap! state assoc :inspected-symbol (inspect-symbol token)) (render-symbol-detail!))

(defn render-namespace-vars!
  []
  (when-let [target (.getElementById js/document "namespace-vars")]
    (let [filter-text (str/lower-case (:inspector-filter @state))
          entries (->> (namespace-entries (:inspector-ns @state))
                       (filter #(or (:show-unbound? @state) (not= "unbound" (:kind %))))
                       (filter #(str/includes? (str/lower-case (:name %)) filter-text)))]
      (set! (.-innerHTML target) "")
      (if (seq entries)
        (doseq [info entries]
          (.append target
                   (el "button"
                       {:class (str "var-row kind-" (:kind info)),
                        :onclick #(do (swap! state assoc :inspected-symbol info) (render-symbol-detail!))}
                       (el "code" {} (:name info))
                       (el "span" {} (str (:kind info) (when (:shape info) (str " · " (:shape info))))))))
        (.append target (el "p" {:class "status"} "No matching public vars."))))))

(defn clojure-completions
  [^js completion-context]
  (let [word (.matchBefore completion-context #"[A-Za-z0-9*+!_?.<>=/$%&:#'-]*")]
    (when (or (not= (.-from word) (.-to word)) (.-explicit completion-context))
      #js {:from (.-from word),
           :validFor #"[A-Za-z0-9*+!_?.<>=/$%&:#'-]*",
           :options (into-array
                      (for [info (->> ["fdg.session" "emmy.env" "fdg.compat"]
                                      (mapcat namespace-entries)
                                      (reduce (fn [by-name entry]
                                                (if (contains? by-name (:name entry))
                                                  by-name
                                                  (assoc by-name (:name entry) entry)))
                                        {})
                                      vals
                                      (sort-by :name))]
                        #js {:label (:name info),
                             :type (if (= "function" (:kind info)) "function" "variable"),
                             :detail (str (:namespace info) (when (:arglists info) (str " " (:arglists info)))),
                             :info (or (:doc info)
                                       (str (:kind info) (when (:shape info) (str " · shape " (:shape info)))))}))})))

(def symbol-hover
  (hoverTooltip (fn [view position side]
                  (let [doc (.. view -state -doc toString)
                        {:keys [from to text]} (symbol-range doc position)
                        info (when text (inspect-symbol text))]
                    (when (and info (not (or (and (= position from) (neg? side)) (and (= position to) (pos? side)))))
                      #js {:pos from,
                           :end to,
                           :above true,
                           :create (fn [_]
                                     (let [dom (el "div" {:class "symbol-hover"})]
                                       (.append dom (detail-node info true))
                                       #js {:dom dom}))})))
                #js {:hoverTime 350}))

(defn editor-extensions
  []
  (into-array
    (concat (array-seq default_extensions)
            [(lineNumbers) (highlightSpecialChars) (syntaxHighlighting editor-highlight-style) (history) (drawSelection)
             (dropCursor) (highlightActiveLine) symbol-hover (autocompletion #js {:override #js [clojure-completions]})
             (.of keymap
                  (into-array (concat (array-seq complete_keymap)
                                      (array-seq defaultKeymap)
                                      (array-seq historyKeymap)
                                      (array-seq completionKeymap)
                                      [indentWithTab])))
             (.of (.-updateListener EditorView)
                  (fn [^js update]
                    (when (.-docChanged update) (swap! state assoc :code (.. update -state -doc toString)))
                    (when (or (.-docChanged update) (.-selectionSet update))
                      (let [position (.. update -state -selection -main -head)
                            doc (.. update -state -doc toString)
                            token (:text (symbol-range doc position))]
                        (inspect-token! token)))))])))

(defn mount-editor!
  [parent code]
  (when-let [^js active-editor @editor] (.destroy active-editor))
  (let [editor-state (.create EditorState #js {:doc code, :extensions (editor-extensions)})]
    (reset! editor (EditorView. #js {:state editor-state, :parent parent}))))

(defn fetch-text
  [url]
  (-> (js/fetch url)
      (.then
        (fn [response]
          (if (.-ok response) (.text response) (throw (js/Error. (str "HTTP " (.-status response) " for " url))))))))

(defn selected-block [] (some #(when (= (:id %) (:selected @state)) %) (:manifest @state)))

(declare render! render-result!)

(defn select-block!
  [block]
  (let [same-chapter? (= (:chapter block) (:chapter @state))]
    (-> (fetch-text (:codePath block))
        (.then (fn [code]
                 (swap! state assoc :selected (:id block) :chapter (:chapter block) :code code :output "Ready.")
                 (render! same-chapter?)))
        (.catch (fn [error] (swap! state assoc :output (str error)) (render!))))))

(defn format-result [value] (if (nil? value) "nil" (output/pr-str-native value)))

(defn friendly-error
  [error]
  (let
    [message (-> (or (.-message error) (str error))
                 (str/replace #"^Error:\s*" "")
                 (str/replace #"^([^\n]+)\n[\s\S]*" "$1"))
     block-id (aget error "fdgBlockId")
     hint
       (cond
         (re-find #"(?i)(resolve|unbound|no such namespace)" message)
           "This usually means this port uses a missing definition or an scmutils name that still needs an Emmy equivalent."
         (re-find #"(?i)(parse|EOF|delimiter|reader)" message)
           "This block is not valid ClojureScript yet; compare it with the neighboring .scm file."
         :else "Compare the .cljs block with its .scm source and the surrounding book text.")]
    (str (when block-id (str "Stopped at " block-id ".\n\n")) message "\n\n" hint)))

(defn render-result!
  []
  (when-let [target (.getElementById js/document "result")]
    (set! (.-className target) (if (:error? @state) "error" ""))
    (set! (.-textContent target) (:output @state)))
  (when-let [status (.getElementById js/document "result-state")]
    (set! (.-className status) (str "result-state " (if (:error? @state) "failed" "ready")))
    (set! (.-textContent status) (if (:error? @state) "Error" "SCI output"))))

(defn evaluate!
  [code]
  (try (prepare-block! @context (selected-block))
       (let [value (eval-session! @context code)] (swap! state assoc :output (format-result value) :error? false))
       (catch :default error (swap! state assoc :output (friendly-error error) :error? true)))
  (render-result!)
  (render-symbol-detail!)
  (render-namespace-vars!))

(defn evaluate-block-promise
  [promise block]
  (if (or (:backgroundSetup block) (not (:executable block)))
    promise
    (.then promise
           (fn [_]
             (let [code-promise (if (= (:id block) (:selected @state))
                                  (js/Promise.resolve (:code @state))
                                  (fetch-text (:codePath block)))]
               (.then code-promise
                      (fn [code]
                        (try (prepare-block! @context block)
                             (let [value (eval-session! @context code)]
                               {:block block, :captured? (:capturesResult block), :value value})
                             (catch :default error (aset error "fdgBlockId" (:id block)) (throw error))))))))))

(defn add-block-with-prerequisites
  [ordered seen blocks-by-id block]
  (if (contains? seen (:id block))
    [ordered seen]
    (let [[ordered seen] (reduce (fn [[items visited] prerequisite-id]
                                   (if-let [prerequisite (get blocks-by-id prerequisite-id)]
                                     (add-block-with-prerequisites items visited blocks-by-id prerequisite)
                                     (throw (js/Error. (str "Missing prerequisite " prerequisite-id
                                                            " for " (:id block))))))
                           [ordered seen]
                           (:prerequisiteIds block))]
      [(conj ordered block) (conj seen (:id block))])))

(defn execution-blocks-through
  [selected]
  (let [chapter-blocks (->> (:manifest @state)
                            (filter #(= (:chapter %) (:chapter selected)))
                            (sort-by :ordinal))
        visible-blocks (take-while #(<= (:ordinal %) (:ordinal selected)) chapter-blocks)
        blocks-by-id (into {} (map (juxt :id identity) chapter-blocks))]
    (first (reduce (fn [[ordered seen] block] (add-block-with-prerequisites ordered seen blocks-by-id block))
             [[] #{}]
             visible-blocks))))

(defn run-through!
  []
  (let [selected (selected-block)
        blocks (execution-blocks-through selected)]
    (if (:backgroundSetup selected)
      (do
        (swap! state assoc
          :output
            "This setup is installed by the runner before examples execute. It is shown as the ClojureScript replacement for scmutils's load block and is not evaluated as an example."
          :error? false)
        (render-result!))
      (do (reset-context!)
          (-> (reduce evaluate-block-promise (js/Promise.resolve nil) blocks)
              (.then (fn [{:keys [captured? value]}]
                       (swap! state assoc
                         :output (cond
                                   (not (:executable selected))
                                   (str "Successfully ran the executable blocks through " (:id selected)
                                        ".\n\nThe selected block is cached Scheme output, not executable ClojureScript.")

                                   (not captured?)
                                   (str "Successfully ran through " (:id selected) ".\n\nNo output was produced.")

                                   :else
                                   (str "Successfully ran through " (:id selected)
                                        ".\n\nResult:\n" (format-result value)))
                         :error? false)
                       (render-result!)
                       (render-symbol-detail!)
                       (render-namespace-vars!)))
              (.catch (fn [error]
                        (swap! state assoc :output (friendly-error error) :error? true)
                        (render-result!)
                        (render-symbol-detail!)
                        (render-namespace-vars!))))))))

(defn render!
  ([] (render! true))
  ([preserve-navigator-scroll?]
   (when-let [root (.getElementById js/document "app")]
     ;; Replacing all of #app briefly collapses the document and otherwise makes
     ;; the browser clamp both the page and sidebar scroll positions back to zero.
     (let [page-x (.-scrollX js/window)
           page-y (.-scrollY js/window)
           previous-blocks (.querySelector root ".blocks")
           navigator-y (if (and preserve-navigator-scroll? previous-blocks) (.-scrollTop previous-blocks) 0)]
       (when-let [^js active-editor @editor]
         (.destroy active-editor)
         (reset! editor nil))
       (set! (.-innerHTML root) "")
       (let [{:keys [manifest chapter selected code output error?]} @state
             chapters (distinct (map :chapter manifest))
             chapter-blocks (sort-by :ordinal (filter #(= chapter (:chapter %)) manifest))
             blocks-by-id (into {} (map (juxt :id identity) manifest))
             selected-prerequisites (->> (:prerequisiteIds (selected-block))
                                         (keep blocks-by-id))
             editor-host (el "div" {:id "editor", :aria-label "ClojureScript editor"})
             ns-select (apply el
                         "select"
                         {:aria-label "Inspector namespace",
                          :onchange #(do (swap! state assoc :inspector-ns (.. % -target -value) :inspector-filter "")
                                         (render-namespace-vars!))}
                         (map #(el "option" {:value %, :selected (= % (:inspector-ns @state))} %) (namespace-names)))
             filter-input (el "input"
                              {:type "search",
                               :placeholder "Filter vars…",
                               :aria-label "Filter namespace vars",
                               :value (:inspector-filter @state)})
             unbound-toggle (el "input" {:type "checkbox", :checked (:show-unbound? @state)})]
         (.addEventListener filter-input
                            "input"
                            #(do (swap! state assoc :inspector-filter (.. % -target -value)) (render-namespace-vars!)))
         (.addEventListener unbound-toggle
                            "change"
                            #(do (swap! state assoc :show-unbound? (.. % -target -checked)) (render-namespace-vars!)))
         (.append
           root
           (el "aside"
               {:class "navigator"}
               (el "div"
                   {:class "brand"}
                   (el "div" {:class "brand-mark"} "λ")
                   (el "div" {} (el "h1" {} "FDG → Emmy") (el "p" {} "Interactive examples")))
               (apply el
                 "select"
                 {:onchange #(let [next (.. % -target -value)
                                   first-block (first (filter (fn [b] (= next (:chapter b))) manifest))]
                               (select-block! first-block))}
                 (map #(el "option" {:value %, :selected (= % chapter)} %) chapters))
               (el "p" {:class "status"} (str (count chapter-blocks) " blocks"))
               (apply el
                 "div"
                 {:class "blocks"}
                 (map (fn [block]
                        (el "button"
                            {:class (str "block" (when (= selected (:id block)) " active")),
                             :onclick #(select-block! block)}
                            (el "span" {:class "block-number"} (str (:ordinal block)))
                            (el "span" {:class "block-heading"} (:heading block))))
                   chapter-blocks)))
           (el "article"
               {}
               (el "p" {:class "eyebrow"} "ClojureScript example")
               (el "h2" {} (or selected "No block selected"))
               (when-let [block (selected-block)]
                 (el "div"
                     {:class "status block-meta"}
                     (el "span"
                         {:class "source-location"}
                         (str (:sourcePath block)
                              ":"
                              (:orgLine block)
                              (when (:backgroundSetup block) " · installed automatically by the runner")))
                     (when (seq selected-prerequisites)
                       (apply el
                         "span"
                         {:class "prerequisites"}
                         (el "span" {:class "prerequisites-label"} "Out-of-order dependency")
                         (map (fn [prerequisite]
                                (el "button"
                                    {:class "prerequisite",
                                     :title (str "Inspect prerequisite " (:id prerequisite) " — "
                                                 (:heading prerequisite)),
                                     :onclick #(select-block! prerequisite)}
                                    (el "span" {:class "prerequisite-id"} (:id prerequisite))
                                    (el "span" {:class "prerequisite-heading"} (:heading prerequisite))))
                           selected-prerequisites)))))
               editor-host
               (el "div"
                   {:class "actions"}
                   (el "button"
                       {:class "primary", :onclick run-through!}
                       (el "span" {:aria-hidden "true"} "▶")
                       "Run through this block")
                   (el "button" {:class "secondary", :onclick #(evaluate! (:code @state))} "Run editor only")
                   (el "button"
                       {:class "ghost",
                        :onclick #(do (reset-context!)
                                      (swap! state assoc :output "Context reset." :error? false :inspected-symbol nil)
                                      (render-result!)
                                      (render-symbol-detail!)
                                      (render-namespace-vars!))}
                       "Reset context"))
               (el "div"
                   {:class "section-heading"}
                   (el "h3" {} "Result")
                   (el "span"
                       {:id "result-state", :class (str "result-state " (if error? "failed" "ready"))}
                       (if error? "Error" "SCI output")))
               (el "pre" {:id "result", :class (when error? "error")} output))
           (el "aside"
               {:class "inspector"}
               (el "h2" {} "Inspector")
               (el "p" {:class "status"} "Live SCI values. Cursor or hover a symbol for details.")
               (el "div" {:id "symbol-detail"})
               (el "div"
                   {:class "inspector-heading"}
                   (el "h3" {} "Namespace")
                   (el "button"
                       {:class "icon-button",
                        :title "Refresh namespace values",
                        :aria-label "Refresh namespace values",
                        :onclick render-namespace-vars!}
                       "↻"))
               ns-select
               filter-input
               (el "label" {:class "toggle"} unbound-toggle (el "span" {} "Show pending declarations"))
               (el "div" {:id "namespace-vars", :class "namespace-vars"})))
         (mount-editor! editor-host code)
         (render-symbol-detail!)
         (render-namespace-vars!)
         (when-let [blocks (.querySelector root ".blocks")] (set! (.-scrollTop blocks) navigator-y))
         (.scrollTo js/window page-x page-y))))))

(defn ^:export init!
  []
  (try (-> (js/fetch "generated/blocks.json")
           (.then #(.json %))
           (.then (fn [data]
                    (let [manifest (js->clj data :keywordize-keys true)
                          first-block (first manifest)]
                      (swap! state assoc :manifest manifest :chapter (:chapter first-block))
                      (reset-context!)
                      (select-block! first-block))))
           (.catch (fn [error] (swap! state assoc :output (friendly-error error) :error? true) (render!))))
       (catch :default error
         (swap! state assoc :output (str "Emmy initialization failed.\n\n" (friendly-error error)) :error? true)
         (render!))))
