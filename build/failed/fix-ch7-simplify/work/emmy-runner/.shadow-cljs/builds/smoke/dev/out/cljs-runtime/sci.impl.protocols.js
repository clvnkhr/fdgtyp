goog.provide('sci.impl.protocols');
sci.impl.protocols.extend_default_val = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.impl.protocols","default","sci.impl.protocols/default",-1134880191,null)));
sci.impl.protocols.default_QMARK_ = (function sci$impl$protocols$default_QMARK_(_ctx,sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci.impl.protocols.extend_default_val,sym);
});
sci.impl.protocols.__GT_sigs = (function sci$impl$protocols$__GT_sigs(signatures){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51961){
var vec__51962 = p__51961;
var seq__51963 = cljs.core.seq(vec__51962);
var first__51964 = cljs.core.first(seq__51963);
var seq__51963__$1 = cljs.core.next(seq__51963);
var name = first__51964;
var arglists = seq__51963__$1;
var l = cljs.core.last(arglists);
var vec__51965 = ((typeof l === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(arglists),l], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglists,null], null));
var arglists__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51965,(0),null);
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51965,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null)], null);
}),signatures));
});
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52828 = arguments.length;
var i__5898__auto___52829 = (0);
while(true){
if((i__5898__auto___52829 < len__5897__auto___52828)){
args__5903__auto__.push((arguments[i__5898__auto___52829]));

var G__52830 = (i__5898__auto___52829 + (1));
i__5898__auto___52829 = G__52830;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__52021 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52021,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52021,(1),null);
var vec__52024 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52024,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52024,(1),null);
var sigs_map = sci.impl.protocols.__GT_sigs(signatures__$2);
var current_ns = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.current_ns_name()));
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sigs","sigs",-1653119622),null,(1),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sigs_map,null,(1),null)),(2),null)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"var","var",-769682797),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52096){
var vec__52111 = p__52096;
var seq__52112 = cljs.core.seq(vec__52111);
var first__52113 = cljs.core.first(seq__52112);
var seq__52112__$1 = cljs.core.next(seq__52112);
var method_name = first__52113;
var ___$2 = seq__52112__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_ns)),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name)));
var method_meta = cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sigs_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"arglists","arglists",1661989754)], null));
var method_meta__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(method_meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (a){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_meta__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__51970__auto__","x__51970__auto__",-40724827,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51971__auto__","args__51971__auto__",-699271823,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__51972__auto__","methods__51972__auto__",1285286600,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51970__auto__","x__51970__auto__",-40724827,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__51973__auto__","m__51973__auto__",-1295709222,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__51972__auto__","methods__51972__auto__",1285286600,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__51973__auto__","m__51973__auto__",-1295709222,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51970__auto__","x__51970__auto__",-40724827,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51971__auto__","args__51971__auto__",-699271823,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"default__51974__auto__","default__51974__auto__",-533669960,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__51974__auto__","default__51974__auto__",-533669960,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51970__auto__","x__51970__auto__",-40724827,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51971__auto__","args__51971__auto__",-699271823,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"No method ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51970__auto__","x__51970__auto__",-40724827,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__51975__auto__","x__51975__auto__",-1255861933,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51976__auto__","args__51976__auto__",-175971340,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__51977__auto__","meta__51977__auto__",1321096892,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51975__auto__","x__51975__auto__",-1255861933,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51978__auto__","method__51978__auto__",1005950537,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__51977__auto__","meta__51977__auto__",1321096892,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51978__auto__","method__51978__auto__",1005950537,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51978__auto__","method__51978__auto__",1005950537,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51975__auto__","x__51975__auto__",-1255861933,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51976__auto__","args__51976__auto__",-175971340,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method__51978__auto__","method__51978__auto__",1005950537,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51975__auto__","x__51975__auto__",-1255861933,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__51979__auto__","default__51979__auto__",-1697591200,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51978__auto__","method__51978__auto__",1005950537,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__51979__auto__","default__51979__auto__",-1697591200,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51978__auto__","method__51978__auto__",1005950537,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51975__auto__","x__51975__auto__",-1255861933,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51976__auto__","args__51976__auto__",-175971340,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51975__auto__","x__51975__auto__",-1255861933,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__51980__auto__","x__51980__auto__",-2130632041,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51981__auto__","args__51981__auto__",1056811823,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method__51982__auto__","method__51982__auto__",75723219,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51980__auto__","x__51980__auto__",-2130632041,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__51983__auto__","default__51983__auto__",-70536679,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51982__auto__","method__51982__auto__",75723219,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__51983__auto__","default__51983__auto__",-70536679,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__51982__auto__","method__51982__auto__",75723219,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51980__auto__","x__51980__auto__",-2130632041,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__51981__auto__","args__51981__auto__",1056811823,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__51980__auto__","x__51980__auto__",-2130632041,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,protocol_name,null,(1),null)),(2),null)),null,(1),null))], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq51988){
var G__51989 = cljs.core.first(seq51988);
var seq51988__$1 = cljs.core.next(seq51988);
var G__51990 = cljs.core.first(seq51988__$1);
var seq51988__$2 = cljs.core.next(seq51988__$1);
var G__51991 = cljs.core.first(seq51988__$2);
var seq51988__$3 = cljs.core.next(seq51988__$2);
var G__51992 = cljs.core.first(seq51988__$3);
var seq51988__$4 = cljs.core.next(seq51988__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51989,G__51990,G__51991,G__51992,seq51988__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52843 = arguments.length;
var i__5898__auto___52844 = (0);
while(true){
if((i__5898__auto___52844 < len__5897__auto___52843)){
args__5903__auto__.push((arguments[i__5898__auto___52844]));

var G__52845 = (i__5898__auto___52844 + (1));
i__5898__auto___52844 = G__52845;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__52429 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__52431 = null;
var count__52432 = (0);
var i__52433 = (0);
while(true){
if((i__52433 < count__52432)){
var vec__52608 = chunk__52431.cljs$core$IIndexed$_nth$arity$2(null,i__52433);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52608,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52608,(1),null);
var extend_via_metadata_52846 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_52847 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_52848 = sci.impl.types.getName(proto_ns_52847);
var pns_str_52849 = (cljs.core.truth_(extend_via_metadata_52846)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_52848)):null);
var seq__52611_52850 = cljs.core.seq(mmap);
var chunk__52612_52851 = null;
var count__52613_52852 = (0);
var i__52614_52853 = (0);
while(true){
if((i__52614_52853 < count__52613_52852)){
var vec__52621_52854 = chunk__52612_52851.cljs$core$IIndexed$_nth$arity$2(null,i__52614_52853);
var meth_name_52855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621_52854,(0),null);
var f_52856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52621_52854,(1),null);
var meth_str_52857 = cljs.core.name(meth_name_52855);
var meth_sym_52858 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_52857);
var env_52859 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52860 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52859,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52848,meth_sym_52858], null));
var multi_method_52861 = cljs.core.deref(multi_method_var_52860);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52861,atype,(cljs.core.truth_(extend_via_metadata_52846)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_52849,meth_str_52857);
return ((function (seq__52611_52850,chunk__52612_52851,count__52613_52852,i__52614_52853,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52857,meth_sym_52858,env_52859,multi_method_var_52860,multi_method_52861,vec__52621_52854,meth_name_52855,f_52856,extend_via_metadata_52846,proto_ns_52847,pns_52848,pns_str_52849,vec__52608,proto,mmap){
return (function() { 
var G__52862__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52856,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52856,this$,args);
}
};
var G__52862 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__52863__i = 0, G__52863__a = new Array(arguments.length -  1);
while (G__52863__i < G__52863__a.length) {G__52863__a[G__52863__i] = arguments[G__52863__i + 1]; ++G__52863__i;}
  args = new cljs.core.IndexedSeq(G__52863__a,0,null);
} 
return G__52862__delegate.call(this,this$,args);};
G__52862.cljs$lang$maxFixedArity = 1;
G__52862.cljs$lang$applyTo = (function (arglist__52864){
var this$ = cljs.core.first(arglist__52864);
var args = cljs.core.rest(arglist__52864);
return G__52862__delegate(this$,args);
});
G__52862.cljs$core$IFn$_invoke$arity$variadic = G__52862__delegate;
return G__52862;
})()
;
;})(seq__52611_52850,chunk__52612_52851,count__52613_52852,i__52614_52853,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52857,meth_sym_52858,env_52859,multi_method_var_52860,multi_method_52861,vec__52621_52854,meth_name_52855,f_52856,extend_via_metadata_52846,proto_ns_52847,pns_52848,pns_str_52849,vec__52608,proto,mmap))
})():f_52856));


