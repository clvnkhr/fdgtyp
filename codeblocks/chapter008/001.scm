(define ((Riemann-curvature nabla) w v)
  (- (commutator (nabla w) (nabla v))
     (nabla (commutator w v))))
