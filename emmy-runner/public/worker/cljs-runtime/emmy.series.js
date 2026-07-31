import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.dual.js";
import "./emmy.expression.js";
import "./emmy.function.js";
import "./emmy.generic.js";
import "./emmy.series.impl.js";
import "./emmy.util.js";
import "./emmy.value.js";
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
var G__67864 = (arguments.length - (1));
switch (G__67864) {
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

(emmy.series.Series.prototype.apply = (function (self__,args67862){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67862)));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67886 = self__.xs;
var G__67887 = cljs.core.PersistentVector.EMPTY;
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67886,G__67887) : emmy.series.series_value.call(null,G__67886,G__67887));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67888 = self__.xs;
var G__67889 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67888,G__67889) : emmy.series.series_value.call(null,G__67888,G__67889));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67890 = self__.xs;
var G__67891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67890,G__67891) : emmy.series.series_value.call(null,G__67890,G__67891));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67893 = self__.xs;
var G__67894 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67893,G__67894) : emmy.series.series_value.call(null,G__67893,G__67894));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67899 = self__.xs;
var G__67900 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67899,G__67900) : emmy.series.series_value.call(null,G__67899,G__67900));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67902 = self__.xs;
var G__67903 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67902,G__67903) : emmy.series.series_value.call(null,G__67902,G__67903));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67904 = self__.xs;
var G__67905 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67904,G__67905) : emmy.series.series_value.call(null,G__67904,G__67905));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67906 = self__.xs;
var G__67907 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67906,G__67907) : emmy.series.series_value.call(null,G__67906,G__67907));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67908 = self__.xs;
var G__67909 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67908,G__67909) : emmy.series.series_value.call(null,G__67908,G__67909));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67910 = self__.xs;
var G__67911 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67910,G__67911) : emmy.series.series_value.call(null,G__67910,G__67911));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67912 = self__.xs;
var G__67913 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67912,G__67913) : emmy.series.series_value.call(null,G__67912,G__67913));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67914 = self__.xs;
var G__67915 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67914,G__67915) : emmy.series.series_value.call(null,G__67914,G__67915));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67916 = self__.xs;
var G__67917 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67916,G__67917) : emmy.series.series_value.call(null,G__67916,G__67917));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67918 = self__.xs;
var G__67919 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67918,G__67919) : emmy.series.series_value.call(null,G__67918,G__67919));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67925 = self__.xs;
var G__67926 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67925,G__67926) : emmy.series.series_value.call(null,G__67925,G__67926));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67929 = self__.xs;
var G__67930 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67929,G__67930) : emmy.series.series_value.call(null,G__67929,G__67930));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67934 = self__.xs;
var G__67935 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67934,G__67935) : emmy.series.series_value.call(null,G__67934,G__67935));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67937 = self__.xs;
var G__67938 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67937,G__67938) : emmy.series.series_value.call(null,G__67937,G__67938));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67939 = self__.xs;
var G__67940 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67939,G__67940) : emmy.series.series_value.call(null,G__67939,G__67940));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67943 = self__.xs;
var G__67944 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67943,G__67944) : emmy.series.series_value.call(null,G__67943,G__67944));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67946 = self__.xs;
var G__67947 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67946,G__67947) : emmy.series.series_value.call(null,G__67946,G__67947));
})(),null));
}));

(emmy.series.Series.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var _ = this;
return (new emmy.series.Series((function (){var G__67949 = self__.xs;
var G__67950 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.series.series_value.cljs$core$IFn$_invoke$arity$2 ? emmy.series.series_value.cljs$core$IFn$_invoke$arity$2(G__67949,G__67950) : emmy.series.series_value.call(null,G__67949,G__67950));
})(),null));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.series.Series.prototype.emmy$dual$IPerturbed$replace_tag$arity$3 = (function (s,old,new$){
var self__ = this;
var s__$1 = this;
var G__67953 = (function (p1__67859_SHARP_){
return emmy.dual.replace_tag(p1__67859_SHARP_,old,new$);
});
var G__67954 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__67953,G__67954) : emmy.series.fmap.call(null,G__67953,G__67954));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__67955 = (function (p1__67860_SHARP_){
return emmy.dual.extract_tangent(p1__67860_SHARP_,tag,mode);
});
var G__67956 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__67955,G__67956) : emmy.series.fmap.call(null,G__67955,G__67956));
}));

