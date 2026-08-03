goog.provide('emmy.operator');
/**
 * Simplifier that acts on associative products and sums, and collects products
 *   into exponents. Operator multiplication is NOT associative, so only adjacent
 *   products are collected.
 */
emmy.operator.simplify_operator_name = emmy.pattern.rule.rule_simplifier.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.simplify.rules.associative.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null)], 0)),emmy.simplify.rules.exponent_contract,emmy.simplify.rules.unary_elimination.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"*","*",345799209,null)], 0))], 0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {emmy.function$.IArity}
*/
emmy.operator.Operator = (function (o,arity,name,context,m){
this.o = o;
this.arity = arity;
this.name = name;
this.context = context;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 393473;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.operator.Operator.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.operator.Operator.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"subtype","subtype",-2092672993).cljs$core$IFn$_invoke$arity$1(self__.context);
}));

(emmy.operator.Operator.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.operator.Operator.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.arity;
}));

(emmy.operator.Operator.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.operator.Operator.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (_,old,new$){
var self__ = this;
var ___$1 = this;
return (new emmy.operator.Operator(emmy.dual.replace_tag(self__.o,old,new$),self__.arity,self__.name,self__.context,self__.m));
}));

(emmy.operator.Operator.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (_,tag,mode){
var self__ = this;
var ___$1 = this;
return (new emmy.operator.Operator(emmy.dual.extract_tangent(self__.o,tag,mode),self__.arity,self__.name,self__.context,self__.m));
}));

(emmy.operator.Operator.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
return (new emmy.operator.Operator(emmy.dual.extract_id(self__.o,id),self__.arity,self__.name,self__.context,self__.m));
}));

(emmy.operator.Operator.prototype.toString = (function (){
var self__ = this;
var o__$1 = this;
var n = emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(o__$1);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.seqable_QMARK_(n))?cljs.core.seq(n):n)));
}));

(emmy.operator.Operator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.operator.Operator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new emmy.operator.Operator(self__.o,self__.arity,self__.name,self__.context,meta));
}));

(emmy.operator.Operator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return (emmy.operator.op_COLON_get.cljs$core$IFn$_invoke$arity$2 ? emmy.operator.op_COLON_get.cljs$core$IFn$_invoke$arity$2(this$__$1,k) : emmy.operator.op_COLON_get.call(null,this$__$1,k));
}));

(emmy.operator.Operator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return emmy.util.illegal("Operators don't support the not-found arity of get!");
}));

(emmy.operator.Operator.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__38019 = (arguments.length - (1));
switch (G__38019) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case (18):
return self__.cljs$core$IFn$_invoke$arity$18((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
case (19):
return self__.cljs$core$IFn$_invoke$arity$19((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]));

break;
case (20):
return self__.cljs$core$IFn$_invoke$arity$20((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]));

break;
case (21):
return self__.cljs$core$IFn$_invoke$arity$21((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),(arguments[(19)]),(arguments[(20)]),(arguments[(21)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.operator.Operator.prototype.apply = (function (self__,args38018){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38018)));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$1 ? self__.o.cljs$core$IFn$_invoke$arity$1(a) : self__.o.call(null,a));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$2 ? self__.o.cljs$core$IFn$_invoke$arity$2(a,b) : self__.o.call(null,a,b));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$3 ? self__.o.cljs$core$IFn$_invoke$arity$3(a,b,c) : self__.o.call(null,a,b,c));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$4 ? self__.o.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : self__.o.call(null,a,b,c,d));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$5 ? self__.o.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : self__.o.call(null,a,b,c,d,e));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$6 ? self__.o.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : self__.o.call(null,a,b,c,d,e,f));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$7 ? self__.o.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : self__.o.call(null,a,b,c,d,e,f,g));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$8 ? self__.o.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : self__.o.call(null,a,b,c,d,e,f,g,h));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$9 ? self__.o.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : self__.o.call(null,a,b,c,d,e,f,g,h,i));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$10 ? self__.o.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$11 ? self__.o.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$12 ? self__.o.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$13 ? self__.o.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m__$1) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$14 ? self__.o.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$15 ? self__.o.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$16 ? self__.o.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$17 ? self__.o.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$18 ? self__.o.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$19 ? self__.o.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t){
var self__ = this;
var _ = this;
return (self__.o.cljs$core$IFn$_invoke$arity$20 ? self__.o.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t) : self__.o.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t));
}));

