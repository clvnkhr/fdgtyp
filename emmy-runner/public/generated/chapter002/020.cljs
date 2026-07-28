((compose (chart S2-spherical) (point S2-Riemann) (chart R2-rect) (point R2-polar)) (up 'rho 'theta))
;; => (up (acos (/ (+ (expt rho 2) -1) (+ (expt rho 2) 1))) theta)
