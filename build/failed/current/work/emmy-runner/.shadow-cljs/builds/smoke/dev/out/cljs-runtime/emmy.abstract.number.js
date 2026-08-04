goog.provide('emmy.abstract$.number');
(cljs.core.Symbol.prototype.emmy$value$Numerical$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.emmy$value$Numerical$numerical_QMARK_$arity$1 = (function (_){
var ___$1 = this;
return true;
}));

(cljs.core.Symbol.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.Symbol;
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
emmy.abstract$.number.literal_number = (function emmy$abstract$number$literal_number(x){
return emmy.expression.make_literal(new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),x);
});
/**
 * Returns true if `x` is an explicit symbolic expression or something passed to
 *   `literal-number`, false otherwise.
 * 
 *   See [[abstract-number?]] for a similar function that also responds true to
 *   symbols.
 */
emmy.abstract$.number.literal_number_QMARK_ = (function emmy$abstract$number$literal_number_QMARK_(x){
return ((emmy.expression.literal_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.expression.literal_type(x),new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924))));
});
/**
 * Returns true if `x` is:
 * 
 *   - a symbolic expression
 *   - some object wrapped by a call to [[literal-number]]
 *   - a symbol (which implicitly acts as a [[literal-number]])
 * 
 *   See [[literal-number?]] for a similar function that won't respond true to
 *   symbols, only to explicit symbolic expressions or wrapped literal numbers.
 */
emmy.abstract$.number.abstract_number_QMARK_ = (function emmy$abstract$number$abstract_number_QMARK_(x){
return ((emmy.abstract$.number.literal_number_QMARK_(x)) || ((x instanceof cljs.core.Symbol)));
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.Symbol,new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964),cljs.core.Symbol], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol,new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979)], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),cljs.core.Symbol], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (l,r){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.expression.expression_of(l),r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964),new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (l,r){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,emmy.expression.expression_of(r));
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979)], null),(function (l,r){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.expression.expression_of(l),r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (l,r){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(l,emmy.expression.expression_of(r));
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (l,r){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.expression.expression_of(l),emmy.expression.expression_of(r));
}));
emmy.abstract$.number.defunary = (function emmy$abstract$number$defunary(generic_op,op_sym){
var temp__5823__auto__ = emmy.numsymb.symbolic_operator(op_sym);
if(cljs.core.truth_(temp__5823__auto__)){
var op = temp__5823__auto__;
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
var newexp = (function (){var G__39209 = emmy.expression.expression_of(a);
return (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(G__39209) : op.call(null,G__39209));
})();
return emmy.abstract$.number.literal_number((function (){var temp__5823__auto____$1 = emmy.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5823__auto____$1)){
var simplify = temp__5823__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
}));
} else {
return generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
return emmy.expression.literal_apply(new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),op_sym,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
}));
}
});
emmy.abstract$.number.defbinary = (function emmy$abstract$number$defbinary(generic_op,op_sym){
var pairs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979)], null)], null);
var temp__5823__auto__ = emmy.numsymb.symbolic_operator(op_sym);
if(cljs.core.truth_(temp__5823__auto__)){
var op = temp__5823__auto__;
var seq__39211 = cljs.core.seq(pairs);
var chunk__39212 = null;
var count__39213 = (0);
var i__39214 = (0);
while(true){
if((i__39214 < count__39213)){
var vec__39225 = chunk__39212.cljs$core$IIndexed$_nth$arity$2(null,i__39214);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39225,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39225,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__39211,chunk__39212,count__39213,i__39214,vec__39225,l,r,op,temp__5823__auto__,pairs){
return (function (a,b){
var newexp = (function (){var G__39228 = emmy.expression.expression_of(a);
var G__39229 = emmy.expression.expression_of(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__39228,G__39229) : op.call(null,G__39228,G__39229));
})();
return emmy.abstract$.number.literal_number((function (){var temp__5823__auto____$1 = emmy.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5823__auto____$1)){
var simplify = temp__5823__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
});})(seq__39211,chunk__39212,count__39213,i__39214,vec__39225,l,r,op,temp__5823__auto__,pairs))
);


