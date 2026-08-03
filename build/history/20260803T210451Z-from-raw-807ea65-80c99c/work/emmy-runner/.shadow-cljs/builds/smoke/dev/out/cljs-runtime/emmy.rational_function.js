goog.provide('emmy.rational_function');


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {emmy.ratio.IRational}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {emmy.function$.IArity}
*/
emmy.rational_function.RationalFunction = (function (arity,u,v,m){
this.arity = arity;
this.u = u;
this.v = v;
this.m = m;
this.cljs$lang$protocol_mask$partition0$ = 2158362625;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.rational_function.RationalFunction.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.u)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.v));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object[emmy.rational-function.RationalFunction \"",x__$1.toString(),"\"]"], 0));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
return (emmy.rational_function.eq.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.eq.cljs$core$IFn$_invoke$arity$2(this$__$1,that) : emmy.rational_function.eq.call(null,this$__$1,that));
}));

(emmy.rational_function.RationalFunction.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.rational_function.RationalFunction.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607);
}));

(emmy.rational_function.RationalFunction.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.rational_function.RationalFunction.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),(0),self__.arity], null);
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new cljs.core.List(null,self__.u,(new cljs.core.List(null,self__.v,null,(1),null)),(2),null));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m__$1){
var self__ = this;
var ___$1 = this;
return (new emmy.rational_function.RationalFunction(self__.arity,self__.u,self__.v,m__$1));
}));

(emmy.rational_function.RationalFunction.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__38725 = (arguments.length - (1));
switch (G__38725) {
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

(emmy.rational_function.RationalFunction.prototype.apply = (function (self__,args38714){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38714)));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var G__38749 = this$;
var G__38750 = cljs.core.PersistentVector.EMPTY;
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38749,G__38750) : emmy.rational_function.evaluate.call(null,G__38749,G__38750));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__38753 = this$;
var G__38754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38753,G__38754) : emmy.rational_function.evaluate.call(null,G__38753,G__38754));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__38755 = this$;
var G__38756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38755,G__38756) : emmy.rational_function.evaluate.call(null,G__38755,G__38756));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__38757 = this$;
var G__38758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38757,G__38758) : emmy.rational_function.evaluate.call(null,G__38757,G__38758));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__38759 = this$;
var G__38760 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38759,G__38760) : emmy.rational_function.evaluate.call(null,G__38759,G__38760));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__38767 = this$;
var G__38768 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38767,G__38768) : emmy.rational_function.evaluate.call(null,G__38767,G__38768));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__38775 = this$;
var G__38776 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38775,G__38776) : emmy.rational_function.evaluate.call(null,G__38775,G__38776));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__38781 = this$;
var G__38782 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38781,G__38782) : emmy.rational_function.evaluate.call(null,G__38781,G__38782));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__38787 = this$;
var G__38788 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38787,G__38788) : emmy.rational_function.evaluate.call(null,G__38787,G__38788));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__38794 = this$;
var G__38795 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38794,G__38795) : emmy.rational_function.evaluate.call(null,G__38794,G__38795));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__38804 = this$;
var G__38805 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38804,G__38805) : emmy.rational_function.evaluate.call(null,G__38804,G__38805));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__38806 = this$;
var G__38807 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38806,G__38807) : emmy.rational_function.evaluate.call(null,G__38806,G__38807));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__38809 = this$;
var G__38810 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38809,G__38810) : emmy.rational_function.evaluate.call(null,G__38809,G__38810));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1){
var self__ = this;
var this$ = this;
var G__38818 = this$;
var G__38819 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38818,G__38819) : emmy.rational_function.evaluate.call(null,G__38818,G__38819));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n){
var self__ = this;
var this$ = this;
var G__38827 = this$;
var G__38829 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38827,G__38829) : emmy.rational_function.evaluate.call(null,G__38827,G__38829));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o){
var self__ = this;
var this$ = this;
var G__38836 = this$;
var G__38837 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38836,G__38837) : emmy.rational_function.evaluate.call(null,G__38836,G__38837));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p){
var self__ = this;
var this$ = this;
var G__38838 = this$;
var G__38839 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38838,G__38839) : emmy.rational_function.evaluate.call(null,G__38838,G__38839));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q){
var self__ = this;
var this$ = this;
var G__38840 = this$;
var G__38841 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38840,G__38841) : emmy.rational_function.evaluate.call(null,G__38840,G__38841));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__38842 = this$;
var G__38843 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38842,G__38843) : emmy.rational_function.evaluate.call(null,G__38842,G__38843));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__38844 = this$;
var G__38845 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38844,G__38845) : emmy.rational_function.evaluate.call(null,G__38844,G__38845));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__38846 = this$;
var G__38847 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38846,G__38847) : emmy.rational_function.evaluate.call(null,G__38846,G__38847));
}));

(emmy.rational_function.RationalFunction.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__38851 = this$;
var G__38852 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m__$1,n,o,p,q,r,s,t], null),rest);
return (emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2 ? emmy.rational_function.evaluate.cljs$core$IFn$_invoke$arity$2(G__38851,G__38852) : emmy.rational_function.evaluate.call(null,G__38851,G__38852));
}));

(emmy.rational_function.RationalFunction.prototype.emmy$ratio$IRational$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.rational_function.RationalFunction.prototype.emmy$ratio$IRational$numerator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.u;
}));

(emmy.rational_function.RationalFunction.prototype.emmy$ratio$IRational$denominator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(emmy.rational_function.RationalFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)], null);
}));

(emmy.rational_function.RationalFunction.cljs$lang$type = true);

(emmy.rational_function.RationalFunction.cljs$lang$ctorStr = "emmy.rational-function/RationalFunction");

(emmy.rational_function.RationalFunction.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.rational-function/RationalFunction");
}));

