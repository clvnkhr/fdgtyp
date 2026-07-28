(def a (literal-manifold-function 'alpha R3-rect))

(def b (literal-manifold-function 'beta R3-rect))

(def c (literal-manifold-function 'gamma R3-rect))

(def theta (+ (* a dx) (* b dy) (* c dz)))
