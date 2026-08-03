goog.provide('emmy.autodiff');
/**
 * More permissive version of [[emmy.tape/tape-tag]] that returns `nil` when
 *   passed a non-perturbation.
 */
emmy.autodiff.tag_of = (function emmy$autodiff$tag_of(x){
if(emmy.tape.tape_QMARK_(x)){
return emmy.tape.tape_tag(x);
} else {
if(emmy.dual.dual_QMARK_(x)){
return emmy.dual.tag(x);
} else {
return null;

}
}
});
/**
 * More permissive version of [[emmy.tape/tape-primal]] that returns `v` when passed a
 *   non-perturbation.
 */
emmy.autodiff.primal_of = (function emmy$autodiff$primal_of(var_args){
var G__38424 = arguments.length;
switch (G__38424) {
case 1:
return emmy.autodiff.primal_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.autodiff.primal_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.autodiff.primal_of.cljs$core$IFn$_invoke$arity$1 = (function (v){
return emmy.autodiff.primal_of.cljs$core$IFn$_invoke$arity$2(v,emmy.autodiff.tag_of(v));
}));

(emmy.autodiff.primal_of.cljs$core$IFn$_invoke$arity$2 = (function (v,tag){
if(emmy.tape.tape_QMARK_(v)){
return emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$2(v,tag);
} else {
if(emmy.dual.dual_QMARK_(v)){
return emmy.dual.primal.cljs$core$IFn$_invoke$arity$2(v,tag);
} else {
return v;

}
}
}));

(emmy.autodiff.primal_of.cljs$lang$maxFixedArity = 2);

/**
 * Given any number of `tags`, returns the tag most recently bound
 *   via [[with-active-tag]] (i.e., the tag connected with the _innermost_ call
 *   to [[with-active-tag]]).
 * 
 *   If none of the tags are bound, returns `(apply max tags)`.
 */
emmy.autodiff.inner_tag = (function emmy$autodiff$inner_tag(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38508 = arguments.length;
var i__5898__auto___38509 = (0);
while(true){
if((i__5898__auto___38509 < len__5897__auto___38508)){
args__5903__auto__.push((arguments[i__5898__auto___38509]));

var G__38510 = (i__5898__auto___38509 + (1));
i__5898__auto___38509 = G__38510;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.autodiff.inner_tag.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.autodiff.inner_tag.cljs$core$IFn$_invoke$arity$variadic = (function (tags){
var or__5162__auto__ = cljs.core.some(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,tags),emmy.dual._STAR_active_tags_STAR_);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,tags);
}
}));

(emmy.autodiff.inner_tag.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.autodiff.inner_tag.cljs$lang$applyTo = (function (seq38425){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38425));
}));

/**
 * Given any number of `dxs`, returns a pair of the form
 * 
 *   [<tag> <tape-or-dual-number>]
 * 
 *   containing the tag and instance of [[emmy.dual/Dual]] or [[TapeCell]]
 *   associated with the inner-most call to [[with-active-tag]] in the current call
 *   stack.
 * 
 *   If none of `dxs` has an active tag, returns `nil`.
 */
emmy.autodiff.tag_PLUS_perturbation = (function emmy$autodiff$tag_PLUS_perturbation(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38511 = arguments.length;
var i__5898__auto___38512 = (0);
while(true){
if((i__5898__auto___38512 < len__5897__auto___38511)){
args__5903__auto__.push((arguments[i__5898__auto___38512]));

var G__38513 = (i__5898__auto___38512 + (1));
i__5898__auto___38512 = G__38513;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.autodiff.tag_PLUS_perturbation.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.autodiff.tag_PLUS_perturbation.cljs$core$IFn$_invoke$arity$variadic = (function (dxs){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (dx){
var temp__5825__auto__ = emmy.autodiff.tag_of(dx);
if(cljs.core.truth_(temp__5825__auto__)){
var t = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,dx], null);
} else {
return null;
}
}));
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,dxs);
if(cljs.core.seq(m)){
var tag = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.autodiff.inner_tag,cljs.core.keys(m));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(tag) : m.call(null,tag))], null);
} else {
return null;
}
}));

(emmy.autodiff.tag_PLUS_perturbation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.autodiff.tag_PLUS_perturbation.cljs$lang$applyTo = (function (seq38426){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38426));
}));