(emmy.series.Series.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__67964 = (function (p1__67861_SHARP_){
return emmy.dual.extract_id(p1__67861_SHARP_,id);
});
var G__67965 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__67964,G__67965) : emmy.series.fmap.call(null,G__67964,G__67965));
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
var G__67985 = (arguments.length - (1));
switch (G__67985) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error((""+"Invalid arity: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1))))));

}
}));

(emmy.series.PowerSeries.prototype.apply = (function (self__,args67976){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args67976)));
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
var G__67993 = (function (p1__67967_SHARP_){
return emmy.dual.replace_tag(p1__67967_SHARP_,old,new$);
});
var G__67994 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__67993,G__67994) : emmy.series.fmap.call(null,G__67993,G__67994));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_tangent$arity$3 = (function (s,tag,mode){
var self__ = this;
var s__$1 = this;
var G__67995 = (function (p1__67968_SHARP_){
return emmy.dual.extract_tangent(p1__67968_SHARP_,tag,mode);
});
var G__67996 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__67995,G__67996) : emmy.series.fmap.call(null,G__67995,G__67996));
}));

(emmy.series.PowerSeries.prototype.emmy$dual$IPerturbed$extract_id$arity$2 = (function (s,id){
var self__ = this;
var s__$1 = this;
var G__67997 = (function (p1__67969_SHARP_){
return emmy.dual.extract_id(p1__67969_SHARP_,id);
});
var G__67998 = s__$1;
return (emmy.series.fmap.cljs$core$IFn$_invoke$arity$2 ? emmy.series.fmap.cljs$core$IFn$_invoke$arity$2(G__67997,G__67998) : emmy.series.fmap.call(null,G__67997,G__67998));
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
var G__68010 = kind;
var G__68010__$1 = (((G__68010 instanceof cljs.core.Keyword))?G__68010.fqn:null);
switch (G__68010__$1) {
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
var len__5897__auto___68463 = arguments.length;
var i__5898__auto___68464 = (0);
while(true){
if((i__5898__auto___68464 < len__5897__auto___68463)){
args__5903__auto__.push((arguments[i__5898__auto___68464]));

var G__68465 = (i__5898__auto___68464 + (1));
i__5898__auto___68464 = G__68465;
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
(emmy.series.series.cljs$lang$applyTo = (function (seq68016){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68016));
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
var len__5897__auto___68470 = arguments.length;
var i__5898__auto___68471 = (0);
while(true){
if((i__5898__auto___68471 < len__5897__auto___68470)){
args__5903__auto__.push((arguments[i__5898__auto___68471]));

var G__68472 = (i__5898__auto___68471 + (1));
i__5898__auto___68471 = G__68472;
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
(emmy.series.power_series.cljs$lang$applyTo = (function (seq68022){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68022));
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
var G__68030 = arguments.length;
switch (G__68030) {
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
var G__68037 = emmy.series.impl.__GT_series(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
var G__68038 = null;
var fexpr__68036 = emmy.series.kind__GT_make(kind);
return (fexpr__68036.cljs$core$IFn$_invoke$arity$2 ? fexpr__68036.cljs$core$IFn$_invoke$arity$2(G__68037,G__68038) : fexpr__68036.call(null,G__68037,G__68038));
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
var G__68056 = arguments.length;
switch (G__68056) {
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
var G__68061 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__68062 = null;
var fexpr__68060 = emmy.series.kind__GT_make(kind);
return (fexpr__68060.cljs$core$IFn$_invoke$arity$2 ? fexpr__68060.cljs$core$IFn$_invoke$arity$2(G__68061,G__68062) : fexpr__68060.call(null,G__68061,G__68062));
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
var G__68075 = arguments.length;
switch (G__68075) {
case 1:
return emmy.series.function__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___68490 = arguments.length;
var i__5898__auto___68491 = (0);
while(true){
if((i__5898__auto___68491 < len__5897__auto___68490)){
args_arr__5922__auto__.push((arguments[i__5898__auto___68491]));

var G__68494 = (i__5898__auto___68491 + (1));
i__5898__auto___68491 = G__68494;
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
(emmy.series.function__GT_.cljs$lang$applyTo = (function (seq68073){
var G__68074 = cljs.core.first(seq68073);
var seq68073__$1 = cljs.core.next(seq68073);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68074,seq68073__$1);
}));

(emmy.series.function__GT_.cljs$lang$maxFixedArity = (1));

/**
 * Evaluates the power series, and converts it back down to a normal series.
 */
emmy.series.power_series_value = (function emmy$series$power_series_value(f,x){
var one = emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(x);
var powers = cljs.core.iterate((function (p1__68082_SHARP_){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(x,p1__68082_SHARP_);
}),one);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.generic._STAR_,f,powers);
});
emmy.series.series_value = (function emmy$series$series_value(f,xs){
var collect = (function emmy$series$series_value_$_collect(f__$1){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.first(f__$1),xs);
if(emmy.series.series_QMARK_(result)){
return (new cljs.core.LazySeq(null,(function (){
var vec__68091 = result;
var seq__68092 = cljs.core.seq(vec__68091);
var first__68093 = cljs.core.first(seq__68092);
var seq__68092__$1 = cljs.core.next(seq__68092);
var r = first__68093;
var r_tail = seq__68092__$1;
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
var G__68104 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s);
var G__68105 = cljs.core.meta(s);
var fexpr__68103 = emmy.series._make(s);
return (fexpr__68103.cljs$core$IFn$_invoke$arity$2 ? fexpr__68103.cljs$core$IFn$_invoke$arity$2(G__68104,G__68105) : fexpr__68103.call(null,G__68104,G__68105));
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
var G__68107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.cons,s,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(zeros)));
var G__68108 = cljs.core.meta(s);
var fexpr__68106 = emmy.series._make(s);
return (fexpr__68106.cljs$core$IFn$_invoke$arity$2 ? fexpr__68106.cljs$core$IFn$_invoke$arity$2(G__68107,G__68108) : fexpr__68106.call(null,G__68107,G__68108));
}
});
/**
 * Returns a series (of the same type as the input) of partial sums of the terms
 *   in the supplied series `s`.
 */
emmy.series.partial_sums = (function emmy$series$partial_sums(s){
var G__68110 = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_,s);
var G__68111 = cljs.core.meta(s);
var fexpr__68109 = emmy.series._make(s);
return (fexpr__68109.cljs$core$IFn$_invoke$arity$2 ? fexpr__68109.cljs$core$IFn$_invoke$arity$2(G__68110,G__68111) : fexpr__68109.call(null,G__68110,G__68111));
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
var G__68116 = arguments.length;
switch (G__68116) {
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
return emmy.series.fmap((function (p1__68118_SHARP_){
return (emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_scale.cljs$core$IFn$_invoke$arity$2(p1__68118_SHARP_,factors) : emmy.series.arg_scale.call(null,p1__68118_SHARP_,factors));
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
return emmy.series.fmap((function (p1__68121_SHARP_){
return (emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2 ? emmy.series.arg_shift.cljs$core$IFn$_invoke$arity$2(p1__68121_SHARP_,shifts) : emmy.series.arg_shift.call(null,p1__68121_SHARP_,shifts));
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
var seq__68134_68500 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_Series,new cljs.core.Keyword("emmy.series","series","emmy.series/series",1817174773)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.series.__GT_PowerSeries,new cljs.core.Keyword("emmy.series","power-series","emmy.series/power-series",58712418)], null)], null));
var chunk__68135_68501 = null;
var count__68136_68502 = (0);
var i__68137_68503 = (0);
while(true){
if((i__68137_68503 < count__68136_68502)){
var vec__68258_68504 = chunk__68135_68501.cljs$core$IIndexed$_nth$arity$2(null,i__68137_68503);
var ctor_68505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68258_68504,(0),null);
var kind_68506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68258_68504,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (_){
return false;
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (_){
return false;
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (_){
return false;
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,t){
var G__68263 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__68264 = null;
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68263,G__68264) : ctor_68505.call(null,G__68263,G__68264));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (c,s){
var G__68266 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__68267 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68266,G__68267) : ctor_68505.call(null,G__68266,G__68267));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,c){
var G__68270 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__68271 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68270,G__68271) : ctor_68505.call(null,G__68270,G__68271));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s){
var G__68272 = emmy.series.impl.negate(cljs.core.seq(s));
var G__68273 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68272,G__68273) : ctor_68505.call(null,G__68272,G__68273));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,t){
var G__68274 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__68275 = null;
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68274,G__68275) : ctor_68505.call(null,G__68274,G__68275));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (c,s){
var G__68276 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__68277 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68276,G__68277) : ctor_68505.call(null,G__68276,G__68277));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,c){
var G__68278 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__68279 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68278,G__68279) : ctor_68505.call(null,G__68278,G__68279));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,t){
var G__68280 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__68281 = null;
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68280,G__68281) : ctor_68505.call(null,G__68280,G__68281));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (c,s){
var G__68286 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__68287 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68286,G__68287) : ctor_68505.call(null,G__68286,G__68287));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,c){
var G__68288 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__68289 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68288,G__68289) : ctor_68505.call(null,G__68288,G__68289));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s){
var xs = cljs.core.seq(s);
var G__68290 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__68291 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68290,G__68291) : ctor_68505.call(null,G__68290,G__68291));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s){
var xs = cljs.core.seq(s);
var G__68292 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__68293 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68292,G__68293) : ctor_68505.call(null,G__68292,G__68293));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,e){
var G__68294 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__68295 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68294,G__68295) : ctor_68505.call(null,G__68294,G__68295));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s){
var G__68297 = emmy.series.impl.invert(cljs.core.seq(s));
var G__68298 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68297,G__68298) : ctor_68505.call(null,G__68297,G__68298));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (c,s){
var G__68300 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__68301 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68300,G__68301) : ctor_68505.call(null,G__68300,G__68301));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,c){
var G__68303 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__68304 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68303,G__68304) : ctor_68505.call(null,G__68303,G__68304));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,t){
var G__68308 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__68309 = null;
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68308,G__68309) : ctor_68505.call(null,G__68308,G__68309));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506,kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s){
var G__68311 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__68312 = cljs.core.meta(s);
return (ctor_68505.cljs$core$IFn$_invoke$arity$2 ? ctor_68505.cljs$core$IFn$_invoke$arity$2(G__68311,G__68312) : ctor_68505.call(null,G__68311,G__68312));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68506], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68258_68504,ctor_68505,kind_68506))
);


