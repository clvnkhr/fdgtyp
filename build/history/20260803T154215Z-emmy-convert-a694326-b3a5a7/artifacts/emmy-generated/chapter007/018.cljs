(def R2-rect-basis (coordinate-system->basis R2-rect))

(def R2-polar-basis (coordinate-system->basis R2-polar))

(define-coordinates (up x y) R2-rect)

(define-coordinates (up r theta) R2-polar)
