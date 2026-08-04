(defn factorial [n] (if (= n 0) 1 (* (bigint n) (factorial (- n 1)))))

(factorial 6)
;; => #emmy/bigint 720

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (factorial 40))
;; => #emmy/bigint "815915283247897734345611269596115894272000000000"
