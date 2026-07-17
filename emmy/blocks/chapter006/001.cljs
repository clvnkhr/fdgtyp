(defn vector-field->vector-field-over-map
  [mu:N->M]
  (fn [v-on-M] (procedure->vector-field (fn [f-on-M] (compose (v-on-M f-on-M) mu:N->M)))))
