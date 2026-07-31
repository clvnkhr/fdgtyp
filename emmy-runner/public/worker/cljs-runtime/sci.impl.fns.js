import "./cljs_env.js";
import "./cljs.core.js";
import "./sci.impl.types.js";
import "./sci.impl.utils.js";
goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__73718 = arguments.length;
switch (G__73718) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__73719 = fixed_arity;
switch (G__73719) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__73720){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__73720);

while(true){
var ret__50473__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50473__auto__)){
continue;
} else {
return ret__50473__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__73720 = null;
if (arguments.length > 0) {
var G__74368__i = 0, G__74368__a = new Array(arguments.length -  0);
while (G__74368__i < G__74368__a.length) {G__74368__a[G__74368__i] = arguments[G__74368__i + 0]; ++G__74368__i;}
  G__73720 = new cljs.core.IndexedSeq(G__74368__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__73720);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__74369){
var G__73720 = cljs.core.seq(arglist__74369);
return sci$impl$fns$arity_0__delegate(G__73720);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__73721,G__73722){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73721);

(invoc_array[vararg_idx] = G__73722);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__73721,var_args){
var G__73722 = null;
if (arguments.length > 1) {
var G__74370__i = 0, G__74370__a = new Array(arguments.length -  1);
while (G__74370__i < G__74370__a.length) {G__74370__a[G__74370__i] = arguments[G__74370__i + 1]; ++G__74370__i;}
  G__73722 = new cljs.core.IndexedSeq(G__74370__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__73721,G__73722);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__74371){
var G__73721 = cljs.core.first(arglist__74371);
var G__73722 = cljs.core.rest(arglist__74371);
return sci$impl$fns$arity_1__delegate(G__73721,G__73722);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__73723,G__73724,G__73725){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73723);

(invoc_array[(1)] = G__73724);

(invoc_array[vararg_idx] = G__73725);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__73723,G__73724,var_args){
var G__73725 = null;
if (arguments.length > 2) {
var G__74372__i = 0, G__74372__a = new Array(arguments.length -  2);
while (G__74372__i < G__74372__a.length) {G__74372__a[G__74372__i] = arguments[G__74372__i + 2]; ++G__74372__i;}
  G__73725 = new cljs.core.IndexedSeq(G__74372__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__73723,G__73724,G__73725);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__74373){
var G__73723 = cljs.core.first(arglist__74373);
arglist__74373 = cljs.core.next(arglist__74373);
var G__73724 = cljs.core.first(arglist__74373);
var G__73725 = cljs.core.rest(arglist__74373);
return sci$impl$fns$arity_2__delegate(G__73723,G__73724,G__73725);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__73726,G__73727,G__73728,G__73729){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73726);

(invoc_array[(1)] = G__73727);

(invoc_array[(2)] = G__73728);

(invoc_array[vararg_idx] = G__73729);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__73726,G__73727,G__73728,var_args){
var G__73729 = null;
if (arguments.length > 3) {
var G__74374__i = 0, G__74374__a = new Array(arguments.length -  3);
while (G__74374__i < G__74374__a.length) {G__74374__a[G__74374__i] = arguments[G__74374__i + 3]; ++G__74374__i;}
  G__73729 = new cljs.core.IndexedSeq(G__74374__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__73726,G__73727,G__73728,G__73729);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__74375){
var G__73726 = cljs.core.first(arglist__74375);
arglist__74375 = cljs.core.next(arglist__74375);
var G__73727 = cljs.core.first(arglist__74375);
arglist__74375 = cljs.core.next(arglist__74375);
var G__73728 = cljs.core.first(arglist__74375);
var G__73729 = cljs.core.rest(arglist__74375);
return sci$impl$fns$arity_3__delegate(G__73726,G__73727,G__73728,G__73729);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__73730,G__73731,G__73732,G__73733,G__73734){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73730);

(invoc_array[(1)] = G__73731);

(invoc_array[(2)] = G__73732);

(invoc_array[(3)] = G__73733);

(invoc_array[vararg_idx] = G__73734);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__73730,G__73731,G__73732,G__73733,var_args){
var G__73734 = null;
if (arguments.length > 4) {
var G__74379__i = 0, G__74379__a = new Array(arguments.length -  4);
while (G__74379__i < G__74379__a.length) {G__74379__a[G__74379__i] = arguments[G__74379__i + 4]; ++G__74379__i;}
  G__73734 = new cljs.core.IndexedSeq(G__74379__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__73730,G__73731,G__73732,G__73733,G__73734);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__74380){
var G__73730 = cljs.core.first(arglist__74380);
arglist__74380 = cljs.core.next(arglist__74380);
var G__73731 = cljs.core.first(arglist__74380);
arglist__74380 = cljs.core.next(arglist__74380);
var G__73732 = cljs.core.first(arglist__74380);
arglist__74380 = cljs.core.next(arglist__74380);
var G__73733 = cljs.core.first(arglist__74380);
var G__73734 = cljs.core.rest(arglist__74380);
return sci$impl$fns$arity_4__delegate(G__73730,G__73731,G__73732,G__73733,G__73734);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__73735,G__73736,G__73737,G__73738,G__73739,G__73740){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73735);

(invoc_array[(1)] = G__73736);

(invoc_array[(2)] = G__73737);

(invoc_array[(3)] = G__73738);

(invoc_array[(4)] = G__73739);

(invoc_array[vararg_idx] = G__73740);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__73735,G__73736,G__73737,G__73738,G__73739,var_args){
var G__73740 = null;
if (arguments.length > 5) {
var G__74384__i = 0, G__74384__a = new Array(arguments.length -  5);
while (G__74384__i < G__74384__a.length) {G__74384__a[G__74384__i] = arguments[G__74384__i + 5]; ++G__74384__i;}
  G__73740 = new cljs.core.IndexedSeq(G__74384__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__73735,G__73736,G__73737,G__73738,G__73739,G__73740);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__74385){
var G__73735 = cljs.core.first(arglist__74385);
arglist__74385 = cljs.core.next(arglist__74385);
var G__73736 = cljs.core.first(arglist__74385);
arglist__74385 = cljs.core.next(arglist__74385);
var G__73737 = cljs.core.first(arglist__74385);
arglist__74385 = cljs.core.next(arglist__74385);
var G__73738 = cljs.core.first(arglist__74385);
arglist__74385 = cljs.core.next(arglist__74385);
var G__73739 = cljs.core.first(arglist__74385);
var G__73740 = cljs.core.rest(arglist__74385);
return sci$impl$fns$arity_5__delegate(G__73735,G__73736,G__73737,G__73738,G__73739,G__73740);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__73741,G__73742,G__73743,G__73744,G__73745,G__73746,G__73747){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73741);

(invoc_array[(1)] = G__73742);

(invoc_array[(2)] = G__73743);

(invoc_array[(3)] = G__73744);

(invoc_array[(4)] = G__73745);

(invoc_array[(5)] = G__73746);

(invoc_array[vararg_idx] = G__73747);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__73741,G__73742,G__73743,G__73744,G__73745,G__73746,var_args){
var G__73747 = null;
if (arguments.length > 6) {
var G__74386__i = 0, G__74386__a = new Array(arguments.length -  6);
while (G__74386__i < G__74386__a.length) {G__74386__a[G__74386__i] = arguments[G__74386__i + 6]; ++G__74386__i;}
  G__73747 = new cljs.core.IndexedSeq(G__74386__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__73741,G__73742,G__73743,G__73744,G__73745,G__73746,G__73747);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__74387){
var G__73741 = cljs.core.first(arglist__74387);
arglist__74387 = cljs.core.next(arglist__74387);
var G__73742 = cljs.core.first(arglist__74387);
arglist__74387 = cljs.core.next(arglist__74387);
var G__73743 = cljs.core.first(arglist__74387);
arglist__74387 = cljs.core.next(arglist__74387);
var G__73744 = cljs.core.first(arglist__74387);
arglist__74387 = cljs.core.next(arglist__74387);
var G__73745 = cljs.core.first(arglist__74387);
arglist__74387 = cljs.core.next(arglist__74387);
var G__73746 = cljs.core.first(arglist__74387);
var G__73747 = cljs.core.rest(arglist__74387);
return sci$impl$fns$arity_6__delegate(G__73741,G__73742,G__73743,G__73744,G__73745,G__73746,G__73747);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__73748,G__73749,G__73750,G__73751,G__73752,G__73753,G__73754,G__73755){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73748);

(invoc_array[(1)] = G__73749);

(invoc_array[(2)] = G__73750);

(invoc_array[(3)] = G__73751);

(invoc_array[(4)] = G__73752);

(invoc_array[(5)] = G__73753);

(invoc_array[(6)] = G__73754);

(invoc_array[vararg_idx] = G__73755);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__73748,G__73749,G__73750,G__73751,G__73752,G__73753,G__73754,var_args){
var G__73755 = null;
if (arguments.length > 7) {
var G__74388__i = 0, G__74388__a = new Array(arguments.length -  7);
while (G__74388__i < G__74388__a.length) {G__74388__a[G__74388__i] = arguments[G__74388__i + 7]; ++G__74388__i;}
  G__73755 = new cljs.core.IndexedSeq(G__74388__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__73748,G__73749,G__73750,G__73751,G__73752,G__73753,G__73754,G__73755);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__74389){
var G__73748 = cljs.core.first(arglist__74389);
arglist__74389 = cljs.core.next(arglist__74389);
var G__73749 = cljs.core.first(arglist__74389);
arglist__74389 = cljs.core.next(arglist__74389);
var G__73750 = cljs.core.first(arglist__74389);
arglist__74389 = cljs.core.next(arglist__74389);
var G__73751 = cljs.core.first(arglist__74389);
arglist__74389 = cljs.core.next(arglist__74389);
var G__73752 = cljs.core.first(arglist__74389);
arglist__74389 = cljs.core.next(arglist__74389);
var G__73753 = cljs.core.first(arglist__74389);
arglist__74389 = cljs.core.next(arglist__74389);
var G__73754 = cljs.core.first(arglist__74389);
var G__73755 = cljs.core.rest(arglist__74389);
return sci$impl$fns$arity_7__delegate(G__73748,G__73749,G__73750,G__73751,G__73752,G__73753,G__73754,G__73755);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__73756,G__73757,G__73758,G__73759,G__73760,G__73761,G__73762,G__73763,G__73764){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73756);

(invoc_array[(1)] = G__73757);

(invoc_array[(2)] = G__73758);

(invoc_array[(3)] = G__73759);

(invoc_array[(4)] = G__73760);

(invoc_array[(5)] = G__73761);

(invoc_array[(6)] = G__73762);

(invoc_array[(7)] = G__73763);

(invoc_array[vararg_idx] = G__73764);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__73756,G__73757,G__73758,G__73759,G__73760,G__73761,G__73762,G__73763,var_args){
var G__73764 = null;
if (arguments.length > 8) {
var G__74394__i = 0, G__74394__a = new Array(arguments.length -  8);
while (G__74394__i < G__74394__a.length) {G__74394__a[G__74394__i] = arguments[G__74394__i + 8]; ++G__74394__i;}
  G__73764 = new cljs.core.IndexedSeq(G__74394__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__73756,G__73757,G__73758,G__73759,G__73760,G__73761,G__73762,G__73763,G__73764);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__74395){
var G__73756 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73757 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73758 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73759 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73760 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73761 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73762 = cljs.core.first(arglist__74395);
arglist__74395 = cljs.core.next(arglist__74395);
var G__73763 = cljs.core.first(arglist__74395);
var G__73764 = cljs.core.rest(arglist__74395);
return sci$impl$fns$arity_8__delegate(G__73756,G__73757,G__73758,G__73759,G__73760,G__73761,G__73762,G__73763,G__73764);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__73765,G__73766,G__73767,G__73768,G__73769,G__73770,G__73771,G__73772,G__73773,G__73774){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73765);

(invoc_array[(1)] = G__73766);

(invoc_array[(2)] = G__73767);

(invoc_array[(3)] = G__73768);

(invoc_array[(4)] = G__73769);

(invoc_array[(5)] = G__73770);

(invoc_array[(6)] = G__73771);

(invoc_array[(7)] = G__73772);

(invoc_array[(8)] = G__73773);

(invoc_array[vararg_idx] = G__73774);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__73765,G__73766,G__73767,G__73768,G__73769,G__73770,G__73771,G__73772,G__73773,var_args){
var G__73774 = null;
if (arguments.length > 9) {
var G__74403__i = 0, G__74403__a = new Array(arguments.length -  9);
while (G__74403__i < G__74403__a.length) {G__74403__a[G__74403__i] = arguments[G__74403__i + 9]; ++G__74403__i;}
  G__73774 = new cljs.core.IndexedSeq(G__74403__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__73765,G__73766,G__73767,G__73768,G__73769,G__73770,G__73771,G__73772,G__73773,G__73774);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__74404){
var G__73765 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73766 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73767 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73768 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73769 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73770 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73771 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73772 = cljs.core.first(arglist__74404);
arglist__74404 = cljs.core.next(arglist__74404);
var G__73773 = cljs.core.first(arglist__74404);
var G__73774 = cljs.core.rest(arglist__74404);
return sci$impl$fns$arity_9__delegate(G__73765,G__73766,G__73767,G__73768,G__73769,G__73770,G__73771,G__73772,G__73773,G__73774);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__73775,G__73776,G__73777,G__73778,G__73779,G__73780,G__73781,G__73782,G__73783,G__73784,G__73785){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73775);

(invoc_array[(1)] = G__73776);

(invoc_array[(2)] = G__73777);

(invoc_array[(3)] = G__73778);

(invoc_array[(4)] = G__73779);

(invoc_array[(5)] = G__73780);

(invoc_array[(6)] = G__73781);

(invoc_array[(7)] = G__73782);

(invoc_array[(8)] = G__73783);

(invoc_array[(9)] = G__73784);

(invoc_array[vararg_idx] = G__73785);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__73775,G__73776,G__73777,G__73778,G__73779,G__73780,G__73781,G__73782,G__73783,G__73784,var_args){
var G__73785 = null;
if (arguments.length > 10) {
var G__74405__i = 0, G__74405__a = new Array(arguments.length -  10);
while (G__74405__i < G__74405__a.length) {G__74405__a[G__74405__i] = arguments[G__74405__i + 10]; ++G__74405__i;}
  G__73785 = new cljs.core.IndexedSeq(G__74405__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__73775,G__73776,G__73777,G__73778,G__73779,G__73780,G__73781,G__73782,G__73783,G__73784,G__73785);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__74406){
var G__73775 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73776 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73777 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73778 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73779 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73780 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73781 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73782 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73783 = cljs.core.first(arglist__74406);
arglist__74406 = cljs.core.next(arglist__74406);
var G__73784 = cljs.core.first(arglist__74406);
var G__73785 = cljs.core.rest(arglist__74406);
return sci$impl$fns$arity_10__delegate(G__73775,G__73776,G__73777,G__73778,G__73779,G__73780,G__73781,G__73782,G__73783,G__73784,G__73785);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__73790,G__73791,G__73792,G__73793,G__73794,G__73795,G__73796,G__73797,G__73798,G__73799,G__73800,G__73801){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73790);

(invoc_array[(1)] = G__73791);

(invoc_array[(2)] = G__73792);

(invoc_array[(3)] = G__73793);

(invoc_array[(4)] = G__73794);

(invoc_array[(5)] = G__73795);

(invoc_array[(6)] = G__73796);

(invoc_array[(7)] = G__73797);

(invoc_array[(8)] = G__73798);

(invoc_array[(9)] = G__73799);

(invoc_array[(10)] = G__73800);

(invoc_array[vararg_idx] = G__73801);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__73790,G__73791,G__73792,G__73793,G__73794,G__73795,G__73796,G__73797,G__73798,G__73799,G__73800,var_args){
var G__73801 = null;
if (arguments.length > 11) {
var G__74407__i = 0, G__74407__a = new Array(arguments.length -  11);
while (G__74407__i < G__74407__a.length) {G__74407__a[G__74407__i] = arguments[G__74407__i + 11]; ++G__74407__i;}
  G__73801 = new cljs.core.IndexedSeq(G__74407__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__73790,G__73791,G__73792,G__73793,G__73794,G__73795,G__73796,G__73797,G__73798,G__73799,G__73800,G__73801);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__74408){
var G__73790 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73791 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73792 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73793 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73794 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73795 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73796 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73797 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73798 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73799 = cljs.core.first(arglist__74408);
arglist__74408 = cljs.core.next(arglist__74408);
var G__73800 = cljs.core.first(arglist__74408);
var G__73801 = cljs.core.rest(arglist__74408);
return sci$impl$fns$arity_11__delegate(G__73790,G__73791,G__73792,G__73793,G__73794,G__73795,G__73796,G__73797,G__73798,G__73799,G__73800,G__73801);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__73810,G__73811,G__73812,G__73813,G__73814,G__73815,G__73816,G__73817,G__73818,G__73819,G__73820,G__73821,G__73822){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73810);

(invoc_array[(1)] = G__73811);

(invoc_array[(2)] = G__73812);

(invoc_array[(3)] = G__73813);

(invoc_array[(4)] = G__73814);

(invoc_array[(5)] = G__73815);

(invoc_array[(6)] = G__73816);

(invoc_array[(7)] = G__73817);

(invoc_array[(8)] = G__73818);

(invoc_array[(9)] = G__73819);

(invoc_array[(10)] = G__73820);

(invoc_array[(11)] = G__73821);

(invoc_array[vararg_idx] = G__73822);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__73810,G__73811,G__73812,G__73813,G__73814,G__73815,G__73816,G__73817,G__73818,G__73819,G__73820,G__73821,var_args){
var G__73822 = null;
if (arguments.length > 12) {
var G__74409__i = 0, G__74409__a = new Array(arguments.length -  12);
while (G__74409__i < G__74409__a.length) {G__74409__a[G__74409__i] = arguments[G__74409__i + 12]; ++G__74409__i;}
  G__73822 = new cljs.core.IndexedSeq(G__74409__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__73810,G__73811,G__73812,G__73813,G__73814,G__73815,G__73816,G__73817,G__73818,G__73819,G__73820,G__73821,G__73822);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__74410){
var G__73810 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73811 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73812 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73813 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73814 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73815 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73816 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73817 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73818 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73819 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73820 = cljs.core.first(arglist__74410);
arglist__74410 = cljs.core.next(arglist__74410);
var G__73821 = cljs.core.first(arglist__74410);
var G__73822 = cljs.core.rest(arglist__74410);
return sci$impl$fns$arity_12__delegate(G__73810,G__73811,G__73812,G__73813,G__73814,G__73815,G__73816,G__73817,G__73818,G__73819,G__73820,G__73821,G__73822);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__73832,G__73833,G__73834,G__73835,G__73836,G__73837,G__73838,G__73839,G__73840,G__73841,G__73842,G__73843,G__73844,G__73845){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73832);

(invoc_array[(1)] = G__73833);

(invoc_array[(2)] = G__73834);

(invoc_array[(3)] = G__73835);

(invoc_array[(4)] = G__73836);

(invoc_array[(5)] = G__73837);

(invoc_array[(6)] = G__73838);

(invoc_array[(7)] = G__73839);

(invoc_array[(8)] = G__73840);

(invoc_array[(9)] = G__73841);

(invoc_array[(10)] = G__73842);

(invoc_array[(11)] = G__73843);

(invoc_array[(12)] = G__73844);

(invoc_array[vararg_idx] = G__73845);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__73832,G__73833,G__73834,G__73835,G__73836,G__73837,G__73838,G__73839,G__73840,G__73841,G__73842,G__73843,G__73844,var_args){
var G__73845 = null;
if (arguments.length > 13) {
var G__74411__i = 0, G__74411__a = new Array(arguments.length -  13);
while (G__74411__i < G__74411__a.length) {G__74411__a[G__74411__i] = arguments[G__74411__i + 13]; ++G__74411__i;}
  G__73845 = new cljs.core.IndexedSeq(G__74411__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__73832,G__73833,G__73834,G__73835,G__73836,G__73837,G__73838,G__73839,G__73840,G__73841,G__73842,G__73843,G__73844,G__73845);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__74413){
var G__73832 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73833 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73834 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73835 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73836 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73837 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73838 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73839 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73840 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73841 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73842 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73843 = cljs.core.first(arglist__74413);
arglist__74413 = cljs.core.next(arglist__74413);
var G__73844 = cljs.core.first(arglist__74413);
var G__73845 = cljs.core.rest(arglist__74413);
return sci$impl$fns$arity_13__delegate(G__73832,G__73833,G__73834,G__73835,G__73836,G__73837,G__73838,G__73839,G__73840,G__73841,G__73842,G__73843,G__73844,G__73845);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__73851,G__73852,G__73853,G__73854,G__73855,G__73856,G__73857,G__73858,G__73859,G__73860,G__73861,G__73862,G__73863,G__73864,G__73865){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73851);

(invoc_array[(1)] = G__73852);

(invoc_array[(2)] = G__73853);

(invoc_array[(3)] = G__73854);

(invoc_array[(4)] = G__73855);

(invoc_array[(5)] = G__73856);

(invoc_array[(6)] = G__73857);

(invoc_array[(7)] = G__73858);

(invoc_array[(8)] = G__73859);

(invoc_array[(9)] = G__73860);

(invoc_array[(10)] = G__73861);

(invoc_array[(11)] = G__73862);

(invoc_array[(12)] = G__73863);

(invoc_array[(13)] = G__73864);

(invoc_array[vararg_idx] = G__73865);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__73851,G__73852,G__73853,G__73854,G__73855,G__73856,G__73857,G__73858,G__73859,G__73860,G__73861,G__73862,G__73863,G__73864,var_args){
var G__73865 = null;
if (arguments.length > 14) {
var G__74417__i = 0, G__74417__a = new Array(arguments.length -  14);
while (G__74417__i < G__74417__a.length) {G__74417__a[G__74417__i] = arguments[G__74417__i + 14]; ++G__74417__i;}
  G__73865 = new cljs.core.IndexedSeq(G__74417__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__73851,G__73852,G__73853,G__73854,G__73855,G__73856,G__73857,G__73858,G__73859,G__73860,G__73861,G__73862,G__73863,G__73864,G__73865);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__74418){
var G__73851 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73852 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73853 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73854 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73855 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73856 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73857 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73858 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73859 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73860 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73861 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73862 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73863 = cljs.core.first(arglist__74418);
arglist__74418 = cljs.core.next(arglist__74418);
var G__73864 = cljs.core.first(arglist__74418);
var G__73865 = cljs.core.rest(arglist__74418);
return sci$impl$fns$arity_14__delegate(G__73851,G__73852,G__73853,G__73854,G__73855,G__73856,G__73857,G__73858,G__73859,G__73860,G__73861,G__73862,G__73863,G__73864,G__73865);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__73872,G__73873,G__73874,G__73875,G__73876,G__73877,G__73878,G__73879,G__73880,G__73881,G__73882,G__73883,G__73884,G__73885,G__73886,G__73887){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73872);

(invoc_array[(1)] = G__73873);

(invoc_array[(2)] = G__73874);

(invoc_array[(3)] = G__73875);

(invoc_array[(4)] = G__73876);

(invoc_array[(5)] = G__73877);

(invoc_array[(6)] = G__73878);

(invoc_array[(7)] = G__73879);

(invoc_array[(8)] = G__73880);

(invoc_array[(9)] = G__73881);

(invoc_array[(10)] = G__73882);

(invoc_array[(11)] = G__73883);

(invoc_array[(12)] = G__73884);

(invoc_array[(13)] = G__73885);

(invoc_array[(14)] = G__73886);

(invoc_array[vararg_idx] = G__73887);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__73872,G__73873,G__73874,G__73875,G__73876,G__73877,G__73878,G__73879,G__73880,G__73881,G__73882,G__73883,G__73884,G__73885,G__73886,var_args){
var G__73887 = null;
if (arguments.length > 15) {
var G__74419__i = 0, G__74419__a = new Array(arguments.length -  15);
while (G__74419__i < G__74419__a.length) {G__74419__a[G__74419__i] = arguments[G__74419__i + 15]; ++G__74419__i;}
  G__73887 = new cljs.core.IndexedSeq(G__74419__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__73872,G__73873,G__73874,G__73875,G__73876,G__73877,G__73878,G__73879,G__73880,G__73881,G__73882,G__73883,G__73884,G__73885,G__73886,G__73887);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__74420){
var G__73872 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73873 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73874 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73875 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73876 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73877 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73878 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73879 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73880 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73881 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73882 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73883 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73884 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73885 = cljs.core.first(arglist__74420);
arglist__74420 = cljs.core.next(arglist__74420);
var G__73886 = cljs.core.first(arglist__74420);
var G__73887 = cljs.core.rest(arglist__74420);
return sci$impl$fns$arity_15__delegate(G__73872,G__73873,G__73874,G__73875,G__73876,G__73877,G__73878,G__73879,G__73880,G__73881,G__73882,G__73883,G__73884,G__73885,G__73886,G__73887);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__73888,G__73889,G__73890,G__73891,G__73892,G__73893,G__73894,G__73895,G__73896,G__73897,G__73898,G__73899,G__73900,G__73901,G__73902,G__73903,G__73904){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73888);

(invoc_array[(1)] = G__73889);

(invoc_array[(2)] = G__73890);

(invoc_array[(3)] = G__73891);

(invoc_array[(4)] = G__73892);

(invoc_array[(5)] = G__73893);

(invoc_array[(6)] = G__73894);

(invoc_array[(7)] = G__73895);

(invoc_array[(8)] = G__73896);

(invoc_array[(9)] = G__73897);

(invoc_array[(10)] = G__73898);

(invoc_array[(11)] = G__73899);

(invoc_array[(12)] = G__73900);

(invoc_array[(13)] = G__73901);

(invoc_array[(14)] = G__73902);

(invoc_array[(15)] = G__73903);

(invoc_array[vararg_idx] = G__73904);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__73888,G__73889,G__73890,G__73891,G__73892,G__73893,G__73894,G__73895,G__73896,G__73897,G__73898,G__73899,G__73900,G__73901,G__73902,G__73903,var_args){
var G__73904 = null;
if (arguments.length > 16) {
var G__74463__i = 0, G__74463__a = new Array(arguments.length -  16);
while (G__74463__i < G__74463__a.length) {G__74463__a[G__74463__i] = arguments[G__74463__i + 16]; ++G__74463__i;}
  G__73904 = new cljs.core.IndexedSeq(G__74463__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__73888,G__73889,G__73890,G__73891,G__73892,G__73893,G__73894,G__73895,G__73896,G__73897,G__73898,G__73899,G__73900,G__73901,G__73902,G__73903,G__73904);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__74464){
var G__73888 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73889 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73890 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73891 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73892 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73893 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73894 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73895 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73896 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73897 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73898 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73899 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73900 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73901 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73902 = cljs.core.first(arglist__74464);
arglist__74464 = cljs.core.next(arglist__74464);
var G__73903 = cljs.core.first(arglist__74464);
var G__73904 = cljs.core.rest(arglist__74464);
return sci$impl$fns$arity_16__delegate(G__73888,G__73889,G__73890,G__73891,G__73892,G__73893,G__73894,G__73895,G__73896,G__73897,G__73898,G__73899,G__73900,G__73901,G__73902,G__73903,G__73904);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__73906,G__73907,G__73908,G__73909,G__73910,G__73911,G__73912,G__73913,G__73914,G__73915,G__73916,G__73917,G__73918,G__73919,G__73920,G__73921,G__73922,G__73923){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73906);

(invoc_array[(1)] = G__73907);

(invoc_array[(2)] = G__73908);

(invoc_array[(3)] = G__73909);

(invoc_array[(4)] = G__73910);

(invoc_array[(5)] = G__73911);

(invoc_array[(6)] = G__73912);

(invoc_array[(7)] = G__73913);

(invoc_array[(8)] = G__73914);

(invoc_array[(9)] = G__73915);

(invoc_array[(10)] = G__73916);

(invoc_array[(11)] = G__73917);

(invoc_array[(12)] = G__73918);

(invoc_array[(13)] = G__73919);

(invoc_array[(14)] = G__73920);

(invoc_array[(15)] = G__73921);

(invoc_array[(16)] = G__73922);

(invoc_array[vararg_idx] = G__73923);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__73906,G__73907,G__73908,G__73909,G__73910,G__73911,G__73912,G__73913,G__73914,G__73915,G__73916,G__73917,G__73918,G__73919,G__73920,G__73921,G__73922,var_args){
var G__73923 = null;
if (arguments.length > 17) {
var G__74479__i = 0, G__74479__a = new Array(arguments.length -  17);
while (G__74479__i < G__74479__a.length) {G__74479__a[G__74479__i] = arguments[G__74479__i + 17]; ++G__74479__i;}
  G__73923 = new cljs.core.IndexedSeq(G__74479__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__73906,G__73907,G__73908,G__73909,G__73910,G__73911,G__73912,G__73913,G__73914,G__73915,G__73916,G__73917,G__73918,G__73919,G__73920,G__73921,G__73922,G__73923);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__74480){
var G__73906 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73907 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73908 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73909 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73910 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73911 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73912 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73913 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73914 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73915 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73916 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73917 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73918 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73919 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73920 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73921 = cljs.core.first(arglist__74480);
arglist__74480 = cljs.core.next(arglist__74480);
var G__73922 = cljs.core.first(arglist__74480);
var G__73923 = cljs.core.rest(arglist__74480);
return sci$impl$fns$arity_17__delegate(G__73906,G__73907,G__73908,G__73909,G__73910,G__73911,G__73912,G__73913,G__73914,G__73915,G__73916,G__73917,G__73918,G__73919,G__73920,G__73921,G__73922,G__73923);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__73927,G__73928,G__73929,G__73930,G__73931,G__73932,G__73933,G__73934,G__73935,G__73936,G__73937,G__73938,G__73939,G__73940,G__73941,G__73942,G__73943,G__73944,G__73945){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73927);

(invoc_array[(1)] = G__73928);

(invoc_array[(2)] = G__73929);

(invoc_array[(3)] = G__73930);

(invoc_array[(4)] = G__73931);

(invoc_array[(5)] = G__73932);

(invoc_array[(6)] = G__73933);

(invoc_array[(7)] = G__73934);

(invoc_array[(8)] = G__73935);

(invoc_array[(9)] = G__73936);

(invoc_array[(10)] = G__73937);

(invoc_array[(11)] = G__73938);

(invoc_array[(12)] = G__73939);

(invoc_array[(13)] = G__73940);

(invoc_array[(14)] = G__73941);

(invoc_array[(15)] = G__73942);

(invoc_array[(16)] = G__73943);

(invoc_array[(17)] = G__73944);

(invoc_array[vararg_idx] = G__73945);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__73927,G__73928,G__73929,G__73930,G__73931,G__73932,G__73933,G__73934,G__73935,G__73936,G__73937,G__73938,G__73939,G__73940,G__73941,G__73942,G__73943,G__73944,var_args){
var G__73945 = null;
if (arguments.length > 18) {
var G__74513__i = 0, G__74513__a = new Array(arguments.length -  18);
while (G__74513__i < G__74513__a.length) {G__74513__a[G__74513__i] = arguments[G__74513__i + 18]; ++G__74513__i;}
  G__73945 = new cljs.core.IndexedSeq(G__74513__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__73927,G__73928,G__73929,G__73930,G__73931,G__73932,G__73933,G__73934,G__73935,G__73936,G__73937,G__73938,G__73939,G__73940,G__73941,G__73942,G__73943,G__73944,G__73945);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__74515){
var G__73927 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73928 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73929 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73930 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73931 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73932 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73933 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73934 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73935 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73936 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73937 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73938 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73939 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73940 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73941 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73942 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73943 = cljs.core.first(arglist__74515);
arglist__74515 = cljs.core.next(arglist__74515);
var G__73944 = cljs.core.first(arglist__74515);
var G__73945 = cljs.core.rest(arglist__74515);
return sci$impl$fns$arity_18__delegate(G__73927,G__73928,G__73929,G__73930,G__73931,G__73932,G__73933,G__73934,G__73935,G__73936,G__73937,G__73938,G__73939,G__73940,G__73941,G__73942,G__73943,G__73944,G__73945);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__73946,G__73947,G__73948,G__73949,G__73950,G__73951,G__73952,G__73953,G__73954,G__73955,G__73956,G__73957,G__73958,G__73959,G__73960,G__73961,G__73962,G__73963,G__73964,G__73965){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73946);

(invoc_array[(1)] = G__73947);

(invoc_array[(2)] = G__73948);

(invoc_array[(3)] = G__73949);

(invoc_array[(4)] = G__73950);

(invoc_array[(5)] = G__73951);

(invoc_array[(6)] = G__73952);

(invoc_array[(7)] = G__73953);

(invoc_array[(8)] = G__73954);

(invoc_array[(9)] = G__73955);

(invoc_array[(10)] = G__73956);

(invoc_array[(11)] = G__73957);

(invoc_array[(12)] = G__73958);

(invoc_array[(13)] = G__73959);

(invoc_array[(14)] = G__73960);

(invoc_array[(15)] = G__73961);

(invoc_array[(16)] = G__73962);

(invoc_array[(17)] = G__73963);

(invoc_array[(18)] = G__73964);

(invoc_array[vararg_idx] = G__73965);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__73946,G__73947,G__73948,G__73949,G__73950,G__73951,G__73952,G__73953,G__73954,G__73955,G__73956,G__73957,G__73958,G__73959,G__73960,G__73961,G__73962,G__73963,G__73964,var_args){
var G__73965 = null;
if (arguments.length > 19) {
var G__74562__i = 0, G__74562__a = new Array(arguments.length -  19);
while (G__74562__i < G__74562__a.length) {G__74562__a[G__74562__i] = arguments[G__74562__i + 19]; ++G__74562__i;}
  G__73965 = new cljs.core.IndexedSeq(G__74562__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__73946,G__73947,G__73948,G__73949,G__73950,G__73951,G__73952,G__73953,G__73954,G__73955,G__73956,G__73957,G__73958,G__73959,G__73960,G__73961,G__73962,G__73963,G__73964,G__73965);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__74563){
var G__73946 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73947 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73948 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73949 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73950 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73951 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73952 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73953 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73954 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73955 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73956 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73957 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73958 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73959 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73960 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73961 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73962 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73963 = cljs.core.first(arglist__74563);
arglist__74563 = cljs.core.next(arglist__74563);
var G__73964 = cljs.core.first(arglist__74563);
var G__73965 = cljs.core.rest(arglist__74563);
return sci$impl$fns$arity_19__delegate(G__73946,G__73947,G__73948,G__73949,G__73950,G__73951,G__73952,G__73953,G__73954,G__73955,G__73956,G__73957,G__73958,G__73959,G__73960,G__73961,G__73962,G__73963,G__73964,G__73965);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__73966,G__73967,G__73968,G__73969,G__73970,G__73971,G__73972,G__73973,G__73974,G__73975,G__73976,G__73977,G__73978,G__73979,G__73980,G__73981,G__73982,G__73983,G__73984,G__73985,G__73986){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73966);

(invoc_array[(1)] = G__73967);

(invoc_array[(2)] = G__73968);

(invoc_array[(3)] = G__73969);

(invoc_array[(4)] = G__73970);

(invoc_array[(5)] = G__73971);

(invoc_array[(6)] = G__73972);

(invoc_array[(7)] = G__73973);

(invoc_array[(8)] = G__73974);

(invoc_array[(9)] = G__73975);

(invoc_array[(10)] = G__73976);

(invoc_array[(11)] = G__73977);

(invoc_array[(12)] = G__73978);

(invoc_array[(13)] = G__73979);

(invoc_array[(14)] = G__73980);

(invoc_array[(15)] = G__73981);

(invoc_array[(16)] = G__73982);

(invoc_array[(17)] = G__73983);

(invoc_array[(18)] = G__73984);

(invoc_array[(19)] = G__73985);

(invoc_array[vararg_idx] = G__73986);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__73966,G__73967,G__73968,G__73969,G__73970,G__73971,G__73972,G__73973,G__73974,G__73975,G__73976,G__73977,G__73978,G__73979,G__73980,G__73981,G__73982,G__73983,G__73984,G__73985,var_args){
var G__73986 = null;
if (arguments.length > 20) {
var G__74579__i = 0, G__74579__a = new Array(arguments.length -  20);
while (G__74579__i < G__74579__a.length) {G__74579__a[G__74579__i] = arguments[G__74579__i + 20]; ++G__74579__i;}
  G__73986 = new cljs.core.IndexedSeq(G__74579__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__73966,G__73967,G__73968,G__73969,G__73970,G__73971,G__73972,G__73973,G__73974,G__73975,G__73976,G__73977,G__73978,G__73979,G__73980,G__73981,G__73982,G__73983,G__73984,G__73985,G__73986);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__74581){
var G__73966 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73967 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73968 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73969 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73970 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73971 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73972 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73973 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73974 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73975 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73976 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73977 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73978 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73979 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73980 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73981 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73982 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73983 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73984 = cljs.core.first(arglist__74581);
arglist__74581 = cljs.core.next(arglist__74581);
var G__73985 = cljs.core.first(arglist__74581);
var G__73986 = cljs.core.rest(arglist__74581);
return sci$impl$fns$arity_20__delegate(G__73966,G__73967,G__73968,G__73969,G__73970,G__73971,G__73972,G__73973,G__73974,G__73975,G__73976,G__73977,G__73978,G__73979,G__73980,G__73981,G__73982,G__73983,G__73984,G__73985,G__73986);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73719))));

}
})():(function (){var G__73987 = fixed_arity;
switch (G__73987) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__50473__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50473__auto__)){
continue;
} else {
return ret__50473__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__73988){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73988);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__73989,G__73990){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73989);

