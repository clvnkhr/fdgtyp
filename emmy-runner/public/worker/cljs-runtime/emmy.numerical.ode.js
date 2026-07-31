import "./cljs_env.js";
import "./cljs.core.js";
import "./module$node_modules$odex$src$odex.js";
import "./clojure.core.reducers.js";
import "./emmy.expression.compile.js";
import "./emmy.structure.js";
import "./emmy.value.js";
import "./taoensso.timbre.js";
goog.provide('emmy.numerical.ode');
var module$node_modules$odex$src$odex=shadow.js.require("module$node_modules$odex$src$odex", {});
emmy.numerical.ode.near_QMARK_ = emmy.value.within(1.0E-8);
emmy.numerical.ode.default_epsilon = 1.0E-8;
/**
 * Copy the sequence `xs` into the primitive double array `arr`.
 */
emmy.numerical.ode.flatten_into_primitive_array = (function emmy$numerical$ode$flatten_into_primitive_array(xs,arr){
var ix = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((function (a,x){
(a[cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ix,cljs.core.unchecked_inc)] = x);

return a;
}),arr,clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1(xs));
});
/**
 * Produces a function, monotonic in its single numeric argument,
 * that represents the integral of the function f' given the initial
 * data $y_0 = f(x_0)$ and an options dictionary (presently containing
 * the tolerance for error $\epsilon$, but eventually also selecting
 * from a menu of integration techniques).
 * 
 * This is done by creating an adaptive step-size ODE solver, and
 * advancing its steps as needed to supply function values. (This
 * architecture accounts for why the arguments to f must be presented
 * in order). Old solution segments are discarded. The goal of this
 * approach is to avoid the requirement of supplying an upper limit
 * to the integration. At the cost of requiring monotonic arguments
 * to f, the integrated function can essentially be used forever
 * without accumulating unbounded state.
 * 
 * The function `f'` should have the signature `[x y y']`, where `y'` is a
 * primitive double array, which the function should fill in based
 * on the values `x` and `y`.) Both `y` and `y'` will be primitive arrays
 * of type double, the same length as that of `y0`. Both arrays are
 * owned by the integrator. In particular, y should never be modified,
 * and neither array should be modified or expected to persist after
 * the return of `f'`. This approach has observable memory and
 * performance impacts.
 * 
 * The return value of the integrating function, however, is newly
 * allocated and belongs to the caller.
 * 
 * The integrating function may be called with no arguments to shut down
 * the integration, allowing for the final reclamation of its resources.
 * 
 * When the ODE solver is provided by Java, it may be necessary to
 * use an auxiliary thread to enable this style of flow control.  If
 * JavaScript, we expect the solver to provide a generator of solution
 * segments.
 */
emmy.numerical.ode.stream_integrator = (function emmy$numerical$ode$stream_integrator(f_SINGLEQUOTE_,x0,y0,p__78294){
var map__78295 = p__78294;
var map__78295__$1 = cljs.core.__destructure_map(map__78295);
var epsilon = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78295__$1,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-8);
var js_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78295__$1,new cljs.core.Keyword(null,"js?","js?",731848670),false);
var dimension = cljs.core.count(y0);
var solver = (new module$node_modules$odex$src$odex.Solver(f_SINGLEQUOTE_,dimension,({"absoluteTolerance": epsilon, "relativeTolerance": epsilon, "rawFunction": true})));
var f = solver.integrate(x0,cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(y0));
if(cljs.core.truth_(js_QMARK_)){
return f;
} else {
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj,f);
}
});
/**
 * Returns a stream integrator configured to integrate a SICM state function.
 *   The function is compiled (unless `compile?` is falsy in the `opts` map) with
 *   the primitive calling convention to allow efficient transition between the
 *   flat representation preferred by integrators and the structured form used in
 *   the book. If the function is not compiled, a wrapper function is created to
 *   accomplish the same thing.
 */
