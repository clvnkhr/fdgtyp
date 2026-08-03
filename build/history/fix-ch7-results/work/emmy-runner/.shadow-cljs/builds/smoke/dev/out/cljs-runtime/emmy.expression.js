goog.provide('emmy.expression');
/**
 * These keywords reference 'abstract' types that stand in for some
 *   concrete data type in the system.
 */
emmy.expression.abstract_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("emmy.expression","vector","emmy.expression/vector",-1823391456),null,new cljs.core.Keyword("emmy.expression","abstract-matrix","emmy.expression/abstract-matrix",-842157179),null,new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),null,new cljs.core.Keyword("emmy.expression","abstract-down","emmy.expression/abstract-down",22046591),null], null), null);

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {emmy.value.Numerical}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.IWithMeta}
*/
emmy.expression.Literal = (function (type,expression,m){
this.type = type;
this.expression = expression;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2149974016;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(emmy.expression.Literal.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.expression.Literal.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924));
}));

(emmy.expression.Literal.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.expression.Literal.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.type;
}));

(emmy.expression.Literal.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.expression], 0));
}));

(emmy.expression.Literal.prototype.valueOf = (function (){
var self__ = this;
var this$ = this;
if(typeof self__.expression === 'number'){
return self__.expression;
} else {
if(emmy.value.number_QMARK_(self__.expression)){
return self__.expression.valueOf();
} else {
return this$;

}
}
}));

(emmy.expression.Literal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.expression.Literal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new emmy.expression.Literal(self__.type,self__.expression,meta));
}));

(emmy.expression.Literal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,b){
var self__ = this;
var ___$1 = this;
if((b instanceof emmy.expression.Literal)){
var b__$1 = b;
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,b__$1.type);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(self__.expression,b__$1.expression);
if(cljs.core.truth_(and__5160__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.m,b__$1.m);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
} else {
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(self__.expression,b);
}
}));

(emmy.expression.Literal.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,b){
var self__ = this;
var ___$1 = this;
if((b instanceof emmy.expression.Literal)){
return cljs.core._compare(self__.expression,b.expression);
} else {
return cljs.core._compare(self__.expression,b);
}
}));

(emmy.expression.Literal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core._write(writer,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.expression)));
}));

(emmy.expression.Literal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"expression","expression",1842843403,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.expression.Literal.cljs$lang$type = true);

(emmy.expression.Literal.cljs$lang$ctorStr = "emmy.expression/Literal");

(emmy.expression.Literal.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.expression/Literal");
}));

/**
 * Positional factory function for emmy.expression/Literal.
 */
emmy.expression.__GT_Literal = (function emmy$expression$__GT_Literal(type,expression,m){
return (new emmy.expression.Literal(type,expression,m));
});

/**
 * Constructs a [[Literal]] instance with the supplied type and an empty metadata
 *   map out of the literal form `expr`.
 */
emmy.expression.make_literal = (function emmy$expression$make_literal(type,expr){
return emmy.expression.__GT_Literal(type,expr,null);
});
/**
 * Similar to [[make-literal]], but accepts:
 * 
 *   - some operation
 *   - the arguments to which it applies
 * 
 *   Similar to `clojure.core/apply`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (literal-apply ::numeric 'cos [1 2 3])
 *   ;;=> (cos 1 2 3)
 *   ```
 */
emmy.expression.literal_apply = (function emmy$expression$literal_apply(type,op,args){
return emmy.expression.make_literal(type,cljs.core.cons(op,cljs.core.seq(args)));
});
/**
 * Returns true if `x` is a [[Literal]] instance, false otherwise.
 */
emmy.expression.literal_QMARK_ = (function emmy$expression$literal_QMARK_(x){
return (x instanceof emmy.expression.Literal);
});
/**
 * Returns true if `x` is both a [[Literal]] and has a type specified
 *   in [[abstract-types]], false otherwise.
 */
emmy.expression.abstract_QMARK_ = (function emmy$expression$abstract_QMARK_(x){
return ((emmy.expression.literal_QMARK_(x)) && (cljs.core.contains_QMARK_(emmy.expression.abstract_types,x.type)));
});
/**
 * If `x` is a [[Literal]] instance, returns its type. Else, returns nil.
 */
emmy.expression.literal_type = (function emmy$expression$literal_type(x){
if(emmy.expression.literal_QMARK_(x)){
return x.type;
} else {
return null;
}
});
/**
 * Returns a [[Literal]] generated by applying `f` to the expression part of
 *   `e`.
 * 
 *   [[literal-type]] and [[meta]] will return the same thing for `e` and the
 *   return value.
 */
