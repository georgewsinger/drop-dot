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
if(typeof drop_dot.core_test.t_drop_dot$core_test91477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test91477 = (function (meta91478){
this.meta91478 = meta91478;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test91477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91479,meta91478__$1){
var self__ = this;
var _91479__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test91477(meta91478__$1));
});

drop_dot.core_test.t_drop_dot$core_test91477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91479){
var self__ = this;
var _91479__$1 = this;
return self__.meta91478;
});

drop_dot.core_test.t_drop_dot$core_test91477.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test91477.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_91618){
var state_val_91619 = (state_91618[(1)]);
if((state_val_91619 === (7))){
var inst_91501 = (state_91618[(7)]);
var inst_91511 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91512 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91513 = cljs.core.List.EMPTY;
var inst_91514 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91515 = cljs.core.cons.call(null,inst_91514,inst_91501);
var inst_91516 = cljs.core._conj.call(null,inst_91513,inst_91515);
var inst_91517 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91518 = cljs.core._conj.call(null,inst_91516,inst_91517);
var inst_91519 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91512,inst_91518,null];
var inst_91520 = cljs.core.PersistentHashMap.fromArrays(inst_91511,inst_91519);
var inst_91521 = cljs.test.do_report.call(null,inst_91520);
var state_91618__$1 = state_91618;
var statearr_91620_91881 = state_91618__$1;
(statearr_91620_91881[(2)] = inst_91521);

(statearr_91620_91881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (20))){
var inst_91591 = (state_91618[(8)]);
var inst_91594 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91595 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91596 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91591);
var inst_91597 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91595,inst_91596,null];
var inst_91598 = cljs.core.PersistentHashMap.fromArrays(inst_91594,inst_91597);
var inst_91599 = cljs.test.do_report.call(null,inst_91598);
var state_91618__$1 = state_91618;
var statearr_91621_91882 = state_91618__$1;
(statearr_91621_91882[(2)] = inst_91599);

