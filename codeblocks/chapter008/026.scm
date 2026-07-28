(define ((delta R) phi theta Delta-phi)
  (* R (sin theta) Delta-phi))

(((partial 1) (delta 'R)) 'phi0 'theta0 'Delta-phi)
;; (* Delta-phi R (cos theta0))
