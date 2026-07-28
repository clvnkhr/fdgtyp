(def SR R4-rect)

(define-coordinates (up ct x y z) SR)

(def an-event ((point SR) (up 'ct0 'x0 'y0 'z0)))

(def a-vector
  (+ (* (literal-manifold-function 'v↑t SR) d:dct)
     (* (literal-manifold-function 'v↑x SR) d:dx)
     (* (literal-manifold-function 'v↑y SR) d:dy)
     (* (literal-manifold-function 'v↑z SR) d:dz)))
