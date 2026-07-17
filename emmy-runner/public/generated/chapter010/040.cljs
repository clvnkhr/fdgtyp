;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((Force 'q F (Ux 'v:c) dy) an-event))
;; => (/ (+ (* -1 q v:c (Bz (up ct0 x0 y0 z0))) (* q (Ey (up ct0 x0 y0 z0)))) (sqrt (+ (* -1 (expt v:c 2)) 1)))
