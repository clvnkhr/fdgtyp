((Christoffel->symbols
  (metric->Christoffel-1 (g-sphere 'R) S2-basis))
 ((point S2-spherical) (up 'theta0 'phi0)))
;; (down
;;  (down (down 0 0)
;;        (down 0 (* (* (cos theta0) (sin theta0)) (expt R 2))))
;;  (down (down 0 (* (* (cos theta0) (sin theta0)) (expt R 2)))
;;        (down (* (* -1 (cos theta0) (sin theta0)) (expt R 2))
;;              0)))