var G__39255 = seq__39211;
var G__39256 = chunk__39212;
var G__39257 = count__39213;
var G__39258 = (i__39214 + (1));
seq__39211 = G__39255;
chunk__39212 = G__39256;
count__39213 = G__39257;
i__39214 = G__39258;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39211);
if(temp__5825__auto__){
var seq__39211__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39211__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39211__$1);
var G__39259 = cljs.core.chunk_rest(seq__39211__$1);
var G__39260 = c__5694__auto__;
var G__39261 = cljs.core.count(c__5694__auto__);
var G__39262 = (0);
seq__39211 = G__39259;
chunk__39212 = G__39260;
count__39213 = G__39261;
i__39214 = G__39262;
continue;
} else {
var vec__39230 = cljs.core.first(seq__39211__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39230,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39230,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__39211,chunk__39212,count__39213,i__39214,vec__39230,l,r,seq__39211__$1,temp__5825__auto__,op,temp__5823__auto__,pairs){
return (function (a,b){
var newexp = (function (){var G__39233 = emmy.expression.expression_of(a);
var G__39234 = emmy.expression.expression_of(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__39233,G__39234) : op.call(null,G__39233,G__39234));
})();
return emmy.abstract$.number.literal_number((function (){var temp__5823__auto____$1 = emmy.numsymb._STAR_incremental_simplifier_STAR_;
if(cljs.core.truth_(temp__5823__auto____$1)){
var simplify = temp__5823__auto____$1;
return (simplify.cljs$core$IFn$_invoke$arity$1 ? simplify.cljs$core$IFn$_invoke$arity$1(newexp) : simplify.call(null,newexp));
} else {
return newexp;
}
})());
});})(seq__39211,chunk__39212,count__39213,i__39214,vec__39230,l,r,seq__39211__$1,temp__5825__auto__,op,temp__5823__auto__,pairs))
);


var G__39263 = cljs.core.next(seq__39211__$1);
var G__39264 = null;
var G__39265 = (0);
var G__39266 = (0);
seq__39211 = G__39263;
chunk__39212 = G__39264;
count__39213 = G__39265;
i__39214 = G__39266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__39235 = cljs.core.seq(pairs);
var chunk__39236 = null;
var count__39237 = (0);
var i__39238 = (0);
while(true){
if((i__39238 < count__39237)){
var vec__39245 = chunk__39236.cljs$core$IIndexed$_nth$arity$2(null,i__39238);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39245,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39245,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__39235,chunk__39236,count__39237,i__39238,vec__39245,l,r,temp__5823__auto__,pairs){
return (function (a,b){
return emmy.expression.literal_apply(new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),op_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
});})(seq__39235,chunk__39236,count__39237,i__39238,vec__39245,l,r,temp__5823__auto__,pairs))
);


var G__39267 = seq__39235;
var G__39268 = chunk__39236;
var G__39269 = count__39237;
var G__39270 = (i__39238 + (1));
seq__39235 = G__39267;
chunk__39236 = G__39268;
count__39237 = G__39269;
i__39238 = G__39270;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39235);
if(temp__5825__auto__){
var seq__39235__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39235__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39235__$1);
var G__39271 = cljs.core.chunk_rest(seq__39235__$1);
var G__39272 = c__5694__auto__;
var G__39273 = cljs.core.count(c__5694__auto__);
var G__39274 = (0);
seq__39235 = G__39271;
chunk__39236 = G__39272;
count__39237 = G__39273;
i__39238 = G__39274;
continue;
} else {
var vec__39248 = cljs.core.first(seq__39235__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39248,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39248,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__39235,chunk__39236,count__39237,i__39238,vec__39248,l,r,seq__39235__$1,temp__5825__auto__,temp__5823__auto__,pairs){
return (function (a,b){
return emmy.expression.literal_apply(new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924),op_sym,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
});})(seq__39235,chunk__39236,count__39237,i__39238,vec__39248,l,r,seq__39235__$1,temp__5825__auto__,temp__5823__auto__,pairs))
);


