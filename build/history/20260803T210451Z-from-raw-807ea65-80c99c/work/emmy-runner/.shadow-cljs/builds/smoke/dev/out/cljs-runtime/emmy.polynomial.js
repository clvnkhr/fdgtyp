goog.provide('emmy.polynomial');





/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {emmy.function$.IArity}
*/
emmy.polynomial.Polynomial = (function (arity,terms,m){
this.arity = arity;
this.terms = terms;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2158362625;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.polynomial.Polynomial.prototype.toString = (function (){
var self__ = this;
var p = this;
return (emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1 ? emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1(p) : emmy.polynomial.__GT_str.call(null,p));
}));

(emmy.polynomial.Polynomial.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.polynomial.Polynomial.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
var G__38261 = (function (p1__38247_SHARP_){
return emmy.dual.replace_tag(p1__38247_SHARP_,old,new$);
});
var G__38262 = this$__$1;
return (emmy.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2(G__38261,G__38262) : emmy.polynomial.map_coefficients.call(null,G__38261,G__38262));
}));

(emmy.polynomial.Polynomial.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (this$,tag,mode){
var self__ = this;
var this$__$1 = this;
var G__38276 = (function (p1__38248_SHARP_){
return emmy.dual.extract_tangent(p1__38248_SHARP_,tag,mode);
});
var G__38277 = this$__$1;
return (emmy.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2(G__38276,G__38277) : emmy.polynomial.map_coefficients.call(null,G__38276,G__38277));
}));

(emmy.polynomial.Polynomial.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
var G__38278 = (function (p1__38249_SHARP_){
return emmy.dual.extract_id(p1__38249_SHARP_,id);
});
var G__38279 = this$__$1;
return (emmy.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.map_coefficients.cljs$core$IFn$_invoke$arity$2(G__38278,G__38279) : emmy.polynomial.map_coefficients.call(null,G__38278,G__38279));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.polynomial.Polynomial \"",x__$1.toString(),"\"]"], 0));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.polynomial.eq.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.eq.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.polynomial.eq.call(null,this$__$1,that));
}));

(emmy.polynomial.Polynomial.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.polynomial.Polynomial.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324);
}));

(emmy.polynomial.Polynomial.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.polynomial.Polynomial.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(0),self__.arity], null);
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.seq(self__.terms);
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m__$1){
var self__ = this;
var ___$1 = this;
return (new emmy.polynomial.Polynomial(self__.arity,self__.terms,m__$1));
}));

(emmy.polynomial.Polynomial.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__38286 = (arguments.length - (1));
switch (G__38286) {
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

(emmy.polynomial.Polynomial.prototype.apply = (function (self__,args38260){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38260)));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__38311 = this$;
var G__38312 = cljs.core.PersistentVector.EMPTY;
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38311,G__38312) : emmy.polynomial.evaluate.call(null,G__38311,G__38312));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__38313 = this$;
var G__38314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38313,G__38314) : emmy.polynomial.evaluate.call(null,G__38313,G__38314));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__38318 = this$;
var G__38319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38318,G__38319) : emmy.polynomial.evaluate.call(null,G__38318,G__38319));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__38323 = this$;
var G__38324 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38323,G__38324) : emmy.polynomial.evaluate.call(null,G__38323,G__38324));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__38325 = this$;
var G__38326 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38325,G__38326) : emmy.polynomial.evaluate.call(null,G__38325,G__38326));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__38327 = this$;
var G__38328 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38327,G__38328) : emmy.polynomial.evaluate.call(null,G__38327,G__38328));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__38329 = this$;
var G__38330 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38329,G__38330) : emmy.polynomial.evaluate.call(null,G__38329,G__38330));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__38332 = this$;
var G__38333 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38332,G__38333) : emmy.polynomial.evaluate.call(null,G__38332,G__38333));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__38334 = this$;
var G__38335 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38334,G__38335) : emmy.polynomial.evaluate.call(null,G__38334,G__38335));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__38340 = this$;
var G__38341 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38340,G__38341) : emmy.polynomial.evaluate.call(null,G__38340,G__38341));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__38351 = this$;
var G__38352 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38351,G__38352) : emmy.polynomial.evaluate.call(null,G__38351,G__38352));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__38353 = this$;
var G__38354 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38353,G__38354) : emmy.polynomial.evaluate.call(null,G__38353,G__38354));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__38359 = this$;
var G__38360 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38359,G__38360) : emmy.polynomial.evaluate.call(null,G__38359,G__38360));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var this$ = this;
var G__38364 = this$;
var G__38365 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38364,G__38365) : emmy.polynomial.evaluate.call(null,G__38364,G__38365));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var this$ = this;
var G__38366 = this$;
var G__38367 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38366,G__38367) : emmy.polynomial.evaluate.call(null,G__38366,G__38367));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var this$ = this;
var G__38368 = this$;
var G__38369 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38368,G__38369) : emmy.polynomial.evaluate.call(null,G__38368,G__38369));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var this$ = this;
var G__38373 = this$;
var G__38374 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38373,G__38374) : emmy.polynomial.evaluate.call(null,G__38373,G__38374));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var this$ = this;
var G__38375 = this$;
var G__38376 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38375,G__38376) : emmy.polynomial.evaluate.call(null,G__38375,G__38376));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__38378 = this$;
var G__38379 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38378,G__38379) : emmy.polynomial.evaluate.call(null,G__38378,G__38379));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__38380 = this$;
var G__38381 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38380,G__38381) : emmy.polynomial.evaluate.call(null,G__38380,G__38381));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__38384 = this$;
var G__38385 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38384,G__38385) : emmy.polynomial.evaluate.call(null,G__38384,G__38385));
}));

(emmy.polynomial.Polynomial.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__38386 = this$;
var G__38387 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evaluate.cljs$core$IFn$_invoke$arity$2(G__38386,G__38387) : emmy.polynomial.evaluate.call(null,G__38386,G__38387));
}));

(emmy.polynomial.Polynomial.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"terms","terms",83553549,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.polynomial.Polynomial.cljs$lang$type = true);

(emmy.polynomial.Polynomial.cljs$lang$ctorStr = "emmy.polynomial/Polynomial");

(emmy.polynomial.Polynomial.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.polynomial/Polynomial");
}));

/**
 * Positional factory function for emmy.polynomial/Polynomial.
 */
emmy.polynomial.__GT_Polynomial = (function emmy$polynomial$__GT_Polynomial(arity,terms,m){
return (new emmy.polynomial.Polynomial(arity,terms,m));
});

/**
 * Returns true if the supplied argument is an instance of [[Polynomial]], false
 *   otherwise.
 */
emmy.polynomial.polynomial_QMARK_ = (function emmy$polynomial$polynomial_QMARK_(x){
return (x instanceof emmy.polynomial.Polynomial);
});
/**
 * Returns true if the input `x` is explicitly _not_ an instance
 *   of [[Polynomial]], false otherwise.
 * 
 *   Equivalent to `(not (polynomial? x))`.
 */
emmy.polynomial.coeff_QMARK_ = (function emmy$polynomial$coeff_QMARK_(x){
return (!(emmy.polynomial.polynomial_QMARK_(x)));
});
/**
 * Given a [[Polynomial]] instance `p`, returns the `arity` field.
 */
emmy.polynomial.bare_arity = (function emmy$polynomial$bare_arity(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (polynomial? p)"));
}

return p.arity;
});
/**
 * Given a [[Polynomial]] instance `p`, returns the `terms` field.
 */
emmy.polynomial.bare_terms = (function emmy$polynomial$bare_terms(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
} else {
throw (new Error("Assert failed: (polynomial? p)"));
}

return p.terms;
});
/**
 * Accepts an explicit `arity` and a vector of terms and returns either:
 * 
 *   - `0`, in the case of an empty list
 *   - a bare coefficient, given a singleton term list with a constant term
 *   - else, a [[Polynomial]] instance.
 * 
 *   In the second case, if the coefficient is _itself_ a [[Polynomial]], wraps
 *   that [[Polynomial]] instance up in an explicit [[Polynomial]]. In cases where
 *   polynomials have polynomial coefficients, this flattening should never happen
 *   automatically.
 * 
 *   NOTE this method assumes that the terms are properly sorted, and contain no
 *   zero coefficients.
 */
emmy.polynomial.terms__GT_polynomial = (function emmy$polynomial$terms__GT_polynomial(arity,terms){
if(cljs.core.empty_QMARK_(terms)){
return (0);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1))) && (emmy.polynomial.impl.constant_term_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0)))))){
var c = emmy.polynomial.impl.coefficient(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0)));
if(emmy.polynomial.polynomial_QMARK_(c)){
return emmy.polynomial.__GT_Polynomial(arity,terms,null);
} else {
return c;
}
} else {
return emmy.polynomial.__GT_Polynomial(arity,terms,null);

}
}
});
/**
 * Generates a [[Polynomial]] instance (or a bare coefficient!) from either:
 * 
 *   - a sequence of dense coefficients of a univariate polynomial (in ascending
 *   order)
 *   - an explicit `arity`, and a sparse mapping (or sequence of pairs) of exponent
 *   => coefficient
 * 
 *   In the first case, the sequence is interpreted as a dense sequence of
 *   coefficients of an arity-1 (univariate) polynomial. The coefficients begin
 *   with the constant term and proceed to each higher power of the indeterminate.
 *   For example, x^2 - 1 can be constructed by (make [-1 0 1]).
 * 
 *   In the 2-arity case,
 * 
 *   - `arity` is the number of indeterminates
 *   - `expts->coef` is a map of an exponent representation to a coefficient.
 * 
 *   The `exponent` portion of the mapping can be any of:
 * 
 *   - a proper exponent entry created by `emmy.polynomial.exponent`
 *   - a map of the form `{variable-index, power}`
 *   - a dense vector of variable powers, like `[3 0 1]` for $x^3z$. The length of
 *  each vector should be equal to `arity`, in this case.
 * 
 *   For example, any of the following would generate $4x^2y + 5xy^2$:
 * 
 *   ```clojure
 *   (make 2 [[[2 1] 4] [[1 2] 5]])
 *   (make 2 {[2 1] 4, [1 2] 5})
 *   (make 2 {{0 2, 1 1} 4, {0 1, 1 2} 5})
 *   ```
 * 
 *   NOTE: [[make]] will try and return a bare coefficient if possible. For
 *   example, the following form will return a constant, since there are no
 *   explicit indeterminates with powers > 0:
 * 
 *   ```clojure
 *   (make 10 {{} 1 {} 2})
 *   ;;=> 3
 *   ```
 * 
 *   See [[constant]] if you need an explicit [[Polynomial]] instance wrapping a
 *   constant.
 */
