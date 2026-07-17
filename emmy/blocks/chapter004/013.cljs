(def Euler-angles (coordinate-system-at SO3 :Euler :Euler-patch))

(define-coordinates (up theta phi psi) Euler-angles)

(def SO3-point ((point Euler-angles) (up 'theta 'phi 'psi)))

(def f (literal-manifold-function 'f-Euler Euler-angles))

(def e_x
  (+ (* (cos phi) d:dtheta)
     (* -1 (/ (* (sin phi) (cos theta)) (sin theta)) d:dphi)
     (* (/ (sin phi) (sin theta)) d:dpsi)))

(def e_y
  (+ (/ (* (cos phi) (cos theta) d:dphi) (sin theta)) (* (sin phi) d:dtheta) (* -1 (/ (cos phi) (sin theta)) d:dpsi)))

(def e_z d:dphi)

;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((+ (commutator e_x e_y) e_z) f) SO3-point))
;; => 0
