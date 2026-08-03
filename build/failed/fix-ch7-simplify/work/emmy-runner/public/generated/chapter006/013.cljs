(defn pullback-form
  [mu:N->M]
  (fn [omega-on-M]
    (let [k (get-rank omega-on-M)]
      (if (= k 0)
        ((pullback-function mu:N->M) omega-on-M)
        (procedure->nform-field (fn [& vectors-on-N]
                                  (apply ((form-field->form-field-over-map mu:N->M) omega-on-M)
                                    (map (differential mu:N->M) vectors-on-N)))
                                k)))))
