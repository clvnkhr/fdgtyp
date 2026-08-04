(define-coordinates (up r theta z) R3-cyl)

(define a (+ (* 'a^0 d/dr) (* 'a^1 d/dtheta)))
(define b (+ (* 'b^0 d/dr) (* 'b^1 d/dtheta)))

(((wedge dr dtheta) a b) ((point R3-cyl) (up 'r0 'theta0 'z0)))
;; (+ (* a^0 b^1 ) (* -1 a^1 b^0))
