(defn h [s] (g (ref s 0) (ref s 1)))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (h (up 'x 'y)))
;; => (g x y)

(simplify ((D g) 'x 'y))
;; => (down (((partial 0) g) x y) (((partial 1) g) x y))

(simplify ((D h) (up 'x 'y)))
;; => (down (((partial 0) g) x y) (((partial 1) g) x y))
