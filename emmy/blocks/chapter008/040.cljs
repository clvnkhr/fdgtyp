;; Emmy under SCI cannot evaluate this Bianchi check in practical time; retain the port as data for future optimization.
'(((cyclic-sum (fn [x y z] (+ (((nabla x) R) omega V y z) (R omega V (T x y) z)))) X Y Z) (typical-point R4-rect))
;; => (((cyclic-sum (fn [x y z] (+ (((nabla x) R) omega V y z) (R omega V (T x y) z)))) X Y Z) (typical-point R4-rect))
