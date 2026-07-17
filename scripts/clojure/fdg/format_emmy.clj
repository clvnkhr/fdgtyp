(ns fdg.format-emmy
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [zprint.core :as zprint]))

(def options
  {:width 120
   :parse {:interpose "\n\n"}})

(def captured-result-pattern #"(?s)(.*?)(\n;; =>.*)$")

(defn format-source [source]
  (let [[_ code captured] (re-matches captured-result-pattern source)
        code (or code source)
        formatted (str/trimr (zprint/zprint-file-str code "emmy.cljs" options))]
    (str formatted (some-> captured str/trimr) "\n")))

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
        paths (if (seq paths) paths ["emmy/blocks"])
        changed (atom [])]
    (doseq [file (cljs-files paths)]
      (let [source (slurp file)
            formatted (format-source source)]
        (when (not= source formatted)
          (swap! changed conj (.getPath file))
          (when-not check? (spit file formatted)))))
    (when (and check? (seq @changed))
      (binding [*out* *err*]
        (println "Unformatted Emmy ClojureScript files:")
        (doseq [file @changed] (println file)))
      (System/exit 1))
    (println (if check?
               (str "Checked " (count (cljs-files paths)) " formatted ClojureScript files.")
               (str "Formatted " (count @changed) " of "
                    (count (cljs-files paths)) " ClojureScript files.")))))
