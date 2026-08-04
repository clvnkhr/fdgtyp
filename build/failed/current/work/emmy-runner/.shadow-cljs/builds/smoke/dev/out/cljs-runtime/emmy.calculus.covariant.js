goog.provide('emmy.calculus.covariant');
emmy.calculus.covariant.vector_field_Lie_derivative = (function emmy$calculus$covariant$vector_field_Lie_derivative(X){
var freeze_X = emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(X);
var op_name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null),null,(1),null)),(new cljs.core.List(null,freeze_X,null,(1),null)))));
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function emmy$calculus$covariant$vector_field_Lie_derivative_$_rec(Y){
if(emmy.function$.function_QMARK_(Y)){
return (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(Y) : X.call(null,Y));
} else {
if(emmy.calculus.vector_field.vector_field_QMARK_(Y)){
return emmy.operator.commutator(X,Y);
} else {
if(emmy.calculus.form_field.form_field_QMARK_(Y)){
var k = emmy.calculus.form_field.get_rank(Y);
var op = (function() { 
var G__48898__delegate = function (vectors){
var vectors__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,vectors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.count(vectors__$1))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"\u2260","\u2260",-1444019055,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(vectors__$1),null,(1),null)),vectors__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,vectors__$1)], 0)))))+"\n"+"(= k (count vectors))")));
}

return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__48667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Y,vectors__$1);
var fexpr__48666 = emmy.generic.Lie_derivative.cljs$core$IFn$_invoke$arity$1(X);
return (fexpr__48666.cljs$core$IFn$_invoke$arity$1 ? fexpr__48666.cljs$core$IFn$_invoke$arity$1(G__48667) : fexpr__48666.call(null,G__48667));
})(),(function (){var G__48668 = (function (i){
var xs = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vectors__$1,i,emmy.generic.Lie_derivative.cljs$core$IFn$_invoke$arity$1(X));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(Y,xs);
});
var G__48669 = (0);
var G__48670 = k;
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__48668,G__48669,G__48670) : emmy.util.aggregate.generic_sum.call(null,G__48668,G__48669,G__48670));
})());
};
var G__48898 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__48902__i = 0, G__48902__a = new Array(arguments.length -  0);
while (G__48902__i < G__48902__a.length) {G__48902__a[G__48902__i] = arguments[G__48902__i + 0]; ++G__48902__i;}
  vectors = new cljs.core.IndexedSeq(G__48902__a,0,null);
} 
return G__48898__delegate.call(this,vectors);};
G__48898.cljs$lang$maxFixedArity = 0;
G__48898.cljs$lang$applyTo = (function (arglist__48903){
var vectors = cljs.core.seq(arglist__48903);
return G__48898__delegate(vectors);
});
G__48898.cljs$core$IFn$_invoke$arity$variadic = G__48898__delegate;
return G__48898;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null),null,(1),null)),(new cljs.core.List(null,freeze_X,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(Y),null,(1),null)))));
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,k,name);
} else {
if(emmy.structure.structure_QMARK_(Y)){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((emmy.calculus.covariant.vector_field_Lie_derivative.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.covariant.vector_field_Lie_derivative.cljs$core$IFn$_invoke$arity$1(X) : emmy.calculus.covariant.vector_field_Lie_derivative.call(null,X)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Y], 0));
} else {
return emmy.util.unsupported("Bad argument: Lie Derivative");

}
}
}
}
}),op_name);
});
emmy.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763)], null),(function (V){
return emmy.calculus.covariant.vector_field_Lie_derivative(V);
}));
/**
 * Takes a system derivative `R` and returns a operator that takes a function `F`
 *   of coordinatized state and performs the operation described below, from
 *   ODE.scm in scmutils:
 * 
 *   Let `(sigma t)` be the state of a system at time `t`. Let the
 *   (first-order) system of differential equations governing the evolution of
 *   this state be:
 * 
 *   ```clojure
 *   ((D sigma) t) = (R (sigma t))
 *   ```
 * 
 *   ```clojure
 *   (D sigma) = (compose R sigma)
 *   ```
 * 
 *   i.e. `R` is a system derivative.
 * 
 *   Let `F` be any function of state, then a differential equation for the
 *   evolution of `F`, as it is dragged along the integral curve sigma is:
 * 
 *   ```clojure
 *   (D (compose F sigma)) = (* (compose (D F) sigma) (D sigma))
 *   = (compose (* (D F) R) sigma)
 *   ```
 * 
 *   Let's call this operation `Lie-D` (the Lie derivative for coordinates).
 */
