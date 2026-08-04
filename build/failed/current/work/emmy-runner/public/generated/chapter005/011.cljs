(def alpha (literal-function 'alpha R2->R))

(def beta (literal-function 'beta R2->R))

(simplify
  (let [dx (ref (basis->oneform-basis R2-rect-basis) 0)
        dy (ref (basis->oneform-basis R2-rect-basis) 1)]
    (((- (d (+ (* (compose alpha (chart R2-rect)) dx) (* (compose beta (chart R2-rect)) dy)))
         (* (compose (- ((partial 0) beta) ((partial 1) alpha)) (chart R2-rect)) (wedge dx dy)))
       v
       w)
      R2-rect-point)))
;; => 0
