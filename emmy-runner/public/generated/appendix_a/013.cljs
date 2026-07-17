(defn factorial [n] (if (= n 0) 1 (* (bigint n) (factorial (- n 1)))))

(factorial 6)
;; => #emmy/bigint 720
