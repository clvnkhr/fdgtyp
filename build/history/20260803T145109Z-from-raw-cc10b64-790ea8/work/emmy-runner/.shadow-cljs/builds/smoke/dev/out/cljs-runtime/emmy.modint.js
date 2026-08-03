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
return emmy.modint.make((function (){var G__32641 = emmy.modint.residue(a);
var G__32642 = emmy.modint.residue(b);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__32641,G__32642) : op.call(null,G__32641,G__32642));
})(),emmy.modint.modulus(a));
}
});
});
/**
 * Modular inverse. JVM implementation uses the native BigInt implementation.
 */
emmy.modint.invert = (function emmy$modint$invert(var_args){
var G__32652 = arguments.length;
switch (G__32652) {
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
var vec__32654 = emmy.euclid.extended_gcd(i,modulus);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32654,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32654,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32654,(2),null);
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
var len__5897__auto___32890 = arguments.length;
var i__5898__auto___32891 = (0);
while(true){
if((i__5898__auto___32891 < len__5897__auto___32890)){
args__5903__auto__.push((arguments[i__5898__auto___32891]));

var G__32895 = (i__5898__auto___32891 + (1));
i__5898__auto___32891 = G__32895;
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
(emmy.modint.chinese_remainder.cljs$lang$applyTo = (function (seq32663){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32663));
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
var seq__32753_32939 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.add,emmy.generic.mul,emmy.generic.sub], null));
var chunk__32754_32940 = null;
var count__32755_32941 = (0);
var i__32756_32942 = (0);
while(true){
if((i__32756_32942 < count__32755_32941)){
var op_32943 = chunk__32754_32940.cljs$core$IIndexed$_nth$arity$2(null,i__32756_32942);
op_32943.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32943){
return (function (a,b){
return emmy.modint.make((function (){var G__32772 = a;
var G__32773 = emmy.modint.residue(b);
return (op_32943.cljs$core$IFn$_invoke$arity$2 ? op_32943.cljs$core$IFn$_invoke$arity$2(G__32772,G__32773) : op_32943.call(null,G__32772,G__32773));
})(),emmy.modint.modulus(b));
});})(seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32943))
);

op_32943.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32943){
return (function (a,b){
return emmy.modint.make((function (){var G__32774 = emmy.modint.residue(a);
var G__32775 = b;
return (op_32943.cljs$core$IFn$_invoke$arity$2 ? op_32943.cljs$core$IFn$_invoke$arity$2(G__32774,G__32775) : op_32943.call(null,G__32774,G__32775));
})(),emmy.modint.modulus(a));
});})(seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32943))
);


var G__32947 = seq__32753_32939;
var G__32948 = chunk__32754_32940;
var G__32949 = count__32755_32941;
var G__32950 = (i__32756_32942 + (1));
seq__32753_32939 = G__32947;
chunk__32754_32940 = G__32948;
count__32755_32941 = G__32949;
i__32756_32942 = G__32950;
continue;
} else {
var temp__5825__auto___32951 = cljs.core.seq(seq__32753_32939);
if(temp__5825__auto___32951){
var seq__32753_32952__$1 = temp__5825__auto___32951;
if(cljs.core.chunked_seq_QMARK_(seq__32753_32952__$1)){
var c__5694__auto___32954 = cljs.core.chunk_first(seq__32753_32952__$1);
var G__32955 = cljs.core.chunk_rest(seq__32753_32952__$1);
var G__32956 = c__5694__auto___32954;
var G__32957 = cljs.core.count(c__5694__auto___32954);
var G__32958 = (0);
seq__32753_32939 = G__32955;
chunk__32754_32940 = G__32956;
count__32755_32941 = G__32957;
i__32756_32942 = G__32958;
continue;
} else {
var op_32959 = cljs.core.first(seq__32753_32952__$1);
op_32959.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32959,seq__32753_32952__$1,temp__5825__auto___32951){
return (function (a,b){
return emmy.modint.make((function (){var G__32784 = a;
var G__32785 = emmy.modint.residue(b);
return (op_32959.cljs$core$IFn$_invoke$arity$2 ? op_32959.cljs$core$IFn$_invoke$arity$2(G__32784,G__32785) : op_32959.call(null,G__32784,G__32785));
})(),emmy.modint.modulus(b));
});})(seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32959,seq__32753_32952__$1,temp__5825__auto___32951))
);

