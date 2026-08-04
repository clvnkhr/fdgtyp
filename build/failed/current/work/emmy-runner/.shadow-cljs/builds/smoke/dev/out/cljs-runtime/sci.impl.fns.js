goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51780 = arguments.length;
switch (G__51780) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51783 = fixed_arity;
switch (G__51783) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51784){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51784);

while(true){
var ret__51118__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51118__auto__)){
continue;
} else {
return ret__51118__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51784 = null;
if (arguments.length > 0) {
var G__52751__i = 0, G__52751__a = new Array(arguments.length -  0);
while (G__52751__i < G__52751__a.length) {G__52751__a[G__52751__i] = arguments[G__52751__i + 0]; ++G__52751__i;}
  G__51784 = new cljs.core.IndexedSeq(G__52751__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51784);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52752){
var G__51784 = cljs.core.seq(arglist__52752);
return sci$impl$fns$arity_0__delegate(G__51784);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51786,G__51787){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51786);

(invoc_array[vararg_idx] = G__51787);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51786,var_args){
var G__51787 = null;
if (arguments.length > 1) {
var G__52757__i = 0, G__52757__a = new Array(arguments.length -  1);
while (G__52757__i < G__52757__a.length) {G__52757__a[G__52757__i] = arguments[G__52757__i + 1]; ++G__52757__i;}
  G__51787 = new cljs.core.IndexedSeq(G__52757__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51786,G__51787);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52758){
var G__51786 = cljs.core.first(arglist__52758);
var G__51787 = cljs.core.rest(arglist__52758);
return sci$impl$fns$arity_1__delegate(G__51786,G__51787);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51792,G__51793,G__51794){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51792);

(invoc_array[(1)] = G__51793);

(invoc_array[vararg_idx] = G__51794);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51792,G__51793,var_args){
var G__51794 = null;
if (arguments.length > 2) {
var G__52759__i = 0, G__52759__a = new Array(arguments.length -  2);
while (G__52759__i < G__52759__a.length) {G__52759__a[G__52759__i] = arguments[G__52759__i + 2]; ++G__52759__i;}
  G__51794 = new cljs.core.IndexedSeq(G__52759__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51792,G__51793,G__51794);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52760){
var G__51792 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51793 = cljs.core.first(arglist__52760);
var G__51794 = cljs.core.rest(arglist__52760);
return sci$impl$fns$arity_2__delegate(G__51792,G__51793,G__51794);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51798,G__51799,G__51800,G__51801){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51798);

(invoc_array[(1)] = G__51799);

(invoc_array[(2)] = G__51800);

(invoc_array[vararg_idx] = G__51801);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__51798,G__51799,G__51800,var_args){
var G__51801 = null;
if (arguments.length > 3) {
var G__52761__i = 0, G__52761__a = new Array(arguments.length -  3);
while (G__52761__i < G__52761__a.length) {G__52761__a[G__52761__i] = arguments[G__52761__i + 3]; ++G__52761__i;}
  G__51801 = new cljs.core.IndexedSeq(G__52761__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51798,G__51799,G__51800,G__51801);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52762){
var G__51798 = cljs.core.first(arglist__52762);
arglist__52762 = cljs.core.next(arglist__52762);
var G__51799 = cljs.core.first(arglist__52762);
arglist__52762 = cljs.core.next(arglist__52762);
var G__51800 = cljs.core.first(arglist__52762);
var G__51801 = cljs.core.rest(arglist__52762);
return sci$impl$fns$arity_3__delegate(G__51798,G__51799,G__51800,G__51801);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51810,G__51811,G__51812,G__51813,G__51814){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51810);

(invoc_array[(1)] = G__51811);

(invoc_array[(2)] = G__51812);

(invoc_array[(3)] = G__51813);

(invoc_array[vararg_idx] = G__51814);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__51810,G__51811,G__51812,G__51813,var_args){
var G__51814 = null;
if (arguments.length > 4) {
var G__52763__i = 0, G__52763__a = new Array(arguments.length -  4);
while (G__52763__i < G__52763__a.length) {G__52763__a[G__52763__i] = arguments[G__52763__i + 4]; ++G__52763__i;}
  G__51814 = new cljs.core.IndexedSeq(G__52763__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51810,G__51811,G__51812,G__51813,G__51814);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52764){
var G__51810 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__51811 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__51812 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__51813 = cljs.core.first(arglist__52764);
var G__51814 = cljs.core.rest(arglist__52764);
return sci$impl$fns$arity_4__delegate(G__51810,G__51811,G__51812,G__51813,G__51814);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51821,G__51822,G__51823,G__51824,G__51825,G__51826){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51821);

(invoc_array[(1)] = G__51822);

(invoc_array[(2)] = G__51823);

(invoc_array[(3)] = G__51824);

(invoc_array[(4)] = G__51825);

(invoc_array[vararg_idx] = G__51826);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__51821,G__51822,G__51823,G__51824,G__51825,var_args){
var G__51826 = null;
if (arguments.length > 5) {
var G__52765__i = 0, G__52765__a = new Array(arguments.length -  5);
while (G__52765__i < G__52765__a.length) {G__52765__a[G__52765__i] = arguments[G__52765__i + 5]; ++G__52765__i;}
  G__51826 = new cljs.core.IndexedSeq(G__52765__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51821,G__51822,G__51823,G__51824,G__51825,G__51826);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52766){
var G__51821 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51822 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51823 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51824 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51825 = cljs.core.first(arglist__52766);
var G__51826 = cljs.core.rest(arglist__52766);
return sci$impl$fns$arity_5__delegate(G__51821,G__51822,G__51823,G__51824,G__51825,G__51826);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51830,G__51831,G__51832,G__51833,G__51834,G__51835,G__51836){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51830);

(invoc_array[(1)] = G__51831);

(invoc_array[(2)] = G__51832);

(invoc_array[(3)] = G__51833);

(invoc_array[(4)] = G__51834);

(invoc_array[(5)] = G__51835);

(invoc_array[vararg_idx] = G__51836);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__51830,G__51831,G__51832,G__51833,G__51834,G__51835,var_args){
var G__51836 = null;
if (arguments.length > 6) {
var G__52767__i = 0, G__52767__a = new Array(arguments.length -  6);
while (G__52767__i < G__52767__a.length) {G__52767__a[G__52767__i] = arguments[G__52767__i + 6]; ++G__52767__i;}
  G__51836 = new cljs.core.IndexedSeq(G__52767__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51830,G__51831,G__51832,G__51833,G__51834,G__51835,G__51836);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52768){
var G__51830 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51831 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51832 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51833 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51834 = cljs.core.first(arglist__52768);
arglist__52768 = cljs.core.next(arglist__52768);
var G__51835 = cljs.core.first(arglist__52768);
var G__51836 = cljs.core.rest(arglist__52768);
return sci$impl$fns$arity_6__delegate(G__51830,G__51831,G__51832,G__51833,G__51834,G__51835,G__51836);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51840,G__51841,G__51842,G__51843,G__51844,G__51845,G__51846,G__51847){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51840);

(invoc_array[(1)] = G__51841);

(invoc_array[(2)] = G__51842);

(invoc_array[(3)] = G__51843);

(invoc_array[(4)] = G__51844);

(invoc_array[(5)] = G__51845);

(invoc_array[(6)] = G__51846);

(invoc_array[vararg_idx] = G__51847);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__51840,G__51841,G__51842,G__51843,G__51844,G__51845,G__51846,var_args){
var G__51847 = null;
if (arguments.length > 7) {
var G__52769__i = 0, G__52769__a = new Array(arguments.length -  7);
while (G__52769__i < G__52769__a.length) {G__52769__a[G__52769__i] = arguments[G__52769__i + 7]; ++G__52769__i;}
  G__51847 = new cljs.core.IndexedSeq(G__52769__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51840,G__51841,G__51842,G__51843,G__51844,G__51845,G__51846,G__51847);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52770){
var G__51840 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51841 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51842 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51843 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51844 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51845 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51846 = cljs.core.first(arglist__52770);
var G__51847 = cljs.core.rest(arglist__52770);
return sci$impl$fns$arity_7__delegate(G__51840,G__51841,G__51842,G__51843,G__51844,G__51845,G__51846,G__51847);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51870,G__51871,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51870);

(invoc_array[(1)] = G__51871);

(invoc_array[(2)] = G__51873);

(invoc_array[(3)] = G__51874);

(invoc_array[(4)] = G__51875);

(invoc_array[(5)] = G__51876);

(invoc_array[(6)] = G__51877);

(invoc_array[(7)] = G__51878);

(invoc_array[vararg_idx] = G__51879);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__51870,G__51871,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,var_args){
var G__51879 = null;
if (arguments.length > 8) {
var G__52772__i = 0, G__52772__a = new Array(arguments.length -  8);
while (G__52772__i < G__52772__a.length) {G__52772__a[G__52772__i] = arguments[G__52772__i + 8]; ++G__52772__i;}
  G__51879 = new cljs.core.IndexedSeq(G__52772__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51870,G__51871,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52773){
var G__51870 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51871 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51873 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51874 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51875 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51876 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51877 = cljs.core.first(arglist__52773);
arglist__52773 = cljs.core.next(arglist__52773);
var G__51878 = cljs.core.first(arglist__52773);
var G__51879 = cljs.core.rest(arglist__52773);
return sci$impl$fns$arity_8__delegate(G__51870,G__51871,G__51873,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51886);

(invoc_array[(1)] = G__51887);

(invoc_array[(2)] = G__51888);

(invoc_array[(3)] = G__51889);

(invoc_array[(4)] = G__51890);

(invoc_array[(5)] = G__51891);

(invoc_array[(6)] = G__51892);

(invoc_array[(7)] = G__51893);

(invoc_array[(8)] = G__51894);

(invoc_array[vararg_idx] = G__51895);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,var_args){
var G__51895 = null;
if (arguments.length > 9) {
var G__52775__i = 0, G__52775__a = new Array(arguments.length -  9);
while (G__52775__i < G__52775__a.length) {G__52775__a[G__52775__i] = arguments[G__52775__i + 9]; ++G__52775__i;}
  G__51895 = new cljs.core.IndexedSeq(G__52775__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52780){
var G__51886 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51887 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51888 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51889 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51890 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51891 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51892 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51893 = cljs.core.first(arglist__52780);
arglist__52780 = cljs.core.next(arglist__52780);
var G__51894 = cljs.core.first(arglist__52780);
var G__51895 = cljs.core.rest(arglist__52780);
return sci$impl$fns$arity_9__delegate(G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51908);

(invoc_array[(1)] = G__51909);

(invoc_array[(2)] = G__51910);

(invoc_array[(3)] = G__51911);

(invoc_array[(4)] = G__51912);

(invoc_array[(5)] = G__51913);

(invoc_array[(6)] = G__51914);

(invoc_array[(7)] = G__51915);

(invoc_array[(8)] = G__51916);

(invoc_array[(9)] = G__51917);

(invoc_array[vararg_idx] = G__51918);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,var_args){
var G__51918 = null;
if (arguments.length > 10) {
var G__52781__i = 0, G__52781__a = new Array(arguments.length -  10);
while (G__52781__i < G__52781__a.length) {G__52781__a[G__52781__i] = arguments[G__52781__i + 10]; ++G__52781__i;}
  G__51918 = new cljs.core.IndexedSeq(G__52781__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52782){
var G__51908 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51909 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51910 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51911 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51912 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51913 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51914 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51915 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51916 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51917 = cljs.core.first(arglist__52782);
var G__51918 = cljs.core.rest(arglist__52782);
return sci$impl$fns$arity_10__delegate(G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51932);

(invoc_array[(1)] = G__51933);

(invoc_array[(2)] = G__51934);

(invoc_array[(3)] = G__51935);

(invoc_array[(4)] = G__51936);

(invoc_array[(5)] = G__51937);

(invoc_array[(6)] = G__51938);

(invoc_array[(7)] = G__51939);

(invoc_array[(8)] = G__51940);

(invoc_array[(9)] = G__51941);

(invoc_array[(10)] = G__51942);

(invoc_array[vararg_idx] = G__51943);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,var_args){
var G__51943 = null;
if (arguments.length > 11) {
var G__52784__i = 0, G__52784__a = new Array(arguments.length -  11);
while (G__52784__i < G__52784__a.length) {G__52784__a[G__52784__i] = arguments[G__52784__i + 11]; ++G__52784__i;}
  G__51943 = new cljs.core.IndexedSeq(G__52784__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52788){
var G__51932 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51933 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51934 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51935 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51936 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51937 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51938 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51939 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51940 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51941 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51942 = cljs.core.first(arglist__52788);
var G__51943 = cljs.core.rest(arglist__52788);
return sci$impl$fns$arity_11__delegate(G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51952);

(invoc_array[(1)] = G__51953);

(invoc_array[(2)] = G__51954);

(invoc_array[(3)] = G__51955);

(invoc_array[(4)] = G__51956);

(invoc_array[(5)] = G__51957);

(invoc_array[(6)] = G__51958);

(invoc_array[(7)] = G__51959);

(invoc_array[(8)] = G__51960);

(invoc_array[(9)] = G__51961);

(invoc_array[(10)] = G__51962);

(invoc_array[(11)] = G__51963);

(invoc_array[vararg_idx] = G__51964);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,var_args){
var G__51964 = null;
if (arguments.length > 12) {
var G__52793__i = 0, G__52793__a = new Array(arguments.length -  12);
while (G__52793__i < G__52793__a.length) {G__52793__a[G__52793__i] = arguments[G__52793__i + 12]; ++G__52793__i;}
  G__51964 = new cljs.core.IndexedSeq(G__52793__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52794){
var G__51952 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51953 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51954 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51955 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51956 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51957 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51958 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51959 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51960 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51961 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51962 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51963 = cljs.core.first(arglist__52794);
var G__51964 = cljs.core.rest(arglist__52794);
return sci$impl$fns$arity_12__delegate(G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51974);

(invoc_array[(1)] = G__51975);

(invoc_array[(2)] = G__51976);

(invoc_array[(3)] = G__51977);

(invoc_array[(4)] = G__51978);

(invoc_array[(5)] = G__51979);

(invoc_array[(6)] = G__51980);

(invoc_array[(7)] = G__51981);

(invoc_array[(8)] = G__51982);

(invoc_array[(9)] = G__51983);

(invoc_array[(10)] = G__51984);

(invoc_array[(11)] = G__51985);

(invoc_array[(12)] = G__51986);

(invoc_array[vararg_idx] = G__51987);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,var_args){
var G__51987 = null;
if (arguments.length > 13) {
var G__52795__i = 0, G__52795__a = new Array(arguments.length -  13);
while (G__52795__i < G__52795__a.length) {G__52795__a[G__52795__i] = arguments[G__52795__i + 13]; ++G__52795__i;}
  G__51987 = new cljs.core.IndexedSeq(G__52795__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52796){
var G__51974 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51975 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51976 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51977 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51978 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51979 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51980 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51981 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51982 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51983 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51984 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51985 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__51986 = cljs.core.first(arglist__52796);
var G__51987 = cljs.core.rest(arglist__52796);
return sci$impl$fns$arity_13__delegate(G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51992);

(invoc_array[(1)] = G__51993);

(invoc_array[(2)] = G__51994);

(invoc_array[(3)] = G__51995);

(invoc_array[(4)] = G__51996);

(invoc_array[(5)] = G__51997);

(invoc_array[(6)] = G__51998);

(invoc_array[(7)] = G__51999);

(invoc_array[(8)] = G__52000);

(invoc_array[(9)] = G__52001);

(invoc_array[(10)] = G__52002);

(invoc_array[(11)] = G__52003);

(invoc_array[(12)] = G__52004);

(invoc_array[(13)] = G__52005);

(invoc_array[vararg_idx] = G__52006);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,var_args){
var G__52006 = null;
if (arguments.length > 14) {
var G__52798__i = 0, G__52798__a = new Array(arguments.length -  14);
while (G__52798__i < G__52798__a.length) {G__52798__a[G__52798__i] = arguments[G__52798__i + 14]; ++G__52798__i;}
  G__52006 = new cljs.core.IndexedSeq(G__52798__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52799){
var G__51992 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51993 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51994 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51995 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51996 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51997 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51998 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__51999 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__52000 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__52001 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__52002 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__52003 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__52004 = cljs.core.first(arglist__52799);
arglist__52799 = cljs.core.next(arglist__52799);
var G__52005 = cljs.core.first(arglist__52799);
var G__52006 = cljs.core.rest(arglist__52799);
return sci$impl$fns$arity_14__delegate(G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52010);

(invoc_array[(1)] = G__52011);

(invoc_array[(2)] = G__52012);

(invoc_array[(3)] = G__52013);

(invoc_array[(4)] = G__52014);

(invoc_array[(5)] = G__52015);

(invoc_array[(6)] = G__52016);

(invoc_array[(7)] = G__52017);

(invoc_array[(8)] = G__52018);

(invoc_array[(9)] = G__52019);

(invoc_array[(10)] = G__52020);

(invoc_array[(11)] = G__52021);

(invoc_array[(12)] = G__52022);

(invoc_array[(13)] = G__52023);

(invoc_array[(14)] = G__52024);

(invoc_array[vararg_idx] = G__52025);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,var_args){
var G__52025 = null;
if (arguments.length > 15) {
var G__52800__i = 0, G__52800__a = new Array(arguments.length -  15);
while (G__52800__i < G__52800__a.length) {G__52800__a[G__52800__i] = arguments[G__52800__i + 15]; ++G__52800__i;}
  G__52025 = new cljs.core.IndexedSeq(G__52800__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52801){
var G__52010 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52011 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52012 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52013 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52014 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52015 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52016 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52017 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52018 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52019 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52020 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52021 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52022 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52023 = cljs.core.first(arglist__52801);
arglist__52801 = cljs.core.next(arglist__52801);
var G__52024 = cljs.core.first(arglist__52801);
var G__52025 = cljs.core.rest(arglist__52801);
return sci$impl$fns$arity_15__delegate(G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52027);

(invoc_array[(1)] = G__52028);

(invoc_array[(2)] = G__52029);

(invoc_array[(3)] = G__52030);

(invoc_array[(4)] = G__52031);

(invoc_array[(5)] = G__52032);

(invoc_array[(6)] = G__52033);

(invoc_array[(7)] = G__52034);

(invoc_array[(8)] = G__52035);

(invoc_array[(9)] = G__52036);

(invoc_array[(10)] = G__52037);

(invoc_array[(11)] = G__52038);

(invoc_array[(12)] = G__52039);

(invoc_array[(13)] = G__52040);

(invoc_array[(14)] = G__52041);

(invoc_array[(15)] = G__52042);

(invoc_array[vararg_idx] = G__52043);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,var_args){
var G__52043 = null;
if (arguments.length > 16) {
var G__52802__i = 0, G__52802__a = new Array(arguments.length -  16);
while (G__52802__i < G__52802__a.length) {G__52802__a[G__52802__i] = arguments[G__52802__i + 16]; ++G__52802__i;}
  G__52043 = new cljs.core.IndexedSeq(G__52802__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52803){
var G__52027 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52028 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52029 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52030 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52031 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52032 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52033 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52034 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52035 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52036 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52037 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52038 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52039 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52040 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52041 = cljs.core.first(arglist__52803);
arglist__52803 = cljs.core.next(arglist__52803);
var G__52042 = cljs.core.first(arglist__52803);
var G__52043 = cljs.core.rest(arglist__52803);
return sci$impl$fns$arity_16__delegate(G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52049);

(invoc_array[(1)] = G__52050);

(invoc_array[(2)] = G__52051);

(invoc_array[(3)] = G__52052);

(invoc_array[(4)] = G__52053);

(invoc_array[(5)] = G__52054);

(invoc_array[(6)] = G__52055);

(invoc_array[(7)] = G__52056);

(invoc_array[(8)] = G__52057);

(invoc_array[(9)] = G__52058);

(invoc_array[(10)] = G__52059);

(invoc_array[(11)] = G__52060);

(invoc_array[(12)] = G__52061);

(invoc_array[(13)] = G__52062);

(invoc_array[(14)] = G__52063);

(invoc_array[(15)] = G__52064);

(invoc_array[(16)] = G__52065);

(invoc_array[vararg_idx] = G__52066);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,var_args){
var G__52066 = null;
if (arguments.length > 17) {
var G__52808__i = 0, G__52808__a = new Array(arguments.length -  17);
while (G__52808__i < G__52808__a.length) {G__52808__a[G__52808__i] = arguments[G__52808__i + 17]; ++G__52808__i;}
  G__52066 = new cljs.core.IndexedSeq(G__52808__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52810){
var G__52049 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52050 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52051 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52052 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52053 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52054 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52055 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52056 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52057 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52058 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52059 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52060 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52061 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52062 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52063 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52064 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52065 = cljs.core.first(arglist__52810);
var G__52066 = cljs.core.rest(arglist__52810);
return sci$impl$fns$arity_17__delegate(G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52078);

(invoc_array[(1)] = G__52079);

(invoc_array[(2)] = G__52080);

(invoc_array[(3)] = G__52081);

(invoc_array[(4)] = G__52082);

(invoc_array[(5)] = G__52083);

(invoc_array[(6)] = G__52084);

(invoc_array[(7)] = G__52085);

(invoc_array[(8)] = G__52086);

(invoc_array[(9)] = G__52087);

(invoc_array[(10)] = G__52088);

(invoc_array[(11)] = G__52089);

(invoc_array[(12)] = G__52090);

(invoc_array[(13)] = G__52091);

(invoc_array[(14)] = G__52092);

(invoc_array[(15)] = G__52093);

(invoc_array[(16)] = G__52094);

(invoc_array[(17)] = G__52095);

(invoc_array[vararg_idx] = G__52096);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,var_args){
var G__52096 = null;
if (arguments.length > 18) {
var G__52813__i = 0, G__52813__a = new Array(arguments.length -  18);
while (G__52813__i < G__52813__a.length) {G__52813__a[G__52813__i] = arguments[G__52813__i + 18]; ++G__52813__i;}
  G__52096 = new cljs.core.IndexedSeq(G__52813__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52814){
var G__52078 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52079 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52080 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52081 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52082 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52083 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52084 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52085 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52086 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52087 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52088 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52089 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52090 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52091 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52092 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52093 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52094 = cljs.core.first(arglist__52814);
arglist__52814 = cljs.core.next(arglist__52814);
var G__52095 = cljs.core.first(arglist__52814);
var G__52096 = cljs.core.rest(arglist__52814);
return sci$impl$fns$arity_18__delegate(G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52104);

(invoc_array[(1)] = G__52105);

(invoc_array[(2)] = G__52106);

(invoc_array[(3)] = G__52107);

(invoc_array[(4)] = G__52108);

(invoc_array[(5)] = G__52109);

(invoc_array[(6)] = G__52110);

(invoc_array[(7)] = G__52111);

(invoc_array[(8)] = G__52112);

(invoc_array[(9)] = G__52113);

(invoc_array[(10)] = G__52114);

(invoc_array[(11)] = G__52115);

(invoc_array[(12)] = G__52116);

(invoc_array[(13)] = G__52117);

(invoc_array[(14)] = G__52118);

(invoc_array[(15)] = G__52119);

(invoc_array[(16)] = G__52120);

(invoc_array[(17)] = G__52121);

(invoc_array[(18)] = G__52122);

(invoc_array[vararg_idx] = G__52123);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,var_args){
var G__52123 = null;
if (arguments.length > 19) {
var G__52817__i = 0, G__52817__a = new Array(arguments.length -  19);
while (G__52817__i < G__52817__a.length) {G__52817__a[G__52817__i] = arguments[G__52817__i + 19]; ++G__52817__i;}
  G__52123 = new cljs.core.IndexedSeq(G__52817__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52818){
var G__52104 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52105 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52106 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52107 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52108 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52109 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52110 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52111 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52112 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52113 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52114 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52115 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52116 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52117 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52118 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52119 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52120 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52121 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52122 = cljs.core.first(arglist__52818);
var G__52123 = cljs.core.rest(arglist__52818);
return sci$impl$fns$arity_19__delegate(G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52126);

(invoc_array[(1)] = G__52127);

(invoc_array[(2)] = G__52128);

(invoc_array[(3)] = G__52129);

(invoc_array[(4)] = G__52130);

(invoc_array[(5)] = G__52131);

(invoc_array[(6)] = G__52132);

(invoc_array[(7)] = G__52133);

(invoc_array[(8)] = G__52134);

(invoc_array[(9)] = G__52135);

(invoc_array[(10)] = G__52136);

(invoc_array[(11)] = G__52137);

(invoc_array[(12)] = G__52138);

(invoc_array[(13)] = G__52139);

(invoc_array[(14)] = G__52140);

(invoc_array[(15)] = G__52141);

(invoc_array[(16)] = G__52142);

(invoc_array[(17)] = G__52143);

(invoc_array[(18)] = G__52144);

(invoc_array[(19)] = G__52145);

(invoc_array[vararg_idx] = G__52146);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,var_args){
var G__52146 = null;
if (arguments.length > 20) {
var G__52819__i = 0, G__52819__a = new Array(arguments.length -  20);
while (G__52819__i < G__52819__a.length) {G__52819__a[G__52819__i] = arguments[G__52819__i + 20]; ++G__52819__i;}
  G__52146 = new cljs.core.IndexedSeq(G__52819__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52820){
var G__52126 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52127 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52128 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52129 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52130 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52131 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52132 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52133 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52134 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52135 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52136 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52137 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52138 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52139 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52140 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52141 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52142 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52143 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52144 = cljs.core.first(arglist__52820);
arglist__52820 = cljs.core.next(arglist__52820);
var G__52145 = cljs.core.first(arglist__52820);
var G__52146 = cljs.core.rest(arglist__52820);
return sci$impl$fns$arity_20__delegate(G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51783))));

}
})():(function (){var G__52148 = fixed_arity;
switch (G__52148) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51118__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51118__auto__)){
continue;
} else {
return ret__51118__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52149){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52149);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52153,G__52155){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52153);

(invoc_array[(1)] = G__52155);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52162,G__52163,G__52164){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52162);

(invoc_array[(1)] = G__52163);

(invoc_array[(2)] = G__52164);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52166,G__52167,G__52168,G__52169){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52166);

(invoc_array[(1)] = G__52167);

(invoc_array[(2)] = G__52168);

(invoc_array[(3)] = G__52169);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52170,G__52171,G__52172,G__52173,G__52174){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52170);

(invoc_array[(1)] = G__52171);

(invoc_array[(2)] = G__52172);

(invoc_array[(3)] = G__52173);

(invoc_array[(4)] = G__52174);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52200,G__52201,G__52202,G__52203,G__52204,G__52205){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52200);

(invoc_array[(1)] = G__52201);

(invoc_array[(2)] = G__52202);

(invoc_array[(3)] = G__52203);

(invoc_array[(4)] = G__52204);

(invoc_array[(5)] = G__52205);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52224);

(invoc_array[(1)] = G__52225);

(invoc_array[(2)] = G__52226);

(invoc_array[(3)] = G__52227);

(invoc_array[(4)] = G__52228);

(invoc_array[(5)] = G__52229);

(invoc_array[(6)] = G__52230);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52245);

(invoc_array[(1)] = G__52246);

(invoc_array[(2)] = G__52247);

(invoc_array[(3)] = G__52248);

(invoc_array[(4)] = G__52249);

(invoc_array[(5)] = G__52250);

(invoc_array[(6)] = G__52251);

(invoc_array[(7)] = G__52252);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52279,G__52280,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52279);

(invoc_array[(1)] = G__52280);

(invoc_array[(2)] = G__52281);

(invoc_array[(3)] = G__52282);

(invoc_array[(4)] = G__52283);

(invoc_array[(5)] = G__52284);

(invoc_array[(6)] = G__52285);

(invoc_array[(7)] = G__52286);

(invoc_array[(8)] = G__52287);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301,G__52302){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52293);

(invoc_array[(1)] = G__52294);

(invoc_array[(2)] = G__52295);

(invoc_array[(3)] = G__52296);

(invoc_array[(4)] = G__52297);

(invoc_array[(5)] = G__52298);

(invoc_array[(6)] = G__52299);

(invoc_array[(7)] = G__52300);

(invoc_array[(8)] = G__52301);

(invoc_array[(9)] = G__52302);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52310);

(invoc_array[(1)] = G__52311);

(invoc_array[(2)] = G__52312);

(invoc_array[(3)] = G__52313);

(invoc_array[(4)] = G__52314);

(invoc_array[(5)] = G__52315);

(invoc_array[(6)] = G__52316);

(invoc_array[(7)] = G__52317);

(invoc_array[(8)] = G__52318);

(invoc_array[(9)] = G__52319);

(invoc_array[(10)] = G__52320);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52341,G__52342,G__52343,G__52344,G__52345,G__52346,G__52347,G__52348,G__52349,G__52350,G__52351,G__52352){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52341);

(invoc_array[(1)] = G__52342);

(invoc_array[(2)] = G__52343);

(invoc_array[(3)] = G__52344);

(invoc_array[(4)] = G__52345);

(invoc_array[(5)] = G__52346);

(invoc_array[(6)] = G__52347);

(invoc_array[(7)] = G__52348);

(invoc_array[(8)] = G__52349);

(invoc_array[(9)] = G__52350);

(invoc_array[(10)] = G__52351);

(invoc_array[(11)] = G__52352);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52377,G__52378,G__52379,G__52380,G__52381,G__52382,G__52383,G__52384,G__52385,G__52386,G__52387,G__52388,G__52389){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52377);

(invoc_array[(1)] = G__52378);

(invoc_array[(2)] = G__52379);

(invoc_array[(3)] = G__52380);

(invoc_array[(4)] = G__52381);

(invoc_array[(5)] = G__52382);

(invoc_array[(6)] = G__52383);

(invoc_array[(7)] = G__52384);

(invoc_array[(8)] = G__52385);

(invoc_array[(9)] = G__52386);

(invoc_array[(10)] = G__52387);

(invoc_array[(11)] = G__52388);

(invoc_array[(12)] = G__52389);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52393,G__52394,G__52395,G__52396,G__52397,G__52398,G__52399,G__52400,G__52401,G__52402,G__52403,G__52404,G__52405,G__52406){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52393);

(invoc_array[(1)] = G__52394);

(invoc_array[(2)] = G__52395);

(invoc_array[(3)] = G__52396);

(invoc_array[(4)] = G__52397);

(invoc_array[(5)] = G__52398);

(invoc_array[(6)] = G__52399);

(invoc_array[(7)] = G__52400);

(invoc_array[(8)] = G__52401);

(invoc_array[(9)] = G__52402);

(invoc_array[(10)] = G__52403);

(invoc_array[(11)] = G__52404);

(invoc_array[(12)] = G__52405);

(invoc_array[(13)] = G__52406);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52410,G__52411,G__52412,G__52413,G__52414,G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52410);

(invoc_array[(1)] = G__52411);

(invoc_array[(2)] = G__52412);

(invoc_array[(3)] = G__52413);

(invoc_array[(4)] = G__52414);

(invoc_array[(5)] = G__52415);

(invoc_array[(6)] = G__52416);

(invoc_array[(7)] = G__52417);

(invoc_array[(8)] = G__52418);

(invoc_array[(9)] = G__52419);

(invoc_array[(10)] = G__52420);

(invoc_array[(11)] = G__52421);

(invoc_array[(12)] = G__52422);

(invoc_array[(13)] = G__52423);

(invoc_array[(14)] = G__52424);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52438,G__52439,G__52440,G__52441,G__52442,G__52443,G__52444,G__52445,G__52446,G__52447,G__52448,G__52449,G__52450,G__52451,G__52452,G__52453){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52438);

(invoc_array[(1)] = G__52439);

(invoc_array[(2)] = G__52440);

(invoc_array[(3)] = G__52441);

(invoc_array[(4)] = G__52442);

(invoc_array[(5)] = G__52443);

(invoc_array[(6)] = G__52444);

(invoc_array[(7)] = G__52445);

(invoc_array[(8)] = G__52446);

(invoc_array[(9)] = G__52447);

(invoc_array[(10)] = G__52448);

(invoc_array[(11)] = G__52449);

(invoc_array[(12)] = G__52450);

(invoc_array[(13)] = G__52451);

(invoc_array[(14)] = G__52452);

(invoc_array[(15)] = G__52453);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52462,G__52463,G__52464,G__52465,G__52466,G__52467,G__52468,G__52469,G__52470,G__52471,G__52472,G__52473,G__52474,G__52475,G__52476,G__52477,G__52478){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52462);

(invoc_array[(1)] = G__52463);

(invoc_array[(2)] = G__52464);

(invoc_array[(3)] = G__52465);

(invoc_array[(4)] = G__52466);

(invoc_array[(5)] = G__52467);

(invoc_array[(6)] = G__52468);

(invoc_array[(7)] = G__52469);

(invoc_array[(8)] = G__52470);

(invoc_array[(9)] = G__52471);

(invoc_array[(10)] = G__52472);

(invoc_array[(11)] = G__52473);

(invoc_array[(12)] = G__52474);

(invoc_array[(13)] = G__52475);

(invoc_array[(14)] = G__52476);

(invoc_array[(15)] = G__52477);

(invoc_array[(16)] = G__52478);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52479,G__52480,G__52481,G__52482,G__52483,G__52484,G__52485,G__52486,G__52487,G__52488,G__52489,G__52490,G__52491,G__52492,G__52493,G__52494,G__52495,G__52496){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52479);

(invoc_array[(1)] = G__52480);

(invoc_array[(2)] = G__52481);

(invoc_array[(3)] = G__52482);

(invoc_array[(4)] = G__52483);

(invoc_array[(5)] = G__52484);

(invoc_array[(6)] = G__52485);

(invoc_array[(7)] = G__52486);

(invoc_array[(8)] = G__52487);

(invoc_array[(9)] = G__52488);

(invoc_array[(10)] = G__52489);

(invoc_array[(11)] = G__52490);

(invoc_array[(12)] = G__52491);

(invoc_array[(13)] = G__52492);

(invoc_array[(14)] = G__52493);

(invoc_array[(15)] = G__52494);

(invoc_array[(16)] = G__52495);

(invoc_array[(17)] = G__52496);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52500,G__52501,G__52502,G__52503,G__52504,G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516,G__52517,G__52518){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52500);

(invoc_array[(1)] = G__52501);

(invoc_array[(2)] = G__52502);

(invoc_array[(3)] = G__52503);

(invoc_array[(4)] = G__52504);

(invoc_array[(5)] = G__52505);

(invoc_array[(6)] = G__52506);

(invoc_array[(7)] = G__52507);

(invoc_array[(8)] = G__52508);

(invoc_array[(9)] = G__52509);

(invoc_array[(10)] = G__52510);

(invoc_array[(11)] = G__52511);

(invoc_array[(12)] = G__52512);

(invoc_array[(13)] = G__52513);

(invoc_array[(14)] = G__52514);

(invoc_array[(15)] = G__52515);

(invoc_array[(16)] = G__52516);

(invoc_array[(17)] = G__52517);

(invoc_array[(18)] = G__52518);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52522,G__52523,G__52524,G__52525,G__52526,G__52527,G__52528,G__52529,G__52530,G__52531,G__52532,G__52533,G__52534,G__52535,G__52536,G__52537,G__52538,G__52539,G__52540,G__52541){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52522);

(invoc_array[(1)] = G__52523);

(invoc_array[(2)] = G__52524);

(invoc_array[(3)] = G__52525);

(invoc_array[(4)] = G__52526);

(invoc_array[(5)] = G__52527);

(invoc_array[(6)] = G__52528);

(invoc_array[(7)] = G__52529);

(invoc_array[(8)] = G__52530);

(invoc_array[(9)] = G__52531);

(invoc_array[(10)] = G__52532);

(invoc_array[(11)] = G__52533);

(invoc_array[(12)] = G__52534);

(invoc_array[(13)] = G__52535);

(invoc_array[(14)] = G__52536);

(invoc_array[(15)] = G__52537);

(invoc_array[(16)] = G__52538);

(invoc_array[(17)] = G__52539);

(invoc_array[(18)] = G__52540);

(invoc_array[(19)] = G__52541);

while(true){
var ret__51120__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51120__auto__)){
continue;
} else {
return ret__51120__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52148))));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__52827 = cljs.core.next(params__$1);
var G__52828 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52829 = lets;
params__$1 = G__52827;
new_params = G__52828;
lets = G__52829;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52830 = cljs.core.next(params__$1);
var G__52831 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52832 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52830;
new_params = G__52831;
lets = G__52832;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52836 = arguments.length;
var i__5898__auto___52837 = (0);
while(true){
if((i__5898__auto___52837 < len__5897__auto___52836)){
args__5903__auto__.push((arguments[i__5898__auto___52837]));

var G__52838 = (i__5898__auto___52837 + (1));
i__5898__auto___52837 = G__52838;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?(""+"Parameter declaration "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))+" should be a vector"):(""+"Parameter declaration missing")),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Invalid signature "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)+" should be a list"),form);
} else {
}

