(for-each
 (lambda (x)
   (for-each
    (lambda (y)
      (print-expression
       ((((torsion-vector (covariant-derivative sphere-Cartan))
          x y)
         (literal-manifold-function 'f S2-spherical))
        ((point S2-spherical) (up 'theta0 'phi0)))))
    (list d/dtheta d/dphi)))
 (list d/dtheta d/dphi))
;; 0
;; 0
;; 0
;; 0
