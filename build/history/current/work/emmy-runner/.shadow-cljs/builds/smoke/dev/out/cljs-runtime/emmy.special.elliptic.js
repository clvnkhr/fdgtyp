goog.provide('emmy.special.elliptic');
/**
 * From W.H. Press, Numerical Recipes in C++, 2ed. NR::rf from section 6.11
 * 
 *   Here's the reference for what's going on here:
 *   http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf
 * 
 *   Comment from Press, page 257:
 * 
 *   'Computes Carlson’s elliptic integral of the first kind, RF (x, y, z). x, y,
 *   and z must be nonnegative, and at most one can be zero. TINY must be at least
 *   5 times the machine underflow limit, BIG at most one fifth the machine
 *   overflow limit.'
 * 
 *   A value of 0.08 for the error tolerance parameter is adequate for single
 *   precision (7 significant digits). Since the error scales as 6 n, we see that
 *   0.0025 will yield double precision (16 significant digits) and require at most
 *   two or three more iterations.'
 * 
 *   This is called `Carlson-elliptic-1` in scmutils.
 */
emmy.special.elliptic.carlson_rf = (function emmy$special$elliptic$carlson_rf(x,y,z){
var errtol = 0.0025;
var tiny = 1.5E-38;
var big = 3.0E37;
var third = (1.0 / 3.0);
var c1 = ((1) / 24.0);
var c2 = 0.1;
var c3 = (3.0 / 44.0);
var c4 = (1.0 / 14.0);
if((((cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0)) < (0))) || ((((cljs.core.min.cljs$core$IFn$_invoke$arity$variadic((x + y),(x + z),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(y + z)], 0)) < tiny)) || ((cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0)) > big)))))){
emmy.util.illegal("Carlson R_F");
} else {
}

var xt = x;
var yt = y;
var zt = z;
while(true){
var sqrtx = Math.sqrt(xt);
var sqrty = Math.sqrt(yt);
var sqrtz = Math.sqrt(zt);
var alamb = ((sqrtx * (sqrty + sqrtz)) + (sqrty * sqrtz));
var xt_SINGLEQUOTE_ = (0.25 * (xt + alamb));
var yt_SINGLEQUOTE_ = (0.25 * (yt + alamb));
var zt_SINGLEQUOTE_ = (0.25 * (zt + alamb));
var ave = (third * ((xt_SINGLEQUOTE_ + yt_SINGLEQUOTE_) + zt_SINGLEQUOTE_));
var delx = ((ave - xt_SINGLEQUOTE_) / ave);
var dely = ((ave - yt_SINGLEQUOTE_) / ave);
var delz = ((ave - zt_SINGLEQUOTE_) / ave);
if((cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(Math.abs(delx),Math.abs(dely),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.abs(delz)], 0)) > errtol)){
var G__59184 = xt_SINGLEQUOTE_;
var G__59185 = yt_SINGLEQUOTE_;
var G__59186 = zt_SINGLEQUOTE_;
xt = G__59184;
yt = G__59185;
zt = G__59186;
continue;
} else {
var e2 = ((delx * dely) - (delz * delz));
var e3 = ((delx * dely) * delz);
return (((1.0 + ((((c1 * e2) - c2) - (c3 * e3)) * e2)) + (c4 * e3)) / Math.sqrt(ave));
}
break;
}
});
/**
 * Comment from Press, section 6.11, page 257:
 * 
 *   'Computes Carlson’s elliptic integral of the second kind, RD(x, y, z). x and y must be
 *   nonnegative, and at most one can be zero. z must be positive. TINY must be at least twice
 *   the negative 2/3 power of the machine overflow limit. BIG must be at most 0.1 × ERRTOL
 *   times the negative 2/3 power of the machine underflow limit.'
 * 
 *   This is called `Carlson-elliptic-2` in scmutils.
 */
