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
if(typeof drop_dot.core_test.t_drop_dot$core_test91234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test91234 = (function (meta91235){
this.meta91235 = meta91235;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test91234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91236,meta91235__$1){
var self__ = this;
var _91236__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test91234(meta91235__$1));
});

drop_dot.core_test.t_drop_dot$core_test91234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91236){
var self__ = this;
var _91236__$1 = this;
return self__.meta91235;
});

drop_dot.core_test.t_drop_dot$core_test91234.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test91234.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91375){
var state_val_91376 = (state_91375[(1)]);
if((state_val_91376 === (7))){
var inst_91258 = (state_91375[(7)]);
var inst_91268 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91269 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91270 = cljs.core.List.EMPTY;
var inst_91271 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91272 = cljs.core.cons.call(null,inst_91271,inst_91258);
var inst_91273 = cljs.core._conj.call(null,inst_91270,inst_91272);
var inst_91274 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91275 = cljs.core._conj.call(null,inst_91273,inst_91274);
var inst_91276 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91269,inst_91275,null];
var inst_91277 = cljs.core.PersistentHashMap.fromArrays(inst_91268,inst_91276);
var inst_91278 = cljs.test.do_report.call(null,inst_91277);
var state_91375__$1 = state_91375;
var statearr_91377_91638 = state_91375__$1;
(statearr_91377_91638[(2)] = inst_91278);

(statearr_91377_91638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (20))){
var inst_91348 = (state_91375[(8)]);
var inst_91351 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91352 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91353 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91348);
var inst_91354 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91352,inst_91353,null];
var inst_91355 = cljs.core.PersistentHashMap.fromArrays(inst_91351,inst_91354);
var inst_91356 = cljs.test.do_report.call(null,inst_91355);
var state_91375__$1 = state_91375;
var statearr_91378_91639 = state_91375__$1;
(statearr_91378_91639[(2)] = inst_91356);

