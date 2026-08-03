(def X (literal-vector-field 'X-rect R3-rect))

(def Y (literal-vector-field 'Y-rect R3-rect))

(def Z (literal-vector-field 'Z-rect R3-rect))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- production-in-volume-element (d flux-through-boundary-element)) X Y Z)
            R3-rect-point))
;; => 0
