goog.provide('emmy.mechanics.noether');
emmy.mechanics.noether.Noether_integral = (function emmy$mechanics$noether$Noether_integral(L,F_tilde){
var min_arity = cljs.core.second(emmy.function$.arity(F_tilde));
var zeros = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(min_arity,(0));
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__57045 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__57045.cljs$core$IFn$_invoke$arity$1 ? fexpr__57045.cljs$core$IFn$_invoke$arity$1(L) : fexpr__57045.call(null,L));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F_tilde) : emmy.calculus.derivative.D.call(null,F_tilde)),zeros));
});

//# sourceMappingURL=emmy.mechanics.noether.js.map
