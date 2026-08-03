goog.provide('emmy.polynomial.impl');
/**
 * Constructs a polynomial term out of the supplied coefficient `coef` and
 *   exponents `expts`. Retrieve these with [[coefficient]] and [[exponents]].
 * 
 *   Optionally, passing a single coefficient argument sets the exponents to a
 *   default value of [[exponent/empty]].
 */
emmy.polynomial.impl.make_term = (function emmy$polynomial$impl$make_term(var_args){
var G__32820 = arguments.length;
switch (G__32820) {
case 1:
return emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$1 = (function (coef){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.exponent.empty,coef], null);
}));

(emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2 = (function (expts,coef){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expts,coef], null);
}));

(emmy.polynomial.impl.make_term.cljs$lang$maxFixedArity = 2);

/**
 * Returns the exponents portion of the supplied `term`. Defaults to returning
 *   [[exponent/empty]] if some non-compatible input is supplied.
 */
emmy.polynomial.impl.exponents = (function emmy$polynomial$impl$exponents(term){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(term,(0),emmy.polynomial.exponent.empty);
});
/**
 * Returns the coefficient portion of the supplied `term`. Defaults to returning
 *   `0` if some non-compatible input is supplied.
 */
emmy.polynomial.impl.coefficient = (function emmy$polynomial$impl$coefficient(term){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(term,(1),(0));
});
/**
 * Returns true if the term has an empty exponent portion, false otherwise.
 */
emmy.polynomial.impl.constant_term_QMARK_ = (function emmy$polynomial$impl$constant_term_QMARK_(term){
return cljs.core.empty_QMARK_(emmy.polynomial.impl.exponents(term));
});
/**
 * Returns a string representation of the supplied `term`.
 */
emmy.polynomial.impl.term__GT_str = (function emmy$polynomial$impl$term__GT_str(term){
var expts = emmy.polynomial.impl.exponents(term);
var coef = emmy.polynomial.impl.coefficient(term);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coef], 0)))+"*"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expts], 0))));
});
emmy.polynomial.impl.empty_terms = cljs.core.PersistentVector.EMPTY;
/**
 * This variable defines monomial order used in the construction and arithmetic of
 *   polynomials. Bind this variable to a comparator on the exponents of each
 *   monomial term.
 * 
 *   Defaults to [[exponent/graded-lex-order]].
 */
emmy.polynomial.impl._STAR_monomial_order_STAR_ = emmy.polynomial.exponent.graded_lex_order;
/**
 * Given some constant coefficient `coef`, returns a constant polynomial.
 */
emmy.polynomial.impl.constant__GT_terms = (function emmy$polynomial$impl$constant__GT_terms(coef){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(coef))){
return emmy.polynomial.impl.empty_terms;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.exponent.empty,coef)], null);
}
});
/**
 * Accepts a sequence of dense coefficients of a univariate polynomial (in
 *   ascending order), and returns a polynomial in flat polynomial form that
 *   matches the supplied coefficient sequence.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (dense->terms [1 0 0 4 5])
 *   ;;=> [[{} 1] [{0 3} 4] [{0 4} 5]]
 *   ```
 */
emmy.polynomial.impl.dense__GT_terms = (function emmy$polynomial$impl$dense__GT_terms(coefs){
var __GT_term = (function (i,coef){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(coef))){
return null;
} else {
var expts = (((i === (0)))?emmy.polynomial.exponent.empty:(emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),i) : emmy.polynomial.exponent.make.call(null,(0),i)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coef)], null);
}
});
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(__GT_term),cljs.core.cat);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.impl.empty_terms,xform,coefs);
});
/**
 * Accepts a sparse mapping (or sequence of pairs) of exponent => coefficient, and
 *   returns a proper polynomial. Optionally takes a `comparator` on exponent
 *   entries; the returned polynomial will be sorted using that comparator.
 * 
 *   `comparator` defaults to [[*monomial-order*]].
 * 
 *   The `exponent` portion of the mapping can be any of:
 * 
 *   - a proper exponent entry created by `emmy.polynomial.exponent`
 *   - a map of the form `{variable-index, power}`
 *   - a dense vector of variable powers, like `[3 0 1]` for $x^3z$.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (sparse->terms {{1 2 3 1} 4 [0 2 0 0] 2})
 *   ;;=> [[{1 2} 2] [{1 2, 3 1} 4]]
 *   ```
 */
