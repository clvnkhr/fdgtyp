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
var G__35604 = (arguments.length - (1));
switch (G__35604) {
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

(emmy.series.Series.prototype.apply = (function (self__,args35596){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35596)));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35610 = self__.xs;
var G__35612 = cljs.core.PersistentVector.EMPTY;
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35610,G__35612) : emmy.series.series_value.call(null,G__35610,G__35612));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35620 = self__.xs;
var G__35621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35620,G__35621) : emmy.series.series_value.call(null,G__35620,G__35621));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35622 = self__.xs;
var G__35623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35622,G__35623) : emmy.series.series_value.call(null,G__35622,G__35623));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35624 = self__.xs;
var G__35625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35624,G__35625) : emmy.series.series_value.call(null,G__35624,G__35625));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35627 = self__.xs;
var G__35628 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35627,G__35628) : emmy.series.series_value.call(null,G__35627,G__35628));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35632 = self__.xs;
var G__35633 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35632,G__35633) : emmy.series.series_value.call(null,G__35632,G__35633));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35634 = self__.xs;
var G__35635 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35634,G__35635) : emmy.series.series_value.call(null,G__35634,G__35635));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35639 = self__.xs;
var G__35640 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35639,G__35640) : emmy.series.series_value.call(null,G__35639,G__35640));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35642 = self__.xs;
var G__35643 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35642,G__35643) : emmy.series.series_value.call(null,G__35642,G__35643));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35645 = self__.xs;
var G__35646 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35645,G__35646) : emmy.series.series_value.call(null,G__35645,G__35646));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35647 = self__.xs;
var G__35648 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35647,G__35648) : emmy.series.series_value.call(null,G__35647,G__35648));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35649 = self__.xs;
var G__35650 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35649,G__35650) : emmy.series.series_value.call(null,G__35649,G__35650));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35653 = self__.xs;
var G__35654 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35653,G__35654) : emmy.series.series_value.call(null,G__35653,G__35654));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35655 = self__.xs;
var G__35656 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35655,G__35656) : emmy.series.series_value.call(null,G__35655,G__35656));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35657 = self__.xs;
var G__35658 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35657,G__35658) : emmy.series.series_value.call(null,G__35657,G__35658));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35661 = self__.xs;
var G__35662 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35661,G__35662) : emmy.series.series_value.call(null,G__35661,G__35662));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35664 = self__.xs;
var G__35665 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35664,G__35665) : emmy.series.series_value.call(null,G__35664,G__35665));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35666 = self__.xs;
var G__35667 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35666,G__35667) : emmy.series.series_value.call(null,G__35666,G__35667));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35672 = self__.xs;
var G__35673 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35672,G__35673) : emmy.series.series_value.call(null,G__35672,G__35673));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35674 = self__.xs;
var G__35675 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35674,G__35675) : emmy.series.series_value.call(null,G__35674,G__35675));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35680 = self__.xs;
var G__35681 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35680,G__35681) : emmy.series.series_value.call(null,G__35680,G__35681));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35684 = self__.xs;
var G__35685 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35684,G__35685) : emmy.series.series_value.call(null,G__35684,G__35685));
})(),null));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__35686 = (function (p1__35591_SHARP_){
return emmy.dual.replace_tag(p1__35591_SHARP_,old,new$);
});
var G__35687 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35686,G__35687) : emmy.series.fmap.call(null,G__35686,G__35687));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__35690 = (function (p1__35592_SHARP_){
return emmy.dual.extract_tangent(p1__35592_SHARP_,tag,mode);
});
var G__35691 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35690,G__35691) : emmy.series.fmap.call(null,G__35690,G__35691));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__35693 = (function (p1__35593_SHARP_){
return emmy.dual.extract_id(p1__35593_SHARP_,id);
});
var G__35695 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35693,G__35695) : emmy.series.fmap.call(null,G__35693,G__35695));
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
var G__35723 = (arguments.length - (1));
switch (G__35723) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.series.PowerSeries.prototype.apply = (function (self__,args35714){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35714)));
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
var G__35724 = (function (p1__35696_SHARP_){
return emmy.dual.replace_tag(p1__35696_SHARP_,old,new$);
});
var G__35725 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35724,G__35725) : emmy.series.fmap.call(null,G__35724,G__35725));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__35728 = (function (p1__35697_SHARP_){
return emmy.dual.extract_tangent(p1__35697_SHARP_,tag,mode);
});
var G__35729 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35728,G__35729) : emmy.series.fmap.call(null,G__35728,G__35729));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__35731 = (function (p1__35698_SHARP_){
return emmy.dual.extract_id(p1__35698_SHARP_,id);
});
var G__35732 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35731,G__35732) : emmy.series.fmap.call(null,G__35731,G__35732));
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
var G__35743 = kind;
var G__35743__$1 = (((G__35743 instanceof cljs.core.Keyword))?G__35743.fqn:null);
switch (G__35743__$1) {
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
var len__5897__auto___36228 = arguments.length;
var i__5898__auto___36229 = (0);
while(true){
if((i__5898__auto___36229 < len__5897__auto___36228)){
args__5903__auto__.push((arguments[i__5898__auto___36229]));

var G__36230 = (i__5898__auto___36229 + (1));
i__5898__auto___36229 = G__36230;
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
(emmy.series.series.cljs$lang$applyTo = (function (seq35750){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35750));
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
var len__5897__auto___36232 = arguments.length;
var i__5898__auto___36233 = (0);
while(true){
if((i__5898__auto___36233 < len__5897__auto___36232)){
args__5903__auto__.push((arguments[i__5898__auto___36233]));

var G__36234 = (i__5898__auto___36233 + (1));
i__5898__auto___36233 = G__36234;
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
(emmy.series.power_series.cljs$lang$applyTo = (function (seq35751){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35751));
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
var G__35759 = arguments.length;
switch (G__35759) {
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
var G__35761 = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__35762 = null;
var fexpr__35760 = emmy.series.kind__GT_make(kind);
return (fexpr__35760.cljs$core$IFn$_invoke$arity$2 ? fexpr__35760.cljs$core$IFn$_invoke$arity$2(G__35761,G__35762) : fexpr__35760.call(null,G__35761,G__35762));
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
var G__35764 = arguments.length;
switch (G__35764) {
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
var G__35767 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__35768 = null;
var fexpr__35766 = emmy.series.kind__GT_make(kind);
return (fexpr__35766.cljs$core$IFn$_invoke$arity$2 ? fexpr__35766.cljs$core$IFn$_invoke$arity$2(G__35767,G__35768) : fexpr__35766.call(null,G__35767,G__35768));
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
var G__35777 = arguments.length;
switch (G__35777) {
case 1:
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___36246 = arguments.length;
var i__5898__auto___36247 = (0);
while(true){
if((i__5898__auto___36247 < len__5897__auto___36246)){
args_arr__5922__auto__.push((arguments[i__5898__auto___36247]));

var G__36248 = (i__5898__auto___36247 + (1));
i__5898__auto___36247 = G__36248;
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
(emmy.series.function__GT_.cljs$lang$applyTo = (function (seq35775){
var G__35776 = cljs.core.first(seq35775);
var seq35775__$1 = cljs.core.next(seq35775);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35776,seq35775__$1);
}));

(emmy.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
emmy.series.power_series_value = (function emmy$series$power_series_value(f,x){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
var powers = cljs.core.iterate((function (p1__35788_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__35788_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,f,powers);
});
emmy.series.series_value = (function emmy$series$series_value(f,xs){
var collect = (function emmy$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(emmy.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__35796 = result;
var seq__35797 = cljs.core.seq(vec__35796);
var first__35798 = cljs.core.first(seq__35797);
var seq__35797__$1 = cljs.core.next(seq__35797);
var r = first__35798;
var r_tail = seq__35797__$1;
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
var G__35805 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__35806 = cljs.core.meta(s);
var fexpr__35804 = emmy.series._make(s);
return (fexpr__35804.cljs$core$IFn$_invoke$arity$2 ? fexpr__35804.cljs$core$IFn$_invoke$arity$2(G__35805,G__35806) : fexpr__35804.call(null,G__35805,G__35806));
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
var G__35819 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__35820 = cljs.core.meta(s);
var fexpr__35818 = emmy.series._make(s);
return (fexpr__35818.cljs$core$IFn$_invoke$arity$2 ? fexpr__35818.cljs$core$IFn$_invoke$arity$2(G__35819,G__35820) : fexpr__35818.call(null,G__35819,G__35820));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.series.partial_sums = (function emmy$series$partial_sums(s){
var G__35828 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,s);
var G__35829 = cljs.core.meta(s);
var fexpr__35827 = emmy.series._make(s);
return (fexpr__35827.cljs$core$IFn$_invoke$arity$2 ? fexpr__35827.cljs$core$IFn$_invoke$arity$2(G__35828,G__35829) : fexpr__35827.call(null,G__35828,G__35829));
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
var G__35850 = arguments.length;
switch (G__35850) {
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
return emmy.series.fmap((function (p1__35857_SHARP_){
return (emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__35857_SHARP_,factors) : emmy.series.arg_scale.call(null,p1__35857_SHARP_,factors));
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
return emmy.series.fmap((function (p1__35858_SHARP_){
return (emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__35858_SHARP_,shifts) : emmy.series.arg_shift.call(null,p1__35858_SHARP_,shifts));
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
var seq__35911_36286 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_Series,new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_PowerSeries,new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null)], null));
var chunk__35912_36287 = null;
var count__35913_36288 = (0);
var i__35914_36289 = (0);
while(true){
if((i__35914_36289 < count__35913_36288)){
var vec__36057_36290 = chunk__35912_36287.cljs$core$IIndexed$_nth$arity$2(null,i__35914_36289);
var ctor_36291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057_36290,(0),null);
var kind_36292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057_36290,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (_){
return false;
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (_){
return false;
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (_){
return false;
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,t){
var G__36062 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__36063 = null;
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36062,G__36063) : ctor_36291.call(null,G__36062,G__36063));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (c,s){
var G__36064 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__36065 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36064,G__36065) : ctor_36291.call(null,G__36064,G__36065));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,c){
var G__36067 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__36068 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36067,G__36068) : ctor_36291.call(null,G__36067,G__36068));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s){
var G__36069 = emmy.series.impl.negate(cljs.core.seq(s));
var G__36070 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36069,G__36070) : ctor_36291.call(null,G__36069,G__36070));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,t){
var G__36071 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__36072 = null;
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36071,G__36072) : ctor_36291.call(null,G__36071,G__36072));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (c,s){
var G__36073 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__36074 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36073,G__36074) : ctor_36291.call(null,G__36073,G__36074));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,c){
var G__36077 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__36078 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36077,G__36078) : ctor_36291.call(null,G__36077,G__36078));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,t){
var G__36080 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__36081 = null;
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36080,G__36081) : ctor_36291.call(null,G__36080,G__36081));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (c,s){
var G__36082 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__36083 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36082,G__36083) : ctor_36291.call(null,G__36082,G__36083));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,c){
var G__36084 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__36085 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36084,G__36085) : ctor_36291.call(null,G__36084,G__36085));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s){
var xs = cljs.core.seq(s);
var G__36087 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__36088 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36087,G__36088) : ctor_36291.call(null,G__36087,G__36088));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s){
var xs = cljs.core.seq(s);
var G__36089 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__36090 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36089,G__36090) : ctor_36291.call(null,G__36089,G__36090));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,e){
var G__36092 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__36093 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36092,G__36093) : ctor_36291.call(null,G__36092,G__36093));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s){
var G__36094 = emmy.series.impl.invert(cljs.core.seq(s));
var G__36095 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36094,G__36095) : ctor_36291.call(null,G__36094,G__36095));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (c,s){
var G__36096 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__36097 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36096,G__36097) : ctor_36291.call(null,G__36096,G__36097));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,c){
var G__36098 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__36099 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36098,G__36099) : ctor_36291.call(null,G__36098,G__36099));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,t){
var G__36100 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__36101 = null;
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36100,G__36101) : ctor_36291.call(null,G__36100,G__36101));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292,kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s){
var G__36105 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__36106 = cljs.core.meta(s);
return (ctor_36291.cljs$core$IFn$_invoke$arity$2 ? ctor_36291.cljs$core$IFn$_invoke$arity$2(G__36105,G__36106) : ctor_36291.call(null,G__36105,G__36106));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36292], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36057_36290,ctor_36291,kind_36292))
);


