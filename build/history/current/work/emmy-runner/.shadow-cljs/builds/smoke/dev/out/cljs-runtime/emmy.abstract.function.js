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
var vec__47109 = s;
var seq__47110 = cljs.core.seq(vec__47109);
var first__47111 = cljs.core.first(seq__47110);
var seq__47110__$1 = cljs.core.next(seq__47110);
var constructor$ = first__47111;
var args = seq__47110__$1;
var G__47112 = constructor$;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"X","X",-948439456,null),G__47112)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.sicm_set__GT_exemplar,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"UP","UP",-1898089532,null),G__47112)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.up,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.sicm_set__GT_exemplar,args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"DOWN","DOWN",-1166138822,null),G__47112)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.down,cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.abstract$.function$.sicm_set__GT_exemplar,args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),G__47112)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.up,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__47113 = cljs.core.first(args);
return (emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__47113) : emmy.abstract$.function$.sicm_set__GT_exemplar.call(null,G__47113));
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"DOWN*","DOWN*",1300864675,null),G__47112)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.down,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__47114 = cljs.core.first(args);
return (emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__47114) : emmy.abstract$.function$.sicm_set__GT_exemplar.call(null,G__47114));
})()));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"X*","X*",1047022815,null),G__47112)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(args),(function (){var G__47115 = cljs.core.first(args);
return (emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1 ? emmy.abstract$.function$.sicm_set__GT_exemplar.cljs$core$IFn$_invoke$arity$1(G__47115) : emmy.abstract$.function$.sicm_set__GT_exemplar.call(null,G__47115));
})()));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47112))));

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
emmy.abstract$.function$.sicm_signature__GT_domain_range = (function emmy$abstract$function$sicm_signature__GT_domain_range(p__47116){
var vec__47117 = p__47116;
var arrow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(0),null);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(1),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47117,(2),null);
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
var G__47121 = (arguments.length - (1));
switch (G__47121) {
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

(emmy.abstract$.function$.Function.prototype.apply = (function (self__,args47120){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47120)));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var G__47122 = this$;
var G__47123 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47122,G__47123) : emmy.abstract$.function$.literal_apply.call(null,G__47122,G__47123));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var G__47124 = this$;
var G__47125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47124,G__47125) : emmy.abstract$.function$.literal_apply.call(null,G__47124,G__47125));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var G__47126 = this$;
var G__47127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47126,G__47127) : emmy.abstract$.function$.literal_apply.call(null,G__47126,G__47127));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var G__47128 = this$;
var G__47129 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47128,G__47129) : emmy.abstract$.function$.literal_apply.call(null,G__47128,G__47129));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var G__47130 = this$;
var G__47131 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47130,G__47131) : emmy.abstract$.function$.literal_apply.call(null,G__47130,G__47131));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
var G__47132 = this$;
var G__47133 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47132,G__47133) : emmy.abstract$.function$.literal_apply.call(null,G__47132,G__47133));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
var G__47134 = this$;
var G__47135 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47134,G__47135) : emmy.abstract$.function$.literal_apply.call(null,G__47134,G__47135));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
var G__47136 = this$;
var G__47137 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47136,G__47137) : emmy.abstract$.function$.literal_apply.call(null,G__47136,G__47137));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
var G__47138 = this$;
var G__47139 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47138,G__47139) : emmy.abstract$.function$.literal_apply.call(null,G__47138,G__47139));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
var G__47140 = this$;
var G__47141 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47140,G__47141) : emmy.abstract$.function$.literal_apply.call(null,G__47140,G__47141));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
var G__47142 = this$;
var G__47143 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47142,G__47143) : emmy.abstract$.function$.literal_apply.call(null,G__47142,G__47143));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var G__47144 = this$;
var G__47145 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47144,G__47145) : emmy.abstract$.function$.literal_apply.call(null,G__47144,G__47145));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var G__47146 = this$;
var G__47147 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47146,G__47147) : emmy.abstract$.function$.literal_apply.call(null,G__47146,G__47147));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var G__47148 = this$;
var G__47149 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47148,G__47149) : emmy.abstract$.function$.literal_apply.call(null,G__47148,G__47149));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var G__47150 = this$;
var G__47151 = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47150,G__47151) : emmy.abstract$.function$.literal_apply.call(null,G__47150,G__47151));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var G__47152 = this$;
var G__47153 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47152,G__47153) : emmy.abstract$.function$.literal_apply.call(null,G__47152,G__47153));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var G__47154 = this$;
var G__47155 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47154,G__47155) : emmy.abstract$.function$.literal_apply.call(null,G__47154,G__47155));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var G__47156 = this$;
var G__47157 = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47156,G__47157) : emmy.abstract$.function$.literal_apply.call(null,G__47156,G__47157));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var G__47158 = this$;
var G__47159 = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47158,G__47159) : emmy.abstract$.function$.literal_apply.call(null,G__47158,G__47159));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var G__47160 = this$;
var G__47161 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], null);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47160,G__47161) : emmy.abstract$.function$.literal_apply.call(null,G__47160,G__47161));
}));