emmy.polynomial.impl.sparse__GT_terms = (function emmy$polynomial$impl$sparse__GT_terms(var_args){
var G__32854 = arguments.length;
switch (G__32854) {
case 1:
return emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1 = (function (expts__GT_coef){
return emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$2(expts__GT_coef,emmy.polynomial.impl._STAR_monomial_order_STAR_);
}));

(emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$2 = (function (expts__GT_coef,comparator){
if(cljs.core.empty_QMARK_(expts__GT_coef)){
return emmy.polynomial.impl.empty_terms;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.impl.empty_terms,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.impl.exponents,comparator,(function (){var iter__5649__auto__ = (function emmy$polynomial$impl$iter__32859(s__32860){
return (new cljs.core.LazySeq(null,(function (){
var s__32860__$1 = s__32860;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__32860__$1);
if(temp__5825__auto__){
var s__32860__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32860__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__32860__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__32862 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__32861 = (0);
while(true){
if((i__32861 < size__5648__auto__)){
var vec__32866 = cljs.core._nth(c__5647__auto__,i__32861);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(0),null);
var terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32866,(1),null);
var coef_sum = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient),emmy.generic._PLUS_,terms);
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(coef_sum))){
var expts__$1 = ((cljs.core.vector_QMARK_(expts))?emmy.polynomial.exponent.dense__GT_exponents(expts):((cljs.core.sorted_QMARK_(expts))?expts:((cljs.core.map_QMARK_(expts))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.exponent.empty,expts):emmy.util.illegal("Invalid inputs to sparse->terms TODO")
)));
cljs.core.chunk_append(b__32862,emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts__$1,coef_sum));

var G__33030 = (i__32861 + (1));
i__32861 = G__33030;
continue;
} else {
var G__33031 = (i__32861 + (1));
i__32861 = G__33031;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32862),emmy$polynomial$impl$iter__32859(cljs.core.chunk_rest(s__32860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32862),null);
}
} else {
var vec__32874 = cljs.core.first(s__32860__$2);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32874,(0),null);
var terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32874,(1),null);
var coef_sum = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient),emmy.generic._PLUS_,terms);
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(coef_sum))){
var expts__$1 = ((cljs.core.vector_QMARK_(expts))?emmy.polynomial.exponent.dense__GT_exponents(expts):((cljs.core.sorted_QMARK_(expts))?expts:((cljs.core.map_QMARK_(expts))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.exponent.empty,expts):emmy.util.illegal("Invalid inputs to sparse->terms TODO")
)));
return cljs.core.cons(emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts__$1,coef_sum),emmy$polynomial$impl$iter__32859(cljs.core.rest(s__32860__$2)));
} else {
var G__33035 = cljs.core.rest(s__32860__$2);
s__32860__$1 = G__33035;
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
return iter__5649__auto__(cljs.core.group_by(emmy.polynomial.impl.exponents,expts__GT_coef));
})()));
}
}));

(emmy.polynomial.impl.sparse__GT_terms.cljs$lang$maxFixedArity = 2);

/**
 * Returns a new polynomial generated by applying `f` to the coefficient portion
 *   of each term in `terms`.
 */
emmy.polynomial.impl.map_coefficients = (function emmy$polynomial$impl$map_coefficients(f,terms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.impl.empty_terms,(function (){var iter__5649__auto__ = (function emmy$polynomial$impl$map_coefficients_$_iter__32881(s__32882){
return (new cljs.core.LazySeq(null,(function (){
var s__32882__$1 = s__32882;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__32882__$1);
if(temp__5825__auto__){
var s__32882__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32882__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__32882__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__32884 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__32883 = (0);
while(true){
if((i__32883 < size__5648__auto__)){
var vec__32892 = cljs.core._nth(c__5647__auto__,i__32883);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32892,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32892,(1),null);
var f_c = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(f_c))){
cljs.core.chunk_append(b__32884,emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,f_c));

var G__33038 = (i__32883 + (1));
i__32883 = G__33038;
continue;
} else {
var G__33039 = (i__32883 + (1));
i__32883 = G__33039;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32884),emmy$polynomial$impl$map_coefficients_$_iter__32881(cljs.core.chunk_rest(s__32882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32884),null);
}
} else {
var vec__32900 = cljs.core.first(s__32882__$2);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32900,(1),null);
var f_c = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(c) : f.call(null,c));
if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(f_c))){
return cljs.core.cons(emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,f_c),emmy$polynomial$impl$map_coefficients_$_iter__32881(cljs.core.rest(s__32882__$2)));
} else {
var G__33041 = cljs.core.rest(s__32882__$2);
s__32882__$1 = G__33041;
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
return iter__5649__auto__(terms);
})());
});
/**
 * Returns the sum of polynomials `u` and `v`. Coefficients paired with matching
 *   exponents are combined with [[emmy.generic/add]].
 */
