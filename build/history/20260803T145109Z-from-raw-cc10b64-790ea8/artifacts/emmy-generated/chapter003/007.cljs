(define-coordinates (up x y) R2-rect)

(define-coordinates (up r theta) R2-polar)

((d:dx (square r)) R2-rect-point)
;; => (* 2
;;       (sqrt (+ (expt x0 2) (expt y0 2)))
;;       (/ 1 (* (sqrt (+ (expt x0 2) (expt y0 2))) 2))
;;       2
;;       x0)
