(define ((Ricci nabla basis) u v)
  (contract (lambda (ei wi) ((Riemann nabla) wi u ei v))
            basis))
