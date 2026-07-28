(def S2 (make-manifold S2-type 2 3))

(def S2-spherical (coordinate-system-at S2 :spherical :north-pole))

(define-coordinates (up theta phi) S2-spherical)

(def S2-basis (coordinate-system->basis S2-spherical))