emmy.special.elliptic.carlson_rd = (function emmy$special$elliptic$carlson_rd(x,y,z){
var eps = 0.0015;
var tiny = 1.0E-25;
var big = 4.5E21;
var C1 = (3.0 / 14.0);
var C2 = (1.0 / 6.0);
var C3 = (9.0 / 22.0);
var C4 = (3.0 / 26.0);
var C5 = (0.25 * C3);
var C6 = (1.5 * C4);
if((((cljs.core.min.cljs$core$IFn$_invoke$arity$2(x,y) < (0))) || ((((cljs.core.min.cljs$core$IFn$_invoke$arity$2((x + y),z) < tiny)) || ((cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0)) > big)))))){
emmy.util.illegal("Carlson R_D");
} else {
}

var x__$1 = x;
var y__$1 = y;
var z__$1 = z;
var sum = 0.0;
var fac = 1.0;
while(true){
var sqrtx = Math.sqrt(x__$1);
var sqrty = Math.sqrt(y__$1);
var sqrtz = Math.sqrt(z__$1);
var alamb = ((sqrtx * (sqrty + sqrtz)) + (sqrty * sqrtz));
var sump = (sum + (fac / (sqrtz * (z__$1 + alamb))));
var facp = (0.25 * fac);
var xp = (0.25 * (x__$1 + alamb));
var yp = (0.25 * (y__$1 + alamb));
var zp = (0.25 * (z__$1 + alamb));
var ave = (0.2 * ((xp + yp) + (3.0 * zp)));
var delx = ((ave - xp) / ave);
var dely = ((ave - yp) / ave);
var delz = ((ave - zp) / ave);
if((cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(Math.abs(delx),Math.abs(dely),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.abs(delz)], 0)) > eps)){
var G__59187 = xp;
var G__59188 = yp;
var G__59189 = zp;
var G__59190 = sump;
var G__59191 = facp;
x__$1 = G__59187;
y__$1 = G__59188;
z__$1 = G__59189;
sum = G__59190;
fac = G__59191;
continue;
} else {
var ea = (delx * dely);
var eb = (delz * delz);
var ec = (ea - eb);
var ed = (ea - (6.0 * eb));
var ee = ((ed + ec) + ec);
return ((3.0 * sump) + ((facp * ((1.0 + (ed * (((C5 * ed) - ((C6 * delz) * ee)) - C1))) + (delz * ((C2 * ee) + (delz * ((C3 * ec) - ((delz * C4) * ea))))))) / (ave * Math.sqrt(ave))));
}
break;
}
});
/**
 * Computes Carlson’s degenerate elliptic integral, $R_C(x, y)$. `x` must be
 *   nonnegative and `y` must be nonzero. If `y < 0`, the Cauchy principal value is
 *   returned.
 * 
 *   Internal details:
 * 
 *   - `tiny` must be at least 5 times the machine underflow limit
 *   - `big` at most one fifth the machine maximum overflow limit.
 */
emmy.special.elliptic.carlson_rc = (function emmy$special$elliptic$carlson_rc(x,y){
var errtol = 0.0012;
var tiny = 1.69E-38;
var sqrtny = 1.3E-19;
var big = 3.0E37;
var tnbg = (tiny * big);
var comp1 = (2.236 / sqrtny);
var comp2 = ((tnbg * tnbg) / (25));
var third = ((1) / 3.0);
var C1 = 0.3;
var C2 = (1.0 / 7.0);
var C3 = 0.375;
var C4 = (9.0 / 22.0);
if((((x < (0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))) || (((((x + Math.abs(y)) < tiny)) || (((((x + Math.abs(y)) > big)) || ((((y < (- comp1))) && ((((x > (0))) && ((x < comp2)))))))))))))){
emmy.util.illegal("Carlson R_C");
} else {
}

