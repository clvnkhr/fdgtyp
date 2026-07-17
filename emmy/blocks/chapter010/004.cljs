(def divergence-via-hodge-star divergence)

(defn divergence
  ([Cartan]
   (fn [v]
     (fn [point]
       (let [basis (Cartan->basis Cartan)
             nabla (covariant-derivative Cartan)]
         (contract (fn [ei wi] ((wi ((nabla ei) v)) point)) basis)))))
  ([metric orthonormal-basis] (divergence-via-hodge-star metric orthonormal-basis)))
