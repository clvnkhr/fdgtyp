goog.provide('emmy.series');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {emmy.function$.IArity}
*/
emmy.series.Series = (function (xs,m){
this.xs = xs;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2173042689;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.series.Series.prototype.toString = (function (){
var self__ = this;
var S = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(S)));
}));

(emmy.series.Series.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.series.Series \"",x__$1.toString(),"\"]"], 0));
}));

(emmy.series.Series.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.series.Series.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773);
}));

(emmy.series.Series.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return emmy.function$.arity(cljs.core.first(self__.xs));
}));

(emmy.series.Series.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xs;
}));

(emmy.series.Series.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new emmy.series.Series(self__.xs,meta));
}));

(emmy.series.Series.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__33289 = (arguments.length - (1));
switch (G__33289) {
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

(emmy.series.Series.prototype.apply = (function (self__,args33286){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33286)));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33292 = self__.xs;
var G__33293 = cljs.core.PersistentVector.EMPTY;
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33292,G__33293) : emmy.series.series_value.call(null,G__33292,G__33293));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33294 = self__.xs;
var G__33295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33294,G__33295) : emmy.series.series_value.call(null,G__33294,G__33295));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33296 = self__.xs;
var G__33297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33296,G__33297) : emmy.series.series_value.call(null,G__33296,G__33297));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33300 = self__.xs;
var G__33301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33300,G__33301) : emmy.series.series_value.call(null,G__33300,G__33301));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33302 = self__.xs;
var G__33303 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33302,G__33303) : emmy.series.series_value.call(null,G__33302,G__33303));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33304 = self__.xs;
var G__33305 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33304,G__33305) : emmy.series.series_value.call(null,G__33304,G__33305));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33306 = self__.xs;
var G__33307 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33306,G__33307) : emmy.series.series_value.call(null,G__33306,G__33307));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33308 = self__.xs;
var G__33309 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33308,G__33309) : emmy.series.series_value.call(null,G__33308,G__33309));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33312 = self__.xs;
var G__33313 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33312,G__33313) : emmy.series.series_value.call(null,G__33312,G__33313));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33314 = self__.xs;
var G__33315 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33314,G__33315) : emmy.series.series_value.call(null,G__33314,G__33315));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33316 = self__.xs;
var G__33317 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33316,G__33317) : emmy.series.series_value.call(null,G__33316,G__33317));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33320 = self__.xs;
var G__33321 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33320,G__33321) : emmy.series.series_value.call(null,G__33320,G__33321));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33322 = self__.xs;
var G__33323 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33322,G__33323) : emmy.series.series_value.call(null,G__33322,G__33323));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33328 = self__.xs;
var G__33329 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33328,G__33329) : emmy.series.series_value.call(null,G__33328,G__33329));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33330 = self__.xs;
var G__33331 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33330,G__33331) : emmy.series.series_value.call(null,G__33330,G__33331));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33334 = self__.xs;
var G__33335 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33334,G__33335) : emmy.series.series_value.call(null,G__33334,G__33335));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33336 = self__.xs;
var G__33337 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33336,G__33337) : emmy.series.series_value.call(null,G__33336,G__33337));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33342 = self__.xs;
var G__33343 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33342,G__33343) : emmy.series.series_value.call(null,G__33342,G__33343));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33344 = self__.xs;
var G__33345 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33344,G__33345) : emmy.series.series_value.call(null,G__33344,G__33345));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33346 = self__.xs;
var G__33347 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33346,G__33347) : emmy.series.series_value.call(null,G__33346,G__33347));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33352 = self__.xs;
var G__33353 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33352,G__33353) : emmy.series.series_value.call(null,G__33352,G__33353));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33354 = self__.xs;
var G__33355 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33354,G__33355) : emmy.series.series_value.call(null,G__33354,G__33355));
})(),null));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__33358 = (function (p1__33271_SHARP_){
return emmy.dual.replace_tag(p1__33271_SHARP_,old,new$);
});
var G__33359 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33358,G__33359) : emmy.series.fmap.call(null,G__33358,G__33359));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__33360 = (function (p1__33272_SHARP_){
return emmy.dual.extract_tangent(p1__33272_SHARP_,tag,mode);
});
var G__33361 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33360,G__33361) : emmy.series.fmap.call(null,G__33360,G__33361));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__33366 = (function (p1__33274_SHARP_){
return emmy.dual.extract_id(p1__33274_SHARP_,id);
});
var G__33367 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33366,G__33367) : emmy.series.fmap.call(null,G__33366,G__33367));
}));

(emmy.series.Series.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.series.Series.cljs$lang$type = true);

(emmy.series.Series.cljs$lang$ctorStr = "emmy.series/Series");

(emmy.series.Series.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.series/Series");
}));

/**
 * Positional factory function for emmy.series/Series.
 */
