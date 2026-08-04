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
return emmy.modint.make((function (){var G__32583 = emmy.modint.residue(a);
var G__32584 = emmy.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__32583,G__32584) : op.call(null,G__32583,G__32584));
})(),emmy.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
emmy.modint.invert = (function emmy$modint$invert(var_args){
var G__32588 = arguments.length;
switch (G__32588) {
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
var vec__32589 = emmy.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32589,(2),null);
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
var len__5897__auto___32767 = arguments.length;
var i__5898__auto___32768 = (0);
while(true){
if((i__5898__auto___32768 < len__5897__auto___32767)){
args__5903__auto__.push((arguments[i__5898__auto___32768]));

var G__32769 = (i__5898__auto___32768 + (1));
i__5898__auto___32768 = G__32769;
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
(emmy.modint.chinese_remainder.cljs$lang$applyTo = (function (seq32594){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32594));
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
var seq__32643_32786 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub], null));
var chunk__32644_32787 = null;
var count__32645_32788 = (0);
var i__32646_32789 = (0);
while(true){
if((i__32646_32789 < count__32645_32788)){
var op_32790 = chunk__32644_32787.cljs$core$IIndexed$_nth$arity$2(null,i__32646_32789);
op_32790.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32790){
return (function (a,b){
return emmy.modint.make((function (){var G__32679 = a;
var G__32680 = emmy.modint.residue(b);
return (op_32790.cljs$core$IFn$_invoke$arity$2 ? op_32790.cljs$core$IFn$_invoke$arity$2(G__32679,G__32680) : op_32790.call(null,G__32679,G__32680));
})(),emmy.modint.modulus(b));
});})(seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32790))
);

op_32790.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32790){
return (function (a,b){
return emmy.modint.make((function (){var G__32681 = emmy.modint.residue(a);
var G__32682 = b;
return (op_32790.cljs$core$IFn$_invoke$arity$2 ? op_32790.cljs$core$IFn$_invoke$arity$2(G__32681,G__32682) : op_32790.call(null,G__32681,G__32682));
})(),emmy.modint.modulus(a));
});})(seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32790))
);


var G__32791 = seq__32643_32786;
var G__32792 = chunk__32644_32787;
var G__32793 = count__32645_32788;
var G__32794 = (i__32646_32789 + (1));
seq__32643_32786 = G__32791;
chunk__32644_32787 = G__32792;
count__32645_32788 = G__32793;
i__32646_32789 = G__32794;
continue;
} else {
var temp__5825__auto___32795 = cljs.core.seq(seq__32643_32786);
if(temp__5825__auto___32795){
var seq__32643_32796__$1 = temp__5825__auto___32795;
if(cljs.core.chunked_seq_QMARK_(seq__32643_32796__$1)){
var c__5694__auto___32797 = cljs.core.chunk_first(seq__32643_32796__$1);
var G__32798 = cljs.core.chunk_rest(seq__32643_32796__$1);
var G__32799 = c__5694__auto___32797;
var G__32800 = cljs.core.count(c__5694__auto___32797);
var G__32801 = (0);
seq__32643_32786 = G__32798;
chunk__32644_32787 = G__32799;
count__32645_32788 = G__32800;
i__32646_32789 = G__32801;
continue;
} else {
var op_32802 = cljs.core.first(seq__32643_32796__$1);
op_32802.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32802,seq__32643_32796__$1,temp__5825__auto___32795){
return (function (a,b){
return emmy.modint.make((function (){var G__32687 = a;
var G__32688 = emmy.modint.residue(b);
return (op_32802.cljs$core$IFn$_invoke$arity$2 ? op_32802.cljs$core$IFn$_invoke$arity$2(G__32687,G__32688) : op_32802.call(null,G__32687,G__32688));
})(),emmy.modint.modulus(b));
});})(seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32802,seq__32643_32796__$1,temp__5825__auto___32795))
);

op_32802.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32802,seq__32643_32796__$1,temp__5825__auto___32795){
return (function (a,b){
return emmy.modint.make((function (){var G__32689 = emmy.modint.residue(a);
var G__32690 = b;
return (op_32802.cljs$core$IFn$_invoke$arity$2 ? op_32802.cljs$core$IFn$_invoke$arity$2(G__32689,G__32690) : op_32802.call(null,G__32689,G__32690));
})(),emmy.modint.modulus(a));
});})(seq__32643_32786,chunk__32644_32787,count__32645_32788,i__32646_32789,op_32802,seq__32643_32796__$1,temp__5825__auto___32795))
);