(emmy.abstract$.function$.Function.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
var G__47162 = this$;
var G__47163 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], null),rest);
return (emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(G__47162,G__47163) : emmy.abstract$.function$.literal_apply.call(null,G__47162,G__47163));
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
var G__47167 = arguments.length;
switch (G__47167) {
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
var vec__47168 = emmy.abstract$.function$.sicm_signature__GT_domain_range(signature);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47168,(0),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47168,(1),null);
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
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (p1__47164_SHARP_,p2__47165_SHARP_){
return emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(p1__47164_SHARP_,domain,p2__47165_SHARP_);
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
var vec__47174 = entry;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(0),null);
var domain = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(1),null);
var range = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(2),null);
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
var len__5897__auto___47234 = arguments.length;
var i__5898__auto___47235 = (0);
while(true){
if((i__5898__auto___47235 < len__5897__auto___47234)){
args__5903__auto__.push((arguments[i__5898__auto___47235]));

var G__47236 = (i__5898__auto___47235 + (1));
i__5898__auto___47235 = G__47236;
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
(emmy.abstract$.function$.with_literal_functions.cljs$lang$applyTo = (function (seq47177){
var G__47178 = cljs.core.first(seq47177);
var seq47177__$1 = cljs.core.next(seq47177);
var G__47179 = cljs.core.first(seq47177__$1);
var seq47177__$2 = cljs.core.next(seq47177__$1);
var G__47180 = cljs.core.first(seq47177__$2);
var seq47177__$3 = cljs.core.next(seq47177__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47178,G__47179,G__47180,seq47177__$3);
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
var G__47237 = null;
var G__47237__0 = (function (){
return (0);
});
var G__47237__1 = (function (tangent){
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,primal_s),tangent,tag);
});
var G__47237__2 = (function (tangent,p__47181){
var vec__47182 = p__47181;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47182,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47182,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47182,(2),null);
var dx = emmy.dual.tangent.cljs$core$IFn$_invoke$arity$2(x,tag);
if(cljs.core.truth_(emmy.generic.numeric_zero_QMARK_(dx))){
return tangent;
} else {
var partial = emmy.abstract$.function$.literal_partial(f,path);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(tangent,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(partial,primal_s) : emmy.abstract$.function$.literal_apply.call(null,partial,primal_s)),dx));
}
});
G__47237 = function(tangent,p__47181){
switch(arguments.length){
case 0:
return G__47237__0.call(this);
case 1:
return G__47237__1.call(this,tangent);
case 2:
return G__47237__2.call(this,tangent,p__47181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47237.cljs$core$IFn$_invoke$arity$0 = G__47237__0;
G__47237.cljs$core$IFn$_invoke$arity$1 = G__47237__1;
G__47237.cljs$core$IFn$_invoke$arity$2 = G__47237__2;
return G__47237;
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
var G__47238 = null;
var G__47238__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__47238__1 = (function (partials){
return emmy.tape.make.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,primal_s),partials);
});
var G__47238__2 = (function (partials,p__47185){
var vec__47186 = p__47185;
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47186,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47186,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47186,(2),null);
if(((emmy.tape.tape_QMARK_(entry)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,emmy.tape.tape_tag(entry))))){
var partial = emmy.abstract$.function$.literal_partial(f,path);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(partials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entry,(emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2 ? emmy.abstract$.function$.literal_apply.cljs$core$IFn$_invoke$arity$2(partial,primal_s) : emmy.abstract$.function$.literal_apply.call(null,partial,primal_s))], null));
} else {
return partials;
}
});
G__47238 = function(partials,p__47185){
switch(arguments.length){
case 0:
return G__47238__0.call(this);
case 1:
return G__47238__1.call(this,partials);
case 2:
return G__47238__2.call(this,partials,p__47185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47238.cljs$core$IFn$_invoke$arity$0 = G__47238__0;
G__47238.cljs$core$IFn$_invoke$arity$1 = G__47238__1;
G__47238.cljs$core$IFn$_invoke$arity$2 = G__47238__2;
return G__47238;
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

var seq__47189 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.list,provided,expected,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
var chunk__47190 = null;
var count__47191 = (0);
var i__47192 = (0);
while(true){
if((i__47192 < count__47191)){
var vec__47207 = chunk__47190.cljs$core$IIndexed$_nth$arity$2(null,i__47192);
var provided__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47207,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47207,(1),null);
var sub_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47207,(2),null);
var G__47210_47239 = f;
var G__47211_47240 = provided__$1;
var G__47212_47241 = expected__$1;
var G__47213_47242 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexes,sub_index);
(emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4 ? emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4(G__47210_47239,G__47211_47240,G__47212_47241,G__47213_47242) : emmy.abstract$.function$.check_argument_type.call(null,G__47210_47239,G__47211_47240,G__47212_47241,G__47213_47242));


var G__47243 = seq__47189;
var G__47244 = chunk__47190;
var G__47245 = count__47191;
var G__47246 = (i__47192 + (1));
seq__47189 = G__47243;
chunk__47190 = G__47244;
count__47191 = G__47245;
i__47192 = G__47246;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__47189);
if(temp__5825__auto__){
var seq__47189__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47189__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__47189__$1);
var G__47247 = cljs.core.chunk_rest(seq__47189__$1);
var G__47248 = c__5694__auto__;
var G__47249 = cljs.core.count(c__5694__auto__);
var G__47250 = (0);
seq__47189 = G__47247;
chunk__47190 = G__47248;
count__47191 = G__47249;
i__47192 = G__47250;
continue;
} else {
var vec__47214 = cljs.core.first(seq__47189__$1);
var provided__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47214,(0),null);
var expected__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47214,(1),null);
var sub_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47214,(2),null);
var G__47217_47251 = f;
var G__47218_47252 = provided__$1;
var G__47219_47253 = expected__$1;
var G__47220_47254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indexes,sub_index);
(emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4 ? emmy.abstract$.function$.check_argument_type.cljs$core$IFn$_invoke$arity$4(G__47217_47251,G__47218_47252,G__47219_47253,G__47220_47254) : emmy.abstract$.function$.check_argument_type.call(null,G__47217_47251,G__47218_47252,G__47219_47253,G__47220_47254));


