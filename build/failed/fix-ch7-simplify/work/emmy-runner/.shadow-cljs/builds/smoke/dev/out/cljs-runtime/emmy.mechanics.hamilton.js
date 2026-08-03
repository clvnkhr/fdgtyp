goog.provide('emmy.mechanics.hamilton');
/**
 * Returns function signature for a Hamiltonian with n degrees of freedom (or an
 *   unrestricted number if n is not given).
 * 
 *   Useful for constructing Hamiltonian literal functions.
 */
emmy.mechanics.hamilton.Hamiltonian = (function emmy$mechanics$hamilton$Hamiltonian(n){
var r__36219__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"DOWN*","DOWN*",1300864675,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null))], null)),new cljs.core.Symbol(null,"Real","Real",374292741,null)], null));
var or__5162__auto__ = r__36219__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36219__auto__);
}
});
/**
 * Given a time `t`, coordinate tuple (or scalar) `q` and momentum tuple (or
 *   scalar) `p`, returns a 'Hamiltonian state tuple', i.e., the state expected by a
 *   Hamiltonian.
 */
emmy.mechanics.hamilton.__GT_H_state = (function emmy$mechanics$hamilton$__GT_H_state(t,q,p){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,p], 0));
});
/**
 * Returns true if the supplied state is
 * 
 *   - of type [[emmy.structure/up]]
 * 
 *   - contains three elements of `time`, `coordinate` and `momentum` of either of
 *  the following type shapes:
 * 
 *   ```
 *   (up <number> <number> <number>)
 *   (up <number> (up <number>*) (down <number>*))
 *   ```
 * 
 *   If structural, the dimension of the coordinate and momentum tuples must match.
 */
emmy.mechanics.hamilton.H_state_QMARK_ = (function emmy$mechanics$hamilton$H_state_QMARK_(s){
var and__5160__auto__ = emmy.structure.up_QMARK_(s);
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(s),(3));
if(and__5160__auto____$1){
var vec__59178 = s;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59178,(2),null);
return ((emmy.value.scalar_QMARK_(t)) && (((((emmy.value.scalar_QMARK_(q)) && (emmy.value.scalar_QMARK_(v)))) || (((emmy.structure.up_QMARK_(q)) && (((emmy.structure.down_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.structure.dimension(q),emmy.structure.dimension(v))))))))));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
});
/**
 * Returns true if `s` is compatible for contraction with a proper H-state, false
 *   otherwise.
 */
emmy.mechanics.hamilton.compatible_H_state_QMARK_ = (function emmy$mechanics$hamilton$compatible_H_state_QMARK_(s){
return emmy.mechanics.hamilton.H_state_QMARK_(emmy.structure.transpose(s));
});
/**
 * Returns the momentum element of a local Hamiltonian state tuple (by convention,
 *   the third element).
 */
emmy.mechanics.hamilton.momentum = (function emmy$mechanics$hamilton$momentum(H_state){
if(emmy.structure.up_QMARK_(H_state)){
} else {
throw (new Error("Assert failed: (s/up? H-state)"));
}

if((cljs.core.count(H_state) > (2))){
} else {
throw (new Error("Assert failed: (> (count H-state) 2)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(H_state,(2));
});
/**
 * Alias for [[momentum]].
 */
emmy.mechanics.hamilton.state__GT_p = emmy.mechanics.hamilton.momentum;
/**
 * Alias for [[momentum]].
 */
emmy.mechanics.hamilton.momenta = emmy.mechanics.hamilton.momentum;
/**
 * Alias for [[momentum]].
 */
emmy.mechanics.hamilton.P = emmy.mechanics.hamilton.momentum;
/**
 * Given a hamiltonian state, returns a [[emmy.structure/up]] containing the
 *   coordinate and momentum components. 
 */
emmy.mechanics.hamilton.state__GT_qp = (function emmy$mechanics$hamilton$state__GT_qp(s){
if(emmy.mechanics.hamilton.H_state_QMARK_(s)){
} else {
throw (new Error("Assert failed: (H-state? s)"));
}

return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.lagrange.coordinate(s),emmy.mechanics.hamilton.momentum(s)], 0));
});
emmy.mechanics.hamilton.qp__GT_H_state_path = (function emmy$mechanics$hamilton$qp__GT_H_state_path(q,p){
return (function (t){
return emmy.mechanics.hamilton.__GT_H_state(t,(q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t)),(p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(t) : p.call(null,t)));
});
});
emmy.mechanics.hamilton.literal_Hamiltonian_state = (function emmy$mechanics$hamilton$literal_Hamiltonian_state(n_dof){
return emmy.mechanics.hamilton.__GT_H_state(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),emmy.structure.literal_up(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null)),n_dof),emmy.structure.literal_down(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"p","p",1791580836,null)),n_dof));
});
emmy.mechanics.hamilton.L_state__GT_H_state = (function emmy$mechanics$hamilton$L_state__GT_H_state(L){
return (function (Ls){
return emmy.mechanics.hamilton.__GT_H_state(emmy.mechanics.lagrange.time(Ls),emmy.mechanics.lagrange.coordinate(Ls),(function (){var fexpr__59198 = (function (){var fexpr__59199 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59199.cljs$core$IFn$_invoke$arity$1 ? fexpr__59199.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59199.call(null,L));
})();
return (fexpr__59198.cljs$core$IFn$_invoke$arity$1 ? fexpr__59198.cljs$core$IFn$_invoke$arity$1(Ls) : fexpr__59198.call(null,Ls));
})());
});
});
emmy.mechanics.hamilton.H_state__GT_L_state = (function emmy$mechanics$hamilton$H_state__GT_L_state(H){
return (function (Hs){
return emmy.mechanics.lagrange.__GT_L_state(emmy.mechanics.lagrange.time(Hs),emmy.mechanics.lagrange.coordinate(Hs),(function (){var fexpr__59205 = (function (){var fexpr__59207 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59207.cljs$core$IFn$_invoke$arity$1 ? fexpr__59207.cljs$core$IFn$_invoke$arity$1(H) : fexpr__59207.call(null,H));
})();
return (fexpr__59205.cljs$core$IFn$_invoke$arity$1 ? fexpr__59205.cljs$core$IFn$_invoke$arity$1(Hs) : fexpr__59205.call(null,Hs));
})());
});
});
emmy.mechanics.hamilton.H_state__GT_matrix = (function emmy$mechanics$hamilton$H_state__GT_matrix(s){
return emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(emmy.structure.compatible_shape(s),s,(1));
});
emmy.mechanics.hamilton.matrix__GT_H_state = (function emmy$mechanics$hamilton$matrix__GT_H_state(m,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.num_cols(m),(1))){
} else {
throw (new Error("Assert failed: (= (matrix/num-cols m) 1)"));
}