var G__68521 = seq__68134_68500;
var G__68522 = chunk__68135_68501;
var G__68523 = count__68136_68502;
var G__68524 = (i__68137_68503 + (1));
seq__68134_68500 = G__68521;
chunk__68135_68501 = G__68522;
count__68136_68502 = G__68523;
i__68137_68503 = G__68524;
continue;
} else {
var temp__5825__auto___68526 = cljs.core.seq(seq__68134_68500);
if(temp__5825__auto___68526){
var seq__68134_68527__$1 = temp__5825__auto___68526;
if(cljs.core.chunked_seq_QMARK_(seq__68134_68527__$1)){
var c__5694__auto___68529 = cljs.core.chunk_first(seq__68134_68527__$1);
var G__68530 = cljs.core.chunk_rest(seq__68134_68527__$1);
var G__68531 = c__5694__auto___68529;
var G__68532 = cljs.core.count(c__5694__auto___68529);
var G__68533 = (0);
seq__68134_68500 = G__68530;
chunk__68135_68501 = G__68531;
count__68136_68502 = G__68532;
i__68137_68503 = G__68533;
continue;
} else {
var vec__68314_68535 = cljs.core.first(seq__68134_68527__$1);
var ctor_68537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68314_68535,(0),null);
var kind_68538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68314_68535,(1),null);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (_){
return false;
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (_){
return false;
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (_){
return false;
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,t){
var G__68327 = emmy.series.impl.seq_COLON__PLUS_(cljs.core.seq(s),cljs.core.seq(t));
var G__68328 = null;
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68327,G__68328) : ctor_68537.call(null,G__68327,G__68328));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (c,s){
var G__68333 = emmy.series.impl.c_PLUS_seq(c,cljs.core.seq(s));
var G__68334 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68333,G__68334) : ctor_68537.call(null,G__68333,G__68334));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.add.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,c){
var G__68335 = emmy.series.impl.seq_PLUS_c(cljs.core.seq(s),c);
var G__68336 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68335,G__68336) : ctor_68537.call(null,G__68335,G__68336));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s){
var G__68337 = emmy.series.impl.negate(cljs.core.seq(s));
var G__68338 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68337,G__68338) : ctor_68537.call(null,G__68337,G__68338));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,t){
var G__68339 = emmy.series.impl.seq_COLON__(cljs.core.seq(s),cljs.core.seq(t));
var G__68340 = null;
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68339,G__68340) : ctor_68537.call(null,G__68339,G__68340));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (c,s){
var G__68342 = emmy.series.impl.c_seq(c,cljs.core.seq(s));
var G__68343 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68342,G__68343) : ctor_68537.call(null,G__68342,G__68343));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.sub.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,c){
var G__68345 = emmy.series.impl.seq_c(cljs.core.seq(s),c);
var G__68346 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68345,G__68346) : ctor_68537.call(null,G__68345,G__68346));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,t){
var G__68347 = emmy.series.impl.seq_COLON__STAR_(cljs.core.seq(s),cljs.core.seq(t));
var G__68348 = null;
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68347,G__68348) : ctor_68537.call(null,G__68347,G__68348));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (c,s){
var G__68351 = emmy.series.impl.c_STAR_seq(c,cljs.core.seq(s));
var G__68352 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68351,G__68352) : ctor_68537.call(null,G__68351,G__68352));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.mul.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,c){
var G__68353 = emmy.series.impl.seq_STAR_c(cljs.core.seq(s),c);
var G__68354 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68353,G__68354) : ctor_68537.call(null,G__68353,G__68354));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s){
var xs = cljs.core.seq(s);
var G__68356 = emmy.series.impl.seq_COLON__STAR_(xs,xs);
var G__68357 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68356,G__68357) : ctor_68537.call(null,G__68356,G__68357));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s){
var xs = cljs.core.seq(s);
var G__68361 = emmy.series.impl.seq_COLON__STAR_(emmy.series.impl.seq_COLON__STAR_(xs,xs),xs);
var G__68362 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68361,G__68362) : ctor_68537.call(null,G__68361,G__68362));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.value","native-integral","emmy.value/native-integral",-1286161061)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,e){
var G__68363 = emmy.series.impl.expt(cljs.core.seq(s),e);
var G__68364 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68363,G__68364) : ctor_68537.call(null,G__68363,G__68364));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s){
var G__68366 = emmy.series.impl.invert(cljs.core.seq(s));
var G__68367 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68366,G__68367) : ctor_68537.call(null,G__68366,G__68367));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (c,s){
var G__68371 = emmy.series.impl.c_div_seq(c,cljs.core.seq(s));
var G__68372 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68371,G__68372) : ctor_68537.call(null,G__68371,G__68372));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,c){
var G__68373 = emmy.series.impl.seq_div_c(cljs.core.seq(s),c);
var G__68374 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68373,G__68374) : ctor_68537.call(null,G__68373,G__68374));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.div.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,t){
var G__68376 = emmy.series.impl.div(cljs.core.seq(s),cljs.core.seq(t));
var G__68377 = null;
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68376,G__68377) : ctor_68537.call(null,G__68376,G__68377));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.solve_linear_right.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,t);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415),kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (c,s){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(s,c);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,new cljs.core.Keyword("emmy.series","coseries","emmy.series/coseries",1116504415)], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,c){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(c,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.solve_linear.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538,kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s,t){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(t,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.sqrt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s){
var G__68381 = emmy.series.impl.sqrt(cljs.core.seq(s));
var G__68382 = cljs.core.meta(s);
return (ctor_68537.cljs$core$IFn$_invoke$arity$2 ? ctor_68537.cljs$core$IFn$_invoke$arity$2(G__68381,G__68382) : ctor_68537.call(null,G__68381,G__68382));
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);

emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind_68538], null),((function (seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526){
return (function (s){
return emmy.series.fmap(emmy.generic.simplify,s);
});})(seq__68134_68500,chunk__68135_68501,count__68136_68502,i__68137_68503,vec__68314_68535,ctor_68537,kind_68538,seq__68134_68527__$1,temp__5825__auto___68526))
);


var G__68552 = cljs.core.next(seq__68134_68527__$1);
var G__68553 = null;
var G__68554 = (0);
var G__68555 = (0);
seq__68134_68500 = G__68552;
chunk__68135_68501 = G__68553;
count__68136_68502 = G__68554;
i__68137_68503 = G__68555;
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
return emmy.series.__GT_Series(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68396_SHARP_){
return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(p1__68396_SHARP_,selectors);
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
