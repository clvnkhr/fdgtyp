goog.provide('emmy.modint');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
*/
emmy.modint.ModInt = (function (i,m){
this.i = i;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.modint.ModInt.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.modint.ModInt.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973);
}));

(emmy.modint.ModInt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.modint.mod_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? emmy.modint.mod_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.modint.mod_COLON__EQ_.call(null,this$__$1,that));
}));

(emmy.modint.ModInt.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.i)+" mod "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m)+"]");
}));

(emmy.modint.ModInt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.modint.ModInt \"",x__$1.toString(),"\"]"], 0));
}));

(emmy.modint.ModInt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.modint.ModInt.cljs$lang$type = true);

(emmy.modint.ModInt.cljs$lang$ctorStr = "emmy.modint/ModInt");

(emmy.modint.ModInt.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.modint/ModInt");
}));

/**
 * Positional factory function for emmy.modint/ModInt.
 */
emmy.modint.__GT_ModInt = (function emmy$modint$__GT_ModInt(i,m){
return (new emmy.modint.ModInt(i,m));
});

/**
 * Returns true if `x` is an instance of [[ModInt]], false otherwise.
 */
emmy.modint.modint_QMARK_ = (function emmy$modint$modint_QMARK_(x){
return (x instanceof emmy.modint.ModInt);
});
emmy.modint.residue = (function emmy$modint$residue(x){
return x.i;
});
emmy.modint.modulus = (function emmy$modint$modulus(x){
return x.m;
});
emmy.modint.mod_COLON__EQ_ = (function emmy$modint$mod_COLON__EQ_(this$,that){
if(emmy.modint.modint_QMARK_(that)){
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.modulus(this$),emmy.modint.modulus(that));
if(and__5160__auto__){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(this$),emmy.modint.residue(that));
} else {
return and__5160__auto__;
}
} else {
if(emmy.value.number_QMARK_(that)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(this$),emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(that,emmy.modint.modulus(this$)));
} else {
return false;

}
}
});
/**
 * Returns an instance of [[ModInt]] that represents integer `i` with integral
 *   modulus `m`.
 */
emmy.modint.make = (function emmy$modint$make(i,m){
if(emmy.value.integral_QMARK_(i)){
} else {
throw (new Error("Assert failed: (v/integral? i)"));
}

if(emmy.value.integral_QMARK_(m)){
} else {
throw (new Error("Assert failed: (v/integral? m)"));
}

return emmy.modint.__GT_ModInt(emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(i,m),m);
});
emmy.modint.modular_binop = (function emmy$modint$modular_binop(op){
return (function (a,b){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.modint.modulus(a),emmy.modint.modulus(b))))){
return emmy.util.arithmetic_ex("unequal moduli");
} else {
return emmy.modint.make((function (){var G__32381 = emmy.modint.residue(a);
var G__32382 = emmy.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__32381,G__32382) : op.call(null,G__32381,G__32382));
})(),emmy.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
emmy.modint.invert = (function emmy$modint$invert(var_args){
var G__32387 = arguments.length;
switch (G__32387) {
case 1:
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.modint.invert.cljs$core$IFn$_invoke$arity$1 = (function (m){
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(m),emmy.modint.modulus(m));
}));

(emmy.modint.invert.cljs$core$IFn$_invoke$arity$2 = (function (i,modulus){
var vec__32389 = emmy.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32389,(2),null);
if((g < (2))){
return emmy.modint.make(a,modulus);
} else {
return emmy.util.arithmetic_ex((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" is not invertible mod "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modulus)));
}
}));

(emmy.modint.invert.cljs$lang$maxFixedArity = 2);

/**
 * Modular exponentiation, more efficient on the JVM.
 */
emmy.modint.mod_expt = (function emmy$modint$mod_expt(base,pow,modulus){
return emmy.modint.__GT_ModInt(Number(emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(emmy.util.bigint(base),emmy.util.bigint(pow)),modulus)),modulus);
});
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
emmy.modint.chinese_remainder = (function emmy$modint$chinese_remainder(var_args){
var args__5903__auto__ = [];
var len__5897__auto___32550 = arguments.length;
var i__5898__auto___32551 = (0);
while(true){
if((i__5898__auto___32551 < len__5897__auto___32550)){
args__5903__auto__.push((arguments[i__5898__auto___32551]));

var G__32554 = (i__5898__auto___32551 + (1));
i__5898__auto___32551 = G__32554;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.modint.chinese_remainder.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.modint.chinese_remainder.cljs$core$IFn$_invoke$arity$variadic = (function (modints){
var prod = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.modint.modulus),emmy.generic._STAR_,modints);
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (mi){
var i = emmy.modint.residue(mi);
var m = emmy.modint.modulus(mi);
var c = emmy.generic.quotient.cljs$core$IFn$_invoke$arity$2(prod,m);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(i,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.modint.residue(emmy.modint.invert.cljs$core$IFn$_invoke$arity$2(c,m))], 0));
}));
return emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,emmy.generic._PLUS_,modints),prod);
}));

