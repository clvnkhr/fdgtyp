(ns fdg.smoke
  (:require [clojure.string]
            [emmy.sci :as emmy-sci]
            [fdg.compat]
            [fdg.fdg-oracle :as fdg-oracle]
            [sci.core :as sci]))

(defn eval-session! [context code]
  (sci/eval-string* context (str "(in-ns 'fdg.session)\n" code)))

(def captured-result-pattern #"\n;; =>[\s\S]*$")

(defn code-without-captured-result [code]
  (clojure.string/replace code captured-result-pattern ""))

(def max-captured-result-length 20000)
(def captured-result-preview-length 200)

(defn captured-result-comment [value]
  (let [rendered (pr-str value)
        rendered (if (> (count rendered) max-captured-result-length)
                   (str (subs rendered 0 captured-result-preview-length)
                        "... <result truncated: " (count rendered)
                        " characters total; inspect in the web runner>")
                   rendered)
        lines (clojure.string/split-lines rendered)]
    (clojure.string/join "\n"
                         (map-indexed #(str (if (zero? %1) ";; => " ";;    ") %2)
                                      lines))))

(defn stage-result! [pending block code value]
  (let [clean-code (code-without-captured-result code)
        captured (str (clojure.string/trimr clean-code)
                      "\n" (captured-result-comment value) "\n")
        ordinal (.padStart (str (:ordinal block)) 3 "0")
        editable (str "../emmy/blocks/" (:chapter block) "/" ordinal ".cljs")
        served (str "public/" (:codePath block))]
    (swap! pending assoc editable captured served captured)))

(defn stage-cleared-result! [pending block stored-code]
  (let [clean-code (code-without-captured-result stored-code)]
    (when (not= clean-code stored-code)
      (let [ordinal (.padStart (str (:ordinal block)) 3 "0")
            editable (str "../emmy/blocks/" (:chapter block) "/" ordinal ".cljs")
            served (str "public/" (:codePath block))
            clean-code (str (clojure.string/trimr clean-code) "\n")]
        (swap! pending assoc editable clean-code served clean-code)))))

(defn prepare-block! [context definitions block]
  (doseq [definition (:definitions block)]
    (when-not (contains? @definitions definition)
      (eval-session! context (str "(ns-unmap 'fdg.session '" definition ")")))
    (swap! definitions conj definition)))

(defn make-context [book-definitions]
  (let [compat-ns (sci/copy-ns fdg.compat (sci/create-ns 'fdg.compat))
        config (update emmy-sci/config :namespaces assoc
                       'fdg.compat compat-ns)
        context (sci/init config)
        referred-names (into #{} (map (comp name key))
                             (concat (get emmy-sci/namespaces 'emmy.env) compat-ns))
        local-definitions (remove #(contains? referred-names %) book-definitions)
        emmy-symbols (->> (keys (get emmy-sci/namespaces 'emmy.env))
                          (map name)
                          sort
                          (clojure.string/join " "))
        setup (str "(ns fdg.session "
                   "(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "
                   "(:require [emmy.env :refer [" emmy-symbols "]] "
                   "[fdg.compat :refer :all]))\n"
                   "(declare " (clojure.string/join " " (sort local-definitions)) ")")]
    (sci/eval-string* context setup)
    context))

(defn main []
  (let [fs (js/require "fs")
        argv (js->clj (.-argv js/process))
        capture? (some #{"--capture-results"} argv)
        verbose? (some #{"--verbose"} argv)
        chapter-arg (some #(when (clojure.string/starts-with? % "--chapter=") %)
                          argv)
        selected-chapter (some-> chapter-arg (clojure.string/replace "--chapter=" ""))
        captured-count (atom 0)
        pending-writes (atom {})
        manifest (->> (js->clj
                        (js/JSON.parse
                          (.readFileSync fs "public/generated/manifest.json" "utf8"))
                        :keywordize-keys true)
                      (filter #(or (nil? selected-chapter)
                                   (= selected-chapter (:chapter %)))))
        result-context (make-context #{})
        result (eval-session! result-context "(square 3)")]
    (when-not (= 9 result)
      (throw (js/Error. (str "Expected 9 from (square 3), got " result))))
    (doseq [chapter (distinct (map :chapter manifest))
            :let [blocks (filter #(= chapter (:chapter %)) manifest)]]
      (let [book-definitions (into #{} (mapcat :definitions blocks))
            context (make-context book-definitions)
            definitions (atom #{})]
        (doseq [block (sort-by :ordinal blocks)
                :when (not (:backgroundSetup block))]
          (try
            (when verbose? (println (str "Running " (:id block))))
            (prepare-block! context definitions block)
            (let [stored-code (.readFileSync fs (str "public/" (:codePath block)) "utf8")
                  code (code-without-captured-result stored-code)
                  result (eval-session! context code)]
              (when (and capture? (:capturesResult block))
                (stage-result! pending-writes block code result)
                (swap! captured-count inc))
              (when (and capture? (not (:capturesResult block)))
                (stage-cleared-result! pending-writes block stored-code))
              (when (contains? fdg-oracle/expected-frozen-results (:id block))
                (fdg-oracle/assert-result!
                 (:id block)
                 (eval-session! context (str "(freeze (simplify (do " code ")))")))))
            (catch :default error
              (throw (js/Error. (str "Stopped at " (:id block) ": " (.-message error)))))))))
    (when capture?
      (doseq [[file content] @pending-writes]
        (.writeFileSync fs file content "utf8")))
    (println (str "Emmy SCI full-manifest test passed; "
                  (count fdg-oracle/expected-frozen-results)
                  " results matched Emmy's FDG regression suite."
                  (when capture?
                    (str " Captured " @captured-count " expression results."))))))
