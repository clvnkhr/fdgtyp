;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (let [dx (ref (basis->oneform-basis R2-rect-basis) 0)
                dy (ref (basis->oneform-basis R2-rect-basis) 1)]
            (((- (d (+ (* (compose alpha (chart R2-rect)) dx) (* (compose beta (chart R2-rect)) dy)))
                 (* (compose (- ((partial 0) beta) ((partial 1) alpha)) (chart R2-rect)) (wedge dx dy)))
               v
               w)
              R2-rect-point)))
;; => 0