(invoc_array[(1)] = G__73990);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__73991,G__73992,G__73993){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73991);

(invoc_array[(1)] = G__73992);

(invoc_array[(2)] = G__73993);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__73994,G__73995,G__73996,G__73997){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73994);

(invoc_array[(1)] = G__73995);

(invoc_array[(2)] = G__73996);

(invoc_array[(3)] = G__73997);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__73998,G__73999,G__74000,G__74001,G__74002){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__73998);

(invoc_array[(1)] = G__73999);

(invoc_array[(2)] = G__74000);

(invoc_array[(3)] = G__74001);

(invoc_array[(4)] = G__74002);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__74003,G__74004,G__74005,G__74006,G__74007,G__74008){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74003);

(invoc_array[(1)] = G__74004);

(invoc_array[(2)] = G__74005);

(invoc_array[(3)] = G__74006);

(invoc_array[(4)] = G__74007);

(invoc_array[(5)] = G__74008);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__74009,G__74010,G__74011,G__74012,G__74013,G__74014,G__74015){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74009);

(invoc_array[(1)] = G__74010);

(invoc_array[(2)] = G__74011);

(invoc_array[(3)] = G__74012);

(invoc_array[(4)] = G__74013);

(invoc_array[(5)] = G__74014);

(invoc_array[(6)] = G__74015);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__74020,G__74021,G__74022,G__74023,G__74024,G__74025,G__74026,G__74027){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74020);

