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
if(typeof drop_dot.core_test.t_drop_dot$core_test25290 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test25290 = (function (meta25291){
this.meta25291 = meta25291;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test25290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25292,meta25291__$1){
var self__ = this;
var _25292__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test25290(meta25291__$1));
});

drop_dot.core_test.t_drop_dot$core_test25290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25292){
var self__ = this;
var _25292__$1 = this;
return self__.meta25291;
});

drop_dot.core_test.t_drop_dot$core_test25290.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test25290.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (7))){
var inst_25314 = (state_25431[(7)]);
var inst_25324 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25325 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_25326 = cljs.core.List.EMPTY;
var inst_25327 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_25328 = cljs.core.cons.call(null,inst_25327,inst_25314);
var inst_25329 = cljs.core._conj.call(null,inst_25326,inst_25328);
var inst_25330 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25331 = cljs.core._conj.call(null,inst_25329,inst_25330);
var inst_25332 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25325,inst_25331,null];
var inst_25333 = cljs.core.PersistentHashMap.fromArrays(inst_25324,inst_25332);
var inst_25334 = cljs.test.do_report.call(null,inst_25333);
var state_25431__$1 = state_25431;
var statearr_25433_25694 = state_25431__$1;
(statearr_25433_25694[(2)] = inst_25334);

(statearr_25433_25694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (20))){
var inst_25404 = (state_25431[(8)]);
var inst_25407 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25408 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_25409 = cljs.core.cons.call(null,cljs.core._EQ_,inst_25404);
var inst_25410 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25408,inst_25409,null];
var inst_25411 = cljs.core.PersistentHashMap.fromArrays(inst_25407,inst_25410);
var inst_25412 = cljs.test.do_report.call(null,inst_25411);
var state_25431__$1 = state_25431;
var statearr_25434_25695 = state_25431__$1;
(statearr_25434_25695[(2)] = inst_25412);