(emmy.operator.Operator.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(self__.o,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m__$1,n,o_arg,p,q,r,s,t,rest], 0));
}));

(emmy.operator.Operator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.operator.Operator.cljs$lang$type = true);

(emmy.operator.Operator.cljs$lang$ctorStr = "emmy.operator/Operator");

(emmy.operator.Operator.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.operator/Operator");
}));

/**
 * Positional factory function for emmy.operator/Operator.
 */
emmy.operator.__GT_Operator = (function emmy$operator$__GT_Operator(o,arity,name,context,m){
return (new emmy.operator.Operator(o,arity,name,context,m));
});

(emmy.operator.Operator.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.operator.Operator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));
/**
 * Returns true if the supplied `x` is an instance of [[Operator]], false
 *   otherwise.
 */
emmy.operator.operator_QMARK_ = (function emmy$operator$operator_QMARK_(x){
return (x instanceof emmy.operator.Operator);
});
/**
 * Returns the backing procedure of the supplied [[Operator]]. Errors if a
 *   non-[[Operator]] is supplied.
 */
emmy.operator.procedure = (function emmy$operator$procedure(op){
if(emmy.operator.operator_QMARK_(op)){
return op.o;
} else {
return emmy.util.illegal((""+"non-operator supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)));
}
});
/**
 * Returns the arity of the supplied [[Operator]]. Errors if a non-[[Operator]] is
 *   supplied.
 */
emmy.operator.arity = (function emmy$operator$arity(op){
if(emmy.operator.operator_QMARK_(op)){
return op.arity;
} else {
return emmy.util.illegal((""+"non-operator supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)));
}
});
/**
 * Returns the stored name of the supplied [[Operator]]. Errors if a
 *   non-[[Operator]] is supplied.
 */
emmy.operator.name = (function emmy$operator$name(op){
if(emmy.operator.operator_QMARK_(op)){
return op.name;
} else {
return emmy.util.illegal((""+"non-operator supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)));
}
});
/**
 * Returns the context field of the supplied [[Operator]]. Errors if a
 *   non-[[Operator]] is supplied.
 */
emmy.operator.context = (function emmy$operator$context(op){
if(emmy.operator.operator_QMARK_(op)){
return op.context;
} else {
return emmy.util.illegal((""+"non-operator supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)));
}
});
/**
 * Returns a copy of the supplied operator with `ctx` substituted for its
 *   context.
 */
emmy.operator.with_context = (function emmy$operator$with_context(op,ctx){
if(emmy.operator.operator_QMARK_(op)){
var op__$1 = op;
return emmy.operator.__GT_Operator(op__$1.o,op__$1.arity,op__$1.name,ctx,op__$1.m);
} else {
return emmy.util.illegal((""+"non-operator supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)));
}
});
/**
 * Returns an [[Operator]] wrapping the supplied procedure `f` with the symbolic
 *   name `name`. (`name` defaults to `'???`.)
 * 
 *   Optionally accepts a `context` map that will be stored inside the
 *   returned [[Operator]].
 */
emmy.operator.make_operator = (function emmy$operator$make_operator(var_args){
var G__38033 = arguments.length;
switch (G__38033) {
case 1:
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Symbol(null,"???","???",1210272185,null),cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2 = (function (f,name){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3(f,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$3 = (function (f,name,context){
return emmy.operator.__GT_Operator(f,new cljs.core.Keyword(null,"arity","arity",-1808556135).cljs$core$IFn$_invoke$arity$2(context,emmy.function$.arity(f)),name,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),context),null);
}));

(emmy.operator.make_operator.cljs$lang$maxFixedArity = 3);

/**
 * Returns an [[Operator]] that composes a lookup of the form `#(get % k)` with
 *   the wrapped procedure of the [[Operator]] `o`.
 */
emmy.operator.op_COLON_get = (function emmy$operator$op_COLON_get(o,k){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.function$.get.cljs$core$IFn$_invoke$arity$2(emmy.operator.procedure(o),k),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"compose","compose",1144740903,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"component","component",-1098498987,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(o),null,(1),null))], 0)))));
});
/**
 * Identity operator. Returns its argument unchanged.
 */
emmy.operator.identity = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.Symbol(null,"identity","identity",-1007039734,null));
/**
 * Merges type context maps of the two operators. Where the maps have keys in
 *   common, they must agree; disjoint keys become part of the new joint context.
 * 
 *   The exception is the :subtype key; if the values aren't
 *   equal, [[joint-context]] chooses the parent if one derives from the other, or
 *   throws if not.
 */
emmy.operator.joint_context = (function emmy$operator$joint_context(o,p){
if(emmy.operator.operator_QMARK_(o)){
} else {
throw (new Error("Assert failed: (operator? o)"));
}

if(emmy.operator.operator_QMARK_(p)){
} else {
throw (new Error("Assert failed: (operator? p)"));
}

return cljs.core.reduce_kv((function (joint_ctx,k,v){
var temp__5823__auto__ = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(joint_ctx) : k.call(null,joint_ctx));
if(cljs.core.truth_(temp__5823__auto__)){
var cv = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cv)){
return joint_ctx;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"subtype","subtype",-2092672993))) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cv,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(joint_ctx,k,v);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"subtype","subtype",-2092672993))) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(v,cv)))){
return joint_ctx;
} else {
return emmy.util.illegal((""+"incompatible operator context: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.operator.context(o))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.operator.context(p))+" at key: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)));

}
}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(joint_ctx,k,v);
}
}),emmy.operator.context(o),emmy.operator.context(p));
});
/**
 * Returns a new operator generated by combining a non-operator `f` on the left
 *   with an operator `o` on the right, using the binary operation `op`.
 * 
 *   `sym` is used to generate a proper symbolic name for the new operator.
 * 
 *   The combination occurs by coercing `f` to an operator that composes with its
 *   argument before combining with `operator`. As an example, the following two
 *   expressions are equivalent:
 * 
 *   (+ <f> <operator>)
 * 
 *   (+ (make-operator (fn [g] (comp <f> g)) <name>)
 *   <operator>)
 * 
 *   If `f` isn't already a function it's coerced to a function via `(constantly
 *   <f>)`.
 */
