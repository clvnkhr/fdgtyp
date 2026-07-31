import "./cljs_env.js";
import "./cljs.core.js";
import "./emmy.abstract.number.js";
import "./emmy.autodiff.js";
import "./emmy.dual.js";
import "./emmy.function.js";
import "./emmy.generic.js";
import "./emmy.matrix.js";
import "./emmy.numsymb.js";
import "./emmy.polynomial.js";
import "./emmy.structure.js";
import "./emmy.tape.js";
import "./emmy.util.js";
import "./emmy.value.js";
goog.provide('emmy.abstract$.function$');

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117),new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744));
/**
 * Convert a SICM-style set (e.g., Real or (UP Real Real)) to
 *   an exemplar (an instance of the relevant type).
 */
emmy.abstract$.function$.sicm_set__GT_exemplar = (function emmy$abstract$function$sicm_set__GT_exemplar(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"Real","Real",374292741,null))){
return (0);
} else {
if(cljs.core.sequential_QMARK_(s)){
var vec__71619 = s;
var seq__71620 = cljs.core.seq(vec__71619);
var first__71621 = cljs.core.first(seq__71620);
var seq__71620__$1 = cljs.core.next(seq__71620);
var constructor$ = first__71621;
var args = seq__71620__$1;
var G__71622 = constructor$;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"X","X",-948439456,null),G__71622)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.sicm_set__GT_exemplar,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"UP","UP",-1898089532,null),G__71622)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.up,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.sicm_set__GT_exemplar,args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"DOWN","DOWN",-1166138822,null),G__71622)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.down,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.sicm_set__GT_exemplar,args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),G__71622)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.up,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__71625 = cljs.core.first(args);
return (emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__71625) : emmy.abstract$.function$.sicm_set__GT_exemplar.call(null,G__71625));
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"DOWN*","DOWN*",1300864675,null),G__71622)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.down,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__71626 = cljs.core.first(args);
return (emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__71626) : emmy.abstract$.function$.sicm_set__GT_exemplar.call(null,G__71626));
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"X*","X*",1047022815,null),G__71622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__71627 = cljs.core.first(args);
return (emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__71627) : emmy.abstract$.function$.sicm_set__GT_exemplar.call(null,G__71627));
})()));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71622))));

}
}
}
}
}
}
} else {
return null;
}
}
});
/**
 * Convert a SICM-style literal function signature (e.g.,
 *   '(-> Real (X Real Real)) ) to our 'exemplar' format.
 */
emmy.abstract$.function$.sicm_signature__GT_domain_range = (function emmy$abstract$function$sicm_signature__GT_domain_range(p__71629){
var vec__71630 = p__71629;
var arrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71630,(0),null);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71630,(1),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71630,(2),null);
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),arrow);
if(and__5160__auto__){
var and__5160__auto____$1 = domain;
if(cljs.core.truth_(and__5160__auto____$1)){
return range;
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
})())){
} else {
emmy.util.illegal((""+"A SICM signature is of the form '(-> domain range), got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arrow)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(range)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var d = emmy.abstract$.function$.sicm_set__GT_exemplar(domain);
if(cljs.core.vector_QMARK_(d)){
return d;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null);
}
})(),emmy.abstract$.function$.sicm_set__GT_exemplar(range)], null);
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {emmy.value.IKind}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {emmy.function$.IArity}
*/
emmy.abstract$.function$.Function = (function (f_name,arity,domain,range){
this.f_name = f_name;
this.arity = arity;
this.domain = domain;
this.range = range;
this.cljs$lang$protocol_mask$partition0$ = 2149580801;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(emmy.abstract$.function$.Function.prototype.emmy$value$IKind$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.abstract$.function$.Function.prototype.emmy$value$IKind$kind$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117);
}));

(emmy.abstract$.function$.Function.prototype.emmy$function$IArity$ = cljs.core.PROTOCOL_SENTINEL);

