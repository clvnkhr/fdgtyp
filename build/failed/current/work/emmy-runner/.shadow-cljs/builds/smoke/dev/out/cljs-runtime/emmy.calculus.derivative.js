goog.provide('emmy.calculus.derivative');
/**
 * Returns the partial derivative of `f` with respect to the entry in `structure`
 *   at the location `path`.
 * 
 *   `entry` defaults to `(get-in structure path)`.
 */
emmy.calculus.derivative.deep_partial = (function emmy$calculus$derivative$deep_partial(var_args){
var G__39284 = arguments.length;
switch (G__39284) {
case 3:
return emmy.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return emmy.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$3 = (function (f,structure,path){
var entry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(structure,path);
return emmy.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4(f,structure,path,entry);
}));

(emmy.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4 = (function (f,structure,path,entry){
if(emmy.value.scalar_QMARK_(entry)){
var f_entry = (function emmy$calculus$derivative$f_entry(x){
var G__39286 = cljs.core.assoc_in(structure,path,x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__39286) : f.call(null,G__39286));
});
return emmy.dual.derivative(f_entry)(entry);
} else {
return emmy.util.illegal((""+"non-numerical entry "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(entry)+" at path "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+" in input structure "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(structure)));
}
}));

(emmy.calculus.derivative.deep_partial.cljs$lang$maxFixedArity = 4);

/**
 * Takes:
 * 
 *   - some function `f` of a single [[emmy.structure/structure?]] argument
 *   - the unperturbed structural `input`
 *   - a `selectors` vector that can be empty or contain a valid path into the
 *  `input` structure
 * 
 *   and returns either:
 * 
 *   - The full [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *  of `f` at `input`, if `selectors` is empty
 *   - the entry of the Jacobian at `selectors`
 * 
 *   The Jacobian has the same shape as `input` (or the entry at `selectors`) with
 *   all orientations flipped. Multiply this by an increment in the shape of
 *   `input` to produce an increment in the output of `f`.
 */
emmy.calculus.derivative.jacobian = (function emmy$calculus$derivative$jacobian(var_args){
var G__39288 = arguments.length;
switch (G__39288) {
case 2:
return emmy.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return emmy.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$2 = (function (f,input){
return emmy.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3(f,input,cljs.core.PersistentVector.EMPTY);
}));

(emmy.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3 = (function (f,input,selectors){
var prefixed = (function emmy$calculus$derivative$prefixed(path){
if(cljs.core.empty_QMARK_(selectors)){
return path;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(selectors,path);
}
});
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(input,selectors);
if(cljs.core.truth_(temp__5823__auto__)){
var piece = temp__5823__auto__;
var frame = emmy.structure.transpose(piece);
return emmy.structure.map_chain((function (entry,path,_){
return emmy.calculus.derivative.deep_partial.cljs$core$IFn$_invoke$arity$4(f,input,prefixed(path),entry);
}),frame);
} else {
return emmy.util.illegal((""+"Bad selectors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors)+" for structure "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)));
}
}));

(emmy.calculus.derivative.jacobian.cljs$lang$maxFixedArity = 3);

/**
 * Slightly more general version of [[jacobian]] that can handle a single input;
 *   dispatches to either [[jacobian]] or [[derivative]] depending on whether or
 *   not the input is structural.
 * 
 *   If you pass non-empty `selectors`, the returned function will throw if it
 *   receives a non-structural, non-scalar argument.
 */
emmy.calculus.derivative.euclidean = (function emmy$calculus$derivative$euclidean(var_args){
var G__39290 = arguments.length;
switch (G__39290) {
case 1:
return emmy.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}));

(emmy.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2 = (function (f,selectors){
var selectors__$1 = cljs.core.vec(selectors);
return (function (input){
if(emmy.structure.structure_QMARK_(input)){
return emmy.calculus.derivative.jacobian.cljs$core$IFn$_invoke$arity$3(f,input,selectors__$1);
} else {
if(cljs.core.empty_QMARK_(selectors__$1)){
return emmy.dual.derivative(f)(input);
} else {
return emmy.util.illegal((""+"Selectors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(selectors__$1)+" not allowed for non-structural input "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(input)));

}
}
});
}));

(emmy.calculus.derivative.euclidean.cljs$lang$maxFixedArity = 2);

/**
 * Given
 * 
 *  - some higher-order function `op` that transforms a function of a single
 *    variable into another function of a single variable
 *  - function `f` capable of taking multiple arguments
 * 
 *   returns a new function that acts like `(op f)` but can take multiple
 *   arguments.
 * 
 *   When passed multiple arguments, the returned functon packages them into a
 *   single `[[emmy.structure/up]]` instance. Any [[emmy.matrix/Matrix]] present in
 *   the argument list will be converted into a `down` of `up`s (a row of columns).
 */
emmy.calculus.derivative.multi = (function emmy$calculus$derivative$multi(op,f){
return emmy.function$.with_arity.cljs$core$IFn$_invoke$arity$3((function() {
var G__39365 = null;
var G__39365__0 = (function (){
return (0);
});
var G__39365__1 = (function (x){
var fexpr__39291 = (op.cljs$core$IFn$_invoke$arity$1 ? op.cljs$core$IFn$_invoke$arity$1(f) : op.call(null,f));
return (fexpr__39291.cljs$core$IFn$_invoke$arity$1 ? fexpr__39291.cljs$core$IFn$_invoke$arity$1(x) : fexpr__39291.call(null,x));
});
var G__39365__2 = (function() { 
var G__39369__delegate = function (x,more){
var G__39295 = emmy.matrix.seq__GT_(cljs.core.cons(x,more));
var fexpr__39294 = (function (){var G__39296 = op;
var G__39297 = (function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
});
return (emmy.calculus.derivative.multi.cljs$core$IFn$_invoke$arity$2 ? emmy.calculus.derivative.multi.cljs$core$IFn$_invoke$arity$2(G__39296,G__39297) : emmy.calculus.derivative.multi.call(null,G__39296,G__39297));
})();
return (fexpr__39294.cljs$core$IFn$_invoke$arity$1 ? fexpr__39294.cljs$core$IFn$_invoke$arity$1(G__39295) : fexpr__39294.call(null,G__39295));
};
var G__39369 = function (x,var_args){
var more = null;
if (arguments.length > 1) {
var G__39370__i = 0, G__39370__a = new Array(arguments.length -  1);
while (G__39370__i < G__39370__a.length) {G__39370__a[G__39370__i] = arguments[G__39370__i + 1]; ++G__39370__i;}
  more = new cljs.core.IndexedSeq(G__39370__a,0,null);
} 
return G__39369__delegate.call(this,x,more);};
G__39369.cljs$lang$maxFixedArity = 1;
G__39369.cljs$lang$applyTo = (function (arglist__39371){
var x = cljs.core.first(arglist__39371);
var more = cljs.core.rest(arglist__39371);
return G__39369__delegate(x,more);
});
G__39369.cljs$core$IFn$_invoke$arity$variadic = G__39369__delegate;
return G__39369;
})()
;
G__39365 = function(x,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return G__39365__0.call(this);
case 1:
return G__39365__1.call(this,x);
default:
var G__39372 = null;
if (arguments.length > 1) {
var G__39373__i = 0, G__39373__a = new Array(arguments.length -  1);
while (G__39373__i < G__39373__a.length) {G__39373__a[G__39373__i] = arguments[G__39373__i + 1]; ++G__39373__i;}
G__39372 = new cljs.core.IndexedSeq(G__39373__a,0,null);
}
return G__39365__2.cljs$core$IFn$_invoke$arity$variadic(x, G__39372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39365.cljs$lang$maxFixedArity = 1;
G__39365.cljs$lang$applyTo = G__39365__2.cljs$lang$applyTo;
G__39365.cljs$core$IFn$_invoke$arity$0 = G__39365__0;
G__39365.cljs$core$IFn$_invoke$arity$1 = G__39365__1;
G__39365.cljs$core$IFn$_invoke$arity$variadic = G__39365__2.cljs$core$IFn$_invoke$arity$variadic;
return G__39365;
})()
,emmy.function$.arity(f),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword("emmy.calculus.derivative","multi","emmy.calculus.derivative/multi",-1645123100)], null));
});
/**
 * Slightly wider version of [[euclidean]]. Accepts:
 * 
 *   - some function `f` of potentially many arguments
 *   - optionally, a sequence of selectors meant to index into the structural
 *  argument, or argument vector, of `f`
 * 
 *   And returns a new function that computes either the
 *   full [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   or the entry at `selectors` using [forward-mode automatic
 *   differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation#Forward_accumulation).
 * 
 *   Any multivariable function will have its argument vector coerced into an `up`
 *   structure. Any [[emmy.matrix/Matrix]] in a multiple-arg function call will be
 *   converted into a `down` of `up`s (a row of columns).
 * 
 *   Arguments to single-variable functions are not transformed.
 */
emmy.calculus.derivative.multivariate = (function emmy$calculus$derivative$multivariate(var_args){
var G__39300 = arguments.length;
switch (G__39300) {
case 1:
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}));

(emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2 = (function (f,selectors){
var d = (function (p1__39298_SHARP_){
return emmy.calculus.derivative.euclidean.cljs$core$IFn$_invoke$arity$2(p1__39298_SHARP_,selectors);
});
return emmy.calculus.derivative.multi(d,f);
}));

(emmy.calculus.derivative.multivariate.cljs$lang$maxFixedArity = 2);

/**
 * Accepts:
 * 
 *   - some function `f` of potentially many arguments
 *   - optionally, a sequence of selectors meant to index into the structural
 *  argument, or argument vector, of `f`
 * 
 *   And returns a new function that computes either the
 *   full [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   or the entry at `selectors` using [reverse-mode automatic
 *   differentiation](https://en.wikipedia.org/wiki/Automatic_differentiation#Reverse_accumulation).
 * 
 *   Any multivariable function will have its argument vector coerced into an `up`
 *   structure. Any [[emmy.matrix/Matrix]] in a multiple-arg function call will be
 *   converted into a `down` of `up`s (a row of columns).
 * 
 *   Arguments to single-variable functions are not transformed.
 */
emmy.calculus.derivative.gradient = (function emmy$calculus$derivative$gradient(var_args){
var G__39304 = arguments.length;
switch (G__39304) {
case 1:
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}));

(emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2 = (function (f,selectors){
return emmy.calculus.derivative.multi((function (p1__39301_SHARP_){
return emmy.tape.gradient.cljs$core$IFn$_invoke$arity$2(p1__39301_SHARP_,selectors);
}),f);
}));

(emmy.calculus.derivative.gradient.cljs$lang$maxFixedArity = 2);

emmy.calculus.derivative._STAR_mode_STAR_ = new cljs.core.Keyword("emmy.dual","reverse","emmy.dual/reverse",-1140830856);
var seq__39306_39554 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("emmy.value","function","emmy.value/function",-1238426744),new cljs.core.Keyword("emmy.structure","structure","emmy.structure/structure",1597503132)], null));
var chunk__39307_39555 = null;
var count__39308_39556 = (0);
var i__39309_39557 = (0);
while(true){
if((i__39309_39557 < count__39308_39556)){
var t_39558 = chunk__39307_39555.cljs$core$IIndexed$_nth$arity$2(null,i__39309_39557);
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_39558,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),((function (seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39558){
return (function (f,selectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative._STAR_mode_STAR_,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,selectors);
} else {
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2(f,selectors);
}
});})(seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39558))
);

emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_39558,null], null),((function (seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39558){
return (function (f,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative._STAR_mode_STAR_,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
} else {
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}
});})(seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39558))
);


