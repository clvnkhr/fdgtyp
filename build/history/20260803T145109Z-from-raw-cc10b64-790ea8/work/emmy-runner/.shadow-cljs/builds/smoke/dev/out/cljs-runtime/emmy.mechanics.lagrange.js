goog.provide('emmy.mechanics.lagrange');
emmy.mechanics.lagrange.coordinate_tuple = emmy.structure.up;
emmy.mechanics.lagrange.velocity_tuple = emmy.structure.up;
emmy.mechanics.lagrange.acceleration_tuple = emmy.structure.up;
emmy.mechanics.lagrange.momentum_tuple = emmy.structure.down;
/**
 * Returns a function signature for a Lagrangian with n degrees of freedom (or an
 *   unrestricted number if n is not given).
 * 
 *   Useful for constructing Lagrangian literal functions.
 */
emmy.mechanics.lagrange.Lagrangian = (function emmy$mechanics$lagrange$Lagrangian(var_args){
var G__58922 = arguments.length;
switch (G__58922) {
case 0:
return emmy.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return emmy.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.list(new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.list(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null)),cljs.core.list(new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null))),new cljs.core.Symbol(null,"Real","Real",374292741,null));
}));

(emmy.mechanics.lagrange.Lagrangian.cljs$core$IFn$_invoke$arity$1 = (function (n){
var r__36233__auto__ = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"->","->",-2139605430,null),cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP","UP",-1898089532,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null)),cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"UP*","UP*",294235991,null),new cljs.core.Symbol(null,"Real","Real",374292741,null),n], null))], null)),new cljs.core.Symbol(null,"Real","Real",374292741,null)], null));
var or__5162__auto__ = r__36233__auto__;
if(or__5162__auto__){
return or__5162__auto__;
} else {
return emmy.pattern.consequence.succeed(r__36233__auto__);
}
}));

(emmy.mechanics.lagrange.Lagrangian.cljs$lang$maxFixedArity = 1);

/**
 * Given a time `t`, coordinate tuple (or scalar) `q`, velocity tuple (or scalar)
 *   `qdot` and any number of additional higher-order derivative tuples (or
 *   scalars), returns a 'Local tuple', i.e., the state expected by a Lagrangian.
 */
