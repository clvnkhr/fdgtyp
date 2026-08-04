goog.provide('emmy.structure');
goog.scope(function(){
  emmy.structure.goog$module$goog$object = goog.module.get('goog.object');
});
emmy.structure._STAR_allow_incompatible_multiplication_STAR_ = true;
emmy.structure.orientation__GT_symbol = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Symbol(null,"up","up",1370819414,null),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Symbol(null,"down","down",-1089190199,null)], null);
emmy.structure.symbol_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"up","up",1370819414,null),null,new cljs.core.Symbol(null,"down","down",-1089190199,null),null], null), null);
emmy.structure.orientation__GT_separator = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),"\u2191",new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),"_"], null);
emmy.structure.opposite_orientation = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector,new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(Array,new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.function","cofunction","emmy.function/cofunction",-944520219));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.operator","co-operator","emmy.operator/co-operator",-99060495));
/**
 * Returns `1` if `i`== `j`, `0` otherwise.
 */
emmy.structure.kronecker = (function emmy$structure$kronecker(i,j){
if((i === j)){
return (1);
} else {
return (0);
}
});
/**
 * Returns a basis sequence of `n` 0s, with `1` in the `i`th position.
 * 
 *   If `n` is not supplied returns an infinite sequence.
 */
emmy.structure.basis_unit = (function emmy$structure$basis_unit(var_args){
var G__38062 = arguments.length;
switch (G__38062) {
case 1:
return emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$1 = (function (i){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(emmy.structure.kronecker,i),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));

(emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$2 = (function (n,i){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,emmy.structure.basis_unit.cljs$core$IFn$_invoke$arity$1(i));
}));

(emmy.structure.basis_unit.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.IFind}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {emmy.function$.IArity}
 * @implements {cljs.core.IReduce}
*/
emmy.structure.Structure = (function (orientation,v,m){
this.orientation = orientation;
this.v = v;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2310931231;
this.cljs$lang$protocol_mask$partition1$ = 131072;
});
(emmy.structure.Structure.prototype.cljs$core$IFind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.structure.Structure.prototype.cljs$core$IFind$_find$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._find(self__.v,n);
}));

(emmy.structure.Structure.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.orientation.cljs$core$IFn$_invoke$arity$1 ? self__.orientation.cljs$core$IFn$_invoke$arity$1(emmy.structure.orientation__GT_symbol) : self__.orientation.call(null,emmy.structure.orientation__GT_symbol)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,self__.v)))+")");
}));

(emmy.structure.Structure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k);
}));

(emmy.structure.Structure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._lookup(self__.v,k,not_found);
}));

(emmy.structure.Structure.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.v,f,init);
}));

(emmy.structure.Structure.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n);
}));

(emmy.structure.Structure.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core._nth(self__.v,n,not_found);
}));

(emmy.structure.Structure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(emmy.structure.Structure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._iterator(self__.v);
}));

(emmy.structure.Structure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.structure.Structure.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.v);
}));

(emmy.structure.Structure.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._rseq(self__.v);
}));

(emmy.structure.Structure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.structure.s_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.s_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.structure.s_COLON__EQ_.call(null,this$__$1,that));
}));

(emmy.structure.Structure.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.PersistentVector.EMPTY,self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce(self__.v,f);
}));

(emmy.structure.Structure.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,start){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce(self__.v,f,start);
}));

(emmy.structure.Structure.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.structure.Structure.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.orientation;
}));

(emmy.structure.Structure.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.structure.Structure.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return emmy.function$.seq_arity(self__.v);
}));

(emmy.structure.Structure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,entry){
var self__ = this;
var ___$1 = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core._assoc(self__.v,k,entry),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.v,k);
}));

(emmy.structure.Structure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._seq(self__.v);
}));

(emmy.structure.Structure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m__$1){
var self__ = this;
var ___$1 = this;
return (new emmy.structure.Structure(self__.orientation,self__.v,m__$1));
}));

(emmy.structure.Structure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core._conj(self__.v,item),self__.m));
}));

(emmy.structure.Structure.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__38121 = (arguments.length - (1));
switch (G__38121) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
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

(emmy.structure.Structure.prototype.apply = (function (self__,args38110){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38110)));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38088_SHARP_){
return (p1__38088_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__38088_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__38088_SHARP_.call(null));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38089_SHARP_){
return (p1__38089_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38089_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__38089_SHARP_.call(null,a));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38090_SHARP_){
return (p1__38090_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__38090_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__38090_SHARP_.call(null,a,b));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38091_SHARP_){
return (p1__38091_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__38091_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__38091_SHARP_.call(null,a,b,c));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38092_SHARP_){
return (p1__38092_SHARP_.cljs$core$IFn$_invoke$arity$4 ? p1__38092_SHARP_.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : p1__38092_SHARP_.call(null,a,b,c,d));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38093_SHARP_){
return (p1__38093_SHARP_.cljs$core$IFn$_invoke$arity$5 ? p1__38093_SHARP_.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : p1__38093_SHARP_.call(null,a,b,c,d,e));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38094_SHARP_){
return (p1__38094_SHARP_.cljs$core$IFn$_invoke$arity$6 ? p1__38094_SHARP_.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f) : p1__38094_SHARP_.call(null,a,b,c,d,e,f));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38095_SHARP_){
return (p1__38095_SHARP_.cljs$core$IFn$_invoke$arity$7 ? p1__38095_SHARP_.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g) : p1__38095_SHARP_.call(null,a,b,c,d,e,f,g));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38096_SHARP_){
return (p1__38096_SHARP_.cljs$core$IFn$_invoke$arity$8 ? p1__38096_SHARP_.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h) : p1__38096_SHARP_.call(null,a,b,c,d,e,f,g,h));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38097_SHARP_){
return (p1__38097_SHARP_.cljs$core$IFn$_invoke$arity$9 ? p1__38097_SHARP_.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,i) : p1__38097_SHARP_.call(null,a,b,c,d,e,f,g,h,i));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38098_SHARP_){
return (p1__38098_SHARP_.cljs$core$IFn$_invoke$arity$10 ? p1__38098_SHARP_.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,i,j) : p1__38098_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38099_SHARP_){
return (p1__38099_SHARP_.cljs$core$IFn$_invoke$arity$11 ? p1__38099_SHARP_.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f,g,h,i,j,k) : p1__38099_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38100_SHARP_){
return (p1__38100_SHARP_.cljs$core$IFn$_invoke$arity$12 ? p1__38100_SHARP_.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,i,j,k,l) : p1__38100_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38101_SHARP_){
return (p1__38101_SHARP_.cljs$core$IFn$_invoke$arity$13 ? p1__38101_SHARP_.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,i,j,k,l,m_arg) : p1__38101_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38102_SHARP_){
return (p1__38102_SHARP_.cljs$core$IFn$_invoke$arity$14 ? p1__38102_SHARP_.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n) : p1__38102_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38103_SHARP_){
return (p1__38103_SHARP_.cljs$core$IFn$_invoke$arity$15 ? p1__38103_SHARP_.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o) : p1__38103_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38104_SHARP_){
return (p1__38104_SHARP_.cljs$core$IFn$_invoke$arity$16 ? p1__38104_SHARP_.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p) : p1__38104_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38105_SHARP_){
return (p1__38105_SHARP_.cljs$core$IFn$_invoke$arity$17 ? p1__38105_SHARP_.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q) : p1__38105_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38106_SHARP_){
return (p1__38106_SHARP_.cljs$core$IFn$_invoke$arity$18 ? p1__38106_SHARP_.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r) : p1__38106_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38107_SHARP_){
return (p1__38107_SHARP_.cljs$core$IFn$_invoke$arity$19 ? p1__38107_SHARP_.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s) : p1__38107_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38108_SHARP_){
return (p1__38108_SHARP_.cljs$core$IFn$_invoke$arity$20 ? p1__38108_SHARP_.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t) : p1__38108_SHARP_.call(null,a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.structure.Structure(self__.orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38109_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(p1__38109_SHARP_,a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f,g,h,i,j,k,l,m_arg,n,o,p,q,r,s,t,rest], 0));
}),self__.v),self__.m));
}));