var G__52865 = seq__52611_52850;
var G__52866 = chunk__52612_52851;
var G__52867 = count__52613_52852;
var G__52868 = (i__52614_52853 + (1));
seq__52611_52850 = G__52865;
chunk__52612_52851 = G__52866;
count__52613_52852 = G__52867;
i__52614_52853 = G__52868;
continue;
} else {
var temp__5825__auto___52869 = cljs.core.seq(seq__52611_52850);
if(temp__5825__auto___52869){
var seq__52611_52870__$1 = temp__5825__auto___52869;
if(cljs.core.chunked_seq_QMARK_(seq__52611_52870__$1)){
var c__5694__auto___52871 = cljs.core.chunk_first(seq__52611_52870__$1);
var G__52872 = cljs.core.chunk_rest(seq__52611_52870__$1);
var G__52873 = c__5694__auto___52871;
var G__52874 = cljs.core.count(c__5694__auto___52871);
var G__52875 = (0);
seq__52611_52850 = G__52872;
chunk__52612_52851 = G__52873;
count__52613_52852 = G__52874;
i__52614_52853 = G__52875;
continue;
} else {
var vec__52633_52876 = cljs.core.first(seq__52611_52870__$1);
var meth_name_52877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52633_52876,(0),null);
var f_52878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52633_52876,(1),null);
var meth_str_52879 = cljs.core.name(meth_name_52877);
var meth_sym_52880 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_52879);
var env_52881 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52882 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52881,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52848,meth_sym_52880], null));
var multi_method_52883 = cljs.core.deref(multi_method_var_52882);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52883,atype,(cljs.core.truth_(extend_via_metadata_52846)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_52849,meth_str_52879);
return ((function (seq__52611_52850,chunk__52612_52851,count__52613_52852,i__52614_52853,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52879,meth_sym_52880,env_52881,multi_method_var_52882,multi_method_52883,vec__52633_52876,meth_name_52877,f_52878,seq__52611_52870__$1,temp__5825__auto___52869,extend_via_metadata_52846,proto_ns_52847,pns_52848,pns_str_52849,vec__52608,proto,mmap){
return (function() { 
var G__52884__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52878,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52878,this$,args);
}
};
var G__52884 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__52885__i = 0, G__52885__a = new Array(arguments.length -  1);
while (G__52885__i < G__52885__a.length) {G__52885__a[G__52885__i] = arguments[G__52885__i + 1]; ++G__52885__i;}
  args = new cljs.core.IndexedSeq(G__52885__a,0,null);
} 
return G__52884__delegate.call(this,this$,args);};
G__52884.cljs$lang$maxFixedArity = 1;
G__52884.cljs$lang$applyTo = (function (arglist__52886){
var this$ = cljs.core.first(arglist__52886);
var args = cljs.core.rest(arglist__52886);
return G__52884__delegate(this$,args);
});
G__52884.cljs$core$IFn$_invoke$arity$variadic = G__52884__delegate;
return G__52884;
})()
;
;})(seq__52611_52850,chunk__52612_52851,count__52613_52852,i__52614_52853,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52879,meth_sym_52880,env_52881,multi_method_var_52882,multi_method_52883,vec__52633_52876,meth_name_52877,f_52878,seq__52611_52870__$1,temp__5825__auto___52869,extend_via_metadata_52846,proto_ns_52847,pns_52848,pns_str_52849,vec__52608,proto,mmap))
})():f_52878));


