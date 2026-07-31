(defn h [s] (g (ref s 0) (ref s 1)))

(h (up 'x 'y))
;; => (g x y)

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((D g) 'x 'y))
;; => (down (((partial 0) g) x y) (((partial 1) g) x y))
