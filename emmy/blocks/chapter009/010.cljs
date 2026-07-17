;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (determinant (((partial 2) ((partial 2) L2)) (up 't (up 'x 'y) (up 'vx 'vy)))))
;; => (+ (* (m_00 (up x y)) (m_11 (up x y))) (* #emmy/bigint -1 (expt (m_01 (up x y)) 2)))