(emmy.structure.Structure.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.structure.Structure.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__38162 = (function (p1__38063_SHARP_){
return emmy.dual.replace_tag(p1__38063_SHARP_,old,new$);
});
var G__38163 = s__$1;
return (emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2(G__38162,G__38163) : emmy.structure.mapr.call(null,G__38162,G__38163));
}));

(emmy.structure.Structure.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__38164 = (function (p1__38064_SHARP_){
return emmy.dual.extract_tangent(p1__38064_SHARP_,tag,mode);
});
var G__38165 = s__$1;
return (emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2(G__38164,G__38165) : emmy.structure.mapr.call(null,G__38164,G__38165));
}));

(emmy.structure.Structure.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__38166 = (function (p1__38065_SHARP_){
return emmy.dual.extract_id(p1__38065_SHARP_,id);
});
var G__38167 = s__$1;
return (emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2(G__38166,G__38167) : emmy.structure.mapr.call(null,G__38166,G__38167));
}));

(emmy.structure.Structure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orientation","orientation",-2030878190,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.structure.Structure.cljs$lang$type = true);

(emmy.structure.Structure.cljs$lang$ctorStr = "emmy.structure/Structure");

(emmy.structure.Structure.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.structure/Structure");
}));

/**
 * Positional factory function for emmy.structure/Structure.
 */
emmy.structure.__GT_Structure = (function emmy$structure$__GT_Structure(orientation,v,m){
return (new emmy.structure.Structure(orientation,v,m));
});

/**
 * Using a proxy object, equip the given object `s` with a property-get method,
 *    which will allow bracket notation `s[x]` to be used with the object. In the
 *    event the index looks like an integer, we delegate to the underlying vector.
 *    If the property `length` is requested, we return the vector length.
 */
emmy.structure.make_es6_indexable = (function emmy$structure$make_es6_indexable(s){
return (new Proxy(s,({"get": (function (s__$1,ix){
if(typeof ix === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ix,"length")){
return cljs.core.count(s__$1.v);
} else {
var i = parseInt(ix);
if(cljs.core.not(isNaN(i))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1.v,parseInt(ix));
} else {
return emmy.structure.goog$module$goog$object.get(s__$1,ix);
}
}
} else {
if(typeof ix === 'number'){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$1.v,ix);
} else {
return emmy.structure.goog$module$goog$object.get(s__$1,ix);

}
}
})})));
});
(emmy.structure.Structure.prototype[cljs.core.ITER_SYMBOL] = (function (){
var this__5824__auto__ = this;
return cljs.core.es6_iterator(this__5824__auto__);
}));

(emmy.structure.Structure.prototype.map = (function (f){
var s = this;
return (emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.mapr.cljs$core$IFn$_invoke$arity$2(f,s) : emmy.structure.mapr.call(null,f,s));
}));

(emmy.structure.Structure.prototype.at = (function (ix){
var s = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s.v,ix);
}));
/**
 * Return the structure `s` in unoriented vector form.
 */
emmy.structure.structure__GT_vector = (function emmy$structure$structure__GT_vector(s){
if(cljs.core.vector_QMARK_(s)){
return s;
} else {
if((s instanceof emmy.structure.Structure)){
return s.v;
} else {
return emmy.util.illegal((""+"non-structure supplied: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));

}
}
});
/**
 * Returns the orientation of `s`, either `::up` or `::down`. Defaults to `::up`,
 *   even for non-structures.
 */
emmy.structure.orientation = (function emmy$structure$orientation(s){
if((s instanceof emmy.structure.Structure)){
return s.orientation;
} else {
return new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384);
}
});
/**
 * Returns the count for sequential `s`, `1` otherwise.
 */
emmy.structure.s_COLON_count = (function emmy$structure$s_COLON_count(s){
if(cljs.core.sequential_QMARK_(s)){
return cljs.core.count(s);
} else {
return (1);
}
});
/**
 * If `s` is sequential, returns its dimension, i.e., the total number of
 *   non-sequential entries in the structure. Else, returns 1.
 */
emmy.structure.dimension = (function emmy$structure$dimension(s){
if(cljs.core.sequential_QMARK_(s)){
return cljs.core.count(cljs.core.flatten(s));
} else {
return (1);
}
});
/**
 * Structure-specific version of `nth`; acts as [[clojure.core/nth]] for
 *   structural things.
 * 
 *   For non-sequential things, if `i` is `0`, acts as identity. Throws otherwise.
 */
emmy.structure.s_COLON_nth = (function emmy$structure$s_COLON_nth(s,i){
if(cljs.core.sequential_QMARK_(s)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return s;
} else {
return emmy.util.illegal((""+"non-sequential s:nth not supported: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+" with index != 0: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)));

}
}
});
/**
 * Given an access chain (a sequence of indices), return a function that accepts a
 *   structure and returns the element at the specified access chain.
 */
emmy.structure.component = (function emmy$structure$component(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38260 = arguments.length;
var i__5898__auto___38261 = (0);
while(true){
if((i__5898__auto___38261 < len__5897__auto___38260)){
args__5903__auto__.push((arguments[i__5898__auto___38261]));

var G__38262 = (i__5898__auto___38261 + (1));
i__5898__auto___38261 = G__38262;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.structure.component.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.structure.component.cljs$core$IFn$_invoke$arity$variadic = (function (indices){
return (function (p1__38168_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38168_SHARP_,indices);
});
}));

(emmy.structure.component.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.structure.component.cljs$lang$applyTo = (function (seq38169){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38169));
}));

emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (_,___$1){
return false;
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (_,___$1){
return false;
}));
cljs.core.prefer_method(emmy.value._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null));
cljs.core.prefer_method(emmy.value._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null));
var seq__38170_38264 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null));
var chunk__38171_38265 = null;
var count__38172_38266 = (0);
var i__38173_38267 = (0);
while(true){
if((i__38173_38267 < count__38172_38266)){
var kind_38268 = chunk__38171_38265.cljs$core$IIndexed$_nth$arity$2(null,i__38173_38267);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (s){
return cljs.core.every_QMARK_(emmy.generic.zero_QMARK_,s);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (_){
return false;
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (_){
return false;
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (s){
return (new emmy.structure.Structure(s.orientation,emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(s.v),s.m));
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (_){
return (1);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (_){
return (1);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (s){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,s.v);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38268], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268){
return (function (s){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(function (){var fexpr__38176 = s.orientation;
return (fexpr__38176.cljs$core$IFn$_invoke$arity$1 ? fexpr__38176.cljs$core$IFn$_invoke$arity$1(emmy.structure.orientation__GT_symbol) : fexpr__38176.call(null,emmy.structure.orientation__GT_symbol));
})(),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,s.v))));
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38268))
);


var G__38270 = seq__38170_38264;
var G__38271 = chunk__38171_38265;
var G__38272 = count__38172_38266;
var G__38273 = (i__38173_38267 + (1));
seq__38170_38264 = G__38270;
chunk__38171_38265 = G__38271;
count__38172_38266 = G__38272;
i__38173_38267 = G__38273;
continue;
} else {
var temp__5825__auto___38274 = cljs.core.seq(seq__38170_38264);
if(temp__5825__auto___38274){
var seq__38170_38275__$1 = temp__5825__auto___38274;
if(cljs.core.chunked_seq_QMARK_(seq__38170_38275__$1)){
var c__5694__auto___38277 = cljs.core.chunk_first(seq__38170_38275__$1);
var G__38278 = cljs.core.chunk_rest(seq__38170_38275__$1);
var G__38279 = c__5694__auto___38277;
var G__38280 = cljs.core.count(c__5694__auto___38277);
var G__38281 = (0);
seq__38170_38264 = G__38278;
chunk__38171_38265 = G__38279;
count__38172_38266 = G__38280;
i__38173_38267 = G__38281;
continue;
} else {
var kind_38282 = cljs.core.first(seq__38170_38275__$1);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (s){
return cljs.core.every_QMARK_(emmy.generic.zero_QMARK_,s);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (_){
return false;
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (_){
return false;
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (s){
return (new emmy.structure.Structure(s.orientation,emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(s.v),s.m));
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (_){
return (1);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (_){
return (1);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (s){
return cljs.core.every_QMARK_(emmy.generic.exact_QMARK_,s.v);
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);

emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_38282], null),((function (seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274){
return (function (s){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,(function (){var fexpr__38177 = s.orientation;
return (fexpr__38177.cljs$core$IFn$_invoke$arity$1 ? fexpr__38177.cljs$core$IFn$_invoke$arity$1(emmy.structure.orientation__GT_symbol) : fexpr__38177.call(null,emmy.structure.orientation__GT_symbol));
})(),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,s.v))));
});})(seq__38170_38264,chunk__38171_38265,count__38172_38266,i__38173_38267,kind_38282,seq__38170_38275__$1,temp__5825__auto___38274))
);


var G__38283 = cljs.core.next(seq__38170_38275__$1);
var G__38284 = null;
var G__38285 = (0);
var G__38286 = (0);
seq__38170_38264 = G__38283;
chunk__38171_38265 = G__38284;
count__38172_38266 = G__38285;
i__38173_38267 = G__38286;
continue;
}
} else {
}
}
break;
}
/**
 * Returns true if the supplied structure `this` is equal to the argument on the
 *   right, false otherwise.
 * 
 *   Structures are equal to:
 * 
 *   - other structures that are deep-equal, including orientation
 *   - other sequences (only for `::up` structures) - the outer sequence is treated
 *  as an `::up` structure
 */
emmy.structure.s_COLON__EQ_ = (function emmy$structure$s_COLON__EQ_(this$,that){
if((that instanceof emmy.structure.Structure)){
var s = that;
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.orientation,s.orientation);
if(and__5160__auto__){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,s.v);
} else {
return and__5160__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.orientation,new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384))){
if(cljs.core.vector_QMARK_(that)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,that);
} else {
if(cljs.core.truth_(cljs.core.seqable_QMARK_(that))){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(this$),cljs.core.seq(that));
} else {
return false;

}
}
} else {
return false;

}
}
});
/**
 * Returns `true` if `s` is a structure, false otherwise. (Vectors are treated as
 *   up structures.)
 */
emmy.structure.structure_QMARK_ = (function emmy$structure$structure_QMARK_(s){
return (((s instanceof emmy.structure.Structure)) || (cljs.core.vector_QMARK_(s)));
});
/**
 * Returns `true` if `s` is an `up` structure, false otherwise.
 */
emmy.structure.up_QMARK_ = (function emmy$structure$up_QMARK_(s){
return ((cljs.core.vector_QMARK_(s)) || ((((s instanceof emmy.structure.Structure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),s.orientation)))));
});
/**
 * Returns `true` if `s` is a `down` structure, false otherwise.
 */
emmy.structure.down_QMARK_ = (function emmy$structure$down_QMARK_(s){
return (((s instanceof emmy.structure.Structure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),s.orientation)));
});
/**
 * Returns true if the supplied orientation lives in the set of allowed
 *   orientations, false otherwise.
 */
emmy.structure.valid_orientation_QMARK_ = (function emmy$structure$valid_orientation_QMARK_(o){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),null,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),null], null), null),o);
});
/**
 * Returns true if the supplied structures have the same orientation, false
 *   otherwise.
 */
emmy.structure.same_orientation_QMARK_ = (function emmy$structure$same_orientation_QMARK_(s,t){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.structure.orientation(s),emmy.structure.orientation(t));
});
/**
 * Given an `up` or `down` structure containing structures of the same
 *   orientation and size (a 2 tensor), returns a dictionary with keys:
 * 
 *   ```clj
 *   {:outer-orientation <::up or ::down>
 * :inner-orientation <::up or ::down>
 * :outer-size <int>
 * :inner-size <int>}
 * 
 *   If `s` is _not_ a valid tensor, returns nil.
 *   ```
 */
emmy.structure.two_tensor_info = (function emmy$structure$two_tensor_info(s){
var outer_size = cljs.core.count(s);
var outer_orientation = emmy.structure.orientation(s);
var inner_sizes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__38178_SHARP_){
if(emmy.structure.structure_QMARK_(p1__38178_SHARP_)){
return cljs.core.count(p1__38178_SHARP_);
} else {
return (1);
}
})),s);
var inner_orientations = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.structure.orientation),s);
if(((cljs.core.every_QMARK_(emmy.structure.structure_QMARK_,s)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(inner_orientations))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(inner_sizes))))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outer-orientation","outer-orientation",-985566313),outer_orientation,new cljs.core.Keyword(null,"inner-orientation","inner-orientation",-728775897),cljs.core.first(inner_orientations),new cljs.core.Keyword(null,"outer-size","outer-size",705588000),outer_size,new cljs.core.Keyword(null,"inner-size","inner-size",755766819),cljs.core.first(inner_sizes)], null);
} else {
return null;
}
});
/**
 * Given `outer` and `inner` orientations, returns a function of a structure `s`
 *   that returns true if `s` is a two tensor whose `inner` and `outer`
 *   orientations match the supplied arguments, false otherwise.
 */