emmy.mechanics.lagrange.__GT_L_state = (function emmy$mechanics$lagrange$__GT_L_state(var_args){
var args__5903__auto__ = [];
var len__5897__auto___59270 = arguments.length;
var i__5898__auto___59271 = (0);
while(true){
if((i__5898__auto___59271 < len__5897__auto___59270)){
args__5903__auto__.push((arguments[i__5898__auto___59271]));

var G__59272 = (i__5898__auto___59271 + (1));
i__5898__auto___59271 = G__59272;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return emmy.mechanics.lagrange.__GT_L_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(emmy.mechanics.lagrange.__GT_L_state.cljs$core$IFn$_invoke$arity$variadic = (function (t,q,qdot,derivs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(emmy.structure.up,t,q,qdot,derivs);
}));

(emmy.mechanics.lagrange.__GT_L_state.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(emmy.mechanics.lagrange.__GT_L_state.cljs$lang$applyTo = (function (seq58948){
var G__58949 = cljs.core.first(seq58948);
var seq58948__$1 = cljs.core.next(seq58948);
var G__58950 = cljs.core.first(seq58948__$1);
var seq58948__$2 = cljs.core.next(seq58948__$1);
var G__58952 = cljs.core.first(seq58948__$2);
var seq58948__$3 = cljs.core.next(seq58948__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58949,G__58950,G__58952,seq58948__$3);
}));

/**
 * Alias for [[->L-state]].
 */
emmy.mechanics.lagrange.__GT_local = emmy.mechanics.lagrange.__GT_L_state;
/**
 * Alias for [[->L-state]].
 */
emmy.mechanics.lagrange.__GT_state = emmy.mechanics.lagrange.__GT_L_state;
/**
 * Extract the time slot from a state tuple.
 * 
 *   See [[coordinate]] for more detail.
 */
emmy.mechanics.lagrange.time = (function emmy$mechanics$lagrange$time(local){
if(emmy.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (0))){
} else {
throw (new Error("Assert failed: (> (count local) 0)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(0));
});
/**
 * A convenience function on local tuples. A local tuple describes
 *   the state of a system at a particular time:
 * 
 *   ```
 *   [t, q, D q, D^2 q]
 *   ```
 * 
 *   representing time, position, velocity (and optionally acceleration etc.)
 * 
 *   [[coordinate]] returns the `q` element, which is expected to be a mapping from
 *   time to a structure of coordinates.
 */
emmy.mechanics.lagrange.coordinate = (function emmy$mechanics$lagrange$coordinate(local){
if(emmy.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (1))){
} else {
throw (new Error("Assert failed: (> (count local) 1)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(1));
});
/**
 * Returns the velocity element of a local tuple (by convention, the third
 *   element).
 * 
 *   See [[coordinate]] for more detail.
 */
emmy.mechanics.lagrange.velocity = (function emmy$mechanics$lagrange$velocity(local){
if(emmy.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (2))){
} else {
throw (new Error("Assert failed: (> (count local) 2)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(2));
});
/**
 * Returns the acceleration element of a local tuple (by convention, the fourth
 *   element).
 * 
 *   See [[coordinate]] for more detail.
 */
emmy.mechanics.lagrange.acceleration = (function emmy$mechanics$lagrange$acceleration(local){
if(emmy.structure.up_QMARK_(local)){
} else {
throw (new Error("Assert failed: (up? local)"));
}

if((cljs.core.count(local) > (3))){
} else {
throw (new Error("Assert failed: (> (count local) 3)"));
}

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(local,(3));
});
emmy.mechanics.lagrange.state__GT_n_dof = (function emmy$mechanics$lagrange$state__GT_n_dof(state){
if(emmy.structure.structure_QMARK_(state)){
} else {
throw (new Error("Assert failed: (s/structure? state)"));
}

var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(state,(1));
if(emmy.structure.up_QMARK_(q)){
return cljs.core.count(q);
} else {
return (1);
}
});
/**
 * Alias for [[time]].
 */
emmy.mechanics.lagrange.state__GT_t = emmy.mechanics.lagrange.time;
/**
 * Alias for [[coordinate]].
 */
emmy.mechanics.lagrange.state__GT_q = emmy.mechanics.lagrange.coordinate;
/**
 * Alias for [[velocity]].
 */
emmy.mechanics.lagrange.state__GT_qdot = emmy.mechanics.lagrange.velocity;
/**
 * Alias for [[acceleration]].
 */
emmy.mechanics.lagrange.state__GT_qddot = emmy.mechanics.lagrange.acceleration;
/**
 * Alias for [[coordinate]].
 */
emmy.mechanics.lagrange.coordinates = emmy.mechanics.lagrange.coordinate;
/**
 * Alias for [[velocity]].
 */
emmy.mechanics.lagrange.velocities = emmy.mechanics.lagrange.velocity;
/**
 * Alias for [[acceleration]].
 */
emmy.mechanics.lagrange.accelerations = emmy.mechanics.lagrange.acceleration;
/**
 * Alias for [[coordinate]].
 */
emmy.mechanics.lagrange.Q = emmy.mechanics.lagrange.coordinate;
/**
 * Alias for [[velocity]].
 */
emmy.mechanics.lagrange.Qdot = emmy.mechanics.lagrange.velocity;
/**
 * Alias for [[acceleration]].
 */
emmy.mechanics.lagrange.Qdotdot = emmy.mechanics.lagrange.acceleration;
emmy.mechanics.lagrange.literal_Lagrangian_state = (function emmy$mechanics$lagrange$literal_Lagrangian_state(n_dof){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),emmy.structure.literal_up(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"x","x",-555367584,null)),n_dof),emmy.structure.literal_up(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"v","v",1661996586,null)),n_dof)], 0));
});
/**
 * Gamma takes a path function (from time to coordinates) to a state
 *   function (from time to local tuple).
 */
emmy.mechanics.lagrange.Gamma = (function emmy$mechanics$lagrange$Gamma(var_args){
var G__58960 = arguments.length;
switch (G__58960) {
case 1:
return emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1 = (function (q){
var Dq = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(q) : emmy.calculus.derivative.D.call(null,q));
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function (t){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t,(q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t)),(Dq.cljs$core$IFn$_invoke$arity$1 ? Dq.cljs$core$IFn$_invoke$arity$1(t) : Dq.call(null,t))], 0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
}));

(emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2 = (function (q,n){
if((n > (1))){
} else {
throw (new Error("Assert failed: (> n 1)"));
}

var Dqs = cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - (1)),cljs.core.iterate(emmy.calculus.derivative.D,q));
var local = cljs.core.into.cljs$core$IFn$_invoke$arity$2(emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.identity], 0)),Dqs);
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$2((function (t){
return (local.cljs$core$IFn$_invoke$arity$1 ? local.cljs$core$IFn$_invoke$arity$1(t) : local.call(null,t));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exactly","exactly",1304099233),(1)], null));
}));

(emmy.mechanics.lagrange.Gamma.cljs$lang$maxFixedArity = 2);

emmy.mechanics.lagrange.path__GT_state_path = emmy.mechanics.lagrange.Gamma;
emmy.mechanics.lagrange.make_Lagrangian = (function emmy$mechanics$lagrange$make_Lagrangian(kinetic_energy,potential_energy){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(kinetic_energy,potential_energy);
});
/**
 * The lagrangian of a free particle of mass m. The Lagrangian
 *   returned is a function of the local tuple. Since the particle
 *   is free, there is no potential energy, so the Lagrangian is
 *   just the kinetic energy.
 */
emmy.mechanics.lagrange.L_free_particle = (function emmy$mechanics$lagrange$L_free_particle(mass){
return (function (p__58964){
var vec__58965 = p__58964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58965,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58965,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58965,(2),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),mass,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0));
});
});
/**
 * Lagrangian for a point mass on with the potential energy V(x, y)
 */
