goog.provide('emmy.tape');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514));


/**
* @constructor
 * @implements {emmy.dual.IPerturbed}
 * @implements {emmy.value.Numerical}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
*/
emmy.tape.TapeCell = (function (tag,id,primal,in__GT_partial){
this.tag = tag;
this.id = id;
this.primal = primal;
this.in__GT_partial = in__GT_partial;
this.cljs$lang$protocol_mask$partition1$ = 2048;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
});
(emmy.tape.TapeCell.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.tape.TapeCell.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426);
}));

(emmy.tape.TapeCell.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.tape.TapeCell.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,self__.tag)){
return (new emmy.tape.TapeCell(new$,self__.id,self__.primal,self__.in__GT_partial));
} else {
return this$__$1;
}
}));

(emmy.tape.TapeCell.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (this$,t,mode){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,self__.tag)){
return (emmy.tape.reverse_phase.cljs$core$IFn$_invoke$arity$1 ? emmy.tape.reverse_phase.cljs$core$IFn$_invoke$arity$1(this$__$1) : emmy.tape.reverse_phase.call(null,this$__$1));
} else {
return emmy.dual.REVERSE_EMPTY;

}
}
}));

(emmy.tape.TapeCell.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return (0);
}));

(emmy.tape.TapeCell.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.tape.TapeCell.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(emmy.tape.TapeCell.prototype.valueOf = (function (){
var self__ = this;
var _ = this;
return self__.primal.valueOf();
}));

(emmy.tape.TapeCell.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+"#emmy.tape.TapeCell"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"primal","primal",-1668271542),self__.primal,new cljs.core.Keyword(null,"in->partial","in->partial",1608898855),self__.in__GT_partial], null)));
}));

(emmy.tape.TapeCell.prototype.cljs$core$IComparable$_compare$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (emmy.tape.compare.cljs$core$IFn$_invoke$arity$2 ? emmy.tape.compare.cljs$core$IFn$_invoke$arity$2(a__$1,b) : emmy.tape.compare.call(null,a__$1,b));
}));

(emmy.tape.TapeCell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(emmy.tape.TapeCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"primal","primal",-27740015,null),new cljs.core.Symbol(null,"in->partial","in->partial",-1045536914,null)], null);
}));

(emmy.tape.TapeCell.cljs$lang$type = true);

(emmy.tape.TapeCell.cljs$lang$ctorStr = "emmy.tape/TapeCell");

(emmy.tape.TapeCell.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.tape/TapeCell");
}));

/**
 * Positional factory function for emmy.tape/TapeCell.
 */
emmy.tape.__GT_TapeCell = (function emmy$tape$__GT_TapeCell(tag,id,primal,in__GT_partial){
return (new emmy.tape.TapeCell(tag,id,primal,in__GT_partial));
});

/**
 * Returns true if the supplied object is an instance of [[TapeCell]], false
 *   otherwise.
 */
emmy.tape.tape_QMARK_ = (function emmy$tape$tape_QMARK_(x){
return (x instanceof emmy.tape.TapeCell);
});
/**
 * Returns a new, unique ID for use with a new [[TapeCell]].
 */
emmy.tape.fresh_id = (function emmy$tape$fresh_id(){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
});
/**
 * Returns a [[TapeCell]] instance with the supplied `tag` and `primal` values.
 * 
 *   Optionally accepts `partials`, a vector of pairs of the form
 * 
 *   ```
 *   [<input cell> <partial>]
 *   ```
 * 
 *   where `<partial>` is the partial derivative of the output with respect to each
 *   input (defaults to `[]`).
 */
