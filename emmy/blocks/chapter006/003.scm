(define S2 (make-manifold S^2 2 3))
(define S2-spherical
  (coordinate-system at 'spherical 'north-pole S2))
(define-coordinates (up theta phi) S2-spherical)
(define S2-basis (coordinate-system->basis S2-spherical))
