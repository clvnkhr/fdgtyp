goog.provide('emmy.numerical.unimin.brent');
/**
 * Brent's method terminates (ie converges) when `a` and `b` are narrow enough
 *   that `x` falls within `2 * tolerance` of both `a` and `b`, ie:
 * 
 *   `max(x - a, b - x) <= 2tol`
 * 
 *   From Numerical Recipes:
 * 
 *   "A typical ending configuration for Brent's method is that $a$ and $b$
 *   are `(* 2 midpoint tol)` apart, with $x$ (the best abscissa) at the midpoint
 *   of $a$ and $b$, and therefore fractionally accurate to +-tol." ~Numerical
 *   Recipes, 397.
 *   
 */
emmy.numerical.unimin.brent.terminate_QMARK_ = (function emmy$numerical$unimin$brent$terminate_QMARK_(a,x,b,tol2){
var half_ab = (0.5 * (b - a));
var mid = (0.5 * (a + b));
var mid__GT_x = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1((x - mid));
return ((mid__GT_x + half_ab) <= tol2);
});
/**
 * Returns a pair of:
 * 
 *   - The interval width between the new `a` and `b` after the algorithm completes
 *  this golden step
 *   - The delta that needs to be applied to `x` to take it into the larger of the
 *  two gaps between `a` and `b,` i.e., to `new_x`:
 * 
 *   `xa---------new_x<---xx------xb`
 * 
 *   NOTE that in Brent's algorithm, a golden section step wipes out the tracked
 *   history of `p/q` parabolic steps that the algorithm uses to decide between
 *   parabolic and golden section steps.
 * 
 *   The goal of the dance is to force a golden section step every $log_2((b - a) /
 *   tol1)$ steps by allowing a parabolic step as long as it halves the step taken
 *   two iterations ago. Without this reset the algorithm would attempt fewer
 *   beneficial parabolic steps.
 */
emmy.numerical.unimin.brent.golden_section_step = (function emmy$numerical$unimin$brent$golden_section_step(a,x,b){
var midpoint = (0.5 * (a + b));
var new_width = (((x >= midpoint))?(a - x):(b - x));
var step = (emmy.numerical.unimin.golden.inv_phi2 * new_width);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_width,step], null);
});
/**
 * The parabolic step `p/q` is valid if the step:
 * 
 *   - keeps the candidate point `x` inbounds, i.e., `a < x + p/q < b`
 *   - is at least 1/2 of `target`.
 * 
 *   `target` is a slightly tricky quantity, and depends on the type of step taken
 *   in the previous two iterations:
 * 
 *   -  *, golden: `target` == the full `(a, b)` interval `b - a`
 *   -  golden, *: `target` == the size of the step taken by the previous golden
 *   - para, para: `target` == `p/q` from two steps ago
 * 
 *   The idea is to force a golden section step every so often by narrowing the
 *   allowed jump that a parabolic step is allowed to take, and then widening the
 *   band to the full range whenever a golden section step occurs.
 * 
 *   Why the step before last? Experimentally (according to Brent) it works better
 *   than considering only the previous step, and aesthetically it feels right to
 *   give parabolic interpolation more than one try to do a nice job.
 */
emmy.numerical.unimin.brent.parabola_valid_QMARK_ = (function emmy$numerical$unimin$brent$parabola_valid_QMARK_(a,x,b,target,p,q){
var inbounds_QMARK_ = (((p > (q * (a - x)))) && ((p < (q * (b - x)))));
var lt_half_target_QMARK_ = (emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(p) < emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(((0.5 * q) * target)));
return ((inbounds_QMARK_) && (lt_half_target_QMARK_));
});
/**
 * Returns `x + delta`, guarding against any `delta` addition that would return a
 *   value outside of `(a, b)`. Specifically guards against these two cases:
 * 
 *   - If `x` + the supplied `delta` results in a point within 2*tol of either
 *  edge, `delta` is replaced with `tol1` pointing back toward the center of the
 *  interval `(a, b)`.
 * 
 *   - If `delta < tol1`, returns `x + tol1` in the direction of `delta`, to force
 *  a step of at least `tol1`.
 * 
 *   NOTE tol2 == 2*tol1.
 */
emmy.numerical.unimin.brent.apply_delta = (function emmy$numerical$unimin$brent$apply_delta(a,x,b,delta,tol1,tol2){
var x_PLUS_delta = (x + delta);
var near_edge_QMARK_ = ((((x_PLUS_delta - a) < tol2)) || (((b - x_PLUS_delta) < tol2)));
if(near_edge_QMARK_){
var middle = (0.5 * (a + b));
if((x <= middle)){
return (x + tol1);
} else {
return (x - tol1);
}
} else {
if((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(delta) < tol1)){
if((delta > (0))){
return (x + tol1);
} else {
return (x - tol1);
}
} else {
return x_PLUS_delta;

}
}
});
/**
 * Brent's method tracks the two best (non-candidate) points, so they can be used
 *   to fit a candidate parabolic step.
 * 
 *   This function accepts:
 * 
 *   - `x2` and `x1`, the previous two best non-candidates;
 *   - `x`, the previous candidate
 *   - `new-pt` the current new point
 * 
 *   and returns the third- and second-best points, i.e., the new `[x2, x1]`.
 * 
 *   NOTE on the implementation: the assumption is that `x2` and `x1` will be
 *   initialized to `x`, and that they'll be replaced by potentially WORSE values
 *   that appear for the first two steps.
 *   
 */