emmy.operator.combine_f_op = (function emmy$operator$combine_f_op(op,sym,f,o){
var h = emmy.function$.coerce_to_fn(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
return emmy.operator.__GT_Operator((function (g){
var G__38034 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h,g], 0));
var G__38035 = (o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(g) : o.call(null,g));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38034,G__38035) : op.call(null,G__38034,G__38035));
}),emmy.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(o),null,(1),null))], 0)))),emmy.operator.context(o),null);
});
/**
 * Returns a new operator generated by combining an operator `o` on the left with
 *   a non-operator `f` on the right, using the binary operation `op`.
 * 
 *   `sym` is used to generate a proper symbolic name for the new operator.
 * 
 *   The combination occurs by coercing `f` to an operator that composes with its
 *   argument before combining with `operator`. As an example, the following two
 *   expressions are equivalent:
 * 
 *   (+ <operator> <f>)
 * 
 *   (+ <operator>
 *   (make-operator (fn [g] (comp <f> g)) <name>))
 * 
 *   If `f` isn't already a function it's coerced to a function via `(constantly
 *   <f>)`.
 */
emmy.operator.combine_op_f = (function emmy$operator$combine_op_f(op,sym,o,f){
var h = emmy.function$.coerce_to_fn(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
return emmy.operator.__GT_Operator((function (g){
var G__38036 = (o.cljs$core$IFn$_invoke$arity$1 ? o.cljs$core$IFn$_invoke$arity$1(g) : o.call(null,g));
var G__38037 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([h,g], 0));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__38036,G__38037) : op.call(null,G__38036,G__38037));
}),emmy.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f),null,(1),null))], 0)))),emmy.operator.context(o),null);
});
/**
 * Returns a new operator that composes [[g/negate]] with its own wrapped
 *   operation. Equivalent to:
 * 
 *   (g/* (make-operator g/negate 'negate) o)
 */