(statearr_25434_25695[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (1))){
var state_25431__$1 = state_25431;
var statearr_25435_25696 = state_25431__$1;
(statearr_25435_25696[(2)] = null);

(statearr_25435_25696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25431,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_25303 = cljs.core.List.EMPTY;
var inst_25304 = cljs.core._conj.call(null,inst_25303,"ERROR:");
var inst_25308 = cljs.core.async.chan.call(null,(1));
var inst_25309 = (function (){var c__9318__auto____$1 = inst_25308;
return ((function (c__9318__auto____$1,_,inst_25303,inst_25304,inst_25308,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25303,inst_25304,inst_25308,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25306){
var state_val_25307 = (state_25306[(1)]);
if((state_val_25307 === (1))){
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25306__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25303,inst_25304,inst_25308,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25303,inst_25304,inst_25308,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25439 = [null,null,null,null,null,null,null];
(statearr_25439[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25439[(1)] = (1));

return statearr_25439;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25306){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25440){if((e25440 instanceof Object)){
var ex__9301__auto__ = e25440;
var statearr_25441_25697 = state_25306;
(statearr_25441_25697[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25698 = state_25306;
state_25306 = G__25698;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25303,inst_25304,inst_25308,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25442 = f__9319__auto__.call(null);
(statearr_25442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25303,inst_25304,inst_25308,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_25310 = cljs.core.async.impl.dispatch.run.call(null,inst_25309);
var inst_25311 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_25308);
var state_25431__$1 = (function (){var statearr_25443 = state_25431;
(statearr_25443[(9)] = inst_25304);

(statearr_25443[(10)] = inst_25310);

return statearr_25443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(5),inst_25311);
} else {
if((state_val_25432 === (15))){
var inst_25360 = (state_25431[(11)]);
var inst_25381 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25444 = state_25431;
(statearr_25444[(12)] = inst_25381);

return statearr_25444;
})();
var statearr_25445_25699 = state_25431__$1;
(statearr_25445_25699[(2)] = inst_25360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (21))){
var inst_25404 = (state_25431[(8)]);
var inst_25414 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25415 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_25416 = cljs.core.List.EMPTY;
var inst_25417 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_25418 = cljs.core.cons.call(null,inst_25417,inst_25404);
var inst_25419 = cljs.core._conj.call(null,inst_25416,inst_25418);
var inst_25420 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25421 = cljs.core._conj.call(null,inst_25419,inst_25420);
var inst_25422 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25415,inst_25421,null];
var inst_25423 = cljs.core.PersistentHashMap.fromArrays(inst_25414,inst_25422);
var inst_25424 = cljs.test.do_report.call(null,inst_25423);
var state_25431__$1 = state_25431;
var statearr_25446_25700 = state_25431__$1;
(statearr_25446_25700[(2)] = inst_25424);

(statearr_25446_25700[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (13))){
var inst_25359 = (state_25431[(13)]);
var inst_25362 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25363 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_25364 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_25359);
var inst_25365 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25363,inst_25364,null];
var inst_25366 = cljs.core.PersistentHashMap.fromArrays(inst_25362,inst_25365);
var inst_25367 = cljs.test.do_report.call(null,inst_25366);
var state_25431__$1 = state_25431;
var statearr_25447_25701 = state_25431__$1;
(statearr_25447_25701[(2)] = inst_25367);

(statearr_25447_25701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (22))){
var inst_25405 = (state_25431[(14)]);
var inst_25426 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25448 = state_25431;
(statearr_25448[(15)] = inst_25426);

return statearr_25448;
})();
var statearr_25449_25702 = state_25431__$1;
(statearr_25449_25702[(2)] = inst_25405);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var inst_25314 = (state_25431[(7)]);
var inst_25317 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25318 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_25319 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_25314);
var inst_25320 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25318,inst_25319,null];
var inst_25321 = cljs.core.PersistentHashMap.fromArrays(inst_25317,inst_25320);
var inst_25322 = cljs.test.do_report.call(null,inst_25321);
var state_25431__$1 = state_25431;
var statearr_25450_25703 = state_25431__$1;
(statearr_25450_25703[(2)] = inst_25322);

(statearr_25450_25703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (17))){
var inst_25384 = (state_25431[(2)]);
var inst_25385 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25386 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_25387 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25386,inst_25384,null];
var inst_25388 = cljs.core.PersistentHashMap.fromArrays(inst_25385,inst_25387);
var inst_25389 = cljs.test.do_report.call(null,inst_25388);
var state_25431__$1 = state_25431;
var statearr_25451_25704 = state_25431__$1;
(statearr_25451_25704[(2)] = inst_25389);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (3))){
var inst_25294 = (state_25431[(2)]);
var inst_25295 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25296 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_25297 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25296,inst_25294,null];
var inst_25298 = cljs.core.PersistentHashMap.fromArrays(inst_25295,inst_25297);
var inst_25299 = cljs.test.do_report.call(null,inst_25298);
var state_25431__$1 = state_25431;
var statearr_25452_25705 = state_25431__$1;
(statearr_25452_25705[(2)] = inst_25299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (12))){
var inst_25360 = (state_25431[(11)]);
var inst_25349 = (state_25431[(16)]);
var inst_25359 = (state_25431[(13)]);
var inst_25358 = (state_25431[(2)]);
var inst_25359__$1 = cljs.core._conj.call(null,inst_25349,inst_25358);
var inst_25360__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_25359__$1);
var state_25431__$1 = (function (){var statearr_25453 = state_25431;
(statearr_25453[(11)] = inst_25360__$1);

(statearr_25453[(13)] = inst_25359__$1);

return statearr_25453;
})();
if(cljs.core.truth_(inst_25360__$1)){
var statearr_25454_25706 = state_25431__$1;
(statearr_25454_25706[(1)] = (13));

} else {
var statearr_25455_25707 = state_25431__$1;
(statearr_25455_25707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (2))){
var inst_25338 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25456 = state_25431;
(statearr_25456[(17)] = inst_25338);

return statearr_25456;
})();
var statearr_25457_25708 = state_25431__$1;
(statearr_25457_25708[(2)] = null);

(statearr_25457_25708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (19))){
var inst_25405 = (state_25431[(14)]);
var inst_25394 = (state_25431[(18)]);
var inst_25404 = (state_25431[(8)]);
var inst_25403 = (state_25431[(2)]);
var inst_25404__$1 = cljs.core._conj.call(null,inst_25394,inst_25403);
var inst_25405__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_25404__$1);
var state_25431__$1 = (function (){var statearr_25458 = state_25431;
(statearr_25458[(14)] = inst_25405__$1);

(statearr_25458[(8)] = inst_25404__$1);

return statearr_25458;
})();
if(cljs.core.truth_(inst_25405__$1)){
var statearr_25459_25709 = state_25431__$1;
(statearr_25459_25709[(1)] = (20));

} else {
var statearr_25460_25710 = state_25431__$1;
(statearr_25460_25710[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25431,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_25348 = cljs.core.List.EMPTY;
var inst_25349 = cljs.core._conj.call(null,inst_25348,"ERROR: ");
var inst_25353 = cljs.core.async.chan.call(null,(1));
var inst_25354 = (function (){var c__9318__auto____$1 = inst_25353;
return ((function (c__9318__auto____$1,_,inst_25348,inst_25349,inst_25353,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25348,inst_25349,inst_25353,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25351){
var state_val_25352 = (state_25351[(1)]);
if((state_val_25352 === (1))){
var state_25351__$1 = state_25351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25351__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25348,inst_25349,inst_25353,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25348,inst_25349,inst_25353,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25464 = [null,null,null,null,null,null,null];
(statearr_25464[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25464[(1)] = (1));

return statearr_25464;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25351){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25465){if((e25465 instanceof Object)){
var ex__9301__auto__ = e25465;
var statearr_25466_25711 = state_25351;
(statearr_25466_25711[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25712 = state_25351;
state_25351 = G__25712;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25351){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25348,inst_25349,inst_25353,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25467 = f__9319__auto__.call(null);
(statearr_25467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25348,inst_25349,inst_25353,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_25355 = cljs.core.async.impl.dispatch.run.call(null,inst_25354);
var inst_25356 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_25353);
var state_25431__$1 = (function (){var statearr_25468 = state_25431;
(statearr_25468[(16)] = inst_25349);

(statearr_25468[(19)] = inst_25355);

return statearr_25468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(12),inst_25356);
} else {
if((state_val_25432 === (9))){
var inst_25383 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25469 = state_25431;
(statearr_25469[(20)] = inst_25383);

return statearr_25469;
})();
var statearr_25470_25713 = state_25431__$1;
(statearr_25470_25713[(2)] = null);

(statearr_25470_25713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (5))){
var inst_25304 = (state_25431[(9)]);
var inst_25315 = (state_25431[(21)]);
var inst_25314 = (state_25431[(7)]);
var inst_25313 = (state_25431[(2)]);
var inst_25314__$1 = cljs.core._conj.call(null,inst_25304,inst_25313);
var inst_25315__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_25314__$1);
var state_25431__$1 = (function (){var statearr_25471 = state_25431;
(statearr_25471[(21)] = inst_25315__$1);

(statearr_25471[(7)] = inst_25314__$1);

return statearr_25471;
})();
if(cljs.core.truth_(inst_25315__$1)){
var statearr_25472_25714 = state_25431__$1;
(statearr_25472_25714[(1)] = (6));

} else {
var statearr_25473_25715 = state_25431__$1;
(statearr_25473_25715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (14))){
var inst_25359 = (state_25431[(13)]);
var inst_25369 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25370 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_25371 = cljs.core.List.EMPTY;
var inst_25372 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_25373 = cljs.core.cons.call(null,inst_25372,inst_25359);
var inst_25374 = cljs.core._conj.call(null,inst_25371,inst_25373);
var inst_25375 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25376 = cljs.core._conj.call(null,inst_25374,inst_25375);
var inst_25377 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25370,inst_25376,null];
var inst_25378 = cljs.core.PersistentHashMap.fromArrays(inst_25369,inst_25377);
var inst_25379 = cljs.test.do_report.call(null,inst_25378);
var state_25431__$1 = state_25431;
var statearr_25474_25716 = state_25431__$1;
(statearr_25474_25716[(2)] = inst_25379);

(statearr_25474_25716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (16))){
var inst_25428 = (state_25431[(2)]);
var inst_25429 = done.call(null);
var state_25431__$1 = (function (){var statearr_25475 = state_25431;
(statearr_25475[(22)] = inst_25428);

return statearr_25475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (10))){
var inst_25339 = (state_25431[(2)]);
var inst_25340 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25341 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_25342 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25341,inst_25339,null];
var inst_25343 = cljs.core.PersistentHashMap.fromArrays(inst_25340,inst_25342);
var inst_25344 = cljs.test.do_report.call(null,inst_25343);
var state_25431__$1 = state_25431;
var statearr_25476_25717 = state_25431__$1;
(statearr_25476_25717[(2)] = inst_25344);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25431,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_25393 = cljs.core.List.EMPTY;
var inst_25394 = cljs.core._conj.call(null,inst_25393,"~/.in-drop-dot-only");
var inst_25398 = cljs.core.async.chan.call(null,(1));
var inst_25399 = (function (){var c__9318__auto____$1 = inst_25398;
return ((function (c__9318__auto____$1,_,inst_25393,inst_25394,inst_25398,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25393,inst_25394,inst_25398,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25396){
var state_val_25397 = (state_25396[(1)]);
if((state_val_25397 === (1))){
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25396__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25393,inst_25394,inst_25398,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25393,inst_25394,inst_25398,state_val_25432,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25480 = [null,null,null,null,null,null,null];
(statearr_25480[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25480[(1)] = (1));

return statearr_25480;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25396){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25481){if((e25481 instanceof Object)){
var ex__9301__auto__ = e25481;
var statearr_25482_25718 = state_25396;
(statearr_25482_25718[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25719 = state_25396;
state_25396 = G__25719;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25396){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25393,inst_25394,inst_25398,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25483 = f__9319__auto__.call(null);
(statearr_25483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25393,inst_25394,inst_25398,state_val_25432,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_25400 = cljs.core.async.impl.dispatch.run.call(null,inst_25399);
var inst_25401 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_25398);
var state_25431__$1 = (function (){var statearr_25484 = state_25431;
(statearr_25484[(23)] = inst_25400);

(statearr_25484[(18)] = inst_25394);

return statearr_25484;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(19),inst_25401);
} else {
if((state_val_25432 === (8))){
var inst_25315 = (state_25431[(21)]);
var inst_25336 = (state_25431[(2)]);
var state_25431__$1 = (function (){var statearr_25485 = state_25431;
(statearr_25485[(24)] = inst_25336);

return statearr_25485;
})();
var statearr_25486_25720 = state_25431__$1;
(statearr_25486_25720[(2)] = inst_25315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431__$1);

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
var statearr_25490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25490[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25490[(1)] = (1));

return statearr_25490;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25431){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25491){if((e25491 instanceof Object)){
var ex__9301__auto__ = e25491;
var statearr_25492_25721 = state_25431;
(statearr_25492_25721[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25722 = state_25431;
state_25431 = G__25722;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25493 = f__9319__auto__.call(null);
(statearr_25493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_25493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test25290.prototype.apply = (function (self__,args25293){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25293)));
});

drop_dot.core_test.t_drop_dot$core_test25290.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_25631){
var state_val_25632 = (state_25631[(1)]);
if((state_val_25632 === (7))){
var inst_25514 = (state_25631[(7)]);
var inst_25524 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25525 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_25526 = cljs.core.List.EMPTY;
var inst_25527 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_25528 = cljs.core.cons.call(null,inst_25527,inst_25514);
var inst_25529 = cljs.core._conj.call(null,inst_25526,inst_25528);
var inst_25530 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25531 = cljs.core._conj.call(null,inst_25529,inst_25530);
var inst_25532 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25525,inst_25531,null];
var inst_25533 = cljs.core.PersistentHashMap.fromArrays(inst_25524,inst_25532);
var inst_25534 = cljs.test.do_report.call(null,inst_25533);
var state_25631__$1 = state_25631;
var statearr_25633_25723 = state_25631__$1;
(statearr_25633_25723[(2)] = inst_25534);

(statearr_25633_25723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (20))){
var inst_25604 = (state_25631[(8)]);
var inst_25607 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25608 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_25609 = cljs.core.cons.call(null,cljs.core._EQ_,inst_25604);
var inst_25610 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25608,inst_25609,null];
var inst_25611 = cljs.core.PersistentHashMap.fromArrays(inst_25607,inst_25610);
var inst_25612 = cljs.test.do_report.call(null,inst_25611);
var state_25631__$1 = state_25631;
var statearr_25634_25724 = state_25631__$1;
(statearr_25634_25724[(2)] = inst_25612);

(statearr_25634_25724[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (1))){
var state_25631__$1 = state_25631;
var statearr_25635_25725 = state_25631__$1;
(statearr_25635_25725[(2)] = null);

(statearr_25635_25725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25631,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_25503 = cljs.core.List.EMPTY;
var inst_25504 = cljs.core._conj.call(null,inst_25503,"ERROR:");
var inst_25508 = cljs.core.async.chan.call(null,(1));
var inst_25509 = (function (){var c__9318__auto____$1 = inst_25508;
return ((function (c__9318__auto____$1,_,inst_25503,inst_25504,inst_25508,state_val_25632,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25503,inst_25504,inst_25508,state_val_25632,c__9318__auto__,___10644__auto__){
return (function (state_25506){
var state_val_25507 = (state_25506[(1)]);
if((state_val_25507 === (1))){
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25506__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25503,inst_25504,inst_25508,state_val_25632,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25503,inst_25504,inst_25508,state_val_25632,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25639 = [null,null,null,null,null,null,null];
(statearr_25639[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25639[(1)] = (1));

return statearr_25639;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25506){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25640){if((e25640 instanceof Object)){
var ex__9301__auto__ = e25640;
var statearr_25641_25726 = state_25506;
(statearr_25641_25726[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25727 = state_25506;
state_25506 = G__25727;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25506){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25503,inst_25504,inst_25508,state_val_25632,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_25642 = f__9319__auto__.call(null);
(statearr_25642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25503,inst_25504,inst_25508,state_val_25632,c__9318__auto__,___10644__auto__))
})();
var inst_25510 = cljs.core.async.impl.dispatch.run.call(null,inst_25509);
var inst_25511 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_25508);
var state_25631__$1 = (function (){var statearr_25643 = state_25631;
(statearr_25643[(9)] = inst_25510);

(statearr_25643[(10)] = inst_25504);

return statearr_25643;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25631__$1,(5),inst_25511);
} else {
if((state_val_25632 === (15))){
var inst_25560 = (state_25631[(11)]);
var inst_25581 = (state_25631[(2)]);
var state_25631__$1 = (function (){var statearr_25644 = state_25631;
(statearr_25644[(12)] = inst_25581);

return statearr_25644;
})();
var statearr_25645_25728 = state_25631__$1;
(statearr_25645_25728[(2)] = inst_25560);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (21))){
var inst_25604 = (state_25631[(8)]);
var inst_25614 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25615 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_25616 = cljs.core.List.EMPTY;
var inst_25617 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_25618 = cljs.core.cons.call(null,inst_25617,inst_25604);
var inst_25619 = cljs.core._conj.call(null,inst_25616,inst_25618);
var inst_25620 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25621 = cljs.core._conj.call(null,inst_25619,inst_25620);
var inst_25622 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25615,inst_25621,null];
var inst_25623 = cljs.core.PersistentHashMap.fromArrays(inst_25614,inst_25622);
var inst_25624 = cljs.test.do_report.call(null,inst_25623);
var state_25631__$1 = state_25631;
var statearr_25646_25729 = state_25631__$1;
(statearr_25646_25729[(2)] = inst_25624);

(statearr_25646_25729[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (13))){
var inst_25559 = (state_25631[(13)]);
var inst_25562 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25563 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_25564 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_25559);
var inst_25565 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25563,inst_25564,null];
var inst_25566 = cljs.core.PersistentHashMap.fromArrays(inst_25562,inst_25565);
var inst_25567 = cljs.test.do_report.call(null,inst_25566);
var state_25631__$1 = state_25631;
var statearr_25647_25730 = state_25631__$1;
(statearr_25647_25730[(2)] = inst_25567);

(statearr_25647_25730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (22))){
var inst_25605 = (state_25631[(14)]);
var inst_25626 = (state_25631[(2)]);
var state_25631__$1 = (function (){var statearr_25648 = state_25631;
(statearr_25648[(15)] = inst_25626);

return statearr_25648;
})();
var statearr_25649_25731 = state_25631__$1;
(statearr_25649_25731[(2)] = inst_25605);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (6))){
var inst_25514 = (state_25631[(7)]);
var inst_25517 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25518 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_25519 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_25514);
var inst_25520 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25518,inst_25519,null];
var inst_25521 = cljs.core.PersistentHashMap.fromArrays(inst_25517,inst_25520);
var inst_25522 = cljs.test.do_report.call(null,inst_25521);
var state_25631__$1 = state_25631;
var statearr_25650_25732 = state_25631__$1;
(statearr_25650_25732[(2)] = inst_25522);

(statearr_25650_25732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (17))){
var inst_25584 = (state_25631[(2)]);
var inst_25585 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25586 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_25587 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25586,inst_25584,null];
var inst_25588 = cljs.core.PersistentHashMap.fromArrays(inst_25585,inst_25587);
var inst_25589 = cljs.test.do_report.call(null,inst_25588);
var state_25631__$1 = state_25631;
var statearr_25651_25733 = state_25631__$1;
(statearr_25651_25733[(2)] = inst_25589);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (3))){
var inst_25494 = (state_25631[(2)]);
var inst_25495 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25496 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_25497 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25496,inst_25494,null];
var inst_25498 = cljs.core.PersistentHashMap.fromArrays(inst_25495,inst_25497);
var inst_25499 = cljs.test.do_report.call(null,inst_25498);
var state_25631__$1 = state_25631;
var statearr_25652_25734 = state_25631__$1;
(statearr_25652_25734[(2)] = inst_25499);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (12))){
var inst_25549 = (state_25631[(16)]);
var inst_25559 = (state_25631[(13)]);
var inst_25560 = (state_25631[(11)]);
var inst_25558 = (state_25631[(2)]);
var inst_25559__$1 = cljs.core._conj.call(null,inst_25549,inst_25558);
var inst_25560__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_25559__$1);
var state_25631__$1 = (function (){var statearr_25653 = state_25631;
(statearr_25653[(13)] = inst_25559__$1);

(statearr_25653[(11)] = inst_25560__$1);

return statearr_25653;
})();
if(cljs.core.truth_(inst_25560__$1)){
var statearr_25654_25735 = state_25631__$1;
(statearr_25654_25735[(1)] = (13));

} else {
var statearr_25655_25736 = state_25631__$1;
(statearr_25655_25736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (2))){
var inst_25538 = (state_25631[(2)]);
var state_25631__$1 = (function (){var statearr_25656 = state_25631;
(statearr_25656[(17)] = inst_25538);

return statearr_25656;
})();
var statearr_25657_25737 = state_25631__$1;
(statearr_25657_25737[(2)] = null);

(statearr_25657_25737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (19))){
var inst_25604 = (state_25631[(8)]);
var inst_25594 = (state_25631[(18)]);
var inst_25605 = (state_25631[(14)]);
var inst_25603 = (state_25631[(2)]);
var inst_25604__$1 = cljs.core._conj.call(null,inst_25594,inst_25603);
var inst_25605__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_25604__$1);
var state_25631__$1 = (function (){var statearr_25658 = state_25631;
(statearr_25658[(8)] = inst_25604__$1);

(statearr_25658[(14)] = inst_25605__$1);

return statearr_25658;
})();
if(cljs.core.truth_(inst_25605__$1)){
var statearr_25659_25738 = state_25631__$1;
(statearr_25659_25738[(1)] = (20));

} else {
var statearr_25660_25739 = state_25631__$1;
(statearr_25660_25739[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25631,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_25548 = cljs.core.List.EMPTY;
var inst_25549 = cljs.core._conj.call(null,inst_25548,"ERROR: ");
var inst_25553 = cljs.core.async.chan.call(null,(1));
var inst_25554 = (function (){var c__9318__auto____$1 = inst_25553;
return ((function (c__9318__auto____$1,_,inst_25548,inst_25549,inst_25553,state_val_25632,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25548,inst_25549,inst_25553,state_val_25632,c__9318__auto__,___10644__auto__){
return (function (state_25551){
var state_val_25552 = (state_25551[(1)]);
if((state_val_25552 === (1))){
var state_25551__$1 = state_25551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25551__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25548,inst_25549,inst_25553,state_val_25632,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25548,inst_25549,inst_25553,state_val_25632,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25664 = [null,null,null,null,null,null,null];
(statearr_25664[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25664[(1)] = (1));

return statearr_25664;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25551){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25665){if((e25665 instanceof Object)){
var ex__9301__auto__ = e25665;
var statearr_25666_25740 = state_25551;
(statearr_25666_25740[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25741 = state_25551;
state_25551 = G__25741;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25551){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25548,inst_25549,inst_25553,state_val_25632,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_25667 = f__9319__auto__.call(null);
(statearr_25667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25548,inst_25549,inst_25553,state_val_25632,c__9318__auto__,___10644__auto__))
})();
var inst_25555 = cljs.core.async.impl.dispatch.run.call(null,inst_25554);
var inst_25556 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_25553);
var state_25631__$1 = (function (){var statearr_25668 = state_25631;
(statearr_25668[(19)] = inst_25555);

(statearr_25668[(16)] = inst_25549);

return statearr_25668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25631__$1,(12),inst_25556);
} else {
if((state_val_25632 === (9))){
var inst_25583 = (state_25631[(2)]);
var state_25631__$1 = (function (){var statearr_25669 = state_25631;
(statearr_25669[(20)] = inst_25583);

return statearr_25669;
})();
var statearr_25670_25742 = state_25631__$1;
(statearr_25670_25742[(2)] = null);

(statearr_25670_25742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (5))){
var inst_25514 = (state_25631[(7)]);
var inst_25515 = (state_25631[(21)]);
var inst_25504 = (state_25631[(10)]);
var inst_25513 = (state_25631[(2)]);
var inst_25514__$1 = cljs.core._conj.call(null,inst_25504,inst_25513);
var inst_25515__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_25514__$1);
var state_25631__$1 = (function (){var statearr_25671 = state_25631;
(statearr_25671[(7)] = inst_25514__$1);

(statearr_25671[(21)] = inst_25515__$1);

return statearr_25671;
})();
if(cljs.core.truth_(inst_25515__$1)){
var statearr_25672_25743 = state_25631__$1;
(statearr_25672_25743[(1)] = (6));

} else {
var statearr_25673_25744 = state_25631__$1;
(statearr_25673_25744[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (14))){
var inst_25559 = (state_25631[(13)]);
var inst_25569 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25570 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_25571 = cljs.core.List.EMPTY;
var inst_25572 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_25573 = cljs.core.cons.call(null,inst_25572,inst_25559);
var inst_25574 = cljs.core._conj.call(null,inst_25571,inst_25573);
var inst_25575 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25576 = cljs.core._conj.call(null,inst_25574,inst_25575);
var inst_25577 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25570,inst_25576,null];
var inst_25578 = cljs.core.PersistentHashMap.fromArrays(inst_25569,inst_25577);
var inst_25579 = cljs.test.do_report.call(null,inst_25578);
var state_25631__$1 = state_25631;
var statearr_25674_25745 = state_25631__$1;
(statearr_25674_25745[(2)] = inst_25579);

(statearr_25674_25745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (16))){
var inst_25628 = (state_25631[(2)]);
var inst_25629 = done.call(null);
var state_25631__$1 = (function (){var statearr_25675 = state_25631;
(statearr_25675[(22)] = inst_25628);

return statearr_25675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25631__$1,inst_25629);
} else {
if((state_val_25632 === (10))){
var inst_25539 = (state_25631[(2)]);
var inst_25540 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25541 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_25542 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25541,inst_25539,null];
var inst_25543 = cljs.core.PersistentHashMap.fromArrays(inst_25540,inst_25542);
var inst_25544 = cljs.test.do_report.call(null,inst_25543);
var state_25631__$1 = state_25631;
var statearr_25676_25746 = state_25631__$1;
(statearr_25676_25746[(2)] = inst_25544);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25632 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25631,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_25593 = cljs.core.List.EMPTY;
var inst_25594 = cljs.core._conj.call(null,inst_25593,"~/.in-drop-dot-only");
var inst_25598 = cljs.core.async.chan.call(null,(1));
var inst_25599 = (function (){var c__9318__auto____$1 = inst_25598;
return ((function (c__9318__auto____$1,_,inst_25593,inst_25594,inst_25598,state_val_25632,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25593,inst_25594,inst_25598,state_val_25632,c__9318__auto__,___10644__auto__){
return (function (state_25596){
var state_val_25597 = (state_25596[(1)]);
if((state_val_25597 === (1))){
var state_25596__$1 = state_25596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25596__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25593,inst_25594,inst_25598,state_val_25632,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25593,inst_25594,inst_25598,state_val_25632,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25680 = [null,null,null,null,null,null,null];
(statearr_25680[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25680[(1)] = (1));

return statearr_25680;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25596){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25681){if((e25681 instanceof Object)){
var ex__9301__auto__ = e25681;
var statearr_25682_25747 = state_25596;
(statearr_25682_25747[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25748 = state_25596;
state_25596 = G__25748;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25596){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25593,inst_25594,inst_25598,state_val_25632,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_25683 = f__9319__auto__.call(null);
(statearr_25683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25593,inst_25594,inst_25598,state_val_25632,c__9318__auto__,___10644__auto__))
})();
var inst_25600 = cljs.core.async.impl.dispatch.run.call(null,inst_25599);
var inst_25601 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_25598);
var state_25631__$1 = (function (){var statearr_25684 = state_25631;
(statearr_25684[(23)] = inst_25600);

(statearr_25684[(18)] = inst_25594);

return statearr_25684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25631__$1,(19),inst_25601);
} else {
if((state_val_25632 === (8))){
var inst_25515 = (state_25631[(21)]);
var inst_25536 = (state_25631[(2)]);
var state_25631__$1 = (function (){var statearr_25685 = state_25631;
(statearr_25685[(24)] = inst_25536);

return statearr_25685;
})();
var statearr_25686_25749 = state_25631__$1;
(statearr_25686_25749[(2)] = inst_25515);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631__$1);

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
var statearr_25690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25690[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25690[(1)] = (1));

return statearr_25690;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25631){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25691){if((e25691 instanceof Object)){
var ex__9301__auto__ = e25691;
var statearr_25692_25750 = state_25631;
(statearr_25692_25750[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25751 = state_25631;
state_25631 = G__25751;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25631){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_25693 = f__9319__auto__.call(null);
(statearr_25693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_25693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test25290.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25291","meta25291",1241860175,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test25290.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test25290.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test25290";

drop_dot.core_test.t_drop_dot$core_test25290.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test25290");
});

drop_dot.core_test.__GT_t_drop_dot$core_test25290 = (function drop_dot$core_test$__GT_t_drop_dot$core_test25290(meta25291){
return (new drop_dot.core_test.t_drop_dot$core_test25290(meta25291));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test25290(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test25752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test25752 = (function (meta25753){
this.meta25753 = meta25753;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test25752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25754,meta25753__$1){
var self__ = this;
var _25754__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test25752(meta25753__$1));
});

drop_dot.core_test.t_drop_dot$core_test25752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25754){
var self__ = this;
var _25754__$1 = this;
return self__.meta25753;
});

drop_dot.core_test.t_drop_dot$core_test25752.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test25752.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25893){
var state_val_25894 = (state_25893[(1)]);
if((state_val_25894 === (7))){
var inst_25776 = (state_25893[(7)]);
var inst_25786 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25787 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_25788 = cljs.core.List.EMPTY;
var inst_25789 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_25790 = cljs.core.cons.call(null,inst_25789,inst_25776);
var inst_25791 = cljs.core._conj.call(null,inst_25788,inst_25790);
var inst_25792 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25793 = cljs.core._conj.call(null,inst_25791,inst_25792);
var inst_25794 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25787,inst_25793,null];
var inst_25795 = cljs.core.PersistentHashMap.fromArrays(inst_25786,inst_25794);
var inst_25796 = cljs.test.do_report.call(null,inst_25795);
var state_25893__$1 = state_25893;
var statearr_25895_26156 = state_25893__$1;
(statearr_25895_26156[(2)] = inst_25796);

(statearr_25895_26156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (20))){
var inst_25866 = (state_25893[(8)]);
var inst_25869 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25870 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_25871 = cljs.core.cons.call(null,cljs.core._EQ_,inst_25866);
var inst_25872 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25870,inst_25871,null];
var inst_25873 = cljs.core.PersistentHashMap.fromArrays(inst_25869,inst_25872);
var inst_25874 = cljs.test.do_report.call(null,inst_25873);
var state_25893__$1 = state_25893;
var statearr_25896_26157 = state_25893__$1;
(statearr_25896_26157[(2)] = inst_25874);

(statearr_25896_26157[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (1))){
var state_25893__$1 = state_25893;
var statearr_25897_26158 = state_25893__$1;
(statearr_25897_26158[(2)] = null);

(statearr_25897_26158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25893,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_25765 = cljs.core.List.EMPTY;
var inst_25766 = cljs.core._conj.call(null,inst_25765,"NOTICE: ");
var inst_25770 = cljs.core.async.chan.call(null,(1));
var inst_25771 = (function (){var c__9318__auto____$1 = inst_25770;
return ((function (c__9318__auto____$1,_,inst_25765,inst_25766,inst_25770,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25765,inst_25766,inst_25770,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25768){
var state_val_25769 = (state_25768[(1)]);
if((state_val_25769 === (1))){
var state_25768__$1 = state_25768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25768__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25765,inst_25766,inst_25770,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25765,inst_25766,inst_25770,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25901 = [null,null,null,null,null,null,null];
(statearr_25901[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25901[(1)] = (1));

return statearr_25901;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25768){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25902){if((e25902 instanceof Object)){
var ex__9301__auto__ = e25902;
var statearr_25903_26159 = state_25768;
(statearr_25903_26159[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26160 = state_25768;
state_25768 = G__26160;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25768){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25765,inst_25766,inst_25770,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25904 = f__9319__auto__.call(null);
(statearr_25904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25765,inst_25766,inst_25770,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_25772 = cljs.core.async.impl.dispatch.run.call(null,inst_25771);
var inst_25773 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_25770);
var state_25893__$1 = (function (){var statearr_25905 = state_25893;
(statearr_25905[(9)] = inst_25772);

(statearr_25905[(10)] = inst_25766);

return statearr_25905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25893__$1,(5),inst_25773);
} else {
if((state_val_25894 === (15))){
var inst_25822 = (state_25893[(11)]);
var inst_25843 = (state_25893[(2)]);
var state_25893__$1 = (function (){var statearr_25906 = state_25893;
(statearr_25906[(12)] = inst_25843);

return statearr_25906;
})();
var statearr_25907_26161 = state_25893__$1;
(statearr_25907_26161[(2)] = inst_25822);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (21))){
var inst_25866 = (state_25893[(8)]);
var inst_25876 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25877 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_25878 = cljs.core.List.EMPTY;
var inst_25879 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_25880 = cljs.core.cons.call(null,inst_25879,inst_25866);
var inst_25881 = cljs.core._conj.call(null,inst_25878,inst_25880);
var inst_25882 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25883 = cljs.core._conj.call(null,inst_25881,inst_25882);
var inst_25884 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25877,inst_25883,null];
var inst_25885 = cljs.core.PersistentHashMap.fromArrays(inst_25876,inst_25884);
var inst_25886 = cljs.test.do_report.call(null,inst_25885);
var state_25893__$1 = state_25893;
var statearr_25908_26162 = state_25893__$1;
(statearr_25908_26162[(2)] = inst_25886);

(statearr_25908_26162[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (13))){
var inst_25821 = (state_25893[(13)]);
var inst_25824 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25825 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_25826 = cljs.core.cons.call(null,cljs.core._EQ_,inst_25821);
var inst_25827 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25825,inst_25826,null];
var inst_25828 = cljs.core.PersistentHashMap.fromArrays(inst_25824,inst_25827);
var inst_25829 = cljs.test.do_report.call(null,inst_25828);
var state_25893__$1 = state_25893;
var statearr_25909_26163 = state_25893__$1;
(statearr_25909_26163[(2)] = inst_25829);

(statearr_25909_26163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (22))){
var inst_25867 = (state_25893[(14)]);
var inst_25888 = (state_25893[(2)]);
var state_25893__$1 = (function (){var statearr_25910 = state_25893;
(statearr_25910[(15)] = inst_25888);

return statearr_25910;
})();
var statearr_25911_26164 = state_25893__$1;
(statearr_25911_26164[(2)] = inst_25867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (6))){
var inst_25776 = (state_25893[(7)]);
var inst_25779 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25780 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_25781 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_25776);
var inst_25782 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25780,inst_25781,null];
var inst_25783 = cljs.core.PersistentHashMap.fromArrays(inst_25779,inst_25782);
var inst_25784 = cljs.test.do_report.call(null,inst_25783);
var state_25893__$1 = state_25893;
var statearr_25912_26165 = state_25893__$1;
(statearr_25912_26165[(2)] = inst_25784);

(statearr_25912_26165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (17))){
var inst_25846 = (state_25893[(2)]);
var inst_25847 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25848 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_25849 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25848,inst_25846,null];
var inst_25850 = cljs.core.PersistentHashMap.fromArrays(inst_25847,inst_25849);
var inst_25851 = cljs.test.do_report.call(null,inst_25850);
var state_25893__$1 = state_25893;
var statearr_25913_26166 = state_25893__$1;
(statearr_25913_26166[(2)] = inst_25851);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (3))){
var inst_25756 = (state_25893[(2)]);
var inst_25757 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25758 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_25759 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25758,inst_25756,null];
var inst_25760 = cljs.core.PersistentHashMap.fromArrays(inst_25757,inst_25759);
var inst_25761 = cljs.test.do_report.call(null,inst_25760);
var state_25893__$1 = state_25893;
var statearr_25914_26167 = state_25893__$1;
(statearr_25914_26167[(2)] = inst_25761);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (12))){
var inst_25811 = (state_25893[(16)]);
var inst_25821 = (state_25893[(13)]);
var inst_25822 = (state_25893[(11)]);
var inst_25820 = (state_25893[(2)]);
var inst_25821__$1 = cljs.core._conj.call(null,inst_25811,inst_25820);
var inst_25822__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_25821__$1);
var state_25893__$1 = (function (){var statearr_25915 = state_25893;
(statearr_25915[(13)] = inst_25821__$1);

(statearr_25915[(11)] = inst_25822__$1);

return statearr_25915;
})();
if(cljs.core.truth_(inst_25822__$1)){
var statearr_25916_26168 = state_25893__$1;
(statearr_25916_26168[(1)] = (13));

} else {
var statearr_25917_26169 = state_25893__$1;
(statearr_25917_26169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (2))){
var inst_25800 = (state_25893[(2)]);
var state_25893__$1 = (function (){var statearr_25918 = state_25893;
(statearr_25918[(17)] = inst_25800);

return statearr_25918;
})();
var statearr_25919_26170 = state_25893__$1;
(statearr_25919_26170[(2)] = null);

(statearr_25919_26170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (19))){
var inst_25867 = (state_25893[(14)]);
var inst_25866 = (state_25893[(8)]);
var inst_25856 = (state_25893[(18)]);
var inst_25865 = (state_25893[(2)]);
var inst_25866__$1 = cljs.core._conj.call(null,inst_25856,inst_25865);
var inst_25867__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_25866__$1);
var state_25893__$1 = (function (){var statearr_25920 = state_25893;
(statearr_25920[(14)] = inst_25867__$1);

(statearr_25920[(8)] = inst_25866__$1);

return statearr_25920;
})();
if(cljs.core.truth_(inst_25867__$1)){
var statearr_25921_26171 = state_25893__$1;
(statearr_25921_26171[(1)] = (20));

} else {
var statearr_25922_26172 = state_25893__$1;
(statearr_25922_26172[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25893,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_25810 = cljs.core.List.EMPTY;
var inst_25811 = cljs.core._conj.call(null,inst_25810,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_25815 = cljs.core.async.chan.call(null,(1));
var inst_25816 = (function (){var c__9318__auto____$1 = inst_25815;
return ((function (c__9318__auto____$1,_,inst_25810,inst_25811,inst_25815,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25810,inst_25811,inst_25815,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25813){
var state_val_25814 = (state_25813[(1)]);
if((state_val_25814 === (1))){
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25813__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25810,inst_25811,inst_25815,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25810,inst_25811,inst_25815,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25926 = [null,null,null,null,null,null,null];
(statearr_25926[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25926[(1)] = (1));

return statearr_25926;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25813){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25927){if((e25927 instanceof Object)){
var ex__9301__auto__ = e25927;
var statearr_25928_26173 = state_25813;
(statearr_25928_26173[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26174 = state_25813;
state_25813 = G__26174;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25813){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25810,inst_25811,inst_25815,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25929 = f__9319__auto__.call(null);
(statearr_25929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25810,inst_25811,inst_25815,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_25817 = cljs.core.async.impl.dispatch.run.call(null,inst_25816);
var inst_25818 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_25815);
var state_25893__$1 = (function (){var statearr_25930 = state_25893;
(statearr_25930[(16)] = inst_25811);

(statearr_25930[(19)] = inst_25817);

return statearr_25930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25893__$1,(12),inst_25818);
} else {
if((state_val_25894 === (9))){
var inst_25845 = (state_25893[(2)]);
var state_25893__$1 = (function (){var statearr_25931 = state_25893;
(statearr_25931[(20)] = inst_25845);

return statearr_25931;
})();
var statearr_25932_26175 = state_25893__$1;
(statearr_25932_26175[(2)] = null);

(statearr_25932_26175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (5))){
var inst_25777 = (state_25893[(21)]);
var inst_25766 = (state_25893[(10)]);
var inst_25776 = (state_25893[(7)]);
var inst_25775 = (state_25893[(2)]);
var inst_25776__$1 = cljs.core._conj.call(null,inst_25766,inst_25775);
var inst_25777__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_25776__$1);
var state_25893__$1 = (function (){var statearr_25933 = state_25893;
(statearr_25933[(21)] = inst_25777__$1);

(statearr_25933[(7)] = inst_25776__$1);

return statearr_25933;
})();
if(cljs.core.truth_(inst_25777__$1)){
var statearr_25934_26176 = state_25893__$1;
(statearr_25934_26176[(1)] = (6));

} else {
var statearr_25935_26177 = state_25893__$1;
(statearr_25935_26177[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (14))){
var inst_25821 = (state_25893[(13)]);
var inst_25831 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25832 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_25833 = cljs.core.List.EMPTY;
var inst_25834 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_25835 = cljs.core.cons.call(null,inst_25834,inst_25821);
var inst_25836 = cljs.core._conj.call(null,inst_25833,inst_25835);
var inst_25837 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25838 = cljs.core._conj.call(null,inst_25836,inst_25837);
var inst_25839 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25832,inst_25838,null];
var inst_25840 = cljs.core.PersistentHashMap.fromArrays(inst_25831,inst_25839);
var inst_25841 = cljs.test.do_report.call(null,inst_25840);
var state_25893__$1 = state_25893;
var statearr_25936_26178 = state_25893__$1;
(statearr_25936_26178[(2)] = inst_25841);

(statearr_25936_26178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (16))){
var inst_25890 = (state_25893[(2)]);
var inst_25891 = done.call(null);
var state_25893__$1 = (function (){var statearr_25937 = state_25893;
(statearr_25937[(22)] = inst_25890);

return statearr_25937;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25893__$1,inst_25891);
} else {
if((state_val_25894 === (10))){
var inst_25801 = (state_25893[(2)]);
var inst_25802 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25803 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_25804 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25803,inst_25801,null];
var inst_25805 = cljs.core.PersistentHashMap.fromArrays(inst_25802,inst_25804);
var inst_25806 = cljs.test.do_report.call(null,inst_25805);
var state_25893__$1 = state_25893;
var statearr_25938_26179 = state_25893__$1;
(statearr_25938_26179[(2)] = inst_25806);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25893,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_25855 = cljs.core.List.EMPTY;
var inst_25856 = cljs.core._conj.call(null,inst_25855,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_25860 = cljs.core.async.chan.call(null,(1));
var inst_25861 = (function (){var c__9318__auto____$1 = inst_25860;
return ((function (c__9318__auto____$1,_,inst_25855,inst_25856,inst_25860,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25855,inst_25856,inst_25860,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_25858){
var state_val_25859 = (state_25858[(1)]);
if((state_val_25859 === (1))){
var state_25858__$1 = state_25858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25858__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25855,inst_25856,inst_25860,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25855,inst_25856,inst_25860,state_val_25894,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_25942 = [null,null,null,null,null,null,null];
(statearr_25942[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25942[(1)] = (1));

return statearr_25942;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25858){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25943){if((e25943 instanceof Object)){
var ex__9301__auto__ = e25943;
var statearr_25944_26180 = state_25858;
(statearr_25944_26180[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26181 = state_25858;
state_25858 = G__26181;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25858){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25855,inst_25856,inst_25860,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25945 = f__9319__auto__.call(null);
(statearr_25945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25855,inst_25856,inst_25860,state_val_25894,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_25862 = cljs.core.async.impl.dispatch.run.call(null,inst_25861);
var inst_25863 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_25860);
var state_25893__$1 = (function (){var statearr_25946 = state_25893;
(statearr_25946[(18)] = inst_25856);

(statearr_25946[(23)] = inst_25862);

return statearr_25946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25893__$1,(19),inst_25863);
} else {
if((state_val_25894 === (8))){
var inst_25777 = (state_25893[(21)]);
var inst_25798 = (state_25893[(2)]);
var state_25893__$1 = (function (){var statearr_25947 = state_25893;
(statearr_25947[(24)] = inst_25798);

return statearr_25947;
})();
var statearr_25948_26182 = state_25893__$1;
(statearr_25948_26182[(2)] = inst_25777);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893__$1);

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
var statearr_25952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25952[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_25952[(1)] = (1));

return statearr_25952;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25893){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25953){if((e25953 instanceof Object)){
var ex__9301__auto__ = e25953;
var statearr_25954_26183 = state_25893;
(statearr_25954_26183[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26184 = state_25893;
state_25893 = G__26184;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25893){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_25955 = f__9319__auto__.call(null);
(statearr_25955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_25955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test25752.prototype.apply = (function (self__,args25755){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args25755)));
});

drop_dot.core_test.t_drop_dot$core_test25752.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_26093){
var state_val_26094 = (state_26093[(1)]);
if((state_val_26094 === (7))){
var inst_25976 = (state_26093[(7)]);
var inst_25986 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25987 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_25988 = cljs.core.List.EMPTY;
var inst_25989 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_25990 = cljs.core.cons.call(null,inst_25989,inst_25976);
var inst_25991 = cljs.core._conj.call(null,inst_25988,inst_25990);
var inst_25992 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_25993 = cljs.core._conj.call(null,inst_25991,inst_25992);
var inst_25994 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_25987,inst_25993,null];
var inst_25995 = cljs.core.PersistentHashMap.fromArrays(inst_25986,inst_25994);
var inst_25996 = cljs.test.do_report.call(null,inst_25995);
var state_26093__$1 = state_26093;
var statearr_26095_26185 = state_26093__$1;
(statearr_26095_26185[(2)] = inst_25996);

(statearr_26095_26185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (20))){
var inst_26066 = (state_26093[(8)]);
var inst_26069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26070 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_26071 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26066);
var inst_26072 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26070,inst_26071,null];
var inst_26073 = cljs.core.PersistentHashMap.fromArrays(inst_26069,inst_26072);
var inst_26074 = cljs.test.do_report.call(null,inst_26073);
var state_26093__$1 = state_26093;
var statearr_26096_26186 = state_26093__$1;
(statearr_26096_26186[(2)] = inst_26074);

(statearr_26096_26186[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (1))){
var state_26093__$1 = state_26093;
var statearr_26097_26187 = state_26093__$1;
(statearr_26097_26187[(2)] = null);

(statearr_26097_26187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26093,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_25965 = cljs.core.List.EMPTY;
var inst_25966 = cljs.core._conj.call(null,inst_25965,"NOTICE: ");
var inst_25970 = cljs.core.async.chan.call(null,(1));
var inst_25971 = (function (){var c__9318__auto____$1 = inst_25970;
return ((function (c__9318__auto____$1,_,inst_25965,inst_25966,inst_25970,state_val_26094,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_25965,inst_25966,inst_25970,state_val_26094,c__9318__auto__,___10644__auto__){
return (function (state_25968){
var state_val_25969 = (state_25968[(1)]);
if((state_val_25969 === (1))){
var state_25968__$1 = state_25968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25968__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_25965,inst_25966,inst_25970,state_val_26094,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_25965,inst_25966,inst_25970,state_val_26094,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26101 = [null,null,null,null,null,null,null];
(statearr_26101[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26101[(1)] = (1));

return statearr_26101;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_25968){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26102){if((e26102 instanceof Object)){
var ex__9301__auto__ = e26102;
var statearr_26103_26188 = state_25968;
(statearr_26103_26188[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26189 = state_25968;
state_25968 = G__26189;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_25968){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_25968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_25965,inst_25966,inst_25970,state_val_26094,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26104 = f__9319__auto__.call(null);
(statearr_26104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_26104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_25965,inst_25966,inst_25970,state_val_26094,c__9318__auto__,___10644__auto__))
})();
var inst_25972 = cljs.core.async.impl.dispatch.run.call(null,inst_25971);
var inst_25973 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_25970);
var state_26093__$1 = (function (){var statearr_26105 = state_26093;
(statearr_26105[(9)] = inst_25966);

(statearr_26105[(10)] = inst_25972);

return statearr_26105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26093__$1,(5),inst_25973);
} else {
if((state_val_26094 === (15))){
var inst_26022 = (state_26093[(11)]);
var inst_26043 = (state_26093[(2)]);
var state_26093__$1 = (function (){var statearr_26106 = state_26093;
(statearr_26106[(12)] = inst_26043);

return statearr_26106;
})();
var statearr_26107_26190 = state_26093__$1;
(statearr_26107_26190[(2)] = inst_26022);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (21))){
var inst_26066 = (state_26093[(8)]);
var inst_26076 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26077 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_26078 = cljs.core.List.EMPTY;
var inst_26079 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26080 = cljs.core.cons.call(null,inst_26079,inst_26066);
var inst_26081 = cljs.core._conj.call(null,inst_26078,inst_26080);
var inst_26082 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26083 = cljs.core._conj.call(null,inst_26081,inst_26082);
var inst_26084 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26077,inst_26083,null];
var inst_26085 = cljs.core.PersistentHashMap.fromArrays(inst_26076,inst_26084);
var inst_26086 = cljs.test.do_report.call(null,inst_26085);
var state_26093__$1 = state_26093;
var statearr_26108_26191 = state_26093__$1;
(statearr_26108_26191[(2)] = inst_26086);

(statearr_26108_26191[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (13))){
var inst_26021 = (state_26093[(13)]);
var inst_26024 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26025 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_26026 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26021);
var inst_26027 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26025,inst_26026,null];
var inst_26028 = cljs.core.PersistentHashMap.fromArrays(inst_26024,inst_26027);
var inst_26029 = cljs.test.do_report.call(null,inst_26028);
var state_26093__$1 = state_26093;
var statearr_26109_26192 = state_26093__$1;
(statearr_26109_26192[(2)] = inst_26029);

(statearr_26109_26192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (22))){
var inst_26067 = (state_26093[(14)]);
var inst_26088 = (state_26093[(2)]);
var state_26093__$1 = (function (){var statearr_26110 = state_26093;
(statearr_26110[(15)] = inst_26088);

return statearr_26110;
})();
var statearr_26111_26193 = state_26093__$1;
(statearr_26111_26193[(2)] = inst_26067);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (6))){
var inst_25976 = (state_26093[(7)]);
var inst_25979 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25980 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_25981 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_25976);
var inst_25982 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_25980,inst_25981,null];
var inst_25983 = cljs.core.PersistentHashMap.fromArrays(inst_25979,inst_25982);
var inst_25984 = cljs.test.do_report.call(null,inst_25983);
var state_26093__$1 = state_26093;
var statearr_26112_26194 = state_26093__$1;
(statearr_26112_26194[(2)] = inst_25984);

(statearr_26112_26194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (17))){
var inst_26046 = (state_26093[(2)]);
var inst_26047 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26048 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_26049 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26048,inst_26046,null];
var inst_26050 = cljs.core.PersistentHashMap.fromArrays(inst_26047,inst_26049);
var inst_26051 = cljs.test.do_report.call(null,inst_26050);
var state_26093__$1 = state_26093;
var statearr_26113_26195 = state_26093__$1;
(statearr_26113_26195[(2)] = inst_26051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (3))){
var inst_25956 = (state_26093[(2)]);
var inst_25957 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_25958 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_25959 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_25958,inst_25956,null];
var inst_25960 = cljs.core.PersistentHashMap.fromArrays(inst_25957,inst_25959);
var inst_25961 = cljs.test.do_report.call(null,inst_25960);
var state_26093__$1 = state_26093;
var statearr_26114_26196 = state_26093__$1;
(statearr_26114_26196[(2)] = inst_25961);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (12))){
var inst_26022 = (state_26093[(11)]);
var inst_26021 = (state_26093[(13)]);
var inst_26011 = (state_26093[(16)]);
var inst_26020 = (state_26093[(2)]);
var inst_26021__$1 = cljs.core._conj.call(null,inst_26011,inst_26020);
var inst_26022__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26021__$1);
var state_26093__$1 = (function (){var statearr_26115 = state_26093;
(statearr_26115[(11)] = inst_26022__$1);

(statearr_26115[(13)] = inst_26021__$1);

return statearr_26115;
})();
if(cljs.core.truth_(inst_26022__$1)){
var statearr_26116_26197 = state_26093__$1;
(statearr_26116_26197[(1)] = (13));

} else {
var statearr_26117_26198 = state_26093__$1;
(statearr_26117_26198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (2))){
var inst_26000 = (state_26093[(2)]);
var state_26093__$1 = (function (){var statearr_26118 = state_26093;
(statearr_26118[(17)] = inst_26000);

return statearr_26118;
})();
var statearr_26119_26199 = state_26093__$1;
(statearr_26119_26199[(2)] = null);

(statearr_26119_26199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (19))){
var inst_26066 = (state_26093[(8)]);
var inst_26067 = (state_26093[(14)]);
var inst_26056 = (state_26093[(18)]);
var inst_26065 = (state_26093[(2)]);
var inst_26066__$1 = cljs.core._conj.call(null,inst_26056,inst_26065);
var inst_26067__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26066__$1);
var state_26093__$1 = (function (){var statearr_26120 = state_26093;
(statearr_26120[(8)] = inst_26066__$1);

(statearr_26120[(14)] = inst_26067__$1);

return statearr_26120;
})();
if(cljs.core.truth_(inst_26067__$1)){
var statearr_26121_26200 = state_26093__$1;
(statearr_26121_26200[(1)] = (20));

} else {
var statearr_26122_26201 = state_26093__$1;
(statearr_26122_26201[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26093,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_26010 = cljs.core.List.EMPTY;
var inst_26011 = cljs.core._conj.call(null,inst_26010,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_26015 = cljs.core.async.chan.call(null,(1));
var inst_26016 = (function (){var c__9318__auto____$1 = inst_26015;
return ((function (c__9318__auto____$1,_,inst_26010,inst_26011,inst_26015,state_val_26094,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_26010,inst_26011,inst_26015,state_val_26094,c__9318__auto__,___10644__auto__){
return (function (state_26013){
var state_val_26014 = (state_26013[(1)]);
if((state_val_26014 === (1))){
var state_26013__$1 = state_26013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26013__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_26010,inst_26011,inst_26015,state_val_26094,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_26010,inst_26011,inst_26015,state_val_26094,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26126 = [null,null,null,null,null,null,null];
(statearr_26126[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26126[(1)] = (1));

return statearr_26126;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26013){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26127){if((e26127 instanceof Object)){
var ex__9301__auto__ = e26127;
var statearr_26128_26202 = state_26013;
(statearr_26128_26202[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26203 = state_26013;
state_26013 = G__26203;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26013){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_26010,inst_26011,inst_26015,state_val_26094,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26129 = f__9319__auto__.call(null);
(statearr_26129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_26129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_26010,inst_26011,inst_26015,state_val_26094,c__9318__auto__,___10644__auto__))
})();
var inst_26017 = cljs.core.async.impl.dispatch.run.call(null,inst_26016);
var inst_26018 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_26015);
var state_26093__$1 = (function (){var statearr_26130 = state_26093;
(statearr_26130[(19)] = inst_26017);

(statearr_26130[(16)] = inst_26011);

return statearr_26130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26093__$1,(12),inst_26018);
} else {
if((state_val_26094 === (9))){
var inst_26045 = (state_26093[(2)]);
var state_26093__$1 = (function (){var statearr_26131 = state_26093;
(statearr_26131[(20)] = inst_26045);

return statearr_26131;
})();
var statearr_26132_26204 = state_26093__$1;
(statearr_26132_26204[(2)] = null);

(statearr_26132_26204[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (5))){
var inst_25976 = (state_26093[(7)]);
var inst_25966 = (state_26093[(9)]);
var inst_25977 = (state_26093[(21)]);
var inst_25975 = (state_26093[(2)]);
var inst_25976__$1 = cljs.core._conj.call(null,inst_25966,inst_25975);
var inst_25977__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_25976__$1);
var state_26093__$1 = (function (){var statearr_26133 = state_26093;
(statearr_26133[(7)] = inst_25976__$1);

(statearr_26133[(21)] = inst_25977__$1);

return statearr_26133;
})();
if(cljs.core.truth_(inst_25977__$1)){
var statearr_26134_26205 = state_26093__$1;
(statearr_26134_26205[(1)] = (6));

} else {
var statearr_26135_26206 = state_26093__$1;
(statearr_26135_26206[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (14))){
var inst_26021 = (state_26093[(13)]);
var inst_26031 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26032 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_26033 = cljs.core.List.EMPTY;
var inst_26034 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26035 = cljs.core.cons.call(null,inst_26034,inst_26021);
var inst_26036 = cljs.core._conj.call(null,inst_26033,inst_26035);
var inst_26037 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26038 = cljs.core._conj.call(null,inst_26036,inst_26037);
var inst_26039 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26032,inst_26038,null];
var inst_26040 = cljs.core.PersistentHashMap.fromArrays(inst_26031,inst_26039);
var inst_26041 = cljs.test.do_report.call(null,inst_26040);
var state_26093__$1 = state_26093;
var statearr_26136_26207 = state_26093__$1;
(statearr_26136_26207[(2)] = inst_26041);

(statearr_26136_26207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (16))){
var inst_26090 = (state_26093[(2)]);
var inst_26091 = done.call(null);
var state_26093__$1 = (function (){var statearr_26137 = state_26093;
(statearr_26137[(22)] = inst_26090);

return statearr_26137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26093__$1,inst_26091);
} else {
if((state_val_26094 === (10))){
var inst_26001 = (state_26093[(2)]);
var inst_26002 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26003 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_26004 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26003,inst_26001,null];
var inst_26005 = cljs.core.PersistentHashMap.fromArrays(inst_26002,inst_26004);
var inst_26006 = cljs.test.do_report.call(null,inst_26005);
var state_26093__$1 = state_26093;
var statearr_26138_26208 = state_26093__$1;
(statearr_26138_26208[(2)] = inst_26006);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26094 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26093,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_26055 = cljs.core.List.EMPTY;
var inst_26056 = cljs.core._conj.call(null,inst_26055,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_26060 = cljs.core.async.chan.call(null,(1));
var inst_26061 = (function (){var c__9318__auto____$1 = inst_26060;
return ((function (c__9318__auto____$1,_,inst_26055,inst_26056,inst_26060,state_val_26094,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_26055,inst_26056,inst_26060,state_val_26094,c__9318__auto__,___10644__auto__){
return (function (state_26058){
var state_val_26059 = (state_26058[(1)]);
if((state_val_26059 === (1))){
var state_26058__$1 = state_26058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26058__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_26055,inst_26056,inst_26060,state_val_26094,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_26055,inst_26056,inst_26060,state_val_26094,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26142 = [null,null,null,null,null,null,null];
(statearr_26142[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26142[(1)] = (1));

return statearr_26142;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26058){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26143){if((e26143 instanceof Object)){
var ex__9301__auto__ = e26143;
var statearr_26144_26209 = state_26058;
(statearr_26144_26209[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26210 = state_26058;
state_26058 = G__26210;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26058){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_26055,inst_26056,inst_26060,state_val_26094,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26145 = f__9319__auto__.call(null);
(statearr_26145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_26145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_26055,inst_26056,inst_26060,state_val_26094,c__9318__auto__,___10644__auto__))
})();
var inst_26062 = cljs.core.async.impl.dispatch.run.call(null,inst_26061);
var inst_26063 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_26060);
var state_26093__$1 = (function (){var statearr_26146 = state_26093;
(statearr_26146[(18)] = inst_26056);

(statearr_26146[(23)] = inst_26062);

return statearr_26146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26093__$1,(19),inst_26063);
} else {
if((state_val_26094 === (8))){
var inst_25977 = (state_26093[(21)]);
var inst_25998 = (state_26093[(2)]);
var state_26093__$1 = (function (){var statearr_26147 = state_26093;
(statearr_26147[(24)] = inst_25998);

return statearr_26147;
})();
var statearr_26148_26211 = state_26093__$1;
(statearr_26148_26211[(2)] = inst_25977);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093__$1);

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
var statearr_26152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26152[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26152[(1)] = (1));

return statearr_26152;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26093){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26153){if((e26153 instanceof Object)){
var ex__9301__auto__ = e26153;
var statearr_26154_26212 = state_26093;
(statearr_26154_26212[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26213 = state_26093;
state_26093 = G__26213;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26093){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26155 = f__9319__auto__.call(null);
(statearr_26155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test25752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25753","meta25753",1442840375,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test25752.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test25752.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test25752";

drop_dot.core_test.t_drop_dot$core_test25752.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test25752");
});

drop_dot.core_test.__GT_t_drop_dot$core_test25752 = (function drop_dot$core_test$__GT_t_drop_dot$core_test25752(meta25753){
return (new drop_dot.core_test.t_drop_dot$core_test25752(meta25753));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test25752(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2043608325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2088597056,null),"test/drop_dot/core_test.cljs",72,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test26214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test26214 = (function (meta26215){
this.meta26215 = meta26215;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test26214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26216,meta26215__$1){
var self__ = this;
var _26216__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test26214(meta26215__$1));
});

drop_dot.core_test.t_drop_dot$core_test26214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26216){
var self__ = this;
var _26216__$1 = this;
return self__.meta26215;
});

drop_dot.core_test.t_drop_dot$core_test26214.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test26214.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_26338){
var state_val_26339 = (state_26338[(1)]);
if((state_val_26339 === (7))){
var inst_26233 = (state_26338[(7)]);
var inst_26243 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26244 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_26245 = cljs.core.List.EMPTY;
var inst_26246 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26247 = cljs.core.cons.call(null,inst_26246,inst_26233);
var inst_26248 = cljs.core._conj.call(null,inst_26245,inst_26247);
var inst_26249 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26250 = cljs.core._conj.call(null,inst_26248,inst_26249);
var inst_26251 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26244,inst_26250,null];
var inst_26252 = cljs.core.PersistentHashMap.fromArrays(inst_26243,inst_26251);
var inst_26253 = cljs.test.do_report.call(null,inst_26252);
var state_26338__$1 = state_26338;
var statearr_26340_26544 = state_26338__$1;
(statearr_26340_26544[(2)] = inst_26253);

(statearr_26340_26544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (20))){
var inst_26311 = (state_26338[(8)]);
var inst_26314 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26315 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_26316 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_26311);
var inst_26317 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26315,inst_26316,null];
var inst_26318 = cljs.core.PersistentHashMap.fromArrays(inst_26314,inst_26317);
var inst_26319 = cljs.test.do_report.call(null,inst_26318);
var state_26338__$1 = state_26338;
var statearr_26341_26545 = state_26338__$1;
(statearr_26341_26545[(2)] = inst_26319);

(statearr_26341_26545[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (1))){
var inst_26218 = cljs.core.async.chan.call(null,(1));
var state_26338__$1 = (function (){var statearr_26342 = state_26338;
(statearr_26342[(9)] = inst_26218);

return statearr_26342;
})();
var statearr_26343_26546 = state_26338__$1;
(statearr_26343_26546[(2)] = null);

(statearr_26343_26546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26338,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26228 = cljs.core.List.EMPTY;
var inst_26229 = cljs.core._conj.call(null,inst_26228,"~/.TDD-this-file-in-dot-drop-dot");
var inst_26230 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_26338__$1 = (function (){var statearr_26344 = state_26338;
(statearr_26344[(10)] = inst_26229);

return statearr_26344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(5),inst_26230);
} else {
if((state_val_26339 === (15))){
var inst_26273 = (state_26338[(11)]);
var inst_26294 = (state_26338[(2)]);
var state_26338__$1 = (function (){var statearr_26345 = state_26338;
(statearr_26345[(12)] = inst_26294);

return statearr_26345;
})();
var statearr_26346_26547 = state_26338__$1;
(statearr_26346_26547[(2)] = inst_26273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (21))){
var inst_26311 = (state_26338[(8)]);
var inst_26321 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26322 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_26323 = cljs.core.List.EMPTY;
var inst_26324 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_26325 = cljs.core.cons.call(null,inst_26324,inst_26311);
var inst_26326 = cljs.core._conj.call(null,inst_26323,inst_26325);
var inst_26327 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26328 = cljs.core._conj.call(null,inst_26326,inst_26327);
var inst_26329 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26322,inst_26328,null];
var inst_26330 = cljs.core.PersistentHashMap.fromArrays(inst_26321,inst_26329);
var inst_26331 = cljs.test.do_report.call(null,inst_26330);
var state_26338__$1 = state_26338;
var statearr_26347_26548 = state_26338__$1;
(statearr_26347_26548[(2)] = inst_26331);

(statearr_26347_26548[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (13))){
var inst_26272 = (state_26338[(13)]);
var inst_26275 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26276 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_26277 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_26272);
var inst_26278 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26276,inst_26277,null];
var inst_26279 = cljs.core.PersistentHashMap.fromArrays(inst_26275,inst_26278);
var inst_26280 = cljs.test.do_report.call(null,inst_26279);
var state_26338__$1 = state_26338;
var statearr_26348_26549 = state_26338__$1;
(statearr_26348_26549[(2)] = inst_26280);

(statearr_26348_26549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (22))){
var inst_26312 = (state_26338[(14)]);
var inst_26333 = (state_26338[(2)]);
var state_26338__$1 = (function (){var statearr_26349 = state_26338;
(statearr_26349[(15)] = inst_26333);

return statearr_26349;
})();
var statearr_26350_26550 = state_26338__$1;
(statearr_26350_26550[(2)] = inst_26312);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (6))){
var inst_26233 = (state_26338[(7)]);
var inst_26236 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26237 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_26238 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26233);
var inst_26239 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26237,inst_26238,null];
var inst_26240 = cljs.core.PersistentHashMap.fromArrays(inst_26236,inst_26239);
var inst_26241 = cljs.test.do_report.call(null,inst_26240);
var state_26338__$1 = state_26338;
var statearr_26351_26551 = state_26338__$1;
(statearr_26351_26551[(2)] = inst_26241);

(statearr_26351_26551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (17))){
var inst_26297 = (state_26338[(2)]);
var inst_26298 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26299 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_26300 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26299,inst_26297,null];
var inst_26301 = cljs.core.PersistentHashMap.fromArrays(inst_26298,inst_26300);
var inst_26302 = cljs.test.do_report.call(null,inst_26301);
var state_26338__$1 = state_26338;
var statearr_26352_26552 = state_26338__$1;
(statearr_26352_26552[(2)] = inst_26302);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (3))){
var inst_26219 = (state_26338[(2)]);
var inst_26220 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26221 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_26222 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26221,inst_26219,null];
var inst_26223 = cljs.core.PersistentHashMap.fromArrays(inst_26220,inst_26222);
var inst_26224 = cljs.test.do_report.call(null,inst_26223);
var state_26338__$1 = state_26338;
var statearr_26353_26553 = state_26338__$1;
(statearr_26353_26553[(2)] = inst_26224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (12))){
var inst_26273 = (state_26338[(11)]);
var inst_26268 = (state_26338[(16)]);
var inst_26272 = (state_26338[(13)]);
var inst_26271 = (state_26338[(2)]);
var inst_26272__$1 = cljs.core._conj.call(null,inst_26268,inst_26271);
var inst_26273__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_26272__$1);
var state_26338__$1 = (function (){var statearr_26354 = state_26338;
(statearr_26354[(11)] = inst_26273__$1);

(statearr_26354[(13)] = inst_26272__$1);

return statearr_26354;
})();
if(cljs.core.truth_(inst_26273__$1)){
var statearr_26355_26554 = state_26338__$1;
(statearr_26355_26554[(1)] = (13));

} else {
var statearr_26356_26555 = state_26338__$1;
(statearr_26356_26555[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (2))){
var inst_26257 = (state_26338[(2)]);
var state_26338__$1 = (function (){var statearr_26357 = state_26338;
(statearr_26357[(17)] = inst_26257);

return statearr_26357;
})();
var statearr_26358_26556 = state_26338__$1;
(statearr_26358_26556[(2)] = null);

(statearr_26358_26556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (19))){
var inst_26311 = (state_26338[(8)]);
var inst_26307 = (state_26338[(18)]);
var inst_26312 = (state_26338[(14)]);
var inst_26310 = (state_26338[(2)]);
var inst_26311__$1 = cljs.core._conj.call(null,inst_26307,inst_26310);
var inst_26312__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_26311__$1);
var state_26338__$1 = (function (){var statearr_26359 = state_26338;
(statearr_26359[(8)] = inst_26311__$1);

(statearr_26359[(14)] = inst_26312__$1);

return statearr_26359;
})();
if(cljs.core.truth_(inst_26312__$1)){
var statearr_26360_26557 = state_26338__$1;
(statearr_26360_26557[(1)] = (20));

} else {
var statearr_26361_26558 = state_26338__$1;
(statearr_26361_26558[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26338,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_26267 = cljs.core.List.EMPTY;
var inst_26268 = cljs.core._conj.call(null,inst_26267,"ERROR: ");
var inst_26269 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_26338__$1 = (function (){var statearr_26362 = state_26338;
(statearr_26362[(16)] = inst_26268);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(12),inst_26269);
} else {
if((state_val_26339 === (9))){
var inst_26296 = (state_26338[(2)]);
var state_26338__$1 = (function (){var statearr_26363 = state_26338;
(statearr_26363[(19)] = inst_26296);

return statearr_26363;
})();
var statearr_26364_26559 = state_26338__$1;
(statearr_26364_26559[(2)] = null);

(statearr_26364_26559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (5))){
var inst_26234 = (state_26338[(20)]);
var inst_26229 = (state_26338[(10)]);
var inst_26233 = (state_26338[(7)]);
var inst_26232 = (state_26338[(2)]);
var inst_26233__$1 = cljs.core._conj.call(null,inst_26229,inst_26232);
var inst_26234__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26233__$1);
var state_26338__$1 = (function (){var statearr_26365 = state_26338;
(statearr_26365[(20)] = inst_26234__$1);

(statearr_26365[(7)] = inst_26233__$1);

return statearr_26365;
})();
if(cljs.core.truth_(inst_26234__$1)){
var statearr_26366_26560 = state_26338__$1;
(statearr_26366_26560[(1)] = (6));

} else {
var statearr_26367_26561 = state_26338__$1;
(statearr_26367_26561[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (14))){
var inst_26272 = (state_26338[(13)]);
var inst_26282 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26283 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_26284 = cljs.core.List.EMPTY;
var inst_26285 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_26286 = cljs.core.cons.call(null,inst_26285,inst_26272);
var inst_26287 = cljs.core._conj.call(null,inst_26284,inst_26286);
var inst_26288 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26289 = cljs.core._conj.call(null,inst_26287,inst_26288);
var inst_26290 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26283,inst_26289,null];
var inst_26291 = cljs.core.PersistentHashMap.fromArrays(inst_26282,inst_26290);
var inst_26292 = cljs.test.do_report.call(null,inst_26291);
var state_26338__$1 = state_26338;
var statearr_26368_26562 = state_26338__$1;
(statearr_26368_26562[(2)] = inst_26292);

(statearr_26368_26562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (16))){
var inst_26335 = (state_26338[(2)]);
var inst_26336 = done.call(null);
var state_26338__$1 = (function (){var statearr_26369 = state_26338;
(statearr_26369[(21)] = inst_26335);

return statearr_26369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26338__$1,inst_26336);
} else {
if((state_val_26339 === (10))){
var inst_26258 = (state_26338[(2)]);
var inst_26259 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26260 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_26261 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26260,inst_26258,null];
var inst_26262 = cljs.core.PersistentHashMap.fromArrays(inst_26259,inst_26261);
var inst_26263 = cljs.test.do_report.call(null,inst_26262);
var state_26338__$1 = state_26338;
var statearr_26370_26563 = state_26338__$1;
(statearr_26370_26563[(2)] = inst_26263);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26339 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26338,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_26306 = cljs.core.List.EMPTY;
var inst_26307 = cljs.core._conj.call(null,inst_26306,"ERROR: ");
var inst_26308 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_26338__$1 = (function (){var statearr_26371 = state_26338;
(statearr_26371[(18)] = inst_26307);

return statearr_26371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26338__$1,(19),inst_26308);
} else {
if((state_val_26339 === (8))){
var inst_26234 = (state_26338[(20)]);
var inst_26255 = (state_26338[(2)]);
var state_26338__$1 = (function (){var statearr_26372 = state_26338;
(statearr_26372[(22)] = inst_26255);

return statearr_26372;
})();
var statearr_26373_26564 = state_26338__$1;
(statearr_26373_26564[(2)] = inst_26234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338__$1);

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
var statearr_26377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26377[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26377[(1)] = (1));

return statearr_26377;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26338){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26378){if((e26378 instanceof Object)){
var ex__9301__auto__ = e26378;
var statearr_26379_26565 = state_26338;
(statearr_26379_26565[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26566 = state_26338;
state_26338 = G__26566;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26338){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_26380 = f__9319__auto__.call(null);
(statearr_26380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test26214.prototype.apply = (function (self__,args26217){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26217)));
});

drop_dot.core_test.t_drop_dot$core_test26214.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_26501){
var state_val_26502 = (state_26501[(1)]);
if((state_val_26502 === (7))){
var inst_26396 = (state_26501[(7)]);
var inst_26406 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26407 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_26408 = cljs.core.List.EMPTY;
var inst_26409 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26410 = cljs.core.cons.call(null,inst_26409,inst_26396);
var inst_26411 = cljs.core._conj.call(null,inst_26408,inst_26410);
var inst_26412 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26413 = cljs.core._conj.call(null,inst_26411,inst_26412);
var inst_26414 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26407,inst_26413,null];
var inst_26415 = cljs.core.PersistentHashMap.fromArrays(inst_26406,inst_26414);
var inst_26416 = cljs.test.do_report.call(null,inst_26415);
var state_26501__$1 = state_26501;
var statearr_26503_26567 = state_26501__$1;
(statearr_26503_26567[(2)] = inst_26416);

(statearr_26503_26567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (20))){
var inst_26474 = (state_26501[(8)]);
var inst_26477 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26478 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_26479 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_26474);
var inst_26480 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26478,inst_26479,null];
var inst_26481 = cljs.core.PersistentHashMap.fromArrays(inst_26477,inst_26480);
var inst_26482 = cljs.test.do_report.call(null,inst_26481);
var state_26501__$1 = state_26501;
var statearr_26504_26568 = state_26501__$1;
(statearr_26504_26568[(2)] = inst_26482);

(statearr_26504_26568[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (1))){
var inst_26381 = cljs.core.async.chan.call(null,(1));
var state_26501__$1 = (function (){var statearr_26505 = state_26501;
(statearr_26505[(9)] = inst_26381);

return statearr_26505;
})();
var statearr_26506_26569 = state_26501__$1;
(statearr_26506_26569[(2)] = null);

(statearr_26506_26569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26501,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26391 = cljs.core.List.EMPTY;
var inst_26392 = cljs.core._conj.call(null,inst_26391,"~/.TDD-this-file-in-dot-drop-dot");
var inst_26393 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_26501__$1 = (function (){var statearr_26507 = state_26501;
(statearr_26507[(10)] = inst_26392);

return statearr_26507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(5),inst_26393);
} else {
if((state_val_26502 === (15))){
var inst_26436 = (state_26501[(11)]);
var inst_26457 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26508 = state_26501;
(statearr_26508[(12)] = inst_26457);

return statearr_26508;
})();
var statearr_26509_26570 = state_26501__$1;
(statearr_26509_26570[(2)] = inst_26436);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (21))){
var inst_26474 = (state_26501[(8)]);
var inst_26484 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26485 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_26486 = cljs.core.List.EMPTY;
var inst_26487 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_26488 = cljs.core.cons.call(null,inst_26487,inst_26474);
var inst_26489 = cljs.core._conj.call(null,inst_26486,inst_26488);
var inst_26490 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26491 = cljs.core._conj.call(null,inst_26489,inst_26490);
var inst_26492 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26485,inst_26491,null];
var inst_26493 = cljs.core.PersistentHashMap.fromArrays(inst_26484,inst_26492);
var inst_26494 = cljs.test.do_report.call(null,inst_26493);
var state_26501__$1 = state_26501;
var statearr_26510_26571 = state_26501__$1;
(statearr_26510_26571[(2)] = inst_26494);

(statearr_26510_26571[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (13))){
var inst_26435 = (state_26501[(13)]);
var inst_26438 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26439 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_26440 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_26435);
var inst_26441 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26439,inst_26440,null];
var inst_26442 = cljs.core.PersistentHashMap.fromArrays(inst_26438,inst_26441);
var inst_26443 = cljs.test.do_report.call(null,inst_26442);
var state_26501__$1 = state_26501;
var statearr_26511_26572 = state_26501__$1;
(statearr_26511_26572[(2)] = inst_26443);

(statearr_26511_26572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (22))){
var inst_26475 = (state_26501[(14)]);
var inst_26496 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26512 = state_26501;
(statearr_26512[(15)] = inst_26496);

return statearr_26512;
})();
var statearr_26513_26573 = state_26501__$1;
(statearr_26513_26573[(2)] = inst_26475);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (6))){
var inst_26396 = (state_26501[(7)]);
var inst_26399 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26400 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_26401 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26396);
var inst_26402 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26400,inst_26401,null];
var inst_26403 = cljs.core.PersistentHashMap.fromArrays(inst_26399,inst_26402);
var inst_26404 = cljs.test.do_report.call(null,inst_26403);
var state_26501__$1 = state_26501;
var statearr_26514_26574 = state_26501__$1;
(statearr_26514_26574[(2)] = inst_26404);

(statearr_26514_26574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (17))){
var inst_26460 = (state_26501[(2)]);
var inst_26461 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26462 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_26463 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26462,inst_26460,null];
var inst_26464 = cljs.core.PersistentHashMap.fromArrays(inst_26461,inst_26463);
var inst_26465 = cljs.test.do_report.call(null,inst_26464);
var state_26501__$1 = state_26501;
var statearr_26515_26575 = state_26501__$1;
(statearr_26515_26575[(2)] = inst_26465);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (3))){
var inst_26382 = (state_26501[(2)]);
var inst_26383 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26384 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_26385 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26384,inst_26382,null];
var inst_26386 = cljs.core.PersistentHashMap.fromArrays(inst_26383,inst_26385);
var inst_26387 = cljs.test.do_report.call(null,inst_26386);
var state_26501__$1 = state_26501;
var statearr_26516_26576 = state_26501__$1;
(statearr_26516_26576[(2)] = inst_26387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (12))){
var inst_26436 = (state_26501[(11)]);
var inst_26435 = (state_26501[(13)]);
var inst_26431 = (state_26501[(16)]);
var inst_26434 = (state_26501[(2)]);
var inst_26435__$1 = cljs.core._conj.call(null,inst_26431,inst_26434);
var inst_26436__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_26435__$1);
var state_26501__$1 = (function (){var statearr_26517 = state_26501;
(statearr_26517[(11)] = inst_26436__$1);

(statearr_26517[(13)] = inst_26435__$1);

return statearr_26517;
})();
if(cljs.core.truth_(inst_26436__$1)){
var statearr_26518_26577 = state_26501__$1;
(statearr_26518_26577[(1)] = (13));

} else {
var statearr_26519_26578 = state_26501__$1;
(statearr_26519_26578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (2))){
var inst_26420 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26520 = state_26501;
(statearr_26520[(17)] = inst_26420);

return statearr_26520;
})();
var statearr_26521_26579 = state_26501__$1;
(statearr_26521_26579[(2)] = null);

(statearr_26521_26579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (19))){
var inst_26470 = (state_26501[(18)]);
var inst_26475 = (state_26501[(14)]);
var inst_26474 = (state_26501[(8)]);
var inst_26473 = (state_26501[(2)]);
var inst_26474__$1 = cljs.core._conj.call(null,inst_26470,inst_26473);
var inst_26475__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_26474__$1);
var state_26501__$1 = (function (){var statearr_26522 = state_26501;
(statearr_26522[(14)] = inst_26475__$1);

(statearr_26522[(8)] = inst_26474__$1);

return statearr_26522;
})();
if(cljs.core.truth_(inst_26475__$1)){
var statearr_26523_26580 = state_26501__$1;
(statearr_26523_26580[(1)] = (20));

} else {
var statearr_26524_26581 = state_26501__$1;
(statearr_26524_26581[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26501,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_26430 = cljs.core.List.EMPTY;
var inst_26431 = cljs.core._conj.call(null,inst_26430,"ERROR: ");
var inst_26432 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_26501__$1 = (function (){var statearr_26525 = state_26501;
(statearr_26525[(16)] = inst_26431);

return statearr_26525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(12),inst_26432);
} else {
if((state_val_26502 === (9))){
var inst_26459 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26526 = state_26501;
(statearr_26526[(19)] = inst_26459);

return statearr_26526;
})();
var statearr_26527_26582 = state_26501__$1;
(statearr_26527_26582[(2)] = null);

(statearr_26527_26582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (5))){
var inst_26397 = (state_26501[(20)]);
var inst_26396 = (state_26501[(7)]);
var inst_26392 = (state_26501[(10)]);
var inst_26395 = (state_26501[(2)]);
var inst_26396__$1 = cljs.core._conj.call(null,inst_26392,inst_26395);
var inst_26397__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26396__$1);
var state_26501__$1 = (function (){var statearr_26528 = state_26501;
(statearr_26528[(20)] = inst_26397__$1);

(statearr_26528[(7)] = inst_26396__$1);

return statearr_26528;
})();
if(cljs.core.truth_(inst_26397__$1)){
var statearr_26529_26583 = state_26501__$1;
(statearr_26529_26583[(1)] = (6));

} else {
var statearr_26530_26584 = state_26501__$1;
(statearr_26530_26584[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (14))){
var inst_26435 = (state_26501[(13)]);
var inst_26445 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26446 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_26447 = cljs.core.List.EMPTY;
var inst_26448 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_26449 = cljs.core.cons.call(null,inst_26448,inst_26435);
var inst_26450 = cljs.core._conj.call(null,inst_26447,inst_26449);
var inst_26451 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26452 = cljs.core._conj.call(null,inst_26450,inst_26451);
var inst_26453 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26446,inst_26452,null];
var inst_26454 = cljs.core.PersistentHashMap.fromArrays(inst_26445,inst_26453);
var inst_26455 = cljs.test.do_report.call(null,inst_26454);
var state_26501__$1 = state_26501;
var statearr_26531_26585 = state_26501__$1;
(statearr_26531_26585[(2)] = inst_26455);

(statearr_26531_26585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (16))){
var inst_26498 = (state_26501[(2)]);
var inst_26499 = done.call(null);
var state_26501__$1 = (function (){var statearr_26532 = state_26501;
(statearr_26532[(21)] = inst_26498);

return statearr_26532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26501__$1,inst_26499);
} else {
if((state_val_26502 === (10))){
var inst_26421 = (state_26501[(2)]);
var inst_26422 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26423 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_26424 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26423,inst_26421,null];
var inst_26425 = cljs.core.PersistentHashMap.fromArrays(inst_26422,inst_26424);
var inst_26426 = cljs.test.do_report.call(null,inst_26425);
var state_26501__$1 = state_26501;
var statearr_26533_26586 = state_26501__$1;
(statearr_26533_26586[(2)] = inst_26426);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26501,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_26469 = cljs.core.List.EMPTY;
var inst_26470 = cljs.core._conj.call(null,inst_26469,"ERROR: ");
var inst_26471 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_26501__$1 = (function (){var statearr_26534 = state_26501;
(statearr_26534[(18)] = inst_26470);

return statearr_26534;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(19),inst_26471);
} else {
if((state_val_26502 === (8))){
var inst_26397 = (state_26501[(20)]);
var inst_26418 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26535 = state_26501;
(statearr_26535[(22)] = inst_26418);

return statearr_26535;
})();
var statearr_26536_26587 = state_26501__$1;
(statearr_26536_26587[(2)] = inst_26397);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501__$1);

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
var statearr_26540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26540[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26540[(1)] = (1));

return statearr_26540;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26501){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26541){if((e26541 instanceof Object)){
var ex__9301__auto__ = e26541;
var statearr_26542_26588 = state_26501;
(statearr_26542_26588[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26589 = state_26501;
state_26501 = G__26589;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26543 = f__9319__auto__.call(null);
(statearr_26543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test26214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26215","meta26215",1819093628,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test26214.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test26214.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test26214";

drop_dot.core_test.t_drop_dot$core_test26214.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test26214");
});

drop_dot.core_test.__GT_t_drop_dot$core_test26214 = (function drop_dot$core_test$__GT_t_drop_dot$core_test26214(meta26215){
return (new drop_dot.core_test.t_drop_dot$core_test26214(meta26215));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test26214(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test26590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test26590 = (function (meta26591){
this.meta26591 = meta26591;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test26590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26592,meta26591__$1){
var self__ = this;
var _26592__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test26590(meta26591__$1));
});

drop_dot.core_test.t_drop_dot$core_test26590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26592){
var self__ = this;
var _26592__$1 = this;
return self__.meta26591;
});

drop_dot.core_test.t_drop_dot$core_test26590.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test26590.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_26640){
var state_val_26641 = (state_26640[(1)]);
if((state_val_26641 === (1))){
var state_26640__$1 = state_26640;
var statearr_26642_26740 = state_26640__$1;
(statearr_26642_26740[(2)] = null);

(statearr_26642_26740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (2))){
var inst_26637 = (state_26640[(2)]);
var inst_26638 = done.call(null);
var state_26640__$1 = (function (){var statearr_26643 = state_26640;
(statearr_26643[(7)] = inst_26637);

return statearr_26643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26640__$1,inst_26638);
} else {
if((state_val_26641 === (3))){
var inst_26594 = (state_26640[(2)]);
var inst_26595 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26596 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_26597 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26596,inst_26594,null];
var inst_26598 = cljs.core.PersistentHashMap.fromArrays(inst_26595,inst_26597);
var inst_26599 = cljs.test.do_report.call(null,inst_26598);
var state_26640__$1 = state_26640;
var statearr_26644_26741 = state_26640__$1;
(statearr_26644_26741[(2)] = inst_26599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26640__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26640,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26603 = cljs.core.List.EMPTY;
var inst_26604 = cljs.core._conj.call(null,inst_26603,"val1");
var inst_26608 = cljs.core.async.chan.call(null,(1));
var inst_26609 = (function (){var c__9318__auto____$1 = inst_26608;
return ((function (c__9318__auto____$1,_,inst_26603,inst_26604,inst_26608,state_val_26641,c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_26603,inst_26604,inst_26608,state_val_26641,c__9318__auto__,___10644__auto__,self____$1){
return (function (state_26606){
var state_val_26607 = (state_26606[(1)]);
if((state_val_26607 === (1))){
var state_26606__$1 = state_26606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26606__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_26603,inst_26604,inst_26608,state_val_26641,c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_26603,inst_26604,inst_26608,state_val_26641,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26648 = [null,null,null,null,null,null,null];
(statearr_26648[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26648[(1)] = (1));

return statearr_26648;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26606){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26649){if((e26649 instanceof Object)){
var ex__9301__auto__ = e26649;
var statearr_26650_26742 = state_26606;
(statearr_26650_26742[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26743 = state_26606;
state_26606 = G__26743;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26606){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_26603,inst_26604,inst_26608,state_val_26641,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_26651 = f__9319__auto__.call(null);
(statearr_26651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_26651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_26603,inst_26604,inst_26608,state_val_26641,c__9318__auto__,___10644__auto__,self____$1))
})();
var inst_26610 = cljs.core.async.impl.dispatch.run.call(null,inst_26609);
var state_26640__$1 = (function (){var statearr_26652 = state_26640;
(statearr_26652[(8)] = inst_26604);

(statearr_26652[(9)] = inst_26610);

return statearr_26652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26640__$1,(5),inst_26608);
} else {
if((state_val_26641 === (5))){
var inst_26614 = (state_26640[(10)]);
var inst_26613 = (state_26640[(11)]);
var inst_26604 = (state_26640[(8)]);
var inst_26612 = (state_26640[(2)]);
var inst_26613__$1 = cljs.core._conj.call(null,inst_26604,inst_26612);
var inst_26614__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26613__$1);
var state_26640__$1 = (function (){var statearr_26653 = state_26640;
(statearr_26653[(10)] = inst_26614__$1);

(statearr_26653[(11)] = inst_26613__$1);

return statearr_26653;
})();
if(cljs.core.truth_(inst_26614__$1)){
var statearr_26654_26744 = state_26640__$1;
(statearr_26654_26744[(1)] = (6));

} else {
var statearr_26655_26745 = state_26640__$1;
(statearr_26655_26745[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (6))){
var inst_26613 = (state_26640[(11)]);
var inst_26616 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26617 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_26618 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26613);
var inst_26619 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26617,inst_26618,null];
var inst_26620 = cljs.core.PersistentHashMap.fromArrays(inst_26616,inst_26619);
var inst_26621 = cljs.test.do_report.call(null,inst_26620);
var state_26640__$1 = state_26640;
var statearr_26656_26746 = state_26640__$1;
(statearr_26656_26746[(2)] = inst_26621);

(statearr_26656_26746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (7))){
var inst_26613 = (state_26640[(11)]);
var inst_26623 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26624 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_26625 = cljs.core.List.EMPTY;
var inst_26626 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26627 = cljs.core.cons.call(null,inst_26626,inst_26613);
var inst_26628 = cljs.core._conj.call(null,inst_26625,inst_26627);
var inst_26629 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26630 = cljs.core._conj.call(null,inst_26628,inst_26629);
var inst_26631 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26624,inst_26630,null];
var inst_26632 = cljs.core.PersistentHashMap.fromArrays(inst_26623,inst_26631);
var inst_26633 = cljs.test.do_report.call(null,inst_26632);
var state_26640__$1 = state_26640;
var statearr_26657_26747 = state_26640__$1;
(statearr_26657_26747[(2)] = inst_26633);

(statearr_26657_26747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26641 === (8))){
var inst_26614 = (state_26640[(10)]);
var inst_26635 = (state_26640[(2)]);
var state_26640__$1 = (function (){var statearr_26658 = state_26640;
(statearr_26658[(12)] = inst_26635);

return statearr_26658;
})();
var statearr_26659_26748 = state_26640__$1;
(statearr_26659_26748[(2)] = inst_26614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26640__$1);

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
var statearr_26663 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26663[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26663[(1)] = (1));

return statearr_26663;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26640){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26664){if((e26664 instanceof Object)){
var ex__9301__auto__ = e26664;
var statearr_26665_26749 = state_26640;
(statearr_26665_26749[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26750 = state_26640;
state_26640 = G__26750;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26640){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_26666 = f__9319__auto__.call(null);
(statearr_26666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test26590.prototype.apply = (function (self__,args26593){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26593)));
});

drop_dot.core_test.t_drop_dot$core_test26590.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_26713){
var state_val_26714 = (state_26713[(1)]);
if((state_val_26714 === (1))){
var state_26713__$1 = state_26713;
var statearr_26715_26751 = state_26713__$1;
(statearr_26715_26751[(2)] = null);

(statearr_26715_26751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (2))){
var inst_26710 = (state_26713[(2)]);
var inst_26711 = done.call(null);
var state_26713__$1 = (function (){var statearr_26716 = state_26713;
(statearr_26716[(7)] = inst_26710);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26713__$1,inst_26711);
} else {
if((state_val_26714 === (3))){
var inst_26667 = (state_26713[(2)]);
var inst_26668 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26669 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_26670 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26669,inst_26667,null];
var inst_26671 = cljs.core.PersistentHashMap.fromArrays(inst_26668,inst_26670);
var inst_26672 = cljs.test.do_report.call(null,inst_26671);
var state_26713__$1 = state_26713;
var statearr_26717_26752 = state_26713__$1;
(statearr_26717_26752[(2)] = inst_26672);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26713__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26713,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26676 = cljs.core.List.EMPTY;
var inst_26677 = cljs.core._conj.call(null,inst_26676,"val1");
var inst_26681 = cljs.core.async.chan.call(null,(1));
var inst_26682 = (function (){var c__9318__auto____$1 = inst_26681;
return ((function (c__9318__auto____$1,_,inst_26676,inst_26677,inst_26681,state_val_26714,c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_26676,inst_26677,inst_26681,state_val_26714,c__9318__auto__,___10644__auto__){
return (function (state_26679){
var state_val_26680 = (state_26679[(1)]);
if((state_val_26680 === (1))){
var state_26679__$1 = state_26679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26679__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_26676,inst_26677,inst_26681,state_val_26714,c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_26676,inst_26677,inst_26681,state_val_26714,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26721 = [null,null,null,null,null,null,null];
(statearr_26721[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26721[(1)] = (1));

return statearr_26721;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26679){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26722){if((e26722 instanceof Object)){
var ex__9301__auto__ = e26722;
var statearr_26723_26753 = state_26679;
(statearr_26723_26753[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26754 = state_26679;
state_26679 = G__26754;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26679){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_26676,inst_26677,inst_26681,state_val_26714,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26724 = f__9319__auto__.call(null);
(statearr_26724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_26724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_26676,inst_26677,inst_26681,state_val_26714,c__9318__auto__,___10644__auto__))
})();
var inst_26683 = cljs.core.async.impl.dispatch.run.call(null,inst_26682);
var state_26713__$1 = (function (){var statearr_26725 = state_26713;
(statearr_26725[(8)] = inst_26683);

(statearr_26725[(9)] = inst_26677);

return statearr_26725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26713__$1,(5),inst_26681);
} else {
if((state_val_26714 === (5))){
var inst_26686 = (state_26713[(10)]);
var inst_26677 = (state_26713[(9)]);
var inst_26687 = (state_26713[(11)]);
var inst_26685 = (state_26713[(2)]);
var inst_26686__$1 = cljs.core._conj.call(null,inst_26677,inst_26685);
var inst_26687__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26686__$1);
var state_26713__$1 = (function (){var statearr_26726 = state_26713;
(statearr_26726[(10)] = inst_26686__$1);

(statearr_26726[(11)] = inst_26687__$1);

return statearr_26726;
})();
if(cljs.core.truth_(inst_26687__$1)){
var statearr_26727_26755 = state_26713__$1;
(statearr_26727_26755[(1)] = (6));

} else {
var statearr_26728_26756 = state_26713__$1;
(statearr_26728_26756[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (6))){
var inst_26686 = (state_26713[(10)]);
var inst_26689 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26690 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_26691 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26686);
var inst_26692 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26690,inst_26691,null];
var inst_26693 = cljs.core.PersistentHashMap.fromArrays(inst_26689,inst_26692);
var inst_26694 = cljs.test.do_report.call(null,inst_26693);
var state_26713__$1 = state_26713;
var statearr_26729_26757 = state_26713__$1;
(statearr_26729_26757[(2)] = inst_26694);

(statearr_26729_26757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (7))){
var inst_26686 = (state_26713[(10)]);
var inst_26696 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26697 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_26698 = cljs.core.List.EMPTY;
var inst_26699 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26700 = cljs.core.cons.call(null,inst_26699,inst_26686);
var inst_26701 = cljs.core._conj.call(null,inst_26698,inst_26700);
var inst_26702 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26703 = cljs.core._conj.call(null,inst_26701,inst_26702);
var inst_26704 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26697,inst_26703,null];
var inst_26705 = cljs.core.PersistentHashMap.fromArrays(inst_26696,inst_26704);
var inst_26706 = cljs.test.do_report.call(null,inst_26705);
var state_26713__$1 = state_26713;
var statearr_26730_26758 = state_26713__$1;
(statearr_26730_26758[(2)] = inst_26706);

(statearr_26730_26758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26714 === (8))){
var inst_26687 = (state_26713[(11)]);
var inst_26708 = (state_26713[(2)]);
var state_26713__$1 = (function (){var statearr_26731 = state_26713;
(statearr_26731[(12)] = inst_26708);

return statearr_26731;
})();
var statearr_26732_26759 = state_26713__$1;
(statearr_26732_26759[(2)] = inst_26687);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26713__$1);

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
var statearr_26736 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26736[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26736[(1)] = (1));

return statearr_26736;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26713){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26737){if((e26737 instanceof Object)){
var ex__9301__auto__ = e26737;
var statearr_26738_26760 = state_26713;
(statearr_26738_26760[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26761 = state_26713;
state_26713 = G__26761;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26713){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26739 = f__9319__auto__.call(null);
(statearr_26739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test26590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26591","meta26591",977845320,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test26590.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test26590.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test26590";

drop_dot.core_test.t_drop_dot$core_test26590.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test26590");
});

drop_dot.core_test.__GT_t_drop_dot$core_test26590 = (function drop_dot$core_test$__GT_t_drop_dot$core_test26590(meta26591){
return (new drop_dot.core_test.t_drop_dot$core_test26590(meta26591));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test26590(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test26762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test26762 = (function (meta26763){
this.meta26763 = meta26763;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test26762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26764,meta26763__$1){
var self__ = this;
var _26764__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test26762(meta26763__$1));
});

drop_dot.core_test.t_drop_dot$core_test26762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26764){
var self__ = this;
var _26764__$1 = this;
return self__.meta26763;
});

drop_dot.core_test.t_drop_dot$core_test26762.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test26762.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (1))){
var inst_26766 = cljs.core.async.chan.call(null);
var inst_26767 = done.call(null);
var state_26769__$1 = (function (){var statearr_26771 = state_26769;
(statearr_26771[(7)] = inst_26766);

return statearr_26771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26769__$1,inst_26767);
} else {
return null;
}
});})(c__9318__auto__,___10644__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26775 = [null,null,null,null,null,null,null,null];
(statearr_26775[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26775[(1)] = (1));

return statearr_26775;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26769){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26776){if((e26776 instanceof Object)){
var ex__9301__auto__ = e26776;
var statearr_26777_26792 = state_26769;
(statearr_26777_26792[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26793 = state_26769;
state_26769 = G__26793;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_26778 = f__9319__auto__.call(null);
(statearr_26778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test26762.prototype.apply = (function (self__,args26765){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26765)));
});

drop_dot.core_test.t_drop_dot$core_test26762.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_26782){
var state_val_26783 = (state_26782[(1)]);
if((state_val_26783 === (1))){
var inst_26779 = cljs.core.async.chan.call(null);
var inst_26780 = done.call(null);
var state_26782__$1 = (function (){var statearr_26784 = state_26782;
(statearr_26784[(7)] = inst_26779);

return statearr_26784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26782__$1,inst_26780);
} else {
return null;
}
});})(c__9318__auto__,___10644__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10644__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_26788 = [null,null,null,null,null,null,null,null];
(statearr_26788[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26788[(1)] = (1));

return statearr_26788;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26782){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26789){if((e26789 instanceof Object)){
var ex__9301__auto__ = e26789;
var statearr_26790_26794 = state_26782;
(statearr_26790_26794[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26795 = state_26782;
state_26782 = G__26795;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26782){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26791 = f__9319__auto__.call(null);
(statearr_26791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test26762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26763","meta26763",-1755990429,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test26762.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test26762.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test26762";

drop_dot.core_test.t_drop_dot$core_test26762.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test26762");
});

drop_dot.core_test.__GT_t_drop_dot$core_test26762 = (function drop_dot$core_test$__GT_t_drop_dot$core_test26762(meta26763){
return (new drop_dot.core_test.t_drop_dot$core_test26762(meta26763));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test26762(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test26796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test26796 = (function (meta26797){
this.meta26797 = meta26797;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test26796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26798,meta26797__$1){
var self__ = this;
var _26798__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test26796(meta26797__$1));
});

drop_dot.core_test.t_drop_dot$core_test26796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26798){
var self__ = this;
var _26798__$1 = this;
return self__.meta26797;
});

drop_dot.core_test.t_drop_dot$core_test26796.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test26796.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10644__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__,self____$1){
return (function (state_26841){
var state_val_26842 = (state_26841[(1)]);
if((state_val_26842 === (1))){
var state_26841__$1 = state_26841;
var statearr_26843_26922 = state_26841__$1;
(statearr_26843_26922[(2)] = null);

(statearr_26843_26922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26842 === (2))){
var inst_26838 = (state_26841[(2)]);
var inst_26839 = done.call(null);
var state_26841__$1 = (function (){var statearr_26844 = state_26841;
(statearr_26844[(7)] = inst_26838);

return statearr_26844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26841__$1,inst_26839);
} else {
if((state_val_26842 === (3))){
var inst_26800 = (state_26841[(2)]);
var inst_26801 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26802 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_26803 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26802,inst_26800,null];
var inst_26804 = cljs.core.PersistentHashMap.fromArrays(inst_26801,inst_26803);
var inst_26805 = cljs.test.do_report.call(null,inst_26804);
var state_26841__$1 = state_26841;
var statearr_26845_26923 = state_26841__$1;
(statearr_26845_26923[(2)] = inst_26805);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26842 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26841,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26809 = cljs.core.List.EMPTY;
var inst_26810 = cljs.core._conj.call(null,inst_26809,true);
var inst_26811 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_26841__$1 = (function (){var statearr_26846 = state_26841;
(statearr_26846[(8)] = inst_26810);

return statearr_26846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26841__$1,(5),inst_26811);
} else {
if((state_val_26842 === (5))){
var inst_26810 = (state_26841[(8)]);
var inst_26814 = (state_26841[(9)]);
var inst_26815 = (state_26841[(10)]);
var inst_26813 = (state_26841[(2)]);
var inst_26814__$1 = cljs.core._conj.call(null,inst_26810,inst_26813);
var inst_26815__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26814__$1);
var state_26841__$1 = (function (){var statearr_26847 = state_26841;
(statearr_26847[(9)] = inst_26814__$1);

(statearr_26847[(10)] = inst_26815__$1);

return statearr_26847;
})();
if(cljs.core.truth_(inst_26815__$1)){
var statearr_26848_26924 = state_26841__$1;
(statearr_26848_26924[(1)] = (6));

} else {
var statearr_26849_26925 = state_26841__$1;
(statearr_26849_26925[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26842 === (6))){
var inst_26814 = (state_26841[(9)]);
var inst_26817 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26818 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_26819 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26814);
var inst_26820 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26818,inst_26819,null];
var inst_26821 = cljs.core.PersistentHashMap.fromArrays(inst_26817,inst_26820);
var inst_26822 = cljs.test.do_report.call(null,inst_26821);
var state_26841__$1 = state_26841;
var statearr_26850_26926 = state_26841__$1;
(statearr_26850_26926[(2)] = inst_26822);

(statearr_26850_26926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26842 === (7))){
var inst_26814 = (state_26841[(9)]);
var inst_26824 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26825 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_26826 = cljs.core.List.EMPTY;
var inst_26827 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26828 = cljs.core.cons.call(null,inst_26827,inst_26814);
var inst_26829 = cljs.core._conj.call(null,inst_26826,inst_26828);
var inst_26830 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26831 = cljs.core._conj.call(null,inst_26829,inst_26830);
var inst_26832 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26825,inst_26831,null];
var inst_26833 = cljs.core.PersistentHashMap.fromArrays(inst_26824,inst_26832);
var inst_26834 = cljs.test.do_report.call(null,inst_26833);
var state_26841__$1 = state_26841;
var statearr_26851_26927 = state_26841__$1;
(statearr_26851_26927[(2)] = inst_26834);

(statearr_26851_26927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26842 === (8))){
var inst_26815 = (state_26841[(10)]);
var inst_26836 = (state_26841[(2)]);
var state_26841__$1 = (function (){var statearr_26852 = state_26841;
(statearr_26852[(11)] = inst_26836);

return statearr_26852;
})();
var statearr_26853_26928 = state_26841__$1;
(statearr_26853_26928[(2)] = inst_26815);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26841__$1);

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
var statearr_26857 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26857[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26857[(1)] = (1));

return statearr_26857;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26841){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26858){if((e26858 instanceof Object)){
var ex__9301__auto__ = e26858;
var statearr_26859_26929 = state_26841;
(statearr_26859_26929[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26930 = state_26841;
state_26841 = G__26930;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26841){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_26860 = f__9319__auto__.call(null);
(statearr_26860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test26796.prototype.apply = (function (self__,args26799){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26799)));
});

drop_dot.core_test.t_drop_dot$core_test26796.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10644__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10644__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10644__auto__){
return (function (state_26902){
var state_val_26903 = (state_26902[(1)]);
if((state_val_26903 === (1))){
var state_26902__$1 = state_26902;
var statearr_26904_26931 = state_26902__$1;
(statearr_26904_26931[(2)] = null);

(statearr_26904_26931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (2))){
var inst_26899 = (state_26902[(2)]);
var inst_26900 = done.call(null);
var state_26902__$1 = (function (){var statearr_26905 = state_26902;
(statearr_26905[(7)] = inst_26899);

return statearr_26905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else {
if((state_val_26903 === (3))){
var inst_26861 = (state_26902[(2)]);
var inst_26862 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26863 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_26864 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_26863,inst_26861,null];
var inst_26865 = cljs.core.PersistentHashMap.fromArrays(inst_26862,inst_26864);
var inst_26866 = cljs.test.do_report.call(null,inst_26865);
var state_26902__$1 = state_26902;
var statearr_26906_26932 = state_26902__$1;
(statearr_26906_26932[(2)] = inst_26866);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26902,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_26870 = cljs.core.List.EMPTY;
var inst_26871 = cljs.core._conj.call(null,inst_26870,true);
var inst_26872 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_26902__$1 = (function (){var statearr_26907 = state_26902;
(statearr_26907[(8)] = inst_26871);

return statearr_26907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26902__$1,(5),inst_26872);
} else {
if((state_val_26903 === (5))){
var inst_26875 = (state_26902[(9)]);
var inst_26876 = (state_26902[(10)]);
var inst_26871 = (state_26902[(8)]);
var inst_26874 = (state_26902[(2)]);
var inst_26875__$1 = cljs.core._conj.call(null,inst_26871,inst_26874);
var inst_26876__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_26875__$1);
var state_26902__$1 = (function (){var statearr_26908 = state_26902;
(statearr_26908[(9)] = inst_26875__$1);

(statearr_26908[(10)] = inst_26876__$1);

return statearr_26908;
})();
if(cljs.core.truth_(inst_26876__$1)){
var statearr_26909_26933 = state_26902__$1;
(statearr_26909_26933[(1)] = (6));

} else {
var statearr_26910_26934 = state_26902__$1;
(statearr_26910_26934[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (6))){
var inst_26875 = (state_26902[(9)]);
var inst_26878 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26879 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_26880 = cljs.core.cons.call(null,cljs.core._EQ_,inst_26875);
var inst_26881 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_26879,inst_26880,null];
var inst_26882 = cljs.core.PersistentHashMap.fromArrays(inst_26878,inst_26881);
var inst_26883 = cljs.test.do_report.call(null,inst_26882);
var state_26902__$1 = state_26902;
var statearr_26911_26935 = state_26902__$1;
(statearr_26911_26935[(2)] = inst_26883);

(statearr_26911_26935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (7))){
var inst_26875 = (state_26902[(9)]);
var inst_26885 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_26886 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_26887 = cljs.core.List.EMPTY;
var inst_26888 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_26889 = cljs.core.cons.call(null,inst_26888,inst_26875);
var inst_26890 = cljs.core._conj.call(null,inst_26887,inst_26889);
var inst_26891 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_26892 = cljs.core._conj.call(null,inst_26890,inst_26891);
var inst_26893 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_26886,inst_26892,null];
var inst_26894 = cljs.core.PersistentHashMap.fromArrays(inst_26885,inst_26893);
var inst_26895 = cljs.test.do_report.call(null,inst_26894);
var state_26902__$1 = state_26902;
var statearr_26912_26936 = state_26902__$1;
(statearr_26912_26936[(2)] = inst_26895);

(statearr_26912_26936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (8))){
var inst_26876 = (state_26902[(10)]);
var inst_26897 = (state_26902[(2)]);
var state_26902__$1 = (function (){var statearr_26913 = state_26902;
(statearr_26913[(11)] = inst_26897);

return statearr_26913;
})();
var statearr_26914_26937 = state_26902__$1;
(statearr_26914_26937[(2)] = inst_26876);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902__$1);

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
var statearr_26918 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26918[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_26918[(1)] = (1));

return statearr_26918;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_26902){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_26902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e26919){if((e26919 instanceof Object)){
var ex__9301__auto__ = e26919;
var statearr_26920_26938 = state_26902;
(statearr_26920_26938[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26939 = state_26902;
state_26902 = G__26939;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10644__auto__))
})();
var state__9320__auto__ = (function (){var statearr_26921 = f__9319__auto__.call(null);
(statearr_26921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_26921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10644__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test26796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26797","meta26797",1106750986,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test26796.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test26796.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test26796";

drop_dot.core_test.t_drop_dot$core_test26796.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test26796");
});

drop_dot.core_test.__GT_t_drop_dot$core_test26796 = (function drop_dot$core_test$__GT_t_drop_dot$core_test26796(meta26797){
return (new drop_dot.core_test.t_drop_dot$core_test26796(meta26797));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test26796(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map