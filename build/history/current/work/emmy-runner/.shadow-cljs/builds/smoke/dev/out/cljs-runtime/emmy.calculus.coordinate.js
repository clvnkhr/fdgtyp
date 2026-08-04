goog.provide('emmy.calculus.coordinate');
/**
 * Returns a structure similar to the [[manifold/coordinate-prototype]] of
 *   `coordinate-system`, where every entry is a function from manifold point =>
 *   the associated component of the point in the coordinate representation
 *   described by `coordinate-system`.
 */
emmy.calculus.coordinate.coordinate_functions = (function emmy$calculus$coordinate$coordinate_functions(coordinate_system){
var prototype = emmy.calculus.manifold.coordinate_prototype(coordinate_system);
return emmy.structure.map_chain((function (coord,chain,_){
return cljs.core.with_meta((function (point){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.calculus.manifold.point__GT_coords(coordinate_system,point),chain);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),coord], null));
}),prototype);
});
/**
 * Scmutils wants to allow forms like this:
 * 
 *   ```clojure
 *   (using-coordinates (up x y) R2-rect ...)
 *   ```
 * 
 * Note that `x`, `y` are unquoted. This function converts such an unquoted form
 *   into a quoted one that could be evaluated to return an up-tuple of the
 *   symbols:
 * 
 *   ```clojure
 *   (up 'x 'y)
 *   ```
 * 
 *   Such an object is useful for [[structure/mapr]].
 */
emmy.calculus.coordinate.quotify_coordinate_prototype = (function emmy$calculus$coordinate$quotify_coordinate_prototype(p){
var q = (function emmy$calculus$coordinate$quotify_coordinate_prototype_$_q(p__$1){
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.sequential_QMARK_(p__$1);
if(and__5160__auto__){
var G__48428 = cljs.core.first(p__$1);
var fexpr__48427 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"down","down",-1089190199,null),"null",new cljs.core.Symbol(null,"up","up",1370819414,null),"null"], null), null);
return (fexpr__48427.cljs$core$IFn$_invoke$arity$1 ? fexpr__48427.cljs$core$IFn$_invoke$arity$1(G__48428) : fexpr__48427.call(null,G__48428));
} else {
return and__5160__auto__;
}
})())){
var s = cljs.core.first(p__$1);
var prefix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"up","up",1370819414,null)))?new cljs.core.Symbol("emmy.structure","up","emmy.structure/up",-1864154385,null):new cljs.core.Symbol("emmy.structure","down","emmy.structure/down",-104137184,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,prefix,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy$calculus$coordinate$quotify_coordinate_prototype_$_q,cljs.core.rest(p__$1)))));
} else {
if(cljs.core.vector_QMARK_(p__$1)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy$calculus$coordinate$quotify_coordinate_prototype_$_q,p__$1);
} else {
if((p__$1 instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,p__$1,null,(1),null)),(2),null));
} else {
return emmy.util.illegal("Invalid coordinate prototype");

}
}
}
});
return q(p);
});
/**
 * Generates a list of symbols from the supplied argument prototype. The
 *   prototype is allowed to be a vector, a list like `(up x y)` or a bare symbol.
 *   Anything else causes an exception.
 * 
 *   Nested structures are fine! The return value is a flat sequence.
 */
