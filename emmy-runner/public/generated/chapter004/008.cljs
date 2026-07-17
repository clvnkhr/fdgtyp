;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [polar-basis (coordinate-system->basis R2-polar)
                polar-vector-basis (basis->vector-basis polar-basis)
                polar-dual-basis (basis->oneform-basis polar-basis)
                f (literal-manifold-function 'f-rect R2-rect)]
            ((- ((commutator e0 e1) f)
                (* (- (e0 (polar-dual-basis e1)) (e1 (polar-dual-basis e0))) (polar-vector-basis f)))
              R2-rect-point)))
;; => 0