emmy.mechanics.lagrange.L_rectangular = (function emmy$mechanics$lagrange$L_rectangular(m,V){
return (function (p__58968){
var vec__58969 = p__58968;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58969,(0),null);
var vec__58972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58969,(1),null);
var q0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58972,(0),null);
var q1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58972,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58969,(2),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(qdot)], 0)),(V.cljs$core$IFn$_invoke$arity$2 ? V.cljs$core$IFn$_invoke$arity$2(q0,q1) : V.call(null,q0,q1)));
});
});
/**
 * The Lagrangian of a simple harmonic oscillator (mass-spring
 *   system). m is the mass and k is the spring constant used in
 *   Hooke's law. The resulting Lagrangian is a function of the
 *   local tuple of the system.
 */
emmy.mechanics.lagrange.L_harmonic = (function emmy$mechanics$lagrange$L_harmonic(m,k){
return (function (p__58978){
var vec__58979 = p__58978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58979,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58979,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58979,(2),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(q)], 0)));
});
});
/**
 * The Lagrangian of an object experiencing uniform acceleration
 *   in the negative y direction, i.e. the acceleration due to gravity
 */
emmy.mechanics.lagrange.L_uniform_acceleration = (function emmy$mechanics$lagrange$L_uniform_acceleration(m,g){
return (function (p__58982){
var vec__58983 = p__58982;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58983,(0),null);
var vec__58986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58983,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58986,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58986,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58983,(2),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(m,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0)));
});
});
emmy.mechanics.lagrange.L_central_rectangular = (function emmy$mechanics$lagrange$L_central_rectangular(m,U){
return (function (p__58989){
var vec__58990 = p__58989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(2),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v)], 0)),(function (){var G__58993 = emmy.generic.abs.cljs$core$IFn$_invoke$arity$1(q);
return (U.cljs$core$IFn$_invoke$arity$1 ? U.cljs$core$IFn$_invoke$arity$1(G__58993) : U.call(null,G__58993));
})());
});
});
/**
 * Consider planar motion in a central force field, with an arbitrary potential,
 *   `U`, depending only on the radius. The generalized coordinates are polar.
 */
emmy.mechanics.lagrange.L_central_polar = (function emmy$mechanics$lagrange$L_central_polar(m,U){
return (function (p__58994){
var vec__58995 = p__58994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58995,(0),null);
var vec__58998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58995,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58998,(0),null);
var vec__59001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58995,(2),null);
var rdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(0),null);
var φdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(1),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(rdot),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,φdot)))], 0)),(U.cljs$core$IFn$_invoke$arity$1 ? U.cljs$core$IFn$_invoke$arity$1(r) : U.call(null,r)));
});
});
emmy.mechanics.lagrange.L_Kepler_polar = (function emmy$mechanics$lagrange$L_Kepler_polar(GM,m){
return (function (p__59004){
var vec__59005 = p__59004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59005,(0),null);
var vec__59008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59005,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59008,(0),null);
var vec__59011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59005,(2),null);
var rdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59011,(0),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59011,(1),null);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(rdot),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,phidot)))], 0)),emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(GM,m),r));
});
});
emmy.mechanics.lagrange.L_axisymmetric_top = (function emmy$mechanics$lagrange$L_axisymmetric_top(A,C,gMR){
return (function (p__59016){
var vec__59017 = p__59016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59017,(0),null);
var vec__59020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59017,(1),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59020,(0),null);
var vec__59023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59017,(2),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59023,(0),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59023,(1),null);
var psidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59023,(2),null);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),A,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(thetadot),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(phidot,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta))))], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),C,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(psidot,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(phidot,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta))))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),gMR,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)], 0))], 0));
});
});
emmy.mechanics.lagrange.L_coupled_harmonic = (function emmy$mechanics$lagrange$L_coupled_harmonic(m,k){
return (function (p__59026){
var vec__59027 = p__59026;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59027,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59027,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59027,(2),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),qdot,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,qdot], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,q], 0)));
});
});
emmy.mechanics.lagrange.F_sliding_pend = (function emmy$mechanics$lagrange$F_sliding_pend(l){
return (function (p__59036){
var vec__59037 = p__59036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59037,(0),null);
var vec__59040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59037,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59040,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59040,(1),null);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,(0)], 0)),emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(l,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic((-1),l,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)], 0))], 0))], 0));
});
});
emmy.mechanics.lagrange.two_free = (function emmy$mechanics$lagrange$two_free(m1,m2,g){
return (function (p__59051){
var vec__59053 = p__59051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59053,(0),null);
var vec__59056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59053,(1),null);
var vec__59059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59056,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59059,(0),null);
var h1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59059,(1),null);
var vec__59062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59056,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59062,(0),null);
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59062,(1),null);
var vec__59065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59053,(2),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59065,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59065,(1),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v1)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m2,emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v2)))),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(g,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m1,h1),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(m2,h2))));
});
});
/**
 * Pendulum of mass m2 and length b, hanging from a support of mass m1 that is
 *   free to move horizontally (from Groesberg, Advanced Mechanics, p. 72)
 */