/**
 * Version of [[tape-primal]] that will descend recursively into any perturbation
 *   instance returned by [[tape-primal]] or [[emmy.dual/primal]] until
 *   encountering a non-perturbation.
 * 
 *   Given a non-perturbation, acts as identity.
 */
emmy.autodiff.deep_primal = (function emmy$autodiff$deep_primal(v){
while(true){
if(emmy.tape.tape_QMARK_(v)){
var G__38518 = emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(v);
v = G__38518;
continue;
} else {
if(emmy.dual.dual_QMARK_(v)){
var G__38519 = emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(v);
v = G__38519;
continue;
} else {
return v;

}
}
break;
}
});
/**
 * Given:
 * 
 *   - some unary function `f`
 *   - a function `df:dx` that computes the derivative of `f` with respect to its
 *  single argument
 * 
 *   Returns a new unary function that operates on both the original type of
 *   `f`, [[TapeCell]] and [[emmy.dual/Dual]] instances.
 * 
 *   If called without `df:dx`, `df:dx` defaults to `(f :dfdx)`; this will return
 *   the derivative registered to a generic function defined
 *   with [[emmy.util.def/defgeneric]].
 * 
 *   NOTE: `df:dx` has to ALREADY be able to handle [[TapeCell]]
 *   and [[emmy.dual/Dual]] instances. The best way to accomplish this is by
 *   building `df:dx` out of already-lifted functions, and declaring them by
 *   forward reference if you need to.
 */
emmy.autodiff.lift_1 = (function emmy$autodiff$lift_1(var_args){
var G__38430 = arguments.length;
switch (G__38430) {
case 1:
return emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$1 = (function (f){
var temp__5823__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)) : f.call(null,new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)));
if(cljs.core.truth_(temp__5823__auto__)){
var df_COLON_dx = temp__5823__auto__;
return emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2(f,df_COLON_dx);
} else {
return emmy.util.illegal("No df:dx supplied for `f` or registered generically.");
}
}));

(emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2 = (function (f,df_COLON_dx){
return (function emmy$autodiff$call(x){
if(emmy.tape.tape_QMARK_(x)){
var primal = emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(x);
return emmy.tape.make.cljs$core$IFn$_invoke$arity$3(emmy.tape.tape_tag(x),emmy$autodiff$call(primal),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(df_COLON_dx.cljs$core$IFn$_invoke$arity$1 ? df_COLON_dx.cljs$core$IFn$_invoke$arity$1(primal) : df_COLON_dx.call(null,primal))], null)], null));
} else {
if(emmy.dual.dual_QMARK_(x)){
var vec__38433 = emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(x);
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38433,(0),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38433,(1),null);
var primal = emmy$autodiff$call(px);
var tangent = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((df_COLON_dx.cljs$core$IFn$_invoke$arity$1 ? df_COLON_dx.cljs$core$IFn$_invoke$arity$1(px) : df_COLON_dx.call(null,px)),tx);
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(primal,tangent,emmy.dual.tag(x));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));

}
}
});
}));

(emmy.autodiff.lift_1.cljs$lang$maxFixedArity = 2);

/**
 * Given:
 * 
 *   - some binary function `f`
 *   - a function `df:dx` that computes the derivative of `f` with respect to its
 *  single argument
 *   - a function `df:dy`, similar to `df:dx` for the second arg
 * 
 *   Returns a new binary function that operates on both the original type of
 *   `f`, [[TapeCell]] and [[emmy.dual/Dual]] instances.
 * 
 *   NOTE: `df:dx` and `df:dy` have to ALREADY be able to handle [[TapeCell]]
 *   and [[emmy.dual/Dual]] instances. The best way to accomplish this is
 *   by building `df:dx` and `df:dy` out of already-lifted functions, and declaring
 *   them by forward reference if you need to.
 */
