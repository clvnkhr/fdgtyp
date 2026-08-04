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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51794 = fixed_arity;
switch (G__51794) {
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
var ret__51124__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51124__auto__)){
continue;
} else {
return ret__51124__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51796 = null;
if (arguments.length > 0) {
var G__52706__i = 0, G__52706__a = new Array(arguments.length -  0);
while (G__52706__i < G__52706__a.length) {G__52706__a[G__52706__i] = arguments[G__52706__i + 0]; ++G__52706__i;}
  G__51796 = new cljs.core.IndexedSeq(G__52706__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51796);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52707){
var G__51796 = cljs.core.seq(arglist__52707);
return sci$impl$fns$arity_0__delegate(G__51796);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51805,G__51806){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51805);

(invoc_array[vararg_idx] = G__51806);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51805,var_args){
var G__51806 = null;
if (arguments.length > 1) {
var G__52709__i = 0, G__52709__a = new Array(arguments.length -  1);
while (G__52709__i < G__52709__a.length) {G__52709__a[G__52709__i] = arguments[G__52709__i + 1]; ++G__52709__i;}
  G__51806 = new cljs.core.IndexedSeq(G__52709__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51805,G__51806);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52710){
var G__51805 = cljs.core.first(arglist__52710);
var G__51806 = cljs.core.rest(arglist__52710);
return sci$impl$fns$arity_1__delegate(G__51805,G__51806);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51812,G__51813,G__51814){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51812);

(invoc_array[(1)] = G__51813);

(invoc_array[vararg_idx] = G__51814);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51812,G__51813,var_args){
var G__51814 = null;
if (arguments.length > 2) {
var G__52716__i = 0, G__52716__a = new Array(arguments.length -  2);
while (G__52716__i < G__52716__a.length) {G__52716__a[G__52716__i] = arguments[G__52716__i + 2]; ++G__52716__i;}
  G__51814 = new cljs.core.IndexedSeq(G__52716__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51812,G__51813,G__51814);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52717){
var G__51812 = cljs.core.first(arglist__52717);
arglist__52717 = cljs.core.next(arglist__52717);
var G__51813 = cljs.core.first(arglist__52717);
var G__51814 = cljs.core.rest(arglist__52717);
return sci$impl$fns$arity_2__delegate(G__51812,G__51813,G__51814);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51822,G__51823,G__51824,G__51825){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51822);

(invoc_array[(1)] = G__51823);

(invoc_array[(2)] = G__51824);

(invoc_array[vararg_idx] = G__51825);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__51822,G__51823,G__51824,var_args){
var G__51825 = null;
if (arguments.length > 3) {
var G__52720__i = 0, G__52720__a = new Array(arguments.length -  3);
while (G__52720__i < G__52720__a.length) {G__52720__a[G__52720__i] = arguments[G__52720__i + 3]; ++G__52720__i;}
  G__51825 = new cljs.core.IndexedSeq(G__52720__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51822,G__51823,G__51824,G__51825);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52721){
var G__51822 = cljs.core.first(arglist__52721);
arglist__52721 = cljs.core.next(arglist__52721);
var G__51823 = cljs.core.first(arglist__52721);
arglist__52721 = cljs.core.next(arglist__52721);
var G__51824 = cljs.core.first(arglist__52721);
var G__51825 = cljs.core.rest(arglist__52721);
return sci$impl$fns$arity_3__delegate(G__51822,G__51823,G__51824,G__51825);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51832,G__51833,G__51834,G__51835,G__51836){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51832);

(invoc_array[(1)] = G__51833);

(invoc_array[(2)] = G__51834);

(invoc_array[(3)] = G__51835);

(invoc_array[vararg_idx] = G__51836);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__51832,G__51833,G__51834,G__51835,var_args){
var G__51836 = null;
if (arguments.length > 4) {
var G__52722__i = 0, G__52722__a = new Array(arguments.length -  4);
while (G__52722__i < G__52722__a.length) {G__52722__a[G__52722__i] = arguments[G__52722__i + 4]; ++G__52722__i;}
  G__51836 = new cljs.core.IndexedSeq(G__52722__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51832,G__51833,G__51834,G__51835,G__51836);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52724){
var G__51832 = cljs.core.first(arglist__52724);
arglist__52724 = cljs.core.next(arglist__52724);
var G__51833 = cljs.core.first(arglist__52724);
arglist__52724 = cljs.core.next(arglist__52724);
var G__51834 = cljs.core.first(arglist__52724);
arglist__52724 = cljs.core.next(arglist__52724);
var G__51835 = cljs.core.first(arglist__52724);
var G__51836 = cljs.core.rest(arglist__52724);
return sci$impl$fns$arity_4__delegate(G__51832,G__51833,G__51834,G__51835,G__51836);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51838,G__51839,G__51840,G__51841,G__51842,G__51843){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51838);

(invoc_array[(1)] = G__51839);

(invoc_array[(2)] = G__51840);

(invoc_array[(3)] = G__51841);

(invoc_array[(4)] = G__51842);

(invoc_array[vararg_idx] = G__51843);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__51838,G__51839,G__51840,G__51841,G__51842,var_args){
var G__51843 = null;
if (arguments.length > 5) {
var G__52732__i = 0, G__52732__a = new Array(arguments.length -  5);
while (G__52732__i < G__52732__a.length) {G__52732__a[G__52732__i] = arguments[G__52732__i + 5]; ++G__52732__i;}
  G__51843 = new cljs.core.IndexedSeq(G__52732__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51838,G__51839,G__51840,G__51841,G__51842,G__51843);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52733){
var G__51838 = cljs.core.first(arglist__52733);
arglist__52733 = cljs.core.next(arglist__52733);
var G__51839 = cljs.core.first(arglist__52733);
arglist__52733 = cljs.core.next(arglist__52733);
var G__51840 = cljs.core.first(arglist__52733);
arglist__52733 = cljs.core.next(arglist__52733);
var G__51841 = cljs.core.first(arglist__52733);
arglist__52733 = cljs.core.next(arglist__52733);
var G__51842 = cljs.core.first(arglist__52733);
var G__51843 = cljs.core.rest(arglist__52733);
return sci$impl$fns$arity_5__delegate(G__51838,G__51839,G__51840,G__51841,G__51842,G__51843);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51854);

(invoc_array[(1)] = G__51855);

(invoc_array[(2)] = G__51856);

(invoc_array[(3)] = G__51857);

(invoc_array[(4)] = G__51858);

(invoc_array[(5)] = G__51859);

(invoc_array[vararg_idx] = G__51860);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,var_args){
var G__51860 = null;
if (arguments.length > 6) {
var G__52735__i = 0, G__52735__a = new Array(arguments.length -  6);
while (G__52735__i < G__52735__a.length) {G__52735__a[G__52735__i] = arguments[G__52735__i + 6]; ++G__52735__i;}
  G__51860 = new cljs.core.IndexedSeq(G__52735__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52738){
var G__51854 = cljs.core.first(arglist__52738);
arglist__52738 = cljs.core.next(arglist__52738);
var G__51855 = cljs.core.first(arglist__52738);
arglist__52738 = cljs.core.next(arglist__52738);
var G__51856 = cljs.core.first(arglist__52738);
arglist__52738 = cljs.core.next(arglist__52738);
var G__51857 = cljs.core.first(arglist__52738);
arglist__52738 = cljs.core.next(arglist__52738);
var G__51858 = cljs.core.first(arglist__52738);
arglist__52738 = cljs.core.next(arglist__52738);
var G__51859 = cljs.core.first(arglist__52738);
var G__51860 = cljs.core.rest(arglist__52738);
return sci$impl$fns$arity_6__delegate(G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51864);

(invoc_array[(1)] = G__51865);

(invoc_array[(2)] = G__51866);

(invoc_array[(3)] = G__51867);

(invoc_array[(4)] = G__51868);

(invoc_array[(5)] = G__51869);

(invoc_array[(6)] = G__51870);

(invoc_array[vararg_idx] = G__51871);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,var_args){
var G__51871 = null;
if (arguments.length > 7) {
var G__52741__i = 0, G__52741__a = new Array(arguments.length -  7);
while (G__52741__i < G__52741__a.length) {G__52741__a[G__52741__i] = arguments[G__52741__i + 7]; ++G__52741__i;}
  G__51871 = new cljs.core.IndexedSeq(G__52741__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52743){
var G__51864 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51865 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51866 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51867 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51868 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51869 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51870 = cljs.core.first(arglist__52743);
var G__51871 = cljs.core.rest(arglist__52743);
return sci$impl$fns$arity_7__delegate(G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51874,G__51875,G__51876,G__51877,G__51878,G__51879,G__51880,G__51881,G__51882){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51874);

(invoc_array[(1)] = G__51875);

(invoc_array[(2)] = G__51876);

(invoc_array[(3)] = G__51877);

(invoc_array[(4)] = G__51878);

(invoc_array[(5)] = G__51879);

(invoc_array[(6)] = G__51880);

(invoc_array[(7)] = G__51881);

(invoc_array[vararg_idx] = G__51882);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__51874,G__51875,G__51876,G__51877,G__51878,G__51879,G__51880,G__51881,var_args){
var G__51882 = null;
if (arguments.length > 8) {
var G__52745__i = 0, G__52745__a = new Array(arguments.length -  8);
while (G__52745__i < G__52745__a.length) {G__52745__a[G__52745__i] = arguments[G__52745__i + 8]; ++G__52745__i;}
  G__51882 = new cljs.core.IndexedSeq(G__52745__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51874,G__51875,G__51876,G__51877,G__51878,G__51879,G__51880,G__51881,G__51882);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52746){
var G__51874 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51875 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51876 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51877 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51878 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51879 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51880 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__51881 = cljs.core.first(arglist__52746);
var G__51882 = cljs.core.rest(arglist__52746);
return sci$impl$fns$arity_8__delegate(G__51874,G__51875,G__51876,G__51877,G__51878,G__51879,G__51880,G__51881,G__51882);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51883);

(invoc_array[(1)] = G__51884);

(invoc_array[(2)] = G__51885);

(invoc_array[(3)] = G__51886);

(invoc_array[(4)] = G__51887);

(invoc_array[(5)] = G__51888);

(invoc_array[(6)] = G__51889);

(invoc_array[(7)] = G__51890);

(invoc_array[(8)] = G__51891);

(invoc_array[vararg_idx] = G__51892);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,var_args){
var G__51892 = null;
if (arguments.length > 9) {
var G__52748__i = 0, G__52748__a = new Array(arguments.length -  9);
while (G__52748__i < G__52748__a.length) {G__52748__a[G__52748__i] = arguments[G__52748__i + 9]; ++G__52748__i;}
  G__51892 = new cljs.core.IndexedSeq(G__52748__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52749){
var G__51883 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51884 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51885 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51886 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51887 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51888 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51889 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51890 = cljs.core.first(arglist__52749);
arglist__52749 = cljs.core.next(arglist__52749);
var G__51891 = cljs.core.first(arglist__52749);
var G__51892 = cljs.core.rest(arglist__52749);
return sci$impl$fns$arity_9__delegate(G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51894,G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51894);

(invoc_array[(1)] = G__51895);

(invoc_array[(2)] = G__51896);

(invoc_array[(3)] = G__51897);

(invoc_array[(4)] = G__51898);

(invoc_array[(5)] = G__51899);

(invoc_array[(6)] = G__51900);

(invoc_array[(7)] = G__51901);

(invoc_array[(8)] = G__51902);

(invoc_array[(9)] = G__51903);

(invoc_array[vararg_idx] = G__51904);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__51894,G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,var_args){
var G__51904 = null;
if (arguments.length > 10) {
var G__52754__i = 0, G__52754__a = new Array(arguments.length -  10);
while (G__52754__i < G__52754__a.length) {G__52754__a[G__52754__i] = arguments[G__52754__i + 10]; ++G__52754__i;}
  G__51904 = new cljs.core.IndexedSeq(G__52754__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51894,G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52755){
var G__51894 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51895 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51896 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51897 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51898 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51899 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51900 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51901 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51902 = cljs.core.first(arglist__52755);
arglist__52755 = cljs.core.next(arglist__52755);
var G__51903 = cljs.core.first(arglist__52755);
var G__51904 = cljs.core.rest(arglist__52755);
return sci$impl$fns$arity_10__delegate(G__51894,G__51895,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51905);

(invoc_array[(1)] = G__51906);

(invoc_array[(2)] = G__51907);

(invoc_array[(3)] = G__51908);

(invoc_array[(4)] = G__51909);

(invoc_array[(5)] = G__51910);

(invoc_array[(6)] = G__51911);

(invoc_array[(7)] = G__51912);

(invoc_array[(8)] = G__51913);

(invoc_array[(9)] = G__51914);

(invoc_array[(10)] = G__51915);

(invoc_array[vararg_idx] = G__51916);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,var_args){
var G__51916 = null;
if (arguments.length > 11) {
var G__52756__i = 0, G__52756__a = new Array(arguments.length -  11);
while (G__52756__i < G__52756__a.length) {G__52756__a[G__52756__i] = arguments[G__52756__i + 11]; ++G__52756__i;}
  G__51916 = new cljs.core.IndexedSeq(G__52756__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52757){
var G__51905 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51906 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51907 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51908 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51909 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51910 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51911 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51912 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51913 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51914 = cljs.core.first(arglist__52757);
arglist__52757 = cljs.core.next(arglist__52757);
var G__51915 = cljs.core.first(arglist__52757);
var G__51916 = cljs.core.rest(arglist__52757);
return sci$impl$fns$arity_11__delegate(G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912,G__51913,G__51914,G__51915,G__51916);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933,G__51934){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51922);

(invoc_array[(1)] = G__51923);

(invoc_array[(2)] = G__51924);

(invoc_array[(3)] = G__51925);

(invoc_array[(4)] = G__51926);

(invoc_array[(5)] = G__51927);

(invoc_array[(6)] = G__51928);

(invoc_array[(7)] = G__51929);

(invoc_array[(8)] = G__51930);

(invoc_array[(9)] = G__51931);

(invoc_array[(10)] = G__51932);

(invoc_array[(11)] = G__51933);

(invoc_array[vararg_idx] = G__51934);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933,var_args){
var G__51934 = null;
if (arguments.length > 12) {
var G__52759__i = 0, G__52759__a = new Array(arguments.length -  12);
while (G__52759__i < G__52759__a.length) {G__52759__a[G__52759__i] = arguments[G__52759__i + 12]; ++G__52759__i;}
  G__51934 = new cljs.core.IndexedSeq(G__52759__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933,G__51934);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52760){
var G__51922 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51923 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51924 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51925 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51926 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51927 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51928 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51929 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51930 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51931 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51932 = cljs.core.first(arglist__52760);
arglist__52760 = cljs.core.next(arglist__52760);
var G__51933 = cljs.core.first(arglist__52760);
var G__51934 = cljs.core.rest(arglist__52760);
return sci$impl$fns$arity_12__delegate(G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933,G__51934);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51937);

(invoc_array[(1)] = G__51938);

(invoc_array[(2)] = G__51939);

(invoc_array[(3)] = G__51940);

(invoc_array[(4)] = G__51941);

(invoc_array[(5)] = G__51942);

(invoc_array[(6)] = G__51943);

(invoc_array[(7)] = G__51944);

(invoc_array[(8)] = G__51945);

(invoc_array[(9)] = G__51946);

(invoc_array[(10)] = G__51947);

(invoc_array[(11)] = G__51948);

(invoc_array[(12)] = G__51949);

(invoc_array[vararg_idx] = G__51950);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,var_args){
var G__51950 = null;
if (arguments.length > 13) {
var G__52764__i = 0, G__52764__a = new Array(arguments.length -  13);
while (G__52764__i < G__52764__a.length) {G__52764__a[G__52764__i] = arguments[G__52764__i + 13]; ++G__52764__i;}
  G__51950 = new cljs.core.IndexedSeq(G__52764__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52766){
var G__51937 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51938 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51939 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51940 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51941 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51942 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51943 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51944 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51945 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51946 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51947 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51948 = cljs.core.first(arglist__52766);
arglist__52766 = cljs.core.next(arglist__52766);
var G__51949 = cljs.core.first(arglist__52766);
var G__51950 = cljs.core.rest(arglist__52766);
return sci$impl$fns$arity_13__delegate(G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51954);

(invoc_array[(1)] = G__51955);

(invoc_array[(2)] = G__51956);

(invoc_array[(3)] = G__51957);

(invoc_array[(4)] = G__51958);

(invoc_array[(5)] = G__51959);

(invoc_array[(6)] = G__51960);

(invoc_array[(7)] = G__51961);

(invoc_array[(8)] = G__51962);

(invoc_array[(9)] = G__51963);

(invoc_array[(10)] = G__51964);

(invoc_array[(11)] = G__51965);

(invoc_array[(12)] = G__51966);

(invoc_array[(13)] = G__51967);

(invoc_array[vararg_idx] = G__51968);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,var_args){
var G__51968 = null;
if (arguments.length > 14) {
var G__52782__i = 0, G__52782__a = new Array(arguments.length -  14);
while (G__52782__i < G__52782__a.length) {G__52782__a[G__52782__i] = arguments[G__52782__i + 14]; ++G__52782__i;}
  G__51968 = new cljs.core.IndexedSeq(G__52782__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52783){
var G__51954 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51955 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51956 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51957 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51958 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51959 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51960 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51961 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51962 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51963 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51964 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51965 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51966 = cljs.core.first(arglist__52783);
arglist__52783 = cljs.core.next(arglist__52783);
var G__51967 = cljs.core.first(arglist__52783);
var G__51968 = cljs.core.rest(arglist__52783);
return sci$impl$fns$arity_14__delegate(G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51969);

(invoc_array[(1)] = G__51970);

(invoc_array[(2)] = G__51971);

(invoc_array[(3)] = G__51972);

(invoc_array[(4)] = G__51973);

(invoc_array[(5)] = G__51974);

(invoc_array[(6)] = G__51975);

(invoc_array[(7)] = G__51976);

(invoc_array[(8)] = G__51977);

(invoc_array[(9)] = G__51978);

(invoc_array[(10)] = G__51979);

(invoc_array[(11)] = G__51980);

(invoc_array[(12)] = G__51981);

(invoc_array[(13)] = G__51982);

(invoc_array[(14)] = G__51983);

(invoc_array[vararg_idx] = G__51984);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,var_args){
var G__51984 = null;
if (arguments.length > 15) {
var G__52797__i = 0, G__52797__a = new Array(arguments.length -  15);
while (G__52797__i < G__52797__a.length) {G__52797__a[G__52797__i] = arguments[G__52797__i + 15]; ++G__52797__i;}
  G__51984 = new cljs.core.IndexedSeq(G__52797__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52798){
var G__51969 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51970 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51971 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51972 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51973 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51974 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51975 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51976 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51977 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51978 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51979 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51980 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51981 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51982 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__51983 = cljs.core.first(arglist__52798);
var G__51984 = cljs.core.rest(arglist__52798);
return sci$impl$fns$arity_15__delegate(G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51988);

(invoc_array[(1)] = G__51989);

(invoc_array[(2)] = G__51990);

(invoc_array[(3)] = G__51991);

(invoc_array[(4)] = G__51992);

(invoc_array[(5)] = G__51993);

(invoc_array[(6)] = G__51994);

(invoc_array[(7)] = G__51995);

(invoc_array[(8)] = G__51996);

(invoc_array[(9)] = G__51997);

(invoc_array[(10)] = G__51998);

(invoc_array[(11)] = G__51999);

(invoc_array[(12)] = G__52000);

(invoc_array[(13)] = G__52001);

(invoc_array[(14)] = G__52002);

(invoc_array[(15)] = G__52003);

(invoc_array[vararg_idx] = G__52004);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,var_args){
var G__52004 = null;
if (arguments.length > 16) {
var G__52804__i = 0, G__52804__a = new Array(arguments.length -  16);
while (G__52804__i < G__52804__a.length) {G__52804__a[G__52804__i] = arguments[G__52804__i + 16]; ++G__52804__i;}
  G__52004 = new cljs.core.IndexedSeq(G__52804__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52806){
var G__51988 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51989 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51990 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51991 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51992 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51993 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51994 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51995 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51996 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51997 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51998 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__51999 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__52000 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__52001 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__52002 = cljs.core.first(arglist__52806);
arglist__52806 = cljs.core.next(arglist__52806);
var G__52003 = cljs.core.first(arglist__52806);
var G__52004 = cljs.core.rest(arglist__52806);
return sci$impl$fns$arity_16__delegate(G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52008);

(invoc_array[(1)] = G__52009);

(invoc_array[(2)] = G__52010);

(invoc_array[(3)] = G__52011);

(invoc_array[(4)] = G__52012);

(invoc_array[(5)] = G__52013);

(invoc_array[(6)] = G__52014);

(invoc_array[(7)] = G__52015);

(invoc_array[(8)] = G__52016);

(invoc_array[(9)] = G__52017);

(invoc_array[(10)] = G__52018);

(invoc_array[(11)] = G__52019);

(invoc_array[(12)] = G__52020);

(invoc_array[(13)] = G__52021);

(invoc_array[(14)] = G__52022);

(invoc_array[(15)] = G__52023);

(invoc_array[(16)] = G__52024);

(invoc_array[vararg_idx] = G__52025);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,var_args){
var G__52025 = null;
if (arguments.length > 17) {
var G__52809__i = 0, G__52809__a = new Array(arguments.length -  17);
while (G__52809__i < G__52809__a.length) {G__52809__a[G__52809__i] = arguments[G__52809__i + 17]; ++G__52809__i;}
  G__52025 = new cljs.core.IndexedSeq(G__52809__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52810){
var G__52008 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52009 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52010 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52011 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52012 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52013 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52014 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52015 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52016 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52017 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52018 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52019 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52020 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52021 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52022 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52023 = cljs.core.first(arglist__52810);
arglist__52810 = cljs.core.next(arglist__52810);
var G__52024 = cljs.core.first(arglist__52810);
var G__52025 = cljs.core.rest(arglist__52810);
return sci$impl$fns$arity_17__delegate(G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52026);

(invoc_array[(1)] = G__52027);

(invoc_array[(2)] = G__52028);

(invoc_array[(3)] = G__52029);

(invoc_array[(4)] = G__52030);

(invoc_array[(5)] = G__52031);

(invoc_array[(6)] = G__52032);

(invoc_array[(7)] = G__52033);

(invoc_array[(8)] = G__52034);

(invoc_array[(9)] = G__52035);

(invoc_array[(10)] = G__52036);

(invoc_array[(11)] = G__52037);

(invoc_array[(12)] = G__52038);

(invoc_array[(13)] = G__52039);

(invoc_array[(14)] = G__52040);

(invoc_array[(15)] = G__52041);

(invoc_array[(16)] = G__52042);

(invoc_array[(17)] = G__52043);

(invoc_array[vararg_idx] = G__52044);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,var_args){
var G__52044 = null;
if (arguments.length > 18) {
var G__52815__i = 0, G__52815__a = new Array(arguments.length -  18);
while (G__52815__i < G__52815__a.length) {G__52815__a[G__52815__i] = arguments[G__52815__i + 18]; ++G__52815__i;}
  G__52044 = new cljs.core.IndexedSeq(G__52815__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52822){
var G__52026 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52027 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52028 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52029 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52030 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52031 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52032 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52033 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52034 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52035 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52036 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52037 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52038 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52039 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52040 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52041 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52042 = cljs.core.first(arglist__52822);
arglist__52822 = cljs.core.next(arglist__52822);
var G__52043 = cljs.core.first(arglist__52822);
var G__52044 = cljs.core.rest(arglist__52822);
return sci$impl$fns$arity_18__delegate(G__52026,G__52027,G__52028,G__52029,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52047);

(invoc_array[(1)] = G__52048);

(invoc_array[(2)] = G__52049);

(invoc_array[(3)] = G__52050);

(invoc_array[(4)] = G__52051);

(invoc_array[(5)] = G__52052);

(invoc_array[(6)] = G__52053);

(invoc_array[(7)] = G__52054);

(invoc_array[(8)] = G__52055);

(invoc_array[(9)] = G__52056);

(invoc_array[(10)] = G__52057);

(invoc_array[(11)] = G__52058);

(invoc_array[(12)] = G__52059);

(invoc_array[(13)] = G__52060);

(invoc_array[(14)] = G__52061);

(invoc_array[(15)] = G__52062);

(invoc_array[(16)] = G__52063);

(invoc_array[(17)] = G__52064);

(invoc_array[(18)] = G__52065);

(invoc_array[vararg_idx] = G__52066);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,var_args){
var G__52066 = null;
if (arguments.length > 19) {
var G__52825__i = 0, G__52825__a = new Array(arguments.length -  19);
while (G__52825__i < G__52825__a.length) {G__52825__a[G__52825__i] = arguments[G__52825__i + 19]; ++G__52825__i;}
  G__52066 = new cljs.core.IndexedSeq(G__52825__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52826){
var G__52047 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52048 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52049 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52050 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52051 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52052 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52053 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52054 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52055 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52056 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52057 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52058 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52059 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52060 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52061 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52062 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52063 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52064 = cljs.core.first(arglist__52826);
arglist__52826 = cljs.core.next(arglist__52826);
var G__52065 = cljs.core.first(arglist__52826);
var G__52066 = cljs.core.rest(arglist__52826);
return sci$impl$fns$arity_19__delegate(G__52047,G__52048,G__52049,G__52050,G__52051,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52070);

(invoc_array[(1)] = G__52071);

(invoc_array[(2)] = G__52072);

(invoc_array[(3)] = G__52073);

(invoc_array[(4)] = G__52074);

(invoc_array[(5)] = G__52075);

(invoc_array[(6)] = G__52076);

(invoc_array[(7)] = G__52077);

(invoc_array[(8)] = G__52078);

(invoc_array[(9)] = G__52079);

(invoc_array[(10)] = G__52080);

(invoc_array[(11)] = G__52081);

(invoc_array[(12)] = G__52082);

(invoc_array[(13)] = G__52083);

(invoc_array[(14)] = G__52084);

(invoc_array[(15)] = G__52085);

(invoc_array[(16)] = G__52086);

(invoc_array[(17)] = G__52087);

(invoc_array[(18)] = G__52088);

(invoc_array[(19)] = G__52089);

(invoc_array[vararg_idx] = G__52090);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,var_args){
var G__52090 = null;
if (arguments.length > 20) {
var G__52827__i = 0, G__52827__a = new Array(arguments.length -  20);
while (G__52827__i < G__52827__a.length) {G__52827__a[G__52827__i] = arguments[G__52827__i + 20]; ++G__52827__i;}
  G__52090 = new cljs.core.IndexedSeq(G__52827__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52828){
var G__52070 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52071 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52072 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52073 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52074 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52075 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52076 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52077 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52078 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52079 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52080 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52081 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52082 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52083 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52084 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52085 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52086 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52087 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52088 = cljs.core.first(arglist__52828);
arglist__52828 = cljs.core.next(arglist__52828);
var G__52089 = cljs.core.first(arglist__52828);
var G__52090 = cljs.core.rest(arglist__52828);
return sci$impl$fns$arity_20__delegate(G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51794))));

}
})():(function (){var G__52099 = fixed_arity;
switch (G__52099) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51124__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51124__auto__)){
continue;
} else {
return ret__51124__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52100){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52100);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52104,G__52105){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52104);

(invoc_array[(1)] = G__52105);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52106,G__52107,G__52108){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52106);

(invoc_array[(1)] = G__52107);

(invoc_array[(2)] = G__52108);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52109,G__52110,G__52111,G__52112){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52109);

(invoc_array[(1)] = G__52110);

(invoc_array[(2)] = G__52111);

(invoc_array[(3)] = G__52112);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52129,G__52130,G__52131,G__52132,G__52133){
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

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52148,G__52149,G__52150,G__52151,G__52152,G__52153){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52148);

(invoc_array[(1)] = G__52149);

(invoc_array[(2)] = G__52150);

(invoc_array[(3)] = G__52151);

(invoc_array[(4)] = G__52152);

(invoc_array[(5)] = G__52153);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52165);

(invoc_array[(1)] = G__52166);

(invoc_array[(2)] = G__52167);

(invoc_array[(3)] = G__52168);

(invoc_array[(4)] = G__52169);

(invoc_array[(5)] = G__52170);

(invoc_array[(6)] = G__52171);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184,G__52185){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52178);

(invoc_array[(1)] = G__52179);

(invoc_array[(2)] = G__52180);

(invoc_array[(3)] = G__52181);

(invoc_array[(4)] = G__52182);

(invoc_array[(5)] = G__52183);

(invoc_array[(6)] = G__52184);

(invoc_array[(7)] = G__52185);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52192);

(invoc_array[(1)] = G__52193);

(invoc_array[(2)] = G__52194);

(invoc_array[(3)] = G__52195);

(invoc_array[(4)] = G__52196);

(invoc_array[(5)] = G__52197);

(invoc_array[(6)] = G__52198);

(invoc_array[(7)] = G__52199);

(invoc_array[(8)] = G__52200);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208,G__52209,G__52210,G__52211){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52202);

(invoc_array[(1)] = G__52203);

(invoc_array[(2)] = G__52204);

(invoc_array[(3)] = G__52205);

(invoc_array[(4)] = G__52206);

(invoc_array[(5)] = G__52207);

(invoc_array[(6)] = G__52208);

(invoc_array[(7)] = G__52209);

(invoc_array[(8)] = G__52210);

(invoc_array[(9)] = G__52211);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52219);

(invoc_array[(1)] = G__52220);

(invoc_array[(2)] = G__52221);

(invoc_array[(3)] = G__52222);

(invoc_array[(4)] = G__52223);

(invoc_array[(5)] = G__52224);

(invoc_array[(6)] = G__52225);

(invoc_array[(7)] = G__52226);

(invoc_array[(8)] = G__52227);

(invoc_array[(9)] = G__52228);

(invoc_array[(10)] = G__52229);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52235,G__52236,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52235);

(invoc_array[(1)] = G__52236);

(invoc_array[(2)] = G__52237);

(invoc_array[(3)] = G__52238);

(invoc_array[(4)] = G__52239);

(invoc_array[(5)] = G__52240);

(invoc_array[(6)] = G__52241);

(invoc_array[(7)] = G__52242);

(invoc_array[(8)] = G__52243);

(invoc_array[(9)] = G__52244);

(invoc_array[(10)] = G__52245);

(invoc_array[(11)] = G__52246);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52264);

(invoc_array[(1)] = G__52265);

(invoc_array[(2)] = G__52266);

(invoc_array[(3)] = G__52267);

(invoc_array[(4)] = G__52268);

(invoc_array[(5)] = G__52269);

(invoc_array[(6)] = G__52270);

(invoc_array[(7)] = G__52271);

(invoc_array[(8)] = G__52272);

(invoc_array[(9)] = G__52273);

(invoc_array[(10)] = G__52274);

(invoc_array[(11)] = G__52275);

(invoc_array[(12)] = G__52276);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296,G__52297){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52284);

(invoc_array[(1)] = G__52285);

(invoc_array[(2)] = G__52286);

(invoc_array[(3)] = G__52287);

(invoc_array[(4)] = G__52288);

(invoc_array[(5)] = G__52289);

(invoc_array[(6)] = G__52290);

(invoc_array[(7)] = G__52291);

(invoc_array[(8)] = G__52292);

(invoc_array[(9)] = G__52293);

(invoc_array[(10)] = G__52294);

(invoc_array[(11)] = G__52295);

(invoc_array[(12)] = G__52296);

(invoc_array[(13)] = G__52297);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52307);

(invoc_array[(1)] = G__52308);

(invoc_array[(2)] = G__52309);

(invoc_array[(3)] = G__52310);

(invoc_array[(4)] = G__52311);

(invoc_array[(5)] = G__52312);

(invoc_array[(6)] = G__52313);

(invoc_array[(7)] = G__52314);

(invoc_array[(8)] = G__52315);

(invoc_array[(9)] = G__52316);

(invoc_array[(10)] = G__52317);

(invoc_array[(11)] = G__52318);

(invoc_array[(12)] = G__52319);

(invoc_array[(13)] = G__52320);

(invoc_array[(14)] = G__52321);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,G__52336,G__52337,G__52338,G__52339,G__52340){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52325);

(invoc_array[(1)] = G__52326);

(invoc_array[(2)] = G__52327);

(invoc_array[(3)] = G__52328);

(invoc_array[(4)] = G__52329);

(invoc_array[(5)] = G__52330);

(invoc_array[(6)] = G__52331);

(invoc_array[(7)] = G__52332);

(invoc_array[(8)] = G__52333);

(invoc_array[(9)] = G__52334);

(invoc_array[(10)] = G__52335);

(invoc_array[(11)] = G__52336);

(invoc_array[(12)] = G__52337);

(invoc_array[(13)] = G__52338);

(invoc_array[(14)] = G__52339);

(invoc_array[(15)] = G__52340);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52348,G__52349,G__52350,G__52351,G__52352,G__52353,G__52354,G__52355,G__52356,G__52357,G__52358,G__52359,G__52360,G__52361,G__52362,G__52363,G__52364){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52348);

(invoc_array[(1)] = G__52349);

(invoc_array[(2)] = G__52350);

(invoc_array[(3)] = G__52351);

(invoc_array[(4)] = G__52352);

(invoc_array[(5)] = G__52353);

(invoc_array[(6)] = G__52354);

(invoc_array[(7)] = G__52355);

(invoc_array[(8)] = G__52356);

(invoc_array[(9)] = G__52357);

(invoc_array[(10)] = G__52358);

(invoc_array[(11)] = G__52359);

(invoc_array[(12)] = G__52360);

(invoc_array[(13)] = G__52361);

(invoc_array[(14)] = G__52362);

(invoc_array[(15)] = G__52363);

(invoc_array[(16)] = G__52364);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380,G__52381,G__52382,G__52383,G__52384,G__52385){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52368);

(invoc_array[(1)] = G__52369);

(invoc_array[(2)] = G__52370);

(invoc_array[(3)] = G__52371);

(invoc_array[(4)] = G__52372);

(invoc_array[(5)] = G__52373);

(invoc_array[(6)] = G__52374);

(invoc_array[(7)] = G__52375);

(invoc_array[(8)] = G__52376);

(invoc_array[(9)] = G__52377);

(invoc_array[(10)] = G__52378);

(invoc_array[(11)] = G__52379);

(invoc_array[(12)] = G__52380);

(invoc_array[(13)] = G__52381);

(invoc_array[(14)] = G__52382);

(invoc_array[(15)] = G__52383);

(invoc_array[(16)] = G__52384);

(invoc_array[(17)] = G__52385);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52393,G__52394,G__52395,G__52396,G__52397,G__52398,G__52399,G__52400,G__52401,G__52402,G__52403,G__52404,G__52405,G__52406,G__52407,G__52408,G__52409,G__52410,G__52411){
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

(invoc_array[(14)] = G__52407);

(invoc_array[(15)] = G__52408);

(invoc_array[(16)] = G__52409);

(invoc_array[(17)] = G__52410);

(invoc_array[(18)] = G__52411);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426,G__52427,G__52428,G__52429,G__52430,G__52431,G__52432,G__52433,G__52434){
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

(invoc_array[(17)] = G__52432);

(invoc_array[(18)] = G__52433);

(invoc_array[(19)] = G__52434);

while(true){
var ret__51125__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51125__auto__)){
continue;
} else {
return ret__51125__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52099))));

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
var G__52841 = cljs.core.next(params__$1);
var G__52842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52843 = lets;
params__$1 = G__52841;
new_params = G__52842;
lets = G__52843;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52847 = cljs.core.next(params__$1);
var G__52849 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52850 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52847;
new_params = G__52849;
lets = G__52850;
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
var len__5897__auto___52864 = arguments.length;
var i__5898__auto___52865 = (0);
while(true){
if((i__5898__auto___52865 < len__5897__auto___52864)){
args__5903__auto__.push((arguments[i__5898__auto___52865]));

var G__52866 = (i__5898__auto___52865 + (1));
i__5898__auto___52865 = G__52866;
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

var vec__52505 = sig;
var seq__52506 = cljs.core.seq(vec__52505);
var first__52507 = cljs.core.first(seq__52506);
var seq__52506__$1 = cljs.core.next(seq__52506);
var params = first__52507;
var body = seq__52506__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52499){
var G__52500 = cljs.core.first(seq52499);
var seq52499__$1 = cljs.core.next(seq52499);
var G__52501 = cljs.core.first(seq52499__$1);
var seq52499__$2 = cljs.core.next(seq52499__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52500,G__52501,seq52499__$2);
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
var G__52920 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52921 = cljs.core.next(fdecls);
ret = G__52920;
fdecls = G__52921;
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
var len__5897__auto___52923 = arguments.length;
var i__5898__auto___52924 = (0);
while(true){
if((i__5898__auto___52924 < len__5897__auto___52923)){
args__5903__auto__.push((arguments[i__5898__auto___52924]));

var G__52925 = (i__5898__auto___52924 + (1));
i__5898__auto___52924 = G__52925;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52544){
var G__52545 = cljs.core.first(seq52544);
var seq52544__$1 = cljs.core.next(seq52544);
var G__52546 = cljs.core.first(seq52544__$1);
var seq52544__$2 = cljs.core.next(seq52544__$1);
var G__52547 = cljs.core.first(seq52544__$2);
var seq52544__$3 = cljs.core.next(seq52544__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52545,G__52546,G__52547,seq52544__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52958 = arguments.length;
var i__5898__auto___52959 = (0);
while(true){
if((i__5898__auto___52959 < len__5897__auto___52958)){
args__5903__auto__.push((arguments[i__5898__auto___52959]));

var G__52960 = (i__5898__auto___52959 + (1));
i__5898__auto___52959 = G__52960;
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
var G__52961 = cljs.core.cons(f,p);
var G__52962 = cljs.core.next(args__$1);
p = G__52961;
args__$1 = G__52962;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52963 = cljs.core.cons(f,p);
var G__52964 = cljs.core.next(args__$1);
p = G__52963;
args__$1 = G__52964;
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
var G__52965 = cljs.core.next(fd);
fd = G__52965;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52966 = cljs.core.next(fd);
fd = G__52966;
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
var G__52967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52968 = cljs.core.next(ds);
acc = G__52967;
ds = G__52968;
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
var G__52969 = cljs.core.next(p);
var G__52970 = cljs.core.cons(cljs.core.first(p),d);
p = G__52969;
d = G__52970;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52585){
var G__52586 = cljs.core.first(seq52585);
var seq52585__$1 = cljs.core.next(seq52585);
var G__52587 = cljs.core.first(seq52585__$1);
var seq52585__$2 = cljs.core.next(seq52585__$1);
var G__52588 = cljs.core.first(seq52585__$2);
var seq52585__$3 = cljs.core.next(seq52585__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52586,G__52587,G__52588,seq52585__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