/**
 * Positional factory function for emmy.rational-function/RationalFunction.
 */
emmy.rational_function.__GT_RationalFunction = (function emmy$rational_function$__GT_RationalFunction(arity,u,v,m){
return (new emmy.rational_function.RationalFunction(arity,u,v,m));
});

/**
 * Returns true if the supplied argument is an instance of [[RationalFunction]],
 *   false otherwise.
 */
emmy.rational_function.rational_function_QMARK_ = (function emmy$rational_function$rational_function_QMARK_(r){
return (r instanceof emmy.rational_function.RationalFunction);
});
/**
 * Returns true if `x` is explicitly _not_ an instance of [[RationalFunction]]
 *   or [[polynomial/Polynomial]], false if it is.
 */
emmy.rational_function.coeff_QMARK_ = (function emmy$rational_function$coeff_QMARK_(x){
return (((!(emmy.rational_function.rational_function_QMARK_(x)))) && (emmy.polynomial.coeff_QMARK_(x)));
});
/**
 * Given a [[RationalFunction]] instance `rf`, returns the `arity` field.
 */
emmy.rational_function.bare_arity = (function emmy$rational_function$bare_arity(rf){
return rf.arity;
});
/**
 * Given a [[RationalFunction]] instance `rf`, returns the `u` (numerator) field.
 */
emmy.rational_function.bare_u = (function emmy$rational_function$bare_u(rf){
return rf.u;
});
/**
 * Given a [[RationalFunction]] instance `rf`, returns the `v` (denominator) field.
 */
emmy.rational_function.bare_v = (function emmy$rational_function$bare_v(rf){
return rf.v;
});
/**
 * Returns the declared arity of the supplied [[RationalFunction]]
 *   or [[polynomial/Polynomial]], or `0` for arguments of other types.
 */
emmy.rational_function.arity = (function emmy$rational_function$arity(r){
if(emmy.rational_function.rational_function_QMARK_(r)){
return emmy.rational_function.bare_arity(r);
} else {
return emmy.polynomial.arity(r);
}
});
/**
 * Given two inputs `u` and `v`, checks that their arities are equal and returns
 *   the value, or throws an exception if not.
 * 
 *   If either `p` or `q` is a coefficient with [[arity]] equal to
 *   0, [[check-same-arity]] successfully returns the other argument's arity.
 */
emmy.rational_function.check_same_arity = (function emmy$rational_function$check_same_arity(u,v){
var ua = emmy.rational_function.arity(u);
var va = emmy.rational_function.arity(v);
if((ua === (0))){
return va;
} else {
if((va === (0))){
return ua;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ua,va)){
return ua;
} else {
return emmy.util.illegal((""+"Unequal arities: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(u)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));

}
}
}
});
/**
 * Returns true if the numerator of `r` is [[polynomial/negative?]], false
 *   otherwise.
 */
emmy.rational_function.negative_QMARK_ = (function emmy$rational_function$negative_QMARK_(r){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.negative_QMARK_(r);
} else {
return emmy.polynomial.negative_QMARK_(emmy.rational_function.bare_u(r));
}
});
/**
 * Returns true if the [[RationalFunction]] this is equal to `that`. If `that` is
 *   a [[RationalFunction]], `this` and `that` are equal if they have equal `u` and
 *   `v` and equal arity. `u` and `v` entries are compared
 *   using [[emmy.value/=]].
 * 
 *   If `that` is non-[[RationalFunction]], `eq` only returns true if `u` and `v`
 *   respectively match the [[ratio/numerator]] and [[ratio/denominator]] of
 *   `that`.
 */
emmy.rational_function.eq = (function emmy$rational_function$eq(this$,that){
if((that instanceof emmy.rational_function.RationalFunction)){
var that__$1 = that;
var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.arity,that__$1.arity);
if(and__5160__auto__){
var and__5160__auto____$1 = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.u,that__$1.u);
if(cljs.core.truth_(and__5160__auto____$1)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,that__$1.v);
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
} else {
var and__5160__auto__ = emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.v,emmy.ratio.denominator(that));
if(cljs.core.truth_(and__5160__auto__)){
return emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(this$.u,emmy.ratio.numerator(that));
} else {
return and__5160__auto__;
}
}
});
/**
 * Accepts an explicit `arity`, numerator `u` and denominator `v` and returns
 *   either:
 * 
 *   - `0`, in the case of a [[value/zero?]] numerator
 *   - `u`, in the case of a [[value/one?]] denominator
 *   - a [[RationalFunction]] instance if _either_ `u` or `v` is a [[polynomial/Polynomial]]
 *   - `(g/div u v)` otherwise.
 * 
 *   Call this function when you've already reduced `u` and `v` such that they
 *   share no common factors and are dropped down to coefficients if possible, and
 *   want to wrap them in [[RationalFunction]] only when necessary.
 * 
 *   NOTE: The behavior of this mildly-opinionated constructor is similar
 *   to [[polynomial/terms->polynomial]]
 */
emmy.rational_function.make_reduced = (function emmy$rational_function$make_reduced(arity,u,v){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(u))){
return (0);
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
return u;
} else {
if(((emmy.polynomial.polynomial_QMARK_(u)) || (emmy.polynomial.polynomial_QMARK_(v)))){
return emmy.rational_function.__GT_RationalFunction(arity,u,v,null);
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(u,v);

}
}
}
});
/**
 * Returns `1` if the input is non-numeric or numeric and non-negative, `-1`
 *   otherwise. In the slightly suspect case of a complex number
 *   input, [[coef-sgn]] only examines the [[generic/real-part]] of the complex
 *   number.
 * 
 *   NOTE Negative [[RationalFunction]] instances attempt to keep the negative sign
 *   in the numerator `u`. The complex number behavior is a kludge, but allows
 *   canonicalization with complex coefficients.
 */