var G__39562 = seq__39306_39554;
var G__39563 = chunk__39307_39555;
var G__39564 = count__39308_39556;
var G__39565 = (i__39309_39557 + (1));
seq__39306_39554 = G__39562;
chunk__39307_39555 = G__39563;
count__39308_39556 = G__39564;
i__39309_39557 = G__39565;
continue;
} else {
var temp__5825__auto___39567 = cljs.core.seq(seq__39306_39554);
if(temp__5825__auto___39567){
var seq__39306_39568__$1 = temp__5825__auto___39567;
if(cljs.core.chunked_seq_QMARK_(seq__39306_39568__$1)){
var c__5694__auto___39569 = cljs.core.chunk_first(seq__39306_39568__$1);
var G__39570 = cljs.core.chunk_rest(seq__39306_39568__$1);
var G__39571 = c__5694__auto___39569;
var G__39572 = cljs.core.count(c__5694__auto___39569);
var G__39573 = (0);
seq__39306_39554 = G__39570;
chunk__39307_39555 = G__39571;
count__39308_39556 = G__39572;
i__39309_39557 = G__39573;
continue;
} else {
var t_39574 = cljs.core.first(seq__39306_39568__$1);
emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_39574,new cljs.core.Keyword("emmy.value","seq","emmy.value/seq",2124022964)], null),((function (seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39574,seq__39306_39568__$1,temp__5825__auto___39567){
return (function (f,selectors){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative._STAR_mode_STAR_,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,selectors);
} else {
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2(f,selectors);
}
});})(seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39574,seq__39306_39568__$1,temp__5825__auto___39567))
);