emmy.polynomial.make = (function emmy$polynomial$make(var_args){
var G__38397 = arguments.length;
switch (G__38397) {
case 1:
return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.make.cljs$core$IFn$_invoke$arity$1 = (function (dense_coefficients){
var terms = emmy.polynomial.impl.dense__GT_terms(dense_coefficients);
return emmy.polynomial.terms__GT_polynomial((1),terms);
}));

(emmy.polynomial.make.cljs$core$IFn$_invoke$arity$2 = (function (arity,expts__GT_coef){
var terms = emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1(expts__GT_coef);
return emmy.polynomial.terms__GT_polynomial(arity,terms);
}));

(emmy.polynomial.make.cljs$lang$maxFixedArity = 2);

/**
 * Given some coefficient `c`, returns a [[Polynomial]] instance with a single
 *   constant term referencing `c`.
 * 
 *   `arity` defaults to 1; supply it to set the arity of the
 *   returned [[Polynomial]].
 */
emmy.polynomial.constant = (function emmy$polynomial$constant(var_args){
var G__38399 = arguments.length;
switch (G__38399) {
case 1:
return emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$1 = (function (c){
return emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2((1),c);
}));

(emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2 = (function (arity,c){
return emmy.polynomial.__GT_Polynomial(arity,emmy.polynomial.impl.constant__GT_terms(c),null);
}));

(emmy.polynomial.constant.cljs$lang$maxFixedArity = 2);

/**
 * Generates a [[Polynomial]] instance representing a single indeterminate with
 *   constant 1.
 * 
 *   When called with no arguments, returns a monomial of arity 1 that acts as
 *   identity in the first indeterminate.
 * 
 *   The one-argument version takes an explicit `arity`, but still sets the
 *   identity to the first indeterminate.
 * 
 *   The two-argument version takes an explicit `i` and returns a monomial of arity
 *   `arity` with an exponent of 1 in the `i`th indeterminate.
 */
emmy.polynomial.identity = (function emmy$polynomial$identity(var_args){
var G__38402 = arguments.length;
switch (G__38402) {
case 0:
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$0 = (function (){
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2((1),(0));
}));

(emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$1 = (function (arity){
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2(arity,(0));
}));

(emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2 = (function (arity,i){
if((((i >= (0))) && ((i < arity)))){
} else {
throw (new Error("Assert failed: (and (>= i 0) (< i arity))"));
}

var expts = (emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2(i,(1)) : emmy.polynomial.exponent.make.call(null,i,(1)));
return emmy.polynomial.__GT_Polynomial(arity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,(1))], null),null);
}));

(emmy.polynomial.identity.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of `n` monomials of arity `n`, each with an exponent of `1`
 *   for the `i`th indeterminate (where `i` matches the position in the returned
 *   sequence).
 */
emmy.polynomial.new_variables = (function emmy$polynomial$new_variables(n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38408_SHARP_){
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2(n,p1__38408_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),n));
});
/**
 * Given a sequence of points of the form `[x, f(x)]`, returns a univariate
 *   polynomial that passes through each input point.
 * 
 *   The degree of the returned polynomial is equal to `(dec (count xs))`.
 */
emmy.polynomial.from_points = (function emmy$polynomial$from_points(xs){
return emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.interpolate.lagrange(xs,emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$0()));
});
/**
 * Given some `arity`, an indeterminate index `i` and some constant `root`,
 *   returns a polynomial of the form `x_i - root`. The returned polynomial
 *   represents a linear equation in the `i`th indeterminate.
 * 
 *   If `root` is 0, [[linear]] is equivalent to the two-argument version
 *   of [[identity]].
 */
emmy.polynomial.linear = (function emmy$polynomial$linear(arity,i,root){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(root))){
return emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2(arity,i);
} else {
var G__38416 = emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2(arity,emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(root));
var G__38417 = emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$2(arity,i);
return (emmy.polynomial.add.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.add.cljs$core$IFn$_invoke$arity$2(G__38416,G__38417) : emmy.polynomial.add.call(null,G__38416,G__38417));
}
});
/**
 * Given some `arity`, a coefficient `c` and an exponent `n`, returns a monomial
 *   representing $c{x_0}^n$. The first indeterminate is always exponentiated.
 * 
 *   Similar to [[make]], this function attempts to drop down to scalar-land if
 *   possible:
 * 
 *   - If `c` is [[emmy.value/zero?]], returns `c`
 *   - if `n` is `zero?`, returns `(constant arity c)`
 * 
 *   NOTE that negative exponents are not allowed.
 */
emmy.polynomial.c_STAR_xn = (function emmy$polynomial$c_STAR_xn(arity,c,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(c))){
return c;
} else {
if((n === (0))){
return emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2(arity,c);
} else {
var term = emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2((emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),n) : emmy.polynomial.exponent.make.call(null,(0),n)),c);
return emmy.polynomial.__GT_Polynomial(arity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),null);

}
}
});
/**
 * Returns the nth [Touchard
 *   polynomial](https://en.wikipedia.org/wiki/Touchard_polynomials).
 * 
 *   These are also called [Bell
 *   polynomials](https://mathworld.wolfram.com/BellPolynomial.html) (in
 *   Mathematica, implemented as `BellB`) or /exponential polynomials/.
 */
emmy.polynomial.touchard = (function emmy$polynomial$touchard(n){
return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38422_SHARP_){
return emmy.special.factorial.stirling_second_kind(n,p1__38422_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((n + (1)))));
});
emmy.polynomial.coeff_arity = (0);
emmy.polynomial.zero_degree = (-1);
/**
 * Returns the declared arity of the supplied [[Polynomial]], or `0` for
 *   non-polynomial arguments.
 */
emmy.polynomial.arity = (function emmy$polynomial$arity(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.bare_arity(p);
} else {
return emmy.polynomial.coeff_arity;
}
});
/**
 * Given some [[Polynomial]], returns the `terms` entry of the type. Handles other types as well:
 * 
 *   - Acts as identity on vectors, interpreting them as vectors of terms
 *   - any zero-valued `p` returns `[]`
 *   - any other coefficient returns a vector of a single constant term.
 */
emmy.polynomial.__GT_terms = (function emmy$polynomial$__GT_terms(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.bare_terms(p);
} else {
if(cljs.core.vector_QMARK_(p)){
return p;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$1(p)], null);

}
}
}
});
/**
 * Given two polynomials (or coefficients) `p` and `q`, checks that their arities
 *   are equal and returns the value, or throws an exception if not.
 * 
 *   If either `p` or `q` is a coefficient, [[check-same-arity]] successfully
 *   returns the other argument's arity.
 */
emmy.polynomial.check_same_arity = (function emmy$polynomial$check_same_arity(p,q){
var poly_p_QMARK_ = emmy.polynomial.polynomial_QMARK_(p);
var poly_q_QMARK_ = emmy.polynomial.polynomial_QMARK_(q);
if(((poly_p_QMARK_) && (poly_q_QMARK_))){
var ap = emmy.polynomial.bare_arity(p);
var aq = emmy.polynomial.bare_arity(q);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ap,aq)){
return ap;
} else {
return emmy.util.arithmetic_ex((""+"mismatched polynomial arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ap)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(aq)));
}
} else {
if(poly_p_QMARK_){
return emmy.polynomial.bare_arity(p);
} else {
if(poly_q_QMARK_){
return emmy.polynomial.bare_arity(q);
} else {
return emmy.polynomial.coeff_arity;

}
}
}
});
/**
 * Given some input `p` and an indeterminate index `i`, returns true if `0 <= i
 *   < (arity p)`, false otherwise.
 */
emmy.polynomial.valid_arity_QMARK_ = (function emmy$polynomial$valid_arity_QMARK_(p,i){
return (((i >= (0))) && ((i < emmy.polynomial.arity(p))));
});
/**
 * Given some input `p` and an indeterminate index `i`, returns `i` if `0 <= i
 *   < (arity p)`, and throws an exception otherwise.
 * 
 *   NOTE [[validate-arity]] is meant to validate indeterminate indices; thus it
 *   will always throw for non-[[Polynomial]] inputs.
 */
emmy.polynomial.validate_arity_BANG_ = (function emmy$polynomial$validate_arity_BANG_(p,i){
if(emmy.polynomial.valid_arity_QMARK_(p,i)){
return i;
} else {
return emmy.util.arithmetic_ex((""+"Supplied i "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)+" outside the bounds of arity "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.arity(p))+" for input "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)));
}
});
/**
 * Returns the [degree](https://en.wikipedia.org/wiki/Degree_of_a_polynomial) of
 *   the supplied polynomial.
 * 
 *   the degree of a polynomial is the highest of the degrees of the polynomial's
 *   individual terms with non-zero coefficients. The degree of an individual term
 *   is the sum of all exponents in the term.
 * 
 *   Optionally, [[degree]] takes an indeterminate index `i`; in this
 *   case, [[degree]] returns the maximum power found for the `i`th indeterminate
 *   across all terms.
 * 
 *   NOTE when passed either a `0` or a zero-polynomial, [[degree]] returns -1. See
 *   Wikipedia's ['degree of the zero
 *   polynomial'](https://en.wikipedia.org/wiki/Degree_of_a_polynomial#Degree_of_the_zero_polynomial)
 *   for color on why this is the case.
 *   
 */
emmy.polynomial.degree = (function emmy$polynomial$degree(var_args){
var G__38428 = arguments.length;
switch (G__38428) {
case 1:
return emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.polynomial.zero_degree;
} else {
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.exponents((emmy.polynomial.leading_term.cljs$core$IFn$_invoke$arity$1 ? emmy.polynomial.leading_term.cljs$core$IFn$_invoke$arity$1(p) : emmy.polynomial.leading_term.call(null,p))));
} else {
return emmy.polynomial.coeff_arity;

}
}
}));

(emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$2 = (function (p,i){
var i__$1 = emmy.polynomial.validate_arity_BANG_(p,i);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.polynomial.zero_degree;
} else {
if(emmy.polynomial.polynomial_QMARK_(p)){
var i_degree = (function emmy$polynomial$i_degree(term){
return emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.impl.exponents(term),i__$1);
});
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(i_degree),cljs.core.max,(0),emmy.polynomial.bare_terms(p));
} else {
return emmy.polynomial.coeff_arity;

}
}
}));

(emmy.polynomial.degree.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if the [[Polynomial]] this is equal to `that`. If `that` is
 *   a [[Polynomial]], `this` and `that` are equal if they have equal terms and
 *   equal arity. Coefficients are compared using [[emmy.value/=]].
 * 
 *   If `that` is non-[[Polynomial]], `eq` only returns true if `this` is a
 *   monomial and its coefficient is equal to `that` (again
 *   using [[emmy.value/=]]).
 */
emmy.polynomial.eq = (function emmy$polynomial$eq(this$,that){
if((that instanceof emmy.polynomial.Polynomial)){
var p = that;
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.arity,p.arity);
if(and__5160__auto__){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.terms,p.terms);
} else {
return and__5160__auto__;
}
} else {
var terms = this$.terms;
var and__5160__auto__ = (cljs.core.count(terms) <= (1));
if(and__5160__auto__){
var term = cljs.core.peek(terms);
var and__5160__auto____$1 = emmy.polynomial.impl.constant_term_QMARK_(term);
if(and__5160__auto____$1){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(that,emmy.polynomial.impl.coefficient(term));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
/**
 * Returns a string representation of the supplied [[Polynomial]] instance `p`.
 * 
 *   The optional argument `n` specifies how many terms to include in the returned
 *   string before an ellipsis cuts them off.
 */
emmy.polynomial.__GT_str = (function emmy$polynomial$__GT_str(var_args){
var G__38432 = arguments.length;
switch (G__38432) {
case 1:
return emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (p){
return emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$2(p,(10));
}));

(emmy.polynomial.__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (p,n){
if(cljs.core.truth_(emmy.polynomial.polynomial_QMARK_)){
} else {
throw (new Error("Assert failed: polynomial?"));
}

if(cljs.core.truth_(p)){
} else {
throw (new Error("Assert failed: p"));
}

var terms = emmy.polynomial.bare_terms(p);
var arity = emmy.polynomial.bare_arity(p);
var n_terms = cljs.core.count(terms);
var term_strs = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.impl.term__GT_str,terms));
var suffix = (((n_terms > n))?(""+"... and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((n_terms - n))+" more terms"):null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)+": ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" + ",term_strs))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)+")");
}));

