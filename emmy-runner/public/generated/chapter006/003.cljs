(defn form-field->form-field-over-map
  [mu:N->M]
  (fn [w-on-M]
    (letfn [(make-fake-vector-field [V-over-mu n]
              (letfn [(u [f] (fn [m] ((V-over-mu f) n)))]
                (procedure->vector-field u)))]
      (procedure->nform-field
        (fn [& vectors-over-map]
          (fn [n]
            ((apply w-on-M (map (fn [V-over-mu] (make-fake-vector-field V-over-mu n)) vectors-over-map)) (mu:N->M n))))
        (get-rank w-on-M)))))
