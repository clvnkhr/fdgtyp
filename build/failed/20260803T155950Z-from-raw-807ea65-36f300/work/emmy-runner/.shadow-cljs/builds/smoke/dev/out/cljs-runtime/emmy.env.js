goog.provide('emmy.env');
emmy.env.literal_function = (function emmy$env$literal_function(var_args){
var G__65006 = arguments.length;
switch (G__65006) {
case 3:
return emmy.env.literal_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.env.literal_function.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return emmy.env.literal_function.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.env.literal_function.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","literal-function","emmy.abstract.function/literal-function",869741704,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
}));

(emmy.env.literal_function.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,sicm_signature){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
if(((cljs.core.list_QMARK_(sicm_signature)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.first(sicm_signature))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","literal-function","emmy.abstract.function/literal-function",869741704,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sicm_signature,null,(1),null))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","literal-function","emmy.abstract.function/literal-function",869741704,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sicm_signature,null,(1),null))], 0))));
}
}));

(emmy.env.literal_function.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,f,domain,range){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","literal-function","emmy.abstract.function/literal-function",869741704,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,domain,null,(1),null)),(new cljs.core.List(null,range,null,(1),null))], 0))));
}));

(emmy.env.literal_function.cljs$lang$maxFixedArity = 5);

emmy.env.with_literal_functions = (function emmy$env$with_literal_functions(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65040 = arguments.length;
var i__5898__auto___65041 = (0);
while(true){
if((i__5898__auto___65041 < len__5897__auto___65040)){
args__5903__auto__.push((arguments[i__5898__auto___65041]));

var G__65042 = (i__5898__auto___65041 + (1));
i__5898__auto___65041 = G__65042;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return emmy.env.with_literal_functions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(emmy.env.with_literal_functions.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","with-literal-functions","emmy.abstract.function/with-literal-functions",379735791,null),null,(1),null)),args)));
}));

(emmy.env.with_literal_functions.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(emmy.env.with_literal_functions.cljs$lang$applyTo = (function (seq65011){
var G__65012 = cljs.core.first(seq65011);
var seq65011__$1 = cljs.core.next(seq65011);
var G__65013 = cljs.core.first(seq65011__$1);
var seq65011__$2 = cljs.core.next(seq65011__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65012,G__65013,seq65011__$2);
}));

/**
 * similar to a `let` binding that holds pairs of
 * 
 *   <coordinate-structure-prototype>, <coordinate-system>
 * 
 *   And internally binds, for each pair: (take `[x y]` and `m/R2-rect` as
 *   examples):
 * 
 *   - The coordinate system symbol `R2-rect` to a new version of the coordinate
 *  system with its `coordinate-prototype` replaced by the one you supplied.
 *  That's `(up x y)` in this example.
 * 
 *   - the entries `x` and `y` to coordinate functions, i.e., functions from manifold
 *  point to this particular coordinate
 * 
 *   - `d:dx` and `d:dy` vector field procedures (I'm fuzzy here!)
 * 
 *   - `dx` and `dy` 1-forms for each coordinate (fuzzy here too!)
 * 
 *   Example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y]    R2-rect
 *                 [r theta] R2-polar]
 *  ;; bindings:
 *  ;; R2-rect, x, y, d:dx, d:dy, dx, dy
 *  ;; R2-polar, r, theta, d:dr, d:dtheta, dr, dtheta
 *  body...)
 *   ```
 */
emmy.env.let_coordinates = (function emmy$env$let_coordinates(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65043 = arguments.length;
var i__5898__auto___65044 = (0);
while(true){
if((i__5898__auto___65044 < len__5897__auto___65043)){
args__5903__auto__.push((arguments[i__5898__auto___65044]));

var G__65045 = (i__5898__auto___65044 + (1));
i__5898__auto___65044 = G__65045;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return emmy.env.let_coordinates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(emmy.env.let_coordinates.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.coordinate","let-coordinates","emmy.calculus.coordinate/let-coordinates",1490647267,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(emmy.env.let_coordinates.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(emmy.env.let_coordinates.cljs$lang$applyTo = (function (seq65014){
var G__65015 = cljs.core.first(seq65014);
var seq65014__$1 = cljs.core.next(seq65014);
var G__65016 = cljs.core.first(seq65014__$1);
var seq65014__$2 = cljs.core.next(seq65014__$1);
var G__65017 = cljs.core.first(seq65014__$2);
var seq65014__$3 = cljs.core.next(seq65014__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65015,G__65016,G__65017,seq65014__$3);
}));

/**
 * [[using-coordinates]] wraps [[let-coordinates]] and allows you to supply a
 *   single coordinate prototype and a single coordinate system.
 *   See [[let-coordinates]] for details about what symbols are bound inside the
 *   body.
 * 
 *   Example:
 * 
 *   ```clojure
 *   (using-coordinates (up x y) R2-rect
 *                   body...)
 *   ```
 */
emmy.env.using_coordinates = (function emmy$env$using_coordinates(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65046 = arguments.length;
var i__5898__auto___65047 = (0);
while(true){
if((i__5898__auto___65047 < len__5897__auto___65046)){
args__5903__auto__.push((arguments[i__5898__auto___65047]));

var G__65048 = (i__5898__auto___65047 + (1));
i__5898__auto___65047 = G__65048;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return emmy.env.using_coordinates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(emmy.env.using_coordinates.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,coordinate_prototype,coordinate_system,body){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.coordinate","using-coordinates","emmy.calculus.coordinate/using-coordinates",340839422,null),null,(1),null)),(new cljs.core.List(null,coordinate_prototype,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,coordinate_system,null,(1),null)),body], 0))));
}));

(emmy.env.using_coordinates.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(emmy.env.using_coordinates.cljs$lang$applyTo = (function (seq65018){
var G__65019 = cljs.core.first(seq65018);
var seq65018__$1 = cljs.core.next(seq65018);
var G__65020 = cljs.core.first(seq65018__$1);
var seq65018__$2 = cljs.core.next(seq65018__$1);
var G__65021 = cljs.core.first(seq65018__$2);
var seq65018__$3 = cljs.core.next(seq65018__$2);
var G__65022 = cljs.core.first(seq65018__$3);
var seq65018__$4 = cljs.core.next(seq65018__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65019,G__65020,G__65021,G__65022,seq65018__$4);
}));

/**
 * Given some `coordinate-system` like `R2-rect` and a `coordinate-prototype` like
 *   `[x y]` or `(up x y), `binds the following definitions into the namespace
 *   where [[define-coordinates]] is invoked:
 * 
 *   - `R2-rect` binds to a new version of the coordinate system with its
 *  `coordinate-prototype` replaced by the supplied prototype
 * 
 *   - `x` and `y` bind to coordinate functions, i.e., functions from manifold point
 *   to that particular coordinate
 * 
 *   - `d:dx` and `d:dy` bind to the corresponding vector field procedures
 * 
 *   - `dx` and `dy` bind to 1-forms for each coordinate.
 */
emmy.env.define_coordinates = (function emmy$env$define_coordinates(_AMPERSAND_form,_AMPERSAND_env,coordinate_prototype,coordinate_system){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.coordinate","define-coordinates","emmy.calculus.coordinate/define-coordinates",1830166904,null),null,(1),null)),(new cljs.core.List(null,coordinate_prototype,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,coordinate_system,null,(1),null))], 0))));
});
/**
 * A shim so that ref can act like nth in SICM contexts, as clojure core ref
 *   elsewhere.
 */
emmy.env.ref = (function emmy$env$ref(var_args){
var G__65028 = arguments.length;
switch (G__65028) {
case 1:
return emmy.env.ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___65050 = arguments.length;
var i__5898__auto___65051 = (0);
while(true){
if((i__5898__auto___65051 < len__5897__auto___65050)){
args_arr__5922__auto__.push((arguments[i__5898__auto___65051]));

var G__65052 = (i__5898__auto___65051 + (1));
i__5898__auto___65051 = G__65052;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.env.ref.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
}));

(emmy.env.ref.cljs$core$IFn$_invoke$arity$variadic = (function (a,ks){
if(emmy.function$.function_QMARK_(a)){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__65023_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.env.ref,p1__65023_SHARP_,ks);
}),a], 0));
} else {
if(emmy.operator.operator_QMARK_(a)){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__65024_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.env.ref,p1__65024_SHARP_,ks);
}),emmy.operator.procedure(a)], 0)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"compose","compose",1144740903,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"component","component",-1098498987,null),null,(1),null)),ks))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(a),null,(1),null))], 0)))));
} else {
if(((cljs.core.associative_QMARK_(a)) && (cljs.core.every_QMARK_(emmy.value.integral_QMARK_,ks)))){
if(emmy.matrix.matrix_QMARK_(a)){
return emmy.matrix.get_in(a,ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,ks);
}
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,ks);
}

}
}
}));

/** @this {Function} */
(emmy.env.ref.cljs$lang$applyTo = (function (seq65026){
var G__65027 = cljs.core.first(seq65026);
var seq65026__$1 = cljs.core.next(seq65026);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65027,seq65026__$1);
}));

(emmy.env.ref.cljs$lang$maxFixedArity = (1));

/**
 * Given a sequence of `selectors`, return a function that accepts some object `x`
 *   and returns:
 * 
 *   ```clojure
 *   (apply ref x selectors)
 *   ```
 *   
 */
emmy.env.component = (function emmy$env$component(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65053 = arguments.length;
var i__5898__auto___65054 = (0);
while(true){
if((i__5898__auto___65054 < len__5897__auto___65053)){
args__5903__auto__.push((arguments[i__5898__auto___65054]));

var G__65055 = (i__5898__auto___65054 + (1));
i__5898__auto___65054 = G__65055;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.env.component.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.env.component.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return (function (x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.env.ref,x,selectors);
});
}));

(emmy.env.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.env.component.cljs$lang$applyTo = (function (seq65029){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65029));
}));

/**
 * A shim. Dispatches to [[d/partial]] when all the arguments are integers; falls
 *   back to [[clojure.core/partial]] (partial function application) otherwise.
 */
emmy.env.partial = (function emmy$env$partial(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65056 = arguments.length;
var i__5898__auto___65057 = (0);
while(true){
if((i__5898__auto___65057 < len__5897__auto___65056)){
args__5903__auto__.push((arguments[i__5898__auto___65057]));

var G__65058 = (i__5898__auto___65057 + (1));
i__5898__auto___65057 = G__65058;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.env.partial.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.env.partial.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
if(cljs.core.every_QMARK_(cljs.core.integer_QMARK_,selectors)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative.partial,selectors);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial,selectors);
}
}));

(emmy.env.partial.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.env.partial.cljs$lang$applyTo = (function (seq65030){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65030));
}));

/**
 * The mathematical constant [Pi](https://en.wikipedia.org/wiki/Pi).
 */
emmy.env.pi = Math.PI;
/**
 * The negation of the mathematical
 *   constant [Pi](https://en.wikipedia.org/wiki/Pi).
 */
emmy.env._pi = emmy.generic._.cljs$core$IFn$_invoke$arity$1(Math.PI);
/**
 * The mathematical
 *   constant [Tau](https://en.wikipedia.org/wiki/Turn_(angle)#Tau_proposals),
 *   equal to $2\pi$.
 */
emmy.env.tau = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),Math.PI);
/**
 * The negation of the mathematical
 *   constant [Tau](https://en.wikipedia.org/wiki/Turn_(angle)#Tau_proposals),
 *   equal to $-2\pi$.
 */
emmy.env._tau = emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.env.tau);
/**
 * The mathematical
 *   constant [e](https://en.wikipedia.org/wiki/E_(mathematical_constant)),
 *   sometimes known as Euler's Number.
 */
emmy.env.euler = Math.E;
/**
 * The mathematical constant known as the [Euler–Mascheroni
 *   constant](https://en.wikipedia.org/wiki/Euler%E2%80%93Mascheroni_constant) and
 *   sometimes as Euler's constant.
 */
emmy.env.euler_gamma = 0.5772156649015329;
/**
 * The mathematical constant [𝜑](https://en.wikipedia.org/wiki/Golden_ratio), also
 *   known as the Golden Ratio.
 */
emmy.env.phi = (function (){var G__65031 = (Math.sqrt(5.0) + (1));
var G__65032 = 2.0;
return (emmy.generic.divide.cljs$core$IFn$_invoke$arity$2 ? emmy.generic.divide.cljs$core$IFn$_invoke$arity$2(G__65031,G__65032) : emmy.generic.divide.call(null,G__65031,G__65032));
})();
/**
 * Generate a structure with the given `orientation` whose elements are
 * 
 *   (f i)
 * 
 *   where i ranges from `[0..dimension)`.
 */
emmy.env.s_COLON_generate = emmy.structure.generate;
/**
 * Returns a matrix with `r` rows and `c` columns, whose entries are generated by
 *   the supplied function `f`.
 * 
 *   If you only supply one dimension `n` the returned matrix will be square.
 * 
 *   The entry in the `i`th row and `j`-th column is `(f i j)`.
 */
emmy.env.m_COLON_generate = emmy.matrix.generate;
/**
 * Returns a basis sequence of `n` 0s, with `1` in the `i`th position.
 * 
 *   If `n` is not supplied returns an infinite sequence.
 */
emmy.env.v_COLON_make_basis_unit = emmy.structure.basis_unit;
/**
 * Returns a matrix whose rows consist of the supplied sequence of `rows`. These
 *   all must be the same length.
 * 
 *   Variadic equivalent to [[by-rows*]].
 */
emmy.env.matrix_by_rows = emmy.matrix.by_rows;
/**
 * Returns a matrix whose columns consist of the supplied sequence of `cols`.
 *   These all must be the same length.
 * 
 *   Variadic equivalent to [[by-cols*]].
 */
emmy.env.matrix_by_cols = emmy.matrix.by_cols;
/**
 * Returns a row matrix populated by the supplied `xs`. Variadic equivalent
 *   to [[row*]].
 */
emmy.env.row_matrix = emmy.matrix.row;
/**
 * Returns a column matrix populated by the supplied `xs`. Variadic equivalent
 *   to [[column*]].
 */
emmy.env.column_matrix = emmy.matrix.column;
/**
 * Returns a [[PowerSeries]] representing the supplied constant term.
 * 
 *   Optionally, pass `kind` of either `::series` or `::power-series` to specify
 *   the type of series returned.
 */