if(cljs.core.odd_QMARK_(emmy.matrix.num_rows(m))){
} else {
throw (new Error("Assert failed: (odd? (matrix/num-rows m))"));
}

if((emmy.matrix.num_rows(m) > (2))){
} else {
throw (new Error("Assert failed: (> (matrix/num-rows m) 2)"));
}

return emmy.matrix.m__GT_s(emmy.structure.compatible_shape(s),m,(1));
});
emmy.mechanics.hamilton.make_Hamiltonian = (function emmy$mechanics$hamilton$make_Hamiltonian(kinetic_energy,potential_energy){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(kinetic_energy,potential_energy);
});
emmy.mechanics.hamilton.Hamiltonian__GT_state_derivative = (function emmy$mechanics$hamilton$Hamiltonian__GT_state_derivative(H){
return (function (H_state){
return emmy.mechanics.hamilton.__GT_H_state((1),(function (){var fexpr__59218 = (function (){var fexpr__59219 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59219.cljs$core$IFn$_invoke$arity$1 ? fexpr__59219.cljs$core$IFn$_invoke$arity$1(H) : fexpr__59219.call(null,H));
})();
return (fexpr__59218.cljs$core$IFn$_invoke$arity$1 ? fexpr__59218.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__59218.call(null,H_state));
})(),emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59221 = (function (){var fexpr__59222 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59222.cljs$core$IFn$_invoke$arity$1 ? fexpr__59222.cljs$core$IFn$_invoke$arity$1(H) : fexpr__59222.call(null,H));
})();
return (fexpr__59221.cljs$core$IFn$_invoke$arity$1 ? fexpr__59221.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__59221.call(null,H_state));
})()));
});
});
/**
 * Alias for [[Hamiltonian->state-derivative]], for compatibility with
 *   1st edition of SICM.
 */