var G__47255 = cljs.core.next(seq__47189__$1);
var G__47256 = null;
var G__47257 = (0);
var G__47258 = (0);
seq__47189 = G__47255;
chunk__47190 = G__47256;
count__47191 = G__47257;
i__47192 = G__47258;
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
var G__47261 = null;
var G__47261__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__47261__1 = (function (acc){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.autodiff.tag_PLUS_perturbation,acc);
});
var G__47261__2 = (function (acc,p__47221){
var vec__47222 = p__47221;
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47222,(0),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
});
G__47261 = function(acc,p__47221){
switch(arguments.length){
case 0:
return G__47261__0.call(this);
case 1:
return G__47261__1.call(this,acc);
case 2:
return G__47261__2.call(this,acc,p__47221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47261.cljs$core$IFn$_invoke$arity$0 = G__47261__0;
G__47261.cljs$core$IFn$_invoke$arity$1 = G__47261__1;
G__47261.cljs$core$IFn$_invoke$arity$2 = G__47261__2;
return G__47261;
})()
,s);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__47225 = temp__5823__auto__;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47225,(0),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47225,(1),null);
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
var G__47262__delegate = function (_){
return emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1(a.range);
};
var G__47262 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__47263__i = 0, G__47263__a = new Array(arguments.length -  0);
while (G__47263__i < G__47263__a.length) {G__47263__a[G__47263__i] = arguments[G__47263__i + 0]; ++G__47263__i;}
  _ = new cljs.core.IndexedSeq(G__47263__a,0,null);
} 
return G__47262__delegate.call(this,_);};
G__47262.cljs$lang$maxFixedArity = 0;
G__47262.cljs$lang$applyTo = (function (arglist__47264){
var _ = cljs.core.seq(arglist__47264);
return G__47262__delegate(_);
});
G__47262.cljs$core$IFn$_invoke$arity$variadic = G__47262__delegate;
return G__47262;
})()
;
}));
emmy.generic.one_like.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.abstract.function","function","emmy.abstract.function/function",878668117)], null),(function (a){
return (function() { 
var G__47265__delegate = function (_){
return emmy.generic.one_like.cljs$core$IFn$_invoke$arity$1(a.range);
};
var G__47265 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__47266__i = 0, G__47266__a = new Array(arguments.length -  0);
while (G__47266__i < G__47266__a.length) {G__47266__a[G__47266__i] = arguments[G__47266__i + 0]; ++G__47266__i;}
  _ = new cljs.core.IndexedSeq(G__47266__a,0,null);
} 
return G__47265__delegate.call(this,_);};
G__47265.cljs$lang$maxFixedArity = 0;
G__47265.cljs$lang$applyTo = (function (arglist__47267){
var _ = cljs.core.seq(arglist__47267);
return G__47265__delegate(_);
});
G__47265.cljs$core$IFn$_invoke$arity$variadic = G__47265__delegate;
return G__47265;
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
