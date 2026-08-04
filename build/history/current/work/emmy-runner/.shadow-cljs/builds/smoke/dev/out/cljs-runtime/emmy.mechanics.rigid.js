goog.provide('emmy.mechanics.rigid');
emmy.mechanics.rigid.three_vector_components__GT_antisymmetric = (function emmy$mechanics$rigid$three_vector_components__GT_antisymmetric(p__59273){
var vec__59277 = p__59273;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59277,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59277,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59277,(2),null);
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),emmy.generic._.cljs$core$IFn$_invoke$arity$1(z),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,(0),emmy.generic._.cljs$core$IFn$_invoke$arity$1(x)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic._.cljs$core$IFn$_invoke$arity$1(y),x,(0)], null)], 0));
});
/**
 * Given an antisymmetric matrix `a` of dimension 3, returns a column vector of
 *   its positive components.
 */
emmy.mechanics.rigid.antisymmetric__GT_column_matrix = (function emmy$mechanics$rigid$antisymmetric__GT_column_matrix(a){
if(cljs.core.truth_(emmy.matrix.antisymmetric_QMARK_(a))){
} else {
throw (new Error("Assert failed: (matrix/antisymmetric? a)"));
}

return emmy.matrix.column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))], 0));
});
emmy.mechanics.rigid.M_of_q__GT_omega_of_t = (function emmy$mechanics$rigid$M_of_q__GT_omega_of_t(M_of_q){
return (function (q){
var M_of_t = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([M_of_q,q], 0));
return (function (t){
return emmy.mechanics.rigid.antisymmetric__GT_column_matrix(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59281 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(M_of_t) : emmy.calculus.derivative.D.call(null,M_of_t));
return (fexpr__59281.cljs$core$IFn$_invoke$arity$1 ? fexpr__59281.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59281.call(null,t));
})(),emmy.matrix.transpose((M_of_t.cljs$core$IFn$_invoke$arity$1 ? M_of_t.cljs$core$IFn$_invoke$arity$1(t) : M_of_t.call(null,t)))));
});
});
});
emmy.mechanics.rigid.M_of_q__GT_omega_body_of_t = (function emmy$mechanics$rigid$M_of_q__GT_omega_body_of_t(M_of_q){
return (function (q){
return (function (t){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.transpose((function (){var G__59283 = (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t));
return (M_of_q.cljs$core$IFn$_invoke$arity$1 ? M_of_q.cljs$core$IFn$_invoke$arity$1(G__59283) : M_of_q.call(null,G__59283));
})()),(function (){var fexpr__59286 = emmy.mechanics.rigid.M_of_q__GT_omega_of_t(M_of_q)(q);
return (fexpr__59286.cljs$core$IFn$_invoke$arity$1 ? fexpr__59286.cljs$core$IFn$_invoke$arity$1(t) : fexpr__59286.call(null,t));
})());
});
});
});
emmy.mechanics.rigid.M__GT_omega = (function emmy$mechanics$rigid$M__GT_omega(M_of_q){
return emmy.mechanics.lagrange.Gamma_bar(emmy.mechanics.rigid.M_of_q__GT_omega_of_t(M_of_q));
});
emmy.mechanics.rigid.M__GT_omega_body = (function emmy$mechanics$rigid$M__GT_omega_body(M_of_q){
return emmy.mechanics.lagrange.Gamma_bar(emmy.mechanics.rigid.M_of_q__GT_omega_body_of_t(M_of_q));
});
emmy.mechanics.rigid.T_body = (function emmy$mechanics$rigid$T_body(A,B,C){
return (function (p__59290){
var vec__59291 = p__59290;
var w0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59291,(0),null);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59291,(1),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59291,(2),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,emmy.generic.square.cljs$core$IFn$_invoke$arity$1(w0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(B,emmy.generic.square.cljs$core$IFn$_invoke$arity$1(w1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(C,emmy.generic.square.cljs$core$IFn$_invoke$arity$1(w2))], 0)));
});
});
emmy.mechanics.rigid.L_body = (function emmy$mechanics$rigid$L_body(A,B,C){
return (function (p__59294){
var vec__59295 = p__59294;
var w0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59295,(0),null);
var w1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59295,(1),null);
var w2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59295,(2),null);
return emmy.structure.down.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,w0),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(B,w1),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(C,w2)], 0));
});
});
emmy.mechanics.rigid.L_space = (function emmy$mechanics$rigid$L_space(M){
return (function (A,B,C){
return (function (omega_body){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.rigid.L_body(A,B,C)(omega_body),emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(M));
});
});
});
emmy.mechanics.rigid.Euler__GT_omega = (function emmy$mechanics$rigid$Euler__GT_omega(angles_path){
return (function (t){
var M_on_path = (function emmy$mechanics$rigid$Euler__GT_omega_$_M_on_path(t__$1){
return emmy.mechanics.rotation.Euler__GT_M((angles_path.cljs$core$IFn$_invoke$arity$1 ? angles_path.cljs$core$IFn$_invoke$arity$1(t__$1) : angles_path.call(null,t__$1)));
});
var w_cross = (function emmy$mechanics$rigid$Euler__GT_omega_$_w_cross(t__$1){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59313 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(M_on_path) : emmy.calculus.derivative.D.call(null,M_on_path));
return (fexpr__59313.cljs$core$IFn$_invoke$arity$1 ? fexpr__59313.cljs$core$IFn$_invoke$arity$1(t__$1) : fexpr__59313.call(null,t__$1));
})(),emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(M_on_path(t__$1)));
});
return emmy.mechanics.rigid.antisymmetric__GT_column_matrix(w_cross(t));
});
});
emmy.mechanics.rigid.Euler__GT_omega_body = (function emmy$mechanics$rigid$Euler__GT_omega_body(angles_path){
return (function (t){
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(emmy.mechanics.rotation.Euler__GT_M((angles_path.cljs$core$IFn$_invoke$arity$1 ? angles_path.cljs$core$IFn$_invoke$arity$1(t) : angles_path.call(null,t)))),emmy.mechanics.rigid.Euler__GT_omega(angles_path)(t));
});
});
/**
 * Although this implementation appears to summarize `(M->omega-body r/Euler->M)`,
 *   it is actually essential to prevent intermediate expression explosion.
 */
