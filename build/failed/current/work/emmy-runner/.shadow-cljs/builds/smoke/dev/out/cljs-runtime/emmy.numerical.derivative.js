goog.provide('emmy.numerical.derivative');
/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   forward-difference estimate of the the first derivative of `f` at point `x`:
 * 
 *   ```
 *   f'(x) = [f(x + h) - f(x)] / h
 *   ```
 * 
 *   Optionally accepts a third argument `fx == (f x)`, in case you've already
 *   calculated it elsewhere and would like to save a function evaluation.
 */
emmy.numerical.derivative.forward_difference = (function emmy$numerical$derivative$forward_difference(var_args){
var G__58552 = arguments.length;
switch (G__58552) {
case 2:
return emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3(f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}));

(emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3 = (function (f,x,fx){
return (function (h){
return (((function (){var G__58557 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58557) : f.call(null,G__58557));
})() - fx) / h);
});
}));

(emmy.numerical.derivative.forward_difference.cljs$lang$maxFixedArity = 3);

/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   backward-difference estimate of the first derivative of `f` at point `x`:
 * 
 *   ```
 *   f'(x) = [f(x) - f(x - h)] / h
 *   ```
 * 
 *   Optionally accepts a third argument `fx == (f x)`, in case you've already
 *   calculated it elsewhere and would like to save a function evaluation.
 */
emmy.numerical.derivative.backward_difference = (function emmy$numerical$derivative$backward_difference(var_args){
var G__58561 = arguments.length;
switch (G__58561) {
case 2:
return emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3(f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}));

(emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3 = (function (f,x,fx){
return (function (h){
return ((fx - (function (){var G__58564 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58564) : f.call(null,G__58564));
})()) / h);
});
}));

(emmy.numerical.derivative.backward_difference.cljs$lang$maxFixedArity = 3);

/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   central-difference estimate of the first derivative of `f` at point `x`:
 * 
 *   ```
 *   f'(x) = [f(x + h) - f(x - h)] / 2h
 *   ```
 */
emmy.numerical.derivative.central_difference = (function emmy$numerical$derivative$central_difference(f,x){
return (function (h){
return (((function (){var G__58565 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58565) : f.call(null,G__58565));
})() - (function (){var G__58567 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58567) : f.call(null,G__58567));
})()) / ((2) * h));
});
});
/**
 * Returns a single-variable function of a step size `h` that calculates the
 *   central-difference estimate of the second derivative of `f` at point `x`:
 * 
 *   f''(x) = [f(x + h) - 2f(x) + f(x - h)] / h^2
 * 
 *   Optionally accepts a third argument `fx == (f x)`, in case you've already
 *   calculated it elsewhere and would like to save a function evaluation.
 */
emmy.numerical.derivative.central_difference_d2 = (function emmy$numerical$derivative$central_difference_d2(var_args){
var G__58570 = arguments.length;
switch (G__58570) {
case 2:
return emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3(f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}));

(emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3 = (function (f,x,fx){
var fx_STAR_2 = ((2) * fx);
return (function (h){
return ((((function (){var G__58579 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58579) : f.call(null,G__58579));
})() + (function (){var G__58580 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58580) : f.call(null,G__58580));
})()) - fx_STAR_2) / (h * h));
});
}));

(emmy.numerical.derivative.central_difference_d2.cljs$lang$maxFixedArity = 3);

emmy.numerical.derivative.make_derivative_fn = (function emmy$numerical$derivative$make_derivative_fn(f){
return (function (x){
var h = 1.0E-5;
return emmy.numerical.derivative.central_difference(f,x)(h);
});
});
emmy.numerical.derivative.central_diff_stream = (function emmy$numerical$derivative$central_diff_stream(f,x,h){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.numerical.derivative.central_difference(f,x),emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$2((2),h));
});
/**
 * Returns the number of 'roundoff units', i.e., multiples of the machine epsilon,
 *   that roundoff error contributes to the total relative error, given a relative
 *   error percentage estimated for some initial step size $h$.
 */
