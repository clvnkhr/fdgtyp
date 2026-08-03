goog.provide('emmy.polynomial.interpolate');
/**
 * Generates a lagrange interpolating polynomial that fits every point in the
 *   supplied sequence `points` (of form `[x (f x)]`) and returns the value of the
 *   polynomial evaluated at `x`.
 * 
 *   The Lagrange polynomial has this form:
 * 
 *   ```
 *   g(x) =  (f(a) * [(x-b)(x-c)...] / [(a-b)(a-c)...])
 *      + (f(b) * [(x-a)(x-c)...] / [(b-a)(b-c)...])
 *      + ...
 *   ```
 * 
 *   for points `[a f(a)], [b f(b)], [c f(c)]` etc.
 * 
 *   This particular method of interpolating `x` into the polynomial is
 *   inefficient; any new calculation requires fully recomputing. Takes `O(n^2)`
 *   operations in the number of points.
 *   
 */
emmy.polynomial.interpolate.lagrange = (function emmy$polynomial$interpolate$lagrange(points,x){
var points__$1 = cljs.core.vec(points);
var n = cljs.core.count(points__$1);
var build_term = (function (i,p__32651){
var vec__32652 = p__32651;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(0),null);
var fa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(1),null);
var others = (function (){var iter__5649__auto__ = (function emmy$polynomial$interpolate$lagrange_$_iter__32655(s__32656){
return (new cljs.core.LazySeq(null,(function (){
var s__32656__$1 = s__32656;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__32656__$1);
if(temp__5825__auto__){
var s__32656__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32656__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__32656__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__32658 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__32657 = (0);
while(true){
if((i__32657 < size__5648__auto__)){
var j = cljs.core._nth(c__5647__auto__,i__32657);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
cljs.core.chunk_append(b__32658,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(0)], null)));

var G__32895 = (i__32657 + (1));
i__32657 = G__32895;
continue;
} else {
var G__32896 = (i__32657 + (1));
i__32657 = G__32896;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32658),emmy$polynomial$interpolate$lagrange_$_iter__32655(cljs.core.chunk_rest(s__32656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32658),null);
}
} else {
var j = cljs.core.first(s__32656__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(points__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(0)], null)),emmy$polynomial$interpolate$lagrange_$_iter__32655(cljs.core.rest(s__32656__$2)));
} else {
var G__32901 = cljs.core.rest(s__32656__$2);
s__32656__$1 = G__32901;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})();
var p = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32647_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(x,p1__32647_SHARP_);
}),others));
var q = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32648_SHARP_){
return emmy.generic._.cljs$core$IFn$_invoke$arity$2(a,p1__32648_SHARP_);
}),others));
return emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$variadic(emmy.generic.invert.cljs$core$IFn$_invoke$arity$1(q),fa,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p], 0));
});
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(build_term),emmy.generic._PLUS_,points__$1);
});
/**
 * Top-down implementation of [Neville's
 *   algorithm]((https://en.wikipedia.org/wiki/Neville%27s_algorithm))
 * 
 *   Returns the value of `P(x)`, where `P` is a polynomial fit (using Neville's
 *   algorithm) to every point in the supplied sequence `points` (of form `[x (f
 *   x)]`)
 * 
 *   The efficiency and results should be identical to
 *   [[emmy.numerical.interpolate/lagrange]]. This function represents a step
 *   on the journey toward more incremental methods of polynomial interpolation.
 * 
 *   References:
 * 
 *   - Press's Numerical Recipes (p103), [chapter 3](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-1.pdf)
 *   - Wikipedia, [Neville's Algorithm](https://en.wikipedia.org/wiki/Neville%27s_algorithm)
 */
