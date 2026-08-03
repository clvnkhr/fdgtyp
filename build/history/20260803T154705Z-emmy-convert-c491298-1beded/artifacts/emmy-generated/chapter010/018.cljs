(def p (literal-manifold-function 'phi SR))

(((Laplacian g-Minkowski SR-basis) p) an-event)
;; => (* -1
;;       (+ (* -1 (((partial 0) ((partial 0) phi)) (up ct0 x0 y0 z0)))
;;          (* -1 -1 (((partial 1) ((partial 1) phi)) (up ct0 x0 y0 z0)))
;;          (((partial 2) ((partial 2) phi)) (up ct0 x0 y0 z0))
;;          (* -1 -1 (((partial 3) ((partial 3) phi)) (up ct0 x0 y0 z0)))))
