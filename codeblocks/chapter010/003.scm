(define (divergence metric orthonormal-basis)
  (let ((star (Hodge-star metric orthonormal-basis))
        (flat (lower metric)))
    (compose star d star flat)))
