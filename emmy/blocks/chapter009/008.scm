(let* ((metric (literal-metric 'g R3-rect))
       (q (typical-coords R3-rect))
       (L2 (metric->Lagrangian metric R3-rect)))
  (+ (* 1/2
        (((expt (partial 2) 2) (Lagrange-explicit L2))
         (up 't q (corresponding-velocities q))))
     ((Christoffel->symbols
       (metric->Christoffel-2 metric
                              (coordinate-system->basis R3-rect)))
      ((point R3-rect) q))))
;; (down (down (up 0 0 0) (up 0 0 0) (up 0 0 0))
;;       (down (up 0 0 0) (up 0 0 0) (up 0 0 0))
;;       (down (up 0 0 0) (up 0 0 0) (up 0 0 0)))
