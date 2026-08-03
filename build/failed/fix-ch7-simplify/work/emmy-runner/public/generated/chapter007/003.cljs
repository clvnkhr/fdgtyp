;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [v (literal-vector-field 'v-rect R3-rect)
                w (literal-vector-field 'w-rect R3-rect)
                f (literal-manifold-function 'f-rect R3-rect)]
            ((- ((((Lie-directional R3-rect 2) v) w) f) ((commutator v w) f))
              ((point R3-rect) (up 'x0 'y0 'z0)))))
;; => 0
