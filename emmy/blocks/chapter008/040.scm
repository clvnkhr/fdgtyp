(((cyclic-sum
   (lambda (x y z)
     (+ (((nabla x) R) omega V y z)
        (R omega V (T x y) z))))
  X Y Z)
 (typical-point R4-rect))
;; 0
