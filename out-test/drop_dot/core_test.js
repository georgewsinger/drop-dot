// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test41336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test41336 = (function (meta41337){
this.meta41337 = meta41337;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test41336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41338,meta41337__$1){
var self__ = this;
var _41338__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test41336(meta41337__$1));
});

drop_dot.core_test.t_drop_dot$core_test41336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41338){
var self__ = this;
var _41338__$1 = this;
return self__.meta41337;
});

drop_dot.core_test.t_drop_dot$core_test41336.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test41336.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_41477){
var state_val_41478 = (state_41477[(1)]);
if((state_val_41478 === (7))){
var inst_41360 = (state_41477[(7)]);
var inst_41370 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41371 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_41372 = cljs.core.List.EMPTY;
var inst_41373 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_41374 = cljs.core.cons.call(null,inst_41373,inst_41360);
var inst_41375 = cljs.core._conj.call(null,inst_41372,inst_41374);
var inst_41376 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41377 = cljs.core._conj.call(null,inst_41375,inst_41376);
var inst_41378 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41371,inst_41377,null];
var inst_41379 = cljs.core.PersistentHashMap.fromArrays(inst_41370,inst_41378);
var inst_41380 = cljs.test.do_report.call(null,inst_41379);
var state_41477__$1 = state_41477;
var statearr_41479_41740 = state_41477__$1;
(statearr_41479_41740[(2)] = inst_41380);

(statearr_41479_41740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (20))){
var inst_41450 = (state_41477[(8)]);
var inst_41453 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41454 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41455 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41450);
var inst_41456 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41454,inst_41455,null];
var inst_41457 = cljs.core.PersistentHashMap.fromArrays(inst_41453,inst_41456);
var inst_41458 = cljs.test.do_report.call(null,inst_41457);
var state_41477__$1 = state_41477;
var statearr_41480_41741 = state_41477__$1;
(statearr_41480_41741[(2)] = inst_41458);

