(defn Christoffel->Cartan
  [Christoffel]
  (let [basis (Christoffel->basis Christoffel)
        Christoffel-symbols (Christoffel->symbols Christoffel)]
    (make-Cartan (* Christoffel-symbols (basis->oneform-basis basis)) basis)))
