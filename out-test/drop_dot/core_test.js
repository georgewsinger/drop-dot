// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST = (function drop_dot$core_test$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test88991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test88991 = (function (meta88992){
this.meta88992 = meta88992;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test88991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_88993,meta88992__$1){
var self__ = this;
var _88993__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test88991(meta88992__$1));
});

drop_dot.core_test.t_drop_dot$core_test88991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_88993){
var self__ = this;
var _88993__$1 = this;
return self__.meta88992;
});

drop_dot.core_test.t_drop_dot$core_test88991.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test88991.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89132){
var state_val_89133 = (state_89132[(1)]);
if((state_val_89133 === (7))){
var inst_89015 = (state_89132[(7)]);
var inst_89025 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89026 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_89027 = cljs.core.List.EMPTY;
var inst_89028 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89029 = cljs.core.cons.call(null,inst_89028,inst_89015);
var inst_89030 = cljs.core._conj.call(null,inst_89027,inst_89029);
var inst_89031 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89032 = cljs.core._conj.call(null,inst_89030,inst_89031);
var inst_89033 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89026,inst_89032,null];
var inst_89034 = cljs.core.PersistentHashMap.fromArrays(inst_89025,inst_89033);
var inst_89035 = cljs.test.do_report.call(null,inst_89034);
var state_89132__$1 = state_89132;
var statearr_89134_89395 = state_89132__$1;
(statearr_89134_89395[(2)] = inst_89035);

(statearr_89134_89395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (20))){
var inst_89105 = (state_89132[(8)]);
var inst_89108 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89109 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_89110 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89105);
var inst_89111 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89109,inst_89110,null];
var inst_89112 = cljs.core.PersistentHashMap.fromArrays(inst_89108,inst_89111);
var inst_89113 = cljs.test.do_report.call(null,inst_89112);
var state_89132__$1 = state_89132;
var statearr_89135_89396 = state_89132__$1;
(statearr_89135_89396[(2)] = inst_89113);