var G__32806 = cljs.core.next(seq__32643_32796__$1);
var G__32807 = null;
var G__32808 = (0);
var G__32809 = (0);
seq__32643_32786 = G__32806;
chunk__32644_32787 = G__32807;
count__32645_32788 = G__32808;
i__32646_32789 = G__32809;
continue;
}
} else {
}
}
break;
}
var seq__32699_32810 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.div,emmy.generic.solve_linear,emmy.generic.solve_linear_right,emmy.generic.quotient,emmy.generic.remainder,emmy.generic.exact_divide], null));
var chunk__32700_32811 = null;
var count__32701_32812 = (0);
var i__32702_32813 = (0);
while(true){
if((i__32702_32813 < count__32701_32812)){
var op_32814 = chunk__32700_32811.cljs$core$IIndexed$_nth$arity$2(null,i__32702_32813);
op_32814.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32814){
return (function (a,b){
var G__32716 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32717 = b;
return (op_32814.cljs$core$IFn$_invoke$arity$2 ? op_32814.cljs$core$IFn$_invoke$arity$2(G__32716,G__32717) : op_32814.call(null,G__32716,G__32717));
});})(seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32814))
);

op_32814.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32814){
return (function (a,b){
var G__32720 = a;
var G__32721 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32814.cljs$core$IFn$_invoke$arity$2 ? op_32814.cljs$core$IFn$_invoke$arity$2(G__32720,G__32721) : op_32814.call(null,G__32720,G__32721));
});})(seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32814))
);


var G__32820 = seq__32699_32810;
var G__32821 = chunk__32700_32811;
var G__32822 = count__32701_32812;
var G__32823 = (i__32702_32813 + (1));
seq__32699_32810 = G__32820;
chunk__32700_32811 = G__32821;
count__32701_32812 = G__32822;
i__32702_32813 = G__32823;
continue;
} else {
var temp__5825__auto___32824 = cljs.core.seq(seq__32699_32810);
if(temp__5825__auto___32824){
var seq__32699_32825__$1 = temp__5825__auto___32824;
if(cljs.core.chunked_seq_QMARK_(seq__32699_32825__$1)){
var c__5694__auto___32826 = cljs.core.chunk_first(seq__32699_32825__$1);
var G__32827 = cljs.core.chunk_rest(seq__32699_32825__$1);
var G__32828 = c__5694__auto___32826;
var G__32829 = cljs.core.count(c__5694__auto___32826);
var G__32830 = (0);
seq__32699_32810 = G__32827;
chunk__32700_32811 = G__32828;
count__32701_32812 = G__32829;
i__32702_32813 = G__32830;
continue;
} else {
var op_32831 = cljs.core.first(seq__32699_32825__$1);
op_32831.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32831,seq__32699_32825__$1,temp__5825__auto___32824){
return (function (a,b){
var G__32732 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32733 = b;
return (op_32831.cljs$core$IFn$_invoke$arity$2 ? op_32831.cljs$core$IFn$_invoke$arity$2(G__32732,G__32733) : op_32831.call(null,G__32732,G__32733));
});})(seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32831,seq__32699_32825__$1,temp__5825__auto___32824))
);

op_32831.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32831,seq__32699_32825__$1,temp__5825__auto___32824){
return (function (a,b){
var G__32734 = a;
var G__32735 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32831.cljs$core$IFn$_invoke$arity$2 ? op_32831.cljs$core$IFn$_invoke$arity$2(G__32734,G__32735) : op_32831.call(null,G__32734,G__32735));
});})(seq__32699_32810,chunk__32700_32811,count__32701_32812,i__32702_32813,op_32831,seq__32699_32825__$1,temp__5825__auto___32824))
);


var G__32832 = cljs.core.next(seq__32699_32825__$1);
var G__32833 = null;
var G__32834 = (0);
var G__32835 = (0);
seq__32699_32810 = G__32832;
chunk__32700_32811 = G__32833;
count__32701_32812 = G__32834;
i__32702_32813 = G__32835;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=emmy.modint.js.map
