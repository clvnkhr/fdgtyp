;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (* 'q (+ (E an-event) (cross-product V (B an-event)))))
;; => (up (+ (* V_y q (Bz (up ct0 x0 y0 z0))) (* -1 V_z q (By (up ct0 x0 y0 z0))) (* q (Ex (up ct0 x0 y0 z0)))) (+ (* -1 V_x q (Bz (up ct0 x0 y0 z0))) (* V_z q (Bx (up ct0 x0 y0 z0))) (* q (Ey (up ct0 x0 y0 z0)))) (+ (* V_x q (By (up ct0 x0 y0 z0))) (* -1 V_y q (Bx (up ct0 x0 y0 z0))) (* q (Ez (up ct0 x0 y0 z0)))))
