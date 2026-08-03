goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51751 = arguments.length;
switch (G__51751) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51757 = fixed_arity;
switch (G__51757) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51758){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51758);

while(true){
var ret__51119__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51119__auto__)){
continue;
} else {
return ret__51119__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51758 = null;
if (arguments.length > 0) {
var G__52617__i = 0, G__52617__a = new Array(arguments.length -  0);
while (G__52617__i < G__52617__a.length) {G__52617__a[G__52617__i] = arguments[G__52617__i + 0]; ++G__52617__i;}
  G__51758 = new cljs.core.IndexedSeq(G__52617__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51758);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52618){
var G__51758 = cljs.core.seq(arglist__52618);
return sci$impl$fns$arity_0__delegate(G__51758);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51765,G__51766){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51765);

(invoc_array[vararg_idx] = G__51766);

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
var sci$impl$fns$arity_1 = function (G__51765,var_args){
var G__51766 = null;
if (arguments.length > 1) {
var G__52619__i = 0, G__52619__a = new Array(arguments.length -  1);
while (G__52619__i < G__52619__a.length) {G__52619__a[G__52619__i] = arguments[G__52619__i + 1]; ++G__52619__i;}
  G__51766 = new cljs.core.IndexedSeq(G__52619__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51765,G__51766);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52620){
var G__51765 = cljs.core.first(arglist__52620);
var G__51766 = cljs.core.rest(arglist__52620);
return sci$impl$fns$arity_1__delegate(G__51765,G__51766);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51768,G__51769,G__51770){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51768);

(invoc_array[(1)] = G__51769);

(invoc_array[vararg_idx] = G__51770);

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
var sci$impl$fns$arity_2 = function (G__51768,G__51769,var_args){
var G__51770 = null;
if (arguments.length > 2) {
var G__52621__i = 0, G__52621__a = new Array(arguments.length -  2);
while (G__52621__i < G__52621__a.length) {G__52621__a[G__52621__i] = arguments[G__52621__i + 2]; ++G__52621__i;}
  G__51770 = new cljs.core.IndexedSeq(G__52621__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51768,G__51769,G__51770);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52622){
var G__51768 = cljs.core.first(arglist__52622);
arglist__52622 = cljs.core.next(arglist__52622);
var G__51769 = cljs.core.first(arglist__52622);
var G__51770 = cljs.core.rest(arglist__52622);
return sci$impl$fns$arity_2__delegate(G__51768,G__51769,G__51770);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51778,G__51779,G__51780,G__51781){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51778);

(invoc_array[(1)] = G__51779);

(invoc_array[(2)] = G__51780);

(invoc_array[vararg_idx] = G__51781);

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
var sci$impl$fns$arity_3 = function (G__51778,G__51779,G__51780,var_args){
var G__51781 = null;
if (arguments.length > 3) {
var G__52626__i = 0, G__52626__a = new Array(arguments.length -  3);
while (G__52626__i < G__52626__a.length) {G__52626__a[G__52626__i] = arguments[G__52626__i + 3]; ++G__52626__i;}
  G__51781 = new cljs.core.IndexedSeq(G__52626__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51778,G__51779,G__51780,G__51781);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52627){
var G__51778 = cljs.core.first(arglist__52627);
arglist__52627 = cljs.core.next(arglist__52627);
var G__51779 = cljs.core.first(arglist__52627);
arglist__52627 = cljs.core.next(arglist__52627);
var G__51780 = cljs.core.first(arglist__52627);
var G__51781 = cljs.core.rest(arglist__52627);
return sci$impl$fns$arity_3__delegate(G__51778,G__51779,G__51780,G__51781);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51785,G__51786,G__51787,G__51788,G__51789){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51785);

(invoc_array[(1)] = G__51786);

(invoc_array[(2)] = G__51787);

(invoc_array[(3)] = G__51788);

(invoc_array[vararg_idx] = G__51789);

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
var sci$impl$fns$arity_4 = function (G__51785,G__51786,G__51787,G__51788,var_args){
var G__51789 = null;
if (arguments.length > 4) {
var G__52628__i = 0, G__52628__a = new Array(arguments.length -  4);
while (G__52628__i < G__52628__a.length) {G__52628__a[G__52628__i] = arguments[G__52628__i + 4]; ++G__52628__i;}
  G__51789 = new cljs.core.IndexedSeq(G__52628__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51785,G__51786,G__51787,G__51788,G__51789);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52629){
var G__51785 = cljs.core.first(arglist__52629);
arglist__52629 = cljs.core.next(arglist__52629);
var G__51786 = cljs.core.first(arglist__52629);
arglist__52629 = cljs.core.next(arglist__52629);
var G__51787 = cljs.core.first(arglist__52629);
arglist__52629 = cljs.core.next(arglist__52629);
var G__51788 = cljs.core.first(arglist__52629);
var G__51789 = cljs.core.rest(arglist__52629);
return sci$impl$fns$arity_4__delegate(G__51785,G__51786,G__51787,G__51788,G__51789);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51790,G__51791,G__51792,G__51793,G__51794,G__51795){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51790);

(invoc_array[(1)] = G__51791);

(invoc_array[(2)] = G__51792);

(invoc_array[(3)] = G__51793);

(invoc_array[(4)] = G__51794);

(invoc_array[vararg_idx] = G__51795);

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
var sci$impl$fns$arity_5 = function (G__51790,G__51791,G__51792,G__51793,G__51794,var_args){
var G__51795 = null;
if (arguments.length > 5) {
var G__52635__i = 0, G__52635__a = new Array(arguments.length -  5);
while (G__52635__i < G__52635__a.length) {G__52635__a[G__52635__i] = arguments[G__52635__i + 5]; ++G__52635__i;}
  G__51795 = new cljs.core.IndexedSeq(G__52635__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51790,G__51791,G__51792,G__51793,G__51794,G__51795);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52636){
var G__51790 = cljs.core.first(arglist__52636);
arglist__52636 = cljs.core.next(arglist__52636);
var G__51791 = cljs.core.first(arglist__52636);
arglist__52636 = cljs.core.next(arglist__52636);
var G__51792 = cljs.core.first(arglist__52636);
arglist__52636 = cljs.core.next(arglist__52636);
var G__51793 = cljs.core.first(arglist__52636);
arglist__52636 = cljs.core.next(arglist__52636);
var G__51794 = cljs.core.first(arglist__52636);
var G__51795 = cljs.core.rest(arglist__52636);
return sci$impl$fns$arity_5__delegate(G__51790,G__51791,G__51792,G__51793,G__51794,G__51795);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51800,G__51801,G__51802,G__51803,G__51804,G__51805,G__51806){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51800);

(invoc_array[(1)] = G__51801);

(invoc_array[(2)] = G__51802);

(invoc_array[(3)] = G__51803);

(invoc_array[(4)] = G__51804);

(invoc_array[(5)] = G__51805);

(invoc_array[vararg_idx] = G__51806);

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
var sci$impl$fns$arity_6 = function (G__51800,G__51801,G__51802,G__51803,G__51804,G__51805,var_args){
var G__51806 = null;
if (arguments.length > 6) {
var G__52644__i = 0, G__52644__a = new Array(arguments.length -  6);
while (G__52644__i < G__52644__a.length) {G__52644__a[G__52644__i] = arguments[G__52644__i + 6]; ++G__52644__i;}
  G__51806 = new cljs.core.IndexedSeq(G__52644__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51800,G__51801,G__51802,G__51803,G__51804,G__51805,G__51806);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52645){
var G__51800 = cljs.core.first(arglist__52645);
arglist__52645 = cljs.core.next(arglist__52645);
var G__51801 = cljs.core.first(arglist__52645);
arglist__52645 = cljs.core.next(arglist__52645);
var G__51802 = cljs.core.first(arglist__52645);
arglist__52645 = cljs.core.next(arglist__52645);
var G__51803 = cljs.core.first(arglist__52645);
arglist__52645 = cljs.core.next(arglist__52645);
var G__51804 = cljs.core.first(arglist__52645);
arglist__52645 = cljs.core.next(arglist__52645);
var G__51805 = cljs.core.first(arglist__52645);
var G__51806 = cljs.core.rest(arglist__52645);
return sci$impl$fns$arity_6__delegate(G__51800,G__51801,G__51802,G__51803,G__51804,G__51805,G__51806);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817,G__51818){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51811);

(invoc_array[(1)] = G__51812);

(invoc_array[(2)] = G__51813);

(invoc_array[(3)] = G__51814);

(invoc_array[(4)] = G__51815);

(invoc_array[(5)] = G__51816);

(invoc_array[(6)] = G__51817);

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
var sci$impl$fns$arity_7 = function (G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817,var_args){
var G__51818 = null;
if (arguments.length > 7) {
var G__52646__i = 0, G__52646__a = new Array(arguments.length -  7);
while (G__52646__i < G__52646__a.length) {G__52646__a[G__52646__i] = arguments[G__52646__i + 7]; ++G__52646__i;}
  G__51818 = new cljs.core.IndexedSeq(G__52646__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817,G__51818);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52647){
var G__51811 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51812 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51813 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51814 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51815 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51816 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51817 = cljs.core.first(arglist__52647);
var G__51818 = cljs.core.rest(arglist__52647);
return sci$impl$fns$arity_7__delegate(G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817,G__51818);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833,G__51834,G__51835){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51827);

(invoc_array[(1)] = G__51828);

(invoc_array[(2)] = G__51829);

(invoc_array[(3)] = G__51830);

(invoc_array[(4)] = G__51831);

(invoc_array[(5)] = G__51832);

(invoc_array[(6)] = G__51833);

(invoc_array[(7)] = G__51834);

(invoc_array[vararg_idx] = G__51835);

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
var sci$impl$fns$arity_8 = function (G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833,G__51834,var_args){
var G__51835 = null;
if (arguments.length > 8) {
var G__52653__i = 0, G__52653__a = new Array(arguments.length -  8);
while (G__52653__i < G__52653__a.length) {G__52653__a[G__52653__i] = arguments[G__52653__i + 8]; ++G__52653__i;}
  G__51835 = new cljs.core.IndexedSeq(G__52653__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833,G__51834,G__51835);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52654){
var G__51827 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51828 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51829 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51830 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51831 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51832 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51833 = cljs.core.first(arglist__52654);
arglist__52654 = cljs.core.next(arglist__52654);
var G__51834 = cljs.core.first(arglist__52654);
var G__51835 = cljs.core.rest(arglist__52654);
return sci$impl$fns$arity_8__delegate(G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833,G__51834,G__51835);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51836,G__51837,G__51838,G__51839,G__51840,G__51841,G__51842,G__51843,G__51844,G__51845){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51836);

(invoc_array[(1)] = G__51837);

(invoc_array[(2)] = G__51838);

(invoc_array[(3)] = G__51839);

(invoc_array[(4)] = G__51840);

(invoc_array[(5)] = G__51841);

(invoc_array[(6)] = G__51842);

(invoc_array[(7)] = G__51843);

(invoc_array[(8)] = G__51844);

(invoc_array[vararg_idx] = G__51845);

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
var sci$impl$fns$arity_9 = function (G__51836,G__51837,G__51838,G__51839,G__51840,G__51841,G__51842,G__51843,G__51844,var_args){
var G__51845 = null;
if (arguments.length > 9) {
var G__52656__i = 0, G__52656__a = new Array(arguments.length -  9);
while (G__52656__i < G__52656__a.length) {G__52656__a[G__52656__i] = arguments[G__52656__i + 9]; ++G__52656__i;}
  G__51845 = new cljs.core.IndexedSeq(G__52656__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51836,G__51837,G__51838,G__51839,G__51840,G__51841,G__51842,G__51843,G__51844,G__51845);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52657){
var G__51836 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51837 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51838 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51839 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51840 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51841 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51842 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51843 = cljs.core.first(arglist__52657);
arglist__52657 = cljs.core.next(arglist__52657);
var G__51844 = cljs.core.first(arglist__52657);
var G__51845 = cljs.core.rest(arglist__52657);
return sci$impl$fns$arity_9__delegate(G__51836,G__51837,G__51838,G__51839,G__51840,G__51841,G__51842,G__51843,G__51844,G__51845);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51850);

(invoc_array[(1)] = G__51851);

(invoc_array[(2)] = G__51852);

(invoc_array[(3)] = G__51853);

(invoc_array[(4)] = G__51854);

(invoc_array[(5)] = G__51855);

(invoc_array[(6)] = G__51856);

(invoc_array[(7)] = G__51857);

(invoc_array[(8)] = G__51858);

(invoc_array[(9)] = G__51859);

(invoc_array[vararg_idx] = G__51860);

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
var sci$impl$fns$arity_10 = function (G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,var_args){
var G__51860 = null;
if (arguments.length > 10) {
var G__52665__i = 0, G__52665__a = new Array(arguments.length -  10);
while (G__52665__i < G__52665__a.length) {G__52665__a[G__52665__i] = arguments[G__52665__i + 10]; ++G__52665__i;}
  G__51860 = new cljs.core.IndexedSeq(G__52665__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52666){
var G__51850 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51851 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51852 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51853 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51854 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51855 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51856 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51857 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51858 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51859 = cljs.core.first(arglist__52666);
var G__51860 = cljs.core.rest(arglist__52666);
return sci$impl$fns$arity_10__delegate(G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__51861,G__51862,G__51863,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51861);

(invoc_array[(1)] = G__51862);

(invoc_array[(2)] = G__51863);

(invoc_array[(3)] = G__51864);

(invoc_array[(4)] = G__51865);

(invoc_array[(5)] = G__51866);

(invoc_array[(6)] = G__51867);

(invoc_array[(7)] = G__51868);

(invoc_array[(8)] = G__51869);

(invoc_array[(9)] = G__51870);

(invoc_array[(10)] = G__51871);

(invoc_array[vararg_idx] = G__51872);

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
var sci$impl$fns$arity_11 = function (G__51861,G__51862,G__51863,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,var_args){
var G__51872 = null;
if (arguments.length > 11) {
var G__52683__i = 0, G__52683__a = new Array(arguments.length -  11);
while (G__52683__i < G__52683__a.length) {G__52683__a[G__52683__i] = arguments[G__52683__i + 11]; ++G__52683__i;}
  G__51872 = new cljs.core.IndexedSeq(G__52683__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52684){
var G__51861 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51862 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51863 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51864 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51865 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51866 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51867 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51868 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51869 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51870 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51871 = cljs.core.first(arglist__52684);
var G__51872 = cljs.core.rest(arglist__52684);
return sci$impl$fns$arity_11__delegate(G__51861,G__51862,G__51863,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895){
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

(invoc_array[(9)] = G__51892);

(invoc_array[(10)] = G__51893);

(invoc_array[(11)] = G__51894);

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
var sci$impl$fns$arity_12 = function (G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,var_args){
var G__51895 = null;
if (arguments.length > 12) {
var G__52702__i = 0, G__52702__a = new Array(arguments.length -  12);
while (G__52702__i < G__52702__a.length) {G__52702__a[G__52702__i] = arguments[G__52702__i + 12]; ++G__52702__i;}
  G__51895 = new cljs.core.IndexedSeq(G__52702__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52703){
var G__51883 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51884 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51885 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51886 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51887 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51888 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51889 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51890 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51891 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51892 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51893 = cljs.core.first(arglist__52703);
arglist__52703 = cljs.core.next(arglist__52703);
var G__51894 = cljs.core.first(arglist__52703);
var G__51895 = cljs.core.rest(arglist__52703);
return sci$impl$fns$arity_12__delegate(G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891,G__51892,G__51893,G__51894,G__51895);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51899);

(invoc_array[(1)] = G__51900);

(invoc_array[(2)] = G__51901);

(invoc_array[(3)] = G__51902);

(invoc_array[(4)] = G__51903);

(invoc_array[(5)] = G__51904);

(invoc_array[(6)] = G__51905);

(invoc_array[(7)] = G__51906);

(invoc_array[(8)] = G__51907);

(invoc_array[(9)] = G__51908);

(invoc_array[(10)] = G__51909);

(invoc_array[(11)] = G__51910);

(invoc_array[(12)] = G__51911);

(invoc_array[vararg_idx] = G__51912);

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
var sci$impl$fns$arity_13 = function (G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,var_args){
var G__51912 = null;
if (arguments.length > 13) {
var G__52704__i = 0, G__52704__a = new Array(arguments.length -  13);
while (G__52704__i < G__52704__a.length) {G__52704__a[G__52704__i] = arguments[G__52704__i + 13]; ++G__52704__i;}
  G__51912 = new cljs.core.IndexedSeq(G__52704__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52708){
var G__51899 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51900 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51901 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51902 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51903 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51904 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51905 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51906 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51907 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51908 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51909 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51910 = cljs.core.first(arglist__52708);
arglist__52708 = cljs.core.next(arglist__52708);
var G__51911 = cljs.core.first(arglist__52708);
var G__51912 = cljs.core.rest(arglist__52708);
return sci$impl$fns$arity_13__delegate(G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909,G__51910,G__51911,G__51912);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51919);

(invoc_array[(1)] = G__51920);

(invoc_array[(2)] = G__51921);

(invoc_array[(3)] = G__51922);

(invoc_array[(4)] = G__51923);

(invoc_array[(5)] = G__51924);

(invoc_array[(6)] = G__51925);

(invoc_array[(7)] = G__51926);

(invoc_array[(8)] = G__51927);

(invoc_array[(9)] = G__51928);

(invoc_array[(10)] = G__51929);

(invoc_array[(11)] = G__51930);

(invoc_array[(12)] = G__51931);

(invoc_array[(13)] = G__51932);

(invoc_array[vararg_idx] = G__51933);

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
var sci$impl$fns$arity_14 = function (G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,var_args){
var G__51933 = null;
if (arguments.length > 14) {
var G__52712__i = 0, G__52712__a = new Array(arguments.length -  14);
while (G__52712__i < G__52712__a.length) {G__52712__a[G__52712__i] = arguments[G__52712__i + 14]; ++G__52712__i;}
  G__51933 = new cljs.core.IndexedSeq(G__52712__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52713){
var G__51919 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51920 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51921 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51922 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51923 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51924 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51925 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51926 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51927 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51928 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51929 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51930 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51931 = cljs.core.first(arglist__52713);
arglist__52713 = cljs.core.next(arglist__52713);
var G__51932 = cljs.core.first(arglist__52713);
var G__51933 = cljs.core.rest(arglist__52713);
return sci$impl$fns$arity_14__delegate(G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928,G__51929,G__51930,G__51931,G__51932,G__51933);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51940);

(invoc_array[(1)] = G__51941);

(invoc_array[(2)] = G__51942);

(invoc_array[(3)] = G__51943);

(invoc_array[(4)] = G__51944);

(invoc_array[(5)] = G__51945);

(invoc_array[(6)] = G__51946);

(invoc_array[(7)] = G__51947);

(invoc_array[(8)] = G__51948);

(invoc_array[(9)] = G__51949);

(invoc_array[(10)] = G__51950);

(invoc_array[(11)] = G__51951);

(invoc_array[(12)] = G__51952);

(invoc_array[(13)] = G__51953);

(invoc_array[(14)] = G__51954);

(invoc_array[vararg_idx] = G__51955);

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
var sci$impl$fns$arity_15 = function (G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,var_args){
var G__51955 = null;
if (arguments.length > 15) {
var G__52721__i = 0, G__52721__a = new Array(arguments.length -  15);
while (G__52721__i < G__52721__a.length) {G__52721__a[G__52721__i] = arguments[G__52721__i + 15]; ++G__52721__i;}
  G__51955 = new cljs.core.IndexedSeq(G__52721__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52722){
var G__51940 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51941 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51942 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51943 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51944 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51945 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51946 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51947 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51948 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51949 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51950 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51951 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51952 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51953 = cljs.core.first(arglist__52722);
arglist__52722 = cljs.core.next(arglist__52722);
var G__51954 = cljs.core.first(arglist__52722);
var G__51955 = cljs.core.rest(arglist__52722);
return sci$impl$fns$arity_15__delegate(G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947,G__51948,G__51949,G__51950,G__51951,G__51952,G__51953,G__51954,G__51955);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51960);

(invoc_array[(1)] = G__51961);

(invoc_array[(2)] = G__51962);

(invoc_array[(3)] = G__51963);

(invoc_array[(4)] = G__51964);

(invoc_array[(5)] = G__51965);

(invoc_array[(6)] = G__51966);

(invoc_array[(7)] = G__51967);

(invoc_array[(8)] = G__51968);

(invoc_array[(9)] = G__51969);

(invoc_array[(10)] = G__51970);

(invoc_array[(11)] = G__51971);

(invoc_array[(12)] = G__51972);

(invoc_array[(13)] = G__51973);

(invoc_array[(14)] = G__51974);

(invoc_array[(15)] = G__51975);

(invoc_array[vararg_idx] = G__51976);

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
var sci$impl$fns$arity_16 = function (G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,var_args){
var G__51976 = null;
if (arguments.length > 16) {
var G__52726__i = 0, G__52726__a = new Array(arguments.length -  16);
while (G__52726__i < G__52726__a.length) {G__52726__a[G__52726__i] = arguments[G__52726__i + 16]; ++G__52726__i;}
  G__51976 = new cljs.core.IndexedSeq(G__52726__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52727){
var G__51960 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51961 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51962 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51963 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51964 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51965 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51966 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51967 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51968 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51969 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51970 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51971 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51972 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51973 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51974 = cljs.core.first(arglist__52727);
arglist__52727 = cljs.core.next(arglist__52727);
var G__51975 = cljs.core.first(arglist__52727);
var G__51976 = cljs.core.rest(arglist__52727);
return sci$impl$fns$arity_16__delegate(G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51978);

(invoc_array[(1)] = G__51979);

(invoc_array[(2)] = G__51980);

(invoc_array[(3)] = G__51981);

(invoc_array[(4)] = G__51982);

(invoc_array[(5)] = G__51983);

(invoc_array[(6)] = G__51984);

(invoc_array[(7)] = G__51985);

(invoc_array[(8)] = G__51986);

(invoc_array[(9)] = G__51987);

(invoc_array[(10)] = G__51988);

(invoc_array[(11)] = G__51989);

(invoc_array[(12)] = G__51990);

(invoc_array[(13)] = G__51991);

(invoc_array[(14)] = G__51992);

(invoc_array[(15)] = G__51993);

(invoc_array[(16)] = G__51994);

(invoc_array[vararg_idx] = G__51995);

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
var sci$impl$fns$arity_17 = function (G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,var_args){
var G__51995 = null;
if (arguments.length > 17) {
var G__52728__i = 0, G__52728__a = new Array(arguments.length -  17);
while (G__52728__i < G__52728__a.length) {G__52728__a[G__52728__i] = arguments[G__52728__i + 17]; ++G__52728__i;}
  G__51995 = new cljs.core.IndexedSeq(G__52728__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52729){
var G__51978 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51979 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51980 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51981 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51982 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51983 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51984 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51985 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51986 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51987 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51988 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51989 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51990 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51991 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51992 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51993 = cljs.core.first(arglist__52729);
arglist__52729 = cljs.core.next(arglist__52729);
var G__51994 = cljs.core.first(arglist__52729);
var G__51995 = cljs.core.rest(arglist__52729);
return sci$impl$fns$arity_17__delegate(G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986,G__51987,G__51988,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019){
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

(invoc_array[(6)] = G__52007);

(invoc_array[(7)] = G__52008);

(invoc_array[(8)] = G__52009);

(invoc_array[(9)] = G__52010);

(invoc_array[(10)] = G__52011);

(invoc_array[(11)] = G__52012);

(invoc_array[(12)] = G__52013);

(invoc_array[(13)] = G__52014);

(invoc_array[(14)] = G__52015);

(invoc_array[(15)] = G__52016);

(invoc_array[(16)] = G__52017);

(invoc_array[(17)] = G__52018);

(invoc_array[vararg_idx] = G__52019);

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
var sci$impl$fns$arity_18 = function (G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,var_args){
var G__52019 = null;
if (arguments.length > 18) {
var G__52740__i = 0, G__52740__a = new Array(arguments.length -  18);
while (G__52740__i < G__52740__a.length) {G__52740__a[G__52740__i] = arguments[G__52740__i + 18]; ++G__52740__i;}
  G__52019 = new cljs.core.IndexedSeq(G__52740__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52741){
var G__52000 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52001 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52002 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52003 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52004 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52005 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52007 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52008 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52009 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52010 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52011 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52012 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52013 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52014 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52015 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52016 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52017 = cljs.core.first(arglist__52741);
arglist__52741 = cljs.core.next(arglist__52741);
var G__52018 = cljs.core.first(arglist__52741);
var G__52019 = cljs.core.rest(arglist__52741);
return sci$impl$fns$arity_18__delegate(G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52007,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52030);

(invoc_array[(1)] = G__52031);

(invoc_array[(2)] = G__52032);

(invoc_array[(3)] = G__52033);

(invoc_array[(4)] = G__52034);

(invoc_array[(5)] = G__52035);

(invoc_array[(6)] = G__52036);

(invoc_array[(7)] = G__52037);

(invoc_array[(8)] = G__52038);

(invoc_array[(9)] = G__52039);

(invoc_array[(10)] = G__52040);

(invoc_array[(11)] = G__52041);

(invoc_array[(12)] = G__52042);

(invoc_array[(13)] = G__52043);

(invoc_array[(14)] = G__52044);

(invoc_array[(15)] = G__52045);

(invoc_array[(16)] = G__52046);

(invoc_array[(17)] = G__52047);

(invoc_array[(18)] = G__52048);

(invoc_array[vararg_idx] = G__52049);

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
var sci$impl$fns$arity_19 = function (G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,var_args){
var G__52049 = null;
if (arguments.length > 19) {
var G__52745__i = 0, G__52745__a = new Array(arguments.length -  19);
while (G__52745__i < G__52745__a.length) {G__52745__a[G__52745__i] = arguments[G__52745__i + 19]; ++G__52745__i;}
  G__52049 = new cljs.core.IndexedSeq(G__52745__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52746){
var G__52030 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52031 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52032 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52033 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52034 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52035 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52036 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52037 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52038 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52039 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52040 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52041 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52042 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52043 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52044 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52045 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52046 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52047 = cljs.core.first(arglist__52746);
arglist__52746 = cljs.core.next(arglist__52746);
var G__52048 = cljs.core.first(arglist__52746);
var G__52049 = cljs.core.rest(arglist__52746);
return sci$impl$fns$arity_19__delegate(G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52056);

(invoc_array[(1)] = G__52057);

(invoc_array[(2)] = G__52058);

(invoc_array[(3)] = G__52059);

(invoc_array[(4)] = G__52060);

(invoc_array[(5)] = G__52061);

(invoc_array[(6)] = G__52062);

(invoc_array[(7)] = G__52063);

(invoc_array[(8)] = G__52064);

(invoc_array[(9)] = G__52065);

(invoc_array[(10)] = G__52066);

(invoc_array[(11)] = G__52067);

(invoc_array[(12)] = G__52068);

(invoc_array[(13)] = G__52069);

(invoc_array[(14)] = G__52070);

(invoc_array[(15)] = G__52071);

(invoc_array[(16)] = G__52072);

(invoc_array[(17)] = G__52073);

(invoc_array[(18)] = G__52074);

(invoc_array[(19)] = G__52075);

(invoc_array[vararg_idx] = G__52076);

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
var sci$impl$fns$arity_20 = function (G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,var_args){
var G__52076 = null;
if (arguments.length > 20) {
var G__52750__i = 0, G__52750__a = new Array(arguments.length -  20);
while (G__52750__i < G__52750__a.length) {G__52750__a[G__52750__i] = arguments[G__52750__i + 20]; ++G__52750__i;}
  G__52076 = new cljs.core.IndexedSeq(G__52750__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52751){
var G__52056 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52057 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52058 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52059 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52060 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52061 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52062 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52063 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52064 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52065 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52066 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52067 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52068 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52069 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52070 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52071 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52072 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52073 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52074 = cljs.core.first(arglist__52751);
arglist__52751 = cljs.core.next(arglist__52751);
var G__52075 = cljs.core.first(arglist__52751);
var G__52076 = cljs.core.rest(arglist__52751);
return sci$impl$fns$arity_20__delegate(G__52056,G__52057,G__52058,G__52059,G__52060,G__52061,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071,G__52072,G__52073,G__52074,G__52075,G__52076);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51757))));

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
var ret__51119__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51119__auto__)){
continue;
} else {
return ret__51119__auto__;
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
return (function sci$impl$fns$arity_2(G__52101,G__52102){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52101);

(invoc_array[(1)] = G__52102);

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
return (function sci$impl$fns$arity_3(G__52110,G__52111,G__52112){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52110);

(invoc_array[(1)] = G__52111);

(invoc_array[(2)] = G__52112);

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
return (function sci$impl$fns$arity_4(G__52116,G__52117,G__52118,G__52119){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52116);

(invoc_array[(1)] = G__52117);

(invoc_array[(2)] = G__52118);

(invoc_array[(3)] = G__52119);

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
return (function sci$impl$fns$arity_5(G__52121,G__52122,G__52123,G__52124,G__52125){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52121);

(invoc_array[(1)] = G__52122);

(invoc_array[(2)] = G__52123);

(invoc_array[(3)] = G__52124);

(invoc_array[(4)] = G__52125);

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
return (function sci$impl$fns$arity_6(G__52128,G__52129,G__52130,G__52131,G__52132,G__52133){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52128);

(invoc_array[(1)] = G__52129);

(invoc_array[(2)] = G__52130);

(invoc_array[(3)] = G__52131);

(invoc_array[(4)] = G__52132);

(invoc_array[(5)] = G__52133);

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
return (function sci$impl$fns$arity_7(G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52142);

(invoc_array[(1)] = G__52143);

(invoc_array[(2)] = G__52144);

(invoc_array[(3)] = G__52145);

(invoc_array[(4)] = G__52146);

(invoc_array[(5)] = G__52147);

(invoc_array[(6)] = G__52148);

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
return (function sci$impl$fns$arity_8(G__52165,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172){
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

(invoc_array[(7)] = G__52172);

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
return (function sci$impl$fns$arity_9(G__52177,G__52178,G__52179,G__52180,G__52181,G__52182,G__52183,G__52184,G__52185){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52177);

(invoc_array[(1)] = G__52178);

(invoc_array[(2)] = G__52179);

(invoc_array[(3)] = G__52180);

(invoc_array[(4)] = G__52181);

(invoc_array[(5)] = G__52182);

(invoc_array[(6)] = G__52183);

(invoc_array[(7)] = G__52184);

(invoc_array[(8)] = G__52185);

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
return (function sci$impl$fns$arity_10(G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52196);

(invoc_array[(1)] = G__52197);

(invoc_array[(2)] = G__52198);

(invoc_array[(3)] = G__52199);

(invoc_array[(4)] = G__52200);

(invoc_array[(5)] = G__52201);

(invoc_array[(6)] = G__52202);

(invoc_array[(7)] = G__52203);

(invoc_array[(8)] = G__52204);

(invoc_array[(9)] = G__52205);

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
return (function sci$impl$fns$arity_11(G__52209,G__52210,G__52211,G__52212,G__52213,G__52214,G__52215,G__52216,G__52217,G__52218,G__52219){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52209);

(invoc_array[(1)] = G__52210);

(invoc_array[(2)] = G__52211);

(invoc_array[(3)] = G__52212);

(invoc_array[(4)] = G__52213);

(invoc_array[(5)] = G__52214);

(invoc_array[(6)] = G__52215);

(invoc_array[(7)] = G__52216);

(invoc_array[(8)] = G__52217);

(invoc_array[(9)] = G__52218);

(invoc_array[(10)] = G__52219);

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
return (function sci$impl$fns$arity_12(G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52228);

(invoc_array[(1)] = G__52229);

(invoc_array[(2)] = G__52230);

(invoc_array[(3)] = G__52231);

(invoc_array[(4)] = G__52232);

(invoc_array[(5)] = G__52233);

(invoc_array[(6)] = G__52234);

(invoc_array[(7)] = G__52235);

(invoc_array[(8)] = G__52236);

(invoc_array[(9)] = G__52237);

(invoc_array[(10)] = G__52238);

(invoc_array[(11)] = G__52239);

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
return (function sci$impl$fns$arity_13(G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52240);

(invoc_array[(1)] = G__52241);

(invoc_array[(2)] = G__52242);

(invoc_array[(3)] = G__52243);

(invoc_array[(4)] = G__52244);

(invoc_array[(5)] = G__52245);

(invoc_array[(6)] = G__52246);

(invoc_array[(7)] = G__52247);

(invoc_array[(8)] = G__52248);

(invoc_array[(9)] = G__52249);

(invoc_array[(10)] = G__52250);

(invoc_array[(11)] = G__52251);

(invoc_array[(12)] = G__52252);

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
return (function sci$impl$fns$arity_14(G__52256,G__52257,G__52258,G__52259,G__52260,G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52256);

(invoc_array[(1)] = G__52257);

(invoc_array[(2)] = G__52258);

(invoc_array[(3)] = G__52259);

(invoc_array[(4)] = G__52260);

(invoc_array[(5)] = G__52261);

(invoc_array[(6)] = G__52262);

(invoc_array[(7)] = G__52263);

(invoc_array[(8)] = G__52264);

(invoc_array[(9)] = G__52265);

(invoc_array[(10)] = G__52266);

(invoc_array[(11)] = G__52267);

(invoc_array[(12)] = G__52268);

(invoc_array[(13)] = G__52269);

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
return (function sci$impl$fns$arity_15(G__52276,G__52277,G__52278,G__52279,G__52280,G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52288,G__52289,G__52290,G__52291){
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

(invoc_array[(9)] = G__52285);

(invoc_array[(10)] = G__52286);

(invoc_array[(11)] = G__52288);

(invoc_array[(12)] = G__52289);

(invoc_array[(13)] = G__52290);

(invoc_array[(14)] = G__52291);

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
return (function sci$impl$fns$arity_16(G__52292,G__52293,G__52294,G__52295,G__52296,G__52297,G__52298,G__52299,G__52300,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52292);

(invoc_array[(1)] = G__52293);

(invoc_array[(2)] = G__52294);

(invoc_array[(3)] = G__52295);

(invoc_array[(4)] = G__52296);

(invoc_array[(5)] = G__52297);

(invoc_array[(6)] = G__52298);

(invoc_array[(7)] = G__52299);

(invoc_array[(8)] = G__52300);

(invoc_array[(9)] = G__52301);

(invoc_array[(10)] = G__52302);

(invoc_array[(11)] = G__52303);

(invoc_array[(12)] = G__52304);

(invoc_array[(13)] = G__52305);

(invoc_array[(14)] = G__52306);

(invoc_array[(15)] = G__52307);

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
return (function sci$impl$fns$arity_17(G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315,G__52316,G__52317,G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52308);

(invoc_array[(1)] = G__52309);

(invoc_array[(2)] = G__52310);

(invoc_array[(3)] = G__52311);

(invoc_array[(4)] = G__52312);

(invoc_array[(5)] = G__52313);

(invoc_array[(6)] = G__52314);

(invoc_array[(7)] = G__52315);

(invoc_array[(8)] = G__52316);

(invoc_array[(9)] = G__52317);

(invoc_array[(10)] = G__52318);

(invoc_array[(11)] = G__52319);

(invoc_array[(12)] = G__52320);

(invoc_array[(13)] = G__52321);

(invoc_array[(14)] = G__52322);

(invoc_array[(15)] = G__52323);

(invoc_array[(16)] = G__52324);

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
return (function sci$impl$fns$arity_18(G__52341,G__52342,G__52343,G__52344,G__52345,G__52346,G__52347,G__52348,G__52349,G__52350,G__52351,G__52352,G__52353,G__52354,G__52355,G__52356,G__52357,G__52358){
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

(invoc_array[(12)] = G__52353);

(invoc_array[(13)] = G__52354);

(invoc_array[(14)] = G__52355);

(invoc_array[(15)] = G__52356);

(invoc_array[(16)] = G__52357);

(invoc_array[(17)] = G__52358);

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
return (function sci$impl$fns$arity_19(G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380,G__52381,G__52382,G__52383,G__52384,G__52385){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52367);

(invoc_array[(1)] = G__52368);

(invoc_array[(2)] = G__52369);

(invoc_array[(3)] = G__52370);

(invoc_array[(4)] = G__52371);

(invoc_array[(5)] = G__52372);

(invoc_array[(6)] = G__52373);

(invoc_array[(7)] = G__52374);

(invoc_array[(8)] = G__52375);

(invoc_array[(9)] = G__52376);

(invoc_array[(10)] = G__52377);

(invoc_array[(11)] = G__52378);

(invoc_array[(12)] = G__52379);

(invoc_array[(13)] = G__52380);

(invoc_array[(14)] = G__52381);

(invoc_array[(15)] = G__52382);

(invoc_array[(16)] = G__52383);

(invoc_array[(17)] = G__52384);

(invoc_array[(18)] = G__52385);

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
return (function sci$impl$fns$arity_20(G__52411,G__52412,G__52413,G__52414,G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426,G__52427,G__52428,G__52429,G__52430){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52411);

(invoc_array[(1)] = G__52412);

(invoc_array[(2)] = G__52413);

(invoc_array[(3)] = G__52414);

(invoc_array[(4)] = G__52415);

(invoc_array[(5)] = G__52416);

(invoc_array[(6)] = G__52417);

(invoc_array[(7)] = G__52418);

(invoc_array[(8)] = G__52419);

(invoc_array[(9)] = G__52420);

(invoc_array[(10)] = G__52421);

(invoc_array[(11)] = G__52422);

(invoc_array[(12)] = G__52423);

(invoc_array[(13)] = G__52424);

(invoc_array[(14)] = G__52425);

(invoc_array[(15)] = G__52426);

(invoc_array[(16)] = G__52427);

(invoc_array[(17)] = G__52428);

(invoc_array[(18)] = G__52429);

(invoc_array[(19)] = G__52430);

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
var G__52784 = cljs.core.next(params__$1);
var G__52785 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52786 = lets;
params__$1 = G__52784;
new_params = G__52785;
lets = G__52786;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52790 = cljs.core.next(params__$1);
var G__52791 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52790;
new_params = G__52791;
lets = G__52792;
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
var len__5897__auto___52794 = arguments.length;
var i__5898__auto___52795 = (0);
while(true){
if((i__5898__auto___52795 < len__5897__auto___52794)){
args__5903__auto__.push((arguments[i__5898__auto___52795]));

var G__52796 = (i__5898__auto___52795 + (1));
i__5898__auto___52795 = G__52796;
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

var vec__52464 = sig;
var seq__52465 = cljs.core.seq(vec__52464);
var first__52466 = cljs.core.first(seq__52465);
var seq__52465__$1 = cljs.core.next(seq__52465);
var params = first__52466;
var body = seq__52465__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52457){
var G__52458 = cljs.core.first(seq52457);
var seq52457__$1 = cljs.core.next(seq52457);
var G__52459 = cljs.core.first(seq52457__$1);
var seq52457__$2 = cljs.core.next(seq52457__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52458,G__52459,seq52457__$2);
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
var G__52819 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52820 = cljs.core.next(fdecls);
ret = G__52819;
fdecls = G__52820;
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
var len__5897__auto___52821 = arguments.length;
var i__5898__auto___52822 = (0);
while(true){
if((i__5898__auto___52822 < len__5897__auto___52821)){
args__5903__auto__.push((arguments[i__5898__auto___52822]));

var G__52823 = (i__5898__auto___52822 + (1));
i__5898__auto___52822 = G__52823;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52498){
var G__52499 = cljs.core.first(seq52498);
var seq52498__$1 = cljs.core.next(seq52498);
var G__52500 = cljs.core.first(seq52498__$1);
var seq52498__$2 = cljs.core.next(seq52498__$1);
var G__52501 = cljs.core.first(seq52498__$2);
var seq52498__$3 = cljs.core.next(seq52498__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52499,G__52500,G__52501,seq52498__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52825 = arguments.length;
var i__5898__auto___52826 = (0);
while(true){
if((i__5898__auto___52826 < len__5897__auto___52825)){
args__5903__auto__.push((arguments[i__5898__auto___52826]));

var G__52827 = (i__5898__auto___52826 + (1));
i__5898__auto___52826 = G__52827;
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
var G__52829 = cljs.core.cons(f,p);
var G__52830 = cljs.core.next(args__$1);
p = G__52829;
args__$1 = G__52830;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52831 = cljs.core.cons(f,p);
var G__52832 = cljs.core.next(args__$1);
p = G__52831;
args__$1 = G__52832;
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
var G__52837 = cljs.core.next(fd);
fd = G__52837;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52838 = cljs.core.next(fd);
fd = G__52838;
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
var G__52839 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52840 = cljs.core.next(ds);
acc = G__52839;
ds = G__52840;
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
var G__52841 = cljs.core.next(p);
var G__52842 = cljs.core.cons(cljs.core.first(p),d);
p = G__52841;
d = G__52842;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52563){
var G__52564 = cljs.core.first(seq52563);
var seq52563__$1 = cljs.core.next(seq52563);
var G__52565 = cljs.core.first(seq52563__$1);
var seq52563__$2 = cljs.core.next(seq52563__$1);
var G__52566 = cljs.core.first(seq52563__$2);
var seq52563__$3 = cljs.core.next(seq52563__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52564,G__52565,G__52566,seq52563__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
