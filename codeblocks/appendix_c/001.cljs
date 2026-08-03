;; Simplify each tensor-linearity component before assembling the result;
;; simplifying the combined expansion creates a multi-megabyte intermediate.
(let [cs R3-rect
      u (literal-vector-field 'u-coord cs)
      v (literal-vector-field 'v-coord cs)
      w (literal-vector-field 'w-coord cs)
      x (literal-vector-field 'x-coord cs)
      omega (literal-oneform-field 'omega-coord cs)
      nu (literal-oneform-field 'nu-coord cs)
      f (literal-manifold-function 'f-coord cs)
      g (literal-manifold-function 'g-coord cs)
      nabla (covariant-derivative (literal-Cartan 'G cs))
      m (typical-point cs)
      F (Riemann nabla)]
  (mapr (fn [component] (freeze (simplify (component m))))
        (up (- (F (+ (* f omega) (* g nu)) u v w) (+ (* f (F omega u v w)) (* g (F nu u v w))))
            (- (F omega (+ (* f u) (* g x)) v w) (+ (* f (F omega u v w)) (* g (F omega x v w))))
            (- (F omega v (+ (* f u) (* g x)) w) (+ (* f (F omega v u w)) (* g (F omega v x w))))
            (- (F omega v w (+ (* f u) (* g x))) (+ (* f (F omega v w u)) (* g (F omega v w x)))))))
;; => (up 0 0 0 0)
