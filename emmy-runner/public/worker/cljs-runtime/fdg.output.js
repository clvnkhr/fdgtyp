import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
goog.provide('fdg.output');
fdg.output.emmy_ratio_pattern = /#emmy\/ratio \"(-?\d+)\/(\d+)\"/;
/**
 * Print a value as readable ClojureScript source where possible.
 * 
 *   Emmy's tagged ratio literal is needed for exact EDN round-tripping, but the
 *   explicit generic division form is valid ClojureScript and matches the source
 *   convention used by this book. This function changes presentation only.
 */
fdg.output.pr_str_native = (function fdg$output$pr_str_native(value){
return clojure.string.replace(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),fdg.output.emmy_ratio_pattern,(function (p__78605){
var vec__78606 = p__78605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78606,(0),null);
var numerator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78606,(1),null);
var denominator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78606,(2),null);
return (""+"(/ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)+")");
}));
});

//# sourceMappingURL=fdg.output.js.map