emmy.tape.make = (function emmy$tape$make(var_args){
var G__38251 = arguments.length;
switch (G__38251) {
case 2:
return emmy.tape.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.tape.make.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.tape.make.cljs$core$IFn$_invoke$arity$2 = (function (tag,primal){
return emmy.tape.__GT_TapeCell(tag,emmy.tape.fresh_id(),primal,cljs.core.PersistentVector.EMPTY);
}));

(emmy.tape.make.cljs$core$IFn$_invoke$arity$3 = (function (tag,primal,partials){
return emmy.tape.__GT_TapeCell(tag,emmy.tape.fresh_id(),primal,partials);
}));

(emmy.tape.make.cljs$lang$maxFixedArity = 3);

/**
 * Given a scalar input `x`, wraps the input in a fresh [[TapeCell]] instance
 *   tagged with `tag`.
 * 
 *   Given a structural `x` instance, returns an identically-shaped structure with
 *   all leaves recursively replaced by [[TapeCell]] instances.
 */
emmy.tape.tapify = (function emmy$tape$tapify(x,tag){
if(emmy.value.scalar_QMARK_(x)){
return emmy.tape.make.cljs$core$IFn$_invoke$arity$2(tag,x);
} else {
if(emmy.structure.structure_QMARK_(x)){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__38255_SHARP_){
return (emmy.tape.tapify.cljs$core$IFn$_invoke$arity$2 ? emmy.tape.tapify.cljs$core$IFn$_invoke$arity$2(p1__38255_SHARP_,tag) : emmy.tape.tapify.call(null,p1__38255_SHARP_,tag));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(emmy.function$.function_QMARK_(x)){
return emmy.util.illegal("Function input not yet supported.");
} else {
return x;

}
}
}
});
/**
 * Returns the `-tag` field of the supplied [[TapeCell]] object. Errors if any
 *   other type is supplied.
 * 
 *   Tags are used to distinguish multiple, overlapping runs of reverse-mode AD, so
 *   that [[TapeCell]] instances created for each run don't clash.
 */
emmy.tape.tape_tag = (function emmy$tape$tape_tag(tape){
return tape.tag;
});
/**
 * Returns the `-id` field of the supplied [[TapeCell]] object. Errors if any
 *   other type is supplied.
 * 
 *   IDs are used in the reverse pass of automatic differentiation to prevent
 *   duplicating work for [[TapeCell]]s used as input to multiple
 *   other [[TapeCell]]s.
 */
emmy.tape.tape_id = (function emmy$tape$tape_id(tape){
return tape.id;
});
/**
 * Given a [[TapeCell]], returns the `primal` field of the supplied [[TapeCell]]
 *   object. For all other types, acts as identity.
 * 
 *   If the optional `tag` argument is supplied, only returns `-primal`
 *   if `(tape-tag x)` matches `tag`, else acts as identity.
 */
emmy.tape.tape_primal = (function emmy$tape$tape_primal(var_args){
var G__38261 = arguments.length;
switch (G__38261) {
case 1:
return emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(emmy.tape.tape_QMARK_(x)){
return x.primal;
} else {
return x;
}
}));

(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$2 = (function (x,tag){
if(((emmy.tape.tape_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,emmy.tape.tape_tag(x))))){
return x.primal;
} else {
return x;
}
}));

(emmy.tape.tape_primal.cljs$lang$maxFixedArity = 2);

/**
 * Returns the `in->partial` vector of the supplied [[TapeCell]] object. Errors
 *   if any other type is supplied.
 * 
 *   This vector holds pairs with these two entries:
 * 
 *   - some input to `tape`
 *   - the partial derivative of `tape`'s [[tape-primal]] with respect to that
 *  input
 */
emmy.tape.tape_partials = (function emmy$tape$tape_partials(tape){
return tape.in__GT_partial;
});
/**
 * Given a [[TapeCell]] `t`, returns a map of the form
 * 
 *   ```clojure
 *   {:tag         (tape-tag t)
 * :id          (tape-id t)
 * :primal      (tape-primal t)
 * :in->partial (tape-partials t)}
 *   ```
 */
emmy.tape.tapecell__GT_map = (function emmy$tape$tapecell__GT_map(t){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),t.tag,new cljs.core.Keyword(null,"id","id",-1388402092),t.id,new cljs.core.Keyword(null,"primal","primal",-1668271542),t.primal,new cljs.core.Keyword(null,"in->partial","in->partial",1608898855),t.in__GT_partial], null);
});
/**
 * For non-[[TapeCell]]s, identical to [[emmy.value/=]].
 *   For [[TapeCell]] instances, equality acts on [[tape-tag]]
 *   and [[tape-partials]] too.
 * 
 *   If you want to ignore the tangent components, use [[equiv]].
 */