(statearr_41480_41741[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (1))){
var state_41477__$1 = state_41477;
var statearr_41481_41742 = state_41477__$1;
(statearr_41481_41742[(2)] = null);

(statearr_41481_41742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41477,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41349 = cljs.core.List.EMPTY;
var inst_41350 = cljs.core._conj.call(null,inst_41349,"NOTICE: ");
var inst_41354 = cljs.core.async.chan.call(null,(1));
var inst_41355 = (function (){var c__9318__auto____$1 = inst_41354;
return ((function (c__9318__auto____$1,_,inst_41349,inst_41350,inst_41354,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_41349,inst_41350,inst_41354,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_41352){
var state_val_41353 = (state_41352[(1)]);
if((state_val_41353 === (1))){
var state_41352__$1 = state_41352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41352__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_41349,inst_41350,inst_41354,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_41349,inst_41350,inst_41354,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_41485 = [null,null,null,null,null,null,null];
(statearr_41485[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41485[(1)] = (1));

return statearr_41485;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41352){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41486){if((e41486 instanceof Object)){
var ex__9301__auto__ = e41486;
var statearr_41487_41743 = state_41352;
(statearr_41487_41743[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41744 = state_41352;
state_41352 = G__41744;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41352){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_41349,inst_41350,inst_41354,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_41488 = f__9319__auto__.call(null);
(statearr_41488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_41349,inst_41350,inst_41354,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_41356 = cljs.core.async.impl.dispatch.run.call(null,inst_41355);
var inst_41357 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_41354);
var state_41477__$1 = (function (){var statearr_41489 = state_41477;
(statearr_41489[(9)] = inst_41356);

(statearr_41489[(10)] = inst_41350);

return statearr_41489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41477__$1,(5),inst_41357);
} else {
if((state_val_41478 === (15))){
var inst_41406 = (state_41477[(11)]);
var inst_41427 = (state_41477[(2)]);
var state_41477__$1 = (function (){var statearr_41490 = state_41477;
(statearr_41490[(12)] = inst_41427);

return statearr_41490;
})();
var statearr_41491_41745 = state_41477__$1;
(statearr_41491_41745[(2)] = inst_41406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (21))){
var inst_41450 = (state_41477[(8)]);
var inst_41460 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41461 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41462 = cljs.core.List.EMPTY;
var inst_41463 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41464 = cljs.core.cons.call(null,inst_41463,inst_41450);
var inst_41465 = cljs.core._conj.call(null,inst_41462,inst_41464);
var inst_41466 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41467 = cljs.core._conj.call(null,inst_41465,inst_41466);
var inst_41468 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41461,inst_41467,null];
var inst_41469 = cljs.core.PersistentHashMap.fromArrays(inst_41460,inst_41468);
var inst_41470 = cljs.test.do_report.call(null,inst_41469);
var state_41477__$1 = state_41477;
var statearr_41492_41746 = state_41477__$1;
(statearr_41492_41746[(2)] = inst_41470);

(statearr_41492_41746[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (13))){
var inst_41405 = (state_41477[(13)]);
var inst_41408 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41409 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41410 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41405);
var inst_41411 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41409,inst_41410,null];
var inst_41412 = cljs.core.PersistentHashMap.fromArrays(inst_41408,inst_41411);
var inst_41413 = cljs.test.do_report.call(null,inst_41412);
var state_41477__$1 = state_41477;
var statearr_41493_41747 = state_41477__$1;
(statearr_41493_41747[(2)] = inst_41413);

(statearr_41493_41747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (22))){
var inst_41451 = (state_41477[(14)]);
var inst_41472 = (state_41477[(2)]);
var state_41477__$1 = (function (){var statearr_41494 = state_41477;
(statearr_41494[(15)] = inst_41472);

return statearr_41494;
})();
var statearr_41495_41748 = state_41477__$1;
(statearr_41495_41748[(2)] = inst_41451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (6))){
var inst_41360 = (state_41477[(7)]);
var inst_41363 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41364 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_41365 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_41360);
var inst_41366 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41364,inst_41365,null];
var inst_41367 = cljs.core.PersistentHashMap.fromArrays(inst_41363,inst_41366);
var inst_41368 = cljs.test.do_report.call(null,inst_41367);
var state_41477__$1 = state_41477;
var statearr_41496_41749 = state_41477__$1;
(statearr_41496_41749[(2)] = inst_41368);

(statearr_41496_41749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (17))){
var inst_41430 = (state_41477[(2)]);
var inst_41431 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41432 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41433 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41432,inst_41430,null];
var inst_41434 = cljs.core.PersistentHashMap.fromArrays(inst_41431,inst_41433);
var inst_41435 = cljs.test.do_report.call(null,inst_41434);
var state_41477__$1 = state_41477;
var statearr_41497_41750 = state_41477__$1;
(statearr_41497_41750[(2)] = inst_41435);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (3))){
var inst_41340 = (state_41477[(2)]);
var inst_41341 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41342 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_41343 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41342,inst_41340,null];
var inst_41344 = cljs.core.PersistentHashMap.fromArrays(inst_41341,inst_41343);
var inst_41345 = cljs.test.do_report.call(null,inst_41344);
var state_41477__$1 = state_41477;
var statearr_41498_41751 = state_41477__$1;
(statearr_41498_41751[(2)] = inst_41345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (12))){
var inst_41395 = (state_41477[(16)]);
var inst_41405 = (state_41477[(13)]);
var inst_41406 = (state_41477[(11)]);
var inst_41404 = (state_41477[(2)]);
var inst_41405__$1 = cljs.core._conj.call(null,inst_41395,inst_41404);
var inst_41406__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41405__$1);
var state_41477__$1 = (function (){var statearr_41499 = state_41477;
(statearr_41499[(13)] = inst_41405__$1);

(statearr_41499[(11)] = inst_41406__$1);

return statearr_41499;
})();
if(cljs.core.truth_(inst_41406__$1)){
var statearr_41500_41752 = state_41477__$1;
(statearr_41500_41752[(1)] = (13));

} else {
var statearr_41501_41753 = state_41477__$1;
(statearr_41501_41753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (2))){
var inst_41384 = (state_41477[(2)]);
var state_41477__$1 = (function (){var statearr_41502 = state_41477;
(statearr_41502[(17)] = inst_41384);

return statearr_41502;
})();
var statearr_41503_41754 = state_41477__$1;
(statearr_41503_41754[(2)] = null);

(statearr_41503_41754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (19))){
var inst_41450 = (state_41477[(8)]);
var inst_41451 = (state_41477[(14)]);
var inst_41440 = (state_41477[(18)]);
var inst_41449 = (state_41477[(2)]);
var inst_41450__$1 = cljs.core._conj.call(null,inst_41440,inst_41449);
var inst_41451__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41450__$1);
var state_41477__$1 = (function (){var statearr_41504 = state_41477;
(statearr_41504[(8)] = inst_41450__$1);

(statearr_41504[(14)] = inst_41451__$1);

return statearr_41504;
})();
if(cljs.core.truth_(inst_41451__$1)){
var statearr_41505_41755 = state_41477__$1;
(statearr_41505_41755[(1)] = (20));

} else {
var statearr_41506_41756 = state_41477__$1;
(statearr_41506_41756[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41477,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41394 = cljs.core.List.EMPTY;
var inst_41395 = cljs.core._conj.call(null,inst_41394,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41399 = cljs.core.async.chan.call(null,(1));
var inst_41400 = (function (){var c__9318__auto____$1 = inst_41399;
return ((function (c__9318__auto____$1,_,inst_41394,inst_41395,inst_41399,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_41394,inst_41395,inst_41399,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_41397){
var state_val_41398 = (state_41397[(1)]);
if((state_val_41398 === (1))){
var state_41397__$1 = state_41397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41397__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_41394,inst_41395,inst_41399,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_41394,inst_41395,inst_41399,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_41510 = [null,null,null,null,null,null,null];
(statearr_41510[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41510[(1)] = (1));

return statearr_41510;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41397){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41511){if((e41511 instanceof Object)){
var ex__9301__auto__ = e41511;
var statearr_41512_41757 = state_41397;
(statearr_41512_41757[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41758 = state_41397;
state_41397 = G__41758;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41397){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_41394,inst_41395,inst_41399,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_41513 = f__9319__auto__.call(null);
(statearr_41513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_41394,inst_41395,inst_41399,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_41401 = cljs.core.async.impl.dispatch.run.call(null,inst_41400);
var inst_41402 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_41399);
var state_41477__$1 = (function (){var statearr_41514 = state_41477;
(statearr_41514[(16)] = inst_41395);

(statearr_41514[(19)] = inst_41401);

return statearr_41514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41477__$1,(12),inst_41402);
} else {
if((state_val_41478 === (9))){
var inst_41429 = (state_41477[(2)]);
var state_41477__$1 = (function (){var statearr_41515 = state_41477;
(statearr_41515[(20)] = inst_41429);

return statearr_41515;
})();
var statearr_41516_41759 = state_41477__$1;
(statearr_41516_41759[(2)] = null);

(statearr_41516_41759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (5))){
var inst_41360 = (state_41477[(7)]);
var inst_41361 = (state_41477[(21)]);
var inst_41350 = (state_41477[(10)]);
var inst_41359 = (state_41477[(2)]);
var inst_41360__$1 = cljs.core._conj.call(null,inst_41350,inst_41359);
var inst_41361__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_41360__$1);
var state_41477__$1 = (function (){var statearr_41517 = state_41477;
(statearr_41517[(7)] = inst_41360__$1);

(statearr_41517[(21)] = inst_41361__$1);

return statearr_41517;
})();
if(cljs.core.truth_(inst_41361__$1)){
var statearr_41518_41760 = state_41477__$1;
(statearr_41518_41760[(1)] = (6));

} else {
var statearr_41519_41761 = state_41477__$1;
(statearr_41519_41761[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (14))){
var inst_41405 = (state_41477[(13)]);
var inst_41415 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41416 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41417 = cljs.core.List.EMPTY;
var inst_41418 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41419 = cljs.core.cons.call(null,inst_41418,inst_41405);
var inst_41420 = cljs.core._conj.call(null,inst_41417,inst_41419);
var inst_41421 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41422 = cljs.core._conj.call(null,inst_41420,inst_41421);
var inst_41423 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41416,inst_41422,null];
var inst_41424 = cljs.core.PersistentHashMap.fromArrays(inst_41415,inst_41423);
var inst_41425 = cljs.test.do_report.call(null,inst_41424);
var state_41477__$1 = state_41477;
var statearr_41520_41762 = state_41477__$1;
(statearr_41520_41762[(2)] = inst_41425);

(statearr_41520_41762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (16))){
var inst_41474 = (state_41477[(2)]);
var inst_41475 = done.call(null);
var state_41477__$1 = (function (){var statearr_41521 = state_41477;
(statearr_41521[(22)] = inst_41474);

return statearr_41521;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41477__$1,inst_41475);
} else {
if((state_val_41478 === (10))){
var inst_41385 = (state_41477[(2)]);
var inst_41386 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41387 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41388 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41387,inst_41385,null];
var inst_41389 = cljs.core.PersistentHashMap.fromArrays(inst_41386,inst_41388);
var inst_41390 = cljs.test.do_report.call(null,inst_41389);
var state_41477__$1 = state_41477;
var statearr_41522_41763 = state_41477__$1;
(statearr_41522_41763[(2)] = inst_41390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41478 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41477,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_41439 = cljs.core.List.EMPTY;
var inst_41440 = cljs.core._conj.call(null,inst_41439,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41444 = cljs.core.async.chan.call(null,(1));
var inst_41445 = (function (){var c__9318__auto____$1 = inst_41444;
return ((function (c__9318__auto____$1,_,inst_41439,inst_41440,inst_41444,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_41439,inst_41440,inst_41444,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_41442){
var state_val_41443 = (state_41442[(1)]);
if((state_val_41443 === (1))){
var state_41442__$1 = state_41442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41442__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_41439,inst_41440,inst_41444,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_41439,inst_41440,inst_41444,state_val_41478,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_41526 = [null,null,null,null,null,null,null];
(statearr_41526[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41526[(1)] = (1));

return statearr_41526;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41442){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41527){if((e41527 instanceof Object)){
var ex__9301__auto__ = e41527;
var statearr_41528_41764 = state_41442;
(statearr_41528_41764[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41765 = state_41442;
state_41442 = G__41765;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41442){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_41439,inst_41440,inst_41444,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_41529 = f__9319__auto__.call(null);
(statearr_41529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_41439,inst_41440,inst_41444,state_val_41478,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_41446 = cljs.core.async.impl.dispatch.run.call(null,inst_41445);
var inst_41447 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_41444);
var state_41477__$1 = (function (){var statearr_41530 = state_41477;
(statearr_41530[(23)] = inst_41446);

(statearr_41530[(18)] = inst_41440);

return statearr_41530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41477__$1,(19),inst_41447);
} else {
if((state_val_41478 === (8))){
var inst_41361 = (state_41477[(21)]);
var inst_41382 = (state_41477[(2)]);
var state_41477__$1 = (function (){var statearr_41531 = state_41477;
(statearr_41531[(24)] = inst_41382);

return statearr_41531;
})();
var statearr_41532_41766 = state_41477__$1;
(statearr_41532_41766[(2)] = inst_41361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477__$1);

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
var statearr_41536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41536[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41536[(1)] = (1));

return statearr_41536;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41477){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41537){if((e41537 instanceof Object)){
var ex__9301__auto__ = e41537;
var statearr_41538_41767 = state_41477;
(statearr_41538_41767[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41768 = state_41477;
state_41477 = G__41768;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41477){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_41539 = f__9319__auto__.call(null);
(statearr_41539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test41336.prototype.apply = (function (self__,args41339){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41339)));
});

drop_dot.core_test.t_drop_dot$core_test41336.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_41677){
var state_val_41678 = (state_41677[(1)]);
if((state_val_41678 === (7))){
var inst_41560 = (state_41677[(7)]);
var inst_41570 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41571 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_41572 = cljs.core.List.EMPTY;
var inst_41573 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_41574 = cljs.core.cons.call(null,inst_41573,inst_41560);
var inst_41575 = cljs.core._conj.call(null,inst_41572,inst_41574);
var inst_41576 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41577 = cljs.core._conj.call(null,inst_41575,inst_41576);
var inst_41578 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41571,inst_41577,null];
var inst_41579 = cljs.core.PersistentHashMap.fromArrays(inst_41570,inst_41578);
var inst_41580 = cljs.test.do_report.call(null,inst_41579);
var state_41677__$1 = state_41677;
var statearr_41679_41769 = state_41677__$1;
(statearr_41679_41769[(2)] = inst_41580);

(statearr_41679_41769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (20))){
var inst_41650 = (state_41677[(8)]);
var inst_41653 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41654 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41655 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41650);
var inst_41656 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41654,inst_41655,null];
var inst_41657 = cljs.core.PersistentHashMap.fromArrays(inst_41653,inst_41656);
var inst_41658 = cljs.test.do_report.call(null,inst_41657);
var state_41677__$1 = state_41677;
var statearr_41680_41770 = state_41677__$1;
(statearr_41680_41770[(2)] = inst_41658);

(statearr_41680_41770[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (1))){
var state_41677__$1 = state_41677;
var statearr_41681_41771 = state_41677__$1;
(statearr_41681_41771[(2)] = null);

(statearr_41681_41771[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41677,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41549 = cljs.core.List.EMPTY;
var inst_41550 = cljs.core._conj.call(null,inst_41549,"NOTICE: ");
var inst_41554 = cljs.core.async.chan.call(null,(1));
var inst_41555 = (function (){var c__9318__auto____$1 = inst_41554;
return ((function (c__9318__auto____$1,_,inst_41549,inst_41550,inst_41554,state_val_41678,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_41549,inst_41550,inst_41554,state_val_41678,c__9318__auto__,___10407__auto__){
return (function (state_41552){
var state_val_41553 = (state_41552[(1)]);
if((state_val_41553 === (1))){
var state_41552__$1 = state_41552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41552__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_41549,inst_41550,inst_41554,state_val_41678,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_41549,inst_41550,inst_41554,state_val_41678,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_41685 = [null,null,null,null,null,null,null];
(statearr_41685[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41685[(1)] = (1));

return statearr_41685;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41552){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41686){if((e41686 instanceof Object)){
var ex__9301__auto__ = e41686;
var statearr_41687_41772 = state_41552;
(statearr_41687_41772[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41773 = state_41552;
state_41552 = G__41773;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41552){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_41549,inst_41550,inst_41554,state_val_41678,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41688 = f__9319__auto__.call(null);
(statearr_41688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_41549,inst_41550,inst_41554,state_val_41678,c__9318__auto__,___10407__auto__))
})();
var inst_41556 = cljs.core.async.impl.dispatch.run.call(null,inst_41555);
var inst_41557 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_41554);
var state_41677__$1 = (function (){var statearr_41689 = state_41677;
(statearr_41689[(9)] = inst_41556);

(statearr_41689[(10)] = inst_41550);

return statearr_41689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41677__$1,(5),inst_41557);
} else {
if((state_val_41678 === (15))){
var inst_41606 = (state_41677[(11)]);
var inst_41627 = (state_41677[(2)]);
var state_41677__$1 = (function (){var statearr_41690 = state_41677;
(statearr_41690[(12)] = inst_41627);

return statearr_41690;
})();
var statearr_41691_41774 = state_41677__$1;
(statearr_41691_41774[(2)] = inst_41606);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (21))){
var inst_41650 = (state_41677[(8)]);
var inst_41660 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41661 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41662 = cljs.core.List.EMPTY;
var inst_41663 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41664 = cljs.core.cons.call(null,inst_41663,inst_41650);
var inst_41665 = cljs.core._conj.call(null,inst_41662,inst_41664);
var inst_41666 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41667 = cljs.core._conj.call(null,inst_41665,inst_41666);
var inst_41668 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41661,inst_41667,null];
var inst_41669 = cljs.core.PersistentHashMap.fromArrays(inst_41660,inst_41668);
var inst_41670 = cljs.test.do_report.call(null,inst_41669);
var state_41677__$1 = state_41677;
var statearr_41692_41775 = state_41677__$1;
(statearr_41692_41775[(2)] = inst_41670);

(statearr_41692_41775[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (13))){
var inst_41605 = (state_41677[(13)]);
var inst_41608 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41609 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41610 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41605);
var inst_41611 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41609,inst_41610,null];
var inst_41612 = cljs.core.PersistentHashMap.fromArrays(inst_41608,inst_41611);
var inst_41613 = cljs.test.do_report.call(null,inst_41612);
var state_41677__$1 = state_41677;
var statearr_41693_41776 = state_41677__$1;
(statearr_41693_41776[(2)] = inst_41613);

(statearr_41693_41776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (22))){
var inst_41651 = (state_41677[(14)]);
var inst_41672 = (state_41677[(2)]);
var state_41677__$1 = (function (){var statearr_41694 = state_41677;
(statearr_41694[(15)] = inst_41672);

return statearr_41694;
})();
var statearr_41695_41777 = state_41677__$1;
(statearr_41695_41777[(2)] = inst_41651);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (6))){
var inst_41560 = (state_41677[(7)]);
var inst_41563 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41564 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_41565 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_41560);
var inst_41566 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41564,inst_41565,null];
var inst_41567 = cljs.core.PersistentHashMap.fromArrays(inst_41563,inst_41566);
var inst_41568 = cljs.test.do_report.call(null,inst_41567);
var state_41677__$1 = state_41677;
var statearr_41696_41778 = state_41677__$1;
(statearr_41696_41778[(2)] = inst_41568);

(statearr_41696_41778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (17))){
var inst_41630 = (state_41677[(2)]);
var inst_41631 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41632 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41633 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41632,inst_41630,null];
var inst_41634 = cljs.core.PersistentHashMap.fromArrays(inst_41631,inst_41633);
var inst_41635 = cljs.test.do_report.call(null,inst_41634);
var state_41677__$1 = state_41677;
var statearr_41697_41779 = state_41677__$1;
(statearr_41697_41779[(2)] = inst_41635);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (3))){
var inst_41540 = (state_41677[(2)]);
var inst_41541 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41542 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_41543 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41542,inst_41540,null];
var inst_41544 = cljs.core.PersistentHashMap.fromArrays(inst_41541,inst_41543);
var inst_41545 = cljs.test.do_report.call(null,inst_41544);
var state_41677__$1 = state_41677;
var statearr_41698_41780 = state_41677__$1;
(statearr_41698_41780[(2)] = inst_41545);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (12))){
var inst_41606 = (state_41677[(11)]);
var inst_41595 = (state_41677[(16)]);
var inst_41605 = (state_41677[(13)]);
var inst_41604 = (state_41677[(2)]);
var inst_41605__$1 = cljs.core._conj.call(null,inst_41595,inst_41604);
var inst_41606__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41605__$1);
var state_41677__$1 = (function (){var statearr_41699 = state_41677;
(statearr_41699[(11)] = inst_41606__$1);

(statearr_41699[(13)] = inst_41605__$1);

return statearr_41699;
})();
if(cljs.core.truth_(inst_41606__$1)){
var statearr_41700_41781 = state_41677__$1;
(statearr_41700_41781[(1)] = (13));

} else {
var statearr_41701_41782 = state_41677__$1;
(statearr_41701_41782[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (2))){
var inst_41584 = (state_41677[(2)]);
var state_41677__$1 = (function (){var statearr_41702 = state_41677;
(statearr_41702[(17)] = inst_41584);

return statearr_41702;
})();
var statearr_41703_41783 = state_41677__$1;
(statearr_41703_41783[(2)] = null);

(statearr_41703_41783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (19))){
var inst_41650 = (state_41677[(8)]);
var inst_41640 = (state_41677[(18)]);
var inst_41651 = (state_41677[(14)]);
var inst_41649 = (state_41677[(2)]);
var inst_41650__$1 = cljs.core._conj.call(null,inst_41640,inst_41649);
var inst_41651__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41650__$1);
var state_41677__$1 = (function (){var statearr_41704 = state_41677;
(statearr_41704[(8)] = inst_41650__$1);

(statearr_41704[(14)] = inst_41651__$1);

return statearr_41704;
})();
if(cljs.core.truth_(inst_41651__$1)){
var statearr_41705_41784 = state_41677__$1;
(statearr_41705_41784[(1)] = (20));

} else {
var statearr_41706_41785 = state_41677__$1;
(statearr_41706_41785[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41677,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41594 = cljs.core.List.EMPTY;
var inst_41595 = cljs.core._conj.call(null,inst_41594,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41599 = cljs.core.async.chan.call(null,(1));
var inst_41600 = (function (){var c__9318__auto____$1 = inst_41599;
return ((function (c__9318__auto____$1,_,inst_41594,inst_41595,inst_41599,state_val_41678,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_41594,inst_41595,inst_41599,state_val_41678,c__9318__auto__,___10407__auto__){
return (function (state_41597){
var state_val_41598 = (state_41597[(1)]);
if((state_val_41598 === (1))){
var state_41597__$1 = state_41597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41597__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_41594,inst_41595,inst_41599,state_val_41678,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_41594,inst_41595,inst_41599,state_val_41678,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_41710 = [null,null,null,null,null,null,null];
(statearr_41710[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41710[(1)] = (1));

return statearr_41710;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41597){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41711){if((e41711 instanceof Object)){
var ex__9301__auto__ = e41711;
var statearr_41712_41786 = state_41597;
(statearr_41712_41786[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41787 = state_41597;
state_41597 = G__41787;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41597){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_41594,inst_41595,inst_41599,state_val_41678,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41713 = f__9319__auto__.call(null);
(statearr_41713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_41594,inst_41595,inst_41599,state_val_41678,c__9318__auto__,___10407__auto__))
})();
var inst_41601 = cljs.core.async.impl.dispatch.run.call(null,inst_41600);
var inst_41602 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_41599);
var state_41677__$1 = (function (){var statearr_41714 = state_41677;
(statearr_41714[(16)] = inst_41595);

(statearr_41714[(19)] = inst_41601);

return statearr_41714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41677__$1,(12),inst_41602);
} else {
if((state_val_41678 === (9))){
var inst_41629 = (state_41677[(2)]);
var state_41677__$1 = (function (){var statearr_41715 = state_41677;
(statearr_41715[(20)] = inst_41629);

return statearr_41715;
})();
var statearr_41716_41788 = state_41677__$1;
(statearr_41716_41788[(2)] = null);

(statearr_41716_41788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (5))){
var inst_41560 = (state_41677[(7)]);
var inst_41561 = (state_41677[(21)]);
var inst_41550 = (state_41677[(10)]);
var inst_41559 = (state_41677[(2)]);
var inst_41560__$1 = cljs.core._conj.call(null,inst_41550,inst_41559);
var inst_41561__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_41560__$1);
var state_41677__$1 = (function (){var statearr_41717 = state_41677;
(statearr_41717[(7)] = inst_41560__$1);

(statearr_41717[(21)] = inst_41561__$1);

return statearr_41717;
})();
if(cljs.core.truth_(inst_41561__$1)){
var statearr_41718_41789 = state_41677__$1;
(statearr_41718_41789[(1)] = (6));

} else {
var statearr_41719_41790 = state_41677__$1;
(statearr_41719_41790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (14))){
var inst_41605 = (state_41677[(13)]);
var inst_41615 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41616 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41617 = cljs.core.List.EMPTY;
var inst_41618 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41619 = cljs.core.cons.call(null,inst_41618,inst_41605);
var inst_41620 = cljs.core._conj.call(null,inst_41617,inst_41619);
var inst_41621 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41622 = cljs.core._conj.call(null,inst_41620,inst_41621);
var inst_41623 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41616,inst_41622,null];
var inst_41624 = cljs.core.PersistentHashMap.fromArrays(inst_41615,inst_41623);
var inst_41625 = cljs.test.do_report.call(null,inst_41624);
var state_41677__$1 = state_41677;
var statearr_41720_41791 = state_41677__$1;
(statearr_41720_41791[(2)] = inst_41625);

(statearr_41720_41791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (16))){
var inst_41674 = (state_41677[(2)]);
var inst_41675 = done.call(null);
var state_41677__$1 = (function (){var statearr_41721 = state_41677;
(statearr_41721[(22)] = inst_41674);

return statearr_41721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41677__$1,inst_41675);
} else {
if((state_val_41678 === (10))){
var inst_41585 = (state_41677[(2)]);
var inst_41586 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41587 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-path-that-wants-linking","core/chan-linkable-path->chan-path-that-wants-linking",552396164,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_41588 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41587,inst_41585,null];
var inst_41589 = cljs.core.PersistentHashMap.fromArrays(inst_41586,inst_41588);
var inst_41590 = cljs.test.do_report.call(null,inst_41589);
var state_41677__$1 = state_41677;
var statearr_41722_41792 = state_41677__$1;
(statearr_41722_41792[(2)] = inst_41590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41678 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41677,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_41639 = cljs.core.List.EMPTY;
var inst_41640 = cljs.core._conj.call(null,inst_41639,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_41644 = cljs.core.async.chan.call(null,(1));
var inst_41645 = (function (){var c__9318__auto____$1 = inst_41644;
return ((function (c__9318__auto____$1,_,inst_41639,inst_41640,inst_41644,state_val_41678,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_41639,inst_41640,inst_41644,state_val_41678,c__9318__auto__,___10407__auto__){
return (function (state_41642){
var state_val_41643 = (state_41642[(1)]);
if((state_val_41643 === (1))){
var state_41642__$1 = state_41642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41642__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_41639,inst_41640,inst_41644,state_val_41678,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_41639,inst_41640,inst_41644,state_val_41678,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_41726 = [null,null,null,null,null,null,null];
(statearr_41726[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41726[(1)] = (1));

return statearr_41726;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41642){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41727){if((e41727 instanceof Object)){
var ex__9301__auto__ = e41727;
var statearr_41728_41793 = state_41642;
(statearr_41728_41793[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41794 = state_41642;
state_41642 = G__41794;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41642){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_41639,inst_41640,inst_41644,state_val_41678,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41729 = f__9319__auto__.call(null);
(statearr_41729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_41639,inst_41640,inst_41644,state_val_41678,c__9318__auto__,___10407__auto__))
})();
var inst_41646 = cljs.core.async.impl.dispatch.run.call(null,inst_41645);
var inst_41647 = drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,inst_41644);
var state_41677__$1 = (function (){var statearr_41730 = state_41677;
(statearr_41730[(23)] = inst_41646);

(statearr_41730[(18)] = inst_41640);

return statearr_41730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41677__$1,(19),inst_41647);
} else {
if((state_val_41678 === (8))){
var inst_41561 = (state_41677[(21)]);
var inst_41582 = (state_41677[(2)]);
var state_41677__$1 = (function (){var statearr_41731 = state_41677;
(statearr_41731[(24)] = inst_41582);

return statearr_41731;
})();
var statearr_41732_41795 = state_41677__$1;
(statearr_41732_41795[(2)] = inst_41561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677__$1);

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
var statearr_41736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41736[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41736[(1)] = (1));

return statearr_41736;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41677){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41737){if((e41737 instanceof Object)){
var ex__9301__auto__ = e41737;
var statearr_41738_41796 = state_41677;
(statearr_41738_41796[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41797 = state_41677;
state_41677 = G__41797;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41677){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41739 = f__9319__auto__.call(null);
(statearr_41739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test41336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41337","meta41337",-1600335962,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test41336.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test41336.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test41336";

drop_dot.core_test.t_drop_dot$core_test41336.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test41336");
});

drop_dot.core_test.__GT_t_drop_dot$core_test41336 = (function drop_dot$core_test$__GT_t_drop_dot$core_test41336(meta41337){
return (new drop_dot.core_test.t_drop_dot$core_test41336(meta41337));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test41336(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-path-that-wants-linking-TEST",-1233474039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-path-that-wants-linking-TEST","chan-linkable-path->chan-path-that-wants-linking-TEST",-1426844860,null),"test/drop_dot/core_test.cljs",63,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test41798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test41798 = (function (meta41799){
this.meta41799 = meta41799;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test41798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41800,meta41799__$1){
var self__ = this;
var _41800__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test41798(meta41799__$1));
});

drop_dot.core_test.t_drop_dot$core_test41798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41800){
var self__ = this;
var _41800__$1 = this;
return self__.meta41799;
});

drop_dot.core_test.t_drop_dot$core_test41798.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test41798.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_41922){
var state_val_41923 = (state_41922[(1)]);
if((state_val_41923 === (7))){
var inst_41817 = (state_41922[(7)]);
var inst_41827 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41828 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41829 = cljs.core.List.EMPTY;
var inst_41830 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41831 = cljs.core.cons.call(null,inst_41830,inst_41817);
var inst_41832 = cljs.core._conj.call(null,inst_41829,inst_41831);
var inst_41833 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41834 = cljs.core._conj.call(null,inst_41832,inst_41833);
var inst_41835 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41828,inst_41834,null];
var inst_41836 = cljs.core.PersistentHashMap.fromArrays(inst_41827,inst_41835);
var inst_41837 = cljs.test.do_report.call(null,inst_41836);
var state_41922__$1 = state_41922;
var statearr_41924_42128 = state_41922__$1;
(statearr_41924_42128[(2)] = inst_41837);

(statearr_41924_42128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (20))){
var inst_41895 = (state_41922[(8)]);
var inst_41898 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41899 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_41900 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_41895);
var inst_41901 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41899,inst_41900,null];
var inst_41902 = cljs.core.PersistentHashMap.fromArrays(inst_41898,inst_41901);
var inst_41903 = cljs.test.do_report.call(null,inst_41902);
var state_41922__$1 = state_41922;
var statearr_41925_42129 = state_41922__$1;
(statearr_41925_42129[(2)] = inst_41903);

(statearr_41925_42129[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (1))){
var inst_41802 = cljs.core.async.chan.call(null,(1));
var state_41922__$1 = (function (){var statearr_41926 = state_41922;
(statearr_41926[(9)] = inst_41802);

return statearr_41926;
})();
var statearr_41927_42130 = state_41922__$1;
(statearr_41927_42130[(2)] = null);

(statearr_41927_42130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41922,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41812 = cljs.core.List.EMPTY;
var inst_41813 = cljs.core._conj.call(null,inst_41812,"~/.TDD-this-file-in-dot-drop-dot");
var inst_41814 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_41922__$1 = (function (){var statearr_41928 = state_41922;
(statearr_41928[(10)] = inst_41813);

return statearr_41928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41922__$1,(5),inst_41814);
} else {
if((state_val_41923 === (15))){
var inst_41857 = (state_41922[(11)]);
var inst_41878 = (state_41922[(2)]);
var state_41922__$1 = (function (){var statearr_41929 = state_41922;
(statearr_41929[(12)] = inst_41878);

return statearr_41929;
})();
var statearr_41930_42131 = state_41922__$1;
(statearr_41930_42131[(2)] = inst_41857);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (21))){
var inst_41895 = (state_41922[(8)]);
var inst_41905 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41906 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_41907 = cljs.core.List.EMPTY;
var inst_41908 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_41909 = cljs.core.cons.call(null,inst_41908,inst_41895);
var inst_41910 = cljs.core._conj.call(null,inst_41907,inst_41909);
var inst_41911 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41912 = cljs.core._conj.call(null,inst_41910,inst_41911);
var inst_41913 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41906,inst_41912,null];
var inst_41914 = cljs.core.PersistentHashMap.fromArrays(inst_41905,inst_41913);
var inst_41915 = cljs.test.do_report.call(null,inst_41914);
var state_41922__$1 = state_41922;
var statearr_41931_42132 = state_41922__$1;
(statearr_41931_42132[(2)] = inst_41915);

(statearr_41931_42132[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (13))){
var inst_41856 = (state_41922[(13)]);
var inst_41859 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41860 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_41861 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_41856);
var inst_41862 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41860,inst_41861,null];
var inst_41863 = cljs.core.PersistentHashMap.fromArrays(inst_41859,inst_41862);
var inst_41864 = cljs.test.do_report.call(null,inst_41863);
var state_41922__$1 = state_41922;
var statearr_41932_42133 = state_41922__$1;
(statearr_41932_42133[(2)] = inst_41864);

(statearr_41932_42133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (22))){
var inst_41896 = (state_41922[(14)]);
var inst_41917 = (state_41922[(2)]);
var state_41922__$1 = (function (){var statearr_41933 = state_41922;
(statearr_41933[(15)] = inst_41917);

return statearr_41933;
})();
var statearr_41934_42134 = state_41922__$1;
(statearr_41934_42134[(2)] = inst_41896);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (6))){
var inst_41817 = (state_41922[(7)]);
var inst_41820 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41821 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41822 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41817);
var inst_41823 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41821,inst_41822,null];
var inst_41824 = cljs.core.PersistentHashMap.fromArrays(inst_41820,inst_41823);
var inst_41825 = cljs.test.do_report.call(null,inst_41824);
var state_41922__$1 = state_41922;
var statearr_41935_42135 = state_41922__$1;
(statearr_41935_42135[(2)] = inst_41825);

(statearr_41935_42135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (17))){
var inst_41881 = (state_41922[(2)]);
var inst_41882 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41883 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_41884 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41883,inst_41881,null];
var inst_41885 = cljs.core.PersistentHashMap.fromArrays(inst_41882,inst_41884);
var inst_41886 = cljs.test.do_report.call(null,inst_41885);
var state_41922__$1 = state_41922;
var statearr_41936_42136 = state_41922__$1;
(statearr_41936_42136[(2)] = inst_41886);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (3))){
var inst_41803 = (state_41922[(2)]);
var inst_41804 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41805 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41806 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41805,inst_41803,null];
var inst_41807 = cljs.core.PersistentHashMap.fromArrays(inst_41804,inst_41806);
var inst_41808 = cljs.test.do_report.call(null,inst_41807);
var state_41922__$1 = state_41922;
var statearr_41937_42137 = state_41922__$1;
(statearr_41937_42137[(2)] = inst_41808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (12))){
var inst_41856 = (state_41922[(13)]);
var inst_41857 = (state_41922[(11)]);
var inst_41852 = (state_41922[(16)]);
var inst_41855 = (state_41922[(2)]);
var inst_41856__$1 = cljs.core._conj.call(null,inst_41852,inst_41855);
var inst_41857__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_41856__$1);
var state_41922__$1 = (function (){var statearr_41938 = state_41922;
(statearr_41938[(13)] = inst_41856__$1);

(statearr_41938[(11)] = inst_41857__$1);

return statearr_41938;
})();
if(cljs.core.truth_(inst_41857__$1)){
var statearr_41939_42138 = state_41922__$1;
(statearr_41939_42138[(1)] = (13));

} else {
var statearr_41940_42139 = state_41922__$1;
(statearr_41940_42139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (2))){
var inst_41841 = (state_41922[(2)]);
var state_41922__$1 = (function (){var statearr_41941 = state_41922;
(statearr_41941[(17)] = inst_41841);

return statearr_41941;
})();
var statearr_41942_42140 = state_41922__$1;
(statearr_41942_42140[(2)] = null);

(statearr_41942_42140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (19))){
var inst_41891 = (state_41922[(18)]);
var inst_41895 = (state_41922[(8)]);
var inst_41896 = (state_41922[(14)]);
var inst_41894 = (state_41922[(2)]);
var inst_41895__$1 = cljs.core._conj.call(null,inst_41891,inst_41894);
var inst_41896__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_41895__$1);
var state_41922__$1 = (function (){var statearr_41943 = state_41922;
(statearr_41943[(8)] = inst_41895__$1);

(statearr_41943[(14)] = inst_41896__$1);

return statearr_41943;
})();
if(cljs.core.truth_(inst_41896__$1)){
var statearr_41944_42141 = state_41922__$1;
(statearr_41944_42141[(1)] = (20));

} else {
var statearr_41945_42142 = state_41922__$1;
(statearr_41945_42142[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41922,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41851 = cljs.core.List.EMPTY;
var inst_41852 = cljs.core._conj.call(null,inst_41851,"ERROR: ");
var inst_41853 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_41922__$1 = (function (){var statearr_41946 = state_41922;
(statearr_41946[(16)] = inst_41852);

return statearr_41946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41922__$1,(12),inst_41853);
} else {
if((state_val_41923 === (9))){
var inst_41880 = (state_41922[(2)]);
var state_41922__$1 = (function (){var statearr_41947 = state_41922;
(statearr_41947[(19)] = inst_41880);

return statearr_41947;
})();
var statearr_41948_42143 = state_41922__$1;
(statearr_41948_42143[(2)] = null);

(statearr_41948_42143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (5))){
var inst_41817 = (state_41922[(7)]);
var inst_41813 = (state_41922[(10)]);
var inst_41818 = (state_41922[(20)]);
var inst_41816 = (state_41922[(2)]);
var inst_41817__$1 = cljs.core._conj.call(null,inst_41813,inst_41816);
var inst_41818__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41817__$1);
var state_41922__$1 = (function (){var statearr_41949 = state_41922;
(statearr_41949[(7)] = inst_41817__$1);

(statearr_41949[(20)] = inst_41818__$1);

return statearr_41949;
})();
if(cljs.core.truth_(inst_41818__$1)){
var statearr_41950_42144 = state_41922__$1;
(statearr_41950_42144[(1)] = (6));

} else {
var statearr_41951_42145 = state_41922__$1;
(statearr_41951_42145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (14))){
var inst_41856 = (state_41922[(13)]);
var inst_41866 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41867 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_41868 = cljs.core.List.EMPTY;
var inst_41869 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_41870 = cljs.core.cons.call(null,inst_41869,inst_41856);
var inst_41871 = cljs.core._conj.call(null,inst_41868,inst_41870);
var inst_41872 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41873 = cljs.core._conj.call(null,inst_41871,inst_41872);
var inst_41874 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41867,inst_41873,null];
var inst_41875 = cljs.core.PersistentHashMap.fromArrays(inst_41866,inst_41874);
var inst_41876 = cljs.test.do_report.call(null,inst_41875);
var state_41922__$1 = state_41922;
var statearr_41952_42146 = state_41922__$1;
(statearr_41952_42146[(2)] = inst_41876);

(statearr_41952_42146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (16))){
var inst_41919 = (state_41922[(2)]);
var inst_41920 = done.call(null);
var state_41922__$1 = (function (){var statearr_41953 = state_41922;
(statearr_41953[(21)] = inst_41919);

return statearr_41953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41922__$1,inst_41920);
} else {
if((state_val_41923 === (10))){
var inst_41842 = (state_41922[(2)]);
var inst_41843 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41844 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_41845 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41844,inst_41842,null];
var inst_41846 = cljs.core.PersistentHashMap.fromArrays(inst_41843,inst_41845);
var inst_41847 = cljs.test.do_report.call(null,inst_41846);
var state_41922__$1 = state_41922;
var statearr_41954_42147 = state_41922__$1;
(statearr_41954_42147[(2)] = inst_41847);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41923 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41922,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_41890 = cljs.core.List.EMPTY;
var inst_41891 = cljs.core._conj.call(null,inst_41890,"ERROR: ");
var inst_41892 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_41922__$1 = (function (){var statearr_41955 = state_41922;
(statearr_41955[(18)] = inst_41891);

return statearr_41955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41922__$1,(19),inst_41892);
} else {
if((state_val_41923 === (8))){
var inst_41818 = (state_41922[(20)]);
var inst_41839 = (state_41922[(2)]);
var state_41922__$1 = (function (){var statearr_41956 = state_41922;
(statearr_41956[(22)] = inst_41839);

return statearr_41956;
})();
var statearr_41957_42148 = state_41922__$1;
(statearr_41957_42148[(2)] = inst_41818);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922__$1);

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
var statearr_41961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41961[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_41961[(1)] = (1));

return statearr_41961;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_41922){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41962){if((e41962 instanceof Object)){
var ex__9301__auto__ = e41962;
var statearr_41963_42149 = state_41922;
(statearr_41963_42149[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42150 = state_41922;
state_41922 = G__42150;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_41922){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_41922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_41964 = f__9319__auto__.call(null);
(statearr_41964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test41798.prototype.apply = (function (self__,args41801){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41801)));
});

drop_dot.core_test.t_drop_dot$core_test41798.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_42085){
var state_val_42086 = (state_42085[(1)]);
if((state_val_42086 === (7))){
var inst_41980 = (state_42085[(7)]);
var inst_41990 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41991 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41992 = cljs.core.List.EMPTY;
var inst_41993 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41994 = cljs.core.cons.call(null,inst_41993,inst_41980);
var inst_41995 = cljs.core._conj.call(null,inst_41992,inst_41994);
var inst_41996 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41997 = cljs.core._conj.call(null,inst_41995,inst_41996);
var inst_41998 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41991,inst_41997,null];
var inst_41999 = cljs.core.PersistentHashMap.fromArrays(inst_41990,inst_41998);
var inst_42000 = cljs.test.do_report.call(null,inst_41999);
var state_42085__$1 = state_42085;
var statearr_42087_42151 = state_42085__$1;
(statearr_42087_42151[(2)] = inst_42000);

(statearr_42087_42151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (20))){
var inst_42058 = (state_42085[(8)]);
var inst_42061 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42062 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42063 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_42058);
var inst_42064 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42062,inst_42063,null];
var inst_42065 = cljs.core.PersistentHashMap.fromArrays(inst_42061,inst_42064);
var inst_42066 = cljs.test.do_report.call(null,inst_42065);
var state_42085__$1 = state_42085;
var statearr_42088_42152 = state_42085__$1;
(statearr_42088_42152[(2)] = inst_42066);

(statearr_42088_42152[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (1))){
var inst_41965 = cljs.core.async.chan.call(null,(1));
var state_42085__$1 = (function (){var statearr_42089 = state_42085;
(statearr_42089[(9)] = inst_41965);

return statearr_42089;
})();
var statearr_42090_42153 = state_42085__$1;
(statearr_42090_42153[(2)] = null);

(statearr_42090_42153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42085,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41975 = cljs.core.List.EMPTY;
var inst_41976 = cljs.core._conj.call(null,inst_41975,"~/.TDD-this-file-in-dot-drop-dot");
var inst_41977 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_42085__$1 = (function (){var statearr_42091 = state_42085;
(statearr_42091[(10)] = inst_41976);

return statearr_42091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42085__$1,(5),inst_41977);
} else {
if((state_val_42086 === (15))){
var inst_42020 = (state_42085[(11)]);
var inst_42041 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42092 = state_42085;
(statearr_42092[(12)] = inst_42041);

return statearr_42092;
})();
var statearr_42093_42154 = state_42085__$1;
(statearr_42093_42154[(2)] = inst_42020);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (21))){
var inst_42058 = (state_42085[(8)]);
var inst_42068 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42069 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42070 = cljs.core.List.EMPTY;
var inst_42071 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_42072 = cljs.core.cons.call(null,inst_42071,inst_42058);
var inst_42073 = cljs.core._conj.call(null,inst_42070,inst_42072);
var inst_42074 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42075 = cljs.core._conj.call(null,inst_42073,inst_42074);
var inst_42076 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42069,inst_42075,null];
var inst_42077 = cljs.core.PersistentHashMap.fromArrays(inst_42068,inst_42076);
var inst_42078 = cljs.test.do_report.call(null,inst_42077);
var state_42085__$1 = state_42085;
var statearr_42094_42155 = state_42085__$1;
(statearr_42094_42155[(2)] = inst_42078);

(statearr_42094_42155[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (13))){
var inst_42019 = (state_42085[(13)]);
var inst_42022 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42023 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_42024 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_42019);
var inst_42025 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42023,inst_42024,null];
var inst_42026 = cljs.core.PersistentHashMap.fromArrays(inst_42022,inst_42025);
var inst_42027 = cljs.test.do_report.call(null,inst_42026);
var state_42085__$1 = state_42085;
var statearr_42095_42156 = state_42085__$1;
(statearr_42095_42156[(2)] = inst_42027);

(statearr_42095_42156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (22))){
var inst_42059 = (state_42085[(14)]);
var inst_42080 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42096 = state_42085;
(statearr_42096[(15)] = inst_42080);

return statearr_42096;
})();
var statearr_42097_42157 = state_42085__$1;
(statearr_42097_42157[(2)] = inst_42059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (6))){
var inst_41980 = (state_42085[(7)]);
var inst_41983 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41984 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41985 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41980);
var inst_41986 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41984,inst_41985,null];
var inst_41987 = cljs.core.PersistentHashMap.fromArrays(inst_41983,inst_41986);
var inst_41988 = cljs.test.do_report.call(null,inst_41987);
var state_42085__$1 = state_42085;
var statearr_42098_42158 = state_42085__$1;
(statearr_42098_42158[(2)] = inst_41988);

(statearr_42098_42158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (17))){
var inst_42044 = (state_42085[(2)]);
var inst_42045 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42046 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_42047 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42046,inst_42044,null];
var inst_42048 = cljs.core.PersistentHashMap.fromArrays(inst_42045,inst_42047);
var inst_42049 = cljs.test.do_report.call(null,inst_42048);
var state_42085__$1 = state_42085;
var statearr_42099_42159 = state_42085__$1;
(statearr_42099_42159[(2)] = inst_42049);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (3))){
var inst_41966 = (state_42085[(2)]);
var inst_41967 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41968 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_41969 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41968,inst_41966,null];
var inst_41970 = cljs.core.PersistentHashMap.fromArrays(inst_41967,inst_41969);
var inst_41971 = cljs.test.do_report.call(null,inst_41970);
var state_42085__$1 = state_42085;
var statearr_42100_42160 = state_42085__$1;
(statearr_42100_42160[(2)] = inst_41971);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (12))){
var inst_42019 = (state_42085[(13)]);
var inst_42020 = (state_42085[(11)]);
var inst_42015 = (state_42085[(16)]);
var inst_42018 = (state_42085[(2)]);
var inst_42019__$1 = cljs.core._conj.call(null,inst_42015,inst_42018);
var inst_42020__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_42019__$1);
var state_42085__$1 = (function (){var statearr_42101 = state_42085;
(statearr_42101[(13)] = inst_42019__$1);

(statearr_42101[(11)] = inst_42020__$1);

return statearr_42101;
})();
if(cljs.core.truth_(inst_42020__$1)){
var statearr_42102_42161 = state_42085__$1;
(statearr_42102_42161[(1)] = (13));

} else {
var statearr_42103_42162 = state_42085__$1;
(statearr_42103_42162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (2))){
var inst_42004 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42104 = state_42085;
(statearr_42104[(17)] = inst_42004);

return statearr_42104;
})();
var statearr_42105_42163 = state_42085__$1;
(statearr_42105_42163[(2)] = null);

(statearr_42105_42163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (19))){
var inst_42058 = (state_42085[(8)]);
var inst_42054 = (state_42085[(18)]);
var inst_42059 = (state_42085[(14)]);
var inst_42057 = (state_42085[(2)]);
var inst_42058__$1 = cljs.core._conj.call(null,inst_42054,inst_42057);
var inst_42059__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_42058__$1);
var state_42085__$1 = (function (){var statearr_42106 = state_42085;
(statearr_42106[(8)] = inst_42058__$1);

(statearr_42106[(14)] = inst_42059__$1);

return statearr_42106;
})();
if(cljs.core.truth_(inst_42059__$1)){
var statearr_42107_42164 = state_42085__$1;
(statearr_42107_42164[(1)] = (20));

} else {
var statearr_42108_42165 = state_42085__$1;
(statearr_42108_42165[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42085,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_42014 = cljs.core.List.EMPTY;
var inst_42015 = cljs.core._conj.call(null,inst_42014,"ERROR: ");
var inst_42016 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_42085__$1 = (function (){var statearr_42109 = state_42085;
(statearr_42109[(16)] = inst_42015);

return statearr_42109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42085__$1,(12),inst_42016);
} else {
if((state_val_42086 === (9))){
var inst_42043 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42110 = state_42085;
(statearr_42110[(19)] = inst_42043);

return statearr_42110;
})();
var statearr_42111_42166 = state_42085__$1;
(statearr_42111_42166[(2)] = null);

(statearr_42111_42166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (5))){
var inst_41980 = (state_42085[(7)]);
var inst_41981 = (state_42085[(20)]);
var inst_41976 = (state_42085[(10)]);
var inst_41979 = (state_42085[(2)]);
var inst_41980__$1 = cljs.core._conj.call(null,inst_41976,inst_41979);
var inst_41981__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41980__$1);
var state_42085__$1 = (function (){var statearr_42112 = state_42085;
(statearr_42112[(7)] = inst_41980__$1);

(statearr_42112[(20)] = inst_41981__$1);

return statearr_42112;
})();
if(cljs.core.truth_(inst_41981__$1)){
var statearr_42113_42167 = state_42085__$1;
(statearr_42113_42167[(1)] = (6));

} else {
var statearr_42114_42168 = state_42085__$1;
(statearr_42114_42168[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (14))){
var inst_42019 = (state_42085[(13)]);
var inst_42029 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42030 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_42031 = cljs.core.List.EMPTY;
var inst_42032 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_42033 = cljs.core.cons.call(null,inst_42032,inst_42019);
var inst_42034 = cljs.core._conj.call(null,inst_42031,inst_42033);
var inst_42035 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42036 = cljs.core._conj.call(null,inst_42034,inst_42035);
var inst_42037 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42030,inst_42036,null];
var inst_42038 = cljs.core.PersistentHashMap.fromArrays(inst_42029,inst_42037);
var inst_42039 = cljs.test.do_report.call(null,inst_42038);
var state_42085__$1 = state_42085;
var statearr_42115_42169 = state_42085__$1;
(statearr_42115_42169[(2)] = inst_42039);

(statearr_42115_42169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (16))){
var inst_42082 = (state_42085[(2)]);
var inst_42083 = done.call(null);
var state_42085__$1 = (function (){var statearr_42116 = state_42085;
(statearr_42116[(21)] = inst_42082);

return statearr_42116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42085__$1,inst_42083);
} else {
if((state_val_42086 === (10))){
var inst_42005 = (state_42085[(2)]);
var inst_42006 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42007 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_42008 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42007,inst_42005,null];
var inst_42009 = cljs.core.PersistentHashMap.fromArrays(inst_42006,inst_42008);
var inst_42010 = cljs.test.do_report.call(null,inst_42009);
var state_42085__$1 = state_42085;
var statearr_42117_42170 = state_42085__$1;
(statearr_42117_42170[(2)] = inst_42010);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42086 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42085,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42053 = cljs.core.List.EMPTY;
var inst_42054 = cljs.core._conj.call(null,inst_42053,"ERROR: ");
var inst_42055 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_42085__$1 = (function (){var statearr_42118 = state_42085;
(statearr_42118[(18)] = inst_42054);

return statearr_42118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42085__$1,(19),inst_42055);
} else {
if((state_val_42086 === (8))){
var inst_41981 = (state_42085[(20)]);
var inst_42002 = (state_42085[(2)]);
var state_42085__$1 = (function (){var statearr_42119 = state_42085;
(statearr_42119[(22)] = inst_42002);

return statearr_42119;
})();
var statearr_42120_42171 = state_42085__$1;
(statearr_42120_42171[(2)] = inst_41981);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085__$1);

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
var statearr_42124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42124[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42124[(1)] = (1));

return statearr_42124;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42085){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42125){if((e42125 instanceof Object)){
var ex__9301__auto__ = e42125;
var statearr_42126_42172 = state_42085;
(statearr_42126_42172[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42173 = state_42085;
state_42085 = G__42173;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42085){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42127 = f__9319__auto__.call(null);
(statearr_42127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test41798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41799","meta41799",-829935969,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test41798.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test41798.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test41798";

drop_dot.core_test.t_drop_dot$core_test41798.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test41798");
});

drop_dot.core_test.__GT_t_drop_dot$core_test41798 = (function drop_dot$core_test$__GT_t_drop_dot$core_test41798(meta41799){
return (new drop_dot.core_test.t_drop_dot$core_test41798(meta41799));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test41798(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test42174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test42174 = (function (meta42175){
this.meta42175 = meta42175;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test42174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42176,meta42175__$1){
var self__ = this;
var _42176__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test42174(meta42175__$1));
});

drop_dot.core_test.t_drop_dot$core_test42174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42176){
var self__ = this;
var _42176__$1 = this;
return self__.meta42175;
});

drop_dot.core_test.t_drop_dot$core_test42174.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test42174.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_42224){
var state_val_42225 = (state_42224[(1)]);
if((state_val_42225 === (1))){
var state_42224__$1 = state_42224;
var statearr_42226_42324 = state_42224__$1;
(statearr_42226_42324[(2)] = null);

(statearr_42226_42324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42225 === (2))){
var inst_42221 = (state_42224[(2)]);
var inst_42222 = done.call(null);
var state_42224__$1 = (function (){var statearr_42227 = state_42224;
(statearr_42227[(7)] = inst_42221);

return statearr_42227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42224__$1,inst_42222);
} else {
if((state_val_42225 === (3))){
var inst_42178 = (state_42224[(2)]);
var inst_42179 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42180 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42181 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42180,inst_42178,null];
var inst_42182 = cljs.core.PersistentHashMap.fromArrays(inst_42179,inst_42181);
var inst_42183 = cljs.test.do_report.call(null,inst_42182);
var state_42224__$1 = state_42224;
var statearr_42228_42325 = state_42224__$1;
(statearr_42228_42325[(2)] = inst_42183);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42225 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42224,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42187 = cljs.core.List.EMPTY;
var inst_42188 = cljs.core._conj.call(null,inst_42187,"val1");
var inst_42192 = cljs.core.async.chan.call(null,(1));
var inst_42193 = (function (){var c__9318__auto____$1 = inst_42192;
return ((function (c__9318__auto____$1,_,inst_42187,inst_42188,inst_42192,state_val_42225,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_42187,inst_42188,inst_42192,state_val_42225,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_42190){
var state_val_42191 = (state_42190[(1)]);
if((state_val_42191 === (1))){
var state_42190__$1 = state_42190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42190__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_42187,inst_42188,inst_42192,state_val_42225,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_42187,inst_42188,inst_42192,state_val_42225,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_42232 = [null,null,null,null,null,null,null];
(statearr_42232[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42232[(1)] = (1));

return statearr_42232;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42190){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42233){if((e42233 instanceof Object)){
var ex__9301__auto__ = e42233;
var statearr_42234_42326 = state_42190;
(statearr_42234_42326[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42327 = state_42190;
state_42190 = G__42327;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42190){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_42187,inst_42188,inst_42192,state_val_42225,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_42235 = f__9319__auto__.call(null);
(statearr_42235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_42235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_42187,inst_42188,inst_42192,state_val_42225,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_42194 = cljs.core.async.impl.dispatch.run.call(null,inst_42193);
var state_42224__$1 = (function (){var statearr_42236 = state_42224;
(statearr_42236[(8)] = inst_42188);

(statearr_42236[(9)] = inst_42194);

return statearr_42236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42224__$1,(5),inst_42192);
} else {
if((state_val_42225 === (5))){
var inst_42188 = (state_42224[(8)]);
var inst_42198 = (state_42224[(10)]);
var inst_42197 = (state_42224[(11)]);
var inst_42196 = (state_42224[(2)]);
var inst_42197__$1 = cljs.core._conj.call(null,inst_42188,inst_42196);
var inst_42198__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42197__$1);
var state_42224__$1 = (function (){var statearr_42237 = state_42224;
(statearr_42237[(10)] = inst_42198__$1);

(statearr_42237[(11)] = inst_42197__$1);

return statearr_42237;
})();
if(cljs.core.truth_(inst_42198__$1)){
var statearr_42238_42328 = state_42224__$1;
(statearr_42238_42328[(1)] = (6));

} else {
var statearr_42239_42329 = state_42224__$1;
(statearr_42239_42329[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42225 === (6))){
var inst_42197 = (state_42224[(11)]);
var inst_42200 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42201 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42202 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42197);
var inst_42203 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42201,inst_42202,null];
var inst_42204 = cljs.core.PersistentHashMap.fromArrays(inst_42200,inst_42203);
var inst_42205 = cljs.test.do_report.call(null,inst_42204);
var state_42224__$1 = state_42224;
var statearr_42240_42330 = state_42224__$1;
(statearr_42240_42330[(2)] = inst_42205);

(statearr_42240_42330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42225 === (7))){
var inst_42197 = (state_42224[(11)]);
var inst_42207 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42208 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42209 = cljs.core.List.EMPTY;
var inst_42210 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42211 = cljs.core.cons.call(null,inst_42210,inst_42197);
var inst_42212 = cljs.core._conj.call(null,inst_42209,inst_42211);
var inst_42213 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42214 = cljs.core._conj.call(null,inst_42212,inst_42213);
var inst_42215 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42208,inst_42214,null];
var inst_42216 = cljs.core.PersistentHashMap.fromArrays(inst_42207,inst_42215);
var inst_42217 = cljs.test.do_report.call(null,inst_42216);
var state_42224__$1 = state_42224;
var statearr_42241_42331 = state_42224__$1;
(statearr_42241_42331[(2)] = inst_42217);

(statearr_42241_42331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42225 === (8))){
var inst_42198 = (state_42224[(10)]);
var inst_42219 = (state_42224[(2)]);
var state_42224__$1 = (function (){var statearr_42242 = state_42224;
(statearr_42242[(12)] = inst_42219);

return statearr_42242;
})();
var statearr_42243_42332 = state_42224__$1;
(statearr_42243_42332[(2)] = inst_42198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42224__$1);

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
var statearr_42247 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42247[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42247[(1)] = (1));

return statearr_42247;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42224){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42248){if((e42248 instanceof Object)){
var ex__9301__auto__ = e42248;
var statearr_42249_42333 = state_42224;
(statearr_42249_42333[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42334 = state_42224;
state_42224 = G__42334;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42224){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_42250 = f__9319__auto__.call(null);
(statearr_42250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42174.prototype.apply = (function (self__,args42177){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42177)));
});

drop_dot.core_test.t_drop_dot$core_test42174.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_42297){
var state_val_42298 = (state_42297[(1)]);
if((state_val_42298 === (1))){
var state_42297__$1 = state_42297;
var statearr_42299_42335 = state_42297__$1;
(statearr_42299_42335[(2)] = null);

(statearr_42299_42335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42298 === (2))){
var inst_42294 = (state_42297[(2)]);
var inst_42295 = done.call(null);
var state_42297__$1 = (function (){var statearr_42300 = state_42297;
(statearr_42300[(7)] = inst_42294);

return statearr_42300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42297__$1,inst_42295);
} else {
if((state_val_42298 === (3))){
var inst_42251 = (state_42297[(2)]);
var inst_42252 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42253 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42254 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42253,inst_42251,null];
var inst_42255 = cljs.core.PersistentHashMap.fromArrays(inst_42252,inst_42254);
var inst_42256 = cljs.test.do_report.call(null,inst_42255);
var state_42297__$1 = state_42297;
var statearr_42301_42336 = state_42297__$1;
(statearr_42301_42336[(2)] = inst_42256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42298 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42297,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42260 = cljs.core.List.EMPTY;
var inst_42261 = cljs.core._conj.call(null,inst_42260,"val1");
var inst_42265 = cljs.core.async.chan.call(null,(1));
var inst_42266 = (function (){var c__9318__auto____$1 = inst_42265;
return ((function (c__9318__auto____$1,_,inst_42260,inst_42261,inst_42265,state_val_42298,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_42260,inst_42261,inst_42265,state_val_42298,c__9318__auto__,___10407__auto__){
return (function (state_42263){
var state_val_42264 = (state_42263[(1)]);
if((state_val_42264 === (1))){
var state_42263__$1 = state_42263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42263__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_42260,inst_42261,inst_42265,state_val_42298,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_42260,inst_42261,inst_42265,state_val_42298,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_42305 = [null,null,null,null,null,null,null];
(statearr_42305[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42305[(1)] = (1));

return statearr_42305;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42263){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42306){if((e42306 instanceof Object)){
var ex__9301__auto__ = e42306;
var statearr_42307_42337 = state_42263;
(statearr_42307_42337[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42338 = state_42263;
state_42263 = G__42338;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42263){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_42260,inst_42261,inst_42265,state_val_42298,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42308 = f__9319__auto__.call(null);
(statearr_42308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_42308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_42260,inst_42261,inst_42265,state_val_42298,c__9318__auto__,___10407__auto__))
})();
var inst_42267 = cljs.core.async.impl.dispatch.run.call(null,inst_42266);
var state_42297__$1 = (function (){var statearr_42309 = state_42297;
(statearr_42309[(8)] = inst_42261);

(statearr_42309[(9)] = inst_42267);

return statearr_42309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42297__$1,(5),inst_42265);
} else {
if((state_val_42298 === (5))){
var inst_42261 = (state_42297[(8)]);
var inst_42271 = (state_42297[(10)]);
var inst_42270 = (state_42297[(11)]);
var inst_42269 = (state_42297[(2)]);
var inst_42270__$1 = cljs.core._conj.call(null,inst_42261,inst_42269);
var inst_42271__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42270__$1);
var state_42297__$1 = (function (){var statearr_42310 = state_42297;
(statearr_42310[(10)] = inst_42271__$1);

(statearr_42310[(11)] = inst_42270__$1);

return statearr_42310;
})();
if(cljs.core.truth_(inst_42271__$1)){
var statearr_42311_42339 = state_42297__$1;
(statearr_42311_42339[(1)] = (6));

} else {
var statearr_42312_42340 = state_42297__$1;
(statearr_42312_42340[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42298 === (6))){
var inst_42270 = (state_42297[(11)]);
var inst_42273 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42274 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42275 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42270);
var inst_42276 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42274,inst_42275,null];
var inst_42277 = cljs.core.PersistentHashMap.fromArrays(inst_42273,inst_42276);
var inst_42278 = cljs.test.do_report.call(null,inst_42277);
var state_42297__$1 = state_42297;
var statearr_42313_42341 = state_42297__$1;
(statearr_42313_42341[(2)] = inst_42278);

(statearr_42313_42341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42298 === (7))){
var inst_42270 = (state_42297[(11)]);
var inst_42280 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42281 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_42282 = cljs.core.List.EMPTY;
var inst_42283 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42284 = cljs.core.cons.call(null,inst_42283,inst_42270);
var inst_42285 = cljs.core._conj.call(null,inst_42282,inst_42284);
var inst_42286 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42287 = cljs.core._conj.call(null,inst_42285,inst_42286);
var inst_42288 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42281,inst_42287,null];
var inst_42289 = cljs.core.PersistentHashMap.fromArrays(inst_42280,inst_42288);
var inst_42290 = cljs.test.do_report.call(null,inst_42289);
var state_42297__$1 = state_42297;
var statearr_42314_42342 = state_42297__$1;
(statearr_42314_42342[(2)] = inst_42290);

(statearr_42314_42342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42298 === (8))){
var inst_42271 = (state_42297[(10)]);
var inst_42292 = (state_42297[(2)]);
var state_42297__$1 = (function (){var statearr_42315 = state_42297;
(statearr_42315[(12)] = inst_42292);

return statearr_42315;
})();
var statearr_42316_42343 = state_42297__$1;
(statearr_42316_42343[(2)] = inst_42271);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42297__$1);

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
var statearr_42320 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42320[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42320[(1)] = (1));

return statearr_42320;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42297){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42321){if((e42321 instanceof Object)){
var ex__9301__auto__ = e42321;
var statearr_42322_42344 = state_42297;
(statearr_42322_42344[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42345 = state_42297;
state_42297 = G__42345;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42297){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42323 = f__9319__auto__.call(null);
(statearr_42323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42175","meta42175",1647365147,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test42174.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test42174.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test42174";

drop_dot.core_test.t_drop_dot$core_test42174.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test42174");
});

drop_dot.core_test.__GT_t_drop_dot$core_test42174 = (function drop_dot$core_test$__GT_t_drop_dot$core_test42174(meta42175){
return (new drop_dot.core_test.t_drop_dot$core_test42174(meta42175));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test42174(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test42346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test42346 = (function (meta42347){
this.meta42347 = meta42347;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test42346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42348,meta42347__$1){
var self__ = this;
var _42348__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test42346(meta42347__$1));
});

drop_dot.core_test.t_drop_dot$core_test42346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42348){
var self__ = this;
var _42348__$1 = this;
return self__.meta42347;
});

drop_dot.core_test.t_drop_dot$core_test42346.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test42346.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_42353){
var state_val_42354 = (state_42353[(1)]);
if((state_val_42354 === (1))){
var inst_42350 = cljs.core.async.chan.call(null);
var inst_42351 = done.call(null);
var state_42353__$1 = (function (){var statearr_42355 = state_42353;
(statearr_42355[(7)] = inst_42350);

return statearr_42355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42353__$1,inst_42351);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_42359 = [null,null,null,null,null,null,null,null];
(statearr_42359[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42359[(1)] = (1));

return statearr_42359;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42353){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42360){if((e42360 instanceof Object)){
var ex__9301__auto__ = e42360;
var statearr_42361_42376 = state_42353;
(statearr_42361_42376[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42377 = state_42353;
state_42353 = G__42377;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42353){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_42362 = f__9319__auto__.call(null);
(statearr_42362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42346.prototype.apply = (function (self__,args42349){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42349)));
});

drop_dot.core_test.t_drop_dot$core_test42346.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_42366){
var state_val_42367 = (state_42366[(1)]);
if((state_val_42367 === (1))){
var inst_42363 = cljs.core.async.chan.call(null);
var inst_42364 = done.call(null);
var state_42366__$1 = (function (){var statearr_42368 = state_42366;
(statearr_42368[(7)] = inst_42363);

return statearr_42368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42366__$1,inst_42364);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_42372 = [null,null,null,null,null,null,null,null];
(statearr_42372[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42372[(1)] = (1));

return statearr_42372;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42366){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42373){if((e42373 instanceof Object)){
var ex__9301__auto__ = e42373;
var statearr_42374_42378 = state_42366;
(statearr_42374_42378[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42379 = state_42366;
state_42366 = G__42379;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42366){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42375 = f__9319__auto__.call(null);
(statearr_42375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test42346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42347","meta42347",690295154,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test42346.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test42346.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test42346";

drop_dot.core_test.t_drop_dot$core_test42346.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test42346");
});

drop_dot.core_test.__GT_t_drop_dot$core_test42346 = (function drop_dot$core_test$__GT_t_drop_dot$core_test42346(meta42347){
return (new drop_dot.core_test.t_drop_dot$core_test42346(meta42347));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test42346(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test42380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test42380 = (function (meta42381){
this.meta42381 = meta42381;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test42380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42382,meta42381__$1){
var self__ = this;
var _42382__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test42380(meta42381__$1));
});

drop_dot.core_test.t_drop_dot$core_test42380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42382){
var self__ = this;
var _42382__$1 = this;
return self__.meta42381;
});

drop_dot.core_test.t_drop_dot$core_test42380.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test42380.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_42425){
var state_val_42426 = (state_42425[(1)]);
if((state_val_42426 === (1))){
var state_42425__$1 = state_42425;
var statearr_42427_42506 = state_42425__$1;
(statearr_42427_42506[(2)] = null);

(statearr_42427_42506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42426 === (2))){
var inst_42422 = (state_42425[(2)]);
var inst_42423 = done.call(null);
var state_42425__$1 = (function (){var statearr_42428 = state_42425;
(statearr_42428[(7)] = inst_42422);

return statearr_42428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42425__$1,inst_42423);
} else {
if((state_val_42426 === (3))){
var inst_42384 = (state_42425[(2)]);
var inst_42385 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42386 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42387 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42386,inst_42384,null];
var inst_42388 = cljs.core.PersistentHashMap.fromArrays(inst_42385,inst_42387);
var inst_42389 = cljs.test.do_report.call(null,inst_42388);
var state_42425__$1 = state_42425;
var statearr_42429_42507 = state_42425__$1;
(statearr_42429_42507[(2)] = inst_42389);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42425__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42426 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42425,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42393 = cljs.core.List.EMPTY;
var inst_42394 = cljs.core._conj.call(null,inst_42393,true);
var inst_42395 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_42425__$1 = (function (){var statearr_42430 = state_42425;
(statearr_42430[(8)] = inst_42394);

return statearr_42430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42425__$1,(5),inst_42395);
} else {
if((state_val_42426 === (5))){
var inst_42399 = (state_42425[(9)]);
var inst_42394 = (state_42425[(8)]);
var inst_42398 = (state_42425[(10)]);
var inst_42397 = (state_42425[(2)]);
var inst_42398__$1 = cljs.core._conj.call(null,inst_42394,inst_42397);
var inst_42399__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42398__$1);
var state_42425__$1 = (function (){var statearr_42431 = state_42425;
(statearr_42431[(9)] = inst_42399__$1);

(statearr_42431[(10)] = inst_42398__$1);

return statearr_42431;
})();
if(cljs.core.truth_(inst_42399__$1)){
var statearr_42432_42508 = state_42425__$1;
(statearr_42432_42508[(1)] = (6));

} else {
var statearr_42433_42509 = state_42425__$1;
(statearr_42433_42509[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42426 === (6))){
var inst_42398 = (state_42425[(10)]);
var inst_42401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42403 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42398);
var inst_42404 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42402,inst_42403,null];
var inst_42405 = cljs.core.PersistentHashMap.fromArrays(inst_42401,inst_42404);
var inst_42406 = cljs.test.do_report.call(null,inst_42405);
var state_42425__$1 = state_42425;
var statearr_42434_42510 = state_42425__$1;
(statearr_42434_42510[(2)] = inst_42406);

(statearr_42434_42510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42426 === (7))){
var inst_42398 = (state_42425[(10)]);
var inst_42408 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42409 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42410 = cljs.core.List.EMPTY;
var inst_42411 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42412 = cljs.core.cons.call(null,inst_42411,inst_42398);
var inst_42413 = cljs.core._conj.call(null,inst_42410,inst_42412);
var inst_42414 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42415 = cljs.core._conj.call(null,inst_42413,inst_42414);
var inst_42416 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42409,inst_42415,null];
var inst_42417 = cljs.core.PersistentHashMap.fromArrays(inst_42408,inst_42416);
var inst_42418 = cljs.test.do_report.call(null,inst_42417);
var state_42425__$1 = state_42425;
var statearr_42435_42511 = state_42425__$1;
(statearr_42435_42511[(2)] = inst_42418);

(statearr_42435_42511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42426 === (8))){
var inst_42399 = (state_42425[(9)]);
var inst_42420 = (state_42425[(2)]);
var state_42425__$1 = (function (){var statearr_42436 = state_42425;
(statearr_42436[(11)] = inst_42420);

return statearr_42436;
})();
var statearr_42437_42512 = state_42425__$1;
(statearr_42437_42512[(2)] = inst_42399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42425__$1);

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
var statearr_42441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42441[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42441[(1)] = (1));

return statearr_42441;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42425){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42442){if((e42442 instanceof Object)){
var ex__9301__auto__ = e42442;
var statearr_42443_42513 = state_42425;
(statearr_42443_42513[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42514 = state_42425;
state_42425 = G__42514;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42425){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_42444 = f__9319__auto__.call(null);
(statearr_42444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test42380.prototype.apply = (function (self__,args42383){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42383)));
});

drop_dot.core_test.t_drop_dot$core_test42380.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_42486){
var state_val_42487 = (state_42486[(1)]);
if((state_val_42487 === (1))){
var state_42486__$1 = state_42486;
var statearr_42488_42515 = state_42486__$1;
(statearr_42488_42515[(2)] = null);

(statearr_42488_42515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42487 === (2))){
var inst_42483 = (state_42486[(2)]);
var inst_42484 = done.call(null);
var state_42486__$1 = (function (){var statearr_42489 = state_42486;
(statearr_42489[(7)] = inst_42483);

return statearr_42489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42486__$1,inst_42484);
} else {
if((state_val_42487 === (3))){
var inst_42445 = (state_42486[(2)]);
var inst_42446 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42447 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42448 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42447,inst_42445,null];
var inst_42449 = cljs.core.PersistentHashMap.fromArrays(inst_42446,inst_42448);
var inst_42450 = cljs.test.do_report.call(null,inst_42449);
var state_42486__$1 = state_42486;
var statearr_42490_42516 = state_42486__$1;
(statearr_42490_42516[(2)] = inst_42450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42486__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42487 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42486,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42454 = cljs.core.List.EMPTY;
var inst_42455 = cljs.core._conj.call(null,inst_42454,true);
var inst_42456 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_42486__$1 = (function (){var statearr_42491 = state_42486;
(statearr_42491[(8)] = inst_42455);

return statearr_42491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42486__$1,(5),inst_42456);
} else {
if((state_val_42487 === (5))){
var inst_42455 = (state_42486[(8)]);
var inst_42460 = (state_42486[(9)]);
var inst_42459 = (state_42486[(10)]);
var inst_42458 = (state_42486[(2)]);
var inst_42459__$1 = cljs.core._conj.call(null,inst_42455,inst_42458);
var inst_42460__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42459__$1);
var state_42486__$1 = (function (){var statearr_42492 = state_42486;
(statearr_42492[(9)] = inst_42460__$1);

(statearr_42492[(10)] = inst_42459__$1);

return statearr_42492;
})();
if(cljs.core.truth_(inst_42460__$1)){
var statearr_42493_42517 = state_42486__$1;
(statearr_42493_42517[(1)] = (6));

} else {
var statearr_42494_42518 = state_42486__$1;
(statearr_42494_42518[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42487 === (6))){
var inst_42459 = (state_42486[(10)]);
var inst_42462 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42463 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42464 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42459);
var inst_42465 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42463,inst_42464,null];
var inst_42466 = cljs.core.PersistentHashMap.fromArrays(inst_42462,inst_42465);
var inst_42467 = cljs.test.do_report.call(null,inst_42466);
var state_42486__$1 = state_42486;
var statearr_42495_42519 = state_42486__$1;
(statearr_42495_42519[(2)] = inst_42467);

(statearr_42495_42519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42487 === (7))){
var inst_42459 = (state_42486[(10)]);
var inst_42469 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42470 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_42471 = cljs.core.List.EMPTY;
var inst_42472 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42473 = cljs.core.cons.call(null,inst_42472,inst_42459);
var inst_42474 = cljs.core._conj.call(null,inst_42471,inst_42473);
var inst_42475 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42476 = cljs.core._conj.call(null,inst_42474,inst_42475);
var inst_42477 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42470,inst_42476,null];
var inst_42478 = cljs.core.PersistentHashMap.fromArrays(inst_42469,inst_42477);
var inst_42479 = cljs.test.do_report.call(null,inst_42478);
var state_42486__$1 = state_42486;
var statearr_42496_42520 = state_42486__$1;
(statearr_42496_42520[(2)] = inst_42479);

(statearr_42496_42520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42487 === (8))){
var inst_42460 = (state_42486[(9)]);
var inst_42481 = (state_42486[(2)]);
var state_42486__$1 = (function (){var statearr_42497 = state_42486;
(statearr_42497[(11)] = inst_42481);

return statearr_42497;
})();
var statearr_42498_42521 = state_42486__$1;
(statearr_42498_42521[(2)] = inst_42460);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42486__$1);

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
var statearr_42502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42502[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_42502[(1)] = (1));

return statearr_42502;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_42486){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42503){if((e42503 instanceof Object)){
var ex__9301__auto__ = e42503;
var statearr_42504_42522 = state_42486;
(statearr_42504_42522[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42523 = state_42486;
state_42486 = G__42523;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_42486){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_42486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42505 = f__9319__auto__.call(null);
(statearr_42505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test42380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42381","meta42381",1226122768,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test42380.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test42380.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test42380";

drop_dot.core_test.t_drop_dot$core_test42380.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test42380");
});

drop_dot.core_test.__GT_t_drop_dot$core_test42380 = (function drop_dot$core_test$__GT_t_drop_dot$core_test42380(meta42381){
return (new drop_dot.core_test.t_drop_dot$core_test42380(meta42381));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test42380(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map