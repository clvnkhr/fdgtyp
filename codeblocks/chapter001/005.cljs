((Lsphere 'm 'R) (up 't (up 'theta 'phi) (up 'thetadot 'phidot)))
;; => (* (/ 1 2)
;;       m
;;       (+ (* (+ (* (cos phi) R (cos theta) thetadot)
;;                (* R (sin theta) (- (sin phi)) phidot))
;;             (+ (* (cos phi) R (cos theta) thetadot)
;;                (* R (sin theta) (- (sin phi)) phidot)))
;;          (* (+ (* (sin phi) R (cos theta) thetadot)
;;                (* R (sin theta) (cos phi) phidot))
;;             (+ (* (sin phi) R (cos theta) thetadot)
;;                (* R (sin theta) (cos phi) phidot)))
;;          (* R (- (sin theta)) thetadot R (- (sin theta)) thetadot)))

;; (+ (* (/ 1 2) (expt R 2) m (expt phidot 2) (expt (sin theta) 2)) (* (/ 1 2) (expt R 2) m (expt thetadot 2)))