(emmy.abstract$.function$.Function.prototype.emmy$function$IArity$arity$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.arity;
}));

(emmy.abstract$.function$.Function.prototype.toString = (function (){
var self__ = this;
var _ = this;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.f_name));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (a,b){
var self__ = this;
var a__$1 = this;
return (emmy.abstract$.function$.f_COLON__EQ_.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.f_COLON__EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b) : emmy.abstract$.function$.f_COLON__EQ_.call(null,a__$1,b));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_){
var self__ = this;
var x__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__$1.toString()], 0));
}));

(emmy.abstract$.function$.Function.prototype.call = (function (unused__2830__auto__){
var self__ = this;
var self__ = this;
var G__71670 = (arguments.length - (1));
switch (G__71670) {
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

(emmy.abstract$.function$.Function.prototype.apply = (function (self__,args71638){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args71638)));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__71688 = this$;
var G__71689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71688,G__71689) : emmy.abstract$.function$.literal_apply.call(null,G__71688,G__71689));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__71690 = this$;
var G__71691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71690,G__71691) : emmy.abstract$.function$.literal_apply.call(null,G__71690,G__71691));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__71693 = this$;
var G__71694 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71693,G__71694) : emmy.abstract$.function$.literal_apply.call(null,G__71693,G__71694));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__71695 = this$;
var G__71696 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71695,G__71696) : emmy.abstract$.function$.literal_apply.call(null,G__71695,G__71696));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__71702 = this$;
var G__71703 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71702,G__71703) : emmy.abstract$.function$.literal_apply.call(null,G__71702,G__71703));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__71705 = this$;
var G__71706 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71705,G__71706) : emmy.abstract$.function$.literal_apply.call(null,G__71705,G__71706));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__71708 = this$;
var G__71709 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71708,G__71709) : emmy.abstract$.function$.literal_apply.call(null,G__71708,G__71709));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__71710 = this$;
var G__71711 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71710,G__71711) : emmy.abstract$.function$.literal_apply.call(null,G__71710,G__71711));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__71712 = this$;
var G__71713 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71712,G__71713) : emmy.abstract$.function$.literal_apply.call(null,G__71712,G__71713));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__71717 = this$;
var G__71718 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71717,G__71718) : emmy.abstract$.function$.literal_apply.call(null,G__71717,G__71718));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__71720 = this$;
var G__71721 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71720,G__71721) : emmy.abstract$.function$.literal_apply.call(null,G__71720,G__71721));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__71725 = this$;
var G__71726 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71725,G__71726) : emmy.abstract$.function$.literal_apply.call(null,G__71725,G__71726));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var G__71727 = this$;
var G__71728 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71727,G__71728) : emmy.abstract$.function$.literal_apply.call(null,G__71727,G__71728));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var G__71729 = this$;
var G__71730 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71729,G__71730) : emmy.abstract$.function$.literal_apply.call(null,G__71729,G__71730));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var G__71732 = this$;
var G__71733 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71732,G__71733) : emmy.abstract$.function$.literal_apply.call(null,G__71732,G__71733));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var G__71734 = this$;
var G__71735 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71734,G__71735) : emmy.abstract$.function$.literal_apply.call(null,G__71734,G__71735));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var G__71738 = this$;
var G__71739 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71738,G__71739) : emmy.abstract$.function$.literal_apply.call(null,G__71738,G__71739));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__71740 = this$;
var G__71741 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71740,G__71741) : emmy.abstract$.function$.literal_apply.call(null,G__71740,G__71741));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__71746 = this$;
var G__71747 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71746,G__71747) : emmy.abstract$.function$.literal_apply.call(null,G__71746,G__71747));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__71748 = this$;
var G__71749 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71748,G__71749) : emmy.abstract$.function$.literal_apply.call(null,G__71748,G__71749));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__71751 = this$;
var G__71752 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], null),rest);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__71751,G__71752) : emmy.abstract$.function$.literal_apply.call(null,G__71751,G__71752));
}));

