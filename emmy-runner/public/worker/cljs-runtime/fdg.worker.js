import "./cljs_env.js";
import "./cljs.core.js";
import "./clojure.string.js";
import "./emmy.sci.js";
import "./fdg.compat.js";
import "./fdg.output.js";
import "./sci.core.js";
import "./sci.impl.vars.js";
goog.provide('fdg.worker');
if((typeof fdg !== 'undefined') && (typeof fdg.worker !== 'undefined') && (typeof fdg.worker.context !== 'undefined')){
} else {
fdg.worker.context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof fdg !== 'undefined') && (typeof fdg.worker !== 'undefined') && (typeof fdg.worker.session_definitions !== 'undefined')){
} else {
fdg.worker.session_definitions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof fdg !== 'undefined') && (typeof fdg.worker !== 'undefined') && (typeof fdg.worker.manifest !== 'undefined')){
} else {
fdg.worker.manifest = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof fdg !== 'undefined') && (typeof fdg.worker !== 'undefined') && (typeof fdg.worker.chapter !== 'undefined')){
} else {
fdg.worker.chapter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
fdg.worker.eval_session_BANG_ = (function fdg$worker$eval_session_BANG_(ctx,code){
return sci.core.eval_string_STAR_(ctx,(""+"(in-ns 'fdg.session)\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)));
});
fdg.worker.book_definitions = (function fdg$worker$book_definitions(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"definitions","definitions",167529986),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54455_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fdg.worker.chapter),new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(p1__54455_SHARP_));
}),cljs.core.deref(fdg.worker.manifest))], 0)));
});
fdg.worker.new_context = (function fdg$worker$new_context(){
var compat_ns = sci.core._copy_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"general-Cartan-2","general-Cartan-2",-2086659920,null),new cljs.core.Symbol(null,"b-rect","b-rect",1077637592,null),new cljs.core.Symbol(null,"home","home",1565974218,null),new cljs.core.Symbol(null,"Y","Y",1079814171,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tensor-test","tensor-test",187752200,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tensor","tensor",1601942578,null),new cljs.core.Symbol(null,"types","types",-2064405130,null),new cljs.core.Symbol(null,"coordsys","coordsys",1968681528,null)], null)))], null)),new cljs.core.Symbol(null,"V","V",471247521,null),cljs.core.with_meta(new cljs.core.Symbol(null,"list-with-substituted-coord","list-with-substituted-coord",-1329045151,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)),new cljs.core.Symbol(null,"make-operator","make-operator",329621074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"verified-zero","verified-zero",660336789,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return `result` only after every primitive component of `checks` is zero."], null)),new cljs.core.Symbol(null,"e-z","e-z",1419791519,null),new cljs.core.Symbol(null,"dtheta","dtheta",1661610920,null),new cljs.core.Symbol(null,"R3-rect-point","R3-rect-point",1857913198,null),new cljs.core.Symbol(null,"Chi","Chi",-16571792,null),new cljs.core.Symbol(null,"R2-rect-point","R2-rect-point",888813323,null),cljs.core.with_meta(new cljs.core.Symbol(null,"show-expression","show-expression",-130780463,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)),new cljs.core.Symbol(null,"U","U",-1292433725,null),cljs.core.with_meta(new cljs.core.Symbol(null,"polynomially-verified-zero","polynomially-verified-zero",-1277430904,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expression","expression",1842843403,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prove an expression is exactly zero without rational-function GCD reduction."], null)),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"dx","dx",1258734795,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"sphere-Cartan","sphere-Cartan",22089635,null),new cljs.core.Symbol(null,"velocity","velocity",1059007172,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"X","X",-948439456,null),cljs.core.with_meta(new cljs.core.Symbol(null,"theta","theta",1213021269,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null)))], null)),new cljs.core.Symbol(null,"dz","dz",-1767195007,null),new cljs.core.Symbol(null,"invert","invert",-1100858266,null),cljs.core.with_meta(new cljs.core.Symbol(null,"phi","phi",113733223,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null)))], null)),new cljs.core.Symbol(null,"d:dtheta","d:dtheta",-1892317928,null),new cljs.core.Symbol(null,"coordinates","coordinates",415198859,null),new cljs.core.Symbol(null,"d:dz","d:dz",865012999,null),new cljs.core.Symbol(null,"nabla","nabla",1447510358,null),new cljs.core.Symbol(null,"S2-Christoffel","S2-Christoffel",-766457879,null),new cljs.core.Symbol(null,"procedure->nform-field","procedure->nform-field",-1750081268,null),new cljs.core.Symbol(null,"R2->R","R2->R",528931499,null),new cljs.core.Symbol(null,"d:dx","d:dx",-480661756,null),new cljs.core.Symbol(null,"d:dphi","d:dphi",1911345419,null),cljs.core.with_meta(new cljs.core.Symbol(null,"sigma","sigma",1576815824,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"low","low",39169118,null),new cljs.core.Symbol(null,"high","high",-627137961,null)], null)))], null)),new cljs.core.Symbol(null,"coordinate","coordinate",1527720318,null),new cljs.core.Symbol(null,"Lagrange-explicit","Lagrange-explicit",-1141246706,null),new cljs.core.Symbol(null,"Chi-inverse","Chi-inverse",-695342219,null),new cljs.core.Symbol(null,"dy","dy",-934888526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"for-each","for-each",25907877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"values","values",2013177083,null)], null)))], null)),new cljs.core.Symbol(null,"e-x","e-x",-1927627058,null),new cljs.core.Symbol(null,"e-y","e-y",-2078808304,null),new cljs.core.Symbol(null,"dphi","dphi",-927349426,null),new cljs.core.Symbol(null,"d:dy","d:dy",-1032237564,null),new cljs.core.Symbol(null,"R4-rect-point","R4-rect-point",92161849,null),cljs.core.with_meta(new cljs.core.Symbol(null,"unsupported!","unsupported!",1950464583,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block-id","block-id",1569948693,null),new cljs.core.Symbol(null,"explanation","explanation",213918919,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks a known compatibility gap without allowing a misleading result."], null)),new cljs.core.Symbol(null,"R2-rect-basis","R2-rect-basis",-1853493737,null),cljs.core.with_meta(new cljs.core.Symbol(null,"show","show",1063825638,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Identity helper useful while inspecting intermediate values in SCI."], null)),new cljs.core.Symbol(null,"d:dt","d:dt",-164713113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"legacy-frame-maker","legacy-frame-maker",1103070879,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coordinates->event","coordinates->event",-433358088,null),new cljs.core.Symbol(null,"event->coordinates","event->coordinates",2075785453,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol."], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"pair?","pair?",181399999,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)))], null)),new cljs.core.Symbol(null,"S2-basis","S2-basis",-1073033658,null),new cljs.core.Symbol(null,"omega","omega",1917797179,null),new cljs.core.Symbol(null,"get-rank","get-rank",1510807712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"patch","patch",2021306636,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patch-name","patch-name",433729698,null),new cljs.core.Symbol(null,"manifold-value","manifold-value",-191911052,null)], null)))], null)),new cljs.core.Symbol(null,"transform-stereographic-Christoffel-to-spherical","transform-stereographic-Christoffel-to-spherical",1072843733,null),new cljs.core.Symbol(null,"procedure->oneform-field","procedure->oneform-field",-501922340,null),cljs.core.with_meta(new cljs.core.Symbol(null,"coordinate-system","coordinate-system",342184256,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"system-name","system-name",-1579875237,null),new cljs.core.Symbol(null,"patch-value","patch-value",-713993264,null)], null)))], null)),new cljs.core.Symbol(null,"Cartan","Cartan",-1256546560,null),new cljs.core.Symbol(null,"d:dtau","d:dtau",391051816,null),new cljs.core.Symbol(null,"procedure->vector-field","procedure->vector-field",1307696776,null),cljs.core.with_meta(new cljs.core.Symbol(null,"series:for-each","series:for-each",-848989576,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"series","series",-2053725075,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null)))], null)),new cljs.core.Symbol(null,"Z","Z",2099656115,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"T","T",1815772404,null),new cljs.core.Symbol(null,"spherical->stereographic","spherical->stereographic",480143332,null),new cljs.core.Symbol(null,"velocities","velocities",1008302579,null)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","general-Cartan-2","fdg.compat/general-Cartan-2",1585098267,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.general_Cartan_2,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","b-rect","fdg.compat/b-rect",2087574583,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.b_rect,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","home","fdg.compat/home",-1733544845,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.home,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Y","fdg.compat/Y",208271042,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Y,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","tensor-test","fdg.compat/tensor-test",1197966817,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.tensor_test,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tensor","tensor",1601942578,null),new cljs.core.Symbol(null,"types","types",-2064405130,null),new cljs.core.Symbol(null,"coordsys","coordsys",1968681528,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","V","fdg.compat/V",1344402440,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.V,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","list-with-substituted-coord","fdg.compat/list-with-substituted-coord",2090719128,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.list_with_substituted_coord,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","make-operator","fdg.compat/make-operator",-699190215,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.make_operator,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","verified-zero","fdg.compat/verified-zero",-527343748,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.verified_zero,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"checks","checks",-2128301132,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return `result` only after every primitive component of `checks` is zero."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","e-z","fdg.compat/e-z",-1821443528,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.e_z,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dtheta","fdg.compat/dtheta",-1086361343,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dtheta,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R3-rect-point","fdg.compat/R3-rect-point",-1419235529,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R3_rect_point,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Chi","fdg.compat/Chi",861507547,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Chi,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R2-rect-point","fdg.compat/R2-rect-point",1219550692,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R2_rect_point,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","show-expression","fdg.compat/show-expression",1002514744,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.show_expression,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","U","fdg.compat/U",1295675514,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.U,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","polynomially-verified-zero","fdg.compat/polynomially-verified-zero",1996572243,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.polynomially_verified_zero,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"expression","expression",1842843403,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prove an expression is exactly zero without rational-function GCD reduction."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","time","fdg.compat/time",1907201336,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.time,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dx","fdg.compat/dx",-2016383326,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dx,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","f","fdg.compat/f",1323364646,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.f,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","sphere-Cartan","fdg.compat/sphere-Cartan",1570664924,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.sphere_Cartan,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","velocity","fdg.compat/velocity",-54497105,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.velocity,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","m","fdg.compat/m",-1899718359,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.m,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","X","fdg.compat/X",77745609,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.X,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","theta","fdg.compat/theta",-1936176580,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.theta,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dz","fdg.compat/dz",1515279720,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dz,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","invert","fdg.compat/invert",2050812365,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.invert,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","phi","fdg.compat/phi",-1030638656,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.phi,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"point","point",-841237505,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dtheta","fdg.compat/d:dtheta",-880845967,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dtheta,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","coordinates","fdg.compat/coordinates",619287396,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.coordinates,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dz","fdg.compat/d:dz",2009462750,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dz,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","nabla","fdg.compat/nabla",302618431,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.nabla,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","S2-Christoffel","fdg.compat/S2-Christoffel",395972934,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.S2_Christoffel,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","procedure->nform-field","fdg.compat/procedure->nform-field",-395035691,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.procedure__GT_nform_field,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R2->R","fdg.compat/R2->R",-1031951248,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R2__GT_R,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dx","fdg.compat/d:dx",-1483811345,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dx,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dphi","fdg.compat/d:dphi",-1113519152,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dphi,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","sigma","fdg.compat/sigma",-1716348229,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.sigma,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"low","low",39169118,null),new cljs.core.Symbol(null,"high","high",-627137961,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","coordinate","fdg.compat/coordinate",398750489,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.coordinate,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Lagrange-explicit","fdg.compat/Lagrange-explicit",-13335593,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Lagrange_explicit,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Chi-inverse","fdg.compat/Chi-inverse",427234524,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Chi_inverse,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dy","fdg.compat/dy",-1938035347,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dy,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","for-each","fdg.compat/for-each",-977143794,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.for_each,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"values","values",2013177083,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","e-x","fdg.compat/e-x",1230102679,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.e_x,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","e-y","fdg.compat/e-y",1238191611,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.e_y,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","dphi","fdg.compat/dphi",-1929957131,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.dphi,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dy","fdg.compat/d:dy",-30149533,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dy,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R4-rect-point","fdg.compat/R4-rect-point",1235808480,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R4_rect_point,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","unsupported!","fdg.compat/unsupported!",947310766,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.unsupported_BANG_,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"block-id","block-id",1569948693,null),new cljs.core.Symbol(null,"explanation","explanation",213918919,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Marks a known compatibility gap without allowing a misleading result."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","R2-rect-basis","fdg.compat/R2-rect-basis",-715438864,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.R2_rect_basis,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","show","fdg.compat/show",-81400129,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.show,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Identity helper useful while inspecting intermediate values in SCI."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dt","fdg.compat/d:dt",845354814,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dt,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","legacy-frame-maker","fdg.compat/legacy-frame-maker",99955524,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.legacy_frame_maker,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coordinates->event","coordinates->event",-433358088,null),new cljs.core.Symbol(null,"event->coordinates","event->coordinates",2075785453,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adapts FDG's variadic scmutils frame-maker protocol to Emmy's parameter-map protocol."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","pair?","fdg.compat/pair?",-694592668,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.pair_QMARK_,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","S2-basis","fdg.compat/S2-basis",-63937491,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.S2_basis,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","omega","fdg.compat/omega",-1316743532,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.omega,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","get-rank","fdg.compat/get-rank",-1638776309,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.get_rank,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","patch","fdg.compat/patch",-1137424539,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.patch,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"patch-name","patch-name",433729698,null),new cljs.core.Symbol(null,"manifold-value","manifold-value",-191911052,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","transform-stereographic-Christoffel-to-spherical","fdg.compat/transform-stereographic-Christoffel-to-spherical",1137309116,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.transform_stereographic_Christoffel_to_spherical,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","procedure->oneform-field","fdg.compat/procedure->oneform-field",669526919,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.procedure__GT_oneform_field,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","coordinate-system","fdg.compat/coordinate-system",-775974997,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.coordinate_system,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"system-name","system-name",-1579875237,null),new cljs.core.Symbol(null,"patch-value","patch-value",-713993264,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Cartan","fdg.compat/Cartan",1900921195,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Cartan,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","d:dtau","fdg.compat/d:dtau",1796286451,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.d_COLON_dtau,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","procedure->vector-field","fdg.compat/procedure->vector-field",-1874892461,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.procedure__GT_vector_field,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","series:for-each","fdg.compat/series:for-each",19440673,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.series_COLON_for_each,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"series","series",-2053725075,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)], null))], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","Z","fdg.compat/Z",955499372,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.Z,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","g","fdg.compat/g",230125905,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.g,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","T","fdg.compat/T",678482515,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.T,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","spherical->stereographic","fdg.compat/spherical->stereographic",-800017987,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.spherical__GT_stereographic,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("fdg.compat","velocities","fdg.compat/velocities",-128733350,null),new cljs.core.Keyword(null,"val","val",128701612),fdg.compat.velocities,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.PersistentArrayMap.EMPTY], null)]),sci.core.create_ns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"fdg.compat","fdg.compat",-2137491212,null)));
var config = cljs.core.update.cljs$core$IFn$_invoke$arity$5(emmy.sci.config,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,new cljs.core.Symbol(null,"fdg.compat","fdg.compat",-2137491212,null),compat_ns);
var ctx = sci.core.init(config);
var referred_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.key)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(emmy.sci.namespaces,new cljs.core.Symbol(null,"emmy.env","emmy.env",-2036137056,null)),compat_ns));
var local_definitions = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54468_SHARP_){
return cljs.core.contains_QMARK_(referred_names,p1__54468_SHARP_);
}),fdg.worker.book_definitions());
var emmy_symbols = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(emmy.sci.namespaces,new cljs.core.Symbol(null,"emmy.env","emmy.env",-2036137056,null))))));
var setup = (""+"(ns fdg.session "+"(:refer-clojure :exclude [+ - * / = compare zero? ref partial numerator denominator]) "+"(:require [emmy.env :refer ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(emmy_symbols)+"]] "+"[fdg.compat :refer :all]))\n"+"(declare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(local_definitions)))+")");
sci.core.eval_string_STAR_(ctx,setup);

