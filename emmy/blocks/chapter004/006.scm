(define b-polar
  (* (Jacobian (coordinate-system->basis R2-polar)
               (coordinate-system->basis R2-rect))
     b-rect))

(b-polar ((point R2-rect) (up 'x0 'y0)))
;; (up
;;  (/ (+ (* x0 (bˆ0 (up x0 y0))) (* y0 (bˆ1 (up x0 y0))))
;;     (sqrt (+ (expt x0 2) (expt y0 2))))
;;  (/ (+ (* x0 (bˆ1 (up x0 y0))) (* -1 y0 (bˆ0 (up x0 y0))))
;;     (+ (expt x0 2) (expt y0 2))))
