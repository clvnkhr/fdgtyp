(defn pullback-vector-field [mu:N->M mu-inverse:M->N] (pushforward-vector mu-inverse:M->N mu:N->M))
