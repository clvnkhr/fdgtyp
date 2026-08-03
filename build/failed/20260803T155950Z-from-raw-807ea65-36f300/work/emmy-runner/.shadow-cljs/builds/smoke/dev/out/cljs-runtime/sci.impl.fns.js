goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51783 = arguments.length;
switch (G__51783) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51790 = fixed_arity;
switch (G__51790) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51796){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51796);

while(true){
var ret__51137__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51137__auto__)){
continue;
} else {
return ret__51137__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51796 = null;
if (arguments.length > 0) {
var G__52755__i = 0, G__52755__a = new Array(arguments.length -  0);
while (G__52755__i < G__52755__a.length) {G__52755__a[G__52755__i] = arguments[G__52755__i + 0]; ++G__52755__i;}
  G__51796 = new cljs.core.IndexedSeq(G__52755__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51796);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52756){
var G__51796 = cljs.core.seq(arglist__52756);
return sci$impl$fns$arity_0__delegate(G__51796);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51810,G__51811){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51810);

(invoc_array[vararg_idx] = G__51811);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51810,var_args){
var G__51811 = null;
if (arguments.length > 1) {
var G__52757__i = 0, G__52757__a = new Array(arguments.length -  1);
while (G__52757__i < G__52757__a.length) {G__52757__a[G__52757__i] = arguments[G__52757__i + 1]; ++G__52757__i;}
  G__51811 = new cljs.core.IndexedSeq(G__52757__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51810,G__51811);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52758){
var G__51810 = cljs.core.first(arglist__52758);
var G__51811 = cljs.core.rest(arglist__52758);
return sci$impl$fns$arity_1__delegate(G__51810,G__51811);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51815,G__51816,G__51817){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51815);

(invoc_array[(1)] = G__51816);

(invoc_array[vararg_idx] = G__51817);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51815,G__51816,var_args){
var G__51817 = null;
if (arguments.length > 2) {
var G__52759__i = 0, G__52759__a = new Array(arguments.length -  2);
while (G__52759__i < G__52759__a.length) {G__52759__a[G__52759__i] = arguments[G__52759__i + 2]; ++G__52759__i;}
  G__51817 = new cljs.core.IndexedSeq(G__52759__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51815,G__51816,G__51817);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52760){
var G__51815 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51816 = cljs.core.first(arglist__52760);
var G__51817 = cljs.core.rest(arglist__52760);
return sci$impl$fns$arity_2__delegate(G__51815,G__51816,G__51817);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51824,G__51825,G__51826,G__51827){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51824);

(invoc_array[(1)] = G__51825);

(invoc_array[(2)] = G__51826);

(invoc_array[vararg_idx] = G__51827);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__51824,G__51825,G__51826,var_args){
var G__51827 = null;
if (arguments.length > 3) {
var G__52762__i = 0, G__52762__a = new Array(arguments.length -  3);
while (G__52762__i < G__52762__a.length) {G__52762__a[G__52762__i] = arguments[G__52762__i + 3]; ++G__52762__i;}
  G__51827 = new cljs.core.IndexedSeq(G__52762__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51824,G__51825,G__51826,G__51827);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52764){
var G__51824 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__51825 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__51826 = cljs.core.first(arglist__52764);
var G__51827 = cljs.core.rest(arglist__52764);
return sci$impl$fns$arity_3__delegate(G__51824,G__51825,G__51826,G__51827);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51840,G__51841,G__51842,G__51843,G__51844){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51840);

(invoc_array[(1)] = G__51841);

(invoc_array[(2)] = G__51842);

(invoc_array[(3)] = G__51843);

(invoc_array[vararg_idx] = G__51844);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__51840,G__51841,G__51842,G__51843,var_args){
var G__51844 = null;
if (arguments.length > 4) {
var G__52769__i = 0, G__52769__a = new Array(arguments.length -  4);
while (G__52769__i < G__52769__a.length) {G__52769__a[G__52769__i] = arguments[G__52769__i + 4]; ++G__52769__i;}
  G__51844 = new cljs.core.IndexedSeq(G__52769__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51840,G__51841,G__51842,G__51843,G__51844);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52770){
var G__51840 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51841 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51842 = cljs.core.first(arglist__52770);
arglist__52770 = cljs.core.next(arglist__52770);
var G__51843 = cljs.core.first(arglist__52770);
var G__51844 = cljs.core.rest(arglist__52770);
return sci$impl$fns$arity_4__delegate(G__51840,G__51841,G__51842,G__51843,G__51844);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51848,G__51849,G__51850,G__51851,G__51852,G__51853){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51848);

(invoc_array[(1)] = G__51849);

(invoc_array[(2)] = G__51850);

(invoc_array[(3)] = G__51851);

(invoc_array[(4)] = G__51852);

(invoc_array[vararg_idx] = G__51853);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__51848,G__51849,G__51850,G__51851,G__51852,var_args){
var G__51853 = null;
if (arguments.length > 5) {
var G__52771__i = 0, G__52771__a = new Array(arguments.length -  5);
while (G__52771__i < G__52771__a.length) {G__52771__a[G__52771__i] = arguments[G__52771__i + 5]; ++G__52771__i;}
  G__51853 = new cljs.core.IndexedSeq(G__52771__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51848,G__51849,G__51850,G__51851,G__51852,G__51853);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52772){
var G__51848 = cljs.core.first(arglist__52772);
arglist__52772 = cljs.core.next(arglist__52772);
var G__51849 = cljs.core.first(arglist__52772);
arglist__52772 = cljs.core.next(arglist__52772);
var G__51850 = cljs.core.first(arglist__52772);
arglist__52772 = cljs.core.next(arglist__52772);
var G__51851 = cljs.core.first(arglist__52772);
arglist__52772 = cljs.core.next(arglist__52772);
var G__51852 = cljs.core.first(arglist__52772);
var G__51853 = cljs.core.rest(arglist__52772);
return sci$impl$fns$arity_5__delegate(G__51848,G__51849,G__51850,G__51851,G__51852,G__51853);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51859);

(invoc_array[(1)] = G__51860);

(invoc_array[(2)] = G__51861);

(invoc_array[(3)] = G__51862);

(invoc_array[(4)] = G__51863);

(invoc_array[(5)] = G__51864);

(invoc_array[vararg_idx] = G__51865);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,var_args){
var G__51865 = null;
if (arguments.length > 6) {
var G__52781__i = 0, G__52781__a = new Array(arguments.length -  6);
while (G__52781__i < G__52781__a.length) {G__52781__a[G__52781__i] = arguments[G__52781__i + 6]; ++G__52781__i;}
  G__51865 = new cljs.core.IndexedSeq(G__52781__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52782){
var G__51859 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51860 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51861 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51862 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51863 = cljs.core.first(arglist__52782);
arglist__52782 = cljs.core.next(arglist__52782);
var G__51864 = cljs.core.first(arglist__52782);
var G__51865 = cljs.core.rest(arglist__52782);
return sci$impl$fns$arity_6__delegate(G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51870);

(invoc_array[(1)] = G__51871);

(invoc_array[(2)] = G__51872);

(invoc_array[(3)] = G__51873);

(invoc_array[(4)] = G__51874);

(invoc_array[(5)] = G__51875);

(invoc_array[(6)] = G__51876);

(invoc_array[vararg_idx] = G__51877);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,var_args){
var G__51877 = null;
if (arguments.length > 7) {
var G__52783__i = 0, G__52783__a = new Array(arguments.length -  7);
while (G__52783__i < G__52783__a.length) {G__52783__a[G__52783__i] = arguments[G__52783__i + 7]; ++G__52783__i;}
  G__51877 = new cljs.core.IndexedSeq(G__52783__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52784){
var G__51870 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
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
return sci$impl$fns$arity_7__delegate(G__51870,G__51871,G__51872,G__51873,G__51874,G__51875,G__51876,G__51877);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51887);

(invoc_array[(1)] = G__51888);

(invoc_array[(2)] = G__51889);

(invoc_array[(3)] = G__51890);

(invoc_array[(4)] = G__51891);

(invoc_array[(5)] = G__51892);

(invoc_array[(6)] = G__51893);

(invoc_array[(7)] = G__51894);

(invoc_array[vararg_idx] = G__51895);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,var_args){
var G__51895 = null;
if (arguments.length > 8) {
var G__52785__i = 0, G__52785__a = new Array(arguments.length -  8);
while (G__52785__i < G__52785__a.length) {G__52785__a[G__52785__i] = arguments[G__52785__i + 8]; ++G__52785__i;}
  G__51895 = new cljs.core.IndexedSeq(G__52785__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52786){
var G__51887 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51888 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51889 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51890 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51891 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51892 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51893 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__51894 = cljs.core.first(arglist__52786);
var G__51895 = cljs.core.rest(arglist__52786);
return sci$impl$fns$arity_8__delegate(G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51898);

(invoc_array[(1)] = G__51899);

(invoc_array[(2)] = G__51900);

(invoc_array[(3)] = G__51901);

(invoc_array[(4)] = G__51902);

(invoc_array[(5)] = G__51903);

(invoc_array[(6)] = G__51904);

(invoc_array[(7)] = G__51905);

(invoc_array[(8)] = G__51906);

(invoc_array[vararg_idx] = G__51907);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,var_args){
var G__51907 = null;
if (arguments.length > 9) {
var G__52788__i = 0, G__52788__a = new Array(arguments.length -  9);
while (G__52788__i < G__52788__a.length) {G__52788__a[G__52788__i] = arguments[G__52788__i + 9]; ++G__52788__i;}
  G__51907 = new cljs.core.IndexedSeq(G__52788__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52789){
var G__51898 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51899 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51900 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51901 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51902 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51903 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51904 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51905 = cljs.core.first(arglist__52789);
arglist__52789 = cljs.core.next(arglist__52789);
var G__51906 = cljs.core.first(arglist__52789);
var G__51907 = cljs.core.rest(arglist__52789);
return sci$impl$fns$arity_9__delegate(G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51909);

(invoc_array[(1)] = G__51910);

(invoc_array[(2)] = G__51911);

(invoc_array[(3)] = G__51912);

(invoc_array[(4)] = G__51913);

(invoc_array[(5)] = G__51914);

(invoc_array[(6)] = G__51915);

(invoc_array[(7)] = G__51916);

(invoc_array[(8)] = G__51917);

(invoc_array[(9)] = G__51918);

(invoc_array[vararg_idx] = G__51919);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,var_args){
var G__51919 = null;
if (arguments.length > 10) {
var G__52790__i = 0, G__52790__a = new Array(arguments.length -  10);
while (G__52790__i < G__52790__a.length) {G__52790__a[G__52790__i] = arguments[G__52790__i + 10]; ++G__52790__i;}
  G__51919 = new cljs.core.IndexedSeq(G__52790__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52791){
var G__51909 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51910 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51911 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51912 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51913 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51914 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51915 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51916 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51917 = cljs.core.first(arglist__52791);
arglist__52791 = cljs.core.next(arglist__52791);
var G__51918 = cljs.core.first(arglist__52791);
var G__51919 = cljs.core.rest(arglist__52791);
return sci$impl$fns$arity_10__delegate(G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51920);

(invoc_array[(1)] = G__51921);

(invoc_array[(2)] = G__51922);

(invoc_array[(3)] = G__51923);

(invoc_array[(4)] = G__51924);

(invoc_array[(5)] = G__51925);

(invoc_array[(6)] = G__51926);

(invoc_array[(7)] = G__51927);

(invoc_array[(8)] = G__51928);

(invoc_array[(9)] = G__51929);

(invoc_array[(10)] = G__51930);

(invoc_array[vararg_idx] = G__51931);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,var_args){
var G__51931 = null;
if (arguments.length > 11) {
var G__52796__i = 0, G__52796__a = new Array(arguments.length -  11);
while (G__52796__i < G__52796__a.length) {G__52796__a[G__52796__i] = arguments[G__52796__i + 11]; ++G__52796__i;}
  G__51931 = new cljs.core.IndexedSeq(G__52796__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52797){
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
arglist__52797 = cljs.core.next(arglist__52797);
var G__51928 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51929 = cljs.core.first(arglist__52797);
arglist__52797 = cljs.core.next(arglist__52797);
var G__51930 = cljs.core.first(arglist__52797);
var G__51931 = cljs.core.rest(arglist__52797);
return sci$impl$fns$arity_11__delegate(G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931);
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
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,var_args){
var G__51958 = null;
if (arguments.length > 12) {
var G__52801__i = 0, G__52801__a = new Array(arguments.length -  12);
while (G__52801__i < G__52801__a.length) {G__52801__a[G__52801__i] = arguments[G__52801__i + 12]; ++G__52801__i;}
  G__51958 = new cljs.core.IndexedSeq(G__52801__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52802){
var G__51946 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51947 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51948 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51949 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51950 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51951 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51952 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51953 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51954 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51955 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51956 = cljs.core.first(arglist__52802);
arglist__52802 = cljs.core.next(arglist__52802);
var G__51957 = cljs.core.first(arglist__52802);
var G__51958 = cljs.core.rest(arglist__52802);
return sci$impl$fns$arity_12__delegate(G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51967);

(invoc_array[(1)] = G__51968);

(invoc_array[(2)] = G__51969);

(invoc_array[(3)] = G__51970);

(invoc_array[(4)] = G__51971);

(invoc_array[(5)] = G__51972);

(invoc_array[(6)] = G__51973);

(invoc_array[(7)] = G__51974);

(invoc_array[(8)] = G__51975);

(invoc_array[(9)] = G__51976);

(invoc_array[(10)] = G__51977);

(invoc_array[(11)] = G__51978);

(invoc_array[(12)] = G__51979);

(invoc_array[vararg_idx] = G__51980);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,var_args){
var G__51980 = null;
if (arguments.length > 13) {
var G__52804__i = 0, G__52804__a = new Array(arguments.length -  13);
while (G__52804__i < G__52804__a.length) {G__52804__a[G__52804__i] = arguments[G__52804__i + 13]; ++G__52804__i;}
  G__51980 = new cljs.core.IndexedSeq(G__52804__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52806){
var G__51967 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51968 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51969 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51970 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51971 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51972 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51973 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51974 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51975 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51976 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51977 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51978 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51979 = cljs.core.first(arglist__52806);
var G__51980 = cljs.core.rest(arglist__52806);
return sci$impl$fns$arity_13__delegate(G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51987);

(invoc_array[(1)] = G__51988);

(invoc_array[(2)] = G__51989);

(invoc_array[(3)] = G__51990);

(invoc_array[(4)] = G__51991);

(invoc_array[(5)] = G__51992);

(invoc_array[(6)] = G__51993);

(invoc_array[(7)] = G__51994);

(invoc_array[(8)] = G__51995);

(invoc_array[(9)] = G__51996);

(invoc_array[(10)] = G__51997);

(invoc_array[(11)] = G__51998);

(invoc_array[(12)] = G__51999);

(invoc_array[(13)] = G__52000);

(invoc_array[vararg_idx] = G__52001);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,var_args){
var G__52001 = null;
if (arguments.length > 14) {
var G__52808__i = 0, G__52808__a = new Array(arguments.length -  14);
while (G__52808__i < G__52808__a.length) {G__52808__a[G__52808__i] = arguments[G__52808__i + 14]; ++G__52808__i;}
  G__52001 = new cljs.core.IndexedSeq(G__52808__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52809){
var G__51987 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51988 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51989 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51990 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51991 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51992 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51993 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51994 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51995 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51996 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51997 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51998 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__51999 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52000 = cljs.core.first(arglist__52809);
var G__52001 = cljs.core.rest(arglist__52809);
return sci$impl$fns$arity_14__delegate(G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52011);

(invoc_array[(1)] = G__52012);

(invoc_array[(2)] = G__52013);

(invoc_array[(3)] = G__52014);

(invoc_array[(4)] = G__52015);

(invoc_array[(5)] = G__52016);

(invoc_array[(6)] = G__52017);

(invoc_array[(7)] = G__52018);

(invoc_array[(8)] = G__52019);

(invoc_array[(9)] = G__52020);

(invoc_array[(10)] = G__52021);

(invoc_array[(11)] = G__52022);

(invoc_array[(12)] = G__52023);

(invoc_array[(13)] = G__52024);

(invoc_array[(14)] = G__52025);

(invoc_array[vararg_idx] = G__52026);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,var_args){
var G__52026 = null;
if (arguments.length > 15) {
var G__52810__i = 0, G__52810__a = new Array(arguments.length -  15);
while (G__52810__i < G__52810__a.length) {G__52810__a[G__52810__i] = arguments[G__52810__i + 15]; ++G__52810__i;}
  G__52026 = new cljs.core.IndexedSeq(G__52810__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52811){
var G__52011 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52012 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52013 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52014 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52015 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52016 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52017 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52018 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52019 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52020 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52021 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52022 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52023 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52024 = cljs.core.first(arglist__52811);
arglist__52811 = cljs.core.next(arglist__52811);
var G__52025 = cljs.core.first(arglist__52811);
var G__52026 = cljs.core.rest(arglist__52811);
return sci$impl$fns$arity_15__delegate(G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52036);

(invoc_array[(1)] = G__52037);

(invoc_array[(2)] = G__52038);

(invoc_array[(3)] = G__52039);

(invoc_array[(4)] = G__52040);

(invoc_array[(5)] = G__52041);

(invoc_array[(6)] = G__52042);

(invoc_array[(7)] = G__52043);

(invoc_array[(8)] = G__52044);

(invoc_array[(9)] = G__52045);

(invoc_array[(10)] = G__52046);

(invoc_array[(11)] = G__52047);

(invoc_array[(12)] = G__52048);

(invoc_array[(13)] = G__52049);

(invoc_array[(14)] = G__52050);

(invoc_array[(15)] = G__52051);

(invoc_array[vararg_idx] = G__52052);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,var_args){
var G__52052 = null;
if (arguments.length > 16) {
var G__52812__i = 0, G__52812__a = new Array(arguments.length -  16);
while (G__52812__i < G__52812__a.length) {G__52812__a[G__52812__i] = arguments[G__52812__i + 16]; ++G__52812__i;}
  G__52052 = new cljs.core.IndexedSeq(G__52812__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52813){
var G__52036 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52037 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52038 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52039 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52040 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52041 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52042 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52043 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52044 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52045 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52046 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52047 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52048 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52049 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52050 = cljs.core.first(arglist__52813);
arglist__52813 = cljs.core.next(arglist__52813);
var G__52051 = cljs.core.first(arglist__52813);
var G__52052 = cljs.core.rest(arglist__52813);
return sci$impl$fns$arity_16__delegate(G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52067);

(invoc_array[(1)] = G__52068);

(invoc_array[(2)] = G__52069);

(invoc_array[(3)] = G__52070);

(invoc_array[(4)] = G__52071);

(invoc_array[(5)] = G__52072);

(invoc_array[(6)] = G__52073);

(invoc_array[(7)] = G__52074);

(invoc_array[(8)] = G__52075);

(invoc_array[(9)] = G__52076);

(invoc_array[(10)] = G__52077);

(invoc_array[(11)] = G__52078);

(invoc_array[(12)] = G__52079);

(invoc_array[(13)] = G__52080);

(invoc_array[(14)] = G__52081);

(invoc_array[(15)] = G__52082);

(invoc_array[(16)] = G__52083);

(invoc_array[vararg_idx] = G__52084);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,var_args){
var G__52084 = null;
if (arguments.length > 17) {
var G__52814__i = 0, G__52814__a = new Array(arguments.length -  17);
while (G__52814__i < G__52814__a.length) {G__52814__a[G__52814__i] = arguments[G__52814__i + 17]; ++G__52814__i;}
  G__52084 = new cljs.core.IndexedSeq(G__52814__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52818){
var G__52067 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52068 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52069 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52070 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52071 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52072 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52073 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52074 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52075 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52076 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52077 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52078 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52079 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52080 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52081 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52082 = cljs.core.first(arglist__52818);
arglist__52818 = cljs.core.next(arglist__52818);
var G__52083 = cljs.core.first(arglist__52818);
var G__52084 = cljs.core.rest(arglist__52818);
return sci$impl$fns$arity_17__delegate(G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52109);

(invoc_array[(1)] = G__52110);

(invoc_array[(2)] = G__52111);

(invoc_array[(3)] = G__52112);

(invoc_array[(4)] = G__52113);

(invoc_array[(5)] = G__52114);

(invoc_array[(6)] = G__52115);

(invoc_array[(7)] = G__52116);

(invoc_array[(8)] = G__52117);

(invoc_array[(9)] = G__52118);

(invoc_array[(10)] = G__52119);

(invoc_array[(11)] = G__52120);

(invoc_array[(12)] = G__52121);

(invoc_array[(13)] = G__52122);

(invoc_array[(14)] = G__52123);

(invoc_array[(15)] = G__52124);

(invoc_array[(16)] = G__52125);

(invoc_array[(17)] = G__52126);

(invoc_array[vararg_idx] = G__52127);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,var_args){
var G__52127 = null;
if (arguments.length > 18) {
var G__52823__i = 0, G__52823__a = new Array(arguments.length -  18);
while (G__52823__i < G__52823__a.length) {G__52823__a[G__52823__i] = arguments[G__52823__i + 18]; ++G__52823__i;}
  G__52127 = new cljs.core.IndexedSeq(G__52823__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52825){
var G__52109 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52110 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52111 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52112 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52113 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52114 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52115 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52116 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52117 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52118 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52119 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52120 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52121 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52122 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52123 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52124 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52125 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52126 = cljs.core.first(arglist__52825);
var G__52127 = cljs.core.rest(arglist__52825);
return sci$impl$fns$arity_18__delegate(G__52109,G__52110,G__52111,G__52112,G__52113,G__52114,G__52115,G__52116,G__52117,G__52118,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52129);

(invoc_array[(1)] = G__52130);

(invoc_array[(2)] = G__52131);

(invoc_array[(3)] = G__52132);

(invoc_array[(4)] = G__52133);

(invoc_array[(5)] = G__52134);

(invoc_array[(6)] = G__52135);

(invoc_array[(7)] = G__52136);

(invoc_array[(8)] = G__52137);

(invoc_array[(9)] = G__52138);

(invoc_array[(10)] = G__52139);

(invoc_array[(11)] = G__52140);

(invoc_array[(12)] = G__52141);

(invoc_array[(13)] = G__52142);

(invoc_array[(14)] = G__52143);

(invoc_array[(15)] = G__52144);

(invoc_array[(16)] = G__52145);

(invoc_array[(17)] = G__52146);

(invoc_array[(18)] = G__52147);

(invoc_array[vararg_idx] = G__52148);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,var_args){
var G__52148 = null;
if (arguments.length > 19) {
var G__52832__i = 0, G__52832__a = new Array(arguments.length -  19);
while (G__52832__i < G__52832__a.length) {G__52832__a[G__52832__i] = arguments[G__52832__i + 19]; ++G__52832__i;}
  G__52148 = new cljs.core.IndexedSeq(G__52832__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52833){
var G__52129 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52130 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52131 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52132 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52133 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52134 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52135 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52136 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52137 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52138 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52139 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52140 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52141 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52142 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52143 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52144 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52145 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52146 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52147 = cljs.core.first(arglist__52833);
var G__52148 = cljs.core.rest(arglist__52833);
return sci$impl$fns$arity_19__delegate(G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52159);

(invoc_array[(1)] = G__52160);

(invoc_array[(2)] = G__52161);

(invoc_array[(3)] = G__52162);

(invoc_array[(4)] = G__52163);

(invoc_array[(5)] = G__52164);

(invoc_array[(6)] = G__52165);

(invoc_array[(7)] = G__52166);

(invoc_array[(8)] = G__52167);

(invoc_array[(9)] = G__52168);

(invoc_array[(10)] = G__52169);

(invoc_array[(11)] = G__52170);

(invoc_array[(12)] = G__52171);

(invoc_array[(13)] = G__52172);

(invoc_array[(14)] = G__52173);

(invoc_array[(15)] = G__52174);

(invoc_array[(16)] = G__52175);

(invoc_array[(17)] = G__52176);

(invoc_array[(18)] = G__52177);

(invoc_array[(19)] = G__52178);

(invoc_array[vararg_idx] = G__52179);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,var_args){
var G__52179 = null;
if (arguments.length > 20) {
var G__52834__i = 0, G__52834__a = new Array(arguments.length -  20);
while (G__52834__i < G__52834__a.length) {G__52834__a[G__52834__i] = arguments[G__52834__i + 20]; ++G__52834__i;}
  G__52179 = new cljs.core.IndexedSeq(G__52834__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52836){
var G__52159 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52160 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52161 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52162 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52163 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52164 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52165 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52166 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52167 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52168 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52169 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52170 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52171 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52172 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52173 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52174 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52175 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52176 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52177 = cljs.core.first(arglist__52836);
arglist__52836 = cljs.core.next(arglist__52836);
var G__52178 = cljs.core.first(arglist__52836);
var G__52179 = cljs.core.rest(arglist__52836);
return sci$impl$fns$arity_20__delegate(G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51790))));

}
})():(function (){var G__52188 = fixed_arity;
switch (G__52188) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51137__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51137__auto__)){
continue;
} else {
return ret__51137__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52193){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52193);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52199,G__52200){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52199);

(invoc_array[(1)] = G__52200);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52202,G__52203,G__52204){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52202);

(invoc_array[(1)] = G__52203);

(invoc_array[(2)] = G__52204);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52205,G__52206,G__52207,G__52208){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52205);

(invoc_array[(1)] = G__52206);

(invoc_array[(2)] = G__52207);

(invoc_array[(3)] = G__52208);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52220,G__52221,G__52222,G__52223,G__52224){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52220);

(invoc_array[(1)] = G__52221);

(invoc_array[(2)] = G__52222);

(invoc_array[(3)] = G__52223);

(invoc_array[(4)] = G__52224);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52231,G__52232,G__52233,G__52234,G__52235,G__52236){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52231);

(invoc_array[(1)] = G__52232);

(invoc_array[(2)] = G__52233);

(invoc_array[(3)] = G__52234);

(invoc_array[(4)] = G__52235);

(invoc_array[(5)] = G__52236);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52244);

(invoc_array[(1)] = G__52245);

(invoc_array[(2)] = G__52246);

(invoc_array[(3)] = G__52247);

(invoc_array[(4)] = G__52248);

(invoc_array[(5)] = G__52249);

(invoc_array[(6)] = G__52250);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52257,G__52258,G__52259,G__52260,G__52262,G__52263,G__52264,G__52265){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52257);

(invoc_array[(1)] = G__52258);

(invoc_array[(2)] = G__52259);

(invoc_array[(3)] = G__52260);

(invoc_array[(4)] = G__52262);

(invoc_array[(5)] = G__52263);

(invoc_array[(6)] = G__52264);

(invoc_array[(7)] = G__52265);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52276);

(invoc_array[(1)] = G__52277);

(invoc_array[(2)] = G__52278);

(invoc_array[(3)] = G__52279);

(invoc_array[(4)] = G__52280);

(invoc_array[(5)] = G__52281);

(invoc_array[(6)] = G__52282);

(invoc_array[(7)] = G__52283);

(invoc_array[(8)] = G__52284);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52285);

(invoc_array[(1)] = G__52286);

(invoc_array[(2)] = G__52287);

(invoc_array[(3)] = G__52288);

(invoc_array[(4)] = G__52289);

(invoc_array[(5)] = G__52290);

(invoc_array[(6)] = G__52291);

(invoc_array[(7)] = G__52292);

(invoc_array[(8)] = G__52293);

(invoc_array[(9)] = G__52294);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52306);

(invoc_array[(1)] = G__52307);

(invoc_array[(2)] = G__52308);

(invoc_array[(3)] = G__52309);

(invoc_array[(4)] = G__52310);

(invoc_array[(5)] = G__52311);

(invoc_array[(6)] = G__52312);

(invoc_array[(7)] = G__52313);

(invoc_array[(8)] = G__52314);

(invoc_array[(9)] = G__52315);

(invoc_array[(10)] = G__52316);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52322);

(invoc_array[(1)] = G__52323);

(invoc_array[(2)] = G__52324);

(invoc_array[(3)] = G__52325);

(invoc_array[(4)] = G__52326);

(invoc_array[(5)] = G__52327);

(invoc_array[(6)] = G__52328);

(invoc_array[(7)] = G__52329);

(invoc_array[(8)] = G__52330);

(invoc_array[(9)] = G__52331);

(invoc_array[(10)] = G__52332);

(invoc_array[(11)] = G__52333);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52350,G__52351,G__52352,G__52353,G__52354,G__52355,G__52356,G__52357,G__52358,G__52359,G__52360,G__52361,G__52362){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52350);

(invoc_array[(1)] = G__52351);

(invoc_array[(2)] = G__52352);

(invoc_array[(3)] = G__52353);

(invoc_array[(4)] = G__52354);

(invoc_array[(5)] = G__52355);

(invoc_array[(6)] = G__52356);

(invoc_array[(7)] = G__52357);

(invoc_array[(8)] = G__52358);

(invoc_array[(9)] = G__52359);

(invoc_array[(10)] = G__52360);

(invoc_array[(11)] = G__52361);

(invoc_array[(12)] = G__52362);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380,G__52381,G__52382){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52369);

(invoc_array[(1)] = G__52370);

(invoc_array[(2)] = G__52371);

(invoc_array[(3)] = G__52372);

(invoc_array[(4)] = G__52373);

(invoc_array[(5)] = G__52374);

(invoc_array[(6)] = G__52375);

(invoc_array[(7)] = G__52376);

(invoc_array[(8)] = G__52377);

(invoc_array[(9)] = G__52378);

(invoc_array[(10)] = G__52379);

(invoc_array[(11)] = G__52380);

(invoc_array[(12)] = G__52381);

(invoc_array[(13)] = G__52382);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52392,G__52393,G__52394,G__52395,G__52396,G__52397,G__52398,G__52399,G__52400,G__52401,G__52402,G__52403,G__52404,G__52405,G__52406){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52392);

(invoc_array[(1)] = G__52393);

(invoc_array[(2)] = G__52394);

(invoc_array[(3)] = G__52395);

(invoc_array[(4)] = G__52396);

(invoc_array[(5)] = G__52397);

(invoc_array[(6)] = G__52398);

(invoc_array[(7)] = G__52399);

(invoc_array[(8)] = G__52400);

(invoc_array[(9)] = G__52401);

(invoc_array[(10)] = G__52402);

(invoc_array[(11)] = G__52403);

(invoc_array[(12)] = G__52404);

(invoc_array[(13)] = G__52405);

(invoc_array[(14)] = G__52406);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52425,G__52426,G__52427,G__52428,G__52429,G__52430,G__52431,G__52432,G__52433){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52417);

(invoc_array[(1)] = G__52418);

(invoc_array[(2)] = G__52419);

(invoc_array[(3)] = G__52420);

(invoc_array[(4)] = G__52421);

(invoc_array[(5)] = G__52422);

(invoc_array[(6)] = G__52423);

(invoc_array[(7)] = G__52425);

(invoc_array[(8)] = G__52426);

(invoc_array[(9)] = G__52427);

(invoc_array[(10)] = G__52428);

(invoc_array[(11)] = G__52429);

(invoc_array[(12)] = G__52430);

(invoc_array[(13)] = G__52431);

(invoc_array[(14)] = G__52432);

(invoc_array[(15)] = G__52433);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52436,G__52437,G__52438,G__52439,G__52440,G__52441,G__52442,G__52443,G__52444,G__52445,G__52446,G__52447,G__52448,G__52449,G__52450,G__52451,G__52452){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52436);

(invoc_array[(1)] = G__52437);

(invoc_array[(2)] = G__52438);

(invoc_array[(3)] = G__52439);

(invoc_array[(4)] = G__52440);

(invoc_array[(5)] = G__52441);

(invoc_array[(6)] = G__52442);

(invoc_array[(7)] = G__52443);

(invoc_array[(8)] = G__52444);

(invoc_array[(9)] = G__52445);

(invoc_array[(10)] = G__52446);

(invoc_array[(11)] = G__52447);

(invoc_array[(12)] = G__52448);

(invoc_array[(13)] = G__52449);

(invoc_array[(14)] = G__52450);

(invoc_array[(15)] = G__52451);

(invoc_array[(16)] = G__52452);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52466,G__52467,G__52468,G__52469,G__52470,G__52471,G__52472,G__52473,G__52474,G__52475,G__52476,G__52477,G__52478,G__52479,G__52480,G__52481,G__52482,G__52483){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52466);

(invoc_array[(1)] = G__52467);

(invoc_array[(2)] = G__52468);

(invoc_array[(3)] = G__52469);

(invoc_array[(4)] = G__52470);

(invoc_array[(5)] = G__52471);

(invoc_array[(6)] = G__52472);

(invoc_array[(7)] = G__52473);

(invoc_array[(8)] = G__52474);

(invoc_array[(9)] = G__52475);

(invoc_array[(10)] = G__52476);

(invoc_array[(11)] = G__52477);

(invoc_array[(12)] = G__52478);

(invoc_array[(13)] = G__52479);

(invoc_array[(14)] = G__52480);

(invoc_array[(15)] = G__52481);

(invoc_array[(16)] = G__52482);

(invoc_array[(17)] = G__52483);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52494,G__52495,G__52496,G__52497,G__52498,G__52499,G__52500,G__52501,G__52502,G__52503,G__52504,G__52505,G__52506,G__52507,G__52508,G__52509,G__52510,G__52511,G__52512){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52494);

(invoc_array[(1)] = G__52495);

(invoc_array[(2)] = G__52496);

(invoc_array[(3)] = G__52497);

(invoc_array[(4)] = G__52498);

(invoc_array[(5)] = G__52499);

(invoc_array[(6)] = G__52500);

(invoc_array[(7)] = G__52501);

(invoc_array[(8)] = G__52502);

(invoc_array[(9)] = G__52503);

(invoc_array[(10)] = G__52504);

(invoc_array[(11)] = G__52505);

(invoc_array[(12)] = G__52506);

(invoc_array[(13)] = G__52507);

(invoc_array[(14)] = G__52508);

(invoc_array[(15)] = G__52509);

(invoc_array[(16)] = G__52510);

(invoc_array[(17)] = G__52511);

(invoc_array[(18)] = G__52512);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52513,G__52514,G__52515,G__52516,G__52517,G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524,G__52525,G__52526,G__52527,G__52528,G__52529,G__52530,G__52531,G__52532){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52513);

(invoc_array[(1)] = G__52514);

(invoc_array[(2)] = G__52515);

(invoc_array[(3)] = G__52516);

(invoc_array[(4)] = G__52517);

(invoc_array[(5)] = G__52518);

(invoc_array[(6)] = G__52519);

(invoc_array[(7)] = G__52520);

(invoc_array[(8)] = G__52521);

(invoc_array[(9)] = G__52522);

(invoc_array[(10)] = G__52523);

(invoc_array[(11)] = G__52524);

(invoc_array[(12)] = G__52525);

(invoc_array[(13)] = G__52526);

(invoc_array[(14)] = G__52527);

(invoc_array[(15)] = G__52528);

(invoc_array[(16)] = G__52529);

(invoc_array[(17)] = G__52530);

(invoc_array[(18)] = G__52531);

(invoc_array[(19)] = G__52532);

while(true){
var ret__51138__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51138__auto__)){
continue;
} else {
return ret__51138__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52188))));

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
var G__52953 = cljs.core.next(params__$1);
var G__52954 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52955 = lets;
params__$1 = G__52953;
new_params = G__52954;
lets = G__52955;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52961 = cljs.core.next(params__$1);
var G__52962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52963 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52961;
new_params = G__52962;
lets = G__52963;
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
var len__5897__auto___52964 = arguments.length;
var i__5898__auto___52965 = (0);
while(true){
if((i__5898__auto___52965 < len__5897__auto___52964)){
args__5903__auto__.push((arguments[i__5898__auto___52965]));

var G__52966 = (i__5898__auto___52965 + (1));
i__5898__auto___52965 = G__52966;
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

var vec__52595 = sig;
var seq__52596 = cljs.core.seq(vec__52595);
var first__52597 = cljs.core.first(seq__52596);
var seq__52596__$1 = cljs.core.next(seq__52596);
var params = first__52597;
var body = seq__52596__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52554){
var G__52555 = cljs.core.first(seq52554);
var seq52554__$1 = cljs.core.next(seq52554);
var G__52556 = cljs.core.first(seq52554__$1);
var seq52554__$2 = cljs.core.next(seq52554__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52555,G__52556,seq52554__$2);
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
var G__52982 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52983 = cljs.core.next(fdecls);
ret = G__52982;
fdecls = G__52983;
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
var len__5897__auto___52984 = arguments.length;
var i__5898__auto___52985 = (0);
while(true){
if((i__5898__auto___52985 < len__5897__auto___52984)){
args__5903__auto__.push((arguments[i__5898__auto___52985]));

var G__52987 = (i__5898__auto___52985 + (1));
i__5898__auto___52985 = G__52987;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52621){
var G__52622 = cljs.core.first(seq52621);
var seq52621__$1 = cljs.core.next(seq52621);
var G__52623 = cljs.core.first(seq52621__$1);
var seq52621__$2 = cljs.core.next(seq52621__$1);
var G__52624 = cljs.core.first(seq52621__$2);
var seq52621__$3 = cljs.core.next(seq52621__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52622,G__52623,G__52624,seq52621__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52994 = arguments.length;
var i__5898__auto___52995 = (0);
while(true){
if((i__5898__auto___52995 < len__5897__auto___52994)){
args__5903__auto__.push((arguments[i__5898__auto___52995]));

var G__52996 = (i__5898__auto___52995 + (1));
i__5898__auto___52995 = G__52996;
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
var G__52997 = cljs.core.cons(f,p);
var G__52998 = cljs.core.next(args__$1);
p = G__52997;
args__$1 = G__52998;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52999 = cljs.core.cons(f,p);
var G__53000 = cljs.core.next(args__$1);
p = G__52999;
args__$1 = G__53000;
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
var G__53001 = cljs.core.next(fd);
fd = G__53001;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__53002 = cljs.core.next(fd);
fd = G__53002;
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
var G__53003 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__53004 = cljs.core.next(ds);
acc = G__53003;
ds = G__53004;
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
var G__53005 = cljs.core.next(p);
var G__53006 = cljs.core.cons(cljs.core.first(p),d);
p = G__53005;
d = G__53006;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52710){
var G__52711 = cljs.core.first(seq52710);
var seq52710__$1 = cljs.core.next(seq52710);
var G__52712 = cljs.core.first(seq52710__$1);
var seq52710__$2 = cljs.core.next(seq52710__$1);
var G__52713 = cljs.core.first(seq52710__$2);
var seq52710__$3 = cljs.core.next(seq52710__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52711,G__52712,G__52713,seq52710__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
