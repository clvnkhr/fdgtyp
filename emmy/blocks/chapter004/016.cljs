(def Euler-angles (coordinate-system-at SO3 :Euler :Euler-patch))

(def Euler-angles-chi-inverse (point Euler-angles))

(define-coordinates (up theta phi psi) Euler-angles)

(def SO3-point ((point Euler-angles) (up 'theta 'phi 'psi)))

(def f (literal-manifold-function 'f-Euler Euler-angles))