emmy.mechanics.hamilton.phase_space_derivative = emmy.mechanics.hamilton.Hamiltonian__GT_state_derivative;
emmy.mechanics.hamilton.Hamilton_equations = (function emmy$mechanics$hamilton$Hamilton_equations(Hamiltonian){
return (function (q,p){
var H_state_path = emmy.mechanics.hamilton.qp__GT_H_state_path(q,p);
var dH = emmy.mechanics.hamilton.Hamiltonian__GT_state_derivative(Hamiltonian);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(H_state_path) : emmy.calculus.derivative.D.call(null,H_state_path)),emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dH,H_state_path], 0)));
});
});
emmy.mechanics.hamilton.D_phase_space = (function emmy$mechanics$hamilton$D_phase_space(H){
return (function (s){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(function (){var fexpr__59225 = (function (){var fexpr__59226 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59226.cljs$core$IFn$_invoke$arity$1 ? fexpr__59226.cljs$core$IFn$_invoke$arity$1(H) : fexpr__59226.call(null,H));
})();
return (fexpr__59225.cljs$core$IFn$_invoke$arity$1 ? fexpr__59225.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59225.call(null,s));
})(),emmy.generic._.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__59228 = (function (){var fexpr__59229 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59229.cljs$core$IFn$_invoke$arity$1 ? fexpr__59229.cljs$core$IFn$_invoke$arity$1(H) : fexpr__59229.call(null,H));
})();
return (fexpr__59228.cljs$core$IFn$_invoke$arity$1 ? fexpr__59228.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59228.call(null,s));
})())], 0));
});
});
emmy.mechanics.hamilton.H_rectangular = (function emmy$mechanics$hamilton$H_rectangular(m,V){
return (function (p__59231){
var vec__59232 = p__59231;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59232,(2),null);
return emmy.mechanics.hamilton.make_Hamiltonian(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(p),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(V,q));
});
});
emmy.mechanics.hamilton.H_central = (function emmy$mechanics$hamilton$H_central(m,V){
return (function (p__59244){
var vec__59245 = p__59244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59245,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59245,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59245,(2),null);
return emmy.mechanics.hamilton.make_Hamiltonian(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(p),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),(function (){var G__59248 = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(q);
return (V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(G__59248) : V.call(null,G__59248));
})());
});
});
emmy.mechanics.hamilton.H_central_polar = (function emmy$mechanics$hamilton$H_central_polar(m,V){
return (function (p__59250){
var vec__59252 = p__59250;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59252,(0),null);
var vec__59255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59252,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59255,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59255,(1),null);
var vec__59258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59252,(2),null);
var p_r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(0),null);
var p_phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(1),null);
return emmy.mechanics.hamilton.make_Hamiltonian(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(p_r),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p_phi,r))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),(V.cljs$core$IFn$_invoke$arity$1 ? V.cljs$core$IFn$_invoke$arity$1(r) : V.call(null,r)));
});
});
emmy.mechanics.hamilton.H_harmonic = (function emmy$mechanics$hamilton$H_harmonic(m,k){
return (function (p__59261){
var vec__59262 = p__59261;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59262,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59262,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59262,(2),null);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(p),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),m)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(q)], 0)));
});
});
/**
 * If true, the state passed to the fn returned by [[Legendre-transform]] is
 *   checked for correctness. If `false` errors may occur. See the code body for
 *   more detail.
 * 
 *   Defaults to `false`.
 */
emmy.mechanics.hamilton._STAR_validate_Legendre_transform_QMARK__STAR_ = false;
/**
 * Note from GJS: This ugly version tests for correctness of the result.
 */