emmy.mechanics.lagrange.L_sliding_pend = (function emmy$mechanics$lagrange$L_sliding_pend(m1,m2,l,g){
return emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.lagrange.two_free(m1,m2,g),(function (){var G__59069 = emmy.mechanics.lagrange.F_sliding_pend(l);
return (emmy.mechanics.lagrange.F__GT_C.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.lagrange.F__GT_C.cljs$core$IFn$_invoke$arity$1(G__59069) : emmy.mechanics.lagrange.F__GT_C.call(null,G__59069));
})()], 0));
});
emmy.mechanics.lagrange.L_pendulum = (function emmy$mechanics$lagrange$L_pendulum(g,m,l){
return (function (p__59070){
var vec__59071 = p__59070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59071,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59071,(1),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59071,(2),null);
return emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(l,thetadot))], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(g,m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta)], 0)));
});
});
emmy.mechanics.lagrange.Rayleigh_dissipation = (function emmy$mechanics$lagrange$Rayleigh_dissipation(k){
return (function (p__59074){
var vec__59075 = p__59074;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(1),null);
var qdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59075,(2),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(qdot,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qdot], 0));
});
});
emmy.mechanics.lagrange.L_two_particle = (function emmy$mechanics$lagrange$L_two_particle(m1,m2,V){
return (function (p__59081){
var vec__59082 = p__59081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59082,(0),null);
var vec__59085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59082,(1),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59085,(1),null);
var vec__59088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59082,(2),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59088,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59088,(1),null);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v1)], 0)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(v2)], 0))),(V.cljs$core$IFn$_invoke$arity$2 ? V.cljs$core$IFn$_invoke$arity$2(x1,x2) : V.call(null,x1,x2)));
});
});
emmy.mechanics.lagrange.Lagrange_equations = (function emmy$mechanics$lagrange$Lagrange_equations(var_args){
var G__59098 = arguments.length;
switch (G__59098) {
case 1:
return emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$1 = (function (L){
return emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$2(L,null);
}));

(emmy.mechanics.lagrange.Lagrange_equations.cljs$core$IFn$_invoke$arity$2 = (function (L,dissipation_fn){
return (function (q){
var state_path = emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q);
return emmy.generic._.cljs$core$IFn$_invoke$arity$variadic((function (){var G__59105 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59106 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59106.cljs$core$IFn$_invoke$arity$1 ? fexpr__59106.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59106.call(null,L));
})(),state_path], 0));
return (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__59105) : emmy.calculus.derivative.D.call(null,G__59105));
})(),emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59110 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59110.cljs$core$IFn$_invoke$arity$1 ? fexpr__59110.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59110.call(null,L));
})(),state_path], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(dissipation_fn)?emmy.generic._.cljs$core$IFn$_invoke$arity$1(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59111 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59111.cljs$core$IFn$_invoke$arity$1 ? fexpr__59111.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59111.call(null,dissipation_fn));
})(),state_path], 0))):(0))], 0));
});
}));

(emmy.mechanics.lagrange.Lagrange_equations.cljs$lang$maxFixedArity = 2);

emmy.mechanics.lagrange.Lagrangian__GT_acceleration = (function emmy$mechanics$lagrange$Lagrangian__GT_acceleration(var_args){
var G__59116 = arguments.length;
switch (G__59116) {
case 1:
return emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$1 = (function (L){
return emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2(L,null);
}));

(emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2 = (function (L,dissipation_fn){
var P = (function (){var fexpr__59120 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59120.cljs$core$IFn$_invoke$arity$1 ? fexpr__59120.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59120.call(null,L));
})();
var F = (function (){var fexpr__59124 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59124.cljs$core$IFn$_invoke$arity$1 ? fexpr__59124.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59124.call(null,L));
})();
return emmy.generic.solve_linear_left((function (){var fexpr__59125 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59125.cljs$core$IFn$_invoke$arity$1 ? fexpr__59125.cljs$core$IFn$_invoke$arity$1(P) : fexpr__59125.call(null,P));
})(),emmy.generic._.cljs$core$IFn$_invoke$arity$variadic(F,(cljs.core.truth_(dissipation_fn)?(function (){var fexpr__59126 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59126.cljs$core$IFn$_invoke$arity$1 ? fexpr__59126.cljs$core$IFn$_invoke$arity$1(dissipation_fn) : fexpr__59126.call(null,dissipation_fn));
})():(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59127 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((0)) : emmy.calculus.derivative.partial.call(null,(0)));
return (fexpr__59127.cljs$core$IFn$_invoke$arity$1 ? fexpr__59127.cljs$core$IFn$_invoke$arity$1(P) : fexpr__59127.call(null,P));
})(),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59128 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59128.cljs$core$IFn$_invoke$arity$1 ? fexpr__59128.cljs$core$IFn$_invoke$arity$1(P) : fexpr__59128.call(null,P));
})(),emmy.mechanics.lagrange.velocity))], 0)));
}));

(emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$lang$maxFixedArity = 2);