emmy.polynomial.interpolate.neville_recursive = (function emmy$polynomial$interpolate$neville_recursive(points,x){
var evaluate = (function emmy$polynomial$interpolate$neville_recursive_$_evaluate(points__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(points__$1))){
var vec__32683 = points__$1;
var vec__32686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32683,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32686,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32686,(1),null);
return y;
} else {
var l_branch = cljs.core.pop(points__$1);
var r_branch = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(points__$1,(1));
var vec__32689 = cljs.core.first(points__$1);
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32689,(0),null);
var vec__32692 = cljs.core.peek(points__$1);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32692,(0),null);
return emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(x,xr),emmy$polynomial$interpolate$neville_recursive_$_evaluate(l_branch)),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(xl,x),emmy$polynomial$interpolate$neville_recursive_$_evaluate(r_branch))),emmy.generic._.cljs$core$IFn$_invoke$arity$2(xl,xr));
}
});
return evaluate(cljs.core.vec(points));
});
/**
 * Processes each point of the form `[x, (f x)]` into:
 * 
 *   ```
 *   $$[x_l, x_r, p]$$
 *   ```
 * 
 *   where $p$ is the polynomial that spans all points from $l$ to $r$. The
 *   recursion starts with $p = f(x)$.
 *   
 */
emmy.polynomial.interpolate.neville_prepare = (function emmy$polynomial$interpolate$neville_prepare(p__32708){
var vec__32711 = p__32708;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32711,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,fx], null);
});
/**
 * Given some value $x$, returns a function that combines $l$ and $r$ entries in
 *   the tableau, arranged like this:
 * 
 *   ```
 *   l -- return
 *   /
 *  /
 * /
 *   r
 *   ```
 * 
 *   generates the `return` entry of the form
 * 
 *   $$[x_l, x_r, p]$$.
 */
emmy.polynomial.interpolate.neville_combine_fn = (function emmy$polynomial$interpolate$neville_combine_fn(x){
return (function (p__32719,p__32720){
var vec__32724 = p__32719;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(1),null);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32724,(2),null);
var vec__32727 = p__32720;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(1),null);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32727,(2),null);
var plr = emmy.generic._SLASH_.cljs$core$IFn$_invoke$arity$2(emmy.generic._PLUS_.cljs$core$IFn$_invoke$arity$2(emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(x,xr),pl),emmy.generic._STAR_.cljs$core$IFn$_invoke$arity$2(emmy.generic._.cljs$core$IFn$_invoke$arity$2(xl,x),pr)),emmy.generic._.cljs$core$IFn$_invoke$arity$2(xl,xr));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,plr], null);
});
});
/**
 * This function takes some point $x$, and returns a new function that takes some
 *   column in the tableau and generates the next column.
 */
emmy.polynomial.interpolate.neville_next_column = (function emmy$polynomial$interpolate$neville_next_column(x){
return (function (prev_column){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(emmy.polynomial.interpolate.neville_combine_fn(x),prev_column,cljs.core.rest(prev_column));
});
});
emmy.polynomial.interpolate.neville_tableau = (function emmy$polynomial$interpolate$neville_tableau(points,x){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.iterate(emmy.polynomial.interpolate.neville_next_column(x),cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.interpolate.neville_prepare,points)));
});
emmy.polynomial.interpolate.first_terms = (function emmy$polynomial$interpolate$first_terms(tableau){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tableau);
});
emmy.polynomial.interpolate.neville_present = (function emmy$polynomial$interpolate$neville_present(row){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,row);
});
/**
 * Takes a potentially lazy sequence of `points` and a point `x` and generates a
 *   lazy sequence of approximations of P(x).
 * 
 *   entry N in the returned sequence is the estimate using a polynomial generated
 *   from the first N points of the input sequence.
 */
emmy.polynomial.interpolate.neville_incremental = (function emmy$polynomial$interpolate$neville_incremental(points,x){
return emmy.polynomial.interpolate.neville_present(emmy.polynomial.interpolate.first_terms(emmy.polynomial.interpolate.neville_tableau(points,x)));
});
/**
 * Returns a Newton-style approximation tableau, given:
 * 
 *   - `prepare`: a fn that processes each element of the supplied `points` into
 *   the state necessary to calculate future tableau entries.
 * 
 *   - `merge`: a fn of `l`and `r` the tableau entries:
 * 
 *   ```
 *   l -- return
 *   /
 *  /
 * /
 *   r
 *   ```
 * 
 *   the inputs are of the same form returned by `prepare`. `merge` should return a
 *   new structure of the same form.
 * 
 *   - `points`: the (potentially lazy) sequence of points used to generate the
 *   first column of the tableau.
 *   
 */