emmy.mechanics.hamilton.Legendre_transform_procedure = (function emmy$mechanics$hamilton$Legendre_transform_procedure(F){
var w_of_v = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : emmy.calculus.derivative.D.call(null,F));
var Dw_of_v = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(w_of_v) : emmy.calculus.derivative.D.call(null,w_of_v));
var putative_G = (function emmy$mechanics$hamilton$Legendre_transform_procedure_$_putative_G(w){
var z = emmy.structure.compatible_zero(w);
var M = (Dw_of_v.cljs$core$IFn$_invoke$arity$1 ? Dw_of_v.cljs$core$IFn$_invoke$arity$1(z) : Dw_of_v.call(null,z));
var b = (w_of_v.cljs$core$IFn$_invoke$arity$1 ? w_of_v.cljs$core$IFn$_invoke$arity$1(z) : w_of_v.call(null,z));
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.mechanics.hamilton._STAR_validate_Legendre_transform_QMARK__STAR_;
if(cljs.core.truth_(and__5160__auto__)){
return emmy.generic.zero_QMARK_.cljs$core$IFn$_invoke$arity$1(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.generic.determinant.cljs$core$IFn$_invoke$arity$1(M)));
} else {
return and__5160__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Legendre Transform Failure: determinant = 0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),F,new cljs.core.Keyword(null,"w","w",354169001),w], null));
} else {
var v = emmy.generic.solve_linear_left(M,emmy.generic._.cljs$core$IFn$_invoke$arity$2(w,b));
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(w,v),(F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(v) : F.call(null,v)));
}
});
var Dpg = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(putative_G) : emmy.calculus.derivative.D.call(null,putative_G));
return (function emmy$mechanics$hamilton$Legendre_transform_procedure_$_G(w){
if(cljs.core.truth_((function (){var and__5160__auto__ = emmy.mechanics.hamilton._STAR_validate_Legendre_transform_QMARK__STAR_;
if(cljs.core.truth_(and__5160__auto__)){
var thing = emmy.structure.typical_object(w);
return cljs.core.not(emmy.value._EQ_.cljs$core$IFn$_invoke$arity$2(thing,emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1((function (){var G__59271 = (Dpg.cljs$core$IFn$_invoke$arity$1 ? Dpg.cljs$core$IFn$_invoke$arity$1(thing) : Dpg.call(null,thing));
return (w_of_v.cljs$core$IFn$_invoke$arity$1 ? w_of_v.cljs$core$IFn$_invoke$arity$1(G__59271) : w_of_v.call(null,G__59271));
})())));
} else {
return and__5160__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Legendre Transform Failure: not quadratic",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"F","F",-1115543258),F,new cljs.core.Keyword(null,"w","w",354169001),w], null));
} else {
return putative_G(w);
}
});
});
emmy.mechanics.hamilton.Legendre_transform = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.Legendre_transform_procedure,new cljs.core.Symbol(null,"Legendre-transform","Legendre-transform",77490623,null));
emmy.mechanics.hamilton.Lagrangian__GT_Hamiltonian_procedure = (function emmy$mechanics$hamilton$Lagrangian__GT_Hamiltonian_procedure(Lagrangian){
return (function (p__59278){
var vec__59279 = p__59278;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59279,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59279,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59279,(2),null);
var L = (function (p1__59275_SHARP_){
var G__59286 = emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,q,p1__59275_SHARP_], 0));
return (Lagrangian.cljs$core$IFn$_invoke$arity$1 ? Lagrangian.cljs$core$IFn$_invoke$arity$1(G__59286) : Lagrangian.call(null,G__59286));
});
var fexpr__59287 = (emmy.mechanics.hamilton.Legendre_transform.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.hamilton.Legendre_transform.cljs$core$IFn$_invoke$arity$1(L) : emmy.mechanics.hamilton.Legendre_transform.call(null,L));
return (fexpr__59287.cljs$core$IFn$_invoke$arity$1 ? fexpr__59287.cljs$core$IFn$_invoke$arity$1(p) : fexpr__59287.call(null,p));
});
});
emmy.mechanics.hamilton.Lagrangian__GT_Hamiltonian = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.Lagrangian__GT_Hamiltonian_procedure,new cljs.core.Symbol(null,"Lagrangian->Hamiltonian","Lagrangian->Hamiltonian",570239049,null));
emmy.mechanics.hamilton.Hamiltonian__GT_Lagrangian_procedure = (function emmy$mechanics$hamilton$Hamiltonian__GT_Lagrangian_procedure(Hamiltonian){
return (function (p__59290){
var vec__59292 = p__59290;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59292,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59292,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59292,(2),null);
var H = (function emmy$mechanics$hamilton$Hamiltonian__GT_Lagrangian_procedure_$_H(p){
var G__59307 = emmy.mechanics.hamilton.__GT_H_state(t,q,p);
return (Hamiltonian.cljs$core$IFn$_invoke$arity$1 ? Hamiltonian.cljs$core$IFn$_invoke$arity$1(G__59307) : Hamiltonian.call(null,G__59307));
});
var fexpr__59308 = emmy.mechanics.hamilton.Legendre_transform_procedure(H);
return (fexpr__59308.cljs$core$IFn$_invoke$arity$1 ? fexpr__59308.cljs$core$IFn$_invoke$arity$1(qdot) : fexpr__59308.call(null,qdot));
});
});
emmy.mechanics.hamilton.Hamiltonian__GT_Lagrangian = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.Hamiltonian__GT_Lagrangian_procedure,new cljs.core.Symbol(null,"Hamiltonian->Lagrangian","Hamiltonian->Lagrangian",-1691416956,null));
emmy.mechanics.hamilton.Poisson_bracket = (function emmy$mechanics$hamilton$Poisson_bracket(f,g){
return (function (x){
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var gx = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(x) : g.call(null,x));
if(((emmy.structure.structure_QMARK_(fx)) || (emmy.structure.structure_QMARK_(gx)))){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (af){
return emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function (ag){
var fexpr__59346 = (function (){var G__59347 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.component,af),f);
var G__59348 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.structure.component,ag),g);
return (emmy.mechanics.hamilton.Poisson_bracket.cljs$core$IFn$_invoke$arity$2 ? emmy.mechanics.hamilton.Poisson_bracket.cljs$core$IFn$_invoke$arity$2(G__59347,G__59348) : emmy.mechanics.hamilton.Poisson_bracket.call(null,G__59347,G__59348));
})();
return (fexpr__59346.cljs$core$IFn$_invoke$arity$1 ? fexpr__59346.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59346.call(null,x));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.structure__GT_access_chains(gx)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.structure__GT_access_chains(fx)], 0));
} else {
var fexpr__59366 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59367 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59367.cljs$core$IFn$_invoke$arity$1 ? fexpr__59367.cljs$core$IFn$_invoke$arity$1(f) : fexpr__59367.call(null,f));
})(),(function (){var fexpr__59368 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59368.cljs$core$IFn$_invoke$arity$1 ? fexpr__59368.cljs$core$IFn$_invoke$arity$1(g) : fexpr__59368.call(null,g));
})()),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59369 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59369.cljs$core$IFn$_invoke$arity$1 ? fexpr__59369.cljs$core$IFn$_invoke$arity$1(f) : fexpr__59369.call(null,f));
})(),(function (){var fexpr__59370 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59370.cljs$core$IFn$_invoke$arity$1 ? fexpr__59370.cljs$core$IFn$_invoke$arity$1(g) : fexpr__59370.call(null,g));
})()));
return (fexpr__59366.cljs$core$IFn$_invoke$arity$1 ? fexpr__59366.cljs$core$IFn$_invoke$arity$1(x) : fexpr__59366.call(null,x));
}
});
});
/**
 * p. 428
 * 
 *   We define the Lie derivative of F, as a derivative-like operator, relative to
 *   the given Hamiltonian-like function, H. Generalization and redefinition in
 *   calculus/Lie.scm
 *   
 */
