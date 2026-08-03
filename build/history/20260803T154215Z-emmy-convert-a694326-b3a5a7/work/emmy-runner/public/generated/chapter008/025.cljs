((dphi ((nabla T) U)) m)
;; => (* (/ 1 (expt (sin theta0) 2)) (/ 1 2) 2 (sin theta0) (cos theta0))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((dphi ((nabla T) ((nabla T) U))) m))
;; => -1