emmy.rational_function.coef_sgn = (function emmy$rational_function$coef_sgn(x){
if(emmy.value.real_QMARK_(x)){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(x))){
return (-1);
} else {
return (1);
}
} else {
if(emmy.complex.complex_QMARK_(x)){
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.real_part.cljs$core$IFn$_invoke$arity$1(x)))){
return (-1);
} else {
return (1);
}
} else {
return (1);

}
}
});
/**
 * Given a numerator `u` and denominator `v`, returns the result of:
 * 
 *   - multiplying `u` and `v` by the least common multiple of all denominators
 *  found in either `u` or `v`, so that `u` and `v` contain
 *  no [[RationalFunction]]e or ratio-like coefficients
 *   - normalizing the denominator `v` to be positive by negating `u`, if
 *  applicable
 *   - Cancelling out any common divisors between `u` and `v`
 * 
 *   The result can be either a [[RationalFunction]], [[polynomial/Polynomial]] or
 *   a `(g/div u v)`. See [[make-reduced]] for the details.
 */
emmy.rational_function.__GT_reduced = (function emmy$rational_function$__GT_reduced(u,v){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v))){
emmy.util.arithmetic_ex((""+"Can't form rational function with zero denominator: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
} else {
}

var a = emmy.rational_function.check_same_arity(u,v);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(emmy.ratio.denominator));
var coefs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.coefficients(u),emmy.polynomial.coefficients(v));
var factor = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(emmy.generic.lcm),(1),coefs);
var factor__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),emmy.rational_function.coef_sgn(emmy.polynomial.leading_coefficient(v))))?factor:emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(factor));
var vec__38896 = (cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(factor__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(factor__$1,u),emmy.generic.mul.cljs$core$IFn$_invoke$arity$2(factor__$1,v)], null));
var u_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38896,(1),null);
var g = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_);
var vec__38899 = (cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(g))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u_SINGLEQUOTE_,v_SINGLEQUOTE_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.evenly_divide(u_SINGLEQUOTE_,g),emmy.polynomial.evenly_divide(v_SINGLEQUOTE_,g)], null));
var u_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38899,(0),null);
var v_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38899,(1),null);
return emmy.rational_function.make_reduced(a,u_SINGLEQUOTE__SINGLEQUOTE_,v_SINGLEQUOTE__SINGLEQUOTE_);
});
/**
 * Given a numerator `u` and denominator `v`, attempts to form
 *   a [[RationalFunction]] instance by
 * 
 *   - cancelling out any common factors between `u` and `v`
 *   - normalizing `u` and `v` such that `v` is always positive
 *   - multiplying `u` and `v` through by a commo factor, such that neither term
 *  contains any rational coefficients
 * 
 *   Returns a [[RationalFunction]] instance if either `u` or `v` remains
 *   a [[polynomial/Polynomial]] after this process; else, returns `(g/div u' v')`,
 *   where `u'` and `v'` are the reduced numerator and denominator.
 */
emmy.rational_function.make = (function emmy$rational_function$make(u,v){
if(((emmy.rational_function.coeff_QMARK_(u)) && (emmy.rational_function.coeff_QMARK_(v)))){
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(u,v);
} else {
return emmy.rational_function.__GT_reduced(u,v);
}
});
/**
 * Given two arguments `u` and `v`, as well as:
 * 
 *   - `poly-op` - a function of two numerators
 *   - `uv-op` - a function of four arguments, (`u-n`, `u-d`, `v-n`, `v-d` the
 *  numerator and denominator of `u` and `v` respectively)
 * 
 *   Returns the result of `(poly-op u-n v-n)` if `u-d` and `v-d` are
 *   both [[value/one?]], or `(uv-op u-n u-d v-n v-d)` otherwise.
 * 
 *   The result is reduced to a potentially-non-[[RationalFunction]] result
 *   using [[make-reduced]].
 */
emmy.rational_function.binary_combine = (function emmy$rational_function$binary_combine(u,v,poly_op,uv_op){
var a = emmy.rational_function.check_same_arity(u,v);
var u_n = emmy.ratio.numerator(u);
var u_d = emmy.ratio.denominator(u);
var v_n = emmy.ratio.numerator(v);
var v_d = emmy.ratio.denominator(v);
var vec__38904 = (cljs.core.truth_((function (){var and__5160__auto__ = emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(u_d);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(v_d);
} else {
return and__5160__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(poly_op.cljs$core$IFn$_invoke$arity$2 ? poly_op.cljs$core$IFn$_invoke$arity$2(u_n,v_n) : poly_op.call(null,u_n,v_n)),(1)], null):(uv_op.cljs$core$IFn$_invoke$arity$4 ? uv_op.cljs$core$IFn$_invoke$arity$4(u_n,u_d,v_n,v_d) : uv_op.call(null,u_n,u_d,v_n,v_d)));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38904,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38904,(1),null);
return emmy.rational_function.make_reduced(a,n,d);
});
/**
 * Returns the `[numerator, denominator]` pair resulting from rational function
 *   addition of `(/ u u')` and `(/ v v')`.
 * 
 *   If the denominators are equal, [[uv:+]] adds the numerators and divides out
 *   any factor common with the shared denominator.
 * 
 *   Else, if the denominators are relatively prime, [[uv:+]] multiplies each side
 *   by the other's denominator to create a single rational expression, then
 *   divides out any common factors before returning.
 * 
 *   In the final case, where the denominators are _not_ relatively prime, [[uv:+]]
 *   attempts to efficiently divide out the GCD of the denominators without
 *   creating large products.
 */