var G__36325 = seq__35911_36286;
var G__36326 = chunk__35912_36287;
var G__36327 = count__35913_36288;
var G__36328 = (i__35914_36289 + (1));
seq__35911_36286 = G__36325;
chunk__35912_36287 = G__36326;
count__35913_36288 = G__36327;
i__35914_36289 = G__36328;
continue;
} else {
var temp__5825__auto___36329 = cljs.core.seq(seq__35911_36286);
if(temp__5825__auto___36329){
var seq__35911_36330__$1 = temp__5825__auto___36329;
if(cljs.core.chunked_seq_QMARK_(seq__35911_36330__$1)){
var c__5694__auto___36331 = cljs.core.chunk_first(seq__35911_36330__$1);
var G__36332 = cljs.core.chunk_rest(seq__35911_36330__$1);
var G__36333 = c__5694__auto___36331;
var G__36334 = cljs.core.count(c__5694__auto___36331);
var G__36335 = (0);
seq__35911_36286 = G__36332;
chunk__35912_36287 = G__36333;
count__35913_36288 = G__36334;
i__35914_36289 = G__36335;
continue;
} else {
var vec__36108_36336 = cljs.core.first(seq__35911_36330__$1);
var ctor_36337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108_36336,(0),null);
var kind_36338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108_36336,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (_){
return false;
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (_){
return false;
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (_){
return false;
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,t){
var G__36111 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__36112 = null;
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36111,G__36112) : ctor_36337.call(null,G__36111,G__36112));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (c,s){
var G__36113 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__36114 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36113,G__36114) : ctor_36337.call(null,G__36113,G__36114));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,c){
var G__36115 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__36116 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36115,G__36116) : ctor_36337.call(null,G__36115,G__36116));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s){
var G__36118 = emmy.series.impl.negate(cljs.core.seq(s));
var G__36119 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36118,G__36119) : ctor_36337.call(null,G__36118,G__36119));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,t){
var G__36121 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__36122 = null;
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36121,G__36122) : ctor_36337.call(null,G__36121,G__36122));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (c,s){
var G__36123 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__36124 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36123,G__36124) : ctor_36337.call(null,G__36123,G__36124));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,c){
var G__36125 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__36126 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36125,G__36126) : ctor_36337.call(null,G__36125,G__36126));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,t){
var G__36127 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__36128 = null;
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36127,G__36128) : ctor_36337.call(null,G__36127,G__36128));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (c,s){
var G__36129 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__36130 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36129,G__36130) : ctor_36337.call(null,G__36129,G__36130));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,c){
var G__36132 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__36133 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36132,G__36133) : ctor_36337.call(null,G__36132,G__36133));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s){
var xs = cljs.core.seq(s);
var G__36135 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__36136 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36135,G__36136) : ctor_36337.call(null,G__36135,G__36136));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s){
var xs = cljs.core.seq(s);
var G__36138 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__36139 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36138,G__36139) : ctor_36337.call(null,G__36138,G__36139));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,e){
var G__36141 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__36142 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36141,G__36142) : ctor_36337.call(null,G__36141,G__36142));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s){
var G__36143 = emmy.series.impl.invert(cljs.core.seq(s));
var G__36144 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36143,G__36144) : ctor_36337.call(null,G__36143,G__36144));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (c,s){
var G__36146 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__36147 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36146,G__36147) : ctor_36337.call(null,G__36146,G__36147));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,c){
var G__36160 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__36161 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36160,G__36161) : ctor_36337.call(null,G__36160,G__36161));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,t){
var G__36162 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__36163 = null;
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36162,G__36163) : ctor_36337.call(null,G__36162,G__36163));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338,kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s){
var G__36164 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__36165 = cljs.core.meta(s);
return (ctor_36337.cljs$core$IFn$_invoke$arity$2 ? ctor_36337.cljs$core$IFn$_invoke$arity$2(G__36164,G__36165) : ctor_36337.call(null,G__36164,G__36165));
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36338], null),((function (seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__35911_36286,chunk__35912_36287,count__35913_36288,i__35914_36289,vec__36108_36336,ctor_36337,kind_36338,seq__35911_36330__$1,temp__5825__auto___36329))
);


var G__36364 = cljs.core.next(seq__35911_36330__$1);
var G__36365 = null;
var G__36366 = (0);
var G__36367 = (0);
seq__35911_36286 = G__36364;
chunk__35912_36287 = G__36365;
count__35913_36288 = G__36366;
i__35914_36289 = G__36367;
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
return emmy.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36178_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__36178_SHARP_,selectors);
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