var G__39275 = cljs.core.next(seq__39235__$1);
var G__39276 = null;
var G__39277 = (0);
var G__39278 = (0);
seq__39235 = G__39275;
chunk__39236 = G__39276;
count__39237 = G__39277;
i__39238 = G__39278;
continue;
}
} else {
return null;
}
}
break;
}
}
});
emmy.abstract$.number.defbinary(emmy.generic.add,new cljs.core.Symbol(null,"+","+",-740910886,null));
emmy.abstract$.number.defbinary(emmy.generic.sub,new cljs.core.Symbol(null,"-","-",-471816912,null));
emmy.abstract$.number.defbinary(emmy.generic.mul,new cljs.core.Symbol(null,"*","*",345799209,null));
emmy.abstract$.number.defbinary(emmy.generic.div,new cljs.core.Symbol(null,"/","/",-1371932971,null));
emmy.abstract$.number.defbinary(emmy.generic.modulo,new cljs.core.Symbol(null,"modulo","modulo",725580254,null));
emmy.abstract$.number.defbinary(emmy.generic.remainder,new cljs.core.Symbol(null,"remainder","remainder",-1608248897,null));
emmy.abstract$.number.defbinary(emmy.generic.expt,new cljs.core.Symbol(null,"expt","expt",2123850345,null));
emmy.abstract$.number.defunary(emmy.generic.negate,new cljs.core.Symbol(null,"negate","negate",337772450,null));
emmy.abstract$.number.defunary(emmy.generic.invert,new cljs.core.Symbol(null,"invert","invert",-1100858266,null));
emmy.abstract$.number.defunary(emmy.generic.integer_part,new cljs.core.Symbol(null,"integer-part","integer-part",-1884537015,null));
emmy.abstract$.number.defunary(emmy.generic.fractional_part,new cljs.core.Symbol(null,"fractional-part","fractional-part",-505422086,null));
emmy.abstract$.number.defunary(emmy.generic.floor,new cljs.core.Symbol(null,"floor","floor",-772394748,null));
emmy.abstract$.number.defunary(emmy.generic.ceiling,new cljs.core.Symbol(null,"ceiling","ceiling",-1593475279,null));
emmy.abstract$.number.defunary(emmy.generic.sin,new cljs.core.Symbol(null,"sin","sin",1721439389,null));
emmy.abstract$.number.defunary(emmy.generic.cos,new cljs.core.Symbol(null,"cos","cos",-1452677493,null));
emmy.abstract$.number.defunary(emmy.generic.tan,new cljs.core.Symbol(null,"tan","tan",-1380825876,null));
emmy.abstract$.number.defunary(emmy.generic.sec,new cljs.core.Symbol(null,"sec","sec",60154974,null));
emmy.abstract$.number.defunary(emmy.generic.csc,new cljs.core.Symbol(null,"csc","csc",-427853492,null));
emmy.abstract$.number.defunary(emmy.generic.asin,new cljs.core.Symbol(null,"asin","asin",-904130570,null));
emmy.abstract$.number.defunary(emmy.generic.acos,new cljs.core.Symbol(null,"acos","acos",353741763,null));
emmy.abstract$.number.defunary(emmy.generic.atan,new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
emmy.abstract$.number.defbinary(emmy.generic.atan,new cljs.core.Symbol(null,"atan","atan",-1026550135,null));
emmy.abstract$.number.defunary(emmy.generic.acot,new cljs.core.Symbol(null,"acot","acot",1103016569,null));
emmy.abstract$.number.defunary(emmy.generic.sinh,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null));
emmy.abstract$.number.defunary(emmy.generic.cosh,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null));
emmy.abstract$.number.defunary(emmy.generic.tanh,new cljs.core.Symbol(null,"tanh","tanh",480481797,null));
emmy.abstract$.number.defunary(emmy.generic.coth,new cljs.core.Symbol(null,"coth","coth",1130257730,null));
emmy.abstract$.number.defunary(emmy.generic.sech,new cljs.core.Symbol(null,"sech","sech",-1403979131,null));
emmy.abstract$.number.defunary(emmy.generic.csch,new cljs.core.Symbol(null,"csch","csch",-1950330545,null));
emmy.abstract$.number.defunary(emmy.generic.abs,new cljs.core.Symbol(null,"abs","abs",1394505050,null));
emmy.abstract$.number.defunary(emmy.generic.sqrt,new cljs.core.Symbol(null,"sqrt","sqrt",370479598,null));
emmy.abstract$.number.defunary(emmy.generic.log,new cljs.core.Symbol(null,"log","log",45015523,null));
var log_39279 = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"log","log",45015523,null));
var div_39280 = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
emmy.generic.log2.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
var a__$1 = emmy.expression.expression_of(a);
return emmy.abstract$.number.literal_number((function (){var G__39251 = (log_39279.cljs$core$IFn$_invoke$arity$1 ? log_39279.cljs$core$IFn$_invoke$arity$1(a__$1) : log_39279.call(null,a__$1));
var G__39252 = (log_39279.cljs$core$IFn$_invoke$arity$1 ? log_39279.cljs$core$IFn$_invoke$arity$1((2)) : log_39279.call(null,(2)));
return (div_39280.cljs$core$IFn$_invoke$arity$2 ? div_39280.cljs$core$IFn$_invoke$arity$2(G__39251,G__39252) : div_39280.call(null,G__39251,G__39252));
})());
}));