emmy.env.constant_series = emmy.series.constant;
/**
 * Returns the sum of all elements in the input series `s` up to order
 *   `n` (inclusive). For example:
 * 
 *   ```clojure
 *   (sum (series 1 1 1 1 1 1 1) 3)
 *   ;; => 4
 *   ```
 * 
 *   NOTE that [[sum]] sums the first `n + 1` terms, since a series starts with an
 *   order 0 term.
 */
emmy.env.series_COLON_sum = emmy.series.sum;
emmy.env.metric_COLON_invert = emmy.calculus.metric.invert;
/**
 * Realizes, simplifies and prints `n` elements from the supplied sequence `xs`.
 */
emmy.env.seq_COLON_print = emmy.util.stream.seq_print;
/**
 * Realizes, simplifies and pretty-prints `n` elements from the supplied sequence
 *   `xs`.
 */
emmy.env.seq_COLON_pprint = emmy.util.stream.pprint;
emmy.env.i_COLON_outer_product = emmy.calculus.indexed.outer_product;
emmy.env.i_COLON_contract = emmy.calculus.indexed.contract;
/**
 * Returns the parameters registered with the supplied frame.
 */
emmy.env.frame_params = emmy.calculus.frame.params;
/**
 * Returns a string containing a LaTeX representation of `expr`, wrapped in single
 *   `$` to mark the string as an inline LaTeX form.
 */
emmy.env.tex$ = (function emmy$env$tex$(expr){
return (""+"$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.__GT_TeX(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr)))+"$");
});
/**
 * Returns a string containing a LaTeX representation of `expr`, wrapped in double
 *   `$$` to mark the string as a block LaTeX form.
 */
emmy.env.tex$$ = (function emmy$env$tex$$(expr){
return (""+"$$"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.expression.render.__GT_TeX(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr)))+"$$");
});
/**
 * Returns a string containing a LaTeX representation of `expr`, wrapped in an
 *   `equation` environment.
 * 
 *   Optionally supply a `:label` keyword argument to set a custom label.
 */
emmy.env.__GT_tex_equation = (function emmy$env$__GT_tex_equation(var_args){
var args__5903__auto__ = [];
var len__5897__auto___65059 = arguments.length;
var i__5898__auto___65060 = (0);
while(true){
if((i__5898__auto___65060 < len__5897__auto___65059)){
args__5903__auto__.push((arguments[i__5898__auto___65060]));

var G__65061 = (i__5898__auto___65060 + (1));
i__5898__auto___65060 = G__65061;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.env.__GT_tex_equation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.env.__GT_tex_equation.cljs$core$IFn$_invoke$arity$variadic = (function (expr,p__65037){
var map__65038 = p__65037;
var map__65038__$1 = cljs.core.__destructure_map(map__65038);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65038__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return emmy.expression.render.__GT_TeX.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"equation","equation",-499527745),(function (){var or__5162__auto__ = label;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return true;
}
})()], 0));
}));

(emmy.env.__GT_tex_equation.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.env.__GT_tex_equation.cljs$lang$applyTo = (function (seq65035){
var G__65036 = cljs.core.first(seq65035);
var seq65035__$1 = cljs.core.next(seq65035);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65036,seq65035__$1);
}));

/**
 * Returns its argument, wrapped in a marker type that responds to the generic
 *   operations registered in [[emmy.numsymb]].
 * 
 *   Symbols are automatically treated as [[literal-number]] instances, so
 * 
 *   ```clojure
 *   (* 10 (literal-number 'x))
 *   ```
 * 
 *   is equivalent to
 * 
 *   ```clojure
 *   (* 10 'x)
 *   ```
 * 
 *   If you pass an actual number, emmy will attempt to preserve exact values
 *   through various operations:
 * 
 *   ```clojure
 *   (g/+ 1 (g/cos (g/* 2 (literal-number 4))))
 *   ;;=> (+ 1 (cos 8))
 *   ```
 * 
 *   Notice that the `(g/* 2 ...)` is evaluated, but `cos` evaluation is deferred,
 *   since the result is inexact. On the other hand, if the number is inexact to
 *   begin with:
 * 
 *   ```clojure
 *   (g/+ 1 (g/cos (g/* 2 (literal-number 2.2))))
 *   ;;=> 0.6926671300215806
 *   ```
 * 
 *   the system will go ahead and evaluate it.
 */
emmy.env.literal_number = emmy.abstract$.number.literal_number;

/**
 * Returns a [[Complex]] number with the supplied real part `re` and imaginary
 *   part `im`. `im` defaults to 0.
 */
emmy.env.complex = emmy.complex.complex;

/**
 * Returns true if `a` is an instance of [[Complex]], false otherwise.
 */
emmy.env.complex_QMARK_ = emmy.complex.complex_QMARK_;

/**
 * Return the cached or obvious arity of `f` if we know it. Otherwise
 *  delegates to heavy duty reflection.
 */
emmy.env.arity = emmy.function$.arity;

/**
 * Arity-preserving version of `clojure.core/comp`.
 * 
 *   The arity of a composition is the arity of the rightmost (that is, first to be
 *   applied) function term in `fns`.
 */
emmy.env.compose = emmy.function$.compose;

/**
 * Takes a function `f` and a sequence of `shifts`, and returns a new function
 *   that adds each shift to the corresponding argument of `f`. Too many or two few
 *   shifts are ignored.
 * 
 *   ```clojure
 *   ((arg-shift square 3) 4) ==> 49
 *   ((arg-shift square 3 2 1) 4) ==> 49
 *   ```
 */
emmy.env.arg_shift = emmy.function$.arg_shift;

/**
 * Takes a function `f` and a sequence of `factors`, and returns a new function
 *   that multiplies each factor by the corresponding argument of `f`. Too many or
 *   two few factors are ignored.
 * 
 *   ```clojure
 *   ((arg-scale square 3) 4) ==> 144
 *   ((arg-scale square 3 2 1) 4) ==> 144
 *   ```
 */
emmy.env.arg_scale = emmy.function$.arg_scale;

/**
 * Identity function. Returns its argument.
 */
emmy.env.I = emmy.function$.I;

/**
 * [Chinese Remainder Algorithm](https://en.wikipedia.org/wiki/Chinese_remainder_theorem).
 * 
 *   Accepts a sequence of [[ModInt]] instances (where the `modulus` of
 *   all [[ModInt]] instances are relatively prime), and returns a [[ModInt]] `x`
 *   such that `(residue input) == (mod x (modulus input))`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [a1 (m/make 2 5)
 *      a2 (m/make 3 13)]
 *  [(= 42 (chinese-remainder a1 a2))
 *   (= (residue a1) (mod cr (modulus a1)))
 *   (= (residue a2) (mod cr (modulus a2)))])
 *   ;;=> [true true true]
 *   ```
 */
emmy.env.chinese_remainder = emmy.modint.chinese_remainder;

emmy.env.commutator = emmy.operator.commutator;

emmy.env.anticommutator = emmy.operator.anticommutator;

/**
 * Accepts a single symbolic expression and returns a factored version of that
 *   expression.
 * 
 *   Differs from [[factor-expression]] in that it can handle any expression, not
 *   just expressions limited to polynomial operations.
 */
emmy.env.factor = emmy.polynomial.factor.factor;

emmy.env.numerator = emmy.ratio.numerator;

emmy.env.denominator = emmy.ratio.denominator;

emmy.env.ratio_QMARK_ = emmy.ratio.ratio_QMARK_;

/**
 * Construct a ratio.
 */
emmy.env.rationalize = emmy.ratio.rationalize;

/**
 * Return a [[Series]] starting with the supplied values. The remainder of the
 *   series will be filled with the zero-value corresponding to the first of the
 *   given values.
 * 
 *   If you have a sequence already, prefer [[series*]].
 */
emmy.env.series = emmy.series.series;

/**
 * Return a [[PowerSeries]] starting with the supplied values. The remainder of
 *   the series will be filled with the zero-value corresponding to the first of
 *   the given values.
 * 
 *   If you have a sequence already, prefer [[power-series*]].
 */
emmy.env.power_series = emmy.series.power_series;

/**
 * Returns a [[PowerSeries]] instance representing a
 *   [Binomial series](https://en.wikipedia.org/wiki/Binomial_series), i.e., the
 *   taylor series of the function $f$ given by
 * 
 *   ```
 *   $$f(x) = (1 + x)^\alpha$$
 *   ```
 */
emmy.env.binomial_series = emmy.series.binomial_series;

/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.env.partial_sums = emmy.series.partial_sums;

/**
 * Returns true if the supplied `x` is a `BigInt`, false otherwise.
 */
emmy.env.bigint_QMARK_ = emmy.util.bigint_QMARK_;

emmy.env.bigint = emmy.util.bigint;

/**
 * Generic implementation of `*`. Returns the product of all supplied
 *   arguments. `(*)` returns 1, the multiplicative identity.
 * 
 *   When applied between numbers, acts like `clojure.core/*`. Dispatch is open,
 *   however, making it possible to 'multiply' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (* 2 #emmy/complex "3 + 1i")
 *   ;;=> #emmy/complex "6 + 2i"
 *   ```
 */
emmy.env._STAR_ = emmy.generic._STAR_;

/**
 * Generic implementation of `+`. Returns the sum of all supplied arguments. `(+)`
 *   returns 0, the additive identity.
 * 
 *   When applied between numbers, acts like `clojure.core/+`. Dispatch is open,
 *   however, making it possible to 'add' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (+ [1 2 3] [2 3 4])
 *   ;;=> (up 3 5 7)
 *   ```
 */
emmy.env._PLUS_ = emmy.generic._PLUS_;

/**
 * Generic implementation of `-`.
 * 
 *   If one argument is supplied, returns the negation of `a`. Else returns the
 *   difference of the first argument `a` and the sum of all remaining
 *   arguments. `(-)` returns 0.
 * 
 *   When applied between numbers, acts like `clojure.core/-`. Dispatch is open,
 *   however, making it possible to 'subtract' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (- [1 2 3] [2 3 4])
 *   ;;=> (up -1 -1 -1)
 * 
 *   (- [1 10])
 *   ;;=> (up -1 -10)
 *   ```
 */
emmy.env._ = emmy.generic._;

/**
 * Generic implementation of `/`.
 * 
 *   If one argument is supplied, returns the multiplicative inverse of `a`. Else
 *   returns the result of dividing first argument `a` by the product of all
 *   remaining arguments. `(/)` returns 1, the multiplicative identity.
 * 
 *   When applied between numbers, acts like `clojure.core//`. Dispatch is open,
 *   however, making it possible to 'divide' types wherever the behavior is
 *   mathematically sound.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (/ [2 4 6] 2)
 *   ;;=> (up 1 2 3)
 *   ```
 */
emmy.env._SLASH_ = emmy.generic._SLASH_;

/**
 * Alias for [[/]].
 */
emmy.env.divide = emmy.generic.divide;

/**
 * generic negate.
 * 
 * Returns the negation of `a`.
 * 
 *   Equivalent to `(- (g/zero-like a) a)`.
 */
emmy.env.negate = emmy.generic.negate;

/**
 * generic negative?.
 * 
 * Returns true if the argument `a` is less than `(g/zero-like a)`,
 *   false otherwise. The default implementation depends on a proper Comparable
 *   implementation on the type.`
 */
emmy.env.negative_QMARK_ = emmy.generic.negative_QMARK_;

/**
 * generic infinite?.
 * 
 * Returns true if `a` is either numerically infinite (i.e., equal to `##Inf`) or
 *   a compound number (complex or quaterion, for example) with some infinite
 *   component.
 */
emmy.env.infinite_QMARK_ = emmy.generic.infinite_QMARK_;

/**
 * generic invert.
 * 
 * Returns the multiplicative inverse of `a`.
 * 
 *   Equivalent to `(/ 1 a)`.
 */
emmy.env.invert = emmy.generic.invert;

/**
 * generic abs
 */
emmy.env.abs = emmy.generic.abs;

/**
 * generic sqrt
 */
emmy.env.sqrt = emmy.generic.sqrt;

/**
 * generic quotient
 */
emmy.env.quotient = emmy.generic.quotient;

/**
 * generic remainder.
 * 
 * Returns the remainder of dividing the dividend `a` by divisor `b`.
 * 
 *  The contract satisfied by [[remainder]] is:
 * 
 * ```clojure
 * (= a (+ (* b (quotient a b))
 *      (remainder a b)))
 * ```
 * 
 *  For numbers, this differs from the contract offered by [[modulo]]
 *  because [[quotient]] rounds toward 0, while `(floor (/ a b))` rounds toward
 *  negative infinity.
 * 
 *  The result will be either `0` or of the same sign as the dividend `a`.
 */
emmy.env.remainder = emmy.generic.remainder;

/**
 * generic modulo.
 * 
 * Returns the result of the
 *   mathematical [Modulo](https://en.wikipedia.org/wiki/Modulo_operation)
 *   operation between `a` and `b` (using the Knuth definition listed).
 * 
 *  The contract satisfied by [[modulo]] is:
 * 
 * ```clojure
 * (= a (+ (* b (floor (/ a b)))
 *      (modulo a b)))
 * ```
 * 
 *  For numbers, this differs from the contract offered by [[remainder]]
 *  because `(floor (/ a b))` rounds toward negative infinity, while
 *  the [[quotient]] operation in the contract for [[remainder]] rounds toward 0.
 * 
 *  The result will be either `0` or of the same sign as the divisor `b`.
 */
emmy.env.modulo = emmy.generic.modulo;

/**
 * generic floor.
 * 
 * Returns the largest integer less than or equal to `a`.
 * 
 *   Extensions beyond real numbers may behave differently; see the [Documentation
 *   site](https://cljdoc.org/d/org.mentat/emmy/CURRENT/doc/basics/generics)
 *   for more detail.
 */
emmy.env.floor = emmy.generic.floor;

/**
 * generic ceiling.
 * 
 * Returns the result of rounding `a` up to the next largest integer.
 * 
 *   Extensions beyond real numbers may behave differently; see the [Documentation
 *   site](https://cljdoc.org/d/org.mentat/emmy/CURRENT/doc/basics/generics)
 *   for more detail.
 */
emmy.env.ceiling = emmy.generic.ceiling;

/**
 * generic integer-part.
 * 
 * Returns the integer part of `a` by removing any fractional digits.
 */
emmy.env.integer_part = emmy.generic.integer_part;

