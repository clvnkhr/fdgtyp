(x (R2-rect-chi-inverse (up 'x0 'y0)))
;;x0

(x (R2-polar-chi-inverse (up 'r0 'theta0)))
;;(* r0 (cos theta0))

(r (R2-polar-chi-inverse (up 'r0 'theta0)))
;;r0

(r (R2-rect-chi-inverse (up 'x0 'y0)))
;;(sqrt (+ (expt x0 2) (expt y0 2)))

(theta (R2-rect-chi-inverse (up 'x0 'y0)))
;;(atan y0 x0)