emmy.rational_function.uv_COLON__PLUS_ = (function emmy$rational_function$uv_COLON__PLUS_(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
var divide_through = (function emmy$rational_function$uv_COLON__PLUS__$_divide_through(n,d){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
var g = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(d,n);
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(g))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.polynomial.evenly_divide(n,g),emmy.polynomial.evenly_divide(d,g)], null);
}
}
});
if(cljs.core.truth_(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_))){
var n = emmy.polynomial.add(u,v);
return divide_through(n,u_SINGLEQUOTE_);
} else {
var g = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_);
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(g))){
return divide_through(emmy.polynomial.add(emmy.polynomial.mul(u,v_SINGLEQUOTE_),emmy.polynomial.mul(u_SINGLEQUOTE_,v)),emmy.polynomial.mul(u_SINGLEQUOTE_,v_SINGLEQUOTE_));
} else {
var u_SINGLEQUOTE__COLON_g = emmy.polynomial.evenly_divide(u_SINGLEQUOTE_,g);
var v_SINGLEQUOTE__COLON_g = emmy.polynomial.evenly_divide(v_SINGLEQUOTE_,g);
return divide_through(emmy.polynomial.add(emmy.polynomial.mul(u,v_SINGLEQUOTE__COLON_g),emmy.polynomial.mul(u_SINGLEQUOTE__COLON_g,v)),emmy.polynomial.mul(u_SINGLEQUOTE__COLON_g,v_SINGLEQUOTE_));
}
}
});
/**
 * Returns the `[numerator, denominator]` pair resulting from rational function
 *   difference of `(/ u u')` and `(/ v v')`.
 * 
 *   Similar to [[uv:+]]; inverts `v` before calling [[uv:+]] with the supplied arguments.
 */
emmy.rational_function.uv_COLON__ = (function emmy$rational_function$uv_COLON__(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
return emmy.rational_function.uv_COLON__PLUS_(u,u_SINGLEQUOTE_,emmy.polynomial.negate(v),v_SINGLEQUOTE_);
});
/**
 * Returns the `[numerator, denominator]` pair resulting from rational function
 *   multiplication of `(/ u u')` and `(/ v v')`.
 */
emmy.rational_function.uv_COLON__STAR_ = (function emmy$rational_function$uv_COLON__STAR_(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
if(cljs.core.truth_((function (){var or__5162__auto__ = emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(u);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(v);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
var d1 = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(u,v_SINGLEQUOTE_);
var d2 = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v);
var u_SINGLEQUOTE__SINGLEQUOTE_ = emmy.polynomial.mul(emmy.polynomial.evenly_divide(u,d1),emmy.polynomial.evenly_divide(v,d2));
var v_SINGLEQUOTE__SINGLEQUOTE_ = emmy.polynomial.mul(emmy.polynomial.evenly_divide(u_SINGLEQUOTE_,d2),emmy.polynomial.evenly_divide(v_SINGLEQUOTE_,d1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u_SINGLEQUOTE__SINGLEQUOTE_,v_SINGLEQUOTE__SINGLEQUOTE_], null);
}
});
/**
 * Returns the `[numerator, denominator]` pair that represents the greatest common
 *   divisor of `(/ u u')` and `(/ v v')`.
 */
emmy.rational_function.uv_COLON_gcd = (function emmy$rational_function$uv_COLON_gcd(u,u_SINGLEQUOTE_,v,v_SINGLEQUOTE_){
var d1 = emmy.generic.gcd.cljs$core$IFn$_invoke$arity$2(u,v);
var d2 = emmy.generic.lcm.cljs$core$IFn$_invoke$arity$2(u_SINGLEQUOTE_,v_SINGLEQUOTE_);
var result = emmy.rational_function.make(d1,d2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.ratio.numerator(result),emmy.ratio.denominator(result)], null);
});
/**
 * Returns the negation of rational function `r`, i.e., a [[RationalFunction]] with
 *   its numerator negated.
 * 
 *   Acts as [[generic/negate]] for non-[[RationalFunction]] inputs.
 */
emmy.rational_function.negate = (function emmy$rational_function$negate(r){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.negate(r);
} else {
return emmy.rational_function.__GT_RationalFunction(emmy.rational_function.bare_arity(r),emmy.polynomial.negate(emmy.rational_function.bare_u(r)),emmy.rational_function.bare_v(r),cljs.core.meta(r));
}
});
/**
 * If the numerator of `r` is negative, returns `(negate r)`, else acts as
 *   identity.
 */
emmy.rational_function.abs = (function emmy$rational_function$abs(r){
if(cljs.core.truth_(emmy.rational_function.negative_QMARK_(r))){
return emmy.rational_function.negate(r);
} else {
return r;
}
});
/**
 * Returns the sum of rational functions `r` and `s`, with appropriate handling
 *   of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of neither
 *   type on either side.
 */
emmy.rational_function.add = (function emmy$rational_function$add(r,s){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return s;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return r;
} else {
return emmy.rational_function.binary_combine(r,s,emmy.polynomial.add,emmy.rational_function.uv_COLON__PLUS_);

}
}
});
/**
 * Returns the difference of rational functions `r` and `s`, with appropriate
 *   handling of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of
 *   neither type on either side.
 */
emmy.rational_function.sub = (function emmy$rational_function$sub(r,s){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return emmy.rational_function.negate(s);
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return r;
} else {
return emmy.rational_function.binary_combine(r,s,emmy.polynomial.sub,emmy.rational_function.uv_COLON__);

}
}
});
/**
 * Returns the product of rational functions `r` and `s`, with appropriate
 *   handling of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of
 *   neither type on either side.
 */