emmy.structure.tensor_pred = (function emmy$structure$tensor_pred(outer,inner){
return (function (s){
return cljs.core.boolean$((function (){var temp__5825__auto__ = emmy.structure.two_tensor_info(s);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(outer,new cljs.core.Keyword(null,"outer-orientation","outer-orientation",-985566313).cljs$core$IFn$_invoke$arity$1(m))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inner,new cljs.core.Keyword(null,"inner-orientation","inner-orientation",-728775897).cljs$core$IFn$_invoke$arity$1(m))));
} else {
return null;
}
})());
});
});
/**
 * Returns true if `s` is an `up` or `down` structure containing all `up` or
 *   `down` structures of internally-matching orientation and size, false
 *   otherwise.
 */
emmy.structure.two_tensor_QMARK_ = (function emmy$structure$two_tensor_QMARK_(s){
return cljs.core.boolean$(emmy.structure.two_tensor_info(s));
});
/**
 * Returns true if `s` is a `down` structure containing all `down` structures of
 *   the same size, false otherwise.
 */
emmy.structure.two_down_QMARK_ = emmy.structure.tensor_pred(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711));
/**
 * Returns true if `s` is an `up` structure containing all `up` structures of the
 *   same size, false otherwise.
 */
emmy.structure.two_up_QMARK_ = emmy.structure.tensor_pred(new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384));
/**
 * Returns true if `s` is an `up` structure containing all `down` structures of
 *   the same size, false otherwise.
 */
emmy.structure.up_of_downs_QMARK_ = emmy.structure.tensor_pred(new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711));
/**
 * Returns true if `s` is a `down` structure containing all `up` structures of
 *   the same size, false otherwise.
 */
emmy.structure.down_of_ups_QMARK_ = emmy.structure.tensor_pred(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384));
/**
 * Generate a structure with the supplied orientation, given some sequence `xs`
 */
emmy.structure.make = (function emmy$structure$make(orientation,xs){
var xs__$1 = ((cljs.core.vector_QMARK_(xs))?xs:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,xs));
return emmy.structure.__GT_Structure(orientation,xs__$1,null);
});
/**
 * Construct an up (contravariant) tuple from the supplied sequence. For a
 *   variadic version, see [[up]].
 */
emmy.structure.up_STAR_ = (function emmy$structure$up_STAR_(xs){
return emmy.structure.make(new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),xs);
});
/**
 * Form an up-tuple from a vector.
 * 
 *   NOTE that this is an alias of [[up*]] that is more restrictive, in that it
 *   only accepts a vector. Use [[up*]] if you'd like to pass an arbitrary
 *   sequence. (If you pass a vector to [[up*]]) it will be just as efficient.
 */
emmy.structure.vector__GT_up = (function emmy$structure$vector__GT_up(v){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

return emmy.structure.__GT_Structure(new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),v,null);
});
/**
 * Construct an up (contravariant) tuple from the arguments.
 * 
 *   Variadic version of [[up*]].
 */
emmy.structure.up = (function emmy$structure$up(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38300 = arguments.length;
var i__5898__auto___38301 = (0);
while(true){
if((i__5898__auto___38301 < len__5897__auto___38300)){
args__5903__auto__.push((arguments[i__5898__auto___38301]));

var G__38302 = (i__5898__auto___38301 + (1));
i__5898__auto___38301 = G__38302;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return emmy.structure.up_STAR_(xs);
}));

(emmy.structure.up.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.structure.up.cljs$lang$applyTo = (function (seq38179){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38179));
}));

/**
 * Construct a down (covariant) tuple from the supplied sequence. For a
 *   variadic version, see [[down]].
 */
emmy.structure.down_STAR_ = (function emmy$structure$down_STAR_(xs){
return emmy.structure.make(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),xs);
});
/**
 * Form a down-tuple from a vector.
 * 
 *   NOTE that this is an alias of [[down*]] that is more restrictive, in that it
 *   only accepts a vector. Use [[down*]] if you'd like to pass an arbitrary
 *   sequence. (If you pass a vector to [[down*]]) it will be just as efficient.
 */
emmy.structure.vector__GT_down = (function emmy$structure$vector__GT_down(v){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

return emmy.structure.__GT_Structure(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),v,null);
});
/**
 * Construct a down (covariant) tuple from the arguments. Variadic version
 *   of [[down*]].
 */
emmy.structure.down = (function emmy$structure$down(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38307 = arguments.length;
var i__5898__auto___38308 = (0);
while(true){
if((i__5898__auto___38308 < len__5897__auto___38307)){
args__5903__auto__.push((arguments[i__5898__auto___38308]));

var G__38309 = (i__5898__auto___38308 + (1));
i__5898__auto___38308 = G__38309;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.structure.down.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.structure.down.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return emmy.structure.make(new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),xs);
}));

(emmy.structure.down.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.structure.down.cljs$lang$applyTo = (function (seq38180){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38180));
}));

/**
 * Returns a structure containing `xs` with the same orientation as `s`.
 */
emmy.structure.same = (function emmy$structure$same(s,xs){
return emmy.structure.make(emmy.structure.orientation(s),xs);
});
/**
 * For a non-[[Structure]] `s`, the single-arity case acts as [[identity]]. For
 *   a [[Structure]], returns an identical structure with its orientation
 *   reversed (up becomes down, down becomes up).
 * 
 *   NOTE that a vector is interpreted as an `up` structure, so:
 * 
 *   (opposite [1 2 3])
 *   ;;=> (down 1 2 3)
 * 
 *   The two-arity case returns a new [[Structure]] of opposite orientation to `s`
 *   with the contents of the sequence `xs`.
 */
