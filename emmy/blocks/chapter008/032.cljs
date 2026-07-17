;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify ((dphi (* (((partial 1) ((partial 1) (delta 'R))) 'phi0 'theta0 'Delta-phi) phi-hat)) m))
;; => (* -1 Delta-phi R)