emmy.numerical.unimin.brent.update_history = (function emmy$numerical$unimin$brent$update_history(p__49300,p__49301,p__49302,p__49303){
var vec__49304 = p__49300;
var xx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49304,(0),null);
var fx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49304,(1),null);
var x2 = vec__49304;
var vec__49307 = p__49301;
var xx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49307,(0),null);
var fx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49307,(1),null);
var x1 = vec__49307;
var vec__49310 = p__49302;
var xx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49310,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49310,(1),null);
var x = vec__49310;
var vec__49313 = p__49303;
var xnew = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313,(0),null);
var fnew = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313,(1),null);
if((fnew <= fx)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x], null);
} else {
if((((fnew <= fx1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xx1,xx)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xnew,fnew], null)], null);
} else {
if((((fnew <= fx2)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xx2,xx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xx2,xx1)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xnew,fnew], null),x1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,x1], null);

}
}
}
});
/**
 * The default relative threshold used by Brent's method.
 */
emmy.numerical.unimin.brent.default_relative_threshold = 1.0E-11;
/**
 * The default absolute threshold used by Brent's method.
 */
emmy.numerical.unimin.brent.default_absolute_threshold = emmy.util.sqrt_machine_epsilon;
/**
 * Returns a initial guess for Brent's method, located at a 'golden cut' such that
 *   the ratio of `(- guess a)` to `(- b guess)` is the same as the ratio of `(- b
 *   guess)` to `(- b a)`:
 * 
 *   ```
 *   a---guess------b
 *   ```
 */
emmy.numerical.unimin.brent.initial_brent_guess = (function emmy$numerical$unimin$brent$initial_brent_guess(a,b){
return (a + (emmy.numerical.unimin.golden.inv_phi2 * (b - a)));
});
/**
 * Find the minimum of the function f: R -> R in the interval [a,b] using Brent's
 *   Method, described by Richard Brent in [Algorithms for Minimization without
 *   Derivatives](https://books.google.com/books?id=AITCAgAAQBAJ&q=Brent%E2%80%99s#v=onepage&q=Parabolic&f=false).
 * 
 *   Brent's method is a combination of a golden section search with a parabolic
 *   interpolation step. Parabolic interpolation can go wild if the candidate point
 *   is close to colinear with the search bounds, or of the points are too close
 *   together.
 * 
 *   Brent's method prevents this by applying an internal test that forces a golden
 *   section step every so often. (If you want the details, see `parabola-valid?`
 *   above.)
 * 
 *   [[brent-min]] supports the following optional keyword arguments:
 * 
 *   - `:callback`: if supplied, the supplied fn will be invoked at each
 *  intermediate point with the iteration count and the values of x and f(x) at
 *  each search step.
 * 
 *   - `:initial-guess`: the first internal point checked by the algorithm. Defaults
 *  to `([[initial-brent-guess]] a b)`.
 * 
 *   - `:relative-threshold`: multiplied by each guess to determine a relative
 *  threshold. Defaults to 1.0e-11.
 * 
 *   - `:absolute-threshold`: a smaller absolute threshold that applies when the
 *  candidate minimum point is close to 0. defaults to around 1.49e8, the sqrt of
 *  the machine tolerance. You won't gain any benefit attempting to set the value
 *  less than the default.
 * 
 *   - `:maxiter`: Maximum number of iterations allowed for the minimizer. Defaults
 *  to 1000.
 * 
 *   - `:maxfun`: Maximum number of times the function can be evaluated before
 *  exiting. Defaults to `(inc maxiter)`.
 *   
 */
