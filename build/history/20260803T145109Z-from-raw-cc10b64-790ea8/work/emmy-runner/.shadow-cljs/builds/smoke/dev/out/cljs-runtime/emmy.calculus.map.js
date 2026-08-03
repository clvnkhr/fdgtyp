goog.provide('emmy.calculus.map');
emmy.calculus.map.pullback_function = (function emmy$calculus$map$pullback_function(mu_COLON_N__GT_M){
return (function (f_on_M){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_on_M,mu_COLON_N__GT_M], 0));
});
});
emmy.calculus.map.pushforward_function = (function emmy$calculus$map$pushforward_function(mu_inverse_COLON_M__GT_N){
return (function (f_on_N){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_on_N,mu_inverse_COLON_M__GT_N], 0));
});
});
/**
 * Defined on FDG p.72.
 */
emmy.calculus.map.differential_of_map = (function emmy$calculus$map$differential_of_map(mu_COLON_N__GT_M){
return (function (v_on_N){
if(emmy.calculus.vector_field.vector_field_QMARK_(v_on_N)){
} else {
throw (new Error("Assert failed: (vf/vector-field? v-on-N)"));
}

var v_on_M = (function (g_on_M){
var G__48445 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g_on_M,mu_COLON_N__GT_M], 0));
return (v_on_N.cljs$core$IFn$_invoke$arity$1 ? v_on_N.cljs$core$IFn$_invoke$arity$1(G__48445) : v_on_N.call(null,G__48445));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"d","d",-682293345,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(v_on_N),null,(1),null)))));
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(v_on_M,name);
});
});
/**
 * Alias for [[differential-of-map]].
 */
emmy.calculus.map.differential = emmy.calculus.map.differential_of_map;
emmy.calculus.map.pushforward_vector = (function emmy$calculus$map$pushforward_vector(mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N){
return (function (v_on_N){
var op = (function (f){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48461 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f,mu_COLON_N__GT_M], 0));
return (v_on_N.cljs$core$IFn$_invoke$arity$1 ? v_on_N.cljs$core$IFn$_invoke$arity$1(G__48461) : v_on_N.call(null,G__48461));
})(),mu_inverse_COLON_M__GT_N], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pushforward","pushforward",-683343030,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(v_on_N),null,(1),null)))));
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
});
emmy.calculus.map.literal_manifold_map = (function emmy$calculus$map$literal_manifold_map(name,source,target){
var n = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(source));
var m = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(target));
var domain = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?(0):emmy.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0))));
var range = emmy.structure.up_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(m,(0)));
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.manifold.point(target),emmy.abstract$.function$.literal_function.cljs$core$IFn$_invoke$arity$3(name,domain,range),emmy.calculus.manifold.chart(source)], 0));
});
/**
 * Defined on FDG p.72.
 */
emmy.calculus.map.vector_field__GT_vector_field_over_map = (function emmy$calculus$map$vector_field__GT_vector_field_over_map(mu_COLON_N__GT_M){
return (function (v_on_M){
var op = (function (f_on_M){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(v_on_M.cljs$core$IFn$_invoke$arity$1 ? v_on_M.cljs$core$IFn$_invoke$arity$1(f_on_M) : v_on_M.call(null,f_on_M)),mu_COLON_N__GT_M], 0));
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"vector-field->vector-field-over-map","vector-field->vector-field-over-map",969823025,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(v_on_M),null,(1),null)))));
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2(op,name);
});
});
emmy.calculus.map.form_field__GT_form_field_over_map = (function emmy$calculus$map$form_field__GT_form_field_over_map(mu_COLON_N__GT_M){
return (function (w_on_M){
var make_fake_vector_field = (function emmy$calculus$map$form_field__GT_form_field_over_map_$_make_fake_vector_field(V_over_mu,n){
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((function (f){
return (function (_){
var fexpr__48488 = (V_over_mu.cljs$core$IFn$_invoke$arity$1 ? V_over_mu.cljs$core$IFn$_invoke$arity$1(f) : V_over_mu.call(null,f));
return (fexpr__48488.cljs$core$IFn$_invoke$arity$1 ? fexpr__48488.cljs$core$IFn$_invoke$arity$1(n) : fexpr__48488.call(null,n));
});
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"make-fake-vector-field","make-fake-vector-field",-1146565625,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(V_over_mu),null,(1),null))))));
});
var op = (function() { 
var emmy$calculus$map$form_field__GT_form_field_over_map_$_op__delegate = function (vectors_over_map){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vectors_over_map),emmy.calculus.form_field.get_rank(w_on_M))){
} else {
throw (new Error("Assert failed: (= (count vectors-over-map) (ff/get-rank w-on-M))"));
}

return (function (n){
var G__48494 = (mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1 ? mu_COLON_N__GT_M.cljs$core$IFn$_invoke$arity$1(n) : mu_COLON_N__GT_M.call(null,n));
var fexpr__48493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(w_on_M,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (V_over_mu){
return make_fake_vector_field(V_over_mu,n);
}),vectors_over_map));
return (fexpr__48493.cljs$core$IFn$_invoke$arity$1 ? fexpr__48493.cljs$core$IFn$_invoke$arity$1(G__48494) : fexpr__48493.call(null,G__48494));
});
};
var emmy$calculus$map$form_field__GT_form_field_over_map_$_op = function (var_args){
var vectors_over_map = null;
if (arguments.length > 0) {
var G__48544__i = 0, G__48544__a = new Array(arguments.length -  0);
while (G__48544__i < G__48544__a.length) {G__48544__a[G__48544__i] = arguments[G__48544__i + 0]; ++G__48544__i;}
  vectors_over_map = new cljs.core.IndexedSeq(G__48544__a,0,null);
} 
return emmy$calculus$map$form_field__GT_form_field_over_map_$_op__delegate.call(this,vectors_over_map);};
emmy$calculus$map$form_field__GT_form_field_over_map_$_op.cljs$lang$maxFixedArity = 0;
emmy$calculus$map$form_field__GT_form_field_over_map_$_op.cljs$lang$applyTo = (function (arglist__48545){
var vectors_over_map = cljs.core.seq(arglist__48545);
return emmy$calculus$map$form_field__GT_form_field_over_map_$_op__delegate(vectors_over_map);
});
emmy$calculus$map$form_field__GT_form_field_over_map_$_op.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$map$form_field__GT_form_field_over_map_$_op__delegate;
return emmy$calculus$map$form_field__GT_form_field_over_map_$_op;
})()
;
var rank = emmy.calculus.form_field.get_rank(w_on_M);
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"form-field->form-field-over-map","form-field->form-field-over-map",1700913758,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(w_on_M),null,(1),null)))));
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,rank,name);
});
});
emmy.calculus.map.basis__GT_basis_over_map = (function emmy$calculus$map$basis__GT_basis_over_map(mu_COLON_N__GT_M,basis_on_M){
var vector_basis_on_M = emmy.calculus.basis.basis__GT_vector_basis(basis_on_M);
var dual_basis_on_M = emmy.calculus.basis.basis__GT_oneform_basis(basis_on_M);
return emmy.calculus.basis.make_basis(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.calculus.map.vector_field__GT_vector_field_over_map(mu_COLON_N__GT_M),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis_on_M], 0)),emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.calculus.map.form_field__GT_form_field_over_map(mu_COLON_N__GT_M),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dual_basis_on_M], 0)));
});
/**
 * Returns a function which will pull a form back across a map (without needing
 *   its inverse)
 */