return ctx;
});
fdg.worker.reset_context_BANG_ = (function fdg$worker$reset_context_BANG_(){
cljs.core.reset_BANG_(fdg.worker.session_definitions,cljs.core.PersistentHashSet.EMPTY);

return cljs.core.reset_BANG_(fdg.worker.context,fdg.worker.new_context());
});
fdg.worker.prepare_block_BANG_ = (function fdg$worker$prepare_block_BANG_(block){
var seq__54472_54494 = cljs.core.seq(new cljs.core.Keyword(null,"definitions","definitions",167529986).cljs$core$IFn$_invoke$arity$1(block));
var chunk__54473_54495 = null;
var count__54474_54496 = (0);
var i__54475_54497 = (0);
while(true){
if((i__54475_54497 < count__54474_54496)){
var definition_54498 = chunk__54473_54495.cljs$core$IIndexed$_nth$arity$2(null,i__54475_54497);
if(cljs.core.contains_QMARK_(cljs.core.deref(fdg.worker.session_definitions),definition_54498)){
} else {
fdg.worker.eval_session_BANG_(cljs.core.deref(fdg.worker.context),(""+"(ns-unmap 'fdg.session '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(definition_54498)+")"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fdg.worker.session_definitions,cljs.core.conj,definition_54498);


var G__54499 = seq__54472_54494;
var G__54500 = chunk__54473_54495;
var G__54501 = count__54474_54496;
var G__54502 = (i__54475_54497 + (1));
seq__54472_54494 = G__54499;
chunk__54473_54495 = G__54500;
count__54474_54496 = G__54501;
i__54475_54497 = G__54502;
continue;
} else {
var temp__5825__auto___54503 = cljs.core.seq(seq__54472_54494);
if(temp__5825__auto___54503){
var seq__54472_54504__$1 = temp__5825__auto___54503;
if(cljs.core.chunked_seq_QMARK_(seq__54472_54504__$1)){
var c__5694__auto___54505 = cljs.core.chunk_first(seq__54472_54504__$1);
var G__54506 = cljs.core.chunk_rest(seq__54472_54504__$1);
var G__54507 = c__5694__auto___54505;
var G__54508 = cljs.core.count(c__5694__auto___54505);
var G__54509 = (0);
seq__54472_54494 = G__54506;
chunk__54473_54495 = G__54507;
count__54474_54496 = G__54508;
i__54475_54497 = G__54509;
continue;
} else {
var definition_54510 = cljs.core.first(seq__54472_54504__$1);
if(cljs.core.contains_QMARK_(cljs.core.deref(fdg.worker.session_definitions),definition_54510)){
} else {
fdg.worker.eval_session_BANG_(cljs.core.deref(fdg.worker.context),(""+"(ns-unmap 'fdg.session '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(definition_54510)+")"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fdg.worker.session_definitions,cljs.core.conj,definition_54510);


var G__54511 = cljs.core.next(seq__54472_54504__$1);
var G__54512 = null;
var G__54513 = (0);
var G__54514 = (0);
seq__54472_54494 = G__54511;
chunk__54473_54495 = G__54512;
count__54474_54496 = G__54513;
i__54475_54497 = G__54514;
continue;
}
} else {
}
}
break;
}

if(cljs.core.seq(new cljs.core.Keyword(null,"definitions","definitions",167529986).cljs$core$IFn$_invoke$arity$1(block))){
return fdg.worker.eval_session_BANG_(cljs.core.deref(fdg.worker.context),(""+"(declare "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"definitions","definitions",167529986).cljs$core$IFn$_invoke$arity$1(block)))+")"));
} else {
return null;
}
});
fdg.worker.value_kind = (function fdg$worker$value_kind(value){
if((value == null)){
return "nil";
} else {
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
if(cljs.core.boolean_QMARK_(value)){
return "boolean";
} else {
if(typeof value === 'number'){
return "number";
} else {
if(typeof value === 'string'){
return "string";
} else {
if((value instanceof cljs.core.Keyword)){
return "keyword";
} else {
if((value instanceof cljs.core.Symbol)){
return "symbol";
} else {
if(cljs.core.map_QMARK_(value)){
return "map";
} else {
if(cljs.core.vector_QMARK_(value)){
return "vector";
} else {
if(cljs.core.set_QMARK_(value)){
return "set";
} else {
if(cljs.core.sequential_QMARK_(value)){
return "sequence";
} else {
return "object";

}
}
}
}
}
}
}
}
}
}
}
});
fdg.worker.collection_shape = (function fdg$worker$collection_shape(value){
if(cljs.core.coll_QMARK_(value)){
var bounded_size = ((cljs.core.sequential_QMARK_(value))?cljs.core.bounded_count((1001),value):cljs.core.count(value));
var size = (((bounded_size > (1000)))?"1000+":bounded_size);
var child = ((((cljs.core.sequential_QMARK_(value)) && (cljs.core.seq(value))))?(function (){var G__54476 = cljs.core.first(value);
return (fdg.worker.collection_shape.cljs$core$IFn$_invoke$arity$1 ? fdg.worker.collection_shape.cljs$core$IFn$_invoke$arity$1(G__54476) : fdg.worker.collection_shape.call(null,G__54476));
})():null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(child)?(""+" \u00D7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child)):null)));
} else {
return null;
}
});
fdg.worker.safe_preview = (function fdg$worker$safe_preview(value){
try{var rendered = ((cljs.core.fn_QMARK_(value))?"<function>":fdg.output.pr_str_native(value));
if((((rendered).length) > (600))){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(rendered,(0),(600)))+"\u2026");
} else {
return rendered;
}
}catch (e54477){var _ = e54477;
return "<value cannot be printed safely>";
}});
fdg.worker.describe_var = (function fdg$worker$describe_var(sci_var){
var metadata = cljs.core.meta(sci_var);
var bound_QMARK_ = sci.impl.vars.hasRoot(sci_var);
var value = (cljs.core.truth_(bound_QMARK_)?(function (){try{return cljs.core.deref(sci_var);
}catch (e54478){var _ = e54478;
return null;
}})():null);
var kind = (cljs.core.truth_(bound_QMARK_)?fdg.worker.value_kind(value):"unbound");
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-name","qualified-name",1344519846),new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"macro?","macro?",-1327433674),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"namespace","namespace",-377510372)],[(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(metadata))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata))),new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(metadata) === true,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata))),(cljs.core.truth_(bound_QMARK_)?fdg.worker.safe_preview(value):"<declared, but not defined yet>"),kind,new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(metadata) === true,(cljs.core.truth_(bound_QMARK_)?fdg.worker.collection_shape(value):null),(function (){var G__54479 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(metadata);
if((G__54479 == null)){
return null;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__54479], 0));
}
})(),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(metadata),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(metadata)))]);
});
fdg.worker.inspection_namespaces = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fdg.session","emmy.env","fdg.compat"], null);
fdg.worker.inspect_symbol = (function fdg$worker$inspect_symbol(token){
if(cljs.core.truth_((function (){var and__5160__auto__ = cljs.core.deref(fdg.worker.context);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.seq(token);
} else {
return and__5160__auto__;
}
})())){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(token);
var resolved = (function (){var or__5162__auto__ = sci.core.resolve(cljs.core.deref(fdg.worker.context),sym);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.truth_(cljs.core.namespace(sym))){
return null;
} else {
return cljs.core.some((function (p1__54480_SHARP_){
return sci.core.resolve(cljs.core.deref(fdg.worker.context),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(p1__54480_SHARP_,token));
}),fdg.worker.inspection_namespaces);
}
}
})();
var G__54481 = resolved;
if((G__54481 == null)){
return null;
} else {
return fdg.worker.describe_var(G__54481);
}
} else {
return null;
}
});
fdg.worker.namespace_names = (function fdg$worker$namespace_names(){
return cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__54482_SHARP_){
var G__54483 = p1__54482_SHARP_;
var G__54483__$1 = (((G__54483 == null))?null:cljs.core.meta(G__54483));
var G__54483__$2 = (((G__54483__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__54483__$1));
if((G__54483__$2 == null)){
return null;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54483__$2));
}
}),sci.core.all_ns(cljs.core.deref(fdg.worker.context))))));
});
fdg.worker.namespace_entries = (function fdg$worker$namespace_entries(namespace_name){
try{return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.map.cljs$core$IFn$_invoke$arity$2(fdg.worker.describe_var,cljs.core.vals(fdg.worker.eval_session_BANG_(cljs.core.deref(fdg.worker.context),(""+"(ns-publics '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace_name)+")"))))));
}catch (e54484){var _ = e54484;
return cljs.core.PersistentVector.EMPTY;
}});
fdg.worker.run_blocks_BANG_ = (function fdg$worker$run_blocks_BANG_(blocks){
fdg.worker.reset_context_BANG_();

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__54485){
var map__54486 = p__54485;
var map__54486__$1 = cljs.core.__destructure_map(map__54486);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54486__$1,new cljs.core.Keyword(null,"block","block",664686210));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54486__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"backgroundSetup","backgroundSetup",1351711523).cljs$core$IFn$_invoke$arity$1(block);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"executable","executable",1478603659).cljs$core$IFn$_invoke$arity$1(block));
}
})())){
return null;
} else {
try{fdg.worker.prepare_block_BANG_(block);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"captured?","captured?",-327560235),new cljs.core.Keyword(null,"capturesResult","capturesResult",-1776961836).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"value","value",305978217),fdg.output.pr_str_native(fdg.worker.eval_session_BANG_(cljs.core.deref(fdg.worker.context),code))], null);
}catch (e54487){var error = e54487;
(error["fdgBlockId"] = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(block));

throw error;
}}
}),null,blocks);
});
fdg.worker.dispatch_BANG_ = (function fdg$worker$dispatch_BANG_(p__54488){
var map__54489 = p__54488;
var map__54489__$1 = cljs.core.__destructure_map(map__54489);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54489__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54489__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var G__54490 = op;
switch (G__54490) {
case "init":
cljs.core.reset_BANG_(fdg.worker.manifest,new cljs.core.Keyword(null,"manifest","manifest",-1386791956).cljs$core$IFn$_invoke$arity$1(payload));

cljs.core.reset_BANG_(fdg.worker.chapter,new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(payload));

fdg.worker.reset_context_BANG_();

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),fdg.worker.namespace_names()], null);

