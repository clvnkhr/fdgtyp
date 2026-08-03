goog.provide('emmy.mechanics.rotation');
emmy.mechanics.rotation.rotate_x_matrix_2 = (function emmy$mechanics$rotation$rotate_x_matrix_2(c,s){
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),c,emmy.generic._.cljs$core$IFn$_invoke$arity$1(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),s,c], null)], 0));
});
/**
 * Produce the matrix of a rotation of α radians about the x axis.
 */
emmy.mechanics.rotation.rotate_x_matrix = (function emmy$mechanics$rotation$rotate_x_matrix(α){
return emmy.mechanics.rotation.rotate_x_matrix_2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
emmy.mechanics.rotation.Rx_matrix = emmy.mechanics.rotation.rotate_x_matrix;
emmy.mechanics.rotation.rotate_y_matrix_2 = (function emmy$mechanics$rotation$rotate_y_matrix_2(c,s){
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(0),s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy.generic._.cljs$core$IFn$_invoke$arity$1(s),(0),c], null)], 0));
});
/**
 * Produce the matrix of a rotation of α radians about the y axis.
 */
emmy.mechanics.rotation.rotate_y_matrix = (function emmy$mechanics$rotation$rotate_y_matrix(α){
return emmy.mechanics.rotation.rotate_y_matrix_2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
emmy.mechanics.rotation.Ry_matrix = emmy.mechanics.rotation.rotate_y_matrix;
/**
 * Produce the matrix of a rotation of α radians about the z axis.
 */
emmy.mechanics.rotation.rotate_z_matrix_2 = (function emmy$mechanics$rotation$rotate_z_matrix_2(c,s){
return emmy.matrix.by_rows.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,emmy.generic._.cljs$core$IFn$_invoke$arity$1(s),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,c,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], 0));
});
/**
 * Produce the matrix of a rotation of α radians about the z axis.
 */
emmy.mechanics.rotation.rotate_z_matrix = (function emmy$mechanics$rotation$rotate_z_matrix(α){
return emmy.mechanics.rotation.rotate_z_matrix_2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
emmy.mechanics.rotation.Rz_matrix = emmy.mechanics.rotation.rotate_z_matrix;
emmy.mechanics.rotation.angle_axis__GT_rotation_matrix = (function emmy$mechanics$rotation$angle_axis__GT_rotation_matrix(theta,p__46971){
var vec__46972 = p__46971;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46972,(2),null);
var colatitude = emmy.generic.acos.cljs$core$IFn$_invoke$arity$1(z);
var longitude = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.mechanics.rotation.rotate_z_matrix(longitude),emmy.mechanics.rotation.rotate_y_matrix(colatitude),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.rotation.rotate_z_matrix(theta),emmy.matrix.transpose(emmy.mechanics.rotation.rotate_y_matrix(colatitude)),emmy.matrix.transpose(emmy.mechanics.rotation.rotate_z_matrix(longitude))], 0));
});
emmy.mechanics.rotation.rotate_x_tuple_2 = (function emmy$mechanics$rotation$rotate_x_tuple_2(c,s){
return emmy.matrix.m__GT_s(emmy.structure.literal_down(new cljs.core.Symbol(null,"l","l",-1258542346,null),(3)),emmy.mechanics.rotation.rotate_x_matrix_2(c,s),emmy.structure.literal_up(new cljs.core.Symbol(null,"r","r",1169147337,null),(3)));
});
emmy.mechanics.rotation.rotate_x_tuple = (function emmy$mechanics$rotation$rotate_x_tuple(α){
return emmy.mechanics.rotation.rotate_x_tuple_2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
emmy.mechanics.rotation.rotate_y_tuple_2 = (function emmy$mechanics$rotation$rotate_y_tuple_2(c,s){
return emmy.matrix.m__GT_s(emmy.structure.literal_down(new cljs.core.Symbol(null,"l","l",-1258542346,null),(3)),emmy.mechanics.rotation.rotate_y_matrix_2(c,s),emmy.structure.literal_up(new cljs.core.Symbol(null,"r","r",1169147337,null),(3)));
});
emmy.mechanics.rotation.rotate_y_tuple = (function emmy$mechanics$rotation$rotate_y_tuple(α){
return emmy.mechanics.rotation.rotate_y_tuple_2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
emmy.mechanics.rotation.rotate_z_tuple_2 = (function emmy$mechanics$rotation$rotate_z_tuple_2(c,s){
return emmy.matrix.m__GT_s(emmy.structure.literal_down(new cljs.core.Symbol(null,"l","l",-1258542346,null),(3)),emmy.mechanics.rotation.rotate_z_matrix_2(c,s),emmy.structure.literal_up(new cljs.core.Symbol(null,"r","r",1169147337,null),(3)));
});
emmy.mechanics.rotation.rotate_z_tuple = (function emmy$mechanics$rotation$rotate_z_tuple(α){
return emmy.mechanics.rotation.rotate_z_tuple_2(emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α),emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α));
});
/**
 * Returns a function which rotates a vector α radians about the x axis.
 */
emmy.mechanics.rotation.Rx = (function emmy$mechanics$rotation$Rx(α){
return (function (p__46981){
var vec__46982 = p__46981;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(2),null);
var c = emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α);
var s = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,y),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,z)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,y),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,z))], 0));
});
});
/**
 * Returns a function which rotates a vector α radians about the y axis.
 */