emmy.structure.opposite = (function emmy$structure$opposite(var_args){
var G__38182 = arguments.length;
switch (G__38182) {
case 1:
return emmy.structure.opposite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.structure.opposite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.structure.opposite.cljs$core$IFn$_invoke$arity$1 = (function (s){
if(emmy.structure.structure_QMARK_(s)){
return emmy.structure.opposite.cljs$core$IFn$_invoke$arity$2(s,emmy.structure.structure__GT_vector(s));
} else {
return s;
}
}));

(emmy.structure.opposite.cljs$core$IFn$_invoke$arity$2 = (function (s,xs){
var o = (function (){var G__38183 = emmy.structure.orientation(s);
return (emmy.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1 ? emmy.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1(G__38183) : emmy.structure.opposite_orientation.call(null,G__38183));
})();
return emmy.structure.make(o,xs);
}));

(emmy.structure.opposite.cljs$lang$maxFixedArity = 2);

/**
 * Generate a structure with the given `orientation` whose elements are
 * 
 *   (f i)
 * 
 *   where i ranges from `[0..dimension)`.
 */
emmy.structure.generate = (function emmy$structure$generate(dimension,orientation,f){
if(emmy.structure.valid_orientation_QMARK_(orientation)){
} else {
throw (new Error("Assert failed: (valid-orientation? orientation)"));
}

return emmy.structure.__GT_Structure(orientation,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$1(dimension)),null);
});
/**
 * Generates a structure of the specified `orientation` and dimension `size`
 *   populated by symbolic entries, each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   (= (literal 'x 3 ::s/up)
 *   (up 'x↑0 'x↑1 'x↑2))
 * 
 *   See [[literal-up]] and [[literal-down]] for constructors with baked in
 *   orientations.
 */
emmy.structure.literal = (function emmy$structure$literal(sym,size,orientation){
if(emmy.structure.valid_orientation_QMARK_(orientation)){
} else {
throw (new Error("Assert failed: (valid-orientation? orientation)"));
}

var separator = (emmy.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1 ? emmy.structure.orientation__GT_separator.cljs$core$IFn$_invoke$arity$1(orientation) : emmy.structure.orientation__GT_separator.call(null,orientation));
var prefix = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator));
return emmy.structure.generate(size,orientation,(function (i){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)));
}));
});
/**
 * Generates an `up` structure of dimension `size` populated by symbolic entries,
 *   each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-up 'x 3)
 *   (up 'x↑0 'x↑1 'x↑2))
 *   ```
 */
emmy.structure.literal_up = (function emmy$structure$literal_up(sym,size){
return emmy.structure.literal(sym,size,new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384));
});
/**
 * Generates a `down` structure of dimension `size` populated by symbolic entries,
 *   each prefixed by the supplied symbol `sym`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (literal-down 'x 3)
 *   (down 'x_0 'x_1 'x_2))
 *   ```
 */
emmy.structure.literal_down = (function emmy$structure$literal_down(sym,size){
return emmy.structure.literal(sym,size,new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711));
});
/**
 * Returns the sum of all values generated by mapping `f` across the same-indexed
 *   entries of all supplied structures, one level deep.
 */
emmy.structure.sum_COLON_l = (function emmy$structure$sum_COLON_l(f,p__38185){
var vec__38186 = p__38185;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38186,(0),null);
var structs = vec__38186;
var G__38189 = (function (i){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38184_SHARP_){
return emmy.structure.s_COLON_nth(p1__38184_SHARP_,i);
}),structs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
});
var G__38190 = (0);
var G__38191 = cljs.core.count(s);
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__38189,G__38190,G__38191) : emmy.util.aggregate.generic_sum.call(null,G__38189,G__38190,G__38191));
});
/**
 * Accepts a function `f` and a sequence of isomorphic `structures`; returns the
 *   sum of the values returned from applying `f` to each associated set of entries
 *   in each input structure.
 */
emmy.structure.sum_COLON_r_COLON_l = (function emmy$structure$sum_COLON_r_COLON_l(f,structures){
return emmy.structure.sum_COLON_l((function() { 
var G__38324__delegate = function (elements){
if(emmy.structure.structure_QMARK_(cljs.core.first(elements))){
return (emmy.structure.sum_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.sum_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2(f,elements) : emmy.structure.sum_COLON_r_COLON_l.call(null,f,elements));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,elements);
}
};
var G__38324 = function (var_args){
var elements = null;
if (arguments.length > 0) {
var G__38325__i = 0, G__38325__a = new Array(arguments.length -  0);
while (G__38325__i < G__38325__a.length) {G__38325__a[G__38325__i] = arguments[G__38325__i + 0]; ++G__38325__i;}
  elements = new cljs.core.IndexedSeq(G__38325__a,0,null);
} 
return G__38324__delegate.call(this,elements);};
G__38324.cljs$lang$maxFixedArity = 0;
G__38324.cljs$lang$applyTo = (function (arglist__38326){
var elements = cljs.core.seq(arglist__38326);
return G__38324__delegate(elements);
});
G__38324.cljs$core$IFn$_invoke$arity$variadic = G__38324__delegate;
return G__38324;
})()
,structures);
});
/**
 * Given some function `f` and any number of isomorphic `structures`,
 *   returns the sum of the results of applying `f` to each associated set of
 *   entries in each `structure`.
 */
emmy.structure.sumr = (function emmy$structure$sumr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38329 = arguments.length;
var i__5898__auto___38330 = (0);
while(true){
if((i__5898__auto___38330 < len__5897__auto___38329)){
args__5903__auto__.push((arguments[i__5898__auto___38330]));

var G__38331 = (i__5898__auto___38330 + (1));
i__5898__auto___38330 = G__38331;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.structure.sumr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.structure.sumr.cljs$core$IFn$_invoke$arity$variadic = (function (f,structures){
return emmy.structure.sum_COLON_r_COLON_l(f,structures);
}));

(emmy.structure.sumr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.structure.sumr.cljs$lang$applyTo = (function (seq38192){
var G__38193 = cljs.core.first(seq38192);
var seq38192__$1 = cljs.core.next(seq38192);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38193,seq38192__$1);
}));

/**
 * Returns the result of accumulating all non-structural entries in `s` using the
 *   supplied fold function `f` into the optional accumulator `init` (defaults
 *   to `(f)`).
 * 
 *   `f` must be a 2-argument fn of type `(accumulator, [x chain orientations]) =>
 *   accumulator` responsible for merging some value `x` into the ongoing
 *   accumulation. The second argument is a 3-vector containing
 * 
 *   - the entry in the structure
 *   - a vector of its 'access chain', i.e., the path you'd pass
 *  to [[clojure.core/get-in]] to access the entry
 *   - a vector of orientations associated with each index in the access chain
 * 
 *   `f` should return a new instance of the accumulator.
 * 
 *   Additional arities allow you to supply
 * 
 *   - `init`, the initial (empty) accumulator (defaults to `(f)`)
 *   - `present`, a function that will be applied to the final, aggregated
 *  result (defaults to `f`)
 * 
 *   For example:
 * 
 *   ```clojure
 *   (fold-chain
 *  (fn ([] [])
 *   ([acc] acc)
 *   ([acc [s chain orientations]]
 *    (conj acc {:s s
 *               :chain chain
 *               :orientations orientations})))
 *  (s/down (s/up 1 2) (s/up 3 4)))
 * 
 *   [{:s 1, :chain [0 0], :orientations [::s/down ::s/up]}
 * {:s 2, :chain [0 1], :orientations [::s/down ::s/up]}
 * {:s 3, :chain [1 0], :orientations [::s/down ::s/up]}
 * {:s 4, :chain [1 1], :orientations [::s/down ::s/up]}]
 *   ```
 */
emmy.structure.fold_chain = (function emmy$structure$fold_chain(var_args){
var G__38195 = arguments.length;
switch (G__38195) {
case 2:
return emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$2 = (function (f,s){
return emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$4(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),f,s);
}));

(emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$3 = (function (f,init,s){
return emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$4(f,init,f,s);
}));

(emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$4 = (function (f,init,present,s){
var walk = (function emmy$structure$walk(acc,s__$1,chain,orientations){
if(emmy.structure.structure_QMARK_(s__$1)){
var o = emmy.structure.orientation(s__$1);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,i){
return emmy$structure$walk(acc__$1,emmy.structure.s_COLON_nth(s__$1,i),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chain,i),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(orientations,o));
}),acc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s__$1)));
} else {
var G__38198 = acc;
var G__38199 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,chain,orientations], null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38198,G__38199) : f.call(null,G__38198,G__38199));
}
});
var G__38200 = walk(init,s,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
return (present.cljs$core$IFn$_invoke$arity$1 ? present.cljs$core$IFn$_invoke$arity$1(G__38200) : present.call(null,G__38200));
}));