emmy.numerical.unimin.brent.brent_min = (function emmy$numerical$unimin$brent$brent_min(var_args){
var G__49317 = arguments.length;
switch (G__49317) {
case 3:
return emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$3 = (function (f,a,b){
return emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4(f,a,b,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4 = (function (f,a,b,p__49319){
var map__49320 = p__49319;
var map__49320__$1 = cljs.core.__destructure_map(map__49320);
var relative_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49320__$1,new cljs.core.Keyword(null,"relative-threshold","relative-threshold",-1866138970),1.0E-11);
var absolute_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49320__$1,new cljs.core.Keyword(null,"absolute-threshold","absolute-threshold",842199714),emmy.numerical.unimin.brent.default_absolute_threshold);
var initial_guess = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49320__$1,new cljs.core.Keyword(null,"initial-guess","initial-guess",-1883142405),emmy.numerical.unimin.brent.initial_brent_guess(a,b));
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49320__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49320__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49320__$1,new cljs.core.Keyword(null,"callback","callback",-705136228),cljs.core.constantly(null));
var maxfun__$1 = (function (){var or__5162__auto__ = maxfun;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (maxiter + (1));
}
})();
var vec__49324 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.min.cljs$core$IFn$_invoke$arity$2(a,b),cljs.core.max.cljs$core$IFn$_invoke$arity$2(a,b)], null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324,(1),null);
var vec__49327 = emmy.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49327,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49327,(1),null);
var xmid = initial_guess;
var mid = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmid,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xmid) : f__$1.call(null,xmid))], null);
var G__49339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,mid,b__$1], null);
var vec__49341 = G__49339;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49341,(0),null);
var vec__49344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49341,(1),null);
var xx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49344,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49344,(1),null);
var x = vec__49344;
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49341,(2),null);
var G__49340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid,mid], null);
var vec__49347 = G__49340;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49347,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49347,(1),null);
var target = (0);
var delta = (0);
var iteration = (0);
var G__49339__$1 = G__49339;
var G__49340__$1 = G__49340;
var target__$1 = target;
var delta__$1 = delta;
var iteration__$1 = iteration;
while(true){
var vec__49374 = G__49339__$1;
var a__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49374,(0),null);
var vec__49377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49374,(1),null);
var xx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49377,(0),null);
var fx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49377,(1),null);
var x__$1 = vec__49377;
var b__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49374,(2),null);
var vec__49380 = G__49340__$1;
var x2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49380,(0),null);
var x1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49380,(1),null);
var target__$2 = target__$1;
var delta__$2 = delta__$1;
var iteration__$2 = iteration__$1;
var tol = (absolute_threshold + (relative_threshold * emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(xx__$1)));
var tol2 = ((2) * tol);
var converged_QMARK_ = emmy.numerical.unimin.brent.terminate_QMARK_(a__$3,xx__$1,b__$3,tol2);
(callback.cljs$core$IFn$_invoke$arity$3 ? callback.cljs$core$IFn$_invoke$arity$3(iteration__$2,xx__$1,fx__$1) : callback.call(null,iteration__$2,xx__$1,fx__$1));

if((((iteration__$2 > maxiter)) || ((((cljs.core.deref(f_counter) > maxfun__$1)) || (converged_QMARK_))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),xx__$1,new cljs.core.Keyword(null,"value","value",305978217),fx__$1,new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iteration__$2,new cljs.core.Keyword(null,"converged?","converged?",1779059976),converged_QMARK_,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter)], null);
} else {
var vec__49384 = (((emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(target__$2) <= tol))?emmy.numerical.unimin.brent.golden_section_step(a__$3,xx__$1,b__$3):(function (){var vec__49396 = emmy.numerical.unimin.bracket.parabolic_pieces(x1__$1,x__$1,x2__$1);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49396,(1),null);
if(emmy.numerical.unimin.brent.parabola_valid_QMARK_(a__$3,xx__$1,b__$3,target__$2,p,q)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta__$2,(p / q)], null);
} else {
return emmy.numerical.unimin.brent.golden_section_step(a__$3,xx__$1,b__$3);
}
})());
var new_target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(0),null);
var new_delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(1),null);
var xnew = emmy.numerical.unimin.brent.apply_delta(a__$3,xx__$1,b__$3,new_delta,tol,tol2);
var new_pt = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xnew,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xnew) : f__$1.call(null,xnew))], null);
var vec__49387 = (((xnew < xx__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_pt,x__$1], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,new_pt], null));
var vec__49390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49387,(0),null);
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(0),null);
var fl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(1),null);
var l = vec__49390;
var vec__49393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49387,(1),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49393,(0),null);
var fr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49393,(1),null);
var r = vec__49393;
var G__49529 = (((fl <= fr))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$3,l,xr], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,r,b__$3], null));
var G__49530 = emmy.numerical.unimin.brent.update_history(x2__$1,x1__$1,x__$1,new_pt);
var G__49531 = new_target;
var G__49532 = new_delta;
var G__49533 = (iteration__$2 + (1));
G__49339__$1 = G__49529;
G__49340__$1 = G__49530;
target__$1 = G__49531;
delta__$1 = G__49532;
iteration__$1 = G__49533;
continue;
}
break;
}
}));

(emmy.numerical.unimin.brent.brent_min.cljs$lang$maxFixedArity = 4);

/**
 * For convenience, we also provide the sister-procedure for finding the maximum
 *   of a unimodal function using Brent's method.
 * 
 *   Negate the function, minimize, negate the result.
 * 
 *   See [[brent-min]] for all supported `opts`.
 */
emmy.numerical.unimin.brent.brent_max = (function emmy$numerical$unimin$brent$brent_max(f,a,b,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate,f);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(emmy.numerical.unimin.brent.brent_min.cljs$core$IFn$_invoke$arity$4(_f,a,b,opts),new cljs.core.Keyword(null,"value","value",305978217),emmy.generic.negate);
});

//# sourceMappingURL=emmy.numerical.unimin.brent.js.map
