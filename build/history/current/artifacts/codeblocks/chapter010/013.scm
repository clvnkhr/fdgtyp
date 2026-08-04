(define SR R4-rect)
(define-coordinates (up ct x y z) SR)
(define an-event ((point SR) (up 'ct0 'x0 'y0 'z0)))

(define a-vector
  (+ (* (literal-manifold-function 'v^t SR) d/dct)
     (* (literal-manifold-function 'v^x SR) d/dx)
     (* (literal-manifold-function 'v^y SR) d/dy)
     (* (literal-manifold-function 'v^z SR) d/dz)))