emmy.rational_function.mul = (function emmy$rational_function$mul(r,s){
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return r;
} else {
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return s;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(r))){
return s;
} else {
if(cljs.core.truth_(emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(s))){
return r;
} else {
return emmy.rational_function.binary_combine(r,s,emmy.polynomial.mul,emmy.rational_function.uv_COLON__STAR_);

}
}
}
}
});
/**
 * Returns the square of rational function `r`. Equivalent to `(mul r r)`.
 */
emmy.rational_function.square = (function emmy$rational_function$square(r){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.square(r);
} else {
return emmy.rational_function.__GT_RationalFunction(emmy.rational_function.bare_arity(r),emmy.polynomial.square(emmy.rational_function.bare_u(r)),emmy.polynomial.square(emmy.rational_function.bare_v(r)),cljs.core.meta(r));
}
});
/**
 * Returns the cube of rational function `r`. Equivalent to `(mul r (mul r r))`.
 */
emmy.rational_function.cube = (function emmy$rational_function$cube(r){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.cube(r);
} else {
return emmy.rational_function.__GT_RationalFunction(emmy.rational_function.bare_arity(r),emmy.polynomial.cube(emmy.rational_function.bare_u(r)),emmy.polynomial.cube(emmy.rational_function.bare_v(r)),cljs.core.meta(r));
}
});
/**
 * Returns a rational function generated by raising the input rational function
 *   `r` to the (integer) power `n`.
 */
emmy.rational_function.expt = (function emmy$rational_function$expt(r,n){
if(emmy.value.native_integral_QMARK_(n)){
} else {
throw (new Error("Assert failed: (v/native-integral? n)"));
}

if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.expt(r,n);
} else {
var u = emmy.rational_function.bare_u(r);
var v = emmy.rational_function.bare_v(r);
var vec__38961 = (((n < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,u,(- n)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,n], null));
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38961,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38961,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38961,(2),null);
return emmy.rational_function.__GT_RationalFunction(emmy.rational_function.bare_arity(r),emmy.polynomial.expt(top,e),emmy.polynomial.expt(bottom,e),cljs.core.meta(r));
}
});
/**
 * Given some rational function `r`, returns the inverse of `r`, i.e., a rational
 *   function with numerator and denominator reversed. The returned rational
 *   function guarantees a positive denominator.
 * 
 *   Acts as [[generic/invert]] for non-[[RationalFunction]] inputs.
 */
emmy.rational_function.invert = (function emmy$rational_function$invert(r){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(r);
} else {
var u = emmy.rational_function.bare_u(r);
var v = emmy.rational_function.bare_v(r);
if(cljs.core.truth_(emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(u))){
return emmy.util.arithmetic_ex("Can't form rational function with zero denominator.");
} else {
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(u))){
return emmy.rational_function.__GT_RationalFunction(emmy.rational_function.bare_arity(r),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(v),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(u),cljs.core.meta(r));
} else {
return emmy.rational_function.__GT_RationalFunction(emmy.rational_function.bare_arity(r),v,u,cljs.core.meta(r));

}
}
}
});
/**
 * Returns the quotient of rational functions `r` and `s`, with appropriate
 *   handling of [[RationalFunction]], [[polynomial/Polynomial]] or coefficients of
 *   neither type on either side.
 */
emmy.rational_function.div = (function emmy$rational_function$div(r,s){
return emmy.rational_function.mul(r,emmy.rational_function.invert(s));
});
/**
 * Returns the greatest common divisor of rational functions `r` and `s`, with
 *   appropriate handling of [[RationalFunction]], [[polynomial/Polynomial]] or
 *   coefficients of neither type on either side. 
 */
emmy.rational_function.gcd = (function emmy$rational_function$gcd(r,s){
return emmy.rational_function.binary_combine(r,s,emmy.generic.gcd,emmy.rational_function.uv_COLON_gcd);
});
/**
 * Given some rational function `xs` and a sequence of arguments with length >= 0
 *   and < the [[arity]] of `r`, returns the result of evaluating the numerator and
 *   denominator using `xs` and re-forming a rational function with the results.
 * 
 *   Supplying fewer arguments than the arity will result in a partial evaluation.
 *   Supplying too many arguments will error.
 */
emmy.rational_function.evaluate = (function emmy$rational_function$evaluate(r,xs){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.evaluate(r,xs);
} else {
return emmy.generic.div.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.evaluate(emmy.rational_function.bare_u(r),xs),emmy.polynomial.evaluate(emmy.rational_function.bare_v(r),xs));
}
});
/**
 * Given some [[RationalFunction]] `r`, returns a new [[RationalFunction]]
 *   generated by substituting each indeterminate `x_i` for `f_i * x_i`, where
 *   `f_i` is a factor supplied in the `factors` sequence.
 * 
 *   Given a non-[[RationalFunction]], delegates to [[polynomial/arg-scale]].
 */
emmy.rational_function.arg_scale = (function emmy$rational_function$arg_scale(r,factors){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.arg_scale(r,factors);
} else {
return emmy.rational_function.div(emmy.polynomial.arg_scale(emmy.rational_function.bare_u(r),factors),emmy.polynomial.arg_scale(emmy.rational_function.bare_v(r),factors));
}
});
/**
 * Given some [[RationalFunction]] `r`, returns a new [[RationalFunction]]
 *   generated by substituting each indeterminate `x_i` for `s_i + x_i`, where
 *   `s_i` is a shift supplied in the `shifts` sequence.
 * 
 *   Given a non-[[RationalFunction]], delegates to [[polynomial/arg-shift]].
 */