(emmy.abstract$.function$.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f-name","f-name",-825059691,null),new cljs.core.Symbol(null,"arity","arity",-168024608,null),new cljs.core.Symbol(null,"domain","domain",-807220832,null),new cljs.core.Symbol(null,"range","range",-1014743483,null)], null);
}));

(emmy.abstract$.function$.Function.cljs$lang$type = true);

(emmy.abstract$.function$.Function.cljs$lang$ctorStr = "emmy.abstract.function/Function");

(emmy.abstract$.function$.Function.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"emmy.abstract.function/Function");
}));

/**
 * Positional factory function for emmy.abstract.function/Function.
 */
emmy.abstract$.function$.__GT_Function = (function emmy$abstract$function$__GT_Function(f_name,arity,domain,range){
return (new emmy.abstract$.function$.Function(f_name,arity,domain,range));
});

cljs.core.derive.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.Function,new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117));
/**
 * Returns true if the supplied object is an instance of [[Function]], false
 *   otherwise.
 */
emmy.abstract$.function$.literal_function_QMARK_ = (function emmy$abstract$function$literal_function_QMARK_(f){
return (f instanceof emmy.abstract$.function$.Function);
});
/**
 * Returns the `-name` field of the supplied [[Function]] object. Errors if any
 *   other type is supplied.
 */
emmy.abstract$.function$.name = (function emmy$abstract$function$name(f){
if(emmy.abstract$.function$.literal_function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (literal-function? f)"));
}

return f.f_name;
});
/**
 * Returns the `-domain` field of the supplied [[Function]] object. Errors if any
 *   other type is supplied.
 */
emmy.abstract$.function$.domain_types = (function emmy$abstract$function$domain_types(f){
if(emmy.abstract$.function$.literal_function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (literal-function? f)"));
}

return f.domain;
});
/**
 * Returns the `-range` field of the supplied [[Function]] object. Errors if any
 *   other type is supplied.
 */
emmy.abstract$.function$.range_type = (function emmy$abstract$function$range_type(f){
if(emmy.abstract$.function$.literal_function_QMARK_(f)){
} else {
throw (new Error("Assert failed: (literal-function? f)"));
}

return f.range;
});
/**
 * Returns true if the function `a` equals `b`, false otherwise.
 */
emmy.abstract$.function$.f_COLON__EQ_ = (function emmy$abstract$function$f_COLON__EQ_(a,b){
return ((emmy.abstract$.function$.literal_function_QMARK_(b)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.name(a),emmy.abstract$.function$.name(b))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.domain_types(a),emmy.abstract$.function$.domain_types(b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.range_type(a),emmy.abstract$.function$.range_type(b))))))));
});
emmy.abstract$.function$.literal_function = (function emmy$abstract$function$literal_function(var_args){
var G__71760 = arguments.length;
switch (G__71760) {
case 1:
return emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.abstract$.function$.__GT_Function(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),(0));
}));

(emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$2 = (function (f,signature){
var vec__71761 = emmy.abstract$.function$.sicm_signature__GT_domain_range(signature);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71761,(1),null);
return emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(f,domain,range);
}));

(emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3 = (function (f,domain,range){
if(typeof range === 'number'){
var arity = ((cljs.core.vector_QMARK_(domain))?cljs.core.count(domain):(1));
return emmy.abstract$.function$.__GT_Function(f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),arity], null),((cljs.core.vector_QMARK_(domain))?domain:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [domain], null)),range);
} else {
if(emmy.structure.structure_QMARK_(range)){
var n = cljs.core.count(range);
var orientation = emmy.structure.orientation(range);
var template = emmy.structure.literal(f,n,orientation);
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__71757_SHARP_,p2__71758_SHARP_){
return emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(p1__71757_SHARP_,domain,p2__71758_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([template,range], 0));
} else {
return emmy.util.illegal((""+"WTF range"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(range)));

}
}
}));