(emmy.polynomial.__GT_str.cljs$lang$maxFixedArity = 2);

/**
 * Returns a sequence of the coefficients of the supplied polynomial `p`. A
 *   coefficient is treated here as a monomial, and returns a sequence of itself.
 * 
 *   If `p` is zero, returns an empty list.
 */
emmy.polynomial.coefficients = (function emmy$polynomial$coefficients(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.impl.coefficient,emmy.polynomial.__GT_terms(p));
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);

}
}
});
/**
 * Returns the leading (highest degree) term of the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, returns a term with zero exponents
 *   and `p` as its coefficient.
 */
emmy.polynomial.leading_term = (function emmy$polynomial$leading_term(p){
var or__5162__auto__ = cljs.core.peek(emmy.polynomial.__GT_terms(p));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.exponent.empty,(0)], null);
}
});
/**
 * Returns the coefficient of the leading (highest degree) term of
 *   the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 */
emmy.polynomial.leading_coefficient = (function emmy$polynomial$leading_coefficient(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.impl.coefficient(cljs.core.peek(emmy.polynomial.bare_terms(p)));
} else {
return p;
}
});
/**
 * Returns the exponents of the leading (highest degree) term of
 *   the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, returns [[exponent/empty]].
 */
emmy.polynomial.leading_exponents = (function emmy$polynomial$leading_exponents(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.impl.exponents(cljs.core.peek(emmy.polynomial.bare_terms(p)));
} else {
return emmy.polynomial.exponent.empty;
}
});
/**
 * Similar to [[leading-coefficient]], but of the coefficient itself is
 *   a [[Polynomial]], recurses down until it reaches a non-[[Polynomial]] lead
 *   coefficient.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 */
emmy.polynomial.leading_base_coefficient = (function emmy$polynomial$leading_base_coefficient(p){
while(true){
if(emmy.polynomial.polynomial_QMARK_(p)){
var G__38727 = emmy.polynomial.leading_coefficient(p);
p = G__38727;
continue;
} else {
return p;
}
break;
}
});
/**
 * Returns the coefficient of the trailing (lowest degree) term of
 *   the [[Polynomial]] `p`.
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 */
emmy.polynomial.trailing_coefficient = (function emmy$polynomial$trailing_coefficient(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.impl.coefficient(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.bare_terms(p),(0),cljs.core.PersistentVector.EMPTY));
} else {
return p;
}
});
/**
 * Returns the lowest degree found across any term in the supplied [[Polynomial]].
 *   If a non-[[Polynomial]] is supplied, returns either `0` or `-1` if the input
 *   is itself a `0`.
 * 
 *   See [[degree]] for a discussion of this `-1` case.
 */
emmy.polynomial.lowest_degree = (function emmy$polynomial$lowest_degree(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.exponents(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.bare_terms(p),(0))));
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.polynomial.zero_degree;
} else {
return emmy.polynomial.coeff_arity;

}
}
});
/**
 * Returns true if `p` is either:
 * 
 *   - a [[Polynomial]] instance with a single term, or
 *   - a non-[[Polynomial]] coefficient,
 * 
 *   false otherwise.
 */
emmy.polynomial.monomial_QMARK_ = (function emmy$polynomial$monomial_QMARK_(p){
return (((!(emmy.polynomial.polynomial_QMARK_(p)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(emmy.polynomial.bare_terms(p)))));
});
/**
 * Returns true if `p` is a [monic
 *   polynomial](https://en.wikipedia.org/wiki/Monic_polynomial), false otherwise.
 * 
 *   A monic polynomial is a univariate polynomial with a leading coefficient that
 *   responds `true` to [[emmy.value/one?]]. This means that any coefficient
 *   that responds `true` to [[emmy.value/one?]] also qualifies as a monic
 *   polynomial.
 */
emmy.polynomial.monic_QMARK_ = (function emmy$polynomial$monic_QMARK_(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),emmy.polynomial.arity(p));
if(and__5160__auto__){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.leading_coefficient(p));
} else {
return and__5160__auto__;
}
} else {
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(p);
}
});
/**
 * Returns true if `p` is a [[Polynomial]] of arity 1, false otherwise.
 */
emmy.polynomial.univariate_QMARK_ = (function emmy$polynomial$univariate_QMARK_(p){
return ((emmy.polynomial.polynomial_QMARK_(p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.bare_arity(p),(1))));
});
/**
 * Returns true if `p` is a [[Polynomial]] of arity > 1, false otherwise.
 */
emmy.polynomial.multivariate_QMARK_ = (function emmy$polynomial$multivariate_QMARK_(p){
return ((emmy.polynomial.polynomial_QMARK_(p)) && ((emmy.polynomial.bare_arity(p) > (1))));
});
/**
 * Returns true if the [[leading-base-coefficient]] of `p`
 *   is [[generic/negative?]], false otherwise.
 */
emmy.polynomial.negative_QMARK_ = (function emmy$polynomial$negative_QMARK_(p){
return emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.leading_base_coefficient(p));
});
/**
 * Given a [[Polynomial]], returns a new [[Polynomial]] instance generated by
 *   applying `f` to the coefficient of each term in `p` and filtering out all
 *   resulting zeros.
 * 
 *   Given a non-[[Polynomial]] coefficient, returns `(f p)`.
 * 
 *   NOTE that [[map-coefficients]] will return a non-[[Polynomial]] if the result
 *   of the mapping has only a constant term.
 */
emmy.polynomial.map_coefficients = (function emmy$polynomial$map_coefficients(f,p){
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.terms__GT_polynomial(emmy.polynomial.bare_arity(p),emmy.polynomial.impl.map_coefficients(f,emmy.polynomial.bare_terms(p)));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p) : f.call(null,p));
}
});
/**
 * Given a [[Polynomial]], returns a new [[Polynomial]] instance generated by
 *   applying `f` to the exponents of each term in `p` and filtering out all
 *   resulting zeros. The resulting [[Polynomial]] will have either the
 *   same [[arity]] as `p`, or the explicit, optional `new-arity` argument. (This
 *   is because `f` might increase or decrease the total arity.)
 * 
 *   Given a non-[[Polynomial]] coefficient, if `(f empty-exponents)` produces a
 *   non-zero result, errors without an explicit `new-arity` argument..
 * 
 *   NOTE that [[map-exponents]] will return a non-[[Polynomial]] if the result
 *   of the mapping has only a constant term.
 */
emmy.polynomial.map_exponents = (function emmy$polynomial$map_exponents(var_args){
var G__38456 = arguments.length;
switch (G__38456) {
case 2:
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3(f,p,null);
}));

(emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3 = (function (f,p,new_arity){
var force_arity = (function emmy$polynomial$force_arity(){
var or__5162__auto__ = new_arity;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.util.illegal("`new-arity` argument to `map-exponents` required when promoting constant.");
}
});
var handle_constant = (function emmy$polynomial$handle_constant(){
var f_expts = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.exponent.empty) : f.call(null,emmy.polynomial.exponent.empty));
if(cljs.core.empty_QMARK_(f_expts)){
return p;
} else {
var arity = force_arity();
return emmy.polynomial.__GT_Polynomial(arity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(f_expts,p)], null),null);
}
});
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$2((function (){var or__5162__auto__ = new_arity;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.polynomial.bare_arity(p);
}
})(),(function (){var iter__5649__auto__ = (function emmy$polynomial$iter__38463(s__38464){
return (new cljs.core.LazySeq(null,(function (){
var s__38464__$1 = s__38464;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38464__$1);
if(temp__5825__auto__){
var s__38464__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38464__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38464__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38466 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38465 = (0);
while(true){
if((i__38465 < size__5648__auto__)){
var vec__38467 = cljs.core._nth(c__5647__auto__,i__38465);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38467,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38467,(1),null);
var f_expts = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(expts) : f.call(null,expts));
cljs.core.chunk_append(b__38466,emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(f_expts,c));

var G__38729 = (i__38465 + (1));
i__38465 = G__38729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38466),emmy$polynomial$iter__38463(cljs.core.chunk_rest(s__38464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38466),null);
}
} else {
var vec__38470 = cljs.core.first(s__38464__$2);
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38470,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38470,(1),null);
var f_expts = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(expts) : f.call(null,expts));
return cljs.core.cons(emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(f_expts,c),emmy$polynomial$iter__38463(cljs.core.rest(s__38464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(emmy.polynomial.bare_terms(p));
})());
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return p;
} else {
return handle_constant();

}
}
}));

(emmy.polynomial.map_exponents.cljs$lang$maxFixedArity = 3);

/**
 * Given a univariate [[Polynomial]] (see [[univariate?]]) returns a dense vector
 *   of the coefficients of each term in ascending order.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (univariate->dense (make [1 0 0 2 3 4]))
 *   ;;=> [1 0 0 2 3 4]
 *   ```
 * 
 *   Supplying the second argument `x-degree` will pad the right side of the
 *   returning coefficient vector to be the max of `x-degree` and `(degree x)`.
 * 
 *   NOTE use [[lower-arity]] to generate a univariate polynomial in the first
 *   indeterminate, given a multivariate polynomial.
 */
emmy.polynomial.univariate__GT_dense = (function emmy$polynomial$univariate__GT_dense(var_args){
var G__38475 = arguments.length;
switch (G__38475) {
case 1:
return emmy.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$1 = (function (x){
return emmy.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$2(x,emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1(x));
}));

(emmy.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$2 = (function (x,x_degree){
if(emmy.polynomial.coeff_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(x_degree,(0)));
} else {
if(emmy.polynomial.univariate_QMARK_(x)){
} else {
throw (new Error("Assert failed: (univariate? x)"));
}

var d = emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1(x);
var terms = emmy.polynomial.bare_terms(x);
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var i = (0);
while(true){
if((i > d)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.persistent_BANG_(acc),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((x_degree - d),(0)));
} else {
var t = cljs.core.first(terms);
var e = emmy.polynomial.impl.exponents(t);
var md = emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(e,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(md,i)){
var G__38731 = cljs.core.rest(terms);
var G__38732 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,emmy.polynomial.impl.coefficient(t));
var G__38733 = (i + (1));
terms = G__38731;
acc = G__38732;
i = G__38733;
continue;
} else {
var G__38734 = terms;
var G__38735 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(0));
var G__38736 = (i + (1));
terms = G__38734;
acc = G__38735;
i = G__38736;
continue;
}
}
break;
}
}
}));

(emmy.polynomial.univariate__GT_dense.cljs$lang$maxFixedArity = 2);

/**
 * Given a univariate polynomial `p`, returns a [[series/PowerSeries]]
 *   representation of the supplied [[Polynomial]].
 * 
 *   Given a [[series/PowerSeries]], acts as identity.
 * 
 *   Non-[[Polynomial]] coefficients return [[series/PowerSeries]] instances
 *   via [[series/constant]]; any multivariate [[Polynomial]] throws an exception.
 * 
 *   NOTE use [[lower-arity]] to generate a univariate polynomial in the first
 *   indeterminate, given a multivariate polynomial.
 */