/**
 * generic fractional-part.
 * 
 * Returns the fractional part of the given value, defined as `x - ⌊x⌋`.
 * 
 *   For positive numbers, this is identical to `(- a (integer-part a))`. For
 *   negative `a`, because [[floor]] truncates toward negative infinity, you might
 *   be surprised to find that [[fractional-part]] returns the distance between `a`
 *   and the next-lowest integer:
 * 
 * ```clojure
 * (= 0.6 (fractional-part -0.4))
 * ```
 */
emmy.env.fractional_part = emmy.generic.fractional_part;

/**
 * generic expt
 */
emmy.env.expt = emmy.generic.expt;

/**
 * generic exp.
 * 
 * Returns the base-e exponential of `x`. Equivalent to `(expt e x)`, given
 *   some properly-defined `e` symbol.
 */
emmy.env.exp = emmy.generic.exp;

/**
 * generic exp2.
 * 
 * Returns the base-2 exponential of `x`. Equivalent to `(expt 2 x)`.
 */
emmy.env.exp2 = emmy.generic.exp2;

/**
 * generic exp10.
 * 
 * Returns the base-10 exponential of `x`. Equivalent to `(expt 10 x)`.
 */
emmy.env.exp10 = emmy.generic.exp10;

/**
 * generic log.
 * 
 * Returns the natural logarithm of `x`.
 */
emmy.env.log = emmy.generic.log;

/**
 * generic log2.
 * 
 * Returns the base-2 logarithm of `x`, i.e., $log_2(x)$.
 */
emmy.env.log2 = emmy.generic.log2;

/**
 * generic log10.
 * 
 * Returns the base-10 logarithm of `x`, i.e., $log_10(x)$.
 */
emmy.env.log10 = emmy.generic.log10;

/**
 * generic gcd.
 * 
 * Returns the [greatest common
 *   divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) of the two
 *   inputs `a` and `b`.
 */
emmy.env.gcd = emmy.generic.gcd;

/**
 * generic lcm.
 * 
 * Returns the [least common
 *   multiple](https://en.wikipedia.org/wiki/Least_common_multiple) of the two
 *   inputs `a` and `b`.
 */
emmy.env.lcm = emmy.generic.lcm;

/**
 * generic exact-divide.
 * 
 * Similar to the binary case of [[/]], but throws if `(g/exact? <result>)`
 *   returns false.
 */
emmy.env.exact_divide = emmy.generic.exact_divide;

/**
 * generic square
 */
emmy.env.square = emmy.generic.square;

/**
 * generic cube
 */
emmy.env.cube = emmy.generic.cube;

/**
 * generic cos.
 * 
 * Returns the [cosine](https://en.wikipedia.org/wiki/Sine_and_cosine) of the
 *   supplied argument `a`.
 */
emmy.env.cos = emmy.generic.cos;

/**
 * generic sin.
 * 
 * Returns the [sine](https://en.wikipedia.org/wiki/Sine_and_cosine) of the
 *   supplied argument `a`.
 */
emmy.env.sin = emmy.generic.sin;

/**
 * generic tan.
 * 
 * Computes the trigonometric tangent function of the supplied argument `a`.
 * 
 * Equivalent to `(/ (sin a) (cos a))`.
 */
emmy.env.tan = emmy.generic.tan;

/**
 * generic cot.
 * 
 * Computes the trigonometric cotangent function of the supplied argument `a`.
 * 
 * Equivalent to `(invert (tan a))`, or `(/ (cos a) (sin a))`.
 */
emmy.env.cot = emmy.generic.cot;

/**
 * generic sec.
 * 
 * Computes the secant of the supplied argument `a`.
 * 
 * Equivalent to `(invert (cos a))`.
 */
emmy.env.sec = emmy.generic.sec;

/**
 * generic csc.
 * 
 * Computes the cosecant of the supplied argument `a`.
 * 
 * Equivalent to `(invert (sin a))`.
 */
emmy.env.csc = emmy.generic.csc;

/**
 * generic atan.
 * 
 * Computes the inverse tangent of the supplied argument `a`. Given two
 *   arguments `a` and `b`, returns the inverse tangent of the angle formed by the
 *   point `(b, a)` in a 2-dimensional euclidean plane.
 * 
 *   The two-argument version is sometimes
 *   called [Atan2](https://en.wikipedia.org/wiki/Atan2).
 */
emmy.env.atan = emmy.generic.atan;

/**
 * generic acos.
 * 
 * Computes the inverse cosine of the supplied argument `a`.
 * 
 * Defaults to `atan(sqrt(1-x^2)/x)`.
 */
emmy.env.acos = emmy.generic.acos;

/**
 * generic asin.
 * 
 * Computes the inverse sine of the supplied argument `a`.
 * 
 * Defaults to `atan(x/sqrt(1-x^2))`.
 */
emmy.env.asin = emmy.generic.asin;

/**
 * generic acot.
 * 
 * Computes the [inverse
 *  cotangent](https://mathworld.wolfram.com/InverseCotangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `pi/2 - atan(x)`.
 */
emmy.env.acot = emmy.generic.acot;

/**
 * generic asec.
 * 
 * Computes the [inverse
 *  secant](https://mathworld.wolfram.com/InverseSecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `atan(sqrt(x^2 - 1))`.
 */
emmy.env.asec = emmy.generic.asec;

/**
 * generic acsc.
 * 
 * Computes the [inverse
 *  cosecant](https://mathworld.wolfram.com/InverseCosecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `atan(1 / sqrt(x^2 - 1))`.
 */
emmy.env.acsc = emmy.generic.acsc;

/**
 * generic cosh.
 * 
 * Computes the [hyperbolic
 *  cosine](https://mathworld.wolfram.com/HyperbolicCosine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `(e^x + e^{-x}) / 2`.
 */
emmy.env.cosh = emmy.generic.cosh;

/**
 * generic sinh.
 * 
 * Computes the [hyperbolic
 *  sine](https://mathworld.wolfram.com/HyperbolicSine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `(e^x - e^{-x}) / 2`.
 */
emmy.env.sinh = emmy.generic.sinh;

/**
 * generic tanh.
 * 
 * Computes the [hyperbolic
 *  tangent](https://mathworld.wolfram.com/HyperbolicTangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `sinh(x) / cosh(x)`.
 */
emmy.env.tanh = emmy.generic.tanh;

/**
 * generic coth.
 * 
 * Computes the [hyperbolic
 *  cotangent](https://mathworld.wolfram.com/HyperbolicCotangent.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `cosh(x) / sinh(x)`.
 */
emmy.env.coth = emmy.generic.coth;

/**
 * generic sech.
 * 
 * Computes the [hyperbolic
 *  secant](https://mathworld.wolfram.com/HyperbolicSecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `1 / cosh(x)`.
 */
emmy.env.sech = emmy.generic.sech;

/**
 * generic csch.
 * 
 * Computes the [hyperbolic
 *  cosecant](https://mathworld.wolfram.com/HyperbolicCosecant.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `1 / sinh(x)`.
 */
emmy.env.csch = emmy.generic.csch;

/**
 * generic acosh.
 * 
 * Computes the [inverse hyperbolic
 *  cosine](https://mathworld.wolfram.com/InverseHyperbolicCosine.html) of the supplied
 *  argument `a`.
 * 
 * defaults to `2 ln(sqrt((x+1)/2) + sqrt((x-1)/2))`.
 */
emmy.env.acosh = emmy.generic.acosh;

/**
 * generic asinh.
 * 
 * Computes the [inverse hyperbolic
 *  sine](https://mathworld.wolfram.com/InverseHyperbolicSine.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln(x + sqrt(1 + x^2))`.
 */
emmy.env.asinh = emmy.generic.asinh;

/**
 * generic atanh.
 * 
 * Computes the [inverse hyperbolic
 *  tangent](https://mathworld.wolfram.com/InverseHyperbolicTangent.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `1/2 ln((1+x)/(1-x))`.
 */
emmy.env.atanh = emmy.generic.atanh;

/**
 * generic acoth.
 * 
 * Computes the [inverse hyperbolic
 *  cotangent](https://mathworld.wolfram.com/InverseHyperbolicCotangent.html) of
 *  the supplied argument `a`.
 * 
 * defaults to `1/2 ln((x+1)/(x-1))`.
 */
emmy.env.acoth = emmy.generic.acoth;

/**
 * generic asech.
 * 
 * Computes the [inverse hyperbolic
 *  secant](https://mathworld.wolfram.com/InverseHyperbolicSecant.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln((1 + sqrt(1-x^2)) / x)`.
 */
emmy.env.asech = emmy.generic.asech;

/**
 * generic acsch.
 * 
 * Computes the [inverse hyperbolic
 *  cosecant](https://mathworld.wolfram.com/InverseHyperbolicCosecant.html) of the
 *  supplied argument `a`.
 * 
 * defaults to `ln((1 + sqrt(1+x^2)) / x)`.
 */
emmy.env.acsch = emmy.generic.acsch;

/**
 * generic sinc.
 * 
 * The unnormalized [sinc
 *   function](https://en.wikipedia.org/wiki/Sinc_function), equivalent to
 *   $\frac{\sin x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Sinc_function)
 * - [Mathworld page on Sinc](https://mathworld.wolfram.com/SincFunction.html)
 * - [Boost notes on [[sinc]]
 *   and [[sinch]]](https://www.boost.org/doc/libs/1_65_0/libs/math/doc/html/math_toolkit/sinc/sinc_overview.html)
 */
emmy.env.sinc = emmy.generic.sinc;

/**
 * generic tanc.
 * 
 * `tanc` is defined, by analogy with [[sinc]], to be equal to $\frac{\tan
 *   x}{x}$ for nonzero $x$ and equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Tanc_function)
 * - [Mathworld page on Sinc](https://mathworld.wolfram.com/TancFunction.html)
 */
emmy.env.tanc = emmy.generic.tanc;

/**
 * generic sinhc.
 * 
 * The [sinhc function](https://en.wikipedia.org/wiki/Sinhc_function),
 *   equivalent to $\frac{\sinh x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Sinhc_function)
 * - [Mathworld page on Sinhc](https://mathworld.wolfram.com/SinhcFunction.html)
 */
emmy.env.sinhc = emmy.generic.sinhc;

/**
 * generic tanhc.
 * 
 * The [tanhc function](https://en.wikipedia.org/wiki/Tanhc_function),
 *   equivalent to $\frac{\tanh x}{x}$ but defined to be equal to 1 at $x = 0$.
 * 
 *   ### References
 * 
 * - [Wikipedia page](https://en.wikipedia.org/wiki/Tanhc_function)
 * - [Mathworld page on Tanhc](https://mathworld.wolfram.com/TanhcFunction.html)
 */
emmy.env.tanhc = emmy.generic.tanhc;

/**
 * generic make-rectangular
 */
emmy.env.make_rectangular = emmy.generic.make_rectangular;

/**
 * generic make-polar
 */
emmy.env.make_polar = emmy.generic.make_polar;

/**
 * generic real-part
 */
emmy.env.real_part = emmy.generic.real_part;

/**
 * generic imag-part
 */
emmy.env.imag_part = emmy.generic.imag_part;

/**
 * generic magnitude
 */
emmy.env.magnitude = emmy.generic.magnitude;

/**
 * generic angle
 */
emmy.env.angle = emmy.generic.angle;

/**
 * generic conjugate
 */
emmy.env.conjugate = emmy.generic.conjugate;

/**
 * generic transpose
 */
emmy.env.transpose = emmy.generic.transpose;

/**
 * generic trace
 */
emmy.env.trace = emmy.generic.trace;

/**
 * generic determinant
 */
emmy.env.determinant = emmy.generic.determinant;

/**
 * generic dimension
 */
emmy.env.dimension = emmy.generic.dimension;

/**
 * generic dot-product
 */
emmy.env.dot_product = emmy.generic.dot_product;

/**
 * generic inner-product
 */
emmy.env.inner_product = emmy.generic.inner_product;

/**
 * generic outer-product
 */
emmy.env.outer_product = emmy.generic.outer_product;

/**
 * generic cross-product
 */
emmy.env.cross_product = emmy.generic.cross_product;

/**
 * generic partial-derivative
 */
emmy.env.partial_derivative = emmy.generic.partial_derivative;

/**
 * generic Lie-derivative
 */
emmy.env.Lie_derivative = emmy.generic.Lie_derivative;

/**
 * generic solve-linear.
 * 
 * For a given `a` and `b`, returns `x` such that `a*x = b`.
 * 
 *   See[[solve-linear-right]] for a similar function that solves for `a = x*b`.
 */
emmy.env.solve_linear = emmy.generic.solve_linear;

/**
 * Alias for [[solve-linear]]; present for compatibility with the original
 *   `scmutils` codebase.
 * 
 *   NOTE: In `scmutils`, `solve-linear-left` and `solve-linear` act identically in
 *   all cases except matrices. `solve-linear-left` only accepted a column
 *   matrix (or up structure) in the `b` position, while `solve-linear` accepted
 *   either a column or row (up or down structure).
 * 
 *   In Emmy, both functions accept either type.
 */
emmy.env.solve_linear_left = emmy.generic.solve_linear_left;

/**
 * generic solve-linear-right.
 * 
 * For a given `a` and `b`, returns `x` such that `a = x*b`.
 * 
 *   See[[solve-linear]] for a similar function that solves for `a*x = b`.
 */
emmy.env.solve_linear_right = emmy.generic.solve_linear_right;

/**
 * generic simplify
 */
emmy.env.simplify = emmy.generic.simplify;

/**
 * generic zero?.
 * 
 * Is true if `x` is an additive identity.
 */
emmy.env.zero_QMARK_ = emmy.generic.zero_QMARK_;

/**
 * generic one?.
 * 
 * Is true if `x` is a multiplicative identity.
 */
emmy.env.one_QMARK_ = emmy.generic.one_QMARK_;

/**
 * generic identity?.
 * 
 * Like `one?`, but this is true of square identity matrices as well.
 *   No matrix is considered `one?` because its function as a multiplicative
 *   identity depends on the shape of the other multiplicand.
 */
emmy.env.identity_QMARK_ = emmy.generic.identity_QMARK_;

/**
 * generic zero-like.
 * 
 * In general, this procedure returns the additive identity of the type of its
 *   argument, if it exists. For numbers this is 0.
 */
emmy.env.zero_like = emmy.generic.zero_like;