emmy.polynomial.impl.add = emmy.util.aggregate.merge_fn(new cljs.core.Var(function(){return emmy.polynomial.impl._STAR_monomial_order_STAR_;},new cljs.core.Symbol("emmy.polynomial.impl","*monomial-order*","emmy.polynomial.impl/*monomial-order*",1553049184,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"emmy.polynomial.impl","emmy.polynomial.impl",-1886265419,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-doc","no-doc",1559921891),true], null)),new cljs.core.Symbol(null,"*monomial-order*","*monomial-order*",-1705265536,null),"emmy/polynomial/impl.cljc",32,1,true,77,77,cljs.core.List.EMPTY,"This variable defines monomial order used in the construction and arithmetic of\n  polynomials. Bind this variable to a comparator on the exponents of each\n  monomial term.\n\n  Defaults to [[exponent/graded-lex-order]].",(cljs.core.truth_(emmy.polynomial.impl._STAR_monomial_order_STAR_)?emmy.polynomial.impl._STAR_monomial_order_STAR_.cljs$lang$test:null)])),emmy.generic.add,emmy.generic.zero_QMARK_,emmy.polynomial.impl.make_term);
/**
 * Returns the difference of polynomials `u` and `v`.
 * 
 *   NOTE that coefficients paired with matching exponents are combined by `(g/add
 *   u (g/negate v))`, rather than an explicit call to [[emmy.generic/sub]].
 */
emmy.polynomial.impl.sub = (function emmy$polynomial$impl$sub(u,v){
return emmy.polynomial.impl.add(u,emmy.polynomial.impl.map_coefficients(emmy.generic.negate,v));
});
/**
 * Multiplies a single term on the left by a vector `v` of terms on the right.
 *   Returns a new polynomial (i.e., vector of terms).
 */
emmy.polynomial.impl.t_STAR_ts = (function emmy$polynomial$impl$t_STAR_ts(p__32926,v){
var vec__32929 = p__32926;
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32929,(0),null);
var coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32929,(1),null);
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var i = (0);
while(true){
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,i,null);
if((t == null)){
return cljs.core.persistent_BANG_(acc);
} else {
var vec__32936 = t;
var tags1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32936,(0),null);
var coeff1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32936,(1),null);
var G__33043 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.exponent.mul(tags,tags1),emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(coeff,coeff1)));
var G__33044 = (i + (1));
acc = G__33043;
i = G__33044;
continue;
}
break;
}
});
/**
 * Returns the product of the two polynomial term vectors `u` and `v`.
 */
emmy.polynomial.impl.mul = (function emmy$polynomial$impl$mul(u,v){
var call = (function emmy$polynomial$impl$mul_$_call(i){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(u,i,null);
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return emmy.polynomial.impl.add(emmy.polynomial.impl.t_STAR_ts(x,v),emmy$polynomial$impl$mul_$_call((i + (1))));
}
});
return call((0));
});
/**
 * Given two polynomials `u` and `v`, returns a pair of the form `[quotient,
 *   remainder]` using [polynomial long
 *   division](https://en.wikipedia.org/wiki/Polynomial_long_division).
 * 
 *   The contract satisfied is that
 * 
 *   ```
 *   u == (add (mul quotient v) remainder)
 *   ```
 */
emmy.polynomial.impl.div = (function emmy$polynomial$impl$div(u,v){
var vec__33003 = cljs.core.peek(v);
var vn_expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33003,(0),null);
var vn_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33003,(1),null);
var good_QMARK_ = (function (p1__32996_SHARP_){
return emmy.polynomial.exponent.every_power_QMARK_(cljs.core.pos_QMARK_,p1__32996_SHARP_);
});
var quotient = cljs.core.PersistentVector.EMPTY;
var remainder = u;
while(true){
if(cljs.core.empty_QMARK_(remainder)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quotient,remainder], null);
} else {
var vec__33013 = cljs.core.peek(remainder);
var r_exponents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33013,(0),null);
var r_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33013,(1),null);
var residues = emmy.polynomial.exponent.div(r_exponents,vn_expts);
if(good_QMARK_(residues)){
var new_coeff = emmy.generic.div.cljs$core$IFn$_invoke$arity$2(r_coeff,vn_coeff);
var new_term = emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(residues,new_coeff);
var G__33049 = emmy.polynomial.impl.add(quotient,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_term], null));
var G__33050 = emmy.polynomial.impl.sub(remainder,emmy.polynomial.impl.t_STAR_ts(new_term,v));
quotient = G__33049;
remainder = G__33050;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quotient,remainder], null);
}
}
break;
}
});

//# sourceMappingURL=emmy.polynomial.impl.js.map
