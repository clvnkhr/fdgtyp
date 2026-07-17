(define-coordinates (up x y z) R3-rect)

(def Jz (- (* x d:dy) (* y d:dx)))

(def Jx (- (* y d:dz) (* z d:dy)))

(def Jy (- (* z d:dx) (* x d:dz)))