emmy.polynomial.__GT_power_series = (function emmy$polynomial$__GT_power_series(p){
if(emmy.series.power_series_QMARK_(p)){
return p;
} else {
if(emmy.polynomial.univariate_QMARK_(p)){
return emmy.series.power_series_STAR_(emmy.polynomial.univariate__GT_dense.cljs$core$IFn$_invoke$arity$1(p));
} else {
if(emmy.polynomial.polynomial_QMARK_(p)){
return emmy.util.illegal("Only univariate polynomials can be converted to [[PowerSeries]].\n         Use [[polynomial/lower]] to generate a univariate.");
} else {
return emmy.series.constant.cljs$core$IFn$_invoke$arity$1(p);

}
}
}
});
/**
 * Returns a univariate polynomial of all terms in the
 *   supplied [[series/PowerSeries]] instance, up to (and including) order
 *   `n-terms`.
 * 
 *   ```clojure
 *   (g/simplify
 *  ((from-power-series series/exp-series 3) 'x))
 *   ;; => (+ (* 1/6 (expt x 3)) (* 1/2 (expt x 2)) x 1)
 *   ```
 */
emmy.polynomial.from_power_series = (function emmy$polynomial$from_power_series(s,n_terms){
if(emmy.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (series/power-series? s)"));
}

return emmy.series.sum((function (){var G__38478 = emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$0();
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__38478) : s.call(null,G__38478));
})(),n_terms);
});
/**
 * Given some polynomial `p` and a coefficient `c`, returns a new [[Polynomial]]
 *   generated by multiplying each coefficient of `p` by `c` (on the right).
 * 
 *   See [[scale-l]] if left multiplication is important.
 * 
 *   NOTE that [[scale]] will return a non-[[Polynomial]] if the result of the
 *   mapping has only a constant term.
 */
emmy.polynomial.scale = (function emmy$polynomial$scale(p,c){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(c))){
return c;
} else {
return emmy.polynomial.map_coefficients((function (p1__38479_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p1__38479_SHARP_,c);
}),p);
}
});
/**
 * Given some polynomial `p` and a coefficient `c`, returns a new [[Polynomial]]
 *   generated by multiplying each coefficient of `p` by `c` (on the left).
 * 
 *   See [[scale]] if right multiplication is important.
 * 
 *   NOTE that [[scale-l]] will return a non-[[Polynomial]] if the result of the
 *   mapping has only a constant term.
 */
emmy.polynomial.scale_l = (function emmy$polynomial$scale_l(c,p){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(c))){
return c;
} else {
return emmy.polynomial.map_coefficients((function (p1__38480_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,p1__38480_SHARP_);
}),p);
}
});
/**
 * Given a polynomial `p`, returns a normalized polynomial generated by dividing
 *   through either the [[leading-coefficient]] of `p` or an optional, explicitly
 *   supplied scaling factor `c`.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (let [p (make [5 3 2 2 10])]
 *  (univariate->dense (normalize p)))
 *   ;;=> [1/2 3/10 1/5 1/5 1]
 *   ```
 */
emmy.polynomial.normalize = (function emmy$polynomial$normalize(var_args){
var G__38482 = arguments.length;
switch (G__38482) {
case 1:
return emmy.polynomial.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.normalize.cljs$core$IFn$_invoke$arity$1 = (function (p){
return emmy.polynomial.normalize.cljs$core$IFn$_invoke$arity$2(p,emmy.polynomial.leading_coefficient(p));
}));

(emmy.polynomial.normalize.cljs$core$IFn$_invoke$arity$2 = (function (p,c){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(c))){
return p;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(c))){
return emmy.util.arithmetic_ex((""+"Divide by zero: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)));
} else {
if(emmy.polynomial.polynomial_QMARK_(c)){
return (emmy.polynomial.evenly_divide.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.evenly_divide.cljs$core$IFn$_invoke$arity$2(p,c) : emmy.polynomial.evenly_divide.call(null,p,c));
} else {
return emmy.polynomial.scale(p,emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(c));

}
}
}
}));

(emmy.polynomial.normalize.cljs$lang$maxFixedArity = 2);

/**
 * Given a polynomial `p`, returns the [reciprocal
 *   polynomial](https://en.wikipedia.org/wiki/Reciprocal_polynomial) with respect
 *   to the `i`th indeterminate. `i` defaults to 0.
 * 
 *   The reciprocal polynomial of `p` with respect to `i` is generated by
 * 
 *   - treating the polynomial as univariate with respect to `i` and pushing all
 *  other terms into the coefficients of the polynomial
 *   - reversing the order of these coefficients
 *   - flattening the polynomial out again
 * 
 *   For example, note that the entries for the first indeterminate are reversed:
 * 
 *   ```clojure
 *   (= (make 3 {[3 0 0] 5 [2 0 1] 2 [0 2 1] 3})
 *   (reciprocal
 *     (make 3 {[0 0 0] 5 [1 0 1] 2 [3 2 1] 3})))
 *   ```
 */
emmy.polynomial.reciprocal = (function emmy$polynomial$reciprocal(var_args){
var G__38487 = arguments.length;
switch (G__38487) {
case 1:
return emmy.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$1 = (function (p){
return emmy.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$2(p,(0));
}));

(emmy.polynomial.reciprocal.cljs$core$IFn$_invoke$arity$2 = (function (p,i){
if(emmy.polynomial.polynomial_QMARK_(p)){
var d = emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$2(p,i);
if((d === (0))){
return p;
} else {
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$2((function (m){
var v = emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(m,i);
var v_SINGLEQUOTE_ = (d - v);
return emmy.polynomial.exponent.assoc(m,i,v_SINGLEQUOTE_);
}),p);
}
} else {
return p;
}
}));

(emmy.polynomial.reciprocal.cljs$lang$maxFixedArity = 2);

/**
 * Given some [[Polynomial]] `p`, returns `p` without its [[leading-term]].
 *   non-[[Polynomial]] `p` inputs are treated at constant polynomials and return
 *   `0`.
 * 
 *   NOTE that [[drop-leading-term]] will return a non-[[Polynomial]] if the result
 *   of the mapping has only a constant term.
 */
emmy.polynomial.drop_leading_term = (function emmy$polynomial$drop_leading_term(p){
if(emmy.polynomial.polynomial_QMARK_(p)){
var a = emmy.polynomial.bare_arity(p);
var terms = cljs.core.pop(emmy.polynomial.bare_terms(p));
return emmy.polynomial.terms__GT_polynomial(a,terms);
} else {
return (0);
}
});
/**
 * Accepts
 * 
 *   - two inputs `l` and `r`
 *   - A `coeff-op`, used when both inputs are non-[[Polynomial]]
 *   - a `terms-op` that acts on two vectors of bare terms
 * 
 *   And returns:
 * 
 *   - `(coeff-op l r)` when both inputs are non-[[Polynomial]],
 * 
 *   - `(terms-op l r)` otherwise, appropriately converting `l` or `r` into a
 *  singleton term vector when needed.
 * 
 *   The result is converted back to a [[Polynomial]] (or dropped to a coefficient)
 *   via [[terms->polynomial]], or a custom function supplied by the optional
 *   `:->poly` argument.
 */
emmy.polynomial.binary_combine = (function emmy$polynomial$binary_combine(var_args){
var args__5903__auto__ = [];
var len__5897__auto___38746 = arguments.length;
var i__5898__auto___38747 = (0);
while(true){
if((i__5898__auto___38747 < len__5897__auto___38746)){
args__5903__auto__.push((arguments[i__5898__auto___38747]));

var G__38748 = (i__5898__auto___38747 + (1));
i__5898__auto___38747 = G__38748;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return emmy.polynomial.binary_combine.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(emmy.polynomial.binary_combine.cljs$core$IFn$_invoke$arity$variadic = (function (l,r,coeff_op,terms_op,p__38497){
var map__38500 = p__38497;
var map__38500__$1 = cljs.core.__destructure_map(map__38500);
var __GT_poly = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38500__$1,new cljs.core.Keyword(null,"->poly","->poly",360305471),emmy.polynomial.terms__GT_polynomial);
var l_poly_QMARK_ = emmy.polynomial.polynomial_QMARK_(l);
var r_poly_QMARK_ = emmy.polynomial.polynomial_QMARK_(r);
if(((l_poly_QMARK_) && (r_poly_QMARK_))){
var G__38502 = emmy.polynomial.check_same_arity(l,r);
var G__38503 = (function (){var G__38504 = emmy.polynomial.bare_terms(l);
var G__38505 = emmy.polynomial.bare_terms(r);
return (terms_op.cljs$core$IFn$_invoke$arity$2 ? terms_op.cljs$core$IFn$_invoke$arity$2(G__38504,G__38505) : terms_op.call(null,G__38504,G__38505));
})();
return (__GT_poly.cljs$core$IFn$_invoke$arity$2 ? __GT_poly.cljs$core$IFn$_invoke$arity$2(G__38502,G__38503) : __GT_poly.call(null,G__38502,G__38503));
} else {
if(l_poly_QMARK_){
var G__38507 = emmy.polynomial.bare_arity(l);
var G__38508 = (function (){var G__38510 = emmy.polynomial.bare_terms(l);
var G__38511 = emmy.polynomial.impl.constant__GT_terms(r);
return (terms_op.cljs$core$IFn$_invoke$arity$2 ? terms_op.cljs$core$IFn$_invoke$arity$2(G__38510,G__38511) : terms_op.call(null,G__38510,G__38511));
})();
return (__GT_poly.cljs$core$IFn$_invoke$arity$2 ? __GT_poly.cljs$core$IFn$_invoke$arity$2(G__38507,G__38508) : __GT_poly.call(null,G__38507,G__38508));
} else {
if(r_poly_QMARK_){
var G__38513 = emmy.polynomial.bare_arity(r);
var G__38514 = (function (){var G__38515 = emmy.polynomial.impl.constant__GT_terms(l);
var G__38516 = emmy.polynomial.bare_terms(r);
return (terms_op.cljs$core$IFn$_invoke$arity$2 ? terms_op.cljs$core$IFn$_invoke$arity$2(G__38515,G__38516) : terms_op.call(null,G__38515,G__38516));
})();
return (__GT_poly.cljs$core$IFn$_invoke$arity$2 ? __GT_poly.cljs$core$IFn$_invoke$arity$2(G__38513,G__38514) : __GT_poly.call(null,G__38513,G__38514));
} else {
return (coeff_op.cljs$core$IFn$_invoke$arity$2 ? coeff_op.cljs$core$IFn$_invoke$arity$2(l,r) : coeff_op.call(null,l,r));

}
}
}
}));

(emmy.polynomial.binary_combine.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(emmy.polynomial.binary_combine.cljs$lang$applyTo = (function (seq38488){
var G__38489 = cljs.core.first(seq38488);
var seq38488__$1 = cljs.core.next(seq38488);
var G__38490 = cljs.core.first(seq38488__$1);
var seq38488__$2 = cljs.core.next(seq38488__$1);
var G__38491 = cljs.core.first(seq38488__$2);
var seq38488__$3 = cljs.core.next(seq38488__$2);
var G__38492 = cljs.core.first(seq38488__$3);
var seq38488__$4 = cljs.core.next(seq38488__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38489,G__38490,G__38491,G__38492,seq38488__$4);
}));

/**
 * Returns the negation of polynomial `p`, i.e., a polynomial with all coefficients
 *   negated.
 */
emmy.polynomial.negate = (function emmy$polynomial$negate(p){
return emmy.polynomial.map_coefficients(emmy.generic.negate,p);
});
/**
 * If the [[leading-coefficient]] of `p` is negative, returns `(negate p)`, else
 *   acts as identity.
 */
emmy.polynomial.abs = (function emmy$polynomial$abs(p){
if(cljs.core.truth_(emmy.polynomial.negative_QMARK_(p))){
return emmy.polynomial.negate(p);
} else {
return p;
}
});
/**
 * Returns the sum of polynomials `p` and `q`, with appropriate handling for
 *   non-[[Polynomial]] coefficient inputs on either or both sides.
 */
emmy.polynomial.add = (function emmy$polynomial$add(p,q){
return emmy.polynomial.binary_combine(p,q,emmy.generic.add,emmy.polynomial.impl.add);
});
/**
 * Returns the difference of polynomials `p` and `q`, with appropriate handling
 *   for non-[[Polynomial]] coefficient inputs on either or both sides.
 */
emmy.polynomial.sub = (function emmy$polynomial$sub(p,q){
return emmy.polynomial.binary_combine(p,q,emmy.generic.sub,emmy.polynomial.impl.sub);
});
/**
 * Returns the product of polynomials `p` and `q`, with appropriate handling for
 *   non-[[Polynomial]] coefficient inputs on either or both sides.
 */
emmy.polynomial.mul = (function emmy$polynomial$mul(p,q){
return emmy.polynomial.binary_combine(p,q,emmy.generic.mul,emmy.polynomial.impl.mul);
});
/**
 * Returns the square of polynomial `p`. Equivalent to `(mul p p)`.
 */
emmy.polynomial.square = (function emmy$polynomial$square(p){
return emmy.polynomial.mul(p,p);
});
/**
 * Returns the cube of polynomial `p`. Equivalent to `(mul p (mul p p))`.
 */
emmy.polynomial.cube = (function emmy$polynomial$cube(p){
return emmy.polynomial.mul(p,emmy.polynomial.mul(p,p));
});
/**
 * Returns a polynomial generated by raising the input polynomial `p` to
 *   the (integer) power `n`.
 * 
 *   Negative exponents are not supported. For negative polynomial exponentation,
 *   see [[rational-function/expt]].
 */
emmy.polynomial.expt = (function emmy$polynomial$expt(p,n){
var expt_iter = (function emmy$polynomial$expt_$_expt_iter(x,n__$1,answer){
while(true){
if((n__$1 === (0))){
return answer;
} else {
if(cljs.core.even_QMARK_(n__$1)){
var G__38769 = emmy.polynomial.mul(x,x);
var G__38770 = cljs.core.quot(n__$1,(2));
var G__38771 = answer;
x = G__38769;
n__$1 = G__38770;
answer = G__38771;
continue;
} else {
var G__38772 = x;
var G__38773 = (n__$1 - (1));
var G__38774 = emmy.polynomial.mul(x,answer);
x = G__38772;
n__$1 = G__38773;
answer = G__38774;
continue;

}
}
break;
}
});
if(emmy.polynomial.coeff_QMARK_(p)){
return emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(p,n);
} else {
if((!(emmy.value.native_integral_QMARK_(n)))){
return emmy.util.illegal((""+"Can only raise an FPF to an exact integer power: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
} else {
if((n < (0))){
return emmy.util.illegal((""+"No inverse -- FPF:EXPT:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return p;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(n))){
return emmy.util.arithmetic_ex("poly 0^0");
} else {
return p;
}
} else {
return expt_iter(p,n,(1));

}
}
}
}
}
});
/**
 * Given two polynomials `u` and `v`, returns a pair of polynomials of the form
 *   `[quotient, remainder]` using [polynomial long
 *   division](https://en.wikipedia.org/wiki/Polynomial_long_division).
 * 
 *   The contract satisfied by this returned pair is that
 * 
 *   ```
 *   u == (add (mul quotient v) remainder)
 *   ```
 */
emmy.polynomial.divide = (function emmy$polynomial$divide(u,v){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
return emmy.util.illegal("internal polynomial division by zero");
} else {
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(u);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(v);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,(0)], null);
} else {
var coeff_COLON_div = (function emmy$polynomial$divide_$_coeff_COLON_div(l,r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.quotient.cljs$core$IFn$_invoke$arity$2(l,r),emmy.generic.remainder.cljs$core$IFn$_invoke$arity$2(l,r)], null);
});
return emmy.polynomial.binary_combine.cljs$core$IFn$_invoke$arity$variadic(u,v,coeff_COLON_div,emmy.polynomial.impl.div,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->poly","->poly",360305471),(function (a,p__38540){
var vec__38541 = p__38540;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38541,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.terms__GT_polynomial(a,q),emmy.polynomial.terms__GT_polynomial(a,r)], null);
})], 0));

}
}
});
/**
 * Returns true if the numerator `n` is evenly divisible by `d` (i.e., leaves no
 *   remainder), false otherwise.
 * 
 *   NOTE that this performs a full division with [[divide]]. If you're planning on
 *   doing this, you may as well call [[divide]] and check that the remainder
 *   satisfies [[emmy.value/zero?]].
 */
