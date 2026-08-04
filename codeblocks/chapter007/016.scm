(define ((((covariant-derivative-form Cartan) V) tau) vs)
(let ((k (get-rank tau))
(nabla_V ((covariant-derivative-vector Cartan) V)))
(- (V (apply tau vs))
(sigma (lambda (i)
(apply tau
(list-with-substituted-coord vs i
(nabla_V (list-ref vs i)))))
0 (- k 1)))))