emmy.operator.negate = (function emmy$operator$negate(o){
return emmy.operator.__GT_Operator((function() { 
var G__38065__delegate = function (fs){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,fs));
};
var G__38065 = function (var_args){
var fs = null;
if (arguments.length > 0) {
var G__38066__i = 0, G__38066__a = new Array(arguments.length -  0);
while (G__38066__i < G__38066__a.length) {G__38066__a[G__38066__i] = arguments[G__38066__i + 0]; ++G__38066__i;}
  fs = new cljs.core.IndexedSeq(G__38066__a,0,null);
} 
return G__38065__delegate.call(this,fs);};
G__38065.cljs$lang$maxFixedArity = 0;
G__38065.cljs$lang$applyTo = (function (arglist__38067){
var fs = cljs.core.seq(arglist__38067);
return G__38065__delegate(fs);
});
G__38065.cljs$core$IFn$_invoke$arity$variadic = G__38065__delegate;
return G__38065;
})()
,emmy.operator.arity(o),(new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),(2),null)),emmy.operator.context(o),cljs.core.meta(o));
});
/**
 * Subtract one operator from another. Produces an operator which computes the
 *   difference of applying the supplied operators.
 */
emmy.operator.o_COLON__ = (function emmy$operator$o_COLON__(o,p){
var ctx = emmy.operator.joint_context(o,p);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.operator.with_context(o,ctx);
} else {
return emmy.operator.__GT_Operator((function() { 
var G__38070__delegate = function (xs){
return emmy.generic.sub.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,xs),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p,xs));
};
var G__38070 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__38071__i = 0, G__38071__a = new Array(arguments.length -  0);
while (G__38071__i < G__38071__a.length) {G__38071__a[G__38071__i] = arguments[G__38071__i + 0]; ++G__38071__i;}
  xs = new cljs.core.IndexedSeq(G__38071__a,0,null);
} 
return G__38070__delegate.call(this,xs);};
G__38070.cljs$lang$maxFixedArity = 0;
G__38070.cljs$lang$applyTo = (function (arglist__38072){
var xs = cljs.core.seq(arglist__38072);
return G__38070__delegate(xs);
});
G__38070.cljs$core$IFn$_invoke$arity$variadic = G__38070__delegate;
return G__38070;
})()
,emmy.function$.joint_arity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.operator.arity(o),emmy.operator.arity(p)], null)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(p),null,(1),null))], 0)))),ctx,null);
}
});
emmy.operator.f_o = (function emmy$operator$f_o(f,o){
return emmy.operator.combine_f_op(emmy.generic.sub,new cljs.core.Symbol(null,"-","-",-471816912,null),f,o);
});
emmy.operator.o_f = (function emmy$operator$o_f(o,f){
return emmy.operator.combine_op_f(emmy.generic.sub,new cljs.core.Symbol(null,"-","-",-471816912,null),o,f);
});
/**
 * Add two operators. Produces an operator which adds the result of applying the
 *   given operators.
 */
emmy.operator.o_COLON__PLUS_ = (function emmy$operator$o_COLON__PLUS_(o,p){
var ctx = emmy.operator.joint_context(o,p);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(o))){
return emmy.operator.with_context(p,ctx);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.operator.with_context(o,ctx);
} else {
return emmy.operator.__GT_Operator((function() { 
var G__38090__delegate = function (xs){
return emmy.generic.add.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,xs),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p,xs));
};
var G__38090 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__38093__i = 0, G__38093__a = new Array(arguments.length -  0);
while (G__38093__i < G__38093__a.length) {G__38093__a[G__38093__i] = arguments[G__38093__i + 0]; ++G__38093__i;}
  xs = new cljs.core.IndexedSeq(G__38093__a,0,null);
} 
return G__38090__delegate.call(this,xs);};
G__38090.cljs$lang$maxFixedArity = 0;
G__38090.cljs$lang$applyTo = (function (arglist__38094){
var xs = cljs.core.seq(arglist__38094);
return G__38090__delegate(xs);
});
G__38090.cljs$core$IFn$_invoke$arity$variadic = G__38090__delegate;
return G__38090;
})()
,emmy.function$.joint_arity(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.function$.arity(o),emmy.function$.arity(p)], null)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(p),null,(1),null))], 0)))),ctx,null);

}
}
});
emmy.operator.f_PLUS_o = (function emmy$operator$f_PLUS_o(f,o){
return emmy.operator.combine_f_op(emmy.generic.add,new cljs.core.Symbol(null,"+","+",-740910886,null),f,o);
});
emmy.operator.o_PLUS_f = (function emmy$operator$o_PLUS_f(o,f){
return emmy.operator.combine_op_f(emmy.generic.add,new cljs.core.Symbol(null,"+","+",-740910886,null),o,f);
});
/**
 * Multiplication of operators is defined as their composition.
 */