emmy.polynomial.divisible_QMARK_ = (function emmy$polynomial$divisible_QMARK_(n,d){
var vec__38544 = emmy.polynomial.divide(n,d);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38544,(1),null);
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r);
});
/**
 * Returns the result of dividing the polynomial `u` by `v` (non-[[Polynomial]]
 *   instances are allowed).
 * 
 *   Throws an exception if the division leaves a remainder. Else, returns the
 *   quotient.
 */
emmy.polynomial.evenly_divide = (function emmy$polynomial$evenly_divide(u,v){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
return u;
} else {
var vec__38547 = emmy.polynomial.divide(u,v);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(1),null);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
} else {
emmy.util.illegal_state((""+"expected even division left a remainder! "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" r "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)));
}

return q;
}
});
/**
 * ClojureScript multiplication doesn't autopromote; we expect large values
 *   in [[pseudo-remainder]], and use [[->big]] to pre-cast the factors
 *   to [[util/bigint]] so they don't overflow.
 */
emmy.polynomial.__GT_big = (function emmy$polynomial$__GT_big(c){
if(emmy.value.integral_QMARK_(c)){
return emmy.util.bigint(c);
} else {
return c;
}
});
/**
 * Returns the pseudo-remainder of univariate polynomials `u` and `v`.
 * 
 *   NOTE: Fractions won't appear in the result; instead the divisor is multiplied
 *   by the leading coefficient of the dividend before quotient terms are generated
 *   so that division will not result in fractions.
 * 
 *   Returns a pair of
 * 
 *   - the remainder
 *   - the integerizing factor needed to make this happen.
 * 
 *   Similar in spirit to Knuth's algorithm 4.6.1R, except we don't multiply the
 *   remainder through during gaps in the remainder. Since you don't know up front
 *   how many times the integerizing multiplication will be done, we also return
 *   the number d for which d * u = q * v + r.
 */
emmy.polynomial.pseudo_remainder = (function emmy$polynomial$pseudo_remainder(u,v){
if(emmy.polynomial.univariate_QMARK_(u)){
} else {
throw (new Error("Assert failed: (univariate? u)"));
}

if(emmy.polynomial.univariate_QMARK_(v)){
} else {
throw (new Error("Assert failed: (univariate? v)"));
}

if(cljs.core.not(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
} else {
throw (new Error("Assert failed: (not (g/zero? v))"));
}

var vec__38550 = emmy.polynomial.leading_term(v);
var vn_expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(0),null);
var vn_coeff = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(1),null);
var vn_coeff__$1 = emmy.polynomial.__GT_big(vn_coeff);
var _STAR_vn = (function (p){
return emmy.polynomial.scale(p,vn_coeff__$1);
});
var n = emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$1(vn_expts);
var remainder = u;
var d = (0);
while(true){
var m = emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1(remainder);
var c = emmy.polynomial.leading_coefficient(remainder);
var c__$1 = emmy.polynomial.__GT_big(c);
if((m < n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,d], null);
} else {
var G__38802 = emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.sub(_STAR_vn(remainder),emmy.polynomial.mul(emmy.polynomial.c_STAR_xn((1),c__$1,(m - n)),v)));
var G__38803 = (d + (1));
remainder = G__38802;
d = G__38803;
continue;
}
break;
}
});
/**
 * Returns true if `n` is a valid variable index for the [[Polynomial]] `p`, and
 *   the variable with that index has no powers greater than `0` in `p`, false
 *   otherwise.
 */
emmy.polynomial.contractible_QMARK_ = (function emmy$polynomial$contractible_QMARK_(p,n){
return ((emmy.polynomial.valid_arity_QMARK_(p,n)) && ((emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$2(p,n) === (0))));
});
/**
 * If `p` is [[contractible?]] at index `n`, returns a new [[Polynomial]] instance
 *   of [[arity]] `1` less than `p` with all variable indices > `n` decremented.
 * 
 *   For non-[[Polynomial]] inputs, acts as identity. Throws if `p` is not
 *   explicitly [[contractible?]].
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (make 2 {[1 2] 3 [3 4] 5})
 *   (contract
 *     (make 3 {[0 1 2] 3 [0 3 4] 5}) 0))
 *   ```
 */
emmy.polynomial.contract = (function emmy$polynomial$contract(p,n){
if((!(emmy.polynomial.polynomial_QMARK_(p)))){
return p;
} else {
if(emmy.polynomial.contractible_QMARK_(p,n)){
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3((function (p1__38553_SHARP_){
return emmy.polynomial.exponent.lower.cljs$core$IFn$_invoke$arity$2(p1__38553_SHARP_,n);
}),p,(emmy.polynomial.bare_arity(p) - (1)));
} else {
return emmy.util.illegal((""+"Polynomial not contractible: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+" in position "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));

}
}
});
/**
 * Interpolates a new variable into the supplied [[Polynomial]] `p` at index `n`
 *   by incrementing any existing variable index >= `n`.
 * 
 *   Returns a new [[Polynomial]] of [[arity]] 1 greater than the [[arity]] of `p`,
 *   or equal to `(inc n)` if `n` is greater than the [[arity]] of `p`.
 * 
 *   For non-[[Polynomial]] inputs (or negative `n`), acts as identity.
 */
emmy.polynomial.extend = (function emmy$polynomial$extend(p,n){
if((((!(emmy.polynomial.polynomial_QMARK_(p)))) || ((n < (0))))){
return p;
} else {
var a = emmy.polynomial.bare_arity(p);
if((n > a)){
return emmy.polynomial.__GT_Polynomial((n + (1)),emmy.polynomial.bare_terms(p),cljs.core.meta(p));
} else {
return emmy.polynomial.map_exponents.cljs$core$IFn$_invoke$arity$3((function (p1__38554_SHARP_){
return emmy.polynomial.exponent.raise.cljs$core$IFn$_invoke$arity$3(p1__38554_SHARP_,n,(0));
}),p,(a + (1)));
}
}
});
/**
 * Given a multivariate [[Polynomial]] `p`, returns an equivalent
 *   univariate [[Polynomial]] whose coefficients are polynomials of [[arity]]
 *   equal to one less than the [[arity]] of `p`.
 * 
 *   Use [[raise-arity]] to undo this transformation. See [[with-lower-arity]] for
 *   a function that packages these two transformations.
 * 
 *   NOTE that [[lower-arity]] will drop a coefficient down to a non-[[Polynomial]]
 *   if the result of extracting the first variable leaves a constant term.
 */
emmy.polynomial.lower_arity = (function emmy$polynomial$lower_arity(p){
if(emmy.polynomial.multivariate_QMARK_(p)){
} else {
throw (new Error("Assert failed: (multivariate? p)"));
}

var A = emmy.polynomial.bare_arity(p);
var lower_terms = (function emmy$polynomial$lower_arity_$_lower_terms(terms){
return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$2((A - (1)),(function (){var iter__5649__auto__ = (function emmy$polynomial$lower_arity_$_lower_terms_$_iter__38566(s__38567){
return (new cljs.core.LazySeq(null,(function (){
var s__38567__$1 = s__38567;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38567__$1);
if(temp__5825__auto__){
var s__38567__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38567__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38567__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38569 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38568 = (0);
while(true){
if((i__38568 < size__5648__auto__)){
var vec__38570 = cljs.core._nth(c__5647__auto__,i__38568);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38570,(1),null);
cljs.core.chunk_append(b__38569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.exponent.lower.cljs$core$IFn$_invoke$arity$2(xs,(0)),c], null));

var G__38808 = (i__38568 + (1));
i__38568 = G__38808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38569),emmy$polynomial$lower_arity_$_lower_terms_$_iter__38566(cljs.core.chunk_rest(s__38567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38569),null);
}
} else {
var vec__38573 = cljs.core.first(s__38567__$2);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38573,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38573,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.exponent.lower.cljs$core$IFn$_invoke$arity$2(xs,(0)),c], null),emmy$polynomial$lower_arity_$_lower_terms_$_iter__38566(cljs.core.rest(s__38567__$2)));
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
return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38576){
var vec__38577 = p__38576;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38577,(0),null);
var terms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38577,(1),null);
var expts = (((x === (0)))?emmy.polynomial.exponent.empty:(emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),x) : emmy.polynomial.exponent.make.call(null,(0),x)));
return emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,lower_terms(terms));
}),cljs.core.group_by((function (p1__38555_SHARP_){
return emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.impl.exponents(p1__38555_SHARP_),(0));
}),emmy.polynomial.bare_terms(p))));
});
/**
 * Given either a non-[[Polynomial]] coefficient or a univariate [[Polynomial]]
 *   with possibly-[[Polynomial]] coefficients, returns a new [[Polynomial]] of
 *   arity `a` generated by attaching the polynomial coefficients back as variables
 *   starting with `1`.
 * 
 *   [[raise-arity]] undoes the transformation of [[lower-arity]].
 *   See [[with-lower-arity]] for a function that packages these two
 *   transformations.
 */