emmy.expression.fmap = (function emmy$expression$fmap(f,e){
return emmy.expression.__GT_Literal(e.type,(function (){var G__26743 = e.expression;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26743) : f.call(null,G__26743));
})(),e.m);
});
/**
 * If the supplied argument is a [[Literal]] (or a symbol, interpreted elsewhere
 *   as a numerical literal expression), returns the wrapped expression (or the
 *   symbol).
 * 
 *   Else, returns `expr`.
 */
emmy.expression.expression_of = (function emmy$expression$expression_of(expr){
if(emmy.expression.literal_QMARK_(expr)){
return expr.expression;
} else {
return expr;
}
});
/**
 * Return the set of 'variables' (e.g. symbols) found in `expr`.
 * 
 *   `expr` is either a symbol, a [[Literal]] instance or some sequence
 *   representing a symbolic expression.
 */
emmy.expression.variables_in = (function emmy$expression$variables_in(expr){
while(true){
if((expr instanceof cljs.core.Symbol)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([expr]);
} else {
if(emmy.expression.literal_QMARK_(expr)){
var G__26868 = emmy.expression.expression_of(expr);
expr = G__26868;
continue;
} else {
var xs = cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,expr));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),xs);

}
}
break;
}
});
/**
 * Walk the unwrapped expression `expr` in postorder, replacing symbols found
 *   there with their values in the `sym->var` mapping, if present.
 * 
 *   `sym->f` is used for elements in function application position (first of a
 *   sequence).
 */
emmy.expression.evaluate = (function emmy$expression$evaluate(expr,sym__GT_var,sym__GT_f){
var walk = (function emmy$expression$evaluate_$_walk(node){
if((node instanceof cljs.core.Symbol)){
return (sym__GT_var.cljs$core$IFn$_invoke$arity$2 ? sym__GT_var.cljs$core$IFn$_invoke$arity$2(node,node) : sym__GT_var.call(null,node,node));
} else {
if(cljs.core.sequential_QMARK_(node)){
var vec__26760 = node;
var seq__26761 = cljs.core.seq(vec__26760);
var first__26762 = cljs.core.first(seq__26761);
var seq__26761__$1 = cljs.core.next(seq__26761);
var f_sym = first__26762;
var args = seq__26761__$1;
var temp__5823__auto__ = (sym__GT_f.cljs$core$IFn$_invoke$arity$1 ? sym__GT_f.cljs$core$IFn$_invoke$arity$1(f_sym) : sym__GT_f.call(null,f_sym));
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy$expression$evaluate_$_walk,args));
} else {
return emmy.util.illegal((""+"Missing fn for symbol - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_sym)));
}
} else {
return node;

}
}
});
return walk(emmy.expression.expression_of(expr));
});
/**
 * Returns a form similar to `expr`, with all instances of `old` replaced by
 *   `new`. Substitution occurs
 *   in [postwalk](https://clojuredocs.org/clojure.walk/postwalk) order.
 * 
 *   NOTE that this now works for expressions too.
 */
