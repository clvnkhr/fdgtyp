goog.provide('emmy.pattern.syntax');
/**
 * Returns true if `pattern` is a binding pattern with restriction predicates,
 *   false otherwise.
 */
emmy.pattern.syntax.restricted_QMARK_ = (function emmy$pattern$syntax$restricted_QMARK_(pattern){
return ((cljs.core.sequential_QMARK_(pattern)) && ((cljs.core.count(pattern) > (2))));
});
/**
 * Returns true if `pattern` matches the wildcard character `_`, false otherwise.
 */
emmy.pattern.syntax.wildcard_QMARK_ = (function emmy$pattern$syntax$wildcard_QMARK_(pattern){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pattern,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
/**
 * Returns true if `pattern` is a binding variable reference, false otherwise.
 * 
 *   A binding variable is either:
 * 
 *   - A symbol starting with a single `?` character
 *   - A sequence of the form `(? <binding> ...)`.
 */
emmy.pattern.syntax.binding_QMARK_ = (function emmy$pattern$syntax$binding_QMARK_(pattern){
var or__5162__auto__ = (function (){var and__5160__auto__ = cljs.core.simple_symbol_QMARK_(pattern);
if(and__5160__auto__){
return emmy.util.re_matches_QMARK_(/^\?[^\?].*/,cljs.core.name(pattern));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ((cljs.core.sequential_QMARK_(pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern),new cljs.core.Symbol(null,"?","?",-62633706,null))));
}
});
/**
 * Returns true if `pattern` is a segment variable reference, false otherwise.
 * 
 *   A segment binding variable is either:
 * 
 *   - A symbol starting with `??`
 *   - A sequence of the form `(?? <binding> ...)`.
 */
emmy.pattern.syntax.segment_QMARK_ = (function emmy$pattern$syntax$segment_QMARK_(pattern){
var or__5162__auto__ = (function (){var and__5160__auto__ = cljs.core.simple_symbol_QMARK_(pattern);
if(and__5160__auto__){
return emmy.util.re_matches_QMARK_(/^\?\?[^\?].*/,cljs.core.name(pattern));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ((cljs.core.sequential_QMARK_(pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern),new cljs.core.Symbol(null,"??","??",-1097896773,null))));
}
});
/**
 * Returns true if `pattern` is a reversed-segment variable reference, false
 *   otherwise.
 * 
 *   A reverse-segment binding variable is either:
 * 
 *   - A symbol starting with `$$`
 *   - A sequence of the form `(:$$ <binding> ...)`.
 */
emmy.pattern.syntax.reverse_segment_QMARK_ = (function emmy$pattern$syntax$reverse_segment_QMARK_(pattern){
var or__5162__auto__ = (function (){var and__5160__auto__ = cljs.core.simple_symbol_QMARK_(pattern);
if(and__5160__auto__){
return emmy.util.re_matches_QMARK_(/^\$\$[^\$].*/,cljs.core.name(pattern));
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return ((cljs.core.sequential_QMARK_(pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern),new cljs.core.Symbol(null,"$$","$$",-1388085599,null))));
}
});
/**
 * Given a variable or segment binding form, returns the binding variable.
 * 
 *   NOTE that [[variable-name]] will not guard against incorrect inputs.
 */
emmy.pattern.syntax.variable_name = (function emmy$pattern$syntax$variable_name(pattern){
if(cljs.core.simple_symbol_QMARK_(pattern)){
return pattern;
} else {
return cljs.core.second(pattern);
}
});
/**
 * Given a REVERSE-segment name, either extracts the symbol from a pattern
 *   like `(:$$ x)`, or transforms symbols like `$$x` into `??x`.
 */
emmy.pattern.syntax.reverse_segment_name = (function emmy$pattern$syntax$reverse_segment_name(pattern){
if(cljs.core.simple_symbol_QMARK_(pattern)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+"??"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(pattern),(2)))));
} else {
return cljs.core.second(pattern);
}
});
/**
 * If `pattern` is a variable binding form in a pattern with restriction predicates,
 *   returns a predicate that only returns true if all of the predicates pass for
 *   its input, false otherwise.
 * 
 *   If `pattern` has no restrictions or is some other input type, returns a
 *   predicate that will always return `true`.
 */
emmy.pattern.syntax.restriction = (function emmy$pattern$syntax$restriction(pattern){
var no_constraint = (function (_){
return true;
});
if(cljs.core.simple_symbol_QMARK_(pattern)){
return no_constraint;
} else {
var temp__5823__auto__ = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),pattern));
if(temp__5823__auto__){
var fs = temp__5823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,fs);
} else {
return no_constraint;
}
}
});
/**
 * Returns true if `pattern` is a form that should be included with no quoting
 *   into the returned pattern, false otherwise.
 */
emmy.pattern.syntax.unquote_QMARK_ = (function emmy$pattern$syntax$unquote_QMARK_(pattern){
return ((cljs.core.sequential_QMARK_(pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null))));
});
/**
 * Returns true if `pattern` is a sequence form that should be spliced directly
 *   into the returned pattern, false otherwise.
 */