emmy.autodiff.lift_2 = (function emmy$autodiff$lift_2(var_args){
var G__38437 = arguments.length;
switch (G__38437) {
case 1:
return emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$1 = (function (f){
var df_COLON_dx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)) : f.call(null,new cljs.core.Keyword(null,"dfdx","dfdx",-1523879512)));
var df_COLON_dy = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dfdy","dfdy",-434788201)) : f.call(null,new cljs.core.Keyword(null,"dfdy","dfdy",-434788201)));
if(cljs.core.truth_((function (){var and__5160__auto__ = df_COLON_dx;
if(cljs.core.truth_(and__5160__auto__)){
return df_COLON_dy;
} else {
return and__5160__auto__;
}
})())){
return emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$3(f,df_COLON_dx,df_COLON_dy);
} else {
return emmy.util.illegal("No df:dx, df:dy supplied for `f` or registered generically.");
}
}));

(emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$3 = (function (f,df_COLON_dx,df_COLON_dy){
return (function emmy$autodiff$call(x,y){
var operate_forward = (function emmy$autodiff$call_$_operate_forward(tag){
var vec__38444 = emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(x,tag);
var xe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38444,(1),null);
var vec__38447 = emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$2(y,tag);
var ye = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38447,(1),null);
var primal = emmy$autodiff$call(xe,ye);
var tangent = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(dx))?dx:emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((df_COLON_dx.cljs$core$IFn$_invoke$arity$2 ? df_COLON_dx.cljs$core$IFn$_invoke$arity$2(xe,ye) : df_COLON_dx.call(null,xe,ye)),dx)),(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(dy))?dy:emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((df_COLON_dy.cljs$core$IFn$_invoke$arity$2 ? df_COLON_dy.cljs$core$IFn$_invoke$arity$2(xe,ye) : df_COLON_dy.call(null,xe,ye)),dy)));
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(primal,tangent,tag);
});
var operate_reverse = (function emmy$autodiff$call_$_operate_reverse(tag){
var primal_x = emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$2(x,tag);
var primal_y = emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$2(y,tag);
var partial_x = ((((emmy.tape.tape_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,emmy.tape.tape_tag(x)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(df_COLON_dx.cljs$core$IFn$_invoke$arity$2 ? df_COLON_dx.cljs$core$IFn$_invoke$arity$2(primal_x,primal_y) : df_COLON_dx.call(null,primal_x,primal_y))], null)], null):cljs.core.PersistentVector.EMPTY);
var partial_y = ((((emmy.tape.tape_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,emmy.tape.tape_tag(y)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,(df_COLON_dy.cljs$core$IFn$_invoke$arity$2 ? df_COLON_dy.cljs$core$IFn$_invoke$arity$2(primal_x,primal_y) : df_COLON_dy.call(null,primal_x,primal_y))], null)], null):cljs.core.PersistentVector.EMPTY);
return emmy.tape.make.cljs$core$IFn$_invoke$arity$3(tag,emmy$autodiff$call(primal_x,primal_y),cljs.core.into.cljs$core$IFn$_invoke$arity$2(partial_x,partial_y));
});
var temp__5823__auto__ = emmy.autodiff.tag_PLUS_perturbation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__38452 = temp__5823__auto__;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38452,(1),null);
if(emmy.tape.tape_QMARK_(dx)){
return operate_reverse(tag);
} else {
if(emmy.dual.dual_QMARK_(dx)){
return operate_forward(tag);
} else {
return emmy.util.illegal("Non-tape or dual perturbation!");

}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y));
}
});
}));

(emmy.autodiff.lift_2.cljs$lang$maxFixedArity = 3);

/**
 * Given:
 * 
 *   - some function `f` that can handle 0, 1 or 2 arguments
 *   - `df:dx`, a fn that returns the derivative wrt the single arg in the unary case
 *   - `df:dx1` and `df:dx2`, fns that return the derivative with respect to the
 *  first and second args in the binary case
 * 
 *   Returns a new any-arity function that operates on both the original type of
 *   `f`, [[TapeCell]] and [[emmy.dual/Dual]] instances.
 * 
 *   NOTE: The n-ary case of `f` is populated by nested calls to the binary case.
 *   That means that this is NOT an appropriate lifting method for an n-ary
 *   function that isn't built out of associative binary calls. If you need this
 *   ability, please file an issue at the [emmy issue
 *   tracker](https://github.com/mentat-collective/emmy/issues).
 */