var vec__59001 = (((y > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(1)], null):(function (){var xt = (x - y);
var yt = (- y);
var w = (Math.sqrt(x) / Math.sqrt(xt));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,yt,w], null);
})());
var xt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(0),null);
var yt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59001,(2),null);
var xt__$1 = xt;
var yt__$1 = yt;
while(true){
var sqrtx = Math.sqrt(xt__$1);
var sqrty = Math.sqrt(yt__$1);
var alamb = ((((2) * sqrtx) * sqrty) + yt__$1);
var xp = (0.25 * (xt__$1 + alamb));
var yp = (0.25 * (yt__$1 + alamb));
var ave = (third * ((xp + yp) + yp));
var s = ((yp - ave) / ave);
if((Math.abs(s) > errtol)){
var G__59199 = xp;
var G__59200 = yp;
xt__$1 = G__59199;
yt__$1 = G__59200;
continue;
} else {
return (w * ((1.0 + ((s * s) * (C1 + (s * (C2 + (s * (C3 + (s * C4)))))))) / Math.sqrt(ave)));
}
break;
}
});
/**
 * Computes
 *   [Carlson’s elliptic
 *   integral](https://en.wikipedia.org/wiki/Carlson_symmetric_form) of the third
 *   kind, `RJ(x, y, z, p)`.
 * 
 *   `x`, `y`, and `z` must be nonnegative, and at most one can be zero. `p` must
 *   be nonzero.
 * 
 *   If `p < 0`, the Cauchy principal value is returned. `tiny` internally must be
 *   at least twice the cube root of the machine underflow limit, `big` at most one
 *   fifth the cube root of the machine overflow limit.
 */
emmy.special.elliptic.carlson_rj = (function emmy$special$elliptic$carlson_rj(x,y,z,p){
var errtol = 0.0015;
var tiny = 2.5E-13;
var big = 9.0E11;
var C1 = (3.0 / 14.0);
var C2 = (1.0 / 3.0);
var C3 = (3.0 / 22.0);
var C4 = (3.0 / 26.0);
var C5 = (0.75 * C3);
var C6 = (1.5 * C4);
var C7 = (0.5 * C2);
var C8 = (C3 + C3);
if((((cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0)) < (0))) || ((((cljs.core.min.cljs$core$IFn$_invoke$arity$variadic((x + y),(x + z),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(y + z),Math.abs(p)], 0)) < tiny)) || ((cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z,Math.abs(p)], 0)) > big)))))){
emmy.util.illegal("Carlson R_J");
} else {
}

var vec__59024 = (((p > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,p], null):(function (){var xt = cljs.core.min.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0));
var zt = cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0));
var yt = ((((x + y) + z) - xt) - zt);
var a = (1.0 / (yt - p));
var b = ((a * (zt - yt)) * (yt - xt));
var pt = (yt + b);
var rho = ((xt * zt) / yt);
var tau = ((p * pt) / yt);
var rcx = emmy.special.elliptic.carlson_rc(rho,tau);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [xt,yt,zt,pt,a,b,rcx], null);
})());
var xt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(0),null);
var yt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(1),null);
var zt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(2),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(4),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(5),null);
var rcx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59024,(6),null);
var xt__$1 = xt;
var yt__$1 = yt;
var zt__$1 = zt;
var pt__$1 = pt;
var sum = 0.0;
var fac = 1.0;
while(true){
var sqrtx = Math.sqrt(xt__$1);
var sqrty = Math.sqrt(yt__$1);
var sqrtz = Math.sqrt(zt__$1);
var alamb = ((sqrtx * (sqrty + sqrtz)) + (sqrty * sqrtz));
var alpha = Math.pow(((pt__$1 * ((sqrtx + sqrty) + sqrtz)) + ((sqrtx * sqrty) * sqrtz)),(2));
var beta = (pt__$1 * Math.pow((pt__$1 + alamb),(2)));
var sump = (sum + (fac * emmy.special.elliptic.carlson_rc(alpha,beta)));
var facp = (0.25 * fac);
var xp = (0.25 * (xt__$1 + alamb));
var yp = (0.25 * (yt__$1 + alamb));
var zp = (0.25 * (zt__$1 + alamb));
var pp = (0.25 * (pt__$1 + alamb));
var ave = (0.2 * ((((xp + yp) + zp) + pp) + pp));
var delx = ((ave - xp) / ave);
var dely = ((ave - yp) / ave);
var delz = ((ave - zp) / ave);
var delp = ((ave - pp) / ave);
if((cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(Math.abs(delx),Math.abs(dely),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([Math.abs(delz),Math.abs(delp)], 0)) > errtol)){
var G__59203 = xp;
var G__59204 = yp;
var G__59205 = zp;
var G__59206 = pp;
var G__59207 = sump;
var G__59208 = facp;
xt__$1 = G__59203;
yt__$1 = G__59204;
zt__$1 = G__59205;
pt__$1 = G__59206;
sum = G__59207;
fac = G__59208;
continue;
} else {
var ea = ((delx * (dely + delz)) + (dely * delz));
var eb = ((delx * dely) * delz);
var ec = (delp * delp);
var ed = (ea - (3.0 * ec));
var ee = (eb + ((2.0 * delp) * (ea - ec)));
var rj = ((3.0 * sump) + ((facp * ((((1.0 + (ed * (((C5 * ed) - (C6 * ee)) - C1))) + (eb * (C7 + (delp * ((delp * C4) - C8))))) + ((delp * ea) * (C2 - (delp * C3)))) + (- ((C2 * delp) * ec)))) / (ave * Math.sqrt(ave))));
if((p <= (0))){
return (a * ((b * rj) + (3.0 * (rcx - emmy.special.elliptic.carlson_rf(xp,yp,zp)))));
} else {
return rj;
}
}
break;
}
});
/**
 * Legendre elliptic integral of the first kind F(φ, k).
 * See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.19
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
emmy.special.elliptic.elliptic_f = (function emmy$special$elliptic$elliptic_f(phi,k){
var s = Math.sin(phi);
var sk = (s * k);
return (s * emmy.special.elliptic.carlson_rf(Math.pow(Math.cos(phi),(2)),(((1) - sk) * ((1) + sk)),(1)));
});
/**
 * Complete elliptic integral of the first kind - see Press, 6.11.18.
 */