emmy.series.__GT_Series = (function emmy$series$__GT_Series(xs,m){
return (new emmy.series.Series(xs,m));
});





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {emmy.dual.IPerturbed}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {emmy.function$.IArity}
*/
emmy.series.PowerSeries = (function (xs,m){
this.xs = xs;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2173042689;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.series.PowerSeries.prototype.toString = (function (){
var self__ = this;
var S = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(S)));
}));

(emmy.series.PowerSeries.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.series.PowerSeries \"",this$__$1.toString(),"\"]"], 0));
}));

(emmy.series.PowerSeries.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.series.PowerSeries.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.PowerSeries.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418);
}));

(emmy.series.PowerSeries.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.PowerSeries.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null);
}));

(emmy.series.PowerSeries.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.xs;
}));

(emmy.series.PowerSeries.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta){
var self__ = this;
var ___$1 = this;
return (new emmy.series.PowerSeries(self__.xs,meta));
}));

(emmy.series.PowerSeries.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__33432 = (arguments.length - (1));
switch (G__33432) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.series.PowerSeries.prototype.apply = (function (self__,args33387){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33387)));
}));

(emmy.series.PowerSeries.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((emmy.series.power_series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.power_series_value.cljs$core$IFn$_invoke$arity$2(self__.xs,a) : emmy.series.power_series_value.call(null,self__.xs,a)),null));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__33455 = (function (p1__33378_SHARP_){
return emmy.dual.replace_tag(p1__33378_SHARP_,old,new$);
});
var G__33456 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33455,G__33456) : emmy.series.fmap.call(null,G__33455,G__33456));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__33462 = (function (p1__33379_SHARP_){
return emmy.dual.extract_tangent(p1__33379_SHARP_,tag,mode);
});
var G__33463 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33462,G__33463) : emmy.series.fmap.call(null,G__33462,G__33463));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__33464 = (function (p1__33380_SHARP_){
return emmy.dual.extract_id(p1__33380_SHARP_,id);
});
var G__33465 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33464,G__33465) : emmy.series.fmap.call(null,G__33464,G__33465));
}));

(emmy.series.PowerSeries.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xs","xs",-2004992428,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.series.PowerSeries.cljs$lang$type = true);

(emmy.series.PowerSeries.cljs$lang$ctorStr = "emmy.series/PowerSeries");

(emmy.series.PowerSeries.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.series/PowerSeries");
}));

/**
 * Positional factory function for emmy.series/PowerSeries.
 */
emmy.series.__GT_PowerSeries = (function emmy$series$__GT_PowerSeries(xs,m){
return (new emmy.series.PowerSeries(xs,m));
});

/**
 * Returns true if `s` is either a [[Series]] or a [[PowerSeries]], false
 *   otherwise.
 */
emmy.series.series_QMARK_ = (function emmy$series$series_QMARK_(s){
return (((s instanceof emmy.series.Series)) || ((s instanceof emmy.series.PowerSeries)));
});
/**
 * Returns true if `s` is specifically a [[PowerSeries]], false otherwise.
 */
emmy.series.power_series_QMARK_ = (function emmy$series$power_series_QMARK_(s){
return (s instanceof emmy.series.PowerSeries);
});
/**
 * Takes a [[series?]]-true object and returns the appropriate, more specific
 *   constructor.
 */
emmy.series._make = (function emmy$series$_make(s){
if(emmy.series.power_series_QMARK_(s)){
return emmy.series.__GT_PowerSeries;
} else {
return emmy.series.__GT_Series;
}
});
/**
 * Takes a keyword - either `::series` or `::power-series` - and returns the
 *   appropriate series constructor. Throws if neither of these are supplied.
 */