(invoc_array[(1)] = G__74021);

(invoc_array[(2)] = G__74022);

(invoc_array[(3)] = G__74023);

(invoc_array[(4)] = G__74024);

(invoc_array[(5)] = G__74025);

(invoc_array[(6)] = G__74026);

(invoc_array[(7)] = G__74027);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__74028,G__74029,G__74030,G__74031,G__74032,G__74033,G__74034,G__74035,G__74036){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74028);

(invoc_array[(1)] = G__74029);

(invoc_array[(2)] = G__74030);

(invoc_array[(3)] = G__74031);

(invoc_array[(4)] = G__74032);

(invoc_array[(5)] = G__74033);

(invoc_array[(6)] = G__74034);

(invoc_array[(7)] = G__74035);

(invoc_array[(8)] = G__74036);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__74037,G__74038,G__74039,G__74040,G__74041,G__74042,G__74043,G__74044,G__74045,G__74046){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74037);

(invoc_array[(1)] = G__74038);

(invoc_array[(2)] = G__74039);

(invoc_array[(3)] = G__74040);

(invoc_array[(4)] = G__74041);

(invoc_array[(5)] = G__74042);

(invoc_array[(6)] = G__74043);

(invoc_array[(7)] = G__74044);

(invoc_array[(8)] = G__74045);