emmy.tape.eq = (function emmy$tape$eq(var_args){
var G__38287 = arguments.length;
switch (G__38287) {
case 1:
return emmy.tape.eq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.tape.eq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___38399 = arguments.length;
var i__5898__auto___38400 = (0);
while(true){
if((i__5898__auto___38400 < len__5897__auto___38399)){
args_arr__5922__auto__.push((arguments[i__5898__auto___38400]));

var G__38401 = (i__5898__auto___38400 + (1));
i__5898__auto___38400 = G__38401;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.tape.eq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.tape.eq.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(emmy.tape.eq.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ta_QMARK_ = emmy.tape.tape_QMARK_(a);
var tb_QMARK_ = emmy.tape.tape_QMARK_(b);
if(((ta_QMARK_) && (tb_QMARK_))){
var a__$1 = a;
var b__$1 = b;
var and__5160__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a__$1.primal,b__$1.primal);
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a__$1.tag,b__$1.tag);
if(cljs.core.truth_(and__5160__auto____$1)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a__$1.in__GT_partial,b__$1.in__GT_partial);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
} else {
if(ta_QMARK_){
var and__5160__auto__ = cljs.core.empty_QMARK_(emmy.tape.tape_partials(a));
if(and__5160__auto__){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(a),b);
} else {
return and__5160__auto__;
}
} else {
if(tb_QMARK_){
var and__5160__auto__ = cljs.core.empty_QMARK_(emmy.tape.tape_partials(b));
if(and__5160__auto__){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(b),a);
} else {
return and__5160__auto__;
}
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);

}
}
}
}));

