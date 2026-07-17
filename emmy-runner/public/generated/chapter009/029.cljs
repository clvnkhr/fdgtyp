(defn Einstein
  [coordinate-system metric-tensor]
  (let [basis (coordinate-system->basis coordinate-system)
        connection (Christoffel->Cartan (metric->Christoffel-2 metric-tensor basis))
        nabla (covariant-derivative connection)
        Ricci-tensor (Ricci nabla basis)
        Ricci-scalar ((trace2down metric-tensor basis) Ricci-tensor)]
    (letfn [(Einstein-tensor [v1 v2] (- (Ricci-tensor v1 v2) (* (/ 1 2) Ricci-scalar (metric-tensor v1 v2))))]
      Einstein-tensor)))

(defn Einstein-field-equation
  [coordinate-system metric-tensor Lambda stress-energy-tensor]
  (let [Einstein-tensor (Einstein coordinate-system metric-tensor)
        EFE-residuals (- (+ Einstein-tensor (* Lambda metric-tensor))
                         (* (/ (* 8 'pi 'G) (expt 'c 4)) stress-energy-tensor))]
    EFE-residuals))
