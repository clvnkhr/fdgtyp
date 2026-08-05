(ns fdg.worker
  (:require [clojure.string :as str]
            [emmy.sci :as emmy-sci]
            [fdg.compat]
            [fdg.output :as output]
            [sci.core :as sci]
            [sci.impl.vars :as sci-vars]))

(defonce context (atom nil))
(defonce session-definitions (atom #{}))
(defonce definition-sources (atom {}))
(defonce manifest (atom []))
(defonce chapter (atom nil))

(defn eval-session! [ctx code] (sci/eval-string* ctx (str "(in-ns 'fdg.session)\n" code)))

(defn book-definitions []
  (into #{} (mapcat :definitions (filter #(= @chapter (:chapter %)) @manifest))))

(defn new-context []
  (let [compat-ns (sci/copy-ns fdg.compat (sci/create-ns 'fdg.compat))
        config (update emmy-sci/config :namespaces assoc 'fdg.compat compat-ns)
        ctx (sci/init config)
        referred-names (into #{} (map (comp name key))
                             (concat (get emmy-sci/namespaces 'emmy.env) compat-ns))
        local-definitions (remove #(contains? referred-names %) (book-definitions))
        emmy-symbols (->> (keys (get emmy-sci/namespaces 'emmy.env))
                          (map name) sort (str/join " "))
        setup (str "(ns fdg.session "
                   "(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "
                   "(:require [emmy.env :refer [" emmy-symbols "]] "
                   "[fdg.compat :refer :all]))\n"
                   "(declare " (str/join " " (sort local-definitions)) ")")]
    (sci/eval-string* ctx setup)
    ctx))

(defn reset-context! []
  (reset! session-definitions #{})
  (reset! definition-sources {})
  (reset! context (new-context)))

(defn top-level-forms
  "Return balanced top-level parenthesized forms, ignoring strings and comments."
  [source]
  (let [source (or source "")
        length (count source)]
    (loop [index 0
           depth 0
           start nil
           in-string? false
           escaped? false
           in-comment? false
           forms []]
      (if (>= index length)
        forms
        (let [character (nth source index)]
          (cond
            in-comment?
            (recur (inc index) depth start in-string? escaped?
                   (not= character \newline) forms)

            in-string?
            (cond
              escaped? (recur (inc index) depth start in-string? false in-comment? forms)
              (= character \") (recur (inc index) depth start false false in-comment? forms)
              (= character \\) (recur (inc index) depth start in-string? true in-comment? forms)
              :else (recur (inc index) depth start in-string? escaped? in-comment? forms))

            (= character \;) (recur (inc index) depth start in-string? escaped? true forms)
            (= character \") (recur (inc index) depth start true false in-comment? forms)
            (= character \() (recur (inc index) (inc depth) (or start index)
                                      in-string? escaped? in-comment? forms)
            (= character \)) (if (= depth 1)
                              (recur (inc index) 0 nil in-string? escaped? in-comment?
                                     (conj forms (subs source start (inc index))))
                              (recur (inc index) (max 0 (dec depth)) start
                                     in-string? escaped? in-comment? forms))
            :else (recur (inc index) depth start in-string? escaped? in-comment? forms)))))))

(defn definition-form-name
  [source]
  (when-let [match (re-find #"^\s*\((defn?|defn-|defonce|defmacro)\s+([^\s\[\]()]+)" source)]
    (nth match 2)))

(defn discovered-definition-sources
  [code]
  (into {}
        (keep (fn [source]
                (when-let [name (definition-form-name source)]
                  [name source])))
        (top-level-forms code)))

(def max-definition-length 12000)

(defn bounded-definition-source
  [source]
  (when (string? source)
    (if (> (count source) max-definition-length)
      (str (subs source 0 max-definition-length)
           "\n;; … <definition truncated: " (count source) " characters total>")
      source)))

(defn definition-source
  "Find the displayed source form responsible for a session definition."
  [block definition code]
  (or (some (fn [form]
              (let [source (:code form)]
                (when (and (string? source)
                           (= definition (definition-form-name source)))
                  source)))
            (:forms block))
      (when (seq code) code)))

(defn record-definition-sources!
  [block code]
  (let [discovered (discovered-definition-sources code)
        definitions (distinct (concat (:definitions block) (keys discovered)))]
    (doseq [definition definitions]
      (when-let [source (definition-source block definition code)]
        (swap! definition-sources assoc definition
               (bounded-definition-source (or (get discovered definition) source)))))
    definitions))

(defn prepare-block! [block code]
  (let [definitions (record-definition-sources! block code)]
    (doseq [definition definitions]
      (when-not (contains? @session-definitions definition)
        (eval-session! @context (str "(ns-unmap 'fdg.session '" definition ")")))
      (swap! session-definitions conj definition))
    (when (seq definitions)
      (eval-session! @context (str "(declare " (str/join " " definitions) ")")))))

(defn value-kind [value]
  (cond (nil? value) "nil" (fn? value) "function" (boolean? value) "boolean"
        (number? value) "number" (string? value) "string" (keyword? value) "keyword"
        (symbol? value) "symbol" (map? value) "map" (vector? value) "vector"
        (set? value) "set" (sequential? value) "sequence" :else "object"))

(defn safe-constructor-name
  [value]
  (try
    (let [constructor (.-constructor value)
          raw-name (.-name constructor)
          name (or (some-> (and (string? raw-name)
                                (re-find #"^function\s+([^\s(]+)" raw-name))
                           second)
                    raw-name)]
      (when (and (string? name)
                 (seq name)
                 (not (contains? #{"Object" "Function"} name)))
        name))
    (catch :default _ nil)))

(defn runtime-type
  "Return a stable, human-readable type without forcing an object's printer."
  [value]
  (let [kind (value-kind value)]
    (if (= kind "object")
      (or (safe-constructor-name value)
          (try (let [type-name (str (type value))]
                 (if (re-find #"^function\s+(Object|Function)\b" type-name)
                   kind
                   type-name))
               (catch :default _ nil))
          kind)
      kind)))

(defn collection-shape [value]
  (when (coll? value)
    (let [bounded-size (if (sequential? value) (bounded-count 1001 value) (count value))
          size (if (> bounded-size 1000) "1000+" bounded-size)
          child (when (and (sequential? value) (seq value)) (collection-shape (first value)))
          keys-preview (when (map? value)
                         (->> (keys value)
                              (take 8)
                              (map pr-str)
                              (str/join ", ")))]
      (str size
           (when child (str " × " child))
           (when (seq keys-preview) (str " · keys: " keys-preview))))))

(defn object-shape
  [value]
  (when (= "object" (value-kind value))
    (try
      (let [keys (->> (array-seq (js/Object.keys value)) sort)
            visible (take 12 keys)
            remaining (- (count keys) (count visible))]
        (when (seq visible)
          (str "fields: " (str/join ", " visible)
               (when (pos? remaining) (str ", … +" remaining)))))
      (catch :default _ nil))))

(defn value-shape
  [value]
  (or (collection-shape value) (object-shape value)))

(defn safe-preview [value]
  (try (let [rendered (if (fn? value) "<function>" (output/pr-str-native value))]
         (if (> (count rendered) 600) (str (subs rendered 0 600) "…") rendered))
       (catch :default _ "<value cannot be printed safely>")))

(defn describe-var [sci-var]
  (let [metadata (meta sci-var)
        bound? (sci-vars/hasRoot sci-var)
        value (when bound? (try @sci-var (catch :default _ nil)))
        kind (if bound? (value-kind value) "unbound")
        name (str (:name metadata))
        namespace (str (:ns metadata))]
    {:name name :namespace namespace
     :qualified-name (str namespace "/" name)
     :kind kind :type (when bound? (runtime-type value))
     :shape (when bound? (value-shape value))
     :arglists (some-> (:arglists metadata) pr-str) :doc (:doc metadata)
     :macro? (true? (:macro metadata)) :dynamic? (true? (:dynamic metadata))
     :definition (when (= namespace "fdg.session") (get @definition-sources name))
     :preview (if bound? (safe-preview value) "<declared, but not defined yet>")}))

(def inspection-namespaces
  ;; Keep this in the same precedence order as the completion list: names
  ;; defined by the current book example first, then Emmy, then our shims.
  ["fdg.session" "emmy.env" "fdg.compat"])

(defn inspect-symbol [token]
  (when (and @context (seq token))
    (let [sym (symbol token)
          resolved (or (sci/resolve @context sym)
                       ;; `sci/resolve` does not consistently follow a
                       ;; namespace's :refer mappings when invoked directly
                       ;; from the host. Try the same public namespaces that
                       ;; autocomplete queries, so hover has identical cover.
                       (when-not (namespace sym)
                         (some #(sci/resolve @context (symbol % token))
                               inspection-namespaces)))]
      (some-> resolved describe-var))))

(defn namespace-names []
  (->> (sci/all-ns @context) (keep #(some-> % meta :name str)) distinct sort vec))

(defn namespace-entries [namespace-name]
  (try (->> (eval-session! @context (str "(ns-publics '" namespace-name ")"))
            vals (map describe-var) (sort-by :name) vec)
       (catch :default _ [])))

(defn run-blocks! [blocks]
  (reset-context!)
  (reduce (fn [_ {:keys [block code selected?]}]
            (if (or (:backgroundSetup block)
                    (not (:executable block))
                    ;; Only the selected block is an example invocation. Prior
                    ;; blocks are replayed solely when they install definitions.
                    (and (not selected?) (every? :capturesResult (:forms block))))
              nil
              (try (prepare-block! block code)
                   {:captured? (:capturesResult block)
                    :value (output/pr-str-native (eval-session! @context code))}
                   (catch :default error
                     (aset error "fdgBlockId" (:id block))
                     (throw error)))))
          nil blocks))

(defn dispatch! [{:keys [op payload]}]
  (case op
    "init" (do (reset! manifest (:manifest payload)) (reset! chapter (:chapter payload))
               (reset-context!) {:namespaces (namespace-names)})
    "reset" (do (reset! chapter (:chapter payload)) (reset-context!) {:namespaces (namespace-names)})
    "run" (do (reset! chapter (:chapter payload))
              (assoc (or (run-blocks! (:blocks payload)) {}) :namespaces (namespace-names)))
    "eval" (let [{:keys [block code]} payload]
             (prepare-block! block code)
             {:value (output/pr-str-native (eval-session! @context code))
              :namespaces (namespace-names)})
    "inspect" (inspect-symbol (:token payload))
    "namespace" (namespace-entries (:namespace payload))
    "namespaces" (namespace-names)
    (throw (js/Error. (str "Unknown worker operation: " op)))))

(defn ^:export init! []
  (set! (.-onmessage js/self)
        (fn [event]
          (let [{:keys [id] :as request} (js->clj (.-data event) :keywordize-keys true)]
            (try (.postMessage js/self (clj->js {:id id :ok true :result (dispatch! request)}))
                 (catch :default error
                   (.postMessage js/self
                                 (clj->js {:id id :ok false
                                           :message (or (.-message error) (str error))
                                           :blockId (aget error "fdgBlockId")}))))))))
