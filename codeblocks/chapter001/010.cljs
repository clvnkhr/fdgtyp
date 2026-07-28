(L (up 't (up 'x 'y) (up 'vx 'vy)))
;; => (* (/ 1 2)
;;       m
;;       (+ (* (+ (* (g_00 (up x y)) vx) (* (g_01 (up x y)) vy)) vx)
;;          (* (+ (* (g_01 (up x y)) vx) (* (g_11 (up x y)) vy)) vy)))

;; (+ (* (/ 1 2) m (expt vx 2) (g_00 (up x y))) (* m vx vy (g_01 (up x y))) (* (/ 1 2) m (expt vy 2) (g_11 (up x
;; y))))
