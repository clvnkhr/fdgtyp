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
var G__33322 = (arguments.length - (1));
switch (G__33322) {
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

(emmy.series.Series.prototype.apply = (function (self__,args33297){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33297)));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33386 = self__.xs;
var G__33387 = cljs.core.PersistentVector.EMPTY;
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33386,G__33387) : emmy.series.series_value.call(null,G__33386,G__33387));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33390 = self__.xs;
var G__33391 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33390,G__33391) : emmy.series.series_value.call(null,G__33390,G__33391));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33396 = self__.xs;
var G__33397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33396,G__33397) : emmy.series.series_value.call(null,G__33396,G__33397));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33398 = self__.xs;
var G__33399 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33398,G__33399) : emmy.series.series_value.call(null,G__33398,G__33399));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33400 = self__.xs;
var G__33401 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33400,G__33401) : emmy.series.series_value.call(null,G__33400,G__33401));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33405 = self__.xs;
var G__33406 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33405,G__33406) : emmy.series.series_value.call(null,G__33405,G__33406));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33407 = self__.xs;
var G__33408 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33407,G__33408) : emmy.series.series_value.call(null,G__33407,G__33408));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33409 = self__.xs;
var G__33410 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33409,G__33410) : emmy.series.series_value.call(null,G__33409,G__33410));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33411 = self__.xs;
var G__33412 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33411,G__33412) : emmy.series.series_value.call(null,G__33411,G__33412));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33416 = self__.xs;
var G__33417 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33416,G__33417) : emmy.series.series_value.call(null,G__33416,G__33417));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33418 = self__.xs;
var G__33419 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33418,G__33419) : emmy.series.series_value.call(null,G__33418,G__33419));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33422 = self__.xs;
var G__33423 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33422,G__33423) : emmy.series.series_value.call(null,G__33422,G__33423));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33427 = self__.xs;
var G__33428 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33427,G__33428) : emmy.series.series_value.call(null,G__33427,G__33428));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33436 = self__.xs;
var G__33437 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33436,G__33437) : emmy.series.series_value.call(null,G__33436,G__33437));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33441 = self__.xs;
var G__33442 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33441,G__33442) : emmy.series.series_value.call(null,G__33441,G__33442));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33443 = self__.xs;
var G__33444 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33443,G__33444) : emmy.series.series_value.call(null,G__33443,G__33444));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33452 = self__.xs;
var G__33453 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33452,G__33453) : emmy.series.series_value.call(null,G__33452,G__33453));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33456 = self__.xs;
var G__33457 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33456,G__33457) : emmy.series.series_value.call(null,G__33456,G__33457));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33460 = self__.xs;
var G__33461 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33460,G__33461) : emmy.series.series_value.call(null,G__33460,G__33461));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33462 = self__.xs;
var G__33463 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33462,G__33463) : emmy.series.series_value.call(null,G__33462,G__33463));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33467 = self__.xs;
var G__33468 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33467,G__33468) : emmy.series.series_value.call(null,G__33467,G__33468));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__33469 = self__.xs;
var G__33470 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__33469,G__33470) : emmy.series.series_value.call(null,G__33469,G__33470));
})(),null));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__33473 = (function (p1__33292_SHARP_){
return emmy.dual.replace_tag(p1__33292_SHARP_,old,new$);
});
var G__33474 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33473,G__33474) : emmy.series.fmap.call(null,G__33473,G__33474));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__33476 = (function (p1__33293_SHARP_){
return emmy.dual.extract_tangent(p1__33293_SHARP_,tag,mode);
});
var G__33477 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33476,G__33477) : emmy.series.fmap.call(null,G__33476,G__33477));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__33481 = (function (p1__33294_SHARP_){
return emmy.dual.extract_id(p1__33294_SHARP_,id);
});
var G__33482 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33481,G__33482) : emmy.series.fmap.call(null,G__33481,G__33482));
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
var G__33505 = (arguments.length - (1));
switch (G__33505) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.series.PowerSeries.prototype.apply = (function (self__,args33499){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args33499)));
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
var G__33506 = (function (p1__33494_SHARP_){
return emmy.dual.replace_tag(p1__33494_SHARP_,old,new$);
});
var G__33507 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33506,G__33507) : emmy.series.fmap.call(null,G__33506,G__33507));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__33511 = (function (p1__33495_SHARP_){
return emmy.dual.extract_tangent(p1__33495_SHARP_,tag,mode);
});
var G__33512 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33511,G__33512) : emmy.series.fmap.call(null,G__33511,G__33512));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__33514 = (function (p1__33496_SHARP_){
return emmy.dual.extract_id(p1__33496_SHARP_,id);
});
var G__33515 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__33514,G__33515) : emmy.series.fmap.call(null,G__33514,G__33515));
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
var G__33516 = kind;
var G__33516__$1 = (((G__33516 instanceof cljs.core.Keyword))?G__33516.fqn:null);
switch (G__33516__$1) {
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
var len__5897__auto___34149 = arguments.length;
var i__5898__auto___34150 = (0);
while(true){
if((i__5898__auto___34150 < len__5897__auto___34149)){
args__5903__auto__.push((arguments[i__5898__auto___34150]));

var G__34151 = (i__5898__auto___34150 + (1));
i__5898__auto___34150 = G__34151;
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
(emmy.series.series.cljs$lang$applyTo = (function (seq33518){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33518));
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
var len__5897__auto___34152 = arguments.length;
var i__5898__auto___34153 = (0);
while(true){
if((i__5898__auto___34153 < len__5897__auto___34152)){
args__5903__auto__.push((arguments[i__5898__auto___34153]));

var G__34154 = (i__5898__auto___34153 + (1));
i__5898__auto___34153 = G__34154;
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
(emmy.series.power_series.cljs$lang$applyTo = (function (seq33522){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33522));
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
var G__33529 = arguments.length;
switch (G__33529) {
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
var G__33536 = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__33537 = null;
var fexpr__33535 = emmy.series.kind__GT_make(kind);
return (fexpr__33535.cljs$core$IFn$_invoke$arity$2 ? fexpr__33535.cljs$core$IFn$_invoke$arity$2(G__33536,G__33537) : fexpr__33535.call(null,G__33536,G__33537));
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
var G__33545 = arguments.length;
switch (G__33545) {
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
var G__33552 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__33553 = null;
var fexpr__33551 = emmy.series.kind__GT_make(kind);
return (fexpr__33551.cljs$core$IFn$_invoke$arity$2 ? fexpr__33551.cljs$core$IFn$_invoke$arity$2(G__33552,G__33553) : fexpr__33551.call(null,G__33552,G__33553));
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
var G__33563 = arguments.length;
switch (G__33563) {
case 1:
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___34170 = arguments.length;
var i__5898__auto___34171 = (0);
while(true){
if((i__5898__auto___34171 < len__5897__auto___34170)){
args_arr__5922__auto__.push((arguments[i__5898__auto___34171]));

var G__34173 = (i__5898__auto___34171 + (1));
i__5898__auto___34171 = G__34173;
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
(emmy.series.function__GT_.cljs$lang$applyTo = (function (seq33561){
var G__33562 = cljs.core.first(seq33561);
var seq33561__$1 = cljs.core.next(seq33561);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33562,seq33561__$1);
}));

(emmy.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
emmy.series.power_series_value = (function emmy$series$power_series_value(f,x){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
var powers = cljs.core.iterate((function (p1__33582_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__33582_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,f,powers);
});
emmy.series.series_value = (function emmy$series$series_value(f,xs){
var collect = (function emmy$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(emmy.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__33603 = result;
var seq__33604 = cljs.core.seq(vec__33603);
var first__33605 = cljs.core.first(seq__33604);
var seq__33604__$1 = cljs.core.next(seq__33604);
var r = first__33605;
var r_tail = seq__33604__$1;
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
var G__33608 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__33609 = cljs.core.meta(s);
var fexpr__33607 = emmy.series._make(s);
return (fexpr__33607.cljs$core$IFn$_invoke$arity$2 ? fexpr__33607.cljs$core$IFn$_invoke$arity$2(G__33608,G__33609) : fexpr__33607.call(null,G__33608,G__33609));
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
var G__33612 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__33613 = cljs.core.meta(s);
var fexpr__33611 = emmy.series._make(s);
return (fexpr__33611.cljs$core$IFn$_invoke$arity$2 ? fexpr__33611.cljs$core$IFn$_invoke$arity$2(G__33612,G__33613) : fexpr__33611.call(null,G__33612,G__33613));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.series.partial_sums = (function emmy$series$partial_sums(s){
var G__33615 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,s);
var G__33616 = cljs.core.meta(s);
var fexpr__33614 = emmy.series._make(s);
return (fexpr__33614.cljs$core$IFn$_invoke$arity$2 ? fexpr__33614.cljs$core$IFn$_invoke$arity$2(G__33615,G__33616) : fexpr__33614.call(null,G__33615,G__33616));
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
var G__33628 = arguments.length;
switch (G__33628) {
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
return emmy.series.fmap((function (p1__33636_SHARP_){
return (emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__33636_SHARP_,factors) : emmy.series.arg_scale.call(null,p1__33636_SHARP_,factors));
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
return emmy.series.fmap((function (p1__33641_SHARP_){
return (emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__33641_SHARP_,shifts) : emmy.series.arg_shift.call(null,p1__33641_SHARP_,shifts));
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
var seq__33658_34204 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_Series,new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_PowerSeries,new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null)], null));
var chunk__33659_34205 = null;
var count__33660_34206 = (0);
var i__33661_34207 = (0);
while(true){
if((i__33661_34207 < count__33660_34206)){
var vec__33849_34208 = chunk__33659_34205.cljs$core$IIndexed$_nth$arity$2(null,i__33661_34207);
var ctor_34209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33849_34208,(0),null);
var kind_34210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33849_34208,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (_){
return false;
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (_){
return false;
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (_){
return false;
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,t){
var G__33852 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__33853 = null;
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33852,G__33853) : ctor_34209.call(null,G__33852,G__33853));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (c,s){
var G__33854 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__33855 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33854,G__33855) : ctor_34209.call(null,G__33854,G__33855));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,c){
var G__33856 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__33857 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33856,G__33857) : ctor_34209.call(null,G__33856,G__33857));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s){
var G__33859 = emmy.series.impl.negate(cljs.core.seq(s));
var G__33860 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33859,G__33860) : ctor_34209.call(null,G__33859,G__33860));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,t){
var G__33861 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__33862 = null;
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33861,G__33862) : ctor_34209.call(null,G__33861,G__33862));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (c,s){
var G__33866 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__33867 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33866,G__33867) : ctor_34209.call(null,G__33866,G__33867));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,c){
var G__33876 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__33877 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33876,G__33877) : ctor_34209.call(null,G__33876,G__33877));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,t){
var G__33882 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__33883 = null;
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33882,G__33883) : ctor_34209.call(null,G__33882,G__33883));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (c,s){
var G__33885 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__33886 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33885,G__33886) : ctor_34209.call(null,G__33885,G__33886));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,c){
var G__33889 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__33890 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33889,G__33890) : ctor_34209.call(null,G__33889,G__33890));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s){
var xs = cljs.core.seq(s);
var G__33894 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__33895 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33894,G__33895) : ctor_34209.call(null,G__33894,G__33895));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s){
var xs = cljs.core.seq(s);
var G__33900 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__33901 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33900,G__33901) : ctor_34209.call(null,G__33900,G__33901));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,e){
var G__33903 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__33904 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33903,G__33904) : ctor_34209.call(null,G__33903,G__33904));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s){
var G__33906 = emmy.series.impl.invert(cljs.core.seq(s));
var G__33907 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33906,G__33907) : ctor_34209.call(null,G__33906,G__33907));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (c,s){
var G__33911 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__33912 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33911,G__33912) : ctor_34209.call(null,G__33911,G__33912));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,c){
var G__33917 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__33918 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33917,G__33918) : ctor_34209.call(null,G__33917,G__33918));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,t){
var G__33922 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__33923 = null;
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33922,G__33923) : ctor_34209.call(null,G__33922,G__33923));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210,kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s){
var G__33931 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__33932 = cljs.core.meta(s);
return (ctor_34209.cljs$core$IFn$_invoke$arity$2 ? ctor_34209.cljs$core$IFn$_invoke$arity$2(G__33931,G__33932) : ctor_34209.call(null,G__33931,G__33932));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34210], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33849_34208,ctor_34209,kind_34210))
);


