// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test31316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test31316 = (function (meta31317){
this.meta31317 = meta31317;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test31316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31318,meta31317__$1){
var self__ = this;
var _31318__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test31316(meta31317__$1));
});

drop_dot.core_test.t_drop_dot$core_test31316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31318){
var self__ = this;
var _31318__$1 = this;
return self__.meta31317;
});

drop_dot.core_test.t_drop_dot$core_test31316.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test31316.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_31361){
var state_val_31362 = (state_31361[(1)]);
if((state_val_31362 === (1))){
var state_31361__$1 = state_31361;
var statearr_31363_31442 = state_31361__$1;
(statearr_31363_31442[(2)] = null);

(statearr_31363_31442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (2))){
var inst_31358 = (state_31361[(2)]);
var inst_31359 = done.call(null);
var state_31361__$1 = (function (){var statearr_31364 = state_31361;
(statearr_31364[(7)] = inst_31358);

return statearr_31364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31361__$1,inst_31359);
} else {
if((state_val_31362 === (3))){
var inst_31320 = (state_31361[(2)]);
var inst_31321 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31322 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_31323 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31322,inst_31320,null];
var inst_31324 = cljs.core.PersistentHashMap.fromArrays(inst_31321,inst_31323);
var inst_31325 = cljs.test.do_report.call(null,inst_31324);
var state_31361__$1 = state_31361;
var statearr_31365_31443 = state_31361__$1;
(statearr_31365_31443[(2)] = inst_31325);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31361,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31329 = cljs.core.List.EMPTY;
var inst_31330 = cljs.core._conj.call(null,inst_31329,true);
var inst_31331 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_31361__$1 = (function (){var statearr_31366 = state_31361;
(statearr_31366[(8)] = inst_31330);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31361__$1,(5),inst_31331);
} else {
if((state_val_31362 === (5))){
var inst_31330 = (state_31361[(8)]);
var inst_31334 = (state_31361[(9)]);
var inst_31335 = (state_31361[(10)]);
var inst_31333 = (state_31361[(2)]);
var inst_31334__$1 = cljs.core._conj.call(null,inst_31330,inst_31333);
var inst_31335__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31334__$1);
var state_31361__$1 = (function (){var statearr_31367 = state_31361;
(statearr_31367[(9)] = inst_31334__$1);

(statearr_31367[(10)] = inst_31335__$1);

return statearr_31367;
})();
if(cljs.core.truth_(inst_31335__$1)){
var statearr_31368_31444 = state_31361__$1;
(statearr_31368_31444[(1)] = (6));

} else {
var statearr_31369_31445 = state_31361__$1;
(statearr_31369_31445[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (6))){
var inst_31334 = (state_31361[(9)]);
var inst_31337 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31338 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_31339 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31334);
var inst_31340 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31338,inst_31339,null];
var inst_31341 = cljs.core.PersistentHashMap.fromArrays(inst_31337,inst_31340);
var inst_31342 = cljs.test.do_report.call(null,inst_31341);
var state_31361__$1 = state_31361;
var statearr_31370_31446 = state_31361__$1;
(statearr_31370_31446[(2)] = inst_31342);

(statearr_31370_31446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (7))){
var inst_31334 = (state_31361[(9)]);
var inst_31344 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31345 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_31346 = cljs.core.List.EMPTY;
var inst_31347 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31348 = cljs.core.cons.call(null,inst_31347,inst_31334);
var inst_31349 = cljs.core._conj.call(null,inst_31346,inst_31348);
var inst_31350 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31351 = cljs.core._conj.call(null,inst_31349,inst_31350);
var inst_31352 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31345,inst_31351,null];
var inst_31353 = cljs.core.PersistentHashMap.fromArrays(inst_31344,inst_31352);
var inst_31354 = cljs.test.do_report.call(null,inst_31353);
var state_31361__$1 = state_31361;
var statearr_31371_31447 = state_31361__$1;
(statearr_31371_31447[(2)] = inst_31354);

(statearr_31371_31447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31362 === (8))){
var inst_31335 = (state_31361[(10)]);
var inst_31356 = (state_31361[(2)]);
var state_31361__$1 = (function (){var statearr_31372 = state_31361;
(statearr_31372[(11)] = inst_31356);

return statearr_31372;
})();
var statearr_31373_31448 = state_31361__$1;
(statearr_31373_31448[(2)] = inst_31335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31361__$1);

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
});})(c__9318__auto__,___9588__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_31377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31377[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_31377[(1)] = (1));

return statearr_31377;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_31361){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31378){if((e31378 instanceof Object)){
var ex__9301__auto__ = e31378;
var statearr_31379_31449 = state_31361;
(statearr_31379_31449[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31450 = state_31361;
state_31361 = G__31450;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_31361){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_31361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_31380 = f__9319__auto__.call(null);
(statearr_31380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test31316.prototype.apply = (function (self__,args31319){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31319)));
});

drop_dot.core_test.t_drop_dot$core_test31316.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_31422){
var state_val_31423 = (state_31422[(1)]);
if((state_val_31423 === (1))){
var state_31422__$1 = state_31422;
var statearr_31424_31451 = state_31422__$1;
(statearr_31424_31451[(2)] = null);

(statearr_31424_31451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (2))){
var inst_31419 = (state_31422[(2)]);
var inst_31420 = done.call(null);
var state_31422__$1 = (function (){var statearr_31425 = state_31422;
(statearr_31425[(7)] = inst_31419);

return statearr_31425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31422__$1,inst_31420);
} else {
if((state_val_31423 === (3))){
var inst_31381 = (state_31422[(2)]);
var inst_31382 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31383 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_31384 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31383,inst_31381,null];
var inst_31385 = cljs.core.PersistentHashMap.fromArrays(inst_31382,inst_31384);
var inst_31386 = cljs.test.do_report.call(null,inst_31385);
var state_31422__$1 = state_31422;
var statearr_31426_31452 = state_31422__$1;
(statearr_31426_31452[(2)] = inst_31386);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31422,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31390 = cljs.core.List.EMPTY;
var inst_31391 = cljs.core._conj.call(null,inst_31390,true);
var inst_31392 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_31422__$1 = (function (){var statearr_31427 = state_31422;
(statearr_31427[(8)] = inst_31391);

return statearr_31427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(5),inst_31392);
} else {
if((state_val_31423 === (5))){
var inst_31391 = (state_31422[(8)]);
var inst_31396 = (state_31422[(9)]);
var inst_31395 = (state_31422[(10)]);
var inst_31394 = (state_31422[(2)]);
var inst_31395__$1 = cljs.core._conj.call(null,inst_31391,inst_31394);
var inst_31396__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31395__$1);
var state_31422__$1 = (function (){var statearr_31428 = state_31422;
(statearr_31428[(9)] = inst_31396__$1);

(statearr_31428[(10)] = inst_31395__$1);

return statearr_31428;
})();
if(cljs.core.truth_(inst_31396__$1)){
var statearr_31429_31453 = state_31422__$1;
(statearr_31429_31453[(1)] = (6));

} else {
var statearr_31430_31454 = state_31422__$1;
(statearr_31430_31454[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (6))){
var inst_31395 = (state_31422[(10)]);
var inst_31398 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31399 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_31400 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31395);
var inst_31401 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31399,inst_31400,null];
var inst_31402 = cljs.core.PersistentHashMap.fromArrays(inst_31398,inst_31401);
var inst_31403 = cljs.test.do_report.call(null,inst_31402);
var state_31422__$1 = state_31422;
var statearr_31431_31455 = state_31422__$1;
(statearr_31431_31455[(2)] = inst_31403);

(statearr_31431_31455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (7))){
var inst_31395 = (state_31422[(10)]);
var inst_31405 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31406 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_31407 = cljs.core.List.EMPTY;
var inst_31408 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31409 = cljs.core.cons.call(null,inst_31408,inst_31395);
var inst_31410 = cljs.core._conj.call(null,inst_31407,inst_31409);
var inst_31411 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31412 = cljs.core._conj.call(null,inst_31410,inst_31411);
var inst_31413 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31406,inst_31412,null];
var inst_31414 = cljs.core.PersistentHashMap.fromArrays(inst_31405,inst_31413);
var inst_31415 = cljs.test.do_report.call(null,inst_31414);
var state_31422__$1 = state_31422;
var statearr_31432_31456 = state_31422__$1;
(statearr_31432_31456[(2)] = inst_31415);

(statearr_31432_31456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (8))){
var inst_31396 = (state_31422[(9)]);
var inst_31417 = (state_31422[(2)]);
var state_31422__$1 = (function (){var statearr_31433 = state_31422;
(statearr_31433[(11)] = inst_31417);

return statearr_31433;
})();
var statearr_31434_31457 = state_31422__$1;
(statearr_31434_31457[(2)] = inst_31396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422__$1);

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
});})(c__9318__auto__,___9588__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___9588__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_31438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31438[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_31438[(1)] = (1));

return statearr_31438;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_31422){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31439){if((e31439 instanceof Object)){
var ex__9301__auto__ = e31439;
var statearr_31440_31458 = state_31422;
(statearr_31440_31458[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31459 = state_31422;
state_31422 = G__31459;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_31422){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_31422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31441 = f__9319__auto__.call(null);
(statearr_31441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test31316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31317","meta31317",252445961,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test31316.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test31316.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test31316";

drop_dot.core_test.t_drop_dot$core_test31316.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test31316");
});

drop_dot.core_test.__GT_t_drop_dot$core_test31316 = (function drop_dot$core_test$__GT_t_drop_dot$core_test31316(meta31317){
return (new drop_dot.core_test.t_drop_dot$core_test31316(meta31317));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test31316(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__9520__auto___31463 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_installed_QMARK_.call(null));
var result__9521__auto___31464 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___31463);
if(cljs.core.truth_(result__9521__auto___31464)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___31463),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___31463)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e31460){var t__9558__auto___31465 = e31460;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___31465,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto___31466 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__9521__auto___31467 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___31466);
if(cljs.core.truth_(result__9521__auto___31467)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___31466),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___31466)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e31461){var t__9558__auto___31468 = e31461;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___31468,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__9521__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto__);
if(cljs.core.truth_(result__9521__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9521__auto__;
}catch (e31462){var t__9558__auto__ = e31462;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env31469 = cljs.test.empty_env.call(null);
var summary31470 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31469,summary31470){
return (function (){
cljs.test.set_env_BANG_.call(null,env31469);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9624__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env31469,summary31470){
return (function (){
if((env__9624__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9624__auto__,env31469,summary31470))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)])),new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env31469,summary31470){
return (function (){
if((env__9624__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9624__auto__,env31469,summary31470))
], null));
})());
});})(env31469,summary31470))
,((function (env31469,summary31470){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env31469,summary31470))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31469,summary31470){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary31470,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary31470),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env31469,summary31470))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env31469,summary31470){
return (function (){
cljs.test.set_env_BANG_.call(null,env31469);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary31470));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary31470),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env31469,summary31470))
], null));
})());

//# sourceMappingURL=core_test.js.map