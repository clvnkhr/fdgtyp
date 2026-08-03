goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__51969 = arguments.length;
switch (G__51969) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__51984 = fixed_arity;
switch (G__51984) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__51986){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__51986);

while(true){
var ret__51146__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51146__auto__)){
continue;
} else {
return ret__51146__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__51986 = null;
if (arguments.length > 0) {
var G__52735__i = 0, G__52735__a = new Array(arguments.length -  0);
while (G__52735__i < G__52735__a.length) {G__52735__a[G__52735__i] = arguments[G__52735__i + 0]; ++G__52735__i;}
  G__51986 = new cljs.core.IndexedSeq(G__52735__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__51986);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__52736){
var G__51986 = cljs.core.seq(arglist__52736);
return sci$impl$fns$arity_0__delegate(G__51986);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__51993,G__51994){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51993);

(invoc_array[vararg_idx] = G__51994);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__51993,var_args){
var G__51994 = null;
if (arguments.length > 1) {
var G__52745__i = 0, G__52745__a = new Array(arguments.length -  1);
while (G__52745__i < G__52745__a.length) {G__52745__a[G__52745__i] = arguments[G__52745__i + 1]; ++G__52745__i;}
  G__51994 = new cljs.core.IndexedSeq(G__52745__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__51993,G__51994);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__52746){
var G__51993 = cljs.core.first(arglist__52746);
var G__51994 = cljs.core.rest(arglist__52746);
return sci$impl$fns$arity_1__delegate(G__51993,G__51994);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__51999,G__52000,G__52001){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__51999);

(invoc_array[(1)] = G__52000);

(invoc_array[vararg_idx] = G__52001);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__51999,G__52000,var_args){
var G__52001 = null;
if (arguments.length > 2) {
var G__52749__i = 0, G__52749__a = new Array(arguments.length -  2);
while (G__52749__i < G__52749__a.length) {G__52749__a[G__52749__i] = arguments[G__52749__i + 2]; ++G__52749__i;}
  G__52001 = new cljs.core.IndexedSeq(G__52749__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__51999,G__52000,G__52001);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__52750){
var G__51999 = cljs.core.first(arglist__52750);
arglist__52750 = cljs.core.next(arglist__52750);
var G__52000 = cljs.core.first(arglist__52750);
var G__52001 = cljs.core.rest(arglist__52750);
return sci$impl$fns$arity_2__delegate(G__51999,G__52000,G__52001);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__52002,G__52003,G__52004,G__52005){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52002);

(invoc_array[(1)] = G__52003);

(invoc_array[(2)] = G__52004);

(invoc_array[vararg_idx] = G__52005);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__52002,G__52003,G__52004,var_args){
var G__52005 = null;
if (arguments.length > 3) {
var G__52751__i = 0, G__52751__a = new Array(arguments.length -  3);
while (G__52751__i < G__52751__a.length) {G__52751__a[G__52751__i] = arguments[G__52751__i + 3]; ++G__52751__i;}
  G__52005 = new cljs.core.IndexedSeq(G__52751__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__52002,G__52003,G__52004,G__52005);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__52752){
var G__52002 = cljs.core.first(arglist__52752);
arglist__52752 = cljs.core.next(arglist__52752);
var G__52003 = cljs.core.first(arglist__52752);
arglist__52752 = cljs.core.next(arglist__52752);
var G__52004 = cljs.core.first(arglist__52752);
var G__52005 = cljs.core.rest(arglist__52752);
return sci$impl$fns$arity_3__delegate(G__52002,G__52003,G__52004,G__52005);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__52007,G__52008,G__52009,G__52010,G__52011){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52007);

(invoc_array[(1)] = G__52008);

(invoc_array[(2)] = G__52009);

(invoc_array[(3)] = G__52010);

(invoc_array[vararg_idx] = G__52011);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__52007,G__52008,G__52009,G__52010,var_args){
var G__52011 = null;
if (arguments.length > 4) {
var G__52754__i = 0, G__52754__a = new Array(arguments.length -  4);
while (G__52754__i < G__52754__a.length) {G__52754__a[G__52754__i] = arguments[G__52754__i + 4]; ++G__52754__i;}
  G__52011 = new cljs.core.IndexedSeq(G__52754__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__52007,G__52008,G__52009,G__52010,G__52011);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__52756){
var G__52007 = cljs.core.first(arglist__52756);
arglist__52756 = cljs.core.next(arglist__52756);
var G__52008 = cljs.core.first(arglist__52756);
arglist__52756 = cljs.core.next(arglist__52756);
var G__52009 = cljs.core.first(arglist__52756);
arglist__52756 = cljs.core.next(arglist__52756);
var G__52010 = cljs.core.first(arglist__52756);
var G__52011 = cljs.core.rest(arglist__52756);
return sci$impl$fns$arity_4__delegate(G__52007,G__52008,G__52009,G__52010,G__52011);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__52015,G__52016,G__52017,G__52018,G__52019,G__52020){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52015);

(invoc_array[(1)] = G__52016);

(invoc_array[(2)] = G__52017);

(invoc_array[(3)] = G__52018);

(invoc_array[(4)] = G__52019);

(invoc_array[vararg_idx] = G__52020);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__52015,G__52016,G__52017,G__52018,G__52019,var_args){
var G__52020 = null;
if (arguments.length > 5) {
var G__52763__i = 0, G__52763__a = new Array(arguments.length -  5);
while (G__52763__i < G__52763__a.length) {G__52763__a[G__52763__i] = arguments[G__52763__i + 5]; ++G__52763__i;}
  G__52020 = new cljs.core.IndexedSeq(G__52763__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__52015,G__52016,G__52017,G__52018,G__52019,G__52020);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__52764){
var G__52015 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__52016 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__52017 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__52018 = cljs.core.first(arglist__52764);
arglist__52764 = cljs.core.next(arglist__52764);
var G__52019 = cljs.core.first(arglist__52764);
var G__52020 = cljs.core.rest(arglist__52764);
return sci$impl$fns$arity_5__delegate(G__52015,G__52016,G__52017,G__52018,G__52019,G__52020);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52032);

(invoc_array[(1)] = G__52033);

(invoc_array[(2)] = G__52034);

(invoc_array[(3)] = G__52035);

(invoc_array[(4)] = G__52036);

(invoc_array[(5)] = G__52037);

(invoc_array[vararg_idx] = G__52038);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,var_args){
var G__52038 = null;
if (arguments.length > 6) {
var G__52766__i = 0, G__52766__a = new Array(arguments.length -  6);
while (G__52766__i < G__52766__a.length) {G__52766__a[G__52766__i] = arguments[G__52766__i + 6]; ++G__52766__i;}
  G__52038 = new cljs.core.IndexedSeq(G__52766__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__52767){
var G__52032 = cljs.core.first(arglist__52767);
arglist__52767 = cljs.core.next(arglist__52767);
var G__52033 = cljs.core.first(arglist__52767);
arglist__52767 = cljs.core.next(arglist__52767);
var G__52034 = cljs.core.first(arglist__52767);
arglist__52767 = cljs.core.next(arglist__52767);
var G__52035 = cljs.core.first(arglist__52767);
arglist__52767 = cljs.core.next(arglist__52767);
var G__52036 = cljs.core.first(arglist__52767);
arglist__52767 = cljs.core.next(arglist__52767);
var G__52037 = cljs.core.first(arglist__52767);
var G__52038 = cljs.core.rest(arglist__52767);
return sci$impl$fns$arity_6__delegate(G__52032,G__52033,G__52034,G__52035,G__52036,G__52037,G__52038);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52042);

(invoc_array[(1)] = G__52043);

(invoc_array[(2)] = G__52044);

(invoc_array[(3)] = G__52045);

(invoc_array[(4)] = G__52046);

(invoc_array[(5)] = G__52047);

(invoc_array[(6)] = G__52048);

(invoc_array[vararg_idx] = G__52049);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,var_args){
var G__52049 = null;
if (arguments.length > 7) {
var G__52774__i = 0, G__52774__a = new Array(arguments.length -  7);
while (G__52774__i < G__52774__a.length) {G__52774__a[G__52774__i] = arguments[G__52774__i + 7]; ++G__52774__i;}
  G__52049 = new cljs.core.IndexedSeq(G__52774__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__52775){
var G__52042 = cljs.core.first(arglist__52775);
arglist__52775 = cljs.core.next(arglist__52775);
var G__52043 = cljs.core.first(arglist__52775);
arglist__52775 = cljs.core.next(arglist__52775);
var G__52044 = cljs.core.first(arglist__52775);
arglist__52775 = cljs.core.next(arglist__52775);
var G__52045 = cljs.core.first(arglist__52775);
arglist__52775 = cljs.core.next(arglist__52775);
var G__52046 = cljs.core.first(arglist__52775);
arglist__52775 = cljs.core.next(arglist__52775);
var G__52047 = cljs.core.first(arglist__52775);
arglist__52775 = cljs.core.next(arglist__52775);
var G__52048 = cljs.core.first(arglist__52775);
var G__52049 = cljs.core.rest(arglist__52775);
return sci$impl$fns$arity_7__delegate(G__52042,G__52043,G__52044,G__52045,G__52046,G__52047,G__52048,G__52049);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52052);

(invoc_array[(1)] = G__52053);

(invoc_array[(2)] = G__52054);

(invoc_array[(3)] = G__52055);

(invoc_array[(4)] = G__52056);

(invoc_array[(5)] = G__52057);

(invoc_array[(6)] = G__52058);

(invoc_array[(7)] = G__52059);

(invoc_array[vararg_idx] = G__52060);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,var_args){
var G__52060 = null;
if (arguments.length > 8) {
var G__52783__i = 0, G__52783__a = new Array(arguments.length -  8);
while (G__52783__i < G__52783__a.length) {G__52783__a[G__52783__i] = arguments[G__52783__i + 8]; ++G__52783__i;}
  G__52060 = new cljs.core.IndexedSeq(G__52783__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__52784){
var G__52052 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52053 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52054 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52055 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52056 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52057 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52058 = cljs.core.first(arglist__52784);
arglist__52784 = cljs.core.next(arglist__52784);
var G__52059 = cljs.core.first(arglist__52784);
var G__52060 = cljs.core.rest(arglist__52784);
return sci$impl$fns$arity_8__delegate(G__52052,G__52053,G__52054,G__52055,G__52056,G__52057,G__52058,G__52059,G__52060);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52062);

(invoc_array[(1)] = G__52063);

(invoc_array[(2)] = G__52064);

(invoc_array[(3)] = G__52065);

(invoc_array[(4)] = G__52066);

(invoc_array[(5)] = G__52067);

(invoc_array[(6)] = G__52068);

(invoc_array[(7)] = G__52069);

(invoc_array[(8)] = G__52070);

(invoc_array[vararg_idx] = G__52071);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,var_args){
var G__52071 = null;
if (arguments.length > 9) {
var G__52785__i = 0, G__52785__a = new Array(arguments.length -  9);
while (G__52785__i < G__52785__a.length) {G__52785__a[G__52785__i] = arguments[G__52785__i + 9]; ++G__52785__i;}
  G__52071 = new cljs.core.IndexedSeq(G__52785__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__52786){
var G__52062 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52063 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52064 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52065 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52066 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52067 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52068 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52069 = cljs.core.first(arglist__52786);
arglist__52786 = cljs.core.next(arglist__52786);
var G__52070 = cljs.core.first(arglist__52786);
var G__52071 = cljs.core.rest(arglist__52786);
return sci$impl$fns$arity_9__delegate(G__52062,G__52063,G__52064,G__52065,G__52066,G__52067,G__52068,G__52069,G__52070,G__52071);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52073);

(invoc_array[(1)] = G__52074);

(invoc_array[(2)] = G__52075);

(invoc_array[(3)] = G__52076);

(invoc_array[(4)] = G__52077);

(invoc_array[(5)] = G__52078);

(invoc_array[(6)] = G__52079);

(invoc_array[(7)] = G__52080);

(invoc_array[(8)] = G__52081);

(invoc_array[(9)] = G__52082);

(invoc_array[vararg_idx] = G__52083);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,var_args){
var G__52083 = null;
if (arguments.length > 10) {
var G__52787__i = 0, G__52787__a = new Array(arguments.length -  10);
while (G__52787__i < G__52787__a.length) {G__52787__a[G__52787__i] = arguments[G__52787__i + 10]; ++G__52787__i;}
  G__52083 = new cljs.core.IndexedSeq(G__52787__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__52788){
var G__52073 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52074 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52075 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52076 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52077 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52078 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52079 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52080 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52081 = cljs.core.first(arglist__52788);
arglist__52788 = cljs.core.next(arglist__52788);
var G__52082 = cljs.core.first(arglist__52788);
var G__52083 = cljs.core.rest(arglist__52788);
return sci$impl$fns$arity_10__delegate(G__52073,G__52074,G__52075,G__52076,G__52077,G__52078,G__52079,G__52080,G__52081,G__52082,G__52083);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095){
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

(invoc_array[(6)] = G__52090);

(invoc_array[(7)] = G__52091);

(invoc_array[(8)] = G__52092);

(invoc_array[(9)] = G__52093);

(invoc_array[(10)] = G__52094);

(invoc_array[vararg_idx] = G__52095);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,var_args){
var G__52095 = null;
if (arguments.length > 11) {
var G__52795__i = 0, G__52795__a = new Array(arguments.length -  11);
while (G__52795__i < G__52795__a.length) {G__52795__a[G__52795__i] = arguments[G__52795__i + 11]; ++G__52795__i;}
  G__52095 = new cljs.core.IndexedSeq(G__52795__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__52796){
var G__52084 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52085 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52086 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52087 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52088 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52089 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52090 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52091 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52092 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52093 = cljs.core.first(arglist__52796);
arglist__52796 = cljs.core.next(arglist__52796);
var G__52094 = cljs.core.first(arglist__52796);
var G__52095 = cljs.core.rest(arglist__52796);
return sci$impl$fns$arity_11__delegate(G__52084,G__52085,G__52086,G__52087,G__52088,G__52089,G__52090,G__52091,G__52092,G__52093,G__52094,G__52095);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52097);

(invoc_array[(1)] = G__52098);

(invoc_array[(2)] = G__52099);

(invoc_array[(3)] = G__52100);

(invoc_array[(4)] = G__52101);

(invoc_array[(5)] = G__52102);

(invoc_array[(6)] = G__52103);

(invoc_array[(7)] = G__52104);

(invoc_array[(8)] = G__52105);

(invoc_array[(9)] = G__52106);

(invoc_array[(10)] = G__52107);

(invoc_array[(11)] = G__52108);

(invoc_array[vararg_idx] = G__52109);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,var_args){
var G__52109 = null;
if (arguments.length > 12) {
var G__52797__i = 0, G__52797__a = new Array(arguments.length -  12);
while (G__52797__i < G__52797__a.length) {G__52797__a[G__52797__i] = arguments[G__52797__i + 12]; ++G__52797__i;}
  G__52109 = new cljs.core.IndexedSeq(G__52797__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__52798){
var G__52097 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52098 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52099 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52100 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52101 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52102 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52103 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52104 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52105 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52106 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52107 = cljs.core.first(arglist__52798);
arglist__52798 = cljs.core.next(arglist__52798);
var G__52108 = cljs.core.first(arglist__52798);
var G__52109 = cljs.core.rest(arglist__52798);
return sci$impl$fns$arity_12__delegate(G__52097,G__52098,G__52099,G__52100,G__52101,G__52102,G__52103,G__52104,G__52105,G__52106,G__52107,G__52108,G__52109);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52119);

(invoc_array[(1)] = G__52120);

(invoc_array[(2)] = G__52121);

(invoc_array[(3)] = G__52122);

(invoc_array[(4)] = G__52123);

(invoc_array[(5)] = G__52124);

(invoc_array[(6)] = G__52125);

(invoc_array[(7)] = G__52126);

(invoc_array[(8)] = G__52127);

(invoc_array[(9)] = G__52128);

(invoc_array[(10)] = G__52129);

(invoc_array[(11)] = G__52130);

(invoc_array[(12)] = G__52131);

(invoc_array[vararg_idx] = G__52132);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,var_args){
var G__52132 = null;
if (arguments.length > 13) {
var G__52808__i = 0, G__52808__a = new Array(arguments.length -  13);
while (G__52808__i < G__52808__a.length) {G__52808__a[G__52808__i] = arguments[G__52808__i + 13]; ++G__52808__i;}
  G__52132 = new cljs.core.IndexedSeq(G__52808__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__52809){
var G__52119 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52120 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52121 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52122 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52123 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52124 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52125 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52126 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52127 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52128 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52129 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52130 = cljs.core.first(arglist__52809);
arglist__52809 = cljs.core.next(arglist__52809);
var G__52131 = cljs.core.first(arglist__52809);
var G__52132 = cljs.core.rest(arglist__52809);
return sci$impl$fns$arity_13__delegate(G__52119,G__52120,G__52121,G__52122,G__52123,G__52124,G__52125,G__52126,G__52127,G__52128,G__52129,G__52130,G__52131,G__52132);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52134);

(invoc_array[(1)] = G__52135);

(invoc_array[(2)] = G__52136);

(invoc_array[(3)] = G__52137);

(invoc_array[(4)] = G__52138);

(invoc_array[(5)] = G__52139);

(invoc_array[(6)] = G__52140);

(invoc_array[(7)] = G__52141);

(invoc_array[(8)] = G__52142);

(invoc_array[(9)] = G__52143);

(invoc_array[(10)] = G__52144);

(invoc_array[(11)] = G__52145);

(invoc_array[(12)] = G__52146);

(invoc_array[(13)] = G__52147);

(invoc_array[vararg_idx] = G__52148);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,var_args){
var G__52148 = null;
if (arguments.length > 14) {
var G__52811__i = 0, G__52811__a = new Array(arguments.length -  14);
while (G__52811__i < G__52811__a.length) {G__52811__a[G__52811__i] = arguments[G__52811__i + 14]; ++G__52811__i;}
  G__52148 = new cljs.core.IndexedSeq(G__52811__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__52812){
var G__52134 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52135 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52136 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52137 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52138 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52139 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52140 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52141 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52142 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52143 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52144 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52145 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52146 = cljs.core.first(arglist__52812);
arglist__52812 = cljs.core.next(arglist__52812);
var G__52147 = cljs.core.first(arglist__52812);
var G__52148 = cljs.core.rest(arglist__52812);
return sci$impl$fns$arity_14__delegate(G__52134,G__52135,G__52136,G__52137,G__52138,G__52139,G__52140,G__52141,G__52142,G__52143,G__52144,G__52145,G__52146,G__52147,G__52148);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52149);

(invoc_array[(1)] = G__52150);

(invoc_array[(2)] = G__52151);

(invoc_array[(3)] = G__52152);

(invoc_array[(4)] = G__52153);

(invoc_array[(5)] = G__52154);

(invoc_array[(6)] = G__52155);

(invoc_array[(7)] = G__52156);

(invoc_array[(8)] = G__52157);

(invoc_array[(9)] = G__52158);

(invoc_array[(10)] = G__52159);

(invoc_array[(11)] = G__52160);

(invoc_array[(12)] = G__52161);

(invoc_array[(13)] = G__52162);

(invoc_array[(14)] = G__52163);

(invoc_array[vararg_idx] = G__52164);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,var_args){
var G__52164 = null;
if (arguments.length > 15) {
var G__52820__i = 0, G__52820__a = new Array(arguments.length -  15);
while (G__52820__i < G__52820__a.length) {G__52820__a[G__52820__i] = arguments[G__52820__i + 15]; ++G__52820__i;}
  G__52164 = new cljs.core.IndexedSeq(G__52820__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__52821){
var G__52149 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52150 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52151 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52152 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52153 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52154 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52155 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52156 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52157 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52158 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52159 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52160 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52161 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52162 = cljs.core.first(arglist__52821);
arglist__52821 = cljs.core.next(arglist__52821);
var G__52163 = cljs.core.first(arglist__52821);
var G__52164 = cljs.core.rest(arglist__52821);
return sci$impl$fns$arity_15__delegate(G__52149,G__52150,G__52151,G__52152,G__52153,G__52154,G__52155,G__52156,G__52157,G__52158,G__52159,G__52160,G__52161,G__52162,G__52163,G__52164);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52166);

(invoc_array[(1)] = G__52167);

(invoc_array[(2)] = G__52168);

(invoc_array[(3)] = G__52169);

(invoc_array[(4)] = G__52170);

(invoc_array[(5)] = G__52171);

(invoc_array[(6)] = G__52172);

(invoc_array[(7)] = G__52173);

(invoc_array[(8)] = G__52174);

(invoc_array[(9)] = G__52175);

(invoc_array[(10)] = G__52176);

(invoc_array[(11)] = G__52177);

(invoc_array[(12)] = G__52178);

(invoc_array[(13)] = G__52179);

(invoc_array[(14)] = G__52180);

(invoc_array[(15)] = G__52181);

(invoc_array[vararg_idx] = G__52182);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,var_args){
var G__52182 = null;
if (arguments.length > 16) {
var G__52823__i = 0, G__52823__a = new Array(arguments.length -  16);
while (G__52823__i < G__52823__a.length) {G__52823__a[G__52823__i] = arguments[G__52823__i + 16]; ++G__52823__i;}
  G__52182 = new cljs.core.IndexedSeq(G__52823__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__52825){
var G__52166 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52167 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52168 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52169 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52170 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52171 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52172 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52173 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52174 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52175 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52176 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52177 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52178 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52179 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52180 = cljs.core.first(arglist__52825);
arglist__52825 = cljs.core.next(arglist__52825);
var G__52181 = cljs.core.first(arglist__52825);
var G__52182 = cljs.core.rest(arglist__52825);
return sci$impl$fns$arity_16__delegate(G__52166,G__52167,G__52168,G__52169,G__52170,G__52171,G__52172,G__52173,G__52174,G__52175,G__52176,G__52177,G__52178,G__52179,G__52180,G__52181,G__52182);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52185);

(invoc_array[(1)] = G__52186);

(invoc_array[(2)] = G__52187);

(invoc_array[(3)] = G__52188);

(invoc_array[(4)] = G__52189);

(invoc_array[(5)] = G__52190);

(invoc_array[(6)] = G__52191);

(invoc_array[(7)] = G__52192);

(invoc_array[(8)] = G__52193);

(invoc_array[(9)] = G__52194);

(invoc_array[(10)] = G__52195);

(invoc_array[(11)] = G__52196);

(invoc_array[(12)] = G__52197);

(invoc_array[(13)] = G__52198);

(invoc_array[(14)] = G__52199);

(invoc_array[(15)] = G__52200);

(invoc_array[(16)] = G__52201);

(invoc_array[vararg_idx] = G__52202);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,var_args){
var G__52202 = null;
if (arguments.length > 17) {
var G__52826__i = 0, G__52826__a = new Array(arguments.length -  17);
while (G__52826__i < G__52826__a.length) {G__52826__a[G__52826__i] = arguments[G__52826__i + 17]; ++G__52826__i;}
  G__52202 = new cljs.core.IndexedSeq(G__52826__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__52827){
var G__52185 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52186 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52187 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52188 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52189 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52190 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52191 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52192 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52193 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52194 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52195 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52196 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52197 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52198 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52199 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52200 = cljs.core.first(arglist__52827);
arglist__52827 = cljs.core.next(arglist__52827);
var G__52201 = cljs.core.first(arglist__52827);
var G__52202 = cljs.core.rest(arglist__52827);
return sci$impl$fns$arity_17__delegate(G__52185,G__52186,G__52187,G__52188,G__52189,G__52190,G__52191,G__52192,G__52193,G__52194,G__52195,G__52196,G__52197,G__52198,G__52199,G__52200,G__52201,G__52202);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237){
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

(invoc_array[(11)] = G__52230);

(invoc_array[(12)] = G__52231);

(invoc_array[(13)] = G__52232);

(invoc_array[(14)] = G__52233);

(invoc_array[(15)] = G__52234);

(invoc_array[(16)] = G__52235);

(invoc_array[(17)] = G__52236);

(invoc_array[vararg_idx] = G__52237);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,var_args){
var G__52237 = null;
if (arguments.length > 18) {
var G__52832__i = 0, G__52832__a = new Array(arguments.length -  18);
while (G__52832__i < G__52832__a.length) {G__52832__a[G__52832__i] = arguments[G__52832__i + 18]; ++G__52832__i;}
  G__52237 = new cljs.core.IndexedSeq(G__52832__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__52833){
var G__52219 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52220 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52221 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52222 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52223 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52224 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52225 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52226 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52227 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52228 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52229 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52230 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52231 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52232 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52233 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52234 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52235 = cljs.core.first(arglist__52833);
arglist__52833 = cljs.core.next(arglist__52833);
var G__52236 = cljs.core.first(arglist__52833);
var G__52237 = cljs.core.rest(arglist__52833);
return sci$impl$fns$arity_18__delegate(G__52219,G__52220,G__52221,G__52222,G__52223,G__52224,G__52225,G__52226,G__52227,G__52228,G__52229,G__52230,G__52231,G__52232,G__52233,G__52234,G__52235,G__52236,G__52237);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259){
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

(invoc_array[(13)] = G__52253);

(invoc_array[(14)] = G__52254);

(invoc_array[(15)] = G__52255);

(invoc_array[(16)] = G__52256);

(invoc_array[(17)] = G__52257);

(invoc_array[(18)] = G__52258);

(invoc_array[vararg_idx] = G__52259);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,var_args){
var G__52259 = null;
if (arguments.length > 19) {
var G__52834__i = 0, G__52834__a = new Array(arguments.length -  19);
while (G__52834__i < G__52834__a.length) {G__52834__a[G__52834__i] = arguments[G__52834__i + 19]; ++G__52834__i;}
  G__52259 = new cljs.core.IndexedSeq(G__52834__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__52835){
var G__52240 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52241 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52242 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52243 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52244 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52245 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52246 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52247 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52248 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52249 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52250 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52251 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52252 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52253 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52254 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52255 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52256 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52257 = cljs.core.first(arglist__52835);
arglist__52835 = cljs.core.next(arglist__52835);
var G__52258 = cljs.core.first(arglist__52835);
var G__52259 = cljs.core.rest(arglist__52835);
return sci$impl$fns$arity_19__delegate(G__52240,G__52241,G__52242,G__52243,G__52244,G__52245,G__52246,G__52247,G__52248,G__52249,G__52250,G__52251,G__52252,G__52253,G__52254,G__52255,G__52256,G__52257,G__52258,G__52259);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__52260,G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52260);

(invoc_array[(1)] = G__52261);

(invoc_array[(2)] = G__52262);

(invoc_array[(3)] = G__52263);

(invoc_array[(4)] = G__52264);

(invoc_array[(5)] = G__52265);

(invoc_array[(6)] = G__52266);

(invoc_array[(7)] = G__52267);

(invoc_array[(8)] = G__52268);

(invoc_array[(9)] = G__52269);

(invoc_array[(10)] = G__52270);

(invoc_array[(11)] = G__52271);

(invoc_array[(12)] = G__52272);

(invoc_array[(13)] = G__52273);

(invoc_array[(14)] = G__52274);

(invoc_array[(15)] = G__52275);

(invoc_array[(16)] = G__52276);

(invoc_array[(17)] = G__52277);

(invoc_array[(18)] = G__52278);

(invoc_array[(19)] = G__52279);

(invoc_array[vararg_idx] = G__52280);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__52260,G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,var_args){
var G__52280 = null;
if (arguments.length > 20) {
var G__52836__i = 0, G__52836__a = new Array(arguments.length -  20);
while (G__52836__i < G__52836__a.length) {G__52836__a[G__52836__i] = arguments[G__52836__i + 20]; ++G__52836__i;}
  G__52280 = new cljs.core.IndexedSeq(G__52836__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__52260,G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__52837){
var G__52260 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52261 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52262 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52263 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52264 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52265 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52266 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52267 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52268 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52269 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52270 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52271 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52272 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52273 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52274 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52275 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52276 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52277 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52278 = cljs.core.first(arglist__52837);
arglist__52837 = cljs.core.next(arglist__52837);
var G__52279 = cljs.core.first(arglist__52837);
var G__52280 = cljs.core.rest(arglist__52837);
return sci$impl$fns$arity_20__delegate(G__52260,G__52261,G__52262,G__52263,G__52264,G__52265,G__52266,G__52267,G__52268,G__52269,G__52270,G__52271,G__52272,G__52273,G__52274,G__52275,G__52276,G__52277,G__52278,G__52279,G__52280);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51984))));

}
})():(function (){var G__52281 = fixed_arity;
switch (G__52281) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__51146__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51146__auto__)){
continue;
} else {
return ret__51146__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__52287){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52287);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__52291,G__52292){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52291);

(invoc_array[(1)] = G__52292);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__52295,G__52296,G__52297){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52295);

(invoc_array[(1)] = G__52296);

(invoc_array[(2)] = G__52297);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__52303,G__52304,G__52305,G__52306){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52303);

(invoc_array[(1)] = G__52304);

(invoc_array[(2)] = G__52305);

(invoc_array[(3)] = G__52306);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__52307,G__52308,G__52309,G__52310,G__52311){
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

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__52312,G__52313,G__52314,G__52315,G__52316,G__52317){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52312);

(invoc_array[(1)] = G__52313);

(invoc_array[(2)] = G__52314);

(invoc_array[(3)] = G__52315);

(invoc_array[(4)] = G__52316);

(invoc_array[(5)] = G__52317);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__52318,G__52319,G__52320,G__52321,G__52322,G__52323,G__52324){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52318);

(invoc_array[(1)] = G__52319);

(invoc_array[(2)] = G__52320);

(invoc_array[(3)] = G__52321);

(invoc_array[(4)] = G__52322);

(invoc_array[(5)] = G__52323);

(invoc_array[(6)] = G__52324);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__52327,G__52328,G__52329,G__52330,G__52331,G__52332,G__52333,G__52334){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52327);

(invoc_array[(1)] = G__52328);

(invoc_array[(2)] = G__52329);

(invoc_array[(3)] = G__52330);

(invoc_array[(4)] = G__52331);

(invoc_array[(5)] = G__52332);

(invoc_array[(6)] = G__52333);

(invoc_array[(7)] = G__52334);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__52335,G__52336,G__52337,G__52338,G__52339,G__52340,G__52341,G__52342,G__52343){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52335);

(invoc_array[(1)] = G__52336);

(invoc_array[(2)] = G__52337);

(invoc_array[(3)] = G__52338);

(invoc_array[(4)] = G__52339);

(invoc_array[(5)] = G__52340);

(invoc_array[(6)] = G__52341);

(invoc_array[(7)] = G__52342);

(invoc_array[(8)] = G__52343);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__52344,G__52345,G__52346,G__52347,G__52348,G__52349,G__52350,G__52351,G__52352,G__52353){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52344);

(invoc_array[(1)] = G__52345);

(invoc_array[(2)] = G__52346);

(invoc_array[(3)] = G__52347);

(invoc_array[(4)] = G__52348);

(invoc_array[(5)] = G__52349);

(invoc_array[(6)] = G__52350);

(invoc_array[(7)] = G__52351);

(invoc_array[(8)] = G__52352);

(invoc_array[(9)] = G__52353);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__52354,G__52355,G__52356,G__52357,G__52358,G__52359,G__52360,G__52361,G__52362,G__52363,G__52364){
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

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__52367,G__52368,G__52369,G__52370,G__52371,G__52372,G__52373,G__52374,G__52375,G__52376,G__52377,G__52378){
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

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__52380,G__52381,G__52382,G__52383,G__52384,G__52385,G__52386,G__52387,G__52388,G__52389,G__52390,G__52391,G__52392){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52380);

(invoc_array[(1)] = G__52381);

(invoc_array[(2)] = G__52382);

(invoc_array[(3)] = G__52383);

(invoc_array[(4)] = G__52384);

(invoc_array[(5)] = G__52385);

(invoc_array[(6)] = G__52386);

(invoc_array[(7)] = G__52387);

(invoc_array[(8)] = G__52388);

(invoc_array[(9)] = G__52389);

(invoc_array[(10)] = G__52390);

(invoc_array[(11)] = G__52391);

(invoc_array[(12)] = G__52392);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
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
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__52413,G__52414,G__52415,G__52416,G__52417,G__52418,G__52419,G__52420,G__52421,G__52422,G__52423,G__52424,G__52425,G__52426,G__52427){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52413);

(invoc_array[(1)] = G__52414);

(invoc_array[(2)] = G__52415);

(invoc_array[(3)] = G__52416);

(invoc_array[(4)] = G__52417);

(invoc_array[(5)] = G__52418);

(invoc_array[(6)] = G__52419);

(invoc_array[(7)] = G__52420);

(invoc_array[(8)] = G__52421);

(invoc_array[(9)] = G__52422);

(invoc_array[(10)] = G__52423);

(invoc_array[(11)] = G__52424);

(invoc_array[(12)] = G__52425);

(invoc_array[(13)] = G__52426);

(invoc_array[(14)] = G__52427);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__52441,G__52442,G__52443,G__52444,G__52445,G__52446,G__52447,G__52448,G__52449,G__52450,G__52451,G__52452,G__52453,G__52454,G__52455,G__52456){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52441);

(invoc_array[(1)] = G__52442);

(invoc_array[(2)] = G__52443);

(invoc_array[(3)] = G__52444);

(invoc_array[(4)] = G__52445);

(invoc_array[(5)] = G__52446);

(invoc_array[(6)] = G__52447);

(invoc_array[(7)] = G__52448);

(invoc_array[(8)] = G__52449);

(invoc_array[(9)] = G__52450);

(invoc_array[(10)] = G__52451);

(invoc_array[(11)] = G__52452);

(invoc_array[(12)] = G__52453);

(invoc_array[(13)] = G__52454);

(invoc_array[(14)] = G__52455);

(invoc_array[(15)] = G__52456);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__52471,G__52472,G__52473,G__52474,G__52475,G__52476,G__52477,G__52478,G__52479,G__52480,G__52481,G__52482,G__52483,G__52484,G__52485,G__52486,G__52487){
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

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__52488,G__52489,G__52490,G__52491,G__52492,G__52493,G__52494,G__52495,G__52496,G__52497,G__52498,G__52499,G__52500,G__52501,G__52502,G__52503,G__52504,G__52505){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52488);

(invoc_array[(1)] = G__52489);

(invoc_array[(2)] = G__52490);

(invoc_array[(3)] = G__52491);

(invoc_array[(4)] = G__52492);

(invoc_array[(5)] = G__52493);

(invoc_array[(6)] = G__52494);

(invoc_array[(7)] = G__52495);

(invoc_array[(8)] = G__52496);

(invoc_array[(9)] = G__52497);

(invoc_array[(10)] = G__52498);

(invoc_array[(11)] = G__52499);

(invoc_array[(12)] = G__52500);

(invoc_array[(13)] = G__52501);

(invoc_array[(14)] = G__52502);

(invoc_array[(15)] = G__52503);

(invoc_array[(16)] = G__52504);

(invoc_array[(17)] = G__52505);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__52513,G__52514,G__52515,G__52516,G__52517,G__52518,G__52519,G__52520,G__52521,G__52522,G__52523,G__52524,G__52525,G__52526,G__52527,G__52528,G__52529,G__52530,G__52531){
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

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__52543,G__52544,G__52545,G__52546,G__52547,G__52548,G__52549,G__52550,G__52551,G__52552,G__52553,G__52554,G__52555,G__52556,G__52557,G__52558,G__52559,G__52560,G__52561,G__52562){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__52543);

