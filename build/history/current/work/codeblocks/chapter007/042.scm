(define state-space
(make-manifold R^n 5))
(define states
(coordinate-system-at 'rectangular 'origin state-space))
(define-coordinates
(up t (up theta phi) (down p_theta p_phi))
states)