/**
 * generic one-like.
 * 
 * In general, this procedure returns the multiplicative identity of the type of
 *   its argument, if it exists. For numbers this is 1.
 */
emmy.env.one_like = emmy.generic.one_like;

/**
 * generic identity-like.
 * 
 * Like `one-like` but works for square matrices.
 */
emmy.env.identity_like = emmy.generic.identity_like;

/**
 * generic exact?.
 * 
 * Entries that are exact are available for `gcd`, among other operations.
 */
emmy.env.exact_QMARK_ = emmy.generic.exact_QMARK_;

/**
 * generic freeze.
 * 
 * Freezing an expression means removing wrappers and other metadata from
 *   subexpressions, so that the result is basically a pure S-expression with the
 *   same structure as the input. Doing this will rob an expression of useful
 *   information for further computation; so this is intended to be done just
 *   before simplification and printing, to simplify those processes.
 */
emmy.env.freeze = emmy.generic.freeze;

/**
 * Returns a structure compatible for multiplication with `s` down to a scalar,
 *   with the slots filled with gensyms.
 */
emmy.env.compatible_shape = emmy.structure.compatible_shape;

/**
 * Returns a structure compatible for multiplication with `s` down to 0.
 */
emmy.env.compatible_zero = emmy.structure.compatible_zero;

/**
 * Alias for [[compatible-zero]].
 */
emmy.env.dual_zero = emmy.structure.dual_zero;

/**
 * Construct a down (covariant) tuple from the arguments. Variadic version
 *   of [[down*]].
 */
emmy.env.down = emmy.structure.down;

/**
 * Return a structure with the same shape as s but with f applied to each
 *   primitive (that is, not structural) component.
 */
emmy.env.mapr = emmy.structure.mapr;

/**
 * Given some function `f` and any number of isomorphic `structures`,
 *   returns the sum of the results of applying `f` to each associated set of
 *   entries in each `structure`.
 */
emmy.env.sumr = emmy.structure.sumr;

/**
 * Returns the orientation of `s`, either `::up` or `::down`. Defaults to `::up`,
 *   even for non-structures.
 */
emmy.env.orientation = emmy.structure.orientation;

/**
 * Return the structure `s` in unoriented vector form.
 */
emmy.env.structure__GT_vector = emmy.structure.structure__GT_vector;

/**
 * Returns `true` if `s` is a structure, false otherwise. (Vectors are treated as
 *   up structures.)
 */
emmy.env.structure_QMARK_ = emmy.structure.structure_QMARK_;

/**
 * Construct an up (contravariant) tuple from the arguments.
 * 
 *   Variadic version of [[up*]].
 */
emmy.env.up = emmy.structure.up;

/**
 * Returns `true` if `s` is an `up` structure, false otherwise.
 */
emmy.env.up_QMARK_ = emmy.structure.up_QMARK_;

/**
 * Form a down-tuple from a vector.
 * 
 *   NOTE that this is an alias of [[down*]] that is more restrictive, in that it
 *   only accepts a vector. Use [[down*]] if you'd like to pass an arbitrary
 *   sequence. (If you pass a vector to [[down*]]) it will be just as efficient.
 */
emmy.env.vector__GT_down = emmy.structure.vector__GT_down;

/**
 * Form an up-tuple from a vector.
 * 
 *   NOTE that this is an alias of [[up*]] that is more restrictive, in that it
 *   only accepts a vector. Use [[up*]] if you'd like to pass an arbitrary
 *   sequence. (If you pass a vector to [[up*]]) it will be just as efficient.
 */
emmy.env.vector__GT_up = emmy.structure.vector__GT_up;

/**
 * Generates a `down` structure of dimension `size` populated by symbolic entries,
 *   each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-down 'x 3)
 *   (down 'x_0 'x_1 'x_2))
 *   ```
 */
emmy.env.literal_down = emmy.structure.literal_down;

/**
 * Generates an `up` structure of dimension `size` populated by symbolic entries,
 *   each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-up 'x 3)
 *   (up 'x↑0 'x↑1 'x↑2))
 *   ```
 */
emmy.env.literal_up = emmy.structure.literal_up;

/**
 * If the supplied argument is a [[Literal]] (or a symbol, interpreted elsewhere
 *   as a numerical literal expression), returns the wrapped expression (or the
 *   symbol).
 * 
 *   Else, returns `expr`.
 */
emmy.env.expression_of = emmy.expression.expression_of;

/**
 * Renders an expression through the simplifier and onto the stream.
 */
emmy.env.expression__GT_stream = emmy.expression.expression__GT_stream;

/**
 * Returns a string representation of a frozen, simplified version of the supplied
 *   expression `expr`.
 */
emmy.env.expression__GT_string = emmy.expression.expression__GT_string;

emmy.env.print_expression = emmy.expression.print_expression;

emmy.env.pe = emmy.expression.pe;

/**
 * Converts an S-expression to printable infix form. Numeric exponents are
 *   written as superscripts. Partial derivatives get subscripts.
 */
emmy.env.__GT_infix = emmy.expression.render.__GT_infix;

/**
 * Convert the given expression to TeX format, as a string.
 * 
 *   If you set the `:equation` keyword argument to a truthy value, the result will
 *   be wrapped in an equation environment. `:equation <string>` will insert a
 *   `\label{<string>}` entry inside the equation environment.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [expr (+ 'x 'xy)]
 *  (println
 *    (->TeX expr :equation "label!")))
 * 
 *   \begin{equation}
 *   \label{label!}
 *   x + y
 *   \end{equation}
 *   ```
 *   
 */
emmy.env.__GT_TeX = emmy.expression.render.__GT_TeX;

/**
 * Converts an S-expression to JavaScript.
 */
emmy.env.__GT_JavaScript = emmy.expression.render.__GT_JavaScript;

/**
 * Returns true if `x` is a basis, false otherwise.
 */
emmy.env.basis_QMARK_ = emmy.calculus.basis.basis_QMARK_;

/**
 * Returns true if `x` is a coordinate basis, false otherwise.
 */
emmy.env.coordinate_basis_QMARK_ = emmy.calculus.basis.coordinate_basis_QMARK_;

/**
 * Make a basis object out of a vector and dual basis.
 * 
 *   The dimensions of `vector-basis` and `dual-basis` must agree.
 */
emmy.env.make_basis = emmy.calculus.basis.make_basis;

/**
 * Returns the standard basis object for `coordinate-system`.
 */
emmy.env.coordinate_system__GT_basis = emmy.calculus.basis.coordinate_system__GT_basis;

emmy.env.basis__GT_coordinate_system = emmy.calculus.basis.basis__GT_coordinate_system;

/**
 * Extract the dual basis from the given basis object `b`.
 */
emmy.env.basis__GT_oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis;

/**
 * Extract the vector basis from the given basis object `b`.
 */
emmy.env.basis__GT_vector_basis = emmy.calculus.basis.basis__GT_vector_basis;

/**
 * Extract the dimension from the given basis object `b`.
 */
emmy.env.basis__GT_dimension = emmy.calculus.basis.basis__GT_dimension;

emmy.env.contract = emmy.calculus.basis.contract;

emmy.env.vector_basis__GT_dual = emmy.calculus.basis.vector_basis__GT_dual;

emmy.env.make_constant_vector_field = emmy.calculus.basis.make_constant_vector_field;

/**
 * Returns the Jacobian of transition from `from-basis` to `to-basis`.
 * 
 *   The Jacobian is a structure of manifold functions. The outer index is the
 *   from-basis index, so this structure can be multiplied by tuple of component
 *   functions of a vector field relative to `from-basis` to get component
 *   functions for a vector field in `to-basis`.
 */
emmy.env.Jacobian = emmy.calculus.basis.Jacobian;

/**
 * Returns a structure similar to the [[manifold/coordinate-prototype]] of
 *   `coordinate-system`, where every entry is a function from manifold point =>
 *   the associated component of the point in the coordinate representation
 *   described by `coordinate-system`.
 */
emmy.env.coordinate_functions = emmy.calculus.coordinate.coordinate_functions;

/**
 * Returns a data structure representing [Christoffel symbols of the first
 *   kind](https://en.wikipedia.org/wiki/Christoffel_symbols#Christoffel_symbols_of_the_first_kind).
 */
emmy.env.make_Christoffel_1 = emmy.calculus.connection.make_Christoffel_1;

emmy.env.metric__GT_Christoffel_1 = emmy.calculus.connection.metric__GT_Christoffel_1;

emmy.env.metric__GT_Christoffel_2 = emmy.calculus.connection.metric__GT_Christoffel_2;

emmy.env.literal_Christoffel_1 = emmy.calculus.connection.literal_Christoffel_1;

emmy.env.literal_Christoffel_2 = emmy.calculus.connection.literal_Christoffel_2;

emmy.env.metric__GT_connection_1 = emmy.calculus.connection.metric__GT_connection_1;

emmy.env.metric__GT_connection_2 = emmy.calculus.connection.metric__GT_connection_2;

emmy.env.literal_Cartan = emmy.calculus.connection.literal_Cartan;

emmy.env.structure_constant = emmy.calculus.connection.structure_constant;

emmy.env.covariant_derivative = emmy.calculus.covariant.covariant_derivative;

emmy.env.covariant_differential = emmy.calculus.covariant.covariant_differential;

/**
 * Takes a system derivative `R` and returns a operator that takes a function `F`
 *   of coordinatized state and performs the operation described below, from
 *   ODE.scm in scmutils:
 * 
 *   Let `(sigma t)` be the state of a system at time `t`. Let the
 *   (first-order) system of differential equations governing the evolution of
 *   this state be:
 * 
 *   ```clojure
 *   ((D sigma) t) = (R (sigma t))
 *   ```
 * 
 *   ```clojure
 *   (D sigma) = (compose R sigma)
 *   ```
 * 
 *   i.e. `R` is a system derivative.
 * 
 *   Let `F` be any function of state, then a differential equation for the
 *   evolution of `F`, as it is dragged along the integral curve sigma is:
 * 
 *   ```clojure
 *   (D (compose F sigma)) = (* (compose (D F) sigma) (D sigma))
 *   = (compose (* (D F) R) sigma)
 *   ```
 * 
 *   Let's call this operation `Lie-D` (the Lie derivative for coordinates).
 */
emmy.env.Lie_D = emmy.calculus.covariant.Lie_D;

emmy.env.interior_product = emmy.calculus.covariant.interior_product;

emmy.env.make_Cartan = emmy.calculus.covariant.make_Cartan;

emmy.env.Cartan_QMARK_ = emmy.calculus.covariant.Cartan_QMARK_;

emmy.env.Cartan__GT_forms = emmy.calculus.covariant.Cartan__GT_forms;

emmy.env.Cartan__GT_basis = emmy.calculus.covariant.Cartan__GT_basis;

/**
 * Returns a data structure representing [Christoffel symbols of the second
 *   kind](https://en.wikipedia.org/wiki/Christoffel_symbols#Christoffel_symbols_of_the_second_kind_(symmetric_definition)).
 */
emmy.env.make_Christoffel = emmy.calculus.covariant.make_Christoffel;

emmy.env.Christoffel_QMARK_ = emmy.calculus.covariant.Christoffel_QMARK_;

emmy.env.Christoffel__GT_symbols = emmy.calculus.covariant.Christoffel__GT_symbols;

emmy.env.Christoffel__GT_basis = emmy.calculus.covariant.Christoffel__GT_basis;

emmy.env.Cartan__GT_Christoffel = emmy.calculus.covariant.Cartan__GT_Christoffel;

emmy.env.Christoffel__GT_Cartan = emmy.calculus.covariant.Christoffel__GT_Cartan;

emmy.env.symmetrize_Christoffel = emmy.calculus.covariant.symmetrize_Christoffel;

emmy.env.symmetrize_Cartan = emmy.calculus.covariant.symmetrize_Cartan;

emmy.env.Cartan_transform = emmy.calculus.covariant.Cartan_transform;

emmy.env.Cartan__GT_Cartan_over_map = emmy.calculus.covariant.Cartan__GT_Cartan_over_map;

emmy.env.geodesic_equation = emmy.calculus.covariant.geodesic_equation;

emmy.env.parallel_transport_equation = emmy.calculus.covariant.parallel_transport_equation;

emmy.env.Riemann_curvature = emmy.calculus.curvature.Riemann_curvature;

emmy.env.Riemann = emmy.calculus.curvature.Riemann;

emmy.env.Ricci = emmy.calculus.curvature.Ricci;

emmy.env.torsion_vector = emmy.calculus.curvature.torsion_vector;

emmy.env.torsion = emmy.calculus.curvature.torsion;

emmy.env.curvature_components = emmy.calculus.curvature.curvature_components;

/**
 * Derivative operator. Takes some function `f` and returns a function whose value
 *   at some point can multiply an increment in the arguments to produce the best
 *   linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D]] computes a derivative. For vector-valued
 *   functions, [[D]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 * 
 *   The related [[emmy.env/Grad]] returns a function that produces a structure of
 *   the opposite orientation as [[D]]. Both of these functions use reverse-mode
 *   automatic differentiation.
 */
emmy.env.D = emmy.calculus.derivative.D;

/**
 * Forward-mode derivative operator. Takes some function `f` and returns a
 *   function whose value at some point can multiply an increment in the arguments
 *   to produce the best linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D-forward]] computes a derivative. For vector-valued
 *   functions, [[D-forward]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 */
emmy.env.D_forward = emmy.calculus.derivative.D_forward;

/**
 * Reverse-mode derivative operator. Takes some function `f` and returns a
 *   function whose value at some point can multiply an increment in the arguments
 *   to produce the best linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D-reverse]] computes a derivative. For vector-valued
 *   functions, [[D-reverse]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 */
emmy.env.D_reverse = emmy.calculus.derivative.D_reverse;

/**
 * Returns an operator that, when applied to a function `f`, produces a function
 *   that uses forward-mode automatic differentiation to compute the partial
 *   derivative of `f` at the (zero-based) slot index provided via `selectors`.
 */
emmy.env.partial_forward = emmy.calculus.derivative.partial_forward;

/**
 * Returns an operator that, when applied to a function `f`, produces a function
 *   that uses reverse-mode automatic differentiation to compute the partial
 *   derivative of `f` at the (zero-based) slot index provided via `selectors`.
 */
emmy.env.partial_reverse = emmy.calculus.derivative.partial_reverse;