emmy.mechanics.rotation.Ry = (function emmy$mechanics$rotation$Ry(α){
return (function (p__46985){
var vec__46986 = p__46985;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(2),null);
var c = emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α);
var s = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,z)),y,emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,z),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,x))], 0));
});
});
/**
 * Returns a function which rotates a vector α radians about the z axis.
 */
emmy.mechanics.rotation.Rz = (function emmy$mechanics$rotation$Rz(α){
return (function (p__46995){
var vec__46998 = p__46995;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46998,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46998,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46998,(2),null);
var c = emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(α);
var s = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(α);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,x),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,y)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(s,x),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(c,y)),z], 0));
});
});
emmy.mechanics.rotation.rotate_x = emmy.mechanics.rotation.Rx;
emmy.mechanics.rotation.rotate_y = emmy.mechanics.rotation.Ry;
emmy.mechanics.rotation.rotate_z = emmy.mechanics.rotation.Rz;
emmy.mechanics.rotation.wcross__GT_w = (function emmy$mechanics$rotation$wcross__GT_w(A){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(A,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))], 0));
});
/**
 * Compute the rotation matrix from a 3-vector of Euler angles.
 * 
 *   Our Euler Angle convention:
 * 
 *   M(theta, phi, psi) = R_z(phi)*R_x(theta)*R_z(psi)
 */
emmy.mechanics.rotation.Euler__GT_M = (function emmy$mechanics$rotation$Euler__GT_M(p__47009){
var vec__47011 = p__47009;
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(1),null);
var psi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47011,(2),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.mechanics.rotation.rotate_z_matrix(phi),emmy.mechanics.rotation.rotate_x_matrix(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.rotation.rotate_z_matrix(psi)], 0));
});
/**
 * Given a 3x3 rotation matrix, returns a [[emmy.structure/up]] of the
 *   corresponding Euler angles.
 * 
 *   Our Euler Angle convention:
 * 
 *   M(theta, phi, psi) = R_z(phi)*R_x(theta)*R_z(psi)
 */
emmy.mechanics.rotation.M__GT_Euler = (function emmy$mechanics$rotation$M__GT_Euler(var_args){
var G__47019 = arguments.length;
switch (G__47019) {
case 1:
return emmy.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$1 = (function (M){
return emmy.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$2(M,null);
}));

(emmy.mechanics.rotation.M__GT_Euler.cljs$core$IFn$_invoke$arity$2 = (function (M,tolerance_in_ulps){
var tolerance = (((tolerance_in_ulps == null))?emmy.util.machine_epsilon:emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(tolerance_in_ulps,emmy.util.machine_epsilon));
var close_QMARK_ = emmy.util.stream.close_enuf_QMARK_(tolerance);
var cx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var cx_number_QMARK_ = emmy.value.number_QMARK_(cx);
if(cljs.core.truth_((function (){var and__5160__auto__ = cx_number_QMARK_;
if(and__5160__auto__){
return close_QMARK_(cx,(-1));
} else {
return and__5160__auto__;
}
})())){
var theta = Math.PI;
var phi = emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))));
var psi = (0);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theta,phi,psi], 0));
} else {
if(cljs.core.truth_((function (){var and__5160__auto__ = cx_number_QMARK_;
if(and__5160__auto__){
return close_QMARK_(cx,(1));
} else {
return and__5160__auto__;
}
})())){
var theta = (0);
var phi = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
var psi = (0);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theta,phi,psi], 0));
} else {
var theta = emmy.generic.acos.cljs$core$IFn$_invoke$arity$1(cx);
var sx = emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta);
var phi = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),sx),emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),sx)));
var psi = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),sx),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(M,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),sx));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([theta,phi,psi], 0));

}
}
}));

(emmy.mechanics.rotation.M__GT_Euler.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=emmy.mechanics.rotation.js.map
