(defn pushforward-vector
  [mu:N->M mu-inverse:M->N]
  (fn [v-on-N] (procedure->vector-field (fn [f] (compose (v-on-N (compose f mu:N->M)) mu-inverse:M->N)))))