emmy.autodiff.lift_n = (function emmy$autodiff$lift_n(f,df_COLON_dx,df_COLON_dx1,df_COLON_dx2){
var f1 = emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2(f,df_COLON_dx);
var f2 = emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$3(f,df_COLON_dx1,df_COLON_dx2);
return (function() {
var emmy$autodiff$lift_n_$_call = null;
var emmy$autodiff$lift_n_$_call__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var emmy$autodiff$lift_n_$_call__1 = (function (x){
return f1(x);
});
var emmy$autodiff$lift_n_$_call__2 = (function (x,y){
return f2(x,y);
});
var emmy$autodiff$lift_n_$_call__3 = (function() { 
var G__38531__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy$autodiff$lift_n_$_call,emmy$autodiff$lift_n_$_call.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__38531 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__38532__i = 0, G__38532__a = new Array(arguments.length -  2);
while (G__38532__i < G__38532__a.length) {G__38532__a[G__38532__i] = arguments[G__38532__i + 2]; ++G__38532__i;}
  more = new cljs.core.IndexedSeq(G__38532__a,0,null);
} 
return G__38531__delegate.call(this,x,y,more);};
G__38531.cljs$lang$maxFixedArity = 2;
G__38531.cljs$lang$applyTo = (function (arglist__38533){
var x = cljs.core.first(arglist__38533);
arglist__38533 = cljs.core.next(arglist__38533);
var y = cljs.core.first(arglist__38533);
var more = cljs.core.rest(arglist__38533);
return G__38531__delegate(x,y,more);
});
G__38531.cljs$core$IFn$_invoke$arity$variadic = G__38531__delegate;
return G__38531;
})()
;
emmy$autodiff$lift_n_$_call = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return emmy$autodiff$lift_n_$_call__0.call(this);
case 1:
return emmy$autodiff$lift_n_$_call__1.call(this,x);
case 2:
return emmy$autodiff$lift_n_$_call__2.call(this,x,y);
default:
var G__38534 = null;
if (arguments.length > 2) {
var G__38535__i = 0, G__38535__a = new Array(arguments.length -  2);
while (G__38535__i < G__38535__a.length) {G__38535__a[G__38535__i] = arguments[G__38535__i + 2]; ++G__38535__i;}
G__38534 = new cljs.core.IndexedSeq(G__38535__a,0,null);
}
return emmy$autodiff$lift_n_$_call__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__38534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$autodiff$lift_n_$_call.cljs$lang$maxFixedArity = 2;
emmy$autodiff$lift_n_$_call.cljs$lang$applyTo = emmy$autodiff$lift_n_$_call__3.cljs$lang$applyTo;
emmy$autodiff$lift_n_$_call.cljs$core$IFn$_invoke$arity$0 = emmy$autodiff$lift_n_$_call__0;
emmy$autodiff$lift_n_$_call.cljs$core$IFn$_invoke$arity$1 = emmy$autodiff$lift_n_$_call__1;
emmy$autodiff$lift_n_$_call.cljs$core$IFn$_invoke$arity$2 = emmy$autodiff$lift_n_$_call__2;
emmy$autodiff$lift_n_$_call.cljs$core$IFn$_invoke$arity$variadic = emmy$autodiff$lift_n_$_call__3.cljs$core$IFn$_invoke$arity$variadic;
return emmy$autodiff$lift_n_$_call;
})()
});
/**
 * Given:
 * 
 *   - a generic unary multimethod `generic-op`
 *   - optionally, a corresponding single-arity lifted function
 *  `differential-op` (defaults to `(lift-1 generic-op)`)
 * 
 *   installs an appropriate unary implementation of `generic-op` for `::tape` and
 *   `:emmy.dual/dual` instances.
 */
emmy.autodiff.defunary = (function emmy$autodiff$defunary(var_args){
var G__38460 = arguments.length;
switch (G__38460) {
case 1:
return emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1 = (function (generic_op){
return emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(generic_op,emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$1(generic_op));
}));

(emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2 = (function (generic_op,differential_op){
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),(function (a){
return (differential_op.cljs$core$IFn$_invoke$arity$1 ? differential_op.cljs$core$IFn$_invoke$arity$1(a) : differential_op.call(null,a));
}));

return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),(function (a){
return (differential_op.cljs$core$IFn$_invoke$arity$1 ? differential_op.cljs$core$IFn$_invoke$arity$1(a) : differential_op.call(null,a));
}));
}));

