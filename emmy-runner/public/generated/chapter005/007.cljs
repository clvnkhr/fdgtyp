;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (- (((wedge dx dy dz) u v w) R3-rect-point)
             (determinant (matrix-by-rows (list 'u↑0 'u↑1 'u↑2) (list 'v↑0 'v↑1 'v↑2) (list 'w↑0 'w↑1 'w↑2)))))
;; => 0