(invoc_array[(9)] = G__74046);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__74047,G__74048,G__74049,G__74050,G__74051,G__74052,G__74053,G__74054,G__74055,G__74056,G__74057){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74047);

(invoc_array[(1)] = G__74048);

(invoc_array[(2)] = G__74049);

(invoc_array[(3)] = G__74050);

(invoc_array[(4)] = G__74051);

(invoc_array[(5)] = G__74052);

(invoc_array[(6)] = G__74053);

(invoc_array[(7)] = G__74054);

(invoc_array[(8)] = G__74055);

(invoc_array[(9)] = G__74056);

(invoc_array[(10)] = G__74057);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__74058,G__74059,G__74060,G__74061,G__74062,G__74063,G__74064,G__74065,G__74066,G__74067,G__74068,G__74069){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74058);

(invoc_array[(1)] = G__74059);

(invoc_array[(2)] = G__74060);

(invoc_array[(3)] = G__74061);

(invoc_array[(4)] = G__74062);

(invoc_array[(5)] = G__74063);

(invoc_array[(6)] = G__74064);

(invoc_array[(7)] = G__74065);

(invoc_array[(8)] = G__74066);

(invoc_array[(9)] = G__74067);

(invoc_array[(10)] = G__74068);

(invoc_array[(11)] = G__74069);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__74070,G__74071,G__74072,G__74073,G__74074,G__74075,G__74076,G__74077,G__74078,G__74079,G__74080,G__74081,G__74082){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74070);

