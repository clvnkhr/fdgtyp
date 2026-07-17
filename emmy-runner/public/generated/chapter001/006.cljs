(simplify ((Lsphere 'm 'R) (up 't (up 'theta 'phi) (up 'thetadot 'phidot))))
;; => (+ (* #emmy/ratio "1/2" (expt R 2) m (expt phidot 2) (expt (sin theta) 2)) (* #emmy/ratio "1/2" (expt R 2) m (expt thetadot 2)))