emmy.mechanics.lagrange.qv__GT_local_path = (function emmy$mechanics$lagrange$qv__GT_local_path(q,v){
return (function (t){
var G__59132 = t;
var G__59133 = (q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(t) : q.call(null,t));
var G__59134 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(t) : v.call(null,t));
return (emmy.mechanics.lagrange.__GT_local.cljs$core$IFn$_invoke$arity$3 ? emmy.mechanics.lagrange.__GT_local.cljs$core$IFn$_invoke$arity$3(G__59132,G__59133,G__59134) : emmy.mechanics.lagrange.__GT_local.call(null,G__59132,G__59133,G__59134));
});
});
/**
 * Optionally takes a dissipation function.
 */
emmy.mechanics.lagrange.Lagrangian__GT_state_derivative = (function emmy$mechanics$lagrange$Lagrangian__GT_state_derivative(var_args){
var G__59142 = arguments.length;
switch (G__59142) {
case 1:
return emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1 = (function (L){
return emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2(L,null);
}));

(emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2 = (function (L,dissipation_fn){
var acceleration = emmy.mechanics.lagrange.Lagrangian__GT_acceleration.cljs$core$IFn$_invoke$arity$2(L,dissipation_fn);
return (function (state){
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),emmy.mechanics.lagrange.velocity(state),(acceleration.cljs$core$IFn$_invoke$arity$1 ? acceleration.cljs$core$IFn$_invoke$arity$1(state) : acceleration.call(null,state))], 0));
});
}));

(emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$lang$maxFixedArity = 2);

/**
 * The state derivative of a Lagrangian is a function carrying a state tuple to
 *   its time derivative.
 * 
 *   Alias for the non-dissipative, single-arity version
 *   of [[Lagrangian->state-derivative]].
 */
emmy.mechanics.lagrange.local_state_derivative = (function emmy$mechanics$lagrange$local_state_derivative(L){
return emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$2(L,null);
});
emmy.mechanics.lagrange.Lagrange_equations_first_order = (function emmy$mechanics$lagrange$Lagrange_equations_first_order(L){
return (function (q,v){
var state_path = emmy.mechanics.lagrange.qv__GT_local_path(q,v);
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(state_path) : emmy.calculus.derivative.D.call(null,state_path)),emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.lagrange.Lagrangian__GT_state_derivative.cljs$core$IFn$_invoke$arity$1(L),state_path], 0)));
});
});
/**
 * Alias for [[Lagrange-equations-first-order]].
 */
emmy.mechanics.lagrange.Lagrange_equations_1 = emmy.mechanics.lagrange.Lagrange_equations_first_order;
emmy.mechanics.lagrange.Lagrangian__GT_energy = (function emmy$mechanics$lagrange$Lagrangian__GT_energy(L){
var P = (function (){var fexpr__59152 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59152.cljs$core$IFn$_invoke$arity$1 ? fexpr__59152.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59152.call(null,L));
})();
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(P,emmy.mechanics.lagrange.velocity),L);
});
emmy.mechanics.lagrange.Lagrangian__GT_power_loss = (function emmy$mechanics$lagrange$Lagrangian__GT_power_loss(L){
return (function (q){
var G__59153 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.mechanics.lagrange.Lagrangian__GT_energy(L),emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q)], 0));
return (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__59153) : emmy.calculus.derivative.D.call(null,G__59153));
});
});
emmy.mechanics.lagrange.T3_spherical = (function emmy$mechanics$lagrange$T3_spherical(m){
return (function (p__59157){
var vec__59158 = p__59157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(0),null);
var vec__59161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59161,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59161,(1),null);
var vec__59164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(2),null);
var rdot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59164,(0),null);
var thetadot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59164,(1),null);
var phidot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59164,(2),null);
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2((1),(2)),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(rdot),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,thetadot)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(r,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([phidot], 0)))], 0))], 0));
});
});
emmy.mechanics.lagrange.L3_central = (function emmy$mechanics$lagrange$L3_central(m,Vr){
var Vs = (function emmy$mechanics$lagrange$L3_central_$_Vs(p__59179){
var vec__59180 = p__59179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59180,(0),null);
var vec__59183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59180,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59183,(0),null);
return (Vr.cljs$core$IFn$_invoke$arity$1 ? Vr.cljs$core$IFn$_invoke$arity$1(r) : Vr.call(null,r));
});
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.lagrange.T3_spherical(m),Vs);
});
emmy.mechanics.lagrange.Lagrangian_action = (function emmy$mechanics$lagrange$Lagrangian_action(var_args){
var G__59187 = arguments.length;
switch (G__59187) {
case 4:
return emmy.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return emmy.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$4 = (function (L,q,t1,t2){
return emmy.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5(L,q,t1,t2,cljs.core.PersistentArrayMap.EMPTY);
}));

(emmy.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5 = (function (L,q,t1,t2,integration_opts){
return emmy.numerical.quadrature.definite_integral.cljs$core$IFn$_invoke$arity$4(emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([L,emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q)], 0)),t1,t2,integration_opts);
}));

(emmy.mechanics.lagrange.Lagrangian_action.cljs$lang$maxFixedArity = 5);