(emmy.abstract$.function$.literal_function.cljs$lang$maxFixedArity = 3);

emmy.abstract$.function$.binding_pairs = (function emmy$abstract$function$binding_pairs(litfns){
var extract_sym = (function emmy$abstract$function$binding_pairs_$_extract_sym(entry){
if((entry instanceof cljs.core.Symbol)){
return entry;
} else {
return cljs.core.first(entry);
}
});
var entry__GT_fn = (function emmy$abstract$function$binding_pairs_$_entry__GT_fn(entry){
if((entry instanceof cljs.core.Symbol)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","literal-function","emmy.abstract.function/literal-function",869741704,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,entry,null,(1),null))))),null,(1),null)))));
} else {
if(((cljs.core.sequential_QMARK_(entry)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(entry),(3))))){
var vec__71777 = entry;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71777,(0),null);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71777,(1),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71777,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("emmy.abstract.function","literal-function","emmy.abstract.function/literal-function",869741704,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,domain,null,(1),null)),(new cljs.core.List(null,range,null,(1),null))], 0))));
} else {
return emmy.util.illegal((""+"unknown literal function type"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry)));

}
}
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (entry){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [extract_sym(entry),entry__GT_fn(entry)], null);
}),litfns);
});
emmy.abstract$.function$.with_literal_functions = (function emmy$abstract$function$with_literal_functions(var_args){
var args__5903__auto__ = [];
var len__5897__auto___71881 = arguments.length;
var i__5898__auto___71882 = (0);
while(true){
if((i__5898__auto___71882 < len__5897__auto___71881)){
args__5903__auto__.push((arguments[i__5898__auto___71882]));

var G__71884 = (i__5898__auto___71882 + (1));
i__5898__auto___71882 = G__71884;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return emmy.abstract$.function$.with_literal_functions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(emmy.abstract$.function$.with_literal_functions.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,litfns,body){
var _AMPERSAND_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"sci?","sci?",2029704845),true);
var pairs = emmy.abstract$.function$.binding_pairs(litfns);
var bindings = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,pairs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(emmy.abstract$.function$.with_literal_functions.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(emmy.abstract$.function$.with_literal_functions.cljs$lang$applyTo = (function (seq71780){
var G__71781 = cljs.core.first(seq71780);
var seq71780__$1 = cljs.core.next(seq71780);
var G__71782 = cljs.core.first(seq71780__$1);
var seq71780__$2 = cljs.core.next(seq71780__$1);
var G__71783 = cljs.core.first(seq71780__$2);
var seq71780__$3 = cljs.core.next(seq71780__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71781,G__71782,G__71783,seq71780__$3);
}));

emmy.abstract$.function$.literal_partial = (function emmy$abstract$function$literal_partial(f,path){
var fexp = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.function$.arity(f),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(path),(0)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(path),(1)))?emmy.numsymb.derivative(emmy.abstract$.function$.name(f)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),cljs.core.next(path)))),null,(1),null)),(new cljs.core.List(null,emmy.abstract$.function$.name(f),null,(1),null)))))):emmy.util.illegal("wrong indices")):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),path))),null,(1),null)),(new cljs.core.List(null,emmy.abstract$.function$.name(f),null,(1),null))))));
return emmy.abstract$.function$.__GT_Function(fexp,emmy.function$.arity(f),emmy.abstract$.function$.domain_types(f),emmy.abstract$.function$.range_type(f));
});
/**
 * Takes
 * 
 *  - a literal function `f`
 *  - a structure `primal-s` of the primal components of the args to `f` (with
 *    respect to `tag`)
 *  - the `tag` of the innermost active derivative call
 * 
 *   And returns a folding function (designed for use
 *   with [[emmy.structure/fold-chain]]) that
 * 
 *   generates a new [[emmy.dual/Dual]] by applying the chain rule and
 *   summing the partial derivatives for each perturbed argument in the input
 *   structure.
 */
