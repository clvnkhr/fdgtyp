goog.provide('cljs.analyzer.passes');
cljs.analyzer.passes.apply_passes = (function cljs$analyzer$passes$apply_passes(var_args){
var G__21290 = arguments.length;
switch (G__21290) {
case 2:
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$2 = (function (ast,passes){
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3(ast,passes,null);
}));

(cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3 = (function (ast,passes,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast__$1,pass){
var G__21309 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ast__$1);
var G__21310 = ast__$1;
var G__21311 = opts;
return (pass.cljs$core$IFn$_invoke$arity$3 ? pass.cljs$core$IFn$_invoke$arity$3(G__21309,G__21310,G__21311) : pass.call(null,G__21309,G__21310,G__21311));
}),ast,passes);
}));

(cljs.analyzer.passes.apply_passes.cljs$lang$maxFixedArity = 3);

cljs.analyzer.passes.walk = (function cljs$analyzer$passes$walk(var_args){
var G__21319 = arguments.length;
switch (G__21319) {
case 2:
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$2 = (function (ast,passes){
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3(ast,passes,null);
}));

(cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3 = (function (ast,passes,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast__$1,child_k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast__$1,child_k,(function (){var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast__$1,child_k);
if(cljs.core.vector_QMARK_(child)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__21316_SHARP_){
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3(p1__21316_SHARP_,passes,opts);
})),child);
} else {
return cljs.analyzer.passes.walk.cljs$core$IFn$_invoke$arity$3(child,passes,opts);
}
})());
}),(function (){var G__21337 = ast;
if((G__21337 == null)){
return null;
} else {
return cljs.analyzer.passes.apply_passes.cljs$core$IFn$_invoke$arity$3(G__21337,passes,opts);
}
})(),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
}));

(cljs.analyzer.passes.walk.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.analyzer.passes.js.map