emmy.calculus.covariant.Lie_D = (function emmy$calculus$covariant$Lie_D(R){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (F){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : emmy.calculus.derivative.D.call(null,F)),R);
}),(new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-D","Lie-D",1269840403,null),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(R),null,(1),null)),(2),null)));
});
emmy.calculus.covariant.interior_product = (function emmy$calculus$covariant$interior_product(X){
if(emmy.calculus.vector_field.vector_field_QMARK_(X)){
} else {
throw (new Error("Assert failed: (vf/vector-field? X)"));
}

return (function emmy$calculus$covariant$interior_product_$_ix(alpha){
if(emmy.calculus.form_field.form_field_QMARK_(alpha)){
} else {
throw (new Error("Assert failed: (ff/form-field? alpha)"));
}

var p = emmy.calculus.form_field.get_rank(alpha);
if((p > (0))){
} else {
throw (new Error((""+"Assert failed: "+"Rank of form not greater than zero: interior-product"+"\n"+"(> p 0)")));
}

return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3((function() { 
var emmy$calculus$covariant$interior_product_$_ix_$_the_product__delegate = function (vectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p - (1)),cljs.core.count(vectors))){
} else {
throw (new Error("Assert failed: (= (dec p) (count vectors))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(alpha,X,vectors);
};
var emmy$calculus$covariant$interior_product_$_ix_$_the_product = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__48912__i = 0, G__48912__a = new Array(arguments.length -  0);
while (G__48912__i < G__48912__a.length) {G__48912__a[G__48912__i] = arguments[G__48912__i + 0]; ++G__48912__i;}
  vectors = new cljs.core.IndexedSeq(G__48912__a,0,null);
} 
return emmy$calculus$covariant$interior_product_$_ix_$_the_product__delegate.call(this,vectors);};
emmy$calculus$covariant$interior_product_$_ix_$_the_product.cljs$lang$maxFixedArity = 0;
emmy$calculus$covariant$interior_product_$_ix_$_the_product.cljs$lang$applyTo = (function (arglist__48913){
var vectors = cljs.core.seq(arglist__48913);
return emmy$calculus$covariant$interior_product_$_ix_$_the_product__delegate(vectors);
});
emmy$calculus$covariant$interior_product_$_ix_$_the_product.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$covariant$interior_product_$_ix_$_the_product__delegate;
return emmy$calculus$covariant$interior_product_$_ix_$_the_product;
})()
,(p - (1)),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"interior-product","interior-product",1619499933,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(X),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(alpha),null,(1),null))))));
});
});
emmy.calculus.covariant.make_Cartan = (function emmy$calculus$covariant$make_Cartan(forms,basis){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("emmy.calculus.covariant","Cartan","emmy.calculus.covariant/Cartan",-529045012),new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"basis","basis",1865819339),basis], null);
});
emmy.calculus.covariant.Cartan_QMARK_ = (function emmy$calculus$covariant$Cartan_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(x),new cljs.core.Keyword("emmy.calculus.covariant","Cartan","emmy.calculus.covariant/Cartan",-529045012));
});
emmy.calculus.covariant.Cartan__GT_forms = (function emmy$calculus$covariant$Cartan__GT_forms(C){
return new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(C);
});
emmy.calculus.covariant.Cartan__GT_basis = (function emmy$calculus$covariant$Cartan__GT_basis(C){
return new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(C);
});
/**
 * Returns a data structure representing [Christoffel symbols of the second
 *   kind](https://en.wikipedia.org/wiki/Christoffel_symbols#Christoffel_symbols_of_the_second_kind_(symmetric_definition)).
 */