emmy.abstract$.function$.forward_mode_fold = (function emmy$abstract$function$forward_mode_fold(f,primal_s,tag){
return (function() {
var G__71898 = null;
var G__71898__0 = (function (){
return (0);
});
var G__71898__1 = (function (tangent){
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,primal_s),tangent,tag);
});
var G__71898__2 = (function (tangent,p__71791){
var vec__71792 = p__71791;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71792,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71792,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71792,(2),null);
var dx = emmy.dual.tangent.cljs$core$IFn$_invoke$arity$2(x,tag);
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(dx))){
return tangent;
} else {
var partial = emmy.abstract$.function$.literal_partial(f,path);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(tangent,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(partial,primal_s) : emmy.abstract$.function$.literal_apply.call(null,partial,primal_s)),dx));
}
});
G__71898 = function(tangent,p__71791){
switch(arguments.length){
case 0:
return G__71898__0.call(this);
case 1:
return G__71898__1.call(this,tangent);
case 2:
return G__71898__2.call(this,tangent,p__71791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71898.cljs$core$IFn$_invoke$arity$0 = G__71898__0;
G__71898.cljs$core$IFn$_invoke$arity$1 = G__71898__1;
G__71898.cljs$core$IFn$_invoke$arity$2 = G__71898__2;
return G__71898;
})()
});
/**
 * Takes
 * 
 *  - a literal function `f`
 *  - a structure `primal-s` of the primal components of the args to `f` (with
 *    respect to `tag`)
 *  - the `tag` of the innermost active derivative call
 * 
 *   And returns a folding function (designed for use
 *   with [[emmy.structure/fold-chain]]) that assembles all partial derivatives of
 *   `f` into a new [[emmy.tape/TapeCell]].
 */
emmy.abstract$.function$.reverse_mode_fold = (function emmy$abstract$function$reverse_mode_fold(f,primal_s,tag){
return (function() {
var G__71899 = null;
var G__71899__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__71899__1 = (function (partials){
return emmy.tape.make.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,primal_s),partials);
});
var G__71899__2 = (function (partials,p__71795){
var vec__71796 = p__71795;
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71796,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71796,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71796,(2),null);
if(((emmy.tape.tape_QMARK_(entry)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,emmy.tape.tape_tag(entry))))){
var partial = emmy.abstract$.function$.literal_partial(f,path);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entry,(emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(partial,primal_s) : emmy.abstract$.function$.literal_apply.call(null,partial,primal_s))], null));
} else {
return partials;
}
});
G__71899 = function(partials,p__71795){
switch(arguments.length){
case 0:
return G__71899__0.call(this);
case 1:
return G__71899__1.call(this,partials);
case 2:
return G__71899__2.call(this,partials,p__71795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71899.cljs$core$IFn$_invoke$arity$0 = G__71899__0;
G__71899.cljs$core$IFn$_invoke$arity$1 = G__71899__1;
G__71899.cljs$core$IFn$_invoke$arity$2 = G__71899__2;
return G__71899;
})()
});
/**
 * Takes
 * 
 *  - a literal function `f`
 *  - a structure `s` of arguments
 *  - the `tag` of the innermost active derivative call
 *  - an instance of a perturbation `dx` associated with `tag`
 * 
 *   and generates the proper return value for `((D f) xs)`.
 * 
 *   In forward-mode AD this is a new [[emmy.dual/Dual]] generated by
 *   applying the chain rule and summing the partial derivatives for each perturbed
 *   argument in the input structure.
 * 
 *   In reverse-mode, this is a new [[emmy.tape/TapeCell]] containing a sequence of
 *   pairs of each input paired with the partial derivative of `f` with respect to
 *   that input.
 */
