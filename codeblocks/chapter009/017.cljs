(def M (make-manifold S2-type 2 3))

(def spherical (coordinate-system-at M :spherical :north-pole))

(define-coordinates (up theta phi) spherical)

(def spherical-basis (coordinate-system->basis spherical))

(defn spherical-metric
  [r]
  (fn [v1 v2] (* (square r) (+ (* (dtheta v1) (dtheta v2)) (* (square (sin theta)) (dphi v1) (dphi v2))))))
