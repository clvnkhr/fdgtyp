(define-coordinates (up theta phi) S2-spherical)

(def T d:dtheta)

(def U d:dphi)

(def m ((point S2-spherical) (up 'theta0 'phi0)))

(def Cartan (Christoffel->Cartan S2-Christoffel))

(def nabla (covariant-derivative Cartan))