emmy.special.elliptic.elliptic_k = (function emmy$special$elliptic$elliptic_k(k){
return emmy.special.elliptic.elliptic_f((Math.PI / (2)),k);
});
/**
 * Passing `k` returns the complete elliptic integral of the second kind - see
 *   Press, 6.11.20.
 * 
 *   The two-arity version returns the Legendre elliptic integral of the second
 *   kind E(φ, k). See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.20.
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
emmy.special.elliptic.elliptic_e = (function emmy$special$elliptic$elliptic_e(var_args){
var G__59070 = arguments.length;
switch (G__59070) {
case 1:
return emmy.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$1 = (function (k){
return emmy.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$2((Math.PI / (2)),k);
}));

(emmy.special.elliptic.elliptic_e.cljs$core$IFn$_invoke$arity$2 = (function (phi,k){
var s = Math.sin(phi);
var c = Math.cos(phi);
var cc = (c * c);
var sk = (s * k);
var q = (((1) - sk) * ((1) + sk));
return (s * (emmy.special.elliptic.carlson_rf(cc,q,1.0) - ((sk * sk) * (emmy.special.elliptic.carlson_rd(cc,q,1.0) / 3.0))));
}));

(emmy.special.elliptic.elliptic_e.cljs$lang$maxFixedArity = 2);

/**
 * Computes the first and second complete elliptic integrals at once, and passes
 *   them to the supplied continuation as args `K` and `E`.
 */
emmy.special.elliptic.elliptic_integrals = (function emmy$special$elliptic$elliptic_integrals(k,continue$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(Infinity,1.0) : continue$.call(null,Infinity,1.0));
} else {
var a = 1.0;
var b = Math.sqrt((1.0 - (k * k)));
var c = k;
var d = 0.0;
var powers_2 = 1.0;
while(true){
if((Math.abs(c) < emmy.util.machine_epsilon)){
var first_elliptic_integral = ((Math.PI / (2)) / a);
var G__59085 = first_elliptic_integral;
var G__59086 = (first_elliptic_integral * (1.0 - (d / 2.0)));
return (continue$.cljs$core$IFn$_invoke$arity$2 ? continue$.cljs$core$IFn$_invoke$arity$2(G__59085,G__59086) : continue$.call(null,G__59085,G__59086));
} else {
var G__59217 = ((a + b) / 2.0);
var G__59218 = Math.sqrt((a * b));
var G__59219 = ((a - b) / 2.0);
var G__59220 = (d + ((c * c) * powers_2));
var G__59221 = (powers_2 * 2.0);
a = G__59217;
b = G__59218;
c = G__59219;
d = G__59220;
powers_2 = G__59221;
continue;
}
break;
}
}
});
/**
 * Returns a pair of:
 * 
 *   - the elliptic integral of the first kind, `K`
 *   - the derivative `dK/dk`
 * 
 *   evaluated at `k`.
 */
