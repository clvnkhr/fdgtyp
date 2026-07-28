(defn factorial
  [n]
  (letfn [(factlp [count answer] (if (> count n) answer (factlp (+ count 1) (* count answer))))]
    (factlp 1 1)))

(factorial 6)
;; => 720