emmy.generic.log10.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
var a__$1 = emmy.expression.expression_of(a);
return emmy.abstract$.number.literal_number((function (){var G__39253 = (log_39279.cljs$core$IFn$_invoke$arity$1 ? log_39279.cljs$core$IFn$_invoke$arity$1(a__$1) : log_39279.call(null,a__$1));
var G__39254 = (log_39279.cljs$core$IFn$_invoke$arity$1 ? log_39279.cljs$core$IFn$_invoke$arity$1((10)) : log_39279.call(null,(10)));
return (div_39280.cljs$core$IFn$_invoke$arity$2 ? div_39280.cljs$core$IFn$_invoke$arity$2(G__39253,G__39254) : div_39280.call(null,G__39253,G__39254));
})());
}));
emmy.abstract$.number.defunary(emmy.generic.exp,new cljs.core.Symbol(null,"exp","exp",1378825265,null));
emmy.abstract$.number.defbinary(emmy.generic.make_rectangular,new cljs.core.Symbol(null,"make-rectangular","make-rectangular",-1494662174,null));
emmy.abstract$.number.defbinary(emmy.generic.make_polar,new cljs.core.Symbol(null,"make-polar","make-polar",2147326621,null));
emmy.abstract$.number.defunary(emmy.generic.real_part,new cljs.core.Symbol(null,"real-part","real-part",-2001752061,null));
emmy.abstract$.number.defunary(emmy.generic.imag_part,new cljs.core.Symbol(null,"imag-part","imag-part",2028041294,null));
emmy.abstract$.number.defunary(emmy.generic.magnitude,new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null));
emmy.abstract$.number.defunary(emmy.generic.angle,new cljs.core.Symbol(null,"angle","angle",-1032341515,null));
emmy.abstract$.number.defunary(emmy.generic.conjugate,new cljs.core.Symbol(null,"conjugate","conjugate",-1063123193,null));
emmy.abstract$.number.defbinary(emmy.generic.dot_product,new cljs.core.Symbol(null,"dot-product","dot-product",-203055892,null));
emmy.abstract$.number.defbinary(emmy.generic.inner_product,new cljs.core.Symbol(null,"inner-product","inner-product",-1963110418,null));
emmy.abstract$.number.defbinary(emmy.generic.gcd,new cljs.core.Symbol(null,"gcd","gcd",1659909537,null));
emmy.abstract$.number.defbinary(emmy.generic.lcm,new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (_){
return false;
}));
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (_){
return false;
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (_){
return false;
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (_){
return false;
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (s){
return s;
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (_){
return false;
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Symbol], null),(function (a){
return a;
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.expression","numeric","emmy.expression/numeric",-181475924)], null),(function (a){
return emmy.abstract$.number.literal_number(emmy.simplify.simplify_expression(emmy.expression.expression_of(a)));
}));
emmy.abstract$.number.memoized_simplify = cljs.core.memoize(emmy.generic.simplify);
/**
 * This function will only simplify instances of [[emmy.expression/Literal]]; if
 *   `x` is of that type, [[simplify-numerical-expression]] acts as a memoized
 *   version of [[generic/simplify]]. Else, acts as identity.
 * 
 *   This trick is used in [[emmy.calculus.manifold]] to memoize simplification
 *   _only_ for non-perturbed types.
 */
emmy.abstract$.number.simplify_numerical_expression = (function emmy$abstract$number$simplify_numerical_expression(x){
if(emmy.abstract$.number.literal_number_QMARK_(x)){
return emmy.abstract$.number.memoized_simplify(x);
} else {
return x;
}
});

//# sourceMappingURL=emmy.abstract.number.js.map