emmy.series.kind__GT_make = (function emmy$series$kind__GT_make(kind){
var G__33489 = kind;
var G__33489__$1 = (((G__33489 instanceof cljs.core.Keyword))?G__33489.fqn:null);
switch (G__33489__$1) {
case "emmy.series/series":
return emmy.series.__GT_Series;

break;
case "emmy.series/power-series":
return emmy.series.__GT_PowerSeries;

break;
default:
return emmy.util.illegal((""+"Unsupported kind: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)));

}
});
/**
 * Given a sequence, returns a new [[Series]] object that wraps that
 *   sequence (potentially padding its tail with zeros if it's finite).
 */
emmy.series.series_STAR_ = (function emmy$series$series_STAR_(prefix){
return emmy.series.__GT_Series(emmy.series.impl.__GT_series(prefix),null);
});
/**
 * Return a [[Series]] starting with the supplied values. The remainder of the
 *   series will be filled with the zero-value corresponding to the first of the
 *   given values.
 * 
 *   If you have a sequence already, prefer [[series*]].
 */
emmy.series.series = (function emmy$series$series(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34100 = arguments.length;
var i__5898__auto___34102 = (0);
while(true){
if((i__5898__auto___34102 < len__5897__auto___34100)){
args__5903__auto__.push((arguments[i__5898__auto___34102]));

var G__34103 = (i__5898__auto___34102 + (1));
i__5898__auto___34102 = G__34103;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.series.series.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.series.series.cljs$core$IFn$_invoke$arity$variadic = (function (prefix){
return emmy.series.series_STAR_(prefix);
}));

(emmy.series.series.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.series.series.cljs$lang$applyTo = (function (seq33494){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33494));
}));

/**
 * Given a sequence, returns a new [[PowerSeries]] object that wraps that
 *   sequence (potentially padding its tail with zeros if it's finite).
 */
emmy.series.power_series_STAR_ = (function emmy$series$power_series_STAR_(prefix){
return emmy.series.__GT_PowerSeries(emmy.series.impl.__GT_series(prefix),null);
});
/**
 * Return a [[PowerSeries]] starting with the supplied values. The remainder of
 *   the series will be filled with the zero-value corresponding to the first of
 *   the given values.
 * 
 *   If you have a sequence already, prefer [[power-series*]].
 */
emmy.series.power_series = (function emmy$series$power_series(var_args){
var args__5903__auto__ = [];
var len__5897__auto___34108 = arguments.length;
var i__5898__auto___34109 = (0);
while(true){
if((i__5898__auto___34109 < len__5897__auto___34108)){
args__5903__auto__.push((arguments[i__5898__auto___34109]));

var G__34110 = (i__5898__auto___34109 + (1));
i__5898__auto___34109 = G__34110;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.series.power_series.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.series.power_series.cljs$core$IFn$_invoke$arity$variadic = (function (prefix){
return emmy.series.power_series_STAR_(prefix);
}));

(emmy.series.power_series.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.series.power_series.cljs$lang$applyTo = (function (seq33497){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33497));
}));

emmy.series.s_zero = emmy.series.series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
emmy.series.s_one = emmy.series.series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
emmy.series.s_identity = emmy.series.series_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
/**
 * [[PowerSeries]] instance representing the constant 0.
 */
emmy.series.zero = emmy.series.power_series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));
/**
 * [[PowerSeries]] instance representing the constant 1.
 */
emmy.series.one = emmy.series.power_series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
/**
 * [[PowerSeries]] instance representing the identity function.
 */
emmy.series.identity = emmy.series.power_series_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
/**
 * Returns a [[PowerSeries]] representing the supplied constant term.
 * 
 *   Optionally, pass `kind` of either `::series` or `::power-series` to specify
 *   the type of series returned.
 */
emmy.series.constant = (function emmy$series$constant(var_args){
var G__33501 = arguments.length;
switch (G__33501) {
case 1:
return emmy.series.constant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.series.constant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.series.constant.cljs$core$IFn$_invoke$arity$1 = (function (c){
return emmy.series.power_series_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
}));

(emmy.series.constant.cljs$core$IFn$_invoke$arity$2 = (function (c,kind){
var G__33510 = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__33511 = null;
var fexpr__33509 = emmy.series.kind__GT_make(kind);
return (fexpr__33509.cljs$core$IFn$_invoke$arity$2 ? fexpr__33509.cljs$core$IFn$_invoke$arity$2(G__33510,G__33511) : fexpr__33509.call(null,G__33510,G__33511));
}));

(emmy.series.constant.cljs$lang$maxFixedArity = 2);

/**
 * Returns a [[PowerSeries]] instance representing $x^n$.
 */
emmy.series.xpow = (function emmy$series$xpow(n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

return emmy.series.power_series_STAR_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)));
});
/**
 * Returns a [[PowerSeries]] generated by `(f i)` for `i` in `0, 1, ...`
 * 
 *   Optionally, pass `kind` of either `::series` or `::power-series` to specify
 *   the type of series returned.
 */
emmy.series.generate = (function emmy$series$generate(var_args){
var G__33514 = arguments.length;
switch (G__33514) {
case 1:
return emmy.series.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.series.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.series.generate.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.series.__GT_PowerSeries(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),null);
}));

(emmy.series.generate.cljs$core$IFn$_invoke$arity$2 = (function (f,kind){
var G__33516 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__33517 = null;
var fexpr__33515 = emmy.series.kind__GT_make(kind);
return (fexpr__33515.cljs$core$IFn$_invoke$arity$2 ? fexpr__33515.cljs$core$IFn$_invoke$arity$2(G__33516,G__33517) : fexpr__33515.call(null,G__33516,G__33517));
}));

(emmy.series.generate.cljs$lang$maxFixedArity = 2);

/**
 * Accepts a [[Series]] or [[PowerSeries]] and coerces the input to
 *   a [[PowerSeries]] without any application. Returns the coerced [[PowerSeries]]
 *   instance.
 * 
 *   Supplying a non-series will throw.
 */
