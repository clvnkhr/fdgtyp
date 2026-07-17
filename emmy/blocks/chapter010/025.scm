(define (J charge-density Ix Iy Iz)
  (- (* (/ 1 :c) (+ (* Ix dx) (* Iy dy) (* Iz dz)))
     (* charge-density dct)))