emmy.calculus.map.pullback_form = (function emmy$calculus$map$pullback_form(mu_COLON_N__GT_M){
return (function (omega_on_M){
var k = emmy.calculus.form_field.get_rank(omega_on_M);
if((k === (0))){
return emmy.calculus.map.pullback_function(mu_COLON_N__GT_M)(omega_on_M);
} else {
var op = (function() { 
var G__48546__delegate = function (vectors_on_N){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.calculus.map.form_field__GT_form_field_over_map(mu_COLON_N__GT_M)(omega_on_M),cljs.core.map.cljs$core$IFn$_invoke$arity$2((emmy.calculus.map.differential.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.map.differential.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M) : emmy.calculus.map.differential.call(null,mu_COLON_N__GT_M)),vectors_on_N));
};
var G__48546 = function (var_args){
var vectors_on_N = null;
if (arguments.length > 0) {
var G__48549__i = 0, G__48549__a = new Array(arguments.length -  0);
while (G__48549__i < G__48549__a.length) {G__48549__a[G__48549__i] = arguments[G__48549__i + 0]; ++G__48549__i;}
  vectors_on_N = new cljs.core.IndexedSeq(G__48549__a,0,null);
} 
return G__48546__delegate.call(this,vectors_on_N);};
G__48546.cljs$lang$maxFixedArity = 0;
G__48546.cljs$lang$applyTo = (function (arglist__48551){
var vectors_on_N = cljs.core.seq(arglist__48551);
return G__48546__delegate(vectors_on_N);
});
G__48546.cljs$core$IFn$_invoke$arity$variadic = G__48546__delegate;
return G__48546;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pullback","pullback",-1132207426,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(mu_COLON_N__GT_M),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(omega_on_M),null,(1),null)))));
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,k,name);
}
});
});
emmy.calculus.map.pullback_vector_field = (function emmy$calculus$map$pullback_vector_field(mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N){
return emmy.calculus.map.pushforward_vector(mu_inverse_COLON_M__GT_N,mu_COLON_N__GT_M);
});
emmy.calculus.map.pullback = (function emmy$calculus$map$pullback(var_args){
var G__48512 = arguments.length;
switch (G__48512) {
case 1:
return emmy.calculus.map.pullback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.map.pullback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.map.pullback.cljs$core$IFn$_invoke$arity$1 = (function (mu_COLON_N__GT_M){
return emmy.calculus.map.pullback.cljs$core$IFn$_invoke$arity$2(mu_COLON_N__GT_M,null);
}));

(emmy.calculus.map.pullback.cljs$core$IFn$_invoke$arity$2 = (function (mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N){
return (function (thing){
if(emmy.calculus.vector_field.vector_field_QMARK_(thing)){
if((mu_inverse_COLON_M__GT_N == null)){
return emmy.util.illegal("Pullback of a vector requires inverse map");
} else {
return emmy.calculus.map.pullback_vector_field(mu_COLON_N__GT_M,mu_inverse_COLON_M__GT_N)(thing);
}
} else {
return emmy.calculus.map.pullback_form(mu_COLON_N__GT_M)(thing);
}
});
}));

(emmy.calculus.map.pullback.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.calculus.map.js.map