emmy.series.__GT_function = (function emmy$series$__GT_function(s){
if(emmy.series.power_series_QMARK_(s)){
return s;
} else {
if(emmy.series.series_QMARK_(s)){
return emmy.series.__GT_PowerSeries(cljs.core.seq(s),cljs.core.meta(s));
} else {
return emmy.util.illegal("non-series provided to ->function.");

}
}
});
/**
 * Returns a [[PowerSeries]] representing the [Taylor
 *   series](https://en.wikipedia.org/wiki/Taylor_series) expansion of `f` at the
 *   point specified by `xs`. Multiple arguments are allowed. If no arguments `xs`
 *   are supplied, the expansion point defaults to 0.
 * 
 *   The expansion at 0 is also called a 'Maclaurin series'.
 * 
 *   NOTE: this function takes derivatives internally, so if you pass a function
 *   make sure you require [[emmy.calculus.derivative]] to install the
 *   derivative implementation for functions. If you pass some other callable,
 *   differentiable function-like thing, like a polynomial, this is not necessary.
 * 
 *   NOTE: The typical definition of a Taylor series of `f` expanded around some
 *   point `x` is
 * 
 *   $$T(p) = f(x) + \frac{f'(x)}{1!}(p-x) + \frac{f''(x)}{2!} (p-x)^2 + \ldots,$$
 * 
 *   where `p` is the evaluation point. When `(= p x)`, all derivatives of the
 *   Taylor series expansion of `f` will exactly match the derivatives of `f`
 *   itself.
 * 
 *   The Taylor series returned here (call it $T'$) is actually a function of `dx`,
 *   where
 * 
 *   $$T'(dx) = T(x+dx) = f(x) + \frac{f'(x)}{1!}(dx) + \frac{f''(x)}{2!} (dx)^2 + \ldots.$$
 */
emmy.series.function__GT_ = (function emmy$series$function__GT_(var_args){
var G__33523 = arguments.length;
switch (G__33523) {
case 1:
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34128 = arguments.length;
var i__5898__auto___34130 = (0);
while(true){
if((i__5898__auto___34130 < len__5897__auto___34128)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34130]));

var G__34131 = (i__5898__auto___34130 + (1));
i__5898__auto___34130 = G__34131;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
}));

(emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
var gen = (function emmy$series$gen(i,f__$1,fact_n){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,xs),fact_n),emmy$series$gen((i + (1)),emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.PersistentVector.EMPTY),(fact_n * i)));
}),null,null));
});
return emmy.series.__GT_PowerSeries(gen((1),f,(1)),null);
}));

/** @this {Function} */
(emmy.series.function__GT_.cljs$lang$applyTo = (function (seq33521){
var G__33522 = cljs.core.first(seq33521);
var seq33521__$1 = cljs.core.next(seq33521);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33522,seq33521__$1);
}));

(emmy.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
emmy.series.power_series_value = (function emmy$series$power_series_value(f,x){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
var powers = cljs.core.iterate((function (p1__33528_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__33528_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,f,powers);
});
emmy.series.series_value = (function emmy$series$series_value(f,xs){
var collect = (function emmy$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(emmy.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__33537 = result;
var seq__33538 = cljs.core.seq(vec__33537);
var first__33539 = cljs.core.first(seq__33538);
var seq__33538__$1 = cljs.core.next(seq__33538);
var r = first__33539;
var r_tail = seq__33538__$1;
return cljs.core.cons(r,emmy.series.impl.seq_COLON__PLUS_(r_tail,emmy$series$series_value_$_collect(cljs.core.rest(f__$1))));
}),null,null));
} else {
return cljs.core.cons(result,(new cljs.core.LazySeq(null,(function (){
return emmy$series$series_value_$_collect(cljs.core.rest(f__$1));
}),null,null)));
}
});
return collect(cljs.core.seq(f));
});
/**
 * Returns the value of the supplied [[Series]] or [[PowerSeries]] applied to `xs`.
 * 
 *   If a [[PowerSeries]] is supplied, `xs` (despite its name) must be a single
 *   value. Returns a [[Series]] generated by multiplying each `i`th term in `s` by
 *   $x^i$, where $x$ is the `xs` argument.
 * 
 *   If a [[Series]] `s` is supplied:
 * 
 *   Assumes that `s` is a series of applicables of arity equal to the count of
 *   `xs`. If, in fact, `s` is a series of series-valued applicables, then the
 *   result will be a sort of layered sum of the values.
 * 
 *   Concretely, suppose that `s` has the form:
 * 
 *   ```
 *   [x => [A1 A2 A3...], x => [B1 B2 B3...], x => [C1 C2 C3...], ...]
 *   ```
 * 
 *   Then, this series applied to x will yield the new series:
 * 
 *   ```
 *   [A1 (+ A2 B1) (+ A3 B2 C1) ...]
 *   ```
 * 
 *   The way to think about this is, that if a power series has some other series
 *   as the coefficient of the $x^n$ term, the series must shift by $n$ positions
 *   before being added into the final total.
 */