emmy.expression.substitute = (function emmy$expression$substitute(var_args){
var G__26772 = arguments.length;
switch (G__26772) {
case 3:
return emmy.expression.substitute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return emmy.expression.substitute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.substitute.cljs$core$IFn$_invoke$arity$3 = (function (expr,old,new$){
return emmy.expression.substitute.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.PersistentArrayMap.createAsIfByAssoc([old,new$]));
}));

(emmy.expression.substitute.cljs$core$IFn$_invoke$arity$2 = (function (expr,s_map){
if(emmy.expression.literal_QMARK_(expr)){
return emmy.expression.fmap((function (p1__26769_SHARP_){
return emmy.expression.substitute.cljs$core$IFn$_invoke$arity$2(p1__26769_SHARP_,s_map);
}),expr);
} else {
return clojure.walk.postwalk_replace(s_map,expr);
}
}));

(emmy.expression.substitute.cljs$lang$maxFixedArity = 3);

/**
 * Comparator for expressions. The rule is that types have the following ordering:
 * 
 *   - empty sequence is < anything (except another empty seq)
 *   - real < symbol < string < sequence
 *   - sequences compare element-by-element
 * 
 *   Any types _not_ in this list compare with the other type using hashes.
 */
emmy.expression.compare = (function emmy$expression$compare(l,r){
while(true){
var lseq_QMARK_ = cljs.core.sequential_QMARK_(l);
var rseq_QMARK_ = cljs.core.sequential_QMARK_(r);
var rsym_QMARK_ = (r instanceof cljs.core.Symbol);
var rstr_QMARK_ = typeof r === 'string';
var l_empty_QMARK_ = ((lseq_QMARK_) && (cljs.core.empty_QMARK_(l)));
var r_empty_QMARK_ = ((rseq_QMARK_) && (cljs.core.empty_QMARK_(r)));
var raw_comp = (new cljs.core.Delay(((function (l,r,lseq_QMARK_,rseq_QMARK_,rsym_QMARK_,rstr_QMARK_,l_empty_QMARK_,r_empty_QMARK_){
return (function (){
return cljs.core.compare(cljs.core.hash(l),cljs.core.hash(r));
});})(l,r,lseq_QMARK_,rseq_QMARK_,rsym_QMARK_,rstr_QMARK_,l_empty_QMARK_,r_empty_QMARK_))
,null));
if(((l_empty_QMARK_) && (r_empty_QMARK_))){
return (0);
} else {
if(l_empty_QMARK_){
return (-1);
} else {
if(r_empty_QMARK_){
return (1);
} else {
if(emmy.value.real_QMARK_(l)){
if(emmy.value.real_QMARK_(r)){
return cljs.core.compare(l,r);
} else {
if(((rsym_QMARK_) || (((rstr_QMARK_) || (rseq_QMARK_))))){
return (-1);
} else {
return cljs.core.deref(raw_comp);

}
}
} else {
if(emmy.value.real_QMARK_(r)){
return (1);
} else {
if((l instanceof cljs.core.Symbol)){
if(rsym_QMARK_){
return cljs.core.compare(l,r);
} else {
if(((rstr_QMARK_) || (rseq_QMARK_))){
return (-1);
} else {
return cljs.core.deref(raw_comp);

}
}
} else {
if(rsym_QMARK_){
return (1);
} else {
if(typeof l === 'string'){
if(rstr_QMARK_){
return cljs.core.compare(l,r);
} else {
if(rseq_QMARK_){
return (-1);
} else {
return cljs.core.deref(raw_comp);

}
}
} else {
if(rstr_QMARK_){
return (1);
} else {
if(lseq_QMARK_){
if(rseq_QMARK_){
var n1 = cljs.core.count(l);
var n2 = cljs.core.count(r);
if((n1 < n2)){
return (-1);
} else {
if((n2 < n1)){
return (1);
} else {
var head_compare = (function (){var G__26789 = cljs.core.first(l);
var G__26790 = cljs.core.first(r);
return (emmy.expression.compare.cljs$core$IFn$_invoke$arity$2 ? emmy.expression.compare.cljs$core$IFn$_invoke$arity$2(G__26789,G__26790) : emmy.expression.compare.call(null,G__26789,G__26790));
})();
if((head_compare === (0))){
var G__26886 = cljs.core.rest(l);
var G__26887 = cljs.core.rest(r);
l = G__26886;
r = G__26887;
continue;
} else {
return head_compare;
}

}
}
} else {
return cljs.core.deref(raw_comp);
}
} else {
if(rseq_QMARK_){
return (1);
} else {
return cljs.core.deref(raw_comp);

}
}
}
}
}
}
}
}
}
}
}
break;
}
});
emmy.expression.sorted_QMARK_ = (function emmy$expression$sorted_QMARK_(xs){
return (((!(cljs.core.sequential_QMARK_(xs)))) || (cljs.core.every_QMARK_((function (p__26796){
var vec__26797 = p__26796;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26797,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26797,(1),null);
return (emmy.expression.compare(l,r) <= (0));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),xs))));
});
emmy.expression.sort = (function emmy$expression$sort(xs){
if(cljs.core.sequential_QMARK_(xs)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(emmy.expression.compare,xs);
} else {
return xs;
}
});
/**
 * Renders an expression through the simplifier and onto the stream.
 */
emmy.expression.expression__GT_stream = (function emmy$expression$expression__GT_stream(var_args){
var G__26809 = arguments.length;
switch (G__26809) {
case 2:
return emmy.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$2 = (function (expr,stream){
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stream","stream",1534941648),stream], 0));
}));

(emmy.expression.expression__GT_stream.cljs$core$IFn$_invoke$arity$3 = (function (expr,stream,options){
var opt_seq = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"stream","stream",1534941648),stream));
var simple = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,simple,opt_seq);
}));

(emmy.expression.expression__GT_stream.cljs$lang$maxFixedArity = 3);

/**
 * Returns a string representation of a frozen, simplified version of the supplied
 *   expression `expr`.
 */
emmy.expression.expression__GT_string = (function emmy$expression$expression__GT_string(expr){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr))], 0));
});
emmy.expression.print_expression = (function emmy$expression$print_expression(expr){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(expr)));
});
emmy.expression.pe = emmy.expression.print_expression;
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
var x = a.expression;
var and__5160__auto__ = emmy.value.number_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
var x = a.expression;
var and__5160__auto__ = emmy.value.number_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (_){
return (0);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (_){
return (1);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (_){
return (1);
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
var x = a.expression;
var and__5160__auto__ = emmy.value.number_QMARK_(x);
if(and__5160__auto__){
return emmy.generic.exact_QMARK_.cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5160__auto__;
}
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
return emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.expression);
}));

//# sourceMappingURL=emmy.expression.js.map
