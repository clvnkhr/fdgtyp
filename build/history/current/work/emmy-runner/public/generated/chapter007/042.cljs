(def state-space (make-manifold Rn 5))

(def states (coordinate-system-at state-space :rectangular :origin))

(define-coordinates (up t (up theta phi) (down p_theta p_phi)) states)