emmy.series.value = (function emmy$series$value(s,xs){
if(emmy.series.power_series_QMARK_(s)){
return emmy.series.power_series_value(s,xs);
} else {
if(emmy.series.series_QMARK_(s)){
return emmy.series.series_value(s,xs);
} else {
return emmy.util.illegal((""+"value only works on `Series` or `PowerSeries`; received "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));

}
}
});
/**
 * Returns a new series generated by applying the supplied `f` to each element in
 *   the input series `s`. The returned series will be the same type as the input
 *   series, either [[Series]] or [[PowerSeries]].
 * 
 *   NOTE scmutils calls this `series:elementwise`.
 */
emmy.series.fmap = (function emmy$series$fmap(f,s){
var G__33555 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__33556 = cljs.core.meta(s);
var fexpr__33550 = emmy.series._make(s);
return (fexpr__33550.cljs$core$IFn$_invoke$arity$2 ? fexpr__33550.cljs$core$IFn$_invoke$arity$2(G__33555,G__33556) : fexpr__33550.call(null,G__33555,G__33556));
});
/**
 * Accepts an input series `s` and an exponent `n`, and expands the series in the
 *   `n`th power of its argument. Every term `i` maps to position `i*n`, with zeros
 *   padded in the new missing slots.
 * 
 *   For example:
 * 
 *   ```clojure
 *   (inflate identity 3)
 *   ;; => (series 0 0 0 1)
 * 
 *   (take 6 (inflate (generate inc) 3))
 *   ;; => (1 0 2 0 3 0)
 *   ```
 * 
 *   NOTE this operation makes sense as described for a [[PowerSeries]], where each
 *   entry represents the coefficient of some power of `x`; functionally it still
 *   works with [[Series]] objects.
 */
emmy.series.inflate = (function emmy$series$inflate(s,n){
if((n <= (1))){
return s;
} else {
var zero = emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s));
var zeros = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1)),zero);
var G__33567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__33568 = cljs.core.meta(s);
var fexpr__33566 = emmy.series._make(s);
return (fexpr__33566.cljs$core$IFn$_invoke$arity$2 ? fexpr__33566.cljs$core$IFn$_invoke$arity$2(G__33567,G__33568) : fexpr__33566.call(null,G__33567,G__33568));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.series.partial_sums = (function emmy$series$partial_sums(s){
var G__33572 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,s);
var G__33573 = cljs.core.meta(s);
var fexpr__33571 = emmy.series._make(s);
return (fexpr__33571.cljs$core$IFn$_invoke$arity$2 ? fexpr__33571.cljs$core$IFn$_invoke$arity$2(G__33572,G__33573) : fexpr__33571.call(null,G__33572,G__33573));
});
/**
 * Returns the sum of all elements in the input series `s` up to order
 *   `n` (inclusive). For example:
 * 
 *   ```clojure
 *   (sum (series 1 1 1 1 1 1 1) 3)
 *   ;; => 4
 *   ```
 * 
 *   NOTE that [[sum]] sums the first `n + 1` terms, since a series starts with an
 *   order 0 term.
 */
emmy.series.sum = (function emmy$series$sum(s,n){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.take.cljs$core$IFn$_invoke$arity$1((n + (1))),emmy.generic._PLUS_,s);
});
/**
 * Returns a new [[PowerSeries]] $U$ that represents the composition of the two
 *   input power series $S$ and $T$, where $U$ evaluates like:
 * 
 *   ```
 *   $$U(x) = S(T(x))$$
 *   ```
 */
emmy.series.compose = (function emmy$series$compose(s,t){
if(emmy.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (power-series? s)"));
}

if(emmy.series.power_series_QMARK_(t)){
} else {
throw (new Error("Assert failed: (power-series? t)"));
}

return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(cljs.core.seq(s),cljs.core.seq(t)),null);
});
/**
 * Returns a new [[PowerSeries]] $U$ that represents the compositional inverse (the
 *   'reversion') of the input power series $S$, satisfying:
 * 
 *   ```
 *   $$S(U(x)) = x$$
 *   ```
 */
emmy.series.revert = (function emmy$series$revert(s){
if(emmy.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (power-series? s)"));
}

return emmy.series.__GT_PowerSeries(emmy.series.impl.revert(cljs.core.seq(s)),cljs.core.meta(s));
});
/**
 * Returns a [[PowerSeries]] $U$ that represents the definite integral of the
 *   input power series $S$ with constant term $c$:
 * 
 *   ```
 *   $$U = c + \int_0^{\infty} S$$
 *   ```
 */