(statearr_89135_89396[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (1))){
var state_89132__$1 = state_89132;
var statearr_89136_89397 = state_89132__$1;
(statearr_89136_89397[(2)] = null);

(statearr_89136_89397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89132,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89004 = cljs.core.List.EMPTY;
var inst_89005 = cljs.core._conj.call(null,inst_89004,"ERROR:");
var inst_89009 = cljs.core.async.chan.call(null,(1));
var inst_89010 = (function (){var c__9318__auto____$1 = inst_89009;
return ((function (c__9318__auto____$1,_,inst_89004,inst_89005,inst_89009,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89004,inst_89005,inst_89009,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89007){
var state_val_89008 = (state_89007[(1)]);
if((state_val_89008 === (1))){
var state_89007__$1 = state_89007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89007__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89004,inst_89005,inst_89009,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89004,inst_89005,inst_89009,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89140 = [null,null,null,null,null,null,null];
(statearr_89140[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89140[(1)] = (1));

return statearr_89140;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89007){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89141){if((e89141 instanceof Object)){
var ex__9301__auto__ = e89141;
var statearr_89142_89398 = state_89007;
(statearr_89142_89398[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89399 = state_89007;
state_89007 = G__89399;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89007){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89004,inst_89005,inst_89009,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89143 = f__9319__auto__.call(null);
(statearr_89143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89004,inst_89005,inst_89009,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_89011 = cljs.core.async.impl.dispatch.run.call(null,inst_89010);
var inst_89012 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_89009);
var state_89132__$1 = (function (){var statearr_89144 = state_89132;
(statearr_89144[(9)] = inst_89011);

(statearr_89144[(10)] = inst_89005);

return statearr_89144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89132__$1,(5),inst_89012);
} else {
if((state_val_89133 === (15))){
var inst_89061 = (state_89132[(11)]);
var inst_89082 = (state_89132[(2)]);
var state_89132__$1 = (function (){var statearr_89145 = state_89132;
(statearr_89145[(12)] = inst_89082);

return statearr_89145;
})();
var statearr_89146_89400 = state_89132__$1;
(statearr_89146_89400[(2)] = inst_89061);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (21))){
var inst_89105 = (state_89132[(8)]);
var inst_89115 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89116 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_89117 = cljs.core.List.EMPTY;
var inst_89118 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89119 = cljs.core.cons.call(null,inst_89118,inst_89105);
var inst_89120 = cljs.core._conj.call(null,inst_89117,inst_89119);
var inst_89121 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89122 = cljs.core._conj.call(null,inst_89120,inst_89121);
var inst_89123 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89116,inst_89122,null];
var inst_89124 = cljs.core.PersistentHashMap.fromArrays(inst_89115,inst_89123);
var inst_89125 = cljs.test.do_report.call(null,inst_89124);
var state_89132__$1 = state_89132;
var statearr_89147_89401 = state_89132__$1;
(statearr_89147_89401[(2)] = inst_89125);

(statearr_89147_89401[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (13))){
var inst_89060 = (state_89132[(13)]);
var inst_89063 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89064 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_89065 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89060);
var inst_89066 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89064,inst_89065,null];
var inst_89067 = cljs.core.PersistentHashMap.fromArrays(inst_89063,inst_89066);
var inst_89068 = cljs.test.do_report.call(null,inst_89067);
var state_89132__$1 = state_89132;
var statearr_89148_89402 = state_89132__$1;
(statearr_89148_89402[(2)] = inst_89068);

(statearr_89148_89402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (22))){
var inst_89106 = (state_89132[(14)]);
var inst_89127 = (state_89132[(2)]);
var state_89132__$1 = (function (){var statearr_89149 = state_89132;
(statearr_89149[(15)] = inst_89127);

return statearr_89149;
})();
var statearr_89150_89403 = state_89132__$1;
(statearr_89150_89403[(2)] = inst_89106);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (6))){
var inst_89015 = (state_89132[(7)]);
var inst_89018 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89019 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_89020 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89015);
var inst_89021 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89019,inst_89020,null];
var inst_89022 = cljs.core.PersistentHashMap.fromArrays(inst_89018,inst_89021);
var inst_89023 = cljs.test.do_report.call(null,inst_89022);
var state_89132__$1 = state_89132;
var statearr_89151_89404 = state_89132__$1;
(statearr_89151_89404[(2)] = inst_89023);

(statearr_89151_89404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (17))){
var inst_89085 = (state_89132[(2)]);
var inst_89086 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89087 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_89088 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89087,inst_89085,null];
var inst_89089 = cljs.core.PersistentHashMap.fromArrays(inst_89086,inst_89088);
var inst_89090 = cljs.test.do_report.call(null,inst_89089);
var state_89132__$1 = state_89132;
var statearr_89152_89405 = state_89132__$1;
(statearr_89152_89405[(2)] = inst_89090);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (3))){
var inst_88995 = (state_89132[(2)]);
var inst_88996 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_88997 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_88998 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_88997,inst_88995,null];
var inst_88999 = cljs.core.PersistentHashMap.fromArrays(inst_88996,inst_88998);
var inst_89000 = cljs.test.do_report.call(null,inst_88999);
var state_89132__$1 = state_89132;
var statearr_89153_89406 = state_89132__$1;
(statearr_89153_89406[(2)] = inst_89000);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (12))){
var inst_89060 = (state_89132[(13)]);
var inst_89061 = (state_89132[(11)]);
var inst_89050 = (state_89132[(16)]);
var inst_89059 = (state_89132[(2)]);
var inst_89060__$1 = cljs.core._conj.call(null,inst_89050,inst_89059);
var inst_89061__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89060__$1);
var state_89132__$1 = (function (){var statearr_89154 = state_89132;
(statearr_89154[(13)] = inst_89060__$1);

(statearr_89154[(11)] = inst_89061__$1);

return statearr_89154;
})();
if(cljs.core.truth_(inst_89061__$1)){
var statearr_89155_89407 = state_89132__$1;
(statearr_89155_89407[(1)] = (13));

} else {
var statearr_89156_89408 = state_89132__$1;
(statearr_89156_89408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (2))){
var inst_89039 = (state_89132[(2)]);
var state_89132__$1 = (function (){var statearr_89157 = state_89132;
(statearr_89157[(17)] = inst_89039);

return statearr_89157;
})();
var statearr_89158_89409 = state_89132__$1;
(statearr_89158_89409[(2)] = null);

(statearr_89158_89409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (19))){
var inst_89095 = (state_89132[(18)]);
var inst_89105 = (state_89132[(8)]);
var inst_89106 = (state_89132[(14)]);
var inst_89104 = (state_89132[(2)]);
var inst_89105__$1 = cljs.core._conj.call(null,inst_89095,inst_89104);
var inst_89106__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89105__$1);
var state_89132__$1 = (function (){var statearr_89159 = state_89132;
(statearr_89159[(8)] = inst_89105__$1);

(statearr_89159[(14)] = inst_89106__$1);

return statearr_89159;
})();
if(cljs.core.truth_(inst_89106__$1)){
var statearr_89160_89410 = state_89132__$1;
(statearr_89160_89410[(1)] = (20));

} else {
var statearr_89161_89411 = state_89132__$1;
(statearr_89161_89411[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89132,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_89049 = cljs.core.List.EMPTY;
var inst_89050 = cljs.core._conj.call(null,inst_89049,"ERROR: ");
var inst_89054 = cljs.core.async.chan.call(null,(1));
var inst_89055 = (function (){var c__9318__auto____$1 = inst_89054;
return ((function (c__9318__auto____$1,_,inst_89049,inst_89050,inst_89054,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89049,inst_89050,inst_89054,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89052){
var state_val_89053 = (state_89052[(1)]);
if((state_val_89053 === (1))){
var state_89052__$1 = state_89052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89052__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89049,inst_89050,inst_89054,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89049,inst_89050,inst_89054,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89165 = [null,null,null,null,null,null,null];
(statearr_89165[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89165[(1)] = (1));

return statearr_89165;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89052){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89166){if((e89166 instanceof Object)){
var ex__9301__auto__ = e89166;
var statearr_89167_89412 = state_89052;
(statearr_89167_89412[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89413 = state_89052;
state_89052 = G__89413;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89052){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89049,inst_89050,inst_89054,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89168 = f__9319__auto__.call(null);
(statearr_89168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89049,inst_89050,inst_89054,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_89056 = cljs.core.async.impl.dispatch.run.call(null,inst_89055);
var inst_89057 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_89054);
var state_89132__$1 = (function (){var statearr_89169 = state_89132;
(statearr_89169[(19)] = inst_89056);

(statearr_89169[(16)] = inst_89050);

return statearr_89169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89132__$1,(12),inst_89057);
} else {
if((state_val_89133 === (9))){
var inst_89084 = (state_89132[(2)]);
var state_89132__$1 = (function (){var statearr_89170 = state_89132;
(statearr_89170[(20)] = inst_89084);

return statearr_89170;
})();
var statearr_89171_89414 = state_89132__$1;
(statearr_89171_89414[(2)] = null);

(statearr_89171_89414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (5))){
var inst_89016 = (state_89132[(21)]);
var inst_89005 = (state_89132[(10)]);
var inst_89015 = (state_89132[(7)]);
var inst_89014 = (state_89132[(2)]);
var inst_89015__$1 = cljs.core._conj.call(null,inst_89005,inst_89014);
var inst_89016__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89015__$1);
var state_89132__$1 = (function (){var statearr_89172 = state_89132;
(statearr_89172[(21)] = inst_89016__$1);

(statearr_89172[(7)] = inst_89015__$1);

return statearr_89172;
})();
if(cljs.core.truth_(inst_89016__$1)){
var statearr_89173_89415 = state_89132__$1;
(statearr_89173_89415[(1)] = (6));

} else {
var statearr_89174_89416 = state_89132__$1;
(statearr_89174_89416[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (14))){
var inst_89060 = (state_89132[(13)]);
var inst_89070 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89071 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_89072 = cljs.core.List.EMPTY;
var inst_89073 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89074 = cljs.core.cons.call(null,inst_89073,inst_89060);
var inst_89075 = cljs.core._conj.call(null,inst_89072,inst_89074);
var inst_89076 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89077 = cljs.core._conj.call(null,inst_89075,inst_89076);
var inst_89078 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89071,inst_89077,null];
var inst_89079 = cljs.core.PersistentHashMap.fromArrays(inst_89070,inst_89078);
var inst_89080 = cljs.test.do_report.call(null,inst_89079);
var state_89132__$1 = state_89132;
var statearr_89175_89417 = state_89132__$1;
(statearr_89175_89417[(2)] = inst_89080);

(statearr_89175_89417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (16))){
var inst_89129 = (state_89132[(2)]);
var inst_89130 = done.call(null);
var state_89132__$1 = (function (){var statearr_89176 = state_89132;
(statearr_89176[(22)] = inst_89129);

return statearr_89176;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89132__$1,inst_89130);
} else {
if((state_val_89133 === (10))){
var inst_89040 = (state_89132[(2)]);
var inst_89041 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89042 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_89043 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89042,inst_89040,null];
var inst_89044 = cljs.core.PersistentHashMap.fromArrays(inst_89041,inst_89043);
var inst_89045 = cljs.test.do_report.call(null,inst_89044);
var state_89132__$1 = state_89132;
var statearr_89177_89418 = state_89132__$1;
(statearr_89177_89418[(2)] = inst_89045);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89133 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89132,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_89094 = cljs.core.List.EMPTY;
var inst_89095 = cljs.core._conj.call(null,inst_89094,"~/.in-drop-dot-only");
var inst_89099 = cljs.core.async.chan.call(null,(1));
var inst_89100 = (function (){var c__9318__auto____$1 = inst_89099;
return ((function (c__9318__auto____$1,_,inst_89094,inst_89095,inst_89099,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89094,inst_89095,inst_89099,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89097){
var state_val_89098 = (state_89097[(1)]);
if((state_val_89098 === (1))){
var state_89097__$1 = state_89097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89097__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89094,inst_89095,inst_89099,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89094,inst_89095,inst_89099,state_val_89133,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89181 = [null,null,null,null,null,null,null];
(statearr_89181[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89181[(1)] = (1));

return statearr_89181;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89097){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89182){if((e89182 instanceof Object)){
var ex__9301__auto__ = e89182;
var statearr_89183_89419 = state_89097;
(statearr_89183_89419[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89420 = state_89097;
state_89097 = G__89420;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89097){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89094,inst_89095,inst_89099,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89184 = f__9319__auto__.call(null);
(statearr_89184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89094,inst_89095,inst_89099,state_val_89133,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_89101 = cljs.core.async.impl.dispatch.run.call(null,inst_89100);
var inst_89102 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_89099);
var state_89132__$1 = (function (){var statearr_89185 = state_89132;
(statearr_89185[(18)] = inst_89095);

(statearr_89185[(23)] = inst_89101);

return statearr_89185;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89132__$1,(19),inst_89102);
} else {
if((state_val_89133 === (8))){
var inst_89016 = (state_89132[(21)]);
var inst_89037 = (state_89132[(2)]);
var state_89132__$1 = (function (){var statearr_89186 = state_89132;
(statearr_89186[(24)] = inst_89037);

return statearr_89186;
})();
var statearr_89187_89421 = state_89132__$1;
(statearr_89187_89421[(2)] = inst_89016);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89191[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89191[(1)] = (1));

return statearr_89191;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89132){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89192){if((e89192 instanceof Object)){
var ex__9301__auto__ = e89192;
var statearr_89193_89422 = state_89132;
(statearr_89193_89422[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89423 = state_89132;
state_89132 = G__89423;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89132){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89194 = f__9319__auto__.call(null);
(statearr_89194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_89194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test88991.prototype.apply = (function (self__,args88994){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args88994)));
});

drop_dot.core_test.t_drop_dot$core_test88991.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_89332){
var state_val_89333 = (state_89332[(1)]);
if((state_val_89333 === (7))){
var inst_89215 = (state_89332[(7)]);
var inst_89225 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89226 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_89227 = cljs.core.List.EMPTY;
var inst_89228 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89229 = cljs.core.cons.call(null,inst_89228,inst_89215);
var inst_89230 = cljs.core._conj.call(null,inst_89227,inst_89229);
var inst_89231 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89232 = cljs.core._conj.call(null,inst_89230,inst_89231);
var inst_89233 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89226,inst_89232,null];
var inst_89234 = cljs.core.PersistentHashMap.fromArrays(inst_89225,inst_89233);
var inst_89235 = cljs.test.do_report.call(null,inst_89234);
var state_89332__$1 = state_89332;
var statearr_89334_89424 = state_89332__$1;
(statearr_89334_89424[(2)] = inst_89235);

(statearr_89334_89424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (20))){
var inst_89305 = (state_89332[(8)]);
var inst_89308 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89309 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_89310 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89305);
var inst_89311 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89309,inst_89310,null];
var inst_89312 = cljs.core.PersistentHashMap.fromArrays(inst_89308,inst_89311);
var inst_89313 = cljs.test.do_report.call(null,inst_89312);
var state_89332__$1 = state_89332;
var statearr_89335_89425 = state_89332__$1;
(statearr_89335_89425[(2)] = inst_89313);

(statearr_89335_89425[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (1))){
var state_89332__$1 = state_89332;
var statearr_89336_89426 = state_89332__$1;
(statearr_89336_89426[(2)] = null);

(statearr_89336_89426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89332,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89204 = cljs.core.List.EMPTY;
var inst_89205 = cljs.core._conj.call(null,inst_89204,"ERROR:");
var inst_89209 = cljs.core.async.chan.call(null,(1));
var inst_89210 = (function (){var c__9318__auto____$1 = inst_89209;
return ((function (c__9318__auto____$1,_,inst_89204,inst_89205,inst_89209,state_val_89333,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89204,inst_89205,inst_89209,state_val_89333,c__9318__auto__,___10644__auto__){
return (function (state_89207){
var state_val_89208 = (state_89207[(1)]);
if((state_val_89208 === (1))){
var state_89207__$1 = state_89207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89207__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89204,inst_89205,inst_89209,state_val_89333,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89204,inst_89205,inst_89209,state_val_89333,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89340 = [null,null,null,null,null,null,null];
(statearr_89340[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89340[(1)] = (1));

return statearr_89340;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89207){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89341){if((e89341 instanceof Object)){
var ex__9301__auto__ = e89341;
var statearr_89342_89427 = state_89207;
(statearr_89342_89427[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89428 = state_89207;
state_89207 = G__89428;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89207){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89204,inst_89205,inst_89209,state_val_89333,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89343 = f__9319__auto__.call(null);
(statearr_89343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89204,inst_89205,inst_89209,state_val_89333,c__9318__auto__,___10644__auto__))
})();
var inst_89211 = cljs.core.async.impl.dispatch.run.call(null,inst_89210);
var inst_89212 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_89209);
var state_89332__$1 = (function (){var statearr_89344 = state_89332;
(statearr_89344[(9)] = inst_89205);

(statearr_89344[(10)] = inst_89211);

return statearr_89344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89332__$1,(5),inst_89212);
} else {
if((state_val_89333 === (15))){
var inst_89261 = (state_89332[(11)]);
var inst_89282 = (state_89332[(2)]);
var state_89332__$1 = (function (){var statearr_89345 = state_89332;
(statearr_89345[(12)] = inst_89282);

return statearr_89345;
})();
var statearr_89346_89429 = state_89332__$1;
(statearr_89346_89429[(2)] = inst_89261);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (21))){
var inst_89305 = (state_89332[(8)]);
var inst_89315 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89316 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_89317 = cljs.core.List.EMPTY;
var inst_89318 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89319 = cljs.core.cons.call(null,inst_89318,inst_89305);
var inst_89320 = cljs.core._conj.call(null,inst_89317,inst_89319);
var inst_89321 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89322 = cljs.core._conj.call(null,inst_89320,inst_89321);
var inst_89323 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89316,inst_89322,null];
var inst_89324 = cljs.core.PersistentHashMap.fromArrays(inst_89315,inst_89323);
var inst_89325 = cljs.test.do_report.call(null,inst_89324);
var state_89332__$1 = state_89332;
var statearr_89347_89430 = state_89332__$1;
(statearr_89347_89430[(2)] = inst_89325);

(statearr_89347_89430[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (13))){
var inst_89260 = (state_89332[(13)]);
var inst_89263 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89264 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_89265 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89260);
var inst_89266 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89264,inst_89265,null];
var inst_89267 = cljs.core.PersistentHashMap.fromArrays(inst_89263,inst_89266);
var inst_89268 = cljs.test.do_report.call(null,inst_89267);
var state_89332__$1 = state_89332;
var statearr_89348_89431 = state_89332__$1;
(statearr_89348_89431[(2)] = inst_89268);

(statearr_89348_89431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (22))){
var inst_89306 = (state_89332[(14)]);
var inst_89327 = (state_89332[(2)]);
var state_89332__$1 = (function (){var statearr_89349 = state_89332;
(statearr_89349[(15)] = inst_89327);

return statearr_89349;
})();
var statearr_89350_89432 = state_89332__$1;
(statearr_89350_89432[(2)] = inst_89306);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (6))){
var inst_89215 = (state_89332[(7)]);
var inst_89218 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89219 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_89220 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89215);
var inst_89221 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89219,inst_89220,null];
var inst_89222 = cljs.core.PersistentHashMap.fromArrays(inst_89218,inst_89221);
var inst_89223 = cljs.test.do_report.call(null,inst_89222);
var state_89332__$1 = state_89332;
var statearr_89351_89433 = state_89332__$1;
(statearr_89351_89433[(2)] = inst_89223);

(statearr_89351_89433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (17))){
var inst_89285 = (state_89332[(2)]);
var inst_89286 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89287 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_89288 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89287,inst_89285,null];
var inst_89289 = cljs.core.PersistentHashMap.fromArrays(inst_89286,inst_89288);
var inst_89290 = cljs.test.do_report.call(null,inst_89289);
var state_89332__$1 = state_89332;
var statearr_89352_89434 = state_89332__$1;
(statearr_89352_89434[(2)] = inst_89290);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (3))){
var inst_89195 = (state_89332[(2)]);
var inst_89196 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89197 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_89198 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89197,inst_89195,null];
var inst_89199 = cljs.core.PersistentHashMap.fromArrays(inst_89196,inst_89198);
var inst_89200 = cljs.test.do_report.call(null,inst_89199);
var state_89332__$1 = state_89332;
var statearr_89353_89435 = state_89332__$1;
(statearr_89353_89435[(2)] = inst_89200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (12))){
var inst_89261 = (state_89332[(11)]);
var inst_89250 = (state_89332[(16)]);
var inst_89260 = (state_89332[(13)]);
var inst_89259 = (state_89332[(2)]);
var inst_89260__$1 = cljs.core._conj.call(null,inst_89250,inst_89259);
var inst_89261__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89260__$1);
var state_89332__$1 = (function (){var statearr_89354 = state_89332;
(statearr_89354[(11)] = inst_89261__$1);

(statearr_89354[(13)] = inst_89260__$1);

return statearr_89354;
})();
if(cljs.core.truth_(inst_89261__$1)){
var statearr_89355_89436 = state_89332__$1;
(statearr_89355_89436[(1)] = (13));

} else {
var statearr_89356_89437 = state_89332__$1;
(statearr_89356_89437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (2))){
var inst_89239 = (state_89332[(2)]);
var state_89332__$1 = (function (){var statearr_89357 = state_89332;
(statearr_89357[(17)] = inst_89239);

return statearr_89357;
})();
var statearr_89358_89438 = state_89332__$1;
(statearr_89358_89438[(2)] = null);

(statearr_89358_89438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (19))){
var inst_89295 = (state_89332[(18)]);
var inst_89305 = (state_89332[(8)]);
var inst_89306 = (state_89332[(14)]);
var inst_89304 = (state_89332[(2)]);
var inst_89305__$1 = cljs.core._conj.call(null,inst_89295,inst_89304);
var inst_89306__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89305__$1);
var state_89332__$1 = (function (){var statearr_89359 = state_89332;
(statearr_89359[(8)] = inst_89305__$1);

(statearr_89359[(14)] = inst_89306__$1);

return statearr_89359;
})();
if(cljs.core.truth_(inst_89306__$1)){
var statearr_89360_89439 = state_89332__$1;
(statearr_89360_89439[(1)] = (20));

} else {
var statearr_89361_89440 = state_89332__$1;
(statearr_89361_89440[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89332,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_89249 = cljs.core.List.EMPTY;
var inst_89250 = cljs.core._conj.call(null,inst_89249,"ERROR: ");
var inst_89254 = cljs.core.async.chan.call(null,(1));
var inst_89255 = (function (){var c__9318__auto____$1 = inst_89254;
return ((function (c__9318__auto____$1,_,inst_89249,inst_89250,inst_89254,state_val_89333,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89249,inst_89250,inst_89254,state_val_89333,c__9318__auto__,___10644__auto__){
return (function (state_89252){
var state_val_89253 = (state_89252[(1)]);
if((state_val_89253 === (1))){
var state_89252__$1 = state_89252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89252__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89249,inst_89250,inst_89254,state_val_89333,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89249,inst_89250,inst_89254,state_val_89333,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89365 = [null,null,null,null,null,null,null];
(statearr_89365[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89365[(1)] = (1));

return statearr_89365;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89252){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89366){if((e89366 instanceof Object)){
var ex__9301__auto__ = e89366;
var statearr_89367_89441 = state_89252;
(statearr_89367_89441[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89442 = state_89252;
state_89252 = G__89442;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89252){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89249,inst_89250,inst_89254,state_val_89333,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89368 = f__9319__auto__.call(null);
(statearr_89368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89249,inst_89250,inst_89254,state_val_89333,c__9318__auto__,___10644__auto__))
})();
var inst_89256 = cljs.core.async.impl.dispatch.run.call(null,inst_89255);
var inst_89257 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_89254);
var state_89332__$1 = (function (){var statearr_89369 = state_89332;
(statearr_89369[(19)] = inst_89256);

(statearr_89369[(16)] = inst_89250);

return statearr_89369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89332__$1,(12),inst_89257);
} else {
if((state_val_89333 === (9))){
var inst_89284 = (state_89332[(2)]);
var state_89332__$1 = (function (){var statearr_89370 = state_89332;
(statearr_89370[(20)] = inst_89284);

return statearr_89370;
})();
var statearr_89371_89443 = state_89332__$1;
(statearr_89371_89443[(2)] = null);

(statearr_89371_89443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (5))){
var inst_89205 = (state_89332[(9)]);
var inst_89216 = (state_89332[(21)]);
var inst_89215 = (state_89332[(7)]);
var inst_89214 = (state_89332[(2)]);
var inst_89215__$1 = cljs.core._conj.call(null,inst_89205,inst_89214);
var inst_89216__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89215__$1);
var state_89332__$1 = (function (){var statearr_89372 = state_89332;
(statearr_89372[(21)] = inst_89216__$1);

(statearr_89372[(7)] = inst_89215__$1);

return statearr_89372;
})();
if(cljs.core.truth_(inst_89216__$1)){
var statearr_89373_89444 = state_89332__$1;
(statearr_89373_89444[(1)] = (6));

} else {
var statearr_89374_89445 = state_89332__$1;
(statearr_89374_89445[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (14))){
var inst_89260 = (state_89332[(13)]);
var inst_89270 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89271 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_89272 = cljs.core.List.EMPTY;
var inst_89273 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89274 = cljs.core.cons.call(null,inst_89273,inst_89260);
var inst_89275 = cljs.core._conj.call(null,inst_89272,inst_89274);
var inst_89276 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89277 = cljs.core._conj.call(null,inst_89275,inst_89276);
var inst_89278 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89271,inst_89277,null];
var inst_89279 = cljs.core.PersistentHashMap.fromArrays(inst_89270,inst_89278);
var inst_89280 = cljs.test.do_report.call(null,inst_89279);
var state_89332__$1 = state_89332;
var statearr_89375_89446 = state_89332__$1;
(statearr_89375_89446[(2)] = inst_89280);

(statearr_89375_89446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (16))){
var inst_89329 = (state_89332[(2)]);
var inst_89330 = done.call(null);
var state_89332__$1 = (function (){var statearr_89376 = state_89332;
(statearr_89376[(22)] = inst_89329);

return statearr_89376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89332__$1,inst_89330);
} else {
if((state_val_89333 === (10))){
var inst_89240 = (state_89332[(2)]);
var inst_89241 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89242 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_89243 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89242,inst_89240,null];
var inst_89244 = cljs.core.PersistentHashMap.fromArrays(inst_89241,inst_89243);
var inst_89245 = cljs.test.do_report.call(null,inst_89244);
var state_89332__$1 = state_89332;
var statearr_89377_89447 = state_89332__$1;
(statearr_89377_89447[(2)] = inst_89245);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89333 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89332,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_89294 = cljs.core.List.EMPTY;
var inst_89295 = cljs.core._conj.call(null,inst_89294,"~/.in-drop-dot-only");
var inst_89299 = cljs.core.async.chan.call(null,(1));
var inst_89300 = (function (){var c__9318__auto____$1 = inst_89299;
return ((function (c__9318__auto____$1,_,inst_89294,inst_89295,inst_89299,state_val_89333,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89294,inst_89295,inst_89299,state_val_89333,c__9318__auto__,___10644__auto__){
return (function (state_89297){
var state_val_89298 = (state_89297[(1)]);
if((state_val_89298 === (1))){
var state_89297__$1 = state_89297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89297__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89294,inst_89295,inst_89299,state_val_89333,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89294,inst_89295,inst_89299,state_val_89333,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89381 = [null,null,null,null,null,null,null];
(statearr_89381[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89381[(1)] = (1));

return statearr_89381;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89297){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89382){if((e89382 instanceof Object)){
var ex__9301__auto__ = e89382;
var statearr_89383_89448 = state_89297;
(statearr_89383_89448[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89449 = state_89297;
state_89297 = G__89449;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89297){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89294,inst_89295,inst_89299,state_val_89333,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89384 = f__9319__auto__.call(null);
(statearr_89384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89294,inst_89295,inst_89299,state_val_89333,c__9318__auto__,___10644__auto__))
})();
var inst_89301 = cljs.core.async.impl.dispatch.run.call(null,inst_89300);
var inst_89302 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_89299);
var state_89332__$1 = (function (){var statearr_89385 = state_89332;
(statearr_89385[(18)] = inst_89295);

(statearr_89385[(23)] = inst_89301);

return statearr_89385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89332__$1,(19),inst_89302);
} else {
if((state_val_89333 === (8))){
var inst_89216 = (state_89332[(21)]);
var inst_89237 = (state_89332[(2)]);
var state_89332__$1 = (function (){var statearr_89386 = state_89332;
(statearr_89386[(24)] = inst_89237);

return statearr_89386;
})();
var statearr_89387_89450 = state_89332__$1;
(statearr_89387_89450[(2)] = inst_89216);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89391[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89391[(1)] = (1));

return statearr_89391;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89332){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89392){if((e89392 instanceof Object)){
var ex__9301__auto__ = e89392;
var statearr_89393_89451 = state_89332;
(statearr_89393_89451[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89452 = state_89332;
state_89332 = G__89452;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89332){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89394 = f__9319__auto__.call(null);
(statearr_89394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_89394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test88991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta88992","meta88992",893719254,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test88991.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test88991.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test88991";

drop_dot.core_test.t_drop_dot$core_test88991.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test88991");
});

drop_dot.core_test.__GT_t_drop_dot$core_test88991 = (function drop_dot$core_test$__GT_t_drop_dot$core_test88991(meta88992){
return (new drop_dot.core_test.t_drop_dot$core_test88991(meta88992));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test88991(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test89453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test89453 = (function (meta89454){
this.meta89454 = meta89454;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test89453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89455,meta89454__$1){
var self__ = this;
var _89455__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test89453(meta89454__$1));
});

drop_dot.core_test.t_drop_dot$core_test89453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89455){
var self__ = this;
var _89455__$1 = this;
return self__.meta89454;
});

drop_dot.core_test.t_drop_dot$core_test89453.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test89453.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89594){
var state_val_89595 = (state_89594[(1)]);
if((state_val_89595 === (7))){
var inst_89477 = (state_89594[(7)]);
var inst_89487 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89488 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_89489 = cljs.core.List.EMPTY;
var inst_89490 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89491 = cljs.core.cons.call(null,inst_89490,inst_89477);
var inst_89492 = cljs.core._conj.call(null,inst_89489,inst_89491);
var inst_89493 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89494 = cljs.core._conj.call(null,inst_89492,inst_89493);
var inst_89495 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89488,inst_89494,null];
var inst_89496 = cljs.core.PersistentHashMap.fromArrays(inst_89487,inst_89495);
var inst_89497 = cljs.test.do_report.call(null,inst_89496);
var state_89594__$1 = state_89594;
var statearr_89596_89857 = state_89594__$1;
(statearr_89596_89857[(2)] = inst_89497);

(statearr_89596_89857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (20))){
var inst_89567 = (state_89594[(8)]);
var inst_89570 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89571 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89572 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89567);
var inst_89573 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89571,inst_89572,null];
var inst_89574 = cljs.core.PersistentHashMap.fromArrays(inst_89570,inst_89573);
var inst_89575 = cljs.test.do_report.call(null,inst_89574);
var state_89594__$1 = state_89594;
var statearr_89597_89858 = state_89594__$1;
(statearr_89597_89858[(2)] = inst_89575);

(statearr_89597_89858[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (1))){
var state_89594__$1 = state_89594;
var statearr_89598_89859 = state_89594__$1;
(statearr_89598_89859[(2)] = null);

(statearr_89598_89859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89594,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89466 = cljs.core.List.EMPTY;
var inst_89467 = cljs.core._conj.call(null,inst_89466,"NOTICE: ");
var inst_89471 = cljs.core.async.chan.call(null,(1));
var inst_89472 = (function (){var c__9318__auto____$1 = inst_89471;
return ((function (c__9318__auto____$1,_,inst_89466,inst_89467,inst_89471,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89466,inst_89467,inst_89471,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89469){
var state_val_89470 = (state_89469[(1)]);
if((state_val_89470 === (1))){
var state_89469__$1 = state_89469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89469__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89466,inst_89467,inst_89471,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89466,inst_89467,inst_89471,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89602 = [null,null,null,null,null,null,null];
(statearr_89602[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89602[(1)] = (1));

return statearr_89602;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89469){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89603){if((e89603 instanceof Object)){
var ex__9301__auto__ = e89603;
var statearr_89604_89860 = state_89469;
(statearr_89604_89860[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89861 = state_89469;
state_89469 = G__89861;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89469){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89466,inst_89467,inst_89471,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89605 = f__9319__auto__.call(null);
(statearr_89605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89466,inst_89467,inst_89471,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_89473 = cljs.core.async.impl.dispatch.run.call(null,inst_89472);
var inst_89474 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_89471);
var state_89594__$1 = (function (){var statearr_89606 = state_89594;
(statearr_89606[(9)] = inst_89473);

(statearr_89606[(10)] = inst_89467);

return statearr_89606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89594__$1,(5),inst_89474);
} else {
if((state_val_89595 === (15))){
var inst_89523 = (state_89594[(11)]);
var inst_89544 = (state_89594[(2)]);
var state_89594__$1 = (function (){var statearr_89607 = state_89594;
(statearr_89607[(12)] = inst_89544);

return statearr_89607;
})();
var statearr_89608_89862 = state_89594__$1;
(statearr_89608_89862[(2)] = inst_89523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (21))){
var inst_89567 = (state_89594[(8)]);
var inst_89577 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89578 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89579 = cljs.core.List.EMPTY;
var inst_89580 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89581 = cljs.core.cons.call(null,inst_89580,inst_89567);
var inst_89582 = cljs.core._conj.call(null,inst_89579,inst_89581);
var inst_89583 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89584 = cljs.core._conj.call(null,inst_89582,inst_89583);
var inst_89585 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89578,inst_89584,null];
var inst_89586 = cljs.core.PersistentHashMap.fromArrays(inst_89577,inst_89585);
var inst_89587 = cljs.test.do_report.call(null,inst_89586);
var state_89594__$1 = state_89594;
var statearr_89609_89863 = state_89594__$1;
(statearr_89609_89863[(2)] = inst_89587);

(statearr_89609_89863[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (13))){
var inst_89522 = (state_89594[(13)]);
var inst_89525 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89526 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89527 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89522);
var inst_89528 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89526,inst_89527,null];
var inst_89529 = cljs.core.PersistentHashMap.fromArrays(inst_89525,inst_89528);
var inst_89530 = cljs.test.do_report.call(null,inst_89529);
var state_89594__$1 = state_89594;
var statearr_89610_89864 = state_89594__$1;
(statearr_89610_89864[(2)] = inst_89530);

(statearr_89610_89864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (22))){
var inst_89568 = (state_89594[(14)]);
var inst_89589 = (state_89594[(2)]);
var state_89594__$1 = (function (){var statearr_89611 = state_89594;
(statearr_89611[(15)] = inst_89589);

return statearr_89611;
})();
var statearr_89612_89865 = state_89594__$1;
(statearr_89612_89865[(2)] = inst_89568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (6))){
var inst_89477 = (state_89594[(7)]);
var inst_89480 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89481 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_89482 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89477);
var inst_89483 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89481,inst_89482,null];
var inst_89484 = cljs.core.PersistentHashMap.fromArrays(inst_89480,inst_89483);
var inst_89485 = cljs.test.do_report.call(null,inst_89484);
var state_89594__$1 = state_89594;
var statearr_89613_89866 = state_89594__$1;
(statearr_89613_89866[(2)] = inst_89485);

(statearr_89613_89866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (17))){
var inst_89547 = (state_89594[(2)]);
var inst_89548 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89549 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89550 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89549,inst_89547,null];
var inst_89551 = cljs.core.PersistentHashMap.fromArrays(inst_89548,inst_89550);
var inst_89552 = cljs.test.do_report.call(null,inst_89551);
var state_89594__$1 = state_89594;
var statearr_89614_89867 = state_89594__$1;
(statearr_89614_89867[(2)] = inst_89552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (3))){
var inst_89457 = (state_89594[(2)]);
var inst_89458 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89459 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_89460 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89459,inst_89457,null];
var inst_89461 = cljs.core.PersistentHashMap.fromArrays(inst_89458,inst_89460);
var inst_89462 = cljs.test.do_report.call(null,inst_89461);
var state_89594__$1 = state_89594;
var statearr_89615_89868 = state_89594__$1;
(statearr_89615_89868[(2)] = inst_89462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (12))){
var inst_89522 = (state_89594[(13)]);
var inst_89523 = (state_89594[(11)]);
var inst_89512 = (state_89594[(16)]);
var inst_89521 = (state_89594[(2)]);
var inst_89522__$1 = cljs.core._conj.call(null,inst_89512,inst_89521);
var inst_89523__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89522__$1);
var state_89594__$1 = (function (){var statearr_89616 = state_89594;
(statearr_89616[(13)] = inst_89522__$1);

(statearr_89616[(11)] = inst_89523__$1);

return statearr_89616;
})();
if(cljs.core.truth_(inst_89523__$1)){
var statearr_89617_89869 = state_89594__$1;
(statearr_89617_89869[(1)] = (13));

} else {
var statearr_89618_89870 = state_89594__$1;
(statearr_89618_89870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (2))){
var inst_89501 = (state_89594[(2)]);
var state_89594__$1 = (function (){var statearr_89619 = state_89594;
(statearr_89619[(17)] = inst_89501);

return statearr_89619;
})();
var statearr_89620_89871 = state_89594__$1;
(statearr_89620_89871[(2)] = null);

(statearr_89620_89871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (19))){
var inst_89568 = (state_89594[(14)]);
var inst_89567 = (state_89594[(8)]);
var inst_89557 = (state_89594[(18)]);
var inst_89566 = (state_89594[(2)]);
var inst_89567__$1 = cljs.core._conj.call(null,inst_89557,inst_89566);
var inst_89568__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89567__$1);
var state_89594__$1 = (function (){var statearr_89621 = state_89594;
(statearr_89621[(14)] = inst_89568__$1);

(statearr_89621[(8)] = inst_89567__$1);

return statearr_89621;
})();
if(cljs.core.truth_(inst_89568__$1)){
var statearr_89622_89872 = state_89594__$1;
(statearr_89622_89872[(1)] = (20));

} else {
var statearr_89623_89873 = state_89594__$1;
(statearr_89623_89873[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89594,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_89511 = cljs.core.List.EMPTY;
var inst_89512 = cljs.core._conj.call(null,inst_89511,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89516 = cljs.core.async.chan.call(null,(1));
var inst_89517 = (function (){var c__9318__auto____$1 = inst_89516;
return ((function (c__9318__auto____$1,_,inst_89511,inst_89512,inst_89516,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89511,inst_89512,inst_89516,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89514){
var state_val_89515 = (state_89514[(1)]);
if((state_val_89515 === (1))){
var state_89514__$1 = state_89514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89514__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89511,inst_89512,inst_89516,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89511,inst_89512,inst_89516,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89627 = [null,null,null,null,null,null,null];
(statearr_89627[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89627[(1)] = (1));

return statearr_89627;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89514){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89628){if((e89628 instanceof Object)){
var ex__9301__auto__ = e89628;
var statearr_89629_89874 = state_89514;
(statearr_89629_89874[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89875 = state_89514;
state_89514 = G__89875;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89514){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89511,inst_89512,inst_89516,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89630 = f__9319__auto__.call(null);
(statearr_89630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89511,inst_89512,inst_89516,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_89518 = cljs.core.async.impl.dispatch.run.call(null,inst_89517);
var inst_89519 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_89516);
var state_89594__$1 = (function (){var statearr_89631 = state_89594;
(statearr_89631[(19)] = inst_89518);

(statearr_89631[(16)] = inst_89512);

return statearr_89631;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89594__$1,(12),inst_89519);
} else {
if((state_val_89595 === (9))){
var inst_89546 = (state_89594[(2)]);
var state_89594__$1 = (function (){var statearr_89632 = state_89594;
(statearr_89632[(20)] = inst_89546);

return statearr_89632;
})();
var statearr_89633_89876 = state_89594__$1;
(statearr_89633_89876[(2)] = null);

(statearr_89633_89876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (5))){
var inst_89477 = (state_89594[(7)]);
var inst_89478 = (state_89594[(21)]);
var inst_89467 = (state_89594[(10)]);
var inst_89476 = (state_89594[(2)]);
var inst_89477__$1 = cljs.core._conj.call(null,inst_89467,inst_89476);
var inst_89478__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89477__$1);
var state_89594__$1 = (function (){var statearr_89634 = state_89594;
(statearr_89634[(7)] = inst_89477__$1);

(statearr_89634[(21)] = inst_89478__$1);

return statearr_89634;
})();
if(cljs.core.truth_(inst_89478__$1)){
var statearr_89635_89877 = state_89594__$1;
(statearr_89635_89877[(1)] = (6));

} else {
var statearr_89636_89878 = state_89594__$1;
(statearr_89636_89878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (14))){
var inst_89522 = (state_89594[(13)]);
var inst_89532 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89533 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89534 = cljs.core.List.EMPTY;
var inst_89535 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89536 = cljs.core.cons.call(null,inst_89535,inst_89522);
var inst_89537 = cljs.core._conj.call(null,inst_89534,inst_89536);
var inst_89538 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89539 = cljs.core._conj.call(null,inst_89537,inst_89538);
var inst_89540 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89533,inst_89539,null];
var inst_89541 = cljs.core.PersistentHashMap.fromArrays(inst_89532,inst_89540);
var inst_89542 = cljs.test.do_report.call(null,inst_89541);
var state_89594__$1 = state_89594;
var statearr_89637_89879 = state_89594__$1;
(statearr_89637_89879[(2)] = inst_89542);

(statearr_89637_89879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (16))){
var inst_89591 = (state_89594[(2)]);
var inst_89592 = done.call(null);
var state_89594__$1 = (function (){var statearr_89638 = state_89594;
(statearr_89638[(22)] = inst_89591);

return statearr_89638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89594__$1,inst_89592);
} else {
if((state_val_89595 === (10))){
var inst_89502 = (state_89594[(2)]);
var inst_89503 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89504 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89505 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89504,inst_89502,null];
var inst_89506 = cljs.core.PersistentHashMap.fromArrays(inst_89503,inst_89505);
var inst_89507 = cljs.test.do_report.call(null,inst_89506);
var state_89594__$1 = state_89594;
var statearr_89639_89880 = state_89594__$1;
(statearr_89639_89880[(2)] = inst_89507);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89595 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89594,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_89556 = cljs.core.List.EMPTY;
var inst_89557 = cljs.core._conj.call(null,inst_89556,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89561 = cljs.core.async.chan.call(null,(1));
var inst_89562 = (function (){var c__9318__auto____$1 = inst_89561;
return ((function (c__9318__auto____$1,_,inst_89556,inst_89557,inst_89561,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89556,inst_89557,inst_89561,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_89559){
var state_val_89560 = (state_89559[(1)]);
if((state_val_89560 === (1))){
var state_89559__$1 = state_89559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89559__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89556,inst_89557,inst_89561,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89556,inst_89557,inst_89561,state_val_89595,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89643 = [null,null,null,null,null,null,null];
(statearr_89643[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89643[(1)] = (1));

return statearr_89643;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89559){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89644){if((e89644 instanceof Object)){
var ex__9301__auto__ = e89644;
var statearr_89645_89881 = state_89559;
(statearr_89645_89881[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89882 = state_89559;
state_89559 = G__89882;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89559){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89556,inst_89557,inst_89561,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89646 = f__9319__auto__.call(null);
(statearr_89646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89556,inst_89557,inst_89561,state_val_89595,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_89563 = cljs.core.async.impl.dispatch.run.call(null,inst_89562);
var inst_89564 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_89561);
var state_89594__$1 = (function (){var statearr_89647 = state_89594;
(statearr_89647[(18)] = inst_89557);

(statearr_89647[(23)] = inst_89563);

return statearr_89647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89594__$1,(19),inst_89564);
} else {
if((state_val_89595 === (8))){
var inst_89478 = (state_89594[(21)]);
var inst_89499 = (state_89594[(2)]);
var state_89594__$1 = (function (){var statearr_89648 = state_89594;
(statearr_89648[(24)] = inst_89499);

return statearr_89648;
})();
var statearr_89649_89883 = state_89594__$1;
(statearr_89649_89883[(2)] = inst_89478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89653[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89653[(1)] = (1));

return statearr_89653;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89594){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89654){if((e89654 instanceof Object)){
var ex__9301__auto__ = e89654;
var statearr_89655_89884 = state_89594;
(statearr_89655_89884[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89885 = state_89594;
state_89594 = G__89885;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89594){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_89656 = f__9319__auto__.call(null);
(statearr_89656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_89656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test89453.prototype.apply = (function (self__,args89456){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args89456)));
});

drop_dot.core_test.t_drop_dot$core_test89453.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_89794){
var state_val_89795 = (state_89794[(1)]);
if((state_val_89795 === (7))){
var inst_89677 = (state_89794[(7)]);
var inst_89687 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89688 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_89689 = cljs.core.List.EMPTY;
var inst_89690 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89691 = cljs.core.cons.call(null,inst_89690,inst_89677);
var inst_89692 = cljs.core._conj.call(null,inst_89689,inst_89691);
var inst_89693 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89694 = cljs.core._conj.call(null,inst_89692,inst_89693);
var inst_89695 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89688,inst_89694,null];
var inst_89696 = cljs.core.PersistentHashMap.fromArrays(inst_89687,inst_89695);
var inst_89697 = cljs.test.do_report.call(null,inst_89696);
var state_89794__$1 = state_89794;
var statearr_89796_89886 = state_89794__$1;
(statearr_89796_89886[(2)] = inst_89697);

(statearr_89796_89886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (20))){
var inst_89767 = (state_89794[(8)]);
var inst_89770 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89771 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89772 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89767);
var inst_89773 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89771,inst_89772,null];
var inst_89774 = cljs.core.PersistentHashMap.fromArrays(inst_89770,inst_89773);
var inst_89775 = cljs.test.do_report.call(null,inst_89774);
var state_89794__$1 = state_89794;
var statearr_89797_89887 = state_89794__$1;
(statearr_89797_89887[(2)] = inst_89775);

(statearr_89797_89887[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (1))){
var state_89794__$1 = state_89794;
var statearr_89798_89888 = state_89794__$1;
(statearr_89798_89888[(2)] = null);

(statearr_89798_89888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89794,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89666 = cljs.core.List.EMPTY;
var inst_89667 = cljs.core._conj.call(null,inst_89666,"NOTICE: ");
var inst_89671 = cljs.core.async.chan.call(null,(1));
var inst_89672 = (function (){var c__9318__auto____$1 = inst_89671;
return ((function (c__9318__auto____$1,_,inst_89666,inst_89667,inst_89671,state_val_89795,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89666,inst_89667,inst_89671,state_val_89795,c__9318__auto__,___10644__auto__){
return (function (state_89669){
var state_val_89670 = (state_89669[(1)]);
if((state_val_89670 === (1))){
var state_89669__$1 = state_89669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89669__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89666,inst_89667,inst_89671,state_val_89795,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89666,inst_89667,inst_89671,state_val_89795,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89802 = [null,null,null,null,null,null,null];
(statearr_89802[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89802[(1)] = (1));

return statearr_89802;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89669){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89803){if((e89803 instanceof Object)){
var ex__9301__auto__ = e89803;
var statearr_89804_89889 = state_89669;
(statearr_89804_89889[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89890 = state_89669;
state_89669 = G__89890;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89669){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89666,inst_89667,inst_89671,state_val_89795,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89805 = f__9319__auto__.call(null);
(statearr_89805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89666,inst_89667,inst_89671,state_val_89795,c__9318__auto__,___10644__auto__))
})();
var inst_89673 = cljs.core.async.impl.dispatch.run.call(null,inst_89672);
var inst_89674 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_89671);
var state_89794__$1 = (function (){var statearr_89806 = state_89794;
(statearr_89806[(9)] = inst_89667);

(statearr_89806[(10)] = inst_89673);

return statearr_89806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89794__$1,(5),inst_89674);
} else {
if((state_val_89795 === (15))){
var inst_89723 = (state_89794[(11)]);
var inst_89744 = (state_89794[(2)]);
var state_89794__$1 = (function (){var statearr_89807 = state_89794;
(statearr_89807[(12)] = inst_89744);

return statearr_89807;
})();
var statearr_89808_89891 = state_89794__$1;
(statearr_89808_89891[(2)] = inst_89723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (21))){
var inst_89767 = (state_89794[(8)]);
var inst_89777 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89778 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89779 = cljs.core.List.EMPTY;
var inst_89780 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89781 = cljs.core.cons.call(null,inst_89780,inst_89767);
var inst_89782 = cljs.core._conj.call(null,inst_89779,inst_89781);
var inst_89783 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89784 = cljs.core._conj.call(null,inst_89782,inst_89783);
var inst_89785 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89778,inst_89784,null];
var inst_89786 = cljs.core.PersistentHashMap.fromArrays(inst_89777,inst_89785);
var inst_89787 = cljs.test.do_report.call(null,inst_89786);
var state_89794__$1 = state_89794;
var statearr_89809_89892 = state_89794__$1;
(statearr_89809_89892[(2)] = inst_89787);

(statearr_89809_89892[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (13))){
var inst_89722 = (state_89794[(13)]);
var inst_89725 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89726 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89727 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89722);
var inst_89728 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89726,inst_89727,null];
var inst_89729 = cljs.core.PersistentHashMap.fromArrays(inst_89725,inst_89728);
var inst_89730 = cljs.test.do_report.call(null,inst_89729);
var state_89794__$1 = state_89794;
var statearr_89810_89893 = state_89794__$1;
(statearr_89810_89893[(2)] = inst_89730);

(statearr_89810_89893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (22))){
var inst_89768 = (state_89794[(14)]);
var inst_89789 = (state_89794[(2)]);
var state_89794__$1 = (function (){var statearr_89811 = state_89794;
(statearr_89811[(15)] = inst_89789);

return statearr_89811;
})();
var statearr_89812_89894 = state_89794__$1;
(statearr_89812_89894[(2)] = inst_89768);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (6))){
var inst_89677 = (state_89794[(7)]);
var inst_89680 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89681 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_89682 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89677);
var inst_89683 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89681,inst_89682,null];
var inst_89684 = cljs.core.PersistentHashMap.fromArrays(inst_89680,inst_89683);
var inst_89685 = cljs.test.do_report.call(null,inst_89684);
var state_89794__$1 = state_89794;
var statearr_89813_89895 = state_89794__$1;
(statearr_89813_89895[(2)] = inst_89685);

(statearr_89813_89895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (17))){
var inst_89747 = (state_89794[(2)]);
var inst_89748 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89749 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89750 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89749,inst_89747,null];
var inst_89751 = cljs.core.PersistentHashMap.fromArrays(inst_89748,inst_89750);
var inst_89752 = cljs.test.do_report.call(null,inst_89751);
var state_89794__$1 = state_89794;
var statearr_89814_89896 = state_89794__$1;
(statearr_89814_89896[(2)] = inst_89752);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (3))){
var inst_89657 = (state_89794[(2)]);
var inst_89658 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89659 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_89660 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89659,inst_89657,null];
var inst_89661 = cljs.core.PersistentHashMap.fromArrays(inst_89658,inst_89660);
var inst_89662 = cljs.test.do_report.call(null,inst_89661);
var state_89794__$1 = state_89794;
var statearr_89815_89897 = state_89794__$1;
(statearr_89815_89897[(2)] = inst_89662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (12))){
var inst_89722 = (state_89794[(13)]);
var inst_89723 = (state_89794[(11)]);
var inst_89712 = (state_89794[(16)]);
var inst_89721 = (state_89794[(2)]);
var inst_89722__$1 = cljs.core._conj.call(null,inst_89712,inst_89721);
var inst_89723__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89722__$1);
var state_89794__$1 = (function (){var statearr_89816 = state_89794;
(statearr_89816[(13)] = inst_89722__$1);

(statearr_89816[(11)] = inst_89723__$1);

return statearr_89816;
})();
if(cljs.core.truth_(inst_89723__$1)){
var statearr_89817_89898 = state_89794__$1;
(statearr_89817_89898[(1)] = (13));

} else {
var statearr_89818_89899 = state_89794__$1;
(statearr_89818_89899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (2))){
var inst_89701 = (state_89794[(2)]);
var state_89794__$1 = (function (){var statearr_89819 = state_89794;
(statearr_89819[(17)] = inst_89701);

return statearr_89819;
})();
var statearr_89820_89900 = state_89794__$1;
(statearr_89820_89900[(2)] = null);

(statearr_89820_89900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (19))){
var inst_89768 = (state_89794[(14)]);
var inst_89767 = (state_89794[(8)]);
var inst_89757 = (state_89794[(18)]);
var inst_89766 = (state_89794[(2)]);
var inst_89767__$1 = cljs.core._conj.call(null,inst_89757,inst_89766);
var inst_89768__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89767__$1);
var state_89794__$1 = (function (){var statearr_89821 = state_89794;
(statearr_89821[(14)] = inst_89768__$1);

(statearr_89821[(8)] = inst_89767__$1);

return statearr_89821;
})();
if(cljs.core.truth_(inst_89768__$1)){
var statearr_89822_89901 = state_89794__$1;
(statearr_89822_89901[(1)] = (20));

} else {
var statearr_89823_89902 = state_89794__$1;
(statearr_89823_89902[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89794,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_89711 = cljs.core.List.EMPTY;
var inst_89712 = cljs.core._conj.call(null,inst_89711,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89716 = cljs.core.async.chan.call(null,(1));
var inst_89717 = (function (){var c__9318__auto____$1 = inst_89716;
return ((function (c__9318__auto____$1,_,inst_89711,inst_89712,inst_89716,state_val_89795,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89711,inst_89712,inst_89716,state_val_89795,c__9318__auto__,___10644__auto__){
return (function (state_89714){
var state_val_89715 = (state_89714[(1)]);
if((state_val_89715 === (1))){
var state_89714__$1 = state_89714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89714__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89711,inst_89712,inst_89716,state_val_89795,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89711,inst_89712,inst_89716,state_val_89795,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89827 = [null,null,null,null,null,null,null];
(statearr_89827[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89827[(1)] = (1));

return statearr_89827;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89714){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89828){if((e89828 instanceof Object)){
var ex__9301__auto__ = e89828;
var statearr_89829_89903 = state_89714;
(statearr_89829_89903[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89904 = state_89714;
state_89714 = G__89904;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89714){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89711,inst_89712,inst_89716,state_val_89795,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89830 = f__9319__auto__.call(null);
(statearr_89830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89711,inst_89712,inst_89716,state_val_89795,c__9318__auto__,___10644__auto__))
})();
var inst_89718 = cljs.core.async.impl.dispatch.run.call(null,inst_89717);
var inst_89719 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_89716);
var state_89794__$1 = (function (){var statearr_89831 = state_89794;
(statearr_89831[(19)] = inst_89718);

(statearr_89831[(16)] = inst_89712);

return statearr_89831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89794__$1,(12),inst_89719);
} else {
if((state_val_89795 === (9))){
var inst_89746 = (state_89794[(2)]);
var state_89794__$1 = (function (){var statearr_89832 = state_89794;
(statearr_89832[(20)] = inst_89746);

return statearr_89832;
})();
var statearr_89833_89905 = state_89794__$1;
(statearr_89833_89905[(2)] = null);

(statearr_89833_89905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (5))){
var inst_89667 = (state_89794[(9)]);
var inst_89678 = (state_89794[(21)]);
var inst_89677 = (state_89794[(7)]);
var inst_89676 = (state_89794[(2)]);
var inst_89677__$1 = cljs.core._conj.call(null,inst_89667,inst_89676);
var inst_89678__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89677__$1);
var state_89794__$1 = (function (){var statearr_89834 = state_89794;
(statearr_89834[(21)] = inst_89678__$1);

(statearr_89834[(7)] = inst_89677__$1);

return statearr_89834;
})();
if(cljs.core.truth_(inst_89678__$1)){
var statearr_89835_89906 = state_89794__$1;
(statearr_89835_89906[(1)] = (6));

} else {
var statearr_89836_89907 = state_89794__$1;
(statearr_89836_89907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (14))){
var inst_89722 = (state_89794[(13)]);
var inst_89732 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89733 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89734 = cljs.core.List.EMPTY;
var inst_89735 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89736 = cljs.core.cons.call(null,inst_89735,inst_89722);
var inst_89737 = cljs.core._conj.call(null,inst_89734,inst_89736);
var inst_89738 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89739 = cljs.core._conj.call(null,inst_89737,inst_89738);
var inst_89740 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89733,inst_89739,null];
var inst_89741 = cljs.core.PersistentHashMap.fromArrays(inst_89732,inst_89740);
var inst_89742 = cljs.test.do_report.call(null,inst_89741);
var state_89794__$1 = state_89794;
var statearr_89837_89908 = state_89794__$1;
(statearr_89837_89908[(2)] = inst_89742);

(statearr_89837_89908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (16))){
var inst_89791 = (state_89794[(2)]);
var inst_89792 = done.call(null);
var state_89794__$1 = (function (){var statearr_89838 = state_89794;
(statearr_89838[(22)] = inst_89791);

return statearr_89838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89794__$1,inst_89792);
} else {
if((state_val_89795 === (10))){
var inst_89702 = (state_89794[(2)]);
var inst_89703 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89704 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_89705 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89704,inst_89702,null];
var inst_89706 = cljs.core.PersistentHashMap.fromArrays(inst_89703,inst_89705);
var inst_89707 = cljs.test.do_report.call(null,inst_89706);
var state_89794__$1 = state_89794;
var statearr_89839_89909 = state_89794__$1;
(statearr_89839_89909[(2)] = inst_89707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89795 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89794,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_89756 = cljs.core.List.EMPTY;
var inst_89757 = cljs.core._conj.call(null,inst_89756,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_89761 = cljs.core.async.chan.call(null,(1));
var inst_89762 = (function (){var c__9318__auto____$1 = inst_89761;
return ((function (c__9318__auto____$1,_,inst_89756,inst_89757,inst_89761,state_val_89795,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_89756,inst_89757,inst_89761,state_val_89795,c__9318__auto__,___10644__auto__){
return (function (state_89759){
var state_val_89760 = (state_89759[(1)]);
if((state_val_89760 === (1))){
var state_89759__$1 = state_89759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89759__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_89756,inst_89757,inst_89761,state_val_89795,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_89756,inst_89757,inst_89761,state_val_89795,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89843 = [null,null,null,null,null,null,null];
(statearr_89843[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89843[(1)] = (1));

return statearr_89843;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89759){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89844){if((e89844 instanceof Object)){
var ex__9301__auto__ = e89844;
var statearr_89845_89910 = state_89759;
(statearr_89845_89910[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89911 = state_89759;
state_89759 = G__89911;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89759){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_89756,inst_89757,inst_89761,state_val_89795,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89846 = f__9319__auto__.call(null);
(statearr_89846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_89846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_89756,inst_89757,inst_89761,state_val_89795,c__9318__auto__,___10644__auto__))
})();
var inst_89763 = cljs.core.async.impl.dispatch.run.call(null,inst_89762);
var inst_89764 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_89761);
var state_89794__$1 = (function (){var statearr_89847 = state_89794;
(statearr_89847[(23)] = inst_89763);

(statearr_89847[(18)] = inst_89757);

return statearr_89847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89794__$1,(19),inst_89764);
} else {
if((state_val_89795 === (8))){
var inst_89678 = (state_89794[(21)]);
var inst_89699 = (state_89794[(2)]);
var state_89794__$1 = (function (){var statearr_89848 = state_89794;
(statearr_89848[(24)] = inst_89699);

return statearr_89848;
})();
var statearr_89849_89912 = state_89794__$1;
(statearr_89849_89912[(2)] = inst_89678);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_89853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89853[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_89853[(1)] = (1));

return statearr_89853;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_89794){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_89794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e89854){if((e89854 instanceof Object)){
var ex__9301__auto__ = e89854;
var statearr_89855_89913 = state_89794;
(statearr_89855_89913[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89914 = state_89794;
state_89794 = G__89914;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_89794){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_89794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_89856 = f__9319__auto__.call(null);
(statearr_89856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_89856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test89453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta89454","meta89454",1522172793,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test89453.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test89453.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test89453";

drop_dot.core_test.t_drop_dot$core_test89453.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test89453");
});

drop_dot.core_test.__GT_t_drop_dot$core_test89453 = (function drop_dot$core_test$__GT_t_drop_dot$core_test89453(meta89454){
return (new drop_dot.core_test.t_drop_dot$core_test89453(meta89454));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test89453(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2043608325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2088597056,null),"test/drop_dot/core_test.cljs",72,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test89915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test89915 = (function (meta89916){
this.meta89916 = meta89916;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test89915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89917,meta89916__$1){
var self__ = this;
var _89917__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test89915(meta89916__$1));
});

drop_dot.core_test.t_drop_dot$core_test89915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89917){
var self__ = this;
var _89917__$1 = this;
return self__.meta89916;
});

drop_dot.core_test.t_drop_dot$core_test89915.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test89915.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_90039){
var state_val_90040 = (state_90039[(1)]);
if((state_val_90040 === (7))){
var inst_89934 = (state_90039[(7)]);
var inst_89944 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89945 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_89946 = cljs.core.List.EMPTY;
var inst_89947 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_89948 = cljs.core.cons.call(null,inst_89947,inst_89934);
var inst_89949 = cljs.core._conj.call(null,inst_89946,inst_89948);
var inst_89950 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89951 = cljs.core._conj.call(null,inst_89949,inst_89950);
var inst_89952 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89945,inst_89951,null];
var inst_89953 = cljs.core.PersistentHashMap.fromArrays(inst_89944,inst_89952);
var inst_89954 = cljs.test.do_report.call(null,inst_89953);
var state_90039__$1 = state_90039;
var statearr_90041_90245 = state_90039__$1;
(statearr_90041_90245[(2)] = inst_89954);

(statearr_90041_90245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (20))){
var inst_90012 = (state_90039[(8)]);
var inst_90015 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90016 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_90017 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_90012);
var inst_90018 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_90016,inst_90017,null];
var inst_90019 = cljs.core.PersistentHashMap.fromArrays(inst_90015,inst_90018);
var inst_90020 = cljs.test.do_report.call(null,inst_90019);
var state_90039__$1 = state_90039;
var statearr_90042_90246 = state_90039__$1;
(statearr_90042_90246[(2)] = inst_90020);

(statearr_90042_90246[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (1))){
var inst_89919 = cljs.core.async.chan.call(null,(1));
var state_90039__$1 = (function (){var statearr_90043 = state_90039;
(statearr_90043[(9)] = inst_89919);

return statearr_90043;
})();
var statearr_90044_90247 = state_90039__$1;
(statearr_90044_90247[(2)] = null);

(statearr_90044_90247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90039,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_89929 = cljs.core.List.EMPTY;
var inst_89930 = cljs.core._conj.call(null,inst_89929,"~/.TDD-this-file-in-dot-drop-dot");
var inst_89931 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_90039__$1 = (function (){var statearr_90045 = state_90039;
(statearr_90045[(10)] = inst_89930);

return statearr_90045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90039__$1,(5),inst_89931);
} else {
if((state_val_90040 === (15))){
var inst_89974 = (state_90039[(11)]);
var inst_89995 = (state_90039[(2)]);
var state_90039__$1 = (function (){var statearr_90046 = state_90039;
(statearr_90046[(12)] = inst_89995);

return statearr_90046;
})();
var statearr_90047_90248 = state_90039__$1;
(statearr_90047_90248[(2)] = inst_89974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (21))){
var inst_90012 = (state_90039[(8)]);
var inst_90022 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90023 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_90024 = cljs.core.List.EMPTY;
var inst_90025 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_90026 = cljs.core.cons.call(null,inst_90025,inst_90012);
var inst_90027 = cljs.core._conj.call(null,inst_90024,inst_90026);
var inst_90028 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_90029 = cljs.core._conj.call(null,inst_90027,inst_90028);
var inst_90030 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_90023,inst_90029,null];
var inst_90031 = cljs.core.PersistentHashMap.fromArrays(inst_90022,inst_90030);
var inst_90032 = cljs.test.do_report.call(null,inst_90031);
var state_90039__$1 = state_90039;
var statearr_90048_90249 = state_90039__$1;
(statearr_90048_90249[(2)] = inst_90032);

(statearr_90048_90249[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (13))){
var inst_89973 = (state_90039[(13)]);
var inst_89976 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89977 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_89978 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_89973);
var inst_89979 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89977,inst_89978,null];
var inst_89980 = cljs.core.PersistentHashMap.fromArrays(inst_89976,inst_89979);
var inst_89981 = cljs.test.do_report.call(null,inst_89980);
var state_90039__$1 = state_90039;
var statearr_90049_90250 = state_90039__$1;
(statearr_90049_90250[(2)] = inst_89981);

(statearr_90049_90250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (22))){
var inst_90013 = (state_90039[(14)]);
var inst_90034 = (state_90039[(2)]);
var state_90039__$1 = (function (){var statearr_90050 = state_90039;
(statearr_90050[(15)] = inst_90034);

return statearr_90050;
})();
var statearr_90051_90251 = state_90039__$1;
(statearr_90051_90251[(2)] = inst_90013);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (6))){
var inst_89934 = (state_90039[(7)]);
var inst_89937 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89938 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_89939 = cljs.core.cons.call(null,cljs.core._EQ_,inst_89934);
var inst_89940 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_89938,inst_89939,null];
var inst_89941 = cljs.core.PersistentHashMap.fromArrays(inst_89937,inst_89940);
var inst_89942 = cljs.test.do_report.call(null,inst_89941);
var state_90039__$1 = state_90039;
var statearr_90052_90252 = state_90039__$1;
(statearr_90052_90252[(2)] = inst_89942);

(statearr_90052_90252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (17))){
var inst_89998 = (state_90039[(2)]);
var inst_89999 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90000 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_90001 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_90000,inst_89998,null];
var inst_90002 = cljs.core.PersistentHashMap.fromArrays(inst_89999,inst_90001);
var inst_90003 = cljs.test.do_report.call(null,inst_90002);
var state_90039__$1 = state_90039;
var statearr_90053_90253 = state_90039__$1;
(statearr_90053_90253[(2)] = inst_90003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (3))){
var inst_89920 = (state_90039[(2)]);
var inst_89921 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89922 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_89923 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89922,inst_89920,null];
var inst_89924 = cljs.core.PersistentHashMap.fromArrays(inst_89921,inst_89923);
var inst_89925 = cljs.test.do_report.call(null,inst_89924);
var state_90039__$1 = state_90039;
var statearr_90054_90254 = state_90039__$1;
(statearr_90054_90254[(2)] = inst_89925);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (12))){
var inst_89974 = (state_90039[(11)]);
var inst_89969 = (state_90039[(16)]);
var inst_89973 = (state_90039[(13)]);
var inst_89972 = (state_90039[(2)]);
var inst_89973__$1 = cljs.core._conj.call(null,inst_89969,inst_89972);
var inst_89974__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_89973__$1);
var state_90039__$1 = (function (){var statearr_90055 = state_90039;
(statearr_90055[(11)] = inst_89974__$1);

(statearr_90055[(13)] = inst_89973__$1);

return statearr_90055;
})();
if(cljs.core.truth_(inst_89974__$1)){
var statearr_90056_90255 = state_90039__$1;
(statearr_90056_90255[(1)] = (13));

} else {
var statearr_90057_90256 = state_90039__$1;
(statearr_90057_90256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (2))){
var inst_89958 = (state_90039[(2)]);
var state_90039__$1 = (function (){var statearr_90058 = state_90039;
(statearr_90058[(17)] = inst_89958);

return statearr_90058;
})();
var statearr_90059_90257 = state_90039__$1;
(statearr_90059_90257[(2)] = null);

(statearr_90059_90257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (19))){
var inst_90012 = (state_90039[(8)]);
var inst_90008 = (state_90039[(18)]);
var inst_90013 = (state_90039[(14)]);
var inst_90011 = (state_90039[(2)]);
var inst_90012__$1 = cljs.core._conj.call(null,inst_90008,inst_90011);
var inst_90013__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_90012__$1);
var state_90039__$1 = (function (){var statearr_90060 = state_90039;
(statearr_90060[(8)] = inst_90012__$1);

(statearr_90060[(14)] = inst_90013__$1);

return statearr_90060;
})();
if(cljs.core.truth_(inst_90013__$1)){
var statearr_90061_90258 = state_90039__$1;
(statearr_90061_90258[(1)] = (20));

} else {
var statearr_90062_90259 = state_90039__$1;
(statearr_90062_90259[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90039,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_89968 = cljs.core.List.EMPTY;
var inst_89969 = cljs.core._conj.call(null,inst_89968,"ERROR: ");
var inst_89970 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_90039__$1 = (function (){var statearr_90063 = state_90039;
(statearr_90063[(16)] = inst_89969);

return statearr_90063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90039__$1,(12),inst_89970);
} else {
if((state_val_90040 === (9))){
var inst_89997 = (state_90039[(2)]);
var state_90039__$1 = (function (){var statearr_90064 = state_90039;
(statearr_90064[(19)] = inst_89997);

return statearr_90064;
})();
var statearr_90065_90260 = state_90039__$1;
(statearr_90065_90260[(2)] = null);

(statearr_90065_90260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (5))){
var inst_89934 = (state_90039[(7)]);
var inst_89935 = (state_90039[(20)]);
var inst_89930 = (state_90039[(10)]);
var inst_89933 = (state_90039[(2)]);
var inst_89934__$1 = cljs.core._conj.call(null,inst_89930,inst_89933);
var inst_89935__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_89934__$1);
var state_90039__$1 = (function (){var statearr_90066 = state_90039;
(statearr_90066[(7)] = inst_89934__$1);

(statearr_90066[(20)] = inst_89935__$1);

return statearr_90066;
})();
if(cljs.core.truth_(inst_89935__$1)){
var statearr_90067_90261 = state_90039__$1;
(statearr_90067_90261[(1)] = (6));

} else {
var statearr_90068_90262 = state_90039__$1;
(statearr_90068_90262[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (14))){
var inst_89973 = (state_90039[(13)]);
var inst_89983 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89984 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_89985 = cljs.core.List.EMPTY;
var inst_89986 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_89987 = cljs.core.cons.call(null,inst_89986,inst_89973);
var inst_89988 = cljs.core._conj.call(null,inst_89985,inst_89987);
var inst_89989 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_89990 = cljs.core._conj.call(null,inst_89988,inst_89989);
var inst_89991 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_89984,inst_89990,null];
var inst_89992 = cljs.core.PersistentHashMap.fromArrays(inst_89983,inst_89991);
var inst_89993 = cljs.test.do_report.call(null,inst_89992);
var state_90039__$1 = state_90039;
var statearr_90069_90263 = state_90039__$1;
(statearr_90069_90263[(2)] = inst_89993);

(statearr_90069_90263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (16))){
var inst_90036 = (state_90039[(2)]);
var inst_90037 = done.call(null);
var state_90039__$1 = (function (){var statearr_90070 = state_90039;
(statearr_90070[(21)] = inst_90036);

return statearr_90070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90039__$1,inst_90037);
} else {
if((state_val_90040 === (10))){
var inst_89959 = (state_90039[(2)]);
var inst_89960 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_89961 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_89962 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_89961,inst_89959,null];
var inst_89963 = cljs.core.PersistentHashMap.fromArrays(inst_89960,inst_89962);
var inst_89964 = cljs.test.do_report.call(null,inst_89963);
var state_90039__$1 = state_90039;
var statearr_90071_90264 = state_90039__$1;
(statearr_90071_90264[(2)] = inst_89964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90040 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90039,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_90007 = cljs.core.List.EMPTY;
var inst_90008 = cljs.core._conj.call(null,inst_90007,"ERROR: ");
var inst_90009 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_90039__$1 = (function (){var statearr_90072 = state_90039;
(statearr_90072[(18)] = inst_90008);

return statearr_90072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90039__$1,(19),inst_90009);
} else {
if((state_val_90040 === (8))){
var inst_89935 = (state_90039[(20)]);
var inst_89956 = (state_90039[(2)]);
var state_90039__$1 = (function (){var statearr_90073 = state_90039;
(statearr_90073[(22)] = inst_89956);

return statearr_90073;
})();
var statearr_90074_90265 = state_90039__$1;
(statearr_90074_90265[(2)] = inst_89935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_90078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90078[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_90078[(1)] = (1));

return statearr_90078;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_90039){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90079){if((e90079 instanceof Object)){
var ex__9301__auto__ = e90079;
var statearr_90080_90266 = state_90039;
(statearr_90080_90266[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90267 = state_90039;
state_90039 = G__90267;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_90039){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_90039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_90081 = f__9319__auto__.call(null);
(statearr_90081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test89915.prototype.apply = (function (self__,args89918){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args89918)));
});

drop_dot.core_test.t_drop_dot$core_test89915.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_90202){
var state_val_90203 = (state_90202[(1)]);
if((state_val_90203 === (7))){
var inst_90097 = (state_90202[(7)]);
var inst_90107 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90108 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_90109 = cljs.core.List.EMPTY;
var inst_90110 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_90111 = cljs.core.cons.call(null,inst_90110,inst_90097);
var inst_90112 = cljs.core._conj.call(null,inst_90109,inst_90111);
var inst_90113 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_90114 = cljs.core._conj.call(null,inst_90112,inst_90113);
var inst_90115 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_90108,inst_90114,null];
var inst_90116 = cljs.core.PersistentHashMap.fromArrays(inst_90107,inst_90115);
var inst_90117 = cljs.test.do_report.call(null,inst_90116);
var state_90202__$1 = state_90202;
var statearr_90204_90268 = state_90202__$1;
(statearr_90204_90268[(2)] = inst_90117);

(statearr_90204_90268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (20))){
var inst_90175 = (state_90202[(8)]);
var inst_90178 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90179 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_90180 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_90175);
var inst_90181 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_90179,inst_90180,null];
var inst_90182 = cljs.core.PersistentHashMap.fromArrays(inst_90178,inst_90181);
var inst_90183 = cljs.test.do_report.call(null,inst_90182);
var state_90202__$1 = state_90202;
var statearr_90205_90269 = state_90202__$1;
(statearr_90205_90269[(2)] = inst_90183);

(statearr_90205_90269[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (1))){
var inst_90082 = cljs.core.async.chan.call(null,(1));
var state_90202__$1 = (function (){var statearr_90206 = state_90202;
(statearr_90206[(9)] = inst_90082);

return statearr_90206;
})();
var statearr_90207_90270 = state_90202__$1;
(statearr_90207_90270[(2)] = null);

(statearr_90207_90270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90202,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_90092 = cljs.core.List.EMPTY;
var inst_90093 = cljs.core._conj.call(null,inst_90092,"~/.TDD-this-file-in-dot-drop-dot");
var inst_90094 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_90202__$1 = (function (){var statearr_90208 = state_90202;
(statearr_90208[(10)] = inst_90093);

return statearr_90208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90202__$1,(5),inst_90094);
} else {
if((state_val_90203 === (15))){
var inst_90137 = (state_90202[(11)]);
var inst_90158 = (state_90202[(2)]);
var state_90202__$1 = (function (){var statearr_90209 = state_90202;
(statearr_90209[(12)] = inst_90158);

return statearr_90209;
})();
var statearr_90210_90271 = state_90202__$1;
(statearr_90210_90271[(2)] = inst_90137);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (21))){
var inst_90175 = (state_90202[(8)]);
var inst_90185 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90186 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_90187 = cljs.core.List.EMPTY;
var inst_90188 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_90189 = cljs.core.cons.call(null,inst_90188,inst_90175);
var inst_90190 = cljs.core._conj.call(null,inst_90187,inst_90189);
var inst_90191 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_90192 = cljs.core._conj.call(null,inst_90190,inst_90191);
var inst_90193 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_90186,inst_90192,null];
var inst_90194 = cljs.core.PersistentHashMap.fromArrays(inst_90185,inst_90193);
var inst_90195 = cljs.test.do_report.call(null,inst_90194);
var state_90202__$1 = state_90202;
var statearr_90211_90272 = state_90202__$1;
(statearr_90211_90272[(2)] = inst_90195);

(statearr_90211_90272[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (13))){
var inst_90136 = (state_90202[(13)]);
var inst_90139 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90140 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_90141 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_90136);
var inst_90142 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_90140,inst_90141,null];
var inst_90143 = cljs.core.PersistentHashMap.fromArrays(inst_90139,inst_90142);
var inst_90144 = cljs.test.do_report.call(null,inst_90143);
var state_90202__$1 = state_90202;
var statearr_90212_90273 = state_90202__$1;
(statearr_90212_90273[(2)] = inst_90144);

(statearr_90212_90273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (22))){
var inst_90176 = (state_90202[(14)]);
var inst_90197 = (state_90202[(2)]);
var state_90202__$1 = (function (){var statearr_90213 = state_90202;
(statearr_90213[(15)] = inst_90197);

return statearr_90213;
})();
var statearr_90214_90274 = state_90202__$1;
(statearr_90214_90274[(2)] = inst_90176);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (6))){
var inst_90097 = (state_90202[(7)]);
var inst_90100 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90101 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_90102 = cljs.core.cons.call(null,cljs.core._EQ_,inst_90097);
var inst_90103 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_90101,inst_90102,null];
var inst_90104 = cljs.core.PersistentHashMap.fromArrays(inst_90100,inst_90103);
var inst_90105 = cljs.test.do_report.call(null,inst_90104);
var state_90202__$1 = state_90202;
var statearr_90215_90275 = state_90202__$1;
(statearr_90215_90275[(2)] = inst_90105);

(statearr_90215_90275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (17))){
var inst_90161 = (state_90202[(2)]);
var inst_90162 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90163 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_90164 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_90163,inst_90161,null];
var inst_90165 = cljs.core.PersistentHashMap.fromArrays(inst_90162,inst_90164);
var inst_90166 = cljs.test.do_report.call(null,inst_90165);
var state_90202__$1 = state_90202;
var statearr_90216_90276 = state_90202__$1;
(statearr_90216_90276[(2)] = inst_90166);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (3))){
var inst_90083 = (state_90202[(2)]);
var inst_90084 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90085 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_90086 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_90085,inst_90083,null];
var inst_90087 = cljs.core.PersistentHashMap.fromArrays(inst_90084,inst_90086);
var inst_90088 = cljs.test.do_report.call(null,inst_90087);
var state_90202__$1 = state_90202;
var statearr_90217_90277 = state_90202__$1;
(statearr_90217_90277[(2)] = inst_90088);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (12))){
var inst_90132 = (state_90202[(16)]);
var inst_90137 = (state_90202[(11)]);
var inst_90136 = (state_90202[(13)]);
var inst_90135 = (state_90202[(2)]);
var inst_90136__$1 = cljs.core._conj.call(null,inst_90132,inst_90135);
var inst_90137__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_90136__$1);
var state_90202__$1 = (function (){var statearr_90218 = state_90202;
(statearr_90218[(11)] = inst_90137__$1);

(statearr_90218[(13)] = inst_90136__$1);

return statearr_90218;
})();
if(cljs.core.truth_(inst_90137__$1)){
var statearr_90219_90278 = state_90202__$1;
(statearr_90219_90278[(1)] = (13));

} else {
var statearr_90220_90279 = state_90202__$1;
(statearr_90220_90279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (2))){
var inst_90121 = (state_90202[(2)]);
var state_90202__$1 = (function (){var statearr_90221 = state_90202;
(statearr_90221[(17)] = inst_90121);

return statearr_90221;
})();
var statearr_90222_90280 = state_90202__$1;
(statearr_90222_90280[(2)] = null);

(statearr_90222_90280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (19))){
var inst_90171 = (state_90202[(18)]);
var inst_90176 = (state_90202[(14)]);
var inst_90175 = (state_90202[(8)]);
var inst_90174 = (state_90202[(2)]);
var inst_90175__$1 = cljs.core._conj.call(null,inst_90171,inst_90174);
var inst_90176__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_90175__$1);
var state_90202__$1 = (function (){var statearr_90223 = state_90202;
(statearr_90223[(14)] = inst_90176__$1);

(statearr_90223[(8)] = inst_90175__$1);

return statearr_90223;
})();
if(cljs.core.truth_(inst_90176__$1)){
var statearr_90224_90281 = state_90202__$1;
(statearr_90224_90281[(1)] = (20));

} else {
var statearr_90225_90282 = state_90202__$1;
(statearr_90225_90282[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90202,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_90131 = cljs.core.List.EMPTY;
var inst_90132 = cljs.core._conj.call(null,inst_90131,"ERROR: ");
var inst_90133 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_90202__$1 = (function (){var statearr_90226 = state_90202;
(statearr_90226[(16)] = inst_90132);

return statearr_90226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90202__$1,(12),inst_90133);
} else {
if((state_val_90203 === (9))){
var inst_90160 = (state_90202[(2)]);
var state_90202__$1 = (function (){var statearr_90227 = state_90202;
(statearr_90227[(19)] = inst_90160);

return statearr_90227;
})();
var statearr_90228_90283 = state_90202__$1;
(statearr_90228_90283[(2)] = null);

(statearr_90228_90283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (5))){
var inst_90098 = (state_90202[(20)]);
var inst_90097 = (state_90202[(7)]);
var inst_90093 = (state_90202[(10)]);
var inst_90096 = (state_90202[(2)]);
var inst_90097__$1 = cljs.core._conj.call(null,inst_90093,inst_90096);
var inst_90098__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_90097__$1);
var state_90202__$1 = (function (){var statearr_90229 = state_90202;
(statearr_90229[(20)] = inst_90098__$1);

(statearr_90229[(7)] = inst_90097__$1);

return statearr_90229;
})();
if(cljs.core.truth_(inst_90098__$1)){
var statearr_90230_90284 = state_90202__$1;
(statearr_90230_90284[(1)] = (6));

} else {
var statearr_90231_90285 = state_90202__$1;
(statearr_90231_90285[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (14))){
var inst_90136 = (state_90202[(13)]);
var inst_90146 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90147 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_90148 = cljs.core.List.EMPTY;
var inst_90149 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_90150 = cljs.core.cons.call(null,inst_90149,inst_90136);
var inst_90151 = cljs.core._conj.call(null,inst_90148,inst_90150);
var inst_90152 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_90153 = cljs.core._conj.call(null,inst_90151,inst_90152);
var inst_90154 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_90147,inst_90153,null];
var inst_90155 = cljs.core.PersistentHashMap.fromArrays(inst_90146,inst_90154);
var inst_90156 = cljs.test.do_report.call(null,inst_90155);
var state_90202__$1 = state_90202;
var statearr_90232_90286 = state_90202__$1;
(statearr_90232_90286[(2)] = inst_90156);

(statearr_90232_90286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (16))){
var inst_90199 = (state_90202[(2)]);
var inst_90200 = done.call(null);
var state_90202__$1 = (function (){var statearr_90233 = state_90202;
(statearr_90233[(21)] = inst_90199);

return statearr_90233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90202__$1,inst_90200);
} else {
if((state_val_90203 === (10))){
var inst_90122 = (state_90202[(2)]);
var inst_90123 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90124 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_90125 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_90124,inst_90122,null];
var inst_90126 = cljs.core.PersistentHashMap.fromArrays(inst_90123,inst_90125);
var inst_90127 = cljs.test.do_report.call(null,inst_90126);
var state_90202__$1 = state_90202;
var statearr_90234_90287 = state_90202__$1;
(statearr_90234_90287[(2)] = inst_90127);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90203 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90202,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_90170 = cljs.core.List.EMPTY;
var inst_90171 = cljs.core._conj.call(null,inst_90170,"ERROR: ");
var inst_90172 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_90202__$1 = (function (){var statearr_90235 = state_90202;
(statearr_90235[(18)] = inst_90171);

return statearr_90235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90202__$1,(19),inst_90172);
} else {
if((state_val_90203 === (8))){
var inst_90098 = (state_90202[(20)]);
var inst_90119 = (state_90202[(2)]);
var state_90202__$1 = (function (){var statearr_90236 = state_90202;
(statearr_90236[(22)] = inst_90119);

return statearr_90236;
})();
var statearr_90237_90288 = state_90202__$1;
(statearr_90237_90288[(2)] = inst_90098);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_90241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90241[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_90241[(1)] = (1));

return statearr_90241;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_90202){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90242){if((e90242 instanceof Object)){
var ex__9301__auto__ = e90242;
var statearr_90243_90289 = state_90202;
(statearr_90243_90289[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90290 = state_90202;
state_90202 = G__90290;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_90202){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_90202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90244 = f__9319__auto__.call(null);
(statearr_90244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test89915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta89916","meta89916",912285113,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test89915.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test89915.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test89915";

drop_dot.core_test.t_drop_dot$core_test89915.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test89915");
});

drop_dot.core_test.__GT_t_drop_dot$core_test89915 = (function drop_dot$core_test$__GT_t_drop_dot$core_test89915(meta89916){
return (new drop_dot.core_test.t_drop_dot$core_test89915(meta89916));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test89915(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test90291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test90291 = (function (meta90292){
this.meta90292 = meta90292;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test90291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90293,meta90292__$1){
var self__ = this;
var _90293__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test90291(meta90292__$1));
});

drop_dot.core_test.t_drop_dot$core_test90291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90293){
var self__ = this;
var _90293__$1 = this;
return self__.meta90292;
});

drop_dot.core_test.t_drop_dot$core_test90291.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test90291.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_90336){
var state_val_90337 = (state_90336[(1)]);
if((state_val_90337 === (1))){
var state_90336__$1 = state_90336;
var statearr_90338_90417 = state_90336__$1;
(statearr_90338_90417[(2)] = null);

(statearr_90338_90417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90337 === (2))){
var inst_90333 = (state_90336[(2)]);
var inst_90334 = done.call(null);
var state_90336__$1 = (function (){var statearr_90339 = state_90336;
(statearr_90339[(7)] = inst_90333);

return statearr_90339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90336__$1,inst_90334);
} else {
if((state_val_90337 === (3))){
var inst_90295 = (state_90336[(2)]);
var inst_90296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90297 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_90298 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_90297,inst_90295,null];
var inst_90299 = cljs.core.PersistentHashMap.fromArrays(inst_90296,inst_90298);
var inst_90300 = cljs.test.do_report.call(null,inst_90299);
var state_90336__$1 = state_90336;
var statearr_90340_90418 = state_90336__$1;
(statearr_90340_90418[(2)] = inst_90300);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90337 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90336,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_90304 = cljs.core.List.EMPTY;
var inst_90305 = cljs.core._conj.call(null,inst_90304,true);
var inst_90306 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_90336__$1 = (function (){var statearr_90341 = state_90336;
(statearr_90341[(8)] = inst_90305);

return statearr_90341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90336__$1,(5),inst_90306);
} else {
if((state_val_90337 === (5))){
var inst_90310 = (state_90336[(9)]);
var inst_90309 = (state_90336[(10)]);
var inst_90305 = (state_90336[(8)]);
var inst_90308 = (state_90336[(2)]);
var inst_90309__$1 = cljs.core._conj.call(null,inst_90305,inst_90308);
var inst_90310__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_90309__$1);
var state_90336__$1 = (function (){var statearr_90342 = state_90336;
(statearr_90342[(9)] = inst_90310__$1);

(statearr_90342[(10)] = inst_90309__$1);

return statearr_90342;
})();
if(cljs.core.truth_(inst_90310__$1)){
var statearr_90343_90419 = state_90336__$1;
(statearr_90343_90419[(1)] = (6));

} else {
var statearr_90344_90420 = state_90336__$1;
(statearr_90344_90420[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90337 === (6))){
var inst_90309 = (state_90336[(10)]);
var inst_90312 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90313 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_90314 = cljs.core.cons.call(null,cljs.core._EQ_,inst_90309);
var inst_90315 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_90313,inst_90314,null];
var inst_90316 = cljs.core.PersistentHashMap.fromArrays(inst_90312,inst_90315);
var inst_90317 = cljs.test.do_report.call(null,inst_90316);
var state_90336__$1 = state_90336;
var statearr_90345_90421 = state_90336__$1;
(statearr_90345_90421[(2)] = inst_90317);

(statearr_90345_90421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90337 === (7))){
var inst_90309 = (state_90336[(10)]);
var inst_90319 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90320 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_90321 = cljs.core.List.EMPTY;
var inst_90322 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_90323 = cljs.core.cons.call(null,inst_90322,inst_90309);
var inst_90324 = cljs.core._conj.call(null,inst_90321,inst_90323);
var inst_90325 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_90326 = cljs.core._conj.call(null,inst_90324,inst_90325);
var inst_90327 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_90320,inst_90326,null];
var inst_90328 = cljs.core.PersistentHashMap.fromArrays(inst_90319,inst_90327);
var inst_90329 = cljs.test.do_report.call(null,inst_90328);
var state_90336__$1 = state_90336;
var statearr_90346_90422 = state_90336__$1;
(statearr_90346_90422[(2)] = inst_90329);

(statearr_90346_90422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90337 === (8))){
var inst_90310 = (state_90336[(9)]);
var inst_90331 = (state_90336[(2)]);
var state_90336__$1 = (function (){var statearr_90347 = state_90336;
(statearr_90347[(11)] = inst_90331);

return statearr_90347;
})();
var statearr_90348_90423 = state_90336__$1;
(statearr_90348_90423[(2)] = inst_90310);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90336__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_90352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90352[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_90352[(1)] = (1));

return statearr_90352;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_90336){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90353){if((e90353 instanceof Object)){
var ex__9301__auto__ = e90353;
var statearr_90354_90424 = state_90336;
(statearr_90354_90424[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90425 = state_90336;
state_90336 = G__90425;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_90336){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_90336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_90355 = f__9319__auto__.call(null);
(statearr_90355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test90291.prototype.apply = (function (self__,args90294){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args90294)));
});

drop_dot.core_test.t_drop_dot$core_test90291.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_90397){
var state_val_90398 = (state_90397[(1)]);
if((state_val_90398 === (1))){
var state_90397__$1 = state_90397;
var statearr_90399_90426 = state_90397__$1;
(statearr_90399_90426[(2)] = null);

(statearr_90399_90426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (2))){
var inst_90394 = (state_90397[(2)]);
var inst_90395 = done.call(null);
var state_90397__$1 = (function (){var statearr_90400 = state_90397;
(statearr_90400[(7)] = inst_90394);

return statearr_90400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90397__$1,inst_90395);
} else {
if((state_val_90398 === (3))){
var inst_90356 = (state_90397[(2)]);
var inst_90357 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90358 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_90359 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_90358,inst_90356,null];
var inst_90360 = cljs.core.PersistentHashMap.fromArrays(inst_90357,inst_90359);
var inst_90361 = cljs.test.do_report.call(null,inst_90360);
var state_90397__$1 = state_90397;
var statearr_90401_90427 = state_90397__$1;
(statearr_90401_90427[(2)] = inst_90361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_90397,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_90365 = cljs.core.List.EMPTY;
var inst_90366 = cljs.core._conj.call(null,inst_90365,true);
var inst_90367 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_90397__$1 = (function (){var statearr_90402 = state_90397;
(statearr_90402[(8)] = inst_90366);

return statearr_90402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90397__$1,(5),inst_90367);
} else {
if((state_val_90398 === (5))){
var inst_90366 = (state_90397[(8)]);
var inst_90370 = (state_90397[(9)]);
var inst_90371 = (state_90397[(10)]);
var inst_90369 = (state_90397[(2)]);
var inst_90370__$1 = cljs.core._conj.call(null,inst_90366,inst_90369);
var inst_90371__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_90370__$1);
var state_90397__$1 = (function (){var statearr_90403 = state_90397;
(statearr_90403[(9)] = inst_90370__$1);

(statearr_90403[(10)] = inst_90371__$1);

return statearr_90403;
})();
if(cljs.core.truth_(inst_90371__$1)){
var statearr_90404_90428 = state_90397__$1;
(statearr_90404_90428[(1)] = (6));

} else {
var statearr_90405_90429 = state_90397__$1;
(statearr_90405_90429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (6))){
var inst_90370 = (state_90397[(9)]);
var inst_90373 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90374 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_90375 = cljs.core.cons.call(null,cljs.core._EQ_,inst_90370);
var inst_90376 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_90374,inst_90375,null];
var inst_90377 = cljs.core.PersistentHashMap.fromArrays(inst_90373,inst_90376);
var inst_90378 = cljs.test.do_report.call(null,inst_90377);
var state_90397__$1 = state_90397;
var statearr_90406_90430 = state_90397__$1;
(statearr_90406_90430[(2)] = inst_90378);

(statearr_90406_90430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (7))){
var inst_90370 = (state_90397[(9)]);
var inst_90380 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_90381 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_90382 = cljs.core.List.EMPTY;
var inst_90383 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_90384 = cljs.core.cons.call(null,inst_90383,inst_90370);
var inst_90385 = cljs.core._conj.call(null,inst_90382,inst_90384);
var inst_90386 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_90387 = cljs.core._conj.call(null,inst_90385,inst_90386);
var inst_90388 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_90381,inst_90387,null];
var inst_90389 = cljs.core.PersistentHashMap.fromArrays(inst_90380,inst_90388);
var inst_90390 = cljs.test.do_report.call(null,inst_90389);
var state_90397__$1 = state_90397;
var statearr_90407_90431 = state_90397__$1;
(statearr_90407_90431[(2)] = inst_90390);

(statearr_90407_90431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90398 === (8))){
var inst_90371 = (state_90397[(10)]);
var inst_90392 = (state_90397[(2)]);
var state_90397__$1 = (function (){var statearr_90408 = state_90397;
(statearr_90408[(11)] = inst_90392);

return statearr_90408;
})();
var statearr_90409_90432 = state_90397__$1;
(statearr_90409_90432[(2)] = inst_90371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_90413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90413[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_90413[(1)] = (1));

return statearr_90413;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_90397){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90414){if((e90414 instanceof Object)){
var ex__9301__auto__ = e90414;
var statearr_90415_90433 = state_90397;
(statearr_90415_90433[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90434 = state_90397;
state_90397 = G__90434;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_90397){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_90397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90416 = f__9319__auto__.call(null);
(statearr_90416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test90291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta90292","meta90292",95850650,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test90291.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test90291.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test90291";

drop_dot.core_test.t_drop_dot$core_test90291.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test90291");
});

drop_dot.core_test.__GT_t_drop_dot$core_test90291 = (function drop_dot$core_test$__GT_t_drop_dot$core_test90291(meta90292){
return (new drop_dot.core_test.t_drop_dot$core_test90291(meta90292));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test90291(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__10576__auto___90438 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_installed_QMARK_.call(null));
var result__10577__auto___90439 = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto___90438);
if(cljs.core.truth_(result__10577__auto___90439)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto___90438),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto___90438)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e90435){var t__10614__auto___90440 = e90435;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto___90440,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10576__auto___90441 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__10577__auto___90442 = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto___90441);
if(cljs.core.truth_(result__10577__auto___90442)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto___90441),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto___90441)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e90436){var t__10614__auto___90443 = e90436;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto___90443,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10576__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__10577__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto__);
if(cljs.core.truth_(result__10577__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10577__auto__;
}catch (e90437){var t__10614__auto__ = e90437;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"test/drop_dot/core_test.cljs",27,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map