emmy.rational_function.arg_shift = (function emmy$rational_function$arg_shift(r,shifts){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.arg_shift(r,shifts);
} else {
return emmy.rational_function.div(emmy.polynomial.arg_shift(emmy.rational_function.bare_u(r),shifts),emmy.polynomial.arg_shift(emmy.rational_function.bare_v(r),shifts));
}
});
/**
 * Given some [[RationalFunction]] or [[polynomial/Polynomial]] `r`, returns the
 *   partial derivative of `r` with respect to the `i`th indeterminate. Throws if
 *   `i` is an invalid indeterminate index for `r`.
 * 
 *   For non-polynomial or rational function inputs, returns `0`.
 */
emmy.rational_function.partial_derivative = (function emmy$rational_function$partial_derivative(r,i){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.partial_derivative(r,i);
} else {
var u = emmy.rational_function.bare_u(r);
var v = emmy.rational_function.bare_v(r);
return emmy.rational_function.div(emmy.polynomial.sub(emmy.polynomial.mul(emmy.polynomial.partial_derivative(u,i),v),emmy.polynomial.mul(u,emmy.polynomial.partial_derivative(v,i))),emmy.polynomial.square(v));
}
});
/**
 * Returns the sequence of partial derivatives
 *   of [[RationalFunction]] (or [[polynomial/Polynomial]]) `r` with respect to
 *   each indeterminate. The returned sequence has length equal to the [[arity]] of
 *   `r`.
 * 
 *   For non-polynomial or rational function inputs, returns an empty sequence.
 */
emmy.rational_function.partial_derivatives = (function emmy$rational_function$partial_derivatives(r){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.partial_derivatives(r);
} else {
var iter__5649__auto__ = (function emmy$rational_function$partial_derivatives_$_iter__38996(s__38997){
return (new cljs.core.LazySeq(null,(function (){
var s__38997__$1 = s__38997;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38997__$1);
if(temp__5825__auto__){
var s__38997__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38997__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__38997__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__38999 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__38998 = (0);
while(true){
if((i__38998 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__38998);
cljs.core.chunk_append(b__38999,emmy.rational_function.partial_derivative(r,i));

var G__39166 = (i__38998 + (1));
i__38998 = G__39166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38999),emmy$rational_function$partial_derivatives_$_iter__38996(cljs.core.chunk_rest(s__38997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38999),null);
}
} else {
var i = cljs.core.first(s__38997__$2);
return cljs.core.cons(emmy.rational_function.partial_derivative(r,i),emmy$rational_function$partial_derivatives_$_iter__38996(cljs.core.rest(s__38997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.bare_arity(r)));
}
});
/**
 * These operations are those allowed
 *   between [[RationalFunction]], [[polynomial/Polynomial]] and coefficient
 *   instances.
 */
emmy.rational_function.operator_table = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(emmy.polynomial.operator_table,new cljs.core.Symbol(null,"/","/",-1371932971,null),emmy.util.aggregate.group.cljs$core$IFn$_invoke$arity$5(emmy.generic.div,emmy.generic.mul,emmy.generic.invert,(1),emmy.generic.zero_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"invert","invert",-1100858266,null),emmy.generic.invert], 0));
/**
 * Set of all arithmetic functions allowed
 *   between [[RationalFunction]], [[polynomial/Polynomial]] and coefficient
 *   instances.
 */
emmy.rational_function.operators_known = emmy.util.keyset(emmy.rational_function.operator_table);
/**
 * Converts the supplied symbolic expression `expr` into Rational Function
 *   canonical form (i.e., a [[RationalFunction]] instance). `expr` should be a bare,
 *   unwrapped expression built out of Clojure data structures.
 * 
 *   Returns the result of calling continuation `cont` with
 *   the [[RationalFunction]] and the list of variables corresponding to each
 *   indeterminate in the [[RationalFunction]]. (`cont `defaults to `vector`).
 * 
 *   The second optional argument `v-compare` allows you to provide a Comparator
 *   between variables. Sorting indeterminates by `v-compare` will determine the
 *   order of the indeterminates in the generated [[RationalFunction]]. The list of
 *   variables passed to `cont` will be sorted using `v-compare`.
 * 
 *   Absorbing an expression with [[expression->]] and emitting it again
 *   with [[->expression]] will generate the canonical form of an expression, with
 *   respect to the operations in the [[operators-known]] set.
 * 
 *   This kind of simplification proceeds purely symbolically over the known
 *   Rational Function operations; other operations outside the arithmetic
 *   available should be factored out by an expression
 *   analyzer (see [[emmy.expression.analyze/make-analyzer]]) before
 *   calling [[expression->]].
 * 
 *   NOTE that `cont` might receive a scalar, fraction or [[polynomial/Polynomial]]
 *   instance; both are valid 'rational functions'. The latter as a rational
 *   function with a denominator equal to `1`, and the former 2 result from
 *   non-polynomial numerator and denominator.
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[emmy.expression.analyze/make-analyzer]].
 */
emmy.rational_function.expression__GT_ = (function emmy$rational_function$expression__GT_(var_args){
var G__39008 = arguments.length;
switch (G__39008) {
case 1:
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cljs.core.vector,cljs.core.compare);
}));

(emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$2 = (function (expr,cont){
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,cljs.core.compare);
}));

(emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3 = (function (expr,cont,v_compare){
var vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(emmy.expression.variables_in(expr),emmy.rational_function.operators_known);
var arity = cljs.core.count(vars);
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(v_compare,vars);
var sym__GT_var = cljs.core.zipmap(sorted,emmy.polynomial.new_variables(arity));
var rf = emmy.expression.evaluate(expr,sym__GT_var,emmy.rational_function.operator_table);
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(rf,sorted) : cont.call(null,rf,sorted));
}));

(emmy.rational_function.expression__GT_.cljs$lang$maxFixedArity = 3);

/**
 * Given a sequence of points of the form `[x, f(x)]`, returns a rational function
 *   that passes through each input point.
 */
emmy.rational_function.from_points = (function emmy$rational_function$from_points(xs){
return emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.interpolate.bulirsch_stoer_recursive(xs,emmy.polynomial.identity.cljs$core$IFn$_invoke$arity$0()));
});
/**
 * Accepts a [[RationalFunction]] `r` and a sequence of symbols for each indeterminate,
 *   and emits the canonical form of the symbolic expression that
 *   represents [[RationalFunction]] `r`.
 * 
 *   NOTE: this is the output stage of Rational Function canonical form
 *   simplification. The input stage is handled by [[expression->]].
 * 
 *   NOTE See [[analyzer]] for an instance usable
 *   by [[emmy.expression.analyze/make-analyzer]].
 */
