(define (((divergence Cartan) v) point)
  (let ((basis (Cartan->basis Cartan))
        (nabla (covariant-derivative Cartan)))
    (contract
     (lambda (ei wi)
       ((wi ((nabla ei) v)) point))
     basis)))