emmy.generic.partial_derivative.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_39574,null], null),((function (seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39574,seq__39306_39568__$1,temp__5825__auto___39567){
return (function (f,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(emmy.calculus.derivative._STAR_mode_STAR_,new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395))){
return emmy.calculus.derivative.multivariate.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
} else {
return emmy.calculus.derivative.gradient.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}
});})(seq__39306_39554,chunk__39307_39555,count__39308_39556,i__39309_39557,t_39574,seq__39306_39568__$1,temp__5825__auto___39567))
);


var G__39580 = cljs.core.next(seq__39306_39568__$1);
var G__39581 = null;
var G__39582 = (0);
var G__39583 = (0);
seq__39306_39554 = G__39580;
chunk__39307_39555 = G__39581;
count__39308_39556 = G__39582;
i__39309_39557 = G__39583;
continue;
}
} else {
}
}
break;
}
/**
 * Forward-mode derivative operator. Takes some function `f` and returns a
 *   function whose value at some point can multiply an increment in the arguments
 *   to produce the best linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D-forward]] computes a derivative. For vector-valued
 *   functions, [[D-forward]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 */
emmy.calculus.derivative.D_forward = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (f){
var _STAR_mode_STAR__orig_val__39322 = emmy.calculus.derivative._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__39323 = new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395);
(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__39323);

