(def f (literal-manifold-function 'f-rect R2-rect))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- circular d:dtheta) f) R2-rect-point))
;; => 0