emmy.abstract$.function$.literal_derivative = (function emmy$abstract$function$literal_derivative(f,s,tag,dx){
var fold_fn = ((emmy.tape.tape_QMARK_(dx))?emmy.abstract$.function$.reverse_mode_fold:((emmy.dual.dual_QMARK_(dx))?emmy.abstract$.function$.forward_mode_fold:emmy.util.illegal("No tape or differential inputs.")
));
var primal_s = emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (x){
return emmy.autodiff.primal_of.cljs$core$IFn$_invoke$arity$2(x,tag);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
return emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$2((fold_fn.cljs$core$IFn$_invoke$arity$3 ? fold_fn.cljs$core$IFn$_invoke$arity$3(f,primal_s,tag) : fold_fn.call(null,f,primal_s,tag)),s);
});
/**
 * Check that the argument provided at index i has the same type as
 *   the exemplar expected.
 */
emmy.abstract$.function$.check_argument_type = (function emmy$abstract$function$check_argument_type(f,provided,expected,indexes){
if(typeof expected === 'number'){
if(emmy.value.scalar_QMARK_(provided)){
return null;
} else {
return emmy.util.illegal((""+"expected numerical quantity in argument "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(indexes)+" of function call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(provided)));
}
} else {
if(emmy.structure.structure_QMARK_(expected)){
if(((((emmy.structure.structure_QMARK_(provided)) || (cljs.core.sequential_QMARK_(provided)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.structure.orientation(provided),emmy.structure.orientation(expected))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(provided),cljs.core.count(expected))))))){
} else {
emmy.util.illegal((""+"expected structure matching "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(provided)));
}

var seq__71806 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.list,provided,expected,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__71807 = null;
var count__71808 = (0);
var i__71809 = (0);
while(true){
if((i__71809 < count__71808)){
var vec__71846 = chunk__71807.cljs$core$IIndexed$_nth$arity$2(null,i__71809);
var provided__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71846,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71846,(1),null);
var sub_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71846,(2),null);
var G__71849_71910 = f;
var G__71850_71911 = provided__$1;
var G__71851_71912 = expected__$1;
var G__71852_71913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexes,sub_index);
(emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4 ? emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4(G__71849_71910,G__71850_71911,G__71851_71912,G__71852_71913) : emmy.abstract$.function$.check_argument_type.call(null,G__71849_71910,G__71850_71911,G__71851_71912,G__71852_71913));


var G__71914 = seq__71806;
var G__71915 = chunk__71807;
var G__71916 = count__71808;
var G__71917 = (i__71809 + (1));
seq__71806 = G__71914;
chunk__71807 = G__71915;
count__71808 = G__71916;
i__71809 = G__71917;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__71806);
if(temp__5825__auto__){
var seq__71806__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71806__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__71806__$1);
var G__71919 = cljs.core.chunk_rest(seq__71806__$1);
var G__71920 = c__5694__auto__;
var G__71921 = cljs.core.count(c__5694__auto__);
var G__71922 = (0);
seq__71806 = G__71919;
chunk__71807 = G__71920;
count__71808 = G__71921;
i__71809 = G__71922;
continue;
} else {
var vec__71853 = cljs.core.first(seq__71806__$1);
var provided__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(1),null);
var sub_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71853,(2),null);
var G__71856_71923 = f;
var G__71857_71924 = provided__$1;
var G__71858_71925 = expected__$1;
var G__71859_71926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexes,sub_index);
(emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4 ? emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4(G__71856_71923,G__71857_71924,G__71858_71925,G__71859_71926) : emmy.abstract$.function$.check_argument_type.call(null,G__71856_71923,G__71857_71924,G__71858_71925,G__71859_71926));