emmy.mechanics.lagrange.linear_interpolants = (function emmy$mechanics$lagrange$linear_interpolants(x0,x1,n){
var n_PLUS_1 = (n + (1));
var dx = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(x1,x0),n_PLUS_1);
var iter__5649__auto__ = (function emmy$mechanics$lagrange$linear_interpolants_$_iter__59190(s__59191){
return (new cljs.core.LazySeq(null,(function (){
var s__59191__$1 = s__59191;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__59191__$1);
if(temp__5825__auto__){
var s__59191__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59191__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__59191__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__59193 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__59192 = (0);
while(true){
if((i__59192 < size__5648__auto__)){
var i = cljs.core._nth(c__5647__auto__,i__59192);
cljs.core.chunk_append(b__59193,emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x0,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i,dx)));

var G__59323 = (i__59192 + (1));
i__59192 = G__59323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59193),emmy$mechanics$lagrange$linear_interpolants_$_iter__59190(cljs.core.chunk_rest(s__59191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59193),null);
}
} else {
var i = cljs.core.first(s__59191__$2);
return cljs.core.cons(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(x0,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(i,dx)),emmy$mechanics$lagrange$linear_interpolants_$_iter__59190(cljs.core.rest(s__59191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),n_PLUS_1));
});
/**
 * Given `ys` (a sequence of function values) and `xs` (an equal-length sequence
 *   of function inputs), returns a [[emmy.polynomial/Polynomial]] instance
 *   guaranteed to pass through all supplied `xs` and `ys`.
 * 
 *   The contract for inputs is that `(map vector xs ys)` should return a sequence
 *   of pairs of points.
 */
emmy.mechanics.lagrange.Lagrange_interpolation_function = (function emmy$mechanics$lagrange$Lagrange_interpolation_function(ys,xs){
return emmy.polynomial.from_points(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
});
/**
 * SICM p. 23n
 */
emmy.mechanics.lagrange.make_path = (function emmy$mechanics$lagrange$make_path(t0,q0,t1,q1,qs){
var n = cljs.core.count(qs);
var ts = emmy.mechanics.lagrange.linear_interpolants(t0,t1,n);
return emmy.mechanics.lagrange.Lagrange_interpolation_function(cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,q0,null,(1),null)),qs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,q1,null,(1),null))], 0))))),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,t0,null,(1),null)),ts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,t1,null,(1),null))], 0))))));
});
/**
 * SICM p. 23
 */
emmy.mechanics.lagrange.parametric_path_action = (function emmy$mechanics$lagrange$parametric_path_action(Lagrangian,t0,q0,t1,q1){
return (function (qs){
var path = emmy.mechanics.lagrange.make_path(t0,q0,t1,q1,qs);
return emmy.mechanics.lagrange.Lagrangian_action.cljs$core$IFn$_invoke$arity$5(Lagrangian,path,t0,t1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile?","compile?",-826687650),false], null));
});
});
/**
 * SICM p. 23. The optional parameter values is a callback which will report
 *   intermediate points of the minimization.
 */
emmy.mechanics.lagrange.find_path = (function emmy$mechanics$lagrange$find_path(var_args){
var args__5903__auto__ = [];
var len__5897__auto___59358 = arguments.length;
var i__5898__auto___59359 = (0);
while(true){
if((i__5898__auto___59359 < len__5897__auto___59358)){
args__5903__auto__.push((arguments[i__5898__auto___59359]));

var G__59364 = (i__5898__auto___59359 + (1));
i__5898__auto___59359 = G__59364;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((6) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((6)),(0),null)):null);
return emmy.mechanics.lagrange.find_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5904__auto__);
});

(emmy.mechanics.lagrange.find_path.cljs$core$IFn$_invoke$arity$variadic = (function (Lagrangian,t0,q0,t1,q1,n,p__59215){
var map__59216 = p__59215;
var map__59216__$1 = cljs.core.__destructure_map(map__59216);
var observe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"observe","observe",-86651450));
var initial_qs = emmy.mechanics.lagrange.linear_interpolants(q0,q1,n);
var minimizing_qs = emmy.numerical.minimize.multidimensional_minimize.cljs$core$IFn$_invoke$arity$variadic(emmy.mechanics.lagrange.parametric_path_action(Lagrangian,t0,q0,t1,q1),initial_qs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"callback","callback",-705136228),observe], 0));
return emmy.mechanics.lagrange.make_path(t0,q0,t1,q1,minimizing_qs);
}));

(emmy.mechanics.lagrange.find_path.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(emmy.mechanics.lagrange.find_path.cljs$lang$applyTo = (function (seq59206){
var G__59208 = cljs.core.first(seq59206);
var seq59206__$1 = cljs.core.next(seq59206);
var G__59209 = cljs.core.first(seq59206__$1);
var seq59206__$2 = cljs.core.next(seq59206__$1);
var G__59210 = cljs.core.first(seq59206__$2);
var seq59206__$3 = cljs.core.next(seq59206__$2);
var G__59211 = cljs.core.first(seq59206__$3);
var seq59206__$4 = cljs.core.next(seq59206__$3);
var G__59212 = cljs.core.first(seq59206__$4);
var seq59206__$5 = cljs.core.next(seq59206__$4);
var G__59213 = cljs.core.first(seq59206__$5);
var seq59206__$6 = cljs.core.next(seq59206__$5);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59208,G__59209,G__59210,G__59211,G__59212,G__59213,seq59206__$6);
}));