emmy.polynomial.interpolate.tableau_fn = (function emmy$polynomial$interpolate$tableau_fn(prepare,merge,points){
var next_col = (function (previous_col){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(merge,previous_col,cljs.core.rest(previous_col));
});
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.iterate(next_col,cljs.core.map.cljs$core$IFn$_invoke$arity$2(prepare,points)));
});
/**
 * Returns a tableau merge function. Identical to [[neville-combine-fn]] but uses
 *   native operations instead of generic operations.
 */
emmy.polynomial.interpolate.neville_merge = (function emmy$polynomial$interpolate$neville_merge(x){
return (function (p__32764,p__32765){
var vec__32768 = p__32764;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(1),null);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32768,(2),null);
var vec__32771 = p__32765;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
var pr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(2),null);
var p = ((((x - xr) * pl) + ((xl - x) * pr)) / (xl - xr));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,p], null);
});
});
/**
 * Takes:
 * 
 *   - a (potentially lazy) sequence of `points` of the form `[x (f x)]` and
 *   - a point `x` to interpolate
 * 
 *   and generates a lazy sequence of approximations of `P(x)`. Each entry in the
 *   return sequence incorporates one more point from `points` into the `P(x)`
 *   estimate.
 * 
 *   Said another way: the Nth in the returned sequence is the estimate using a
 *   polynomial generated from the first `N` points of the input sequence:
 * 
 *   ```
 *   p0 p01 p012 p0123 p01234
 *   ```
 * 
 *   This function generates each estimate using Neville's algorithm:
 * 
 *   ```
 *   $$P(x) = [(x - x_r) P_l(x) - (x - x_l) P_r(x)] / [x_l - x_r]$$
 *   ```
 * 
 *   ### Column
 * 
 *   If you supply an integer for the third `column` argument, `neville` will
 *   return that _column_ of the interpolation tableau instead of the first row.
 *   This will give you a sequence of nth-order polynomial approximations taken
 *   between point `i` and the next `n` points.
 * 
 *   As a reminder, this is the shape of the tableau:
 * 
 *   ```
 * p0 p01 p012 p0123 p01234
 * p1 p12 p123 p1234 .
 * p2 p23 p234 .     .
 * p3 p34 .    .     .
 * p4 .   .    .     .
 *   ```
 * 
 *   So supplying a `column` of `1` gives a sequence of linear approximations
 *   between pairs of points; `2` gives quadratic approximations between successive
 *   triplets, etc.
 * 
 *   References:
 * 
 *   - [Press's Numerical Recipes (p103), chapter 3](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-1.pdf)
 *   - Wikipedia, [Neville's Algorithm](https://en.wikipedia.org/wiki/Neville%27s_algorithm)
 */
emmy.polynomial.interpolate.neville = (function emmy$polynomial$interpolate$neville(var_args){
var G__32786 = arguments.length;
switch (G__32786) {
case 2:
return emmy.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$2 = (function (points,x){
return emmy.polynomial.interpolate.neville_present(emmy.polynomial.interpolate.first_terms(emmy.polynomial.interpolate.tableau_fn(emmy.polynomial.interpolate.neville_prepare,emmy.polynomial.interpolate.neville_merge(x),points)));
}));

(emmy.polynomial.interpolate.neville.cljs$core$IFn$_invoke$arity$3 = (function (points,x,column){
return emmy.polynomial.interpolate.neville_present(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(emmy.polynomial.interpolate.tableau_fn(emmy.polynomial.interpolate.neville_prepare,emmy.polynomial.interpolate.neville_merge(x),points),column));
}));

(emmy.polynomial.interpolate.neville.cljs$lang$maxFixedArity = 3);

/**
 * Processes an initial point [x (f x)] into the required state:
 * 
 *   [x_l, x_r, C, D]
 * 
 *   The recursion starts with $C = D = f(x)$.
 */
emmy.polynomial.interpolate.mn_prepare = (function emmy$polynomial$interpolate$mn_prepare(p__32788){
var vec__32789 = p__32788;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32789,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32789,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,fx,fx], null);
});
/**
 * Implements the recursion rules described above to generate x_l, x_r, C and D
 *   for a tableau node, given the usual left and left-up tableau entries.
 */