(invoc_array[(1)] = G__74071);

(invoc_array[(2)] = G__74072);

(invoc_array[(3)] = G__74073);

(invoc_array[(4)] = G__74074);

(invoc_array[(5)] = G__74075);

(invoc_array[(6)] = G__74076);

(invoc_array[(7)] = G__74077);

(invoc_array[(8)] = G__74078);

(invoc_array[(9)] = G__74079);

(invoc_array[(10)] = G__74080);

(invoc_array[(11)] = G__74081);

(invoc_array[(12)] = G__74082);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__74088,G__74089,G__74090,G__74091,G__74092,G__74093,G__74094,G__74095,G__74096,G__74097,G__74098,G__74099,G__74100,G__74101){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74088);

(invoc_array[(1)] = G__74089);

(invoc_array[(2)] = G__74090);

(invoc_array[(3)] = G__74091);

(invoc_array[(4)] = G__74092);

(invoc_array[(5)] = G__74093);

(invoc_array[(6)] = G__74094);

(invoc_array[(7)] = G__74095);

(invoc_array[(8)] = G__74096);

(invoc_array[(9)] = G__74097);

(invoc_array[(10)] = G__74098);

(invoc_array[(11)] = G__74099);

(invoc_array[(12)] = G__74100);

(invoc_array[(13)] = G__74101);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__74106,G__74107,G__74108,G__74109,G__74110,G__74111,G__74112,G__74113,G__74114,G__74115,G__74116,G__74117,G__74118,G__74119,G__74120){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74106);