break;
case "reset":
cljs.core.reset_BANG_(fdg.worker.chapter,new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(payload));

fdg.worker.reset_context_BANG_();

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),fdg.worker.namespace_names()], null);

break;
case "run":
cljs.core.reset_BANG_(fdg.worker.chapter,new cljs.core.Keyword(null,"chapter","chapter",-238644368).cljs$core$IFn$_invoke$arity$1(payload));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__5162__auto__ = fdg.worker.run_blocks_BANG_(new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(payload));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),fdg.worker.namespace_names());

break;
case "eval":
var map__54491 = payload;
var map__54491__$1 = cljs.core.__destructure_map(map__54491);
var block = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"block","block",664686210));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54491__$1,new cljs.core.Keyword(null,"code","code",1586293142));
fdg.worker.prepare_block_BANG_(block);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),fdg.output.pr_str_native(fdg.worker.eval_session_BANG_(cljs.core.deref(fdg.worker.context),code)),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),fdg.worker.namespace_names()], null);

break;
case "inspect":
return fdg.worker.inspect_symbol(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(payload));

break;
case "namespace":
return fdg.worker.namespace_entries(new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(payload));

break;
case "namespaces":
return fdg.worker.namespace_names();

break;
default:
throw (new Error((""+"Unknown worker operation: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(op))));

}
});
fdg.worker.init_BANG_ = (function fdg$worker$init_BANG_(){
return (self.onmessage = (function (event){
var map__54492 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__54492__$1 = cljs.core.__destructure_map(map__54492);
var request = map__54492__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
try{return self.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ok","ok",967785236),true,new cljs.core.Keyword(null,"result","result",1415092211),fdg.worker.dispatch_BANG_(request)], null)));
}catch (e54493){var error = e54493;
return self.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ok","ok",967785236),false,new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5162__auto__ = error.message;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
}
})(),new cljs.core.Keyword(null,"blockId","blockId",-1419159445),(error["fdgBlockId"])], null)));
}}));
});
goog.exportSymbol('fdg.worker.init_BANG_', fdg.worker.init_BANG_);

//# sourceMappingURL=fdg.worker.js.map