emmy.polynomial.interpolate.mn_merge = (function emmy$polynomial$interpolate$mn_merge(x){
return (function (p__32794,p__32795){
var vec__32797 = p__32794;
var xl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(2),null);
var dl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(3),null);
var vec__32800 = p__32795;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800,(0),null);
var xr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800,(1),null);
var cr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32800,(3),null);
var diff = (cr - dl);
var den = (xl - xr);
var factor = (diff / den);
var c = (factor * (xl - x));
var d = (factor * (xr - x));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xl,xr,c,d], null);
});
});
/**
 * Returns a (lazy) sequence of estimates by successively adding C values from the
 *   first entry of each tableau column. Each C value is the delta from the
 *   previous estimate.
 */
emmy.polynomial.interpolate.mn_present = (function emmy$polynomial$interpolate$mn_present(row){
return emmy.util.aggregate.scan.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32815){
var vec__32816 = p__32815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(3),null);
return c;
}),row));
});
/**
 * Similar to [[neville]] (the interface is identical) but slightly more efficient.
 *   Internally this builds up its estimates by tracking the delta from the
 *   previous estimate.
 * 
 *   This non-obvious change lets us swap an addition in for a multiplication,
 *   making the algorithm slightly more efficient.
 * 
 *   See [[neville]] for usage information, and info about the required structure
 *   of the arguments.
 * 
 *   The structure of the [[modified-neville]] algorithm makes it difficult to
 *   select a particular column. See [[neville]] if you'd like to generate
 *   polynomial approximations between successive sequences of points.
 * 
 *   References:
 * 
 *   - ["A comparison of algorithms for polynomial interpolation"](https://www.sciencedirect.com/science/article/pii/0771050X82900511), A. Macleod
 *   - [Press's Numerical Recipes (p103), chapter 3](http://phys.uri.edu/nigh/NumRec/bookfpdf/f3-1.pdf)
 */
emmy.polynomial.interpolate.modified_neville = (function emmy$polynomial$interpolate$modified_neville(points,x){
return emmy.polynomial.interpolate.mn_present(emmy.polynomial.interpolate.first_terms(emmy.polynomial.interpolate.tableau_fn(emmy.polynomial.interpolate.mn_prepare,emmy.polynomial.interpolate.mn_merge(x),points)));
});
/**
 * Given `prepare` and `merge` and `present` functions, returns a fold capable of
 *   aggregating a point of the form [x, f(x)] into an accumulating tableau
 *   row (generating the next tableau row).
 * 
 *   The 0-arity of the returned function returns an empty row, `[]`.
 * 
 *   The 1-arity calls the supplied `present` on the accumulated tableau row.
 * 
 *   The 2-arity scans the supplied `merge` across all entries in the accumulating
 *   row, producing a new row.
 * 
 *   ### More detail on the arguments:
 * 
 *   - `prepare`: a fn that processes each element of the supplied `points` into
 *   the state necessary to calculate future tableau entries.
 * 
 *   - `merge`: a fn of `l`and `r` the tableau entries:
 * 
 *   l -- return
 *   /
 *  /
 * /
 *   r
 * 
 *   the inputs are of the same form returned by `prepare`. `merge` should return a
 *   new structure of the same form.
 * 
 *   - `present`: Transforms a `tableau` row into an estimate at some value `x` of
 *   the polynomial interpolated to hit all supplied points.
 */
emmy.polynomial.interpolate.tableau_fold_fn = (function emmy$polynomial$interpolate$tableau_fold_fn(prepare,merge,present){
return (function() {
var G__32948 = null;
var G__32948__0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});
var G__32948__1 = (function (row){
return (present.cljs$core$IFn$_invoke$arity$1 ? present.cljs$core$IFn$_invoke$arity$1(row) : present.call(null,row));
});
var G__32948__2 = (function (prev_row,point){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(merge,(prepare.cljs$core$IFn$_invoke$arity$1 ? prepare.cljs$core$IFn$_invoke$arity$1(point) : prepare.call(null,point)),prev_row);
});
G__32948 = function(prev_row,point){
switch(arguments.length){
case 0:
return G__32948__0.call(this);
case 1:
return G__32948__1.call(this,prev_row);
case 2:
return G__32948__2.call(this,prev_row,point);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32948.cljs$core$IFn$_invoke$arity$0 = G__32948__0;
G__32948.cljs$core$IFn$_invoke$arity$1 = G__32948__1;
G__32948.cljs$core$IFn$_invoke$arity$2 = G__32948__2;
return G__32948;
})()
});
/**
 * Given some point `x`, returns a fold that accumulates rows of an interpolation
 *   tableau providing successively better estimates (at the value `x`) of a
 *   polynomial interpolated to all seen points.
 * 
 *   The 2-arity aggregation step takes:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x_new (f x_new)]`
 * 
 *  and returns the next row of the tableau using the algorithm described in
 *   [[neville]].
 */