emmy.mechanics.hamilton.Lie_derivative = (function emmy$mechanics$hamilton$Lie_derivative(H){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (F){
return emmy.mechanics.hamilton.Poisson_bracket(F,H);
}),(new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-derivative","Lie-derivative",-641072185,null),(new cljs.core.List(null,H,null,(1),null)),(2),null)));
});
/**
 * the flow derivative generalizes the Lie derivative to allow for time dependent
 *   H and F --- computes the 'time' derivative of F along the flow specified by H
 */
emmy.mechanics.hamilton.flow_derivative = (function emmy$mechanics$hamilton$flow_derivative(H){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (F){
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59371 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59371.cljs$core$IFn$_invoke$arity$1 ? fexpr__59371.cljs$core$IFn$_invoke$arity$1(F) : fexpr__59371.call(null,F));
})(),emmy.mechanics.hamilton.Poisson_bracket(F,H));
}),(new cljs.core.List(null,new cljs.core.Symbol(null,"flow-derivative","flow-derivative",-2031576450,null),(new cljs.core.List(null,H,null,(1),null)),(2),null)));
});
emmy.generic.Lie_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744)], null),(function (f){
return emmy.mechanics.hamilton.Lie_derivative(f);
}));
/**
 * p. 428, the Lie transform is just the time-advance operator using the Lie
 *   derivative (see Hamiltonian.scm).
 */
emmy.mechanics.hamilton.Lie_transform = (function emmy$mechanics$hamilton$Lie_transform(H,t){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(t,emmy.generic.Lie_derivative.cljs$core$IFn$_invoke$arity$1(H))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"Lie-transform","Lie-transform",1913072017,null),null,(1),null)),(new cljs.core.List(null,H,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,t,null,(1),null))], 0)))));
});
/**
 * The generalization of Lie-transform to include time dependence.
 */
emmy.mechanics.hamilton.flow_transform = (function emmy$mechanics$hamilton$flow_transform(H,delta_t){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(delta_t,emmy.mechanics.hamilton.flow_derivative(H))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"flow-transform","flow-transform",1928355832,null),null,(1),null)),(new cljs.core.List(null,H,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,delta_t,null,(1),null))], 0)))));
});
emmy.mechanics.hamilton.standard_map = (function emmy$mechanics$hamilton$standard_map(K){
var pv = emmy.value.principal_value(emmy.value.twopi);
return (function (theta,I,cont,_fail){
var nI = pv((I + (K * Math.sin(theta))));
var G__59380 = pv((theta + nI));
var G__59381 = nI;
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__59380,G__59381) : cont.call(null,G__59380,G__59381));
});
});
emmy.mechanics.hamilton.standard_map_inverse = (function emmy$mechanics$hamilton$standard_map_inverse(K){
var pv = emmy.value.principal_value(emmy.value.twopi);
return (function (theta,I,cont,_fail){
var ntheta = pv((theta - I));
var G__59382 = ntheta;
var G__59383 = pv((I - (K * Math.sin(ntheta))));
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__59382,G__59383) : cont.call(null,G__59382,G__59383));
});
});
/**
 * f is a function of (x y continue fail), which calls continue with the values of
 *   x' y' that follow x y in the mapping.
 * 
 *   Returns a map of the same shape that iterates the iterated map n times before
 *   invoking the continuation, or invokes the fail continuation if the inner map
 *   fails.
 */
emmy.mechanics.hamilton.iterated_map = (function emmy$mechanics$hamilton$iterated_map(f,n){
if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var lulz = cljs.core.constantly(null);
return (function (x,y,continue$,fail){
var x__$1 = x;
var y__$1 = y;
var i = n;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))){
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1) : continue$.call(null,x__$1,y__$1));
} else {
var temp__5823__auto__ = (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(x__$1,y__$1,cljs.core.vector,lulz) : f.call(null,x__$1,y__$1,cljs.core.vector,lulz));
if(cljs.core.truth_(temp__5823__auto__)){
var vec__59384 = temp__5823__auto__;
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59384,(0),null);
var y_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59384,(1),null);
var G__59503 = x_SINGLEQUOTE_;
var G__59504 = y_SINGLEQUOTE_;
var G__59505 = (i - (1));
x__$1 = G__59503;
y__$1 = G__59504;
i = G__59505;
continue;
} else {
return (fail.cljs$core$IFn$_invoke$arity$0 ? fail.cljs$core$IFn$_invoke$arity$0() : fail.call(null));
}
}
break;
}
});
});
/**
 * A transformation of configuration coordinates F to a procedure implementing a
 *   transformation of phase-space coordinates (p. 320)
 */
