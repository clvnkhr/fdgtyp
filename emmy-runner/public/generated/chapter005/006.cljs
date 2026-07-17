;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((wedge dx dy dz) u v w) R3-rect-point))
;; => (+ (* u↑0 v↑1 w↑2) (* -1 u↑0 v↑2 w↑1) (* -1 u↑1 v↑0 w↑2) (* u↑1 v↑2 w↑0) (* u↑2 v↑0 w↑1) (* -1 u↑2 v↑1 w↑0))
