goog.provide('emmy.numerical.unimin.bracket');
emmy.numerical.unimin.bracket.epsilon = 1.0E-21;
/**
 * Returns the points ordered as f(a) < f(b)
 */
emmy.numerical.unimin.bracket.ascending_by = (function emmy$numerical$unimin$bracket$ascending_by(f,a,b){
var fa = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
var fb = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(b) : f.call(null,b));
if((fa < fb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,fa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,fb], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,fb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,fa], null)], null);
}
});
/**
 * Accepts three pairs of `[x, (f x)]`, fits a quadratic function to all three
 *   points and returns the step from `xb` (the coordinate of the second argument)
 *   to the minimum of the fitted quadratic.
 * 
 *   Returns the numerator and denominator `p` and `q` of the required step. If `q`
 *   is 0, then the supplied points were colinear.
 * 
 *   `q` is guaranteed to be `>= 0`, while `p` might be negative.
 * 
 *   See these notes for the derivation of this method:
 *   http://fourier.eng.hmc.edu/e176/lectures/NM/node25.html
 */
emmy.numerical.unimin.bracket.parabolic_pieces = (function emmy$numerical$unimin$bracket$parabolic_pieces(p__49119,p__49120,p__49121){
var vec__49124 = p__49119;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49124,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49124,(1),null);
var vec__49127 = p__49120;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(1),null);
var vec__49130 = p__49121;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49130,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49130,(1),null);
var _PERCENT_ = (function (){var tmp1 = ((xb - xa) * (fb - fc));
var tmp2 = ((xb - xc) * (fb - fa));
var v = (tmp2 - tmp1);
var p = (((xb - xc) * tmp2) - ((xb - xa) * tmp1));
var q = (2.0 * v);
if((q > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(p),q], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(q)], null);
}
})();
if(cljs.core.truth_((function (p1__49111_SHARP_){
return (cljs.core.second(p1__49111_SHARP_) >= (0));
}))){
} else {
throw (new Error("Assert failed: (fn* [p1__49111#] (>= (second p1__49111#) 0))"));
}

return _PERCENT_;
});
/**
 * Fits a parabola through all three points, and returns the coordinate of the
 *   minimum of the parabola.
 * 
 *   If the supplied points are colinear, returns a point that takes a large jump
 *   in the direction of the downward slope of the line.
 */
emmy.numerical.unimin.bracket.parabolic_step = (function emmy$numerical$unimin$bracket$parabolic_step(a,p__49140,c){
var vec__49142 = p__49140;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49142,(0),null);
var b = vec__49142;
var two_eps = (2.0 * 1.0E-21);
var vec__49148 = emmy.numerical.unimin.bracket.parabolic_pieces(a,b,c);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49148,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49148,(1),null);
var q__$1 = (((q < two_eps))?two_eps:q);
return (xb + (p / q__$1));
});
/**
 * Returns a function that performs steps of bracket extension.
 * 
 *   :grow-limit is the maximum factor that the parabolic interpolation can jump
 *   the function.
 */
emmy.numerical.unimin.bracket.bracket_step_fn = (function emmy$numerical$unimin$bracket$bracket_step_fn(f,p__49161){
var map__49162 = p__49161;
var map__49162__$1 = cljs.core.__destructure_map(map__49162);
var grow_limit = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49162__$1,new cljs.core.Keyword(null,"grow-limit","grow-limit",2130208943),110.0);
return (function (a,p__49163,p__49164){
var vec__49165 = p__49163;
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49165,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49165,(1),null);
var b = vec__49165;
var vec__49168 = p__49164;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49168,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49168,(1),null);
var c = vec__49168;
var wlim = (xb + (grow_limit * (xc - xb)));
var w = emmy.numerical.unimin.bracket.parabolic_step(a,b,c);
if((((xb <= w)) && ((w <= xc)))){
var fw = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(w) : f.call(null,w));
if((fw < fc)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null),c], null);
} else {
if((fw > fb)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null)], null);
} else {
var new_c = emmy.numerical.unimin.golden.extend_pt(xc,xb);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_c) : f.call(null,new_c))], null)], null);

}
}
} else {
if((((xc <= w)) && ((w <= wlim)))){
var fw = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(w) : f.call(null,w));
if((fw < fc)){
var new_c = emmy.numerical.unimin.golden.extend_pt(w,xc);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_c) : f.call(null,new_c))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,fw], null)], null);
}
} else {
if((((xc <= wlim)) && ((wlim <= w)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wlim,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(wlim) : f.call(null,wlim))], null)], null);
} else {
var new_c = emmy.numerical.unimin.golden.extend_pt(xc,xb);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new_c) : f.call(null,new_c))], null)], null);

}
}
}
});
});
/**
 * Generates an interval `[lo, hi]` that is guaranteed to contain a minimum of the
 *   function `f`, along with a candidate point `[mid, (f mid)]` that the user can
 *   use to start a minimum search.
 * 
 *   Returns a dictionary of the form:
 * 
 *   {:lo `lower end of the bracket`
 * :mid `candidate point`
 * :hi `upper end of the bracket`
 * :fncalls `# of fn evaluations so far`
 * :iterations `total iterations`}
 * 
 *   `:lo`, `:mid` and `:hi` are each pairs of the form `[x, (f x)]`.
 * 
 *   The implementation works by growing the bounds using either:
 * 
 *   - a step outside the bounds that places one bound at the golden-ratio cut
 *   point between the new bounds, or
 *   - a parabola with a minimum interpolated outside the current bounds, bounded b
 *   a max.
 * 
 *   This implementation was ported from `scipy.optimize.optimize.bracket`:
 *   https://github.com/scipy/scipy/blob/v1.5.2/scipy/optimize/optimize.py#L2450
 * 
 *   `bracket-min` supports the following optional keyword arguments:
 * 
 *   `:xa` the initial guess for the lower end of the bracket. Defaults to 0.0.
 * 
 *   `:xb` the initial guess for the upper end of the bracket. Defaults to 1.0. (If
 *   these points aren't supplied in sorted order they'll be switched.)
 * 
 *   `:grow-limit` The maximum factor that the parabolic interpolation can jump the
 *   function. Defaults to 110.0.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   1000.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 1000.
 *   
 */