emmy.polynomial.raise_arity = (function emmy$polynomial$raise_arity(p,a){
if(emmy.polynomial.polynomial_QMARK_(p)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.bare_arity(p),(1))){
} else {
throw (new Error("Assert failed: (= (bare-arity p) 1)"));
}

var terms = emmy.polynomial.impl.sparse__GT_terms.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function emmy$polynomial$raise_arity_$_iter__38580(s__38581){
return (new cljs.core.LazySeq(null,(function (){
var s__38581__$1 = s__38581;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38581__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__38586 = cljs.core.first(xs__6385__auto__);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38586,(1),null);
var iterys__5645__auto__ = ((function (s__38581__$1,vec__38586,x,q,xs__6385__auto__,temp__5825__auto__){
return (function emmy$polynomial$raise_arity_$_iter__38580_$_iter__38582(s__38583){
return (new cljs.core.LazySeq(null,((function (s__38581__$1,vec__38586,x,q,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__38583__$1 = s__38583;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__38583__$1);
if(temp__5825__auto____$1){
var s__38583__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38583__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38583__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38585 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38584 = (0);
while(true){
if((i__38584 < size__5648__auto__)){
var vec__38589 = cljs.core._nth(c__5647__auto__,i__38584);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38589,(1),null);
var expts = emmy.polynomial.exponent.raise.cljs$core$IFn$_invoke$arity$3(ys,(0),emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(x,(0)));
cljs.core.chunk_append(b__38585,emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,c));

var G__38811 = (i__38584 + (1));
i__38584 = G__38811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38585),emmy$polynomial$raise_arity_$_iter__38580_$_iter__38582(cljs.core.chunk_rest(s__38583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38585),null);
}
} else {
var vec__38592 = cljs.core.first(s__38583__$2);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38592,(1),null);
var expts = emmy.polynomial.exponent.raise.cljs$core$IFn$_invoke$arity$3(ys,(0),emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(x,(0)));
return cljs.core.cons(emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,c),emmy$polynomial$raise_arity_$_iter__38580_$_iter__38582(cljs.core.rest(s__38583__$2)));
}
} else {
return null;
}
break;
}
});})(s__38581__$1,vec__38586,x,q,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__38581__$1,vec__38586,x,q,xs__6385__auto__,temp__5825__auto__))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(emmy.polynomial.__GT_terms(q)));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,emmy$polynomial$raise_arity_$_iter__38580(cljs.core.rest(s__38581__$1)));
} else {
var G__38815 = cljs.core.rest(s__38581__$1);
s__38581__$1 = G__38815;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(emmy.polynomial.bare_terms(p));
})());
return emmy.polynomial.__GT_Polynomial(a,terms,cljs.core.meta(p));
} else {
return emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2(a,p);
}
});
/**
 * Given:
 * 
 *   - multivariate [[Polynomial]]s `u` and `v`
 *   - a `continue` function that accepts two univariate [[Polynomial]]s with
 *  possibly-[[Polynomial]] coefficients,
 * 
 *   Returns the result of calling [[lower-arity]] on `u` and `v`, passing the
 *   results to `continue` and using [[raise-arity]] to raise the result back to
 *   the original shared [[arity]] of `u` and `v`.
 * 
 *   The exception is that if `continue` returns a
 *   non-[[Polynomial]], [[with-lower-arity]] will not attempt to re-package it as
 *   a [[Polynomial]].
 */
emmy.polynomial.with_lower_arity = (function emmy$polynomial$with_lower_arity(u,v,continue$){
var a = emmy.polynomial.check_same_arity(u,v);
var result = (function (){var G__38595 = emmy.polynomial.lower_arity(u);
var G__38596 = emmy.polynomial.lower_arity(v);
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__38595,G__38596) : continue$.call(null,G__38595,G__38596));
})();
if(emmy.polynomial.polynomial_QMARK_(result)){
return emmy.polynomial.raise_arity(result,a);
} else {
return result;
}
});
/**
 * Returns the result of evaluating the univariate [[Polynomial]] `p` at `x`
 *   using [Horner's rule](https://en.wikipedia.org/wiki/Horner%27s_method).
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 * 
 *   NOTE In general, the coefficients of the `p` will themselves
 *   be [[Polynomial]]s, which must then evaluated with values for their
 *   indeterminates. See [[evaluate]] for a multivariate version
 *   of [[evaluate-1]].
 */
emmy.polynomial.evaluate_1 = (function emmy$polynomial$evaluate_1(p,x){
if((!(emmy.polynomial.polynomial_QMARK_(p)))){
return p;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),emmy.polynomial.bare_arity(p))){
} else {
throw (new Error((""+"Assert failed: "+"`evaluate-1` requires a univariate polynomial!"+"\n"+"(= 1 (bare-arity p))")));
}

var terms = emmy.polynomial.bare_terms(p);
var result = (0);
var x_STAR__STAR_e = (1);
var e = (0);
while(true){
var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(0));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__38600 = temp__5823__auto__;
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38600,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38600,(1),null);
var e_SINGLEQUOTE_ = emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(expts,(0));
var x_STAR__STAR_e_SINGLEQUOTE_ = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x_STAR__STAR_e,emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(x,(e_SINGLEQUOTE_ - e)));
var G__38821 = cljs.core.next(terms);
var G__38822 = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(result,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x_STAR__STAR_e_SINGLEQUOTE_));
var G__38823 = x_STAR__STAR_e_SINGLEQUOTE_;
var G__38824 = e_SINGLEQUOTE_;
terms = G__38821;
result = G__38822;
x_STAR__STAR_e = G__38823;
e = G__38824;
continue;
} else {
return result;
}
break;
}
}
});
/**
 * Returns the result of evaluating a multivariate [[Polynomial]] `p` at the
 *   values in the sequence `xs` using [Horner's
 *   rule](https://en.wikipedia.org/wiki/Horner%27s_method).
 * 
 *   If `p` is a non-[[Polynomial]] coefficient, acts as identity.
 * 
 *   Supplying too many arguments in `xs` (i.e., a greater number than the [[arity]]
 *   of `p`) will throw an exception. Too few arguments will result in a partial
 *   evaluation of `p`, leaving the remaining indeterminates with their variable
 *   indices shifted down.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (= (make [0 0 '(* 3 (expt x 2) y) 0 '(* 5 (expt x 2) (expt y 3))])
 *   (simplify
 *     (evaluate
 *       (make 3 {[2 1 2] 3 [2 3 4] 5}) ['x 'y])))
 *   ```
 */
emmy.polynomial.evaluate = (function emmy$polynomial$evaluate(p,xs){
while(true){
if((!(emmy.polynomial.polynomial_QMARK_(p)))){
return p;
} else {
var a = emmy.polynomial.bare_arity(p);
if((cljs.core.count(xs) <= a)){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"Too many args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs)))+"\n"+"(<= (count xs) a)")));
}

if(cljs.core.empty_QMARK_(xs)){
return p;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return (0);
} else {
var x = cljs.core.first(xs);
var x__$1 = ((((emmy.polynomial.polynomial_QMARK_(x)) && ((a > (1)))))?emmy.polynomial.constant.cljs$core$IFn$_invoke$arity$2((a - (1)),x):x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,(1))){
return emmy.polynomial.evaluate_1(p,x__$1);
} else {
var L = emmy.polynomial.evaluate_1(emmy.polynomial.lower_arity(p),x__$1);
if(emmy.polynomial.polynomial_QMARK_(L)){
var G__38825 = L;
var G__38826 = cljs.core.next(xs);
p = G__38825;
xs = G__38826;
continue;
} else {
return L;
}
}

}
}
}
break;
}
});
/**
 * Takes a univariate polynomial `a`, an argument `z` and a continuation
 *   `cont` (`vector` by default) and calls the continuation with (SEE BELOW).
 * 
 *   This Horner's rule evaluator is restricted to numerical coefficients and
 *   univariate polynomials. It returns by calling `cont` with 4 arguments:
 * 
 *   - the computed value
 *   - the values of the first two derivatives
 *   - an estimate of the roundoff error incurred in computing the value
 * 
 *   The recurrences used are from Kahan's 18 Nov 1986 paper ['Roundoff in
 *   Polynomial
 *   Evaluation'](https://people.eecs.berkeley.edu/~wkahan/Math128/Poly.pdf),
 *   generalized for sparse representations and another derivative by GJS.
 * 
 *   For $p = A(z)$, $q = A'(z)$, $r = A''(z)$, and $e$ = error in $A(x)$,
 * 
 *   $$p_{j+n} = z^n p_j + a_{j+n}$$
 * 
 *   $$e_{j+n} = |z|^n ( e_j + (n-1) p_j ) + |p_{j+n}|$$
 * 
 *   $$q_{j+n} = z^n q_j + n z^{n-1} p_j$$
 * 
 *   $$r_{j+n} = z^n r_j + n z^{n-1} q_j + 1/2 n (n-1) z^{n-2} p_j$$
 */