emmy.series.integral = (function emmy$series$integral(var_args){
var G__33586 = arguments.length;
switch (G__33586) {
case 1:
return emmy.series.integral.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.series.integral.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.series.integral.cljs$core$IFn$_invoke$arity$1 = (function (s){
return emmy.series.integral.cljs$core$IFn$_invoke$arity$2(s,(0));
}));

(emmy.series.integral.cljs$core$IFn$_invoke$arity$2 = (function (s,constant){
if(emmy.series.power_series_QMARK_(s)){
} else {
throw (new Error("Assert failed: (power-series? s)"));
}

return emmy.series.__GT_PowerSeries(emmy.series.impl.integral.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(s),constant),cljs.core.meta(s));
}));

(emmy.series.integral.cljs$lang$maxFixedArity = 2);

/**
 * Given a univariate [[PowerSeries]] and a singleton sequence of `factors`,
 *   returns a new [[PowerSeries]] that scales its argument by `(first factor)` on
 *   application.
 * 
 *   Given a [[Series]], recursively applies [[arg-scale]] to each element, making
 *   this ONLY appropriate in its current form for a [[Series]] of [[PowerSeries]]
 *   instances.
 */
emmy.series.arg_scale = (function emmy$series$arg_scale(s,factors){
if(emmy.series.power_series_QMARK_(s)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(factors),(1))){
} else {
throw (new Error((""+"Assert failed: "+"Only univariate [[PowerSeries]] are allowed."+"\n"+"(= (count factors) 1)")));
}

return emmy.series.compose(s,emmy.series.power_series_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.first(factors)], null)));
} else {
return emmy.series.fmap((function (p1__33589_SHARP_){
return (emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__33589_SHARP_,factors) : emmy.series.arg_scale.call(null,p1__33589_SHARP_,factors));
}),s);
}
});
/**
 * Given a univariate [[PowerSeries]] and a singleton sequence of `shifts`,
 *   returns a function that, when applied, returns a value equivalent to calling
 *   the original `s` with its argument shifted by `(first shifts)`.
 * 
 *   NOTE: [[arg-shift]] can't return a [[PowerSeries]] instance because the
 *   implementation of [[compose]] does not currently allow a constant element in
 *   the right-hand series.
 * 
 *   Given a [[Series]], recursively applies [[arg-shift]] to each element, making
 *   this ONLY appropriate in its current form for a [[Series]] of [[PowerSeries]]
 *   instances. Returns a [[Series]] of functions.
 */
emmy.series.arg_shift = (function emmy$series$arg_shift(s,shifts){
if(emmy.series.power_series_QMARK_(s)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shifts),(1))){
} else {
throw (new Error((""+"Assert failed: "+"Only univariate [[PowerSeries]] are allowed."+"\n"+"(= (count shifts) 1)")));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.function$.arg_shift,s,shifts);
} else {
return emmy.series.fmap((function (p1__33597_SHARP_){
return (emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__33597_SHARP_,shifts) : emmy.series.arg_shift.call(null,p1__33597_SHARP_,shifts));
}),s);
}
});
emmy.series.exp_series = emmy.series.__GT_PowerSeries(emmy.series.impl.expx,null);
emmy.series.sin_series = emmy.series.__GT_PowerSeries(emmy.series.impl.sinx,null);
emmy.series.cos_series = emmy.series.__GT_PowerSeries(emmy.series.impl.cosx,null);
emmy.series.tan_series = emmy.series.__GT_PowerSeries(emmy.series.impl.tanx,null);
emmy.series.sec_series = emmy.series.__GT_PowerSeries(emmy.series.impl.secx,null);
emmy.series.asin_series = emmy.series.__GT_PowerSeries(emmy.series.impl.asinx,null);
emmy.series.acos_series = emmy.series.__GT_PowerSeries(emmy.series.impl.acosx,null);
emmy.series.atan_series = emmy.series.__GT_PowerSeries(emmy.series.impl.atanx,null);
emmy.series.acot_series = emmy.series.__GT_PowerSeries(emmy.series.impl.acotx,null);
emmy.series.sinh_series = emmy.series.__GT_PowerSeries(emmy.series.impl.sinhx,null);
emmy.series.cosh_series = emmy.series.__GT_PowerSeries(emmy.series.impl.coshx,null);
emmy.series.tanh_series = emmy.series.__GT_PowerSeries(emmy.series.impl.tanhx,null);
emmy.series.asinh_series = emmy.series.__GT_PowerSeries(emmy.series.impl.asinhx,null);
emmy.series.atanh_series = emmy.series.__GT_PowerSeries(emmy.series.impl.atanhx,null);
emmy.series.log1_PLUS_x_series = emmy.series.__GT_PowerSeries(emmy.series.impl.log1_PLUS_x,null);
emmy.series.log1_x_series = emmy.series.__GT_PowerSeries(emmy.series.impl.log1_x,null);
/**
 * Returns a [[PowerSeries]] instance representing a
 *   [Binomial series](https://en.wikipedia.org/wiki/Binomial_series), i.e., the
 *   taylor series of the function $f$ given by
 * 
 *   ```
 *   $$f(x) = (1 + x)^\alpha$$
 *   ```
 */
