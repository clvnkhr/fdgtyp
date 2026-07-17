;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [omega (literal-oneform-field 'omega-rect R4-rect)
                X (literal-vector-field 'X-rect R4-rect)
                Y (literal-vector-field 'Y-rect R4-rect)]
            (((torsion nabla) omega X Y) (typical-point R4-rect))))
;; => 0