emmy.env.D_as_matrix = emmy.calculus.derivative.D_as_matrix;

/**
 * Given a differentiable function `f` and any number of arguments `xs`, returns
 *   a [[emmy.series/PowerSeries]] representing the [Taylor
 *   series](https://en.wikipedia.org/wiki/Taylor_series) of the function `f`
 *   expanded at `xs`.
 * 
 *   Calling [[taylor-series]] with no arguments will return the [Maclaurin
 *   series](https://en.wikipedia.org/wiki/Taylor_series#List_of_Maclaurin_series_of_some_common_functions)
 *   of `f`, i.e., the Taylor series expansion at `(= x 0)`.
 * 
 *   Calling the returned power series with incremental argument `dx` will produce
 *   a [[emmy.series/Series]] representing the terms of the Taylor series of
 *   `f` expanded at `x` and evaluated at `x+dx`.
 * 
 *   NOTE: Just like the [[D]] operator, functions `f` of multiple-arguments are
 *   treated as a function of a single structural argument. If you pass multiple
 *   arguments `xs`, you'll have to manually wrap your multiple-argument `dx` in
 *   a [[emmy.structure/up]] or a vector before passing it to the returned
 *   power series.
 * 
 *   NOTE: The typical definition of a Taylor series of `f` expanded around some
 *   point `x` is
 * 
 *   $$T(p) = f(x) + \frac{f'(x)}{1!}(p-x) + \frac{f''(x)}{2!} (p-x)^2 + \ldots,$$
 * 
 *   where `p` is the evaluation point. When `(= p x)`, all derivatives of the
 *   Taylor series expansion of `f` will exactly match the derivatives of `f`
 *   itself.
 * 
 *   The Taylor series returned here (call it $T'$) is actually a function of `dx`,
 *   where
 * 
 *   $$T'(dx) = T(x+dx) = f(x) + \frac{f'(x)}{1!}(dx) + \frac{f''(x)}{2!} (dx)^2 + \ldots.$$
 */
emmy.env.taylor_series = emmy.calculus.derivative.taylor_series;

/**
 * Returns true if the supplied `f` is a form field operator, false otherwise.
 */
emmy.env.form_field_QMARK_ = emmy.calculus.form_field.form_field_QMARK_;

/**
 * Returns true if the supplied `f` is an [form field of rank
 *   n](https://en.wikipedia.org/wiki/Differential_form), false otherwise.
 * 
 *   A form-field of rank n is an operator that takes n vector fields to a
 *   real-valued function on the manifold.
 */
emmy.env.nform_field_QMARK_ = emmy.calculus.form_field.nform_field_QMARK_;

/**
 * Returns true if the supplied `f` is
 *   a [One-form](https://en.wikipedia.org/wiki/One-form), false
 *   otherwise.
 * 
 *   A [One-form](https://en.wikipedia.org/wiki/One-form) takes a single vector
 *   field to a real-valued function on the manifold.
 */
emmy.env.oneform_field_QMARK_ = emmy.calculus.form_field.oneform_field_QMARK_;

/**
 * Returns a form field that returns, for any supplied vector field `vf`, a
 *   manifold function [[manifold/zero-manifold-function]] that maps every input
 *   manifold `point` to the scalar value 0.
 */
emmy.env.ff_COLON_zero = emmy.calculus.form_field.ff_COLON_zero;

/**
 * Takes:
 * 
 *   - a `down` tuple of `components` of the one-form field relative to
 *  `coordinate-system`
 *   - the `coordinate-system`
 * 
 *   And returns a full one-form field.
 * 
 *   A one-field field is an operator that takes a vector field to a real-valued
 *   function on the manifold.
 */
emmy.env.components__GT_oneform_field = emmy.calculus.form_field.components__GT_oneform_field;

/**
 * Given a one-form field `form` and a `coordinate-system`, returns a function
 *   from the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the form field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-oneform-field 'f R2-rect)]
 *    ((oneform-field->components f R2-rect)
 *     (up 'x0 'y0))))
 * 
 *   ;;=> (down (f_0 (up x0 y0))
 *   ;;         (f_1 (up x0 y0)))
 *   ```
 */
emmy.env.oneform_field__GT_components = emmy.calculus.form_field.oneform_field__GT_components;

/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a one-form field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->oneform-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-form-field`'s component
 *   functions will accept a single non-structural argument.
 */
emmy.env.literal_oneform_field = emmy.calculus.form_field.literal_oneform_field;

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation, returns a
 *   one-form field.
 * 
 *   The returned one-form field at each structural spot takes a vector field and
 *   returns a function that takes the directional derivative in that coordinate's
 *   direction using the vector field.
 */
emmy.env.coordinate_basis_oneform_field = emmy.calculus.form_field.coordinate_basis_oneform_field;

/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-oneform-field` instances.
 * 
 *   The one-form field at each structural spot takes a vector field and returns a
 *   function that takes the directional derivative in that coordinate's direction
 *   using the vector field.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-oneform-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
emmy.env.coordinate_system__GT_oneform_basis = emmy.calculus.form_field.coordinate_system__GT_oneform_basis;

/**
 * Given a structure of `components` functions defined on manifold points and and
 *   a matching `oneform-basis` (of identical structure),
 * 
 *   Returns a new one-form field that
 * 
 *   - passes its vector-field argument to `oneform-basis`, returning a new
 *  equivalent structure with each slot populated by functions from a manifold
 *  point to the directional derivative (using the vector field) in that
 *  coordinate direction
 * 
 *   - contracts the result of that operation with the result of applying each
 *  component in `components` to the manifold point.
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[oneform-field->basis-components]]
 */
emmy.env.basis_components__GT_oneform_field = emmy.calculus.form_field.basis_components__GT_oneform_field;

/**
 * Given a structure `w` of and a vector field basis `vector-basis`, returns a new
 *   structure generated by applying the full vector basis to each element of `w`.
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [vb    (vf/coordinate-system->vector-basis coordsys)
 *      basis (coordinate-system->oneform-basis coordsys)
 *      components (down d:dx d:dy)]
 *  (= components
 *     (-> components
 *         (basis-components->oneform-field basis)
 *         (oneform-field->basis-components vb))))
 *   ```
 */
emmy.env.oneform_field__GT_basis_components = emmy.calculus.form_field.oneform_field__GT_basis_components;

/**
 * One of the two incompatible definitions of differential.
 * 
 *   This differential is a special case of exterior derivative. The other one
 *   lives at [[map/differential]].
 */
emmy.env.function__GT_oneform_field = emmy.calculus.form_field.function__GT_oneform_field;

/**
 * Computes the wedge product of the sequence `fs` of one-forms.
 * 
 *   Higher rank forms can be constructed from one-forms by wedging them together.
 *   This antisymmetric tensor product is computed as a determinant. The purpose of
 *   this is to allow us to use the construction dx^dy to compute the area
 *   described by the vectors that are given to it.
 * 
 *   See Spivak p275 v1 of 'Differential Geometry' to see the correct definition.
 *   The key is that the wedge of the coordinate basis forms had better be the
 *   volume element.
 */
emmy.env.wedge = emmy.calculus.form_field.wedge;

/**
 * Returns the alternation of the supplied differential `form`.
 */
emmy.env.Alt = emmy.calculus.form_field.Alt;

/**
 * Alternative definition of [[wedge]] in terms of alternation.
 */
emmy.env.alt_wedge = emmy.calculus.form_field.alt_wedge;

emmy.env.exterior_derivative = emmy.calculus.form_field.exterior_derivative;

emmy.env.d = emmy.calculus.form_field.d;

/**
 * Returns true if `x` implements [[IFrame]], false otherwise.
 */
emmy.env.frame_QMARK_ = emmy.calculus.frame.frame_QMARK_;

/**
 * Marks the input event `e` as an event via its metadata. The return value will
 *   return `true` when passed to [[event?]].
 */
emmy.env.make_event = emmy.calculus.frame.make_event;

/**
 * Returns true if `e` is an event, false otherwise.
 * 
 *   Make new events with [[make-event]].
 */
emmy.env.event_QMARK_ = emmy.calculus.frame.event_QMARK_;

/**
 * Marks (via metadata) the supplied set of `coords` as being owned by `owner`. If
 *   `coords` already has an owner (that is not equal to `owner`), throws.
 */
emmy.env.claim = emmy.calculus.frame.claim;

/**
 * Accepts a coordinate representation `coords` of some `event` and returns a
 *  coordinate-free representation of the event.
 * 
 *  `coords` must be owned this this reference frame; [[coords->event]] will throw
 *  if not.
 */
emmy.env.coords__GT_event = emmy.calculus.frame.coords__GT_event;

/**
 * Accepts a reference frame and an `event`, and returns this reference
 *  frame's coordinate representation of the supplied `event`.
 */
emmy.env.event__GT_coords = emmy.calculus.frame.event__GT_coords;

/**
 * Returns the ancestor [[IFrame]] instance of this frame, or nil if there is
 *  no ancestor.
 */
emmy.env.ancestor_frame = emmy.calculus.frame.ancestor_frame;

/**
 * Returns the symbolic name of the suppplied frame.
 */
emmy.env.frame_name = emmy.calculus.frame.frame_name;

/**
 * Returns the owning [[IFrame]] instance of the supplied coordinates `coords`,
 *   nil if there's no owner otherwise.
 */
emmy.env.frame_owner = emmy.calculus.frame.frame_owner;

/**
 * Takes:
 * 
 *   - `c->e`, a function mapping coordinates to events
 *   - `e->c`, a function mapping events to coordinates
 * 
 *   and returns a function that takes:
 * 
 *   - a symbolic name
 *   - an ancestor frame
 *   - a dictionary of params
 * 
 *   and returns instance of [[IFrame]].
 * 
 *   Both `c->e` and `e->c` must accept three arguments:
 * 
 *   - `ancestor-frame`
 *   - the [[IFrame]] instance
 *   - a map of parameters supplied to the returned function (possibly empty!).
 */
emmy.env.frame_maker = emmy.calculus.frame.frame_maker;

emmy.env.Gram_Schmidt = emmy.calculus.hodge_star.Gram_Schmidt;

emmy.env.orthonormalize = emmy.calculus.hodge_star.orthonormalize;

/**
 * Takes a `metric` and a `spec` and returns the [Hodge star
 *   operator](https://en.wikipedia.org/wiki/Hodge_star_operator) (actually just a
 *   function, but I suspect this should be a proper operator!)
 * 
 *   `spec` may be:
 * 
 *   - a coordinate system with an orthonormal basis
 *   - an orthonormal basis
 *   - a basis
 * 
 *   if the spec is a basis that needs to be orthonormalized, the optional
 *   `:orthonormalize?` keyword argument must be a coordinate system.
 */
emmy.env.Hodge_star = emmy.calculus.hodge_star.Hodge_star;

/**
 * Given an operator or function `f`, returns its registered vector of argument
 *   types, or `[]` if none exist.
 * 
 *   argument types are, for example,
 * 
 *   ```clojure
 *   [::ff/oneform-field ::vf/vector-field ::vf/vector-field]
 *   ```
 * 
 *   for a `Christoffel-2`, which takes one oneform field and two vector fields.
 */
emmy.env.argument_types = emmy.calculus.indexed.argument_types;

/**
 * Given some operator or function `f`, returns a copy of `f` with the supplied
 *   argument types `types` registered in its metadata (if a function) or
 *   context (if an operator).
 * 
 *   Retrieve these types with [[argument-types]].
 */
emmy.env.with_argument_types = emmy.calculus.indexed.with_argument_types;

/**
 * Given an operator or function `f`, returns its registered vector of index
 *   types, or `[]` if none exist.
 * 
 *   index types are, for example,
 * 
 *   ```clojure
 *   ['up 'down 'down]
 *   ```
 * 
 *   for a `Christoffel-2`, which takes one oneform field and two vector fields.
 */
emmy.env.index_types = emmy.calculus.indexed.index_types;

/**
 * Given some operator or function `f`, returns a copy of `f` with the supplied
 *   index types `types` registered in its metadata (if a function) or
 *   context (if an operator).
 * 
 *   Retrieve these types with [[index-types]].
 */
emmy.env.with_index_types = emmy.calculus.indexed.with_index_types;

emmy.env.typed__GT_indexed = emmy.calculus.indexed.typed__GT_indexed;

emmy.env.indexed__GT_typed = emmy.calculus.indexed.indexed__GT_typed;

emmy.env.typed__GT_structure = emmy.calculus.indexed.typed__GT_structure;

emmy.env.structure__GT_typed = emmy.calculus.indexed.structure__GT_typed;

/**
 * Returns a concrete manifold generated by specializing the supplied manifold
 *   `family` into a concrete manifold of dimension `n`. `n` must be a positive
 *   integer.
 * 
 *   Optionally takes an `embedding-dimension`; this must be >= the value of `n`.
 *   Use this in cases like an n-sphere embedded in a euclidean space of dimension
 *   n+1.
 * 
 *   A [manifold](https://en.wikipedia.org/wiki/Manifold) is a topological space
 *   that locally resembles Euclidean space near each point.
 */
emmy.env.make_manifold = emmy.calculus.manifold.make_manifold;

/**
 * Returns an [[ICoordinateSystem]] instance specialized to the patch named
 *   `patch-name` on `manifold`.
 */
emmy.env.coordinate_system_at = emmy.calculus.manifold.coordinate_system_at;

/**
 * The supplied manifold `m` locally resembles some vector space; this function
 *   returns the field over which that vector space was specified.
 */
emmy.env.manifold_type = emmy.calculus.manifold.manifold_type;

/**
 * Returns a set of patch names registered in the supplied manifold.
 */
emmy.env.patch_names = emmy.calculus.manifold.patch_names;

/**
 * Returns a set of names of all coordinate system constructors registered in the
 *   supplied patch.
 */
emmy.env.coordinate_system_names = emmy.calculus.manifold.coordinate_system_names;

/**
 * Returns `true` if `m` is a dictionary representing a manifold, false
 *   otherwise.
 */
emmy.env.manifold_QMARK_ = emmy.calculus.manifold.manifold_QMARK_;

/**
 * Returns `true` if `m` is a dictionary representing a manifold family, false
 *   otherwise.
 */
emmy.env.manifold_family_QMARK_ = emmy.calculus.manifold.manifold_family_QMARK_;

/**
 * Returns true if `p` is a manifold point, false otherwise.
 */
