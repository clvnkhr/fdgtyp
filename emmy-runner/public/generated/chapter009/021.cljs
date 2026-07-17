(let [signature '(-> (UP Real Real Real) Real)
      V-xx (literal-function 'V_xx signature)
      V-yy (literal-function 'V_yy signature)
      V-zz (literal-function 'V_zz signature)]
  (+ (V-xx (up 'x 'y 'z)) (V-yy (up 'x 'y 'z)) (V-zz (up 'x 'y 'z))))
;; => (+ (V_xx (up x y z)) (V_yy (up x y z)) (V_zz (up x y z)))