(invoc_array[(1)] = G__52544);

(invoc_array[(2)] = G__52545);

(invoc_array[(3)] = G__52546);

(invoc_array[(4)] = G__52547);

(invoc_array[(5)] = G__52548);

(invoc_array[(6)] = G__52549);

(invoc_array[(7)] = G__52550);

(invoc_array[(8)] = G__52551);

(invoc_array[(9)] = G__52552);

(invoc_array[(10)] = G__52553);

(invoc_array[(11)] = G__52554);

(invoc_array[(12)] = G__52555);

(invoc_array[(13)] = G__52556);

(invoc_array[(14)] = G__52557);

(invoc_array[(15)] = G__52558);

(invoc_array[(16)] = G__52559);

(invoc_array[(17)] = G__52560);

(invoc_array[(18)] = G__52561);

(invoc_array[(19)] = G__52562);

while(true){
var ret__51150__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__51150__auto__)){
continue;
} else {
return ret__51150__auto__;
}
break;
}
});

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52281))));

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
var G__52958 = cljs.core.next(params__$1);
var G__52959 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__52960 = lets;
params__$1 = G__52958;
new_params = G__52959;
lets = G__52960;
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

var vec__52636 = sig;
var seq__52637 = cljs.core.seq(vec__52636);
var first__52638 = cljs.core.first(seq__52637);
var seq__52637__$1 = cljs.core.next(seq__52637);
var params = first__52638;
var body = seq__52637__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq52625){
var G__52626 = cljs.core.first(seq52625);
var seq52625__$1 = cljs.core.next(seq52625);
var G__52627 = cljs.core.first(seq52625__$1);
var seq52625__$2 = cljs.core.next(seq52625__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52626,G__52627,seq52625__$2);
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
var G__52983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__52984 = cljs.core.next(fdecls);
ret = G__52983;
fdecls = G__52984;
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
var len__5897__auto___52985 = arguments.length;
var i__5898__auto___52986 = (0);
while(true){
if((i__5898__auto___52986 < len__5897__auto___52985)){
args__5903__auto__.push((arguments[i__5898__auto___52986]));

var G__52987 = (i__5898__auto___52986 + (1));
i__5898__auto___52986 = G__52987;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq52655){
var G__52656 = cljs.core.first(seq52655);
var seq52655__$1 = cljs.core.next(seq52655);
var G__52657 = cljs.core.first(seq52655__$1);
var seq52655__$2 = cljs.core.next(seq52655__$1);
var G__52658 = cljs.core.first(seq52655__$2);
var seq52655__$3 = cljs.core.next(seq52655__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52656,G__52657,G__52658,seq52655__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52991 = arguments.length;
var i__5898__auto___52992 = (0);
while(true){
if((i__5898__auto___52992 < len__5897__auto___52991)){
args__5903__auto__.push((arguments[i__5898__auto___52992]));

var G__52993 = (i__5898__auto___52992 + (1));
i__5898__auto___52992 = G__52993;
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
var G__52995 = cljs.core.cons(f,p);
var G__52996 = cljs.core.next(args__$1);
p = G__52995;
args__$1 = G__52996;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__52997 = cljs.core.cons(f,p);
var G__52998 = cljs.core.next(args__$1);
p = G__52997;
args__$1 = G__52998;
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
var G__53002 = cljs.core.next(fd);
fd = G__53002;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__53003 = cljs.core.next(fd);
fd = G__53003;
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
var G__53004 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__53005 = cljs.core.next(ds);
acc = G__53004;
ds = G__53005;
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
var G__53006 = cljs.core.next(p);
var G__53007 = cljs.core.cons(cljs.core.first(p),d);
p = G__53006;
d = G__53007;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq52695){
var G__52696 = cljs.core.first(seq52695);
var seq52695__$1 = cljs.core.next(seq52695);
var G__52697 = cljs.core.first(seq52695__$1);
var seq52695__$2 = cljs.core.next(seq52695__$1);
var G__52698 = cljs.core.first(seq52695__$2);
var seq52695__$3 = cljs.core.next(seq52695__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52696,G__52697,G__52698,seq52695__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
