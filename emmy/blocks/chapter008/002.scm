(define ((Riemann nabla) omega u w v)
  (omega (((Riemann-curvature nabla) w v) u)))
