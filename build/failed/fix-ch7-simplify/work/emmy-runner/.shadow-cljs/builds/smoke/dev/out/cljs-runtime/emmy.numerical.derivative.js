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
var G__58393 = arguments.length;
switch (G__58393) {
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
return (((function (){var G__58397 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58397) : f.call(null,G__58397));
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
var G__58399 = arguments.length;
switch (G__58399) {
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
return ((fx - (function (){var G__58400 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58400) : f.call(null,G__58400));
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
return (((function (){var G__58404 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58404) : f.call(null,G__58404));
})() - (function (){var G__58405 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58405) : f.call(null,G__58405));
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
var G__58408 = arguments.length;
switch (G__58408) {
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
return ((((function (){var G__58420 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58420) : f.call(null,G__58420));
})() + (function (){var G__58421 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58421) : f.call(null,G__58421));
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
var G__58443 = method;
var G__58443__$1 = (((G__58443 instanceof cljs.core.Keyword))?G__58443.fqn:null);
switch (G__58443__$1) {
case "forward":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"q","q",689001697),(1),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.forward_difference.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / ((function (){var G__58447 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58447) : f.call(null,G__58447));
})() - fx));
})], null);

break;
case "central":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"q","q",689001697),(2),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.central_difference(f,x),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / ((function (){var G__58452 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58452) : f.call(null,G__58452));
})() - (function (){var G__58453 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58453) : f.call(null,G__58453));
})()));
})], null);

break;
case "backward":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(1),new cljs.core.Keyword(null,"q","q",689001697),(1),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.backward_difference.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (fx / (fx - (function (){var G__58455 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58455) : f.call(null,G__58455));
})()));
})], null);

break;
case "central-d2":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p","p",151049309),(2),new cljs.core.Keyword(null,"q","q",689001697),(2),new cljs.core.Keyword(null,"function","function",-2127255473),emmy.numerical.derivative.central_difference_d2.cljs$core$IFn$_invoke$arity$3(f,x,fx),new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920),(function (h){
return (((function (){var G__58461 = (x + h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58461) : f.call(null,G__58461));
})() + (function (){var G__58462 = (x - h);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58462) : f.call(null,G__58462));
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
var map__58463 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,m], 0));
var map__58463__$1 = cljs.core.__destructure_map(map__58463);
var opts = map__58463__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword(null,"method","method",55703592));
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
var G__58469 = arguments.length;
switch (G__58469) {
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
var map__58472 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1,overrides], 0));
var map__58472__$1 = cljs.core.__destructure_map(map__58472);
var opts__$2 = map__58472__$1;
var maxterms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"maxterms","maxterms",951779603));
var tolerance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"tolerance","tolerance",406811818));
var initial_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"initial-h","initial-h",213105060));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"method","method",55703592));
var info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58472__$1,new cljs.core.Keyword(null,"info?","info?",361925553));
var map__58473 = emmy.numerical.derivative.configs(method,f,x,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
var map__58473__$1 = cljs.core.__destructure_map(map__58473);
var ratio_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"ratio-fn","ratio-fn",1226148920));
var function$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword(null,"q","q",689001697));
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
