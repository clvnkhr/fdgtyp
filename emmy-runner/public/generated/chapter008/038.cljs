(def nabla (covariant-derivative (Christoffel->Cartan (literal-Christoffel-2 'C R4-rect))))

(def R (Riemann nabla))

(def T (torsion-vector nabla))

(defn TT [omega x y] (omega (T x y)))