(invoc_array[(1)] = G__74107);

(invoc_array[(2)] = G__74108);

(invoc_array[(3)] = G__74109);

(invoc_array[(4)] = G__74110);

(invoc_array[(5)] = G__74111);

(invoc_array[(6)] = G__74112);

(invoc_array[(7)] = G__74113);

(invoc_array[(8)] = G__74114);

(invoc_array[(9)] = G__74115);

(invoc_array[(10)] = G__74116);

(invoc_array[(11)] = G__74117);

(invoc_array[(12)] = G__74118);

(invoc_array[(13)] = G__74119);

(invoc_array[(14)] = G__74120);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__74122,G__74123,G__74124,G__74125,G__74126,G__74127,G__74128,G__74129,G__74130,G__74131,G__74132,G__74133,G__74134,G__74135,G__74136,G__74137){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74122);

(invoc_array[(1)] = G__74123);

(invoc_array[(2)] = G__74124);

(invoc_array[(3)] = G__74125);

(invoc_array[(4)] = G__74126);

(invoc_array[(5)] = G__74127);

(invoc_array[(6)] = G__74128);

(invoc_array[(7)] = G__74129);

(invoc_array[(8)] = G__74130);

(invoc_array[(9)] = G__74131);

(invoc_array[(10)] = G__74132);

