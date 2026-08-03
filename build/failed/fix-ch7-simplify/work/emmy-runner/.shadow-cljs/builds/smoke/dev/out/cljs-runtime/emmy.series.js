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
var G__33251 = (arguments.length - (1));
switch (G__33251) {
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

(emmy.series.Series.prototype.apply = (function (self__,args33239){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33239)));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33281 = self__.xs;
var G__33282 = cljs.core.PersistentVector.EMPTY;
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33281,G__33282) : emmy.series.series_value.call(null,G__33281,G__33282));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33285 = self__.xs;
var G__33286 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33285,G__33286) : emmy.series.series_value.call(null,G__33285,G__33286));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33287 = self__.xs;
var G__33288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33287,G__33288) : emmy.series.series_value.call(null,G__33287,G__33288));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33289 = self__.xs;
var G__33290 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33289,G__33290) : emmy.series.series_value.call(null,G__33289,G__33290));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33291 = self__.xs;
var G__33292 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33291,G__33292) : emmy.series.series_value.call(null,G__33291,G__33292));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33293 = self__.xs;
var G__33294 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33293,G__33294) : emmy.series.series_value.call(null,G__33293,G__33294));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33295 = self__.xs;
var G__33296 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33295,G__33296) : emmy.series.series_value.call(null,G__33295,G__33296));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33299 = self__.xs;
var G__33300 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33299,G__33300) : emmy.series.series_value.call(null,G__33299,G__33300));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33302 = self__.xs;
var G__33303 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33302,G__33303) : emmy.series.series_value.call(null,G__33302,G__33303));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33304 = self__.xs;
var G__33305 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33304,G__33305) : emmy.series.series_value.call(null,G__33304,G__33305));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33307 = self__.xs;
var G__33308 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33307,G__33308) : emmy.series.series_value.call(null,G__33307,G__33308));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33309 = self__.xs;
var G__33310 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33309,G__33310) : emmy.series.series_value.call(null,G__33309,G__33310));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33311 = self__.xs;
var G__33312 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33311,G__33312) : emmy.series.series_value.call(null,G__33311,G__33312));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33313 = self__.xs;
var G__33314 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33313,G__33314) : emmy.series.series_value.call(null,G__33313,G__33314));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33315 = self__.xs;
var G__33316 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33315,G__33316) : emmy.series.series_value.call(null,G__33315,G__33316));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33317 = self__.xs;
var G__33318 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33317,G__33318) : emmy.series.series_value.call(null,G__33317,G__33318));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33319 = self__.xs;
var G__33320 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33319,G__33320) : emmy.series.series_value.call(null,G__33319,G__33320));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33321 = self__.xs;
var G__33322 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33321,G__33322) : emmy.series.series_value.call(null,G__33321,G__33322));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33325 = self__.xs;
var G__33326 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33325,G__33326) : emmy.series.series_value.call(null,G__33325,G__33326));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33327 = self__.xs;
var G__33328 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33327,G__33328) : emmy.series.series_value.call(null,G__33327,G__33328));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33329 = self__.xs;
var G__33330 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33329,G__33330) : emmy.series.series_value.call(null,G__33329,G__33330));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33331 = self__.xs;
var G__33332 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33331,G__33332) : emmy.series.series_value.call(null,G__33331,G__33332));
})(),null));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__33336 = (function (p1__33231_SHARP_){
return emmy.dual.replace_tag(p1__33231_SHARP_,old,new$);
});
var G__33337 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33336,G__33337) : emmy.series.fmap.call(null,G__33336,G__33337));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__33338 = (function (p1__33232_SHARP_){
return emmy.dual.extract_tangent(p1__33232_SHARP_,tag,mode);
});
var G__33339 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33338,G__33339) : emmy.series.fmap.call(null,G__33338,G__33339));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__33342 = (function (p1__33233_SHARP_){
return emmy.dual.extract_id(p1__33233_SHARP_,id);
});
var G__33343 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33342,G__33343) : emmy.series.fmap.call(null,G__33342,G__33343));
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
var G__33366 = (arguments.length - (1));
switch (G__33366) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.series.PowerSeries.prototype.apply = (function (self__,args33355){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33355)));
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
var G__33373 = (function (p1__33348_SHARP_){
return emmy.dual.replace_tag(p1__33348_SHARP_,old,new$);
});
var G__33374 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33373,G__33374) : emmy.series.fmap.call(null,G__33373,G__33374));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__33376 = (function (p1__33349_SHARP_){
return emmy.dual.extract_tangent(p1__33349_SHARP_,tag,mode);
});
var G__33377 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33376,G__33377) : emmy.series.fmap.call(null,G__33376,G__33377));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__33381 = (function (p1__33350_SHARP_){
return emmy.dual.extract_id(p1__33350_SHARP_,id);
});
var G__33382 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33381,G__33382) : emmy.series.fmap.call(null,G__33381,G__33382));
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
var G__33383 = kind;
var G__33383__$1 = (((G__33383 instanceof cljs.core.Keyword))?G__33383.fqn:null);
switch (G__33383__$1) {
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
var len__5897__auto___33964 = arguments.length;
var i__5898__auto___33965 = (0);
while(true){
if((i__5898__auto___33965 < len__5897__auto___33964)){
args__5903__auto__.push((arguments[i__5898__auto___33965]));

var G__33966 = (i__5898__auto___33965 + (1));
i__5898__auto___33965 = G__33966;
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
(emmy.series.series.cljs$lang$applyTo = (function (seq33384){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33384));
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
var len__5897__auto___33968 = arguments.length;
var i__5898__auto___33969 = (0);
while(true){
if((i__5898__auto___33969 < len__5897__auto___33968)){
args__5903__auto__.push((arguments[i__5898__auto___33969]));

var G__33970 = (i__5898__auto___33969 + (1));
i__5898__auto___33969 = G__33970;
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
(emmy.series.power_series.cljs$lang$applyTo = (function (seq33387){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33387));
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
var G__33393 = arguments.length;
switch (G__33393) {
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
var G__33400 = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__33401 = null;
var fexpr__33399 = emmy.series.kind__GT_make(kind);
return (fexpr__33399.cljs$core$IFn$_invoke$arity$2 ? fexpr__33399.cljs$core$IFn$_invoke$arity$2(G__33400,G__33401) : fexpr__33399.call(null,G__33400,G__33401));
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
var G__33403 = arguments.length;
switch (G__33403) {
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
var G__33405 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__33406 = null;
var fexpr__33404 = emmy.series.kind__GT_make(kind);
return (fexpr__33404.cljs$core$IFn$_invoke$arity$2 ? fexpr__33404.cljs$core$IFn$_invoke$arity$2(G__33405,G__33406) : fexpr__33404.call(null,G__33405,G__33406));
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
var G__33414 = arguments.length;
switch (G__33414) {
case 1:
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___33990 = arguments.length;
var i__5898__auto___33991 = (0);
while(true){
if((i__5898__auto___33991 < len__5897__auto___33990)){
args_arr__5922__auto__.push((arguments[i__5898__auto___33991]));

var G__33992 = (i__5898__auto___33991 + (1));
i__5898__auto___33991 = G__33992;
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
(emmy.series.function__GT_.cljs$lang$applyTo = (function (seq33412){
var G__33413 = cljs.core.first(seq33412);
var seq33412__$1 = cljs.core.next(seq33412);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33413,seq33412__$1);
}));

(emmy.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
emmy.series.power_series_value = (function emmy$series$power_series_value(f,x){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
var powers = cljs.core.iterate((function (p1__33426_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__33426_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,f,powers);
});
emmy.series.series_value = (function emmy$series$series_value(f,xs){
var collect = (function emmy$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(emmy.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__33439 = result;
var seq__33440 = cljs.core.seq(vec__33439);
var first__33441 = cljs.core.first(seq__33440);
var seq__33440__$1 = cljs.core.next(seq__33440);
var r = first__33441;
var r_tail = seq__33440__$1;
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
var G__33456 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__33457 = cljs.core.meta(s);
var fexpr__33455 = emmy.series._make(s);
return (fexpr__33455.cljs$core$IFn$_invoke$arity$2 ? fexpr__33455.cljs$core$IFn$_invoke$arity$2(G__33456,G__33457) : fexpr__33455.call(null,G__33456,G__33457));
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
var G__33465 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__33466 = cljs.core.meta(s);
var fexpr__33464 = emmy.series._make(s);
return (fexpr__33464.cljs$core$IFn$_invoke$arity$2 ? fexpr__33464.cljs$core$IFn$_invoke$arity$2(G__33465,G__33466) : fexpr__33464.call(null,G__33465,G__33466));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.series.partial_sums = (function emmy$series$partial_sums(s){
var G__33487 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,s);
var G__33488 = cljs.core.meta(s);
var fexpr__33486 = emmy.series._make(s);
return (fexpr__33486.cljs$core$IFn$_invoke$arity$2 ? fexpr__33486.cljs$core$IFn$_invoke$arity$2(G__33487,G__33488) : fexpr__33486.call(null,G__33487,G__33488));
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
var G__33518 = arguments.length;
switch (G__33518) {
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
return emmy.series.fmap((function (p1__33523_SHARP_){
return (emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__33523_SHARP_,factors) : emmy.series.arg_scale.call(null,p1__33523_SHARP_,factors));
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
return emmy.series.fmap((function (p1__33524_SHARP_){
return (emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__33524_SHARP_,shifts) : emmy.series.arg_shift.call(null,p1__33524_SHARP_,shifts));
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
var seq__33540_34026 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_Series,new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_PowerSeries,new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null)], null));
var chunk__33541_34027 = null;
var count__33542_34028 = (0);
var i__33543_34029 = (0);
while(true){
if((i__33543_34029 < count__33542_34028)){
var vec__33666_34033 = chunk__33541_34027.cljs$core$IIndexed$_nth$arity$2(null,i__33543_34029);
var ctor_34034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666_34033,(0),null);
var kind_34035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33666_34033,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (_){
return false;
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (_){
return false;
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (_){
return false;
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,t){
var G__33669 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__33670 = null;
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33669,G__33670) : ctor_34034.call(null,G__33669,G__33670));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (c,s){
var G__33674 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__33675 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33674,G__33675) : ctor_34034.call(null,G__33674,G__33675));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,c){
var G__33676 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__33677 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33676,G__33677) : ctor_34034.call(null,G__33676,G__33677));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s){
var G__33680 = emmy.series.impl.negate(cljs.core.seq(s));
var G__33681 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33680,G__33681) : ctor_34034.call(null,G__33680,G__33681));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,t){
var G__33685 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__33686 = null;
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33685,G__33686) : ctor_34034.call(null,G__33685,G__33686));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (c,s){
var G__33687 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__33688 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33687,G__33688) : ctor_34034.call(null,G__33687,G__33688));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,c){
var G__33691 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__33692 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33691,G__33692) : ctor_34034.call(null,G__33691,G__33692));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,t){
var G__33696 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__33697 = null;
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33696,G__33697) : ctor_34034.call(null,G__33696,G__33697));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (c,s){
var G__33698 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__33699 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33698,G__33699) : ctor_34034.call(null,G__33698,G__33699));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,c){
var G__33703 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__33704 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33703,G__33704) : ctor_34034.call(null,G__33703,G__33704));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s){
var xs = cljs.core.seq(s);
var G__33709 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__33710 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33709,G__33710) : ctor_34034.call(null,G__33709,G__33710));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s){
var xs = cljs.core.seq(s);
var G__33714 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__33715 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33714,G__33715) : ctor_34034.call(null,G__33714,G__33715));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,e){
var G__33716 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__33717 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33716,G__33717) : ctor_34034.call(null,G__33716,G__33717));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s){
var G__33718 = emmy.series.impl.invert(cljs.core.seq(s));
var G__33719 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33718,G__33719) : ctor_34034.call(null,G__33718,G__33719));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (c,s){
var G__33720 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__33721 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33720,G__33721) : ctor_34034.call(null,G__33720,G__33721));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,c){
var G__33722 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__33723 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33722,G__33723) : ctor_34034.call(null,G__33722,G__33723));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,t){
var G__33724 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__33725 = null;
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33724,G__33725) : ctor_34034.call(null,G__33724,G__33725));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035,kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s){
var G__33738 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__33739 = cljs.core.meta(s);
return (ctor_34034.cljs$core$IFn$_invoke$arity$2 ? ctor_34034.cljs$core$IFn$_invoke$arity$2(G__33738,G__33739) : ctor_34034.call(null,G__33738,G__33739));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34035], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33666_34033,ctor_34034,kind_34035))
);