var G__71927 = cljs.core.next(seq__71806__$1);
var G__71928 = null;
var G__71929 = (0);
var G__71930 = (0);
seq__71806 = G__71927;
chunk__71807 = G__71928;
count__71808 = G__71929;
i__71809 = G__71930;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((expected instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(provided),expected)){
return null;
} else {
return emmy.util.illegal((""+"expected argument of type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)+" but got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.value.kind(provided))+" in call to function "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)));
}
} else {
return emmy.util.illegal((""+"unexpected argument example. got "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(provided)+" want "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)));

}
}
}
});
emmy.abstract$.function$.literal_apply = (function emmy$abstract$function$literal_apply(f,xs){
emmy.abstract$.function$.check_argument_type(f,xs,emmy.abstract$.function$.domain_types(f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null));

var s = emmy.matrix.seq__GT_(xs);
var temp__5823__auto__ = emmy.structure.fold_chain.cljs$core$IFn$_invoke$arity$2((function() {
var G__71936 = null;
var G__71936__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__71936__1 = (function (acc){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.autodiff.tag_PLUS_perturbation,acc);
});
var G__71936__2 = (function (acc,p__71868){
var vec__71869 = p__71868;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71869,(0),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
});
G__71936 = function(acc,p__71868){
switch(arguments.length){
case 0:
return G__71936__0.call(this);
case 1:
return G__71936__1.call(this,acc);
case 2:
return G__71936__2.call(this,acc,p__71868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71936.cljs$core$IFn$_invoke$arity$0 = G__71936__0;
G__71936.cljs$core$IFn$_invoke$arity$1 = G__71936__1;
G__71936.cljs$core$IFn$_invoke$arity$2 = G__71936__2;
return G__71936;
})()
,s);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__71872 = temp__5823__auto__;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71872,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71872,(1),null);
return emmy.abstract$.function$.literal_derivative(f,s,tag,dx);
} else {
return emmy.abstract$.number.literal_number(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,emmy.abstract$.function$.name(f),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.generic.freeze,xs)))));
}
});
emmy.generic.simplify.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (f){
return emmy.abstract$.function$.__GT_Function(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.abstract$.function$.name(f)),emmy.function$.arity(f),emmy.abstract$.function$.domain_types(f),emmy.abstract$.function$.range_type(f));
}));
emmy.generic.zero_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (a){
return (function() { 
var G__71945__delegate = function (_){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a.range);
};
var G__71945 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__71946__i = 0, G__71946__a = new Array(arguments.length -  0);
while (G__71946__i < G__71946__a.length) {G__71946__a[G__71946__i] = arguments[G__71946__i + 0]; ++G__71946__i;}
  _ = new cljs.core.IndexedSeq(G__71946__a,0,null);
} 
return G__71945__delegate.call(this,_);};
G__71945.cljs$lang$maxFixedArity = 0;
G__71945.cljs$lang$applyTo = (function (arglist__71947){
var _ = cljs.core.seq(arglist__71947);
return G__71945__delegate(_);
});
G__71945.cljs$core$IFn$_invoke$arity$variadic = G__71945__delegate;
return G__71945;
})()
;
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (a){
return (function() { 
var G__71948__delegate = function (_){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.range);
};
var G__71948 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__71949__i = 0, G__71949__a = new Array(arguments.length -  0);
while (G__71949__i < G__71949__a.length) {G__71949__a[G__71949__i] = arguments[G__71949__i + 0]; ++G__71949__i;}
  _ = new cljs.core.IndexedSeq(G__71949__a,0,null);
} 
return G__71948__delegate.call(this,_);};
G__71948.cljs$lang$maxFixedArity = 0;
G__71948.cljs$lang$applyTo = (function (arglist__71950){
var _ = cljs.core.seq(arglist__71950);
return G__71948__delegate(_);
});
G__71948.cljs$core$IFn$_invoke$arity$variadic = G__71948__delegate;
return G__71948;
})()
;
}));
emmy.generic.identity_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (a){
var meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arity","arity",-1808556135),a.arity,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"identity-like","identity-like",-98546347)], null);
return cljs.core.with_meta(cljs.core.identity,meta);
}));
emmy.generic.exact_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (a){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.exact_QMARK_,a], 0));
}));
emmy.generic.freeze.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (a){
return emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(a.f_name);
}));

//# sourceMappingURL=emmy.abstract.function.js.map
