goog.provide('emmy.numerical.quadrature.bulirsch_stoer');
/**
 * Default step sizes used by the Bulirsch-Stoer quadrature algorithm:
 * 
 *   ```
 *   2, 3, 4, 6, 8, 12, 16, 24, 32, ...
 *   ```
 */
emmy.numerical.quadrature.bulirsch_stoer.bulirsch_stoer_steps = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),(2)),emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((2),(3)));
emmy.numerical.quadrature.bulirsch_stoer.slice_width = (function emmy$numerical$quadrature$bulirsch_stoer$slice_width(a,b){
var width = (b - a);
return (function (n){
return (width / n);
});
});
/**
 * Defines the sequence of slice widths, given a sequence of `n` (number of
 *   slices) in the interval $(a, b)$.
 */
emmy.numerical.quadrature.bulirsch_stoer.h_sequence = (function emmy$numerical$quadrature$bulirsch_stoer$h_sequence(var_args){
var G__56187 = arguments.length;
switch (G__56187) {
case 2:
return emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$core$IFn$_invoke$arity$3(a,b,emmy.numerical.quadrature.bulirsch_stoer.bulirsch_stoer_steps);
}));

(emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$core$IFn$_invoke$arity$3 = (function (a,b,n_seq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.numerical.quadrature.bulirsch_stoer.slice_width(a,b),n_seq);
}));

(emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$lang$maxFixedArity = 3);

/**
 * Allows the user to specify polynomial or rational function extrapolation via
 *   the `:bs-extrapolator` option.
 */
emmy.numerical.quadrature.bulirsch_stoer.extrapolator_fn = (function emmy$numerical$quadrature$bulirsch_stoer$extrapolator_fn(opts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"polynomial","polynomial",-832765162),new cljs.core.Keyword(null,"bs-extrapolator","bs-extrapolator",2042406575).cljs$core$IFn$_invoke$arity$1(opts))){
return emmy.polynomial.interpolate.modified_neville_scan((0));
} else {
return emmy.rational_function.interpolate.modified_bulirsch_stoer_scan((0));
}
});
/**
 * Accepts some function (like `mid/midpoint-sequence`) that returns a sequence of
 *   successively better estimates to the integral, and returns a new function with
 *   interface `(f a b opts)` that accelerates the sequence with either
 * 
 *   - polynomial extrapolation
 *   - rational function extrapolation
 * 
 *   By default, The `:n` in `opts` (passed on to `integrator-seq-fn`) is set to
 *   the sequence of step sizes suggested by Bulirsch-Stoer,
 *   `bulirsch-stoer-steps`.
 */
emmy.numerical.quadrature.bulirsch_stoer.bs_sequence_fn = (function emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn(integrator_seq_fn){
return (function() {
var emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call = null;
var emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call__3 = (function (f,a,b){
return emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),emmy.numerical.quadrature.bulirsch_stoer.bulirsch_stoer_steps], null));
});
var emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call__4 = (function (f,a,b,opts){
if((!(typeof new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(opts) === 'number'))){
} else {
throw (new Error("Assert failed: (not (number? (:n opts)))"));
}

var map__56188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),emmy.numerical.quadrature.bulirsch_stoer.bulirsch_stoer_steps], null),opts], 0));
var map__56188__$1 = cljs.core.__destructure_map(map__56188);
var opts__$1 = map__56188__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56188__$1,new cljs.core.Keyword(null,"n","n",562130025));
var extrapolate = emmy.numerical.quadrature.bulirsch_stoer.extrapolator_fn(opts__$1);
var square = (function (x){
return (x * x);
});
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(square,emmy.numerical.quadrature.bulirsch_stoer.h_sequence.cljs$core$IFn$_invoke$arity$3(a,b,n));
var ys = (integrator_seq_fn.cljs$core$IFn$_invoke$arity$4 ? integrator_seq_fn.cljs$core$IFn$_invoke$arity$4(f,a,b,opts__$1) : integrator_seq_fn.call(null,f,a,b,opts__$1));
var G__56191 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys);
return (extrapolate.cljs$core$IFn$_invoke$arity$1 ? extrapolate.cljs$core$IFn$_invoke$arity$1(G__56191) : extrapolate.call(null,G__56191));
});
emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call = function(f,a,b,opts){
switch(arguments.length){
case 3:
return emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call__3.call(this,f,a,b);
case 4:
return emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call__4.call(this,f,a,b,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call.cljs$core$IFn$_invoke$arity$3 = emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call__3;
emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call.cljs$core$IFn$_invoke$arity$4 = emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call__4;
return emmy$numerical$quadrature$bulirsch_stoer$bs_sequence_fn_$_call;
})()
});
/**
 * Returns a (lazy) sequence of successively refined estimates of the
 *   integral of `f` over the closed interval $[a, b]$ by applying rational
 *   polynomial extrapolation to successive integral estimates from the Midpoint
 *   rule.
 * 
 *   Returns estimates formed from the same estimates used by the Bulirsch-Stoer
 *   ODE solver, stored in `bulirsch-stoer-steps`.
 * 
 *   ### Optional arguments:
 * 
 *   `:n`: If supplied, `n` (sequence) overrides the sequence of steps to use.
 * 
 *   `:bs-extrapolator`: Pass `:polynomial` to override the default rational
 *   function extrapolation and enable polynomial extrapolation using the modified
 *   Neville's algorithm implemented in `poly/modified-neville`.
 */