emmy.pattern.syntax.unquote_splice_QMARK_ = (function emmy$pattern$syntax$unquote_splice_QMARK_(pattern){
return ((cljs.core.sequential_QMARK_(pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pattern),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null))));
});
/**
 * Given a `pattern` that responds `true` to [[unquote?]] or [[unquote-splice?]],
 *   returns the form from that pattern.
 */
emmy.pattern.syntax.unquoted_form = (function emmy$pattern$syntax$unquoted_form(pattern){
return cljs.core.second(pattern);
});
/**
 * Helper function for reducing over a sequence that might contain forms that need
 *   to be spliced into the resulting sequence. This is a sort of helper for a
 *   guarded `mapcat`.
 * 
 *   Takes a sequence `xs` and mapping function `f` and returns a sequence of
 *   sequences that, if concatenated together, would be identical to
 * 
 *   ```clojure
 *   (map f xs)
 *   ```
 * 
 *   Where any `x` such that `(splice? x)` returns true would have its sequential
 *   value `(f x)` spliced into the result.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [f (fn [x] (if (odd? x)  [x x x] x))]
 *  (splice-reduce odd? f (range 5)))
 * 
 *   ;;=> [[0] [1 1 1] [2] [3 3 3] [4]]
 *   ```
 */
emmy.pattern.syntax.splice_reduce = (function emmy$pattern$syntax$splice_reduce(splice_QMARK_,f,xs){
var vec__33185 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33189,x){
var vec__33190 = p__33189;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33190,(0),null);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33190,(1),null);
if(cljs.core.truth_((splice_QMARK_.cljs$core$IFn$_invoke$arity$1 ? splice_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : splice_QMARK_.call(null,x)))){
if(cljs.core.empty_QMARK_(pending)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))),cljs.core.PersistentVector.EMPTY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(acc,pending,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))], 0)),cljs.core.PersistentVector.EMPTY], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pending,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),xs);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(0),null);
var pending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33185,(1),null);
if(cljs.core.empty_QMARK_(pending)){
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,pending);
}
});
/**
 * Given a pattern with unquoted binding forms and, potentially, `~` and `~@`
 *   entries, returns a pattern appropriately quoted such that it can be evaluated
 *   by the Clojure reader.
 * 
 *   Changes:
 * 
 *   - `(? x) => (list '? 'x)`
 *   - any bare symbol is quoted
 *   - Any form unquoted like `~x` is left UNquoted, even in the symbol spot of `(?
 *  ~sym ...)`
 *   - Any form marked `~@[1 2 3]` is spliced in directly, EVEN in the symbol spot
 *  of `(? ~@sym ...)`
 * 
 *   These rules proceed recursively down into map, vector and sequential data
 *   structures. (Recursion only pushes down into values for map-shaped patterns.)
 */
emmy.pattern.syntax.compile_pattern = (function emmy$pattern$syntax$compile_pattern(pattern){
var compile_sequential = (function emmy$pattern$syntax$compile_pattern_$_compile_sequential(xs){
var acc = emmy.pattern.syntax.splice_reduce(emmy.pattern.syntax.unquote_splice_QMARK_,emmy.pattern.syntax.compile_pattern,xs);
if(cljs.core.vector_QMARK_(xs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,acc);
} else {
return cljs.core.cons(new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,acc));
}
});
if((pattern instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,pattern,null,(1),null)),(2),null));
} else {
if(((emmy.pattern.syntax.unquote_QMARK_(pattern)) || (emmy.pattern.syntax.unquote_splice_QMARK_(pattern)))){
return emmy.pattern.syntax.unquoted_form(pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.pattern.syntax.binding_QMARK_(pattern);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = emmy.pattern.syntax.segment_QMARK_(pattern);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return emmy.pattern.syntax.reverse_segment_QMARK_(pattern);
}
}
})())){
var vec__33207 = pattern;
var seq__33208 = cljs.core.seq(vec__33207);
var first__33209 = cljs.core.first(seq__33208);
var seq__33208__$1 = cljs.core.next(seq__33208);
var k = first__33209;
var first__33209__$1 = cljs.core.first(seq__33208__$1);
var seq__33208__$2 = cljs.core.next(seq__33208__$1);
var sym = first__33209__$1;
var preds = seq__33208__$2;
if(emmy.pattern.syntax.unquote_splice_QMARK_(sym)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list*","cljs.core/list*",357627358,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,emmy.pattern.syntax.unquoted_form(sym),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(preds)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
var sym__$1 = ((emmy.pattern.syntax.unquote_QMARK_(sym))?emmy.pattern.syntax.unquoted_form(sym):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym__$1,null,(1),null)),preds], 0))));
}
} else {
return compile_sequential(pattern);
}
} else {
if(cljs.core.map_QMARK_(pattern)){
return emmy.util.map_vals(emmy.pattern.syntax.compile_pattern,pattern);
} else {
return pattern;

}
}
}
}
});

//# sourceMappingURL=emmy.pattern.syntax.js.map
