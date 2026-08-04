(define spherical R3-rect)

(define-coordinates (up r theta phi) spherical)

(define R3-spherical-point
  ((point spherical) (up 'r0 'theta0 'phi0)))
