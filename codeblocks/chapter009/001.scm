(define ((lower metric) u)
  (define (omega v) (metric v u))
  (procedure->1form-field omega))
