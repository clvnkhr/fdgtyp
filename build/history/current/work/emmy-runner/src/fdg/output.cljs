(ns fdg.output
  "Reader-friendly presentation of exact Emmy values."
  (:require [clojure.string :as str]))

(def emmy-ratio-pattern #"#emmy/ratio \"(-?\d+)/(\d+)\"")

(defn pr-str-native
  "Print a value as readable ClojureScript source where possible.

  Emmy's tagged ratio literal is needed for exact EDN round-tripping, but the
  explicit generic division form is valid ClojureScript and matches the source
  convention used by this book. This function changes presentation only."
  [value]
  (str/replace
   (pr-str value)
   emmy-ratio-pattern
   (fn [[_ numerator denominator]]
     (str "(/ " numerator " " denominator ")"))))