emmy.mechanics.rigid.Euler_state__GT_omega_body = (function emmy$mechanics$rigid$Euler_state__GT_omega_body(p__59320){
var vec__59324 = p__59320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59324,(0),null);
var vec__59327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59324,(1),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59327,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59327,(1),null);
var psi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59327,(2),null);
var vec__59330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59324,(2),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59330,(0),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59330,(1),null);
var psidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59330,(2),null);
var omega_a = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(psi),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([phidot], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(psi),thetadot));
var omega_b = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(psi),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([phidot], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(psi),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thetadot], 0)));
var omega_c = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta),phidot),psidot);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([omega_a,omega_b,omega_c], 0));
});
emmy.mechanics.rigid.T_body_Euler = (function emmy$mechanics$rigid$T_body_Euler(A,B,C){
return (function (local){
return emmy.mechanics.rigid.T_body(A,B,C)(emmy.mechanics.rigid.Euler_state__GT_omega_body(local));
});
});
/**
 * Alias for [[T-body-Euler]].
 */
emmy.mechanics.rigid.T_rigid_body = emmy.mechanics.rigid.T_body_Euler;
emmy.mechanics.rigid.L_body_Euler = (function emmy$mechanics$rigid$L_body_Euler(A,B,C){
return (function (local){
return emmy.mechanics.rigid.L_body(A,B,C)(emmy.mechanics.rigid.Euler_state__GT_omega_body(local));
});
});
/**
 * Alias for [[L-body-Euler]].
 */
emmy.mechanics.rigid.Euler_state__GT_L_body = emmy.mechanics.rigid.L_body_Euler;
emmy.mechanics.rigid.L_space_Euler = (function emmy$mechanics$rigid$L_space_Euler(A,B,C){
return (function (local){
var angles = emmy.mechanics.lagrange.coordinate(local);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.rigid.L_body_Euler(A,B,C)(local),emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(emmy.mechanics.rotation.Euler__GT_M(angles)));
});
});
/**
 * Alias for [[L-space-Euler]].
 */
