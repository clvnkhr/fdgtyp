(def Z (literal-vector-field 'Z-rect R3-rect))

(simplify (((- (d omega) (+ (wedge (d a) dy dz) (wedge (d b) dz dx) (wedge (d c) dx dy))) X Y Z)
            R3-rect-point))