emmy.calculus.coordinate.symbols_from_prototype = (function emmy$calculus$coordinate$symbols_from_prototype(p){
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.sequential_QMARK_(p);
if(and__5160__auto__){
var G__48435 = cljs.core.first(p);
var fexpr__48434 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"down","down",-1089190199,null),"null",new cljs.core.Symbol(null,"up","up",1370819414,null),"null"], null), null);
return (fexpr__48434.cljs$core$IFn$_invoke$arity$1 ? fexpr__48434.cljs$core$IFn$_invoke$arity$1(G__48435) : fexpr__48434.call(null,G__48435));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(emmy.calculus.coordinate.symbols_from_prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(p)], 0));
} else {
if(cljs.core.vector_QMARK_(p)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(emmy.calculus.coordinate.symbols_from_prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
} else {
if((p instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
} else {
return emmy.util.illegal((""+"Invalid coordinate prototype: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)));

}
}
}
});
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
emmy.calculus.coordinate.let_coordinates = (function emmy$calculus$coordinate$let_coordinates(var_args){
var args__5903__auto__ = [];
var len__5897__auto___48505 = arguments.length;
var i__5898__auto___48506 = (0);
while(true){
if((i__5898__auto___48506 < len__5897__auto___48505)){
args__5903__auto__.push((arguments[i__5898__auto___48506]));

var G__48507 = (i__5898__auto___48506 + (1));
i__5898__auto___48506 = G__48507;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return emmy.calculus.coordinate.let_coordinates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(emmy.calculus.coordinate.let_coordinates.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
emmy.util.illegal("let-coordinates requires an even number of bindings");
}

var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var prototypes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var c_systems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var system_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name),c_systems);
var coordinate_names = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(emmy.calculus.coordinate.symbols_from_prototype,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prototypes], 0));
var coordinate_vector_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.calculus.vector_field.coordinate_name__GT_vf_name,coordinate_names);
var coordinate_form_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.coordinate_name__GT_ff_name,coordinate_names);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(system_names,(new cljs.core.List(null,new cljs.core.Keyword(null,"as","as",1148689641),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__48436__auto__","c-systems__48436__auto__",-1047102936,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.manifold","with-coordinate-prototype","emmy.calculus.manifold/with-coordinate-prototype",-636709634,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,c_systems),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.calculus.coordinate.quotify_coordinate_prototype,prototypes),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coordinate_names),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.coordinate","coordinate-functions","emmy.calculus.coordinate/coordinate-functions",388209362,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__48436__auto__","c-systems__48436__auto__",-1047102936,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coordinate_vector_field_names),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.vector-field","coordinate-system->vector-basis","emmy.calculus.vector-field/coordinate-system->vector-basis",-807504210,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__48436__auto__","c-systems__48436__auto__",-1047102936,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,coordinate_form_field_names),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.form-field","coordinate-system->oneform-basis","emmy.calculus.form-field/coordinate-system->oneform-basis",659366848,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c-systems__48436__auto__","c-systems__48436__auto__",-1047102936,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(emmy.calculus.coordinate.let_coordinates.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(emmy.calculus.coordinate.let_coordinates.cljs$lang$applyTo = (function (seq48437){
var G__48438 = cljs.core.first(seq48437);
var seq48437__$1 = cljs.core.next(seq48437);
var G__48439 = cljs.core.first(seq48437__$1);
var seq48437__$2 = cljs.core.next(seq48437__$1);
var G__48440 = cljs.core.first(seq48437__$2);
var seq48437__$3 = cljs.core.next(seq48437__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48438,G__48439,G__48440,seq48437__$3);
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
emmy.calculus.coordinate.using_coordinates = (function emmy$calculus$coordinate$using_coordinates(var_args){
var args__5903__auto__ = [];
var len__5897__auto___48512 = arguments.length;
var i__5898__auto___48513 = (0);
while(true){
if((i__5898__auto___48513 < len__5897__auto___48512)){
args__5903__auto__.push((arguments[i__5898__auto___48513]));

var G__48514 = (i__5898__auto___48513 + (1));
i__5898__auto___48513 = G__48514;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return emmy.calculus.coordinate.using_coordinates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(emmy.calculus.coordinate.using_coordinates.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,coordinate_prototype,coordinate_system,body){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.coordinate","let-coordinates","emmy.calculus.coordinate/let-coordinates",1490647267,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,coordinate_prototype,null,(1),null)),(new cljs.core.List(null,coordinate_system,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(emmy.calculus.coordinate.using_coordinates.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(emmy.calculus.coordinate.using_coordinates.cljs$lang$applyTo = (function (seq48469){
var G__48470 = cljs.core.first(seq48469);
var seq48469__$1 = cljs.core.next(seq48469);
var G__48471 = cljs.core.first(seq48469__$1);
var seq48469__$2 = cljs.core.next(seq48469__$1);
var G__48472 = cljs.core.first(seq48469__$2);
var seq48469__$3 = cljs.core.next(seq48469__$2);
var G__48473 = cljs.core.first(seq48469__$3);
var seq48469__$4 = cljs.core.next(seq48469__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48470,G__48471,G__48472,G__48473,seq48469__$4);
}));

/**
 * Give some `coordinate-system` like `R2-rect` and a `coordinate-prototype` like
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
emmy.calculus.coordinate.define_coordinates = (function emmy$calculus$coordinate$define_coordinates(_AMPERSAND_form,_AMPERSAND_env,coordinate_prototype,coordinate_system){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var sys_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(coordinate_system));
var value_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sys_name)+"-values"));
var coord_names = emmy.calculus.coordinate.symbols_from_prototype(coordinate_prototype);
var vector_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.calculus.vector_field.coordinate_name__GT_vf_name,coord_names);
var form_field_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.calculus.form_field.coordinate_name__GT_ff_name,coord_names);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.util.def","careful-def","emmy.util.def/careful-def",698573189,null),null,(1),null)),(new cljs.core.List(null,sys_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.manifold","with-coordinate-prototype","emmy.calculus.manifold/with-coordinate-prototype",-636709634,null),null,(1),null)),(new cljs.core.List(null,coordinate_system,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.calculus.coordinate.quotify_coordinate_prototype(coordinate_prototype),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","flatten","cljs.core/flatten",-237795822,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.coordinate","coordinate-functions","emmy.calculus.coordinate/coordinate-functions",388209362,null),null,(1),null)),(new cljs.core.List(null,sys_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.vector-field","coordinate-system->vector-basis","emmy.calculus.vector-field/coordinate-system->vector-basis",-807504210,null),null,(1),null)),(new cljs.core.List(null,sys_name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.calculus.form-field","coordinate-system->oneform-basis","emmy.calculus.form-field/coordinate-system->oneform-basis",659366848,null),null,(1),null)),(new cljs.core.List(null,sys_name,null,(1),null))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.util.def","careful-def","emmy.util.def/careful-def",698573189,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(coord_names,vector_field_names,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_field_names], 0))),(new cljs.core.List(null,(cljs.core.truth_(new cljs.core.Keyword(null,"sci?","sci?",2029704845).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ns-unmap","cljs.core/ns-unmap",-1559056406,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null))))),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,value_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,sys_name,null,(1),null))))),null,(1),null))], 0))));
});

//# sourceMappingURL=emmy.calculus.coordinate.js.map
