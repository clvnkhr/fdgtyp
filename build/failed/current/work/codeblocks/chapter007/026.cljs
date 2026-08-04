(def V (literal-vector-field 'V-rect R2-rect))

(def W (literal-vector-field 'W-rect R2-rect))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((((- (covariant-derivative R2-rect-Cartan) (covariant-derivative R2-polar-Cartan)) V) W)
             f)
            R2-rect-point))
;; => 0