var G__34243 = seq__33658_34204;
var G__34244 = chunk__33659_34205;
var G__34245 = count__33660_34206;
var G__34246 = (i__33661_34207 + (1));
seq__33658_34204 = G__34243;
chunk__33659_34205 = G__34244;
count__33660_34206 = G__34245;
i__33661_34207 = G__34246;
continue;
} else {
var temp__5825__auto___34247 = cljs.core.seq(seq__33658_34204);
if(temp__5825__auto___34247){
var seq__33658_34248__$1 = temp__5825__auto___34247;
if(cljs.core.chunked_seq_QMARK_(seq__33658_34248__$1)){
var c__5694__auto___34249 = cljs.core.chunk_first(seq__33658_34248__$1);
var G__34250 = cljs.core.chunk_rest(seq__33658_34248__$1);
var G__34251 = c__5694__auto___34249;
var G__34252 = cljs.core.count(c__5694__auto___34249);
var G__34253 = (0);
seq__33658_34204 = G__34250;
chunk__33659_34205 = G__34251;
count__33660_34206 = G__34252;
i__33661_34207 = G__34253;
continue;
} else {
var vec__33940_34254 = cljs.core.first(seq__33658_34248__$1);
var ctor_34255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33940_34254,(0),null);
var kind_34256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33940_34254,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (_){
return false;
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (_){
return false;
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (_){
return false;
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,t){
var G__33947 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__33948 = null;
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33947,G__33948) : ctor_34255.call(null,G__33947,G__33948));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (c,s){
var G__33953 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__33954 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33953,G__33954) : ctor_34255.call(null,G__33953,G__33954));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,c){
var G__33957 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__33958 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33957,G__33958) : ctor_34255.call(null,G__33957,G__33958));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s){
var G__33959 = emmy.series.impl.negate(cljs.core.seq(s));
var G__33960 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33959,G__33960) : ctor_34255.call(null,G__33959,G__33960));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,t){
var G__33961 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__33962 = null;
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33961,G__33962) : ctor_34255.call(null,G__33961,G__33962));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (c,s){
var G__33963 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__33964 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33963,G__33964) : ctor_34255.call(null,G__33963,G__33964));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,c){
var G__33968 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__33969 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33968,G__33969) : ctor_34255.call(null,G__33968,G__33969));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,t){
var G__33971 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__33972 = null;
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33971,G__33972) : ctor_34255.call(null,G__33971,G__33972));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (c,s){
var G__33973 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__33974 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33973,G__33974) : ctor_34255.call(null,G__33973,G__33974));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,c){
var G__33976 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__33977 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33976,G__33977) : ctor_34255.call(null,G__33976,G__33977));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s){
var xs = cljs.core.seq(s);
var G__33980 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__33981 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33980,G__33981) : ctor_34255.call(null,G__33980,G__33981));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s){
var xs = cljs.core.seq(s);
var G__33988 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__33989 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33988,G__33989) : ctor_34255.call(null,G__33988,G__33989));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,e){
var G__33991 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__33992 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33991,G__33992) : ctor_34255.call(null,G__33991,G__33992));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s){
var G__33995 = emmy.series.impl.invert(cljs.core.seq(s));
var G__33996 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__33995,G__33996) : ctor_34255.call(null,G__33995,G__33996));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (c,s){
var G__34000 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__34001 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__34000,G__34001) : ctor_34255.call(null,G__34000,G__34001));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,c){
var G__34003 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__34004 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__34003,G__34004) : ctor_34255.call(null,G__34003,G__34004));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,t){
var G__34005 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__34006 = null;
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__34005,G__34006) : ctor_34255.call(null,G__34005,G__34006));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256,kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s){
var G__34012 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__34013 = cljs.core.meta(s);
return (ctor_34255.cljs$core$IFn$_invoke$arity$2 ? ctor_34255.cljs$core$IFn$_invoke$arity$2(G__34012,G__34013) : ctor_34255.call(null,G__34012,G__34013));
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_34256], null),((function (seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__33658_34204,chunk__33659_34205,count__33660_34206,i__33661_34207,vec__33940_34254,ctor_34255,kind_34256,seq__33658_34248__$1,temp__5825__auto___34247))
);


var G__34282 = cljs.core.next(seq__33658_34248__$1);
var G__34283 = null;
var G__34284 = (0);
var G__34285 = (0);
seq__33658_34204 = G__34282;
chunk__33659_34205 = G__34283;
count__33660_34206 = G__34284;
i__33661_34207 = G__34285;
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
return emmy.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34043_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__34043_SHARP_,selectors);
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
