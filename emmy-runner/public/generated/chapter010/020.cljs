;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((Laplacian g-Minkowski SR-basis) p) an-event))
;; => (+ (((expt (partial 0) 2) phi) (up ct0 x0 y0 z0)) (* -1 (((expt (partial 1) 2) phi) (up ct0 x0 y0 z0))) (* -1 (((expt (partial 2) 2) phi) (up ct0 x0 y0 z0))) (* -1 (((expt (partial 3) 2) phi) (up ct0 x0 y0 z0))))
