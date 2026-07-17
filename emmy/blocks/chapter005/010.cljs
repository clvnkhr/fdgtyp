;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (d theta) (+ (wedge (d a) dx) (wedge (d b) dy) (wedge (d c) dz))) X Y) R3-rect-point))
;; => 0