emmy.calculus.covariant.make_Christoffel = (function emmy$calculus$covariant$make_Christoffel(symbols,basis){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("emmy.calculus.covariant","Christoffel","emmy.calculus.covariant/Christoffel",428267637),new cljs.core.Keyword(null,"symbols","symbols",1211743),symbols,new cljs.core.Keyword(null,"basis","basis",1865819339),basis], null);
});
emmy.calculus.covariant.Christoffel_QMARK_ = (function emmy$calculus$covariant$Christoffel_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.value.kind(x),new cljs.core.Keyword("emmy.calculus.covariant","Christoffel","emmy.calculus.covariant/Christoffel",428267637));
});
emmy.calculus.covariant.Christoffel__GT_symbols = (function emmy$calculus$covariant$Christoffel__GT_symbols(C){
return new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(C);
});
emmy.calculus.covariant.Christoffel__GT_basis = (function emmy$calculus$covariant$Christoffel__GT_basis(C){
return new cljs.core.Keyword(null,"basis","basis",1865819339).cljs$core$IFn$_invoke$arity$1(C);
});
emmy.calculus.covariant.Cartan__GT_Christoffel = (function emmy$calculus$covariant$Cartan__GT_Christoffel(Cartan){
if(emmy.calculus.covariant.Cartan_QMARK_(Cartan)){
} else {
throw (new Error("Assert failed: (Cartan? Cartan)"));
}

var basis = emmy.calculus.covariant.Cartan__GT_basis(Cartan);
var forms = emmy.calculus.covariant.Cartan__GT_forms(Cartan);
return emmy.calculus.covariant.make_Christoffel(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.basis.basis__GT_vector_basis(basis)], 0)),basis);
});
emmy.calculus.covariant.Christoffel__GT_Cartan = (function emmy$calculus$covariant$Christoffel__GT_Cartan(Christoffel){
if(emmy.calculus.covariant.Christoffel_QMARK_(Christoffel)){
} else {
throw (new Error("Assert failed: (Christoffel? Christoffel)"));
}

var basis = emmy.calculus.covariant.Christoffel__GT_basis(Christoffel);
var symbols = emmy.calculus.covariant.Christoffel__GT_symbols(Christoffel);
return emmy.calculus.covariant.make_Cartan(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(symbols,emmy.calculus.basis.basis__GT_oneform_basis(basis)),basis);
});
emmy.calculus.covariant.symmetrize_Christoffel = (function emmy$calculus$covariant$symmetrize_Christoffel(G){
var s = emmy.calculus.covariant.Christoffel__GT_symbols(G);
return emmy.calculus.covariant.make_Christoffel(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(s,emmy.structure.transpose_outer(s))),emmy.calculus.covariant.Christoffel__GT_basis(G));
});
emmy.calculus.covariant.symmetrize_Cartan = (function emmy$calculus$covariant$symmetrize_Cartan(Cartan){
return emmy.calculus.covariant.Christoffel__GT_Cartan(emmy.calculus.covariant.symmetrize_Christoffel(emmy.calculus.covariant.Cartan__GT_Christoffel(Cartan)));
});
emmy.calculus.covariant.Cartan_transform = (function emmy$calculus$covariant$Cartan_transform(cartan,basis_prime){
var basis = emmy.calculus.covariant.Cartan__GT_basis(cartan);
var forms = emmy.calculus.covariant.Cartan__GT_forms(cartan);
var prime_dual_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis_prime);
var prime_vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis_prime);
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var J_inv = emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(oneform_basis,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prime_vector_basis], 0));
var J = emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(prime_dual_basis,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0));
var omega_prime_forms = emmy.calculus.form_field.procedure__GT_oneform_field.cljs$core$IFn$_invoke$arity$2((function (u){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(J,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(J_inv) : u.call(null,J_inv))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(J,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((forms.cljs$core$IFn$_invoke$arity$1 ? forms.cljs$core$IFn$_invoke$arity$1(u) : forms.call(null,u)),J_inv)));
}),new cljs.core.Symbol(null,"omega-prime-forms","omega-prime-forms",1304696268,null));
return emmy.calculus.covariant.make_Cartan(omega_prime_forms,basis_prime);
});
emmy.calculus.covariant.Cartan__GT_Cartan_over_map = (function emmy$calculus$covariant$Cartan__GT_Cartan_over_map(Cartan,map){
var basis = emmy.calculus.map.basis__GT_basis_over_map(map,emmy.calculus.covariant.Cartan__GT_basis(Cartan));
var forms = emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy.calculus.map.form_field__GT_form_field_over_map(map),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.covariant.Cartan__GT_forms(Cartan)], 0));
return emmy.calculus.covariant.make_Cartan(forms,basis);
});
emmy.calculus.covariant.covariant_derivative_vector = (function emmy$calculus$covariant$covariant_derivative_vector(Cartan){
var basis = emmy.calculus.covariant.Cartan__GT_basis(Cartan);
var Cartan_forms = emmy.calculus.covariant.Cartan__GT_forms(Cartan);
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
return (function (V){
var CV = (Cartan_forms.cljs$core$IFn$_invoke$arity$1 ? Cartan_forms.cljs$core$IFn$_invoke$arity$1(V) : Cartan_forms.call(null,V));
return (function (U){
var u_components = (oneform_basis.cljs$core$IFn$_invoke$arity$1 ? oneform_basis.cljs$core$IFn$_invoke$arity$1(U) : oneform_basis.call(null,U));
var deriv_components = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(u_components) : V.call(null,u_components)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(CV,u_components));
return emmy.calculus.vector_field.procedure__GT_vector_field.cljs$core$IFn$_invoke$arity$2((function emmy$calculus$covariant$covariant_derivative_vector_$_the_derivative(f){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((vector_basis.cljs$core$IFn$_invoke$arity$1 ? vector_basis.cljs$core$IFn$_invoke$arity$1(f) : vector_basis.call(null,f)),deriv_components);
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(V),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(U),null,(1),null))))));
});
});
});
emmy.calculus.covariant.covariant_derivative_form = (function emmy$calculus$covariant$covariant_derivative_form(Cartan){
return (function (V){
return (function (tau){
var k = emmy.calculus.form_field.get_rank(tau);
var nabla_V = emmy.calculus.covariant.covariant_derivative_vector(Cartan)(V);
var op = (function() { 
var G__48929__delegate = function (vectors){
var vectors__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,vectors);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.count(vectors__$1))){
} else {
throw (new Error("Assert failed: (= k (count vectors))"));
}

return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__48740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tau,vectors__$1);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__48740) : V.call(null,G__48740));
})(),(function (){var G__48741 = (function (i){
var xs = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vectors__$1,i,nabla_V);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tau,xs);
});
var G__48742 = (0);
var G__48743 = k;
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$3(G__48741,G__48742,G__48743) : emmy.util.aggregate.generic_sum.call(null,G__48741,G__48742,G__48743));
})());
};
var G__48929 = function (var_args){
var vectors = null;
if (arguments.length > 0) {
var G__48932__i = 0, G__48932__a = new Array(arguments.length -  0);
while (G__48932__i < G__48932__a.length) {G__48932__a[G__48932__i] = arguments[G__48932__i + 0]; ++G__48932__i;}
  vectors = new cljs.core.IndexedSeq(G__48932__a,0,null);
} 
return G__48929__delegate.call(this,vectors);};
G__48929.cljs$lang$maxFixedArity = 0;
G__48929.cljs$lang$applyTo = (function (arglist__48933){
var vectors = cljs.core.seq(arglist__48933);
return G__48929__delegate(vectors);
});
G__48929.cljs$core$IFn$_invoke$arity$variadic = G__48929__delegate;
return G__48929;
})()
;
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(V),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(tau),null,(1),null)))));
return emmy.calculus.form_field.procedure__GT_nform_field.cljs$core$IFn$_invoke$arity$3(op,k,name);
});
});
});
/**
 * NOTE: Returns a derivative with the same argument types as the original input
 *   function.
 */