emmy.special.elliptic.k_and_deriv = (function emmy$special$elliptic$k_and_deriv(k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,0.0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.PI / (2)),0.0], null);
} else {
var cont = (function emmy$special$elliptic$k_and_deriv_$_cont(Kk,Ek){
var DKk = (((Ek / ((1) - (k * k))) - Kk) / k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Kk,DKk], null);
});
return emmy.special.elliptic.elliptic_integrals(k,cont);
}
});
/**
 * The two-arity call returns the complete elliptic integral of the third kind -
 *   see
 *   https://en.wikipedia.org/wiki/Carlson_symmetric_form#Complete_elliptic_integrals
 *   for reference.
 * 
 *   The three-arity call returns the Legendre elliptic integral of the third kind
 *   Π(φ, k). See W.H. Press, Numerical Recipes in C++, 2ed. eq. 6.11.21; Note that
 *   our sign convention for `n` is opposite theirs.
 * 
 *   See [page 260](http://phys.uri.edu/nigh/NumRec/bookfpdf/f6-11.pdf).
 */
emmy.special.elliptic.elliptic_pi = (function emmy$special$elliptic$elliptic_pi(var_args){
var G__59090 = arguments.length;
switch (G__59090) {
case 2:
return emmy.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
return emmy.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$3((Math.PI / (2)),n,k);
}));

(emmy.special.elliptic.elliptic_pi.cljs$core$IFn$_invoke$arity$3 = (function (phi,n,k){
var s = Math.sin(phi);
var c = Math.cos(phi);
var nss = ((n * s) * s);
var cc = (c * c);
var sk = (s * k);
var q = (((1) - sk) * ((1) + sk));
return (s * (emmy.special.elliptic.carlson_rf(cc,q,1.0) + (nss * (emmy.special.elliptic.carlson_rj(cc,q,1.0,(1.0 - nss)) / 3.0))));
}));

(emmy.special.elliptic.elliptic_pi.cljs$lang$maxFixedArity = 3);

/**
 * Internal helper to set constants for [[Jacobi-elliptic-functions]].
 *   
 */
emmy.special.elliptic.emc_u_d = (function emmy$special$elliptic$emc_u_d(emc,u,d){
var bo = (emc < 0.0);
if(bo){
var d__$1 = (1.0 - emc);
var emc__$1 = (- (emc / d__$1));
var d__$2 = Math.sqrt(d__$1);
var u__$1 = (u * d__$2);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bo,emc__$1,u__$1,d__$2], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bo,emc,u,d], null);
}
});
/**
 * Direct Clojure translation (via the Scheme translation in scmutils) of W.H.
 *   Press, Numerical Recipes, subroutine `sncndn`.
 * 
 *   Calls the supplied continuation `cont` with `sn`, `cn` and `dn` as defined
 *   below.
 * 
 *   If no `cont` is supplied, returns a three-vector of `sn`, `cn` and `dn`.
 * 
 *   Comments from Press, page 261:
 * 
 *   The Jacobian elliptic function sn is defined as follows: instead of
 *   considering the elliptic integral
 * 
 *   $$u(y, k) \equiv u=F(\phi, k)$$
 * 
 *   Consider the _inverse_ function:
 * 
 *   ```
 *   $$y = \sin \phi = \mathrm{sn}(u, k)$$
 *   ```
 * 
 *   Equivalently,
 * 
 *   ```
 *   $$u=\int_{0}^{\mathrm{sn}} \frac{d y}{\sqrt{\left(1-y^{2}\right)\left(1-k^{2} y^{2}\right)}}$$
 *   ```
 * 
 *   When $k = 0$, $sn$ is just $\sin$. The functions $cn$ and $dn$ are defined by
 *   the relations
 * 
 *   ```
 *   $$\mathrm{sn}^{2}+\mathrm{cn}^{2}=1, \quad k^{2} \mathrm{sn}^{2}+\mathrm{dn}^{2}=1$$
 *   ```
 * 
 *   The function calls the continuation with all three functions $sn$, $cn$, and
 *   $dn$ since computing all three is no harder than computing any one of them.
 */