emmy.rational_function.__GT_expression = (function emmy$rational_function$__GT_expression(r,vars){
if((!(emmy.rational_function.rational_function_QMARK_(r)))){
return emmy.polynomial.__GT_expression(r,vars);
} else {
var G__39013 = emmy.polynomial.__GT_expression(emmy.rational_function.bare_u(r),vars);
var G__39014 = emmy.polynomial.__GT_expression(emmy.rational_function.bare_v(r),vars);
var fexpr__39012 = emmy.numsymb.symbolic_operator(new cljs.core.Symbol(null,"/","/",-1371932971,null));
return (fexpr__39012.cljs$core$IFn$_invoke$arity$2 ? fexpr__39012.cljs$core$IFn$_invoke$arity$2(G__39013,G__39014) : fexpr__39012.call(null,G__39013,G__39014));
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {emmy.expression.analyze.ICanonicalize}
 * @implements {cljs.core.IWithMeta}
*/
emmy.rational_function.t_emmy$rational_function39015 = (function (meta39016){
this.meta39016 = meta39016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.rational_function.t_emmy$rational_function39015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39017,meta39016__$1){
var self__ = this;
var _39017__$1 = this;
return (new emmy.rational_function.t_emmy$rational_function39015(meta39016__$1));
}));

(emmy.rational_function.t_emmy$rational_function39015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39017){
var self__ = this;
var _39017__$1 = this;
return self__.meta39016;
}));

(emmy.rational_function.t_emmy$rational_function39015.prototype.emmy$expression$analyze$ICanonicalize$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.rational_function.t_emmy$rational_function39015.prototype.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$3 = (function (_,expr,cont){
var self__ = this;
var ___$1 = this;
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$2(expr,cont);
}));

(emmy.rational_function.t_emmy$rational_function39015.prototype.emmy$expression$analyze$ICanonicalize$expression__GT_$arity$4 = (function (_,expr,cont,v_compare){
var self__ = this;
var ___$1 = this;
return emmy.rational_function.expression__GT_.cljs$core$IFn$_invoke$arity$3(expr,cont,v_compare);
}));

(emmy.rational_function.t_emmy$rational_function39015.prototype.emmy$expression$analyze$ICanonicalize$__GT_expression$arity$3 = (function (_,rf,vars){
var self__ = this;
var ___$1 = this;
return emmy.rational_function.__GT_expression(rf,vars);
}));

(emmy.rational_function.t_emmy$rational_function39015.prototype.emmy$expression$analyze$ICanonicalize$known_operation_QMARK_$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return cljs.core.contains_QMARK_(emmy.rational_function.operators_known,o);
}));

(emmy.rational_function.t_emmy$rational_function39015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39016","meta39016",-1705726790,null)], null);
}));

(emmy.rational_function.t_emmy$rational_function39015.cljs$lang$type = true);

(emmy.rational_function.t_emmy$rational_function39015.cljs$lang$ctorStr = "emmy.rational-function/t_emmy$rational_function39015");

(emmy.rational_function.t_emmy$rational_function39015.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.rational-function/t_emmy$rational_function39015");
}));

/**
 * Positional factory function for emmy.rational-function/t_emmy$rational_function39015.
 */
emmy.rational_function.__GT_t_emmy$rational_function39015 = (function emmy$rational_function$__GT_t_emmy$rational_function39015(meta39016){
return (new emmy.rational_function.t_emmy$rational_function39015(meta39016));
});


/**
 * Singleton [[a/ICanonicalize]] instance.
 */
emmy.rational_function.analyzer = (new emmy.rational_function.t_emmy$rational_function39015(cljs.core.PersistentArrayMap.EMPTY));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (p){
var a = emmy.polynomial.bare_arity(p);
if(cljs.core.truth_(emmy.generic.negative_QMARK_.cljs$core$IFn$_invoke$arity$1(p))){
return emmy.rational_function.__GT_RationalFunction(a,(-1),emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(p),cljs.core.meta(p));
} else {
return emmy.rational_function.__GT_RationalFunction(a,(1),p,cljs.core.meta(p));
}
}));
emmy.polynomial.defbinary(emmy.generic.div,emmy.rational_function.make);
emmy.polynomial.defbinary(emmy.generic.solve_linear_right,emmy.rational_function.make);
emmy.polynomial.defbinary(emmy.generic.solve_linear,(function (l,r){
return emmy.rational_function.div(r,l);
}));
emmy.generic.exact_divide.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (c,p){
var vec__39026 = emmy.polynomial.bare_terms(p);
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39026,(0),null);
var terms = vec__39026;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(terms),(1))) && (emmy.polynomial.impl.constant_term_QMARK_(term)))){
return emmy.generic.exact_divide.cljs$core$IFn$_invoke$arity$2(c,emmy.polynomial.impl.coefficient(term));
} else {
return emmy.rational_function.make(c,p);
}
}));
/**
 * Installs the supplied function `f` into `generic-op` such that it will act
 *   between [[RationalFunction]] instances, or allow [[polynomial/Polynomial]]
 *   instances or non-[[polynomial/Polynomial]] coefficients on either side.
 */