emmy.polynomial.horner_with_error = (function emmy$polynomial$horner_with_error(var_args){
var G__38604 = arguments.length;
switch (G__38604) {
case 2:
return emmy.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$2 = (function (a,z){
return emmy.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$3(a,z,cljs.core.vector);
}));

(emmy.polynomial.horner_with_error.cljs$core$IFn$_invoke$arity$3 = (function (a,z,cont){
if(emmy.polynomial.univariate_QMARK_(a)){
} else {
throw (new Error("Assert failed: (univariate? a)"));
}

if(typeof z === 'number'){
} else {
throw (new Error("Assert failed: (number? z)"));
}

var call = (function emmy$polynomial$call(d,p,q,r,e,a__$1){
var next_degree = emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1(a__$1);
var n = ((emmy.polynomial.polynomial_QMARK_(a__$1))?(d - next_degree):d);
var finish = (function (np,nq,nr,ne){
if(emmy.polynomial.polynomial_QMARK_(a__$1)){
return emmy$polynomial$call(next_degree,np,nq,nr,ne,emmy.polynomial.drop_leading_term(a__$1));
} else {
var G__38609 = np;
var G__38610 = nq;
var G__38611 = ((2) * nr);
var G__38612 = (emmy.util.machine_epsilon * ((ne - Math.abs(np)) + ne));
return (cont.cljs$core$IFn$_invoke$arity$4 ? cont.cljs$core$IFn$_invoke$arity$4(G__38609,G__38610,G__38611,G__38612) : cont.call(null,G__38609,G__38610,G__38611,G__38612));
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1))){
var np = ((z * p) + emmy.polynomial.leading_coefficient(a__$1));
var nq = ((z * q) + p);
var nr = ((z * r) + q);
var ne = ((Math.abs(z) * e) + Math.abs(np));
return finish(np,nq,nr,ne);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(2))){
var z_n = (z * z);
var az_n = Math.abs(z_n);
var np = ((z_n * p) + emmy.polynomial.leading_coefficient(a__$1));
var nq = ((z_n * q) + ((2) * (z * p)));
var nr = (((z_n * r) + (((2) * z) * q)) + p);
var ne = ((az_n * (e + p)) + Math.abs(np));
return finish(np,nq,nr,ne);
} else {
var z_n_2 = emmy.polynomial.expt(z,(n - (2)));
var z_n_1 = (z_n_2 * z);
var z_n = (z_n_1 * z);
var az_n = Math.abs(z_n);
var np = ((z_n * p) + emmy.polynomial.leading_coefficient(a__$1));
var nq = ((z_n * q) + (n * (z_n_1 * p)));
var nr = (((z_n * r) + ((n * z_n_1) * q)) + ((((((1) / (2)) * n) * (n - (1))) * z_n_2) * p));
var ne = ((az_n * (e + ((n - (1)) * p))) + Math.abs(np));
return finish(np,nq,nr,ne);

}
}
});
var lc = emmy.polynomial.leading_coefficient(a);
return call(emmy.polynomial.degree.cljs$core$IFn$_invoke$arity$1(a),lc,(0),(0),(((1) / (2)) * Math.abs(lc)),emmy.polynomial.drop_leading_term(a));
}));

(emmy.polynomial.horner_with_error.cljs$lang$maxFixedArity = 3);

/**
 * Given some [[Polynomial]] `p`, returns a new [[Polynomial]] generated by
 *   substituting each indeterminate `x_i` for `f_i * x_i`, where `f_i` is a factor
 *   supplied in the `factors` sequence.
 * 
 *   When `p` is a multivariate [[Polynomial]], each factor must be either a
 *   non-[[Polynomial]] or a [[Polynomial]] with the same [[arity]] as `p`.
 */
emmy.polynomial.arg_scale = (function emmy$polynomial$arg_scale(p,factors){
if(cljs.core._EQ_){
} else {
throw (new Error("Assert failed: ="));
}

if(cljs.core.truth_(emmy.polynomial.arity(p))){
} else {
throw (new Error("Assert failed: (arity p)"));
}

if(cljs.core.truth_(cljs.core.count(factors))){
} else {
throw (new Error("Assert failed: (count factors)"));
}

return emmy.polynomial.evaluate(p,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.mul,factors,emmy.polynomial.new_variables(emmy.polynomial.arity(p))));
});
/**
 * Given some [[Polynomial]] `p`, returns a new [[Polynomial]] generated by
 *   substituting each indeterminate `x_i` for `s_i + x_i`, where `s_i` is a shift
 *   supplied in the `shifts` sequence.
 * 
 *   When `p` is a multivariate [[Polynomial]], each shift must be either a
 *   non-[[Polynomial]] or a [[Polynomial]] with the same [[arity]] as `p`.
 */
emmy.polynomial.arg_shift = (function emmy$polynomial$arg_shift(p,shifts){
if(cljs.core._EQ_){
} else {
throw (new Error("Assert failed: ="));
}

if(cljs.core.truth_(emmy.polynomial.arity(p))){
} else {
throw (new Error("Assert failed: (arity p)"));
}

if(cljs.core.truth_(cljs.core.count(shifts))){
} else {
throw (new Error("Assert failed: (count shifts)"));
}

return emmy.polynomial.evaluate(p,cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.add,shifts,emmy.polynomial.new_variables(emmy.polynomial.arity(p))));
});
/**
 * Given some [[Polynomial]] `p`, returns the partial derivative of `p` with
 *   respect to the `i`th indeterminate. Throws if `i` is an invalid indeterminate
 *   index for `p`.
 * 
 *   For non-[[Polynomial]] inputs, returns `0`.
 */
emmy.polynomial.partial_derivative = (function emmy$polynomial$partial_derivative(p,i){
if((!(emmy.polynomial.polynomial_QMARK_(p)))){
return (0);
} else {
emmy.polynomial.validate_arity_BANG_(p,i);

return emmy.polynomial.make.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.bare_arity(p),(function (){var iter__5649__auto__ = (function emmy$polynomial$partial_derivative_$_iter__38613(s__38614){
return (new cljs.core.LazySeq(null,(function (){
var s__38614__$1 = s__38614;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38614__$1);
if(temp__5825__auto__){
var s__38614__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38614__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38614__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38616 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38615 = (0);
while(true){
if((i__38615 < size__5648__auto__)){
var vec__38617 = cljs.core._nth(c__5647__auto__,i__38615);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38617,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38617,(1),null);
var xi = (xs.cljs$core$IFn$_invoke$arity$2 ? xs.cljs$core$IFn$_invoke$arity$2(i,(0)) : xs.call(null,i,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),xi)){
cljs.core.chunk_append(b__38616,(function (){var expts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),xi))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(xs,i):cljs.core.update.cljs$core$IFn$_invoke$arity$3(xs,i,cljs.core.dec));
var coeff = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(xi,c);
return emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coeff);
})());

var G__38848 = (i__38615 + (1));
i__38615 = G__38848;
continue;
} else {
var G__38849 = (i__38615 + (1));
i__38615 = G__38849;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38616),emmy$polynomial$partial_derivative_$_iter__38613(cljs.core.chunk_rest(s__38614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38616),null);
}
} else {
var vec__38620 = cljs.core.first(s__38614__$2);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38620,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38620,(1),null);
var xi = (xs.cljs$core$IFn$_invoke$arity$2 ? xs.cljs$core$IFn$_invoke$arity$2(i,(0)) : xs.call(null,i,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),xi)){
return cljs.core.cons((function (){var expts = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),xi))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(xs,i):cljs.core.update.cljs$core$IFn$_invoke$arity$3(xs,i,cljs.core.dec));
var coeff = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(xi,c);
return emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2(expts,coeff);
})(),emmy$polynomial$partial_derivative_$_iter__38613(cljs.core.rest(s__38614__$2)));
} else {
var G__38850 = cljs.core.rest(s__38614__$2);
s__38614__$1 = G__38850;
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
return iter__5649__auto__(emmy.polynomial.bare_terms(p));
})());
}
});
/**
 * Returns the sequence of partial derivatives of [[Polynomial]] `p` with respect
 *   to each indeterminate. The returned sequence has length equal to the [[arity]]
 *   of `p`.
 * 
 *   For non-[[Polynomial]] inputs, returns an empty sequence.
 */
emmy.polynomial.partial_derivatives = (function emmy$polynomial$partial_derivatives(p){
if((!(emmy.polynomial.polynomial_QMARK_(p)))){
return cljs.core.PersistentVector.EMPTY;
} else {
var iter__5649__auto__ = (function emmy$polynomial$partial_derivatives_$_iter__38623(s__38624){
return (new cljs.core.LazySeq(null,(function (){
var s__38624__$1 = s__38624;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38624__$1);
if(temp__5825__auto__){
var s__38624__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38624__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38624__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38626 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38625 = (0);
while(true){
if((i__38625 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__38625);
cljs.core.chunk_append(b__38626,emmy.polynomial.partial_derivative(p,i));

var G__38853 = (i__38625 + (1));
i__38625 = G__38853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38626),emmy$polynomial$partial_derivatives_$_iter__38623(cljs.core.chunk_rest(s__38624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38626),null);
}
} else {
var i = cljs.core.first(s__38624__$2);
return cljs.core.cons(emmy.polynomial.partial_derivative(p,i),emmy$polynomial$partial_derivatives_$_iter__38623(cljs.core.rest(s__38624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.bare_arity(p)));
}
});
/**
 * These operations are those allowed between [[Polynomial]] and coefficient
 *   instances.
 */
emmy.polynomial.operator_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"cube","cube",138920159,null),new cljs.core.Symbol(null,"gcd","gcd",1659909537,null),new cljs.core.Symbol(null,"expt","expt",2123850345,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"negate","negate",337772450,null),new cljs.core.Symbol(null,"square","square",-1842001092,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"lcm","lcm",-1699262564,null),new cljs.core.Symbol(null,"-","-",-471816912,null)],[emmy.generic.cube,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(emmy.generic.gcd,(0)),emmy.generic.expt,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$2(emmy.generic.add,(0)),emmy.generic.negate,emmy.generic.square,emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(emmy.generic.mul,(1),emmy.generic.zero_QMARK_),emmy.util.aggregate.monoid.cljs$core$IFn$_invoke$arity$3(emmy.generic.lcm,(1),emmy.generic.zero_QMARK_),emmy.util.aggregate.group.cljs$core$IFn$_invoke$arity$4(emmy.generic.sub,emmy.generic.add,emmy.generic.negate,(0))]);
/**
 * Set of all arithmetic functions allowed between [[Polynomial]] and coefficient
 *   instances.
 */
emmy.polynomial.operators_known = emmy.util.keyset(emmy.polynomial.operator_table);
/**
 * Converts the supplied symbolic expression `expr` into Flat Polynomial canonical
 *   form (i.e., a [[Polynomial]] instance). `expr` should be a bare, unwrapped
 *   expression built out of Clojure data structures.
 * 
 *   Returns the result of calling continuation `cont` with the [[Polynomial]] and
 *   the list of variables corresponding to each indeterminate in
 *   the [[Polynomial]]. (`cont `defaults to `vector`).
 * 
 *   The second optional argument `v-compare` allows you to provide a Comparator
 *   between variables. Sorting indeterminates by `v-compare` will determine the
 *   order of the indeterminates in the generated [[Polynomial]]. The list of
 *   variables passed to `cont` will be sorted using `v-compare`.
 * 
 *   Absorbing an expression with [[expression->]] and emitting it again
 *   with [[->expression]] will generate the canonical form of an expression, with
 *   respect to the operations in the [[operators-known]] set.
 * 
 *   This kind of simplification proceeds purely symbolically over the known Flat
 *   Polynomial operations; other operations outside the arithmetic available in
 *   polynomials over commutative rings should be factored out by an expression
 *   analyzer (see [[emmy.expression.analyze/make-analyzer]]) before
 *   calling [[expression->]].
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[emmy.expression.analyze/make-analyzer]].
 */
emmy.polynomial.expression__GT_ = (function emmy$polynomial$expression__GT_(var_args){
var G__38628 = arguments.length;
switch (G__38628) {
case 1:
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cljs.core.vector,cljs.core.compare);
}));

(emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2 = (function (expr,cont){
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,cljs.core.compare);
}));

(emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3 = (function (expr,cont,v_compare){
var vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(emmy.expression.variables_in(expr),emmy.polynomial.operators_known);
var arity = cljs.core.count(vars);
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(v_compare,vars);
var sym__GT_var = cljs.core.zipmap(sorted,emmy.polynomial.new_variables(arity));
var poly = emmy.expression.evaluate(expr,sym__GT_var,emmy.polynomial.operator_table);
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(poly,sorted) : cont.call(null,poly,sorted));
}));

(emmy.polynomial.expression__GT_.cljs$lang$maxFixedArity = 3);

var _STAR__38858 = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"*","*",345799209,null));
var _PLUS__38859 = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"+","+",-740910886,null));
var expt_38860 = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"expt","expt",2123850345,null));
/**
 * Accepts a [[Polynomial]] `p` and a sequence of symbols for each indeterminate,
 *   and emits the canonical form of the symbolic expression that
 *   represents [[Polynomial]] `p`.
 * 
 *   A similar result could be achieved by calling `(apply p vars)`;
 *   but [[Polynomial]] application uses [Horner's
 *   rule](https://en.wikipedia.org/wiki/Horner%27s_method), and form of the
 *   returned result will be different.
 * 
 *   NOTE: this is the output stage of Flat Polynomial canonical form
 *   simplification. The input stage is handled by [[expression->]].
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[emmy.expression.analyze/make-analyzer]].
 */