emmy.numerical.ode.make_integrator_STAR_ = (function emmy$numerical$ode$make_integrator_STAR_(state_derivative,derivative_args,initial_state,p__78296){
var map__78297 = p__78296;
var map__78297__$1 = cljs.core.__destructure_map(map__78297);
var opts = map__78297__$1;
var compile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78297__$1,new cljs.core.Keyword(null,"compile?","compile?",-826687650),true);
var flat_initial_state = cljs.core.flatten(initial_state);
var primitive_params = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(derivative_args);
var derivative_fn = (cljs.core.truth_(compile_QMARK_)?emmy.expression.compile.compile_state_fn.cljs$core$IFn$_invoke$arity$4(state_derivative,derivative_args,initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"calling-convention","calling-convention",-1148806156),new cljs.core.Keyword(null,"primitive","primitive",1884541424)], null)):(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"emmy.numerical.ode",null,195,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Not compiling function for ODE analysis"], null);
}),null)),null,-655173451,null);

var f_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(state_derivative,derivative_args);
return (function (ys,yps,_){
return emmy.numerical.ode.flatten_into_primitive_array((function (){var G__78300 = emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2(ys,initial_state);
return (f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? f_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__78300) : f_SINGLEQUOTE_.call(null,G__78300));
})(),yps);
});
})()
);
var equations = (function (_,ys,yps){
return (derivative_fn.cljs$core$IFn$_invoke$arity$3 ? derivative_fn.cljs$core$IFn$_invoke$arity$3(ys,yps,primitive_params) : derivative_fn.call(null,ys,yps,primitive_params));
});
return emmy.numerical.ode.stream_integrator(equations,(0),flat_initial_state,opts);
});
/**
 * make-integrator takes a state derivative function (which in this
 *   system is assumed to be a map from a structure to a structure of the
 *   same shape, as differentiating a function does not change its
 *   shape), and returns an integrator, which is a function of several
 *   arguments:
 * 
 *   - the initial state
 *   - an intermediate-state observation function
 *   - the step size desired
 *   - the final time to seek, and
 *   - an error tolerance.
 * 
 *   If the `observe` function is not nil, it will be invoked with the time as
 *   first argument and integrated state as the second, at each intermediate step.
 */