emmy.numerical.unimin.bracket.bracket_min = (function emmy$numerical$unimin$bracket$bracket_min(var_args){
var G__49174 = arguments.length;
switch (G__49174) {
case 1:
return emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2 = (function (f,p__49177){
var map__49178 = p__49177;
var map__49178__$1 = cljs.core.__destructure_map(map__49178);
var opts = map__49178__$1;
var xa = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49178__$1,new cljs.core.Keyword(null,"xa","xa",-251918777),0.0);
var xb = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49178__$1,new cljs.core.Keyword(null,"xb","xb",-1641297359),1.0);
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49178__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000));
var maxfun = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49178__$1,new cljs.core.Keyword(null,"maxfun","maxfun",-50301814),(1000));
var vec__49179 = emmy.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49179,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49179,(1),null);
var step = emmy.numerical.unimin.bracket.bracket_step_fn(f__$1,opts);
var stop_fn = (function (_,p__49191,p__49192,iteration){
var vec__49194 = p__49191;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49194,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49194,(1),null);
var vec__49197 = p__49192;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49197,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49197,(1),null);
return (((iteration > maxiter)) || ((((cljs.core.deref(f_counter) > maxfun)) || ((fb <= fc)))));
});
var complete = (function (p__49207,b,p__49208,iterations){
var vec__49210 = p__49207;
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49210,(0),null);
var a = vec__49210;
var vec__49213 = p__49208;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49213,(0),null);
var c = vec__49213;
var m = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lo","lo",-931799889),a,new cljs.core.Keyword(null,"mid","mid",-2123385246),b,new cljs.core.Keyword(null,"hi","hi",-1821422114),c,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iterations], null);
if((xc < xa__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"lo","lo",-931799889),c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hi","hi",-1821422114),a], 0));
} else {
return m;
}
});
var vec__49182 = emmy.numerical.unimin.bracket.ascending_by(f__$1,xa,xb);
var vec__49185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49182,(0),null);
var xb__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49185,(0),null);
var b = vec__49185;
var vec__49188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49182,(1),null);
var xa__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49188,(0),null);
var a = vec__49188;
var xc = emmy.numerical.unimin.golden.extend_pt(xb__$1,xa__$1);
var fc = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xc) : f__$1.call(null,xc));
var G__49226 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,fc], null)], null);
var vec__49227 = G__49226;
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49227,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49227,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49227,(2),null);
var iteration = (0);
var G__49226__$1 = G__49226;
var iteration__$1 = iteration;
while(true){
var vec__49233 = G__49226__$1;
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(0),null);
var b__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49233,(2),null);
var iteration__$2 = iteration__$1;
if(stop_fn(a__$2,b__$2,c__$1,iteration__$2)){
return complete(a__$2,b__$2,c__$1,iteration__$2);
} else {
var G__49291 = step(a__$2,b__$2,c__$1);
var G__49292 = (iteration__$2 + (1));
G__49226__$1 = G__49291;
iteration__$1 = G__49292;
continue;
}
break;
}
}));

(emmy.numerical.unimin.bracket.bracket_min.cljs$lang$maxFixedArity = 2);

/**
 * Identical to bracket-min, except brackets a maximum of the supplied fn.
 */