var vec__52590 = sig;
var seq__52591 = cljs.core.seq(vec__52590);
var first__52592 = cljs.core.first(seq__52591);
var seq__52591__$1 = cljs.core.next(seq__52591);
var params = first__52592;
var body = seq__52591__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?(""+"Parameter declaration "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)+" should be a vector"):(""+"Invalid signature "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)+" should be a list")),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5162__auto__ = conds;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52572){
var G__52573 = cljs.core.first(seq52572);
var seq52572__$1 = cljs.core.next(seq52572);
var G__52574 = cljs.core.first(seq52572__$1);
var seq52572__$2 = cljs.core.next(seq52572__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52573,G__52574,seq52572__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__52884 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52885 = cljs.core.next(fdecls);
ret = G__52884;
fdecls = G__52885;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52908 = arguments.length;
var i__5898__auto___52909 = (0);
while(true){
if((i__5898__auto___52909 < len__5897__auto___52908)){
args__5903__auto__.push((arguments[i__5898__auto___52909]));

var G__52914 = (i__5898__auto___52909 + (1));
i__5898__auto___52909 = G__52914;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5162__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52645){
var G__52646 = cljs.core.first(seq52645);
var seq52645__$1 = cljs.core.next(seq52645);
var G__52647 = cljs.core.first(seq52645__$1);
var seq52645__$2 = cljs.core.next(seq52645__$1);
var G__52648 = cljs.core.first(seq52645__$2);
var seq52645__$3 = cljs.core.next(seq52645__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52646,G__52647,G__52648,seq52645__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52957 = arguments.length;
var i__5898__auto___52958 = (0);
while(true){
if((i__5898__auto___52958 < len__5897__auto___52957)){
args__5903__auto__.push((arguments[i__5898__auto___52958]));

var G__52959 = (i__5898__auto___52958 + (1));
i__5898__auto___52958 = G__52959;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__52964 = cljs.core.cons(f,p);
var G__52965 = cljs.core.next(args__$1);
p = G__52964;
args__$1 = G__52965;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52966 = cljs.core.cons(f,p);
var G__52967 = cljs.core.next(args__$1);
p = G__52966;
args__$1 = G__52967;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__52968 = cljs.core.next(fd);
fd = G__52968;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52969 = cljs.core.next(fd);
fd = G__52969;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__52970 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52971 = cljs.core.next(ds);
acc = G__52970;
ds = G__52971;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__52972 = cljs.core.next(p);
var G__52973 = cljs.core.cons(cljs.core.first(p),d);
p = G__52972;
d = G__52973;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52714){
var G__52715 = cljs.core.first(seq52714);
var seq52714__$1 = cljs.core.next(seq52714);
var G__52716 = cljs.core.first(seq52714__$1);
var seq52714__$2 = cljs.core.next(seq52714__$1);
var G__52717 = cljs.core.first(seq52714__$2);
var seq52714__$3 = cljs.core.next(seq52714__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52715,G__52716,G__52717,seq52714__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
