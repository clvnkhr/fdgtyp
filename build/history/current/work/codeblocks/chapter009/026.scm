(define (prime-meridian r omega)
  (compose (point spacetime-sphere)
           (lambda (t) (up t r (* omega t) 0))
           (chart R1-rect)))
