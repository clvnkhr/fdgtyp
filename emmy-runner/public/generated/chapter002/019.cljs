(define-coordinates (up r theta) R2-polar)

((- r (* 2 'a (+ 1 (cos theta)))) ((point R2-rect) (up 'x 'y)))
;; => (- (sqrt (+ (expt x 2) (expt y 2))) (* 2 a (+ 1 (cos (atan y x)))))