try{return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}finally {(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__39322);
}}),emmy.generic.derivative_symbol);
/**
 * Reverse-mode derivative operator. Takes some function `f` and returns a
 *   function whose value at some point can multiply an increment in the arguments
 *   to produce the best linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D-reverse]] computes a derivative. For vector-valued
 *   functions, [[D-reverse]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 */
emmy.calculus.derivative.D_reverse = emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (f){
var _STAR_mode_STAR__orig_val__39325 = emmy.calculus.derivative._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__39326 = new cljs.core.Keyword("emmy.dual","reverse","emmy.dual/reverse",-1140830856);
(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__39326);

try{return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(f,cljs.core.PersistentVector.EMPTY);
}finally {(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__39325);
}}),emmy.generic.derivative_symbol);
/**
 * Derivative operator. Takes some function `f` and returns a function whose value
 *   at some point can multiply an increment in the arguments to produce the best
 *   linear estimate of the increment in the function value.
 * 
 *   For univariate functions, [[D]] computes a derivative. For vector-valued
 *   functions, [[D]] computes
 *   the [Jacobian](https://en.wikipedia.org/wiki/Jacobian_matrix_and_determinant)
 *   of `f`.
 * 
 *   The related [[emmy.env/Grad]] returns a function that produces a structure of
 *   the opposite orientation as [[D]]. Both of these functions use reverse-mode
 *   automatic differentiation.
 */
