(ns fdg.smoke
  (:require [clojure.string]
            [emmy.sci :as emmy-sci]
            [fdg.compat]
            [fdg.fdg-oracle :as fdg-oracle]
            [fdg.output :as output]
            [goog.string :as gstring]
            [sci.core :as sci]))

(defn eval-session! [context code] (sci/eval-string* context (str "(in-ns 'fdg.session)\n" code)))

(def captured-result-pattern #"(?m)^;; =>[^\n]*(?:\n;;[^\n]*)*\n?")

(defn code-without-captured-result [code] (clojure.string/replace code captured-result-pattern ""))

(def max-captured-result-length 20000)

(def captured-result-preview-length 200)

(defn captured-result-comment
  [value]
  (let [rendered (output/pr-str-native value)
        rendered (if (> (count rendered) max-captured-result-length)
                   (str (subs rendered 0 captured-result-preview-length)
                        "... <result truncated: "
                        (count rendered)
                        " characters total; inspect in the web runner>")
                   rendered)
        lines (clojure.string/split-lines rendered)]
    (clojure.string/join "\n" (map-indexed #(str (if (zero? %1) ";; => " ";;    ") %2) lines))))

(defn locate-form
  "Locate a manifest form in formatted source while allowing the formatter to
  change whitespace between tokens."
  [code form-code cursor]
  (let [pattern (->> (clojure.string/split form-code #"\s+")
                     (map gstring/regExpEscape)
                     (clojure.string/join "\\s+"))
        match (.exec (js/RegExp. pattern) (subs code cursor))]
    (when match
      (let [start (+ cursor (.-index match))]
        [start (+ start (count (aget match 0)))]))))

(defn code-with-form-results
  [code form-results]
  (loop [remaining form-results
         cursor 0
         rendered ""]
    (if-let [[form value] (first remaining)]
      (let [form-code (:code form)
            [start end] (or (locate-form code form-code cursor)
                            (throw (js/Error. (str "Could not locate captured form: " form-code))))]
        (recur (rest remaining)
               end
               (str rendered
                    (subs code cursor end)
                    (when (:capturesResult form) (str "\n" (captured-result-comment value))))))
      (str rendered (subs code cursor)))))

(defn stage-result!
  [pending block code form-results]
  (let [clean-code (code-without-captured-result code)
        captured (str (clojure.string/trimr (code-with-form-results clean-code form-results)) "\n")
        ordinal (.padStart (str (:ordinal block)) 3 "0")
        editable (str "../codeblocks/" (:chapter block) "/" ordinal ".cljs")
        served (str "public/" (:codePath block))]
    (swap! pending assoc editable captured served captured)))

(defn stage-cleared-result!
  [pending block stored-code]
  (let [clean-code (code-without-captured-result stored-code)]
    (when (not= clean-code stored-code)
      (let [ordinal (.padStart (str (:ordinal block)) 3 "0")
            editable (str "../codeblocks/" (:chapter block) "/" ordinal ".cljs")
            served (str "public/" (:codePath block))
            clean-code (str (clojure.string/trimr clean-code) "\n")]
        (swap! pending assoc editable clean-code served clean-code)))))

(defn prepare-block!
  [context definitions block]
  (doseq [definition (:definitions block)]
    (when-not (contains? @definitions definition)
      (eval-session! context (str "(ns-unmap 'fdg.session '" definition ")")))
    (swap! definitions conj definition))
  ;; A displayed Typst block can contain several mutually dependent
  ;; definitions. Restore declarations after unmapping Emmy collisions so
  ;; references to definitions later in the same block resolve correctly.
  (when (seq (:definitions block))
    (eval-session! context (str "(declare " (clojure.string/join " " (:definitions block)) ")"))))

(defn add-block-with-prerequisites [ordered seen blocks-by-id block]
  (if (contains? seen (:id block))
    [ordered seen]
    (let [[ordered seen]
          (reduce
           (fn [[items visited] prerequisite-id]
             (if-let [prerequisite (get blocks-by-id prerequisite-id)]
               (add-block-with-prerequisites items visited blocks-by-id prerequisite)
               (throw (js/Error.
                       (str "Missing prerequisite " prerequisite-id
                            " for " (:id block))))))
           [ordered seen]
           (:prerequisiteIds block))]
      [(conj ordered block) (conj seen (:id block))])))

(defn execution-order [blocks]
  (let [sorted-blocks (sort-by :ordinal blocks)
        blocks-by-id (into {} (map (juxt :id identity) sorted-blocks))]
    (first
     (reduce
      (fn [[ordered seen] block]
        (add-block-with-prerequisites ordered seen blocks-by-id block))
      [[] #{}]
      sorted-blocks))))

(defn make-context
  [book-definitions]
  (let [compat-ns (sci/copy-ns fdg.compat (sci/create-ns 'fdg.compat))
        config (update emmy-sci/config :namespaces assoc 'fdg.compat compat-ns)
        context (sci/init config)
        referred-names (into #{} (map (comp name key)) (concat (get emmy-sci/namespaces 'emmy.env) compat-ns))
        local-definitions (remove #(contains? referred-names %) book-definitions)
        emmy-symbols (->> (keys (get emmy-sci/namespaces 'emmy.env))
                          (map name)
                          sort
                          (clojure.string/join " "))
        setup (str "(ns fdg.session "
                   "(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "
                   "(:require [emmy.env :refer ["
                   emmy-symbols
                   "]] "
                   "[fdg.compat :refer :all]))\n"
                   "(declare "
                   (clojure.string/join " " (sort local-definitions))
                   ")")]
    (sci/eval-string* context setup)
    context))

(defn main
  []
  (let [fs (js/require "fs")
        argv (js->clj (.-argv js/process))
        capture? (some #{"--capture-results"} argv)
        verbose? (some #{"--verbose"} argv)
        chapter-arg (some #(when (clojure.string/starts-with? % "--chapter=") %) argv)
        selected-chapter (some-> chapter-arg
                                 (clojure.string/replace "--chapter=" ""))
        skip-arg (some #(when (clojure.string/starts-with? % "--skip=") %) argv)
        skipped-ids (if skip-arg (set (clojure.string/split (clojure.string/replace skip-arg "--skip=" "") #",")) #{})
        definitions-only-arg (some #(when (clojure.string/starts-with? % "--definitions-only=") %) argv)
        definitions-only-ids
          (if definitions-only-arg
            (set (clojure.string/split (clojure.string/replace definitions-only-arg "--definitions-only=" "") #","))
            #{})
        through-arg (some #(when (clojure.string/starts-with? % "--through=") %) argv)
        through-id (some-> through-arg
                           (clojure.string/replace "--through=" ""))
        captured-count (atom 0)
        failures (atom [])
        pending-writes (atom {})
        manifest
          (->> (js->clj (js/JSON.parse (.readFileSync fs "public/generated/blocks.json" "utf8")) :keywordize-keys true)
               (filter #(or (nil? selected-chapter) (= selected-chapter (:chapter %))))
               (remove #(contains? skipped-ids (:id %)))
               (#(if through-id (take-while (fn [block] (<= (compare (:id block) through-id) 0)) %) %)))
        result-context (make-context #{})
        result (eval-session! result-context "(square 3)")]
    (when-not (= 9 result) (throw (js/Error. (str "Expected 9 from (square 3), got " result))))
    (doseq [chapter (distinct (map :chapter manifest))
            :let [blocks (filter #(= chapter (:chapter %)) manifest)]]
      (let [book-definitions (into #{} (mapcat :definitions blocks))
            context (make-context book-definitions)
            definitions (atom #{})]
        (doseq [block (execution-order blocks)
                :when (and (not (:backgroundSetup block)) (:executable block))]
          (try (when verbose? (println (str "Running " (:id block))))
               (prepare-block! context definitions block)
               (let [stored-code (.readFileSync fs (str "public/" (:codePath block)) "utf8")
                     code (code-without-captured-result stored-code)
                     definitions-only? (contains? definitions-only-ids (:id block))
                     forms (if definitions-only? (remove :capturesResult (:forms block)) (:forms block))
                     form-results (when (seq forms)
                                    (doall (map (fn [form] [form (eval-session! context (:code form))]) forms)))
                     captured-results (filter (comp :capturesResult first) form-results)
                     result (when-not (seq forms) (eval-session! context code))]
                 (when (and capture? (not definitions-only?) (seq captured-results))
                   (stage-result! pending-writes block code form-results)
                   (swap! captured-count + (count captured-results)))
                 (when (and capture? (not definitions-only?) (empty? captured-results))
                   (stage-cleared-result! pending-writes block stored-code))
                 (when (contains? fdg-oracle/expected-frozen-results (:id block))
                   (fdg-oracle/assert-result! (:id block)
                                              (eval-session! context (str "(freeze (simplify (do " code ")))")))))
               (catch :default error
                 (let [failure (str (:id block) ": " (.-message error))]
                   (swap! failures conj failure)
                   (js/console.error (str "EMMY BLOCK FAILED: " failure))))))))
    (when capture? (doseq [[file content] @pending-writes] (.writeFileSync fs file content "utf8")))
    (if (seq @failures)
      (do (js/console.error (str "\nEMMY SMOKE SUMMARY: " (count @failures) " block(s) failed:"))
          (doseq [failure @failures] (js/console.error (str "  - " failure)))
          (js/console.error "The build will continue; inspect these blocks in the web runner.")
          (.exit js/process 1))
      (do (println (str "Emmy SCI full-manifest test passed; " (count fdg-oracle/expected-frozen-results)
                        " results matched Emmy's FDG regression suite."
                          (when capture? (str " Captured " @captured-count " expression results."))))
          ;; Emmy's compiler can leave timers or other handles live after all
          ;; synchronous smoke work is complete. Exit explicitly so the chapter
          ;; watchdog measures evaluation, not unrelated event-loop liveness.
          (.exit js/process 0)))))
