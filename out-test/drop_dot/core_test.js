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
if(typeof drop_dot.core_test.t_drop_dot$core_test76258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test76258 = (function (meta76259){
this.meta76259 = meta76259;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test76258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76260,meta76259__$1){
var self__ = this;
var _76260__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test76258(meta76259__$1));
});

drop_dot.core_test.t_drop_dot$core_test76258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76260){
var self__ = this;
var _76260__$1 = this;
return self__.meta76259;
});

drop_dot.core_test.t_drop_dot$core_test76258.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test76258.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76399){
var state_val_76400 = (state_76399[(1)]);
if((state_val_76400 === (7))){
var inst_76282 = (state_76399[(7)]);
var inst_76292 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76293 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_76294 = cljs.core.List.EMPTY;
var inst_76295 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_76296 = cljs.core.cons.call(null,inst_76295,inst_76282);
var inst_76297 = cljs.core._conj.call(null,inst_76294,inst_76296);
var inst_76298 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76299 = cljs.core._conj.call(null,inst_76297,inst_76298);
var inst_76300 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76293,inst_76299,null];
var inst_76301 = cljs.core.PersistentHashMap.fromArrays(inst_76292,inst_76300);
var inst_76302 = cljs.test.do_report.call(null,inst_76301);
var state_76399__$1 = state_76399;
var statearr_76401_76662 = state_76399__$1;
(statearr_76401_76662[(2)] = inst_76302);

(statearr_76401_76662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (20))){
var inst_76372 = (state_76399[(8)]);
var inst_76375 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76376 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_76377 = cljs.core.cons.call(null,cljs.core._EQ_,inst_76372);
var inst_76378 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76376,inst_76377,null];
var inst_76379 = cljs.core.PersistentHashMap.fromArrays(inst_76375,inst_76378);
var inst_76380 = cljs.test.do_report.call(null,inst_76379);
var state_76399__$1 = state_76399;
var statearr_76402_76663 = state_76399__$1;
(statearr_76402_76663[(2)] = inst_76380);

