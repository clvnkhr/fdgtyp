(defn h [s] (g (ref s 0) (ref s 1)))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (h (up 'x 'y)))
;; => (g x y)