emmy.numerical.unimin.bracket.bracket_max = (function emmy$numerical$unimin$bracket$bracket_max(var_args){
var G__49237 = arguments.length;
switch (G__49237) {
case 1:
return emmy.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.bracket.bracket_max.cljs$core$IFn$_invoke$arity$2 = (function (f,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate,f);
return emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2(_f,opts);
}));

(emmy.numerical.unimin.bracket.bracket_max.cljs$lang$maxFixedArity = 2);

/**
 *  Given a function f, a starting point and a step size, try to bracket a local
 *   extremum for f.
 * 
 *   Return a list (retcode a b c fa fb fc iter-count) where a < b < c, and fa, fb,
 *   fc are the function values at these points. In the case of a minimum, fb
 *   <= (min fa fc); the opposite inequality holds in the case of a maximum.
 * 
 *   iter-count is the number of function evaluations required. retcode is 'okay if
 *   the search succeeded, or 'maxcount if it was abandoned.
 *   
 */
emmy.numerical.unimin.bracket.bracket_min_scmutils = (function emmy$numerical$unimin$bracket$bracket_min_scmutils(var_args){
var G__49239 = arguments.length;
switch (G__49239) {
case 1:
return emmy.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.bracket.bracket_min_scmutils.cljs$core$IFn$_invoke$arity$2 = (function (f,p__49240){
var map__49241 = p__49240;
var map__49241__$1 = cljs.core.__destructure_map(map__49241);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49241__$1,new cljs.core.Keyword(null,"start","start",-355208981),(0));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49241__$1,new cljs.core.Keyword(null,"step","step",1288888124),(10));
var maxiter = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49241__$1,new cljs.core.Keyword(null,"maxiter","maxiter",-1867223754),(1000));
var vec__49242 = emmy.util.counted.cljs$core$IFn$_invoke$arity$1(f);
var f_counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49242,(0),null);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49242,(1),null);
var stop_fn = (function (p__49254,p__49255,p__49256,iteration){
var vec__49257 = p__49254;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49257,(1),null);
var vec__49260 = p__49255;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(0),null);
var fb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49260,(1),null);
var vec__49263 = p__49256;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(0),null);
var fc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49263,(1),null);
return (((iteration > maxiter)) || ((fb <= cljs.core.min.cljs$core$IFn$_invoke$arity$2(fa,fc))));
});
var complete = (function (p__49266,b,p__49267,iterations){
var vec__49268 = p__49266;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49268,(0),null);
var a = vec__49268;
var vec__49271 = p__49267;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(0),null);
var c = vec__49271;
var m = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lo","lo",-931799889),a,new cljs.core.Keyword(null,"mid","mid",-2123385246),b,new cljs.core.Keyword(null,"hi","hi",-1821422114),c,new cljs.core.Keyword(null,"fncalls","fncalls",-71376182),cljs.core.deref(f_counter),new cljs.core.Keyword(null,"converged?","converged?",1779059976),(iterations <= maxiter),new cljs.core.Keyword(null,"iterations","iterations",-1402710890),iterations], null);
if((xc < xa)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"lo","lo",-931799889),c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hi","hi",-1821422114),a], 0));
} else {
return m;
}
});
var run = (function (p__49274,b,p__49275,iter){
while(true){
var vec__49276 = p__49274;
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49276,(0),null);
var a = vec__49276;
var vec__49279 = p__49275;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49279,(0),null);
var c = vec__49279;
if(stop_fn(a,b,c,iter)){
return complete(a,b,c,iter);
} else {
var xd = (xc + (xc - xa));
var G__49295 = b;
var G__49296 = c;
var G__49297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xd,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xd) : f__$1.call(null,xd))], null);
var G__49298 = (iter + (1));
p__49274 = G__49295;
b = G__49296;
p__49275 = G__49297;
iter = G__49298;
continue;
}
break;
}
});
var vec__49245 = emmy.numerical.unimin.bracket.ascending_by(f__$1,start,(start + step));
var vec__49248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245,(0),null);
var xb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248,(0),null);
var b = vec__49248;
var vec__49251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245,(1),null);
var xa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49251,(0),null);
var a = vec__49251;
var xc = (xb + (xb - xa));
return run(a,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(xc) : f__$1.call(null,xc))], null),(0));
}));

(emmy.numerical.unimin.bracket.bracket_min_scmutils.cljs$lang$maxFixedArity = 2);

/**
 * Identical to bracket-min-scmutils, except brackets a maximum of the supplied
 *   fn.
 */
emmy.numerical.unimin.bracket.bracket_max_scmutils = (function emmy$numerical$unimin$bracket$bracket_max_scmutils(var_args){
var G__49283 = arguments.length;
switch (G__49283) {
case 1:
return emmy.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.unimin.bracket.bracket_max_scmutils.cljs$core$IFn$_invoke$arity$2 = (function (f,opts){
var _f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate,f);
return emmy.numerical.unimin.bracket.bracket_min.cljs$core$IFn$_invoke$arity$2(_f,opts);
}));

(emmy.numerical.unimin.bracket.bracket_max_scmutils.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.numerical.unimin.bracket.js.map