var G__34064 = seq__33540_34026;
var G__34065 = chunk__33541_34027;
var G__34066 = count__33542_34028;
var G__34067 = (i__33543_34029 + (1));
seq__33540_34026 = G__34064;
chunk__33541_34027 = G__34065;
count__33542_34028 = G__34066;
i__33543_34029 = G__34067;
continue;
} else {
var temp__5825__auto___34068 = cljs.core.seq(seq__33540_34026);
if(temp__5825__auto___34068){
var seq__33540_34069__$1 = temp__5825__auto___34068;
if(cljs.core.chunked_seq_QMARK_(seq__33540_34069__$1)){
var c__5694__auto___34071 = cljs.core.chunk_first(seq__33540_34069__$1);
var G__34072 = cljs.core.chunk_rest(seq__33540_34069__$1);
var G__34073 = c__5694__auto___34071;
var G__34074 = cljs.core.count(c__5694__auto___34071);
var G__34075 = (0);
seq__33540_34026 = G__34072;
chunk__33541_34027 = G__34073;
count__33542_34028 = G__34074;
i__33543_34029 = G__34075;
continue;
} else {
var vec__33749_34076 = cljs.core.first(seq__33540_34069__$1);
var ctor_34077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33749_34076,(0),null);
var kind_34078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33749_34076,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (_){
return false;
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (_){
return false;
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (_){
return false;
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,t){
var G__33752 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__33753 = null;
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33752,G__33753) : ctor_34077.call(null,G__33752,G__33753));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (c,s){
var G__33754 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__33755 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33754,G__33755) : ctor_34077.call(null,G__33754,G__33755));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,c){
var G__33756 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__33757 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33756,G__33757) : ctor_34077.call(null,G__33756,G__33757));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s){
var G__33759 = emmy.series.impl.negate(cljs.core.seq(s));
var G__33760 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33759,G__33760) : ctor_34077.call(null,G__33759,G__33760));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,t){
var G__33763 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__33764 = null;
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33763,G__33764) : ctor_34077.call(null,G__33763,G__33764));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (c,s){
var G__33771 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__33772 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33771,G__33772) : ctor_34077.call(null,G__33771,G__33772));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,c){
var G__33775 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__33776 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33775,G__33776) : ctor_34077.call(null,G__33775,G__33776));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,t){
var G__33779 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__33780 = null;
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33779,G__33780) : ctor_34077.call(null,G__33779,G__33780));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (c,s){
var G__33782 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__33783 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33782,G__33783) : ctor_34077.call(null,G__33782,G__33783));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,c){
var G__33784 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__33785 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33784,G__33785) : ctor_34077.call(null,G__33784,G__33785));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s){
var xs = cljs.core.seq(s);
var G__33788 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__33789 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33788,G__33789) : ctor_34077.call(null,G__33788,G__33789));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s){
var xs = cljs.core.seq(s);
var G__33793 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__33794 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33793,G__33794) : ctor_34077.call(null,G__33793,G__33794));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,e){
var G__33795 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__33796 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33795,G__33796) : ctor_34077.call(null,G__33795,G__33796));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s){
var G__33801 = emmy.series.impl.invert(cljs.core.seq(s));
var G__33802 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33801,G__33802) : ctor_34077.call(null,G__33801,G__33802));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (c,s){
var G__33812 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__33813 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33812,G__33813) : ctor_34077.call(null,G__33812,G__33813));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,c){
var G__33816 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__33817 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33816,G__33817) : ctor_34077.call(null,G__33816,G__33817));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,t){
var G__33818 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__33819 = null;
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33818,G__33819) : ctor_34077.call(null,G__33818,G__33819));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078,kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s){
var G__33827 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__33828 = cljs.core.meta(s);
return (ctor_34077.cljs$core$IFn$_invoke$arity$2 ? ctor_34077.cljs$core$IFn$_invoke$arity$2(G__33827,G__33828) : ctor_34077.call(null,G__33827,G__33828));
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34078], null),((function (seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__33540_34026,chunk__33541_34027,count__33542_34028,i__33543_34029,vec__33749_34076,ctor_34077,kind_34078,seq__33540_34069__$1,temp__5825__auto___34068))
);


var G__34109 = cljs.core.next(seq__33540_34069__$1);
var G__34110 = null;
var G__34111 = (0);
var G__34112 = (0);
seq__33540_34026 = G__34109;
chunk__33541_34027 = G__34110;
count__33542_34028 = G__34111;
i__33543_34029 = G__34112;
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
return emmy.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33860_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__33860_SHARP_,selectors);
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