(invoc_array[(11)] = G__74133);

(invoc_array[(12)] = G__74134);

(invoc_array[(13)] = G__74135);

(invoc_array[(14)] = G__74136);

(invoc_array[(15)] = G__74137);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__74138,G__74139,G__74140,G__74141,G__74142,G__74143,G__74144,G__74145,G__74146,G__74147,G__74148,G__74149,G__74150,G__74151,G__74152,G__74153,G__74154){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74138);

(invoc_array[(1)] = G__74139);

(invoc_array[(2)] = G__74140);

(invoc_array[(3)] = G__74141);

(invoc_array[(4)] = G__74142);

(invoc_array[(5)] = G__74143);

(invoc_array[(6)] = G__74144);

(invoc_array[(7)] = G__74145);

(invoc_array[(8)] = G__74146);

(invoc_array[(9)] = G__74147);

(invoc_array[(10)] = G__74148);

(invoc_array[(11)] = G__74149);

(invoc_array[(12)] = G__74150);

(invoc_array[(13)] = G__74151);

(invoc_array[(14)] = G__74152);

(invoc_array[(15)] = G__74153);

(invoc_array[(16)] = G__74154);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__74158,G__74159,G__74160,G__74161,G__74162,G__74163,G__74164,G__74165,G__74166,G__74167,G__74168,G__74169,G__74170,G__74171,G__74172,G__74173,G__74174,G__74175){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74158);