var G__52887 = cljs.core.next(seq__52611_52870__$1);
var G__52888 = null;
var G__52889 = (0);
var G__52890 = (0);
seq__52611_52850 = G__52887;
chunk__52612_52851 = G__52888;
count__52613_52852 = G__52889;
i__52614_52853 = G__52890;
continue;
}
} else {
}
}
break;
}


var G__52891 = seq__52429;
var G__52892 = chunk__52431;
var G__52893 = count__52432;
var G__52894 = (i__52433 + (1));
seq__52429 = G__52891;
chunk__52431 = G__52892;
count__52432 = G__52893;
i__52433 = G__52894;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52429);
if(temp__5825__auto__){
var seq__52429__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52429__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__52429__$1);
var G__52895 = cljs.core.chunk_rest(seq__52429__$1);
var G__52896 = c__5694__auto__;
var G__52897 = cljs.core.count(c__5694__auto__);
var G__52898 = (0);
seq__52429 = G__52895;
chunk__52431 = G__52896;
count__52432 = G__52897;
i__52433 = G__52898;
continue;
} else {
var vec__52639 = cljs.core.first(seq__52429__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52639,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52639,(1),null);
var extend_via_metadata_52899 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_52900 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_52901 = sci.impl.types.getName(proto_ns_52900);
var pns_str_52902 = (cljs.core.truth_(extend_via_metadata_52899)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_52901)):null);
var seq__52642_52903 = cljs.core.seq(mmap);
var chunk__52643_52904 = null;
var count__52644_52905 = (0);
var i__52645_52906 = (0);
while(true){
if((i__52645_52906 < count__52644_52905)){
var vec__52652_52907 = chunk__52643_52904.cljs$core$IIndexed$_nth$arity$2(null,i__52645_52906);
var meth_name_52908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52652_52907,(0),null);
var f_52909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52652_52907,(1),null);
var meth_str_52910 = cljs.core.name(meth_name_52908);
var meth_sym_52911 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_52910);
var env_52912 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52913 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52912,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52901,meth_sym_52911], null));
var multi_method_52914 = cljs.core.deref(multi_method_var_52913);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52914,atype,(cljs.core.truth_(extend_via_metadata_52899)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_52902,meth_str_52910);
return ((function (seq__52642_52903,chunk__52643_52904,count__52644_52905,i__52645_52906,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52910,meth_sym_52911,env_52912,multi_method_var_52913,multi_method_52914,vec__52652_52907,meth_name_52908,f_52909,extend_via_metadata_52899,proto_ns_52900,pns_52901,pns_str_52902,vec__52639,proto,mmap,seq__52429__$1,temp__5825__auto__){
return (function() { 
var G__52915__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52909,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52909,this$,args);
}
};
var G__52915 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__52916__i = 0, G__52916__a = new Array(arguments.length -  1);
while (G__52916__i < G__52916__a.length) {G__52916__a[G__52916__i] = arguments[G__52916__i + 1]; ++G__52916__i;}
  args = new cljs.core.IndexedSeq(G__52916__a,0,null);
} 
return G__52915__delegate.call(this,this$,args);};
G__52915.cljs$lang$maxFixedArity = 1;
G__52915.cljs$lang$applyTo = (function (arglist__52917){
var this$ = cljs.core.first(arglist__52917);
var args = cljs.core.rest(arglist__52917);
return G__52915__delegate(this$,args);
});
G__52915.cljs$core$IFn$_invoke$arity$variadic = G__52915__delegate;
return G__52915;
})()
;
;})(seq__52642_52903,chunk__52643_52904,count__52644_52905,i__52645_52906,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52910,meth_sym_52911,env_52912,multi_method_var_52913,multi_method_52914,vec__52652_52907,meth_name_52908,f_52909,extend_via_metadata_52899,proto_ns_52900,pns_52901,pns_str_52902,vec__52639,proto,mmap,seq__52429__$1,temp__5825__auto__))
})():f_52909));