emmy.calculus.derivative.D = emmy.calculus.derivative.D_reverse;
emmy.calculus.derivative.D_as_matrix = (function emmy$calculus$derivative$D_as_matrix(F){
return (function (s){
return emmy.matrix.s__GT_m.cljs$core$IFn$_invoke$arity$3(emmy.structure.compatible_shape((F.cljs$core$IFn$_invoke$arity$1 ? F.cljs$core$IFn$_invoke$arity$1(s) : F.call(null,s))),(function (){var fexpr__39327 = (emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1 ? emmy.calculus.derivative.D.cljs$core$IFn$_invoke$arity$1(F) : emmy.calculus.derivative.D.call(null,F));
return (fexpr__39327.cljs$core$IFn$_invoke$arity$1 ? fexpr__39327.cljs$core$IFn$_invoke$arity$1(s) : fexpr__39327.call(null,s));
})(),s);
});
});
/**
 * Returns an operator that, when applied to a function `f`, produces a function
 *   that uses forward-mode automatic differentiation to compute the partial
 *   derivative of `f` at the (zero-based) slot index provided via `selectors`.
 */
emmy.calculus.derivative.partial_forward = (function emmy$calculus$derivative$partial_forward(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39589 = arguments.length;
var i__5898__auto___39590 = (0);
while(true){
if((i__5898__auto___39590 < len__5897__auto___39589)){
args__5903__auto__.push((arguments[i__5898__auto___39590]));

var G__39591 = (i__5898__auto___39590 + (1));
i__5898__auto___39590 = G__39591;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.calculus.derivative.partial_forward.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.calculus.derivative.partial_forward.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (x){
var _STAR_mode_STAR__orig_val__39330 = emmy.calculus.derivative._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__39331 = new cljs.core.Keyword("emmy.dual","forward","emmy.dual/forward",1374847395);
(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__39331);

try{return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(x,selectors);
}finally {(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__39330);
}}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),selectors))));
}));

(emmy.calculus.derivative.partial_forward.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.calculus.derivative.partial_forward.cljs$lang$applyTo = (function (seq39329){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39329));
}));

/**
 * Returns an operator that, when applied to a function `f`, produces a function
 *   that uses reverse-mode automatic differentiation to compute the partial
 *   derivative of `f` at the (zero-based) slot index provided via `selectors`.
 */
emmy.calculus.derivative.partial_reverse = (function emmy$calculus$derivative$partial_reverse(var_args){
var args__5903__auto__ = [];
var len__5897__auto___39594 = arguments.length;
var i__5898__auto___39595 = (0);
while(true){
if((i__5898__auto___39595 < len__5897__auto___39594)){
args__5903__auto__.push((arguments[i__5898__auto___39595]));

var G__39596 = (i__5898__auto___39595 + (1));
i__5898__auto___39595 = G__39596;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return emmy.calculus.derivative.partial_reverse.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(emmy.calculus.derivative.partial_reverse.cljs$core$IFn$_invoke$arity$variadic = (function (selectors){
return emmy.operator.make_operator.cljs$core$IFn$_invoke$arity$2((function (x){
var _STAR_mode_STAR__orig_val__39333 = emmy.calculus.derivative._STAR_mode_STAR_;
var _STAR_mode_STAR__temp_val__39334 = new cljs.core.Keyword("emmy.dual","reverse","emmy.dual/reverse",-1140830856);
(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__temp_val__39334);

try{return emmy.generic.partial_derivative.cljs$core$IFn$_invoke$arity$2(x,selectors);
}finally {(emmy.calculus.derivative._STAR_mode_STAR_ = _STAR_mode_STAR__orig_val__39333);
}}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"partial","partial",1881673272,null),null,(1),null)),selectors))));
}));

