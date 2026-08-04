(define ((((covariant-derivative-1form Cartan) V) tau) U)
(let ((nabla_V ((covariant-derivative-vector Cartan) V)))
(- (V (tau U)) (tau (nabla_V U)))))
