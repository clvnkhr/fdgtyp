goog.provide('emmy.mechanics.time_evolution');
emmy.mechanics.time_evolution.shift_t = (function emmy$mechanics$time_evolution$shift_t(delta_t){
return (function (p__59506){
var vec__59507 = p__59506;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59507,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59507,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59507,(2),null);
return emmy.mechanics.hamilton.__GT_H_state(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(t,delta_t),q,p);
});
});
emmy.mechanics.time_evolution.C__GT_Cp = (function emmy$mechanics$time_evolution$C__GT_Cp(C){
return (function (delta_t){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(delta_t) : C.call(null,delta_t)),emmy.mechanics.time_evolution.shift_t(emmy.generic._.cljs$core$IFn$_invoke$arity$1(delta_t))], 0));
});
});
emmy.mechanics.time_evolution.H__GT_Hp = (function emmy$mechanics$time_evolution$H__GT_Hp(delta_t){
return (function (H){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,emmy.mechanics.time_evolution.shift_t(emmy.generic._.cljs$core$IFn$_invoke$arity$1(delta_t))], 0));
});
});

//# sourceMappingURL=emmy.mechanics.time_evolution.js.map
