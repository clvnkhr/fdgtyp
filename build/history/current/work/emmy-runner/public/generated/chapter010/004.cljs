(defn divergence
  ([metric orthonormal-basis]
   (let [star (Hodge-star metric orthonormal-basis)
         flat (lower metric)]
     (compose star d star flat)))
  ([Cartan]
   (fn [v]
     (fn [point]
       (let [basis (Cartan->basis Cartan)
             nabla (covariant-derivative Cartan)]
         (contract (fn [ei wi] ((wi ((nabla ei) v)) point)) basis))))))
