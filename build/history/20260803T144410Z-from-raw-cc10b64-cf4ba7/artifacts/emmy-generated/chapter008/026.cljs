(defn delta [R] (fn [phi theta Delta-phi] (* R (sin theta) Delta-phi)))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((partial 1) (delta 'R)) 'phi0 'theta0 'Delta-phi))
;; => (* Delta-phi R (cos theta0))