var G__52918 = seq__52642_52903;
var G__52919 = chunk__52643_52904;
var G__52920 = count__52644_52905;
var G__52921 = (i__52645_52906 + (1));
seq__52642_52903 = G__52918;
chunk__52643_52904 = G__52919;
count__52644_52905 = G__52920;
i__52645_52906 = G__52921;
continue;
} else {
var temp__5825__auto___52922__$1 = cljs.core.seq(seq__52642_52903);
if(temp__5825__auto___52922__$1){
var seq__52642_52923__$1 = temp__5825__auto___52922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52642_52923__$1)){
var c__5694__auto___52924 = cljs.core.chunk_first(seq__52642_52923__$1);
var G__52925 = cljs.core.chunk_rest(seq__52642_52923__$1);
var G__52926 = c__5694__auto___52924;
var G__52927 = cljs.core.count(c__5694__auto___52924);
var G__52928 = (0);
seq__52642_52903 = G__52925;
chunk__52643_52904 = G__52926;
count__52644_52905 = G__52927;
i__52645_52906 = G__52928;
continue;
} else {
var vec__52659_52929 = cljs.core.first(seq__52642_52923__$1);
var meth_name_52930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52659_52929,(0),null);
var f_52931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52659_52929,(1),null);
var meth_str_52933 = cljs.core.name(meth_name_52930);
var meth_sym_52934 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_52933);
var env_52935 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_52936 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_52935,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_52901,meth_sym_52934], null));
var multi_method_52937 = cljs.core.deref(multi_method_var_52936);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_52937,atype,(cljs.core.truth_(extend_via_metadata_52899)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_52902,meth_str_52933);
return ((function (seq__52642_52903,chunk__52643_52904,count__52644_52905,i__52645_52906,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52933,meth_sym_52934,env_52935,multi_method_var_52936,multi_method_52937,vec__52659_52929,meth_name_52930,f_52931,seq__52642_52923__$1,temp__5825__auto___52922__$1,extend_via_metadata_52899,proto_ns_52900,pns_52901,pns_str_52902,vec__52639,proto,mmap,seq__52429__$1,temp__5825__auto__){
return (function() { 
var G__52939__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52931,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52931,this$,args);
}
};
var G__52939 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__52941__i = 0, G__52941__a = new Array(arguments.length -  1);
while (G__52941__i < G__52941__a.length) {G__52941__a[G__52941__i] = arguments[G__52941__i + 1]; ++G__52941__i;}
  args = new cljs.core.IndexedSeq(G__52941__a,0,null);
} 
return G__52939__delegate.call(this,this$,args);};
G__52939.cljs$lang$maxFixedArity = 1;
G__52939.cljs$lang$applyTo = (function (arglist__52943){
var this$ = cljs.core.first(arglist__52943);
var args = cljs.core.rest(arglist__52943);
return G__52939__delegate(this$,args);
});
G__52939.cljs$core$IFn$_invoke$arity$variadic = G__52939__delegate;
return G__52939;
})()
;
;})(seq__52642_52903,chunk__52643_52904,count__52644_52905,i__52645_52906,seq__52429,chunk__52431,count__52432,i__52433,fq,meth_str_52933,meth_sym_52934,env_52935,multi_method_var_52936,multi_method_52937,vec__52659_52929,meth_name_52930,f_52931,seq__52642_52923__$1,temp__5825__auto___52922__$1,extend_via_metadata_52899,proto_ns_52900,pns_52901,pns_str_52902,vec__52639,proto,mmap,seq__52429__$1,temp__5825__auto__))
})():f_52931));