(emmy.structure.fold_chain.cljs$lang$maxFixedArity = 4);

/**
 * Returns a new structure generated by mapping `f` across the same-indexed
 *   entries of all supplied structures, one level deep.
 */
emmy.structure.map_COLON_l = (function emmy$structure$map_COLON_l(f,p__38202){
var vec__38203 = p__38202;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38203,(0),null);
var structs = vec__38203;
if(emmy.structure.structure_QMARK_(s)){
return emmy.structure.generate(cljs.core.count(s),emmy.structure.orientation(s),(function (i){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38201_SHARP_){
return emmy.structure.s_COLON_nth(p1__38201_SHARP_,i);
}),structs);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
}));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,structs);
}
});
/**
 * Accepts some function `f` and a sequence of isomorphic `structures`; returns a
 *   structure of the same shape, with `f` applied to the associated entry of each
 *   input structure.
 */
emmy.structure.map_COLON_r_COLON_l = (function emmy$structure$map_COLON_r_COLON_l(f,structures){
return emmy.structure.map_COLON_l((function() { 
var G__38341__delegate = function (elements){
if(emmy.structure.structure_QMARK_(cljs.core.first(elements))){
return (emmy.structure.map_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.map_COLON_r_COLON_l.cljs$core$IFn$_invoke$arity$2(f,elements) : emmy.structure.map_COLON_r_COLON_l.call(null,f,elements));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,elements);
}
};
var G__38341 = function (var_args){
var elements = null;
if (arguments.length > 0) {
var G__38342__i = 0, G__38342__a = new Array(arguments.length -  0);
while (G__38342__i < G__38342__a.length) {G__38342__a[G__38342__i] = arguments[G__38342__i + 0]; ++G__38342__i;}
  elements = new cljs.core.IndexedSeq(G__38342__a,0,null);
} 
return G__38341__delegate.call(this,elements);};
G__38341.cljs$lang$maxFixedArity = 0;
G__38341.cljs$lang$applyTo = (function (arglist__38343){
var elements = cljs.core.seq(arglist__38343);
return G__38341__delegate(elements);
});
G__38341.cljs$core$IFn$_invoke$arity$variadic = G__38341__delegate;
return G__38341;
})()
,structures);
});
/**
 * Return a structure with the same shape as s but with f applied to each
 *   primitive (that is, not structural) component.
 */
emmy.structure.mapr = (function emmy$structure$mapr(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38345 = arguments.length;
var i__5898__auto___38346 = (0);
while(true){
if((i__5898__auto___38346 < len__5897__auto___38345)){
args__5903__auto__.push((arguments[i__5898__auto___38346]));

var G__38350 = (i__5898__auto___38346 + (1));
i__5898__auto___38346 = G__38350;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic = (function (f,structures){
return emmy.structure.map_COLON_r_COLON_l(f,structures);
}));

(emmy.structure.mapr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(emmy.structure.mapr.cljs$lang$applyTo = (function (seq38206){
var G__38207 = cljs.core.first(seq38206);
var seq38206__$1 = cljs.core.next(seq38206);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38207,seq38206__$1);
}));

/**
 * Returns a new structure of equivalent shape to `s`, generated by applying `f`
 *   to three arguments:
 * 
 *   - the entry in the structure
 *   - a vector of its 'access chain', i.e., the path you'd pass
 *  to [[clojure.core/get-in]] to access the entry
 *   - a vector of orientations associated with each index in the access chain
 * 
 *   For example:
 * 
 *   ```clojure
 *   (dorun (map-chain println (s/down (s/up 1 2) (s/up 3 4))))
 * 
 *   1 [0 0] [::s/down ::s/up]
 *   2 [0 1] [::s/down ::s/up]
 *   3 [1 0] [::s/down ::s/up]
 *   4 [1 1] [::s/down ::s/up]
 *   ```
 */
emmy.structure.map_chain = (function emmy$structure$map_chain(f,s){
var walk = (function emmy$structure$map_chain_$_walk(s__$1,chain,orientations){
if(emmy.structure.structure_QMARK_(s__$1)){
var o = emmy.structure.orientation(s__$1);
return emmy.structure.generate(cljs.core.count(s__$1),emmy.structure.orientation(s__$1),(function (i){
return emmy$structure$map_chain_$_walk(emmy.structure.s_COLON_nth(s__$1,i),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chain,i),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(orientations,o));
}));
} else {
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(s__$1,chain,orientations) : f.call(null,s__$1,chain,orientations));
}
});
return walk(s,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Return a structure of the same shape as `s` whose elements are access chains
 *   corresponding to position of each element (i.e., the sequence of indices
 *   needed to address that element via [[get-in]]).
 * 
 *   Each access chain has the sequence of orientations (`::s/up`, `::s/down`)
 *   associated with each step attached to it as metadata, under an `:orientations`
 *   key. Use this if the orientation of the indices matters.
 */
emmy.structure.structure__GT_access_chains = (function emmy$structure$structure__GT_access_chains(s){
if(emmy.structure.structure_QMARK_(s)){
return emmy.structure.map_chain((function (_,chain,orientations){
return cljs.core.with_meta(cljs.core.seq(chain),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientations","orientations",146962442),orientations], null));
}),s);
} else {
return null;
}
});
/**
 * Accepts
 * 
 *   - some symbolic (or string) `name`
 *   - a structure `s`
 * 
 *   and returns a new structure of identical shape, with symbolic entries like
 *   `'x↑0_1` that show their access chain with proper orientations for each step.
 */
emmy.structure.structure__GT_prototype = (function emmy$structure$structure__GT_prototype(name,s){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (chain){
var separators = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.structure.orientation__GT_separator,new cljs.core.Keyword(null,"orientations","orientations",146962442).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(chain)));
var path_seq = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.str,separators,chain);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,name,path_seq));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.structure__GT_access_chains(s)], 0));
});
/**
 * Given:
 * 
 *   - a sequence of `values`
 *   - a model `struct`
 * 
 *   Returns a new structure generated by unpacking `values` into a structure with
 *   the same shape as `struct`.
 */
