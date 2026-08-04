((dx circular) R2-rect-point)
;; => (- y0)

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((dy circular) R2-rect-point))
;; => x0