/**
 * Given a state tuple (of finite length), reconstitutes the initial segment of
 *   the Taylor series corresponding to the state tuple data as a function of t.
 * 
 *   Time is measured beginning at the point of time specified in the input state
 *   tuple.
 */
emmy.mechanics.lagrange.osculating_path = (function emmy$mechanics$lagrange$osculating_path(state0){
var vec__59222 = state0;
var t0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59222,(0),null);
var q0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59222,(1),null);
var k = cljs.core.count(state0);
return (function (t){
var dt = emmy.generic._.cljs$core$IFn$_invoke$arity$2(t,t0);
var n = (2);
var sum = q0;
var dt_STAR__STAR_n_COLON_n_BANG_ = dt;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,k)){
return sum;
} else {
var G__59381 = (n + (1));
var G__59382 = emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(sum,emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(state0,n),dt_STAR__STAR_n_COLON_n_BANG_));
var G__59383 = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(dt_STAR__STAR_n_COLON_n_BANG_,dt),n);
n = G__59381;
sum = G__59382;
dt_STAR__STAR_n_COLON_n_BANG_ = G__59383;
continue;
}
break;
}
});
});
emmy.mechanics.lagrange.Gamma_bar = (function emmy$mechanics$lagrange$Gamma_bar(f){
return (function (local){
var G__59232 = cljs.core.first(local);
var fexpr__59231 = (function (){var G__59233 = emmy.mechanics.lagrange.osculating_path(local);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__59233) : f.call(null,G__59233));
})();
return (fexpr__59231.cljs$core$IFn$_invoke$arity$1 ? fexpr__59231.cljs$core$IFn$_invoke$arity$1(G__59232) : fexpr__59231.call(null,G__59232));
});
});
emmy.mechanics.lagrange.Dt_procedure = (function emmy$mechanics$lagrange$Dt_procedure(F){
return (function emmy$mechanics$lagrange$Dt_procedure_$_DtF(state){
var n = cljs.core.count(state);
var DF_on_path = (function emmy$mechanics$lagrange$Dt_procedure_$_DtF_$_DF_on_path(q){
var G__59235 = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([F,emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2(q,(n - (1)))], 0));
return (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(G__59235) : emmy.calculus.derivative.D.call(null,G__59235));
});
return emmy.mechanics.lagrange.Gamma_bar(DF_on_path)(state);
});
});
emmy.mechanics.lagrange.Dt = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.lagrange.Dt_procedure,new cljs.core.Symbol(null,"Dt","Dt",389881669,null));
emmy.mechanics.lagrange.trim_last_argument = (function emmy$mechanics$lagrange$trim_last_argument(local){
return emmy.structure.up_STAR_(cljs.core.pop(emmy.structure.structure__GT_vector(local)));
});
emmy.mechanics.lagrange.Euler_Lagrange_operator = (function emmy$mechanics$lagrange$Euler_Lagrange_operator(L){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var G__59236 = (function (){var fexpr__59237 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((2)) : emmy.calculus.derivative.partial.call(null,(2)));
return (fexpr__59237.cljs$core$IFn$_invoke$arity$1 ? fexpr__59237.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59237.call(null,L));
})();
return (emmy.mechanics.lagrange.Dt.cljs$core$IFn$_invoke$arity$1 ? emmy.mechanics.lagrange.Dt.cljs$core$IFn$_invoke$arity$1(G__59236) : emmy.mechanics.lagrange.Dt.call(null,G__59236));
})(),emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__59238 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1((1)) : emmy.calculus.derivative.partial.call(null,(1)));
return (fexpr__59238.cljs$core$IFn$_invoke$arity$1 ? fexpr__59238.cljs$core$IFn$_invoke$arity$1(L) : fexpr__59238.call(null,L));
})(),emmy.mechanics.lagrange.trim_last_argument], 0)));
});
/**
 * Alias for [[Euler-lagrange-operator]].
 */
emmy.mechanics.lagrange.LE = emmy.mechanics.lagrange.Euler_Lagrange_operator;
/**
 * Alias for [[Euler-lagrange-operator]].
 */