emmy.mechanics.hamilton.F__GT_CH = (function emmy$mechanics$hamilton$F__GT_CH(F){
return (function (p__59389){
var vec__59390 = p__59389;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59390,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59390,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59390,(2),null);
var H_state = vec__59390;
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(H_state) : F.call(null,H_state)),emmy.generic.solve_linear_right.cljs$core$IFn$_invoke$arity$2(p,(function (){var fexpr__59394 = (function (){var fexpr__59395 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59395.cljs$core$IFn$_invoke$arity$1 ? fexpr__59395.cljs$core$IFn$_invoke$arity$1(F) : fexpr__59395.call(null,F));
})();
return (fexpr__59394.cljs$core$IFn$_invoke$arity$1 ? fexpr__59394.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__59394.call(null,H_state));
})())], 0));
});
});
/**
 * Alias for [[F->CH]].
 */
emmy.mechanics.hamilton.F__GT_CT = emmy.mechanics.hamilton.F__GT_CH;
emmy.mechanics.hamilton.F__GT_K = (function emmy$mechanics$hamilton$F__GT_K(F){
return (function (H_state){
return emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.solve_linear_right.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.momentum(H_state),(function (){var fexpr__59397 = (function (){var fexpr__59398 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59398.cljs$core$IFn$_invoke$arity$1 ? fexpr__59398.cljs$core$IFn$_invoke$arity$1(F) : fexpr__59398.call(null,F));
})();
return (fexpr__59397.cljs$core$IFn$_invoke$arity$1 ? fexpr__59397.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__59397.call(null,H_state));
})()),(function (){var fexpr__59400 = (function (){var fexpr__59401 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59401.cljs$core$IFn$_invoke$arity$1 ? fexpr__59401.cljs$core$IFn$_invoke$arity$1(F) : fexpr__59401.call(null,F));
})();
return (fexpr__59400.cljs$core$IFn$_invoke$arity$1 ? fexpr__59400.cljs$core$IFn$_invoke$arity$1(H_state) : fexpr__59400.call(null,H_state));
})()));
});
});
/**
 * p.324
 */
emmy.mechanics.hamilton.canonical_QMARK_ = (function emmy$mechanics$hamilton$canonical_QMARK_(C,H,Hprime){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.hamilton.Hamiltonian__GT_state_derivative(H),C], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C)),emmy.mechanics.hamilton.Hamiltonian__GT_state_derivative(Hprime)));
});
/**
 * p.324
 */
emmy.mechanics.hamilton.compositional_canonical_QMARK_ = (function emmy$mechanics$hamilton$compositional_canonical_QMARK_(C,H){
return emmy.mechanics.hamilton.canonical_QMARK_(C,H,emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0)));
});
emmy.mechanics.hamilton.J_func = (function emmy$mechanics$hamilton$J_func(DHs){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(DHs,(2)),emmy.generic._.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(DHs,(1)))], 0));
});
emmy.mechanics.hamilton.T_func = (function emmy$mechanics$hamilton$T_func(s){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1((emmy.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1(s) : emmy.mechanics.lagrange.coordinates.call(null,s))),emmy.generic.zero_like.cljs$core$IFn$_invoke$arity$1((emmy.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1(s) : emmy.mechanics.hamilton.momenta.call(null,s)))], 0));
});
emmy.mechanics.hamilton.canonical_H_QMARK_ = (function emmy$mechanics$hamilton$canonical_H_QMARK_(C,H){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.hamilton.D_phase_space(H),C], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C)),emmy.mechanics.hamilton.D_phase_space(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0)))));
});
emmy.mechanics.hamilton.canonical_K_QMARK_ = (function emmy$mechanics$hamilton$canonical_K_QMARK_(C,K){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.hamilton.T_func,C], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.T_func,emmy.mechanics.hamilton.D_phase_space(K))));
});
emmy.mechanics.hamilton.linear_function__GT_multiplier = (function emmy$mechanics$hamilton$linear_function__GT_multiplier(F,argument){
var fexpr__59408 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : emmy.calculus.derivative.D.call(null,F));
return (fexpr__59408.cljs$core$IFn$_invoke$arity$1 ? fexpr__59408.cljs$core$IFn$_invoke$arity$1(argument) : fexpr__59408.call(null,argument));
});
emmy.mechanics.hamilton.Phi = (function emmy$mechanics$hamilton$Phi(A){
return (function (v){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,v);
});
});
emmy.mechanics.hamilton.Phi_STAR_ = (function emmy$mechanics$hamilton$Phi_STAR_(A){
return (function (w){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(w,A);
});
});
/**
 * p.326
 */