emmy.calculus.covariant.covariant_derivative_argument_types = (function emmy$calculus$covariant$covariant_derivative_argument_types(Cartan){
var basis = emmy.calculus.covariant.Cartan__GT_basis(Cartan);
var vector_basis = emmy.calculus.basis.basis__GT_vector_basis(basis);
var oneform_basis = emmy.calculus.basis.basis__GT_oneform_basis(basis);
var Cartan_forms = emmy.calculus.covariant.Cartan__GT_forms(Cartan);
return (function (V){
var CV = (Cartan_forms.cljs$core$IFn$_invoke$arity$1 ? Cartan_forms.cljs$core$IFn$_invoke$arity$1(V) : Cartan_forms.call(null,V));
return (function (T){
var arg_types = emmy.calculus.indexed.argument_types(T);
if(cljs.core.every_QMARK_((function (t){
return ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519))));
}),arg_types)){
} else {
throw (new Error("Assert failed: (every? (fn [t] (or (isa? t :emmy.calculus.vector-field/vector-field) (isa? t :emmy.calculus.form-field/oneform-field))) arg-types)"));
}

var lp = (function emmy$calculus$covariant$covariant_derivative_argument_types_$_lp(types,args,targs,factors){
if(cljs.core.empty_QMARK_(types)){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var G__48791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,targs);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__48791) : V.call(null,G__48791));
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_,factors));
} else {
return emmy.calculus.basis.contract((function (e,w){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(types),new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))){
if(emmy.calculus.vector_field.vector_field_QMARK_(cljs.core.first(args))){
} else {
throw (new Error("Assert failed: (vf/vector-field? (first args))"));
}

return emmy$calculus$covariant$covariant_derivative_argument_types_$_lp(cljs.core.rest(types),cljs.core.rest(args),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(targs,e),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(factors,(function (){var G__48796 = cljs.core.first(args);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__48796) : w.call(null,G__48796));
})()));
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(types),new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519))){
if(emmy.calculus.form_field.oneform_field_QMARK_(cljs.core.first(args))){
} else {
throw (new Error("Assert failed: (ff/oneform-field? (first args))"));
}

return emmy$calculus$covariant$covariant_derivative_argument_types_$_lp(cljs.core.rest(types),cljs.core.rest(args),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(targs,w),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(factors,(function (){var fexpr__48797 = cljs.core.first(args);
return (fexpr__48797.cljs$core$IFn$_invoke$arity$1 ? fexpr__48797.cljs$core$IFn$_invoke$arity$1(e) : fexpr__48797.call(null,e));
})()));
} else {
return null;
}
}
}),basis);
}
});
var the_derivative = (function() { 
var emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate = function (args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.count(arg_types))){
} else {
throw (new Error("Assert failed: (= (count args) (count arg-types))"));
}

var argv = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,args);
var VT = lp(arg_types,argv,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
var corrections = (function (){var G__48802 = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,type){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("emmy.calculus.form-field","oneform-field","emmy.calculus.form-field/oneform-field",790058519))){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
var fexpr__48803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,i);
return (fexpr__48803.cljs$core$IFn$_invoke$arity$1 ? fexpr__48803.cljs$core$IFn$_invoke$arity$1(e) : fexpr__48803.call(null,e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),CV),emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,i,w));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0)));
} else {
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("emmy.calculus.vector-field","vector-field","emmy.calculus.vector-field/vector-field",739612763))){
return emmy.generic.negate.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (e){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(T,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,i,e));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vector_basis], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(CV,emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (w){
var G__48805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,i);
return (w.cljs$core$IFn$_invoke$arity$1 ? w.cljs$core$IFn$_invoke$arity$1(G__48805) : w.call(null,G__48805));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([oneform_basis], 0)))));
} else {
return null;
}
}
}),arg_types);
return (emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1 ? emmy.util.aggregate.generic_sum.cljs$core$IFn$_invoke$arity$1(G__48802) : emmy.util.aggregate.generic_sum.call(null,G__48802));
})();
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(VT,corrections);
};
var emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48954__i = 0, G__48954__a = new Array(arguments.length -  0);
while (G__48954__i < G__48954__a.length) {G__48954__a[G__48954__i] = arguments[G__48954__i + 0]; ++G__48954__i;}
  args = new cljs.core.IndexedSeq(G__48954__a,0,null);
} 
return emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate.call(this,args);};
emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative.cljs$lang$maxFixedArity = 0;
emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative.cljs$lang$applyTo = (function (arglist__48955){
var args = cljs.core.seq(arglist__48955);
return emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate(args);
});
emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative.cljs$core$IFn$_invoke$arity$variadic = emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative__delegate;
return emmy$calculus$covariant$covariant_derivative_argument_types_$_the_derivative;
})()
;
return emmy.calculus.indexed.with_argument_types(the_derivative,arg_types);
});
});
});
emmy.calculus.covariant.covariant_derivative_function = (function emmy$calculus$covariant$covariant_derivative_function(Cartan){
return (function (X){
return (function (f){
return (function() { 
var G__48957__delegate = function (args){
var types = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.value.argument_kind,args);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))) && (emmy.calculus.manifold.manifold_point_QMARK_(cljs.core.first(args))))){
var f__$1 = emmy.calculus.indexed.with_argument_types(f,types);
var G__48811 = cljs.core.first(args);
var fexpr__48810 = (X.cljs$core$IFn$_invoke$arity$1 ? X.cljs$core$IFn$_invoke$arity$1(f__$1) : X.call(null,f__$1));
return (fexpr__48810.cljs$core$IFn$_invoke$arity$1 ? fexpr__48810.cljs$core$IFn$_invoke$arity$1(G__48811) : fexpr__48810.call(null,G__48811));
} else {
if(cljs.core.every_QMARK_((function (arg){
return ((emmy.calculus.vector_field.vector_field_QMARK_(arg)) || (emmy.calculus.form_field.oneform_field_QMARK_(arg)));
}),args)){
var f__$1 = emmy.calculus.indexed.with_argument_types(f,types);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__48812 = emmy.calculus.covariant.covariant_derivative_argument_types(Cartan)(X);
return (fexpr__48812.cljs$core$IFn$_invoke$arity$1 ? fexpr__48812.cljs$core$IFn$_invoke$arity$1(f__$1) : fexpr__48812.call(null,f__$1));
})(),args);
} else {
return emmy.util.illegal("Bad function or arguments to covariant derivative");

}
}
};
var G__48957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48963__i = 0, G__48963__a = new Array(arguments.length -  0);
while (G__48963__i < G__48963__a.length) {G__48963__a[G__48963__i] = arguments[G__48963__i + 0]; ++G__48963__i;}
  args = new cljs.core.IndexedSeq(G__48963__a,0,null);
} 
return G__48957__delegate.call(this,args);};
G__48957.cljs$lang$maxFixedArity = 0;
G__48957.cljs$lang$applyTo = (function (arglist__48965){
var args = cljs.core.seq(arglist__48965);
return G__48957__delegate(args);
});
G__48957.cljs$core$IFn$_invoke$arity$variadic = G__48957__delegate;
return G__48957;
})()
;
});
});
});
emmy.calculus.covariant.covariant_derivative_ordinary = (function emmy$calculus$covariant$covariant_derivative_ordinary(Cartan){
if(emmy.calculus.covariant.Cartan_QMARK_(Cartan)){
} else {
throw (new Error("Assert failed: (Cartan? Cartan)"));
}

return (function (X){
var op = (function emmy$calculus$covariant$covariant_derivative_ordinary_$_nabla_X(V){
if(emmy.calculus.vector_field.vector_field_QMARK_(V)){
var fexpr__48821 = emmy.calculus.covariant.covariant_derivative_vector(Cartan)(X);
return (fexpr__48821.cljs$core$IFn$_invoke$arity$1 ? fexpr__48821.cljs$core$IFn$_invoke$arity$1(V) : fexpr__48821.call(null,V));
} else {
if(emmy.calculus.form_field.form_field_QMARK_(V)){
var fexpr__48823 = emmy.calculus.covariant.covariant_derivative_form(Cartan)(X);
return (fexpr__48823.cljs$core$IFn$_invoke$arity$1 ? fexpr__48823.cljs$core$IFn$_invoke$arity$1(V) : fexpr__48823.call(null,V));
} else {
if(emmy.calculus.indexed.has_argument_types_QMARK_(V)){
var fexpr__48827 = emmy.calculus.covariant.covariant_derivative_argument_types(Cartan)(X);
return (fexpr__48827.cljs$core$IFn$_invoke$arity$1 ? fexpr__48827.cljs$core$IFn$_invoke$arity$1(V) : fexpr__48827.call(null,V));
} else {
if(emmy.function$.function_QMARK_(V)){
var fexpr__48828 = emmy.calculus.covariant.covariant_derivative_function(Cartan)(X);
return (fexpr__48828.cljs$core$IFn$_invoke$arity$1 ? fexpr__48828.cljs$core$IFn$_invoke$arity$1(V) : fexpr__48828.call(null,V));
} else {
if(emmy.structure.structure_QMARK_(V)){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic(emmy$calculus$covariant$covariant_derivative_ordinary_$_nabla_X,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([V], 0));
} else {
return emmy.util.unsupported((""+"Can't do this kind of covariant derivative yet "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(X))+" @ "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(V))));

}
}
}
}
}
});
var name = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),null,(1),null)),(new cljs.core.List(null,emmy.generic.freeze.cljs$core$IFn$_invoke$arity$1(X),null,(1),null)))));
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(op,name);
});
});
emmy.calculus.covariant.covariant_derivative = (function emmy$calculus$covariant$covariant_derivative(var_args){
var G__48838 = arguments.length;
switch (G__48838) {
case 1:
return emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1 = (function (Cartan){
return emmy.calculus.covariant.covariant_derivative_ordinary(Cartan);
}));

(emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2 = (function (Cartan,map){
var mapped = emmy.calculus.covariant.Cartan__GT_Cartan_over_map(Cartan,map);
return emmy.calculus.covariant.covariant_derivative_ordinary(emmy.calculus.covariant.make_Cartan(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.calculus.covariant.Cartan__GT_forms(mapped),(emmy.calculus.map.differential.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.map.differential.cljs$core$IFn$_invoke$arity$1(map) : emmy.calculus.map.differential.call(null,map))], 0)),emmy.calculus.covariant.Cartan__GT_basis(mapped)));
}));