emmy.mechanics.lagrange.Lagrange_equations_operator = emmy.mechanics.lagrange.Euler_Lagrange_operator;
emmy.mechanics.lagrange.generalized_LE = (function emmy$mechanics$lagrange$generalized_LE(Lagrangian){
return (function (state){
var m = cljs.core.count(state);
if((((m > (3))) && (cljs.core.even_QMARK_(m)))){
} else {
throw (new Error((""+"Assert failed: "+"Incorrect state size for Lagrange Equations"+"\n"+"(and (> m 3) (even? m))")));
}

var lp = (function emmy$mechanics$lagrange$generalized_LE_$_lp(i,state__$1){
if((i === (0))){
return (0);
} else {
return emmy.generic._.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__59249 = (function (){var G__59251 = (function (){var fexpr__59252 = (emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.partial.cljs$core$IFn$_invoke$arity$1(i) : emmy.calculus.derivative.partial.call(null,i));
return (fexpr__59252.cljs$core$IFn$_invoke$arity$1 ? fexpr__59252.cljs$core$IFn$_invoke$arity$1(Lagrangian) : fexpr__59252.call(null,Lagrangian));
})();
var fexpr__59250 = emmy.generic.expt.cljs$core$IFn$_invoke$arity$2(emmy.mechanics.lagrange.Dt,(i - (1)));
return (fexpr__59250.cljs$core$IFn$_invoke$arity$1 ? fexpr__59250.cljs$core$IFn$_invoke$arity$1(G__59251) : fexpr__59250.call(null,G__59251));
})();
return (fexpr__59249.cljs$core$IFn$_invoke$arity$1 ? fexpr__59249.cljs$core$IFn$_invoke$arity$1(state__$1) : fexpr__59249.call(null,state__$1));
})(),emmy$mechanics$lagrange$generalized_LE_$_lp((i - (1)),emmy.mechanics.lagrange.trim_last_argument(state__$1)));
}
});
return lp(cljs.core.quot(m,(2)),state);
});
});
/**
 * Accepts a coordinate transformation `F` from a local tuple to a new coordinate
 *   structure, and returns a function from `local -> local` that applies the
 *   transformation directly.
 * 
 *   [[F->C]] handles local tuples of arbitrary length.
 */
emmy.mechanics.lagrange.F__GT_C = (function emmy$mechanics$lagrange$F__GT_C(F){
return (function emmy$mechanics$lagrange$F__GT_C_$_C(local){
var n = cljs.core.count(local);
var f_bar = (function (q_prime){
var q = emmy.function$.compose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([F,emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$1(q_prime)], 0));
return emmy.mechanics.lagrange.Gamma.cljs$core$IFn$_invoke$arity$2(q,n);
});
return emmy.mechanics.lagrange.Gamma_bar(f_bar)(local);
});
});
emmy.mechanics.lagrange.rectangular__GT_polar = (function emmy$mechanics$lagrange$rectangular__GT_polar(p__59253){
var vec__59254 = p__59253;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59254,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59254,(1),null);
var r = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y)));
var phi = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r,phi], 0));
});
emmy.mechanics.lagrange.r__GT_p = (function emmy$mechanics$lagrange$r__GT_p(tqv){
return emmy.mechanics.lagrange.rectangular__GT_polar(emmy.mechanics.lagrange.coordinate(tqv));
});
emmy.mechanics.lagrange.polar__GT_rectangular = (function emmy$mechanics$lagrange$polar__GT_rectangular(p__59257){
var vec__59258 = p__59257;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(0),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(1),null);
var x = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(phi));
var y = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(phi));
return emmy.structure.up.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
});
/**
 * SICM p. 47. Polar to rectangular coordinates of state.
 */
emmy.mechanics.lagrange.p__GT_r = (function emmy$mechanics$lagrange$p__GT_r(tqv){
return emmy.mechanics.lagrange.polar__GT_rectangular(emmy.mechanics.lagrange.coordinate(tqv));
});
emmy.mechanics.lagrange.spherical__GT_rectangular = (function emmy$mechanics$lagrange$spherical__GT_rectangular(p__59261){
var vec__59262 = p__59261;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59262,(0),null);
var theta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59262,(1),null);
var phi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59262,(2),null);
var x = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(r,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(phi)], 0));
var y = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(r,emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(theta),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.sin.cljs$core$IFn$_invoke$arity$1(phi)], 0));
var z = emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(r,emmy.generic.cos.cljs$core$IFn$_invoke$arity$1(theta));
return (emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3 ? emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3(x,y,z) : emmy.mechanics.lagrange.coordinate_tuple.call(null,x,y,z));
});
/**
 * SICM p. 83
 */
emmy.mechanics.lagrange.s__GT_r = (function emmy$mechanics$lagrange$s__GT_r(local){
return emmy.mechanics.lagrange.spherical__GT_rectangular(emmy.mechanics.lagrange.coordinate(local));
});
emmy.mechanics.lagrange.rectangular__GT_spherical = (function emmy$mechanics$lagrange$rectangular__GT_spherical(p__59265){
var vec__59266 = p__59265;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59266,(2),null);
var r = emmy.generic.sqrt.cljs$core$IFn$_invoke$arity$1(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.square.cljs$core$IFn$_invoke$arity$1(x),emmy.generic.square.cljs$core$IFn$_invoke$arity$1(y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([emmy.generic.square.cljs$core$IFn$_invoke$arity$1(z)], 0)));
var theta = emmy.generic.acos.cljs$core$IFn$_invoke$arity$1(emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(z,r));
var phi = emmy.generic.atan.cljs$core$IFn$_invoke$arity$2(y,x);
return (emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3 ? emmy.mechanics.lagrange.coordinate_tuple.cljs$core$IFn$_invoke$arity$3(r,theta,phi) : emmy.mechanics.lagrange.coordinate_tuple.call(null,r,theta,phi));
});
emmy.mechanics.lagrange.r__GT_s = (function emmy$mechanics$lagrange$r__GT_s(local){
return emmy.mechanics.lagrange.rectangular__GT_spherical(emmy.mechanics.lagrange.coordinate(local));
});

//# sourceMappingURL=emmy.mechanics.lagrange.js.map