(emmy.calculus.derivative.partial_reverse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(emmy.calculus.derivative.partial_reverse.cljs$lang$applyTo = (function (seq39332){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39332));
}));

/**
 * Returns an operator that, when applied to a function `f`, produces a function
 *   that uses forward-mode automatic differentiation to compute the partial
 *   derivative of `f` at the (zero-based) slot index provided via `selectors`.
 */
emmy.calculus.derivative.partial = emmy.calculus.derivative.partial_reverse;
/**
 * Given a differentiable function `f` and any number of arguments `xs`, returns
 *   a [[emmy.series/PowerSeries]] representing the [Taylor
 *   series](https://en.wikipedia.org/wiki/Taylor_series) of the function `f`
 *   expanded at `xs`.
 * 
 *   Calling [[taylor-series]] with no arguments will return the [Maclaurin
 *   series](https://en.wikipedia.org/wiki/Taylor_series#List_of_Maclaurin_series_of_some_common_functions)
 *   of `f`, i.e., the Taylor series expansion at `(= x 0)`.
 * 
 *   Calling the returned power series with incremental argument `dx` will produce
 *   a [[emmy.series/Series]] representing the terms of the Taylor series of
 *   `f` expanded at `x` and evaluated at `x+dx`.
 * 
 *   NOTE: Just like the [[D]] operator, functions `f` of multiple-arguments are
 *   treated as a function of a single structural argument. If you pass multiple
 *   arguments `xs`, you'll have to manually wrap your multiple-argument `dx` in
 *   a [[emmy.structure/up]] or a vector before passing it to the returned
 *   power series.
 * 
 *   NOTE: The typical definition of a Taylor series of `f` expanded around some
 *   point `x` is
 * 
 *   $$T(p) = f(x) + \frac{f'(x)}{1!}(p-x) + \frac{f''(x)}{2!} (p-x)^2 + \ldots,$$
 * 
 *   where `p` is the evaluation point. When `(= p x)`, all derivatives of the
 *   Taylor series expansion of `f` will exactly match the derivatives of `f`
 *   itself.
 * 
 *   The Taylor series returned here (call it $T'$) is actually a function of `dx`,
 *   where
 * 
 *   $$T'(dx) = T(x+dx) = f(x) + \frac{f'(x)}{1!}(dx) + \frac{f''(x)}{2!} (dx)^2 + \ldots.$$
 */
emmy.calculus.derivative.taylor_series = (function emmy$calculus$derivative$taylor_series(var_args){
var G__39338 = arguments.length;
switch (G__39338) {
case 1:
return emmy.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___39599 = arguments.length;
var i__5898__auto___39600 = (0);
while(true){
if((i__5898__auto___39600 < len__5897__auto___39599)){
args_arr__5922__auto__.push((arguments[i__5898__auto___39600]));

var G__39601 = (i__5898__auto___39600 + (1));
i__5898__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
}));

(emmy.calculus.derivative.taylor_series.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
return emmy.series.__GT_function(cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__39341 = emmy.generic.exp.cljs$core$IFn$_invoke$arity$1(emmy.calculus.derivative.D);
return (fexpr__39341.cljs$core$IFn$_invoke$arity$1 ? fexpr__39341.cljs$core$IFn$_invoke$arity$1(f) : fexpr__39341.call(null,f));
})(),xs));
}));

