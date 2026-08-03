goog.provide('emmy.numerical.quadrature.boole');
/**
 * Returns a (lazy) sequence of successively refined estimates of the integral of
 *   `f` over the closed interval $[a, b]$ using Boole's rule.
 * 
 *   Boole's rule is equivalent to the trapezoid method subject to two refinements
 *   of Richardson extrapolation. The trapezoid method fits a line to each
 *   integration slice. Boole's rule fits a quartic to each slice.
 * 
 *   Returns estimates with $n, 2n, 4n, ...$ slices, geometrically increasing by a
 *   factor of 2 with each estimate.
 * 
 *   ### Optional arguments:
 * 
 *   If supplied, `:n` (default 1) specifies the initial number of slices to use.
 */
emmy.numerical.quadrature.boole.boole_sequence = (function emmy$numerical$quadrature$boole$boole_sequence(var_args){
var G__56123 = arguments.length;
switch (G__56123) {
case 3:
return emmy.numerical.quadrature.boole.boole_sequence.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.quadrature.boole.boole_sequence.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.quadrature.boole.boole_sequence.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.quadrature.boole.boole_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(1)], null));
}));

(emmy.numerical.quadrature.boole.boole_sequence.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__56124){
var map__56125 = p__56124;
var map__56125__$1 = cljs.core.__destructure_map(map__56125);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56125__$1,new cljs.core.Keyword(null,"n","n",562130025),(1));
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

return emmy.polynomial.richardson.richardson_column.cljs$core$IFn$_invoke$arity$5(emmy.numerical.quadrature.trapezoid.trapezoid_sequence.cljs$core$IFn$_invoke$arity$4(f,a,b,n),(2),(2),(2),(2));
}));

(emmy.numerical.quadrature.boole.boole_sequence.cljs$lang$maxFixedArity = 4);

/**
 * Returns an estimate of the integral of `f` over the closed interval $[a, b]$
 *   using Boole's rule with $1, 2, 4 ... 2^n$ windows for each estimate.
 * 
 *   Optionally accepts `opts`, a dict of optional arguments. All of these get
 *   passed on to `us/seq-limit` to configure convergence checking.
 * 
 *   See `boole-sequence` for more information about Boole's rule, caveats that
 *   might apply when using this integration method and information on the optional
 *   args in `opts` that customize this function's behavior.
 */
emmy.numerical.quadrature.boole.integral = emmy.numerical.quadrature.common.make_integrator_fn(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,emmy.numerical.quadrature.boole.boole_sequence),emmy.numerical.quadrature.boole.boole_sequence);

//# sourceMappingURL=emmy.numerical.quadrature.boole.js.map
