(ns fdg.runner
  (:require [cljs.reader :as reader]
            [clojure.string :as str]
            [emmy.sci :as emmy-sci]
            [fdg.compat]
            [sci.core :as sci]))

(defonce state (atom {:manifest [] :chapter nil :selected nil :code "" :output "Ready."}))
(defonce context (atom nil))
(defonce session-definitions (atom #{}))

(defn eval-session! [ctx code]
  (sci/eval-string* ctx (str "(in-ns 'fdg.session)\n" code)))

(defn prepare-block! [ctx block]
  (doseq [definition (:definitions block)]
    (when-not (contains? @session-definitions definition)
      (eval-session! ctx (str "(ns-unmap 'fdg.session '" definition ")")))
    (swap! session-definitions conj definition)))

(defn book-definitions []
  (into #{} (mapcat :definitions (filter #(= (:chapter @state) (:chapter %))
                                          (:manifest @state)))))

(defn new-context []
  (let [compat-ns (sci/copy-ns fdg.compat (sci/create-ns 'fdg.compat))
        config (update emmy-sci/config :namespaces assoc
                       'fdg.compat compat-ns)
        ctx (sci/init config)
        definitions (book-definitions)
        referred-names (into #{} (map (comp name key))
                             (concat (get emmy-sci/namespaces 'emmy.env) compat-ns))
        local-definitions (remove #(contains? referred-names %) definitions)
        emmy-symbols (->> (keys (get emmy-sci/namespaces 'emmy.env))
                          (map name)
                          sort
                          (str/join " "))
        setup (str "(ns fdg.session "
                   "(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "
                   "(:require [emmy.env :refer [" emmy-symbols "]] "
                   "[fdg.compat :refer :all]))\n"
                   "(declare " (str/join " " (sort local-definitions)) ")")]
    (sci/eval-string* ctx setup)
    (when-not (= 9 (eval-session! ctx "(square 3)"))
      (throw (js/Error. "The runner failed to install emmy.env into fdg.session")))
    ctx))

(defn reset-context! []
  (reset! session-definitions #{})
  (reset! context (new-context)))

(defn el [tag attrs & children]
  (let [node (.createElement js/document tag)]
    (doseq [[key value] attrs]
      (case key
        :class (set! (.-className node) value)
        :value (set! (.-value node) value)
        :onclick (.addEventListener node "click" value)
        :onchange (.addEventListener node "change" value)
        :selected (set! (.-selected node) value)
        (.setAttribute node (name key) value)))
    (doseq [child (remove nil? children)]
      (.append node (if (string? child) (.createTextNode js/document child) child)))
    node))

(defn fetch-text [url]
  (-> (js/fetch url)
      (.then (fn [response]
               (if (.-ok response)
                 (.text response)
                 (throw (js/Error. (str "HTTP " (.-status response) " for " url))))))))

(defn selected-block []
  (some #(when (= (:id %) (:selected @state)) %) (:manifest @state)))

(declare render!)

(defn select-block! [block]
  (-> (fetch-text (:codePath block))
      (.then (fn [code]
               (swap! state assoc :selected (:id block) :chapter (:chapter block) :code code :output "Ready.")
               (render!)))
      (.catch (fn [error]
                (swap! state assoc :output (str error))
                (render!)))))

(defn format-result [value]
  (if (nil? value) "nil" (pr-str value)))

(defn friendly-error [error]
  (let [message (-> (or (.-message error) (str error))
                    (str/replace #"^Error:\s*" "")
                    (str/replace #"^([^\n]+)\n[\s\S]*" "$1"))
        block-id (aget error "fdgBlockId")
        hint (cond
               (re-find #"(?i)(resolve|unbound|no such namespace)" message)
               "This usually means this port uses a missing definition or an scmutils name that still needs an Emmy equivalent."

               (re-find #"(?i)(parse|EOF|delimiter|reader)" message)
               "This block is not valid ClojureScript yet; compare it with the neighboring .scm file."

               :else
               "Compare the .cljs block with its .scm source and the surrounding book text.")]
    (str (when block-id (str "Stopped at " block-id ".\n\n"))
         message "\n\n" hint)))

(defn evaluate! [code]
  (try
    (prepare-block! @context (selected-block))
    (let [value (eval-session! @context code)]
      (swap! state assoc :output (format-result value) :error? false))
    (catch :default error
      (swap! state assoc :output (friendly-error error) :error? true)))
  (render!))

(defn evaluate-block-promise [promise block]
  (if (:backgroundSetup block)
    promise
    (.then promise
           (fn [_]
             (let [code-promise (if (= (:id block) (:selected @state))
                                  (js/Promise.resolve (:code @state))
                                  (fetch-text (:codePath block)))]
               (.then code-promise
                      (fn [code]
                        (try
                          (prepare-block! @context block)
                          {:block block
                           :value (eval-session! @context code)}
                          (catch :default error
                            (aset error "fdgBlockId" (:id block))
                            (throw error))))))))))

(defn run-through! []
  (let [selected (selected-block)
        blocks (->> (:manifest @state)
                    (filter #(= (:chapter %) (:chapter selected)))
                    (take-while #(<= (:ordinal %) (:ordinal selected))))]
    (if (:backgroundSetup selected)
      (do
        (swap! state assoc
               :output "This setup is installed by the runner before examples execute. It is shown as the ClojureScript replacement for scmutils's load block and is not evaluated as an example."
               :error? false)
        (render!))
      (do
        (reset-context!)
        (-> (reduce evaluate-block-promise (js/Promise.resolve nil) blocks)
            (.then (fn [{:keys [block value]}]
                     (swap! state assoc
                            :output (if (nil? value)
                                      (str "Successfully ran through " (:id block)
                                           ".\n\nNo output was produced.")
                                      (str "Successfully ran through " (:id block)
                                           ".\n\nResult:\n" (format-result value)))
                            :error? false)
                     (render!)))
            (.catch (fn [error]
                      (swap! state assoc :output (friendly-error error) :error? true)
                      (render!))))))))

(defn render! []
  (when-let [root (.getElementById js/document "app")]
    (set! (.-innerHTML root) "")
    (let [{:keys [manifest chapter selected code output error?]} @state
          chapters (distinct (map :chapter manifest))
          chapter-blocks (filter #(= chapter (:chapter %)) manifest)
          textarea (el "textarea" {:spellcheck "false"} code)]
      (.addEventListener textarea "input" #(swap! state assoc :code (.. % -target -value)))
      (.append root
               (el "aside" {}
                   (el "h1" {} "FDG → Emmy")
                   (apply el "select" {:onchange #(let [next (.. % -target -value)
                                                        first-block (first (filter (fn [b] (= next (:chapter b))) manifest))]
                                                    (select-block! first-block))}
                          (map #(el "option" {:value % :selected (= % chapter)} %) chapters))
                   (el "p" {:class "status"} (str (count chapter-blocks) " blocks"))
                   (apply el "div" {:class "blocks"}
                          (map (fn [block]
                                 (el "button"
                                     {:class (str "block" (when (= selected (:id block)) " active"))
                                      :onclick #(select-block! block)}
                                     (str (:ordinal block) ". " (:heading block))))
                               chapter-blocks)))
               (el "article" {}
                   (el "h2" {} (or selected "No block selected"))
                   (when-let [block (selected-block)]
                     (el "p" {:class "status"}
                         (str (:sourcePath block) ":" (:orgLine block)
                              (when (:backgroundSetup block)
                                " · installed automatically by the runner"))))
                   textarea
                   (el "div" {:class "actions"}
                       (el "button" {:onclick run-through!} "Run through this block")
                       (el "button" {:onclick #(evaluate! (:code @state))} "Run editor only")
                       (el "button" {:onclick #(do (reset-context!)
                                                   (swap! state assoc :output "Context reset." :error? false)
                                                   (render!))} "Reset context"))
                   (el "h3" {} "Result")
                   (el "pre" {:class (when error? "error")} output))))))

(defn ^:export init! []
  (try
    (-> (js/fetch "generated/manifest.json")
        (.then #(.json %))
        (.then (fn [data]
                 (let [manifest (js->clj data :keywordize-keys true)
                       first-block (first manifest)]
                   (swap! state assoc :manifest manifest :chapter (:chapter first-block))
                   (reset-context!)
                   (select-block! first-block))))
        (.catch (fn [error]
                  (swap! state assoc :output (friendly-error error) :error? true)
                  (render!))))
    (catch :default error
      (swap! state assoc :output (str "Emmy initialization failed.\n\n" (friendly-error error)) :error? true)
      (render!))))
