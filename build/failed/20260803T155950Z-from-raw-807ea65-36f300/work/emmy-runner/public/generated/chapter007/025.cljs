(((((covariant-derivative R2-polar-Cartan) d:dx) circular) f) R2-rect-point)
;; => (+ (* (+ (* (((partial 1) f-rect)
;;                  (up (* (sqrt (+ (expt x0 2) (expt y0 2))) (cos (atan y0 x0)))
;;                      (* (sqrt (+ (expt x0 2) (expt y0 2))) (sin (atan y0 x0)))))
;;                (sin (atan y0 x0)))
;;             (* (((partial 0) f-rect)
;;                  (up (* (sqrt (+ (expt x0 2) (expt y0 2))) (cos (atan y0 x0)))
;;                      (* (sqrt (+ (expt x0 2) (expt y0 2))) (sin (atan y0 x0)))))
;;                (cos (atan y0 x0))))
;;          (+ (* -1 y0 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2)) 2)
;;             (* -1
;;                y0
;;                2
;;                x0
;;                (/ -1 (expt (* (sqrt (+ (expt x0 2) (expt y0 2))) 2) 2))
;;                2 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                2 x0)
;;             (* (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2)) 2 y0)
;;             (* x0
;;                2
;;                y0
;;                (/ -1 (expt (* (sqrt (+ (expt x0 2) (expt y0 2))) 2) 2))
;;                2 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                2 x0)
;;             (* (+ (* (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                      2
;;                      x0
;;                      (- (sin (atan y0 x0)))
;;                      (/ (- y0) (+ (expt x0 2) (expt y0 2))))
;;                   (* (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                      2
;;                      y0
;;                      (cos (atan y0 x0))
;;                      (/ (- y0) (+ (expt x0 2) (expt y0 2)))))
;;                (- (* x0 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2)) 2 y0)
;;                   (* y0 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2)) 2 x0)))
;;             (* (+ (* (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                      2
;;                      x0
;;                      (+ (* (sqrt (+ (expt x0 2) (expt y0 2)))
;;                            -1
;;                            (cos (atan y0 x0))
;;                            (/ (- y0) (+ (expt x0 2) (expt y0 2))))
;;                         (* (- (sin (atan y0 x0)))
;;                            (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                            2
;;                            x0)))
;;                   (* (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                      2
;;                      y0
;;                      (+ (* (sqrt (+ (expt x0 2) (expt y0 2)))
;;                            (- (sin (atan y0 x0)))
;;                            (/ (- y0) (+ (expt x0 2) (expt y0 2))))
;;                         (* (cos (atan y0 x0))
;;                            (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                            2
;;                            x0))))
;;                (- (* x0 (/ x0 (+ (expt x0 2) (expt y0 2))))
;;                   (* y0 (/ (- y0) (+ (expt x0 2) (expt y0 2))))))))
;;       (* (+ (* (((partial 1) f-rect)
;;                  (up (* (sqrt (+ (expt x0 2) (expt y0 2))) (cos (atan y0 x0)))
;;                      (* (sqrt (+ (expt x0 2) (expt y0 2))) (sin (atan y0 x0)))))
;;                (sqrt (+ (expt x0 2) (expt y0 2)))
;;                (cos (atan y0 x0)))
;;             (* (((partial 0) f-rect)
;;                  (up (* (sqrt (+ (expt x0 2) (expt y0 2))) (cos (atan y0 x0)))
;;                      (* (sqrt (+ (expt x0 2) (expt y0 2))) (sin (atan y0 x0)))))
;;                (sqrt (+ (expt x0 2) (expt y0 2)))
;;                (- (sin (atan y0 x0)))))
;;          (+ (* -1 y0 (/ (- (- y0)) (expt (+ (expt x0 2) (expt y0 2)) 2)) 2 x0)
;;             (/ x0 (+ (expt x0 2) (expt y0 2)))
;;             (* x0 (/ 1 (+ (expt x0 2) (expt y0 2))))
;;             (* x0 (/ (- x0) (expt (+ (expt x0 2) (expt y0 2)) 2)) 2 x0)
;;             (* (+ (* (/ (- y0) (+ (expt x0 2) (expt y0 2)))
;;                      (- (sin (atan y0 x0)))
;;                      (/ (- y0) (+ (expt x0 2) (expt y0 2))))
;;                   (* (/ x0 (+ (expt x0 2) (expt y0 2)))
;;                      (cos (atan y0 x0))
;;                      (/ (- y0) (+ (expt x0 2) (expt y0 2)))))
;;                (- (* x0 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2)) 2 y0)
;;                   (* y0 (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2)) 2 x0)))
;;             (* (+ (* (/ (- y0) (+ (expt x0 2) (expt y0 2)))
;;                      (+ (* (sqrt (+ (expt x0 2) (expt y0 2)))
;;                            -1
;;                            (cos (atan y0 x0))
;;                            (/ (- y0) (+ (expt x0 2) (expt y0 2))))
;;                         (* (- (sin (atan y0 x0)))
;;                            (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                            2
;;                            x0)))
;;                   (* (/ x0 (+ (expt x0 2) (expt y0 2)))
;;                      (+ (* (sqrt (+ (expt x0 2) (expt y0 2)))
;;                            (- (sin (atan y0 x0)))
;;                            (/ (- y0) (+ (expt x0 2) (expt y0 2))))
;;                         (* (cos (atan y0 x0))
;;                            (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;                            2
;;                            x0))))
;;                (- (* x0 (/ x0 (+ (expt x0 2) (expt y0 2))))
;;                   (* y0 (/ (- y0) (+ (expt x0 2) (expt y0 2)))))))))
