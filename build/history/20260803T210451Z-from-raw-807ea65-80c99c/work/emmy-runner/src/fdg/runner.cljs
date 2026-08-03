(ns fdg.runner
  (:require [clojure.string :as str]
            ["@codemirror/autocomplete" :refer [autocompletion completionKeymap]]
            ["@codemirror/commands" :refer [defaultKeymap history historyKeymap indentWithTab]]
            ["@codemirror/language" :refer [HighlightStyle syntaxHighlighting]]
            ["@codemirror/state" :refer [EditorState]]
            ["@codemirror/view" :refer
             [EditorView drawSelection dropCursor highlightActiveLine highlightSpecialChars hoverTooltip keymap
              lineNumbers tooltips]]
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
         :inspected-symbol nil,
         :namespace-names [],
         :busy? false}))

(defonce editor (atom nil))

(defonce evaluator (atom nil))
(defonce worker-ready? (atom false))
(defonce next-request-id (atom 0))
(defonce pending-requests (atom {}))

(defn start-worker! []
  (when-let [old-worker @evaluator] (.terminate old-worker))
  (reset! worker-ready? false)
  (let [worker (js/Worker. "worker/main.js" #js {:type "module"})
        startup-timeout
        (js/setTimeout
          (fn []
            (when-not @worker-ready?
              (.terminate worker)
              (doseq [[_ {:keys [reject]}] @pending-requests]
                (reject (js/Error. "The evaluation worker did not start within 30 seconds.")))
              (reset! pending-requests {})))
          30000)]
    (set! (.-onmessage worker)
          (fn [event]
            (when-not @worker-ready?
              (reset! worker-ready? true)
              (js/clearTimeout startup-timeout))
            (let [{:keys [id ok result message blockId]}
                  (js->clj (.-data event) :keywordize-keys true)]
              (when-let [{:keys [resolve reject]} (get @pending-requests id)]
                (swap! pending-requests dissoc id)
                (if ok
                  (resolve result)
                  (let [error (js/Error. message)]
                    (when blockId (aset error "fdgBlockId" blockId))
                    (reject error)))))))
    (set! (.-onerror worker)
          (fn [event]
            (doseq [[_ {:keys [reject]}] @pending-requests]
              (reject (js/Error. (or (.-message event) "Evaluation worker failed."))))
            (reset! pending-requests {})))
    (reset! evaluator worker)))

(defn worker-call [op payload]
  (js/Promise.
    (fn [resolve reject]
      (let [id (swap! next-request-id inc)]
        (swap! pending-requests assoc id {:resolve resolve :reject reject})
        (.postMessage @evaluator (clj->js {:id id :op op :payload payload}))))))

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

(defn inspect-symbol [token]
  (if (seq token) (worker-call "inspect" {:token token}) (js/Promise.resolve nil)))

(defn namespace-names [] (:namespace-names @state))

(defn namespace-entries [namespace-name]
  (worker-call "namespace" {:namespace namespace-name}))

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

(defn inspect-token! [token]
  (-> (inspect-symbol token)
      (.then (fn [info]
               (swap! state assoc :inspected-symbol info)
               (render-symbol-detail!)))
      (.catch (fn [_] nil))))

(defn render-namespace-vars!
  []
  (when-let [target (.getElementById js/document "namespace-vars")]
    (let [namespace-name (:inspector-ns @state)]
      (set! (.-textContent target) "Loading…")
      (-> (namespace-entries namespace-name)
          (.then (fn [all-entries]
                   (when (and (.-isConnected target) (= namespace-name (:inspector-ns @state)))
                     (let [filter-text (str/lower-case (:inspector-filter @state))
                           entries (->> all-entries
                                        (filter #(or (:show-unbound? @state) (not= "unbound" (:kind %))))
                                        (filter #(str/includes? (str/lower-case (:name %)) filter-text)))]
                       (set! (.-innerHTML target) "")
                       (if (seq entries)
                         (doseq [info entries]
                           (.append target
                                    (el "button"
                                        {:class (str "var-row kind-" (:kind info)),
                                         :onclick #(do (swap! state assoc :inspected-symbol info)
                                                       (render-symbol-detail!))}
                                        (el "code" {} (:name info))
                                        (el "span" {} (str (:kind info)
                                                           (when (:shape info) (str " · " (:shape info))))))))
                         (.append target (el "p" {:class "status"} "No matching public vars.")))))))
          (.catch (fn [_] (when (.-isConnected target) (set! (.-textContent target) "Inspector unavailable."))))))))

(defn completion-info-position
  "Put completion documentation in a bounded viewport panel. CodeMirror's
   default side-by-side placement is elegant when there is room, but this app's
   three-column layout can leave the right edge outside the visible window."
  [_view list _option info space]
  (let [left-bound (+ (.-left space) 16)
        right-bound (- (.-right space) 16)
        width (min 520 (- right-bound left-bound))
        left (max left-bound (min (.-left list) (- right-bound width)))
        below (+ (.-bottom list) 8)
        top (if (<= (+ below (.-height info)) (.-bottom space))
              below
              (max (+ (.-top space) 16) (- (.-top list) (.-height info) 8)))]
    #js {:style (str "position: fixed; left: " left "px; top: " top
                     "px; width: " width "px; max-width: " width "px;")
         :class "cm-completionInfo-viewport"}))

(defn clojure-completions
  [^js completion-context]
  (let [word (.matchBefore completion-context #"[A-Za-z0-9*+!_?.<>=/$%&:#'-]*")]
    (when (or (not= (.-from word) (.-to word)) (.-explicit completion-context))
      (-> (js/Promise.all
            (into-array (map namespace-entries ["fdg.session" "emmy.env" "fdg.compat"])))
          (.then (fn [groups]
                   (let [entries (->> (array-seq groups)
                                      (mapcat identity)
                                      (reduce (fn [by-name entry]
                                                (if (contains? by-name (:name entry))
                                                  by-name
                                                  (assoc by-name (:name entry) entry))) {})
                                      vals
                                      (sort-by :name))]
                     #js {:from (.-from word),
                          :validFor #"[A-Za-z0-9*+!_?.<>=/$%&:#'-]*",
                          :options (into-array
                                     (for [info entries]
                                       #js {:label (:name info),
                                            :type (if (= "function" (:kind info)) "function" "variable"),
                                            :detail (str (:namespace info)
                                                         (when (:arglists info) (str " " (:arglists info)))),
                                            :info (or (:doc info)
                                                      (str (:kind info)
                                                           (when (:shape info)
                                                             (str " · shape " (:shape info)))))}))})))))))

(def symbol-hover
  (hoverTooltip (fn [view position side]
                  (let [doc (.. view -state -doc toString)
                        {:keys [from to text]} (symbol-range doc position)]
                    (when (and text
                               (not (or (and (= position from) (neg? side))
                                        (and (= position to) (pos? side)))))
                      (-> (inspect-symbol text)
                          (.then (fn [info]
                                   (when info
                                     #js {:pos from,
                                          :end to,
                                          :above true,
                                          :create (fn [_]
                                                    (let [dom (el "div" {:class "symbol-hover"})]
                                                      (.append dom (detail-node info true))
                                                      #js {:dom dom}))})))))))
                #js {:hoverTime 350}))

(defn editor-extensions
  []
  (into-array
    (concat (array-seq default_extensions)
            [(lineNumbers) (highlightSpecialChars) (syntaxHighlighting editor-highlight-style) (history) (drawSelection)
             (dropCursor) (highlightActiveLine) symbol-hover
             (autocompletion #js {:override #js [clojure-completions]
                                  :positionInfo completion-info-position})
             ;; Keep the editor usable for the book's very long symbolic forms,
             ;; and place transient UI at the document level so the editor's
             ;; rounded, scrolling frame cannot clip it.
             (.-lineWrapping EditorView)
             (tooltips #js {:parent (.-body js/document) :position "fixed"})
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
  (let [{:keys [error? busy? output]} @state]
    (when-let [target (.getElementById js/document "result")]
      (set! (.-className target) (if error? "error" ""))
      (set! (.-textContent target) output))
    (when-let [status (.getElementById js/document "result-state")]
      (set! (.-className status) (str "result-state " (cond error? "failed" busy? "running" :else "ready")))
      (set! (.-textContent status) (cond error? "Error" busy? "Running" :else "SCI output")))
    (doseq [button (array-seq (.querySelectorAll js/document ".actions button"))]
      (set! (.-disabled button) busy?))))

(defn evaluate!
  [code]
  (swap! state assoc :busy? true :output "Running editor in the evaluation worker…" :error? false)
  (render-result!)
  (-> (worker-call "eval" {:block (selected-block) :code code})
      (.then (fn [{:keys [value namespaces]}]
               (swap! state assoc :busy? false :output value :namespace-names namespaces :error? false)
               (render-result!)
               (render-symbol-detail!)
               (render-namespace-vars!)))
      (.catch (fn [error]
                (swap! state assoc :busy? false :output (friendly-error error) :error? true)
                (render-result!)))))

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
      (do (swap! state assoc :busy? true :output "Preparing blocks for the evaluation worker…" :error? false)
          (render-result!)
          (-> (js/Promise.all
                (into-array
                  (map (fn [block]
                         (-> (if (= (:id block) (:selected @state))
                               (js/Promise.resolve (:code @state))
                               (fetch-text (:codePath block)))
                             (.then (fn [code] {:block block :code code}))))
                       blocks)))
              (.then (fn [prepared]
                       (swap! state assoc :output "Running in the evaluation worker…")
                       (render-result!)
                       (worker-call "run" {:chapter (:chapter selected)
                                            :blocks (vec (array-seq prepared))})))
              (.then (fn [{:keys [captured? value namespaces]}]
                       (swap! state assoc
                         :busy? false
                         :namespace-names namespaces
                         :output (cond
                                   (not (:executable selected))
                                   (str "Successfully ran the executable blocks through " (:id selected)
                                        ".\n\nThe selected block is cached Scheme output, not executable ClojureScript.")

                                   (not captured?)
                                   (str "Successfully ran through " (:id selected) ".\n\nNo output was produced.")

                                   :else
                                   (str "Successfully ran through " (:id selected)
                                        ".\n\nResult:\n" value))
                         :error? false)
                       (render-result!)
                       (render-symbol-detail!)
                       (render-namespace-vars!)))
              (.catch (fn [error]
                        (swap! state assoc :busy? false :output (friendly-error error) :error? true)
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
       (let [{:keys [manifest chapter selected code output error? busy?]} @state
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
                       (cond-> {:class "primary", :onclick run-through!}
                         busy? (assoc :disabled true))
                       (el "span" {:aria-hidden "true"} "▶")
                       "Run through this block")
                   (el "button"
                       (cond-> {:class "secondary", :onclick #(evaluate! (:code @state))}
                         busy? (assoc :disabled true))
                       "Run editor only")
                   (el "button"
                       (cond-> {:class "ghost",
                                :onclick #(-> (worker-call "reset" {:chapter (:chapter @state)})
                                              (.then (fn [{:keys [namespaces]}]
                                                       (swap! state assoc
                                                              :namespace-names namespaces
                                                              :output "Context reset."
                                                              :error? false
                                                              :inspected-symbol nil)
                                                       (render-result!)
                                                       (render-symbol-detail!)
                                                       (render-namespace-vars!))))}
                         busy? (assoc :disabled true))
                       "Reset context"))
               (el "div"
                   {:class "section-heading"}
                   (el "h3" {} "Result")
                   (el "span"
                       {:id "result-state",
                        :class (str "result-state " (cond error? "failed" busy? "running" :else "ready"))}
                       (cond error? "Error" busy? "Running" :else "SCI output")))
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
                      (when-not first-block
                        (throw (js/Error. "The generated Emmy manifest is empty.")))
                      (swap! state assoc :manifest manifest :chapter (:chapter first-block))
                      (start-worker!)
                      (let [initialization (worker-call "init" {:manifest manifest
                                                                :chapter (:chapter first-block)})]
                        ;; Render immediately while the larger evaluator bundle initializes off-thread.
                        (select-block! first-block)
                        (-> initialization
                            (.then (fn [{:keys [namespaces]}]
                                     (swap! state assoc :namespace-names namespaces)
                                     (render-namespace-vars!))))))))
           (.catch (fn [error] (swap! state assoc :output (friendly-error error) :error? true) (render!))))
       (catch :default error
         (swap! state assoc :output (str "Emmy initialization failed.\n\n" (friendly-error error)) :error? true)
         (render!))))