emmy.operator.o_COLON__STAR_ = (function emmy$operator$o_COLON__STAR_(var_args){
var G__38039 = arguments.length;
switch (G__38039) {
case 0:
return emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.operator.identity;
}));

(emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return o;
}));

(emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2 = (function (o,p){
var ctx = emmy.operator.joint_context(o,p);
if(cljs.core.truth_(emmy.generic.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(o))){
return emmy.operator.with_context(p,ctx);
} else {
if(cljs.core.truth_(emmy.generic.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.operator.with_context(o,ctx);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(o))){
return emmy.operator.with_context(o,ctx);
} else {
return emmy.operator.__GT_Operator(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o,p], 0)),emmy.operator.arity(p),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(p),null,(1),null))], 0)))),ctx,null);

}
}
}
}));

(emmy.operator.o_COLON__STAR_.cljs$lang$maxFixedArity = 2);

/**
 * Multiply an operator by a non-operator on the left. The non-operator acts on
 *   its argument by multiplication.
 */
emmy.operator.f_STAR_o = (function emmy$operator$f_STAR_o(f,o){
return emmy.operator.__GT_Operator((function() { 
var G__38118__delegate = function (gs){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,gs));
};
var G__38118 = function (var_args){
var gs = null;
if (arguments.length > 0) {
var G__38120__i = 0, G__38120__a = new Array(arguments.length -  0);
while (G__38120__i < G__38120__a.length) {G__38120__a[G__38120__i] = arguments[G__38120__i + 0]; ++G__38120__i;}
  gs = new cljs.core.IndexedSeq(G__38120__a,0,null);
} 
return G__38118__delegate.call(this,gs);};
G__38118.cljs$lang$maxFixedArity = 0;
G__38118.cljs$lang$applyTo = (function (arglist__38122){
var gs = cljs.core.seq(arglist__38122);
return G__38118__delegate(gs);
});
G__38118.cljs$core$IFn$_invoke$arity$variadic = G__38118__delegate;
return G__38118;
})()
,emmy.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.operator.name(o),null,(1),null))], 0)))),emmy.operator.context(o),cljs.core.meta(o));
});
/**
 * Multiply an operator by a non-operator on the right. The non-operator acts on
 *   its argument by multiplication.
 */
emmy.operator.o_STAR_f = (function emmy$operator$o_STAR_f(o,f){
return emmy.operator.__GT_Operator((function() { 
var G__38124__delegate = function (gs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (g){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(f,g);
}),gs));
};
var G__38124 = function (var_args){
var gs = null;
if (arguments.length > 0) {
var G__38125__i = 0, G__38125__a = new Array(arguments.length -  0);
while (G__38125__i < G__38125__a.length) {G__38125__a[G__38125__i] = arguments[G__38125__i + 0]; ++G__38125__i;}
  gs = new cljs.core.IndexedSeq(G__38125__a,0,null);
} 
return G__38124__delegate.call(this,gs);};
G__38124.cljs$lang$maxFixedArity = 0;
G__38124.cljs$lang$applyTo = (function (arglist__38126){
var gs = cljs.core.seq(arglist__38126);
return G__38124__delegate(gs);
});
G__38124.cljs$core$IFn$_invoke$arity$variadic = G__38124__delegate;
return G__38124;
})()
,emmy.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(f),null,(1),null))], 0)))),emmy.operator.context(o),cljs.core.meta(o));
});
/**
 * Returns a new operator that multiplies the output of `o` by the inverse of
 *   `n`.
 */
emmy.operator.o_div_n = (function emmy$operator$o_div_n(o,n){
return emmy.operator.__GT_Operator((function() { 
var G__38127__delegate = function (gs){
return emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(o,gs));
};
var G__38127 = function (var_args){
var gs = null;
if (arguments.length > 0) {
var G__38128__i = 0, G__38128__a = new Array(arguments.length -  0);
while (G__38128__i < G__38128__a.length) {G__38128__a[G__38128__i] = arguments[G__38128__i + 0]; ++G__38128__i;}
  gs = new cljs.core.IndexedSeq(G__38128__a,0,null);
} 
return G__38127__delegate.call(this,gs);};
G__38127.cljs$lang$maxFixedArity = 0;
G__38127.cljs$lang$applyTo = (function (arglist__38129){
var gs = cljs.core.seq(arglist__38129);
return G__38127__delegate(gs);
});
G__38127.cljs$core$IFn$_invoke$arity$variadic = G__38127__delegate;
return G__38127;
})()
,emmy.operator.arity(o),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(o),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),emmy.operator.context(o),cljs.core.meta(o));
});
emmy.operator.commutator = (function emmy$operator$commutator(o,p){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(o,p),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p,o));
});
emmy.operator.anticommutator = (function emmy$operator$anticommutator(o,p){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(o,p),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p,o));
});
/**
 * Returns an operator represented by a Taylor series expansion of $e^x$, applied
 *   to `op`. This expanded series of operators is itself an operator that applies
 *   each element to its argument.
 * 
 *   Put another way: `(exp g)` to an operator g means forming the power series
 * 
 *   ```
 *   I + g + 1/2 g^2 + ... + 1/n! g^n
 *   ```
 * 
 *   where (as elsewhere) exponentiating the operator means `n`-fold composition.
 */
