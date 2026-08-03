goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51743 = arguments.length;
switch (G__51743) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51749 = fixed_arity;
switch (G__51749) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51751){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51751);

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
var G__51751 = null;
if (arguments.length > 0) {
var G__52633__i = 0, G__52633__a = new Array(arguments.length -  0);
while (G__52633__i < G__52633__a.length) {G__52633__a[G__52633__i] = arguments[G__52633__i + 0]; ++G__52633__i;}
  G__51751 = new cljs.core.IndexedSeq(G__52633__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51751);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52636){
var G__51751 = cljs.core.seq(arglist__52636);
return sci$impl$fns$arity_0__delegate(G__51751);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51754,G__51755){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51754);

(invoc_array[vararg_idx] = G__51755);

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
var sci$impl$fns$arity_1 = function (G__51754,var_args){
var G__51755 = null;
if (arguments.length > 1) {
var G__52638__i = 0, G__52638__a = new Array(arguments.length -  1);
while (G__52638__i < G__52638__a.length) {G__52638__a[G__52638__i] = arguments[G__52638__i + 1]; ++G__52638__i;}
  G__51755 = new cljs.core.IndexedSeq(G__52638__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51754,G__51755);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52639){
var G__51754 = cljs.core.first(arglist__52639);
var G__51755 = cljs.core.rest(arglist__52639);
return sci$impl$fns$arity_1__delegate(G__51754,G__51755);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51758,G__51759,G__51760){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51758);

(invoc_array[(1)] = G__51759);

(invoc_array[vararg_idx] = G__51760);

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
var sci$impl$fns$arity_2 = function (G__51758,G__51759,var_args){
var G__51760 = null;
if (arguments.length > 2) {
var G__52646__i = 0, G__52646__a = new Array(arguments.length -  2);
while (G__52646__i < G__52646__a.length) {G__52646__a[G__52646__i] = arguments[G__52646__i + 2]; ++G__52646__i;}
  G__51760 = new cljs.core.IndexedSeq(G__52646__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51758,G__51759,G__51760);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52647){
var G__51758 = cljs.core.first(arglist__52647);
arglist__52647 = cljs.core.next(arglist__52647);
var G__51759 = cljs.core.first(arglist__52647);
var G__51760 = cljs.core.rest(arglist__52647);
return sci$impl$fns$arity_2__delegate(G__51758,G__51759,G__51760);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__51762,G__51763,G__51764,G__51765){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51762);

(invoc_array[(1)] = G__51763);

(invoc_array[(2)] = G__51764);

(invoc_array[vararg_idx] = G__51765);

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
var sci$impl$fns$arity_3 = function (G__51762,G__51763,G__51764,var_args){
var G__51765 = null;
if (arguments.length > 3) {
var G__52655__i = 0, G__52655__a = new Array(arguments.length -  3);
while (G__52655__i < G__52655__a.length) {G__52655__a[G__52655__i] = arguments[G__52655__i + 3]; ++G__52655__i;}
  G__51765 = new cljs.core.IndexedSeq(G__52655__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__51762,G__51763,G__51764,G__51765);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52656){
var G__51762 = cljs.core.first(arglist__52656);
arglist__52656 = cljs.core.next(arglist__52656);
var G__51763 = cljs.core.first(arglist__52656);
arglist__52656 = cljs.core.next(arglist__52656);
var G__51764 = cljs.core.first(arglist__52656);
var G__51765 = cljs.core.rest(arglist__52656);
return sci$impl$fns$arity_3__delegate(G__51762,G__51763,G__51764,G__51765);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__51768,G__51769,G__51770,G__51771,G__51772){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51768);

(invoc_array[(1)] = G__51769);

(invoc_array[(2)] = G__51770);

(invoc_array[(3)] = G__51771);

(invoc_array[vararg_idx] = G__51772);

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
var sci$impl$fns$arity_4 = function (G__51768,G__51769,G__51770,G__51771,var_args){
var G__51772 = null;
if (arguments.length > 4) {
var G__52660__i = 0, G__52660__a = new Array(arguments.length -  4);
while (G__52660__i < G__52660__a.length) {G__52660__a[G__52660__i] = arguments[G__52660__i + 4]; ++G__52660__i;}
  G__51772 = new cljs.core.IndexedSeq(G__52660__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__51768,G__51769,G__51770,G__51771,G__51772);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52661){
var G__51768 = cljs.core.first(arglist__52661);
arglist__52661 = cljs.core.next(arglist__52661);
var G__51769 = cljs.core.first(arglist__52661);
arglist__52661 = cljs.core.next(arglist__52661);
var G__51770 = cljs.core.first(arglist__52661);
arglist__52661 = cljs.core.next(arglist__52661);
var G__51771 = cljs.core.first(arglist__52661);
var G__51772 = cljs.core.rest(arglist__52661);
return sci$impl$fns$arity_4__delegate(G__51768,G__51769,G__51770,G__51771,G__51772);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__51775,G__51776,G__51777,G__51778,G__51779,G__51780){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51775);

(invoc_array[(1)] = G__51776);

(invoc_array[(2)] = G__51777);

(invoc_array[(3)] = G__51778);

(invoc_array[(4)] = G__51779);

(invoc_array[vararg_idx] = G__51780);

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
var sci$impl$fns$arity_5 = function (G__51775,G__51776,G__51777,G__51778,G__51779,var_args){
var G__51780 = null;
if (arguments.length > 5) {
var G__52662__i = 0, G__52662__a = new Array(arguments.length -  5);
while (G__52662__i < G__52662__a.length) {G__52662__a[G__52662__i] = arguments[G__52662__i + 5]; ++G__52662__i;}
  G__51780 = new cljs.core.IndexedSeq(G__52662__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__51775,G__51776,G__51777,G__51778,G__51779,G__51780);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52666){
var G__51775 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51776 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51777 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51778 = cljs.core.first(arglist__52666);
arglist__52666 = cljs.core.next(arglist__52666);
var G__51779 = cljs.core.first(arglist__52666);
var G__51780 = cljs.core.rest(arglist__52666);
return sci$impl$fns$arity_5__delegate(G__51775,G__51776,G__51777,G__51778,G__51779,G__51780);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__51781,G__51782,G__51783,G__51784,G__51785,G__51786,G__51787){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51781);

(invoc_array[(1)] = G__51782);

(invoc_array[(2)] = G__51783);

(invoc_array[(3)] = G__51784);

(invoc_array[(4)] = G__51785);

(invoc_array[(5)] = G__51786);

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
var sci$impl$fns$arity_6 = function (G__51781,G__51782,G__51783,G__51784,G__51785,G__51786,var_args){
var G__51787 = null;
if (arguments.length > 6) {
var G__52667__i = 0, G__52667__a = new Array(arguments.length -  6);
while (G__52667__i < G__52667__a.length) {G__52667__a[G__52667__i] = arguments[G__52667__i + 6]; ++G__52667__i;}
  G__51787 = new cljs.core.IndexedSeq(G__52667__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__51781,G__51782,G__51783,G__51784,G__51785,G__51786,G__51787);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52668){
var G__51781 = cljs.core.first(arglist__52668);
arglist__52668 = cljs.core.next(arglist__52668);
var G__51782 = cljs.core.first(arglist__52668);
arglist__52668 = cljs.core.next(arglist__52668);
var G__51783 = cljs.core.first(arglist__52668);
arglist__52668 = cljs.core.next(arglist__52668);
var G__51784 = cljs.core.first(arglist__52668);
arglist__52668 = cljs.core.next(arglist__52668);
var G__51785 = cljs.core.first(arglist__52668);
arglist__52668 = cljs.core.next(arglist__52668);
var G__51786 = cljs.core.first(arglist__52668);
var G__51787 = cljs.core.rest(arglist__52668);
return sci$impl$fns$arity_6__delegate(G__51781,G__51782,G__51783,G__51784,G__51785,G__51786,G__51787);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__51794,G__51795,G__51796,G__51797,G__51798,G__51799,G__51800,G__51801){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51794);

(invoc_array[(1)] = G__51795);

(invoc_array[(2)] = G__51796);

(invoc_array[(3)] = G__51797);

(invoc_array[(4)] = G__51798);

(invoc_array[(5)] = G__51799);

(invoc_array[(6)] = G__51800);

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
var sci$impl$fns$arity_7 = function (G__51794,G__51795,G__51796,G__51797,G__51798,G__51799,G__51800,var_args){
var G__51801 = null;
if (arguments.length > 7) {
var G__52673__i = 0, G__52673__a = new Array(arguments.length -  7);
while (G__52673__i < G__52673__a.length) {G__52673__a[G__52673__i] = arguments[G__52673__i + 7]; ++G__52673__i;}
  G__51801 = new cljs.core.IndexedSeq(G__52673__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__51794,G__51795,G__51796,G__51797,G__51798,G__51799,G__51800,G__51801);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52674){
var G__51794 = cljs.core.first(arglist__52674);
arglist__52674 = cljs.core.next(arglist__52674);
var G__51795 = cljs.core.first(arglist__52674);
arglist__52674 = cljs.core.next(arglist__52674);
var G__51796 = cljs.core.first(arglist__52674);
arglist__52674 = cljs.core.next(arglist__52674);
var G__51797 = cljs.core.first(arglist__52674);
arglist__52674 = cljs.core.next(arglist__52674);
var G__51798 = cljs.core.first(arglist__52674);
arglist__52674 = cljs.core.next(arglist__52674);
var G__51799 = cljs.core.first(arglist__52674);
arglist__52674 = cljs.core.next(arglist__52674);
var G__51800 = cljs.core.first(arglist__52674);
var G__51801 = cljs.core.rest(arglist__52674);
return sci$impl$fns$arity_7__delegate(G__51794,G__51795,G__51796,G__51797,G__51798,G__51799,G__51800,G__51801);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__51809,G__51810,G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51809);

(invoc_array[(1)] = G__51810);

(invoc_array[(2)] = G__51811);

(invoc_array[(3)] = G__51812);

(invoc_array[(4)] = G__51813);

(invoc_array[(5)] = G__51814);

(invoc_array[(6)] = G__51815);

(invoc_array[(7)] = G__51816);

(invoc_array[vararg_idx] = G__51817);

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
var sci$impl$fns$arity_8 = function (G__51809,G__51810,G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,var_args){
var G__51817 = null;
if (arguments.length > 8) {
var G__52675__i = 0, G__52675__a = new Array(arguments.length -  8);
while (G__52675__i < G__52675__a.length) {G__52675__a[G__52675__i] = arguments[G__52675__i + 8]; ++G__52675__i;}
  G__51817 = new cljs.core.IndexedSeq(G__52675__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__51809,G__51810,G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52676){
var G__51809 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51810 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51811 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51812 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51813 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51814 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51815 = cljs.core.first(arglist__52676);
arglist__52676 = cljs.core.next(arglist__52676);
var G__51816 = cljs.core.first(arglist__52676);
var G__51817 = cljs.core.rest(arglist__52676);
return sci$impl$fns$arity_8__delegate(G__51809,G__51810,G__51811,G__51812,G__51813,G__51814,G__51815,G__51816,G__51817);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__51824,G__51825,G__51826,G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51824);

(invoc_array[(1)] = G__51825);

(invoc_array[(2)] = G__51826);

(invoc_array[(3)] = G__51827);

(invoc_array[(4)] = G__51828);

(invoc_array[(5)] = G__51829);

(invoc_array[(6)] = G__51830);

(invoc_array[(7)] = G__51831);

(invoc_array[(8)] = G__51832);

(invoc_array[vararg_idx] = G__51833);

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
var sci$impl$fns$arity_9 = function (G__51824,G__51825,G__51826,G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,var_args){
var G__51833 = null;
if (arguments.length > 9) {
var G__52683__i = 0, G__52683__a = new Array(arguments.length -  9);
while (G__52683__i < G__52683__a.length) {G__52683__a[G__52683__i] = arguments[G__52683__i + 9]; ++G__52683__i;}
  G__51833 = new cljs.core.IndexedSeq(G__52683__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__51824,G__51825,G__51826,G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52684){
var G__51824 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51825 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51826 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51827 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51828 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51829 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51830 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51831 = cljs.core.first(arglist__52684);
arglist__52684 = cljs.core.next(arglist__52684);
var G__51832 = cljs.core.first(arglist__52684);
var G__51833 = cljs.core.rest(arglist__52684);
return sci$impl$fns$arity_9__delegate(G__51824,G__51825,G__51826,G__51827,G__51828,G__51829,G__51830,G__51831,G__51832,G__51833);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850,G__51851,G__51852,G__51853){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51843);

(invoc_array[(1)] = G__51844);

(invoc_array[(2)] = G__51845);

(invoc_array[(3)] = G__51846);

(invoc_array[(4)] = G__51847);

(invoc_array[(5)] = G__51848);

(invoc_array[(6)] = G__51849);

(invoc_array[(7)] = G__51850);

(invoc_array[(8)] = G__51851);

(invoc_array[(9)] = G__51852);

(invoc_array[vararg_idx] = G__51853);

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
var sci$impl$fns$arity_10 = function (G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850,G__51851,G__51852,var_args){
var G__51853 = null;
if (arguments.length > 10) {
var G__52685__i = 0, G__52685__a = new Array(arguments.length -  10);
while (G__52685__i < G__52685__a.length) {G__52685__a[G__52685__i] = arguments[G__52685__i + 10]; ++G__52685__i;}
  G__51853 = new cljs.core.IndexedSeq(G__52685__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850,G__51851,G__51852,G__51853);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52686){
var G__51843 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51844 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51845 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51846 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51847 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51848 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51849 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51850 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51851 = cljs.core.first(arglist__52686);
arglist__52686 = cljs.core.next(arglist__52686);
var G__51852 = cljs.core.first(arglist__52686);
var G__51853 = cljs.core.rest(arglist__52686);
return sci$impl$fns$arity_10__delegate(G__51843,G__51844,G__51845,G__51846,G__51847,G__51848,G__51849,G__51850,G__51851,G__51852,G__51853);
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
var G__52699__i = 0, G__52699__a = new Array(arguments.length -  11);
while (G__52699__i < G__52699__a.length) {G__52699__a[G__52699__i] = arguments[G__52699__i + 11]; ++G__52699__i;}
  G__51872 = new cljs.core.IndexedSeq(G__52699__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52700){
var G__51861 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51862 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51863 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51864 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51865 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51866 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51867 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51868 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51869 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51870 = cljs.core.first(arglist__52700);
arglist__52700 = cljs.core.next(arglist__52700);
var G__51871 = cljs.core.first(arglist__52700);
var G__51872 = cljs.core.rest(arglist__52700);
return sci$impl$fns$arity_11__delegate(G__51861,G__51862,G__51863,G__51864,G__51865,G__51866,G__51867,G__51868,G__51869,G__51870,G__51871,G__51872);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__51879,G__51880,G__51881,G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51879);

(invoc_array[(1)] = G__51880);

(invoc_array[(2)] = G__51881);

(invoc_array[(3)] = G__51882);

(invoc_array[(4)] = G__51883);

(invoc_array[(5)] = G__51884);

(invoc_array[(6)] = G__51885);

(invoc_array[(7)] = G__51886);

(invoc_array[(8)] = G__51887);

(invoc_array[(9)] = G__51888);

(invoc_array[(10)] = G__51889);

(invoc_array[(11)] = G__51890);

(invoc_array[vararg_idx] = G__51891);

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
var sci$impl$fns$arity_12 = function (G__51879,G__51880,G__51881,G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,var_args){
var G__51891 = null;
if (arguments.length > 12) {
var G__52703__i = 0, G__52703__a = new Array(arguments.length -  12);
while (G__52703__i < G__52703__a.length) {G__52703__a[G__52703__i] = arguments[G__52703__i + 12]; ++G__52703__i;}
  G__51891 = new cljs.core.IndexedSeq(G__52703__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__51879,G__51880,G__51881,G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52704){
var G__51879 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51880 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51881 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51882 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51883 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51884 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51885 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51886 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51887 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51888 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51889 = cljs.core.first(arglist__52704);
arglist__52704 = cljs.core.next(arglist__52704);
var G__51890 = cljs.core.first(arglist__52704);
var G__51891 = cljs.core.rest(arglist__52704);
return sci$impl$fns$arity_12__delegate(G__51879,G__51880,G__51881,G__51882,G__51883,G__51884,G__51885,G__51886,G__51887,G__51888,G__51889,G__51890,G__51891);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51896);

(invoc_array[(1)] = G__51897);

(invoc_array[(2)] = G__51898);

(invoc_array[(3)] = G__51899);

(invoc_array[(4)] = G__51900);

(invoc_array[(5)] = G__51901);

(invoc_array[(6)] = G__51902);

(invoc_array[(7)] = G__51903);

(invoc_array[(8)] = G__51904);

(invoc_array[(9)] = G__51905);

(invoc_array[(10)] = G__51906);

(invoc_array[(11)] = G__51907);

(invoc_array[(12)] = G__51908);

(invoc_array[vararg_idx] = G__51909);

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
var sci$impl$fns$arity_13 = function (G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,var_args){
var G__51909 = null;
if (arguments.length > 13) {
var G__52708__i = 0, G__52708__a = new Array(arguments.length -  13);
while (G__52708__i < G__52708__a.length) {G__52708__a[G__52708__i] = arguments[G__52708__i + 13]; ++G__52708__i;}
  G__51909 = new cljs.core.IndexedSeq(G__52708__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52709){
var G__51896 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51897 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51898 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51899 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51900 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51901 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51902 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51903 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51904 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51905 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51906 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51907 = cljs.core.first(arglist__52709);
arglist__52709 = cljs.core.next(arglist__52709);
var G__51908 = cljs.core.first(arglist__52709);
var G__51909 = cljs.core.rest(arglist__52709);
return sci$impl$fns$arity_13__delegate(G__51896,G__51897,G__51898,G__51899,G__51900,G__51901,G__51902,G__51903,G__51904,G__51905,G__51906,G__51907,G__51908,G__51909);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__51914,G__51915,G__51916,G__51917,G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51914);

(invoc_array[(1)] = G__51915);

(invoc_array[(2)] = G__51916);

(invoc_array[(3)] = G__51917);

(invoc_array[(4)] = G__51918);

(invoc_array[(5)] = G__51919);

(invoc_array[(6)] = G__51920);

(invoc_array[(7)] = G__51921);

(invoc_array[(8)] = G__51922);

(invoc_array[(9)] = G__51923);

(invoc_array[(10)] = G__51924);

(invoc_array[(11)] = G__51925);

(invoc_array[(12)] = G__51926);

(invoc_array[(13)] = G__51927);

(invoc_array[vararg_idx] = G__51928);

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
var sci$impl$fns$arity_14 = function (G__51914,G__51915,G__51916,G__51917,G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,var_args){
var G__51928 = null;
if (arguments.length > 14) {
var G__52718__i = 0, G__52718__a = new Array(arguments.length -  14);
while (G__52718__i < G__52718__a.length) {G__52718__a[G__52718__i] = arguments[G__52718__i + 14]; ++G__52718__i;}
  G__51928 = new cljs.core.IndexedSeq(G__52718__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__51914,G__51915,G__51916,G__51917,G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52719){
var G__51914 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51915 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51916 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51917 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51918 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51919 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51920 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51921 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51922 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51923 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51924 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51925 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51926 = cljs.core.first(arglist__52719);
arglist__52719 = cljs.core.next(arglist__52719);
var G__51927 = cljs.core.first(arglist__52719);
var G__51928 = cljs.core.rest(arglist__52719);
return sci$impl$fns$arity_14__delegate(G__51914,G__51915,G__51916,G__51917,G__51918,G__51919,G__51920,G__51921,G__51922,G__51923,G__51924,G__51925,G__51926,G__51927,G__51928);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947){
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

(invoc_array[(11)] = G__51943);

(invoc_array[(12)] = G__51944);

(invoc_array[(13)] = G__51945);

(invoc_array[(14)] = G__51946);

(invoc_array[vararg_idx] = G__51947);

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
var sci$impl$fns$arity_15 = function (G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,var_args){
var G__51947 = null;
if (arguments.length > 15) {
var G__52727__i = 0, G__52727__a = new Array(arguments.length -  15);
while (G__52727__i < G__52727__a.length) {G__52727__a[G__52727__i] = arguments[G__52727__i + 15]; ++G__52727__i;}
  G__51947 = new cljs.core.IndexedSeq(G__52727__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52728){
var G__51932 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51933 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51934 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51935 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51936 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51937 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51938 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51939 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51940 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51941 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51942 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51943 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51944 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51945 = cljs.core.first(arglist__52728);
arglist__52728 = cljs.core.next(arglist__52728);
var G__51946 = cljs.core.first(arglist__52728);
var G__51947 = cljs.core.rest(arglist__52728);
return sci$impl$fns$arity_15__delegate(G__51932,G__51933,G__51934,G__51935,G__51936,G__51937,G__51938,G__51939,G__51940,G__51941,G__51942,G__51943,G__51944,G__51945,G__51946,G__51947);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968){
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

(invoc_array[(12)] = G__51964);

(invoc_array[(13)] = G__51965);

(invoc_array[(14)] = G__51966);

(invoc_array[(15)] = G__51967);

(invoc_array[vararg_idx] = G__51968);

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
var sci$impl$fns$arity_16 = function (G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,var_args){
var G__51968 = null;
if (arguments.length > 16) {
var G__52742__i = 0, G__52742__a = new Array(arguments.length -  16);
while (G__52742__i < G__52742__a.length) {G__52742__a[G__52742__i] = arguments[G__52742__i + 16]; ++G__52742__i;}
  G__51968 = new cljs.core.IndexedSeq(G__52742__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52743){
var G__51952 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51953 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51954 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51955 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51956 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51957 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51958 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51959 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51960 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51961 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51962 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51963 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51964 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51965 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51966 = cljs.core.first(arglist__52743);
arglist__52743 = cljs.core.next(arglist__52743);
var G__51967 = cljs.core.first(arglist__52743);
var G__51968 = cljs.core.rest(arglist__52743);
return sci$impl$fns$arity_16__delegate(G__51952,G__51953,G__51954,G__51955,G__51956,G__51957,G__51958,G__51959,G__51960,G__51961,G__51962,G__51963,G__51964,G__51965,G__51966,G__51967,G__51968);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986){
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

(invoc_array[(15)] = G__51984);

(invoc_array[(16)] = G__51985);

(invoc_array[vararg_idx] = G__51986);

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
var sci$impl$fns$arity_17 = function (G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,var_args){
var G__51986 = null;
if (arguments.length > 17) {
var G__52758__i = 0, G__52758__a = new Array(arguments.length -  17);
while (G__52758__i < G__52758__a.length) {G__52758__a[G__52758__i] = arguments[G__52758__i + 17]; ++G__52758__i;}
  G__51986 = new cljs.core.IndexedSeq(G__52758__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52759){
var G__51969 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51970 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51971 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51972 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51973 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51974 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51975 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51976 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51977 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51978 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51979 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51980 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51981 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51982 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51983 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51984 = cljs.core.first(arglist__52759);
arglist__52759 = cljs.core.next(arglist__52759);
var G__51985 = cljs.core.first(arglist__52759);
var G__51986 = cljs.core.rest(arglist__52759);
return sci$impl$fns$arity_17__delegate(G__51969,G__51970,G__51971,G__51972,G__51973,G__51974,G__51975,G__51976,G__51977,G__51978,G__51979,G__51980,G__51981,G__51982,G__51983,G__51984,G__51985,G__51986);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51989);

(invoc_array[(1)] = G__51990);

(invoc_array[(2)] = G__51991);

(invoc_array[(3)] = G__51992);

(invoc_array[(4)] = G__51993);

(invoc_array[(5)] = G__51994);

(invoc_array[(6)] = G__51995);

(invoc_array[(7)] = G__51996);

(invoc_array[(8)] = G__51997);

(invoc_array[(9)] = G__51998);

(invoc_array[(10)] = G__51999);

(invoc_array[(11)] = G__52000);

(invoc_array[(12)] = G__52001);

(invoc_array[(13)] = G__52002);

(invoc_array[(14)] = G__52003);

(invoc_array[(15)] = G__52004);

(invoc_array[(16)] = G__52005);

(invoc_array[(17)] = G__52006);

(invoc_array[vararg_idx] = G__52007);

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
var sci$impl$fns$arity_18 = function (G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,var_args){
var G__52007 = null;
if (arguments.length > 18) {
var G__52760__i = 0, G__52760__a = new Array(arguments.length -  18);
while (G__52760__i < G__52760__a.length) {G__52760__a[G__52760__i] = arguments[G__52760__i + 18]; ++G__52760__i;}
  G__52007 = new cljs.core.IndexedSeq(G__52760__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52761){
var G__51989 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51990 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51991 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51992 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51993 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51994 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51995 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51996 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51997 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51998 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__51999 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52000 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52001 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52002 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52003 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52004 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52005 = cljs.core.first(arglist__52761);
arglist__52761 = cljs.core.next(arglist__52761);
var G__52006 = cljs.core.first(arglist__52761);
var G__52007 = cljs.core.rest(arglist__52761);
return sci$impl$fns$arity_18__delegate(G__51989,G__51990,G__51991,G__51992,G__51993,G__51994,G__51995,G__51996,G__51997,G__51998,G__51999,G__52000,G__52001,G__52002,G__52003,G__52004,G__52005,G__52006,G__52007);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027){
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

(invoc_array[(17)] = G__52025);

(invoc_array[(18)] = G__52026);

(invoc_array[vararg_idx] = G__52027);

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
var sci$impl$fns$arity_19 = function (G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,var_args){
var G__52027 = null;
if (arguments.length > 19) {
var G__52768__i = 0, G__52768__a = new Array(arguments.length -  19);
while (G__52768__i < G__52768__a.length) {G__52768__a[G__52768__i] = arguments[G__52768__i + 19]; ++G__52768__i;}
  G__52027 = new cljs.core.IndexedSeq(G__52768__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52769){
var G__52008 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52009 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52010 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52011 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52012 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52013 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52014 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52015 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52016 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52017 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52018 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52019 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52020 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52021 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52022 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52023 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52024 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52025 = cljs.core.first(arglist__52769);
arglist__52769 = cljs.core.next(arglist__52769);
var G__52026 = cljs.core.first(arglist__52769);
var G__52027 = cljs.core.rest(arglist__52769);
return sci$impl$fns$arity_19__delegate(G__52008,G__52009,G__52010,G__52011,G__52012,G__52013,G__52014,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020,G__52021,G__52022,G__52023,G__52024,G__52025,G__52026,G__52027);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050){
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

(invoc_array[(19)] = G__52049);

(invoc_array[vararg_idx] = G__52050);

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
var sci$impl$fns$arity_20 = function (G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,var_args){
var G__52050 = null;
if (arguments.length > 20) {
var G__52770__i = 0, G__52770__a = new Array(arguments.length -  20);
while (G__52770__i < G__52770__a.length) {G__52770__a[G__52770__i] = arguments[G__52770__i + 20]; ++G__52770__i;}
  G__52050 = new cljs.core.IndexedSeq(G__52770__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52771){
var G__52030 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52031 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52032 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52033 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52034 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52035 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52036 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52037 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52038 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52039 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52040 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52041 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52042 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52043 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52044 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52045 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52046 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52047 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52048 = cljs.core.first(arglist__52771);
arglist__52771 = cljs.core.next(arglist__52771);
var G__52049 = cljs.core.first(arglist__52771);
var G__52050 = cljs.core.rest(arglist__52771);
return sci$impl$fns$arity_20__delegate(G__52030,G__52031,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038,G__52039,G__52040,G__52041,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049,G__52050);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51749))));

}
})():(function (){var G__52052 = fixed_arity;
switch (G__52052) {
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
return (function sci$impl$fns$arity_1(G__52053){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52053);

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
return (function sci$impl$fns$arity_2(G__52061,G__52062){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52061);

(invoc_array[(1)] = G__52062);

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
return (function sci$impl$fns$arity_3(G__52063,G__52064,G__52065){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52063);

(invoc_array[(1)] = G__52064);

(invoc_array[(2)] = G__52065);

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
return (function sci$impl$fns$arity_4(G__52066,G__52067,G__52068,G__52069){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52066);

(invoc_array[(1)] = G__52067);

(invoc_array[(2)] = G__52068);

(invoc_array[(3)] = G__52069);

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
return (function sci$impl$fns$arity_5(G__52074,G__52075,G__52076,G__52077,G__52078){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52074);

(invoc_array[(1)] = G__52075);

(invoc_array[(2)] = G__52076);

(invoc_array[(3)] = G__52077);

(invoc_array[(4)] = G__52078);

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
return (function sci$impl$fns$arity_6(G__52084,G__52085,G__52086,G__52087,G__52088,G__52089){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52084);

(invoc_array[(1)] = G__52085);

(invoc_array[(2)] = G__52086);

(invoc_array[(3)] = G__52087);

(invoc_array[(4)] = G__52088);

(invoc_array[(5)] = G__52089);

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
return (function sci$impl$fns$arity_7(G__52090,G__52091,G__52092,G__52093,G__52094,G__52095,G__52096){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52090);

(invoc_array[(1)] = G__52091);

(invoc_array[(2)] = G__52092);

(invoc_array[(3)] = G__52093);

(invoc_array[(4)] = G__52094);

(invoc_array[(5)] = G__52095);

(invoc_array[(6)] = G__52096);

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
return (function sci$impl$fns$arity_8(G__52106,G__52107,G__52108,G__52109,G__52110,G__52111,G__52112,G__52113){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52106);

(invoc_array[(1)] = G__52107);

(invoc_array[(2)] = G__52108);

(invoc_array[(3)] = G__52109);

(invoc_array[(4)] = G__52110);

(invoc_array[(5)] = G__52111);

(invoc_array[(6)] = G__52112);

(invoc_array[(7)] = G__52113);

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
return (function sci$impl$fns$arity_9(G__52128,G__52129,G__52130,G__52131,G__52132,G__52133,G__52134,G__52135,G__52136){
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

(invoc_array[(6)] = G__52134);

(invoc_array[(7)] = G__52135);

(invoc_array[(8)] = G__52136);

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
return (function sci$impl$fns$arity_10(G__52145,G__52146,G__52147,G__52148,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52145);

(invoc_array[(1)] = G__52146);

(invoc_array[(2)] = G__52147);

(invoc_array[(3)] = G__52148);

(invoc_array[(4)] = G__52149);

(invoc_array[(5)] = G__52150);

(invoc_array[(6)] = G__52151);

(invoc_array[(7)] = G__52152);

(invoc_array[(8)] = G__52153);

(invoc_array[(9)] = G__52154);

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
return (function sci$impl$fns$arity_11(G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164,G__52165){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52155);

(invoc_array[(1)] = G__52156);

(invoc_array[(2)] = G__52157);

(invoc_array[(3)] = G__52158);

(invoc_array[(4)] = G__52159);

(invoc_array[(5)] = G__52160);

(invoc_array[(6)] = G__52161);

(invoc_array[(7)] = G__52162);

(invoc_array[(8)] = G__52163);

(invoc_array[(9)] = G__52164);

(invoc_array[(10)] = G__52165);

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
return (function sci$impl$fns$arity_12(G__52181,G__52182,G__52183,G__52184,G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191,G__52192){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52181);

(invoc_array[(1)] = G__52182);

(invoc_array[(2)] = G__52183);

(invoc_array[(3)] = G__52184);

(invoc_array[(4)] = G__52185);

(invoc_array[(5)] = G__52186);

(invoc_array[(6)] = G__52187);

(invoc_array[(7)] = G__52188);

(invoc_array[(8)] = G__52189);

(invoc_array[(9)] = G__52190);

(invoc_array[(10)] = G__52191);

(invoc_array[(11)] = G__52192);

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
return (function sci$impl$fns$arity_13(G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202,G__52203,G__52204,G__52205,G__52206,G__52207,G__52208){
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

(invoc_array[(10)] = G__52206);

(invoc_array[(11)] = G__52207);

(invoc_array[(12)] = G__52208);

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
return (function sci$impl$fns$arity_14(G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237,G__52238,G__52239,G__52240,G__52241,G__52242,G__52243){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52230);

(invoc_array[(1)] = G__52231);

(invoc_array[(2)] = G__52232);

(invoc_array[(3)] = G__52233);

(invoc_array[(4)] = G__52234);

(invoc_array[(5)] = G__52235);

(invoc_array[(6)] = G__52236);

(invoc_array[(7)] = G__52237);

(invoc_array[(8)] = G__52238);

(invoc_array[(9)] = G__52239);

(invoc_array[(10)] = G__52240);

(invoc_array[(11)] = G__52241);

(invoc_array[(12)] = G__52242);

(invoc_array[(13)] = G__52243);

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
return (function sci$impl$fns$arity_15(G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52276){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52261);

(invoc_array[(1)] = G__52262);

(invoc_array[(2)] = G__52263);

(invoc_array[(3)] = G__52264);

(invoc_array[(4)] = G__52265);

(invoc_array[(5)] = G__52266);

(invoc_array[(6)] = G__52267);

(invoc_array[(7)] = G__52268);

(invoc_array[(8)] = G__52269);

(invoc_array[(9)] = G__52270);

(invoc_array[(10)] = G__52271);

(invoc_array[(11)] = G__52272);

(invoc_array[(12)] = G__52273);

(invoc_array[(13)] = G__52274);

(invoc_array[(14)] = G__52276);

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
return (function sci$impl$fns$arity_16(G__52281,G__52282,G__52283,G__52284,G__52285,G__52286,G__52287,G__52288,G__52289,G__52290,G__52291,G__52292,G__52293,G__52294,G__52295,G__52296){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52281);

(invoc_array[(1)] = G__52282);

(invoc_array[(2)] = G__52283);

(invoc_array[(3)] = G__52284);

(invoc_array[(4)] = G__52285);

(invoc_array[(5)] = G__52286);

(invoc_array[(6)] = G__52287);

(invoc_array[(7)] = G__52288);

(invoc_array[(8)] = G__52289);

(invoc_array[(9)] = G__52290);

(invoc_array[(10)] = G__52291);

(invoc_array[(11)] = G__52292);

(invoc_array[(12)] = G__52293);

(invoc_array[(13)] = G__52294);

(invoc_array[(14)] = G__52295);

(invoc_array[(15)] = G__52296);

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
return (function sci$impl$fns$arity_17(G__52299,G__52300,G__52301,G__52302,G__52303,G__52304,G__52305,G__52306,G__52307,G__52308,G__52309,G__52310,G__52311,G__52312,G__52313,G__52314,G__52315){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52299);

(invoc_array[(1)] = G__52300);

(invoc_array[(2)] = G__52301);

(invoc_array[(3)] = G__52302);

(invoc_array[(4)] = G__52303);

(invoc_array[(5)] = G__52304);

(invoc_array[(6)] = G__52305);

(invoc_array[(7)] = G__52306);

(invoc_array[(8)] = G__52307);

(invoc_array[(9)] = G__52308);

(invoc_array[(10)] = G__52309);

(invoc_array[(11)] = G__52310);

(invoc_array[(12)] = G__52311);

(invoc_array[(13)] = G__52312);

(invoc_array[(14)] = G__52313);

(invoc_array[(15)] = G__52314);

(invoc_array[(16)] = G__52315);

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
return (function sci$impl$fns$arity_18(G__52319,G__52320,G__52321,G__52322,G__52323,G__52324,G__52325,G__52326,G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334,G__52335,G__52336){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52319);

(invoc_array[(1)] = G__52320);

(invoc_array[(2)] = G__52321);

(invoc_array[(3)] = G__52322);

(invoc_array[(4)] = G__52323);

(invoc_array[(5)] = G__52324);

(invoc_array[(6)] = G__52325);

(invoc_array[(7)] = G__52326);

(invoc_array[(8)] = G__52327);

(invoc_array[(9)] = G__52328);

(invoc_array[(10)] = G__52329);

(invoc_array[(11)] = G__52330);

(invoc_array[(12)] = G__52331);

(invoc_array[(13)] = G__52332);

(invoc_array[(14)] = G__52333);

(invoc_array[(15)] = G__52334);

(invoc_array[(16)] = G__52335);

(invoc_array[(17)] = G__52336);

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
return (function sci$impl$fns$arity_19(G__52340,G__52341,G__52342,G__52343,G__52344,G__52345,G__52346,G__52347,G__52348,G__52349,G__52350,G__52351,G__52352,G__52353,G__52354,G__52355,G__52356,G__52357,G__52358){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52340);

(invoc_array[(1)] = G__52341);

(invoc_array[(2)] = G__52342);

(invoc_array[(3)] = G__52343);

(invoc_array[(4)] = G__52344);

(invoc_array[(5)] = G__52345);

(invoc_array[(6)] = G__52346);

(invoc_array[(7)] = G__52347);

(invoc_array[(8)] = G__52348);

(invoc_array[(9)] = G__52349);

(invoc_array[(10)] = G__52350);

(invoc_array[(11)] = G__52351);

(invoc_array[(12)] = G__52352);

(invoc_array[(13)] = G__52353);

(invoc_array[(14)] = G__52354);

(invoc_array[(15)] = G__52355);

(invoc_array[(16)] = G__52356);

(invoc_array[(17)] = G__52357);

(invoc_array[(18)] = G__52358);

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
return (function sci$impl$fns$arity_20(G__52365,G__52366,G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378,G__52379,G__52380,G__52381,G__52382,G__52383,G__52384){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52365);

(invoc_array[(1)] = G__52366);

(invoc_array[(2)] = G__52367);

(invoc_array[(3)] = G__52368);

(invoc_array[(4)] = G__52369);

(invoc_array[(5)] = G__52370);

(invoc_array[(6)] = G__52371);

(invoc_array[(7)] = G__52372);

(invoc_array[(8)] = G__52373);

(invoc_array[(9)] = G__52374);

(invoc_array[(10)] = G__52375);

(invoc_array[(11)] = G__52376);

(invoc_array[(12)] = G__52377);

(invoc_array[(13)] = G__52378);

(invoc_array[(14)] = G__52379);

(invoc_array[(15)] = G__52380);

(invoc_array[(16)] = G__52381);

(invoc_array[(17)] = G__52382);

(invoc_array[(18)] = G__52383);

(invoc_array[(19)] = G__52384);

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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52052))));

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
var G__52808 = cljs.core.next(params__$1);
var G__52809 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52810 = lets;
params__$1 = G__52808;
new_params = G__52809;
lets = G__52810;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__52812 = cljs.core.next(params__$1);
var G__52813 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__52814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__52812;
new_params = G__52813;
lets = G__52814;
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
var len__5897__auto___52816 = arguments.length;
var i__5898__auto___52817 = (0);
while(true){
if((i__5898__auto___52817 < len__5897__auto___52816)){
args__5903__auto__.push((arguments[i__5898__auto___52817]));

var G__52818 = (i__5898__auto___52817 + (1));
i__5898__auto___52817 = G__52818;
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

var vec__52426 = sig;
var seq__52427 = cljs.core.seq(vec__52426);
var first__52428 = cljs.core.first(seq__52427);
var seq__52427__$1 = cljs.core.next(seq__52427);
var params = first__52428;
var body = seq__52427__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52414){
var G__52415 = cljs.core.first(seq52414);
var seq52414__$1 = cljs.core.next(seq52414);
var G__52416 = cljs.core.first(seq52414__$1);
var seq52414__$2 = cljs.core.next(seq52414__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52415,G__52416,seq52414__$2);
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
var G__52829 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52830 = cljs.core.next(fdecls);
ret = G__52829;
fdecls = G__52830;
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
var len__5897__auto___52831 = arguments.length;
var i__5898__auto___52832 = (0);
while(true){
if((i__5898__auto___52832 < len__5897__auto___52831)){
args__5903__auto__.push((arguments[i__5898__auto___52832]));

var G__52833 = (i__5898__auto___52832 + (1));
i__5898__auto___52832 = G__52833;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52474){
var G__52475 = cljs.core.first(seq52474);
var seq52474__$1 = cljs.core.next(seq52474);
var G__52476 = cljs.core.first(seq52474__$1);
var seq52474__$2 = cljs.core.next(seq52474__$1);
var G__52477 = cljs.core.first(seq52474__$2);
var seq52474__$3 = cljs.core.next(seq52474__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52475,G__52476,G__52477,seq52474__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
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
var G__52839 = cljs.core.cons(f,p);
var G__52840 = cljs.core.next(args__$1);
p = G__52839;
args__$1 = G__52840;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52841 = cljs.core.cons(f,p);
var G__52842 = cljs.core.next(args__$1);
p = G__52841;
args__$1 = G__52842;
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
var G__52843 = cljs.core.next(fd);
fd = G__52843;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__52844 = cljs.core.next(fd);
fd = G__52844;
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
var G__52845 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__52846 = cljs.core.next(ds);
acc = G__52845;
ds = G__52846;
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
var G__52847 = cljs.core.next(p);
var G__52848 = cljs.core.cons(cljs.core.first(p),d);
p = G__52847;
d = G__52848;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52503){
var G__52504 = cljs.core.first(seq52503);
var seq52503__$1 = cljs.core.next(seq52503);
var G__52505 = cljs.core.first(seq52503__$1);
var seq52503__$2 = cljs.core.next(seq52503__$1);
var G__52506 = cljs.core.first(seq52503__$2);
var seq52503__$3 = cljs.core.next(seq52503__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52504,G__52505,G__52506,seq52503__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
