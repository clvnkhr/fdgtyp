goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51796 = arguments.length;
switch (G__51796) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51816 = fixed_arity;
switch (G__51816) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51818){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51818);

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
var sci$impl$fns$arity_0 = function (var_args){
var G__51818 = null;
if (arguments.length > 0) {
var G__52766__i = 0, G__52766__a = new Array(arguments.length -  0);
while (G__52766__i < G__52766__a.length) {G__52766__a[G__52766__i] = arguments[G__52766__i + 0]; ++G__52766__i;}
  G__51818 = new cljs.core.IndexedSeq(G__52766__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51818);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52767){
var G__51818 = cljs.core.seq(arglist__52767);
return sci$impl$fns$arity_0__delegate(G__51818);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51823,G__51824){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51823);

(invoc_array[vararg_idx] = G__51824);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51823,var_args){
var G__51824 = null;
if (arguments.length > 1) {
var G__52768__i = 0, G__52768__a = new Array(arguments.length -  1);
while (G__52768__i < G__52768__a.length) {G__52768__a[G__52768__i] = arguments[G__52768__i + 1]; ++G__52768__i;}
  G__51824 = new cljs.core.IndexedSeq(G__52768__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51823,G__51824);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52769){
var G__51823 = cljs.core.first(arglist__52769);
var G__51824 = cljs.core.rest(arglist__52769);
return sci$impl$fns$arity_1__delegate(G__51823,G__51824);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51832,G__51833,G__51834){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51832);

(invoc_array[(1)] = G__51833);

(invoc_array[vararg_idx] = G__51834);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51832,G__51833,var_args){
var G__51834 = null;
if (arguments.length > 2) {
var G__52771__i = 0, G__52771__a = new Array(arguments.length -  2);
while (G__52771__i < G__52771__a.length) {G__52771__a[G__52771__i] = arguments[G__52771__i + 2]; ++G__52771__i;}
  G__51834 = new cljs.core.IndexedSeq(G__52771__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51832,G__51833,G__51834);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52772){
var G__51832 = cljs.core.first(arglist__52772);
arglist__52772 = cljs.core.next(arglist__52772);
var G__51833 = cljs.core.first(arglist__52772);
var G__51834 = cljs.core.rest(arglist__52772);
return sci$impl$fns$arity_2__delegate(G__51832,G__51833,G__51834);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51841,G__51842,G__51843,G__51844){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51841);

(invoc_array[(1)] = G__51842);

(invoc_array[(2)] = G__51843);

(invoc_array[vararg_idx] = G__51844);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__51841,G__51842,G__51843,var_args){
var G__51844 = null;
if (arguments.length > 3) {
var G__52773__i = 0, G__52773__a = new Array(arguments.length -  3);
while (G__52773__i < G__52773__a.length) {G__52773__a[G__52773__i] = arguments[G__52773__i + 3]; ++G__52773__i;}
  G__51844 = new cljs.core.IndexedSeq(G__52773__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51841,G__51842,G__51843,G__51844);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52774){
var G__51841 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51842 = cljs.core.first(arglist__52774);
arglist__52774 = cljs.core.next(arglist__52774);
var G__51843 = cljs.core.first(arglist__52774);
var G__51844 = cljs.core.rest(arglist__52774);
return sci$impl$fns$arity_3__delegate(G__51841,G__51842,G__51843,G__51844);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51850,G__51851,G__51852,G__51853,G__51854){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51850);

(invoc_array[(1)] = G__51851);

(invoc_array[(2)] = G__51852);

(invoc_array[(3)] = G__51853);

(invoc_array[vararg_idx] = G__51854);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__51850,G__51851,G__51852,G__51853,var_args){
var G__51854 = null;
if (arguments.length > 4) {
var G__52775__i = 0, G__52775__a = new Array(arguments.length -  4);
while (G__52775__i < G__52775__a.length) {G__52775__a[G__52775__i] = arguments[G__52775__i + 4]; ++G__52775__i;}
  G__51854 = new cljs.core.IndexedSeq(G__52775__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51850,G__51851,G__51852,G__51853,G__51854);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52776){
var G__51850 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__51851 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__51852 = cljs.core.first(arglist__52776);
arglist__52776 = cljs.core.next(arglist__52776);
var G__51853 = cljs.core.first(arglist__52776);
var G__51854 = cljs.core.rest(arglist__52776);
return sci$impl$fns$arity_4__delegate(G__51850,G__51851,G__51852,G__51853,G__51854);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51858,G__51859,G__51860,G__51861,G__51862,G__51863){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51858);

(invoc_array[(1)] = G__51859);

(invoc_array[(2)] = G__51860);

(invoc_array[(3)] = G__51861);

(invoc_array[(4)] = G__51862);

(invoc_array[vararg_idx] = G__51863);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__51858,G__51859,G__51860,G__51861,G__51862,var_args){
var G__51863 = null;
if (arguments.length > 5) {
var G__52777__i = 0, G__52777__a = new Array(arguments.length -  5);
while (G__52777__i < G__52777__a.length) {G__52777__a[G__52777__i] = arguments[G__52777__i + 5]; ++G__52777__i;}
  G__51863 = new cljs.core.IndexedSeq(G__52777__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51858,G__51859,G__51860,G__51861,G__51862,G__51863);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52778){
var G__51858 = cljs.core.first(arglist__52778);
arglist__52778 = cljs.core.next(arglist__52778);
var G__51859 = cljs.core.first(arglist__52778);
arglist__52778 = cljs.core.next(arglist__52778);
var G__51860 = cljs.core.first(arglist__52778);
arglist__52778 = cljs.core.next(arglist__52778);
var G__51861 = cljs.core.first(arglist__52778);
arglist__52778 = cljs.core.next(arglist__52778);
var G__51862 = cljs.core.first(arglist__52778);
var G__51863 = cljs.core.rest(arglist__52778);
return sci$impl$fns$arity_5__delegate(G__51858,G__51859,G__51860,G__51861,G__51862,G__51863);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51871);

(invoc_array[(1)] = G__51872);

(invoc_array[(2)] = G__51873);

(invoc_array[(3)] = G__51874);

(invoc_array[(4)] = G__51875);

(invoc_array[(5)] = G__51876);

(invoc_array[vararg_idx] = G__51877);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,var_args){
var G__51877 = null;
if (arguments.length > 6) {
var G__52783__i = 0, G__52783__a = new Array(arguments.length -  6);
while (G__52783__i < G__52783__a.length) {G__52783__a[G__52783__i] = arguments[G__52783__i + 6]; ++G__52783__i;}
  G__51877 = new cljs.core.IndexedSeq(G__52783__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52784){
var G__51871 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__51872 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__51873 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__51874 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__51875 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__51876 = cljs.core.first(arglist__52784);
var G__51877 = cljs.core.rest(arglist__52784);
return sci$impl$fns$arity_6__delegate(G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51882);

(invoc_array[(1)] = G__51883);

(invoc_array[(2)] = G__51884);

(invoc_array[(3)] = G__51885);

(invoc_array[(4)] = G__51886);

(invoc_array[(5)] = G__51887);

(invoc_array[(6)] = G__51888);

(invoc_array[vararg_idx] = G__51889);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,var_args){
var G__51889 = null;
if (arguments.length > 7) {
var G__52787__i = 0, G__52787__a = new Array(arguments.length -  7);
while (G__52787__i < G__52787__a.length) {G__52787__a[G__52787__i] = arguments[G__52787__i + 7]; ++G__52787__i;}
  G__51889 = new cljs.core.IndexedSeq(G__52787__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52788){
var G__51882 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51883 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51884 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51885 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51886 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51887 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__51888 = cljs.core.first(arglist__52788);
var G__51889 = cljs.core.rest(arglist__52788);
return sci$impl$fns$arity_7__delegate(G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51895);

(invoc_array[(1)] = G__51896);

(invoc_array[(2)] = G__51897);

(invoc_array[(3)] = G__51898);

(invoc_array[(4)] = G__51899);

(invoc_array[(5)] = G__51900);

(invoc_array[(6)] = G__51901);

(invoc_array[(7)] = G__51902);

(invoc_array[vararg_idx] = G__51903);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,var_args){
var G__51903 = null;
if (arguments.length > 8) {
var G__52790__i = 0, G__52790__a = new Array(arguments.length -  8);
while (G__52790__i < G__52790__a.length) {G__52790__a[G__52790__i] = arguments[G__52790__i + 8]; ++G__52790__i;}
  G__51903 = new cljs.core.IndexedSeq(G__52790__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52791){
var G__51895 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51896 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51897 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51898 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51899 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51900 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51901 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51902 = cljs.core.first(arglist__52791);
var G__51903 = cljs.core.rest(arglist__52791);
return sci$impl$fns$arity_8__delegate(G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51904);

(invoc_array[(1)] = G__51905);

(invoc_array[(2)] = G__51906);

(invoc_array[(3)] = G__51907);

(invoc_array[(4)] = G__51908);

(invoc_array[(5)] = G__51909);

(invoc_array[(6)] = G__51910);

(invoc_array[(7)] = G__51911);

(invoc_array[(8)] = G__51912);

(invoc_array[vararg_idx] = G__51913);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,var_args){
var G__51913 = null;
if (arguments.length > 9) {
var G__52793__i = 0, G__52793__a = new Array(arguments.length -  9);
while (G__52793__i < G__52793__a.length) {G__52793__a[G__52793__i] = arguments[G__52793__i + 9]; ++G__52793__i;}
  G__51913 = new cljs.core.IndexedSeq(G__52793__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52794){
var G__51904 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51905 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51906 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51907 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51908 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51909 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51910 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51911 = cljs.core.first(arglist__52794);
arglist__52794 = cljs.core.next(arglist__52794);
var G__51912 = cljs.core.first(arglist__52794);
var G__51913 = cljs.core.rest(arglist__52794);
return sci$impl$fns$arity_9__delegate(G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51918);

(invoc_array[(1)] = G__51919);

(invoc_array[(2)] = G__51920);

(invoc_array[(3)] = G__51921);

(invoc_array[(4)] = G__51922);

(invoc_array[(5)] = G__51923);

(invoc_array[(6)] = G__51924);

(invoc_array[(7)] = G__51925);

(invoc_array[(8)] = G__51926);

(invoc_array[(9)] = G__51927);

(invoc_array[vararg_idx] = G__51928);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,var_args){
var G__51928 = null;
if (arguments.length > 10) {
var G__52796__i = 0, G__52796__a = new Array(arguments.length -  10);
while (G__52796__i < G__52796__a.length) {G__52796__a[G__52796__i] = arguments[G__52796__i + 10]; ++G__52796__i;}
  G__51928 = new cljs.core.IndexedSeq(G__52796__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52797){
var G__51918 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51919 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51920 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51921 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51922 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51923 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51924 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51925 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51926 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51927 = cljs.core.first(arglist__52797);
var G__51928 = cljs.core.rest(arglist__52797);
return sci$impl$fns$arity_10__delegate(G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51931);

(invoc_array[(1)] = G__51932);

(invoc_array[(2)] = G__51933);

(invoc_array[(3)] = G__51934);

(invoc_array[(4)] = G__51935);

(invoc_array[(5)] = G__51936);

(invoc_array[(6)] = G__51937);

(invoc_array[(7)] = G__51938);

(invoc_array[(8)] = G__51939);

(invoc_array[(9)] = G__51940);

(invoc_array[(10)] = G__51941);

(invoc_array[vararg_idx] = G__51942);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,var_args){
var G__51942 = null;
if (arguments.length > 11) {
var G__52799__i = 0, G__52799__a = new Array(arguments.length -  11);
while (G__52799__i < G__52799__a.length) {G__52799__a[G__52799__i] = arguments[G__52799__i + 11]; ++G__52799__i;}
  G__51942 = new cljs.core.IndexedSeq(G__52799__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52800){
var G__51931 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51932 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51933 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51934 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51935 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51936 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51937 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51938 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51939 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51940 = cljs.core.first(arglist__52800);
arglist__52800 = cljs.core.next(arglist__52800);
var G__51941 = cljs.core.first(arglist__52800);
var G__51942 = cljs.core.rest(arglist__52800);
return sci$impl$fns$arity_11__delegate(G__51931,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51946);

(invoc_array[(1)] = G__51947);

(invoc_array[(2)] = G__51948);

(invoc_array[(3)] = G__51949);

(invoc_array[(4)] = G__51950);

(invoc_array[(5)] = G__51951);

(invoc_array[(6)] = G__51952);

(invoc_array[(7)] = G__51953);

(invoc_array[(8)] = G__51954);

(invoc_array[(9)] = G__51955);

(invoc_array[(10)] = G__51956);

(invoc_array[(11)] = G__51957);

(invoc_array[vararg_idx] = G__51958);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,var_args){
var G__51958 = null;
if (arguments.length > 12) {
var G__52804__i = 0, G__52804__a = new Array(arguments.length -  12);
while (G__52804__i < G__52804__a.length) {G__52804__a[G__52804__i] = arguments[G__52804__i + 12]; ++G__52804__i;}
  G__51958 = new cljs.core.IndexedSeq(G__52804__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52805){
var G__51946 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51947 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51948 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51949 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51950 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51951 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51952 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51953 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51954 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51955 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51956 = cljs.core.first(arglist__52805);
arglist__52805 = cljs.core.next(arglist__52805);
var G__51957 = cljs.core.first(arglist__52805);
var G__51958 = cljs.core.rest(arglist__52805);
return sci$impl$fns$arity_12__delegate(G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51962);

(invoc_array[(1)] = G__51963);

(invoc_array[(2)] = G__51964);

(invoc_array[(3)] = G__51965);

(invoc_array[(4)] = G__51966);

(invoc_array[(5)] = G__51967);

(invoc_array[(6)] = G__51968);

(invoc_array[(7)] = G__51969);

(invoc_array[(8)] = G__51970);

(invoc_array[(9)] = G__51971);

(invoc_array[(10)] = G__51972);

(invoc_array[(11)] = G__51973);

(invoc_array[(12)] = G__51974);

(invoc_array[vararg_idx] = G__51975);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,var_args){
var G__51975 = null;
if (arguments.length > 13) {
var G__52807__i = 0, G__52807__a = new Array(arguments.length -  13);
while (G__52807__i < G__52807__a.length) {G__52807__a[G__52807__i] = arguments[G__52807__i + 13]; ++G__52807__i;}
  G__51975 = new cljs.core.IndexedSeq(G__52807__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52809){
var G__51962 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51963 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51964 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51965 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51966 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51967 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51968 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51969 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51970 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51971 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51972 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51973 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51974 = cljs.core.first(arglist__52809);
var G__51975 = cljs.core.rest(arglist__52809);
return sci$impl$fns$arity_13__delegate(G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51983);

(invoc_array[(1)] = G__51984);

(invoc_array[(2)] = G__51985);

(invoc_array[(3)] = G__51986);

(invoc_array[(4)] = G__51987);

(invoc_array[(5)] = G__51988);

(invoc_array[(6)] = G__51989);

(invoc_array[(7)] = G__51990);

(invoc_array[(8)] = G__51991);

(invoc_array[(9)] = G__51992);

(invoc_array[(10)] = G__51993);

(invoc_array[(11)] = G__51994);

(invoc_array[(12)] = G__51995);

(invoc_array[(13)] = G__51996);

(invoc_array[vararg_idx] = G__51997);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,var_args){
var G__51997 = null;
if (arguments.length > 14) {
var G__52814__i = 0, G__52814__a = new Array(arguments.length -  14);
while (G__52814__i < G__52814__a.length) {G__52814__a[G__52814__i] = arguments[G__52814__i + 14]; ++G__52814__i;}
  G__51997 = new cljs.core.IndexedSeq(G__52814__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52816){
var G__51983 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51984 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51985 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51986 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51987 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51988 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51989 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51990 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51991 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51992 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51993 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51994 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51995 = cljs.core.first(arglist__52816);
arglist__52816 = cljs.core.next(arglist__52816);
var G__51996 = cljs.core.first(arglist__52816);
var G__51997 = cljs.core.rest(arglist__52816);
return sci$impl$fns$arity_14__delegate(G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52000);

(invoc_array[(1)] = G__52001);

(invoc_array[(2)] = G__52002);

(invoc_array[(3)] = G__52003);

(invoc_array[(4)] = G__52004);

(invoc_array[(5)] = G__52005);

(invoc_array[(6)] = G__52006);

(invoc_array[(7)] = G__52007);

(invoc_array[(8)] = G__52008);

(invoc_array[(9)] = G__52009);

(invoc_array[(10)] = G__52010);

(invoc_array[(11)] = G__52011);

(invoc_array[(12)] = G__52012);

(invoc_array[(13)] = G__52013);

(invoc_array[(14)] = G__52014);

(invoc_array[vararg_idx] = G__52015);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,var_args){
var G__52015 = null;
if (arguments.length > 15) {
var G__52823__i = 0, G__52823__a = new Array(arguments.length -  15);
while (G__52823__i < G__52823__a.length) {G__52823__a[G__52823__i] = arguments[G__52823__i + 15]; ++G__52823__i;}
  G__52015 = new cljs.core.IndexedSeq(G__52823__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52824){
var G__52000 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52001 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52002 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52003 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52004 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52005 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52006 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52007 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52008 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52009 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52010 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52011 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52012 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52013 = cljs.core.first(arglist__52824);
arglist__52824 = cljs.core.next(arglist__52824);
var G__52014 = cljs.core.first(arglist__52824);
var G__52015 = cljs.core.rest(arglist__52824);
return sci$impl$fns$arity_15__delegate(G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52019);

(invoc_array[(1)] = G__52020);

(invoc_array[(2)] = G__52021);

(invoc_array[(3)] = G__52022);

(invoc_array[(4)] = G__52023);

(invoc_array[(5)] = G__52024);

(invoc_array[(6)] = G__52025);

(invoc_array[(7)] = G__52026);

(invoc_array[(8)] = G__52027);

(invoc_array[(9)] = G__52028);

(invoc_array[(10)] = G__52029);

(invoc_array[(11)] = G__52030);

(invoc_array[(12)] = G__52031);

(invoc_array[(13)] = G__52032);

(invoc_array[(14)] = G__52033);

(invoc_array[(15)] = G__52034);

(invoc_array[vararg_idx] = G__52035);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,var_args){
var G__52035 = null;
if (arguments.length > 16) {
var G__52826__i = 0, G__52826__a = new Array(arguments.length -  16);
while (G__52826__i < G__52826__a.length) {G__52826__a[G__52826__i] = arguments[G__52826__i + 16]; ++G__52826__i;}
  G__52035 = new cljs.core.IndexedSeq(G__52826__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52827){
var G__52019 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52020 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52021 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52022 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52023 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52024 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52025 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52026 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52027 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52028 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52029 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52030 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52031 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52032 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52033 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52034 = cljs.core.first(arglist__52827);
var G__52035 = cljs.core.rest(arglist__52827);
return sci$impl$fns$arity_16__delegate(G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52044);

(invoc_array[(1)] = G__52045);

(invoc_array[(2)] = G__52046);

(invoc_array[(3)] = G__52047);

(invoc_array[(4)] = G__52048);

(invoc_array[(5)] = G__52049);

(invoc_array[(6)] = G__52050);

(invoc_array[(7)] = G__52051);

(invoc_array[(8)] = G__52052);

(invoc_array[(9)] = G__52053);

(invoc_array[(10)] = G__52054);

(invoc_array[(11)] = G__52055);

(invoc_array[(12)] = G__52056);

(invoc_array[(13)] = G__52057);

(invoc_array[(14)] = G__52058);

(invoc_array[(15)] = G__52059);

(invoc_array[(16)] = G__52060);

(invoc_array[vararg_idx] = G__52061);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,var_args){
var G__52061 = null;
if (arguments.length > 17) {
var G__52828__i = 0, G__52828__a = new Array(arguments.length -  17);
while (G__52828__i < G__52828__a.length) {G__52828__a[G__52828__i] = arguments[G__52828__i + 17]; ++G__52828__i;}
  G__52061 = new cljs.core.IndexedSeq(G__52828__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52829){
var G__52044 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52045 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52046 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52047 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52048 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52049 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52050 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52051 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52052 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52053 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52054 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52055 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52056 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52057 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52058 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52059 = cljs.core.first(arglist__52829);
arglist__52829 = cljs.core.next(arglist__52829);
var G__52060 = cljs.core.first(arglist__52829);
var G__52061 = cljs.core.rest(arglist__52829);
return sci$impl$fns$arity_17__delegate(G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52065);

(invoc_array[(1)] = G__52066);

(invoc_array[(2)] = G__52067);

(invoc_array[(3)] = G__52068);

(invoc_array[(4)] = G__52069);

(invoc_array[(5)] = G__52070);

(invoc_array[(6)] = G__52071);

(invoc_array[(7)] = G__52072);

(invoc_array[(8)] = G__52073);

(invoc_array[(9)] = G__52074);

(invoc_array[(10)] = G__52075);

(invoc_array[(11)] = G__52076);

(invoc_array[(12)] = G__52077);

(invoc_array[(13)] = G__52078);

(invoc_array[(14)] = G__52079);

(invoc_array[(15)] = G__52080);

(invoc_array[(16)] = G__52081);

(invoc_array[(17)] = G__52082);

(invoc_array[vararg_idx] = G__52083);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,var_args){
var G__52083 = null;
if (arguments.length > 18) {
var G__52830__i = 0, G__52830__a = new Array(arguments.length -  18);
while (G__52830__i < G__52830__a.length) {G__52830__a[G__52830__i] = arguments[G__52830__i + 18]; ++G__52830__i;}
  G__52083 = new cljs.core.IndexedSeq(G__52830__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52831){
var G__52065 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52066 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52067 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52068 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52069 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52070 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52071 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52072 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52073 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52074 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52075 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52076 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52077 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52078 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52079 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52080 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52081 = cljs.core.first(arglist__52831);
arglist__52831 = cljs.core.next(arglist__52831);
var G__52082 = cljs.core.first(arglist__52831);
var G__52083 = cljs.core.rest(arglist__52831);
return sci$impl$fns$arity_18__delegate(G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52100);

(invoc_array[(1)] = G__52101);

(invoc_array[(2)] = G__52102);

(invoc_array[(3)] = G__52103);

(invoc_array[(4)] = G__52104);

(invoc_array[(5)] = G__52105);

(invoc_array[(6)] = G__52106);

(invoc_array[(7)] = G__52107);

(invoc_array[(8)] = G__52108);

(invoc_array[(9)] = G__52109);

(invoc_array[(10)] = G__52110);

(invoc_array[(11)] = G__52111);

(invoc_array[(12)] = G__52112);

(invoc_array[(13)] = G__52113);

(invoc_array[(14)] = G__52114);

(invoc_array[(15)] = G__52115);

(invoc_array[(16)] = G__52116);

(invoc_array[(17)] = G__52117);

(invoc_array[(18)] = G__52118);

(invoc_array[vararg_idx] = G__52119);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,var_args){
var G__52119 = null;
if (arguments.length > 19) {
var G__52832__i = 0, G__52832__a = new Array(arguments.length -  19);
while (G__52832__i < G__52832__a.length) {G__52832__a[G__52832__i] = arguments[G__52832__i + 19]; ++G__52832__i;}
  G__52119 = new cljs.core.IndexedSeq(G__52832__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52833){
var G__52100 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52101 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52102 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52103 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52104 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52105 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52106 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52107 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52108 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52109 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52110 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52111 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52112 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52113 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52114 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52115 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52116 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52117 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52118 = cljs.core.first(arglist__52833);
var G__52119 = cljs.core.rest(arglist__52833);
return sci$impl$fns$arity_19__delegate(G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52138);

(invoc_array[(1)] = G__52139);

(invoc_array[(2)] = G__52140);

(invoc_array[(3)] = G__52141);

(invoc_array[(4)] = G__52142);

(invoc_array[(5)] = G__52143);

(invoc_array[(6)] = G__52144);

(invoc_array[(7)] = G__52145);

(invoc_array[(8)] = G__52146);

(invoc_array[(9)] = G__52147);

(invoc_array[(10)] = G__52148);

(invoc_array[(11)] = G__52149);

(invoc_array[(12)] = G__52150);

(invoc_array[(13)] = G__52151);

(invoc_array[(14)] = G__52152);

(invoc_array[(15)] = G__52153);

(invoc_array[(16)] = G__52154);

(invoc_array[(17)] = G__52155);

(invoc_array[(18)] = G__52156);

(invoc_array[(19)] = G__52157);

(invoc_array[vararg_idx] = G__52158);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,var_args){
var G__52158 = null;
if (arguments.length > 20) {
var G__52835__i = 0, G__52835__a = new Array(arguments.length -  20);
while (G__52835__i < G__52835__a.length) {G__52835__a[G__52835__i] = arguments[G__52835__i + 20]; ++G__52835__i;}
  G__52158 = new cljs.core.IndexedSeq(G__52835__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52836){
var G__52138 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52139 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52140 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52141 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52142 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52143 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52144 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52145 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52146 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52147 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52148 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52149 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52150 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52151 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52152 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52153 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52154 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52155 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52156 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52157 = cljs.core.first(arglist__52836);
var G__52158 = cljs.core.rest(arglist__52836);
return sci$impl$fns$arity_20__delegate(G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51816))));

}
})():(function (){var G__52170 = fixed_arity;
switch (G__52170) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

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
case (1):
return (function sci$impl$fns$arity_1(G__52173){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52173);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52184,G__52185){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52184);

(invoc_array[(1)] = G__52185);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52186,G__52187,G__52188){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52186);

(invoc_array[(1)] = G__52187);

(invoc_array[(2)] = G__52188);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52194,G__52195,G__52196,G__52197){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52194);

(invoc_array[(1)] = G__52195);

(invoc_array[(2)] = G__52196);

(invoc_array[(3)] = G__52197);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52199,G__52200,G__52201,G__52202,G__52203){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52199);

(invoc_array[(1)] = G__52200);

(invoc_array[(2)] = G__52201);

(invoc_array[(3)] = G__52202);

(invoc_array[(4)] = G__52203);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52211,G__52212,G__52213,G__52214,G__52215,G__52216){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52211);

(invoc_array[(1)] = G__52212);

(invoc_array[(2)] = G__52213);

(invoc_array[(3)] = G__52214);

(invoc_array[(4)] = G__52215);

(invoc_array[(5)] = G__52216);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52223);

(invoc_array[(1)] = G__52224);

(invoc_array[(2)] = G__52225);

(invoc_array[(3)] = G__52226);

(invoc_array[(4)] = G__52227);

(invoc_array[(5)] = G__52228);

(invoc_array[(6)] = G__52229);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52232);

(invoc_array[(1)] = G__52233);

(invoc_array[(2)] = G__52234);

(invoc_array[(3)] = G__52235);

(invoc_array[(4)] = G__52236);

(invoc_array[(5)] = G__52237);

(invoc_array[(6)] = G__52238);

(invoc_array[(7)] = G__52239);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52249);

(invoc_array[(1)] = G__52250);

(invoc_array[(2)] = G__52251);

(invoc_array[(3)] = G__52252);

(invoc_array[(4)] = G__52253);

(invoc_array[(5)] = G__52254);

(invoc_array[(6)] = G__52255);

(invoc_array[(7)] = G__52256);

(invoc_array[(8)] = G__52257);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52258,G__52259,G__52260,G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52258);

(invoc_array[(1)] = G__52259);

(invoc_array[(2)] = G__52260);

(invoc_array[(3)] = G__52261);

(invoc_array[(4)] = G__52262);

(invoc_array[(5)] = G__52263);

(invoc_array[(6)] = G__52264);

(invoc_array[(7)] = G__52265);

(invoc_array[(8)] = G__52266);

(invoc_array[(9)] = G__52267);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52274);

(invoc_array[(1)] = G__52275);

(invoc_array[(2)] = G__52276);

(invoc_array[(3)] = G__52277);

(invoc_array[(4)] = G__52278);

(invoc_array[(5)] = G__52279);

(invoc_array[(6)] = G__52280);

(invoc_array[(7)] = G__52281);

(invoc_array[(8)] = G__52282);

(invoc_array[(9)] = G__52283);

(invoc_array[(10)] = G__52284);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52302,G__52303,G__52304,G__52305,G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52302);

(invoc_array[(1)] = G__52303);

(invoc_array[(2)] = G__52304);

(invoc_array[(3)] = G__52305);

(invoc_array[(4)] = G__52306);

(invoc_array[(5)] = G__52307);

(invoc_array[(6)] = G__52308);

(invoc_array[(7)] = G__52309);

(invoc_array[(8)] = G__52310);

(invoc_array[(9)] = G__52311);

(invoc_array[(10)] = G__52312);

(invoc_array[(11)] = G__52313);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52317);

(invoc_array[(1)] = G__52318);

(invoc_array[(2)] = G__52319);

(invoc_array[(3)] = G__52320);

(invoc_array[(4)] = G__52321);

(invoc_array[(5)] = G__52322);

(invoc_array[(6)] = G__52323);

(invoc_array[(7)] = G__52324);

(invoc_array[(8)] = G__52325);

(invoc_array[(9)] = G__52326);

(invoc_array[(10)] = G__52327);

(invoc_array[(11)] = G__52328);

(invoc_array[(12)] = G__52329);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52334,G__52335,G__52336,G__52337,G__52338,G__52339,G__52340,G__52341,G__52342,G__52343,G__52344,G__52345,G__52346,G__52347){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52334);

(invoc_array[(1)] = G__52335);

(invoc_array[(2)] = G__52336);

(invoc_array[(3)] = G__52337);

(invoc_array[(4)] = G__52338);

(invoc_array[(5)] = G__52339);

(invoc_array[(6)] = G__52340);

(invoc_array[(7)] = G__52341);

(invoc_array[(8)] = G__52342);

(invoc_array[(9)] = G__52343);

(invoc_array[(10)] = G__52344);

(invoc_array[(11)] = G__52345);

(invoc_array[(12)] = G__52346);

(invoc_array[(13)] = G__52347);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52354,G__52355,G__52356,G__52357,G__52358,G__52359,G__52360,G__52361,G__52362,G__52363,G__52364,G__52365,G__52366,G__52367,G__52368){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52354);

(invoc_array[(1)] = G__52355);

(invoc_array[(2)] = G__52356);

(invoc_array[(3)] = G__52357);

(invoc_array[(4)] = G__52358);

(invoc_array[(5)] = G__52359);

(invoc_array[(6)] = G__52360);

(invoc_array[(7)] = G__52361);

(invoc_array[(8)] = G__52362);

(invoc_array[(9)] = G__52363);

(invoc_array[(10)] = G__52364);

(invoc_array[(11)] = G__52365);

(invoc_array[(12)] = G__52366);

(invoc_array[(13)] = G__52367);

(invoc_array[(14)] = G__52368);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52384,G__52385,G__52386,G__52387,G__52388,G__52389,G__52390,G__52391,G__52392,G__52393,G__52394,G__52395,G__52396,G__52397,G__52398,G__52399){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52384);

(invoc_array[(1)] = G__52385);

(invoc_array[(2)] = G__52386);

(invoc_array[(3)] = G__52387);

(invoc_array[(4)] = G__52388);

(invoc_array[(5)] = G__52389);

(invoc_array[(6)] = G__52390);

(invoc_array[(7)] = G__52391);

(invoc_array[(8)] = G__52392);

(invoc_array[(9)] = G__52393);

(invoc_array[(10)] = G__52394);

(invoc_array[(11)] = G__52395);

(invoc_array[(12)] = G__52396);

(invoc_array[(13)] = G__52397);

(invoc_array[(14)] = G__52398);

(invoc_array[(15)] = G__52399);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426,G__52427,G__52428,G__52429,G__52430,G__52431){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52415);

(invoc_array[(1)] = G__52416);

(invoc_array[(2)] = G__52417);

(invoc_array[(3)] = G__52418);

(invoc_array[(4)] = G__52419);

(invoc_array[(5)] = G__52420);

(invoc_array[(6)] = G__52421);

(invoc_array[(7)] = G__52422);

(invoc_array[(8)] = G__52423);

(invoc_array[(9)] = G__52424);

(invoc_array[(10)] = G__52425);

(invoc_array[(11)] = G__52426);

(invoc_array[(12)] = G__52427);

(invoc_array[(13)] = G__52428);

(invoc_array[(14)] = G__52429);

(invoc_array[(15)] = G__52430);

(invoc_array[(16)] = G__52431);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52444,G__52445,G__52446,G__52447,G__52448,G__52449,G__52450,G__52451,G__52452,G__52453,G__52454,G__52455,G__52456,G__52457,G__52458,G__52459,G__52460,G__52461){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52444);

(invoc_array[(1)] = G__52445);

(invoc_array[(2)] = G__52446);

(invoc_array[(3)] = G__52447);

(invoc_array[(4)] = G__52448);

(invoc_array[(5)] = G__52449);

(invoc_array[(6)] = G__52450);

(invoc_array[(7)] = G__52451);

(invoc_array[(8)] = G__52452);

(invoc_array[(9)] = G__52453);

(invoc_array[(10)] = G__52454);

(invoc_array[(11)] = G__52455);

(invoc_array[(12)] = G__52456);

(invoc_array[(13)] = G__52457);

(invoc_array[(14)] = G__52458);

(invoc_array[(15)] = G__52459);

(invoc_array[(16)] = G__52460);

(invoc_array[(17)] = G__52461);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52471,G__52472,G__52473,G__52474,G__52475,G__52476,G__52477,G__52478,G__52479,G__52480,G__52481,G__52482,G__52483,G__52484,G__52485,G__52486,G__52487,G__52488,G__52489){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52471);

(invoc_array[(1)] = G__52472);

(invoc_array[(2)] = G__52473);

(invoc_array[(3)] = G__52474);

(invoc_array[(4)] = G__52475);

(invoc_array[(5)] = G__52476);

(invoc_array[(6)] = G__52477);

(invoc_array[(7)] = G__52478);

(invoc_array[(8)] = G__52479);

(invoc_array[(9)] = G__52480);

(invoc_array[(10)] = G__52481);

(invoc_array[(11)] = G__52482);

(invoc_array[(12)] = G__52483);

(invoc_array[(13)] = G__52484);

(invoc_array[(14)] = G__52485);

(invoc_array[(15)] = G__52486);

(invoc_array[(16)] = G__52487);

(invoc_array[(17)] = G__52488);

(invoc_array[(18)] = G__52489);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52497,G__52498,G__52499,G__52500,G__52501,G__52502,G__52503,G__52504,G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511,G__52512,G__52513,G__52514,G__52515,G__52516){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52497);

(invoc_array[(1)] = G__52498);

(invoc_array[(2)] = G__52499);

(invoc_array[(3)] = G__52500);

(invoc_array[(4)] = G__52501);

(invoc_array[(5)] = G__52502);

(invoc_array[(6)] = G__52503);

(invoc_array[(7)] = G__52504);

(invoc_array[(8)] = G__52505);

(invoc_array[(9)] = G__52506);

(invoc_array[(10)] = G__52507);

(invoc_array[(11)] = G__52508);

(invoc_array[(12)] = G__52509);

(invoc_array[(13)] = G__52510);

(invoc_array[(14)] = G__52511);

(invoc_array[(15)] = G__52512);

(invoc_array[(16)] = G__52513);

(invoc_array[(17)] = G__52514);

(invoc_array[(18)] = G__52515);

(invoc_array[(19)] = G__52516);

while(true){
var ret__51121__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51121__auto__)){
continue;
} else {
return ret__51121__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52170))));

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
var G__52944 = cljs.core.next(params__$1);
var G__52945 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52946 = lets;
params__$1 = G__52944;
new_params = G__52945;
lets = G__52946;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52947 = cljs.core.next(params__$1);
var G__52948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52949 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52947;
new_params = G__52948;
lets = G__52949;
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
var len__5897__auto___52950 = arguments.length;
var i__5898__auto___52951 = (0);
while(true){
if((i__5898__auto___52951 < len__5897__auto___52950)){
args__5903__auto__.push((arguments[i__5898__auto___52951]));

var G__52952 = (i__5898__auto___52951 + (1));
i__5898__auto___52951 = G__52952;
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

var vec__52552 = sig;
var seq__52553 = cljs.core.seq(vec__52552);
var first__52554 = cljs.core.first(seq__52553);
var seq__52553__$1 = cljs.core.next(seq__52553);
var params = first__52554;
var body = seq__52553__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52545){
var G__52546 = cljs.core.first(seq52545);
var seq52545__$1 = cljs.core.next(seq52545);
var G__52547 = cljs.core.first(seq52545__$1);
var seq52545__$2 = cljs.core.next(seq52545__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52546,G__52547,seq52545__$2);
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
var G__52960 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52961 = cljs.core.next(fdecls);
ret = G__52960;
fdecls = G__52961;
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
var len__5897__auto___52962 = arguments.length;
var i__5898__auto___52963 = (0);
while(true){
if((i__5898__auto___52963 < len__5897__auto___52962)){
args__5903__auto__.push((arguments[i__5898__auto___52963]));

var G__52964 = (i__5898__auto___52963 + (1));
i__5898__auto___52963 = G__52964;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52590){
var G__52591 = cljs.core.first(seq52590);
var seq52590__$1 = cljs.core.next(seq52590);
var G__52592 = cljs.core.first(seq52590__$1);
var seq52590__$2 = cljs.core.next(seq52590__$1);
var G__52593 = cljs.core.first(seq52590__$2);
var seq52590__$3 = cljs.core.next(seq52590__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52591,G__52592,G__52593,seq52590__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52968 = arguments.length;
var i__5898__auto___52969 = (0);
while(true){
if((i__5898__auto___52969 < len__5897__auto___52968)){
args__5903__auto__.push((arguments[i__5898__auto___52969]));

var G__52970 = (i__5898__auto___52969 + (1));
i__5898__auto___52969 = G__52970;
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
var G__52971 = cljs.core.cons(f,p);
var G__52972 = cljs.core.next(args__$1);
p = G__52971;
args__$1 = G__52972;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52973 = cljs.core.cons(f,p);
var G__52974 = cljs.core.next(args__$1);
p = G__52973;
args__$1 = G__52974;
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
var G__52975 = cljs.core.next(fd);
fd = G__52975;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52976 = cljs.core.next(fd);
fd = G__52976;
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
var G__52977 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52978 = cljs.core.next(ds);
acc = G__52977;
ds = G__52978;
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
var G__52979 = cljs.core.next(p);
var G__52980 = cljs.core.cons(cljs.core.first(p),d);
p = G__52979;
d = G__52980;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52720){
var G__52721 = cljs.core.first(seq52720);
var seq52720__$1 = cljs.core.next(seq52720);
var G__52722 = cljs.core.first(seq52720__$1);
var seq52720__$2 = cljs.core.next(seq52720__$1);
var G__52723 = cljs.core.first(seq52720__$2);
var seq52720__$3 = cljs.core.next(seq52720__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52721,G__52722,G__52723,seq52720__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