emmy.series.binomial_series = (function emmy$series$binomial_series(alpha){
return emmy.series.__GT_PowerSeries(emmy.series.impl.binomial(alpha),null);
});
emmy.series.fib_series = emmy.series.__GT_Series(emmy.series.impl.fib,null);
emmy.series.catalan_series = emmy.series.__GT_Series(emmy.series.impl.catalan,null);
emmy.series.harmonic_series = emmy.series.__GT_Series(emmy.series.impl.harmonic,null);
emmy.series.bell_series = emmy.series.__GT_Series(emmy.series.impl.bell,null);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","scalar","emmy.value/scalar",1964041514),new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744),new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415));
var seq__33621_34147 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_Series,new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_PowerSeries,new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null)], null));
var chunk__33622_34148 = null;
var count__33623_34149 = (0);
var i__33624_34150 = (0);
while(true){
if((i__33624_34150 < count__33623_34149)){
var vec__33745_34154 = chunk__33622_34148.cljs$core$IIndexed$_nth$arity$2(null,i__33624_34150);
var ctor_34155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745_34154,(0),null);
var kind_34156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33745_34154,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (_){
return false;
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (_){
return false;
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (_){
return false;
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,t){
var G__33750 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__33751 = null;
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33750,G__33751) : ctor_34155.call(null,G__33750,G__33751));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (c,s){
var G__33754 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__33755 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33754,G__33755) : ctor_34155.call(null,G__33754,G__33755));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,c){
var G__33757 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__33758 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33757,G__33758) : ctor_34155.call(null,G__33757,G__33758));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s){
var G__33761 = emmy.series.impl.negate(cljs.core.seq(s));
var G__33762 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33761,G__33762) : ctor_34155.call(null,G__33761,G__33762));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,t){
var G__33764 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__33765 = null;
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33764,G__33765) : ctor_34155.call(null,G__33764,G__33765));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (c,s){
var G__33767 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__33768 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33767,G__33768) : ctor_34155.call(null,G__33767,G__33768));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,c){
var G__33769 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__33770 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33769,G__33770) : ctor_34155.call(null,G__33769,G__33770));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,t){
var G__33772 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__33773 = null;
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33772,G__33773) : ctor_34155.call(null,G__33772,G__33773));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (c,s){
var G__33778 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__33779 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33778,G__33779) : ctor_34155.call(null,G__33778,G__33779));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,c){
var G__33781 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__33782 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33781,G__33782) : ctor_34155.call(null,G__33781,G__33782));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s){
var xs = cljs.core.seq(s);
var G__33786 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__33787 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33786,G__33787) : ctor_34155.call(null,G__33786,G__33787));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s){
var xs = cljs.core.seq(s);
var G__33790 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__33791 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33790,G__33791) : ctor_34155.call(null,G__33790,G__33791));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,e){
var G__33793 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__33794 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33793,G__33794) : ctor_34155.call(null,G__33793,G__33794));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s){
var G__33796 = emmy.series.impl.invert(cljs.core.seq(s));
var G__33797 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33796,G__33797) : ctor_34155.call(null,G__33796,G__33797));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (c,s){
var G__33800 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__33801 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33800,G__33801) : ctor_34155.call(null,G__33800,G__33801));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,c){
var G__33802 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__33803 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33802,G__33803) : ctor_34155.call(null,G__33802,G__33803));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,t){
var G__33806 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__33807 = null;
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33806,G__33807) : ctor_34155.call(null,G__33806,G__33807));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156,kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s){
var G__33814 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__33815 = cljs.core.meta(s);
return (ctor_34155.cljs$core$IFn$_invoke$arity$2 ? ctor_34155.cljs$core$IFn$_invoke$arity$2(G__33814,G__33815) : ctor_34155.call(null,G__33814,G__33815));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34156], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33745_34154,ctor_34155,kind_34156))
);