emmy.env.manifold_point_QMARK_ = emmy.calculus.manifold.manifold_point_QMARK_;

/**
 * Given an [[ICoordinateSystem]], returns a function from a point on the
 *   coordinate system's manifold to the coordinate representation specified by the
 *   supplied `coordinate-system`.
 */
emmy.env.chart = emmy.calculus.manifold.chart;

/**
 * Given an [[ICoordinateSystem]], returns a function from coordinates in
 *   `coordinate-system`'s repesentation to the matching point on the manifold
 *   associated with `coordinate-system`.
 */
emmy.env.point = emmy.calculus.manifold.point;

/**
 * Given an [[ICoordinateSystem]], returns a structure that matches
 *   the [[coordinate-prototype]] of `coordinate-system`, with all unique,
 *   gensym-ed entries.
 * 
 *   Use [[typical-coords]] if you require a unique symbolic coordinate
 *   representation compatible with `coordinate-system`.
 * 
 *   See [[typical-point]] for a coordinate-free version of this function.
 */
emmy.env.typical_coords = emmy.calculus.manifold.typical_coords;

/**
 * Given an [[ICoordinateSystem]], returns a unique, symbolically-represented
 *   point on the manifold associated with `coordinate-system`.
 * 
 *   See [[typical-coords]] for a coordinate-based version of this function.
 */
emmy.env.typical_point = emmy.calculus.manifold.typical_point;

/**
 * Returns a function that takes a single manifold `point` embedded in the
 *   manifold `embedded` and transfers the point to the supplied `embedding`
 *   manifold.
 * 
 *   The embedding dimension must be the same for both manifolds.
 * 
 *   NOTE that `embedded` and `embedding` can be either manifolds, or instances
 *   of [[ICoordinateSystem]]. In the latter case `embedded` and `embedding` will
 *   bind to the manifold associated with the supplied [[ICoordinateSystem]].
 */
emmy.env.transfer_point = emmy.calculus.manifold.transfer_point;

/**
 * Takes a coordinate representation `coords` of a manifold point with all
 *   symbolic entries, and returns a structure of the same shape with `v:`
 *   prepended to all symbols.
 * 
 *   This structure is appropriate for representing the velocities associated with
 *   each coordinate.
 */
emmy.env.corresponding_velocities = emmy.calculus.manifold.corresponding_velocities;

/**
 * Given a symbolic name `sym` and an [[ICoordinateSystem]], returns a literal
 *   function that maps coordinate-free manifold points to a scalar output.
 * 
 *   Also aliased as [[literal-manifold-function]].
 */
emmy.env.literal_manifold_function = emmy.calculus.manifold.literal_manifold_function;

/**
 * Manifold function that maps every input manifold `point` to the scalar value 0.
 */
emmy.env.zero_manifold_function = emmy.calculus.manifold.zero_manifold_function;

/**
 * Manifold function that maps every input manifold `point` to the scalar value 1.
 */
emmy.env.one_manifold_function = emmy.calculus.manifold.one_manifold_function;

/**
 * Takes some constant `c` and returns a manifold function that maps every input
 *   manifold `point` to `c.`
 */
emmy.env.constant_manifold_function = emmy.calculus.manifold.constant_manifold_function;

/**
 * Returns true if `x` implements [[ICoordinateSystem]], false otherwise.
 */
emmy.env.coordinate_system_QMARK_ = emmy.calculus.manifold.coordinate_system_QMARK_;

emmy.env.Rn = emmy.calculus.manifold.Rn;

emmy.env.R1 = emmy.calculus.manifold.R1;

emmy.env.R1_rect = emmy.calculus.manifold.R1_rect;

emmy.env.the_real_line = emmy.calculus.manifold.the_real_line;

emmy.env.R2 = emmy.calculus.manifold.R2;

emmy.env.R2_rect = emmy.calculus.manifold.R2_rect;

emmy.env.R2_polar = emmy.calculus.manifold.R2_polar;

emmy.env.R3 = emmy.calculus.manifold.R3;

emmy.env.R3_rect = emmy.calculus.manifold.R3_rect;

emmy.env.R3_cyl = emmy.calculus.manifold.R3_cyl;

emmy.env.R3_spherical = emmy.calculus.manifold.R3_spherical;

emmy.env.R4 = emmy.calculus.manifold.R4;

emmy.env.R4_rect = emmy.calculus.manifold.R4_rect;

emmy.env.R4_cyl = emmy.calculus.manifold.R4_cyl;

emmy.env.spacetime = emmy.calculus.manifold.spacetime;

emmy.env.spacetime_rect = emmy.calculus.manifold.spacetime_rect;

emmy.env.spacetime_sphere = emmy.calculus.manifold.spacetime_sphere;

emmy.env.Sn = emmy.calculus.manifold.Sn;

emmy.env.S1 = emmy.calculus.manifold.S1;

emmy.env.S1_circular = emmy.calculus.manifold.S1_circular;

emmy.env.S1_tilted = emmy.calculus.manifold.S1_tilted;

emmy.env.S1_slope = emmy.calculus.manifold.S1_slope;

emmy.env.S1_gnomonic = emmy.calculus.manifold.S1_gnomonic;

emmy.env.S2_type = emmy.calculus.manifold.S2_type;

emmy.env.S2 = emmy.calculus.manifold.S2;

emmy.env.S2_spherical = emmy.calculus.manifold.S2_spherical;

/**
 * Similar to the [[S2-spherical]] coordinate system, with the north pole rotated
 *   90 degrees and lying along the positive y axis.
 */
emmy.env.S2_tilted = emmy.calculus.manifold.S2_tilted;

emmy.env.S2_stereographic = emmy.calculus.manifold.S2_stereographic;

emmy.env.S2_Riemann = emmy.calculus.manifold.S2_Riemann;

emmy.env.S2_gnomonic = emmy.calculus.manifold.S2_gnomonic;

emmy.env.S2p = emmy.calculus.manifold.S2p;

emmy.env.S2p_spherical = emmy.calculus.manifold.S2p_spherical;

emmy.env.S2p_tilted = emmy.calculus.manifold.S2p_tilted;

emmy.env.S2p_stereographic = emmy.calculus.manifold.S2p_stereographic;

emmy.env.S2p_Riemann = emmy.calculus.manifold.S2p_Riemann;

emmy.env.S2p_gnomonic = emmy.calculus.manifold.S2p_gnomonic;

emmy.env.S3 = emmy.calculus.manifold.S3;

emmy.env.S3_spherical = emmy.calculus.manifold.S3_spherical;

emmy.env.S3_tilted = emmy.calculus.manifold.S3_tilted;

emmy.env.S3_stereographic = emmy.calculus.manifold.S3_stereographic;

emmy.env.S3_gnomonic = emmy.calculus.manifold.S3_gnomonic;

emmy.env.SO3_type = emmy.calculus.manifold.SO3_type;

emmy.env.SO3 = emmy.calculus.manifold.SO3;

emmy.env.Euler_angles = emmy.calculus.manifold.Euler_angles;

emmy.env.alternate_angles = emmy.calculus.manifold.alternate_angles;

emmy.env.coordinate_system__GT_metric_components = emmy.calculus.metric.coordinate_system__GT_metric_components;

emmy.env.coordinate_system__GT_metric = emmy.calculus.metric.coordinate_system__GT_metric;

emmy.env.coordinate_system__GT_inverse_metric = emmy.calculus.metric.coordinate_system__GT_inverse_metric;

/**
 * Flat coordinate systems here only.
 */
emmy.env.literal_metric = emmy.calculus.metric.literal_metric;

emmy.env.components__GT_metric = emmy.calculus.metric.components__GT_metric;

emmy.env.metric__GT_components = emmy.calculus.metric.metric__GT_components;

/**
 * Given a metric and a basis, computes the inverse metric.
 */
emmy.env.metric__GT_inverse_components = emmy.calculus.metric.metric__GT_inverse_components;

emmy.env.metric_over_map = emmy.calculus.metric.metric_over_map;

/**
 * To make a vector field into a one-form field, i.e., a (1,0) tensor into a (0,1)
 *   tensor.
 */
emmy.env.lower = emmy.calculus.metric.lower;

/**
 * Alias for [[lower]].
 */
emmy.env.vector_field__GT_oneform_field = emmy.calculus.metric.vector_field__GT_oneform_field;

/**
 * Alias for [[lower]].
 */
emmy.env.drop1 = emmy.calculus.metric.drop1;

/**
 * To make a one-form field into a vector field, i.e., a (0,1) tensor into a (1,0)
 *   tensor.
 */
emmy.env.raise = emmy.calculus.metric.raise;

/**
 * Alias for [[raise]].
 */
emmy.env.oneform_field__GT_vector_field = emmy.calculus.metric.oneform_field__GT_vector_field;

/**
 * Alias for [[raise]].
 */
emmy.env.raise1 = emmy.calculus.metric.raise1;

/**
 * For making a (2,0) tensor into a (0,2) tensor.
 */
emmy.env.drop2 = emmy.calculus.metric.drop2;

/**
 * For making a (0,2) tensor into a (2,0) tensor.
 */
emmy.env.raise2 = emmy.calculus.metric.raise2;

/**
 * Computes the trace of a (0,2) tensor.
 */
emmy.env.trace2down = emmy.calculus.metric.trace2down;

/**
 * Computes the trace of a (2,0) tensor
 */
emmy.env.trace2up = emmy.calculus.metric.trace2up;

emmy.env.sharpen = emmy.calculus.metric.sharpen;

emmy.env.S2_metric = emmy.calculus.metric.S2_metric;

emmy.env.pullback_function = emmy.calculus.map.pullback_function;

emmy.env.pushforward_function = emmy.calculus.map.pushforward_function;

/**
 * Defined on FDG p.72.
 */
emmy.env.differential_of_map = emmy.calculus.map.differential_of_map;

/**
 * Alias for [[differential-of-map]].
 */
emmy.env.differential = emmy.calculus.map.differential;

emmy.env.pushforward_vector = emmy.calculus.map.pushforward_vector;

emmy.env.literal_manifold_map = emmy.calculus.map.literal_manifold_map;

/**
 * Defined on FDG p.72.
 */
emmy.env.vector_field__GT_vector_field_over_map = emmy.calculus.map.vector_field__GT_vector_field_over_map;

emmy.env.form_field__GT_form_field_over_map = emmy.calculus.map.form_field__GT_form_field_over_map;

emmy.env.basis__GT_basis_over_map = emmy.calculus.map.basis__GT_basis_over_map;

/**
 * Returns a function which will pull a form back across a map (without needing
 *   its inverse)
 */
emmy.env.pullback_form = emmy.calculus.map.pullback_form;

emmy.env.pullback_vector_field = emmy.calculus.map.pullback_vector_field;

emmy.env.pullback = emmy.calculus.map.pullback;