emmy.numerical.quadrature.bulirsch_stoer.open_sequence = emmy.numerical.quadrature.bulirsch_stoer.bs_sequence_fn(emmy.numerical.quadrature.midpoint.midpoint_sequence);
/**
 * Returns a (lazy) sequence of successively refined estimates of the
 *   integral of `f` over the closed interval $[a, b]$ by applying rational
 *   polynomial extrapolation to successive integral estimates from the Trapezoid
 *   rule.
 * 
 *   Returns estimates formed from the same estimates used by the Bulirsch-Stoer
 *   ODE solver, stored in `bulirsch-stoer-steps`.
 * 
 *   ### Optional arguments:
 * 
 *   `:n`: If supplied, `:n` (sequence) overrides the sequence of steps to use.
 * 
 *   `:bs-extrapolator`: Pass `:polynomial` to override the default rational
 *   function extrapolation and enable polynomial extrapolation using the modified
 *   Neville's algorithm implemented in `poly/modified-neville`.
 */
emmy.numerical.quadrature.bulirsch_stoer.closed_sequence = emmy.numerical.quadrature.bulirsch_stoer.bs_sequence_fn(emmy.numerical.quadrature.trapezoid.trapezoid_sequence);
/**
 * Returns an estimate of the integral of `f` over the open interval $(a, b)$
 *   generated by applying rational polynomial extrapolation to successive integral
 *   estimates from the Midpoint rule.
 * 
 *   Considers successive numbers of windows into $(a, b)$ specified by
 *   `bulirsch-stoer-steps`.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[open-sequence]] for more information about Bulirsch-Stoer quadrature,
 *   caveats that might apply when using this integration method and information on
 *   the optional args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.bulirsch_stoer.open_integral = emmy.numerical.quadrature.common.make_integrator_fn(emmy.numerical.quadrature.midpoint.single_midpoint,emmy.numerical.quadrature.bulirsch_stoer.open_sequence);
/**
 * Returns an estimate of the integral of `f` over the closed interval $[a, b]$
 *   generated by applying rational polynomial extrapolation to successive integral
 *   estimates from the Trapezoid rule.
 * 
 *   Considers successive numbers of windows into $[a, b]$ specified by
 *   `bulirsch-stoer-steps`.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[closed-sequence]] for more information about Bulirsch-Stoer quadrature,
 *   caveats that might apply when using this integration method and information on
 *   the optional args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.bulirsch_stoer.closed_integral = emmy.numerical.quadrature.common.make_integrator_fn(emmy.numerical.quadrature.trapezoid.single_trapezoid,emmy.numerical.quadrature.bulirsch_stoer.closed_sequence);

//# sourceMappingURL=emmy.numerical.quadrature.bulirsch_stoer.js.map
