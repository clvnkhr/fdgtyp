(defn factorial [n] (if (= n 0) 1 (* n (factorial (- n 1)))))

(factorial 6)
;; => 720

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (factorial 40))
;; => 8.159152832478977e+47