(statearr_91378_91639[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (1))){
var state_91375__$1 = state_91375;
var statearr_91379_91640 = state_91375__$1;
(statearr_91379_91640[(2)] = null);

(statearr_91379_91640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91375,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91247 = cljs.core.List.EMPTY;
var inst_91248 = cljs.core._conj.call(null,inst_91247,"ERROR:");
var inst_91252 = cljs.core.async.chan.call(null,(1));
var inst_91253 = (function (){var c__9318__auto____$1 = inst_91252;
return ((function (c__9318__auto____$1,_,inst_91247,inst_91248,inst_91252,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91247,inst_91248,inst_91252,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91250){
var state_val_91251 = (state_91250[(1)]);
if((state_val_91251 === (1))){
var state_91250__$1 = state_91250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91250__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91247,inst_91248,inst_91252,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91247,inst_91248,inst_91252,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91383 = [null,null,null,null,null,null,null];
(statearr_91383[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91383[(1)] = (1));

return statearr_91383;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91250){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91384){if((e91384 instanceof Object)){
var ex__9301__auto__ = e91384;
var statearr_91385_91641 = state_91250;
(statearr_91385_91641[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91642 = state_91250;
state_91250 = G__91642;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91250){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91247,inst_91248,inst_91252,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91386 = f__9319__auto__.call(null);
(statearr_91386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91247,inst_91248,inst_91252,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_91254 = cljs.core.async.impl.dispatch.run.call(null,inst_91253);
var inst_91255 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91252);
var state_91375__$1 = (function (){var statearr_91387 = state_91375;
(statearr_91387[(9)] = inst_91248);

(statearr_91387[(10)] = inst_91254);

return statearr_91387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91375__$1,(5),inst_91255);
} else {
if((state_val_91376 === (15))){
var inst_91304 = (state_91375[(11)]);
var inst_91325 = (state_91375[(2)]);
var state_91375__$1 = (function (){var statearr_91388 = state_91375;
(statearr_91388[(12)] = inst_91325);

return statearr_91388;
})();
var statearr_91389_91643 = state_91375__$1;
(statearr_91389_91643[(2)] = inst_91304);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (21))){
var inst_91348 = (state_91375[(8)]);
var inst_91358 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91359 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91360 = cljs.core.List.EMPTY;
var inst_91361 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91362 = cljs.core.cons.call(null,inst_91361,inst_91348);
var inst_91363 = cljs.core._conj.call(null,inst_91360,inst_91362);
var inst_91364 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91365 = cljs.core._conj.call(null,inst_91363,inst_91364);
var inst_91366 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91359,inst_91365,null];
var inst_91367 = cljs.core.PersistentHashMap.fromArrays(inst_91358,inst_91366);
var inst_91368 = cljs.test.do_report.call(null,inst_91367);
var state_91375__$1 = state_91375;
var statearr_91390_91644 = state_91375__$1;
(statearr_91390_91644[(2)] = inst_91368);

(statearr_91390_91644[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (13))){
var inst_91303 = (state_91375[(13)]);
var inst_91306 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91307 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91308 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91303);
var inst_91309 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91307,inst_91308,null];
var inst_91310 = cljs.core.PersistentHashMap.fromArrays(inst_91306,inst_91309);
var inst_91311 = cljs.test.do_report.call(null,inst_91310);
var state_91375__$1 = state_91375;
var statearr_91391_91645 = state_91375__$1;
(statearr_91391_91645[(2)] = inst_91311);

(statearr_91391_91645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (22))){
var inst_91349 = (state_91375[(14)]);
var inst_91370 = (state_91375[(2)]);
var state_91375__$1 = (function (){var statearr_91392 = state_91375;
(statearr_91392[(15)] = inst_91370);

return statearr_91392;
})();
var statearr_91393_91646 = state_91375__$1;
(statearr_91393_91646[(2)] = inst_91349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (6))){
var inst_91258 = (state_91375[(7)]);
var inst_91261 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91262 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91263 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91258);
var inst_91264 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91262,inst_91263,null];
var inst_91265 = cljs.core.PersistentHashMap.fromArrays(inst_91261,inst_91264);
var inst_91266 = cljs.test.do_report.call(null,inst_91265);
var state_91375__$1 = state_91375;
var statearr_91394_91647 = state_91375__$1;
(statearr_91394_91647[(2)] = inst_91266);

(statearr_91394_91647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (17))){
var inst_91328 = (state_91375[(2)]);
var inst_91329 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91330 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91331 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91330,inst_91328,null];
var inst_91332 = cljs.core.PersistentHashMap.fromArrays(inst_91329,inst_91331);
var inst_91333 = cljs.test.do_report.call(null,inst_91332);
var state_91375__$1 = state_91375;
var statearr_91395_91648 = state_91375__$1;
(statearr_91395_91648[(2)] = inst_91333);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (3))){
var inst_91238 = (state_91375[(2)]);
var inst_91239 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91240 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91241 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91240,inst_91238,null];
var inst_91242 = cljs.core.PersistentHashMap.fromArrays(inst_91239,inst_91241);
var inst_91243 = cljs.test.do_report.call(null,inst_91242);
var state_91375__$1 = state_91375;
var statearr_91396_91649 = state_91375__$1;
(statearr_91396_91649[(2)] = inst_91243);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (12))){
var inst_91293 = (state_91375[(16)]);
var inst_91303 = (state_91375[(13)]);
var inst_91304 = (state_91375[(11)]);
var inst_91302 = (state_91375[(2)]);
var inst_91303__$1 = cljs.core._conj.call(null,inst_91293,inst_91302);
var inst_91304__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91303__$1);
var state_91375__$1 = (function (){var statearr_91397 = state_91375;
(statearr_91397[(13)] = inst_91303__$1);

(statearr_91397[(11)] = inst_91304__$1);

return statearr_91397;
})();
if(cljs.core.truth_(inst_91304__$1)){
var statearr_91398_91650 = state_91375__$1;
(statearr_91398_91650[(1)] = (13));

} else {
var statearr_91399_91651 = state_91375__$1;
(statearr_91399_91651[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (2))){
var inst_91282 = (state_91375[(2)]);
var state_91375__$1 = (function (){var statearr_91400 = state_91375;
(statearr_91400[(17)] = inst_91282);

return statearr_91400;
})();
var statearr_91401_91652 = state_91375__$1;
(statearr_91401_91652[(2)] = null);

(statearr_91401_91652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (19))){
var inst_91349 = (state_91375[(14)]);
var inst_91338 = (state_91375[(18)]);
var inst_91348 = (state_91375[(8)]);
var inst_91347 = (state_91375[(2)]);
var inst_91348__$1 = cljs.core._conj.call(null,inst_91338,inst_91347);
var inst_91349__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91348__$1);
var state_91375__$1 = (function (){var statearr_91402 = state_91375;
(statearr_91402[(14)] = inst_91349__$1);

(statearr_91402[(8)] = inst_91348__$1);

return statearr_91402;
})();
if(cljs.core.truth_(inst_91349__$1)){
var statearr_91403_91653 = state_91375__$1;
(statearr_91403_91653[(1)] = (20));

} else {
var statearr_91404_91654 = state_91375__$1;
(statearr_91404_91654[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91375,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91292 = cljs.core.List.EMPTY;
var inst_91293 = cljs.core._conj.call(null,inst_91292,"ERROR: ");
var inst_91297 = cljs.core.async.chan.call(null,(1));
var inst_91298 = (function (){var c__9318__auto____$1 = inst_91297;
return ((function (c__9318__auto____$1,_,inst_91292,inst_91293,inst_91297,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91292,inst_91293,inst_91297,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91295){
var state_val_91296 = (state_91295[(1)]);
if((state_val_91296 === (1))){
var state_91295__$1 = state_91295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91295__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91292,inst_91293,inst_91297,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91292,inst_91293,inst_91297,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91408 = [null,null,null,null,null,null,null];
(statearr_91408[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91408[(1)] = (1));

return statearr_91408;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91295){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91409){if((e91409 instanceof Object)){
var ex__9301__auto__ = e91409;
var statearr_91410_91655 = state_91295;
(statearr_91410_91655[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91656 = state_91295;
state_91295 = G__91656;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91295){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91292,inst_91293,inst_91297,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91411 = f__9319__auto__.call(null);
(statearr_91411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91292,inst_91293,inst_91297,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_91299 = cljs.core.async.impl.dispatch.run.call(null,inst_91298);
var inst_91300 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91297);
var state_91375__$1 = (function (){var statearr_91412 = state_91375;
(statearr_91412[(16)] = inst_91293);

(statearr_91412[(19)] = inst_91299);

return statearr_91412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91375__$1,(12),inst_91300);
} else {
if((state_val_91376 === (9))){
var inst_91327 = (state_91375[(2)]);
var state_91375__$1 = (function (){var statearr_91413 = state_91375;
(statearr_91413[(20)] = inst_91327);

return statearr_91413;
})();
var statearr_91414_91657 = state_91375__$1;
(statearr_91414_91657[(2)] = null);

(statearr_91414_91657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (5))){
var inst_91248 = (state_91375[(9)]);
var inst_91259 = (state_91375[(21)]);
var inst_91258 = (state_91375[(7)]);
var inst_91257 = (state_91375[(2)]);
var inst_91258__$1 = cljs.core._conj.call(null,inst_91248,inst_91257);
var inst_91259__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91258__$1);
var state_91375__$1 = (function (){var statearr_91415 = state_91375;
(statearr_91415[(21)] = inst_91259__$1);

(statearr_91415[(7)] = inst_91258__$1);

return statearr_91415;
})();
if(cljs.core.truth_(inst_91259__$1)){
var statearr_91416_91658 = state_91375__$1;
(statearr_91416_91658[(1)] = (6));

} else {
var statearr_91417_91659 = state_91375__$1;
(statearr_91417_91659[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (14))){
var inst_91303 = (state_91375[(13)]);
var inst_91313 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91314 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91315 = cljs.core.List.EMPTY;
var inst_91316 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91317 = cljs.core.cons.call(null,inst_91316,inst_91303);
var inst_91318 = cljs.core._conj.call(null,inst_91315,inst_91317);
var inst_91319 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91320 = cljs.core._conj.call(null,inst_91318,inst_91319);
var inst_91321 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91314,inst_91320,null];
var inst_91322 = cljs.core.PersistentHashMap.fromArrays(inst_91313,inst_91321);
var inst_91323 = cljs.test.do_report.call(null,inst_91322);
var state_91375__$1 = state_91375;
var statearr_91418_91660 = state_91375__$1;
(statearr_91418_91660[(2)] = inst_91323);

(statearr_91418_91660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (16))){
var inst_91372 = (state_91375[(2)]);
var inst_91373 = done.call(null);
var state_91375__$1 = (function (){var statearr_91419 = state_91375;
(statearr_91419[(22)] = inst_91372);

return statearr_91419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91375__$1,inst_91373);
} else {
if((state_val_91376 === (10))){
var inst_91283 = (state_91375[(2)]);
var inst_91284 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91285 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91286 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91285,inst_91283,null];
var inst_91287 = cljs.core.PersistentHashMap.fromArrays(inst_91284,inst_91286);
var inst_91288 = cljs.test.do_report.call(null,inst_91287);
var state_91375__$1 = state_91375;
var statearr_91420_91661 = state_91375__$1;
(statearr_91420_91661[(2)] = inst_91288);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91376 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91375,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_91337 = cljs.core.List.EMPTY;
var inst_91338 = cljs.core._conj.call(null,inst_91337,"~/.in-drop-dot-only");
var inst_91342 = cljs.core.async.chan.call(null,(1));
var inst_91343 = (function (){var c__9318__auto____$1 = inst_91342;
return ((function (c__9318__auto____$1,_,inst_91337,inst_91338,inst_91342,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91337,inst_91338,inst_91342,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91340){
var state_val_91341 = (state_91340[(1)]);
if((state_val_91341 === (1))){
var state_91340__$1 = state_91340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91340__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91337,inst_91338,inst_91342,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91337,inst_91338,inst_91342,state_val_91376,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91424 = [null,null,null,null,null,null,null];
(statearr_91424[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91424[(1)] = (1));

return statearr_91424;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91340){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91425){if((e91425 instanceof Object)){
var ex__9301__auto__ = e91425;
var statearr_91426_91662 = state_91340;
(statearr_91426_91662[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91663 = state_91340;
state_91340 = G__91663;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91340){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91337,inst_91338,inst_91342,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91427 = f__9319__auto__.call(null);
(statearr_91427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91337,inst_91338,inst_91342,state_val_91376,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_91344 = cljs.core.async.impl.dispatch.run.call(null,inst_91343);
var inst_91345 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91342);
var state_91375__$1 = (function (){var statearr_91428 = state_91375;
(statearr_91428[(18)] = inst_91338);

(statearr_91428[(23)] = inst_91344);

return statearr_91428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91375__$1,(19),inst_91345);
} else {
if((state_val_91376 === (8))){
var inst_91259 = (state_91375[(21)]);
var inst_91280 = (state_91375[(2)]);
var state_91375__$1 = (function (){var statearr_91429 = state_91375;
(statearr_91429[(24)] = inst_91280);

return statearr_91429;
})();
var statearr_91430_91664 = state_91375__$1;
(statearr_91430_91664[(2)] = inst_91259);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375__$1);

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
var statearr_91434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91434[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91434[(1)] = (1));

return statearr_91434;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91375){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91435){if((e91435 instanceof Object)){
var ex__9301__auto__ = e91435;
var statearr_91436_91665 = state_91375;
(statearr_91436_91665[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91666 = state_91375;
state_91375 = G__91666;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91375){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91437 = f__9319__auto__.call(null);
(statearr_91437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91234.prototype.apply = (function (self__,args91237){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args91237)));
});

drop_dot.core_test.t_drop_dot$core_test91234.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_91575){
var state_val_91576 = (state_91575[(1)]);
if((state_val_91576 === (7))){
var inst_91458 = (state_91575[(7)]);
var inst_91468 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91469 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91470 = cljs.core.List.EMPTY;
var inst_91471 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91472 = cljs.core.cons.call(null,inst_91471,inst_91458);
var inst_91473 = cljs.core._conj.call(null,inst_91470,inst_91472);
var inst_91474 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91475 = cljs.core._conj.call(null,inst_91473,inst_91474);
var inst_91476 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91469,inst_91475,null];
var inst_91477 = cljs.core.PersistentHashMap.fromArrays(inst_91468,inst_91476);
var inst_91478 = cljs.test.do_report.call(null,inst_91477);
var state_91575__$1 = state_91575;
var statearr_91577_91667 = state_91575__$1;
(statearr_91577_91667[(2)] = inst_91478);

(statearr_91577_91667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (20))){
var inst_91548 = (state_91575[(8)]);
var inst_91551 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91552 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91553 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91548);
var inst_91554 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91552,inst_91553,null];
var inst_91555 = cljs.core.PersistentHashMap.fromArrays(inst_91551,inst_91554);
var inst_91556 = cljs.test.do_report.call(null,inst_91555);
var state_91575__$1 = state_91575;
var statearr_91578_91668 = state_91575__$1;
(statearr_91578_91668[(2)] = inst_91556);

(statearr_91578_91668[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (1))){
var state_91575__$1 = state_91575;
var statearr_91579_91669 = state_91575__$1;
(statearr_91579_91669[(2)] = null);

(statearr_91579_91669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91575,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91447 = cljs.core.List.EMPTY;
var inst_91448 = cljs.core._conj.call(null,inst_91447,"ERROR:");
var inst_91452 = cljs.core.async.chan.call(null,(1));
var inst_91453 = (function (){var c__9318__auto____$1 = inst_91452;
return ((function (c__9318__auto____$1,_,inst_91447,inst_91448,inst_91452,state_val_91576,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91447,inst_91448,inst_91452,state_val_91576,c__9318__auto__,___10407__auto__){
return (function (state_91450){
var state_val_91451 = (state_91450[(1)]);
if((state_val_91451 === (1))){
var state_91450__$1 = state_91450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91450__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91447,inst_91448,inst_91452,state_val_91576,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91447,inst_91448,inst_91452,state_val_91576,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91583 = [null,null,null,null,null,null,null];
(statearr_91583[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91583[(1)] = (1));

return statearr_91583;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91450){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91584){if((e91584 instanceof Object)){
var ex__9301__auto__ = e91584;
var statearr_91585_91670 = state_91450;
(statearr_91585_91670[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91671 = state_91450;
state_91450 = G__91671;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91450){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91447,inst_91448,inst_91452,state_val_91576,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91586 = f__9319__auto__.call(null);
(statearr_91586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91447,inst_91448,inst_91452,state_val_91576,c__9318__auto__,___10407__auto__))
})();
var inst_91454 = cljs.core.async.impl.dispatch.run.call(null,inst_91453);
var inst_91455 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91452);
var state_91575__$1 = (function (){var statearr_91587 = state_91575;
(statearr_91587[(9)] = inst_91454);

(statearr_91587[(10)] = inst_91448);

return statearr_91587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91575__$1,(5),inst_91455);
} else {
if((state_val_91576 === (15))){
var inst_91504 = (state_91575[(11)]);
var inst_91525 = (state_91575[(2)]);
var state_91575__$1 = (function (){var statearr_91588 = state_91575;
(statearr_91588[(12)] = inst_91525);

return statearr_91588;
})();
var statearr_91589_91672 = state_91575__$1;
(statearr_91589_91672[(2)] = inst_91504);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (21))){
var inst_91548 = (state_91575[(8)]);
var inst_91558 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91559 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91560 = cljs.core.List.EMPTY;
var inst_91561 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91562 = cljs.core.cons.call(null,inst_91561,inst_91548);
var inst_91563 = cljs.core._conj.call(null,inst_91560,inst_91562);
var inst_91564 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91565 = cljs.core._conj.call(null,inst_91563,inst_91564);
var inst_91566 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91559,inst_91565,null];
var inst_91567 = cljs.core.PersistentHashMap.fromArrays(inst_91558,inst_91566);
var inst_91568 = cljs.test.do_report.call(null,inst_91567);
var state_91575__$1 = state_91575;
var statearr_91590_91673 = state_91575__$1;
(statearr_91590_91673[(2)] = inst_91568);

(statearr_91590_91673[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (13))){
var inst_91503 = (state_91575[(13)]);
var inst_91506 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91507 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91508 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91503);
var inst_91509 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91507,inst_91508,null];
var inst_91510 = cljs.core.PersistentHashMap.fromArrays(inst_91506,inst_91509);
var inst_91511 = cljs.test.do_report.call(null,inst_91510);
var state_91575__$1 = state_91575;
var statearr_91591_91674 = state_91575__$1;
(statearr_91591_91674[(2)] = inst_91511);

(statearr_91591_91674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (22))){
var inst_91549 = (state_91575[(14)]);
var inst_91570 = (state_91575[(2)]);
var state_91575__$1 = (function (){var statearr_91592 = state_91575;
(statearr_91592[(15)] = inst_91570);

return statearr_91592;
})();
var statearr_91593_91675 = state_91575__$1;
(statearr_91593_91675[(2)] = inst_91549);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (6))){
var inst_91458 = (state_91575[(7)]);
var inst_91461 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91462 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91463 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91458);
var inst_91464 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91462,inst_91463,null];
var inst_91465 = cljs.core.PersistentHashMap.fromArrays(inst_91461,inst_91464);
var inst_91466 = cljs.test.do_report.call(null,inst_91465);
var state_91575__$1 = state_91575;
var statearr_91594_91676 = state_91575__$1;
(statearr_91594_91676[(2)] = inst_91466);

(statearr_91594_91676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (17))){
var inst_91528 = (state_91575[(2)]);
var inst_91529 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91530 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-only"))),"~/.in-drop-dot-only");
var inst_91531 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91530,inst_91528,null];
var inst_91532 = cljs.core.PersistentHashMap.fromArrays(inst_91529,inst_91531);
var inst_91533 = cljs.test.do_report.call(null,inst_91532);
var state_91575__$1 = state_91575;
var statearr_91595_91677 = state_91575__$1;
(statearr_91595_91677[(2)] = inst_91533);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (3))){
var inst_91438 = (state_91575[(2)]);
var inst_91439 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91440 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"ERROR:");
var inst_91441 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91440,inst_91438,null];
var inst_91442 = cljs.core.PersistentHashMap.fromArrays(inst_91439,inst_91441);
var inst_91443 = cljs.test.do_report.call(null,inst_91442);
var state_91575__$1 = state_91575;
var statearr_91596_91678 = state_91575__$1;
(statearr_91596_91678[(2)] = inst_91443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (12))){
var inst_91504 = (state_91575[(11)]);
var inst_91503 = (state_91575[(13)]);
var inst_91493 = (state_91575[(16)]);
var inst_91502 = (state_91575[(2)]);
var inst_91503__$1 = cljs.core._conj.call(null,inst_91493,inst_91502);
var inst_91504__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91503__$1);
var state_91575__$1 = (function (){var statearr_91597 = state_91575;
(statearr_91597[(11)] = inst_91504__$1);

(statearr_91597[(13)] = inst_91503__$1);

return statearr_91597;
})();
if(cljs.core.truth_(inst_91504__$1)){
var statearr_91598_91679 = state_91575__$1;
(statearr_91598_91679[(1)] = (13));

} else {
var statearr_91599_91680 = state_91575__$1;
(statearr_91599_91680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (2))){
var inst_91482 = (state_91575[(2)]);
var state_91575__$1 = (function (){var statearr_91600 = state_91575;
(statearr_91600[(17)] = inst_91482);

return statearr_91600;
})();
var statearr_91601_91681 = state_91575__$1;
(statearr_91601_91681[(2)] = null);

(statearr_91601_91681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (19))){
var inst_91538 = (state_91575[(18)]);
var inst_91549 = (state_91575[(14)]);
var inst_91548 = (state_91575[(8)]);
var inst_91547 = (state_91575[(2)]);
var inst_91548__$1 = cljs.core._conj.call(null,inst_91538,inst_91547);
var inst_91549__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91548__$1);
var state_91575__$1 = (function (){var statearr_91602 = state_91575;
(statearr_91602[(14)] = inst_91549__$1);

(statearr_91602[(8)] = inst_91548__$1);

return statearr_91602;
})();
if(cljs.core.truth_(inst_91549__$1)){
var statearr_91603_91682 = state_91575__$1;
(statearr_91603_91682[(1)] = (20));

} else {
var statearr_91604_91683 = state_91575__$1;
(statearr_91604_91683[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91575,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91492 = cljs.core.List.EMPTY;
var inst_91493 = cljs.core._conj.call(null,inst_91492,"ERROR: ");
var inst_91497 = cljs.core.async.chan.call(null,(1));
var inst_91498 = (function (){var c__9318__auto____$1 = inst_91497;
return ((function (c__9318__auto____$1,_,inst_91492,inst_91493,inst_91497,state_val_91576,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91492,inst_91493,inst_91497,state_val_91576,c__9318__auto__,___10407__auto__){
return (function (state_91495){
var state_val_91496 = (state_91495[(1)]);
if((state_val_91496 === (1))){
var state_91495__$1 = state_91495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91495__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91492,inst_91493,inst_91497,state_val_91576,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91492,inst_91493,inst_91497,state_val_91576,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91608 = [null,null,null,null,null,null,null];
(statearr_91608[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91608[(1)] = (1));

return statearr_91608;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91495){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91609){if((e91609 instanceof Object)){
var ex__9301__auto__ = e91609;
var statearr_91610_91684 = state_91495;
(statearr_91610_91684[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91685 = state_91495;
state_91495 = G__91685;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91495){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91492,inst_91493,inst_91497,state_val_91576,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91611 = f__9319__auto__.call(null);
(statearr_91611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91492,inst_91493,inst_91497,state_val_91576,c__9318__auto__,___10407__auto__))
})();
var inst_91499 = cljs.core.async.impl.dispatch.run.call(null,inst_91498);
var inst_91500 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91497);
var state_91575__$1 = (function (){var statearr_91612 = state_91575;
(statearr_91612[(19)] = inst_91499);

(statearr_91612[(16)] = inst_91493);

return statearr_91612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91575__$1,(12),inst_91500);
} else {
if((state_val_91576 === (9))){
var inst_91527 = (state_91575[(2)]);
var state_91575__$1 = (function (){var statearr_91613 = state_91575;
(statearr_91613[(20)] = inst_91527);

return statearr_91613;
})();
var statearr_91614_91686 = state_91575__$1;
(statearr_91614_91686[(2)] = null);

(statearr_91614_91686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (5))){
var inst_91458 = (state_91575[(7)]);
var inst_91459 = (state_91575[(21)]);
var inst_91448 = (state_91575[(10)]);
var inst_91457 = (state_91575[(2)]);
var inst_91458__$1 = cljs.core._conj.call(null,inst_91448,inst_91457);
var inst_91459__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91458__$1);
var state_91575__$1 = (function (){var statearr_91615 = state_91575;
(statearr_91615[(7)] = inst_91458__$1);

(statearr_91615[(21)] = inst_91459__$1);

return statearr_91615;
})();
if(cljs.core.truth_(inst_91459__$1)){
var statearr_91616_91687 = state_91575__$1;
(statearr_91616_91687[(1)] = (6));

} else {
var statearr_91617_91688 = state_91575__$1;
(statearr_91617_91688[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (14))){
var inst_91503 = (state_91575[(13)]);
var inst_91513 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91514 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91515 = cljs.core.List.EMPTY;
var inst_91516 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91517 = cljs.core.cons.call(null,inst_91516,inst_91503);
var inst_91518 = cljs.core._conj.call(null,inst_91515,inst_91517);
var inst_91519 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91520 = cljs.core._conj.call(null,inst_91518,inst_91519);
var inst_91521 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91514,inst_91520,null];
var inst_91522 = cljs.core.PersistentHashMap.fromArrays(inst_91513,inst_91521);
var inst_91523 = cljs.test.do_report.call(null,inst_91522);
var state_91575__$1 = state_91575;
var statearr_91618_91689 = state_91575__$1;
(statearr_91618_91689[(2)] = inst_91523);

(statearr_91618_91689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (16))){
var inst_91572 = (state_91575[(2)]);
var inst_91573 = done.call(null);
var state_91575__$1 = (function (){var statearr_91619 = state_91575;
(statearr_91619[(22)] = inst_91572);

return statearr_91619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91575__$1,inst_91573);
} else {
if((state_val_91576 === (10))){
var inst_91483 = (state_91575[(2)]);
var inst_91484 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91485 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking","core/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking",1784328286,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"ERROR: ");
var inst_91486 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91485,inst_91483,null];
var inst_91487 = cljs.core.PersistentHashMap.fromArrays(inst_91484,inst_91486);
var inst_91488 = cljs.test.do_report.call(null,inst_91487);
var state_91575__$1 = state_91575;
var statearr_91620_91690 = state_91575__$1;
(statearr_91620_91690[(2)] = inst_91488);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91576 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91575,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_91537 = cljs.core.List.EMPTY;
var inst_91538 = cljs.core._conj.call(null,inst_91537,"~/.in-drop-dot-only");
var inst_91542 = cljs.core.async.chan.call(null,(1));
var inst_91543 = (function (){var c__9318__auto____$1 = inst_91542;
return ((function (c__9318__auto____$1,_,inst_91537,inst_91538,inst_91542,state_val_91576,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91537,inst_91538,inst_91542,state_val_91576,c__9318__auto__,___10407__auto__){
return (function (state_91540){
var state_val_91541 = (state_91540[(1)]);
if((state_val_91541 === (1))){
var state_91540__$1 = state_91540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91540__$1,"~/.in-drop-dot-only");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91537,inst_91538,inst_91542,state_val_91576,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91537,inst_91538,inst_91542,state_val_91576,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91624 = [null,null,null,null,null,null,null];
(statearr_91624[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91624[(1)] = (1));

return statearr_91624;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91540){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91625){if((e91625 instanceof Object)){
var ex__9301__auto__ = e91625;
var statearr_91626_91691 = state_91540;
(statearr_91626_91691[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91692 = state_91540;
state_91540 = G__91692;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91540){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91537,inst_91538,inst_91542,state_val_91576,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91627 = f__9319__auto__.call(null);
(statearr_91627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91537,inst_91538,inst_91542,state_val_91576,c__9318__auto__,___10407__auto__))
})();
var inst_91544 = cljs.core.async.impl.dispatch.run.call(null,inst_91543);
var inst_91545 = drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,inst_91542);
var state_91575__$1 = (function (){var statearr_91628 = state_91575;
(statearr_91628[(23)] = inst_91544);

(statearr_91628[(18)] = inst_91538);

return statearr_91628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91575__$1,(19),inst_91545);
} else {
if((state_val_91576 === (8))){
var inst_91459 = (state_91575[(21)]);
var inst_91480 = (state_91575[(2)]);
var state_91575__$1 = (function (){var statearr_91629 = state_91575;
(statearr_91629[(24)] = inst_91480);

return statearr_91629;
})();
var statearr_91630_91693 = state_91575__$1;
(statearr_91630_91693[(2)] = inst_91459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575__$1);

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
var statearr_91634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91634[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91634[(1)] = (1));

return statearr_91634;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91575){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91635){if((e91635 instanceof Object)){
var ex__9301__auto__ = e91635;
var statearr_91636_91694 = state_91575;
(statearr_91636_91694[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91695 = state_91575;
state_91575 = G__91695;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91575){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91637 = f__9319__auto__.call(null);
(statearr_91637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta91235","meta91235",1532013483,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test91234.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test91234.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test91234";

drop_dot.core_test.t_drop_dot$core_test91234.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test91234");
});

drop_dot.core_test.__GT_t_drop_dot$core_test91234 = (function drop_dot$core_test$__GT_t_drop_dot$core_test91234(meta91235){
return (new drop_dot.core_test.t_drop_dot$core_test91234(meta91235));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test91234(null));
});

drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","drop-dot.core-test/chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1225581940,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST","chan-linkable-path-that-wants-linking->chan-linkable-path-without-conflict-that-needs-linking-TEST",1291546161,null),"test/drop_dot/core_test.cljs",108,1,21,21,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST)?drop_dot.core_test.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST = (function drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var);
});
drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test91696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test91696 = (function (meta91697){
this.meta91697 = meta91697;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test91696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91698,meta91697__$1){
var self__ = this;
var _91698__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test91696(meta91697__$1));
});

drop_dot.core_test.t_drop_dot$core_test91696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91698){
var self__ = this;
var _91698__$1 = this;
return self__.meta91697;
});

drop_dot.core_test.t_drop_dot$core_test91696.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test91696.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91837){
var state_val_91838 = (state_91837[(1)]);
if((state_val_91838 === (7))){
var inst_91720 = (state_91837[(7)]);
var inst_91730 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91731 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91732 = cljs.core.List.EMPTY;
var inst_91733 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91734 = cljs.core.cons.call(null,inst_91733,inst_91720);
var inst_91735 = cljs.core._conj.call(null,inst_91732,inst_91734);
var inst_91736 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91737 = cljs.core._conj.call(null,inst_91735,inst_91736);
var inst_91738 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91731,inst_91737,null];
var inst_91739 = cljs.core.PersistentHashMap.fromArrays(inst_91730,inst_91738);
var inst_91740 = cljs.test.do_report.call(null,inst_91739);
var state_91837__$1 = state_91837;
var statearr_91839_92100 = state_91837__$1;
(statearr_91839_92100[(2)] = inst_91740);

(statearr_91839_92100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (20))){
var inst_91810 = (state_91837[(8)]);
var inst_91813 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91814 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_91815 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91810);
var inst_91816 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91814,inst_91815,null];
var inst_91817 = cljs.core.PersistentHashMap.fromArrays(inst_91813,inst_91816);
var inst_91818 = cljs.test.do_report.call(null,inst_91817);
var state_91837__$1 = state_91837;
var statearr_91840_92101 = state_91837__$1;
(statearr_91840_92101[(2)] = inst_91818);

(statearr_91840_92101[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (1))){
var state_91837__$1 = state_91837;
var statearr_91841_92102 = state_91837__$1;
(statearr_91841_92102[(2)] = null);

(statearr_91841_92102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91837,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91709 = cljs.core.List.EMPTY;
var inst_91710 = cljs.core._conj.call(null,inst_91709,"NOTICE: ");
var inst_91714 = cljs.core.async.chan.call(null,(1));
var inst_91715 = (function (){var c__9318__auto____$1 = inst_91714;
return ((function (c__9318__auto____$1,_,inst_91709,inst_91710,inst_91714,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91709,inst_91710,inst_91714,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91712){
var state_val_91713 = (state_91712[(1)]);
if((state_val_91713 === (1))){
var state_91712__$1 = state_91712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91712__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91709,inst_91710,inst_91714,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91709,inst_91710,inst_91714,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91845 = [null,null,null,null,null,null,null];
(statearr_91845[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91845[(1)] = (1));

return statearr_91845;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91712){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91846){if((e91846 instanceof Object)){
var ex__9301__auto__ = e91846;
var statearr_91847_92103 = state_91712;
(statearr_91847_92103[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92104 = state_91712;
state_91712 = G__92104;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91712){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91709,inst_91710,inst_91714,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91848 = f__9319__auto__.call(null);
(statearr_91848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91709,inst_91710,inst_91714,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_91716 = cljs.core.async.impl.dispatch.run.call(null,inst_91715);
var inst_91717 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_91714);
var state_91837__$1 = (function (){var statearr_91849 = state_91837;
(statearr_91849[(9)] = inst_91716);

(statearr_91849[(10)] = inst_91710);

return statearr_91849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91837__$1,(5),inst_91717);
} else {
if((state_val_91838 === (15))){
var inst_91766 = (state_91837[(11)]);
var inst_91787 = (state_91837[(2)]);
var state_91837__$1 = (function (){var statearr_91850 = state_91837;
(statearr_91850[(12)] = inst_91787);

return statearr_91850;
})();
var statearr_91851_92105 = state_91837__$1;
(statearr_91851_92105[(2)] = inst_91766);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (21))){
var inst_91810 = (state_91837[(8)]);
var inst_91820 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91821 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_91822 = cljs.core.List.EMPTY;
var inst_91823 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91824 = cljs.core.cons.call(null,inst_91823,inst_91810);
var inst_91825 = cljs.core._conj.call(null,inst_91822,inst_91824);
var inst_91826 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91827 = cljs.core._conj.call(null,inst_91825,inst_91826);
var inst_91828 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91821,inst_91827,null];
var inst_91829 = cljs.core.PersistentHashMap.fromArrays(inst_91820,inst_91828);
var inst_91830 = cljs.test.do_report.call(null,inst_91829);
var state_91837__$1 = state_91837;
var statearr_91852_92106 = state_91837__$1;
(statearr_91852_92106[(2)] = inst_91830);

(statearr_91852_92106[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (13))){
var inst_91765 = (state_91837[(13)]);
var inst_91768 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91769 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91770 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91765);
var inst_91771 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91769,inst_91770,null];
var inst_91772 = cljs.core.PersistentHashMap.fromArrays(inst_91768,inst_91771);
var inst_91773 = cljs.test.do_report.call(null,inst_91772);
var state_91837__$1 = state_91837;
var statearr_91853_92107 = state_91837__$1;
(statearr_91853_92107[(2)] = inst_91773);

(statearr_91853_92107[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (22))){
var inst_91811 = (state_91837[(14)]);
var inst_91832 = (state_91837[(2)]);
var state_91837__$1 = (function (){var statearr_91854 = state_91837;
(statearr_91854[(15)] = inst_91832);

return statearr_91854;
})();
var statearr_91855_92108 = state_91837__$1;
(statearr_91855_92108[(2)] = inst_91811);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (6))){
var inst_91720 = (state_91837[(7)]);
var inst_91723 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91724 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91725 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91720);
var inst_91726 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91724,inst_91725,null];
var inst_91727 = cljs.core.PersistentHashMap.fromArrays(inst_91723,inst_91726);
var inst_91728 = cljs.test.do_report.call(null,inst_91727);
var state_91837__$1 = state_91837;
var statearr_91856_92109 = state_91837__$1;
(statearr_91856_92109[(2)] = inst_91728);

(statearr_91856_92109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (17))){
var inst_91790 = (state_91837[(2)]);
var inst_91791 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91792 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_91793 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91792,inst_91790,null];
var inst_91794 = cljs.core.PersistentHashMap.fromArrays(inst_91791,inst_91793);
var inst_91795 = cljs.test.do_report.call(null,inst_91794);
var state_91837__$1 = state_91837;
var statearr_91857_92110 = state_91837__$1;
(statearr_91857_92110[(2)] = inst_91795);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (3))){
var inst_91700 = (state_91837[(2)]);
var inst_91701 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91702 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91703 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91702,inst_91700,null];
var inst_91704 = cljs.core.PersistentHashMap.fromArrays(inst_91701,inst_91703);
var inst_91705 = cljs.test.do_report.call(null,inst_91704);
var state_91837__$1 = state_91837;
var statearr_91858_92111 = state_91837__$1;
(statearr_91858_92111[(2)] = inst_91705);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (12))){
var inst_91765 = (state_91837[(13)]);
var inst_91766 = (state_91837[(11)]);
var inst_91755 = (state_91837[(16)]);
var inst_91764 = (state_91837[(2)]);
var inst_91765__$1 = cljs.core._conj.call(null,inst_91755,inst_91764);
var inst_91766__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91765__$1);
var state_91837__$1 = (function (){var statearr_91859 = state_91837;
(statearr_91859[(13)] = inst_91765__$1);

(statearr_91859[(11)] = inst_91766__$1);

return statearr_91859;
})();
if(cljs.core.truth_(inst_91766__$1)){
var statearr_91860_92112 = state_91837__$1;
(statearr_91860_92112[(1)] = (13));

} else {
var statearr_91861_92113 = state_91837__$1;
(statearr_91861_92113[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (2))){
var inst_91744 = (state_91837[(2)]);
var state_91837__$1 = (function (){var statearr_91862 = state_91837;
(statearr_91862[(17)] = inst_91744);

return statearr_91862;
})();
var statearr_91863_92114 = state_91837__$1;
(statearr_91863_92114[(2)] = null);

(statearr_91863_92114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (19))){
var inst_91810 = (state_91837[(8)]);
var inst_91811 = (state_91837[(14)]);
var inst_91800 = (state_91837[(18)]);
var inst_91809 = (state_91837[(2)]);
var inst_91810__$1 = cljs.core._conj.call(null,inst_91800,inst_91809);
var inst_91811__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91810__$1);
var state_91837__$1 = (function (){var statearr_91864 = state_91837;
(statearr_91864[(8)] = inst_91810__$1);

(statearr_91864[(14)] = inst_91811__$1);

return statearr_91864;
})();
if(cljs.core.truth_(inst_91811__$1)){
var statearr_91865_92115 = state_91837__$1;
(statearr_91865_92115[(1)] = (20));

} else {
var statearr_91866_92116 = state_91837__$1;
(statearr_91866_92116[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91837,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91754 = cljs.core.List.EMPTY;
var inst_91755 = cljs.core._conj.call(null,inst_91754,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91759 = cljs.core.async.chan.call(null,(1));
var inst_91760 = (function (){var c__9318__auto____$1 = inst_91759;
return ((function (c__9318__auto____$1,_,inst_91754,inst_91755,inst_91759,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91754,inst_91755,inst_91759,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91757){
var state_val_91758 = (state_91757[(1)]);
if((state_val_91758 === (1))){
var state_91757__$1 = state_91757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91757__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91754,inst_91755,inst_91759,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91754,inst_91755,inst_91759,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91870 = [null,null,null,null,null,null,null];
(statearr_91870[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91870[(1)] = (1));

return statearr_91870;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91757){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91871){if((e91871 instanceof Object)){
var ex__9301__auto__ = e91871;
var statearr_91872_92117 = state_91757;
(statearr_91872_92117[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92118 = state_91757;
state_91757 = G__92118;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91757){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91754,inst_91755,inst_91759,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91873 = f__9319__auto__.call(null);
(statearr_91873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91754,inst_91755,inst_91759,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_91761 = cljs.core.async.impl.dispatch.run.call(null,inst_91760);
var inst_91762 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_91759);
var state_91837__$1 = (function (){var statearr_91874 = state_91837;
(statearr_91874[(19)] = inst_91761);

(statearr_91874[(16)] = inst_91755);

return statearr_91874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91837__$1,(12),inst_91762);
} else {
if((state_val_91838 === (9))){
var inst_91789 = (state_91837[(2)]);
var state_91837__$1 = (function (){var statearr_91875 = state_91837;
(statearr_91875[(20)] = inst_91789);

return statearr_91875;
})();
var statearr_91876_92119 = state_91837__$1;
(statearr_91876_92119[(2)] = null);

(statearr_91876_92119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (5))){
var inst_91720 = (state_91837[(7)]);
var inst_91710 = (state_91837[(10)]);
var inst_91721 = (state_91837[(21)]);
var inst_91719 = (state_91837[(2)]);
var inst_91720__$1 = cljs.core._conj.call(null,inst_91710,inst_91719);
var inst_91721__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91720__$1);
var state_91837__$1 = (function (){var statearr_91877 = state_91837;
(statearr_91877[(7)] = inst_91720__$1);

(statearr_91877[(21)] = inst_91721__$1);

return statearr_91877;
})();
if(cljs.core.truth_(inst_91721__$1)){
var statearr_91878_92120 = state_91837__$1;
(statearr_91878_92120[(1)] = (6));

} else {
var statearr_91879_92121 = state_91837__$1;
(statearr_91879_92121[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (14))){
var inst_91765 = (state_91837[(13)]);
var inst_91775 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91776 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91777 = cljs.core.List.EMPTY;
var inst_91778 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91779 = cljs.core.cons.call(null,inst_91778,inst_91765);
var inst_91780 = cljs.core._conj.call(null,inst_91777,inst_91779);
var inst_91781 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91782 = cljs.core._conj.call(null,inst_91780,inst_91781);
var inst_91783 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91776,inst_91782,null];
var inst_91784 = cljs.core.PersistentHashMap.fromArrays(inst_91775,inst_91783);
var inst_91785 = cljs.test.do_report.call(null,inst_91784);
var state_91837__$1 = state_91837;
var statearr_91880_92122 = state_91837__$1;
(statearr_91880_92122[(2)] = inst_91785);

(statearr_91880_92122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (16))){
var inst_91834 = (state_91837[(2)]);
var inst_91835 = done.call(null);
var state_91837__$1 = (function (){var statearr_91881 = state_91837;
(statearr_91881[(22)] = inst_91834);

return statearr_91881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91837__$1,inst_91835);
} else {
if((state_val_91838 === (10))){
var inst_91745 = (state_91837[(2)]);
var inst_91746 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91747 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91748 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91747,inst_91745,null];
var inst_91749 = cljs.core.PersistentHashMap.fromArrays(inst_91746,inst_91748);
var inst_91750 = cljs.test.do_report.call(null,inst_91749);
var state_91837__$1 = state_91837;
var statearr_91882_92123 = state_91837__$1;
(statearr_91882_92123[(2)] = inst_91750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91838 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_91837,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_91799 = cljs.core.List.EMPTY;
var inst_91800 = cljs.core._conj.call(null,inst_91799,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_91804 = cljs.core.async.chan.call(null,(1));
var inst_91805 = (function (){var c__9318__auto____$1 = inst_91804;
return ((function (c__9318__auto____$1,_,inst_91799,inst_91800,inst_91804,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91799,inst_91800,inst_91804,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_91802){
var state_val_91803 = (state_91802[(1)]);
if((state_val_91803 === (1))){
var state_91802__$1 = state_91802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91802__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91799,inst_91800,inst_91804,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91799,inst_91800,inst_91804,state_val_91838,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_91886 = [null,null,null,null,null,null,null];
(statearr_91886[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91886[(1)] = (1));

return statearr_91886;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91802){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91887){if((e91887 instanceof Object)){
var ex__9301__auto__ = e91887;
var statearr_91888_92124 = state_91802;
(statearr_91888_92124[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92125 = state_91802;
state_91802 = G__92125;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91802){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91799,inst_91800,inst_91804,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91889 = f__9319__auto__.call(null);
(statearr_91889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91799,inst_91800,inst_91804,state_val_91838,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_91806 = cljs.core.async.impl.dispatch.run.call(null,inst_91805);
var inst_91807 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_91804);
var state_91837__$1 = (function (){var statearr_91890 = state_91837;
(statearr_91890[(18)] = inst_91800);

(statearr_91890[(23)] = inst_91806);

return statearr_91890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91837__$1,(19),inst_91807);
} else {
if((state_val_91838 === (8))){
var inst_91721 = (state_91837[(21)]);
var inst_91742 = (state_91837[(2)]);
var state_91837__$1 = (function (){var statearr_91891 = state_91837;
(statearr_91891[(24)] = inst_91742);

return statearr_91891;
})();
var statearr_91892_92126 = state_91837__$1;
(statearr_91892_92126[(2)] = inst_91721);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837__$1);

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
var statearr_91896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91896[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_91896[(1)] = (1));

return statearr_91896;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91837){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91897){if((e91897 instanceof Object)){
var ex__9301__auto__ = e91897;
var statearr_91898_92127 = state_91837;
(statearr_91898_92127[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92128 = state_91837;
state_91837 = G__92128;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91837){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_91899 = f__9319__auto__.call(null);
(statearr_91899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91696.prototype.apply = (function (self__,args91699){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args91699)));
});

drop_dot.core_test.t_drop_dot$core_test91696.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_92037){
var state_val_92038 = (state_92037[(1)]);
if((state_val_92038 === (7))){
var inst_91920 = (state_92037[(7)]);
var inst_91930 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91931 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91932 = cljs.core.List.EMPTY;
var inst_91933 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_91934 = cljs.core.cons.call(null,inst_91933,inst_91920);
var inst_91935 = cljs.core._conj.call(null,inst_91932,inst_91934);
var inst_91936 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91937 = cljs.core._conj.call(null,inst_91935,inst_91936);
var inst_91938 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91931,inst_91937,null];
var inst_91939 = cljs.core.PersistentHashMap.fromArrays(inst_91930,inst_91938);
var inst_91940 = cljs.test.do_report.call(null,inst_91939);
var state_92037__$1 = state_92037;
var statearr_92039_92129 = state_92037__$1;
(statearr_92039_92129[(2)] = inst_91940);

(statearr_92039_92129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (20))){
var inst_92010 = (state_92037[(8)]);
var inst_92013 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92014 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92015 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92010);
var inst_92016 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92014,inst_92015,null];
var inst_92017 = cljs.core.PersistentHashMap.fromArrays(inst_92013,inst_92016);
var inst_92018 = cljs.test.do_report.call(null,inst_92017);
var state_92037__$1 = state_92037;
var statearr_92040_92130 = state_92037__$1;
(statearr_92040_92130[(2)] = inst_92018);

(statearr_92040_92130[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (1))){
var state_92037__$1 = state_92037;
var statearr_92041_92131 = state_92037__$1;
(statearr_92041_92131[(2)] = null);

(statearr_92041_92131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92037,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_91909 = cljs.core.List.EMPTY;
var inst_91910 = cljs.core._conj.call(null,inst_91909,"NOTICE: ");
var inst_91914 = cljs.core.async.chan.call(null,(1));
var inst_91915 = (function (){var c__9318__auto____$1 = inst_91914;
return ((function (c__9318__auto____$1,_,inst_91909,inst_91910,inst_91914,state_val_92038,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91909,inst_91910,inst_91914,state_val_92038,c__9318__auto__,___10407__auto__){
return (function (state_91912){
var state_val_91913 = (state_91912[(1)]);
if((state_val_91913 === (1))){
var state_91912__$1 = state_91912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91912__$1,"~/.home-to-drop-dot");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91909,inst_91910,inst_91914,state_val_92038,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91909,inst_91910,inst_91914,state_val_92038,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92045 = [null,null,null,null,null,null,null];
(statearr_92045[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92045[(1)] = (1));

return statearr_92045;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91912){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92046){if((e92046 instanceof Object)){
var ex__9301__auto__ = e92046;
var statearr_92047_92132 = state_91912;
(statearr_92047_92132[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92133 = state_91912;
state_91912 = G__92133;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91912){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91909,inst_91910,inst_91914,state_val_92038,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92048 = f__9319__auto__.call(null);
(statearr_92048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91909,inst_91910,inst_91914,state_val_92038,c__9318__auto__,___10407__auto__))
})();
var inst_91916 = cljs.core.async.impl.dispatch.run.call(null,inst_91915);
var inst_91917 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_91914);
var state_92037__$1 = (function (){var statearr_92049 = state_92037;
(statearr_92049[(9)] = inst_91910);

(statearr_92049[(10)] = inst_91916);

return statearr_92049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92037__$1,(5),inst_91917);
} else {
if((state_val_92038 === (15))){
var inst_91966 = (state_92037[(11)]);
var inst_91987 = (state_92037[(2)]);
var state_92037__$1 = (function (){var statearr_92050 = state_92037;
(statearr_92050[(12)] = inst_91987);

return statearr_92050;
})();
var statearr_92051_92134 = state_92037__$1;
(statearr_92051_92134[(2)] = inst_91966);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (21))){
var inst_92010 = (state_92037[(8)]);
var inst_92020 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92021 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92022 = cljs.core.List.EMPTY;
var inst_92023 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92024 = cljs.core.cons.call(null,inst_92023,inst_92010);
var inst_92025 = cljs.core._conj.call(null,inst_92022,inst_92024);
var inst_92026 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92027 = cljs.core._conj.call(null,inst_92025,inst_92026);
var inst_92028 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92021,inst_92027,null];
var inst_92029 = cljs.core.PersistentHashMap.fromArrays(inst_92020,inst_92028);
var inst_92030 = cljs.test.do_report.call(null,inst_92029);
var state_92037__$1 = state_92037;
var statearr_92052_92135 = state_92037__$1;
(statearr_92052_92135[(2)] = inst_92030);

(statearr_92052_92135[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (13))){
var inst_91965 = (state_92037[(13)]);
var inst_91968 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91969 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91970 = cljs.core.cons.call(null,cljs.core._EQ_,inst_91965);
var inst_91971 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91969,inst_91970,null];
var inst_91972 = cljs.core.PersistentHashMap.fromArrays(inst_91968,inst_91971);
var inst_91973 = cljs.test.do_report.call(null,inst_91972);
var state_92037__$1 = state_92037;
var statearr_92053_92136 = state_92037__$1;
(statearr_92053_92136[(2)] = inst_91973);

(statearr_92053_92136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (22))){
var inst_92011 = (state_92037[(14)]);
var inst_92032 = (state_92037[(2)]);
var state_92037__$1 = (function (){var statearr_92054 = state_92037;
(statearr_92054[(15)] = inst_92032);

return statearr_92054;
})();
var statearr_92055_92137 = state_92037__$1;
(statearr_92055_92137[(2)] = inst_92011);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (6))){
var inst_91920 = (state_92037[(7)]);
var inst_91923 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91924 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91925 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_91920);
var inst_91926 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_91924,inst_91925,null];
var inst_91927 = cljs.core.PersistentHashMap.fromArrays(inst_91923,inst_91926);
var inst_91928 = cljs.test.do_report.call(null,inst_91927);
var state_92037__$1 = state_92037;
var statearr_92056_92138 = state_92037__$1;
(statearr_92056_92138[(2)] = inst_91928);

(statearr_92056_92138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (17))){
var inst_91990 = (state_92037[(2)]);
var inst_91991 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91992 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-drop-dot-and-home-but-home-points-to-something-random"))),"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_91993 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91992,inst_91990,null];
var inst_91994 = cljs.core.PersistentHashMap.fromArrays(inst_91991,inst_91993);
var inst_91995 = cljs.test.do_report.call(null,inst_91994);
var state_92037__$1 = state_92037;
var statearr_92057_92139 = state_92037__$1;
(statearr_92057_92139[(2)] = inst_91995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (3))){
var inst_91900 = (state_92037[(2)]);
var inst_91901 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91902 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.home-to-drop-dot"))),"NOTICE: ");
var inst_91903 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91902,inst_91900,null];
var inst_91904 = cljs.core.PersistentHashMap.fromArrays(inst_91901,inst_91903);
var inst_91905 = cljs.test.do_report.call(null,inst_91904);
var state_92037__$1 = state_92037;
var statearr_92058_92140 = state_92037__$1;
(statearr_92058_92140[(2)] = inst_91905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (12))){
var inst_91965 = (state_92037[(13)]);
var inst_91955 = (state_92037[(16)]);
var inst_91966 = (state_92037[(11)]);
var inst_91964 = (state_92037[(2)]);
var inst_91965__$1 = cljs.core._conj.call(null,inst_91955,inst_91964);
var inst_91966__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_91965__$1);
var state_92037__$1 = (function (){var statearr_92059 = state_92037;
(statearr_92059[(13)] = inst_91965__$1);

(statearr_92059[(11)] = inst_91966__$1);

return statearr_92059;
})();
if(cljs.core.truth_(inst_91966__$1)){
var statearr_92060_92141 = state_92037__$1;
(statearr_92060_92141[(1)] = (13));

} else {
var statearr_92061_92142 = state_92037__$1;
(statearr_92061_92142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (2))){
var inst_91944 = (state_92037[(2)]);
var state_92037__$1 = (function (){var statearr_92062 = state_92037;
(statearr_92062[(17)] = inst_91944);

return statearr_92062;
})();
var statearr_92063_92143 = state_92037__$1;
(statearr_92063_92143[(2)] = null);

(statearr_92063_92143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (19))){
var inst_92000 = (state_92037[(18)]);
var inst_92010 = (state_92037[(8)]);
var inst_92011 = (state_92037[(14)]);
var inst_92009 = (state_92037[(2)]);
var inst_92010__$1 = cljs.core._conj.call(null,inst_92000,inst_92009);
var inst_92011__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92010__$1);
var state_92037__$1 = (function (){var statearr_92064 = state_92037;
(statearr_92064[(8)] = inst_92010__$1);

(statearr_92064[(14)] = inst_92011__$1);

return statearr_92064;
})();
if(cljs.core.truth_(inst_92011__$1)){
var statearr_92065_92144 = state_92037__$1;
(statearr_92065_92144[(1)] = (20));

} else {
var statearr_92066_92145 = state_92037__$1;
(statearr_92066_92145[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92037,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_91954 = cljs.core.List.EMPTY;
var inst_91955 = cljs.core._conj.call(null,inst_91954,"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91959 = cljs.core.async.chan.call(null,(1));
var inst_91960 = (function (){var c__9318__auto____$1 = inst_91959;
return ((function (c__9318__auto____$1,_,inst_91954,inst_91955,inst_91959,state_val_92038,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91954,inst_91955,inst_91959,state_val_92038,c__9318__auto__,___10407__auto__){
return (function (state_91957){
var state_val_91958 = (state_91957[(1)]);
if((state_val_91958 === (1))){
var state_91957__$1 = state_91957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91957__$1,"~/.in-home-and-drop-dot-seperately-no-links");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91954,inst_91955,inst_91959,state_val_92038,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91954,inst_91955,inst_91959,state_val_92038,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92070 = [null,null,null,null,null,null,null];
(statearr_92070[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92070[(1)] = (1));

return statearr_92070;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_91957){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92071){if((e92071 instanceof Object)){
var ex__9301__auto__ = e92071;
var statearr_92072_92146 = state_91957;
(statearr_92072_92146[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92147 = state_91957;
state_91957 = G__92147;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_91957){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_91957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91954,inst_91955,inst_91959,state_val_92038,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92073 = f__9319__auto__.call(null);
(statearr_92073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91954,inst_91955,inst_91959,state_val_92038,c__9318__auto__,___10407__auto__))
})();
var inst_91961 = cljs.core.async.impl.dispatch.run.call(null,inst_91960);
var inst_91962 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_91959);
var state_92037__$1 = (function (){var statearr_92074 = state_92037;
(statearr_92074[(16)] = inst_91955);

(statearr_92074[(19)] = inst_91961);

return statearr_92074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92037__$1,(12),inst_91962);
} else {
if((state_val_92038 === (9))){
var inst_91989 = (state_92037[(2)]);
var state_92037__$1 = (function (){var statearr_92075 = state_92037;
(statearr_92075[(20)] = inst_91989);

return statearr_92075;
})();
var statearr_92076_92148 = state_92037__$1;
(statearr_92076_92148[(2)] = null);

(statearr_92076_92148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (5))){
var inst_91921 = (state_92037[(21)]);
var inst_91910 = (state_92037[(9)]);
var inst_91920 = (state_92037[(7)]);
var inst_91919 = (state_92037[(2)]);
var inst_91920__$1 = cljs.core._conj.call(null,inst_91910,inst_91919);
var inst_91921__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_91920__$1);
var state_92037__$1 = (function (){var statearr_92077 = state_92037;
(statearr_92077[(21)] = inst_91921__$1);

(statearr_92077[(7)] = inst_91920__$1);

return statearr_92077;
})();
if(cljs.core.truth_(inst_91921__$1)){
var statearr_92078_92149 = state_92037__$1;
(statearr_92078_92149[(1)] = (6));

} else {
var statearr_92079_92150 = state_92037__$1;
(statearr_92079_92150[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (14))){
var inst_91965 = (state_92037[(13)]);
var inst_91975 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91976 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91977 = cljs.core.List.EMPTY;
var inst_91978 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_91979 = cljs.core.cons.call(null,inst_91978,inst_91965);
var inst_91980 = cljs.core._conj.call(null,inst_91977,inst_91979);
var inst_91981 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_91982 = cljs.core._conj.call(null,inst_91980,inst_91981);
var inst_91983 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_91976,inst_91982,null];
var inst_91984 = cljs.core.PersistentHashMap.fromArrays(inst_91975,inst_91983);
var inst_91985 = cljs.test.do_report.call(null,inst_91984);
var state_92037__$1 = state_92037;
var statearr_92080_92151 = state_92037__$1;
(statearr_92080_92151[(2)] = inst_91985);

(statearr_92080_92151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (16))){
var inst_92034 = (state_92037[(2)]);
var inst_92035 = done.call(null);
var state_92037__$1 = (function (){var statearr_92081 = state_92037;
(statearr_92081[(22)] = inst_92034);

return statearr_92081;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92037__$1,inst_92035);
} else {
if((state_val_92038 === (10))){
var inst_91945 = (state_92037[(2)]);
var inst_91946 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_91947 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-linkable-path->chan-linkable-path-that-wants-linking","core/chan-linkable-path->chan-linkable-path-that-wants-linking",1467844173,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"~/.in-home-and-drop-dot-seperately-no-links"))),"~/.in-home-and-drop-dot-seperately-no-links");
var inst_91948 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_91947,inst_91945,null];
var inst_91949 = cljs.core.PersistentHashMap.fromArrays(inst_91946,inst_91948);
var inst_91950 = cljs.test.do_report.call(null,inst_91949);
var state_92037__$1 = state_92037;
var statearr_92082_92152 = state_92037__$1;
(statearr_92082_92152[(2)] = inst_91950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92038 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92037,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_91999 = cljs.core.List.EMPTY;
var inst_92000 = cljs.core._conj.call(null,inst_91999,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
var inst_92004 = cljs.core.async.chan.call(null,(1));
var inst_92005 = (function (){var c__9318__auto____$1 = inst_92004;
return ((function (c__9318__auto____$1,_,inst_91999,inst_92000,inst_92004,state_val_92038,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_91999,inst_92000,inst_92004,state_val_92038,c__9318__auto__,___10407__auto__){
return (function (state_92002){
var state_val_92003 = (state_92002[(1)]);
if((state_val_92003 === (1))){
var state_92002__$1 = state_92002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92002__$1,"~/.in-drop-dot-and-home-but-home-points-to-something-random");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_91999,inst_92000,inst_92004,state_val_92038,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_91999,inst_92000,inst_92004,state_val_92038,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92086 = [null,null,null,null,null,null,null];
(statearr_92086[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92086[(1)] = (1));

return statearr_92086;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92002){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92087){if((e92087 instanceof Object)){
var ex__9301__auto__ = e92087;
var statearr_92088_92153 = state_92002;
(statearr_92088_92153[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92154 = state_92002;
state_92002 = G__92154;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92002){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_91999,inst_92000,inst_92004,state_val_92038,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92089 = f__9319__auto__.call(null);
(statearr_92089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_91999,inst_92000,inst_92004,state_val_92038,c__9318__auto__,___10407__auto__))
})();
var inst_92006 = cljs.core.async.impl.dispatch.run.call(null,inst_92005);
var inst_92007 = drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,inst_92004);
var state_92037__$1 = (function (){var statearr_92090 = state_92037;
(statearr_92090[(18)] = inst_92000);

(statearr_92090[(23)] = inst_92006);

return statearr_92090;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92037__$1,(19),inst_92007);
} else {
if((state_val_92038 === (8))){
var inst_91921 = (state_92037[(21)]);
var inst_91942 = (state_92037[(2)]);
var state_92037__$1 = (function (){var statearr_92091 = state_92037;
(statearr_92091[(24)] = inst_91942);

return statearr_92091;
})();
var statearr_92092_92155 = state_92037__$1;
(statearr_92092_92155[(2)] = inst_91921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037__$1);

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
var statearr_92096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92096[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92096[(1)] = (1));

return statearr_92096;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92037){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92097){if((e92097 instanceof Object)){
var ex__9301__auto__ = e92097;
var statearr_92098_92156 = state_92037;
(statearr_92098_92156[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92157 = state_92037;
state_92037 = G__92157;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92037){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92099 = f__9319__auto__.call(null);
(statearr_92099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test91696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta91697","meta91697",-1569371264,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test91696.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test91696.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test91696";

drop_dot.core_test.t_drop_dot$core_test91696.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test91696");
});

drop_dot.core_test.__GT_t_drop_dot$core_test91696 = (function drop_dot$core_test$__GT_t_drop_dot$core_test91696(meta91697){
return (new drop_dot.core_test.t_drop_dot$core_test91696(meta91697));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test91696(null));
});

drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST;},new cljs.core.Symbol("drop-dot.core-test","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","drop-dot.core-test/chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2043608325,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"chan-linkable-path->chan-linkable-path-that-wants-linking-TEST","chan-linkable-path->chan-linkable-path-that-wants-linking-TEST",2088597056,null),"test/drop_dot/core_test.cljs",72,1,41,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST)?drop_dot.core_test.chan_linkable_path__GT_chan_linkable_path_that_wants_linking_TEST.cljs$lang$test:null)]));
drop_dot.core_test.line__GT_chan_linkable_path_TEST = (function drop_dot$core_test$line__GT_chan_linkable_path_TEST(){
return cljs.test.test_var.call(null,drop_dot$core_test$line__GT_chan_linkable_path_TEST.cljs$lang$var);
});
drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test92158 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test92158 = (function (meta92159){
this.meta92159 = meta92159;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test92158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92160,meta92159__$1){
var self__ = this;
var _92160__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test92158(meta92159__$1));
});

drop_dot.core_test.t_drop_dot$core_test92158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92160){
var self__ = this;
var _92160__$1 = this;
return self__.meta92159;
});

drop_dot.core_test.t_drop_dot$core_test92158.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test92158.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_92282){
var state_val_92283 = (state_92282[(1)]);
if((state_val_92283 === (7))){
var inst_92177 = (state_92282[(7)]);
var inst_92187 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92188 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92189 = cljs.core.List.EMPTY;
var inst_92190 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92191 = cljs.core.cons.call(null,inst_92190,inst_92177);
var inst_92192 = cljs.core._conj.call(null,inst_92189,inst_92191);
var inst_92193 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92194 = cljs.core._conj.call(null,inst_92192,inst_92193);
var inst_92195 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92188,inst_92194,null];
var inst_92196 = cljs.core.PersistentHashMap.fromArrays(inst_92187,inst_92195);
var inst_92197 = cljs.test.do_report.call(null,inst_92196);
var state_92282__$1 = state_92282;
var statearr_92284_92488 = state_92282__$1;
(statearr_92284_92488[(2)] = inst_92197);

(statearr_92284_92488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (20))){
var inst_92255 = (state_92282[(8)]);
var inst_92258 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92259 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92260 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92255);
var inst_92261 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92259,inst_92260,null];
var inst_92262 = cljs.core.PersistentHashMap.fromArrays(inst_92258,inst_92261);
var inst_92263 = cljs.test.do_report.call(null,inst_92262);
var state_92282__$1 = state_92282;
var statearr_92285_92489 = state_92282__$1;
(statearr_92285_92489[(2)] = inst_92263);

(statearr_92285_92489[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (1))){
var inst_92162 = cljs.core.async.chan.call(null,(1));
var state_92282__$1 = (function (){var statearr_92286 = state_92282;
(statearr_92286[(9)] = inst_92162);

return statearr_92286;
})();
var statearr_92287_92490 = state_92282__$1;
(statearr_92287_92490[(2)] = null);

(statearr_92287_92490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92282,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92172 = cljs.core.List.EMPTY;
var inst_92173 = cljs.core._conj.call(null,inst_92172,"~/.TDD-this-file-in-dot-drop-dot");
var inst_92174 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_92282__$1 = (function (){var statearr_92288 = state_92282;
(statearr_92288[(10)] = inst_92173);

return statearr_92288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92282__$1,(5),inst_92174);
} else {
if((state_val_92283 === (15))){
var inst_92217 = (state_92282[(11)]);
var inst_92238 = (state_92282[(2)]);
var state_92282__$1 = (function (){var statearr_92289 = state_92282;
(statearr_92289[(12)] = inst_92238);

return statearr_92289;
})();
var statearr_92290_92491 = state_92282__$1;
(statearr_92290_92491[(2)] = inst_92217);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (21))){
var inst_92255 = (state_92282[(8)]);
var inst_92265 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92266 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92267 = cljs.core.List.EMPTY;
var inst_92268 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92269 = cljs.core.cons.call(null,inst_92268,inst_92255);
var inst_92270 = cljs.core._conj.call(null,inst_92267,inst_92269);
var inst_92271 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92272 = cljs.core._conj.call(null,inst_92270,inst_92271);
var inst_92273 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92266,inst_92272,null];
var inst_92274 = cljs.core.PersistentHashMap.fromArrays(inst_92265,inst_92273);
var inst_92275 = cljs.test.do_report.call(null,inst_92274);
var state_92282__$1 = state_92282;
var statearr_92291_92492 = state_92282__$1;
(statearr_92291_92492[(2)] = inst_92275);

(statearr_92291_92492[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (13))){
var inst_92216 = (state_92282[(13)]);
var inst_92219 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92220 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92221 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92216);
var inst_92222 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92220,inst_92221,null];
var inst_92223 = cljs.core.PersistentHashMap.fromArrays(inst_92219,inst_92222);
var inst_92224 = cljs.test.do_report.call(null,inst_92223);
var state_92282__$1 = state_92282;
var statearr_92292_92493 = state_92282__$1;
(statearr_92292_92493[(2)] = inst_92224);

(statearr_92292_92493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (22))){
var inst_92256 = (state_92282[(14)]);
var inst_92277 = (state_92282[(2)]);
var state_92282__$1 = (function (){var statearr_92293 = state_92282;
(statearr_92293[(15)] = inst_92277);

return statearr_92293;
})();
var statearr_92294_92494 = state_92282__$1;
(statearr_92294_92494[(2)] = inst_92256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (6))){
var inst_92177 = (state_92282[(7)]);
var inst_92180 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92181 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92182 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92177);
var inst_92183 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92181,inst_92182,null];
var inst_92184 = cljs.core.PersistentHashMap.fromArrays(inst_92180,inst_92183);
var inst_92185 = cljs.test.do_report.call(null,inst_92184);
var state_92282__$1 = state_92282;
var statearr_92295_92495 = state_92282__$1;
(statearr_92295_92495[(2)] = inst_92185);

(statearr_92295_92495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (17))){
var inst_92241 = (state_92282[(2)]);
var inst_92242 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92243 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92244 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92243,inst_92241,null];
var inst_92245 = cljs.core.PersistentHashMap.fromArrays(inst_92242,inst_92244);
var inst_92246 = cljs.test.do_report.call(null,inst_92245);
var state_92282__$1 = state_92282;
var statearr_92296_92496 = state_92282__$1;
(statearr_92296_92496[(2)] = inst_92246);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (3))){
var inst_92163 = (state_92282[(2)]);
var inst_92164 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92165 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92166 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92165,inst_92163,null];
var inst_92167 = cljs.core.PersistentHashMap.fromArrays(inst_92164,inst_92166);
var inst_92168 = cljs.test.do_report.call(null,inst_92167);
var state_92282__$1 = state_92282;
var statearr_92297_92497 = state_92282__$1;
(statearr_92297_92497[(2)] = inst_92168);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (12))){
var inst_92212 = (state_92282[(16)]);
var inst_92217 = (state_92282[(11)]);
var inst_92216 = (state_92282[(13)]);
var inst_92215 = (state_92282[(2)]);
var inst_92216__$1 = cljs.core._conj.call(null,inst_92212,inst_92215);
var inst_92217__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92216__$1);
var state_92282__$1 = (function (){var statearr_92298 = state_92282;
(statearr_92298[(11)] = inst_92217__$1);

(statearr_92298[(13)] = inst_92216__$1);

return statearr_92298;
})();
if(cljs.core.truth_(inst_92217__$1)){
var statearr_92299_92498 = state_92282__$1;
(statearr_92299_92498[(1)] = (13));

} else {
var statearr_92300_92499 = state_92282__$1;
(statearr_92300_92499[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (2))){
var inst_92201 = (state_92282[(2)]);
var state_92282__$1 = (function (){var statearr_92301 = state_92282;
(statearr_92301[(17)] = inst_92201);

return statearr_92301;
})();
var statearr_92302_92500 = state_92282__$1;
(statearr_92302_92500[(2)] = null);

(statearr_92302_92500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (19))){
var inst_92256 = (state_92282[(14)]);
var inst_92251 = (state_92282[(18)]);
var inst_92255 = (state_92282[(8)]);
var inst_92254 = (state_92282[(2)]);
var inst_92255__$1 = cljs.core._conj.call(null,inst_92251,inst_92254);
var inst_92256__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92255__$1);
var state_92282__$1 = (function (){var statearr_92303 = state_92282;
(statearr_92303[(14)] = inst_92256__$1);

(statearr_92303[(8)] = inst_92255__$1);

return statearr_92303;
})();
if(cljs.core.truth_(inst_92256__$1)){
var statearr_92304_92501 = state_92282__$1;
(statearr_92304_92501[(1)] = (20));

} else {
var statearr_92305_92502 = state_92282__$1;
(statearr_92305_92502[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92282,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_92211 = cljs.core.List.EMPTY;
var inst_92212 = cljs.core._conj.call(null,inst_92211,"ERROR: ");
var inst_92213 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_92282__$1 = (function (){var statearr_92306 = state_92282;
(statearr_92306[(16)] = inst_92212);

return statearr_92306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92282__$1,(12),inst_92213);
} else {
if((state_val_92283 === (9))){
var inst_92240 = (state_92282[(2)]);
var state_92282__$1 = (function (){var statearr_92307 = state_92282;
(statearr_92307[(19)] = inst_92240);

return statearr_92307;
})();
var statearr_92308_92503 = state_92282__$1;
(statearr_92308_92503[(2)] = null);

(statearr_92308_92503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (5))){
var inst_92177 = (state_92282[(7)]);
var inst_92173 = (state_92282[(10)]);
var inst_92178 = (state_92282[(20)]);
var inst_92176 = (state_92282[(2)]);
var inst_92177__$1 = cljs.core._conj.call(null,inst_92173,inst_92176);
var inst_92178__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92177__$1);
var state_92282__$1 = (function (){var statearr_92309 = state_92282;
(statearr_92309[(7)] = inst_92177__$1);

(statearr_92309[(20)] = inst_92178__$1);

return statearr_92309;
})();
if(cljs.core.truth_(inst_92178__$1)){
var statearr_92310_92504 = state_92282__$1;
(statearr_92310_92504[(1)] = (6));

} else {
var statearr_92311_92505 = state_92282__$1;
(statearr_92311_92505[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (14))){
var inst_92216 = (state_92282[(13)]);
var inst_92226 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92227 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92228 = cljs.core.List.EMPTY;
var inst_92229 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92230 = cljs.core.cons.call(null,inst_92229,inst_92216);
var inst_92231 = cljs.core._conj.call(null,inst_92228,inst_92230);
var inst_92232 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92233 = cljs.core._conj.call(null,inst_92231,inst_92232);
var inst_92234 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92227,inst_92233,null];
var inst_92235 = cljs.core.PersistentHashMap.fromArrays(inst_92226,inst_92234);
var inst_92236 = cljs.test.do_report.call(null,inst_92235);
var state_92282__$1 = state_92282;
var statearr_92312_92506 = state_92282__$1;
(statearr_92312_92506[(2)] = inst_92236);

(statearr_92312_92506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (16))){
var inst_92279 = (state_92282[(2)]);
var inst_92280 = done.call(null);
var state_92282__$1 = (function (){var statearr_92313 = state_92282;
(statearr_92313[(21)] = inst_92279);

return statearr_92313;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92282__$1,inst_92280);
} else {
if((state_val_92283 === (10))){
var inst_92202 = (state_92282[(2)]);
var inst_92203 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92204 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92205 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92204,inst_92202,null];
var inst_92206 = cljs.core.PersistentHashMap.fromArrays(inst_92203,inst_92205);
var inst_92207 = cljs.test.do_report.call(null,inst_92206);
var state_92282__$1 = state_92282;
var statearr_92314_92507 = state_92282__$1;
(statearr_92314_92507[(2)] = inst_92207);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92283 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92282,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_92250 = cljs.core.List.EMPTY;
var inst_92251 = cljs.core._conj.call(null,inst_92250,"ERROR: ");
var inst_92252 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_92282__$1 = (function (){var statearr_92315 = state_92282;
(statearr_92315[(18)] = inst_92251);

return statearr_92315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92282__$1,(19),inst_92252);
} else {
if((state_val_92283 === (8))){
var inst_92178 = (state_92282[(20)]);
var inst_92199 = (state_92282[(2)]);
var state_92282__$1 = (function (){var statearr_92316 = state_92282;
(statearr_92316[(22)] = inst_92199);

return statearr_92316;
})();
var statearr_92317_92508 = state_92282__$1;
(statearr_92317_92508[(2)] = inst_92178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282__$1);

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
var statearr_92321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92321[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92321[(1)] = (1));

return statearr_92321;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92282){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92322){if((e92322 instanceof Object)){
var ex__9301__auto__ = e92322;
var statearr_92323_92509 = state_92282;
(statearr_92323_92509[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92510 = state_92282;
state_92282 = G__92510;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92282){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92324 = f__9319__auto__.call(null);
(statearr_92324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92158.prototype.apply = (function (self__,args92161){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args92161)));
});

drop_dot.core_test.t_drop_dot$core_test92158.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_92445){
var state_val_92446 = (state_92445[(1)]);
if((state_val_92446 === (7))){
var inst_92340 = (state_92445[(7)]);
var inst_92350 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92351 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92352 = cljs.core.List.EMPTY;
var inst_92353 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92354 = cljs.core.cons.call(null,inst_92353,inst_92340);
var inst_92355 = cljs.core._conj.call(null,inst_92352,inst_92354);
var inst_92356 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92357 = cljs.core._conj.call(null,inst_92355,inst_92356);
var inst_92358 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92351,inst_92357,null];
var inst_92359 = cljs.core.PersistentHashMap.fromArrays(inst_92350,inst_92358);
var inst_92360 = cljs.test.do_report.call(null,inst_92359);
var state_92445__$1 = state_92445;
var statearr_92447_92511 = state_92445__$1;
(statearr_92447_92511[(2)] = inst_92360);

(statearr_92447_92511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (20))){
var inst_92418 = (state_92445[(8)]);
var inst_92421 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92422 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92423 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92418);
var inst_92424 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92422,inst_92423,null];
var inst_92425 = cljs.core.PersistentHashMap.fromArrays(inst_92421,inst_92424);
var inst_92426 = cljs.test.do_report.call(null,inst_92425);
var state_92445__$1 = state_92445;
var statearr_92448_92512 = state_92445__$1;
(statearr_92448_92512[(2)] = inst_92426);

(statearr_92448_92512[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (1))){
var inst_92325 = cljs.core.async.chan.call(null,(1));
var state_92445__$1 = (function (){var statearr_92449 = state_92445;
(statearr_92449[(9)] = inst_92325);

return statearr_92449;
})();
var statearr_92450_92513 = state_92445__$1;
(statearr_92450_92513[(2)] = null);

(statearr_92450_92513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92445,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92335 = cljs.core.List.EMPTY;
var inst_92336 = cljs.core._conj.call(null,inst_92335,"~/.TDD-this-file-in-dot-drop-dot");
var inst_92337 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-in-dot-drop-dot");
var state_92445__$1 = (function (){var statearr_92451 = state_92445;
(statearr_92451[(10)] = inst_92336);

return statearr_92451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92445__$1,(5),inst_92337);
} else {
if((state_val_92446 === (15))){
var inst_92380 = (state_92445[(11)]);
var inst_92401 = (state_92445[(2)]);
var state_92445__$1 = (function (){var statearr_92452 = state_92445;
(statearr_92452[(12)] = inst_92401);

return statearr_92452;
})();
var statearr_92453_92514 = state_92445__$1;
(statearr_92453_92514[(2)] = inst_92380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (21))){
var inst_92418 = (state_92445[(8)]);
var inst_92428 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92429 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92430 = cljs.core.List.EMPTY;
var inst_92431 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92432 = cljs.core.cons.call(null,inst_92431,inst_92418);
var inst_92433 = cljs.core._conj.call(null,inst_92430,inst_92432);
var inst_92434 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92435 = cljs.core._conj.call(null,inst_92433,inst_92434);
var inst_92436 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92429,inst_92435,null];
var inst_92437 = cljs.core.PersistentHashMap.fromArrays(inst_92428,inst_92436);
var inst_92438 = cljs.test.do_report.call(null,inst_92437);
var state_92445__$1 = state_92445;
var statearr_92454_92515 = state_92445__$1;
(statearr_92454_92515[(2)] = inst_92438);

(statearr_92454_92515[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (13))){
var inst_92379 = (state_92445[(13)]);
var inst_92382 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92383 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92384 = cljs.core.cons.call(null,clojure.string.includes_QMARK_,inst_92379);
var inst_92385 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92383,inst_92384,null];
var inst_92386 = cljs.core.PersistentHashMap.fromArrays(inst_92382,inst_92385);
var inst_92387 = cljs.test.do_report.call(null,inst_92386);
var state_92445__$1 = state_92445;
var statearr_92455_92516 = state_92445__$1;
(statearr_92455_92516[(2)] = inst_92387);

(statearr_92455_92516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (22))){
var inst_92419 = (state_92445[(14)]);
var inst_92440 = (state_92445[(2)]);
var state_92445__$1 = (function (){var statearr_92456 = state_92445;
(statearr_92456[(15)] = inst_92440);

return statearr_92456;
})();
var statearr_92457_92517 = state_92445__$1;
(statearr_92457_92517[(2)] = inst_92419);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (6))){
var inst_92340 = (state_92445[(7)]);
var inst_92343 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92344 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92345 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92340);
var inst_92346 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92344,inst_92345,null];
var inst_92347 = cljs.core.PersistentHashMap.fromArrays(inst_92343,inst_92346);
var inst_92348 = cljs.test.do_report.call(null,inst_92347);
var state_92445__$1 = state_92445;
var statearr_92458_92518 = state_92445__$1;
(statearr_92458_92518[(2)] = inst_92348);

(statearr_92458_92518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (17))){
var inst_92404 = (state_92445[(2)]);
var inst_92405 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92406 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot")),"ERROR: ");
var inst_92407 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92406,inst_92404,null];
var inst_92408 = cljs.core.PersistentHashMap.fromArrays(inst_92405,inst_92407);
var inst_92409 = cljs.test.do_report.call(null,inst_92408);
var state_92445__$1 = state_92445;
var statearr_92459_92519 = state_92445__$1;
(statearr_92459_92519[(2)] = inst_92409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (3))){
var inst_92326 = (state_92445[(2)]);
var inst_92327 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92328 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-in-dot-drop-dot")),"~/.TDD-this-file-in-dot-drop-dot");
var inst_92329 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92328,inst_92326,null];
var inst_92330 = cljs.core.PersistentHashMap.fromArrays(inst_92327,inst_92329);
var inst_92331 = cljs.test.do_report.call(null,inst_92330);
var state_92445__$1 = state_92445;
var statearr_92460_92520 = state_92445__$1;
(statearr_92460_92520[(2)] = inst_92331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (12))){
var inst_92380 = (state_92445[(11)]);
var inst_92379 = (state_92445[(13)]);
var inst_92375 = (state_92445[(16)]);
var inst_92378 = (state_92445[(2)]);
var inst_92379__$1 = cljs.core._conj.call(null,inst_92375,inst_92378);
var inst_92380__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92379__$1);
var state_92445__$1 = (function (){var statearr_92461 = state_92445;
(statearr_92461[(11)] = inst_92380__$1);

(statearr_92461[(13)] = inst_92379__$1);

return statearr_92461;
})();
if(cljs.core.truth_(inst_92380__$1)){
var statearr_92462_92521 = state_92445__$1;
(statearr_92462_92521[(1)] = (13));

} else {
var statearr_92463_92522 = state_92445__$1;
(statearr_92463_92522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (2))){
var inst_92364 = (state_92445[(2)]);
var state_92445__$1 = (function (){var statearr_92464 = state_92445;
(statearr_92464[(17)] = inst_92364);

return statearr_92464;
})();
var statearr_92465_92523 = state_92445__$1;
(statearr_92465_92523[(2)] = null);

(statearr_92465_92523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (19))){
var inst_92414 = (state_92445[(18)]);
var inst_92418 = (state_92445[(8)]);
var inst_92419 = (state_92445[(14)]);
var inst_92417 = (state_92445[(2)]);
var inst_92418__$1 = cljs.core._conj.call(null,inst_92414,inst_92417);
var inst_92419__$1 = cljs.core.apply.call(null,clojure.string.includes_QMARK_,inst_92418__$1);
var state_92445__$1 = (function (){var statearr_92466 = state_92445;
(statearr_92466[(8)] = inst_92418__$1);

(statearr_92466[(14)] = inst_92419__$1);

return statearr_92466;
})();
if(cljs.core.truth_(inst_92419__$1)){
var statearr_92467_92524 = state_92445__$1;
(statearr_92467_92524[(1)] = (20));

} else {
var statearr_92468_92525 = state_92445__$1;
(statearr_92468_92525[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (11))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92445,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_92374 = cljs.core.List.EMPTY;
var inst_92375 = cljs.core._conj.call(null,inst_92374,"ERROR: ");
var inst_92376 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-doesnt-exist");
var state_92445__$1 = (function (){var statearr_92469 = state_92445;
(statearr_92469[(16)] = inst_92375);

return statearr_92469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92445__$1,(12),inst_92376);
} else {
if((state_val_92446 === (9))){
var inst_92403 = (state_92445[(2)]);
var state_92445__$1 = (function (){var statearr_92470 = state_92445;
(statearr_92470[(19)] = inst_92403);

return statearr_92470;
})();
var statearr_92471_92526 = state_92445__$1;
(statearr_92471_92526[(2)] = null);

(statearr_92471_92526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (5))){
var inst_92336 = (state_92445[(10)]);
var inst_92341 = (state_92445[(20)]);
var inst_92340 = (state_92445[(7)]);
var inst_92339 = (state_92445[(2)]);
var inst_92340__$1 = cljs.core._conj.call(null,inst_92336,inst_92339);
var inst_92341__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92340__$1);
var state_92445__$1 = (function (){var statearr_92472 = state_92445;
(statearr_92472[(20)] = inst_92341__$1);

(statearr_92472[(7)] = inst_92340__$1);

return statearr_92472;
})();
if(cljs.core.truth_(inst_92341__$1)){
var statearr_92473_92527 = state_92445__$1;
(statearr_92473_92527[(1)] = (6));

} else {
var statearr_92474_92528 = state_92445__$1;
(statearr_92474_92528[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (14))){
var inst_92379 = (state_92445[(13)]);
var inst_92389 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92390 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92391 = cljs.core.List.EMPTY;
var inst_92392 = new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null);
var inst_92393 = cljs.core.cons.call(null,inst_92392,inst_92379);
var inst_92394 = cljs.core._conj.call(null,inst_92391,inst_92393);
var inst_92395 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92396 = cljs.core._conj.call(null,inst_92394,inst_92395);
var inst_92397 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92390,inst_92396,null];
var inst_92398 = cljs.core.PersistentHashMap.fromArrays(inst_92389,inst_92397);
var inst_92399 = cljs.test.do_report.call(null,inst_92398);
var state_92445__$1 = state_92445;
var statearr_92475_92529 = state_92445__$1;
(statearr_92475_92529[(2)] = inst_92399);

(statearr_92475_92529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (16))){
var inst_92442 = (state_92445[(2)]);
var inst_92443 = done.call(null);
var state_92445__$1 = (function (){var statearr_92476 = state_92445;
(statearr_92476[(21)] = inst_92442);

return statearr_92476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92445__$1,inst_92443);
} else {
if((state_val_92446 === (10))){
var inst_92365 = (state_92445[(2)]);
var inst_92366 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92367 = cljs.core.list(new cljs.core.Symbol("s","includes?","s/includes?",-2049283516,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","line->chan-linkable-path","core/line->chan-linkable-path",2020240743,null),"~/.TDD-this-file-doesnt-exist")),"ERROR: ");
var inst_92368 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92367,inst_92365,null];
var inst_92369 = cljs.core.PersistentHashMap.fromArrays(inst_92366,inst_92368);
var inst_92370 = cljs.test.do_report.call(null,inst_92369);
var state_92445__$1 = state_92445;
var statearr_92477_92530 = state_92445__$1;
(statearr_92477_92530[(2)] = inst_92370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92446 === (18))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92445,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_92413 = cljs.core.List.EMPTY;
var inst_92414 = cljs.core._conj.call(null,inst_92413,"ERROR: ");
var inst_92415 = drop_dot.core.line__GT_chan_linkable_path.call(null,"~/.TDD-this-file-exists-in-home-folder-but-not-drop-dot");
var state_92445__$1 = (function (){var statearr_92478 = state_92445;
(statearr_92478[(18)] = inst_92414);

return statearr_92478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92445__$1,(19),inst_92415);
} else {
if((state_val_92446 === (8))){
var inst_92341 = (state_92445[(20)]);
var inst_92362 = (state_92445[(2)]);
var state_92445__$1 = (function (){var statearr_92479 = state_92445;
(statearr_92479[(22)] = inst_92362);

return statearr_92479;
})();
var statearr_92480_92531 = state_92445__$1;
(statearr_92480_92531[(2)] = inst_92341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445__$1);

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
var statearr_92484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92484[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92484[(1)] = (1));

return statearr_92484;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92445){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92485){if((e92485 instanceof Object)){
var ex__9301__auto__ = e92485;
var statearr_92486_92532 = state_92445;
(statearr_92486_92532[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92533 = state_92445;
state_92445 = G__92533;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92445){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92487 = f__9319__auto__.call(null);
(statearr_92487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92159","meta92159",312223656,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test92158.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test92158.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test92158";

drop_dot.core_test.t_drop_dot$core_test92158.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test92158");
});

drop_dot.core_test.__GT_t_drop_dot$core_test92158 = (function drop_dot$core_test$__GT_t_drop_dot$core_test92158(meta92159){
return (new drop_dot.core_test.t_drop_dot$core_test92158(meta92159));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test92158(null));
});

drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.line__GT_chan_linkable_path_TEST;},new cljs.core.Symbol("drop-dot.core-test","line->chan-linkable-path-TEST","drop-dot.core-test/line->chan-linkable-path-TEST",-1336484385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"line->chan-linkable-path-TEST","line->chan-linkable-path-TEST",-1260168422,null),"test/drop_dot/core_test.cljs",39,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.line__GT_chan_linkable_path_TEST)?drop_dot.core_test.line__GT_chan_linkable_path_TEST.cljs$lang$test:null)]));
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test92534 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test92534 = (function (meta92535){
this.meta92535 = meta92535;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test92534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92536,meta92535__$1){
var self__ = this;
var _92536__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test92534(meta92535__$1));
});

drop_dot.core_test.t_drop_dot$core_test92534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92536){
var self__ = this;
var _92536__$1 = this;
return self__.meta92535;
});

drop_dot.core_test.t_drop_dot$core_test92534.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test92534.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_92584){
var state_val_92585 = (state_92584[(1)]);
if((state_val_92585 === (1))){
var state_92584__$1 = state_92584;
var statearr_92586_92684 = state_92584__$1;
(statearr_92586_92684[(2)] = null);

(statearr_92586_92684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92585 === (2))){
var inst_92581 = (state_92584[(2)]);
var inst_92582 = done.call(null);
var state_92584__$1 = (function (){var statearr_92587 = state_92584;
(statearr_92587[(7)] = inst_92581);

return statearr_92587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92584__$1,inst_92582);
} else {
if((state_val_92585 === (3))){
var inst_92538 = (state_92584[(2)]);
var inst_92539 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92540 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_92541 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92540,inst_92538,null];
var inst_92542 = cljs.core.PersistentHashMap.fromArrays(inst_92539,inst_92541);
var inst_92543 = cljs.test.do_report.call(null,inst_92542);
var state_92584__$1 = state_92584;
var statearr_92588_92685 = state_92584__$1;
(statearr_92588_92685[(2)] = inst_92543);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92584__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92585 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92584,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92547 = cljs.core.List.EMPTY;
var inst_92548 = cljs.core._conj.call(null,inst_92547,"val1");
var inst_92552 = cljs.core.async.chan.call(null,(1));
var inst_92553 = (function (){var c__9318__auto____$1 = inst_92552;
return ((function (c__9318__auto____$1,_,inst_92547,inst_92548,inst_92552,state_val_92585,c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_92547,inst_92548,inst_92552,state_val_92585,c__9318__auto__,___10407__auto__,self____$1){
return (function (state_92550){
var state_val_92551 = (state_92550[(1)]);
if((state_val_92551 === (1))){
var state_92550__$1 = state_92550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92550__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_92547,inst_92548,inst_92552,state_val_92585,c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_92547,inst_92548,inst_92552,state_val_92585,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92592 = [null,null,null,null,null,null,null];
(statearr_92592[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92592[(1)] = (1));

return statearr_92592;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92550){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92593){if((e92593 instanceof Object)){
var ex__9301__auto__ = e92593;
var statearr_92594_92686 = state_92550;
(statearr_92594_92686[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92687 = state_92550;
state_92550 = G__92687;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92550){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_92547,inst_92548,inst_92552,state_val_92585,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92595 = f__9319__auto__.call(null);
(statearr_92595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_92547,inst_92548,inst_92552,state_val_92585,c__9318__auto__,___10407__auto__,self____$1))
})();
var inst_92554 = cljs.core.async.impl.dispatch.run.call(null,inst_92553);
var state_92584__$1 = (function (){var statearr_92596 = state_92584;
(statearr_92596[(8)] = inst_92548);

(statearr_92596[(9)] = inst_92554);

return statearr_92596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92584__$1,(5),inst_92552);
} else {
if((state_val_92585 === (5))){
var inst_92548 = (state_92584[(8)]);
var inst_92558 = (state_92584[(10)]);
var inst_92557 = (state_92584[(11)]);
var inst_92556 = (state_92584[(2)]);
var inst_92557__$1 = cljs.core._conj.call(null,inst_92548,inst_92556);
var inst_92558__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92557__$1);
var state_92584__$1 = (function (){var statearr_92597 = state_92584;
(statearr_92597[(10)] = inst_92558__$1);

(statearr_92597[(11)] = inst_92557__$1);

return statearr_92597;
})();
if(cljs.core.truth_(inst_92558__$1)){
var statearr_92598_92688 = state_92584__$1;
(statearr_92598_92688[(1)] = (6));

} else {
var statearr_92599_92689 = state_92584__$1;
(statearr_92599_92689[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92585 === (6))){
var inst_92557 = (state_92584[(11)]);
var inst_92560 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92561 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_92562 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92557);
var inst_92563 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92561,inst_92562,null];
var inst_92564 = cljs.core.PersistentHashMap.fromArrays(inst_92560,inst_92563);
var inst_92565 = cljs.test.do_report.call(null,inst_92564);
var state_92584__$1 = state_92584;
var statearr_92600_92690 = state_92584__$1;
(statearr_92600_92690[(2)] = inst_92565);

(statearr_92600_92690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92585 === (7))){
var inst_92557 = (state_92584[(11)]);
var inst_92567 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92568 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_92569 = cljs.core.List.EMPTY;
var inst_92570 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92571 = cljs.core.cons.call(null,inst_92570,inst_92557);
var inst_92572 = cljs.core._conj.call(null,inst_92569,inst_92571);
var inst_92573 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92574 = cljs.core._conj.call(null,inst_92572,inst_92573);
var inst_92575 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92568,inst_92574,null];
var inst_92576 = cljs.core.PersistentHashMap.fromArrays(inst_92567,inst_92575);
var inst_92577 = cljs.test.do_report.call(null,inst_92576);
var state_92584__$1 = state_92584;
var statearr_92601_92691 = state_92584__$1;
(statearr_92601_92691[(2)] = inst_92577);

(statearr_92601_92691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92585 === (8))){
var inst_92558 = (state_92584[(10)]);
var inst_92579 = (state_92584[(2)]);
var state_92584__$1 = (function (){var statearr_92602 = state_92584;
(statearr_92602[(12)] = inst_92579);

return statearr_92602;
})();
var statearr_92603_92692 = state_92584__$1;
(statearr_92603_92692[(2)] = inst_92558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92584__$1);

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
var statearr_92607 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92607[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92607[(1)] = (1));

return statearr_92607;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92584){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92608){if((e92608 instanceof Object)){
var ex__9301__auto__ = e92608;
var statearr_92609_92693 = state_92584;
(statearr_92609_92693[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92694 = state_92584;
state_92584 = G__92694;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92584){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92610 = f__9319__auto__.call(null);
(statearr_92610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92534.prototype.apply = (function (self__,args92537){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args92537)));
});

drop_dot.core_test.t_drop_dot$core_test92534.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_92657){
var state_val_92658 = (state_92657[(1)]);
if((state_val_92658 === (1))){
var state_92657__$1 = state_92657;
var statearr_92659_92695 = state_92657__$1;
(statearr_92659_92695[(2)] = null);

(statearr_92659_92695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92658 === (2))){
var inst_92654 = (state_92657[(2)]);
var inst_92655 = done.call(null);
var state_92657__$1 = (function (){var statearr_92660 = state_92657;
(statearr_92660[(7)] = inst_92654);

return statearr_92660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92657__$1,inst_92655);
} else {
if((state_val_92658 === (3))){
var inst_92611 = (state_92657[(2)]);
var inst_92612 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92613 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_92614 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92613,inst_92611,null];
var inst_92615 = cljs.core.PersistentHashMap.fromArrays(inst_92612,inst_92614);
var inst_92616 = cljs.test.do_report.call(null,inst_92615);
var state_92657__$1 = state_92657;
var statearr_92661_92696 = state_92657__$1;
(statearr_92661_92696[(2)] = inst_92616);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92658 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92657,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92620 = cljs.core.List.EMPTY;
var inst_92621 = cljs.core._conj.call(null,inst_92620,"val1");
var inst_92625 = cljs.core.async.chan.call(null,(1));
var inst_92626 = (function (){var c__9318__auto____$1 = inst_92625;
return ((function (c__9318__auto____$1,_,inst_92620,inst_92621,inst_92625,state_val_92658,c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_92620,inst_92621,inst_92625,state_val_92658,c__9318__auto__,___10407__auto__){
return (function (state_92623){
var state_val_92624 = (state_92623[(1)]);
if((state_val_92624 === (1))){
var state_92623__$1 = state_92623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92623__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_92620,inst_92621,inst_92625,state_val_92658,c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_92620,inst_92621,inst_92625,state_val_92658,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92665 = [null,null,null,null,null,null,null];
(statearr_92665[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92665[(1)] = (1));

return statearr_92665;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92623){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92666){if((e92666 instanceof Object)){
var ex__9301__auto__ = e92666;
var statearr_92667_92697 = state_92623;
(statearr_92667_92697[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92698 = state_92623;
state_92623 = G__92698;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92623){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_92620,inst_92621,inst_92625,state_val_92658,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92668 = f__9319__auto__.call(null);
(statearr_92668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_92668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_92620,inst_92621,inst_92625,state_val_92658,c__9318__auto__,___10407__auto__))
})();
var inst_92627 = cljs.core.async.impl.dispatch.run.call(null,inst_92626);
var state_92657__$1 = (function (){var statearr_92669 = state_92657;
(statearr_92669[(8)] = inst_92621);

(statearr_92669[(9)] = inst_92627);

return statearr_92669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92657__$1,(5),inst_92625);
} else {
if((state_val_92658 === (5))){
var inst_92621 = (state_92657[(8)]);
var inst_92630 = (state_92657[(10)]);
var inst_92631 = (state_92657[(11)]);
var inst_92629 = (state_92657[(2)]);
var inst_92630__$1 = cljs.core._conj.call(null,inst_92621,inst_92629);
var inst_92631__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92630__$1);
var state_92657__$1 = (function (){var statearr_92670 = state_92657;
(statearr_92670[(10)] = inst_92630__$1);

(statearr_92670[(11)] = inst_92631__$1);

return statearr_92670;
})();
if(cljs.core.truth_(inst_92631__$1)){
var statearr_92671_92699 = state_92657__$1;
(statearr_92671_92699[(1)] = (6));

} else {
var statearr_92672_92700 = state_92657__$1;
(statearr_92672_92700[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92658 === (6))){
var inst_92630 = (state_92657[(10)]);
var inst_92633 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92634 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_92635 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92630);
var inst_92636 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92634,inst_92635,null];
var inst_92637 = cljs.core.PersistentHashMap.fromArrays(inst_92633,inst_92636);
var inst_92638 = cljs.test.do_report.call(null,inst_92637);
var state_92657__$1 = state_92657;
var statearr_92673_92701 = state_92657__$1;
(statearr_92673_92701[(2)] = inst_92638);

(statearr_92673_92701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92658 === (7))){
var inst_92630 = (state_92657[(10)]);
var inst_92640 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92641 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_92642 = cljs.core.List.EMPTY;
var inst_92643 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92644 = cljs.core.cons.call(null,inst_92643,inst_92630);
var inst_92645 = cljs.core._conj.call(null,inst_92642,inst_92644);
var inst_92646 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92647 = cljs.core._conj.call(null,inst_92645,inst_92646);
var inst_92648 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92641,inst_92647,null];
var inst_92649 = cljs.core.PersistentHashMap.fromArrays(inst_92640,inst_92648);
var inst_92650 = cljs.test.do_report.call(null,inst_92649);
var state_92657__$1 = state_92657;
var statearr_92674_92702 = state_92657__$1;
(statearr_92674_92702[(2)] = inst_92650);

(statearr_92674_92702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92658 === (8))){
var inst_92631 = (state_92657[(11)]);
var inst_92652 = (state_92657[(2)]);
var state_92657__$1 = (function (){var statearr_92675 = state_92657;
(statearr_92675[(12)] = inst_92652);

return statearr_92675;
})();
var statearr_92676_92703 = state_92657__$1;
(statearr_92676_92703[(2)] = inst_92631);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92657__$1);

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
var statearr_92680 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92680[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92680[(1)] = (1));

return statearr_92680;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92657){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92681){if((e92681 instanceof Object)){
var ex__9301__auto__ = e92681;
var statearr_92682_92704 = state_92657;
(statearr_92682_92704[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92705 = state_92657;
state_92657 = G__92705;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92657){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92683 = f__9319__auto__.call(null);
(statearr_92683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92535","meta92535",-108452224,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test92534.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test92534.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test92534";

drop_dot.core_test.t_drop_dot$core_test92534.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test92534");
});

drop_dot.core_test.__GT_t_drop_dot$core_test92534 = (function drop_dot$core_test$__GT_t_drop_dot$core_test92534(meta92535){
return (new drop_dot.core_test.t_drop_dot$core_test92534(meta92535));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test92534(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test92706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test92706 = (function (meta92707){
this.meta92707 = meta92707;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test92706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92708,meta92707__$1){
var self__ = this;
var _92708__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test92706(meta92707__$1));
});

drop_dot.core_test.t_drop_dot$core_test92706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92708){
var self__ = this;
var _92708__$1 = this;
return self__.meta92707;
});

drop_dot.core_test.t_drop_dot$core_test92706.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test92706.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_92713){
var state_val_92714 = (state_92713[(1)]);
if((state_val_92714 === (1))){
var inst_92710 = cljs.core.async.chan.call(null);
var inst_92711 = done.call(null);
var state_92713__$1 = (function (){var statearr_92715 = state_92713;
(statearr_92715[(7)] = inst_92710);

return statearr_92715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92713__$1,inst_92711);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92719 = [null,null,null,null,null,null,null,null];
(statearr_92719[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92719[(1)] = (1));

return statearr_92719;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92713){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92720){if((e92720 instanceof Object)){
var ex__9301__auto__ = e92720;
var statearr_92721_92736 = state_92713;
(statearr_92721_92736[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92737 = state_92713;
state_92713 = G__92737;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92713){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92722 = f__9319__auto__.call(null);
(statearr_92722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92706.prototype.apply = (function (self__,args92709){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args92709)));
});

drop_dot.core_test.t_drop_dot$core_test92706.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_92726){
var state_val_92727 = (state_92726[(1)]);
if((state_val_92727 === (1))){
var inst_92723 = cljs.core.async.chan.call(null);
var inst_92724 = done.call(null);
var state_92726__$1 = (function (){var statearr_92728 = state_92726;
(statearr_92728[(7)] = inst_92723);

return statearr_92728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92726__$1,inst_92724);
} else {
return null;
}
});})(c__9318__auto__,___10407__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10407__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_92732 = [null,null,null,null,null,null,null,null];
(statearr_92732[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92732[(1)] = (1));

return statearr_92732;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92726){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92733){if((e92733 instanceof Object)){
var ex__9301__auto__ = e92733;
var statearr_92734_92738 = state_92726;
(statearr_92734_92738[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92739 = state_92726;
state_92726 = G__92739;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92726){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92735 = f__9319__auto__.call(null);
(statearr_92735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test92706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92707","meta92707",1721057040,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test92706.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test92706.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test92706";

drop_dot.core_test.t_drop_dot$core_test92706.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test92706");
});

drop_dot.core_test.__GT_t_drop_dot$core_test92706 = (function drop_dot$core_test$__GT_t_drop_dot$core_test92706(meta92707){
return (new drop_dot.core_test.t_drop_dot$core_test92706(meta92707));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test92706(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test92740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test92740 = (function (meta92741){
this.meta92741 = meta92741;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test92740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92742,meta92741__$1){
var self__ = this;
var _92742__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test92740(meta92741__$1));
});

drop_dot.core_test.t_drop_dot$core_test92740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92742){
var self__ = this;
var _92742__$1 = this;
return self__.meta92741;
});

drop_dot.core_test.t_drop_dot$core_test92740.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test92740.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10407__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__,self____$1){
return (function (state_92785){
var state_val_92786 = (state_92785[(1)]);
if((state_val_92786 === (1))){
var state_92785__$1 = state_92785;
var statearr_92787_92866 = state_92785__$1;
(statearr_92787_92866[(2)] = null);

(statearr_92787_92866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92786 === (2))){
var inst_92782 = (state_92785[(2)]);
var inst_92783 = done.call(null);
var state_92785__$1 = (function (){var statearr_92788 = state_92785;
(statearr_92788[(7)] = inst_92782);

return statearr_92788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92785__$1,inst_92783);
} else {
if((state_val_92786 === (3))){
var inst_92744 = (state_92785[(2)]);
var inst_92745 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92746 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92747 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92746,inst_92744,null];
var inst_92748 = cljs.core.PersistentHashMap.fromArrays(inst_92745,inst_92747);
var inst_92749 = cljs.test.do_report.call(null,inst_92748);
var state_92785__$1 = state_92785;
var statearr_92789_92867 = state_92785__$1;
(statearr_92789_92867[(2)] = inst_92749);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92785__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92786 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92785,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92753 = cljs.core.List.EMPTY;
var inst_92754 = cljs.core._conj.call(null,inst_92753,true);
var inst_92755 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_92785__$1 = (function (){var statearr_92790 = state_92785;
(statearr_92790[(8)] = inst_92754);

return statearr_92790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92785__$1,(5),inst_92755);
} else {
if((state_val_92786 === (5))){
var inst_92759 = (state_92785[(9)]);
var inst_92754 = (state_92785[(8)]);
var inst_92758 = (state_92785[(10)]);
var inst_92757 = (state_92785[(2)]);
var inst_92758__$1 = cljs.core._conj.call(null,inst_92754,inst_92757);
var inst_92759__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92758__$1);
var state_92785__$1 = (function (){var statearr_92791 = state_92785;
(statearr_92791[(9)] = inst_92759__$1);

(statearr_92791[(10)] = inst_92758__$1);

return statearr_92791;
})();
if(cljs.core.truth_(inst_92759__$1)){
var statearr_92792_92868 = state_92785__$1;
(statearr_92792_92868[(1)] = (6));

} else {
var statearr_92793_92869 = state_92785__$1;
(statearr_92793_92869[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92786 === (6))){
var inst_92758 = (state_92785[(10)]);
var inst_92761 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92762 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92763 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92758);
var inst_92764 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92762,inst_92763,null];
var inst_92765 = cljs.core.PersistentHashMap.fromArrays(inst_92761,inst_92764);
var inst_92766 = cljs.test.do_report.call(null,inst_92765);
var state_92785__$1 = state_92785;
var statearr_92794_92870 = state_92785__$1;
(statearr_92794_92870[(2)] = inst_92766);

(statearr_92794_92870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92786 === (7))){
var inst_92758 = (state_92785[(10)]);
var inst_92768 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92769 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92770 = cljs.core.List.EMPTY;
var inst_92771 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92772 = cljs.core.cons.call(null,inst_92771,inst_92758);
var inst_92773 = cljs.core._conj.call(null,inst_92770,inst_92772);
var inst_92774 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92775 = cljs.core._conj.call(null,inst_92773,inst_92774);
var inst_92776 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92769,inst_92775,null];
var inst_92777 = cljs.core.PersistentHashMap.fromArrays(inst_92768,inst_92776);
var inst_92778 = cljs.test.do_report.call(null,inst_92777);
var state_92785__$1 = state_92785;
var statearr_92795_92871 = state_92785__$1;
(statearr_92795_92871[(2)] = inst_92778);

(statearr_92795_92871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92786 === (8))){
var inst_92759 = (state_92785[(9)]);
var inst_92780 = (state_92785[(2)]);
var state_92785__$1 = (function (){var statearr_92796 = state_92785;
(statearr_92796[(11)] = inst_92780);

return statearr_92796;
})();
var statearr_92797_92872 = state_92785__$1;
(statearr_92797_92872[(2)] = inst_92759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92785__$1);

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
var statearr_92801 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92801[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92801[(1)] = (1));

return statearr_92801;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92785){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92802){if((e92802 instanceof Object)){
var ex__9301__auto__ = e92802;
var statearr_92803_92873 = state_92785;
(statearr_92803_92873[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92874 = state_92785;
state_92785 = G__92874;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92785){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_92804 = f__9319__auto__.call(null);
(statearr_92804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test92740.prototype.apply = (function (self__,args92743){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args92743)));
});

drop_dot.core_test.t_drop_dot$core_test92740.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10407__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10407__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10407__auto__){
return (function (state_92846){
var state_val_92847 = (state_92846[(1)]);
if((state_val_92847 === (1))){
var state_92846__$1 = state_92846;
var statearr_92848_92875 = state_92846__$1;
(statearr_92848_92875[(2)] = null);

(statearr_92848_92875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92847 === (2))){
var inst_92843 = (state_92846[(2)]);
var inst_92844 = done.call(null);
var state_92846__$1 = (function (){var statearr_92849 = state_92846;
(statearr_92849[(7)] = inst_92843);

return statearr_92849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_92846__$1,inst_92844);
} else {
if((state_val_92847 === (3))){
var inst_92805 = (state_92846[(2)]);
var inst_92806 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92807 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92808 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_92807,inst_92805,null];
var inst_92809 = cljs.core.PersistentHashMap.fromArrays(inst_92806,inst_92808);
var inst_92810 = cljs.test.do_report.call(null,inst_92809);
var state_92846__$1 = state_92846;
var statearr_92850_92876 = state_92846__$1;
(statearr_92850_92876[(2)] = inst_92810);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92847 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_92846,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_92814 = cljs.core.List.EMPTY;
var inst_92815 = cljs.core._conj.call(null,inst_92814,true);
var inst_92816 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_92846__$1 = (function (){var statearr_92851 = state_92846;
(statearr_92851[(8)] = inst_92815);

return statearr_92851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_92846__$1,(5),inst_92816);
} else {
if((state_val_92847 === (5))){
var inst_92820 = (state_92846[(9)]);
var inst_92815 = (state_92846[(8)]);
var inst_92819 = (state_92846[(10)]);
var inst_92818 = (state_92846[(2)]);
var inst_92819__$1 = cljs.core._conj.call(null,inst_92815,inst_92818);
var inst_92820__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_92819__$1);
var state_92846__$1 = (function (){var statearr_92852 = state_92846;
(statearr_92852[(9)] = inst_92820__$1);

(statearr_92852[(10)] = inst_92819__$1);

return statearr_92852;
})();
if(cljs.core.truth_(inst_92820__$1)){
var statearr_92853_92877 = state_92846__$1;
(statearr_92853_92877[(1)] = (6));

} else {
var statearr_92854_92878 = state_92846__$1;
(statearr_92854_92878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92847 === (6))){
var inst_92819 = (state_92846[(10)]);
var inst_92822 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92823 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92824 = cljs.core.cons.call(null,cljs.core._EQ_,inst_92819);
var inst_92825 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_92823,inst_92824,null];
var inst_92826 = cljs.core.PersistentHashMap.fromArrays(inst_92822,inst_92825);
var inst_92827 = cljs.test.do_report.call(null,inst_92826);
var state_92846__$1 = state_92846;
var statearr_92855_92879 = state_92846__$1;
(statearr_92855_92879[(2)] = inst_92827);

(statearr_92855_92879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92847 === (7))){
var inst_92819 = (state_92846[(10)]);
var inst_92829 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_92830 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_92831 = cljs.core.List.EMPTY;
var inst_92832 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_92833 = cljs.core.cons.call(null,inst_92832,inst_92819);
var inst_92834 = cljs.core._conj.call(null,inst_92831,inst_92833);
var inst_92835 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_92836 = cljs.core._conj.call(null,inst_92834,inst_92835);
var inst_92837 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_92830,inst_92836,null];
var inst_92838 = cljs.core.PersistentHashMap.fromArrays(inst_92829,inst_92837);
var inst_92839 = cljs.test.do_report.call(null,inst_92838);
var state_92846__$1 = state_92846;
var statearr_92856_92880 = state_92846__$1;
(statearr_92856_92880[(2)] = inst_92839);

(statearr_92856_92880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_92847 === (8))){
var inst_92820 = (state_92846[(9)]);
var inst_92841 = (state_92846[(2)]);
var state_92846__$1 = (function (){var statearr_92857 = state_92846;
(statearr_92857[(11)] = inst_92841);

return statearr_92857;
})();
var statearr_92858_92881 = state_92846__$1;
(statearr_92858_92881[(2)] = inst_92820);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92846__$1);

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
var statearr_92862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_92862[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_92862[(1)] = (1));

return statearr_92862;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_92846){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_92846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e92863){if((e92863 instanceof Object)){
var ex__9301__auto__ = e92863;
var statearr_92864_92882 = state_92846;
(statearr_92864_92882[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_92846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e92863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__92883 = state_92846;
state_92846 = G__92883;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_92846){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_92846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10407__auto__))
})();
var state__9320__auto__ = (function (){var statearr_92865 = f__9319__auto__.call(null);
(statearr_92865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_92865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10407__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test92740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta92741","meta92741",-1093336363,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test92740.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test92740.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test92740";

drop_dot.core_test.t_drop_dot$core_test92740.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test92740");
});

drop_dot.core_test.__GT_t_drop_dot$core_test92740 = (function drop_dot$core_test$__GT_t_drop_dot$core_test92740(meta92741){
return (new drop_dot.core_test.t_drop_dot$core_test92740(meta92741));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test92740(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,86,86,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map