emmy.mechanics.rigid.Euler_state__GT_L_space = emmy.mechanics.rigid.L_space_Euler;
emmy.mechanics.rigid.rigid_sysder = (function emmy$mechanics$rigid$rigid_sysder(A,B,C){
return emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1((emmy.mechanics.rigid.T_rigid_body.cljs$core$IFn$_invoke$arity$3 ? emmy.mechanics.rigid.T_rigid_body.cljs$core$IFn$_invoke$arity$3(A,B,C) : emmy.mechanics.rigid.T_rigid_body.call(null,A,B,C)));
});
emmy.mechanics.rigid.quaternion_state__GT_omega_body = (function emmy$mechanics$rigid$quaternion_state__GT_omega_body(p__59360){
var vec__59365 = p__59360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59365,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59365,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59365,(2),null);
var two_q_norm = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),q),emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(q,q));
var omega_STAR__STAR_a = emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(two_q_norm,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.I_matrix,qdot));
var omega_STAR__STAR_b = emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(two_q_norm,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.J_matrix,qdot));
var omega_STAR__STAR_c = emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(two_q_norm,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.quaternion.K_matrix,qdot));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([omega_STAR__STAR_a,omega_STAR__STAR_b,omega_STAR__STAR_c], 0));
});
var q_COLON_a_59437 = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1),(0)], null)], 0));
var q_COLON_b_59438 = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0),(0)], null)], 0));
var q_COLON_c_59439 = emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0),(0)], null)], 0));
emmy.mechanics.rigid.quaternion_state__GT_omega_space = (function emmy$mechanics$rigid$quaternion_state__GT_omega_space(p__59379){
var vec__59380 = p__59379;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59380,(2),null);
var Q = emmy.matrix.up__GT_column_matrix(q);
var QdotT = emmy.matrix.row_STAR_(qdot);
var two_m_STAR__STAR_2_inv = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((-2),emmy.generic.dot_product.cljs$core$IFn$_invoke$arity$2(q,q));
var omega_STAR__STAR_x = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(two_m_STAR__STAR_2_inv,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(QdotT,q_COLON_a_59437,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Q], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var omega_STAR__STAR_y = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(two_m_STAR__STAR_2_inv,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(QdotT,q_COLON_b_59438,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Q], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var omega_STAR__STAR_z = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(two_m_STAR__STAR_2_inv,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(QdotT,q_COLON_c_59439,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Q], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([omega_STAR__STAR_x,omega_STAR__STAR_y,omega_STAR__STAR_z], 0));
});
emmy.mechanics.rigid.qw_state__GT_L_body = (function emmy$mechanics$rigid$qw_state__GT_L_body(A,B,C){
return (function (p__59390){
var vec__59392 = p__59390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(1),null);
var omega = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59392,(2),null);
return emmy.mechanics.rigid.L_body(A,B,C)(omega);
});
});
emmy.mechanics.rigid.qw_state__GT_L_space = (function emmy$mechanics$rigid$qw_state__GT_L_space(A,B,C){
var state__GT_body = emmy.mechanics.rigid.qw_state__GT_L_body(A,B,C);
return (function (p__59401){
var vec__59402 = p__59401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59402,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59402,(1),null);
var qw_state = vec__59402;
var Lbody = state__GT_body(qw_state);
var M = emmy.quaternion.__GT_rotation_matrix(emmy.quaternion.make.cljs$core$IFn$_invoke$arity$1(q));
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(Lbody,emmy.generic.transpose.cljs$core$IFn$_invoke$arity$1(M));
});
});
emmy.mechanics.rigid.T_quaternion_state = (function emmy$mechanics$rigid$T_quaternion_state(A,B,C){
return (function (p__59406){
var vec__59407 = p__59406;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59407,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59407,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59407,(2),null);
var Q = emmy.matrix.up__GT_column_matrix(q);
var Qdot = emmy.matrix.up__GT_column_matrix(qdot);
var m_STAR__STAR_2_inv = emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.matrix.transpose(Q),Q),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var x = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m_STAR__STAR_2_inv,emmy.quaternion.I_matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Qdot], 0));
var y = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m_STAR__STAR_2_inv,emmy.quaternion.J_matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Qdot], 0));
var z = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m_STAR__STAR_2_inv,emmy.quaternion.K_matrix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Qdot], 0));
var M = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(Q,emmy.matrix.transpose(Q));
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((2),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(A,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.matrix.transpose(x),M,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(B,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.matrix.transpose(y),M,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(C,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.matrix.transpose(z),M,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))], 0)));
});
});

//# sourceMappingURL=emmy.mechanics.rigid.js.map