emmy.polynomial.__GT_expression = (function emmy$polynomial$__GT_expression(p,vars){
if((!(emmy.polynomial.polynomial_QMARK_(p)))){
return emmy.expression.expression_of(p);
} else {
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__38629){
var vec__38630 = p__38629;
var expts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38630,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38630,(1),null);
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
var pow = emmy.polynomial.exponent.monomial_degree.cljs$core$IFn$_invoke$arity$2(expts,i);
return (expt_38860.cljs$core$IFn$_invoke$arity$2 ? expt_38860.cljs$core$IFn$_invoke$arity$2(v,pow) : expt_38860.call(null,v,pow));
})),_STAR__38858,emmy.expression.expression_of(c),vars);
}));
var high__GT_low = cljs.core.rseq(emmy.polynomial.bare_terms(p));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,_PLUS__38859,high__GT_low);
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {emmy.expression.analyze.ICanonicalize}
 * @implements {cljs.core.IWithMeta}
*/
emmy.polynomial.t_emmy$polynomial38633 = (function (meta38634){
this.meta38634 = meta38634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.polynomial.t_emmy$polynomial38633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38635,meta38634__$1){
var self__ = this;
var _38635__$1 = this;
return (new emmy.polynomial.t_emmy$polynomial38633(meta38634__$1));
}));

(emmy.polynomial.t_emmy$polynomial38633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38635){
var self__ = this;
var _38635__$1 = this;
return self__.meta38634;
}));

(emmy.polynomial.t_emmy$polynomial38633.prototype.emmy$expression$analyze$ICanonicalize$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.polynomial.t_emmy$polynomial38633.prototype.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$3 = (function (_,expr,cont){
var self__ = this;
var ___$1 = this;
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$2(expr,cont);
}));

(emmy.polynomial.t_emmy$polynomial38633.prototype.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$4 = (function (_,expr,cont,v_compare){
var self__ = this;
var ___$1 = this;
return emmy.polynomial.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,v_compare);
}));

(emmy.polynomial.t_emmy$polynomial38633.prototype.emmy$expression$analyze$ICanonicalize$__GT_expression$arity$3 = (function (_,p,vars){
var self__ = this;
var ___$1 = this;
return emmy.polynomial.__GT_expression(p,vars);
}));

(emmy.polynomial.t_emmy$polynomial38633.prototype.emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(emmy.polynomial.operators_known,o);
}));

(emmy.polynomial.t_emmy$polynomial38633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38634","meta38634",753996614,null)], null);
}));

(emmy.polynomial.t_emmy$polynomial38633.cljs$lang$type = true);

(emmy.polynomial.t_emmy$polynomial38633.cljs$lang$ctorStr = "emmy.polynomial/t_emmy$polynomial38633");

(emmy.polynomial.t_emmy$polynomial38633.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.polynomial/t_emmy$polynomial38633");
}));

/**
 * Positional factory function for emmy.polynomial/t_emmy$polynomial38633.
 */
emmy.polynomial.__GT_t_emmy$polynomial38633 = (function emmy$polynomial$__GT_t_emmy$polynomial38633(meta38634){
return (new emmy.polynomial.t_emmy$polynomial38633(meta38634));
});


/**
 * Singleton [[emmy.expression.analyze/ICanonicalize]] instance.
 */
emmy.polynomial.analyzer = (new emmy.polynomial.t_emmy$polynomial38633(cljs.core.PersistentArrayMap.EMPTY));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.modint","modint","emmy.modint/modint",128115973),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864));
/**
 * Installs the supplied function `f` into `generic-op` such that it will act
 *   between [[Polynomial]] instances, or allow non-[[Polynomial]] coefficients on
 *   either side.
 */
emmy.polynomial.defbinary = (function emmy$polynomial$defbinary(generic_op,f){
var pairs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864)], null)], null);
var seq__38636 = cljs.core.seq(pairs);
var chunk__38637 = null;
var count__38638 = (0);
var i__38639 = (0);
while(true){
if((i__38639 < count__38638)){
var vec__38646 = chunk__38637.cljs$core$IIndexed$_nth$arity$2(null,i__38639);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38646,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38646,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__38636,chunk__38637,count__38638,i__38639,vec__38646,l,r,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__38636,chunk__38637,count__38638,i__38639,vec__38646,l,r,pairs))
);


var G__38865 = seq__38636;
var G__38866 = chunk__38637;
var G__38867 = count__38638;
var G__38868 = (i__38639 + (1));
seq__38636 = G__38865;
chunk__38637 = G__38866;
count__38638 = G__38867;
i__38639 = G__38868;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38636);
if(temp__5825__auto__){
var seq__38636__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38636__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__38636__$1);
var G__38869 = cljs.core.chunk_rest(seq__38636__$1);
var G__38870 = c__5694__auto__;
var G__38871 = cljs.core.count(c__5694__auto__);
var G__38872 = (0);
seq__38636 = G__38869;
chunk__38637 = G__38870;
count__38638 = G__38871;
i__38639 = G__38872;
continue;
} else {
var vec__38649 = cljs.core.first(seq__38636__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38649,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38649,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__38636,chunk__38637,count__38638,i__38639,vec__38649,l,r,seq__38636__$1,temp__5825__auto__,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__38636,chunk__38637,count__38638,i__38639,vec__38649,l,r,seq__38636__$1,temp__5825__auto__,pairs))
);


var G__38873 = cljs.core.next(seq__38636__$1);
var G__38874 = null;
var G__38875 = (0);
var G__38876 = (0);
seq__38636 = G__38873;
chunk__38637 = G__38874;
count__38638 = G__38875;
i__38639 = G__38876;
continue;
}
} else {
return null;
}
}
break;
}
});
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (l,r){
return emmy.polynomial.eq(l,r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864)], null),(function (l,r){
return emmy.polynomial.eq(l,r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (l,r){
return emmy.polynomial.eq(r,l);
}));
emmy.polynomial.defbinary(emmy.generic.add,emmy.polynomial.add);
emmy.polynomial.defbinary(emmy.generic.sub,emmy.polynomial.sub);
emmy.polynomial.defbinary(emmy.generic.mul,emmy.polynomial.mul);
emmy.polynomial.defbinary(emmy.generic.quotient,(function (p,q){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.divide(p,q),(0));
}));
emmy.polynomial.defbinary(emmy.generic.remainder,(function (p,q){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.divide(p,q),(1));
}));
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return cljs.core.empty_QMARK_(a.terms);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
var terms = a.terms;
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1));
if(and__5160__auto__){
var vec__38652 = terms;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38652,(0),null);
var and__5160__auto____$1 = emmy.polynomial.impl.constant_term_QMARK_(term);
if(and__5160__auto____$1){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient(term));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
var terms = a.terms;
var arity = a.arity;
var and__5160__auto__ = emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(arity);
if(cljs.core.truth_(and__5160__auto__)){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1));
if(and__5160__auto____$1){
var vec__38655 = terms;
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(0),null);
var and__5160__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [(0),(1)], null),emmy.polynomial.impl.exponents(term));
if(and__5160__auto____$2){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient(term));
} else {
return and__5160__auto____$2;
}
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a.terms,(0));
if(cljs.core.truth_(temp__5823__auto__)){
var term = temp__5823__auto__;
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient(term));
} else {
return (0);
}
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a.terms,(0));
if(cljs.core.truth_(temp__5823__auto__)){
var term = temp__5823__auto__;
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient(term));
} else {
return (1);
}
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.arity))){
} else {
throw (new Error((""+"Assert failed: "+"identity-like unsupported on multivariate monomials!"+"\n"+"(g/one? (.-arity a))")));
}

var one = (function (){var temp__5823__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a.terms,(0));
if(cljs.core.truth_(temp__5823__auto__)){
var term = temp__5823__auto__;
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.impl.coefficient(term));
} else {
return (1);
}
})();
var term = emmy.polynomial.impl.make_term.cljs$core$IFn$_invoke$arity$2((emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2 ? emmy.polynomial.exponent.make.cljs$core$IFn$_invoke$arity$2((0),(1)) : emmy.polynomial.exponent.make.call(null,(0),(1))),one);
return (new emmy.polynomial.Polynomial((1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [term], null),a.m));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"polynomial","polynomial",807766365,null),null,(1),null)),(new cljs.core.List(null,a.arity,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a.terms,null,(1),null))], 0))));
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (_){
return false;
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return emmy.polynomial.negative_QMARK_(a);
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return emmy.polynomial.abs(a);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return emmy.polynomial.negate(a);
}));
emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return emmy.polynomial.square(a);
}));
emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (a){
return emmy.polynomial.cube(a);
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),(function (b,x){
return emmy.polynomial.expt(b,x);
}));
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (p,q){
return emmy.polynomial.evenly_divide(p,q);
}));
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864)], null),(function (p,c){
return emmy.polynomial.evenly_divide(p,c);
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (p){
return emmy.polynomial.map_coefficients(emmy.generic.simplify,p);
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (p,selectors){
if(cljs.core.empty_QMARK_(selectors)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),emmy.polynomial.bare_arity(p))){
return emmy.polynomial.partial_derivative(p,(0));
} else {
return emmy.structure.down_STAR_(emmy.polynomial.partial_derivatives(p));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selectors))){
return emmy.polynomial.partial_derivative(p,cljs.core.first(selectors));
} else {
return emmy.util.illegal((""+"Invalid selector! Only 1 deep supported."));

}
}
}));

//# sourceMappingURL=emmy.polynomial.js.map