op_32959.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32959,seq__32753_32952__$1,temp__5825__auto___32951){
return (function (a,b){
return emmy.modint.make((function (){var G__32794 = emmy.modint.residue(a);
var G__32795 = b;
return (op_32959.cljs$core$IFn$_invoke$arity$2 ? op_32959.cljs$core$IFn$_invoke$arity$2(G__32794,G__32795) : op_32959.call(null,G__32794,G__32795));
})(),emmy.modint.modulus(a));
});})(seq__32753_32939,chunk__32754_32940,count__32755_32941,i__32756_32942,op_32959,seq__32753_32952__$1,temp__5825__auto___32951))
);


var G__32962 = cljs.core.next(seq__32753_32952__$1);
var G__32963 = null;
var G__32964 = (0);
var G__32965 = (0);
seq__32753_32939 = G__32962;
chunk__32754_32940 = G__32963;
count__32755_32941 = G__32964;
i__32756_32942 = G__32965;
continue;
}
} else {
}
}
break;
}
var seq__32796_32966 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.div,emmy.generic.solve_linear,emmy.generic.solve_linear_right,emmy.generic.quotient,emmy.generic.remainder,emmy.generic.exact_divide], null));
var chunk__32797_32967 = null;
var count__32798_32968 = (0);
var i__32799_32969 = (0);
while(true){
if((i__32799_32969 < count__32798_32968)){
var op_32971 = chunk__32797_32967.cljs$core$IIndexed$_nth$arity$2(null,i__32799_32969);
op_32971.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32971){
return (function (a,b){
var G__32827 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32831 = b;
return (op_32971.cljs$core$IFn$_invoke$arity$2 ? op_32971.cljs$core$IFn$_invoke$arity$2(G__32827,G__32831) : op_32971.call(null,G__32827,G__32831));
});})(seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32971))
);

op_32971.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32971){
return (function (a,b){
var G__32835 = a;
var G__32836 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32971.cljs$core$IFn$_invoke$arity$2 ? op_32971.cljs$core$IFn$_invoke$arity$2(G__32835,G__32836) : op_32971.call(null,G__32835,G__32836));
});})(seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32971))
);


var G__32973 = seq__32796_32966;
var G__32974 = chunk__32797_32967;
var G__32975 = count__32798_32968;
var G__32976 = (i__32799_32969 + (1));
seq__32796_32966 = G__32973;
chunk__32797_32967 = G__32974;
count__32798_32968 = G__32975;
i__32799_32969 = G__32976;
continue;
} else {
var temp__5825__auto___32977 = cljs.core.seq(seq__32796_32966);
if(temp__5825__auto___32977){
var seq__32796_32978__$1 = temp__5825__auto___32977;
if(cljs.core.chunked_seq_QMARK_(seq__32796_32978__$1)){
var c__5694__auto___32980 = cljs.core.chunk_first(seq__32796_32978__$1);
var G__32981 = cljs.core.chunk_rest(seq__32796_32978__$1);
var G__32982 = c__5694__auto___32980;
var G__32983 = cljs.core.count(c__5694__auto___32980);
var G__32984 = (0);
seq__32796_32966 = G__32981;
chunk__32797_32967 = G__32982;
count__32798_32968 = G__32983;
i__32799_32969 = G__32984;
continue;
} else {
var op_32985 = cljs.core.first(seq__32796_32978__$1);
op_32985.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786),new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973)], null),((function (seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32985,seq__32796_32978__$1,temp__5825__auto___32977){
return (function (a,b){
var G__32840 = emmy.modint.make(a,emmy.modint.modulus(b));
var G__32841 = b;
return (op_32985.cljs$core$IFn$_invoke$arity$2 ? op_32985.cljs$core$IFn$_invoke$arity$2(G__32840,G__32841) : op_32985.call(null,G__32840,G__32841));
});})(seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32985,seq__32796_32978__$1,temp__5825__auto___32977))
);

op_32985.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),((function (seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32985,seq__32796_32978__$1,temp__5825__auto___32977){
return (function (a,b){
var G__32851 = a;
var G__32852 = emmy.modint.make(b,emmy.modint.modulus(a));
return (op_32985.cljs$core$IFn$_invoke$arity$2 ? op_32985.cljs$core$IFn$_invoke$arity$2(G__32851,G__32852) : op_32985.call(null,G__32851,G__32852));
});})(seq__32796_32966,chunk__32797_32967,count__32798_32968,i__32799_32969,op_32985,seq__32796_32978__$1,temp__5825__auto___32977))
);


var G__32988 = cljs.core.next(seq__32796_32978__$1);
var G__32989 = null;
var G__32990 = (0);
var G__32991 = (0);
seq__32796_32966 = G__32988;
chunk__32797_32967 = G__32989;
count__32798_32968 = G__32990;
i__32799_32969 = G__32991;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=emmy.modint.js.map
