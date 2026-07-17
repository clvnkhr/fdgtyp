;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [X (literal-vector-field 'X-sphere S2-spherical)
                Y (literal-vector-field 'Y-sphere S2-spherical)]
            ((((torsion-vector nabla) X Y) f) m)))
;; => 0