emmy.polynomial.interpolate.neville_fold = (function emmy$polynomial$interpolate$neville_fold(x){
return emmy.polynomial.interpolate.tableau_fold_fn(emmy.polynomial.interpolate.neville_prepare,emmy.polynomial.interpolate.neville_merge(x),(function (row){
return cljs.core.peek(cljs.core.last(row));
}));
});
/**
 * Aggregates intermediate deltas to produce an estimate for the final value in
 *   the supplied row.
 */
emmy.polynomial.interpolate.mn_present_final = (function emmy$polynomial$interpolate$mn_present_final(row){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__32831){
var vec__32835 = p__32831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835,(3),null);
return c;
})),emmy.util.aggregate._STAR_fold_STAR_,row);
});
/**
 * Given some point `x`, returns a fold that accumulates rows of an interpolation
 *   tableau providing successively better estimates (at the value `x`) of a
 *   polynomial interpolated to all seen points.
 * 
 *   The 2-arity aggregation step takes:
 * 
 *   - `previous-row`: previous row of an interpolation tableau
 *   - a new point of the form `[x_new (f x_new)]`
 * 
 *   and returns the next row of the tableau using the algorithm described in
 *   [[modified-neville]].
 */
emmy.polynomial.interpolate.modified_neville_fold = (function emmy$polynomial$interpolate$modified_neville_fold(x){
return emmy.polynomial.interpolate.tableau_fold_fn(emmy.polynomial.interpolate.mn_prepare,emmy.polynomial.interpolate.mn_merge(x),emmy.polynomial.interpolate.mn_present_final);
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns the best approximation of `x` using a polynomial
 *   fitted to all points in `xs` using the algorithm described in [[neville]].
 * 
 *   Faster than, but equivalent to, `(last ([[neville]] xs x))`
 */
emmy.polynomial.interpolate.neville_sum = (function emmy$polynomial$interpolate$neville_sum(x){
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.interpolate.neville_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns a lazy sequence of successive approximations of
 *   `x` using polynomials fitted to the first point, then the first and second
 *   points, etc. using the algorithm described in [[neville]].
 * 
 *   Equivalent to `([[neville]] xs x)`.
 */
emmy.polynomial.interpolate.neville_scan = (function emmy$polynomial$interpolate$neville_scan(x){
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.interpolate.neville_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns the best approximation of `x` using a polynomial
 *   fitted to all points in `xs` using the algorithm described
 *   in [[modified-neville]].
 * 
 *   Faster than, but equivalent to, `(last ([[modified-neville]] xs x))`
 */
emmy.polynomial.interpolate.modified_neville_sum = (function emmy$polynomial$interpolate$modified_neville_sum(x){
return emmy.algebra.fold.fold__GT_sum_fn.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.interpolate.modified_neville_fold(x));
});
/**
 * Returns a function that consumes an entire sequence `xs` of points of the form
 *   `[x_i, f(x_i)]` and returns a lazy sequence of successive approximations of
 *   `x` using polynomials fitted to the first point, then the first and second
 *   points, etc. using the algorithm described in [[modified-neville]].
 * 
 *   Equivalent to `([[modified-neville]] xs x)`.
 */
emmy.polynomial.interpolate.modified_neville_scan = (function emmy$polynomial$interpolate$modified_neville_scan(x){
return emmy.algebra.fold.fold__GT_scan_fn.cljs$core$IFn$_invoke$arity$1(emmy.polynomial.interpolate.modified_neville_fold(x));
});

//# sourceMappingURL=emmy.polynomial.interpolate.js.map