(emmy.autodiff.defunary.cljs$lang$maxFixedArity = 2);

/**
 * Given:
 * 
 *   - a generic binary multimethod `generic-op`
 *   - optionally, a corresponding 2-arity lifted function
 *  `differential-op` (defaults to `(lift-2 generic-op)`)
 * 
 *   installs an appropriate binary implementation of `generic-op` between
 *   `::t/tape`, `:emmy.dual/dual` and `:emmy.value/scalar` instances.
 */
emmy.autodiff.defbinary = (function emmy$autodiff$defbinary(var_args){
var G__38468 = arguments.length;
switch (G__38468) {
case 1:
return emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1 = (function (generic_op){
return emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2(generic_op,emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$1(generic_op));
}));

(emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2 = (function (generic_op,differential_op){
var seq__38469 = cljs.core.seq(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426),new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216),new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426),new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216),new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.dual","dual","emmy.dual/dual",-433931216),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null)], null));
var chunk__38470 = null;
var count__38471 = (0);
var i__38472 = (0);
while(true){
if((i__38472 < count__38471)){
var signature = chunk__38470.cljs$core$IIndexed$_nth$arity$2(null,i__38472);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__38469,chunk__38470,count__38471,i__38472,signature){
return (function (a,b){
return (differential_op.cljs$core$IFn$_invoke$arity$2 ? differential_op.cljs$core$IFn$_invoke$arity$2(a,b) : differential_op.call(null,a,b));
});})(seq__38469,chunk__38470,count__38471,i__38472,signature))
);


var G__38539 = seq__38469;
var G__38540 = chunk__38470;
var G__38541 = count__38471;
var G__38542 = (i__38472 + (1));
seq__38469 = G__38539;
chunk__38470 = G__38540;
count__38471 = G__38541;
i__38472 = G__38542;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38469);
if(temp__5825__auto__){
var seq__38469__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38469__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38469__$1);
var G__38544 = cljs.core.chunk_rest(seq__38469__$1);
var G__38545 = c__5694__auto__;
var G__38546 = cljs.core.count(c__5694__auto__);
var G__38547 = (0);
seq__38469 = G__38544;
chunk__38470 = G__38545;
count__38471 = G__38546;
i__38472 = G__38547;
continue;
} else {
var signature = cljs.core.first(seq__38469__$1);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,signature,((function (seq__38469,chunk__38470,count__38471,i__38472,signature,seq__38469__$1,temp__5825__auto__){
return (function (a,b){
return (differential_op.cljs$core$IFn$_invoke$arity$2 ? differential_op.cljs$core$IFn$_invoke$arity$2(a,b) : differential_op.call(null,a,b));
});})(seq__38469,chunk__38470,count__38471,i__38472,signature,seq__38469__$1,temp__5825__auto__))
);


var G__38548 = cljs.core.next(seq__38469__$1);
var G__38549 = null;
var G__38550 = (0);
var G__38551 = (0);
seq__38469 = G__38548;
chunk__38470 = G__38549;
count__38471 = G__38550;
i__38472 = G__38551;
continue;
}
} else {
return null;
}
}
break;
}
}));

(emmy.autodiff.defbinary.cljs$lang$maxFixedArity = 2);

/**
 * Given some unary or binary function `f`, returns an augmented `f` that acts on
 *   the primal entries of any perturbed arguments encountered, irrespective of
 *   tag.
 */
emmy.autodiff.by_primal = (function emmy$autodiff$by_primal(f){
return (function() {
var G__38552 = null;
var G__38552__1 = (function (x){
var G__38476 = emmy.autodiff.deep_primal(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38476) : f.call(null,G__38476));
});
var G__38552__2 = (function (x,y){
var G__38478 = emmy.autodiff.deep_primal(x);
var G__38479 = emmy.autodiff.deep_primal(y);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38478,G__38479) : f.call(null,G__38478,G__38479));
});
G__38552 = function(x,y){
switch(arguments.length){
case 1:
return G__38552__1.call(this,x);
case 2:
return G__38552__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38552.cljs$core$IFn$_invoke$arity$1 = G__38552__1;
G__38552.cljs$core$IFn$_invoke$arity$2 = G__38552__2;
return G__38552;
})()
});
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.add);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.negate);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sub);
var mul_38553 = emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$1(emmy.generic.mul);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.mul,mul_38553);

emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.dot_product,mul_38553);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.expt);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.square);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.cube);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.invert);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.div);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.abs,(function (x){
var f = emmy.autodiff.deep_primal(x);
var func = (((f < (0)))?emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2(emmy.generic.negate,(function (_){
return (-1);
})):(((f > (0)))?emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (_){
return (1);
})):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,(0)))?emmy.util.illegal("Derivative of g/abs undefined at zero"):emmy.util.illegal((""+"error! derivative of g/abs at"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)))
)));
return func(x);
}));
emmy.autodiff.discont_at_integers = (function emmy$autodiff$discont_at_integers(f,dfdx){
var f__$1 = emmy.autodiff.lift_1.cljs$core$IFn$_invoke$arity$2(f,(function (_){
return dfdx;
}));
var f_name = emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f__$1);
return (function (x){
if(emmy.value.integral_QMARK_(emmy.autodiff.deep_primal(x))){
return emmy.util.illegal((""+"Derivative of g/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)+" undefined at integral points."));
} else {
return f__$1(x);
}
});
});
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.floor,emmy.autodiff.discont_at_integers(emmy.generic.floor,(0)));
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.ceiling,emmy.autodiff.discont_at_integers(emmy.generic.ceiling,(0)));
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.integer_part,emmy.autodiff.discont_at_integers(emmy.generic.integer_part,(0)));
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.fractional_part,emmy.autodiff.discont_at_integers(emmy.generic.fractional_part,(1)));
var div_38559 = emmy.autodiff.lift_2.cljs$core$IFn$_invoke$arity$1(emmy.generic.div);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.solve_linear,(function (l,r){
return (div_38559.cljs$core$IFn$_invoke$arity$2 ? div_38559.cljs$core$IFn$_invoke$arity$2(r,l) : div_38559.call(null,r,l));
}));

emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.generic.solve_linear_right,div_38559);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sqrt);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.log);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.exp);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.cos);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sin);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.tan);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.cot);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sec);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.csc);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.atan);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$1(emmy.generic.atan);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.asin);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.acos);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.acot);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.asec);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.acsc);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.cosh);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sinh);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.tanh);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sech);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.coth);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.csch);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.acosh);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.asinh);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.atanh);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.acoth);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.asech);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.acsch);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sinc);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.sinhc);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.tanc);
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$1(emmy.generic.tanhc);
emmy.autodiff.defbinary.cljs$core$IFn$_invoke$arity$2(emmy.value._EQ_,emmy.autodiff.by_primal(emmy.value._EQ_));
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.zero_QMARK_,(function (){var zero_p_QMARK_ = emmy.autodiff.by_primal(emmy.generic.zero_QMARK_);
return (function (dx){
if(emmy.tape.tape_QMARK_(dx)){
return zero_p_QMARK_(dx);
} else {
var vec__38490 = emmy.dual.primal_tangent_pair.cljs$core$IFn$_invoke$arity$1(dx);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38490,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38490,(1),null);
var and__5160__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(t);
} else {
return and__5160__auto__;
}
}
});
})());
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.one_QMARK_,(function (){var one_p_QMARK_ = emmy.autodiff.by_primal(emmy.generic.one_QMARK_);
return (function (dx){
if(emmy.tape.tape_QMARK_(dx)){
return one_p_QMARK_(dx);
} else {
return emmy.dual.one_QMARK_(dx);
}
});
})());
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.identity_QMARK_,(function (){var identity_p_QMARK_ = emmy.autodiff.by_primal(emmy.generic.identity_QMARK_);
return (function (dx){
if(emmy.tape.tape_QMARK_(dx)){
return identity_p_QMARK_(dx);
} else {
return emmy.dual.identity_QMARK_(dx);
}
});
})());
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.negative_QMARK_,emmy.autodiff.by_primal(emmy.generic.negative_QMARK_));
emmy.autodiff.defunary.cljs$core$IFn$_invoke$arity$2(emmy.generic.infinite_QMARK_,emmy.autodiff.by_primal(emmy.generic.infinite_QMARK_));

//# sourceMappingURL=emmy.autodiff.js.map
