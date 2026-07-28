(def f (literal-manifold-function 'f-rect R2-rect))

(((- circular d:dtheta) f) R2-rect-point)
;; => (- (- (* x0 (((partial 1) f-rect) (up x0 y0)))
;;          (* y0 (((partial 0) f-rect) (up x0 y0))))
;;       (+ (* (((partial 1) f-rect)
;;               (up (* (sqrt (+ (expt x0 2) (expt y0 2))) (cos (atan y0 x0)))
;;                   (* (sqrt (+ (expt x0 2) (expt y0 2))) (sin (atan y0 x0)))))
;;             (sqrt (+ (expt x0 2) (expt y0 2)))
;;             (cos (atan y0 x0)))
;;          (* (((partial 0) f-rect)
;;               (up (* (sqrt (+ (expt x0 2) (expt y0 2))) (cos (atan y0 x0)))
;;                   (* (sqrt (+ (expt x0 2) (expt y0 2))) (sin (atan y0 x0)))))
;;             (sqrt (+ (expt x0 2) (expt y0 2)))
;;             (- (sin (atan y0 x0))))))

0
;; => 0
