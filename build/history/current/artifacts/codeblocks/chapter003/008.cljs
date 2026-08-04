;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((+ d:dx (* 2 d:dy)) (+ (square r) (* 3 x))) R2-rect-point))
;; => (+ (* 2 x0) (* 4 y0) 3)