var G__34187 = seq__33621_34147;
var G__34188 = chunk__33622_34148;
var G__34189 = count__33623_34149;
var G__34190 = (i__33624_34150 + (1));
seq__33621_34147 = G__34187;
chunk__33622_34148 = G__34188;
count__33623_34149 = G__34189;
i__33624_34150 = G__34190;
continue;
} else {
var temp__5825__auto___34191 = cljs.core.seq(seq__33621_34147);
if(temp__5825__auto___34191){
var seq__33621_34192__$1 = temp__5825__auto___34191;
if(cljs.core.chunked_seq_QMARK_(seq__33621_34192__$1)){
var c__5694__auto___34193 = cljs.core.chunk_first(seq__33621_34192__$1);
var G__34194 = cljs.core.chunk_rest(seq__33621_34192__$1);
var G__34195 = c__5694__auto___34193;
var G__34196 = cljs.core.count(c__5694__auto___34193);
var G__34197 = (0);
seq__33621_34147 = G__34194;
chunk__33622_34148 = G__34195;
count__33623_34149 = G__34196;
i__33624_34150 = G__34197;
continue;
} else {
var vec__33822_34199 = cljs.core.first(seq__33621_34192__$1);
var ctor_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33822_34199,(0),null);
var kind_34201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33822_34199,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (_){
return false;
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (_){
return false;
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (_){
return false;
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,t){
var G__33830 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__33831 = null;
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33830,G__33831) : ctor_34200.call(null,G__33830,G__33831));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (c,s){
var G__33833 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__33834 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33833,G__33834) : ctor_34200.call(null,G__33833,G__33834));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,c){
var G__33835 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__33836 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33835,G__33836) : ctor_34200.call(null,G__33835,G__33836));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s){
var G__33837 = emmy.series.impl.negate(cljs.core.seq(s));
var G__33838 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33837,G__33838) : ctor_34200.call(null,G__33837,G__33838));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,t){
var G__33841 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__33842 = null;
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33841,G__33842) : ctor_34200.call(null,G__33841,G__33842));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (c,s){
var G__33844 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__33845 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33844,G__33845) : ctor_34200.call(null,G__33844,G__33845));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,c){
var G__33847 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__33848 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33847,G__33848) : ctor_34200.call(null,G__33847,G__33848));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,t){
var G__33849 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__33850 = null;
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33849,G__33850) : ctor_34200.call(null,G__33849,G__33850));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (c,s){
var G__33854 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__33855 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33854,G__33855) : ctor_34200.call(null,G__33854,G__33855));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,c){
var G__33857 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__33858 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33857,G__33858) : ctor_34200.call(null,G__33857,G__33858));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s){
var xs = cljs.core.seq(s);
var G__33863 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__33864 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33863,G__33864) : ctor_34200.call(null,G__33863,G__33864));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s){
var xs = cljs.core.seq(s);
var G__33865 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__33866 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33865,G__33866) : ctor_34200.call(null,G__33865,G__33866));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,e){
var G__33867 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__33868 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33867,G__33868) : ctor_34200.call(null,G__33867,G__33868));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s){
var G__33870 = emmy.series.impl.invert(cljs.core.seq(s));
var G__33871 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33870,G__33871) : ctor_34200.call(null,G__33870,G__33871));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (c,s){
var G__33872 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__33873 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33872,G__33873) : ctor_34200.call(null,G__33872,G__33873));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,c){
var G__33874 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__33875 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33874,G__33875) : ctor_34200.call(null,G__33874,G__33875));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,t){
var G__33876 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__33877 = null;
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33876,G__33877) : ctor_34200.call(null,G__33876,G__33877));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201,kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s){
var G__33882 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__33883 = cljs.core.meta(s);
return (ctor_34200.cljs$core$IFn$_invoke$arity$2 ? ctor_34200.cljs$core$IFn$_invoke$arity$2(G__33882,G__33883) : ctor_34200.call(null,G__33882,G__33883));
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34201], null),((function (seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__33621_34147,chunk__33622_34148,count__33623_34149,i__33624_34150,vec__33822_34199,ctor_34200,kind_34201,seq__33621_34192__$1,temp__5825__auto___34191))
);


var G__34226 = cljs.core.next(seq__33621_34192__$1);
var G__34227 = null;
var G__34228 = (0);
var G__34229 = (0);
seq__33621_34147 = G__34226;
chunk__33622_34148 = G__34227;
count__33623_34149 = G__34228;
i__33624_34150 = G__34229;
continue;
}
} else {
}
}
break;
}
emmy.generic.exp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.expx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.cos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.cosx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.sin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.sinx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.tan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.tanx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.sec.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.secx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.asin.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.asinx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.acos.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.acosx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.atan.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.atanx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.acot.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.acotx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.cosh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.coshx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.sinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.sinhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.tanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.tanhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.asinh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.asinhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.atanh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
return emmy.series.__GT_PowerSeries(emmy.series.impl.compose(emmy.series.impl.atanhx,cljs.core.seq(s)),cljs.core.meta(s));
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (s,selectors){
return emmy.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33898_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__33898_SHARP_,selectors);
}),s.xs),s.m);
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (s,selectors){
if(cljs.core.empty_QMARK_(selectors)){
return emmy.series.__GT_PowerSeries(emmy.series.impl.deriv(s.xs),s.m);
} else {
return emmy.util.illegal((""+"Cannot yet take partial derivatives of a power series: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors)));
}
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (_){
return emmy.series.zero;
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (_){
return emmy.series.one;
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (_){
return emmy.series.identity;
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),(function (_){
return emmy.series.s_zero;
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),(function (_){
return emmy.series.s_one;
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),(function (_){
return emmy.series.s_identity;
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),(function (_){
return false;
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (_){
return false;
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null),(function (s){
var prefix = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (n,a){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"*","*",345799209,null),(new cljs.core.List(null,a,(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"expt","expt",2123850345,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null))], null);

}
}
})),cljs.core.cat),emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),s.xs))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),(function (s){
var prefix = emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),s.xs)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,(1),null)),prefix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))));
}));

//# sourceMappingURL=emmy.series.js.map