(emmy.calculus.covariant.covariant_derivative.cljs$lang$maxFixedArity = 2);

emmy.calculus.covariant.covariant_differential = (function emmy$calculus$covariant$covariant_differential(Cartan){
return (function (V){
return (function (X){
var fexpr__48843 = emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$1(Cartan)(X);
return (fexpr__48843.cljs$core$IFn$_invoke$arity$1 ? fexpr__48843.cljs$core$IFn$_invoke$arity$1(V) : fexpr__48843.call(null,V));
});
});
});
emmy.calculus.covariant.geodesic_equation = (function emmy$calculus$covariant$geodesic_equation(source_coordsys,target_coordsys,Cartan_on_target){
return (function (gamma){
return (function (source_m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(source_coordsys)))){
} else {
throw (new Error("Assert failed: (= 1 (:dimension (manifold/manifold source-coordsys)))"));
}

var e = emmy.calculus.vector_field.coordinate_system__GT_vector_basis(source_coordsys);
var fexpr__48856 = (function (){var G__48861 = emmy.calculus.manifold.chart(target_coordsys);
var fexpr__48860 = (function (){var G__48863 = (function (){var fexpr__48864 = (emmy.calculus.map.differential.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.map.differential.cljs$core$IFn$_invoke$arity$1(gamma) : emmy.calculus.map.differential.call(null,gamma));
return (fexpr__48864.cljs$core$IFn$_invoke$arity$1 ? fexpr__48864.cljs$core$IFn$_invoke$arity$1(e) : fexpr__48864.call(null,e));
})();
var fexpr__48862 = emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2(Cartan_on_target,gamma)(e);
return (fexpr__48862.cljs$core$IFn$_invoke$arity$1 ? fexpr__48862.cljs$core$IFn$_invoke$arity$1(G__48863) : fexpr__48862.call(null,G__48863));
})();
return (fexpr__48860.cljs$core$IFn$_invoke$arity$1 ? fexpr__48860.cljs$core$IFn$_invoke$arity$1(G__48861) : fexpr__48860.call(null,G__48861));
})();
return (fexpr__48856.cljs$core$IFn$_invoke$arity$1 ? fexpr__48856.cljs$core$IFn$_invoke$arity$1(source_m) : fexpr__48856.call(null,source_m));
});
});
});
emmy.calculus.covariant.parallel_transport_equation = (function emmy$calculus$covariant$parallel_transport_equation(source_coordsys,target_coordsys,Cartan_on_target){
return (function (gamma){
return (function (vector_over_gamma){
return (function (source_m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(emmy.calculus.manifold.manifold(source_coordsys)))){
} else {
throw (new Error("Assert failed: (= 1 (:dimension (manifold/manifold source-coordsys)))"));
}

var e = emmy.calculus.vector_field.coordinate_system__GT_vector_basis(source_coordsys);
var fexpr__48877 = (function (){var G__48881 = emmy.calculus.manifold.chart(target_coordsys);
var fexpr__48880 = (function (){var fexpr__48882 = emmy.calculus.covariant.covariant_derivative.cljs$core$IFn$_invoke$arity$2(Cartan_on_target,gamma)(e);
return (fexpr__48882.cljs$core$IFn$_invoke$arity$1 ? fexpr__48882.cljs$core$IFn$_invoke$arity$1(vector_over_gamma) : fexpr__48882.call(null,vector_over_gamma));
})();
return (fexpr__48880.cljs$core$IFn$_invoke$arity$1 ? fexpr__48880.cljs$core$IFn$_invoke$arity$1(G__48881) : fexpr__48880.call(null,G__48881));
})();
return (fexpr__48877.cljs$core$IFn$_invoke$arity$1 ? fexpr__48877.cljs$core$IFn$_invoke$arity$1(source_m) : fexpr__48877.call(null,source_m));
});
});
});
});

//# sourceMappingURL=emmy.calculus.covariant.js.map