/** @this {Function} */
(emmy.calculus.derivative.taylor_series.cljs$lang$applyTo = (function (seq39336){
var G__39337 = cljs.core.first(seq39336);
var seq39336__$1 = cljs.core.next(seq39336);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39337,seq39336__$1);
}));

(emmy.calculus.derivative.taylor_series.cljs$lang$maxFixedArity = (1));

/**
 * Similar to [[taylor-series]], except `f` is evaluated with symbolic arguments,
 *   and these arguments are only replaced with the values `xs` after Taylor series
 *   expansion.
 * 
 *   Please see the docs for [[taylor-series]]!
 */
emmy.calculus.derivative.symbolic_taylor_series = (function emmy$calculus$derivative$symbolic_taylor_series(var_args){
var G__39347 = arguments.length;
switch (G__39347) {
case 1:
return emmy.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5922__auto__ = [];
var len__5897__auto___39610 = arguments.length;
var i__5898__auto___39611 = (0);
while(true){
if((i__5898__auto___39611 < len__5897__auto___39610)){
args_arr__5922__auto__.push((arguments[i__5898__auto___39611]));

var G__39612 = (i__5898__auto___39611 + (1));
i__5898__auto___39611 = G__39612;
continue;
} else {
}
break;
}

var argseq__5923__auto__ = ((((1) < args_arr__5922__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5922__auto__.slice((1)),(0),null)):null);
return emmy.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5923__auto__);

}
});

(emmy.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$1 = (function (f){
return emmy.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0));
}));

(emmy.calculus.derivative.symbolic_taylor_series.cljs$core$IFn$_invoke$arity$variadic = (function (f,xs){
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(emmy.structure.typical_object,xs);
var replace_m = cljs.core.zipmap(cljs.core.flatten(syms),cljs.core.flatten(xs));
var series = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(emmy.calculus.derivative.taylor_series,f,syms);
var process_term = (function emmy$calculus$derivative$process_term(term){
return emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(emmy.structure.mapr.cljs$core$IFn$_invoke$arity$variadic((function emmy$calculus$derivative$process_term_$_rec(x){
if(emmy.dual.dual_QMARK_(x)){
return emmy.dual.bundle_element.cljs$core$IFn$_invoke$arity$3(emmy$calculus$derivative$process_term_$_rec(emmy.dual.primal.cljs$core$IFn$_invoke$arity$1(x)),emmy$calculus$derivative$process_term_$_rec(emmy.dual.tangent.cljs$core$IFn$_invoke$arity$1(x)),emmy.dual.tag(x));
} else {
if(emmy.tape.tape_QMARK_(x)){
return emmy.tape.__GT_TapeCell(emmy.tape.tape_tag(x),emmy.tape.tape_id(x),emmy$calculus$derivative$process_term_$_rec(emmy.tape.tape_primal.cljs$core$IFn$_invoke$arity$1(x)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__39352){
var vec__39353 = p__39352;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39353,(0),null);
var partial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39353,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [emmy$calculus$derivative$process_term_$_rec(node),emmy$calculus$derivative$process_term_$_rec(partial)], null);
}),emmy.tape.tape_partials(x)));
} else {
return emmy.expression.substitute.cljs$core$IFn$_invoke$arity$2(emmy.generic.simplify.cljs$core$IFn$_invoke$arity$1(x),replace_m);

}
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([term], 0)));
});
return emmy.series.fmap(process_term,series);
}));

/** @this {Function} */
(emmy.calculus.derivative.symbolic_taylor_series.cljs$lang$applyTo = (function (seq39345){
var G__39346 = cljs.core.first(seq39345);
var seq39345__$1 = cljs.core.next(seq39345);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39346,seq39345__$1);
}));

(emmy.calculus.derivative.symbolic_taylor_series.cljs$lang$maxFixedArity = (1));


//# sourceMappingURL=emmy.calculus.derivative.js.map