(emmy.tape.eq.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
while(true){
if(cljs.core.truth_(emmy.tape.eq.cljs$core$IFn$_invoke$arity$2(a,b))){
if(cljs.core.next(more)){
var G__38402 = b;
var G__38403 = cljs.core.first(more);
var G__38404 = cljs.core.next(more);
a = G__38402;
b = G__38403;
more = G__38404;
continue;
} else {
return emmy.tape.eq.cljs$core$IFn$_invoke$arity$2(b,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(emmy.tape.eq.cljs$lang$applyTo = (function (seq38284){
var G__38285 = cljs.core.first(seq38284);
var seq38284__$1 = cljs.core.next(seq38284);
var G__38286 = cljs.core.first(seq38284__$1);
var seq38284__$2 = cljs.core.next(seq38284__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38285,G__38286,seq38284__$2);
}));

(emmy.tape.eq.cljs$lang$maxFixedArity = (2));

/**
 * Returns true if all of the supplied objects have equal [[tape-primal]]s, false
 *   otherwise.
 * 
 *   Use [[equiv]] if you want to compare non-[[TapeCell]]s with
 *   [[TapeCell]]s and ignore all tangent components. If you _do_ want to take the
 *   tangent components into account, prefer [[eq]].
 */
emmy.tape.equiv = (function emmy$tape$equiv(var_args){
var G__38304 = arguments.length;
switch (G__38304) {
case 1:
return emmy.tape.equiv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.tape.equiv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___38406 = arguments.length;
var i__5898__auto___38407 = (0);
while(true){
if((i__5898__auto___38407 < len__5897__auto___38406)){
args_arr__5922__auto__.push((arguments[i__5898__auto___38407]));

var G__38408 = (i__5898__auto___38407 + (1));
i__5898__auto___38407 = G__38408;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((2) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((2)),(0),null)):null);
return emmy.tape.equiv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5923__auto__);

}
});

(emmy.tape.equiv.cljs$core$IFn$_invoke$arity$1 = (function (_){
return true;
}));

(emmy.tape.equiv.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(a),emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(b));
}));

(emmy.tape.equiv.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
while(true){
if(cljs.core.truth_(emmy.tape.equiv.cljs$core$IFn$_invoke$arity$2(a,b))){
if(cljs.core.next(more)){
var G__38411 = b;
var G__38412 = cljs.core.first(more);
var G__38413 = cljs.core.next(more);
a = G__38411;
b = G__38412;
more = G__38413;
continue;
} else {
return emmy.tape.equiv.cljs$core$IFn$_invoke$arity$2(b,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(emmy.tape.equiv.cljs$lang$applyTo = (function (seq38298){
var G__38299 = cljs.core.first(seq38298);
var seq38298__$1 = cljs.core.next(seq38298);
var G__38300 = cljs.core.first(seq38298__$1);
var seq38298__$2 = cljs.core.next(seq38298__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38299,G__38300,seq38298__$2);
}));

(emmy.tape.equiv.cljs$lang$maxFixedArity = (2));

/**
 * Comparator that compares [[TapeCell]] instances with each other or
 *   non-differentials using only the [[finite-part]] of each instance. Matches the
 *   response of [[equiv]].
 * 
 *   Acts as [[emmy.value/compare]] for non-[[TapeCell]]s.
 */
emmy.tape.compare = (function emmy$tape$compare(a,b){
return emmy.value.compare(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(a),emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(b));
});
/**
 * Given a `node` of type [[TapeCell]] (representing the root of a computation's
 *   directed acyclic dependency graph), returns a sequence of [[TapeCell]]
 *   instances sorted in topological order, starting with `node`.
 */
emmy.tape.topological_sort = (function emmy$tape$topological_sort(node){
var compute_visiting_order = (function emmy$tape$topological_sort_$_compute_visiting_order(p__38337,node__$1){
var vec__38340 = p__38337;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38340,(0),null);
var sorted = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38340,(1),null);
if(cljs.core.contains_QMARK_(seen,emmy.tape.tape_id(node__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,sorted], null);
} else {
var vec__38343 = process_children(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,emmy.tape.tape_id(node__$1)),sorted,emmy.tape.tape_partials(node__$1));
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38343,(0),null);
var sorted__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38343,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen__$1,cljs.core.cons(node__$1,sorted__$1)], null);
}
});
var process_children = (function emmy$tape$topological_sort_$_process_children(seen,sorted,in__GT_partial){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(compute_visiting_order),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,sorted], null),in__GT_partial);
});
return cljs.core.second(compute_visiting_order(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),node));
});
emmy.tape.process = (function emmy$tape$process(sensitivities,tape){
var sensitivity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sensitivities,emmy.tape.tape_id(tape));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sensitivities__$1,in_to_partial_entry){
var vec__38356 = in_to_partial_entry;
var tape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38356,(0),null);
var local_partial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38356,(1),null);
var id = emmy.tape.tape_id(tape__$1);
var delta = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(sensitivity,local_partial);
var new_entry = (function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sensitivities__$1,id);
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(v,delta);
} else {
return delta;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sensitivities__$1,id,new_entry);
}),sensitivities,emmy.tape.tape_partials(tape));
});
/**
 * Accepts a [[TapeCell]] `root` representing the final value, or output, of a
 *   reverse-mode derivative computation, and returns an [[emmy.dual/Completed]]
 *   instance wrapping a map of
 * 
 *   - each intermediate value seen in the computation to
 *   - the partial derivative of the output with respect to that value.
 */
emmy.tape.reverse_phase = (function emmy$tape$reverse_phase(root){
var nodes = emmy.tape.topological_sort(root);
var sensitivities = cljs.core.PersistentArrayMap.createAsIfByAssoc([emmy.tape.tape_id(root),(1)]);
return emmy.dual.__GT_Completed(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(emmy.tape.process,sensitivities,nodes));
});
/**
 * Given
 * 
 *   - a perturbed input, either a [[TapeCell]] or structure of [[TapeCell]]s
 *   - an `output` [[emmy.dual/Completed]] instance or structure of completed instances
 *   - the `tag` for the current run of differentiation
 * 
 *   Returns a value with the same shape as `input`, but with each [[TapeCell]]
 *   leaf replaced by copies of `output` representing the partial derivative of the
 *   computation at that leaf.
 */