emmy.rational_function.defbinary = (function emmy$rational_function$defbinary(generic_op,f){
var pairs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864),new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864)], null)], null);
var seq__39033 = cljs.core.seq(pairs);
var chunk__39034 = null;
var count__39035 = (0);
var i__39036 = (0);
while(true){
if((i__39036 < count__39035)){
var vec__39050 = chunk__39034.cljs$core$IIndexed$_nth$arity$2(null,i__39036);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39050,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__39033,chunk__39034,count__39035,i__39036,vec__39050,l,r,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__39033,chunk__39034,count__39035,i__39036,vec__39050,l,r,pairs))
);


var G__39173 = seq__39033;
var G__39174 = chunk__39034;
var G__39175 = count__39035;
var G__39176 = (i__39036 + (1));
seq__39033 = G__39173;
chunk__39034 = G__39174;
count__39035 = G__39175;
i__39036 = G__39176;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__39033);
if(temp__5825__auto__){
var seq__39033__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39033__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__39033__$1);
var G__39177 = cljs.core.chunk_rest(seq__39033__$1);
var G__39178 = c__5694__auto__;
var G__39179 = cljs.core.count(c__5694__auto__);
var G__39180 = (0);
seq__39033 = G__39177;
chunk__39034 = G__39178;
count__39035 = G__39179;
i__39036 = G__39180;
continue;
} else {
var vec__39058 = cljs.core.first(seq__39033__$1);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39058,(1),null);
generic_op.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l,r], null),((function (seq__39033,chunk__39034,count__39035,i__39036,vec__39058,l,r,seq__39033__$1,temp__5825__auto__,pairs){
return (function (r__$1,s){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r__$1,s) : f.call(null,r__$1,s));
});})(seq__39033,chunk__39034,count__39035,i__39036,vec__39058,l,r,seq__39033__$1,temp__5825__auto__,pairs))
);


var G__39181 = cljs.core.next(seq__39033__$1);
var G__39182 = null;
var G__39183 = (0);
var G__39184 = (0);
seq__39033 = G__39181;
chunk__39034 = G__39182;
count__39035 = G__39183;
i__39036 = G__39184;
continue;
}
} else {
return null;
}
}
break;
}
});
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (l,r){
return emmy.rational_function.eq(l,r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324),new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (l,r){
return emmy.rational_function.eq(r,l);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864),new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (l,r){
return emmy.rational_function.eq(r,l);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.polynomial","polynomial","emmy.polynomial/polynomial",-18826324)], null),(function (l,r){
return emmy.rational_function.eq(l,r);
}));
emmy.value._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.polynomial","coeff","emmy.polynomial/coeff",972797864)], null),(function (l,r){
return emmy.rational_function.eq(l,r);
}));
emmy.rational_function.defbinary(emmy.generic.add,emmy.rational_function.add);
emmy.rational_function.defbinary(emmy.generic.sub,emmy.rational_function.sub);
emmy.rational_function.defbinary(emmy.generic.mul,emmy.rational_function.mul);
emmy.rational_function.defbinary(emmy.generic.div,emmy.rational_function.div);
emmy.rational_function.defbinary(emmy.generic.exact_divide,emmy.rational_function.div);
emmy.rational_function.defbinary(emmy.generic.solve_linear_right,emmy.rational_function.div);
emmy.rational_function.defbinary(emmy.generic.solve_linear,(function (l,r){
return emmy.rational_function.div(r,l);
}));
emmy.rational_function.defbinary(emmy.generic.gcd,emmy.rational_function.gcd);
emmy.generic.zero_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(a.u);
}));
emmy.generic.one_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
var and__5160__auto__ = emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.u);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.v);
} else {
return and__5160__auto__;
}
}));
emmy.generic.identity_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
var and__5160__auto__ = emmy.generic.identity_QMARK_.cljs$core$IFn$_invoke$arity$1(a.u);
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.one_QMARK_.cljs$core$IFn$_invoke$arity$1(a.v);
} else {
return and__5160__auto__;
}
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a.u);
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.u);
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return (new emmy.rational_function.RationalFunction(a.arity,emmy.generic.identity_like.cljs$core$IFn$_invoke$arity$1(a.u),emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.v),a.m));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"/","/",-1371932971,null),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.u),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.v),null,(1),null)),(2),null)),(3),null));
}));
emmy.generic.negative_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.rational_function.negative_QMARK_(a);
}));
emmy.generic.abs.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.rational_function.abs(a);
}));
emmy.generic.negate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.rational_function.negate(a);
}));
emmy.generic.invert.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.rational_function.invert(a);
}));
emmy.generic.square.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.rational_function.square(a);
}));
emmy.generic.cube.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (a){
return emmy.rational_function.cube(a);
}));
emmy.generic.expt.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.value","integral","emmy.value/integral",-970970786)], null),(function (b,x){
return emmy.rational_function.expt(b,x);
}));
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607)], null),(function (r){
return cljs.core.with_meta(emmy.rational_function.make(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.bare_u(r)),emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.rational_function.bare_v(r))),cljs.core.meta(r));
}));
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.rational-function","rational-function","emmy.rational-function/rational-function",282911607),new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),(function (r,selectors){
if(cljs.core.empty_QMARK_(selectors)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),emmy.rational_function.bare_arity(r))){
return emmy.rational_function.partial_derivative(r,(0));
} else {
return emmy.structure.down_STAR_(emmy.rational_function.partial_derivatives(r));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selectors))){
return emmy.rational_function.partial_derivative(r,cljs.core.first(selectors));
} else {
return emmy.util.illegal((""+"Invalid selector! Only 1 deep supported."));

}
}
}));

//# sourceMappingURL=emmy.rational_function.js.map
