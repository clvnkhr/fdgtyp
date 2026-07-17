(((cyclic-sum
   (lambda (x y z)
     (- (R omega x y z)
        (+ (omega (T (T x y) z))
           (((nabla x) TT) omega y z)))))
  X Y Z)
 (typical-point R4-rect))
;; 0
