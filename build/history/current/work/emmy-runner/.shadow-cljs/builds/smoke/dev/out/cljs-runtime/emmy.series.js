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
var G__35759 = (arguments.length - (1));
switch (G__35759) {
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

(emmy.series.Series.prototype.apply = (function (self__,args35752){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35752)));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35774 = self__.xs;
var G__35775 = cljs.core.PersistentVector.EMPTY;
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35774,G__35775) : emmy.series.series_value.call(null,G__35774,G__35775));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35776 = self__.xs;
var G__35777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35776,G__35777) : emmy.series.series_value.call(null,G__35776,G__35777));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35782 = self__.xs;
var G__35783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35782,G__35783) : emmy.series.series_value.call(null,G__35782,G__35783));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35785 = self__.xs;
var G__35786 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35785,G__35786) : emmy.series.series_value.call(null,G__35785,G__35786));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35787 = self__.xs;
var G__35788 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35787,G__35788) : emmy.series.series_value.call(null,G__35787,G__35788));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35790 = self__.xs;
var G__35791 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35790,G__35791) : emmy.series.series_value.call(null,G__35790,G__35791));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35792 = self__.xs;
var G__35793 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35792,G__35793) : emmy.series.series_value.call(null,G__35792,G__35793));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35797 = self__.xs;
var G__35798 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35797,G__35798) : emmy.series.series_value.call(null,G__35797,G__35798));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35827 = self__.xs;
var G__35828 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35827,G__35828) : emmy.series.series_value.call(null,G__35827,G__35828));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35844 = self__.xs;
var G__35845 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35844,G__35845) : emmy.series.series_value.call(null,G__35844,G__35845));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35865 = self__.xs;
var G__35866 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35865,G__35866) : emmy.series.series_value.call(null,G__35865,G__35866));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35870 = self__.xs;
var G__35871 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35870,G__35871) : emmy.series.series_value.call(null,G__35870,G__35871));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35876 = self__.xs;
var G__35877 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35876,G__35877) : emmy.series.series_value.call(null,G__35876,G__35877));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35889 = self__.xs;
var G__35890 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35889,G__35890) : emmy.series.series_value.call(null,G__35889,G__35890));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35892 = self__.xs;
var G__35893 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35892,G__35893) : emmy.series.series_value.call(null,G__35892,G__35893));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35901 = self__.xs;
var G__35902 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35901,G__35902) : emmy.series.series_value.call(null,G__35901,G__35902));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35903 = self__.xs;
var G__35905 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35903,G__35905) : emmy.series.series_value.call(null,G__35903,G__35905));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35921 = self__.xs;
var G__35922 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35921,G__35922) : emmy.series.series_value.call(null,G__35921,G__35922));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35923 = self__.xs;
var G__35924 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35923,G__35924) : emmy.series.series_value.call(null,G__35923,G__35924));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35926 = self__.xs;
var G__35927 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35926,G__35927) : emmy.series.series_value.call(null,G__35926,G__35927));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35951 = self__.xs;
var G__35952 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35951,G__35952) : emmy.series.series_value.call(null,G__35951,G__35952));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__35954 = self__.xs;
var G__35955 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__35954,G__35955) : emmy.series.series_value.call(null,G__35954,G__35955));
})(),null));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__35959 = (function (p1__35731_SHARP_){
return emmy.dual.replace_tag(p1__35731_SHARP_,old,new$);
});
var G__35960 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35959,G__35960) : emmy.series.fmap.call(null,G__35959,G__35960));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__35961 = (function (p1__35735_SHARP_){
return emmy.dual.extract_tangent(p1__35735_SHARP_,tag,mode);
});
var G__35962 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35961,G__35962) : emmy.series.fmap.call(null,G__35961,G__35962));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__35963 = (function (p1__35736_SHARP_){
return emmy.dual.extract_id(p1__35736_SHARP_,id);
});
var G__35964 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35963,G__35964) : emmy.series.fmap.call(null,G__35963,G__35964));
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
var G__35971 = (arguments.length - (1));
switch (G__35971) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.series.PowerSeries.prototype.apply = (function (self__,args35968){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args35968)));
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
var G__35972 = (function (p1__35965_SHARP_){
return emmy.dual.replace_tag(p1__35965_SHARP_,old,new$);
});
var G__35973 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35972,G__35973) : emmy.series.fmap.call(null,G__35972,G__35973));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__35975 = (function (p1__35966_SHARP_){
return emmy.dual.extract_tangent(p1__35966_SHARP_,tag,mode);
});
var G__35976 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35975,G__35976) : emmy.series.fmap.call(null,G__35975,G__35976));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__35978 = (function (p1__35967_SHARP_){
return emmy.dual.extract_id(p1__35967_SHARP_,id);
});
var G__35979 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__35978,G__35979) : emmy.series.fmap.call(null,G__35978,G__35979));
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
var G__35984 = kind;
var G__35984__$1 = (((G__35984 instanceof cljs.core.Keyword))?G__35984.fqn:null);
switch (G__35984__$1) {
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
var len__5897__auto___36470 = arguments.length;
var i__5898__auto___36471 = (0);
while(true){
if((i__5898__auto___36471 < len__5897__auto___36470)){
args__5903__auto__.push((arguments[i__5898__auto___36471]));

var G__36472 = (i__5898__auto___36471 + (1));
i__5898__auto___36471 = G__36472;
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
(emmy.series.series.cljs$lang$applyTo = (function (seq35985){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35985));
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
var len__5897__auto___36473 = arguments.length;
var i__5898__auto___36474 = (0);
while(true){
if((i__5898__auto___36474 < len__5897__auto___36473)){
args__5903__auto__.push((arguments[i__5898__auto___36474]));

var G__36475 = (i__5898__auto___36474 + (1));
i__5898__auto___36474 = G__36475;
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
(emmy.series.power_series.cljs$lang$applyTo = (function (seq35994){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35994));
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
var G__36004 = arguments.length;
switch (G__36004) {
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
var G__36011 = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__36012 = null;
var fexpr__36010 = emmy.series.kind__GT_make(kind);
return (fexpr__36010.cljs$core$IFn$_invoke$arity$2 ? fexpr__36010.cljs$core$IFn$_invoke$arity$2(G__36011,G__36012) : fexpr__36010.call(null,G__36011,G__36012));
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
var G__36023 = arguments.length;
switch (G__36023) {
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
var G__36028 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__36029 = null;
var fexpr__36027 = emmy.series.kind__GT_make(kind);
return (fexpr__36027.cljs$core$IFn$_invoke$arity$2 ? fexpr__36027.cljs$core$IFn$_invoke$arity$2(G__36028,G__36029) : fexpr__36027.call(null,G__36028,G__36029));
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
var G__36037 = arguments.length;
switch (G__36037) {
case 1:
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___36489 = arguments.length;
var i__5898__auto___36490 = (0);
while(true){
if((i__5898__auto___36490 < len__5897__auto___36489)){
args_arr__5922__auto__.push((arguments[i__5898__auto___36490]));

var G__36491 = (i__5898__auto___36490 + (1));
i__5898__auto___36490 = G__36491;
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
(emmy.series.function__GT_.cljs$lang$applyTo = (function (seq36035){
var G__36036 = cljs.core.first(seq36035);
var seq36035__$1 = cljs.core.next(seq36035);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36036,seq36035__$1);
}));

(emmy.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
emmy.series.power_series_value = (function emmy$series$power_series_value(f,x){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
var powers = cljs.core.iterate((function (p1__36051_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__36051_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,f,powers);
});
emmy.series.series_value = (function emmy$series$series_value(f,xs){
var collect = (function emmy$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(emmy.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__36058 = result;
var seq__36059 = cljs.core.seq(vec__36058);
var first__36060 = cljs.core.first(seq__36059);
var seq__36059__$1 = cljs.core.next(seq__36059);
var r = first__36060;
var r_tail = seq__36059__$1;
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
var G__36067 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__36068 = cljs.core.meta(s);
var fexpr__36066 = emmy.series._make(s);
return (fexpr__36066.cljs$core$IFn$_invoke$arity$2 ? fexpr__36066.cljs$core$IFn$_invoke$arity$2(G__36067,G__36068) : fexpr__36066.call(null,G__36067,G__36068));
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
var G__36071 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__36072 = cljs.core.meta(s);
var fexpr__36070 = emmy.series._make(s);
return (fexpr__36070.cljs$core$IFn$_invoke$arity$2 ? fexpr__36070.cljs$core$IFn$_invoke$arity$2(G__36071,G__36072) : fexpr__36070.call(null,G__36071,G__36072));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.series.partial_sums = (function emmy$series$partial_sums(s){
var G__36075 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,s);
var G__36076 = cljs.core.meta(s);
var fexpr__36074 = emmy.series._make(s);
return (fexpr__36074.cljs$core$IFn$_invoke$arity$2 ? fexpr__36074.cljs$core$IFn$_invoke$arity$2(G__36075,G__36076) : fexpr__36074.call(null,G__36075,G__36076));
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
var G__36090 = arguments.length;
switch (G__36090) {
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
return emmy.series.fmap((function (p1__36109_SHARP_){
return (emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__36109_SHARP_,factors) : emmy.series.arg_scale.call(null,p1__36109_SHARP_,factors));
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
return emmy.series.fmap((function (p1__36115_SHARP_){
return (emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__36115_SHARP_,shifts) : emmy.series.arg_shift.call(null,p1__36115_SHARP_,shifts));
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
var seq__36130_36507 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_Series,new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_PowerSeries,new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null)], null));
var chunk__36131_36508 = null;
var count__36132_36509 = (0);
var i__36133_36510 = (0);
while(true){
if((i__36133_36510 < count__36132_36509)){
var vec__36290_36513 = chunk__36131_36508.cljs$core$IIndexed$_nth$arity$2(null,i__36133_36510);
var ctor_36514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36290_36513,(0),null);
var kind_36515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36290_36513,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (_){
return false;
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (_){
return false;
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (_){
return false;
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,t){
var G__36294 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__36295 = null;
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36294,G__36295) : ctor_36514.call(null,G__36294,G__36295));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (c,s){
var G__36296 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__36297 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36296,G__36297) : ctor_36514.call(null,G__36296,G__36297));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,c){
var G__36298 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__36299 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36298,G__36299) : ctor_36514.call(null,G__36298,G__36299));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s){
var G__36302 = emmy.series.impl.negate(cljs.core.seq(s));
var G__36303 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36302,G__36303) : ctor_36514.call(null,G__36302,G__36303));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,t){
var G__36305 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__36306 = null;
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36305,G__36306) : ctor_36514.call(null,G__36305,G__36306));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (c,s){
var G__36307 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__36308 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36307,G__36308) : ctor_36514.call(null,G__36307,G__36308));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,c){
var G__36311 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__36312 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36311,G__36312) : ctor_36514.call(null,G__36311,G__36312));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,t){
var G__36314 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__36315 = null;
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36314,G__36315) : ctor_36514.call(null,G__36314,G__36315));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (c,s){
var G__36317 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__36318 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36317,G__36318) : ctor_36514.call(null,G__36317,G__36318));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,c){
var G__36322 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__36323 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36322,G__36323) : ctor_36514.call(null,G__36322,G__36323));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s){
var xs = cljs.core.seq(s);
var G__36326 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__36327 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36326,G__36327) : ctor_36514.call(null,G__36326,G__36327));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s){
var xs = cljs.core.seq(s);
var G__36328 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__36329 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36328,G__36329) : ctor_36514.call(null,G__36328,G__36329));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,e){
var G__36330 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__36331 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36330,G__36331) : ctor_36514.call(null,G__36330,G__36331));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s){
var G__36332 = emmy.series.impl.invert(cljs.core.seq(s));
var G__36333 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36332,G__36333) : ctor_36514.call(null,G__36332,G__36333));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (c,s){
var G__36334 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__36335 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36334,G__36335) : ctor_36514.call(null,G__36334,G__36335));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,c){
var G__36336 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__36337 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36336,G__36337) : ctor_36514.call(null,G__36336,G__36337));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,t){
var G__36338 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__36339 = null;
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36338,G__36339) : ctor_36514.call(null,G__36338,G__36339));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515,kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s){
var G__36340 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__36341 = cljs.core.meta(s);
return (ctor_36514.cljs$core$IFn$_invoke$arity$2 ? ctor_36514.cljs$core$IFn$_invoke$arity$2(G__36340,G__36341) : ctor_36514.call(null,G__36340,G__36341));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36515], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36290_36513,ctor_36514,kind_36515))
);