(invoc_array[(1)] = G__74159);

(invoc_array[(2)] = G__74160);

(invoc_array[(3)] = G__74161);

(invoc_array[(4)] = G__74162);

(invoc_array[(5)] = G__74163);

(invoc_array[(6)] = G__74164);

(invoc_array[(7)] = G__74165);

(invoc_array[(8)] = G__74166);

(invoc_array[(9)] = G__74167);

(invoc_array[(10)] = G__74168);

(invoc_array[(11)] = G__74169);

(invoc_array[(12)] = G__74170);

(invoc_array[(13)] = G__74171);

(invoc_array[(14)] = G__74172);

(invoc_array[(15)] = G__74173);

(invoc_array[(16)] = G__74174);

(invoc_array[(17)] = G__74175);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__74180,G__74181,G__74182,G__74183,G__74184,G__74185,G__74186,G__74187,G__74188,G__74189,G__74190,G__74191,G__74192,G__74193,G__74194,G__74195,G__74196,G__74197,G__74198){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74180);

(invoc_array[(1)] = G__74181);

(invoc_array[(2)] = G__74182);

(invoc_array[(3)] = G__74183);

(invoc_array[(4)] = G__74184);

(invoc_array[(5)] = G__74185);

(invoc_array[(6)] = G__74186);

(invoc_array[(7)] = G__74187);

(invoc_array[(8)] = G__74188);

(invoc_array[(9)] = G__74189);

(invoc_array[(10)] = G__74190);

(invoc_array[(11)] = G__74191);

(invoc_array[(12)] = G__74192);

(invoc_array[(13)] = G__74193);

(invoc_array[(14)] = G__74194);

(invoc_array[(15)] = G__74195);

(invoc_array[(16)] = G__74196);

(invoc_array[(17)] = G__74197);

(invoc_array[(18)] = G__74198);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__74214,G__74215,G__74216,G__74217,G__74218,G__74219,G__74220,G__74221,G__74222,G__74223,G__74224,G__74225,G__74226,G__74227,G__74228,G__74229,G__74230,G__74231,G__74232,G__74233){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__74214);

(invoc_array[(1)] = G__74215);

(invoc_array[(2)] = G__74216);

(invoc_array[(3)] = G__74217);

(invoc_array[(4)] = G__74218);

(invoc_array[(5)] = G__74219);

(invoc_array[(6)] = G__74220);

(invoc_array[(7)] = G__74221);

(invoc_array[(8)] = G__74222);

(invoc_array[(9)] = G__74223);

(invoc_array[(10)] = G__74224);

(invoc_array[(11)] = G__74225);

(invoc_array[(12)] = G__74226);

(invoc_array[(13)] = G__74227);

(invoc_array[(14)] = G__74228);

(invoc_array[(15)] = G__74229);

(invoc_array[(16)] = G__74230);

(invoc_array[(17)] = G__74231);

(invoc_array[(18)] = G__74232);

(invoc_array[(19)] = G__74233);

while(true){
var ret__50474__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__50474__auto__)){
continue;
} else {
return ret__50474__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73987))));

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
var G__74614 = cljs.core.next(params__$1);
var G__74615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__74616 = lets;
params__$1 = G__74614;
new_params = G__74615;
lets = G__74616;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__74617 = cljs.core.next(params__$1);
var G__74618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__74619 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__74617;
new_params = G__74618;
lets = G__74619;
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
var len__5897__auto___74621 = arguments.length;
var i__5898__auto___74622 = (0);
while(true){
if((i__5898__auto___74622 < len__5897__auto___74621)){
args__5903__auto__.push((arguments[i__5898__auto___74622]));

var G__74623 = (i__5898__auto___74622 + (1));
i__5898__auto___74622 = G__74623;
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

var vec__74265 = sig;
var seq__74266 = cljs.core.seq(vec__74265);
var first__74267 = cljs.core.first(seq__74266);
var seq__74266__$1 = cljs.core.next(seq__74266);
var params = first__74267;
var body = seq__74266__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq74252){
var G__74253 = cljs.core.first(seq74252);
var seq74252__$1 = cljs.core.next(seq74252);
var G__74254 = cljs.core.first(seq74252__$1);
var seq74252__$2 = cljs.core.next(seq74252__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74253,G__74254,seq74252__$2);
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
var G__74647 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__74648 = cljs.core.next(fdecls);
ret = G__74647;
fdecls = G__74648;
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
var len__5897__auto___74657 = arguments.length;
var i__5898__auto___74658 = (0);
while(true){
if((i__5898__auto___74658 < len__5897__auto___74657)){
args__5903__auto__.push((arguments[i__5898__auto___74658]));

var G__74659 = (i__5898__auto___74658 + (1));
i__5898__auto___74658 = G__74659;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq74295){
var G__74296 = cljs.core.first(seq74295);
var seq74295__$1 = cljs.core.next(seq74295);
var G__74297 = cljs.core.first(seq74295__$1);
var seq74295__$2 = cljs.core.next(seq74295__$1);
var G__74298 = cljs.core.first(seq74295__$2);
var seq74295__$3 = cljs.core.next(seq74295__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74296,G__74297,G__74298,seq74295__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___74746 = arguments.length;
var i__5898__auto___74748 = (0);
while(true){
if((i__5898__auto___74748 < len__5897__auto___74746)){
args__5903__auto__.push((arguments[i__5898__auto___74748]));

var G__74752 = (i__5898__auto___74748 + (1));
i__5898__auto___74748 = G__74752;
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
var G__74753 = cljs.core.cons(f,p);
var G__74754 = cljs.core.next(args__$1);
p = G__74753;
args__$1 = G__74754;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__74755 = cljs.core.cons(f,p);
var G__74756 = cljs.core.next(args__$1);
p = G__74755;
args__$1 = G__74756;
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
var G__74757 = cljs.core.next(fd);
fd = G__74757;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__74758 = cljs.core.next(fd);
fd = G__74758;
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
var G__74761 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__74762 = cljs.core.next(ds);
acc = G__74761;
ds = G__74762;
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
var G__74763 = cljs.core.next(p);
var G__74764 = cljs.core.cons(cljs.core.first(p),d);
p = G__74763;
d = G__74764;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq74326){
var G__74327 = cljs.core.first(seq74326);
var seq74326__$1 = cljs.core.next(seq74326);
var G__74328 = cljs.core.first(seq74326__$1);
var seq74326__$2 = cljs.core.next(seq74326__$1);
var G__74329 = cljs.core.first(seq74326__$2);
var seq74326__$3 = cljs.core.next(seq74326__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74327,G__74328,G__74329,seq74326__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
