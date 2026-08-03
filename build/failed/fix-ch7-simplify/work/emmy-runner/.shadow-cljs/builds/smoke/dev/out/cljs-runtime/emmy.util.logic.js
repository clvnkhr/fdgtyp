goog.provide('emmy.util.logic');
/**
 * If true, logs assumptions.
 */
emmy.util.logic._STAR_log_assumptions_QMARK__STAR_ = true;
/**
 * Log an assumption.
 * 
 *   NOTE that `if-false` is not used right now. Currently this always returns true.
 * 
 *   NOTE: what this WILL do is check if the assumption is correct, to the extent
 *   that this is possible, and fail if it's provably false.
 */
emmy.util.logic.assume_BANG_ = (function emmy$util$logic$assume_BANG_(var_args){
var G__36597 = arguments.length;
switch (G__36597) {
case 2:
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (assumption,context){
return emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3(assumption,context,null);
}));

(emmy.util.logic.assume_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (assumption,context,_if_false){
if(cljs.core.truth_(emmy.util.logic._STAR_log_assumptions_QMARK__STAR_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"emmy.util.logic",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"Assuming "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(assumption)+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(context))], null);
}),null)),null,-1664117629,null);
} else {
}

return true;
}));

(emmy.util.logic.assume_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=emmy.util.logic.js.map