var G__52944 = cljs.core.next(seq__52642_52923__$1);
var G__52945 = null;
var G__52946 = (0);
var G__52947 = (0);
seq__52642_52903 = G__52944;
chunk__52643_52904 = G__52945;
count__52644_52905 = G__52946;
i__52645_52906 = G__52947;
continue;
}
} else {
}
}
break;
}


var G__52948 = cljs.core.next(seq__52429__$1);
var G__52949 = null;
var G__52950 = (0);
var G__52951 = (0);
seq__52429 = G__52948;
chunk__52431 = G__52949;
count__52432 = G__52950;
i__52433 = G__52951;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq52407){
var G__52409 = cljs.core.first(seq52407);
var seq52407__$1 = cljs.core.next(seq52407);
var G__52412 = cljs.core.first(seq52407__$1);
var seq52407__$2 = cljs.core.next(seq52407__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52409,G__52412,seq52407__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__52678,default_method_QMARK_){
var vec__52679 = p__52678;
var seq__52680 = cljs.core.seq(vec__52679);
var first__52681 = cljs.core.first(seq__52680);
var seq__52680__$1 = cljs.core.next(seq__52680);
var args = first__52681;
var body = seq__52680__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,(cljs.core.truth_(default_method_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52667__auto__","farg__52667__auto__",1147142504,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__52668__auto__","m__52668__auto__",-1016465314,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52667__auto__","farg__52667__auto__",1147142504,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__52668__auto__","m__52668__auto__",-1016465314,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52667__auto__","farg__52667__auto__",1147142504,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__52671__auto__","default__52671__auto__",-1354702511,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__52671__auto__","default__52671__auto__",-1354702511,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52667__auto__","farg__52667__auto__",1147142504,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__52671__auto__","default__52671__auto__",-1354702511,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__52671__auto__","default__52671__auto__",-1354702511,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52669__auto__","meth__52669__auto__",15229950,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52675__auto__","farg__52675__auto__",-1004584106,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__52676__auto__","m__52676__auto__",1802092715,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52675__auto__","farg__52675__auto__",-1004584106,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52677__auto__","meth__52677__auto__",-629158410,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__52676__auto__","m__52676__auto__",1802092715,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52677__auto__","meth__52677__auto__",-629158410,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_single = (function sci$impl$protocols$process_single(fq,p__52720){
var vec__52721 = p__52720;
var seq__52722 = cljs.core.seq(vec__52721);
var first__52723 = cljs.core.first(seq__52722);
var seq__52722__$1 = cljs.core.next(seq__52722);
var args = first__52723;
var body = seq__52722__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52716__auto__","farg__52716__auto__",-631098967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52717__auto__","meth__52717__auto__",-1891289834,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__52716__auto__","farg__52716__auto__",-631098967,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__52718__auto__","default__52718__auto__",-1089713698,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__52718__auto__","default__52718__auto__",-1089713698,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52717__auto__","meth__52717__auto__",-1891289834,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__52717__auto__","meth__52717__auto__",-1891289834,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(ctx,type,meths,protocol_ns,extend_via_metadata){
var default_method_QMARK_ = sci.impl.protocols.default_QMARK_(ctx,type);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52729){
var vec__52730 = p__52729;
var seq__52731 = cljs.core.seq(vec__52730);
var first__52732 = cljs.core.first(seq__52731);
var seq__52731__$1 = cljs.core.next(seq__52731);
var meth_name = first__52732;
var fn_body = seq__52731__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body,default_method_QMARK_):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52727_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__52727_SHARP_,default_method_QMARK_);
}),fn_body)):((default_method_QMARK_)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single(fq,fn_body):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52728_SHARP_){
return sci.impl.protocols.process_single(fq,p1__52728_SHARP_);
}),fn_body)):fn_body
));
if(default_method_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),fn_body__$1], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}
}),meths);
});
sci.impl.protocols.cljs_type_symbols = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"default","default",-347290801,null),sci.impl.protocols.extend_default_val,new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null)], null);
sci.impl.protocols.type__GT_str = (function sci$impl$protocols$type__GT_str(t){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t));
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5903__auto__ = [];
var len__5897__auto___52988 = arguments.length;
var i__5898__auto___52989 = (0);
while(true){
if((i__5898__auto___52989 < len__5897__auto___52988)){
args__5903__auto__.push((arguments[i__5898__auto___52989]));

var G__52990 = (i__5898__auto___52989 + (1));
i__5898__auto___52989 = G__52990;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,ctx,protocol_name,impls){
var print_writer_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),protocol_name);
var impls__$1 = sci.impl.utils.split_when((function (p1__52737_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__52737_SHARP_)));
}),impls);
var protocol_var = (function (){var or__5162__auto__ = (function (){var G__52770 = ctx;
var G__52771 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__52772 = protocol_name;
var fexpr__52769 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__52769.cljs$core$IFn$_invoke$arity$3 ? fexpr__52769.cljs$core$IFn$_invoke$arity$3(G__52770,G__52771,G__52772) : fexpr__52769.call(null,G__52770,G__52771,G__52772));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var or__5162__auto____$1 = ((print_writer_QMARK_)?new cljs.core.Keyword("sci.impl.protocols","IPrintWithWriter","sci.impl.protocols/IPrintWithWriter",1832791161):null);
if(cljs.core.truth_(or__5162__auto____$1)){
return or__5162__auto____$1;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Protocol not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)),form);
}
}
})();
var protocol_data = ((sci.impl.utils.var_QMARK_(protocol_var))?cljs.core.deref(protocol_var):null);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = (((protocol_var instanceof cljs.core.Keyword))?"sci.impl.protocols":(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns))));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52779){
var vec__52780 = p__52779;
var seq__52781 = cljs.core.seq(vec__52780);
var first__52782 = cljs.core.first(seq__52781);
var seq__52781__$1 = cljs.core.next(seq__52781);
var type = first__52782;
var meths = seq__52781__$1;
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sci.impl.protocols.cljs_type_symbols,type,type);
if(print_writer_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-meta!","cljs.core/alter-meta!",574694262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,type__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","print-method","sci.impl/print-method",281191566),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest(cljs.core.first(meths))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-var-root","cljs.core/alter-var-root",-1342668238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.protocols","type->str","sci.impl.protocols/type->str",1214133319,null),null,(1),null)),(new cljs.core.List(null,type__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.protocols.process_methods(ctx,type__$1,meths,pns,extend_via_metadata)], 0))));
}
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq52740){
var G__52741 = cljs.core.first(seq52740);
var seq52740__$1 = cljs.core.next(seq52740);
var G__52742 = cljs.core.first(seq52740__$1);
var seq52740__$2 = cljs.core.next(seq52740__$1);
var G__52743 = cljs.core.first(seq52740__$2);
var seq52740__$3 = cljs.core.next(seq52740__$2);
var G__52744 = cljs.core.first(seq52740__$3);
var seq52740__$4 = cljs.core.next(seq52740__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52741,G__52742,G__52743,G__52744,seq52740__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5903__auto__ = [];
var len__5897__auto___53015 = arguments.length;
var i__5898__auto___53016 = (0);
while(true){
if((i__5898__auto___53016 < len__5897__auto___53015)){
args__5903__auto__.push((arguments[i__5898__auto___53016]));

var G__53017 = (i__5898__auto___53016 + (1));
i__5898__auto___53016 = G__53017;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((4) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5904__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (form,_env,ctx,atype,proto_PLUS_meths){
var atype__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sci.impl.protocols.cljs_type_symbols,atype,atype);
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__52789_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__52789_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52800){
var vec__52801 = p__52800;
var seq__52802 = cljs.core.seq(vec__52801);
var first__52803 = cljs.core.first(seq__52802);
var seq__52802__$1 = cljs.core.next(seq__52802);
var proto = first__52803;
var meths = seq__52802__$1;
var protocol_var = (function (){var or__5162__auto__ = (function (){var G__52805 = ctx;
var G__52806 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__52807 = proto;
var fexpr__52804 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__52804.cljs$core$IFn$_invoke$arity$3 ? fexpr__52804.cljs$core$IFn$_invoke$arity$3(G__52805,G__52806,G__52807) : fexpr__52804.call(null,G__52805,G__52806,G__52807));
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((""+"Protocol not found: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto)),form);
}
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns)));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-var-root","cljs.core/alter-var-root",-1342668238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,proto,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.protocols","type->str","sci.impl.protocols/type->str",1214133319,null),null,(1),null)),(new cljs.core.List(null,atype__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.protocols.process_methods(ctx,atype__$1,meths,pns,extend_via_metadata)], 0))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq52790){
var G__52791 = cljs.core.first(seq52790);
var seq52790__$1 = cljs.core.next(seq52790);
var G__52792 = cljs.core.first(seq52790__$1);
var seq52790__$2 = cljs.core.next(seq52790__$1);
var G__52793 = cljs.core.first(seq52790__$2);
var seq52790__$3 = cljs.core.next(seq52790__$2);
var G__52794 = cljs.core.first(seq52790__$3);
var seq52790__$4 = cljs.core.next(seq52790__$3);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52791,G__52792,G__52793,G__52794,seq52790__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
var or__5162__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"satisfies","satisfies",-311664218).cljs$core$IFn$_invoke$arity$1(protocol);
if(cljs.core.truth_(temp__5825__auto__)){
var sats = temp__5825__auto__;
var or__5162__auto__ = cljs.core.contains_QMARK_(sats,sci.impl.protocols.extend_default_val);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var temp__5825__auto____$1 = sci.impl.types.type_impl(obj);
if(cljs.core.truth_(temp__5825__auto____$1)){
var t = temp__5825__auto____$1;
return cljs.core.contains_QMARK_(sats,sci.impl.protocols.type__GT_str(t));
} else {
return null;
}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.boolean$(cljs.core.some((function (p1__52810_SHARP_){
var temp__5825__auto__ = cljs.core.get_method(p1__52810_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var ms = cljs.core.methods$(p1__52810_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5162__auto__ = (function (){var and__5160__auto__ = p;
if(cljs.core.truth_(and__5160__auto__)){
var pred__52813 = cljs.core._EQ_;
var expr__52814 = p;
if(cljs.core.truth_((pred__52813.cljs$core$IFn$_invoke$arity$2 ? pred__52813.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__52814) : pred__52813.call(null,cljs.core.IDeref,expr__52814)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__52813.cljs$core$IFn$_invoke$arity$2 ? pred__52813.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__52814) : pred__52813.call(null,cljs.core.ISwap,expr__52814)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__52813.cljs$core$IFn$_invoke$arity$2 ? pred__52813.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__52814) : pred__52813.call(null,cljs.core.IReset,expr__52814)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
if(cljs.core.truth_((pred__52813.cljs$core$IFn$_invoke$arity$2 ? pred__52813.cljs$core$IFn$_invoke$arity$2(cljs.core.IRecord,expr__52814) : pred__52813.call(null,cljs.core.IRecord,expr__52814)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IRecord$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,obj);
}
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52814))));
}
}
}
}
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if((clazz instanceof sci.lang.Type)){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.sci$impl$types$SciTypeInstance$))))?true:false):false)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,x.sci$impl$types$SciTypeInstance$_get_type$arity$1(null));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
}
} else {
if(cljs.core.map_QMARK_(clazz)){
return sci.impl.protocols.satisfies_QMARK_(clazz,x);
} else {
return (x instanceof clazz);

}
}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__52824_SHARP_){
return cljs.core.get_method(p1__52824_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