emmy.structure.unflatten = (function emmy$structure$unflatten(var_args){
var G__38209 = arguments.length;
switch (G__38209) {
case 2:
return emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$2 = (function (values,struct){
return emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$3(emmy.structure.same,values,struct);
}));

(emmy.structure.unflatten.cljs$core$IFn$_invoke$arity$3 = (function (constructor$,values,struct){
var u = (function emmy$structure$u(values__$1,struct__$1){
if(emmy.structure.structure_QMARK_(struct__$1)){
var vec__38220 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38223,element){
var vec__38224 = p__38223;
var values__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38224,(0),null);
var struct__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38224,(1),null);
var vec__38227 = emmy$structure$u(values__$2,element);
var values_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38227,(0),null);
var struct_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38227,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(struct__$2,struct_SINGLEQUOTE_)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values__$1,cljs.core.PersistentVector.EMPTY], null),struct__$1);
var values_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38220,(0),null);
var struct_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38220,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values_SINGLEQUOTE_,(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(struct__$1,struct_SINGLEQUOTE_) : constructor$.call(null,struct__$1,struct_SINGLEQUOTE_))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(values__$1),cljs.core.first(values__$1)], null);
}
});
return cljs.core.second(u(values,struct));
}));

(emmy.structure.unflatten.cljs$lang$maxFixedArity = 3);

/**
 * Returns a structure with the same shape as `s`, with all orientations
 *   inverted.
 */
emmy.structure.transpose = (function emmy$structure$transpose(s){
if(emmy.structure.structure_QMARK_(s)){
return emmy.structure.__GT_Structure((function (){var G__38230 = emmy.structure.orientation(s);
return (emmy.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1 ? emmy.structure.opposite_orientation.cljs$core$IFn$_invoke$arity$1(G__38230) : emmy.structure.opposite_orientation.call(null,G__38230));
})(),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.structure.transpose,emmy.structure.structure__GT_vector(s)),cljs.core.meta(s));
} else {
return s;
}
});
/**
 * Returns a new structure with the same orientation as the first element of `s`,
 *   filled with elements of the same orientation as `s`.
 * 
 *   Each element is generating by taking the first element of each entry in `s`,
 *   the the second, etc... In that sense this is similar to a traditional matrix
 *   transpose.
 * 
 *   A comment from `scmutils` states:
 * 
 *   'used only in symmetrize-Christoffel in
 *   src/calculus/covariant-derivative.scm.'
 */
emmy.structure.transpose_outer = (function emmy$structure$transpose_outer(s){
var o = emmy.structure.orientation(s);
return emmy.structure.map_COLON_l((function() { 
var G__38373__delegate = function (xs){
return emmy.structure.make(o,xs);
};
var G__38373 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__38376__i = 0, G__38376__a = new Array(arguments.length -  0);
while (G__38376__i < G__38376__a.length) {G__38376__a[G__38376__i] = arguments[G__38376__i + 0]; ++G__38376__i;}
  xs = new cljs.core.IndexedSeq(G__38376__a,0,null);
} 
return G__38373__delegate.call(this,xs);};
G__38373.cljs$lang$maxFixedArity = 0;
G__38373.cljs$lang$applyTo = (function (arglist__38377){
var xs = cljs.core.seq(arglist__38377);
return G__38373__delegate(xs);
});
G__38373.cljs$core$IFn$_invoke$arity$variadic = G__38373__delegate;
return G__38373;
})()
,s);
});
/**
 * Returns a structure of the same shape and orientation as `s`, generated by
 *   substituting gensymmed symbols in for each entry.
 */
emmy.structure.typical_object = (function emmy$structure$typical_object(s){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (_){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
/**
 * Returns a structure compatible for multiplication with `s` down to 0.
 */
emmy.structure.compatible_zero = (function emmy$structure$compatible_zero(s){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(emmy.structure.transpose(s));
});
/**
 * Alias for [[compatible-zero]].
 */
emmy.structure.dual_zero = emmy.structure.compatible_zero;
/**
 * Returns a structure compatible for multiplication with `s` down to a scalar,
 *   with the slots filled with gensyms.
 */
emmy.structure.compatible_shape = (function emmy$structure$compatible_shape(s){
return emmy.structure.typical_object(emmy.structure.transpose(s));
});
/**
 * Returns a structure generated by multiplying every element of `v` by `s` (on
 *   the right).
 */
emmy.structure.structure_STAR_scalar = (function emmy$structure$structure_STAR_scalar(v,s){
return emmy.structure.same(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38231_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__38231_SHARP_,s);
}),v));
});
/**
 * Returns a structure generated by multiplying every element of `v` by `s` (on
 *   the left).
 */
emmy.structure.scalar_STAR_structure = (function emmy$structure$scalar_STAR_structure(s,v){
return emmy.structure.same(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38232_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,p1__38232_SHARP_);
}),v));
});
/**
 * Returns `true` if `s` and `t` are
 * 
 *   - of opposite orientation
 *   - equal in length
 *   - are full of elements also compatible for contraction (also true if either
 *  pair is NOT a structure)
 * 
 *   false otherwise.
 */
emmy.structure.compatible_for_contraction_QMARK_ = (function emmy$structure$compatible_for_contraction_QMARK_(s,t){
return (((!(emmy.structure.same_orientation_QMARK_(s,t)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),cljs.core.count(t))) && (cljs.core.every_QMARK_((function (p__38233){
var vec__38234 = p__38233;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38234,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38234,(1),null);
var or__5162__auto__ = (!(emmy.structure.structure_QMARK_(l)));
if(or__5162__auto__){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = (!(emmy.structure.structure_QMARK_(r)));
if(or__5162__auto____$1){
return or__5162__auto____$1;
} else {
return (emmy.structure.compatible_for_contraction_QMARK_.cljs$core$IFn$_invoke$arity$2 ? emmy.structure.compatible_for_contraction_QMARK_.cljs$core$IFn$_invoke$arity$2(l,r) : emmy.structure.compatible_for_contraction_QMARK_.call(null,l,r));
}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,s,t))))));
});
/**
 * Returns the (vector) dot product of `v1` and `v2`; this is equivalent to the sum
 *   of the pairwise product of each entry.
 * 
 *   The arguments must have identical length, and all pairwise entries must be
 *   compatible via [[g/*]].
 */
emmy.structure.vector_dot_product = (function emmy$structure$vector_dot_product(v1,v2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v1),cljs.core.count(v2))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Not same dimension -- v:dot-product"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v1)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v2)))+"\n"+"(= (count v1) (count v2))")));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,v1,v2));
});
/**
 * Returns the (vector) inner product of `v1` and `v2`; this is equivalent to the
 *   sum of the pairwise product of each entry.
 * 
 *  This is equivalent to [[vector-dot-product]] with every element of `v1`
 *   transformed into its complex conjugate.
 * 
 *   The arguments must have identical length, and all pairwise entries must be
 *   compatible via [[g/*]].
 */