emmy.tape.interpret = (function emmy$tape$interpret(input,output,tag){
if(((emmy.tape.tape_QMARK_(input)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,emmy.tape.tape_tag(input))))){
return emmy.dual.extract_id(output,emmy.tape.tape_id(input));
} else {
if(emmy.structure.structure_QMARK_(input)){
return emmy.structure.opposite.cljs$core$IFn$_invoke$arity$2(input,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38363_SHARP_){
return (emmy.tape.interpret.cljs$core$IFn$_invoke$arity$3 ? emmy.tape.interpret.cljs$core$IFn$_invoke$arity$3(p1__38363_SHARP_,output,tag) : emmy.tape.interpret.call(null,p1__38363_SHARP_,output,tag));
}),input));
} else {
if(emmy.function$.function_QMARK_(input)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("function inputs not supported.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown input type!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),input], null));

}
}
}
});
/**
 * Given some differentiable function `f`, returns a function whose value at some
 *   point can multiply an increment in the arguments to produce the best linear
 *   estimate of the increment in the function value.
 * 
 *   For univariate functions, [[gradient]] computes a derivative. For
 *   vector-valued functions, [[gradient]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 * 
 *   For numerical differentiation, see [[emmy.numerical.derivative/D-numeric]].
 * 
 *   NOTE: `f` must be built out of generic operations that know how to
 *   handle [[emmy.tape/TapeCell]] inputs in addition to any types that a
 *   normal `(f x)` call would present. This restriction does _not_ apply to
 *   operations like putting `x` into a container or destructuring; just primitive
 *   function calls.
 */
emmy.tape.gradient = (function emmy$tape$gradient(var_args){
var G__38367 = arguments.length;
switch (G__38367) {
case 1:
return emmy.tape.gradient.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.tape.gradient.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.tape.gradient.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.tape.gradient.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}));

(emmy.tape.gradient.cljs$core$IFn$_invoke$arity$2 = (function (f,selectors){
return (function() {
var emmy$tape$grad = null;
var emmy$tape$grad__0 = (function (){
return (0);
});
var emmy$tape$grad__1 = (function (x){
if(((cljs.core.seq(selectors)) && ((!(emmy.structure.structure_QMARK_(x)))))){
emmy.util.illegal((""+"Selectors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors)+" not allowed for non-structural input "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
} else {
}

var tag = emmy.dual.fresh_tag();
var input = (function (){var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(x,selectors);
if(cljs.core.truth_(temp__5823__auto__)){
var piece = temp__5823__auto__;
if(cljs.core.empty_QMARK_(selectors)){
return emmy.tape.tapify(piece,tag);
} else {
return cljs.core.assoc_in(x,selectors,emmy.tape.tapify(piece,tag));
}
} else {
return emmy.util.illegal((""+"Bad selectors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors)+" for structure "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));
}
})();
var output = emmy.dual.with_active_tag(tag,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input], null));
var completed = emmy.dual.extract_tangent(output,tag,new cljs.core.Keyword("emmy.dual","reverse","emmy.dual/reverse",-1140830856));
return emmy.tape.interpret(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input,selectors),completed,tag);
});
emmy$tape$grad = function(x){
switch(arguments.length){
case 0:
return emmy$tape$grad__0.call(this);
case 1:
return emmy$tape$grad__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emmy$tape$grad.cljs$core$IFn$_invoke$arity$0 = emmy$tape$grad__0;
emmy$tape$grad.cljs$core$IFn$_invoke$arity$1 = emmy$tape$grad__1;
return emmy$tape$grad;
})()
}));

(emmy.tape.gradient.cljs$lang$maxFixedArity = 2);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),(function (_){
return (0);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),(function (_){
return (1);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),(function (_){
return (1);
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),(function (t){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"TapeCell","TapeCell",-1115833436,null),null,(1),null)),(new cljs.core.List(null,emmy.tape.tape_tag(t),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.tape.tape_id(t),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(t)),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__38380){
var vec__38381 = p__38380;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38381,(0),null);
var partial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38381,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(node),emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(partial)], null);
}),emmy.tape.tape_partials(t)),null,(1),null))], 0)))));
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.tape","tape","emmy.tape/tape",-747075426)], null),(function (t){
return (new emmy.tape.TapeCell(t.tag,t.id,emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(t.primal),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__38386){
var vec__38387 = p__38386;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38387,(0),null);
var partial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38387,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(node),emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(partial)], null);
}),t.in__GT_partial)));
}));

//# sourceMappingURL=emmy.tape.js.map