emmy.numerical.derivative.roundoff_units = (function emmy$numerical$derivative$roundoff_units(rel_error_ratio){
return (Math.floor(Math.abs(rel_error_ratio)) + (1));
});
/**
 * Solution for `n`, in:
 * 
 *   `initial-error` * 2^n <= `tolerance`
 */
emmy.numerical.derivative.max_iterations = (function emmy$numerical$derivative$max_iterations(units,tolerance){
var initial_error = (emmy.util.machine_epsilon * units);
return Math.floor((Math.log((tolerance / initial_error)) / Math.log((2))));
});
/**
 * Generates a default max number of terms, based on roundoff error estimates.
 */
emmy.numerical.derivative.terms_before_roundoff = (function emmy$numerical$derivative$terms_before_roundoff(ratio,tolerance){
return (emmy.numerical.derivative.max_iterations(emmy.numerical.derivative.roundoff_units(ratio),tolerance) + (1));
});
emmy.numerical.derivative.valid_methods = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"central","central",467059073),null,new cljs.core.Keyword(null,"central-d2","central-d2",1063418821),null,new cljs.core.Keyword(null,"forward","forward",-557345303),null,new cljs.core.Keyword(null,"backward","backward",554036364),null], null), null);
emmy.numerical.derivative.configs = (function emmy$numerical$derivative$configs(method,f,x,fx){
var G__58600 = method;
var G__58600__$1 = (((G__58600 instanceof cljs.core.Keyword))?G__58600.fqn:null);
switch (G__58600__$1) {
case "forward":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"q","q",689001697),(1),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / ((function (){var G__58602 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58602) : f.call(null,G__58602));
})() - fx));
})], null);

break;
case "central":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"q","q",689001697),(2),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.central_difference(f,x),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / ((function (){var G__58603 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58603) : f.call(null,G__58603));
})() - (function (){var G__58604 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58604) : f.call(null,G__58604));
})()));
})], null);

break;
case "backward":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"q","q",689001697),(1),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / (fx - (function (){var G__58605 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58605) : f.call(null,G__58605));
})()));
})], null);

break;
case "central-d2":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"q","q",689001697),(2),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (((function (){var G__58608 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58608) : f.call(null,G__58608));
})() + (function (){var G__58609 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58609) : f.call(null,G__58609));
})()) - ((2) * fx));
})], null);

break;
default:
return emmy.util.illegal((""+"Invalid method: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+". Please try one of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.numerical.derivative.valid_methods)));

}
});
/**
 * Fills in default values required by `D-numeric`. Any option not used by
 *   `D-numeric` gets passed on to `us/seq-limit`.
 */
emmy.numerical.derivative.fill_defaults = (function emmy$numerical$derivative$fill_defaults(m){
var defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tolerance","tolerance",406811818),emmy.util.sqrt_machine_epsilon,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"central","central",467059073)], null);
var map__58612 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,m], 0));
var map__58612__$1 = cljs.core.__destructure_map(map__58612);
var opts = map__58612__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"method","method",55703592));
if(cljs.core.contains_QMARK_(emmy.numerical.derivative.valid_methods,method)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)+" is not a valid method. Please try one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.numerical.derivative.valid_methods)))+"\n"+"(contains? valid-methods method)")));
}