emmy.structure.vector_inner_product = (function emmy$structure$vector_inner_product(v1,v2){
return emmy.structure.vector_dot_product(emmy.generic.conjugate.cljs$core$IFn$_invoke$arity$1(v1),v2);
});
/**
 * If `s` and `t` are compatible for contraction, returns their vector dot
 *   product.
 * 
 *   Else, returns a new structure generated by multiplying `s` by every element of
 *   `t`, following the usual multiplicating rules for whatever entry type exists.
 * 
 *   If `*allow-incompatible-multiplication*` is set to false, `s` and `t` will be
 *   checked for:
 * 
 *   - opposite orientations,
 *   - every element of `t` must be compatible for multiplication with all of `s`.
 * 
 *   If those tests fail, `s:*` will throw.
 */
emmy.structure.s_COLON__STAR_ = (function emmy$structure$s_COLON__STAR_(s,t){
if(emmy.structure.compatible_for_contraction_QMARK_(s,t)){
return emmy.structure.vector_dot_product(s,t);
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.structure._STAR_allow_incompatible_multiplication_STAR_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (((!(emmy.structure.same_orientation_QMARK_(s,t)))) && (cljs.core.every_QMARK_((function (elem){
return emmy.structure.compatible_for_contraction_QMARK_(s,elem);
}),t)));
}
})())){
return emmy.structure.scalar_STAR_structure(s,t);
} else {
return emmy.util.illegal((""+"Incompatible multiplication: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)));

}
}
});
/**
 * Raise the structure `s` to the nth power.
 */
emmy.structure.expt = (function emmy$structure$expt(s,n){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(n);
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(n))){
return s;
} else {
if((n > one)){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(s,emmy.generic._.cljs$core$IFn$_invoke$arity$2(n,one)));
} else {
return emmy.util.arithmetic_ex((""+"Cannot: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.structure","expt","emmy.structure/expt",-1074222400,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))))));

}
}
});
/**
 * Returns the structural dot product of the compatible structures `s` and
 *   `t`.
 * 
 *   To be compatible, both structures must have the same structure.
 */
emmy.structure.dot_product = (function emmy$structure$dot_product(s,t){
var s_SINGLEQUOTE_ = emmy.structure.transpose(s);
if(emmy.structure.compatible_for_contraction_QMARK_(s_SINGLEQUOTE_,t)){
return emmy.structure.vector_dot_product(s_SINGLEQUOTE_,t);
} else {
return emmy.util.illegal((""+"incompatible structures: dot-product "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)));
}
});
/**
 * Returns the structural inner product of the compatible structures `s` and `t`.
 *   This is equivalent to [[dot-product]] with every element of `s` transformed
 *   into its complex conjugate.
 * 
 *   To be compatible, both structures must be of the same orientation and
 *   dimension. The internal structures currently do NOT have to match.
 */
emmy.structure.inner_product = (function emmy$structure$inner_product(s,t){
return emmy.structure.dot_product(emmy.generic.conjugate.cljs$core$IFn$_invoke$arity$1(s),t);
});
/**
 * The outer product of s and t is the structure `struct1` with each element at
 *   the first level multiplied by all of `struct2`, following the usual structure
 *   multiplication rules.
 */
emmy.structure.outer_product = (function emmy$structure$outer_product(struct2,struct1){
var xform = (function emmy$structure$outer_product_$_xform(s1){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (s2){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s1,s2);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([struct2], 0));
});
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(xform,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([struct1], 0));
});
/**
 * Returns the cross product of structures of length 3. Input orientations are
 *   ignored; result is an up-tuple.
 */
emmy.structure.cross_product = (function emmy$structure$cross_product(s,t){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(3))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(t),(3))))){
emmy.util.illegal("cross product only works on two elements of ^3");
} else {
}

var vec__38237 = s;
var s0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(0),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(2),null);
var vec__38240 = t;
var t0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38240,(0),null);
var t1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38240,(1),null);
var t2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38240,(2),null);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s1,t2),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s2,t1)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s2,t0),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s0,t2)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s0,t1),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s1,t0))], 0));
});
/**
 * Given a binary operator and two structures of the same size, return
 *   a structure with the same orientation as the first formed from the
 *   elementwise binary operation between corresponding elements of the
 *   structures.
 */
emmy.structure.elementwise = (function emmy$structure$elementwise(op,s,t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),cljs.core.count(t))){
return emmy.structure.__GT_Structure(emmy.structure.orientation(s),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(op,s,t),null);
} else {
return emmy.util.arithmetic_ex((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)+" provided arguments of differing length"));
}
});
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (a,b){
return emmy.structure.elementwise(emmy.generic._PLUS_,a,b);
}));
emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (a,b){
return emmy.structure.elementwise(emmy.generic._PLUS_,a,b);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.negate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (a,b){
return emmy.structure.elementwise(emmy.generic._,a,b);
}));
emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (a,b){
return emmy.structure.elementwise(emmy.generic._,a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a,b){
return emmy.structure.s_COLON__STAR_(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.structure.structure_STAR_scalar(a,b);
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a,b){
return emmy.structure.scalar_STAR_structure(a,b);
}));
emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514)], null),(function (a,b){
return emmy.structure.structure_STAR_scalar(a,emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(b));
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (op,s){
return emmy.structure.same(s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38243_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(op,p1__38243_SHARP_);
}),s));
}));
emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.operator","operator","emmy.operator/operator",1412891316)], null),(function (s,op){
return emmy.structure.same(s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38244_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__38244_SHARP_,op);
}),s));
}));
emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.dot_product(a,a);
}));
emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.s_COLON__STAR_(a,emmy.structure.s_COLON__STAR_(a,a));
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (a,b){
return emmy.structure.expt(a,b);
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.simplify,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));
emmy.generic.magnitude.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.structure.inner_product(a,a));
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.structure.dot_product(a,a));
}));
emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (a,b){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.make_rectangular,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
emmy.generic.make_rectangular.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (a,b){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.make_rectangular,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (a,b){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.make_polar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
emmy.generic.make_polar.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711),new cljs.core.Keyword("emmy.structure","down","emmy.structure/down",-1744668711)], null),(function (a,b){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.make_polar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
}));
emmy.generic.real_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (m){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.real_part,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
emmy.generic.imag_part.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (m){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.imag_part,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));
emmy.generic.conjugate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.conjugate,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
}));
emmy.generic.transpose.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.transpose(a);
}));
emmy.generic.dimension.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a){
return emmy.structure.dimension(a);
}));
emmy.generic.dot_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a,b){
return emmy.structure.dot_product(a,b);
}));
emmy.generic.inner_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a,b){
return emmy.structure.inner_product(a,b);
}));
emmy.generic.outer_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null),(function (a,b){
return emmy.structure.outer_product(a,b);
}));
emmy.generic.cross_product.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384),new cljs.core.Keyword("emmy.structure","up","emmy.structure/up",790281384)], null),(function (a,b){
return emmy.structure.cross_product(a,b);
}));

//# sourceMappingURL=emmy.structure.js.map