(statearr_91621_91882[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (1))){
var state_91618__$1 = state_91618;
var statearr_91622_91883 = state_91618__$1;
(statearr_91622_91883[(2)] = null);

(statearr_91622_91883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91618,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91490 = cljs.core.List.EMPTY;
var inst_91491 = cljs.core._conj.call(null,inst_91490,"ERROR:");
var inst_91495 = cljs.core.async.chan.call(null,(1));
var inst_91496 = (function (){var c__9318__auto____$1 = inst_91495;
return ((function (c__9318__auto____$1,_,inst_91490,inst_91491,inst_91495,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91490,inst_91491,inst_91495,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_91493){
var state_val_91494 = (state_91493[(1)]);
if((state_val_91494 === (1))){
var state_91493__$1 = state_91493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91493__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91490,inst_91491,inst_91495,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91490,inst_91491,inst_91495,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91626 = [null,null,null,null,null,null,null];
(statearr_91626[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91626[(1)] = (1));

return statearr_91626;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91493){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91627){if((e91627 instanceof Object)){
var ex__9301__auto__ = e91627;
var statearr_91628_91884 = state_91493;
(statearr_91628_91884[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91885 = state_91493;
state_91493 = G__91885;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91493){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91490,inst_91491,inst_91495,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91629 = f__9319__auto__.call(null);
(statearr_91629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91490,inst_91491,inst_91495,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_91497 = cljs.core.async.impl.dispatch.run.call(null,inst_91496);
var inst_91498 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91495);
var state_91618__$1 = (function (){var statearr_91630 = state_91618;
(statearr_91630[(9)] = inst_91491);

(statearr_91630[(10)] = inst_91497);

return statearr_91630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91618__$1,(5),inst_91498);
} else {
if((state_val_91619 === (15))){
var inst_91547 = (state_91618[(11)]);
var inst_91568 = (state_91618[(2)]);
var state_91618__$1 = (function (){var statearr_91631 = state_91618;
(statearr_91631[(12)] = inst_91568);

return statearr_91631;
})();
var statearr_91632_91886 = state_91618__$1;
(statearr_91632_91886[(2)] = inst_91547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (21))){
var inst_91591 = (state_91618[(8)]);
var inst_91601 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91602 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91603 = cljs.core.List.EMPTY;
var inst_91604 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91605 = cljs.core.cons.call(null,inst_91604,inst_91591);
var inst_91606 = cljs.core._conj.call(null,inst_91603,inst_91605);
var inst_91607 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91608 = cljs.core._conj.call(null,inst_91606,inst_91607);
var inst_91609 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91602,inst_91608,null];
var inst_91610 = cljs.core.PersistentHashMap.fromArrays(inst_91601,inst_91609);
var inst_91611 = cljs.test.do_report.call(null,inst_91610);
var state_91618__$1 = state_91618;
var statearr_91633_91887 = state_91618__$1;
(statearr_91633_91887[(2)] = inst_91611);

(statearr_91633_91887[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (13))){
var inst_91546 = (state_91618[(13)]);
var inst_91549 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91550 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91551 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91546);
var inst_91552 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91550,inst_91551,null];
var inst_91553 = cljs.core.PersistentHashMap.fromArrays(inst_91549,inst_91552);
var inst_91554 = cljs.test.do_report.call(null,inst_91553);
var state_91618__$1 = state_91618;
var statearr_91634_91888 = state_91618__$1;
(statearr_91634_91888[(2)] = inst_91554);

(statearr_91634_91888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (22))){
var inst_91592 = (state_91618[(14)]);
var inst_91613 = (state_91618[(2)]);
var state_91618__$1 = (function (){var statearr_91635 = state_91618;
(statearr_91635[(15)] = inst_91613);

return statearr_91635;
})();
var statearr_91636_91889 = state_91618__$1;
(statearr_91636_91889[(2)] = inst_91592);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (6))){
var inst_91501 = (state_91618[(7)]);
var inst_91504 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91505 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91506 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91501);
var inst_91507 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91505,inst_91506,null];
var inst_91508 = cljs.core.PersistentHashMap.fromArrays(inst_91504,inst_91507);
var inst_91509 = cljs.test.do_report.call(null,inst_91508);
var state_91618__$1 = state_91618;
var statearr_91637_91890 = state_91618__$1;
(statearr_91637_91890[(2)] = inst_91509);

(statearr_91637_91890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (17))){
var inst_91571 = (state_91618[(2)]);
var inst_91572 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91573 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91574 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91573,inst_91571,null];
var inst_91575 = cljs.core.PersistentHashMap.fromArrays(inst_91572,inst_91574);
var inst_91576 = cljs.test.do_report.call(null,inst_91575);
var state_91618__$1 = state_91618;
var statearr_91638_91891 = state_91618__$1;
(statearr_91638_91891[(2)] = inst_91576);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (3))){
var inst_91481 = (state_91618[(2)]);
var inst_91482 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91483 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91484 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91483,inst_91481,null];
var inst_91485 = cljs.core.PersistentHashMap.fromArrays(inst_91482,inst_91484);
var inst_91486 = cljs.test.do_report.call(null,inst_91485);
var state_91618__$1 = state_91618;
var statearr_91639_91892 = state_91618__$1;
(statearr_91639_91892[(2)] = inst_91486);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (12))){
var inst_91546 = (state_91618[(13)]);
var inst_91536 = (state_91618[(16)]);
var inst_91547 = (state_91618[(11)]);
var inst_91545 = (state_91618[(2)]);
var inst_91546__$1 = cljs.core._conj.call(null,inst_91536,inst_91545);
var inst_91547__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91546__$1);
var state_91618__$1 = (function (){var statearr_91640 = state_91618;
(statearr_91640[(13)] = inst_91546__$1);

(statearr_91640[(11)] = inst_91547__$1);

return statearr_91640;
})();
if(cljs.core.truth_(inst_91547__$1)){
var statearr_91641_91893 = state_91618__$1;
(statearr_91641_91893[(1)] = (13));

} else {
var statearr_91642_91894 = state_91618__$1;
(statearr_91642_91894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (2))){
var inst_91525 = (state_91618[(2)]);
var state_91618__$1 = (function (){var statearr_91643 = state_91618;
(statearr_91643[(17)] = inst_91525);

return statearr_91643;
})();
var statearr_91644_91895 = state_91618__$1;
(statearr_91644_91895[(2)] = null);

(statearr_91644_91895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (19))){
var inst_91591 = (state_91618[(8)]);
var inst_91592 = (state_91618[(14)]);
var inst_91581 = (state_91618[(18)]);
var inst_91590 = (state_91618[(2)]);
var inst_91591__$1 = cljs.core._conj.call(null,inst_91581,inst_91590);
var inst_91592__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91591__$1);
var state_91618__$1 = (function (){var statearr_91645 = state_91618;
(statearr_91645[(8)] = inst_91591__$1);

(statearr_91645[(14)] = inst_91592__$1);

return statearr_91645;
})();
if(cljs.core.truth_(inst_91592__$1)){
var statearr_91646_91896 = state_91618__$1;
(statearr_91646_91896[(1)] = (20));

} else {
var statearr_91647_91897 = state_91618__$1;
(statearr_91647_91897[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91618,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91535 = cljs.core.List.EMPTY;
var inst_91536 = cljs.core._conj.call(null,inst_91535,"ERROR: ");
var inst_91540 = cljs.core.async.chan.call(null,(1));
var inst_91541 = (function (){var c__9318__auto____$1 = inst_91540;
return ((function (c__9318__auto____$1,_,inst_91535,inst_91536,inst_91540,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91535,inst_91536,inst_91540,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_91538){
var state_val_91539 = (state_91538[(1)]);
if((state_val_91539 === (1))){
var state_91538__$1 = state_91538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91538__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91535,inst_91536,inst_91540,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91535,inst_91536,inst_91540,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91651 = [null,null,null,null,null,null,null];
(statearr_91651[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91651[(1)] = (1));

return statearr_91651;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91538){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91652){if((e91652 instanceof Object)){
var ex__9301__auto__ = e91652;
var statearr_91653_91898 = state_91538;
(statearr_91653_91898[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91899 = state_91538;
state_91538 = G__91899;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91538){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91535,inst_91536,inst_91540,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91654 = f__9319__auto__.call(null);
(statearr_91654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91535,inst_91536,inst_91540,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_91542 = cljs.core.async.impl.dispatch.run.call(null,inst_91541);
var inst_91543 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91540);
var state_91618__$1 = (function (){var statearr_91655 = state_91618;
(statearr_91655[(16)] = inst_91536);

(statearr_91655[(19)] = inst_91542);

return statearr_91655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91618__$1,(12),inst_91543);
} else {
if((state_val_91619 === (9))){
var inst_91570 = (state_91618[(2)]);
var state_91618__$1 = (function (){var statearr_91656 = state_91618;
(statearr_91656[(20)] = inst_91570);

return statearr_91656;
})();
var statearr_91657_91900 = state_91618__$1;
(statearr_91657_91900[(2)] = null);

(statearr_91657_91900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (5))){
var inst_91491 = (state_91618[(9)]);
var inst_91501 = (state_91618[(7)]);
var inst_91502 = (state_91618[(21)]);
var inst_91500 = (state_91618[(2)]);
var inst_91501__$1 = cljs.core._conj.call(null,inst_91491,inst_91500);
var inst_91502__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91501__$1);
var state_91618__$1 = (function (){var statearr_91658 = state_91618;
(statearr_91658[(7)] = inst_91501__$1);

(statearr_91658[(21)] = inst_91502__$1);

return statearr_91658;
})();
if(cljs.core.truth_(inst_91502__$1)){
var statearr_91659_91901 = state_91618__$1;
(statearr_91659_91901[(1)] = (6));

} else {
var statearr_91660_91902 = state_91618__$1;
(statearr_91660_91902[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (14))){
var inst_91546 = (state_91618[(13)]);
var inst_91556 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91557 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91558 = cljs.core.List.EMPTY;
var inst_91559 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91560 = cljs.core.cons.call(null,inst_91559,inst_91546);
var inst_91561 = cljs.core._conj.call(null,inst_91558,inst_91560);
var inst_91562 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91563 = cljs.core._conj.call(null,inst_91561,inst_91562);
var inst_91564 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91557,inst_91563,null];
var inst_91565 = cljs.core.PersistentHashMap.fromArrays(inst_91556,inst_91564);
var inst_91566 = cljs.test.do_report.call(null,inst_91565);
var state_91618__$1 = state_91618;
var statearr_91661_91903 = state_91618__$1;
(statearr_91661_91903[(2)] = inst_91566);

(statearr_91661_91903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (16))){
var inst_91615 = (state_91618[(2)]);
var inst_91616 = done.call(null);
var state_91618__$1 = (function (){var statearr_91662 = state_91618;
(statearr_91662[(22)] = inst_91615);

return statearr_91662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91618__$1,inst_91616);
} else {
if((state_val_91619 === (10))){
var inst_91526 = (state_91618[(2)]);
var inst_91527 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91528 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91529 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91528,inst_91526,null];
var inst_91530 = cljs.core.PersistentHashMap.fromArrays(inst_91527,inst_91529);
var inst_91531 = cljs.test.do_report.call(null,inst_91530);
var state_91618__$1 = state_91618;
var statearr_91663_91904 = state_91618__$1;
(statearr_91663_91904[(2)] = inst_91531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91619 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91618,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_91580 = cljs.core.List.EMPTY;
var inst_91581 = cljs.core._conj.call(null,inst_91580,"~/.in-drop-dot-only");
var inst_91585 = cljs.core.async.chan.call(null,(1));
var inst_91586 = (function (){var c__9318__auto____$1 = inst_91585;
return ((function (c__9318__auto____$1,_,inst_91580,inst_91581,inst_91585,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91580,inst_91581,inst_91585,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_91583){
var state_val_91584 = (state_91583[(1)]);
if((state_val_91584 === (1))){
var state_91583__$1 = state_91583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91583__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91580,inst_91581,inst_91585,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91580,inst_91581,inst_91585,state_val_91619,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91667 = [null,null,null,null,null,null,null];
(statearr_91667[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91667[(1)] = (1));

return statearr_91667;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91583){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91668){if((e91668 instanceof Object)){
var ex__9301__auto__ = e91668;
var statearr_91669_91905 = state_91583;
(statearr_91669_91905[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91906 = state_91583;
state_91583 = G__91906;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91583){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91580,inst_91581,inst_91585,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91670 = f__9319__auto__.call(null);
(statearr_91670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91580,inst_91581,inst_91585,state_val_91619,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_91587 = cljs.core.async.impl.dispatch.run.call(null,inst_91586);
var inst_91588 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91585);
var state_91618__$1 = (function (){var statearr_91671 = state_91618;
(statearr_91671[(23)] = inst_91587);

(statearr_91671[(18)] = inst_91581);

return statearr_91671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91618__$1,(19),inst_91588);
} else {
if((state_val_91619 === (8))){
var inst_91502 = (state_91618[(21)]);
var inst_91523 = (state_91618[(2)]);
var state_91618__$1 = (function (){var statearr_91672 = state_91618;
(statearr_91672[(24)] = inst_91523);

return statearr_91672;
})();
var statearr_91673_91907 = state_91618__$1;
(statearr_91673_91907[(2)] = inst_91502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618__$1);

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
var statearr_91677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91677[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91677[(1)] = (1));

return statearr_91677;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91618){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91678){if((e91678 instanceof Object)){
var ex__9301__auto__ = e91678;
var statearr_91679_91908 = state_91618;
(statearr_91679_91908[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91909 = state_91618;
state_91618 = G__91909;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91618){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91680 = f__9319__auto__.call(null);
(statearr_91680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91477.prototype.apply = (function (self__,args91480){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args91480)));
});

drop_dot.core_test.t_drop_dot$core_test91477.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_91818){
var state_val_91819 = (state_91818[(1)]);
if((state_val_91819 === (7))){
var inst_91701 = (state_91818[(7)]);
var inst_91711 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91712 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91713 = cljs.core.List.EMPTY;
var inst_91714 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91715 = cljs.core.cons.call(null,inst_91714,inst_91701);
var inst_91716 = cljs.core._conj.call(null,inst_91713,inst_91715);
var inst_91717 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91718 = cljs.core._conj.call(null,inst_91716,inst_91717);
var inst_91719 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91712,inst_91718,null];
var inst_91720 = cljs.core.PersistentHashMap.fromArrays(inst_91711,inst_91719);
var inst_91721 = cljs.test.do_report.call(null,inst_91720);
var state_91818__$1 = state_91818;
var statearr_91820_91910 = state_91818__$1;
(statearr_91820_91910[(2)] = inst_91721);

(statearr_91820_91910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (20))){
var inst_91791 = (state_91818[(8)]);
var inst_91794 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91795 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91796 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91791);
var inst_91797 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91795,inst_91796,null];
var inst_91798 = cljs.core.PersistentHashMap.fromArrays(inst_91794,inst_91797);
var inst_91799 = cljs.test.do_report.call(null,inst_91798);
var state_91818__$1 = state_91818;
var statearr_91821_91911 = state_91818__$1;
(statearr_91821_91911[(2)] = inst_91799);

(statearr_91821_91911[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (1))){
var state_91818__$1 = state_91818;
var statearr_91822_91912 = state_91818__$1;
(statearr_91822_91912[(2)] = null);

(statearr_91822_91912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91818,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91690 = cljs.core.List.EMPTY;
var inst_91691 = cljs.core._conj.call(null,inst_91690,"ERROR:");
var inst_91695 = cljs.core.async.chan.call(null,(1));
var inst_91696 = (function (){var c__9318__auto____$1 = inst_91695;
return ((function (c__9318__auto____$1,_,inst_91690,inst_91691,inst_91695,state_val_91819,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91690,inst_91691,inst_91695,state_val_91819,c__9318__auto__,___10644__auto__){
return (function (state_91693){
var state_val_91694 = (state_91693[(1)]);
if((state_val_91694 === (1))){
var state_91693__$1 = state_91693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91693__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91690,inst_91691,inst_91695,state_val_91819,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91690,inst_91691,inst_91695,state_val_91819,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91826 = [null,null,null,null,null,null,null];
(statearr_91826[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91826[(1)] = (1));

return statearr_91826;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91693){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91827){if((e91827 instanceof Object)){
var ex__9301__auto__ = e91827;
var statearr_91828_91913 = state_91693;
(statearr_91828_91913[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91914 = state_91693;
state_91693 = G__91914;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91693){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91690,inst_91691,inst_91695,state_val_91819,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91829 = f__9319__auto__.call(null);
(statearr_91829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91690,inst_91691,inst_91695,state_val_91819,c__9318__auto__,___10644__auto__))
})();
var inst_91697 = cljs.core.async.impl.dispatch.run.call(null,inst_91696);
var inst_91698 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91695);
var state_91818__$1 = (function (){var statearr_91830 = state_91818;
(statearr_91830[(9)] = inst_91697);

(statearr_91830[(10)] = inst_91691);

return statearr_91830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91818__$1,(5),inst_91698);
} else {
if((state_val_91819 === (15))){
var inst_91747 = (state_91818[(11)]);
var inst_91768 = (state_91818[(2)]);
var state_91818__$1 = (function (){var statearr_91831 = state_91818;
(statearr_91831[(12)] = inst_91768);

return statearr_91831;
})();
var statearr_91832_91915 = state_91818__$1;
(statearr_91832_91915[(2)] = inst_91747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (21))){
var inst_91791 = (state_91818[(8)]);
var inst_91801 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91802 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91803 = cljs.core.List.EMPTY;
var inst_91804 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91805 = cljs.core.cons.call(null,inst_91804,inst_91791);
var inst_91806 = cljs.core._conj.call(null,inst_91803,inst_91805);
var inst_91807 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91808 = cljs.core._conj.call(null,inst_91806,inst_91807);
var inst_91809 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91802,inst_91808,null];
var inst_91810 = cljs.core.PersistentHashMap.fromArrays(inst_91801,inst_91809);
var inst_91811 = cljs.test.do_report.call(null,inst_91810);
var state_91818__$1 = state_91818;
var statearr_91833_91916 = state_91818__$1;
(statearr_91833_91916[(2)] = inst_91811);

(statearr_91833_91916[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (13))){
var inst_91746 = (state_91818[(13)]);
var inst_91749 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91750 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91751 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91746);
var inst_91752 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91750,inst_91751,null];
var inst_91753 = cljs.core.PersistentHashMap.fromArrays(inst_91749,inst_91752);
var inst_91754 = cljs.test.do_report.call(null,inst_91753);
var state_91818__$1 = state_91818;
var statearr_91834_91917 = state_91818__$1;
(statearr_91834_91917[(2)] = inst_91754);

(statearr_91834_91917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (22))){
var inst_91792 = (state_91818[(14)]);
var inst_91813 = (state_91818[(2)]);
var state_91818__$1 = (function (){var statearr_91835 = state_91818;
(statearr_91835[(15)] = inst_91813);

return statearr_91835;
})();
var statearr_91836_91918 = state_91818__$1;
(statearr_91836_91918[(2)] = inst_91792);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (6))){
var inst_91701 = (state_91818[(7)]);
var inst_91704 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91705 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91706 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91701);
var inst_91707 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91705,inst_91706,null];
var inst_91708 = cljs.core.PersistentHashMap.fromArrays(inst_91704,inst_91707);
var inst_91709 = cljs.test.do_report.call(null,inst_91708);
var state_91818__$1 = state_91818;
var statearr_91837_91919 = state_91818__$1;
(statearr_91837_91919[(2)] = inst_91709);

(statearr_91837_91919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (17))){
var inst_91771 = (state_91818[(2)]);
var inst_91772 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91773 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91774 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91773,inst_91771,null];
var inst_91775 = cljs.core.PersistentHashMap.fromArrays(inst_91772,inst_91774);
var inst_91776 = cljs.test.do_report.call(null,inst_91775);
var state_91818__$1 = state_91818;
var statearr_91838_91920 = state_91818__$1;
(statearr_91838_91920[(2)] = inst_91776);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (3))){
var inst_91681 = (state_91818[(2)]);
var inst_91682 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91683 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91684 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91683,inst_91681,null];
var inst_91685 = cljs.core.PersistentHashMap.fromArrays(inst_91682,inst_91684);
var inst_91686 = cljs.test.do_report.call(null,inst_91685);
var state_91818__$1 = state_91818;
var statearr_91839_91921 = state_91818__$1;
(statearr_91839_91921[(2)] = inst_91686);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (12))){
var inst_91736 = (state_91818[(16)]);
var inst_91747 = (state_91818[(11)]);
var inst_91746 = (state_91818[(13)]);
var inst_91745 = (state_91818[(2)]);
var inst_91746__$1 = cljs.core._conj.call(null,inst_91736,inst_91745);
var inst_91747__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91746__$1);
var state_91818__$1 = (function (){var statearr_91840 = state_91818;
(statearr_91840[(11)] = inst_91747__$1);

(statearr_91840[(13)] = inst_91746__$1);

return statearr_91840;
})();
if(cljs.core.truth_(inst_91747__$1)){
var statearr_91841_91922 = state_91818__$1;
(statearr_91841_91922[(1)] = (13));

} else {
var statearr_91842_91923 = state_91818__$1;
(statearr_91842_91923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (2))){
var inst_91725 = (state_91818[(2)]);
var state_91818__$1 = (function (){var statearr_91843 = state_91818;
(statearr_91843[(17)] = inst_91725);

return statearr_91843;
})();
var statearr_91844_91924 = state_91818__$1;
(statearr_91844_91924[(2)] = null);

(statearr_91844_91924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (19))){
var inst_91781 = (state_91818[(18)]);
var inst_91791 = (state_91818[(8)]);
var inst_91792 = (state_91818[(14)]);
var inst_91790 = (state_91818[(2)]);
var inst_91791__$1 = cljs.core._conj.call(null,inst_91781,inst_91790);
var inst_91792__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91791__$1);
var state_91818__$1 = (function (){var statearr_91845 = state_91818;
(statearr_91845[(8)] = inst_91791__$1);

(statearr_91845[(14)] = inst_91792__$1);

return statearr_91845;
})();
if(cljs.core.truth_(inst_91792__$1)){
var statearr_91846_91925 = state_91818__$1;
(statearr_91846_91925[(1)] = (20));

} else {
var statearr_91847_91926 = state_91818__$1;
(statearr_91847_91926[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91818,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91735 = cljs.core.List.EMPTY;
var inst_91736 = cljs.core._conj.call(null,inst_91735,"ERROR: ");
var inst_91740 = cljs.core.async.chan.call(null,(1));
var inst_91741 = (function (){var c__9318__auto____$1 = inst_91740;
return ((function (c__9318__auto____$1,_,inst_91735,inst_91736,inst_91740,state_val_91819,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91735,inst_91736,inst_91740,state_val_91819,c__9318__auto__,___10644__auto__){
return (function (state_91738){
var state_val_91739 = (state_91738[(1)]);
if((state_val_91739 === (1))){
var state_91738__$1 = state_91738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91738__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91735,inst_91736,inst_91740,state_val_91819,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91735,inst_91736,inst_91740,state_val_91819,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91851 = [null,null,null,null,null,null,null];
(statearr_91851[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91851[(1)] = (1));

return statearr_91851;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91738){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91852){if((e91852 instanceof Object)){
var ex__9301__auto__ = e91852;
var statearr_91853_91927 = state_91738;
(statearr_91853_91927[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91928 = state_91738;
state_91738 = G__91928;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91738){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91735,inst_91736,inst_91740,state_val_91819,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91854 = f__9319__auto__.call(null);
(statearr_91854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91735,inst_91736,inst_91740,state_val_91819,c__9318__auto__,___10644__auto__))
})();
var inst_91742 = cljs.core.async.impl.dispatch.run.call(null,inst_91741);
var inst_91743 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91740);
var state_91818__$1 = (function (){var statearr_91855 = state_91818;
(statearr_91855[(16)] = inst_91736);

(statearr_91855[(19)] = inst_91742);

return statearr_91855;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91818__$1,(12),inst_91743);
} else {
if((state_val_91819 === (9))){
var inst_91770 = (state_91818[(2)]);
var state_91818__$1 = (function (){var statearr_91856 = state_91818;
(statearr_91856[(20)] = inst_91770);

return statearr_91856;
})();
var statearr_91857_91929 = state_91818__$1;
(statearr_91857_91929[(2)] = null);

(statearr_91857_91929[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (5))){
var inst_91702 = (state_91818[(21)]);
var inst_91701 = (state_91818[(7)]);
var inst_91691 = (state_91818[(10)]);
var inst_91700 = (state_91818[(2)]);
var inst_91701__$1 = cljs.core._conj.call(null,inst_91691,inst_91700);
var inst_91702__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91701__$1);
var state_91818__$1 = (function (){var statearr_91858 = state_91818;
(statearr_91858[(21)] = inst_91702__$1);

(statearr_91858[(7)] = inst_91701__$1);

return statearr_91858;
})();
if(cljs.core.truth_(inst_91702__$1)){
var statearr_91859_91930 = state_91818__$1;
(statearr_91859_91930[(1)] = (6));

} else {
var statearr_91860_91931 = state_91818__$1;
(statearr_91860_91931[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (14))){
var inst_91746 = (state_91818[(13)]);
var inst_91756 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91757 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91758 = cljs.core.List.EMPTY;
var inst_91759 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91760 = cljs.core.cons.call(null,inst_91759,inst_91746);
var inst_91761 = cljs.core._conj.call(null,inst_91758,inst_91760);
var inst_91762 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91763 = cljs.core._conj.call(null,inst_91761,inst_91762);
var inst_91764 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91757,inst_91763,null];
var inst_91765 = cljs.core.PersistentHashMap.fromArrays(inst_91756,inst_91764);
var inst_91766 = cljs.test.do_report.call(null,inst_91765);
var state_91818__$1 = state_91818;
var statearr_91861_91932 = state_91818__$1;
(statearr_91861_91932[(2)] = inst_91766);

(statearr_91861_91932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (16))){
var inst_91815 = (state_91818[(2)]);
var inst_91816 = done.call(null);
var state_91818__$1 = (function (){var statearr_91862 = state_91818;
(statearr_91862[(22)] = inst_91815);

return statearr_91862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91818__$1,inst_91816);
} else {
if((state_val_91819 === (10))){
var inst_91726 = (state_91818[(2)]);
var inst_91727 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91728 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91729 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91728,inst_91726,null];
var inst_91730 = cljs.core.PersistentHashMap.fromArrays(inst_91727,inst_91729);
var inst_91731 = cljs.test.do_report.call(null,inst_91730);
var state_91818__$1 = state_91818;
var statearr_91863_91933 = state_91818__$1;
(statearr_91863_91933[(2)] = inst_91731);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91819 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91818,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_91780 = cljs.core.List.EMPTY;
var inst_91781 = cljs.core._conj.call(null,inst_91780,"~/.in-drop-dot-only");
var inst_91785 = cljs.core.async.chan.call(null,(1));
var inst_91786 = (function (){var c__9318__auto____$1 = inst_91785;
return ((function (c__9318__auto____$1,_,inst_91780,inst_91781,inst_91785,state_val_91819,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91780,inst_91781,inst_91785,state_val_91819,c__9318__auto__,___10644__auto__){
return (function (state_91783){
var state_val_91784 = (state_91783[(1)]);
if((state_val_91784 === (1))){
var state_91783__$1 = state_91783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91783__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91780,inst_91781,inst_91785,state_val_91819,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91780,inst_91781,inst_91785,state_val_91819,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91867 = [null,null,null,null,null,null,null];
(statearr_91867[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91867[(1)] = (1));

return statearr_91867;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91783){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91868){if((e91868 instanceof Object)){
var ex__9301__auto__ = e91868;
var statearr_91869_91934 = state_91783;
(statearr_91869_91934[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91935 = state_91783;
state_91783 = G__91935;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91783){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91780,inst_91781,inst_91785,state_val_91819,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91870 = f__9319__auto__.call(null);
(statearr_91870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91780,inst_91781,inst_91785,state_val_91819,c__9318__auto__,___10644__auto__))
})();
var inst_91787 = cljs.core.async.impl.dispatch.run.call(null,inst_91786);
var inst_91788 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91785);
var state_91818__$1 = (function (){var statearr_91871 = state_91818;
(statearr_91871[(18)] = inst_91781);

(statearr_91871[(23)] = inst_91787);

return statearr_91871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91818__$1,(19),inst_91788);
} else {
if((state_val_91819 === (8))){
var inst_91702 = (state_91818[(21)]);
var inst_91723 = (state_91818[(2)]);
var state_91818__$1 = (function (){var statearr_91872 = state_91818;
(statearr_91872[(24)] = inst_91723);

return statearr_91872;
})();
var statearr_91873_91936 = state_91818__$1;
(statearr_91873_91936[(2)] = inst_91702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818__$1);

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
var statearr_91877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91877[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91877[(1)] = (1));

return statearr_91877;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91818){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91878){if((e91878 instanceof Object)){
var ex__9301__auto__ = e91878;
var statearr_91879_91937 = state_91818;
(statearr_91879_91937[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91938 = state_91818;
state_91818 = G__91938;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91818){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91880 = f__9319__auto__.call(null);
(statearr_91880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta91478","meta91478",280214699,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test91477.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test91477.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test91477";

drop_dot.core_test.t_drop_dot$core_test91477.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test91477");
});

drop_dot.core_test.__GT_t_drop_dot$core_test91477 = (function drop_dot$core_test$__GT_t_drop_dot$core_test91477(meta91478){
return (new drop_dot.core_test.t_drop_dot$core_test91477(meta91478));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test91477(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test91939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test91939 = (function (meta91940){
this.meta91940 = meta91940;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test91939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91941,meta91940__$1){
var self__ = this;
var _91941__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test91939(meta91940__$1));
});

drop_dot.core_test.t_drop_dot$core_test91939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91941){
var self__ = this;
var _91941__$1 = this;
return self__.meta91940;
});

drop_dot.core_test.t_drop_dot$core_test91939.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test91939.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_92080){
var state_val_92081 = (state_92080[(1)]);
if((state_val_92081 === (7))){
var inst_91963 = (state_92080[(7)]);
var inst_91973 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91974 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91975 = cljs.core.List.EMPTY;
var inst_91976 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91977 = cljs.core.cons.call(null,inst_91976,inst_91963);
var inst_91978 = cljs.core._conj.call(null,inst_91975,inst_91977);
var inst_91979 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91980 = cljs.core._conj.call(null,inst_91978,inst_91979);
var inst_91981 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91974,inst_91980,null];
var inst_91982 = cljs.core.PersistentHashMap.fromArrays(inst_91973,inst_91981);
var inst_91983 = cljs.test.do_report.call(null,inst_91982);
var state_92080__$1 = state_92080;
var statearr_92082_92343 = state_92080__$1;
(statearr_92082_92343[(2)] = inst_91983);

(statearr_92082_92343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (20))){
var inst_92053 = (state_92080[(8)]);
var inst_92056 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92057 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92058 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92053);
var inst_92059 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92057,inst_92058,null];
var inst_92060 = cljs.core.PersistentHashMap.fromArrays(inst_92056,inst_92059);
var inst_92061 = cljs.test.do_report.call(null,inst_92060);
var state_92080__$1 = state_92080;
var statearr_92083_92344 = state_92080__$1;
(statearr_92083_92344[(2)] = inst_92061);

(statearr_92083_92344[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (1))){
var state_92080__$1 = state_92080;
var statearr_92084_92345 = state_92080__$1;
(statearr_92084_92345[(2)] = null);

(statearr_92084_92345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92080,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91952 = cljs.core.List.EMPTY;
var inst_91953 = cljs.core._conj.call(null,inst_91952,"NOTICE: ");
var inst_91957 = cljs.core.async.chan.call(null,(1));
var inst_91958 = (function (){var c__9318__auto____$1 = inst_91957;
return ((function (c__9318__auto____$1,_,inst_91952,inst_91953,inst_91957,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91952,inst_91953,inst_91957,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_91955){
var state_val_91956 = (state_91955[(1)]);
if((state_val_91956 === (1))){
var state_91955__$1 = state_91955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91955__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91952,inst_91953,inst_91957,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91952,inst_91953,inst_91957,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92088 = [null,null,null,null,null,null,null];
(statearr_92088[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92088[(1)] = (1));

return statearr_92088;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91955){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92089){if((e92089 instanceof Object)){
var ex__9301__auto__ = e92089;
var statearr_92090_92346 = state_91955;
(statearr_92090_92346[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92347 = state_91955;
state_91955 = G__92347;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91955){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91952,inst_91953,inst_91957,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92091 = f__9319__auto__.call(null);
(statearr_92091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91952,inst_91953,inst_91957,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_91959 = cljs.core.async.impl.dispatch.run.call(null,inst_91958);
var inst_91960 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_91957);
var state_92080__$1 = (function (){var statearr_92092 = state_92080;
(statearr_92092[(9)] = inst_91959);

(statearr_92092[(10)] = inst_91953);

return statearr_92092;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92080__$1,(5),inst_91960);
} else {
if((state_val_92081 === (15))){
var inst_92009 = (state_92080[(11)]);
var inst_92030 = (state_92080[(2)]);
var state_92080__$1 = (function (){var statearr_92093 = state_92080;
(statearr_92093[(12)] = inst_92030);

return statearr_92093;
})();
var statearr_92094_92348 = state_92080__$1;
(statearr_92094_92348[(2)] = inst_92009);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (21))){
var inst_92053 = (state_92080[(8)]);
var inst_92063 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92064 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92065 = cljs.core.List.EMPTY;
var inst_92066 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92067 = cljs.core.cons.call(null,inst_92066,inst_92053);
var inst_92068 = cljs.core._conj.call(null,inst_92065,inst_92067);
var inst_92069 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92070 = cljs.core._conj.call(null,inst_92068,inst_92069);
var inst_92071 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92064,inst_92070,null];
var inst_92072 = cljs.core.PersistentHashMap.fromArrays(inst_92063,inst_92071);
var inst_92073 = cljs.test.do_report.call(null,inst_92072);
var state_92080__$1 = state_92080;
var statearr_92095_92349 = state_92080__$1;
(statearr_92095_92349[(2)] = inst_92073);

(statearr_92095_92349[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (13))){
var inst_92008 = (state_92080[(13)]);
var inst_92011 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92012 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92013 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92008);
var inst_92014 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92012,inst_92013,null];
var inst_92015 = cljs.core.PersistentHashMap.fromArrays(inst_92011,inst_92014);
var inst_92016 = cljs.test.do_report.call(null,inst_92015);
var state_92080__$1 = state_92080;
var statearr_92096_92350 = state_92080__$1;
(statearr_92096_92350[(2)] = inst_92016);

(statearr_92096_92350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (22))){
var inst_92054 = (state_92080[(14)]);
var inst_92075 = (state_92080[(2)]);
var state_92080__$1 = (function (){var statearr_92097 = state_92080;
(statearr_92097[(15)] = inst_92075);

return statearr_92097;
})();
var statearr_92098_92351 = state_92080__$1;
(statearr_92098_92351[(2)] = inst_92054);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (6))){
var inst_91963 = (state_92080[(7)]);
var inst_91966 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91967 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91968 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91963);
var inst_91969 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91967,inst_91968,null];
var inst_91970 = cljs.core.PersistentHashMap.fromArrays(inst_91966,inst_91969);
var inst_91971 = cljs.test.do_report.call(null,inst_91970);
var state_92080__$1 = state_92080;
var statearr_92099_92352 = state_92080__$1;
(statearr_92099_92352[(2)] = inst_91971);

(statearr_92099_92352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (17))){
var inst_92033 = (state_92080[(2)]);
var inst_92034 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92035 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92036 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92035,inst_92033,null];
var inst_92037 = cljs.core.PersistentHashMap.fromArrays(inst_92034,inst_92036);
var inst_92038 = cljs.test.do_report.call(null,inst_92037);
var state_92080__$1 = state_92080;
var statearr_92100_92353 = state_92080__$1;
(statearr_92100_92353[(2)] = inst_92038);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (3))){
var inst_91943 = (state_92080[(2)]);
var inst_91944 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91945 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91946 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91945,inst_91943,null];
var inst_91947 = cljs.core.PersistentHashMap.fromArrays(inst_91944,inst_91946);
var inst_91948 = cljs.test.do_report.call(null,inst_91947);
var state_92080__$1 = state_92080;
var statearr_92101_92354 = state_92080__$1;
(statearr_92101_92354[(2)] = inst_91948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (12))){
var inst_91998 = (state_92080[(16)]);
var inst_92009 = (state_92080[(11)]);
var inst_92008 = (state_92080[(13)]);
var inst_92007 = (state_92080[(2)]);
var inst_92008__$1 = cljs.core._conj.call(null,inst_91998,inst_92007);
var inst_92009__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92008__$1);
var state_92080__$1 = (function (){var statearr_92102 = state_92080;
(statearr_92102[(11)] = inst_92009__$1);

(statearr_92102[(13)] = inst_92008__$1);

return statearr_92102;
})();
if(cljs.core.truth_(inst_92009__$1)){
var statearr_92103_92355 = state_92080__$1;
(statearr_92103_92355[(1)] = (13));

} else {
var statearr_92104_92356 = state_92080__$1;
(statearr_92104_92356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (2))){
var inst_91987 = (state_92080[(2)]);
var state_92080__$1 = (function (){var statearr_92105 = state_92080;
(statearr_92105[(17)] = inst_91987);

return statearr_92105;
})();
var statearr_92106_92357 = state_92080__$1;
(statearr_92106_92357[(2)] = null);

(statearr_92106_92357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (19))){
var inst_92053 = (state_92080[(8)]);
var inst_92054 = (state_92080[(14)]);
var inst_92043 = (state_92080[(18)]);
var inst_92052 = (state_92080[(2)]);
var inst_92053__$1 = cljs.core._conj.call(null,inst_92043,inst_92052);
var inst_92054__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92053__$1);
var state_92080__$1 = (function (){var statearr_92107 = state_92080;
(statearr_92107[(8)] = inst_92053__$1);

(statearr_92107[(14)] = inst_92054__$1);

return statearr_92107;
})();
if(cljs.core.truth_(inst_92054__$1)){
var statearr_92108_92358 = state_92080__$1;
(statearr_92108_92358[(1)] = (20));

} else {
var statearr_92109_92359 = state_92080__$1;
(statearr_92109_92359[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92080,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91997 = cljs.core.List.EMPTY;
var inst_91998 = cljs.core._conj.call(null,inst_91997,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92002 = cljs.core.async.chan.call(null,(1));
var inst_92003 = (function (){var c__9318__auto____$1 = inst_92002;
return ((function (c__9318__auto____$1,_,inst_91997,inst_91998,inst_92002,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91997,inst_91998,inst_92002,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_92000){
var state_val_92001 = (state_92000[(1)]);
if((state_val_92001 === (1))){
var state_92000__$1 = state_92000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92000__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91997,inst_91998,inst_92002,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91997,inst_91998,inst_92002,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92113 = [null,null,null,null,null,null,null];
(statearr_92113[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92113[(1)] = (1));

return statearr_92113;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92000){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92114){if((e92114 instanceof Object)){
var ex__9301__auto__ = e92114;
var statearr_92115_92360 = state_92000;
(statearr_92115_92360[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92361 = state_92000;
state_92000 = G__92361;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92000){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91997,inst_91998,inst_92002,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92116 = f__9319__auto__.call(null);
(statearr_92116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91997,inst_91998,inst_92002,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_92004 = cljs.core.async.impl.dispatch.run.call(null,inst_92003);
var inst_92005 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_92002);
var state_92080__$1 = (function (){var statearr_92117 = state_92080;
(statearr_92117[(19)] = inst_92004);

(statearr_92117[(16)] = inst_91998);

return statearr_92117;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92080__$1,(12),inst_92005);
} else {
if((state_val_92081 === (9))){
var inst_92032 = (state_92080[(2)]);
var state_92080__$1 = (function (){var statearr_92118 = state_92080;
(statearr_92118[(20)] = inst_92032);

return statearr_92118;
})();
var statearr_92119_92362 = state_92080__$1;
(statearr_92119_92362[(2)] = null);

(statearr_92119_92362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (5))){
var inst_91964 = (state_92080[(21)]);
var inst_91963 = (state_92080[(7)]);
var inst_91953 = (state_92080[(10)]);
var inst_91962 = (state_92080[(2)]);
var inst_91963__$1 = cljs.core._conj.call(null,inst_91953,inst_91962);
var inst_91964__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91963__$1);
var state_92080__$1 = (function (){var statearr_92120 = state_92080;
(statearr_92120[(21)] = inst_91964__$1);

(statearr_92120[(7)] = inst_91963__$1);

return statearr_92120;
})();
if(cljs.core.truth_(inst_91964__$1)){
var statearr_92121_92363 = state_92080__$1;
(statearr_92121_92363[(1)] = (6));

} else {
var statearr_92122_92364 = state_92080__$1;
(statearr_92122_92364[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (14))){
var inst_92008 = (state_92080[(13)]);
var inst_92018 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92019 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92020 = cljs.core.List.EMPTY;
var inst_92021 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92022 = cljs.core.cons.call(null,inst_92021,inst_92008);
var inst_92023 = cljs.core._conj.call(null,inst_92020,inst_92022);
var inst_92024 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92025 = cljs.core._conj.call(null,inst_92023,inst_92024);
var inst_92026 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92019,inst_92025,null];
var inst_92027 = cljs.core.PersistentHashMap.fromArrays(inst_92018,inst_92026);
var inst_92028 = cljs.test.do_report.call(null,inst_92027);
var state_92080__$1 = state_92080;
var statearr_92123_92365 = state_92080__$1;
(statearr_92123_92365[(2)] = inst_92028);

(statearr_92123_92365[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (16))){
var inst_92077 = (state_92080[(2)]);
var inst_92078 = done.call(null);
var state_92080__$1 = (function (){var statearr_92124 = state_92080;
(statearr_92124[(22)] = inst_92077);

return statearr_92124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92080__$1,inst_92078);
} else {
if((state_val_92081 === (10))){
var inst_91988 = (state_92080[(2)]);
var inst_91989 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91990 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91991 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91990,inst_91988,null];
var inst_91992 = cljs.core.PersistentHashMap.fromArrays(inst_91989,inst_91991);
var inst_91993 = cljs.test.do_report.call(null,inst_91992);
var state_92080__$1 = state_92080;
var statearr_92125_92366 = state_92080__$1;
(statearr_92125_92366[(2)] = inst_91993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92081 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92080,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_92042 = cljs.core.List.EMPTY;
var inst_92043 = cljs.core._conj.call(null,inst_92042,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92047 = cljs.core.async.chan.call(null,(1));
var inst_92048 = (function (){var c__9318__auto____$1 = inst_92047;
return ((function (c__9318__auto____$1,_,inst_92042,inst_92043,inst_92047,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_92042,inst_92043,inst_92047,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_92045){
var state_val_92046 = (state_92045[(1)]);
if((state_val_92046 === (1))){
var state_92045__$1 = state_92045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92045__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_92042,inst_92043,inst_92047,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_92042,inst_92043,inst_92047,state_val_92081,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92129 = [null,null,null,null,null,null,null];
(statearr_92129[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92129[(1)] = (1));

return statearr_92129;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92045){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92130){if((e92130 instanceof Object)){
var ex__9301__auto__ = e92130;
var statearr_92131_92367 = state_92045;
(statearr_92131_92367[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92368 = state_92045;
state_92045 = G__92368;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92045){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_92042,inst_92043,inst_92047,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92132 = f__9319__auto__.call(null);
(statearr_92132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_92042,inst_92043,inst_92047,state_val_92081,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_92049 = cljs.core.async.impl.dispatch.run.call(null,inst_92048);
var inst_92050 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_92047);
var state_92080__$1 = (function (){var statearr_92133 = state_92080;
(statearr_92133[(23)] = inst_92049);

(statearr_92133[(18)] = inst_92043);

return statearr_92133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92080__$1,(19),inst_92050);
} else {
if((state_val_92081 === (8))){
var inst_91964 = (state_92080[(21)]);
var inst_91985 = (state_92080[(2)]);
var state_92080__$1 = (function (){var statearr_92134 = state_92080;
(statearr_92134[(24)] = inst_91985);

return statearr_92134;
})();
var statearr_92135_92369 = state_92080__$1;
(statearr_92135_92369[(2)] = inst_91964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080__$1);

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
var statearr_92139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92139[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92139[(1)] = (1));

return statearr_92139;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92080){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92140){if((e92140 instanceof Object)){
var ex__9301__auto__ = e92140;
var statearr_92141_92370 = state_92080;
(statearr_92141_92370[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92371 = state_92080;
state_92080 = G__92371;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92080){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92142 = f__9319__auto__.call(null);
(statearr_92142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91939.prototype.apply = (function (self__,args91942){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args91942)));
});

drop_dot.core_test.t_drop_dot$core_test91939.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_92280){
var state_val_92281 = (state_92280[(1)]);
if((state_val_92281 === (7))){
var inst_92163 = (state_92280[(7)]);
var inst_92173 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92174 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_92175 = cljs.core.List.EMPTY;
var inst_92176 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92177 = cljs.core.cons.call(null,inst_92176,inst_92163);
var inst_92178 = cljs.core._conj.call(null,inst_92175,inst_92177);
var inst_92179 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92180 = cljs.core._conj.call(null,inst_92178,inst_92179);
var inst_92181 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92174,inst_92180,null];
var inst_92182 = cljs.core.PersistentHashMap.fromArrays(inst_92173,inst_92181);
var inst_92183 = cljs.test.do_report.call(null,inst_92182);
var state_92280__$1 = state_92280;
var statearr_92282_92372 = state_92280__$1;
(statearr_92282_92372[(2)] = inst_92183);

(statearr_92282_92372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (20))){
var inst_92253 = (state_92280[(8)]);
var inst_92256 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92257 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92258 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92253);
var inst_92259 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92257,inst_92258,null];
var inst_92260 = cljs.core.PersistentHashMap.fromArrays(inst_92256,inst_92259);
var inst_92261 = cljs.test.do_report.call(null,inst_92260);
var state_92280__$1 = state_92280;
var statearr_92283_92373 = state_92280__$1;
(statearr_92283_92373[(2)] = inst_92261);

(statearr_92283_92373[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (1))){
var state_92280__$1 = state_92280;
var statearr_92284_92374 = state_92280__$1;
(statearr_92284_92374[(2)] = null);

(statearr_92284_92374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92280,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92152 = cljs.core.List.EMPTY;
var inst_92153 = cljs.core._conj.call(null,inst_92152,"NOTICE: ");
var inst_92157 = cljs.core.async.chan.call(null,(1));
var inst_92158 = (function (){var c__9318__auto____$1 = inst_92157;
return ((function (c__9318__auto____$1,_,inst_92152,inst_92153,inst_92157,state_val_92281,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_92152,inst_92153,inst_92157,state_val_92281,c__9318__auto__,___10644__auto__){
return (function (state_92155){
var state_val_92156 = (state_92155[(1)]);
if((state_val_92156 === (1))){
var state_92155__$1 = state_92155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92155__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_92152,inst_92153,inst_92157,state_val_92281,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_92152,inst_92153,inst_92157,state_val_92281,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92288 = [null,null,null,null,null,null,null];
(statearr_92288[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92288[(1)] = (1));

return statearr_92288;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92155){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92289){if((e92289 instanceof Object)){
var ex__9301__auto__ = e92289;
var statearr_92290_92375 = state_92155;
(statearr_92290_92375[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92376 = state_92155;
state_92155 = G__92376;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92155){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_92152,inst_92153,inst_92157,state_val_92281,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92291 = f__9319__auto__.call(null);
(statearr_92291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_92152,inst_92153,inst_92157,state_val_92281,c__9318__auto__,___10644__auto__))
})();
var inst_92159 = cljs.core.async.impl.dispatch.run.call(null,inst_92158);
var inst_92160 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_92157);
var state_92280__$1 = (function (){var statearr_92292 = state_92280;
(statearr_92292[(9)] = inst_92153);

(statearr_92292[(10)] = inst_92159);

return statearr_92292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92280__$1,(5),inst_92160);
} else {
if((state_val_92281 === (15))){
var inst_92209 = (state_92280[(11)]);
var inst_92230 = (state_92280[(2)]);
var state_92280__$1 = (function (){var statearr_92293 = state_92280;
(statearr_92293[(12)] = inst_92230);

return statearr_92293;
})();
var statearr_92294_92377 = state_92280__$1;
(statearr_92294_92377[(2)] = inst_92209);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (21))){
var inst_92253 = (state_92280[(8)]);
var inst_92263 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92264 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92265 = cljs.core.List.EMPTY;
var inst_92266 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92267 = cljs.core.cons.call(null,inst_92266,inst_92253);
var inst_92268 = cljs.core._conj.call(null,inst_92265,inst_92267);
var inst_92269 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92270 = cljs.core._conj.call(null,inst_92268,inst_92269);
var inst_92271 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92264,inst_92270,null];
var inst_92272 = cljs.core.PersistentHashMap.fromArrays(inst_92263,inst_92271);
var inst_92273 = cljs.test.do_report.call(null,inst_92272);
var state_92280__$1 = state_92280;
var statearr_92295_92378 = state_92280__$1;
(statearr_92295_92378[(2)] = inst_92273);

(statearr_92295_92378[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (13))){
var inst_92208 = (state_92280[(13)]);
var inst_92211 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92212 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92213 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92208);
var inst_92214 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92212,inst_92213,null];
var inst_92215 = cljs.core.PersistentHashMap.fromArrays(inst_92211,inst_92214);
var inst_92216 = cljs.test.do_report.call(null,inst_92215);
var state_92280__$1 = state_92280;
var statearr_92296_92379 = state_92280__$1;
(statearr_92296_92379[(2)] = inst_92216);

(statearr_92296_92379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (22))){
var inst_92254 = (state_92280[(14)]);
var inst_92275 = (state_92280[(2)]);
var state_92280__$1 = (function (){var statearr_92297 = state_92280;
(statearr_92297[(15)] = inst_92275);

return statearr_92297;
})();
var statearr_92298_92380 = state_92280__$1;
(statearr_92298_92380[(2)] = inst_92254);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (6))){
var inst_92163 = (state_92280[(7)]);
var inst_92166 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92167 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_92168 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92163);
var inst_92169 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92167,inst_92168,null];
var inst_92170 = cljs.core.PersistentHashMap.fromArrays(inst_92166,inst_92169);
var inst_92171 = cljs.test.do_report.call(null,inst_92170);
var state_92280__$1 = state_92280;
var statearr_92299_92381 = state_92280__$1;
(statearr_92299_92381[(2)] = inst_92171);

(statearr_92299_92381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (17))){
var inst_92233 = (state_92280[(2)]);
var inst_92234 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92235 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92236 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92235,inst_92233,null];
var inst_92237 = cljs.core.PersistentHashMap.fromArrays(inst_92234,inst_92236);
var inst_92238 = cljs.test.do_report.call(null,inst_92237);
var state_92280__$1 = state_92280;
var statearr_92300_92382 = state_92280__$1;
(statearr_92300_92382[(2)] = inst_92238);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (3))){
var inst_92143 = (state_92280[(2)]);
var inst_92144 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92145 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_92146 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92145,inst_92143,null];
var inst_92147 = cljs.core.PersistentHashMap.fromArrays(inst_92144,inst_92146);
var inst_92148 = cljs.test.do_report.call(null,inst_92147);
var state_92280__$1 = state_92280;
var statearr_92301_92383 = state_92280__$1;
(statearr_92301_92383[(2)] = inst_92148);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (12))){
var inst_92208 = (state_92280[(13)]);
var inst_92209 = (state_92280[(11)]);
var inst_92198 = (state_92280[(16)]);
var inst_92207 = (state_92280[(2)]);
var inst_92208__$1 = cljs.core._conj.call(null,inst_92198,inst_92207);
var inst_92209__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92208__$1);
var state_92280__$1 = (function (){var statearr_92302 = state_92280;
(statearr_92302[(13)] = inst_92208__$1);

(statearr_92302[(11)] = inst_92209__$1);

return statearr_92302;
})();
if(cljs.core.truth_(inst_92209__$1)){
var statearr_92303_92384 = state_92280__$1;
(statearr_92303_92384[(1)] = (13));

} else {
var statearr_92304_92385 = state_92280__$1;
(statearr_92304_92385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (2))){
var inst_92187 = (state_92280[(2)]);
var state_92280__$1 = (function (){var statearr_92305 = state_92280;
(statearr_92305[(17)] = inst_92187);

return statearr_92305;
})();
var statearr_92306_92386 = state_92280__$1;
(statearr_92306_92386[(2)] = null);

(statearr_92306_92386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (19))){
var inst_92253 = (state_92280[(8)]);
var inst_92243 = (state_92280[(18)]);
var inst_92254 = (state_92280[(14)]);
var inst_92252 = (state_92280[(2)]);
var inst_92253__$1 = cljs.core._conj.call(null,inst_92243,inst_92252);
var inst_92254__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92253__$1);
var state_92280__$1 = (function (){var statearr_92307 = state_92280;
(statearr_92307[(8)] = inst_92253__$1);

(statearr_92307[(14)] = inst_92254__$1);

return statearr_92307;
})();
if(cljs.core.truth_(inst_92254__$1)){
var statearr_92308_92387 = state_92280__$1;
(statearr_92308_92387[(1)] = (20));

} else {
var statearr_92309_92388 = state_92280__$1;
(statearr_92309_92388[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92280,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_92197 = cljs.core.List.EMPTY;
var inst_92198 = cljs.core._conj.call(null,inst_92197,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92202 = cljs.core.async.chan.call(null,(1));
var inst_92203 = (function (){var c__9318__auto____$1 = inst_92202;
return ((function (c__9318__auto____$1,_,inst_92197,inst_92198,inst_92202,state_val_92281,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_92197,inst_92198,inst_92202,state_val_92281,c__9318__auto__,___10644__auto__){
return (function (state_92200){
var state_val_92201 = (state_92200[(1)]);
if((state_val_92201 === (1))){
var state_92200__$1 = state_92200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92200__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_92197,inst_92198,inst_92202,state_val_92281,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_92197,inst_92198,inst_92202,state_val_92281,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92313 = [null,null,null,null,null,null,null];
(statearr_92313[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92313[(1)] = (1));

return statearr_92313;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92200){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92314){if((e92314 instanceof Object)){
var ex__9301__auto__ = e92314;
var statearr_92315_92389 = state_92200;
(statearr_92315_92389[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92390 = state_92200;
state_92200 = G__92390;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92200){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_92197,inst_92198,inst_92202,state_val_92281,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92316 = f__9319__auto__.call(null);
(statearr_92316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_92197,inst_92198,inst_92202,state_val_92281,c__9318__auto__,___10644__auto__))
})();
var inst_92204 = cljs.core.async.impl.dispatch.run.call(null,inst_92203);
var inst_92205 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_92202);
var state_92280__$1 = (function (){var statearr_92317 = state_92280;
(statearr_92317[(16)] = inst_92198);

(statearr_92317[(19)] = inst_92204);

return statearr_92317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92280__$1,(12),inst_92205);
} else {
if((state_val_92281 === (9))){
var inst_92232 = (state_92280[(2)]);
var state_92280__$1 = (function (){var statearr_92318 = state_92280;
(statearr_92318[(20)] = inst_92232);

return statearr_92318;
})();
var statearr_92319_92391 = state_92280__$1;
(statearr_92319_92391[(2)] = null);

(statearr_92319_92391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (5))){
var inst_92164 = (state_92280[(21)]);
var inst_92153 = (state_92280[(9)]);
var inst_92163 = (state_92280[(7)]);
var inst_92162 = (state_92280[(2)]);
var inst_92163__$1 = cljs.core._conj.call(null,inst_92153,inst_92162);
var inst_92164__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92163__$1);
var state_92280__$1 = (function (){var statearr_92320 = state_92280;
(statearr_92320[(21)] = inst_92164__$1);

(statearr_92320[(7)] = inst_92163__$1);

return statearr_92320;
})();
if(cljs.core.truth_(inst_92164__$1)){
var statearr_92321_92392 = state_92280__$1;
(statearr_92321_92392[(1)] = (6));

} else {
var statearr_92322_92393 = state_92280__$1;
(statearr_92322_92393[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (14))){
var inst_92208 = (state_92280[(13)]);
var inst_92218 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92219 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92220 = cljs.core.List.EMPTY;
var inst_92221 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92222 = cljs.core.cons.call(null,inst_92221,inst_92208);
var inst_92223 = cljs.core._conj.call(null,inst_92220,inst_92222);
var inst_92224 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92225 = cljs.core._conj.call(null,inst_92223,inst_92224);
var inst_92226 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92219,inst_92225,null];
var inst_92227 = cljs.core.PersistentHashMap.fromArrays(inst_92218,inst_92226);
var inst_92228 = cljs.test.do_report.call(null,inst_92227);
var state_92280__$1 = state_92280;
var statearr_92323_92394 = state_92280__$1;
(statearr_92323_92394[(2)] = inst_92228);

(statearr_92323_92394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (16))){
var inst_92277 = (state_92280[(2)]);
var inst_92278 = done.call(null);
var state_92280__$1 = (function (){var statearr_92324 = state_92280;
(statearr_92324[(22)] = inst_92277);

return statearr_92324;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92280__$1,inst_92278);
} else {
if((state_val_92281 === (10))){
var inst_92188 = (state_92280[(2)]);
var inst_92189 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92190 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_92191 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92190,inst_92188,null];
var inst_92192 = cljs.core.PersistentHashMap.fromArrays(inst_92189,inst_92191);
var inst_92193 = cljs.test.do_report.call(null,inst_92192);
var state_92280__$1 = state_92280;
var statearr_92325_92395 = state_92280__$1;
(statearr_92325_92395[(2)] = inst_92193);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92281 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92280,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_92242 = cljs.core.List.EMPTY;
var inst_92243 = cljs.core._conj.call(null,inst_92242,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92247 = cljs.core.async.chan.call(null,(1));
var inst_92248 = (function (){var c__9318__auto____$1 = inst_92247;
return ((function (c__9318__auto____$1,_,inst_92242,inst_92243,inst_92247,state_val_92281,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_92242,inst_92243,inst_92247,state_val_92281,c__9318__auto__,___10644__auto__){
return (function (state_92245){
var state_val_92246 = (state_92245[(1)]);
if((state_val_92246 === (1))){
var state_92245__$1 = state_92245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92245__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_92242,inst_92243,inst_92247,state_val_92281,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_92242,inst_92243,inst_92247,state_val_92281,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92329 = [null,null,null,null,null,null,null];
(statearr_92329[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92329[(1)] = (1));

return statearr_92329;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92245){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92330){if((e92330 instanceof Object)){
var ex__9301__auto__ = e92330;
var statearr_92331_92396 = state_92245;
(statearr_92331_92396[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92397 = state_92245;
state_92245 = G__92397;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92245){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_92242,inst_92243,inst_92247,state_val_92281,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92332 = f__9319__auto__.call(null);
(statearr_92332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_92242,inst_92243,inst_92247,state_val_92281,c__9318__auto__,___10644__auto__))
})();
var inst_92249 = cljs.core.async.impl.dispatch.run.call(null,inst_92248);
var inst_92250 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_92247);
var state_92280__$1 = (function (){var statearr_92333 = state_92280;
(statearr_92333[(18)] = inst_92243);

(statearr_92333[(23)] = inst_92249);

return statearr_92333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92280__$1,(19),inst_92250);
} else {
if((state_val_92281 === (8))){
var inst_92164 = (state_92280[(21)]);
var inst_92185 = (state_92280[(2)]);
var state_92280__$1 = (function (){var statearr_92334 = state_92280;
(statearr_92334[(24)] = inst_92185);

return statearr_92334;
})();
var statearr_92335_92398 = state_92280__$1;
(statearr_92335_92398[(2)] = inst_92164);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280__$1);

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
var statearr_92339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92339[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92339[(1)] = (1));

return statearr_92339;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92280){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92340){if((e92340 instanceof Object)){
var ex__9301__auto__ = e92340;
var statearr_92341_92399 = state_92280;
(statearr_92341_92399[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92400 = state_92280;
state_92280 = G__92400;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92280){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92342 = f__9319__auto__.call(null);
(statearr_92342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta91940","meta91940",1975244988,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test91939.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test91939.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test91939";

drop_dot.core_test.t_drop_dot$core_test91939.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test91939");
});

drop_dot.core_test.__GT_t_drop_dot$core_test91939 = (function drop_dot$core_test$__GT_t_drop_dot$core_test91939(meta91940){
return (new drop_dot.core_test.t_drop_dot$core_test91939(meta91940));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test91939(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2043608325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2088597056,null),"test/drop_dot/core_test.cljs",72,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test92401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test92401 = (function (meta92402){
this.meta92402 = meta92402;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test92401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92403,meta92402__$1){
var self__ = this;
var _92403__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test92401(meta92402__$1));
});

drop_dot.core_test.t_drop_dot$core_test92401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92403){
var self__ = this;
var _92403__$1 = this;
return self__.meta92402;
});

drop_dot.core_test.t_drop_dot$core_test92401.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test92401.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_92525){
var state_val_92526 = (state_92525[(1)]);
if((state_val_92526 === (7))){
var inst_92420 = (state_92525[(7)]);
var inst_92430 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92431 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92432 = cljs.core.List.EMPTY;
var inst_92433 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92434 = cljs.core.cons.call(null,inst_92433,inst_92420);
var inst_92435 = cljs.core._conj.call(null,inst_92432,inst_92434);
var inst_92436 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92437 = cljs.core._conj.call(null,inst_92435,inst_92436);
var inst_92438 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92431,inst_92437,null];
var inst_92439 = cljs.core.PersistentHashMap.fromArrays(inst_92430,inst_92438);
var inst_92440 = cljs.test.do_report.call(null,inst_92439);
var state_92525__$1 = state_92525;
var statearr_92527_92731 = state_92525__$1;
(statearr_92527_92731[(2)] = inst_92440);

(statearr_92527_92731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (20))){
var inst_92498 = (state_92525[(8)]);
var inst_92501 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92502 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92503 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92498);
var inst_92504 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92502,inst_92503,null];
var inst_92505 = cljs.core.PersistentHashMap.fromArrays(inst_92501,inst_92504);
var inst_92506 = cljs.test.do_report.call(null,inst_92505);
var state_92525__$1 = state_92525;
var statearr_92528_92732 = state_92525__$1;
(statearr_92528_92732[(2)] = inst_92506);

(statearr_92528_92732[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (1))){
var inst_92405 = cljs.core.async.chan.call(null,(1));
var state_92525__$1 = (function (){var statearr_92529 = state_92525;
(statearr_92529[(9)] = inst_92405);

return statearr_92529;
})();
var statearr_92530_92733 = state_92525__$1;
(statearr_92530_92733[(2)] = null);

(statearr_92530_92733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92525,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92415 = cljs.core.List.EMPTY;
var inst_92416 = cljs.core._conj.call(null,inst_92415,"~/.TDD-this-file-in-dot-drop-dot");
var inst_92417 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_92525__$1 = (function (){var statearr_92531 = state_92525;
(statearr_92531[(10)] = inst_92416);

return statearr_92531;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92525__$1,(5),inst_92417);
} else {
if((state_val_92526 === (15))){
var inst_92460 = (state_92525[(11)]);
var inst_92481 = (state_92525[(2)]);
var state_92525__$1 = (function (){var statearr_92532 = state_92525;
(statearr_92532[(12)] = inst_92481);

return statearr_92532;
})();
var statearr_92533_92734 = state_92525__$1;
(statearr_92533_92734[(2)] = inst_92460);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (21))){
var inst_92498 = (state_92525[(8)]);
var inst_92508 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92509 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92510 = cljs.core.List.EMPTY;
var inst_92511 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92512 = cljs.core.cons.call(null,inst_92511,inst_92498);
var inst_92513 = cljs.core._conj.call(null,inst_92510,inst_92512);
var inst_92514 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92515 = cljs.core._conj.call(null,inst_92513,inst_92514);
var inst_92516 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92509,inst_92515,null];
var inst_92517 = cljs.core.PersistentHashMap.fromArrays(inst_92508,inst_92516);
var inst_92518 = cljs.test.do_report.call(null,inst_92517);
var state_92525__$1 = state_92525;
var statearr_92534_92735 = state_92525__$1;
(statearr_92534_92735[(2)] = inst_92518);

(statearr_92534_92735[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (13))){
var inst_92459 = (state_92525[(13)]);
var inst_92462 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92463 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92464 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92459);
var inst_92465 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92463,inst_92464,null];
var inst_92466 = cljs.core.PersistentHashMap.fromArrays(inst_92462,inst_92465);
var inst_92467 = cljs.test.do_report.call(null,inst_92466);
var state_92525__$1 = state_92525;
var statearr_92535_92736 = state_92525__$1;
(statearr_92535_92736[(2)] = inst_92467);

(statearr_92535_92736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (22))){
var inst_92499 = (state_92525[(14)]);
var inst_92520 = (state_92525[(2)]);
var state_92525__$1 = (function (){var statearr_92536 = state_92525;
(statearr_92536[(15)] = inst_92520);

return statearr_92536;
})();
var statearr_92537_92737 = state_92525__$1;
(statearr_92537_92737[(2)] = inst_92499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (6))){
var inst_92420 = (state_92525[(7)]);
var inst_92423 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92424 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92425 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92420);
var inst_92426 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92424,inst_92425,null];
var inst_92427 = cljs.core.PersistentHashMap.fromArrays(inst_92423,inst_92426);
var inst_92428 = cljs.test.do_report.call(null,inst_92427);
var state_92525__$1 = state_92525;
var statearr_92538_92738 = state_92525__$1;
(statearr_92538_92738[(2)] = inst_92428);

(statearr_92538_92738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (17))){
var inst_92484 = (state_92525[(2)]);
var inst_92485 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92486 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92487 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92486,inst_92484,null];
var inst_92488 = cljs.core.PersistentHashMap.fromArrays(inst_92485,inst_92487);
var inst_92489 = cljs.test.do_report.call(null,inst_92488);
var state_92525__$1 = state_92525;
var statearr_92539_92739 = state_92525__$1;
(statearr_92539_92739[(2)] = inst_92489);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (3))){
var inst_92406 = (state_92525[(2)]);
var inst_92407 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92408 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92409 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92408,inst_92406,null];
var inst_92410 = cljs.core.PersistentHashMap.fromArrays(inst_92407,inst_92409);
var inst_92411 = cljs.test.do_report.call(null,inst_92410);
var state_92525__$1 = state_92525;
var statearr_92540_92740 = state_92525__$1;
(statearr_92540_92740[(2)] = inst_92411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (12))){
var inst_92455 = (state_92525[(16)]);
var inst_92460 = (state_92525[(11)]);
var inst_92459 = (state_92525[(13)]);
var inst_92458 = (state_92525[(2)]);
var inst_92459__$1 = cljs.core._conj.call(null,inst_92455,inst_92458);
var inst_92460__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92459__$1);
var state_92525__$1 = (function (){var statearr_92541 = state_92525;
(statearr_92541[(11)] = inst_92460__$1);

(statearr_92541[(13)] = inst_92459__$1);

return statearr_92541;
})();
if(cljs.core.truth_(inst_92460__$1)){
var statearr_92542_92741 = state_92525__$1;
(statearr_92542_92741[(1)] = (13));

} else {
var statearr_92543_92742 = state_92525__$1;
(statearr_92543_92742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (2))){
var inst_92444 = (state_92525[(2)]);
var state_92525__$1 = (function (){var statearr_92544 = state_92525;
(statearr_92544[(17)] = inst_92444);

return statearr_92544;
})();
var statearr_92545_92743 = state_92525__$1;
(statearr_92545_92743[(2)] = null);

(statearr_92545_92743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (19))){
var inst_92499 = (state_92525[(14)]);
var inst_92498 = (state_92525[(8)]);
var inst_92494 = (state_92525[(18)]);
var inst_92497 = (state_92525[(2)]);
var inst_92498__$1 = cljs.core._conj.call(null,inst_92494,inst_92497);
var inst_92499__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92498__$1);
var state_92525__$1 = (function (){var statearr_92546 = state_92525;
(statearr_92546[(14)] = inst_92499__$1);

(statearr_92546[(8)] = inst_92498__$1);

return statearr_92546;
})();
if(cljs.core.truth_(inst_92499__$1)){
var statearr_92547_92744 = state_92525__$1;
(statearr_92547_92744[(1)] = (20));

} else {
var statearr_92548_92745 = state_92525__$1;
(statearr_92548_92745[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92525,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_92454 = cljs.core.List.EMPTY;
var inst_92455 = cljs.core._conj.call(null,inst_92454,"ERROR: ");
var inst_92456 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_92525__$1 = (function (){var statearr_92549 = state_92525;
(statearr_92549[(16)] = inst_92455);

return statearr_92549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92525__$1,(12),inst_92456);
} else {
if((state_val_92526 === (9))){
var inst_92483 = (state_92525[(2)]);
var state_92525__$1 = (function (){var statearr_92550 = state_92525;
(statearr_92550[(19)] = inst_92483);

return statearr_92550;
})();
var statearr_92551_92746 = state_92525__$1;
(statearr_92551_92746[(2)] = null);

(statearr_92551_92746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (5))){
var inst_92416 = (state_92525[(10)]);
var inst_92421 = (state_92525[(20)]);
var inst_92420 = (state_92525[(7)]);
var inst_92419 = (state_92525[(2)]);
var inst_92420__$1 = cljs.core._conj.call(null,inst_92416,inst_92419);
var inst_92421__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92420__$1);
var state_92525__$1 = (function (){var statearr_92552 = state_92525;
(statearr_92552[(20)] = inst_92421__$1);

(statearr_92552[(7)] = inst_92420__$1);

return statearr_92552;
})();
if(cljs.core.truth_(inst_92421__$1)){
var statearr_92553_92747 = state_92525__$1;
(statearr_92553_92747[(1)] = (6));

} else {
var statearr_92554_92748 = state_92525__$1;
(statearr_92554_92748[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (14))){
var inst_92459 = (state_92525[(13)]);
var inst_92469 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92470 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92471 = cljs.core.List.EMPTY;
var inst_92472 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92473 = cljs.core.cons.call(null,inst_92472,inst_92459);
var inst_92474 = cljs.core._conj.call(null,inst_92471,inst_92473);
var inst_92475 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92476 = cljs.core._conj.call(null,inst_92474,inst_92475);
var inst_92477 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92470,inst_92476,null];
var inst_92478 = cljs.core.PersistentHashMap.fromArrays(inst_92469,inst_92477);
var inst_92479 = cljs.test.do_report.call(null,inst_92478);
var state_92525__$1 = state_92525;
var statearr_92555_92749 = state_92525__$1;
(statearr_92555_92749[(2)] = inst_92479);

(statearr_92555_92749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (16))){
var inst_92522 = (state_92525[(2)]);
var inst_92523 = done.call(null);
var state_92525__$1 = (function (){var statearr_92556 = state_92525;
(statearr_92556[(21)] = inst_92522);

return statearr_92556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92525__$1,inst_92523);
} else {
if((state_val_92526 === (10))){
var inst_92445 = (state_92525[(2)]);
var inst_92446 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92447 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92448 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92447,inst_92445,null];
var inst_92449 = cljs.core.PersistentHashMap.fromArrays(inst_92446,inst_92448);
var inst_92450 = cljs.test.do_report.call(null,inst_92449);
var state_92525__$1 = state_92525;
var statearr_92557_92750 = state_92525__$1;
(statearr_92557_92750[(2)] = inst_92450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92526 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92525,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_92493 = cljs.core.List.EMPTY;
var inst_92494 = cljs.core._conj.call(null,inst_92493,"ERROR: ");
var inst_92495 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_92525__$1 = (function (){var statearr_92558 = state_92525;
(statearr_92558[(18)] = inst_92494);

return statearr_92558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92525__$1,(19),inst_92495);
} else {
if((state_val_92526 === (8))){
var inst_92421 = (state_92525[(20)]);
var inst_92442 = (state_92525[(2)]);
var state_92525__$1 = (function (){var statearr_92559 = state_92525;
(statearr_92559[(22)] = inst_92442);

return statearr_92559;
})();
var statearr_92560_92751 = state_92525__$1;
(statearr_92560_92751[(2)] = inst_92421);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525__$1);

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
var statearr_92564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92564[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92564[(1)] = (1));

return statearr_92564;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92525){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92565){if((e92565 instanceof Object)){
var ex__9301__auto__ = e92565;
var statearr_92566_92752 = state_92525;
(statearr_92566_92752[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92753 = state_92525;
state_92525 = G__92753;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92525){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92567 = f__9319__auto__.call(null);
(statearr_92567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92401.prototype.apply = (function (self__,args92404){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args92404)));
});

drop_dot.core_test.t_drop_dot$core_test92401.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_92688){
var state_val_92689 = (state_92688[(1)]);
if((state_val_92689 === (7))){
var inst_92583 = (state_92688[(7)]);
var inst_92593 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92594 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92595 = cljs.core.List.EMPTY;
var inst_92596 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92597 = cljs.core.cons.call(null,inst_92596,inst_92583);
var inst_92598 = cljs.core._conj.call(null,inst_92595,inst_92597);
var inst_92599 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92600 = cljs.core._conj.call(null,inst_92598,inst_92599);
var inst_92601 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92594,inst_92600,null];
var inst_92602 = cljs.core.PersistentHashMap.fromArrays(inst_92593,inst_92601);
var inst_92603 = cljs.test.do_report.call(null,inst_92602);
var state_92688__$1 = state_92688;
var statearr_92690_92754 = state_92688__$1;
(statearr_92690_92754[(2)] = inst_92603);

(statearr_92690_92754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (20))){
var inst_92661 = (state_92688[(8)]);
var inst_92664 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92665 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92666 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92661);
var inst_92667 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92665,inst_92666,null];
var inst_92668 = cljs.core.PersistentHashMap.fromArrays(inst_92664,inst_92667);
var inst_92669 = cljs.test.do_report.call(null,inst_92668);
var state_92688__$1 = state_92688;
var statearr_92691_92755 = state_92688__$1;
(statearr_92691_92755[(2)] = inst_92669);

(statearr_92691_92755[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (1))){
var inst_92568 = cljs.core.async.chan.call(null,(1));
var state_92688__$1 = (function (){var statearr_92692 = state_92688;
(statearr_92692[(9)] = inst_92568);

return statearr_92692;
})();
var statearr_92693_92756 = state_92688__$1;
(statearr_92693_92756[(2)] = null);

(statearr_92693_92756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92688,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92578 = cljs.core.List.EMPTY;
var inst_92579 = cljs.core._conj.call(null,inst_92578,"~/.TDD-this-file-in-dot-drop-dot");
var inst_92580 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_92688__$1 = (function (){var statearr_92694 = state_92688;
(statearr_92694[(10)] = inst_92579);

return statearr_92694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92688__$1,(5),inst_92580);
} else {
if((state_val_92689 === (15))){
var inst_92623 = (state_92688[(11)]);
var inst_92644 = (state_92688[(2)]);
var state_92688__$1 = (function (){var statearr_92695 = state_92688;
(statearr_92695[(12)] = inst_92644);

return statearr_92695;
})();
var statearr_92696_92757 = state_92688__$1;
(statearr_92696_92757[(2)] = inst_92623);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (21))){
var inst_92661 = (state_92688[(8)]);
var inst_92671 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92672 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92673 = cljs.core.List.EMPTY;
var inst_92674 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92675 = cljs.core.cons.call(null,inst_92674,inst_92661);
var inst_92676 = cljs.core._conj.call(null,inst_92673,inst_92675);
var inst_92677 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92678 = cljs.core._conj.call(null,inst_92676,inst_92677);
var inst_92679 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92672,inst_92678,null];
var inst_92680 = cljs.core.PersistentHashMap.fromArrays(inst_92671,inst_92679);
var inst_92681 = cljs.test.do_report.call(null,inst_92680);
var state_92688__$1 = state_92688;
var statearr_92697_92758 = state_92688__$1;
(statearr_92697_92758[(2)] = inst_92681);

(statearr_92697_92758[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (13))){
var inst_92622 = (state_92688[(13)]);
var inst_92625 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92626 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92627 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92622);
var inst_92628 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92626,inst_92627,null];
var inst_92629 = cljs.core.PersistentHashMap.fromArrays(inst_92625,inst_92628);
var inst_92630 = cljs.test.do_report.call(null,inst_92629);
var state_92688__$1 = state_92688;
var statearr_92698_92759 = state_92688__$1;
(statearr_92698_92759[(2)] = inst_92630);

(statearr_92698_92759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (22))){
var inst_92662 = (state_92688[(14)]);
var inst_92683 = (state_92688[(2)]);
var state_92688__$1 = (function (){var statearr_92699 = state_92688;
(statearr_92699[(15)] = inst_92683);

return statearr_92699;
})();
var statearr_92700_92760 = state_92688__$1;
(statearr_92700_92760[(2)] = inst_92662);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (6))){
var inst_92583 = (state_92688[(7)]);
var inst_92586 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92587 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92588 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92583);
var inst_92589 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92587,inst_92588,null];
var inst_92590 = cljs.core.PersistentHashMap.fromArrays(inst_92586,inst_92589);
var inst_92591 = cljs.test.do_report.call(null,inst_92590);
var state_92688__$1 = state_92688;
var statearr_92701_92761 = state_92688__$1;
(statearr_92701_92761[(2)] = inst_92591);

(statearr_92701_92761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (17))){
var inst_92647 = (state_92688[(2)]);
var inst_92648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92649 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92650 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92649,inst_92647,null];
var inst_92651 = cljs.core.PersistentHashMap.fromArrays(inst_92648,inst_92650);
var inst_92652 = cljs.test.do_report.call(null,inst_92651);
var state_92688__$1 = state_92688;
var statearr_92702_92762 = state_92688__$1;
(statearr_92702_92762[(2)] = inst_92652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (3))){
var inst_92569 = (state_92688[(2)]);
var inst_92570 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92571 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92572 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92571,inst_92569,null];
var inst_92573 = cljs.core.PersistentHashMap.fromArrays(inst_92570,inst_92572);
var inst_92574 = cljs.test.do_report.call(null,inst_92573);
var state_92688__$1 = state_92688;
var statearr_92703_92763 = state_92688__$1;
(statearr_92703_92763[(2)] = inst_92574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (12))){
var inst_92623 = (state_92688[(11)]);
var inst_92618 = (state_92688[(16)]);
var inst_92622 = (state_92688[(13)]);
var inst_92621 = (state_92688[(2)]);
var inst_92622__$1 = cljs.core._conj.call(null,inst_92618,inst_92621);
var inst_92623__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92622__$1);
var state_92688__$1 = (function (){var statearr_92704 = state_92688;
(statearr_92704[(11)] = inst_92623__$1);

(statearr_92704[(13)] = inst_92622__$1);

return statearr_92704;
})();
if(cljs.core.truth_(inst_92623__$1)){
var statearr_92705_92764 = state_92688__$1;
(statearr_92705_92764[(1)] = (13));

} else {
var statearr_92706_92765 = state_92688__$1;
(statearr_92706_92765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (2))){
var inst_92607 = (state_92688[(2)]);
var state_92688__$1 = (function (){var statearr_92707 = state_92688;
(statearr_92707[(17)] = inst_92607);

return statearr_92707;
})();
var statearr_92708_92766 = state_92688__$1;
(statearr_92708_92766[(2)] = null);

(statearr_92708_92766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (19))){
var inst_92661 = (state_92688[(8)]);
var inst_92662 = (state_92688[(14)]);
var inst_92657 = (state_92688[(18)]);
var inst_92660 = (state_92688[(2)]);
var inst_92661__$1 = cljs.core._conj.call(null,inst_92657,inst_92660);
var inst_92662__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92661__$1);
var state_92688__$1 = (function (){var statearr_92709 = state_92688;
(statearr_92709[(8)] = inst_92661__$1);

(statearr_92709[(14)] = inst_92662__$1);

return statearr_92709;
})();
if(cljs.core.truth_(inst_92662__$1)){
var statearr_92710_92767 = state_92688__$1;
(statearr_92710_92767[(1)] = (20));

} else {
var statearr_92711_92768 = state_92688__$1;
(statearr_92711_92768[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92688,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_92617 = cljs.core.List.EMPTY;
var inst_92618 = cljs.core._conj.call(null,inst_92617,"ERROR: ");
var inst_92619 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_92688__$1 = (function (){var statearr_92712 = state_92688;
(statearr_92712[(16)] = inst_92618);

return statearr_92712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92688__$1,(12),inst_92619);
} else {
if((state_val_92689 === (9))){
var inst_92646 = (state_92688[(2)]);
var state_92688__$1 = (function (){var statearr_92713 = state_92688;
(statearr_92713[(19)] = inst_92646);

return statearr_92713;
})();
var statearr_92714_92769 = state_92688__$1;
(statearr_92714_92769[(2)] = null);

(statearr_92714_92769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (5))){
var inst_92579 = (state_92688[(10)]);
var inst_92584 = (state_92688[(20)]);
var inst_92583 = (state_92688[(7)]);
var inst_92582 = (state_92688[(2)]);
var inst_92583__$1 = cljs.core._conj.call(null,inst_92579,inst_92582);
var inst_92584__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92583__$1);
var state_92688__$1 = (function (){var statearr_92715 = state_92688;
(statearr_92715[(20)] = inst_92584__$1);

(statearr_92715[(7)] = inst_92583__$1);

return statearr_92715;
})();
if(cljs.core.truth_(inst_92584__$1)){
var statearr_92716_92770 = state_92688__$1;
(statearr_92716_92770[(1)] = (6));

} else {
var statearr_92717_92771 = state_92688__$1;
(statearr_92717_92771[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (14))){
var inst_92622 = (state_92688[(13)]);
var inst_92632 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92633 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92634 = cljs.core.List.EMPTY;
var inst_92635 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92636 = cljs.core.cons.call(null,inst_92635,inst_92622);
var inst_92637 = cljs.core._conj.call(null,inst_92634,inst_92636);
var inst_92638 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92639 = cljs.core._conj.call(null,inst_92637,inst_92638);
var inst_92640 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92633,inst_92639,null];
var inst_92641 = cljs.core.PersistentHashMap.fromArrays(inst_92632,inst_92640);
var inst_92642 = cljs.test.do_report.call(null,inst_92641);
var state_92688__$1 = state_92688;
var statearr_92718_92772 = state_92688__$1;
(statearr_92718_92772[(2)] = inst_92642);

(statearr_92718_92772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (16))){
var inst_92685 = (state_92688[(2)]);
var inst_92686 = done.call(null);
var state_92688__$1 = (function (){var statearr_92719 = state_92688;
(statearr_92719[(21)] = inst_92685);

return statearr_92719;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92688__$1,inst_92686);
} else {
if((state_val_92689 === (10))){
var inst_92608 = (state_92688[(2)]);
var inst_92609 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92610 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92611 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92610,inst_92608,null];
var inst_92612 = cljs.core.PersistentHashMap.fromArrays(inst_92609,inst_92611);
var inst_92613 = cljs.test.do_report.call(null,inst_92612);
var state_92688__$1 = state_92688;
var statearr_92720_92773 = state_92688__$1;
(statearr_92720_92773[(2)] = inst_92613);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92689 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92688,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_92656 = cljs.core.List.EMPTY;
var inst_92657 = cljs.core._conj.call(null,inst_92656,"ERROR: ");
var inst_92658 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_92688__$1 = (function (){var statearr_92721 = state_92688;
(statearr_92721[(18)] = inst_92657);

return statearr_92721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92688__$1,(19),inst_92658);
} else {
if((state_val_92689 === (8))){
var inst_92584 = (state_92688[(20)]);
var inst_92605 = (state_92688[(2)]);
var state_92688__$1 = (function (){var statearr_92722 = state_92688;
(statearr_92722[(22)] = inst_92605);

return statearr_92722;
})();
var statearr_92723_92774 = state_92688__$1;
(statearr_92723_92774[(2)] = inst_92584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688__$1);

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
var statearr_92727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92727[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92727[(1)] = (1));

return statearr_92727;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92688){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92728){if((e92728 instanceof Object)){
var ex__9301__auto__ = e92728;
var statearr_92729_92775 = state_92688;
(statearr_92729_92775[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92776 = state_92688;
state_92688 = G__92776;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92688){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92730 = f__9319__auto__.call(null);
(statearr_92730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92402","meta92402",379560080,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test92401.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test92401.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test92401";

drop_dot.core_test.t_drop_dot$core_test92401.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test92401");
});

drop_dot.core_test.__GT_t_drop_dot$core_test92401 = (function drop_dot$core_test$__GT_t_drop_dot$core_test92401(meta92402){
return (new drop_dot.core_test.t_drop_dot$core_test92401(meta92402));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test92401(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test92777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test92777 = (function (meta92778){
this.meta92778 = meta92778;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test92777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92779,meta92778__$1){
var self__ = this;
var _92779__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test92777(meta92778__$1));
});

drop_dot.core_test.t_drop_dot$core_test92777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92779){
var self__ = this;
var _92779__$1 = this;
return self__.meta92778;
});

drop_dot.core_test.t_drop_dot$core_test92777.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test92777.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_92822){
var state_val_92823 = (state_92822[(1)]);
if((state_val_92823 === (1))){
var state_92822__$1 = state_92822;
var statearr_92824_92903 = state_92822__$1;
(statearr_92824_92903[(2)] = null);

(statearr_92824_92903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92823 === (2))){
var inst_92819 = (state_92822[(2)]);
var inst_92820 = done.call(null);
var state_92822__$1 = (function (){var statearr_92825 = state_92822;
(statearr_92825[(7)] = inst_92819);

return statearr_92825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92822__$1,inst_92820);
} else {
if((state_val_92823 === (3))){
var inst_92781 = (state_92822[(2)]);
var inst_92782 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92783 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92784 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92783,inst_92781,null];
var inst_92785 = cljs.core.PersistentHashMap.fromArrays(inst_92782,inst_92784);
var inst_92786 = cljs.test.do_report.call(null,inst_92785);
var state_92822__$1 = state_92822;
var statearr_92826_92904 = state_92822__$1;
(statearr_92826_92904[(2)] = inst_92786);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92823 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92822,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92790 = cljs.core.List.EMPTY;
var inst_92791 = cljs.core._conj.call(null,inst_92790,true);
var inst_92792 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_92822__$1 = (function (){var statearr_92827 = state_92822;
(statearr_92827[(8)] = inst_92791);

return statearr_92827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92822__$1,(5),inst_92792);
} else {
if((state_val_92823 === (5))){
var inst_92796 = (state_92822[(9)]);
var inst_92795 = (state_92822[(10)]);
var inst_92791 = (state_92822[(8)]);
var inst_92794 = (state_92822[(2)]);
var inst_92795__$1 = cljs.core._conj.call(null,inst_92791,inst_92794);
var inst_92796__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92795__$1);
var state_92822__$1 = (function (){var statearr_92828 = state_92822;
(statearr_92828[(9)] = inst_92796__$1);

(statearr_92828[(10)] = inst_92795__$1);

return statearr_92828;
})();
if(cljs.core.truth_(inst_92796__$1)){
var statearr_92829_92905 = state_92822__$1;
(statearr_92829_92905[(1)] = (6));

} else {
var statearr_92830_92906 = state_92822__$1;
(statearr_92830_92906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92823 === (6))){
var inst_92795 = (state_92822[(10)]);
var inst_92798 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92799 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92800 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92795);
var inst_92801 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92799,inst_92800,null];
var inst_92802 = cljs.core.PersistentHashMap.fromArrays(inst_92798,inst_92801);
var inst_92803 = cljs.test.do_report.call(null,inst_92802);
var state_92822__$1 = state_92822;
var statearr_92831_92907 = state_92822__$1;
(statearr_92831_92907[(2)] = inst_92803);

(statearr_92831_92907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92823 === (7))){
var inst_92795 = (state_92822[(10)]);
var inst_92805 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92806 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92807 = cljs.core.List.EMPTY;
var inst_92808 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92809 = cljs.core.cons.call(null,inst_92808,inst_92795);
var inst_92810 = cljs.core._conj.call(null,inst_92807,inst_92809);
var inst_92811 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92812 = cljs.core._conj.call(null,inst_92810,inst_92811);
var inst_92813 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92806,inst_92812,null];
var inst_92814 = cljs.core.PersistentHashMap.fromArrays(inst_92805,inst_92813);
var inst_92815 = cljs.test.do_report.call(null,inst_92814);
var state_92822__$1 = state_92822;
var statearr_92832_92908 = state_92822__$1;
(statearr_92832_92908[(2)] = inst_92815);

(statearr_92832_92908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92823 === (8))){
var inst_92796 = (state_92822[(9)]);
var inst_92817 = (state_92822[(2)]);
var state_92822__$1 = (function (){var statearr_92833 = state_92822;
(statearr_92833[(11)] = inst_92817);

return statearr_92833;
})();
var statearr_92834_92909 = state_92822__$1;
(statearr_92834_92909[(2)] = inst_92796);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92822__$1);

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
var statearr_92838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92838[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92838[(1)] = (1));

return statearr_92838;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92822){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92839){if((e92839 instanceof Object)){
var ex__9301__auto__ = e92839;
var statearr_92840_92910 = state_92822;
(statearr_92840_92910[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92911 = state_92822;
state_92822 = G__92911;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92822){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92841 = f__9319__auto__.call(null);
(statearr_92841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test92777.prototype.apply = (function (self__,args92780){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args92780)));
});

drop_dot.core_test.t_drop_dot$core_test92777.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_92883){
var state_val_92884 = (state_92883[(1)]);
if((state_val_92884 === (1))){
var state_92883__$1 = state_92883;
var statearr_92885_92912 = state_92883__$1;
(statearr_92885_92912[(2)] = null);

(statearr_92885_92912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92884 === (2))){
var inst_92880 = (state_92883[(2)]);
var inst_92881 = done.call(null);
var state_92883__$1 = (function (){var statearr_92886 = state_92883;
(statearr_92886[(7)] = inst_92880);

return statearr_92886;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92883__$1,inst_92881);
} else {
if((state_val_92884 === (3))){
var inst_92842 = (state_92883[(2)]);
var inst_92843 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92844 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92845 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92844,inst_92842,null];
var inst_92846 = cljs.core.PersistentHashMap.fromArrays(inst_92843,inst_92845);
var inst_92847 = cljs.test.do_report.call(null,inst_92846);
var state_92883__$1 = state_92883;
var statearr_92887_92913 = state_92883__$1;
(statearr_92887_92913[(2)] = inst_92847);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92883__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92884 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92883,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92851 = cljs.core.List.EMPTY;
var inst_92852 = cljs.core._conj.call(null,inst_92851,true);
var inst_92853 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_92883__$1 = (function (){var statearr_92888 = state_92883;
(statearr_92888[(8)] = inst_92852);

return statearr_92888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92883__$1,(5),inst_92853);
} else {
if((state_val_92884 === (5))){
var inst_92852 = (state_92883[(8)]);
var inst_92856 = (state_92883[(9)]);
var inst_92857 = (state_92883[(10)]);
var inst_92855 = (state_92883[(2)]);
var inst_92856__$1 = cljs.core._conj.call(null,inst_92852,inst_92855);
var inst_92857__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92856__$1);
var state_92883__$1 = (function (){var statearr_92889 = state_92883;
(statearr_92889[(9)] = inst_92856__$1);

(statearr_92889[(10)] = inst_92857__$1);

return statearr_92889;
})();
if(cljs.core.truth_(inst_92857__$1)){
var statearr_92890_92914 = state_92883__$1;
(statearr_92890_92914[(1)] = (6));

} else {
var statearr_92891_92915 = state_92883__$1;
(statearr_92891_92915[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92884 === (6))){
var inst_92856 = (state_92883[(9)]);
var inst_92859 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92860 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92861 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92856);
var inst_92862 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92860,inst_92861,null];
var inst_92863 = cljs.core.PersistentHashMap.fromArrays(inst_92859,inst_92862);
var inst_92864 = cljs.test.do_report.call(null,inst_92863);
var state_92883__$1 = state_92883;
var statearr_92892_92916 = state_92883__$1;
(statearr_92892_92916[(2)] = inst_92864);

(statearr_92892_92916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92884 === (7))){
var inst_92856 = (state_92883[(9)]);
var inst_92866 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92867 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92868 = cljs.core.List.EMPTY;
var inst_92869 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92870 = cljs.core.cons.call(null,inst_92869,inst_92856);
var inst_92871 = cljs.core._conj.call(null,inst_92868,inst_92870);
var inst_92872 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92873 = cljs.core._conj.call(null,inst_92871,inst_92872);
var inst_92874 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92867,inst_92873,null];
var inst_92875 = cljs.core.PersistentHashMap.fromArrays(inst_92866,inst_92874);
var inst_92876 = cljs.test.do_report.call(null,inst_92875);
var state_92883__$1 = state_92883;
var statearr_92893_92917 = state_92883__$1;
(statearr_92893_92917[(2)] = inst_92876);

(statearr_92893_92917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92884 === (8))){
var inst_92857 = (state_92883[(10)]);
var inst_92878 = (state_92883[(2)]);
var state_92883__$1 = (function (){var statearr_92894 = state_92883;
(statearr_92894[(11)] = inst_92878);

return statearr_92894;
})();
var statearr_92895_92918 = state_92883__$1;
(statearr_92895_92918[(2)] = inst_92857);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92883__$1);

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
var statearr_92899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92899[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92899[(1)] = (1));

return statearr_92899;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92883){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92900){if((e92900 instanceof Object)){
var ex__9301__auto__ = e92900;
var statearr_92901_92919 = state_92883;
(statearr_92901_92919[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92920 = state_92883;
state_92883 = G__92920;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92883){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92902 = f__9319__auto__.call(null);
(statearr_92902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test92777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92778","meta92778",4736385,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test92777.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test92777.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test92777";

drop_dot.core_test.t_drop_dot$core_test92777.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test92777");
});

drop_dot.core_test.__GT_t_drop_dot$core_test92777 = (function drop_dot$core_test$__GT_t_drop_dot$core_test92777(meta92778){
return (new drop_dot.core_test.t_drop_dot$core_test92777(meta92778));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test92777(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__10576__auto___92924 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_installed_QMARK_.call(null));
var result__10577__auto___92925 = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto___92924);
if(cljs.core.truth_(result__10577__auto___92925)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto___92924),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto___92924)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e92921){var t__10614__auto___92926 = e92921;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto___92926,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10576__auto___92927 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__10577__auto___92928 = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto___92927);
if(cljs.core.truth_(result__10577__auto___92928)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto___92927),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto___92927)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e92922){var t__10614__auto___92929 = e92922;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto___92929,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10576__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__10577__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10576__auto__);
if(cljs.core.truth_(result__10577__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10576__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10576__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10577__auto__;
}catch (e92923){var t__10614__auto__ = e92923;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__10614__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"test/drop_dot/core_test.cljs",27,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map