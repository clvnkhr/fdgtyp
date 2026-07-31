(ns fdg.worker
  (:require [clojure.string :as str]
            [emmy.sci :as emmy-sci]
            [fdg.compat]
            [fdg.output :as output]
            [sci.core :as sci]
            [sci.impl.vars :as sci-vars]))

(defonce context (atom nil))
(defonce session-definitions (atom #{}))
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
  (reset! context (new-context)))

(defn prepare-block! [block]
  (doseq [definition (:definitions block)]
    (when-not (contains? @session-definitions definition)
      (eval-session! @context (str "(ns-unmap 'fdg.session '" definition ")")))
    (swap! session-definitions conj definition))
  (when (seq (:definitions block))
    (eval-session! @context (str "(declare " (str/join " " (:definitions block)) ")"))))

(defn value-kind [value]
  (cond (nil? value) "nil" (fn? value) "function" (boolean? value) "boolean"
        (number? value) "number" (string? value) "string" (keyword? value) "keyword"
        (symbol? value) "symbol" (map? value) "map" (vector? value) "vector"
        (set? value) "set" (sequential? value) "sequence" :else "object"))

(defn collection-shape [value]
  (when (coll? value)
    (let [bounded-size (if (sequential? value) (bounded-count 1001 value) (count value))
          size (if (> bounded-size 1000) "1000+" bounded-size)
          child (when (and (sequential? value) (seq value)) (collection-shape (first value)))]
      (str size (when child (str " × " child))))))

(defn safe-preview [value]
  (try (let [rendered (if (fn? value) "<function>" (output/pr-str-native value))]
         (if (> (count rendered) 600) (str (subs rendered 0 600) "…") rendered))
       (catch :default _ "<value cannot be printed safely>")))

(defn describe-var [sci-var]
  (let [metadata (meta sci-var)
        bound? (sci-vars/hasRoot sci-var)
        value (when bound? (try @sci-var (catch :default _ nil)))
        kind (if bound? (value-kind value) "unbound")]
    {:name (str (:name metadata)) :namespace (str (:ns metadata))
     :qualified-name (str (:ns metadata) "/" (:name metadata))
     :kind kind :shape (when bound? (collection-shape value))
     :arglists (some-> (:arglists metadata) pr-str) :doc (:doc metadata)
     :macro? (true? (:macro metadata)) :dynamic? (true? (:dynamic metadata))
     :preview (if bound? (safe-preview value) "<declared, but not defined yet>")}))

(defn inspect-symbol [token]
  (when (and @context (seq token))
    (when-let [resolved (sci/resolve @context (symbol token))] (describe-var resolved))))

(defn namespace-names []
  (->> (sci/all-ns @context) (keep #(some-> % meta :name str)) distinct sort vec))

(defn namespace-entries [namespace-name]
  (try (->> (eval-session! @context (str "(ns-publics '" namespace-name ")"))
            vals (map describe-var) (sort-by :name) vec)
       (catch :default _ [])))

(defn run-blocks! [blocks]
  (reset-context!)
  (reduce (fn [_ {:keys [block code]}]
            (if (or (:backgroundSetup block) (not (:executable block)))
              nil
              (try (prepare-block! block)
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
             (prepare-block! block)
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
