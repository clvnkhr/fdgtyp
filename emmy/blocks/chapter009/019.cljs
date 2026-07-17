(define-coordinates (up t x y z) spacetime-rect)

(def spacetime-rect-basis (coordinate-system->basis spacetime-rect))

(defn Newton-metric
  [M G c V]
  (let [a (+ 1 (* (/ 2 (square c)) (compose V (up x y z))))]
    (letfn [(g [v1 v2]
              (+ (* -1 (square c) a (dt v1) (dt v2)) (* (dx v1) (dx v2)) (* (dy v1) (dy v2)) (* (dz v1) (dz v2))))]
      g)))

(defn Newton-connection
  [M G c V]
  (Christoffel->Cartan (metric->Christoffel-2 (Newton-metric M G c V) spacetime-rect-basis)))

(def V (literal-function 'V '(-> (UP Real Real Real) Real)))

(def nabla (covariant-derivative (Newton-connection 'M 'G 'c V)))