emmy.numerical.ode.make_integrator = (function emmy$numerical$ode$make_integrator(state_derivative,derivative_args){
return (function() {
var emmy$numerical$ode$make_integrator_$_call = null;
var emmy$numerical$ode$make_integrator_$_call__3 = (function (initial_state,step_size,t){
return emmy$numerical$ode$make_integrator_$_call.cljs$core$IFn$_invoke$arity$4(initial_state,step_size,t,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$numerical$ode$make_integrator_$_call__4 = (function (initial_state,step_size,t,p__78302){
var map__78303 = p__78302;
var map__78303__$1 = cljs.core.__destructure_map(map__78303);
var opts = map__78303__$1;
var observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78303__$1,new cljs.core.Keyword(null,"observe","observe",-86651450));
var latest = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null));
var integrator = emmy.numerical.ode.make_integrator_STAR_(state_derivative,derivative_args,initial_state,opts);
var array__GT_state = (function (p1__78301_SHARP_){
return emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2(p1__78301_SHARP_,initial_state);
});
var step = (function (x){
var y = array__GT_state((integrator.cljs$core$IFn$_invoke$arity$1 ? integrator.cljs$core$IFn$_invoke$arity$1(x) : integrator.call(null,x)));
if(cljs.core.truth_(observe)){
(observe.cljs$core$IFn$_invoke$arity$2 ? observe.cljs$core$IFn$_invoke$arity$2(x,y) : observe.call(null,x,y));
} else {
}

return cljs.core.reset_BANG_(latest,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
if(cljs.core.truth_(observe)){
var seq__78304_78517 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),t,step_size));
var chunk__78305_78518 = null;
var count__78306_78519 = (0);
var i__78307_78520 = (0);
while(true){
if((i__78307_78520 < count__78306_78519)){
var x_78521 = chunk__78305_78518.cljs$core$IIndexed$_nth$arity$2(null,i__78307_78520);
step(x_78521);


var G__78522 = seq__78304_78517;
var G__78523 = chunk__78305_78518;
var G__78524 = count__78306_78519;
var G__78525 = (i__78307_78520 + (1));
seq__78304_78517 = G__78522;
chunk__78305_78518 = G__78523;
count__78306_78519 = G__78524;
i__78307_78520 = G__78525;
continue;
} else {
var temp__5825__auto___78526 = cljs.core.seq(seq__78304_78517);
if(temp__5825__auto___78526){
var seq__78304_78527__$1 = temp__5825__auto___78526;
if(cljs.core.chunked_seq_QMARK_(seq__78304_78527__$1)){
var c__5694__auto___78529 = cljs.core.chunk_first(seq__78304_78527__$1);
var G__78530 = cljs.core.chunk_rest(seq__78304_78527__$1);
var G__78531 = c__5694__auto___78529;
var G__78532 = cljs.core.count(c__5694__auto___78529);
var G__78533 = (0);
seq__78304_78517 = G__78530;
chunk__78305_78518 = G__78531;
count__78306_78519 = G__78532;
i__78307_78520 = G__78533;
continue;
} else {
var x_78534 = cljs.core.first(seq__78304_78527__$1);
step(x_78534);


var G__78541 = cljs.core.next(seq__78304_78527__$1);
var G__78542 = null;
var G__78543 = (0);
var G__78544 = (0);
seq__78304_78517 = G__78541;
chunk__78305_78518 = G__78542;
count__78306_78519 = G__78543;
i__78307_78520 = G__78544;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.not(emmy.numerical.ode.near_QMARK_(t,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(latest),(0))))){
step(t);
} else {
}

(integrator.cljs$core$IFn$_invoke$arity$0 ? integrator.cljs$core$IFn$_invoke$arity$0() : integrator.call(null));

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(latest),(1));
});
emmy$numerical$ode$make_integrator_$_call = function(initial_state,step_size,t,p__78302){
switch(arguments.length){
case 3:
return emmy$numerical$ode$make_integrator_$_call__3.call(this,initial_state,step_size,t);
case 4:
return emmy$numerical$ode$make_integrator_$_call__4.call(this,initial_state,step_size,t,p__78302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$numerical$ode$make_integrator_$_call.cljs$core$IFn$_invoke$arity$3 = emmy$numerical$ode$make_integrator_$_call__3;
emmy$numerical$ode$make_integrator_$_call.cljs$core$IFn$_invoke$arity$4 = emmy$numerical$ode$make_integrator_$_call__4;
return emmy$numerical$ode$make_integrator_$_call;
})()
});
/**
 * state-advancer takes a state derivative function constructor followed by the
 *   arguments to construct it with. The state derivative function is constructed
 *   and an integrator is produced which takes:
 * 
 *   - initial state
 *   - target time
 * 
 *   as arguments. Optionally, supply an options map with these optional fields:
 * 
 *   `:compile?`: If true, the ODE solver will compile your state function.
 * 
 *   `:epsilon`: The maximum error tolerance allowed by the ODE solver, both
 *   relative and absolute.
 * 
 *   Returns the final state.
 * 
 *   The state derivative is expected to map a structure to a structure of the same
 *   shape, and is required to have the time parameter as the first element.
 */
emmy.numerical.ode.state_advancer = (function emmy$numerical$ode$state_advancer(var_args){
var args__5903__auto__ = [];
var len__5897__auto___78548 = arguments.length;
var i__5898__auto___78549 = (0);
while(true){
if((i__5898__auto___78549 < len__5897__auto___78548)){
args__5903__auto__.push((arguments[i__5898__auto___78549]));

var G__78550 = (i__5898__auto___78549 + (1));
i__5898__auto___78549 = G__78550;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.numerical.ode.state_advancer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.numerical.ode.state_advancer.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,state_derivative_args){
var I = emmy.numerical.ode.make_integrator(state_derivative,state_derivative_args);
return (function() {
var emmy$numerical$ode$call = null;
var emmy$numerical$ode$call__2 = (function (initial_state,t){
return emmy$numerical$ode$call.cljs$core$IFn$_invoke$arity$3(initial_state,t,cljs.core.PersistentArrayMap.EMPTY);
});
var emmy$numerical$ode$call__3 = (function (initial_state,t,opts){
return I(initial_state,(0),t,opts);
});
emmy$numerical$ode$call = function(initial_state,t,opts){
switch(arguments.length){
case 2:
return emmy$numerical$ode$call__2.call(this,initial_state,t);
case 3:
return emmy$numerical$ode$call__3.call(this,initial_state,t,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$numerical$ode$call.cljs$core$IFn$_invoke$arity$2 = emmy$numerical$ode$call__2;
emmy$numerical$ode$call.cljs$core$IFn$_invoke$arity$3 = emmy$numerical$ode$call__3;
return emmy$numerical$ode$call;
})()
}));

(emmy.numerical.ode.state_advancer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.numerical.ode.state_advancer.cljs$lang$applyTo = (function (seq78308){
var G__78309 = cljs.core.first(seq78308);
var seq78308__$1 = cljs.core.next(seq78308);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78309,seq78308__$1);
}));

/**
 * evolve takes a state derivative function constructor and its arguments, and
 *   returns an integrator via make-integrator.
 * 
 *   In particular, the returned function accepts a callback function which will be
 *   invoked at intermediate grid points of the integration.
 */
emmy.numerical.ode.evolve = (function emmy$numerical$ode$evolve(var_args){
var args__5903__auto__ = [];
var len__5897__auto___78558 = arguments.length;
var i__5898__auto___78559 = (0);
while(true){
if((i__5898__auto___78559 < len__5897__auto___78558)){
args__5903__auto__.push((arguments[i__5898__auto___78559]));

var G__78560 = (i__5898__auto___78559 + (1));
i__5898__auto___78559 = G__78560;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.numerical.ode.evolve.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.numerical.ode.evolve.cljs$core$IFn$_invoke$arity$variadic = (function (state_derivative,state_derivative_args){
return emmy.numerical.ode.make_integrator(state_derivative,state_derivative_args);
}));

(emmy.numerical.ode.evolve.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.numerical.ode.evolve.cljs$lang$applyTo = (function (seq78310){
var G__78311 = cljs.core.first(seq78310);
var seq78310__$1 = cljs.core.next(seq78310);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78311,seq78310__$1);
}));

/**
 * A wrapper for evolve, which is more convenient when you just
 *   want a vector of (time, state) pairs over the integration interval
 *   instead of having to deal with a callback. Integrates the supplied
 *   state derivative (and its argument package) from [0 to t1] in steps
 *   of size dt
 */
emmy.numerical.ode.integrate_state_derivative = (function emmy$numerical$ode$integrate_state_derivative(state_derivative,state_derivative_args,initial_state,t1,dt){
var f = emmy.numerical.ode.make_integrator_STAR_(state_derivative,state_derivative_args,initial_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),1.0E-6,new cljs.core.Keyword(null,"compile?","compile?",-826687650),true], null));
try{return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,(function (){var iter__5649__auto__ = (function emmy$numerical$ode$integrate_state_derivative_$_iter__78462(s__78463){
return (new cljs.core.LazySeq(null,(function (){
var s__78463__$1 = s__78463;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__78463__$1);
if(temp__5825__auto__){
var s__78463__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78463__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__78463__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__78465 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__78464 = (0);
while(true){
if((i__78464 < size__5648__auto__)){
var x = cljs.core._nth(c__5647__auto__,i__78464);
if((x < (t1 + (dt / (2))))){
cljs.core.chunk_append(b__78465,x);

var G__78567 = (i__78464 + (1));
i__78464 = G__78567;
continue;
} else {
var G__78568 = (i__78464 + (1));
i__78464 = G__78568;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78465),emmy$numerical$ode$integrate_state_derivative_$_iter__78462(cljs.core.chunk_rest(s__78463__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78465),null);
}
} else {
var x = cljs.core.first(s__78463__$2);
if((x < (t1 + (dt / (2))))){
return cljs.core.cons(x,emmy$numerical$ode$integrate_state_derivative_$_iter__78462(cljs.core.rest(s__78463__$2)));
} else {
var G__78569 = cljs.core.rest(s__78463__$2);
s__78463__$1 = G__78569;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(t1 + dt),dt));
})());
}finally {(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}});

//# sourceMappingURL=emmy.numerical.ode.js.map
