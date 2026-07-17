;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (- (proper-space-interval ((general-boost (up 'vx 'vy 'vz)) (make-four-tuple 'ct (up 'x 'y 'z))))
             (proper-space-interval (make-four-tuple 'ct (up 'x 'y 'z)))))
;; => 0
