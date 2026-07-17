(simplify (L (up 't (up 'x 'y) (up 'vx 'vy))))
;; => (+ (* #emmy/ratio "1/2" m (expt vx 2) (g_00 (up x y))) (* m vx vy (g_01 (up x y))) (* #emmy/ratio "1/2" m (expt vy 2) (g_11 (up x y))))
