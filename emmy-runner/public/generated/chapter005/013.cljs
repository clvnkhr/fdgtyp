;; scmutils simplified this result automatically; Emmy requires an explicit call.
(simplify (((- (d omega) (+ (wedge (d a) dy dz) (wedge (d b) dz dx) (wedge (d c) dx dy))) X Y Z) R3-rect-point))
;; => 0
