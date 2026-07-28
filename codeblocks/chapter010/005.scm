(define (Laplacian metric orthonormal-basis)
  (compose (divergence metric orthonormal-basis)
           (gradient metric orthonormal-basis)))
