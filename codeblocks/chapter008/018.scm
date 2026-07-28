(define ((torsion-vector nabla) u v)
  (- (- ((nabla u) v) ((nabla v) u))
     (commutator u v)))

(define ((torsion nabla) omega u v)
  (omega ((torsion-vector nabla) u v)))