(statearr_76402_76663[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (1))){
var state_76399__$1 = state_76399;
var statearr_76403_76664 = state_76399__$1;
(statearr_76403_76664[(2)] = null);

(statearr_76403_76664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76399,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_76271 = cljs.core.List.EMPTY;
var inst_76272 = cljs.core._conj.call(null,inst_76271,"ERROR:");
var inst_76276 = cljs.core.async.chan.call(null,(1));
var inst_76277 = (function (){var c__9318__auto____$1 = inst_76276;
return ((function (c__9318__auto____$1,_,inst_76271,inst_76272,inst_76276,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76271,inst_76272,inst_76276,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76274){
var state_val_76275 = (state_76274[(1)]);
if((state_val_76275 === (1))){
var state_76274__$1 = state_76274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76274__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76271,inst_76272,inst_76276,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76271,inst_76272,inst_76276,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76407 = [null,null,null,null,null,null,null];
(statearr_76407[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76407[(1)] = (1));

return statearr_76407;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76274){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76408){if((e76408 instanceof Object)){
var ex__9301__auto__ = e76408;
var statearr_76409_76665 = state_76274;
(statearr_76409_76665[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76666 = state_76274;
state_76274 = G__76666;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76274){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76271,inst_76272,inst_76276,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76410 = f__9319__auto__.call(null);
(statearr_76410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76271,inst_76272,inst_76276,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_76278 = cljs.core.async.impl.dispatch.run.call(null,inst_76277);
var inst_76279 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_76276);
var state_76399__$1 = (function (){var statearr_76411 = state_76399;
(statearr_76411[(9)] = inst_76278);

(statearr_76411[(10)] = inst_76272);

return statearr_76411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76399__$1,(5),inst_76279);
} else {
if((state_val_76400 === (15))){
var inst_76328 = (state_76399[(11)]);
var inst_76349 = (state_76399[(2)]);
var state_76399__$1 = (function (){var statearr_76412 = state_76399;
(statearr_76412[(12)] = inst_76349);

return statearr_76412;
})();
var statearr_76413_76667 = state_76399__$1;
(statearr_76413_76667[(2)] = inst_76328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (21))){
var inst_76372 = (state_76399[(8)]);
var inst_76382 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76383 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_76384 = cljs.core.List.EMPTY;
var inst_76385 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_76386 = cljs.core.cons.call(null,inst_76385,inst_76372);
var inst_76387 = cljs.core._conj.call(null,inst_76384,inst_76386);
var inst_76388 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76389 = cljs.core._conj.call(null,inst_76387,inst_76388);
var inst_76390 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76383,inst_76389,null];
var inst_76391 = cljs.core.PersistentHashMap.fromArrays(inst_76382,inst_76390);
var inst_76392 = cljs.test.do_report.call(null,inst_76391);
var state_76399__$1 = state_76399;
var statearr_76414_76668 = state_76399__$1;
(statearr_76414_76668[(2)] = inst_76392);

(statearr_76414_76668[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (13))){
var inst_76327 = (state_76399[(13)]);
var inst_76330 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76331 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_76332 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_76327);
var inst_76333 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76331,inst_76332,null];
var inst_76334 = cljs.core.PersistentHashMap.fromArrays(inst_76330,inst_76333);
var inst_76335 = cljs.test.do_report.call(null,inst_76334);
var state_76399__$1 = state_76399;
var statearr_76415_76669 = state_76399__$1;
(statearr_76415_76669[(2)] = inst_76335);

(statearr_76415_76669[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (22))){
var inst_76373 = (state_76399[(14)]);
var inst_76394 = (state_76399[(2)]);
var state_76399__$1 = (function (){var statearr_76416 = state_76399;
(statearr_76416[(15)] = inst_76394);

return statearr_76416;
})();
var statearr_76417_76670 = state_76399__$1;
(statearr_76417_76670[(2)] = inst_76373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (6))){
var inst_76282 = (state_76399[(7)]);
var inst_76285 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76286 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_76287 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_76282);
var inst_76288 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76286,inst_76287,null];
var inst_76289 = cljs.core.PersistentHashMap.fromArrays(inst_76285,inst_76288);
var inst_76290 = cljs.test.do_report.call(null,inst_76289);
var state_76399__$1 = state_76399;
var statearr_76418_76671 = state_76399__$1;
(statearr_76418_76671[(2)] = inst_76290);

(statearr_76418_76671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (17))){
var inst_76352 = (state_76399[(2)]);
var inst_76353 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76354 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_76355 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76354,inst_76352,null];
var inst_76356 = cljs.core.PersistentHashMap.fromArrays(inst_76353,inst_76355);
var inst_76357 = cljs.test.do_report.call(null,inst_76356);
var state_76399__$1 = state_76399;
var statearr_76419_76672 = state_76399__$1;
(statearr_76419_76672[(2)] = inst_76357);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (3))){
var inst_76262 = (state_76399[(2)]);
var inst_76263 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76264 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_76265 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76264,inst_76262,null];
var inst_76266 = cljs.core.PersistentHashMap.fromArrays(inst_76263,inst_76265);
var inst_76267 = cljs.test.do_report.call(null,inst_76266);
var state_76399__$1 = state_76399;
var statearr_76420_76673 = state_76399__$1;
(statearr_76420_76673[(2)] = inst_76267);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (12))){
var inst_76317 = (state_76399[(16)]);
var inst_76328 = (state_76399[(11)]);
var inst_76327 = (state_76399[(13)]);
var inst_76326 = (state_76399[(2)]);
var inst_76327__$1 = cljs.core._conj.call(null,inst_76317,inst_76326);
var inst_76328__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_76327__$1);
var state_76399__$1 = (function (){var statearr_76421 = state_76399;
(statearr_76421[(11)] = inst_76328__$1);

(statearr_76421[(13)] = inst_76327__$1);

return statearr_76421;
})();
if(cljs.core.truth_(inst_76328__$1)){
var statearr_76422_76674 = state_76399__$1;
(statearr_76422_76674[(1)] = (13));

} else {
var statearr_76423_76675 = state_76399__$1;
(statearr_76423_76675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (2))){
var inst_76306 = (state_76399[(2)]);
var state_76399__$1 = (function (){var statearr_76424 = state_76399;
(statearr_76424[(17)] = inst_76306);

return statearr_76424;
})();
var statearr_76425_76676 = state_76399__$1;
(statearr_76425_76676[(2)] = null);

(statearr_76425_76676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (19))){
var inst_76372 = (state_76399[(8)]);
var inst_76362 = (state_76399[(18)]);
var inst_76373 = (state_76399[(14)]);
var inst_76371 = (state_76399[(2)]);
var inst_76372__$1 = cljs.core._conj.call(null,inst_76362,inst_76371);
var inst_76373__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_76372__$1);
var state_76399__$1 = (function (){var statearr_76426 = state_76399;
(statearr_76426[(8)] = inst_76372__$1);

(statearr_76426[(14)] = inst_76373__$1);

return statearr_76426;
})();
if(cljs.core.truth_(inst_76373__$1)){
var statearr_76427_76677 = state_76399__$1;
(statearr_76427_76677[(1)] = (20));

} else {
var statearr_76428_76678 = state_76399__$1;
(statearr_76428_76678[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76399,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_76316 = cljs.core.List.EMPTY;
var inst_76317 = cljs.core._conj.call(null,inst_76316,"ERROR: ");
var inst_76321 = cljs.core.async.chan.call(null,(1));
var inst_76322 = (function (){var c__9318__auto____$1 = inst_76321;
return ((function (c__9318__auto____$1,_,inst_76316,inst_76317,inst_76321,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76316,inst_76317,inst_76321,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76319){
var state_val_76320 = (state_76319[(1)]);
if((state_val_76320 === (1))){
var state_76319__$1 = state_76319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76319__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76316,inst_76317,inst_76321,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76316,inst_76317,inst_76321,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76432 = [null,null,null,null,null,null,null];
(statearr_76432[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76432[(1)] = (1));

return statearr_76432;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76319){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76433){if((e76433 instanceof Object)){
var ex__9301__auto__ = e76433;
var statearr_76434_76679 = state_76319;
(statearr_76434_76679[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76680 = state_76319;
state_76319 = G__76680;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76319){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76316,inst_76317,inst_76321,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76435 = f__9319__auto__.call(null);
(statearr_76435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76316,inst_76317,inst_76321,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_76323 = cljs.core.async.impl.dispatch.run.call(null,inst_76322);
var inst_76324 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_76321);
var state_76399__$1 = (function (){var statearr_76436 = state_76399;
(statearr_76436[(16)] = inst_76317);

(statearr_76436[(19)] = inst_76323);

return statearr_76436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76399__$1,(12),inst_76324);
} else {
if((state_val_76400 === (9))){
var inst_76351 = (state_76399[(2)]);
var state_76399__$1 = (function (){var statearr_76437 = state_76399;
(statearr_76437[(20)] = inst_76351);

return statearr_76437;
})();
var statearr_76438_76681 = state_76399__$1;
(statearr_76438_76681[(2)] = null);

(statearr_76438_76681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (5))){
var inst_76282 = (state_76399[(7)]);
var inst_76272 = (state_76399[(10)]);
var inst_76283 = (state_76399[(21)]);
var inst_76281 = (state_76399[(2)]);
var inst_76282__$1 = cljs.core._conj.call(null,inst_76272,inst_76281);
var inst_76283__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_76282__$1);
var state_76399__$1 = (function (){var statearr_76439 = state_76399;
(statearr_76439[(7)] = inst_76282__$1);

(statearr_76439[(21)] = inst_76283__$1);

return statearr_76439;
})();
if(cljs.core.truth_(inst_76283__$1)){
var statearr_76440_76682 = state_76399__$1;
(statearr_76440_76682[(1)] = (6));

} else {
var statearr_76441_76683 = state_76399__$1;
(statearr_76441_76683[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (14))){
var inst_76327 = (state_76399[(13)]);
var inst_76337 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76338 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_76339 = cljs.core.List.EMPTY;
var inst_76340 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_76341 = cljs.core.cons.call(null,inst_76340,inst_76327);
var inst_76342 = cljs.core._conj.call(null,inst_76339,inst_76341);
var inst_76343 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76344 = cljs.core._conj.call(null,inst_76342,inst_76343);
var inst_76345 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76338,inst_76344,null];
var inst_76346 = cljs.core.PersistentHashMap.fromArrays(inst_76337,inst_76345);
var inst_76347 = cljs.test.do_report.call(null,inst_76346);
var state_76399__$1 = state_76399;
var statearr_76442_76684 = state_76399__$1;
(statearr_76442_76684[(2)] = inst_76347);

(statearr_76442_76684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (16))){
var inst_76396 = (state_76399[(2)]);
var inst_76397 = done.call(null);
var state_76399__$1 = (function (){var statearr_76443 = state_76399;
(statearr_76443[(22)] = inst_76396);

return statearr_76443;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76399__$1,inst_76397);
} else {
if((state_val_76400 === (10))){
var inst_76307 = (state_76399[(2)]);
var inst_76308 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76309 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_76310 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76309,inst_76307,null];
var inst_76311 = cljs.core.PersistentHashMap.fromArrays(inst_76308,inst_76310);
var inst_76312 = cljs.test.do_report.call(null,inst_76311);
var state_76399__$1 = state_76399;
var statearr_76444_76685 = state_76399__$1;
(statearr_76444_76685[(2)] = inst_76312);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76400 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76399,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_76361 = cljs.core.List.EMPTY;
var inst_76362 = cljs.core._conj.call(null,inst_76361,"~/.in-drop-dot-only");
var inst_76366 = cljs.core.async.chan.call(null,(1));
var inst_76367 = (function (){var c__9318__auto____$1 = inst_76366;
return ((function (c__9318__auto____$1,_,inst_76361,inst_76362,inst_76366,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76361,inst_76362,inst_76366,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76364){
var state_val_76365 = (state_76364[(1)]);
if((state_val_76365 === (1))){
var state_76364__$1 = state_76364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76364__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76361,inst_76362,inst_76366,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76361,inst_76362,inst_76366,state_val_76400,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76448 = [null,null,null,null,null,null,null];
(statearr_76448[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76448[(1)] = (1));

return statearr_76448;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76364){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76449){if((e76449 instanceof Object)){
var ex__9301__auto__ = e76449;
var statearr_76450_76686 = state_76364;
(statearr_76450_76686[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76687 = state_76364;
state_76364 = G__76687;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76364){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76361,inst_76362,inst_76366,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76451 = f__9319__auto__.call(null);
(statearr_76451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76361,inst_76362,inst_76366,state_val_76400,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_76368 = cljs.core.async.impl.dispatch.run.call(null,inst_76367);
var inst_76369 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_76366);
var state_76399__$1 = (function (){var statearr_76452 = state_76399;
(statearr_76452[(18)] = inst_76362);

(statearr_76452[(23)] = inst_76368);

return statearr_76452;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76399__$1,(19),inst_76369);
} else {
if((state_val_76400 === (8))){
var inst_76283 = (state_76399[(21)]);
var inst_76304 = (state_76399[(2)]);
var state_76399__$1 = (function (){var statearr_76453 = state_76399;
(statearr_76453[(24)] = inst_76304);

return statearr_76453;
})();
var statearr_76454_76688 = state_76399__$1;
(statearr_76454_76688[(2)] = inst_76283);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76458[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76458[(1)] = (1));

return statearr_76458;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76399){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76459){if((e76459 instanceof Object)){
var ex__9301__auto__ = e76459;
var statearr_76460_76689 = state_76399;
(statearr_76460_76689[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76690 = state_76399;
state_76399 = G__76690;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76399){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76461 = f__9319__auto__.call(null);
(statearr_76461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_76461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test76258.prototype.apply = (function (self__,args76261){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args76261)));
});

drop_dot.core_test.t_drop_dot$core_test76258.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_76599){
var state_val_76600 = (state_76599[(1)]);
if((state_val_76600 === (7))){
var inst_76482 = (state_76599[(7)]);
var inst_76492 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76493 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_76494 = cljs.core.List.EMPTY;
var inst_76495 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_76496 = cljs.core.cons.call(null,inst_76495,inst_76482);
var inst_76497 = cljs.core._conj.call(null,inst_76494,inst_76496);
var inst_76498 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76499 = cljs.core._conj.call(null,inst_76497,inst_76498);
var inst_76500 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76493,inst_76499,null];
var inst_76501 = cljs.core.PersistentHashMap.fromArrays(inst_76492,inst_76500);
var inst_76502 = cljs.test.do_report.call(null,inst_76501);
var state_76599__$1 = state_76599;
var statearr_76601_76691 = state_76599__$1;
(statearr_76601_76691[(2)] = inst_76502);

(statearr_76601_76691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (20))){
var inst_76572 = (state_76599[(8)]);
var inst_76575 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76576 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_76577 = cljs.core.cons.call(null,cljs.core._EQ_,inst_76572);
var inst_76578 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76576,inst_76577,null];
var inst_76579 = cljs.core.PersistentHashMap.fromArrays(inst_76575,inst_76578);
var inst_76580 = cljs.test.do_report.call(null,inst_76579);
var state_76599__$1 = state_76599;
var statearr_76602_76692 = state_76599__$1;
(statearr_76602_76692[(2)] = inst_76580);

(statearr_76602_76692[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (1))){
var state_76599__$1 = state_76599;
var statearr_76603_76693 = state_76599__$1;
(statearr_76603_76693[(2)] = null);

(statearr_76603_76693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76599,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_76471 = cljs.core.List.EMPTY;
var inst_76472 = cljs.core._conj.call(null,inst_76471,"ERROR:");
var inst_76476 = cljs.core.async.chan.call(null,(1));
var inst_76477 = (function (){var c__9318__auto____$1 = inst_76476;
return ((function (c__9318__auto____$1,_,inst_76471,inst_76472,inst_76476,state_val_76600,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76471,inst_76472,inst_76476,state_val_76600,c__9318__auto__,___10407__auto__){
return (function (state_76474){
var state_val_76475 = (state_76474[(1)]);
if((state_val_76475 === (1))){
var state_76474__$1 = state_76474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76474__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76471,inst_76472,inst_76476,state_val_76600,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76471,inst_76472,inst_76476,state_val_76600,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76607 = [null,null,null,null,null,null,null];
(statearr_76607[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76607[(1)] = (1));

return statearr_76607;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76474){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76608){if((e76608 instanceof Object)){
var ex__9301__auto__ = e76608;
var statearr_76609_76694 = state_76474;
(statearr_76609_76694[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76695 = state_76474;
state_76474 = G__76695;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76474){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76471,inst_76472,inst_76476,state_val_76600,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_76610 = f__9319__auto__.call(null);
(statearr_76610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76471,inst_76472,inst_76476,state_val_76600,c__9318__auto__,___10407__auto__))
})();
var inst_76478 = cljs.core.async.impl.dispatch.run.call(null,inst_76477);
var inst_76479 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_76476);
var state_76599__$1 = (function (){var statearr_76611 = state_76599;
(statearr_76611[(9)] = inst_76472);

(statearr_76611[(10)] = inst_76478);

return statearr_76611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76599__$1,(5),inst_76479);
} else {
if((state_val_76600 === (15))){
var inst_76528 = (state_76599[(11)]);
var inst_76549 = (state_76599[(2)]);
var state_76599__$1 = (function (){var statearr_76612 = state_76599;
(statearr_76612[(12)] = inst_76549);

return statearr_76612;
})();
var statearr_76613_76696 = state_76599__$1;
(statearr_76613_76696[(2)] = inst_76528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (21))){
var inst_76572 = (state_76599[(8)]);
var inst_76582 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76583 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_76584 = cljs.core.List.EMPTY;
var inst_76585 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_76586 = cljs.core.cons.call(null,inst_76585,inst_76572);
var inst_76587 = cljs.core._conj.call(null,inst_76584,inst_76586);
var inst_76588 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76589 = cljs.core._conj.call(null,inst_76587,inst_76588);
var inst_76590 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76583,inst_76589,null];
var inst_76591 = cljs.core.PersistentHashMap.fromArrays(inst_76582,inst_76590);
var inst_76592 = cljs.test.do_report.call(null,inst_76591);
var state_76599__$1 = state_76599;
var statearr_76614_76697 = state_76599__$1;
(statearr_76614_76697[(2)] = inst_76592);

(statearr_76614_76697[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (13))){
var inst_76527 = (state_76599[(13)]);
var inst_76530 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76531 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_76532 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_76527);
var inst_76533 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76531,inst_76532,null];
var inst_76534 = cljs.core.PersistentHashMap.fromArrays(inst_76530,inst_76533);
var inst_76535 = cljs.test.do_report.call(null,inst_76534);
var state_76599__$1 = state_76599;
var statearr_76615_76698 = state_76599__$1;
(statearr_76615_76698[(2)] = inst_76535);

(statearr_76615_76698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (22))){
var inst_76573 = (state_76599[(14)]);
var inst_76594 = (state_76599[(2)]);
var state_76599__$1 = (function (){var statearr_76616 = state_76599;
(statearr_76616[(15)] = inst_76594);

return statearr_76616;
})();
var statearr_76617_76699 = state_76599__$1;
(statearr_76617_76699[(2)] = inst_76573);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (6))){
var inst_76482 = (state_76599[(7)]);
var inst_76485 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76486 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_76487 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_76482);
var inst_76488 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76486,inst_76487,null];
var inst_76489 = cljs.core.PersistentHashMap.fromArrays(inst_76485,inst_76488);
var inst_76490 = cljs.test.do_report.call(null,inst_76489);
var state_76599__$1 = state_76599;
var statearr_76618_76700 = state_76599__$1;
(statearr_76618_76700[(2)] = inst_76490);

(statearr_76618_76700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (17))){
var inst_76552 = (state_76599[(2)]);
var inst_76553 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76554 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_76555 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76554,inst_76552,null];
var inst_76556 = cljs.core.PersistentHashMap.fromArrays(inst_76553,inst_76555);
var inst_76557 = cljs.test.do_report.call(null,inst_76556);
var state_76599__$1 = state_76599;
var statearr_76619_76701 = state_76599__$1;
(statearr_76619_76701[(2)] = inst_76557);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (3))){
var inst_76462 = (state_76599[(2)]);
var inst_76463 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76464 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_76465 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76464,inst_76462,null];
var inst_76466 = cljs.core.PersistentHashMap.fromArrays(inst_76463,inst_76465);
var inst_76467 = cljs.test.do_report.call(null,inst_76466);
var state_76599__$1 = state_76599;
var statearr_76620_76702 = state_76599__$1;
(statearr_76620_76702[(2)] = inst_76467);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (12))){
var inst_76517 = (state_76599[(16)]);
var inst_76528 = (state_76599[(11)]);
var inst_76527 = (state_76599[(13)]);
var inst_76526 = (state_76599[(2)]);
var inst_76527__$1 = cljs.core._conj.call(null,inst_76517,inst_76526);
var inst_76528__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_76527__$1);
var state_76599__$1 = (function (){var statearr_76621 = state_76599;
(statearr_76621[(11)] = inst_76528__$1);

(statearr_76621[(13)] = inst_76527__$1);

return statearr_76621;
})();
if(cljs.core.truth_(inst_76528__$1)){
var statearr_76622_76703 = state_76599__$1;
(statearr_76622_76703[(1)] = (13));

} else {
var statearr_76623_76704 = state_76599__$1;
(statearr_76623_76704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (2))){
var inst_76506 = (state_76599[(2)]);
var state_76599__$1 = (function (){var statearr_76624 = state_76599;
(statearr_76624[(17)] = inst_76506);

return statearr_76624;
})();
var statearr_76625_76705 = state_76599__$1;
(statearr_76625_76705[(2)] = null);

(statearr_76625_76705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (19))){
var inst_76573 = (state_76599[(14)]);
var inst_76562 = (state_76599[(18)]);
var inst_76572 = (state_76599[(8)]);
var inst_76571 = (state_76599[(2)]);
var inst_76572__$1 = cljs.core._conj.call(null,inst_76562,inst_76571);
var inst_76573__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_76572__$1);
var state_76599__$1 = (function (){var statearr_76626 = state_76599;
(statearr_76626[(14)] = inst_76573__$1);

(statearr_76626[(8)] = inst_76572__$1);

return statearr_76626;
})();
if(cljs.core.truth_(inst_76573__$1)){
var statearr_76627_76706 = state_76599__$1;
(statearr_76627_76706[(1)] = (20));

} else {
var statearr_76628_76707 = state_76599__$1;
(statearr_76628_76707[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76599,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_76516 = cljs.core.List.EMPTY;
var inst_76517 = cljs.core._conj.call(null,inst_76516,"ERROR: ");
var inst_76521 = cljs.core.async.chan.call(null,(1));
var inst_76522 = (function (){var c__9318__auto____$1 = inst_76521;
return ((function (c__9318__auto____$1,_,inst_76516,inst_76517,inst_76521,state_val_76600,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76516,inst_76517,inst_76521,state_val_76600,c__9318__auto__,___10407__auto__){
return (function (state_76519){
var state_val_76520 = (state_76519[(1)]);
if((state_val_76520 === (1))){
var state_76519__$1 = state_76519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76519__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76516,inst_76517,inst_76521,state_val_76600,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76516,inst_76517,inst_76521,state_val_76600,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76632 = [null,null,null,null,null,null,null];
(statearr_76632[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76632[(1)] = (1));

return statearr_76632;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76519){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76633){if((e76633 instanceof Object)){
var ex__9301__auto__ = e76633;
var statearr_76634_76708 = state_76519;
(statearr_76634_76708[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76709 = state_76519;
state_76519 = G__76709;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76519){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76516,inst_76517,inst_76521,state_val_76600,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_76635 = f__9319__auto__.call(null);
(statearr_76635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76516,inst_76517,inst_76521,state_val_76600,c__9318__auto__,___10407__auto__))
})();
var inst_76523 = cljs.core.async.impl.dispatch.run.call(null,inst_76522);
var inst_76524 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_76521);
var state_76599__$1 = (function (){var statearr_76636 = state_76599;
(statearr_76636[(16)] = inst_76517);

(statearr_76636[(19)] = inst_76523);

return statearr_76636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76599__$1,(12),inst_76524);
} else {
if((state_val_76600 === (9))){
var inst_76551 = (state_76599[(2)]);
var state_76599__$1 = (function (){var statearr_76637 = state_76599;
(statearr_76637[(20)] = inst_76551);

return statearr_76637;
})();
var statearr_76638_76710 = state_76599__$1;
(statearr_76638_76710[(2)] = null);

(statearr_76638_76710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (5))){
var inst_76483 = (state_76599[(21)]);
var inst_76472 = (state_76599[(9)]);
var inst_76482 = (state_76599[(7)]);
var inst_76481 = (state_76599[(2)]);
var inst_76482__$1 = cljs.core._conj.call(null,inst_76472,inst_76481);
var inst_76483__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_76482__$1);
var state_76599__$1 = (function (){var statearr_76639 = state_76599;
(statearr_76639[(21)] = inst_76483__$1);

(statearr_76639[(7)] = inst_76482__$1);

return statearr_76639;
})();
if(cljs.core.truth_(inst_76483__$1)){
var statearr_76640_76711 = state_76599__$1;
(statearr_76640_76711[(1)] = (6));

} else {
var statearr_76641_76712 = state_76599__$1;
(statearr_76641_76712[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (14))){
var inst_76527 = (state_76599[(13)]);
var inst_76537 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76538 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_76539 = cljs.core.List.EMPTY;
var inst_76540 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_76541 = cljs.core.cons.call(null,inst_76540,inst_76527);
var inst_76542 = cljs.core._conj.call(null,inst_76539,inst_76541);
var inst_76543 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76544 = cljs.core._conj.call(null,inst_76542,inst_76543);
var inst_76545 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76538,inst_76544,null];
var inst_76546 = cljs.core.PersistentHashMap.fromArrays(inst_76537,inst_76545);
var inst_76547 = cljs.test.do_report.call(null,inst_76546);
var state_76599__$1 = state_76599;
var statearr_76642_76713 = state_76599__$1;
(statearr_76642_76713[(2)] = inst_76547);

(statearr_76642_76713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (16))){
var inst_76596 = (state_76599[(2)]);
var inst_76597 = done.call(null);
var state_76599__$1 = (function (){var statearr_76643 = state_76599;
(statearr_76643[(22)] = inst_76596);

return statearr_76643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76599__$1,inst_76597);
} else {
if((state_val_76600 === (10))){
var inst_76507 = (state_76599[(2)]);
var inst_76508 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76509 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_76510 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76509,inst_76507,null];
var inst_76511 = cljs.core.PersistentHashMap.fromArrays(inst_76508,inst_76510);
var inst_76512 = cljs.test.do_report.call(null,inst_76511);
var state_76599__$1 = state_76599;
var statearr_76644_76714 = state_76599__$1;
(statearr_76644_76714[(2)] = inst_76512);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76600 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76599,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_76561 = cljs.core.List.EMPTY;
var inst_76562 = cljs.core._conj.call(null,inst_76561,"~/.in-drop-dot-only");
var inst_76566 = cljs.core.async.chan.call(null,(1));
var inst_76567 = (function (){var c__9318__auto____$1 = inst_76566;
return ((function (c__9318__auto____$1,_,inst_76561,inst_76562,inst_76566,state_val_76600,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76561,inst_76562,inst_76566,state_val_76600,c__9318__auto__,___10407__auto__){
return (function (state_76564){
var state_val_76565 = (state_76564[(1)]);
if((state_val_76565 === (1))){
var state_76564__$1 = state_76564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76564__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76561,inst_76562,inst_76566,state_val_76600,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76561,inst_76562,inst_76566,state_val_76600,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76648 = [null,null,null,null,null,null,null];
(statearr_76648[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76648[(1)] = (1));

return statearr_76648;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76564){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76649){if((e76649 instanceof Object)){
var ex__9301__auto__ = e76649;
var statearr_76650_76715 = state_76564;
(statearr_76650_76715[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76716 = state_76564;
state_76564 = G__76716;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76564){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76561,inst_76562,inst_76566,state_val_76600,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_76651 = f__9319__auto__.call(null);
(statearr_76651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76561,inst_76562,inst_76566,state_val_76600,c__9318__auto__,___10407__auto__))
})();
var inst_76568 = cljs.core.async.impl.dispatch.run.call(null,inst_76567);
var inst_76569 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_76566);
var state_76599__$1 = (function (){var statearr_76652 = state_76599;
(statearr_76652[(18)] = inst_76562);

(statearr_76652[(23)] = inst_76568);

return statearr_76652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76599__$1,(19),inst_76569);
} else {
if((state_val_76600 === (8))){
var inst_76483 = (state_76599[(21)]);
var inst_76504 = (state_76599[(2)]);
var state_76599__$1 = (function (){var statearr_76653 = state_76599;
(statearr_76653[(24)] = inst_76504);

return statearr_76653;
})();
var statearr_76654_76717 = state_76599__$1;
(statearr_76654_76717[(2)] = inst_76483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76658[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76658[(1)] = (1));

return statearr_76658;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76599){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76659){if((e76659 instanceof Object)){
var ex__9301__auto__ = e76659;
var statearr_76660_76718 = state_76599;
(statearr_76660_76718[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76719 = state_76599;
state_76599 = G__76719;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76599){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_76661 = f__9319__auto__.call(null);
(statearr_76661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_76661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test76258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76259","meta76259",-417522429,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test76258.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test76258.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test76258";

drop_dot.core_test.t_drop_dot$core_test76258.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test76258");
});

drop_dot.core_test.__GT_t_drop_dot$core_test76258 = (function drop_dot$core_test$__GT_t_drop_dot$core_test76258(meta76259){
return (new drop_dot.core_test.t_drop_dot$core_test76258(meta76259));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test76258(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test76720 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test76720 = (function (meta76721){
this.meta76721 = meta76721;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test76720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_76722,meta76721__$1){
var self__ = this;
var _76722__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test76720(meta76721__$1));
});

drop_dot.core_test.t_drop_dot$core_test76720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_76722){
var self__ = this;
var _76722__$1 = this;
return self__.meta76721;
});

drop_dot.core_test.t_drop_dot$core_test76720.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test76720.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76861){
var state_val_76862 = (state_76861[(1)]);
if((state_val_76862 === (7))){
var inst_76744 = (state_76861[(7)]);
var inst_76754 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76755 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_76756 = cljs.core.List.EMPTY;
var inst_76757 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_76758 = cljs.core.cons.call(null,inst_76757,inst_76744);
var inst_76759 = cljs.core._conj.call(null,inst_76756,inst_76758);
var inst_76760 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76761 = cljs.core._conj.call(null,inst_76759,inst_76760);
var inst_76762 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76755,inst_76761,null];
var inst_76763 = cljs.core.PersistentHashMap.fromArrays(inst_76754,inst_76762);
var inst_76764 = cljs.test.do_report.call(null,inst_76763);
var state_76861__$1 = state_76861;
var statearr_76863_77124 = state_76861__$1;
(statearr_76863_77124[(2)] = inst_76764);

(statearr_76863_77124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (20))){
var inst_76834 = (state_76861[(8)]);
var inst_76837 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76838 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_76839 = cljs.core.cons.call(null,cljs.core._EQ_,inst_76834);
var inst_76840 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76838,inst_76839,null];
var inst_76841 = cljs.core.PersistentHashMap.fromArrays(inst_76837,inst_76840);
var inst_76842 = cljs.test.do_report.call(null,inst_76841);
var state_76861__$1 = state_76861;
var statearr_76864_77125 = state_76861__$1;
(statearr_76864_77125[(2)] = inst_76842);

(statearr_76864_77125[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (1))){
var state_76861__$1 = state_76861;
var statearr_76865_77126 = state_76861__$1;
(statearr_76865_77126[(2)] = null);

(statearr_76865_77126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76861,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_76733 = cljs.core.List.EMPTY;
var inst_76734 = cljs.core._conj.call(null,inst_76733,"NOTICE: ");
var inst_76738 = cljs.core.async.chan.call(null,(1));
var inst_76739 = (function (){var c__9318__auto____$1 = inst_76738;
return ((function (c__9318__auto____$1,_,inst_76733,inst_76734,inst_76738,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76733,inst_76734,inst_76738,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76736){
var state_val_76737 = (state_76736[(1)]);
if((state_val_76737 === (1))){
var state_76736__$1 = state_76736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76736__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76733,inst_76734,inst_76738,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76733,inst_76734,inst_76738,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76869 = [null,null,null,null,null,null,null];
(statearr_76869[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76869[(1)] = (1));

return statearr_76869;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76736){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76870){if((e76870 instanceof Object)){
var ex__9301__auto__ = e76870;
var statearr_76871_77127 = state_76736;
(statearr_76871_77127[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77128 = state_76736;
state_76736 = G__77128;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76736){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76733,inst_76734,inst_76738,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76872 = f__9319__auto__.call(null);
(statearr_76872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76733,inst_76734,inst_76738,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_76740 = cljs.core.async.impl.dispatch.run.call(null,inst_76739);
var inst_76741 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_76738);
var state_76861__$1 = (function (){var statearr_76873 = state_76861;
(statearr_76873[(9)] = inst_76740);

(statearr_76873[(10)] = inst_76734);

return statearr_76873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76861__$1,(5),inst_76741);
} else {
if((state_val_76862 === (15))){
var inst_76790 = (state_76861[(11)]);
var inst_76811 = (state_76861[(2)]);
var state_76861__$1 = (function (){var statearr_76874 = state_76861;
(statearr_76874[(12)] = inst_76811);

return statearr_76874;
})();
var statearr_76875_77129 = state_76861__$1;
(statearr_76875_77129[(2)] = inst_76790);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (21))){
var inst_76834 = (state_76861[(8)]);
var inst_76844 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76845 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_76846 = cljs.core.List.EMPTY;
var inst_76847 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_76848 = cljs.core.cons.call(null,inst_76847,inst_76834);
var inst_76849 = cljs.core._conj.call(null,inst_76846,inst_76848);
var inst_76850 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76851 = cljs.core._conj.call(null,inst_76849,inst_76850);
var inst_76852 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76845,inst_76851,null];
var inst_76853 = cljs.core.PersistentHashMap.fromArrays(inst_76844,inst_76852);
var inst_76854 = cljs.test.do_report.call(null,inst_76853);
var state_76861__$1 = state_76861;
var statearr_76876_77130 = state_76861__$1;
(statearr_76876_77130[(2)] = inst_76854);

(statearr_76876_77130[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (13))){
var inst_76789 = (state_76861[(13)]);
var inst_76792 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76793 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76794 = cljs.core.cons.call(null,cljs.core._EQ_,inst_76789);
var inst_76795 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76793,inst_76794,null];
var inst_76796 = cljs.core.PersistentHashMap.fromArrays(inst_76792,inst_76795);
var inst_76797 = cljs.test.do_report.call(null,inst_76796);
var state_76861__$1 = state_76861;
var statearr_76877_77131 = state_76861__$1;
(statearr_76877_77131[(2)] = inst_76797);

(statearr_76877_77131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (22))){
var inst_76835 = (state_76861[(14)]);
var inst_76856 = (state_76861[(2)]);
var state_76861__$1 = (function (){var statearr_76878 = state_76861;
(statearr_76878[(15)] = inst_76856);

return statearr_76878;
})();
var statearr_76879_77132 = state_76861__$1;
(statearr_76879_77132[(2)] = inst_76835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (6))){
var inst_76744 = (state_76861[(7)]);
var inst_76747 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76748 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_76749 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_76744);
var inst_76750 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76748,inst_76749,null];
var inst_76751 = cljs.core.PersistentHashMap.fromArrays(inst_76747,inst_76750);
var inst_76752 = cljs.test.do_report.call(null,inst_76751);
var state_76861__$1 = state_76861;
var statearr_76880_77133 = state_76861__$1;
(statearr_76880_77133[(2)] = inst_76752);

(statearr_76880_77133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (17))){
var inst_76814 = (state_76861[(2)]);
var inst_76815 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76816 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_76817 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76816,inst_76814,null];
var inst_76818 = cljs.core.PersistentHashMap.fromArrays(inst_76815,inst_76817);
var inst_76819 = cljs.test.do_report.call(null,inst_76818);
var state_76861__$1 = state_76861;
var statearr_76881_77134 = state_76861__$1;
(statearr_76881_77134[(2)] = inst_76819);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (3))){
var inst_76724 = (state_76861[(2)]);
var inst_76725 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76726 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_76727 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76726,inst_76724,null];
var inst_76728 = cljs.core.PersistentHashMap.fromArrays(inst_76725,inst_76727);
var inst_76729 = cljs.test.do_report.call(null,inst_76728);
var state_76861__$1 = state_76861;
var statearr_76882_77135 = state_76861__$1;
(statearr_76882_77135[(2)] = inst_76729);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (12))){
var inst_76790 = (state_76861[(11)]);
var inst_76789 = (state_76861[(13)]);
var inst_76779 = (state_76861[(16)]);
var inst_76788 = (state_76861[(2)]);
var inst_76789__$1 = cljs.core._conj.call(null,inst_76779,inst_76788);
var inst_76790__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_76789__$1);
var state_76861__$1 = (function (){var statearr_76883 = state_76861;
(statearr_76883[(11)] = inst_76790__$1);

(statearr_76883[(13)] = inst_76789__$1);

return statearr_76883;
})();
if(cljs.core.truth_(inst_76790__$1)){
var statearr_76884_77136 = state_76861__$1;
(statearr_76884_77136[(1)] = (13));

} else {
var statearr_76885_77137 = state_76861__$1;
(statearr_76885_77137[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (2))){
var inst_76768 = (state_76861[(2)]);
var state_76861__$1 = (function (){var statearr_76886 = state_76861;
(statearr_76886[(17)] = inst_76768);

return statearr_76886;
})();
var statearr_76887_77138 = state_76861__$1;
(statearr_76887_77138[(2)] = null);

(statearr_76887_77138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (19))){
var inst_76835 = (state_76861[(14)]);
var inst_76824 = (state_76861[(18)]);
var inst_76834 = (state_76861[(8)]);
var inst_76833 = (state_76861[(2)]);
var inst_76834__$1 = cljs.core._conj.call(null,inst_76824,inst_76833);
var inst_76835__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_76834__$1);
var state_76861__$1 = (function (){var statearr_76888 = state_76861;
(statearr_76888[(14)] = inst_76835__$1);

(statearr_76888[(8)] = inst_76834__$1);

return statearr_76888;
})();
if(cljs.core.truth_(inst_76835__$1)){
var statearr_76889_77139 = state_76861__$1;
(statearr_76889_77139[(1)] = (20));

} else {
var statearr_76890_77140 = state_76861__$1;
(statearr_76890_77140[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76861,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_76778 = cljs.core.List.EMPTY;
var inst_76779 = cljs.core._conj.call(null,inst_76778,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76783 = cljs.core.async.chan.call(null,(1));
var inst_76784 = (function (){var c__9318__auto____$1 = inst_76783;
return ((function (c__9318__auto____$1,_,inst_76778,inst_76779,inst_76783,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76778,inst_76779,inst_76783,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76781){
var state_val_76782 = (state_76781[(1)]);
if((state_val_76782 === (1))){
var state_76781__$1 = state_76781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76781__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76778,inst_76779,inst_76783,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76778,inst_76779,inst_76783,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76894 = [null,null,null,null,null,null,null];
(statearr_76894[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76894[(1)] = (1));

return statearr_76894;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76781){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76895){if((e76895 instanceof Object)){
var ex__9301__auto__ = e76895;
var statearr_76896_77141 = state_76781;
(statearr_76896_77141[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77142 = state_76781;
state_76781 = G__77142;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76781){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76778,inst_76779,inst_76783,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76897 = f__9319__auto__.call(null);
(statearr_76897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76778,inst_76779,inst_76783,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_76785 = cljs.core.async.impl.dispatch.run.call(null,inst_76784);
var inst_76786 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_76783);
var state_76861__$1 = (function (){var statearr_76898 = state_76861;
(statearr_76898[(19)] = inst_76785);

(statearr_76898[(16)] = inst_76779);

return statearr_76898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76861__$1,(12),inst_76786);
} else {
if((state_val_76862 === (9))){
var inst_76813 = (state_76861[(2)]);
var state_76861__$1 = (function (){var statearr_76899 = state_76861;
(statearr_76899[(20)] = inst_76813);

return statearr_76899;
})();
var statearr_76900_77143 = state_76861__$1;
(statearr_76900_77143[(2)] = null);

(statearr_76900_77143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (5))){
var inst_76744 = (state_76861[(7)]);
var inst_76745 = (state_76861[(21)]);
var inst_76734 = (state_76861[(10)]);
var inst_76743 = (state_76861[(2)]);
var inst_76744__$1 = cljs.core._conj.call(null,inst_76734,inst_76743);
var inst_76745__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_76744__$1);
var state_76861__$1 = (function (){var statearr_76901 = state_76861;
(statearr_76901[(7)] = inst_76744__$1);

(statearr_76901[(21)] = inst_76745__$1);

return statearr_76901;
})();
if(cljs.core.truth_(inst_76745__$1)){
var statearr_76902_77144 = state_76861__$1;
(statearr_76902_77144[(1)] = (6));

} else {
var statearr_76903_77145 = state_76861__$1;
(statearr_76903_77145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (14))){
var inst_76789 = (state_76861[(13)]);
var inst_76799 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76800 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76801 = cljs.core.List.EMPTY;
var inst_76802 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_76803 = cljs.core.cons.call(null,inst_76802,inst_76789);
var inst_76804 = cljs.core._conj.call(null,inst_76801,inst_76803);
var inst_76805 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76806 = cljs.core._conj.call(null,inst_76804,inst_76805);
var inst_76807 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76800,inst_76806,null];
var inst_76808 = cljs.core.PersistentHashMap.fromArrays(inst_76799,inst_76807);
var inst_76809 = cljs.test.do_report.call(null,inst_76808);
var state_76861__$1 = state_76861;
var statearr_76904_77146 = state_76861__$1;
(statearr_76904_77146[(2)] = inst_76809);

(statearr_76904_77146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (16))){
var inst_76858 = (state_76861[(2)]);
var inst_76859 = done.call(null);
var state_76861__$1 = (function (){var statearr_76905 = state_76861;
(statearr_76905[(22)] = inst_76858);

return statearr_76905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76861__$1,inst_76859);
} else {
if((state_val_76862 === (10))){
var inst_76769 = (state_76861[(2)]);
var inst_76770 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76771 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76772 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76771,inst_76769,null];
var inst_76773 = cljs.core.PersistentHashMap.fromArrays(inst_76770,inst_76772);
var inst_76774 = cljs.test.do_report.call(null,inst_76773);
var state_76861__$1 = state_76861;
var statearr_76906_77147 = state_76861__$1;
(statearr_76906_77147[(2)] = inst_76774);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76862 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_76861,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_76823 = cljs.core.List.EMPTY;
var inst_76824 = cljs.core._conj.call(null,inst_76823,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_76828 = cljs.core.async.chan.call(null,(1));
var inst_76829 = (function (){var c__9318__auto____$1 = inst_76828;
return ((function (c__9318__auto____$1,_,inst_76823,inst_76824,inst_76828,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76823,inst_76824,inst_76828,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_76826){
var state_val_76827 = (state_76826[(1)]);
if((state_val_76827 === (1))){
var state_76826__$1 = state_76826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76826__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76823,inst_76824,inst_76828,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76823,inst_76824,inst_76828,state_val_76862,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76910 = [null,null,null,null,null,null,null];
(statearr_76910[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76910[(1)] = (1));

return statearr_76910;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76826){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76911){if((e76911 instanceof Object)){
var ex__9301__auto__ = e76911;
var statearr_76912_77148 = state_76826;
(statearr_76912_77148[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77149 = state_76826;
state_76826 = G__77149;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76826){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76823,inst_76824,inst_76828,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76913 = f__9319__auto__.call(null);
(statearr_76913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_76913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76823,inst_76824,inst_76828,state_val_76862,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_76830 = cljs.core.async.impl.dispatch.run.call(null,inst_76829);
var inst_76831 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_76828);
var state_76861__$1 = (function (){var statearr_76914 = state_76861;
(statearr_76914[(18)] = inst_76824);

(statearr_76914[(23)] = inst_76830);

return statearr_76914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_76861__$1,(19),inst_76831);
} else {
if((state_val_76862 === (8))){
var inst_76745 = (state_76861[(21)]);
var inst_76766 = (state_76861[(2)]);
var state_76861__$1 = (function (){var statearr_76915 = state_76861;
(statearr_76915[(24)] = inst_76766);

return statearr_76915;
})();
var statearr_76916_77150 = state_76861__$1;
(statearr_76916_77150[(2)] = inst_76745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_76920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76920[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_76920[(1)] = (1));

return statearr_76920;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76861){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e76921){if((e76921 instanceof Object)){
var ex__9301__auto__ = e76921;
var statearr_76922_77151 = state_76861;
(statearr_76922_77151[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e76921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77152 = state_76861;
state_76861 = G__77152;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76861){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_76923 = f__9319__auto__.call(null);
(statearr_76923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_76923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test76720.prototype.apply = (function (self__,args76723){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args76723)));
});

drop_dot.core_test.t_drop_dot$core_test76720.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_77061){
var state_val_77062 = (state_77061[(1)]);
if((state_val_77062 === (7))){
var inst_76944 = (state_77061[(7)]);
var inst_76954 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76955 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_76956 = cljs.core.List.EMPTY;
var inst_76957 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_76958 = cljs.core.cons.call(null,inst_76957,inst_76944);
var inst_76959 = cljs.core._conj.call(null,inst_76956,inst_76958);
var inst_76960 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_76961 = cljs.core._conj.call(null,inst_76959,inst_76960);
var inst_76962 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_76955,inst_76961,null];
var inst_76963 = cljs.core.PersistentHashMap.fromArrays(inst_76954,inst_76962);
var inst_76964 = cljs.test.do_report.call(null,inst_76963);
var state_77061__$1 = state_77061;
var statearr_77063_77153 = state_77061__$1;
(statearr_77063_77153[(2)] = inst_76964);

(statearr_77063_77153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (20))){
var inst_77034 = (state_77061[(8)]);
var inst_77037 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77038 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_77039 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77034);
var inst_77040 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77038,inst_77039,null];
var inst_77041 = cljs.core.PersistentHashMap.fromArrays(inst_77037,inst_77040);
var inst_77042 = cljs.test.do_report.call(null,inst_77041);
var state_77061__$1 = state_77061;
var statearr_77064_77154 = state_77061__$1;
(statearr_77064_77154[(2)] = inst_77042);

(statearr_77064_77154[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (1))){
var state_77061__$1 = state_77061;
var statearr_77065_77155 = state_77061__$1;
(statearr_77065_77155[(2)] = null);

(statearr_77065_77155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77061,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_76933 = cljs.core.List.EMPTY;
var inst_76934 = cljs.core._conj.call(null,inst_76933,"NOTICE: ");
var inst_76938 = cljs.core.async.chan.call(null,(1));
var inst_76939 = (function (){var c__9318__auto____$1 = inst_76938;
return ((function (c__9318__auto____$1,_,inst_76933,inst_76934,inst_76938,state_val_77062,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76933,inst_76934,inst_76938,state_val_77062,c__9318__auto__,___10407__auto__){
return (function (state_76936){
var state_val_76937 = (state_76936[(1)]);
if((state_val_76937 === (1))){
var state_76936__$1 = state_76936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76936__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76933,inst_76934,inst_76938,state_val_77062,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76933,inst_76934,inst_76938,state_val_77062,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77069 = [null,null,null,null,null,null,null];
(statearr_77069[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77069[(1)] = (1));

return statearr_77069;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76936){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77070){if((e77070 instanceof Object)){
var ex__9301__auto__ = e77070;
var statearr_77071_77156 = state_76936;
(statearr_77071_77156[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77157 = state_76936;
state_76936 = G__77157;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76936){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76933,inst_76934,inst_76938,state_val_77062,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77072 = f__9319__auto__.call(null);
(statearr_77072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_77072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76933,inst_76934,inst_76938,state_val_77062,c__9318__auto__,___10407__auto__))
})();
var inst_76940 = cljs.core.async.impl.dispatch.run.call(null,inst_76939);
var inst_76941 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_76938);
var state_77061__$1 = (function (){var statearr_77073 = state_77061;
(statearr_77073[(9)] = inst_76940);

(statearr_77073[(10)] = inst_76934);

return statearr_77073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77061__$1,(5),inst_76941);
} else {
if((state_val_77062 === (15))){
var inst_76990 = (state_77061[(11)]);
var inst_77011 = (state_77061[(2)]);
var state_77061__$1 = (function (){var statearr_77074 = state_77061;
(statearr_77074[(12)] = inst_77011);

return statearr_77074;
})();
var statearr_77075_77158 = state_77061__$1;
(statearr_77075_77158[(2)] = inst_76990);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (21))){
var inst_77034 = (state_77061[(8)]);
var inst_77044 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77045 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_77046 = cljs.core.List.EMPTY;
var inst_77047 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77048 = cljs.core.cons.call(null,inst_77047,inst_77034);
var inst_77049 = cljs.core._conj.call(null,inst_77046,inst_77048);
var inst_77050 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77051 = cljs.core._conj.call(null,inst_77049,inst_77050);
var inst_77052 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77045,inst_77051,null];
var inst_77053 = cljs.core.PersistentHashMap.fromArrays(inst_77044,inst_77052);
var inst_77054 = cljs.test.do_report.call(null,inst_77053);
var state_77061__$1 = state_77061;
var statearr_77076_77159 = state_77061__$1;
(statearr_77076_77159[(2)] = inst_77054);

(statearr_77076_77159[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (13))){
var inst_76989 = (state_77061[(13)]);
var inst_76992 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76993 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76994 = cljs.core.cons.call(null,cljs.core._EQ_,inst_76989);
var inst_76995 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76993,inst_76994,null];
var inst_76996 = cljs.core.PersistentHashMap.fromArrays(inst_76992,inst_76995);
var inst_76997 = cljs.test.do_report.call(null,inst_76996);
var state_77061__$1 = state_77061;
var statearr_77077_77160 = state_77061__$1;
(statearr_77077_77160[(2)] = inst_76997);

(statearr_77077_77160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (22))){
var inst_77035 = (state_77061[(14)]);
var inst_77056 = (state_77061[(2)]);
var state_77061__$1 = (function (){var statearr_77078 = state_77061;
(statearr_77078[(15)] = inst_77056);

return statearr_77078;
})();
var statearr_77079_77161 = state_77061__$1;
(statearr_77079_77161[(2)] = inst_77035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (6))){
var inst_76944 = (state_77061[(7)]);
var inst_76947 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76948 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_76949 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_76944);
var inst_76950 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_76948,inst_76949,null];
var inst_76951 = cljs.core.PersistentHashMap.fromArrays(inst_76947,inst_76950);
var inst_76952 = cljs.test.do_report.call(null,inst_76951);
var state_77061__$1 = state_77061;
var statearr_77080_77162 = state_77061__$1;
(statearr_77080_77162[(2)] = inst_76952);

(statearr_77080_77162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (17))){
var inst_77014 = (state_77061[(2)]);
var inst_77015 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77016 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_77017 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77016,inst_77014,null];
var inst_77018 = cljs.core.PersistentHashMap.fromArrays(inst_77015,inst_77017);
var inst_77019 = cljs.test.do_report.call(null,inst_77018);
var state_77061__$1 = state_77061;
var statearr_77081_77163 = state_77061__$1;
(statearr_77081_77163[(2)] = inst_77019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (3))){
var inst_76924 = (state_77061[(2)]);
var inst_76925 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76926 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_76927 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76926,inst_76924,null];
var inst_76928 = cljs.core.PersistentHashMap.fromArrays(inst_76925,inst_76927);
var inst_76929 = cljs.test.do_report.call(null,inst_76928);
var state_77061__$1 = state_77061;
var statearr_77082_77164 = state_77061__$1;
(statearr_77082_77164[(2)] = inst_76929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (12))){
var inst_76979 = (state_77061[(16)]);
var inst_76990 = (state_77061[(11)]);
var inst_76989 = (state_77061[(13)]);
var inst_76988 = (state_77061[(2)]);
var inst_76989__$1 = cljs.core._conj.call(null,inst_76979,inst_76988);
var inst_76990__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_76989__$1);
var state_77061__$1 = (function (){var statearr_77083 = state_77061;
(statearr_77083[(11)] = inst_76990__$1);

(statearr_77083[(13)] = inst_76989__$1);

return statearr_77083;
})();
if(cljs.core.truth_(inst_76990__$1)){
var statearr_77084_77165 = state_77061__$1;
(statearr_77084_77165[(1)] = (13));

} else {
var statearr_77085_77166 = state_77061__$1;
(statearr_77085_77166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (2))){
var inst_76968 = (state_77061[(2)]);
var state_77061__$1 = (function (){var statearr_77086 = state_77061;
(statearr_77086[(17)] = inst_76968);

return statearr_77086;
})();
var statearr_77087_77167 = state_77061__$1;
(statearr_77087_77167[(2)] = null);

(statearr_77087_77167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (19))){
var inst_77035 = (state_77061[(14)]);
var inst_77034 = (state_77061[(8)]);
var inst_77024 = (state_77061[(18)]);
var inst_77033 = (state_77061[(2)]);
var inst_77034__$1 = cljs.core._conj.call(null,inst_77024,inst_77033);
var inst_77035__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77034__$1);
var state_77061__$1 = (function (){var statearr_77088 = state_77061;
(statearr_77088[(14)] = inst_77035__$1);

(statearr_77088[(8)] = inst_77034__$1);

return statearr_77088;
})();
if(cljs.core.truth_(inst_77035__$1)){
var statearr_77089_77168 = state_77061__$1;
(statearr_77089_77168[(1)] = (20));

} else {
var statearr_77090_77169 = state_77061__$1;
(statearr_77090_77169[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77061,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_76978 = cljs.core.List.EMPTY;
var inst_76979 = cljs.core._conj.call(null,inst_76978,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76983 = cljs.core.async.chan.call(null,(1));
var inst_76984 = (function (){var c__9318__auto____$1 = inst_76983;
return ((function (c__9318__auto____$1,_,inst_76978,inst_76979,inst_76983,state_val_77062,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_76978,inst_76979,inst_76983,state_val_77062,c__9318__auto__,___10407__auto__){
return (function (state_76981){
var state_val_76982 = (state_76981[(1)]);
if((state_val_76982 === (1))){
var state_76981__$1 = state_76981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_76981__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_76978,inst_76979,inst_76983,state_val_77062,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_76978,inst_76979,inst_76983,state_val_77062,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77094 = [null,null,null,null,null,null,null];
(statearr_77094[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77094[(1)] = (1));

return statearr_77094;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_76981){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_76981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77095){if((e77095 instanceof Object)){
var ex__9301__auto__ = e77095;
var statearr_77096_77170 = state_76981;
(statearr_77096_77170[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_76981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77171 = state_76981;
state_76981 = G__77171;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_76981){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_76981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_76978,inst_76979,inst_76983,state_val_77062,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77097 = f__9319__auto__.call(null);
(statearr_77097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_77097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_76978,inst_76979,inst_76983,state_val_77062,c__9318__auto__,___10407__auto__))
})();
var inst_76985 = cljs.core.async.impl.dispatch.run.call(null,inst_76984);
var inst_76986 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_76983);
var state_77061__$1 = (function (){var statearr_77098 = state_77061;
(statearr_77098[(16)] = inst_76979);

(statearr_77098[(19)] = inst_76985);

return statearr_77098;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77061__$1,(12),inst_76986);
} else {
if((state_val_77062 === (9))){
var inst_77013 = (state_77061[(2)]);
var state_77061__$1 = (function (){var statearr_77099 = state_77061;
(statearr_77099[(20)] = inst_77013);

return statearr_77099;
})();
var statearr_77100_77172 = state_77061__$1;
(statearr_77100_77172[(2)] = null);

(statearr_77100_77172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (5))){
var inst_76945 = (state_77061[(21)]);
var inst_76944 = (state_77061[(7)]);
var inst_76934 = (state_77061[(10)]);
var inst_76943 = (state_77061[(2)]);
var inst_76944__$1 = cljs.core._conj.call(null,inst_76934,inst_76943);
var inst_76945__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_76944__$1);
var state_77061__$1 = (function (){var statearr_77101 = state_77061;
(statearr_77101[(21)] = inst_76945__$1);

(statearr_77101[(7)] = inst_76944__$1);

return statearr_77101;
})();
if(cljs.core.truth_(inst_76945__$1)){
var statearr_77102_77173 = state_77061__$1;
(statearr_77102_77173[(1)] = (6));

} else {
var statearr_77103_77174 = state_77061__$1;
(statearr_77103_77174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (14))){
var inst_76989 = (state_77061[(13)]);
var inst_76999 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77000 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_77001 = cljs.core.List.EMPTY;
var inst_77002 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77003 = cljs.core.cons.call(null,inst_77002,inst_76989);
var inst_77004 = cljs.core._conj.call(null,inst_77001,inst_77003);
var inst_77005 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77006 = cljs.core._conj.call(null,inst_77004,inst_77005);
var inst_77007 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77000,inst_77006,null];
var inst_77008 = cljs.core.PersistentHashMap.fromArrays(inst_76999,inst_77007);
var inst_77009 = cljs.test.do_report.call(null,inst_77008);
var state_77061__$1 = state_77061;
var statearr_77104_77175 = state_77061__$1;
(statearr_77104_77175[(2)] = inst_77009);

(statearr_77104_77175[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (16))){
var inst_77058 = (state_77061[(2)]);
var inst_77059 = done.call(null);
var state_77061__$1 = (function (){var statearr_77105 = state_77061;
(statearr_77105[(22)] = inst_77058);

return statearr_77105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77061__$1,inst_77059);
} else {
if((state_val_77062 === (10))){
var inst_76969 = (state_77061[(2)]);
var inst_76970 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_76971 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_76972 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_76971,inst_76969,null];
var inst_76973 = cljs.core.PersistentHashMap.fromArrays(inst_76970,inst_76972);
var inst_76974 = cljs.test.do_report.call(null,inst_76973);
var state_77061__$1 = state_77061;
var statearr_77106_77176 = state_77061__$1;
(statearr_77106_77176[(2)] = inst_76974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77062 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77061,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_77023 = cljs.core.List.EMPTY;
var inst_77024 = cljs.core._conj.call(null,inst_77023,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_77028 = cljs.core.async.chan.call(null,(1));
var inst_77029 = (function (){var c__9318__auto____$1 = inst_77028;
return ((function (c__9318__auto____$1,_,inst_77023,inst_77024,inst_77028,state_val_77062,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_77023,inst_77024,inst_77028,state_val_77062,c__9318__auto__,___10407__auto__){
return (function (state_77026){
var state_val_77027 = (state_77026[(1)]);
if((state_val_77027 === (1))){
var state_77026__$1 = state_77026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77026__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_77023,inst_77024,inst_77028,state_val_77062,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_77023,inst_77024,inst_77028,state_val_77062,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77110 = [null,null,null,null,null,null,null];
(statearr_77110[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77110[(1)] = (1));

return statearr_77110;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77026){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77111){if((e77111 instanceof Object)){
var ex__9301__auto__ = e77111;
var statearr_77112_77177 = state_77026;
(statearr_77112_77177[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77178 = state_77026;
state_77026 = G__77178;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77026){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_77023,inst_77024,inst_77028,state_val_77062,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77113 = f__9319__auto__.call(null);
(statearr_77113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_77113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_77023,inst_77024,inst_77028,state_val_77062,c__9318__auto__,___10407__auto__))
})();
var inst_77030 = cljs.core.async.impl.dispatch.run.call(null,inst_77029);
var inst_77031 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_77028);
var state_77061__$1 = (function (){var statearr_77114 = state_77061;
(statearr_77114[(18)] = inst_77024);

(statearr_77114[(23)] = inst_77030);

return statearr_77114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77061__$1,(19),inst_77031);
} else {
if((state_val_77062 === (8))){
var inst_76945 = (state_77061[(21)]);
var inst_76966 = (state_77061[(2)]);
var state_77061__$1 = (function (){var statearr_77115 = state_77061;
(statearr_77115[(24)] = inst_76966);

return statearr_77115;
})();
var statearr_77116_77179 = state_77061__$1;
(statearr_77116_77179[(2)] = inst_76945);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77120[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77120[(1)] = (1));

return statearr_77120;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77061){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77121){if((e77121 instanceof Object)){
var ex__9301__auto__ = e77121;
var statearr_77122_77180 = state_77061;
(statearr_77122_77180[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77181 = state_77061;
state_77061 = G__77181;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77061){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77123 = f__9319__auto__.call(null);
(statearr_77123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test76720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta76721","meta76721",518137416,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test76720.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test76720.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test76720";

drop_dot.core_test.t_drop_dot$core_test76720.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test76720");
});

drop_dot.core_test.__GT_t_drop_dot$core_test76720 = (function drop_dot$core_test$__GT_t_drop_dot$core_test76720(meta76721){
return (new drop_dot.core_test.t_drop_dot$core_test76720(meta76721));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test76720(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-path-that-wants-linking-TEST",-1233474039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-path-that-wants-linking-TEST","chan-linkable-path->chan-path-that-wants-linking-TEST",-1426844860,null),"test/drop_dot/core_test.cljs",63,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test77182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test77182 = (function (meta77183){
this.meta77183 = meta77183;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test77182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77184,meta77183__$1){
var self__ = this;
var _77184__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test77182(meta77183__$1));
});

drop_dot.core_test.t_drop_dot$core_test77182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77184){
var self__ = this;
var _77184__$1 = this;
return self__.meta77183;
});

drop_dot.core_test.t_drop_dot$core_test77182.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test77182.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_77306){
var state_val_77307 = (state_77306[(1)]);
if((state_val_77307 === (7))){
var inst_77201 = (state_77306[(7)]);
var inst_77211 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77212 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_77213 = cljs.core.List.EMPTY;
var inst_77214 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77215 = cljs.core.cons.call(null,inst_77214,inst_77201);
var inst_77216 = cljs.core._conj.call(null,inst_77213,inst_77215);
var inst_77217 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77218 = cljs.core._conj.call(null,inst_77216,inst_77217);
var inst_77219 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77212,inst_77218,null];
var inst_77220 = cljs.core.PersistentHashMap.fromArrays(inst_77211,inst_77219);
var inst_77221 = cljs.test.do_report.call(null,inst_77220);
var state_77306__$1 = state_77306;
var statearr_77308_77512 = state_77306__$1;
(statearr_77308_77512[(2)] = inst_77221);

(statearr_77308_77512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (20))){
var inst_77279 = (state_77306[(8)]);
var inst_77282 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77283 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_77284 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_77279);
var inst_77285 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77283,inst_77284,null];
var inst_77286 = cljs.core.PersistentHashMap.fromArrays(inst_77282,inst_77285);
var inst_77287 = cljs.test.do_report.call(null,inst_77286);
var state_77306__$1 = state_77306;
var statearr_77309_77513 = state_77306__$1;
(statearr_77309_77513[(2)] = inst_77287);

(statearr_77309_77513[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (1))){
var inst_77186 = cljs.core.async.chan.call(null,(1));
var state_77306__$1 = (function (){var statearr_77310 = state_77306;
(statearr_77310[(9)] = inst_77186);

return statearr_77310;
})();
var statearr_77311_77514 = state_77306__$1;
(statearr_77311_77514[(2)] = null);

(statearr_77311_77514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77306,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_77196 = cljs.core.List.EMPTY;
var inst_77197 = cljs.core._conj.call(null,inst_77196,"~/.TDD-this-file-in-dot-drop-dot");
var inst_77198 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_77306__$1 = (function (){var statearr_77312 = state_77306;
(statearr_77312[(10)] = inst_77197);

return statearr_77312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77306__$1,(5),inst_77198);
} else {
if((state_val_77307 === (15))){
var inst_77241 = (state_77306[(11)]);
var inst_77262 = (state_77306[(2)]);
var state_77306__$1 = (function (){var statearr_77313 = state_77306;
(statearr_77313[(12)] = inst_77262);

return statearr_77313;
})();
var statearr_77314_77515 = state_77306__$1;
(statearr_77314_77515[(2)] = inst_77241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (21))){
var inst_77279 = (state_77306[(8)]);
var inst_77289 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77290 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_77291 = cljs.core.List.EMPTY;
var inst_77292 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_77293 = cljs.core.cons.call(null,inst_77292,inst_77279);
var inst_77294 = cljs.core._conj.call(null,inst_77291,inst_77293);
var inst_77295 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77296 = cljs.core._conj.call(null,inst_77294,inst_77295);
var inst_77297 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77290,inst_77296,null];
var inst_77298 = cljs.core.PersistentHashMap.fromArrays(inst_77289,inst_77297);
var inst_77299 = cljs.test.do_report.call(null,inst_77298);
var state_77306__$1 = state_77306;
var statearr_77315_77516 = state_77306__$1;
(statearr_77315_77516[(2)] = inst_77299);

(statearr_77315_77516[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (13))){
var inst_77240 = (state_77306[(13)]);
var inst_77243 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77244 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_77245 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_77240);
var inst_77246 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77244,inst_77245,null];
var inst_77247 = cljs.core.PersistentHashMap.fromArrays(inst_77243,inst_77246);
var inst_77248 = cljs.test.do_report.call(null,inst_77247);
var state_77306__$1 = state_77306;
var statearr_77316_77517 = state_77306__$1;
(statearr_77316_77517[(2)] = inst_77248);

(statearr_77316_77517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (22))){
var inst_77280 = (state_77306[(14)]);
var inst_77301 = (state_77306[(2)]);
var state_77306__$1 = (function (){var statearr_77317 = state_77306;
(statearr_77317[(15)] = inst_77301);

return statearr_77317;
})();
var statearr_77318_77518 = state_77306__$1;
(statearr_77318_77518[(2)] = inst_77280);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (6))){
var inst_77201 = (state_77306[(7)]);
var inst_77204 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77205 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_77206 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77201);
var inst_77207 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77205,inst_77206,null];
var inst_77208 = cljs.core.PersistentHashMap.fromArrays(inst_77204,inst_77207);
var inst_77209 = cljs.test.do_report.call(null,inst_77208);
var state_77306__$1 = state_77306;
var statearr_77319_77519 = state_77306__$1;
(statearr_77319_77519[(2)] = inst_77209);

(statearr_77319_77519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (17))){
var inst_77265 = (state_77306[(2)]);
var inst_77266 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77267 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_77268 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77267,inst_77265,null];
var inst_77269 = cljs.core.PersistentHashMap.fromArrays(inst_77266,inst_77268);
var inst_77270 = cljs.test.do_report.call(null,inst_77269);
var state_77306__$1 = state_77306;
var statearr_77320_77520 = state_77306__$1;
(statearr_77320_77520[(2)] = inst_77270);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (3))){
var inst_77187 = (state_77306[(2)]);
var inst_77188 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77189 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_77190 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77189,inst_77187,null];
var inst_77191 = cljs.core.PersistentHashMap.fromArrays(inst_77188,inst_77190);
var inst_77192 = cljs.test.do_report.call(null,inst_77191);
var state_77306__$1 = state_77306;
var statearr_77321_77521 = state_77306__$1;
(statearr_77321_77521[(2)] = inst_77192);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (12))){
var inst_77240 = (state_77306[(13)]);
var inst_77236 = (state_77306[(16)]);
var inst_77241 = (state_77306[(11)]);
var inst_77239 = (state_77306[(2)]);
var inst_77240__$1 = cljs.core._conj.call(null,inst_77236,inst_77239);
var inst_77241__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_77240__$1);
var state_77306__$1 = (function (){var statearr_77322 = state_77306;
(statearr_77322[(13)] = inst_77240__$1);

(statearr_77322[(11)] = inst_77241__$1);

return statearr_77322;
})();
if(cljs.core.truth_(inst_77241__$1)){
var statearr_77323_77522 = state_77306__$1;
(statearr_77323_77522[(1)] = (13));

} else {
var statearr_77324_77523 = state_77306__$1;
(statearr_77324_77523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (2))){
var inst_77225 = (state_77306[(2)]);
var state_77306__$1 = (function (){var statearr_77325 = state_77306;
(statearr_77325[(17)] = inst_77225);

return statearr_77325;
})();
var statearr_77326_77524 = state_77306__$1;
(statearr_77326_77524[(2)] = null);

(statearr_77326_77524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (19))){
var inst_77280 = (state_77306[(14)]);
var inst_77275 = (state_77306[(18)]);
var inst_77279 = (state_77306[(8)]);
var inst_77278 = (state_77306[(2)]);
var inst_77279__$1 = cljs.core._conj.call(null,inst_77275,inst_77278);
var inst_77280__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_77279__$1);
var state_77306__$1 = (function (){var statearr_77327 = state_77306;
(statearr_77327[(14)] = inst_77280__$1);

(statearr_77327[(8)] = inst_77279__$1);

return statearr_77327;
})();
if(cljs.core.truth_(inst_77280__$1)){
var statearr_77328_77525 = state_77306__$1;
(statearr_77328_77525[(1)] = (20));

} else {
var statearr_77329_77526 = state_77306__$1;
(statearr_77329_77526[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77306,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_77235 = cljs.core.List.EMPTY;
var inst_77236 = cljs.core._conj.call(null,inst_77235,"ERROR: ");
var inst_77237 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_77306__$1 = (function (){var statearr_77330 = state_77306;
(statearr_77330[(16)] = inst_77236);

return statearr_77330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77306__$1,(12),inst_77237);
} else {
if((state_val_77307 === (9))){
var inst_77264 = (state_77306[(2)]);
var state_77306__$1 = (function (){var statearr_77331 = state_77306;
(statearr_77331[(19)] = inst_77264);

return statearr_77331;
})();
var statearr_77332_77527 = state_77306__$1;
(statearr_77332_77527[(2)] = null);

(statearr_77332_77527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (5))){
var inst_77201 = (state_77306[(7)]);
var inst_77202 = (state_77306[(20)]);
var inst_77197 = (state_77306[(10)]);
var inst_77200 = (state_77306[(2)]);
var inst_77201__$1 = cljs.core._conj.call(null,inst_77197,inst_77200);
var inst_77202__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77201__$1);
var state_77306__$1 = (function (){var statearr_77333 = state_77306;
(statearr_77333[(7)] = inst_77201__$1);

(statearr_77333[(20)] = inst_77202__$1);

return statearr_77333;
})();
if(cljs.core.truth_(inst_77202__$1)){
var statearr_77334_77528 = state_77306__$1;
(statearr_77334_77528[(1)] = (6));

} else {
var statearr_77335_77529 = state_77306__$1;
(statearr_77335_77529[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (14))){
var inst_77240 = (state_77306[(13)]);
var inst_77250 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77251 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_77252 = cljs.core.List.EMPTY;
var inst_77253 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_77254 = cljs.core.cons.call(null,inst_77253,inst_77240);
var inst_77255 = cljs.core._conj.call(null,inst_77252,inst_77254);
var inst_77256 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77257 = cljs.core._conj.call(null,inst_77255,inst_77256);
var inst_77258 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77251,inst_77257,null];
var inst_77259 = cljs.core.PersistentHashMap.fromArrays(inst_77250,inst_77258);
var inst_77260 = cljs.test.do_report.call(null,inst_77259);
var state_77306__$1 = state_77306;
var statearr_77336_77530 = state_77306__$1;
(statearr_77336_77530[(2)] = inst_77260);

(statearr_77336_77530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (16))){
var inst_77303 = (state_77306[(2)]);
var inst_77304 = done.call(null);
var state_77306__$1 = (function (){var statearr_77337 = state_77306;
(statearr_77337[(21)] = inst_77303);

return statearr_77337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77306__$1,inst_77304);
} else {
if((state_val_77307 === (10))){
var inst_77226 = (state_77306[(2)]);
var inst_77227 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77228 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_77229 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77228,inst_77226,null];
var inst_77230 = cljs.core.PersistentHashMap.fromArrays(inst_77227,inst_77229);
var inst_77231 = cljs.test.do_report.call(null,inst_77230);
var state_77306__$1 = state_77306;
var statearr_77338_77531 = state_77306__$1;
(statearr_77338_77531[(2)] = inst_77231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77307 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77306,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_77274 = cljs.core.List.EMPTY;
var inst_77275 = cljs.core._conj.call(null,inst_77274,"ERROR: ");
var inst_77276 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_77306__$1 = (function (){var statearr_77339 = state_77306;
(statearr_77339[(18)] = inst_77275);

return statearr_77339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77306__$1,(19),inst_77276);
} else {
if((state_val_77307 === (8))){
var inst_77202 = (state_77306[(20)]);
var inst_77223 = (state_77306[(2)]);
var state_77306__$1 = (function (){var statearr_77340 = state_77306;
(statearr_77340[(22)] = inst_77223);

return statearr_77340;
})();
var statearr_77341_77532 = state_77306__$1;
(statearr_77341_77532[(2)] = inst_77202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77345[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77345[(1)] = (1));

return statearr_77345;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77306){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77346){if((e77346 instanceof Object)){
var ex__9301__auto__ = e77346;
var statearr_77347_77533 = state_77306;
(statearr_77347_77533[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77534 = state_77306;
state_77306 = G__77534;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77306){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_77348 = f__9319__auto__.call(null);
(statearr_77348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test77182.prototype.apply = (function (self__,args77185){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args77185)));
});

drop_dot.core_test.t_drop_dot$core_test77182.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_77469){
var state_val_77470 = (state_77469[(1)]);
if((state_val_77470 === (7))){
var inst_77364 = (state_77469[(7)]);
var inst_77374 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77375 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_77376 = cljs.core.List.EMPTY;
var inst_77377 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77378 = cljs.core.cons.call(null,inst_77377,inst_77364);
var inst_77379 = cljs.core._conj.call(null,inst_77376,inst_77378);
var inst_77380 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77381 = cljs.core._conj.call(null,inst_77379,inst_77380);
var inst_77382 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77375,inst_77381,null];
var inst_77383 = cljs.core.PersistentHashMap.fromArrays(inst_77374,inst_77382);
var inst_77384 = cljs.test.do_report.call(null,inst_77383);
var state_77469__$1 = state_77469;
var statearr_77471_77535 = state_77469__$1;
(statearr_77471_77535[(2)] = inst_77384);

(statearr_77471_77535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (20))){
var inst_77442 = (state_77469[(8)]);
var inst_77445 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77446 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_77447 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_77442);
var inst_77448 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77446,inst_77447,null];
var inst_77449 = cljs.core.PersistentHashMap.fromArrays(inst_77445,inst_77448);
var inst_77450 = cljs.test.do_report.call(null,inst_77449);
var state_77469__$1 = state_77469;
var statearr_77472_77536 = state_77469__$1;
(statearr_77472_77536[(2)] = inst_77450);

(statearr_77472_77536[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (1))){
var inst_77349 = cljs.core.async.chan.call(null,(1));
var state_77469__$1 = (function (){var statearr_77473 = state_77469;
(statearr_77473[(9)] = inst_77349);

return statearr_77473;
})();
var statearr_77474_77537 = state_77469__$1;
(statearr_77474_77537[(2)] = null);

(statearr_77474_77537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77469,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_77359 = cljs.core.List.EMPTY;
var inst_77360 = cljs.core._conj.call(null,inst_77359,"~/.TDD-this-file-in-dot-drop-dot");
var inst_77361 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_77469__$1 = (function (){var statearr_77475 = state_77469;
(statearr_77475[(10)] = inst_77360);

return statearr_77475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77469__$1,(5),inst_77361);
} else {
if((state_val_77470 === (15))){
var inst_77404 = (state_77469[(11)]);
var inst_77425 = (state_77469[(2)]);
var state_77469__$1 = (function (){var statearr_77476 = state_77469;
(statearr_77476[(12)] = inst_77425);

return statearr_77476;
})();
var statearr_77477_77538 = state_77469__$1;
(statearr_77477_77538[(2)] = inst_77404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (21))){
var inst_77442 = (state_77469[(8)]);
var inst_77452 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77453 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_77454 = cljs.core.List.EMPTY;
var inst_77455 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_77456 = cljs.core.cons.call(null,inst_77455,inst_77442);
var inst_77457 = cljs.core._conj.call(null,inst_77454,inst_77456);
var inst_77458 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77459 = cljs.core._conj.call(null,inst_77457,inst_77458);
var inst_77460 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77453,inst_77459,null];
var inst_77461 = cljs.core.PersistentHashMap.fromArrays(inst_77452,inst_77460);
var inst_77462 = cljs.test.do_report.call(null,inst_77461);
var state_77469__$1 = state_77469;
var statearr_77478_77539 = state_77469__$1;
(statearr_77478_77539[(2)] = inst_77462);

(statearr_77478_77539[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (13))){
var inst_77403 = (state_77469[(13)]);
var inst_77406 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77407 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_77408 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_77403);
var inst_77409 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77407,inst_77408,null];
var inst_77410 = cljs.core.PersistentHashMap.fromArrays(inst_77406,inst_77409);
var inst_77411 = cljs.test.do_report.call(null,inst_77410);
var state_77469__$1 = state_77469;
var statearr_77479_77540 = state_77469__$1;
(statearr_77479_77540[(2)] = inst_77411);

(statearr_77479_77540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (22))){
var inst_77443 = (state_77469[(14)]);
var inst_77464 = (state_77469[(2)]);
var state_77469__$1 = (function (){var statearr_77480 = state_77469;
(statearr_77480[(15)] = inst_77464);

return statearr_77480;
})();
var statearr_77481_77541 = state_77469__$1;
(statearr_77481_77541[(2)] = inst_77443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (6))){
var inst_77364 = (state_77469[(7)]);
var inst_77367 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77368 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_77369 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77364);
var inst_77370 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77368,inst_77369,null];
var inst_77371 = cljs.core.PersistentHashMap.fromArrays(inst_77367,inst_77370);
var inst_77372 = cljs.test.do_report.call(null,inst_77371);
var state_77469__$1 = state_77469;
var statearr_77482_77542 = state_77469__$1;
(statearr_77482_77542[(2)] = inst_77372);

(statearr_77482_77542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (17))){
var inst_77428 = (state_77469[(2)]);
var inst_77429 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77430 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_77431 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77430,inst_77428,null];
var inst_77432 = cljs.core.PersistentHashMap.fromArrays(inst_77429,inst_77431);
var inst_77433 = cljs.test.do_report.call(null,inst_77432);
var state_77469__$1 = state_77469;
var statearr_77483_77543 = state_77469__$1;
(statearr_77483_77543[(2)] = inst_77433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (3))){
var inst_77350 = (state_77469[(2)]);
var inst_77351 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77352 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_77353 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77352,inst_77350,null];
var inst_77354 = cljs.core.PersistentHashMap.fromArrays(inst_77351,inst_77353);
var inst_77355 = cljs.test.do_report.call(null,inst_77354);
var state_77469__$1 = state_77469;
var statearr_77484_77544 = state_77469__$1;
(statearr_77484_77544[(2)] = inst_77355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (12))){
var inst_77404 = (state_77469[(11)]);
var inst_77399 = (state_77469[(16)]);
var inst_77403 = (state_77469[(13)]);
var inst_77402 = (state_77469[(2)]);
var inst_77403__$1 = cljs.core._conj.call(null,inst_77399,inst_77402);
var inst_77404__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_77403__$1);
var state_77469__$1 = (function (){var statearr_77485 = state_77469;
(statearr_77485[(11)] = inst_77404__$1);

(statearr_77485[(13)] = inst_77403__$1);

return statearr_77485;
})();
if(cljs.core.truth_(inst_77404__$1)){
var statearr_77486_77545 = state_77469__$1;
(statearr_77486_77545[(1)] = (13));

} else {
var statearr_77487_77546 = state_77469__$1;
(statearr_77487_77546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (2))){
var inst_77388 = (state_77469[(2)]);
var state_77469__$1 = (function (){var statearr_77488 = state_77469;
(statearr_77488[(17)] = inst_77388);

return statearr_77488;
})();
var statearr_77489_77547 = state_77469__$1;
(statearr_77489_77547[(2)] = null);

(statearr_77489_77547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (19))){
var inst_77438 = (state_77469[(18)]);
var inst_77443 = (state_77469[(14)]);
var inst_77442 = (state_77469[(8)]);
var inst_77441 = (state_77469[(2)]);
var inst_77442__$1 = cljs.core._conj.call(null,inst_77438,inst_77441);
var inst_77443__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_77442__$1);
var state_77469__$1 = (function (){var statearr_77490 = state_77469;
(statearr_77490[(14)] = inst_77443__$1);

(statearr_77490[(8)] = inst_77442__$1);

return statearr_77490;
})();
if(cljs.core.truth_(inst_77443__$1)){
var statearr_77491_77548 = state_77469__$1;
(statearr_77491_77548[(1)] = (20));

} else {
var statearr_77492_77549 = state_77469__$1;
(statearr_77492_77549[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77469,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_77398 = cljs.core.List.EMPTY;
var inst_77399 = cljs.core._conj.call(null,inst_77398,"ERROR: ");
var inst_77400 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_77469__$1 = (function (){var statearr_77493 = state_77469;
(statearr_77493[(16)] = inst_77399);

return statearr_77493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77469__$1,(12),inst_77400);
} else {
if((state_val_77470 === (9))){
var inst_77427 = (state_77469[(2)]);
var state_77469__$1 = (function (){var statearr_77494 = state_77469;
(statearr_77494[(19)] = inst_77427);

return statearr_77494;
})();
var statearr_77495_77550 = state_77469__$1;
(statearr_77495_77550[(2)] = null);

(statearr_77495_77550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (5))){
var inst_77360 = (state_77469[(10)]);
var inst_77365 = (state_77469[(20)]);
var inst_77364 = (state_77469[(7)]);
var inst_77363 = (state_77469[(2)]);
var inst_77364__$1 = cljs.core._conj.call(null,inst_77360,inst_77363);
var inst_77365__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77364__$1);
var state_77469__$1 = (function (){var statearr_77496 = state_77469;
(statearr_77496[(20)] = inst_77365__$1);

(statearr_77496[(7)] = inst_77364__$1);

return statearr_77496;
})();
if(cljs.core.truth_(inst_77365__$1)){
var statearr_77497_77551 = state_77469__$1;
(statearr_77497_77551[(1)] = (6));

} else {
var statearr_77498_77552 = state_77469__$1;
(statearr_77498_77552[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (14))){
var inst_77403 = (state_77469[(13)]);
var inst_77413 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77414 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_77415 = cljs.core.List.EMPTY;
var inst_77416 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_77417 = cljs.core.cons.call(null,inst_77416,inst_77403);
var inst_77418 = cljs.core._conj.call(null,inst_77415,inst_77417);
var inst_77419 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77420 = cljs.core._conj.call(null,inst_77418,inst_77419);
var inst_77421 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77414,inst_77420,null];
var inst_77422 = cljs.core.PersistentHashMap.fromArrays(inst_77413,inst_77421);
var inst_77423 = cljs.test.do_report.call(null,inst_77422);
var state_77469__$1 = state_77469;
var statearr_77499_77553 = state_77469__$1;
(statearr_77499_77553[(2)] = inst_77423);

(statearr_77499_77553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (16))){
var inst_77466 = (state_77469[(2)]);
var inst_77467 = done.call(null);
var state_77469__$1 = (function (){var statearr_77500 = state_77469;
(statearr_77500[(21)] = inst_77466);

return statearr_77500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77469__$1,inst_77467);
} else {
if((state_val_77470 === (10))){
var inst_77389 = (state_77469[(2)]);
var inst_77390 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77391 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_77392 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77391,inst_77389,null];
var inst_77393 = cljs.core.PersistentHashMap.fromArrays(inst_77390,inst_77392);
var inst_77394 = cljs.test.do_report.call(null,inst_77393);
var state_77469__$1 = state_77469;
var statearr_77501_77554 = state_77469__$1;
(statearr_77501_77554[(2)] = inst_77394);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77470 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77469,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_77437 = cljs.core.List.EMPTY;
var inst_77438 = cljs.core._conj.call(null,inst_77437,"ERROR: ");
var inst_77439 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_77469__$1 = (function (){var statearr_77502 = state_77469;
(statearr_77502[(18)] = inst_77438);

return statearr_77502;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77469__$1,(19),inst_77439);
} else {
if((state_val_77470 === (8))){
var inst_77365 = (state_77469[(20)]);
var inst_77386 = (state_77469[(2)]);
var state_77469__$1 = (function (){var statearr_77503 = state_77469;
(statearr_77503[(22)] = inst_77386);

return statearr_77503;
})();
var statearr_77504_77555 = state_77469__$1;
(statearr_77504_77555[(2)] = inst_77365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77508[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77508[(1)] = (1));

return statearr_77508;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77469){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77509){if((e77509 instanceof Object)){
var ex__9301__auto__ = e77509;
var statearr_77510_77556 = state_77469;
(statearr_77510_77556[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77557 = state_77469;
state_77469 = G__77557;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77469){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77511 = f__9319__auto__.call(null);
(statearr_77511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test77182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77183","meta77183",535715729,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test77182.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test77182.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test77182";

drop_dot.core_test.t_drop_dot$core_test77182.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test77182");
});

drop_dot.core_test.__GT_t_drop_dot$core_test77182 = (function drop_dot$core_test$__GT_t_drop_dot$core_test77182(meta77183){
return (new drop_dot.core_test.t_drop_dot$core_test77182(meta77183));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test77182(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test77558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test77558 = (function (meta77559){
this.meta77559 = meta77559;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test77558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77560,meta77559__$1){
var self__ = this;
var _77560__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test77558(meta77559__$1));
});

drop_dot.core_test.t_drop_dot$core_test77558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77560){
var self__ = this;
var _77560__$1 = this;
return self__.meta77559;
});

drop_dot.core_test.t_drop_dot$core_test77558.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test77558.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_77608){
var state_val_77609 = (state_77608[(1)]);
if((state_val_77609 === (1))){
var state_77608__$1 = state_77608;
var statearr_77610_77708 = state_77608__$1;
(statearr_77610_77708[(2)] = null);

(statearr_77610_77708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77609 === (2))){
var inst_77605 = (state_77608[(2)]);
var inst_77606 = done.call(null);
var state_77608__$1 = (function (){var statearr_77611 = state_77608;
(statearr_77611[(7)] = inst_77605);

return statearr_77611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77608__$1,inst_77606);
} else {
if((state_val_77609 === (3))){
var inst_77562 = (state_77608[(2)]);
var inst_77563 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77564 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_77565 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77564,inst_77562,null];
var inst_77566 = cljs.core.PersistentHashMap.fromArrays(inst_77563,inst_77565);
var inst_77567 = cljs.test.do_report.call(null,inst_77566);
var state_77608__$1 = state_77608;
var statearr_77612_77709 = state_77608__$1;
(statearr_77612_77709[(2)] = inst_77567);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77609 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77608,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_77571 = cljs.core.List.EMPTY;
var inst_77572 = cljs.core._conj.call(null,inst_77571,"val1");
var inst_77576 = cljs.core.async.chan.call(null,(1));
var inst_77577 = (function (){var c__9318__auto____$1 = inst_77576;
return ((function (c__9318__auto____$1,_,inst_77571,inst_77572,inst_77576,state_val_77609,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_77571,inst_77572,inst_77576,state_val_77609,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_77574){
var state_val_77575 = (state_77574[(1)]);
if((state_val_77575 === (1))){
var state_77574__$1 = state_77574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77574__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_77571,inst_77572,inst_77576,state_val_77609,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_77571,inst_77572,inst_77576,state_val_77609,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77616 = [null,null,null,null,null,null,null];
(statearr_77616[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77616[(1)] = (1));

return statearr_77616;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77574){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77617){if((e77617 instanceof Object)){
var ex__9301__auto__ = e77617;
var statearr_77618_77710 = state_77574;
(statearr_77618_77710[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77711 = state_77574;
state_77574 = G__77711;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77574){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_77571,inst_77572,inst_77576,state_val_77609,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_77619 = f__9319__auto__.call(null);
(statearr_77619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_77619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_77571,inst_77572,inst_77576,state_val_77609,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_77578 = cljs.core.async.impl.dispatch.run.call(null,inst_77577);
var state_77608__$1 = (function (){var statearr_77620 = state_77608;
(statearr_77620[(8)] = inst_77572);

(statearr_77620[(9)] = inst_77578);

return statearr_77620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77608__$1,(5),inst_77576);
} else {
if((state_val_77609 === (5))){
var inst_77581 = (state_77608[(10)]);
var inst_77582 = (state_77608[(11)]);
var inst_77572 = (state_77608[(8)]);
var inst_77580 = (state_77608[(2)]);
var inst_77581__$1 = cljs.core._conj.call(null,inst_77572,inst_77580);
var inst_77582__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77581__$1);
var state_77608__$1 = (function (){var statearr_77621 = state_77608;
(statearr_77621[(10)] = inst_77581__$1);

(statearr_77621[(11)] = inst_77582__$1);

return statearr_77621;
})();
if(cljs.core.truth_(inst_77582__$1)){
var statearr_77622_77712 = state_77608__$1;
(statearr_77622_77712[(1)] = (6));

} else {
var statearr_77623_77713 = state_77608__$1;
(statearr_77623_77713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77609 === (6))){
var inst_77581 = (state_77608[(10)]);
var inst_77584 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77585 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_77586 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77581);
var inst_77587 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77585,inst_77586,null];
var inst_77588 = cljs.core.PersistentHashMap.fromArrays(inst_77584,inst_77587);
var inst_77589 = cljs.test.do_report.call(null,inst_77588);
var state_77608__$1 = state_77608;
var statearr_77624_77714 = state_77608__$1;
(statearr_77624_77714[(2)] = inst_77589);

(statearr_77624_77714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77609 === (7))){
var inst_77581 = (state_77608[(10)]);
var inst_77591 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77592 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_77593 = cljs.core.List.EMPTY;
var inst_77594 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77595 = cljs.core.cons.call(null,inst_77594,inst_77581);
var inst_77596 = cljs.core._conj.call(null,inst_77593,inst_77595);
var inst_77597 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77598 = cljs.core._conj.call(null,inst_77596,inst_77597);
var inst_77599 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77592,inst_77598,null];
var inst_77600 = cljs.core.PersistentHashMap.fromArrays(inst_77591,inst_77599);
var inst_77601 = cljs.test.do_report.call(null,inst_77600);
var state_77608__$1 = state_77608;
var statearr_77625_77715 = state_77608__$1;
(statearr_77625_77715[(2)] = inst_77601);

(statearr_77625_77715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77609 === (8))){
var inst_77582 = (state_77608[(11)]);
var inst_77603 = (state_77608[(2)]);
var state_77608__$1 = (function (){var statearr_77626 = state_77608;
(statearr_77626[(12)] = inst_77603);

return statearr_77626;
})();
var statearr_77627_77716 = state_77608__$1;
(statearr_77627_77716[(2)] = inst_77582);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77608__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77631 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77631[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77631[(1)] = (1));

return statearr_77631;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77608){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77632){if((e77632 instanceof Object)){
var ex__9301__auto__ = e77632;
var statearr_77633_77717 = state_77608;
(statearr_77633_77717[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77718 = state_77608;
state_77608 = G__77718;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77608){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_77634 = f__9319__auto__.call(null);
(statearr_77634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test77558.prototype.apply = (function (self__,args77561){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args77561)));
});

drop_dot.core_test.t_drop_dot$core_test77558.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_77681){
var state_val_77682 = (state_77681[(1)]);
if((state_val_77682 === (1))){
var state_77681__$1 = state_77681;
var statearr_77683_77719 = state_77681__$1;
(statearr_77683_77719[(2)] = null);

(statearr_77683_77719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77682 === (2))){
var inst_77678 = (state_77681[(2)]);
var inst_77679 = done.call(null);
var state_77681__$1 = (function (){var statearr_77684 = state_77681;
(statearr_77684[(7)] = inst_77678);

return statearr_77684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77681__$1,inst_77679);
} else {
if((state_val_77682 === (3))){
var inst_77635 = (state_77681[(2)]);
var inst_77636 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77637 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_77638 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77637,inst_77635,null];
var inst_77639 = cljs.core.PersistentHashMap.fromArrays(inst_77636,inst_77638);
var inst_77640 = cljs.test.do_report.call(null,inst_77639);
var state_77681__$1 = state_77681;
var statearr_77685_77720 = state_77681__$1;
(statearr_77685_77720[(2)] = inst_77640);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77681__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77682 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77681,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_77644 = cljs.core.List.EMPTY;
var inst_77645 = cljs.core._conj.call(null,inst_77644,"val1");
var inst_77649 = cljs.core.async.chan.call(null,(1));
var inst_77650 = (function (){var c__9318__auto____$1 = inst_77649;
return ((function (c__9318__auto____$1,_,inst_77644,inst_77645,inst_77649,state_val_77682,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_77644,inst_77645,inst_77649,state_val_77682,c__9318__auto__,___10407__auto__){
return (function (state_77647){
var state_val_77648 = (state_77647[(1)]);
if((state_val_77648 === (1))){
var state_77647__$1 = state_77647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77647__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_77644,inst_77645,inst_77649,state_val_77682,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_77644,inst_77645,inst_77649,state_val_77682,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77689 = [null,null,null,null,null,null,null];
(statearr_77689[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77689[(1)] = (1));

return statearr_77689;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77647){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77690){if((e77690 instanceof Object)){
var ex__9301__auto__ = e77690;
var statearr_77691_77721 = state_77647;
(statearr_77691_77721[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77722 = state_77647;
state_77647 = G__77722;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77647){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_77644,inst_77645,inst_77649,state_val_77682,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77692 = f__9319__auto__.call(null);
(statearr_77692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_77692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_77644,inst_77645,inst_77649,state_val_77682,c__9318__auto__,___10407__auto__))
})();
var inst_77651 = cljs.core.async.impl.dispatch.run.call(null,inst_77650);
var state_77681__$1 = (function (){var statearr_77693 = state_77681;
(statearr_77693[(8)] = inst_77651);

(statearr_77693[(9)] = inst_77645);

return statearr_77693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77681__$1,(5),inst_77649);
} else {
if((state_val_77682 === (5))){
var inst_77654 = (state_77681[(10)]);
var inst_77655 = (state_77681[(11)]);
var inst_77645 = (state_77681[(9)]);
var inst_77653 = (state_77681[(2)]);
var inst_77654__$1 = cljs.core._conj.call(null,inst_77645,inst_77653);
var inst_77655__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77654__$1);
var state_77681__$1 = (function (){var statearr_77694 = state_77681;
(statearr_77694[(10)] = inst_77654__$1);

(statearr_77694[(11)] = inst_77655__$1);

return statearr_77694;
})();
if(cljs.core.truth_(inst_77655__$1)){
var statearr_77695_77723 = state_77681__$1;
(statearr_77695_77723[(1)] = (6));

} else {
var statearr_77696_77724 = state_77681__$1;
(statearr_77696_77724[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77682 === (6))){
var inst_77654 = (state_77681[(10)]);
var inst_77657 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77658 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_77659 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77654);
var inst_77660 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77658,inst_77659,null];
var inst_77661 = cljs.core.PersistentHashMap.fromArrays(inst_77657,inst_77660);
var inst_77662 = cljs.test.do_report.call(null,inst_77661);
var state_77681__$1 = state_77681;
var statearr_77697_77725 = state_77681__$1;
(statearr_77697_77725[(2)] = inst_77662);

(statearr_77697_77725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77682 === (7))){
var inst_77654 = (state_77681[(10)]);
var inst_77664 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77665 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_77666 = cljs.core.List.EMPTY;
var inst_77667 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77668 = cljs.core.cons.call(null,inst_77667,inst_77654);
var inst_77669 = cljs.core._conj.call(null,inst_77666,inst_77668);
var inst_77670 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77671 = cljs.core._conj.call(null,inst_77669,inst_77670);
var inst_77672 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77665,inst_77671,null];
var inst_77673 = cljs.core.PersistentHashMap.fromArrays(inst_77664,inst_77672);
var inst_77674 = cljs.test.do_report.call(null,inst_77673);
var state_77681__$1 = state_77681;
var statearr_77698_77726 = state_77681__$1;
(statearr_77698_77726[(2)] = inst_77674);

(statearr_77698_77726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77682 === (8))){
var inst_77655 = (state_77681[(11)]);
var inst_77676 = (state_77681[(2)]);
var state_77681__$1 = (function (){var statearr_77699 = state_77681;
(statearr_77699[(12)] = inst_77676);

return statearr_77699;
})();
var statearr_77700_77727 = state_77681__$1;
(statearr_77700_77727[(2)] = inst_77655);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77681__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77704 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77704[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77704[(1)] = (1));

return statearr_77704;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77681){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77705){if((e77705 instanceof Object)){
var ex__9301__auto__ = e77705;
var statearr_77706_77728 = state_77681;
(statearr_77706_77728[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77729 = state_77681;
state_77681 = G__77729;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77681){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77707 = f__9319__auto__.call(null);
(statearr_77707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test77558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77559","meta77559",-1243757794,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test77558.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test77558.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test77558";

drop_dot.core_test.t_drop_dot$core_test77558.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test77558");
});

drop_dot.core_test.__GT_t_drop_dot$core_test77558 = (function drop_dot$core_test$__GT_t_drop_dot$core_test77558(meta77559){
return (new drop_dot.core_test.t_drop_dot$core_test77558(meta77559));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test77558(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test77730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test77730 = (function (meta77731){
this.meta77731 = meta77731;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test77730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77732,meta77731__$1){
var self__ = this;
var _77732__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test77730(meta77731__$1));
});

drop_dot.core_test.t_drop_dot$core_test77730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77732){
var self__ = this;
var _77732__$1 = this;
return self__.meta77731;
});

drop_dot.core_test.t_drop_dot$core_test77730.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test77730.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_77737){
var state_val_77738 = (state_77737[(1)]);
if((state_val_77738 === (1))){
var inst_77734 = cljs.core.async.chan.call(null);
var inst_77735 = done.call(null);
var state_77737__$1 = (function (){var statearr_77739 = state_77737;
(statearr_77739[(7)] = inst_77734);

return statearr_77739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77737__$1,inst_77735);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77743 = [null,null,null,null,null,null,null,null];
(statearr_77743[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77743[(1)] = (1));

return statearr_77743;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77737){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77744){if((e77744 instanceof Object)){
var ex__9301__auto__ = e77744;
var statearr_77745_77760 = state_77737;
(statearr_77745_77760[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77761 = state_77737;
state_77737 = G__77761;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77737){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_77746 = f__9319__auto__.call(null);
(statearr_77746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test77730.prototype.apply = (function (self__,args77733){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args77733)));
});

drop_dot.core_test.t_drop_dot$core_test77730.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_77750){
var state_val_77751 = (state_77750[(1)]);
if((state_val_77751 === (1))){
var inst_77747 = cljs.core.async.chan.call(null);
var inst_77748 = done.call(null);
var state_77750__$1 = (function (){var statearr_77752 = state_77750;
(statearr_77752[(7)] = inst_77747);

return statearr_77752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77750__$1,inst_77748);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77756 = [null,null,null,null,null,null,null,null];
(statearr_77756[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77756[(1)] = (1));

return statearr_77756;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77750){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77757){if((e77757 instanceof Object)){
var ex__9301__auto__ = e77757;
var statearr_77758_77762 = state_77750;
(statearr_77758_77762[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77763 = state_77750;
state_77750 = G__77763;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77750){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77759 = f__9319__auto__.call(null);
(statearr_77759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test77730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77731","meta77731",68490565,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test77730.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test77730.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test77730";

drop_dot.core_test.t_drop_dot$core_test77730.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test77730");
});

drop_dot.core_test.__GT_t_drop_dot$core_test77730 = (function drop_dot$core_test$__GT_t_drop_dot$core_test77730(meta77731){
return (new drop_dot.core_test.t_drop_dot$core_test77730(meta77731));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test77730(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test77764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test77764 = (function (meta77765){
this.meta77765 = meta77765;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test77764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77766,meta77765__$1){
var self__ = this;
var _77766__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test77764(meta77765__$1));
});

drop_dot.core_test.t_drop_dot$core_test77764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77766){
var self__ = this;
var _77766__$1 = this;
return self__.meta77765;
});

drop_dot.core_test.t_drop_dot$core_test77764.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test77764.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_77809){
var state_val_77810 = (state_77809[(1)]);
if((state_val_77810 === (1))){
var state_77809__$1 = state_77809;
var statearr_77811_77890 = state_77809__$1;
(statearr_77811_77890[(2)] = null);

(statearr_77811_77890[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77810 === (2))){
var inst_77806 = (state_77809[(2)]);
var inst_77807 = done.call(null);
var state_77809__$1 = (function (){var statearr_77812 = state_77809;
(statearr_77812[(7)] = inst_77806);

return statearr_77812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77809__$1,inst_77807);
} else {
if((state_val_77810 === (3))){
var inst_77768 = (state_77809[(2)]);
var inst_77769 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77770 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_77771 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77770,inst_77768,null];
var inst_77772 = cljs.core.PersistentHashMap.fromArrays(inst_77769,inst_77771);
var inst_77773 = cljs.test.do_report.call(null,inst_77772);
var state_77809__$1 = state_77809;
var statearr_77813_77891 = state_77809__$1;
(statearr_77813_77891[(2)] = inst_77773);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77809__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77810 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77809,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_77777 = cljs.core.List.EMPTY;
var inst_77778 = cljs.core._conj.call(null,inst_77777,true);
var inst_77779 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_77809__$1 = (function (){var statearr_77814 = state_77809;
(statearr_77814[(8)] = inst_77778);

return statearr_77814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77809__$1,(5),inst_77779);
} else {
if((state_val_77810 === (5))){
var inst_77782 = (state_77809[(9)]);
var inst_77778 = (state_77809[(8)]);
var inst_77783 = (state_77809[(10)]);
var inst_77781 = (state_77809[(2)]);
var inst_77782__$1 = cljs.core._conj.call(null,inst_77778,inst_77781);
var inst_77783__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77782__$1);
var state_77809__$1 = (function (){var statearr_77815 = state_77809;
(statearr_77815[(9)] = inst_77782__$1);

(statearr_77815[(10)] = inst_77783__$1);

return statearr_77815;
})();
if(cljs.core.truth_(inst_77783__$1)){
var statearr_77816_77892 = state_77809__$1;
(statearr_77816_77892[(1)] = (6));

} else {
var statearr_77817_77893 = state_77809__$1;
(statearr_77817_77893[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77810 === (6))){
var inst_77782 = (state_77809[(9)]);
var inst_77785 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77786 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_77787 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77782);
var inst_77788 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77786,inst_77787,null];
var inst_77789 = cljs.core.PersistentHashMap.fromArrays(inst_77785,inst_77788);
var inst_77790 = cljs.test.do_report.call(null,inst_77789);
var state_77809__$1 = state_77809;
var statearr_77818_77894 = state_77809__$1;
(statearr_77818_77894[(2)] = inst_77790);

(statearr_77818_77894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77810 === (7))){
var inst_77782 = (state_77809[(9)]);
var inst_77792 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77793 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_77794 = cljs.core.List.EMPTY;
var inst_77795 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77796 = cljs.core.cons.call(null,inst_77795,inst_77782);
var inst_77797 = cljs.core._conj.call(null,inst_77794,inst_77796);
var inst_77798 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77799 = cljs.core._conj.call(null,inst_77797,inst_77798);
var inst_77800 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77793,inst_77799,null];
var inst_77801 = cljs.core.PersistentHashMap.fromArrays(inst_77792,inst_77800);
var inst_77802 = cljs.test.do_report.call(null,inst_77801);
var state_77809__$1 = state_77809;
var statearr_77819_77895 = state_77809__$1;
(statearr_77819_77895[(2)] = inst_77802);

(statearr_77819_77895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77810 === (8))){
var inst_77783 = (state_77809[(10)]);
var inst_77804 = (state_77809[(2)]);
var state_77809__$1 = (function (){var statearr_77820 = state_77809;
(statearr_77820[(11)] = inst_77804);

return statearr_77820;
})();
var statearr_77821_77896 = state_77809__$1;
(statearr_77821_77896[(2)] = inst_77783);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77809__$1);

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
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77825[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77825[(1)] = (1));

return statearr_77825;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77809){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77826){if((e77826 instanceof Object)){
var ex__9301__auto__ = e77826;
var statearr_77827_77897 = state_77809;
(statearr_77827_77897[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77898 = state_77809;
state_77809 = G__77898;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77809){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_77828 = f__9319__auto__.call(null);
(statearr_77828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test77764.prototype.apply = (function (self__,args77767){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args77767)));
});

drop_dot.core_test.t_drop_dot$core_test77764.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_77870){
var state_val_77871 = (state_77870[(1)]);
if((state_val_77871 === (1))){
var state_77870__$1 = state_77870;
var statearr_77872_77899 = state_77870__$1;
(statearr_77872_77899[(2)] = null);

(statearr_77872_77899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77871 === (2))){
var inst_77867 = (state_77870[(2)]);
var inst_77868 = done.call(null);
var state_77870__$1 = (function (){var statearr_77873 = state_77870;
(statearr_77873[(7)] = inst_77867);

return statearr_77873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77870__$1,inst_77868);
} else {
if((state_val_77871 === (3))){
var inst_77829 = (state_77870[(2)]);
var inst_77830 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77831 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_77832 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_77831,inst_77829,null];
var inst_77833 = cljs.core.PersistentHashMap.fromArrays(inst_77830,inst_77832);
var inst_77834 = cljs.test.do_report.call(null,inst_77833);
var state_77870__$1 = state_77870;
var statearr_77874_77900 = state_77870__$1;
(statearr_77874_77900[(2)] = inst_77834);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77871 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_77870,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_77838 = cljs.core.List.EMPTY;
var inst_77839 = cljs.core._conj.call(null,inst_77838,true);
var inst_77840 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_77870__$1 = (function (){var statearr_77875 = state_77870;
(statearr_77875[(8)] = inst_77839);

return statearr_77875;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_77870__$1,(5),inst_77840);
} else {
if((state_val_77871 === (5))){
var inst_77844 = (state_77870[(9)]);
var inst_77843 = (state_77870[(10)]);
var inst_77839 = (state_77870[(8)]);
var inst_77842 = (state_77870[(2)]);
var inst_77843__$1 = cljs.core._conj.call(null,inst_77839,inst_77842);
var inst_77844__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_77843__$1);
var state_77870__$1 = (function (){var statearr_77876 = state_77870;
(statearr_77876[(9)] = inst_77844__$1);

(statearr_77876[(10)] = inst_77843__$1);

return statearr_77876;
})();
if(cljs.core.truth_(inst_77844__$1)){
var statearr_77877_77901 = state_77870__$1;
(statearr_77877_77901[(1)] = (6));

} else {
var statearr_77878_77902 = state_77870__$1;
(statearr_77878_77902[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77871 === (6))){
var inst_77843 = (state_77870[(10)]);
var inst_77846 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77847 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_77848 = cljs.core.cons.call(null,cljs.core._EQ_,inst_77843);
var inst_77849 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_77847,inst_77848,null];
var inst_77850 = cljs.core.PersistentHashMap.fromArrays(inst_77846,inst_77849);
var inst_77851 = cljs.test.do_report.call(null,inst_77850);
var state_77870__$1 = state_77870;
var statearr_77879_77903 = state_77870__$1;
(statearr_77879_77903[(2)] = inst_77851);

(statearr_77879_77903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77871 === (7))){
var inst_77843 = (state_77870[(10)]);
var inst_77853 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_77854 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_77855 = cljs.core.List.EMPTY;
var inst_77856 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_77857 = cljs.core.cons.call(null,inst_77856,inst_77843);
var inst_77858 = cljs.core._conj.call(null,inst_77855,inst_77857);
var inst_77859 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_77860 = cljs.core._conj.call(null,inst_77858,inst_77859);
var inst_77861 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_77854,inst_77860,null];
var inst_77862 = cljs.core.PersistentHashMap.fromArrays(inst_77853,inst_77861);
var inst_77863 = cljs.test.do_report.call(null,inst_77862);
var state_77870__$1 = state_77870;
var statearr_77880_77904 = state_77870__$1;
(statearr_77880_77904[(2)] = inst_77863);

(statearr_77880_77904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77871 === (8))){
var inst_77844 = (state_77870[(9)]);
var inst_77865 = (state_77870[(2)]);
var state_77870__$1 = (function (){var statearr_77881 = state_77870;
(statearr_77881[(11)] = inst_77865);

return statearr_77881;
})();
var statearr_77882_77905 = state_77870__$1;
(statearr_77882_77905[(2)] = inst_77844);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77870__$1);

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
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_77886 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77886[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_77886[(1)] = (1));

return statearr_77886;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_77870){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_77870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e77887){if((e77887 instanceof Object)){
var ex__9301__auto__ = e77887;
var statearr_77888_77906 = state_77870;
(statearr_77888_77906[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77907 = state_77870;
state_77870 = G__77907;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_77870){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_77870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_77889 = f__9319__auto__.call(null);
(statearr_77889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_77889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test77764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77765","meta77765",-481211036,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test77764.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test77764.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test77764";

drop_dot.core_test.t_drop_dot$core_test77764.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test77764");
});

drop_dot.core_test.__GT_t_drop_dot$core_test77764 = (function drop_dot$core_test$__GT_t_drop_dot$core_test77764(meta77765){
return (new drop_dot.core_test.t_drop_dot$core_test77764(meta77765));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test77764(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map