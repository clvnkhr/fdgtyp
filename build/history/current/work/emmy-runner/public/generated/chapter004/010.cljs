(define-coordinates (up x y z) R3-rect)

(def Jz (- (* x d:dy) (* y d:dx)))

(def Jx (- (* y d:dz) (* z d:dy)))

(def Jy (- (* z d:dx) (* x d:dz)))

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((+ (commutator Jx Jy) Jz) g) R3-rect-point))

(simplify (((+ (commutator Jy Jz) Jx) g) R3-rect-point))

(simplify (((+ (commutator Jz Jx) Jy) g) R3-rect-point))