(emmy.modint.chinese_remainder.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.modint.chinese_remainder.cljs$lang$applyTo = (function (seq32396){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32396));
}));

emmy.modint.add = emmy.modint.modular_binop(emmy.generic.add);
emmy.modint.sub = emmy.modint.modular_binop(emmy.generic.sub);
emmy.modint.mul = emmy.modint.modular_binop(emmy.generic.mul);
emmy.modint.remainder = emmy.modint.modular_binop(emmy.generic.remainder);
emmy.modint.modulo = emmy.modint.modular_binop(emmy.generic.modulo);
emmy.modint.div = (function emmy$modint$div(a,b){
return emmy.modint.mul(a,emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
});
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (l,r){
return emmy.modint.mod_COLON__EQ_(r,l);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","number","emmy.value/number",547788979)], null),(function (l,r){
return emmy.modint.mod_COLON__EQ_(l,r);
}));
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.i);
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new emmy.modint.ModInt(emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a.i),a.m));
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new emmy.modint.ModInt(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.i),a.m));
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new emmy.modint.ModInt(emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.i),a.m));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"modint","modint",-1355832379,null),(new cljs.core.List(null,a.i,(new cljs.core.List(null,a.m,null,(1),null)),(2),null)),(3),null));
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (_){
return true;
}));
emmy.generic.integer_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return a.i;
}));
emmy.generic.fractional_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (_){
return (0);
}));
emmy.generic.floor.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return a;
}));
emmy.generic.ceiling.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return a;
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.add(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mul(a,b);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.div(a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.sub(a,b);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.modint.make(emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.modint.residue(a)),emmy.modint.modulus(a));
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(a);
}));
emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.modulo.cljs$core$IFn$_invoke$arity$2(emmy.modint.residue(a),emmy.modint.modulus(a));
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
var i = emmy.modint.residue(a);
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(i))){
return emmy.modint.make(i,emmy.modint.modulus(a));
} else {
return a;
}
}));
emmy.generic.quotient.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mul(a,emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.remainder.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.remainder(a,b);
}));
emmy.generic.modulo.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.modulo(a,b);
}));
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mul(a,emmy.modint.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a){
return emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.modint.residue(a));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.mod_expt(a,emmy.modint.residue(b),emmy.modint.modulus(b));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a,b){
return emmy.modint.mod_expt(emmy.modint.residue(a),b,emmy.modint.modulus(a));
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.div(b,a);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),(function (a,b){
return emmy.modint.div(a,b);
}));
var seq__32438_32586 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub], null));
var chunk__32439_32587 = null;
var count__32440_32588 = (0);
var i__32441_32589 = (0);
while(true){
if((i__32441_32589 < count__32440_32588)){
var op_32591 = chunk__32439_32587.cljs$core$IIndexed$_nth$arity$2(null,i__32441_32589);
op_32591.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32591){
return (function (a,b){
return emmy.modint.make((function (){var G__32461 = a;
var G__32462 = emmy.modint.residue(b);
return (op_32591.cljs$core$IFn$_invoke$arity$2 ? op_32591.cljs$core$IFn$_invoke$arity$2(G__32461,G__32462) : op_32591.call(null,G__32461,G__32462));
})(),emmy.modint.modulus(b));
});})(seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32591))
);

op_32591.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32591){
return (function (a,b){
return emmy.modint.make((function (){var G__32463 = emmy.modint.residue(a);
var G__32464 = b;
return (op_32591.cljs$core$IFn$_invoke$arity$2 ? op_32591.cljs$core$IFn$_invoke$arity$2(G__32463,G__32464) : op_32591.call(null,G__32463,G__32464));
})(),emmy.modint.modulus(a));
});})(seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32591))
);


var G__32593 = seq__32438_32586;
var G__32594 = chunk__32439_32587;
var G__32595 = count__32440_32588;
var G__32596 = (i__32441_32589 + (1));
seq__32438_32586 = G__32593;
chunk__32439_32587 = G__32594;
count__32440_32588 = G__32595;
i__32441_32589 = G__32596;
continue;
} else {
var temp__5825__auto___32600 = cljs.core.seq(seq__32438_32586);
if(temp__5825__auto___32600){
var seq__32438_32601__$1 = temp__5825__auto___32600;
if(cljs.core.chunked_seq_QMARK_(seq__32438_32601__$1)){
var c__5694__auto___32602 = cljs.core.chunk_first(seq__32438_32601__$1);
var G__32603 = cljs.core.chunk_rest(seq__32438_32601__$1);
var G__32604 = c__5694__auto___32602;
var G__32605 = cljs.core.count(c__5694__auto___32602);
var G__32606 = (0);
seq__32438_32586 = G__32603;
chunk__32439_32587 = G__32604;
count__32440_32588 = G__32605;
i__32441_32589 = G__32606;
continue;
} else {
var op_32607 = cljs.core.first(seq__32438_32601__$1);
op_32607.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32607,seq__32438_32601__$1,temp__5825__auto___32600){
return (function (a,b){
return emmy.modint.make((function (){var G__32468 = a;
var G__32469 = emmy.modint.residue(b);
return (op_32607.cljs$core$IFn$_invoke$arity$2 ? op_32607.cljs$core$IFn$_invoke$arity$2(G__32468,G__32469) : op_32607.call(null,G__32468,G__32469));
})(),emmy.modint.modulus(b));
});})(seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32607,seq__32438_32601__$1,temp__5825__auto___32600))
);