var G__36530 = seq__36130_36507;
var G__36531 = chunk__36131_36508;
var G__36532 = count__36132_36509;
var G__36533 = (i__36133_36510 + (1));
seq__36130_36507 = G__36530;
chunk__36131_36508 = G__36531;
count__36132_36509 = G__36532;
i__36133_36510 = G__36533;
continue;
} else {
var temp__5825__auto___36534 = cljs.core.seq(seq__36130_36507);
if(temp__5825__auto___36534){
var seq__36130_36535__$1 = temp__5825__auto___36534;
if(cljs.core.chunked_seq_QMARK_(seq__36130_36535__$1)){
var c__5694__auto___36536 = cljs.core.chunk_first(seq__36130_36535__$1);
var G__36537 = cljs.core.chunk_rest(seq__36130_36535__$1);
var G__36538 = c__5694__auto___36536;
var G__36539 = cljs.core.count(c__5694__auto___36536);
var G__36540 = (0);
seq__36130_36507 = G__36537;
chunk__36131_36508 = G__36538;
count__36132_36509 = G__36539;
i__36133_36510 = G__36540;
continue;
} else {
var vec__36345_36542 = cljs.core.first(seq__36130_36535__$1);
var ctor_36543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36345_36542,(0),null);
var kind_36544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36345_36542,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (_){
return false;
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (_){
return false;
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (_){
return false;
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,t){
var G__36350 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__36351 = null;
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36350,G__36351) : ctor_36543.call(null,G__36350,G__36351));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (c,s){
var G__36352 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__36353 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36352,G__36353) : ctor_36543.call(null,G__36352,G__36353));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,c){
var G__36354 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__36355 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36354,G__36355) : ctor_36543.call(null,G__36354,G__36355));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s){
var G__36359 = emmy.series.impl.negate(cljs.core.seq(s));
var G__36360 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36359,G__36360) : ctor_36543.call(null,G__36359,G__36360));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,t){
var G__36361 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__36362 = null;
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36361,G__36362) : ctor_36543.call(null,G__36361,G__36362));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (c,s){
var G__36364 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__36365 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36364,G__36365) : ctor_36543.call(null,G__36364,G__36365));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,c){
var G__36367 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__36368 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36367,G__36368) : ctor_36543.call(null,G__36367,G__36368));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,t){
var G__36369 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__36370 = null;
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36369,G__36370) : ctor_36543.call(null,G__36369,G__36370));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (c,s){
var G__36371 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__36372 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36371,G__36372) : ctor_36543.call(null,G__36371,G__36372));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,c){
var G__36374 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__36375 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36374,G__36375) : ctor_36543.call(null,G__36374,G__36375));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s){
var xs = cljs.core.seq(s);
var G__36376 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__36377 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36376,G__36377) : ctor_36543.call(null,G__36376,G__36377));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s){
var xs = cljs.core.seq(s);
var G__36378 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__36379 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36378,G__36379) : ctor_36543.call(null,G__36378,G__36379));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,e){
var G__36388 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__36389 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36388,G__36389) : ctor_36543.call(null,G__36388,G__36389));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s){
var G__36391 = emmy.series.impl.invert(cljs.core.seq(s));
var G__36392 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36391,G__36392) : ctor_36543.call(null,G__36391,G__36392));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (c,s){
var G__36393 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__36394 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36393,G__36394) : ctor_36543.call(null,G__36393,G__36394));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,c){
var G__36395 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__36396 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36395,G__36396) : ctor_36543.call(null,G__36395,G__36396));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,t){
var G__36399 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__36400 = null;
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36399,G__36400) : ctor_36543.call(null,G__36399,G__36400));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544,kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s){
var G__36404 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__36405 = cljs.core.meta(s);
return (ctor_36543.cljs$core$IFn$_invoke$arity$2 ? ctor_36543.cljs$core$IFn$_invoke$arity$2(G__36404,G__36405) : ctor_36543.call(null,G__36404,G__36405));
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_36544], null),((function (seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__36130_36507,chunk__36131_36508,count__36132_36509,i__36133_36510,vec__36345_36542,ctor_36543,kind_36544,seq__36130_36535__$1,temp__5825__auto___36534))
);


var G__36564 = cljs.core.next(seq__36130_36535__$1);
var G__36565 = null;
var G__36566 = (0);
var G__36567 = (0);
seq__36130_36507 = G__36564;
chunk__36131_36508 = G__36565;
count__36132_36509 = G__36566;
i__36133_36510 = G__36567;
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
return emmy.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36412_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__36412_SHARP_,selectors);
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