/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Divergence](https://en.wikipedia.org/wiki/Divergence) of
 *   `f` at its input point.
 * 
 *   The divergence is a one-level contraction of the gradient.
 */
emmy.env.Div = emmy.calculus.vector_calculus.Div;

/**
 * Operator that takes a function `f` and returns a new function that
 *   calculates the [Gradient](https://en.wikipedia.org/wiki/Gradient) of `f`.
 * 
 *   The related [[emmy.env/D]] operator returns a function that produces a
 *   structure of the opposite orientation as [[Grad]]. Both of these functions use
 *   reverse-mode automatic differentiation.
 */
emmy.env.Grad = emmy.calculus.vector_calculus.Grad;

/**
 * Operator that takes a function `f` and returns a function that
 *   calculates the [Curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) of `f`
 *   at its input point.
 * 
 *   `f` must be a function from $\mathbb{R}^3 \to \mathbb{R}^3$.
 */
emmy.env.Curl = emmy.calculus.vector_calculus.Curl;

/**
 * Operator that takes a function `f` and returns a function that calculates
 *   the [Vector
 *   Laplacian](https://en.wikipedia.org/wiki/Laplace_operator#Vector_Laplacian) of
 *   `f` at its input point.
 */
emmy.env.Lap = emmy.calculus.vector_calculus.Lap;

/**
 * Both arities of [[divergence]] are defined on page 156 of Functional Differential Geometry.
 */
emmy.env.divergence = emmy.calculus.vector_calculus.divergence;

/**
 * [[curl]] implements equation (10.7) of Functional Differential Geometry,
 *   defined on page 155.
 */
emmy.env.curl = emmy.calculus.vector_calculus.curl;

/**
 * [[gradient]] implements equation (10.3) in Functional Differential Geometry,
 *   defined on page 154.
 */
emmy.env.gradient = emmy.calculus.vector_calculus.gradient;

emmy.env.Laplacian = emmy.calculus.vector_calculus.Laplacian;

/**
 * Returns true if the supplied argument `vf` is a vector field operator, false
 *   otherwise.
 */
emmy.env.vector_field_QMARK_ = emmy.calculus.vector_field.vector_field_QMARK_;

/**
 * Takes:
 * 
 *   - an `up` tuple of the functions that each return the corresponding component
 *   of the vector field relative `coordinate-system`
 *   - the `coordinate-system`
 *   - optionally, a symbolic name for the vector field operator
 * 
 *   And returns a vector field.
 * 
 *   A vector field is an operator that takes a smooth real-valued function of
 *   manifold points and produces a NEW function that computes the directional
 *   derivative of the given function at each point of the manifold.
 */
emmy.env.components__GT_vector_field = emmy.calculus.vector_field.components__GT_vector_field;

/**
 * Given a vector field `vf` and a `coordinate-system`, returns a function from
 *   the coordinate representation of a manifold point to a coordinate
 *   representation of the coordinatized components of the vector field at that
 *   point.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (let [f (literal-vector-field 'f R2-rect)]
 *      ((vector-field->components f R2-rect)
 *       (up 'x0 'y0))))
 * 
 *   ;;=> (up (f↑0 (up x0 y0))
 *   ;;       (f↑1 (up x0 y0)))
 *   ```
 */
emmy.env.vector_field__GT_components = emmy.calculus.vector_field.vector_field__GT_components;

/**
 * Returns a vector field that returns, for any supplied function `f`, a manifold
 *   function [[manifold/zero-manifold-function]] that maps every input manifold
 *   `point` to the scalar value 0.
 */
emmy.env.vf_COLON_zero = emmy.calculus.vector_field.vf_COLON_zero;

/**
 * Given a symbolic name `sym` and a `coordinate-system`, returns a vector field
 *   consisting of literal real-valued functions from the coordinate system's
 *   dimension for each coordinate component.
 * 
 *   These functions are passed to [[components->vector-field]], along with the
 *   supplied `coordinate-system` and symbolic name `sym`.
 * 
 *   For coordinate systems of dimension 1, `literal-vector-field`'s component
 *   functions will accept a single non-structural argument.
 */
emmy.env.literal_vector_field = emmy.calculus.vector_field.literal_vector_field;

/**
 * Given some `coordinate-system`, a symbolic `name` and a sequence of indices
 *   into the structure of the coordinate system's representation,
 * 
 *   returns a vector field that takes a function and returns a new function that
 *   computes the partial derivative of that function with respect to the supplied
 *   `indices` into `coordinate-system`.
 * 
 *   To compute the full Jacobian, pass no indices.
 */
emmy.env.coordinate_basis_vector_field = emmy.calculus.vector_field.coordinate_basis_vector_field;

/**
 * Given some `coordinate-system`, returns a structure of
 *   `coordinate-basis-vector-field` instances. The vector field at each structural
 *   spot takes a function and computes its directional derivative with respect to
 *   that coordinate.
 * 
 *   When applied as a function, the structure behaves equivalently to
 * 
 *   ```clojure
 *   (coordinate-basis-vector-field <coordinate-system> 'ignored-name)
 *   ```
 * 
 *   With no indices supplied.
 */
emmy.env.coordinate_system__GT_vector_basis = emmy.calculus.vector_field.coordinate_system__GT_vector_basis;

/**
 * Given a structure of `components` and and a matching `vector-basis` (of
 *   identical structure with orientations flipped), returns a new vector field
 *   generated contracting by these two structures together.
 * 
 *   The returned vector field passes its input function to the operator generated
 *   by this contraction.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let-coordinates [[x y] R2-rect]
 *  (basis-components->vector-field
 *   (up x y)
 *   (coordinate-system->vector-basis R2-rect)))
 *   ;; => (+ (* x d:dx) (* y d:dy))
 *   ```
 * 
 *   NOTE:
 *   - This is for any basis, not just a coordinate basis
 *   - The `components` are evaluated at a manifold point, not its coordinates
 *   - Given a dual basis, you can retrieve the original components
 *  with [[vector-field->basis-components]]
 */
emmy.env.basis_components__GT_vector_field = emmy.calculus.vector_field.basis_components__GT_vector_field;

/**
 * Given a vector field `vf` generated from [[basis-components->vector-field]] and
 *   a dual basis, returns the original basis components.
 * 
 *   NOTE: You can generate a dual basis with [[basis/vector-basis->dual-basis]].
 * 
 *   Here's an example of how to use this function to round trip a structure of
 *   basis components:
 * 
 *   ```clojure
 *   (let [basis (coordinate-system->vector-basis coordsys)
 *      dual  (basis/vector-basis->dual basis coordsys)]
 *  (= basis-components
 *     (-> basis-components
 *         (basis-components->vector-field basis)
 *         (vector-field->basis-components dual))))
 *   ```
 */
emmy.env.vector_field__GT_basis_components = emmy.calculus.vector_field.vector_field__GT_basis_components;

/**
 * Returns an operator that acts as a coordinate version of the supplied vector
 *   field `vf` with respect to `coordinate-system`.
 * 
 *   The returned operator takes a function and returns a new function that takes
 *   directional derivatives of coordinate representations of manifold points, with
 *   respect to `coordinate-system`.
 */
emmy.env.coordinatize = emmy.calculus.vector_field.coordinatize;

/**
 * We can use the coordinatized vector field to build an evolution along an
 *   integral curve.
 * 
 *   NOTE: I don't see how this has anything to do with [[coordinatize]]!
 */
emmy.env.evolution = emmy.calculus.vector_field.evolution;

/**
 * Returns a single-argument function of that, when called with an argument `x`,
 *   returns the derivative of `f` at `x` using forward-mode automatic
 *   differentiation.
 * 
 *   For numerical differentiation,
 *   see [[emmy.numerical.derivative/D-numeric]].
 * 
 *   `f` must be built out of generic operations that know how to handle [[Dual]]
 *   inputs in addition to any types that a normal `(f x)` call would present. This
 *   restriction does _not_ apply to operations like putting `x` into a container
 *   or destructuring; just primitive function calls.
 */
emmy.env.derivative = emmy.dual.derivative;

emmy.env.make_four_tuple = emmy.sr.boost.make_four_tuple;

emmy.env.four_tuple__GT_ct = emmy.sr.boost.four_tuple__GT_ct;

emmy.env.four_tuple__GT_space = emmy.sr.boost.four_tuple__GT_space;

emmy.env.proper_time_interval = emmy.sr.boost.proper_time_interval;

emmy.env.proper_space_interval = emmy.sr.boost.proper_space_interval;

emmy.env.general_boost = emmy.sr.boost.general_boost;

/**
 * Takes a unit 3-vector `direction` (representing a direction) and a velocity
 *   `v:c` normalized by `C`.
 */
emmy.env.general_boost2 = emmy.sr.boost.general_boost2;

emmy.env.extended_rotation = emmy.sr.boost.extended_rotation;

emmy.env.make_SR_coordinates = emmy.sr.frames.make_SR_coordinates;

emmy.env.SR_coordinates_QMARK_ = emmy.sr.frames.SR_coordinates_QMARK_;

emmy.env.SR_name = emmy.sr.frames.SR_name;

emmy.env.make_SR_frame = emmy.sr.frames.make_SR_frame;

emmy.env.base_frame_maker = emmy.sr.frames.base_frame_maker;

emmy.env.the_ether = emmy.sr.frames.the_ether;

emmy.env.boost_direction = emmy.sr.frames.boost_direction;

emmy.env.v_COLON_c = emmy.sr.frames.v_COLON_c;

emmy.env.coordinate_origin = emmy.sr.frames.coordinate_origin;

emmy.env.add_v_COLON_cs = emmy.sr.frames.add_v_COLON_cs;

/**
 * velocities must be in meters/second, since we don't yet have units support.
 */
emmy.env.add_velocities = emmy.sr.frames.add_velocities;

/**
 * Given a time `t`, coordinate tuple (or scalar) `q`, velocity tuple (or scalar)
 *   `qdot` and any number of additional higher-order derivative tuples (or
 *   scalars), returns a 'Local tuple', i.e., the state expected by a Lagrangian.
 */
emmy.env.__GT_L_state = emmy.mechanics.lagrange.__GT_L_state;

/**
 * Alias for [[->L-state]].
 */
emmy.env.__GT_local = emmy.mechanics.lagrange.__GT_local;

/**
 * Alias for [[->L-state]].
 */
emmy.env.__GT_state = emmy.mechanics.lagrange.__GT_state;

emmy.env.literal_Lagrangian_state = emmy.mechanics.lagrange.literal_Lagrangian_state;

emmy.env.Dt = emmy.mechanics.lagrange.Dt;

emmy.env.Euler_Lagrange_operator = emmy.mechanics.lagrange.Euler_Lagrange_operator;

/**
 * Accepts a coordinate transformation `F` from a local tuple to a new coordinate
 *   structure, and returns a function from `local -> local` that applies the
 *   transformation directly.
 * 
 *   [[F->C]] handles local tuples of arbitrary length.
 */
emmy.env.F__GT_C = emmy.mechanics.lagrange.F__GT_C;

/**
 * Gamma takes a path function (from time to coordinates) to a state
 *   function (from time to local tuple).
 */
emmy.env.Gamma = emmy.mechanics.lagrange.Gamma;

emmy.env.Gamma_bar = emmy.mechanics.lagrange.Gamma_bar;

emmy.env.generalized_LE = emmy.mechanics.lagrange.generalized_LE;

emmy.env.Lagrange_equations = emmy.mechanics.lagrange.Lagrange_equations;

emmy.env.Lagrange_equations_first_order = emmy.mechanics.lagrange.Lagrange_equations_first_order;

/**
 * Given `ys` (a sequence of function values) and `xs` (an equal-length sequence
 *   of function inputs), returns a [[emmy.polynomial/Polynomial]] instance
 *   guaranteed to pass through all supplied `xs` and `ys`.
 * 
 *   The contract for inputs is that `(map vector xs ys)` should return a sequence
 *   of pairs of points.
 */
emmy.env.Lagrange_interpolation_function = emmy.mechanics.lagrange.Lagrange_interpolation_function;

emmy.env.Lagrangian__GT_energy = emmy.mechanics.lagrange.Lagrangian__GT_energy;

emmy.env.Lagrangian__GT_power_loss = emmy.mechanics.lagrange.Lagrangian__GT_power_loss;

/**
 * Optionally takes a dissipation function.
 */
emmy.env.Lagrangian__GT_state_derivative = emmy.mechanics.lagrange.Lagrangian__GT_state_derivative;

emmy.env.Lagrangian_action = emmy.mechanics.lagrange.Lagrangian_action;

/**
 * SICM p. 23. The optional parameter values is a callback which will report
 *   intermediate points of the minimization.
 */
emmy.env.find_path = emmy.mechanics.lagrange.find_path;

emmy.env.linear_interpolants = emmy.mechanics.lagrange.linear_interpolants;

/**
 * Given a state tuple (of finite length), reconstitutes the initial segment of
 *   the Taylor series corresponding to the state tuple data as a function of t.
 * 
 *   Time is measured beginning at the point of time specified in the input state
 *   tuple.
 */
emmy.env.osculating_path = emmy.mechanics.lagrange.osculating_path;

emmy.env.r__GT_s = emmy.mechanics.lagrange.r__GT_s;

/**
 * SICM p. 83
 */
emmy.env.s__GT_r = emmy.mechanics.lagrange.s__GT_r;

/**
 * SICM p. 47. Polar to rectangular coordinates of state.
 */
emmy.env.p__GT_r = emmy.mechanics.lagrange.p__GT_r;

emmy.env.r__GT_p = emmy.mechanics.lagrange.r__GT_p;

/**
 * Alias for [[time]].
 */
emmy.env.state__GT_t = emmy.mechanics.lagrange.state__GT_t;

/**
 * A convenience function on local tuples. A local tuple describes
 *   the state of a system at a particular time:
 * 
 *   ```
 *   [t, q, D q, D^2 q]
 *   ```
 * 
 *   representing time, position, velocity (and optionally acceleration etc.)
 * 
 *   [[coordinate]] returns the `q` element, which is expected to be a mapping from
 *   time to a structure of coordinates.
 */
emmy.env.coordinate = emmy.mechanics.lagrange.coordinate;

/**
 * Returns the velocity element of a local tuple (by convention, the third
 *   element).
 * 
 *   See [[coordinate]] for more detail.
 */
emmy.env.velocity = emmy.mechanics.lagrange.velocity;

/**
 * Returns the acceleration element of a local tuple (by convention, the fourth
 *   element).
 * 
 *   See [[coordinate]] for more detail.
 */
emmy.env.acceleration = emmy.mechanics.lagrange.acceleration;

emmy.env.coordinate_tuple = emmy.mechanics.lagrange.coordinate_tuple;

emmy.env.velocity_tuple = emmy.mechanics.lagrange.velocity_tuple;

emmy.env.acceleration_tuple = emmy.mechanics.lagrange.acceleration_tuple;

emmy.env.momentum_tuple = emmy.mechanics.lagrange.momentum_tuple;

/**
 * Convert the structure `ms`, which would be a scalar if the (compatible)
 *   multiplication `(* ls ms rs)` were performed, to a matrix.
 */
emmy.env.s__GT_m = emmy.matrix.s__GT_m;

/**
 * Convert the matrix `m` into a structure `S`, guided by the requirement that `(*
 *   ls S rs)` should be a scalar.
 */
emmy.env.m__GT_s = emmy.matrix.m__GT_s;

/**
 * Generates a `nrows` x `ncols` matrix of symbolic entries, each prefixed by the
 *   supplied symbol `sym`.
 * 
 *   If `ncols` (the third argument) is not supplied, returns a square matrix of
 *   size `nrows` x `nrows`.
 * 
 *   NOTE: The symbols in the returned matrix record their Einstein-notation path
 *   into the structure that this matrix represents; a `down` of `up` columns. This
 *   means that the returned indices embedded in the symbols look flipped, `ji` vs
 *   `ij`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-matrix 'x 2 2)
 *   (by-rows ['x_0↑0 'x_1↑0]
 *            ['x_0↑1 'x_1↑1]))
 *   ```
 */
emmy.env.literal_matrix = emmy.matrix.literal_matrix;

/**
 * Returns the submatrix of the matrix (or matrix-like structure) `s` generated by
 *   taking
 * 
 *   - rows    from `lowrow` -> `hirow` (inclusive)
 *   - columns from `lowcol` -> `hicol` (inclusive)
 */
emmy.env.submatrix = emmy.matrix.submatrix;

/**
 * Returns a column matrix with the contents of the supplied `up` structure.
 *   Errors if any other type is provided.
 */
emmy.env.up__GT_column_matrix = emmy.matrix.up__GT_column_matrix;

/**
 * Returns the single column from the supplied column matrix as an `up`. Errors if
 *   some other type is supplied.
 */
emmy.env.column_matrix__GT_up = emmy.matrix.column_matrix__GT_up;

/**
 * Returns the single column from the supplied column matrix as a vector. Errors
 *   if some other type is supplied.
 */
emmy.env.column_matrix__GT_vector = emmy.matrix.column_matrix__GT_vector;

/**
 * Returns a row matrix with the contents of the supplied `down` structure.
 *   Errors if any other type is provided.
 */
emmy.env.down__GT_row_matrix = emmy.matrix.down__GT_row_matrix;

/**
 * Returns the single row from the supplied row matrix as a `down`. Errors if some
 *   other type is supplied.
 */
emmy.env.row_matrix__GT_down = emmy.matrix.row_matrix__GT_down;

/**
 * Returns the single row from the supplied row matrix as a vector. Errors if some
 *   other type is supplied.
 */
emmy.env.row_matrix__GT_vector = emmy.matrix.row_matrix__GT_vector;

/**
 * Given a time `t`, coordinate tuple (or scalar) `q` and momentum tuple (or
 *   scalar) `p`, returns a 'Hamiltonian state tuple', i.e., the state expected by a
 *   Hamiltonian.
 */
emmy.env.__GT_H_state = emmy.mechanics.hamilton.__GT_H_state;

/**
 * Alias for [[F->CH]].
 */
emmy.env.F__GT_CT = emmy.mechanics.hamilton.F__GT_CT;

emmy.env.Hamilton_equations = emmy.mechanics.hamilton.Hamilton_equations;

/**
 * Returns function signature for a Hamiltonian with n degrees of freedom (or an
 *   unrestricted number if n is not given).
 * 
 *   Useful for constructing Hamiltonian literal functions.
 */
emmy.env.Hamiltonian = emmy.mechanics.hamilton.Hamiltonian;

emmy.env.Hamiltonian__GT_state_derivative = emmy.mechanics.hamilton.Hamiltonian__GT_state_derivative;

/**
 * Alias for [[Hamiltonian->state-derivative]], for compatibility with
 *   1st edition of SICM.
 */
emmy.env.phase_space_derivative = emmy.mechanics.hamilton.phase_space_derivative;

emmy.env.Lagrangian__GT_Hamiltonian = emmy.mechanics.hamilton.Lagrangian__GT_Hamiltonian;

emmy.env.Legendre_transform = emmy.mechanics.hamilton.Legendre_transform;

/**
 * p. 428, the Lie transform is just the time-advance operator using the Lie
 *   derivative (see Hamiltonian.scm).
 */
emmy.env.Lie_transform = emmy.mechanics.hamilton.Lie_transform;

emmy.env.Poisson_bracket = emmy.mechanics.hamilton.Poisson_bracket;

/**
 * p.324
 */
emmy.env.compositional_canonical_QMARK_ = emmy.mechanics.hamilton.compositional_canonical_QMARK_;

/**
 * f is a function of (x y continue fail), which calls continue with the values of
 *   x' y' that follow x y in the mapping.
 * 
 *   Returns a map of the same shape that iterates the iterated map n times before
 *   invoking the continuation, or invokes the fail continuation if the inner map
 *   fails.
 */
emmy.env.iterated_map = emmy.mechanics.hamilton.iterated_map;

/**
 * Returns the momentum element of a local Hamiltonian state tuple (by convention,
 *   the third element).
 */
emmy.env.momentum = emmy.mechanics.hamilton.momentum;

/**
 * p.327
 */
emmy.env.polar_canonical = emmy.mechanics.hamilton.polar_canonical;

emmy.env.standard_map = emmy.mechanics.hamilton.standard_map;

emmy.env.qp_submatrix = emmy.mechanics.hamilton.qp_submatrix;

/**
 * p. 334
 */
emmy.env.symplectic_transform_QMARK_ = emmy.mechanics.hamilton.symplectic_transform_QMARK_;

/**
 * p. 334 (used, but not defined there)
 */
emmy.env.symplectic_unit = emmy.mechanics.hamilton.symplectic_unit;

/**
 * p.326
 */
emmy.env.time_independent_canonical_QMARK_ = emmy.mechanics.hamilton.time_independent_canonical_QMARK_;

/**
 * Produce the matrix of a rotation of α radians about the x axis.
 */
emmy.env.rotate_x_matrix = emmy.mechanics.rotation.rotate_x_matrix;

/**
 * Produce the matrix of a rotation of α radians about the y axis.
 */
emmy.env.rotate_y_matrix = emmy.mechanics.rotation.rotate_y_matrix;

/**
 * Produce the matrix of a rotation of α radians about the z axis.
 */
emmy.env.rotate_z_matrix = emmy.mechanics.rotation.rotate_z_matrix;

emmy.env.angle_axis__GT_rotation_matrix = emmy.mechanics.rotation.angle_axis__GT_rotation_matrix;

emmy.env.rotate_x_tuple = emmy.mechanics.rotation.rotate_x_tuple;

emmy.env.rotate_y_tuple = emmy.mechanics.rotation.rotate_y_tuple;

emmy.env.rotate_z_tuple = emmy.mechanics.rotation.rotate_z_tuple;

/**
 * Returns a function which rotates a vector α radians about the x axis.
 */
emmy.env.Rx = emmy.mechanics.rotation.Rx;

/**
 * Returns a function which rotates a vector α radians about the y axis.
 */
emmy.env.Ry = emmy.mechanics.rotation.Ry;

/**
 * Returns a function which rotates a vector α radians about the z axis.
 */
emmy.env.Rz = emmy.mechanics.rotation.Rz;

emmy.env.rotate_x = emmy.mechanics.rotation.rotate_x;

emmy.env.rotate_y = emmy.mechanics.rotation.rotate_y;

emmy.env.rotate_z = emmy.mechanics.rotation.rotate_z;

/**
 * Compute the rotation matrix from a 3-vector of Euler angles.
 * 
 *   Our Euler Angle convention:
 * 
 *   M(theta, phi, psi) = R_z(phi)*R_x(theta)*R_z(psi)
 */
emmy.env.Euler__GT_M = emmy.mechanics.rotation.Euler__GT_M;

emmy.env.wcross__GT_w = emmy.mechanics.rotation.wcross__GT_w;

/**
 * evolve takes a state derivative function constructor and its arguments, and
 *   returns an integrator via make-integrator.
 * 
 *   In particular, the returned function accepts a callback function which will be
 *   invoked at intermediate grid points of the integration.
 */
emmy.env.evolve = emmy.numerical.ode.evolve;

/**
 * A wrapper for evolve, which is more convenient when you just
 *   want a vector of (time, state) pairs over the integration interval
 *   instead of having to deal with a callback. Integrates the supplied
 *   state derivative (and its argument package) from [0 to t1] in steps
 *   of size dt
 */
emmy.env.integrate_state_derivative = emmy.numerical.ode.integrate_state_derivative;

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
emmy.env.state_advancer = emmy.numerical.ode.state_advancer;

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
emmy.env.D_numeric = emmy.numerical.derivative.D_numeric;

/**
 * Evaluates the definite integral of integrand `f` across the interval $a, b$.
 *   Optionally accepts a dictionary `opts` of customizing options; All `opts` will
 *   be passed through to the supplied `integrate` functions.
 * 
 *   If you'd like more control, or to retrieve the integration function directly
 *   without looking it up via `:method` each time, see `get-integrator`.
 * 
 *   All supplied options are passed through to the underlying integrator; see the
 *   specific integrator for information on what options are available.
 * 
 *   ## Keyword arguments:
 * 
 *   `:method`: Specifies the integration method used. Must be
 * 
 *   - a keyword naming one of the available methods in `available-methods`
 *   - a function with the proper integrator signature
 *   - a dictionary of integrator options with a `:method` key
 * 
 *   Defaults to `:open`, which specifies an adaptive bulirsch-stoer quadrature method.
 * 
 *   `:compile?` If true, the generic function will be simplified and compiled
 *   before execution.
 * 
 *   `:info?` If true, `definite-integral` will return a map of integration
 *   information returned by the underlying integrator. Else, returns an estimate
 *   of the definite integral.
 */
emmy.env.definite_integral = emmy.numerical.quadrature.definite_integral;

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
emmy.env.brent_min = emmy.numerical.unimin.brent.brent_min;

/**
 * For convenience, we also provide the sister-procedure for finding the maximum
 *   of a unimodal function using Brent's method.
 * 
 *   Negate the function, minimize, negate the result.
 * 
 *   See [[brent-min]] for all supported `opts`.
 */
emmy.env.brent_max = emmy.numerical.unimin.brent.brent_max;

/**
 * Find the minimum of the function f: R^n -> R, given an initial point q ∈ R^n.
 *   Supports the following optional keyword arguments:
 * 
 *   `:callback` if supplied, the supplied fn will be invoked with iteration count,
 *   the values of X and the value of f(X) at each intermediate point of
 *   evaluation.
 * 
 *   `:info?` if true, wraps the result with evaluation information.
 * 
 *   `:adaptive?` if true, the Nelder-Mead parameters for contraction, expansion,
 *   reflection and shrinking will be set adaptively, as functions of the number of
 *   dimensions. If false they stay constant.
 * 
 *   `:alpha` sets the reflection coefficient used for each step of Nelder-Mead.
 * 
 *   `:beta` sets the expansion coefficient used for each step of Nelder-Mead.
 * 
 *   `:gamma` sets the contraction coefficient used for each step of Nelder-Mead.
 * 
 *   `:sigma` sets the shrink coefficient used for each step of Nelder-Mead.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   200*dimension.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 200*dimension.
 * 
 *   `:simplex-tolerance` When the absolute value of the max difference between the
 *   best point and any point in the simplex falls below this tolerance, the
 *   minimizer stops. Defaults to 1e-4.
 * 
 *   `:fn-tolerance` When the absolute value of the max difference between the best
 *   point's function value and the fn value of any point in the simplex falls
 *   below this tolerance, the minimizer stops. Defaults to 1e-4.
 * 
 *   `:zero-delta` controls the value to which 0 entries in the initial vector are
 *   set during initial simplex generation. Defaults to 0.00025.
 * 
 *   `:nonzero-delta` factor by which entries in the initial vector are perturbed to
 *   generate the initial simplex. Defaults to 0.05.
 * 
 *   See Gao, F. and Han, L.
 *    Implementing the Nelder-Mead simplex algorithm with adaptive
 *    parameters. 2012. Computational Optimization and Applications.
 *    51:1, pp. 259-277
 *   I gratefully acknowledge the [Python implementation in
 *   SciPy](https://github.com/scipy/scipy/blob/589c9afe41774ee96ec121f1867361146add8276/scipy/optimize/optimize.py#L556:5)
 *   which I have imitated here.
 *   
 */
emmy.env.nelder_mead = emmy.numerical.multimin.nelder_mead.nelder_mead;

/**
 * Golden Section search attempts to locate the minimum of the supplied function
 *   `f` by evaluating points located at golden-ratioed intervals between the two
 *   starting endpoints `a` and `b`. This method is slow, steady and reliable.
 * 
 *   Supports the following optional keyword arguments:
 * 
 *   `:converged?` is an optional predicate accepting five arguments:
 * 
 *   - `[a fa]`
 *   - `[l fl]`
 *   - `[r fr]`
 *   - `[b fb]`
 *   - `current-iteration`
 * 
 *   If the supplied `fn` returns true, it will signal convergence and the
 *   optimizer will return. Returning false will continue.
 * 
 *   `:choose` is called at the final step of optimization with all 4 points and
 *   their fn values (see the first four arguments to `:converged?`), and returns
 *   the final choice.
 * 
 *   `:callback` receives all 5 arguments on every iteration.
 * 
 *   `:maxiter` Maximum number of iterations allowed for the minimizer. Defaults to
 *   1000.
 * 
 *   `:maxfun` Maximum number of times the function can be evaluated before exiting.
 *   Defaults to 1000.
 * 
 *   `:fn-tolerance` check that the minimal value of any of the checked points is
 *   within the maximum of f(a) or f(b).
 * 
 *   `:arg-tolerance` check that `a` and `b` are within this supplied absolute
 *   distance.
 */
emmy.env.golden_section_min = emmy.numerical.unimin.golden.golden_section_min;

/**
 * For convenience, we also provide the sister-procedure for finding
 *   the maximum of a unimodal function using the golden section method.
 * 
 *   Negate the function, minimize, negate the result.
 */
emmy.env.golden_section_max = emmy.numerical.unimin.golden.golden_section_max;

/**
 * Find the minimum of the function `f: R -> R` in the interval `[a, b]`.
 * 
 *   If an `observe` function is supplied, it will be invoked with the iteration
 *   count and the values of x and f(x) at each search step.
 */
emmy.env.minimize = emmy.numerical.minimize.minimize;

/**
 * Entrypoint for multidimensional minimization routines.
 * 
 *   See [[emmy.numerical.multimin.nelder-mead/nelder-mead]] for the only
 *   supported option.
 */
emmy.env.multidimensional_minimize = emmy.numerical.minimize.multidimensional_minimize;

/**
 * Takes either:
 * 
 *   - a series `xs` of numbers
 *   - A transformation function `f`, an inclusive-lower bound `low` and
 *  exclusive-upper bound `upper`
 * 
 *   And returns the result of aggregating either `xs` or `(map f (range low
 *   high))` using the fold dynamically bound to [[*fold*]].
 * 
 *   Use `binding` to substitute in a different fold:
 * 
 *   ```clj
 *   (require '[emmy.algebra.fold :as af])
 * 
 *   (binding [*fold* (af/join af/kahan af/min af/max)]
 *  (sum inc 0 10))
 *   ;;=> [55.0 1 10]
 *   ```
 */
emmy.env.sum = emmy.util.aggregate.sum;

/**
 * Generates a new vector of length `n` by applying the function `f` to integers
 *   in the range $[0,n)$.
 */
emmy.env.vector_COLON_generate = emmy.util.stream.vector_COLON_generate;

/**
 * Legendre elliptic integral of the first kind F(φ, k).
 * See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.19
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
emmy.env.elliptic_f = emmy.special.elliptic.elliptic_f;

/**
 * Returns the factorial of `n`, i.e., the product of 1 to `n` (inclusive).
 * 
 *   [[factorial]] will return a platform-specific [[emmy.util/bigint]] given
 *   some `n` that causes integer overflow.
 */
emmy.env.factorial = emmy.special.factorial.factorial;

emmy.env._EQ_ = emmy.value._EQ_;

/**
 * Comparator. Clone of [[cljs.core/compare]] that works with the expanded
 *    Emmy numeric tower.
 * 
 *   Returns a negative number, zero, or a positive number when x is logically
 *   'less than', 'equal to', or 'greater than' y. Uses IComparable if available
 *   and google.array.defaultCompare for objects of the same type and special-cases
 *   nil to be less than any other object.
 */
emmy.env.compare = emmy.value.compare;

/**
 * Returns true if `x` is a purely numerical value and should be considered for
 * numerical simplifications, such as $x * 1 == x$ or $x * 0 ==
 * 0$.
 * 
 *   [[numerical?]] should return `false` if `x` has additional, non-numerical
 * structure that should be preserved.
 */
emmy.env.numerical_QMARK_ = emmy.value.numerical_QMARK_;

emmy.env.kind = emmy.value.kind;

/**
 * Returns a predicate that returns true if its argument matches the supplied
 *   kind-keyword `k`, false otherwise.
 */
emmy.env.kind_predicate = emmy.value.kind_predicate;

emmy.env.principal_value = emmy.value.principal_value;

//# sourceMappingURL=emmy.env.js.map