emmy.operator.exp = (function emmy$operator$exp(op){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.arity(op),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error((""+"Assert failed: "+"emmy.operator/exp"+"\n"+"(= (arity op) [:exactly 1])")));
}

return emmy.operator.__GT_Operator((emmy.series.exp_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.exp_series.cljs$core$IFn$_invoke$arity$1(op) : emmy.series.exp_series.call(null,op)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(op),null,(1),null))))),emmy.operator.context(op),cljs.core.meta(op));
});
/**
 * Similar to `exp`, but takes an optional argument `n` that defines an order for
 *   each term of the taylor series expansion.
 */
emmy.operator.expn = (function emmy$operator$expn(var_args){
var G__38042 = arguments.length;
switch (G__38042) {
case 1:
return emmy.operator.expn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.operator.expn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.operator.expn.cljs$core$IFn$_invoke$arity$1 = (function (op){
return emmy.operator.exp(op);
}));

(emmy.operator.expn.cljs$core$IFn$_invoke$arity$2 = (function (op,n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.arity(op),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error((""+"Assert failed: "+"emmy.operator/expn"+"\n"+"(= (arity op) [:exactly 1])")));
}

return emmy.operator.__GT_Operator(emmy.series.inflate((emmy.series.exp_series.cljs$core$IFn$_invoke$arity$1 ? emmy.series.exp_series.cljs$core$IFn$_invoke$arity$1(op) : emmy.series.exp_series.call(null,op)),n),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"exp","exp",1378825265,null),null,(1),null)),(new cljs.core.List(null,emmy.operator.name(op),null,(1),null))))),emmy.operator.context(op),cljs.core.meta(op));
}));

(emmy.operator.expn.cljs$lang$maxFixedArity = 2);

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744),new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495));
var seq__38043_38132 = cljs.core.seq(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.exp,emmy.series.exp_series,new cljs.core.Symbol(null,"exp","exp",1378825265,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.cos,emmy.series.cos_series,new cljs.core.Symbol(null,"cos","cos",-1452677493,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.sin,emmy.series.sin_series,new cljs.core.Symbol(null,"sin","sin",1721439389,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.tan,emmy.series.tan_series,new cljs.core.Symbol(null,"tan","tan",-1380825876,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.sec,emmy.series.sec_series,new cljs.core.Symbol(null,"sec","sec",60154974,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.acos,emmy.series.acos_series,new cljs.core.Symbol(null,"acos","acos",353741763,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.asin,emmy.series.asin_series,new cljs.core.Symbol(null,"asin","asin",-904130570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.atan,emmy.series.atan_series,new cljs.core.Symbol(null,"atan","atan",-1026550135,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.acot,emmy.series.acot_series,new cljs.core.Symbol(null,"acot","acot",1103016569,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.cosh,emmy.series.cosh_series,new cljs.core.Symbol(null,"cosh","cosh",-1962788142,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.sinh,emmy.series.sinh_series,new cljs.core.Symbol(null,"sinh","sinh",-990423302,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.tanh,emmy.series.tanh_series,new cljs.core.Symbol(null,"tanh","tanh",480481797,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.asinh,emmy.series.asinh_series,new cljs.core.Symbol(null,"asinh","asinh",-1398350397,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.atanh,emmy.series.atanh_series,new cljs.core.Symbol(null,"atanh","atanh",-1915750692,null)], null)], null));
var chunk__38044_38133 = null;
var count__38045_38134 = (0);
var i__38046_38135 = (0);
while(true){
if((i__38046_38135 < count__38045_38134)){
var vec__38053_38136 = chunk__38044_38133.cljs$core$IIndexed$_nth$arity$2(null,i__38046_38135);
var op_38137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053_38136,(0),null);
var f_38138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053_38136,(1),null);
var sym_38139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38053_38136,(2),null);
var assert_str_38140 = (""+"g/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_38139)+" :emmy.operator/operator");
op_38137.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),((function (seq__38043_38132,chunk__38044_38133,count__38045_38134,i__38046_38135,assert_str_38140,vec__38053_38136,op_38137,f_38138,sym_38139){
return (function (g){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.arity(g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(assert_str_38140)+"\n"+"(= (arity g) [:exactly 1])")));
}

return emmy.operator.__GT_Operator((f_38138.cljs$core$IFn$_invoke$arity$1 ? f_38138.cljs$core$IFn$_invoke$arity$1(g) : f_38138.call(null,g)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym_38139,null,(1),null)),(new cljs.core.List(null,emmy.operator.name(g),null,(1),null))))),emmy.operator.context(g),null);
});})(seq__38043_38132,chunk__38044_38133,count__38045_38134,i__38046_38135,assert_str_38140,vec__38053_38136,op_38137,f_38138,sym_38139))
);