op_32607.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32607,seq__32438_32601__$1,temp__5825__auto___32600){
return (function (a,b){
return emmy.modint.make((function (){var G__32472 = emmy.modint.residue(a);
var G__32473 = b;
return (op_32607.cljs$core$IFn$_invoke$arity$2 ? op_32607.cljs$core$IFn$_invoke$arity$2(G__32472,G__32473) : op_32607.call(null,G__32472,G__32473));
})(),emmy.modint.modulus(a));
});})(seq__32438_32586,chunk__32439_32587,count__32440_32588,i__32441_32589,op_32607,seq__32438_32601__$1,temp__5825__auto___32600))
);


var G__32615 = cljs.core.next(seq__32438_32601__$1);
var G__32616 = null;
var G__32617 = (0);
var G__32618 = (0);
seq__32438_32586 = G__32615;
chunk__32439_32587 = G__32616;
count__32440_32588 = G__32617;
i__32441_32589 = G__32618;
continue;
}
} else {
}
}
break;
}
var seq__32476_32619 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.div,emmy.generic.solve_linear,emmy.generic.solve_linear_right,emmy.generic.quotient,emmy.generic.remainder,emmy.generic.exact_divide], null));
var chunk__32477_32620 = null;
var count__32478_32621 = (0);
var i__32479_32622 = (0);
while(true){
if((i__32479_32622 < count__32478_32621)){
var op_32626 = chunk__32477_32620.cljs$core$IIndexed$_nth$arity$2(null,i__32479_32622);
op_32626.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32626){
return (function (a,b){
var G__32493 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32494 = b;
return (op_32626.cljs$core$IFn$_invoke$arity$2 ? op_32626.cljs$core$IFn$_invoke$arity$2(G__32493,G__32494) : op_32626.call(null,G__32493,G__32494));
});})(seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32626))
);

op_32626.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32626){
return (function (a,b){
var G__32495 = a;
var G__32496 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32626.cljs$core$IFn$_invoke$arity$2 ? op_32626.cljs$core$IFn$_invoke$arity$2(G__32495,G__32496) : op_32626.call(null,G__32495,G__32496));
});})(seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32626))
);


var G__32628 = seq__32476_32619;
var G__32629 = chunk__32477_32620;
var G__32630 = count__32478_32621;
var G__32631 = (i__32479_32622 + (1));
seq__32476_32619 = G__32628;
chunk__32477_32620 = G__32629;
count__32478_32621 = G__32630;
i__32479_32622 = G__32631;
continue;
} else {
var temp__5825__auto___32632 = cljs.core.seq(seq__32476_32619);
if(temp__5825__auto___32632){
var seq__32476_32633__$1 = temp__5825__auto___32632;
if(cljs.core.chunked_seq_QMARK_(seq__32476_32633__$1)){
var c__5694__auto___32634 = cljs.core.chunk_first(seq__32476_32633__$1);
var G__32635 = cljs.core.chunk_rest(seq__32476_32633__$1);
var G__32636 = c__5694__auto___32634;
var G__32637 = cljs.core.count(c__5694__auto___32634);
var G__32638 = (0);
seq__32476_32619 = G__32635;
chunk__32477_32620 = G__32636;
count__32478_32621 = G__32637;
i__32479_32622 = G__32638;
continue;
} else {
var op_32639 = cljs.core.first(seq__32476_32633__$1);
op_32639.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32639,seq__32476_32633__$1,temp__5825__auto___32632){
return (function (a,b){
var G__32501 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32502 = b;
return (op_32639.cljs$core$IFn$_invoke$arity$2 ? op_32639.cljs$core$IFn$_invoke$arity$2(G__32501,G__32502) : op_32639.call(null,G__32501,G__32502));
});})(seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32639,seq__32476_32633__$1,temp__5825__auto___32632))
);

op_32639.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32639,seq__32476_32633__$1,temp__5825__auto___32632){
return (function (a,b){
var G__32505 = a;
var G__32506 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32639.cljs$core$IFn$_invoke$arity$2 ? op_32639.cljs$core$IFn$_invoke$arity$2(G__32505,G__32506) : op_32639.call(null,G__32505,G__32506));
});})(seq__32476_32619,chunk__32477_32620,count__32478_32621,i__32479_32622,op_32639,seq__32476_32633__$1,temp__5825__auto___32632))
);


var G__32640 = cljs.core.next(seq__32476_32633__$1);
var G__32641 = null;
var G__32642 = (0);
var G__32643 = (0);
seq__32476_32619 = G__32640;
chunk__32477_32620 = G__32641;
count__32478_32621 = G__32642;
i__32479_32622 = G__32643;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=emmy.modint.js.map