emmy.special.elliptic.jacobi_elliptic_functions = (function emmy$special$elliptic$jacobi_elliptic_functions(var_args){
var G__59104 = arguments.length;
switch (G__59104) {
case 2:
return emmy.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$2 = (function (u,k){
return emmy.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$3(u,k,cljs.core.vector);
}));

(emmy.special.elliptic.jacobi_elliptic_functions.cljs$core$IFn$_invoke$arity$3 = (function (u,k,cont){
var eps = emmy.util.sqrt_machine_epsilon;
var emc = (1.0 - (k * k));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emc,0.0)){
var cn = (1.0 / Math.cosh(u));
var G__59109 = Math.tanh(u);
var G__59110 = cn;
var G__59111 = cn;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__59109,G__59110,G__59111) : cont.call(null,G__59109,G__59110,G__59111));
} else {
var vec__59113 = emmy.special.elliptic.emc_u_d(emc,u,1.0);
var bo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(0),null);
var emc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(1),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59113,(3),null);
var a = 1.0;
var emc__$2 = emc__$1;
var i = (1);
var em = cljs.core.PersistentVector.EMPTY;
var en = cljs.core.PersistentVector.EMPTY;
while(true){
var emc__$3 = Math.sqrt(emc__$2);
var c = (0.5 * (a + emc__$3));
if((((Math.abs((a - emc__$3)) > (eps * a))) && ((i < (13))))){
var G__59229 = c;
var G__59230 = (a * emc__$3);
var G__59231 = (i + (1));
var G__59232 = cljs.core.cons(a,em);
var G__59233 = cljs.core.cons(emc__$3,en);
a = G__59229;
emc__$2 = G__59230;
i = G__59231;
em = G__59232;
en = G__59233;
continue;
} else {
var u__$2 = (c * u__$1);
var sn = Math.sin(u__$2);
var cn = Math.cos(u__$2);
var vec__59146 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sn,0.0))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,sn,cn,1.0], null):(function (){var em__$1 = em;
var en__$1 = en;
var a__$1 = (cn / sn);
var c__$1 = (a__$1 * c);
var dn = 1.0;
while(true){
if(((cljs.core.seq(em__$1)) && (cljs.core.seq(en__$1)))){
var b = cljs.core.first(em__$1);
var vec__59163 = (function (){var a__$2 = (c__$1 * a__$1);
var c__$2 = (dn * c__$1);
var dn__$1 = ((cljs.core.first(en__$1) + a__$2) / (a__$2 + b));
var a__$3 = (c__$2 / b);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$3,c__$2,dn__$1], null);
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59163,(0),null);
var c__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59163,(1),null);
var dn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59163,(2),null);
var G__59241 = cljs.core.rest(em__$1);
var G__59242 = cljs.core.rest(en__$1);
var G__59243 = a__$2;
var G__59244 = c__$2;
var G__59245 = dn__$1;
em__$1 = G__59241;
en__$1 = G__59242;
a__$1 = G__59243;
c__$1 = G__59244;
dn = G__59245;
continue;
} else {
var a_SINGLEQUOTE_ = (1.0 / Math.sqrt((1.0 + (c__$1 * c__$1))));
var vec__59172 = (function (){var sn__$1 = (((sn < 0.0))?(- a_SINGLEQUOTE_):a_SINGLEQUOTE_);
var cn__$1 = (c__$1 * sn__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sn__$1,cn__$1], null);
})();
var sn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59172,(0),null);
var cn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59172,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,sn__$1,cn__$1,dn], null);
}
break;
}
})());
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(0),null);
var sn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(1),null);
var cn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(2),null);
var dn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59146,(3),null);
if(cljs.core.truth_(bo)){
var G__59177 = (sn__$1 / d);
var G__59178 = a__$1;
var G__59179 = cn__$1;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__59177,G__59178,G__59179) : cont.call(null,G__59177,G__59178,G__59179));
} else {
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(sn__$1,cn__$1,dn) : cont.call(null,sn__$1,cn__$1,dn));
}
}
break;
}
}
}));

(emmy.special.elliptic.jacobi_elliptic_functions.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=emmy.special.elliptic.js.map