var G__38141 = seq__38043_38132;
var G__38142 = chunk__38044_38133;
var G__38143 = count__38045_38134;
var G__38144 = (i__38046_38135 + (1));
seq__38043_38132 = G__38141;
chunk__38044_38133 = G__38142;
count__38045_38134 = G__38143;
i__38046_38135 = G__38144;
continue;
} else {
var temp__5825__auto___38145 = cljs.core.seq(seq__38043_38132);
if(temp__5825__auto___38145){
var seq__38043_38146__$1 = temp__5825__auto___38145;
if(cljs.core.chunked_seq_QMARK_(seq__38043_38146__$1)){
var c__5694__auto___38147 = cljs.core.chunk_first(seq__38043_38146__$1);
var G__38148 = cljs.core.chunk_rest(seq__38043_38146__$1);
var G__38149 = c__5694__auto___38147;
var G__38150 = cljs.core.count(c__5694__auto___38147);
var G__38151 = (0);
seq__38043_38132 = G__38148;
chunk__38044_38133 = G__38149;
count__38045_38134 = G__38150;
i__38046_38135 = G__38151;
continue;
} else {
var vec__38056_38152 = cljs.core.first(seq__38043_38146__$1);
var op_38153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056_38152,(0),null);
var f_38154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056_38152,(1),null);
var sym_38155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38056_38152,(2),null);
var assert_str_38156 = (""+"g/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_38155)+" :emmy.operator/operator");
op_38153.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),((function (seq__38043_38132,chunk__38044_38133,count__38045_38134,i__38046_38135,assert_str_38156,vec__38056_38152,op_38153,f_38154,sym_38155,seq__38043_38146__$1,temp__5825__auto___38145){
return (function (g){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.operator.arity(g),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(assert_str_38156)+"\n"+"(= (arity g) [:exactly 1])")));
}

return emmy.operator.__GT_Operator((f_38154.cljs$core$IFn$_invoke$arity$1 ? f_38154.cljs$core$IFn$_invoke$arity$1(g) : f_38154.call(null,g)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym_38155,null,(1),null)),(new cljs.core.List(null,emmy.operator.name(g),null,(1),null))))),emmy.operator.context(g),null);
});})(seq__38043_38132,chunk__38044_38133,count__38045_38134,i__38046_38135,assert_str_38156,vec__38056_38152,op_38153,f_38154,sym_38155,seq__38043_38146__$1,temp__5825__auto___38145))
);