return opts;
});
/**
 * Takes a function `f: R => R` (function of a single real variable), and returns
 *   a new function of `x` that approximates the derivative $Df(x)$ (or $D^2f(x)$
 *   if you pass `:method :central-d2`).
 * 
 *   Returns the estimated value of the derivative at `x`. If you pass `:info?
 *   true`, the fn returns a dictionary of the results of `us/seq-limit`:
 * 
 *   ```clojure
 *   {:converged? <boolean>
 * :terms-checked <int>
 * :result <derivative estimate>}
 *   ```
 * 
 *   Make sure to visit [[emmy.calculus.derivative/D]] if you want symbolic or
 *   automatic differentiation.
 * 
 *   ### Roundoff Estimate
 * 
 *   The returned function will attempt to estimate how many times it can halve the
 *   step size used to estimate the derivative before roundoff error swamps the
 *   calculation, and force the function to return (with `:converged? false`, if
 *   you pass `:info?`)
 * 
 *   ### Optional Arguments
 * 
 *   `D-numeric` takes optional args as its second param. Any of these can be
 *   overridden by passing a second argument to the function returned by
 *   `D-numeric`; helpful for setting defaults and then overriding them later.
 * 
 *   The returned function passes through these and any other options to
 *   `us/seq-limit`, where they control the sequence of richardson
 *   extrapolation-accelerated estimates.
 * 
 *   Options:
 * 
 *   - `:method`: one of `:central`, `:central-d2`, `:forward` or `:backward`.
 *   `:central-d2` forces a second derivative estimate; the other methods configure
 *   a first derivative estimator.
 * 
 *   - `:info?` if false (default), returns the estimated value of `x`. If true,
 *   returns a dictionary with more information (see `D-numeric`'s docstring for
 *   more info.)
 * 
 *   - `:initial-h`: the initial `h` to use for derivative estimates before $h 	o
 *   0$. Defaults to `0.1 * abs(x)`.
 * 
 *   - `:tolerance`: see `us/stream-limit` for a discussion of how this value
 *   handles relative vs absolute tolerance. $\sqrt(\epsilon)$ by default, where
 *   $\epsilon$ = machine tolerance.
 * 
 *   - `:maxterms`: the maximum number of terms to consider when hunting for a
 *   derivative estimate. This defaults to an estimate generated internally,
 *   designed to prevent roundoff error from swamping the result. If you want to
 *   disable this feature, set `:maxterms` to something moderately large, like
 *   `:maxterms 100`. But do so carefully! See the surrounding namespace for a
 *   larger discussion.
 */
emmy.numerical.derivative.D_numeric = (function emmy$numerical$derivative$D_numeric(var_args){
var G__58618 = arguments.length;
switch (G__58618) {
case 1:
return emmy.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.numerical.derivative.D_numeric.cljs$core$IFn$_invoke$arity$2 = (function (f,opts){
var opts__$1 = emmy.numerical.derivative.fill_defaults(opts);
return (function() {
var emmy$numerical$derivative$df = null;
var emmy$numerical$derivative$df__1 = (function (x){
return emmy$numerical$derivative$df.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$numerical$derivative$df__2 = (function (x,overrides){
var map__58621 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,overrides], 0));
var map__58621__$1 = cljs.core.__destructure_map(map__58621);
var opts__$2 = map__58621__$1;
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818));
var initial_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"initial-h","initial-h",213105060));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"method","method",55703592));
var info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58621__$1,new cljs.core.Keyword(null,"info?","info?",361925553));
var map__58624 = emmy.numerical.derivative.configs(method,f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
var map__58624__$1 = cljs.core.__destructure_map(map__58624);
var ratio_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920));
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"q","q",689001697));
var h = (function (){var or__5162__auto__ = initial_h;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0.1 * emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(x));
}
})();
var n = (function (){var or__5162__auto__ = maxterms;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.numerical.derivative.terms_before_roundoff((ratio_fn.cljs$core$IFn$_invoke$arity$1 ? ratio_fn.cljs$core$IFn$_invoke$arity$1(h) : ratio_fn.call(null,h)),tolerance);
}
})();
var estimates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(function$,emmy.util.stream.zeno.cljs$core$IFn$_invoke$arity$2((2),h));
var result = emmy.util.stream.seq_limit.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.richardson.richardson_sequence.cljs$core$IFn$_invoke$arity$4(estimates,(2),p,q),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$2,new cljs.core.Keyword(null,"maxterms","maxterms",951779603),n));
if(cljs.core.truth_(info_QMARK_)){
return result;
} else {
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
}
});
emmy$numerical$derivative$df = function(x,overrides){
switch(arguments.length){
case 1:
return emmy$numerical$derivative$df__1.call(this,x);
case 2:
return emmy$numerical$derivative$df__2.call(this,x,overrides);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$numerical$derivative$df.cljs$core$IFn$_invoke$arity$1 = emmy$numerical$derivative$df__1;
emmy$numerical$derivative$df.cljs$core$IFn$_invoke$arity$2 = emmy$numerical$derivative$df__2;
return emmy$numerical$derivative$df;
})()
}));

(emmy.numerical.derivative.D_numeric.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.numerical.derivative.js.map
