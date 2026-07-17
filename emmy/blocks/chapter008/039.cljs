;; Emmy under SCI cannot evaluate this Bianchi check in practical time; retain the port as data for future optimization.
'(((cyclic-sum (fn [x y z] (- (R omega x y z) (+ (omega (T (T x y) z)) (((nabla x) TT) omega y z))))) X Y Z)
  (typical-point R4-rect))
;; => (((cyclic-sum (fn [x y z] (- (R omega x y z) (+ (omega (T (T x y) z)) (((nabla x) TT) omega y z))))) X Y Z) (typical-point R4-rect))