var G__38157 = cljs.core.next(seq__38043_38146__$1);
var G__38158 = null;
var G__38159 = (0);
var G__38160 = (0);
seq__38043_38132 = G__38157;
chunk__38044_38133 = G__38158;
count__38045_38134 = G__38159;
i__38046_38135 = G__38160;
continue;
}
} else {
}
}
break;
}
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var temp__5823__auto__ = new cljs.core.Keyword(null,"zero?","zero?",-1314772630).cljs$core$IFn$_invoke$arity$1(o.context);
if(cljs.core.truth_(temp__5823__auto__)){
var z_fn = temp__5823__auto__;
return (z_fn.cljs$core$IFn$_invoke$arity$1 ? z_fn.cljs$core$IFn$_invoke$arity$1(o) : z_fn.call(null,o));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o.o,emmy.generic.zero_like);
}
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var temp__5823__auto__ = new cljs.core.Keyword(null,"one?","one?",146571376).cljs$core$IFn$_invoke$arity$1(o.context);
if(cljs.core.truth_(temp__5823__auto__)){
var one_fn = temp__5823__auto__;
return (one_fn.cljs$core$IFn$_invoke$arity$1 ? one_fn.cljs$core$IFn$_invoke$arity$1(o) : one_fn.call(null,o));
} else {
return false;
}
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var temp__5823__auto__ = new cljs.core.Keyword(null,"identity?","identity?",1589858878).cljs$core$IFn$_invoke$arity$1(o.context);
if(cljs.core.truth_(temp__5823__auto__)){
var id_fn = temp__5823__auto__;
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(o) : id_fn.call(null,o));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o.o,cljs.core.identity);
}
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var temp__5823__auto__ = new cljs.core.Keyword(null,"zero-like","zero-like",1759410522).cljs$core$IFn$_invoke$arity$1(o.context);
if(cljs.core.truth_(temp__5823__auto__)){
var z_fn = temp__5823__auto__;
return (z_fn.cljs$core$IFn$_invoke$arity$1 ? z_fn.cljs$core$IFn$_invoke$arity$1(o) : z_fn.call(null,o));
} else {
return (new emmy.operator.Operator(emmy.generic.zero_like,o.arity,new cljs.core.Symbol(null,"zero","zero",781566951,null),o.context,o.m));
}
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var temp__5823__auto__ = new cljs.core.Keyword(null,"one-like","one-like",887133720).cljs$core$IFn$_invoke$arity$1(o.context);
if(cljs.core.truth_(temp__5823__auto__)){
var one_fn = temp__5823__auto__;
return (one_fn.cljs$core$IFn$_invoke$arity$1 ? one_fn.cljs$core$IFn$_invoke$arity$1(o) : one_fn.call(null,o));
} else {
return (new emmy.operator.Operator(cljs.core.identity,o.arity,new cljs.core.Symbol(null,"identity","identity",-1007039734,null),o.context,o.m));
}
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var temp__5823__auto__ = new cljs.core.Keyword(null,"identity-like","identity-like",-98546347).cljs$core$IFn$_invoke$arity$1(o.context);
if(cljs.core.truth_(temp__5823__auto__)){
var id_fn = temp__5823__auto__;
return (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(o) : id_fn.call(null,o));
} else {
return (new emmy.operator.Operator(cljs.core.identity,o.arity,new cljs.core.Symbol(null,"identity","identity",-1007039734,null),o.context,o.m));
}
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
var G__38059 = emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(o.name);
return (emmy.operator.simplify_operator_name.cljs$core$IFn$_invoke$arity$1 ? emmy.operator.simplify_operator_name.cljs$core$IFn$_invoke$arity$1(G__38059) : emmy.operator.simplify_operator_name.call(null,G__38059));
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o,p){
return emmy.operator.o_COLON__PLUS_(o,p);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495)], null),(function (o,f){
return emmy.operator.o_PLUS_f(o,f);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (f,o){
return emmy.operator.f_PLUS_o(f,o);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
return emmy.operator.negate(o);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o,p){
return emmy.operator.o_COLON__(o,p);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495)], null),(function (o,f){
return emmy.operator.o_f(o,f);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (f,o){
return emmy.operator.f_o(f,o);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o,p){
return emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,p);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495)], null),(function (o,f){
return emmy.operator.o_STAR_f(o,f);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (f,o){
return emmy.operator.f_STAR_o(f,o);
}));
emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
return emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,o);
}));
emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (o){
return emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,emmy.operator.o_COLON__STAR_.cljs$core$IFn$_invoke$arity$2(o,o));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (o,n){
if(cljs.core.not(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(n))){
} else {
throw (new Error("Assert failed: (not (g/negative? n))"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(emmy.operator.o_COLON__STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,o));
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (o,n){
return emmy.operator.o_div_n(o,n);
}));
emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (o,n){
return emmy.operator.o_div_n(o,n);
}));
emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (n,o){
return emmy.operator.o_div_n(o,n);
}));

//# sourceMappingURL=emmy.operator.js.map
