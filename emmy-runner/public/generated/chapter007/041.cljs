(simplify ((phase-space-derivative Hsphere) (up 't (up 'theta 'phi) (down 'p_theta 'p_phi))))
;; => (up 1
;;        (up p_theta (/ p_phi (expt (sin theta) 2)))
;;        (down (/ (* (expt p_phi 2) (cos theta)) (expt (sin theta) 3)) 0))