emmy.mechanics.hamilton.time_independent_canonical_QMARK_ = (function emmy$mechanics$hamilton$time_independent_canonical_QMARK_(C){
return (function (s){
var s_syms = emmy.structure.compatible_shape(s);
var fexpr__59414 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.J_func,emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.hamilton.Phi((function (){var fexpr__59415 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C));
return (fexpr__59415.cljs$core$IFn$_invoke$arity$1 ? fexpr__59415.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59415.call(null,s));
})()),emmy.mechanics.hamilton.J_func,emmy.mechanics.hamilton.Phi_STAR_((function (){var fexpr__59416 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C));
return (fexpr__59416.cljs$core$IFn$_invoke$arity$1 ? fexpr__59416.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59416.call(null,s));
})())], 0)));
return (fexpr__59414.cljs$core$IFn$_invoke$arity$1 ? fexpr__59414.cljs$core$IFn$_invoke$arity$1(s_syms) : fexpr__59414.call(null,s_syms));
});
});
/**
 * Tests that K yields a canonical transformation if the C is symplectic. (The
 *   qp-canonical? code is really a symplectic test without factoring out the
 *   Hamiltonian.)
 */
emmy.mechanics.hamilton.qp_canonical_QMARK_ = (function emmy$mechanics$hamilton$qp_canonical_QMARK_(C,H){
return (function (s){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.hamilton.J_func((function (){var G__59419 = (C.cljs$core$IFn$_invoke$arity$1 ? C.cljs$core$IFn$_invoke$arity$1(s) : C.call(null,s));
var fexpr__59418 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(H) : emmy.calculus.derivative.D.call(null,H));
return (fexpr__59418.cljs$core$IFn$_invoke$arity$1 ? fexpr__59418.cljs$core$IFn$_invoke$arity$1(G__59419) : fexpr__59418.call(null,G__59419));
})()),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59420 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C));
return (fexpr__59420.cljs$core$IFn$_invoke$arity$1 ? fexpr__59420.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59420.call(null,s));
})(),emmy.mechanics.hamilton.J_func((function (){var fexpr__59422 = (function (){var G__59423 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([H,C], 0));
return (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__59423) : emmy.calculus.derivative.D.call(null,G__59423));
})();
return (fexpr__59422.cljs$core$IFn$_invoke$arity$1 ? fexpr__59422.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59422.call(null,s));
})())));
});
});
/**
 * p.327
 */
emmy.mechanics.hamilton.polar_canonical = (function emmy$mechanics$hamilton$polar_canonical(alpha){
return (function (p__59424){
var vec__59425 = p__59424;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59425,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59425,(1),null);
var I = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59425,(2),null);
var x = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),I),alpha)),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta));
var p_x = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),alpha,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([I], 0))),emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,x,p_x], 0));
});
});
emmy.mechanics.hamilton.polar_canonical_inverse = (function emmy$mechanics$hamilton$polar_canonical_inverse(alpha){
return (function (p__59428){
var vec__59429 = p__59428;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59429,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59429,(1),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59429,(2),null);
var I = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(alpha,emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x)),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(p),alpha)),(2));
var theta = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(x,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),I),alpha))),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(p,emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((2),I,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([alpha], 0)))));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,theta,I], 0));
});
});
emmy.mechanics.hamilton.two_particle_center_of_mass = (function emmy$mechanics$hamilton$two_particle_center_of_mass(m0,m1){
return (function (p__59432){
var vec__59433 = p__59432;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59433,(0),null);
var vec__59436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59433,(1),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59436,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59436,(1),null);
var G__59442 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,x0),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,x1)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
var G__59443 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0);
return (emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2 ? emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2(G__59442,G__59443) : emmy.mechanics.lagrange.coordinate_tuple.call(null,G__59442,G__59443));
});
});
emmy.mechanics.hamilton.two_particle_center_of_mass_canonical = (function emmy$mechanics$hamilton$two_particle_center_of_mass_canonical(m0,m1){
return (function (p__59448){
var vec__59449 = p__59448;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59449,(0),null);
var vec__59452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59449,(1),null);
var x0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59452,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59452,(1),null);
var vec__59455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59449,(2),null);
var p0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59455,(0),null);
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59455,(1),null);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(function (){var G__59458 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,x0),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,x1)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
var G__59459 = emmy.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0);
return (emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2 ? emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$2(G__59458,G__59459) : emmy.mechanics.lagrange.coordinate_tuple.call(null,G__59458,G__59459));
})(),(function (){var G__59460 = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(p0,p1);
var G__59461 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m0,p1),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,p0)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(m0,m1));
return (emmy.mechanics.lagrange.momentum_tuple.cljs$core$IFn$_invoke$arity$2 ? emmy.mechanics.lagrange.momentum_tuple.cljs$core$IFn$_invoke$arity$2(G__59460,G__59461) : emmy.mechanics.lagrange.momentum_tuple.call(null,G__59460,G__59461));
})()], 0));
});
});
emmy.mechanics.hamilton.transpose_function = (function emmy$mechanics$hamilton$transpose_function(A){
return (function (p){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(p,A);
});
});
emmy.mechanics.hamilton.multiplicative_transpose = (function emmy$mechanics$hamilton$multiplicative_transpose(s){
return (function (A){
return emmy.mechanics.hamilton.linear_function__GT_multiplier(emmy.mechanics.hamilton.transpose_function(A),s);
});
});
emmy.mechanics.hamilton.symplectic_two_form = (function emmy$mechanics$hamilton$symplectic_two_form(zeta1,zeta2){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1(zeta2) : emmy.mechanics.hamilton.momenta.call(null,zeta2)),(emmy.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1(zeta1) : emmy.mechanics.lagrange.coordinates.call(null,zeta1))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((emmy.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.hamilton.momenta.cljs$core$IFn$_invoke$arity$1(zeta1) : emmy.mechanics.hamilton.momenta.call(null,zeta1)),(emmy.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.lagrange.coordinates.cljs$core$IFn$_invoke$arity$1(zeta2) : emmy.mechanics.lagrange.coordinates.call(null,zeta2))));
});
emmy.mechanics.hamilton.canonical_transform_QMARK_ = (function emmy$mechanics$hamilton$canonical_transform_QMARK_(C){
return (function (s){
var J = (function (){var G__59472 = emmy.structure.compatible_shape(s);
var fexpr__59471 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(emmy.mechanics.hamilton.J_func) : emmy.calculus.derivative.D.call(null,emmy.mechanics.hamilton.J_func));
return (fexpr__59471.cljs$core$IFn$_invoke$arity$1 ? fexpr__59471.cljs$core$IFn$_invoke$arity$1(G__59472) : fexpr__59471.call(null,G__59472));
})();
var DCs = (function (){var fexpr__59479 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(C) : emmy.calculus.derivative.D.call(null,C));
return (fexpr__59479.cljs$core$IFn$_invoke$arity$1 ? fexpr__59479.cljs$core$IFn$_invoke$arity$1(s) : fexpr__59479.call(null,s));
})();
var DCsT = emmy.matrix.s_COLON_transpose.cljs$core$IFn$_invoke$arity$2(DCs,s);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(J,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(DCs,J,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([DCsT], 0)));
});
});
/**
 * n == degrees of freedom
 */
