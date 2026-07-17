;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((g-Minkowski a-vector a-vector) an-event))
;; => (+ (* -1 (expt (v↑t (up ct0 x0 y0 z0)) 2)) (expt (v↑x (up ct0 x0 y0 z0)) 2) (expt (v↑y (up ct0 x0 y0 z0)) 2) (expt (v↑z (up ct0 x0 y0 z0)) 2))
