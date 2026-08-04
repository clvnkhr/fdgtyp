(ns fdg.format-emmy
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [zprint.core :as zprint]))

(def options
  {:width 100
   :parse {:interpose "\n\n"}})

(def result-options
  {:width 82
   :parse {:interpose "\n"}})

(defn wrap-words [text width]
  (reduce (fn [lines word]
            (let [line (peek lines)
                  extended (if (str/blank? line) word (str line " " word))]
              (if (<= (count extended) width)
                (conj (pop lines) extended)
                (conj lines word))))
          [""]
          (str/split (str/replace text #"\s+" " ") #" ")))

(defn comment-result [lines]
  (map-indexed #(str (if (zero? %1) ";; => " ";;    ") %2) lines))

(defn captured-result-lines [lines]
  (loop [remaining lines
         output []]
    (if-let [line (first remaining)]
      (if (str/starts-with? line ";; =>")
        (let [[captured tail] (split-with #(str/starts-with? % ";;") remaining)
              result (->> captured
                          (map-indexed
                           (fn [index text]
                             (if (zero? index)
                               (str/replace-first text #"^;; =>\s?" "")
                               (str/replace-first text #"^;;\s*" ""))))
                          (str/join "\n"))
              formatted (if (or (str/includes? result "<result truncated:")
                                (> (count result) 8000))
                          (comment-result (wrap-words result 76))
                          (try
                            (->> (zprint/zprint-file-str result "result.cljs" result-options)
                                 str/trimr
                                 str/split-lines
                                 comment-result)
                            (catch Exception _ captured)))]
          (recur tail (into output formatted)))
        (recur (rest remaining) (conj output line)))
      output)))

(defn format-captured-results [source]
  (->> (str/split-lines source)
       captured-result-lines
       (str/join "\n")))

(defn format-source-once [source]
  (-> (zprint/zprint-file-str source "emmy.cljs" options)
      str/trimr
      (str/replace "\n\n;; =>" "\n;; =>")
      format-captured-results
      (str "\n")))

(defn format-source [source]
  (loop [current source
         pass 0]
    (let [formatted (format-source-once current)]
      (cond
        (= formatted current) current
        (= pass 7) (throw (ex-info "Emmy formatting did not converge"
                                   {:passes (inc pass)}))
        :else (recur formatted (inc pass))))))

(defn cljs-files [paths]
  (->> paths
       (map io/file)
       (mapcat #(if (.isDirectory %) (file-seq %) [%]))
       (filter #(.isFile %))
       (filter #(str/ends-with? (.getName %) ".cljs"))
       (sort-by #(.getPath %))))

(defn -main [& args]
  (let [check? (= "--check" (first args))
        paths (if check? (rest args) args)
        paths (if (seq paths) paths ["codeblocks"])
        changed (atom [])]
    (doseq [file (cljs-files paths)]
      (try
        (let [source (slurp file)
              formatted (format-source source)]
          (when (not= source formatted)
            (swap! changed conj (.getPath file))
            (when-not check? (spit file formatted))))
        (catch Exception error
          (binding [*out* *err*]
            (println "Could not format" (.getPath file)))
          (throw (ex-info (str "Could not format " (.getPath file)) {} error)))))
    (when (and check? (seq @changed))
      (binding [*out* *err*]
        (println "Unformatted Emmy ClojureScript files:")
        (doseq [file @changed] (println file)))
      (System/exit 1))
    (println (if check?
               (str "Checked " (count (cljs-files paths)) " formatted ClojureScript files.")
               (str "Formatted " (count @changed) " of "
                    (count (cljs-files paths)) " ClojureScript files.")))))