emmy.mechanics.hamilton.J_matrix = (function emmy$mechanics$hamilton$J_matrix(n){
var twon_PLUS_1 = (emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),n) + (1));
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(twon_PLUS_1,twon_PLUS_1,(function (a,b){
if((a === (0))){
return (0);
} else {
if((b === (0))){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a + n),b)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((b + n),a)){
return (-1);
} else {
return (0);

}
}
}
}
}));
});
/**
 * Symplectic test in terms of matrices
 */
emmy.mechanics.hamilton.symplectic_QMARK_ = (function emmy$mechanics$hamilton$symplectic_QMARK_(C){
return (function (s){
var J = emmy.mechanics.hamilton.J_matrix(emmy.mechanics.lagrange.state__GT_n_dof(s));
var DC = emmy.calculus.derivative.D_as_matrix(C)(s);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(J,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(DC,J,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(DC)], 0)));
});
});
/**
 * p. 334 (used, but not defined there)
 */
emmy.mechanics.hamilton.symplectic_unit = (function emmy$mechanics$hamilton$symplectic_unit(n){
var twoN = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),n);
return emmy.matrix.generate.cljs$core$IFn$_invoke$arity$3(twoN,twoN,(function (a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(a,n),b)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(b,n),a)){
return (-1);
} else {
return (0);

}
}
}));
});
/**
 * p. 334
 */
emmy.mechanics.hamilton.symplectic_matrix_QMARK_ = (function emmy$mechanics$hamilton$symplectic_matrix_QMARK_(M){
var two_n = emmy.matrix.dimension(M);
if(cljs.core.even_QMARK_(two_n)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Wrong type -- symplectic-matrix?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"M","M",-1755742206),M], null));
}

var J = emmy.mechanics.hamilton.symplectic_unit(cljs.core.quot(two_n,(2)));
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(J,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(M,J,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(M)], 0)));
});
emmy.mechanics.hamilton.qp_submatrix = (function emmy$mechanics$hamilton$qp_submatrix(m){
return emmy.matrix.without(m,(0),(0));
});
/**
 * p. 334
 */
emmy.mechanics.hamilton.symplectic_transform_QMARK_ = (function emmy$mechanics$hamilton$symplectic_transform_QMARK_(C){
return (function (s){
return emmy.mechanics.hamilton.symplectic_matrix_QMARK_(emmy.mechanics.hamilton.qp_submatrix(emmy.calculus.derivative.D_as_matrix(C)(s)));
});
});

//# sourceMappingURL=emmy.mechanics.hamilton.js.map
