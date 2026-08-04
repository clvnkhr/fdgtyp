goog.provide('emmy.numerical.quadrature.simpson38');
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $[a, b]$ using Simpson's 3/8 rule.
 * 
 *   Simpson's 3/8 rule is equivalent to the trapezoid method subject to:
 * 
 *   - one refinement of Richardson extrapolation, and
 * 
 *   - a geometric increase of integration slices by a factor of 3 for each
 *   sequence element. (the Trapezoid method increases by a factor of 2 by
 *   default.)
 * 
 *   The trapezoid method fits a line to each integration slice. Simpson's 3/8 rule
 *   fits a cubic to each slice.
 * 
 *   Returns estimates with $n, 3n, 9n, ...n3^i$ slices, geometrically increasing by a
 *   factor of 3 with each estimate.
 * 
 *   ### Optional arguments:
 * 
 *   If supplied, `:n` (default 1) specifies the initial number of slices to use.
 * 
 *   NOTE: the Trapezoid method is able to reuse function evaluations as its
 *   windows narrow /only/ when increasing the number of integration slices by 2.
 *   Simpson's 3/8 rule increases the number of slices geometrically by a factor of
 *   3 each time, so it will never hit the incremental path. You may want to
 *   memoize your function before calling `simpson38-sequence`.
 */
emmy.numerical.quadrature.simpson38.simpson38_sequence = (function emmy$numerical$quadrature$simpson38$simpson38_sequence(var_args){
var G__56644 = arguments.length;
switch (G__56644) {
case 3:
return emmy.numerical.quadrature.simpson38.simpson38_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.simpson38.simpson38_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.simpson38.simpson38_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.simpson38.simpson38_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null));
}));

(emmy.numerical.quadrature.simpson38.simpson38_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56668){
var map__56669 = p__56668;
var map__56669__$1 = cljs.core.__destructure_map(map__56669);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56669__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return emmy.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$5(emmy.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),emmy.util.stream.powers.cljs$core$IFn$_invoke$arity$2((3),n)], null)),(1),(3),(2),(2));
}));

(emmy.numerical.quadrature.simpson38.simpson38_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the closed interval $[a, b]$
 *   using Simpson's 3/8 rule with $1, 3, 9 ... 3^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See [[simpson38-sequence]] for more information about Simpson's 3/8 rule, caveats
 *   that might apply when using this integration method and information on the
 *   optional args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.simpson38.integral = emmy.numerical.quadrature.common.make_integrator_fn(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,emmy.numerical.quadrature.simpson38.simpson38_sequence),emmy.numerical.quadrature.simpson38.simpson38_sequence);

//# sourceMappingURL=emmy.numerical.quadrature.simpson38.js.map
