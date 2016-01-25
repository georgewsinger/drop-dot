// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test49353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test49353 = (function (meta49354){
this.meta49354 = meta49354;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test49353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49355,meta49354__$1){
var self__ = this;
var _49355__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test49353(meta49354__$1));
});

drop_dot.core_test.t_drop_dot$core_test49353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49355){
var self__ = this;
var _49355__$1 = this;
return self__.meta49354;
});

drop_dot.core_test.t_drop_dot$core_test49353.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test49353.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_49403){
var state_val_49404 = (state_49403[(1)]);
if((state_val_49404 === (1))){
var state_49403__$1 = state_49403;
var statearr_49405_49503 = state_49403__$1;
(statearr_49405_49503[(2)] = null);

(statearr_49405_49503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (2))){
var inst_49400 = (state_49403[(2)]);
var inst_49401 = done.call(null);
var state_49403__$1 = (function (){var statearr_49406 = state_49403;
(statearr_49406[(7)] = inst_49400);

return statearr_49406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49403__$1,inst_49401);
} else {
if((state_val_49404 === (3))){
var inst_49357 = (state_49403[(2)]);
var inst_49358 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49359 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_49360 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49359,inst_49357,null];
var inst_49361 = cljs.core.PersistentHashMap.fromArrays(inst_49358,inst_49360);
var inst_49362 = cljs.test.do_report.call(null,inst_49361);
var state_49403__$1 = state_49403;
var statearr_49407_49504 = state_49403__$1;
(statearr_49407_49504[(2)] = inst_49362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49403__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49403,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49366 = cljs.core.List.EMPTY;
var inst_49367 = cljs.core._conj.call(null,inst_49366,"val1");
var inst_49371 = cljs.core.async.chan.call(null,(1));
var inst_49372 = (function (){var c__9318__auto____$1 = inst_49371;
return ((function (c__9318__auto____$1,_,inst_49366,inst_49367,inst_49371,state_val_49404,c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_49366,inst_49367,inst_49371,state_val_49404,c__9318__auto__,___9588__auto__,self____$1){
return (function (state_49369){
var state_val_49370 = (state_49369[(1)]);
if((state_val_49370 === (1))){
var state_49369__$1 = state_49369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49369__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_49366,inst_49367,inst_49371,state_val_49404,c__9318__auto__,___9588__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_49366,inst_49367,inst_49371,state_val_49404,c__9318__auto__,___9588__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_49411 = [null,null,null,null,null,null,null];
(statearr_49411[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49411[(1)] = (1));

return statearr_49411;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49369){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49412){if((e49412 instanceof Object)){
var ex__9301__auto__ = e49412;
var statearr_49413_49505 = state_49369;
(statearr_49413_49505[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49506 = state_49369;
state_49369 = G__49506;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49369){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_49366,inst_49367,inst_49371,state_val_49404,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_49414 = f__9319__auto__.call(null);
(statearr_49414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_49414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_49366,inst_49367,inst_49371,state_val_49404,c__9318__auto__,___9588__auto__,self____$1))
})();
var inst_49373 = cljs.core.async.impl.dispatch.run.call(null,inst_49372);
var state_49403__$1 = (function (){var statearr_49415 = state_49403;
(statearr_49415[(8)] = inst_49373);

(statearr_49415[(9)] = inst_49367);

return statearr_49415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49403__$1,(5),inst_49371);
} else {
if((state_val_49404 === (5))){
var inst_49376 = (state_49403[(10)]);
var inst_49377 = (state_49403[(11)]);
var inst_49367 = (state_49403[(9)]);
var inst_49375 = (state_49403[(2)]);
var inst_49376__$1 = cljs.core._conj.call(null,inst_49367,inst_49375);
var inst_49377__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_49376__$1);
var state_49403__$1 = (function (){var statearr_49416 = state_49403;
(statearr_49416[(10)] = inst_49376__$1);

(statearr_49416[(11)] = inst_49377__$1);

return statearr_49416;
})();
if(cljs.core.truth_(inst_49377__$1)){
var statearr_49417_49507 = state_49403__$1;
(statearr_49417_49507[(1)] = (6));

} else {
var statearr_49418_49508 = state_49403__$1;
(statearr_49418_49508[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (6))){
var inst_49376 = (state_49403[(10)]);
var inst_49379 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49380 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_49381 = cljs.core.cons.call(null,cljs.core._EQ_,inst_49376);
var inst_49382 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_49380,inst_49381,null];
var inst_49383 = cljs.core.PersistentHashMap.fromArrays(inst_49379,inst_49382);
var inst_49384 = cljs.test.do_report.call(null,inst_49383);
var state_49403__$1 = state_49403;
var statearr_49419_49509 = state_49403__$1;
(statearr_49419_49509[(2)] = inst_49384);

(statearr_49419_49509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (7))){
var inst_49376 = (state_49403[(10)]);
var inst_49386 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49387 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_49388 = cljs.core.List.EMPTY;
var inst_49389 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_49390 = cljs.core.cons.call(null,inst_49389,inst_49376);
var inst_49391 = cljs.core._conj.call(null,inst_49388,inst_49390);
var inst_49392 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_49393 = cljs.core._conj.call(null,inst_49391,inst_49392);
var inst_49394 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_49387,inst_49393,null];
var inst_49395 = cljs.core.PersistentHashMap.fromArrays(inst_49386,inst_49394);
var inst_49396 = cljs.test.do_report.call(null,inst_49395);
var state_49403__$1 = state_49403;
var statearr_49420_49510 = state_49403__$1;
(statearr_49420_49510[(2)] = inst_49396);

(statearr_49420_49510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49404 === (8))){
var inst_49377 = (state_49403[(11)]);
var inst_49398 = (state_49403[(2)]);
var state_49403__$1 = (function (){var statearr_49421 = state_49403;
(statearr_49421[(12)] = inst_49398);

return statearr_49421;
})();
var statearr_49422_49511 = state_49403__$1;
(statearr_49422_49511[(2)] = inst_49377);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49403__$1);

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
var statearr_49426 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49426[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49426[(1)] = (1));

return statearr_49426;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49403){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49427){if((e49427 instanceof Object)){
var ex__9301__auto__ = e49427;
var statearr_49428_49512 = state_49403;
(statearr_49428_49512[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49513 = state_49403;
state_49403 = G__49513;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49403){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_49429 = f__9319__auto__.call(null);
(statearr_49429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test49353.prototype.apply = (function (self__,args49356){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args49356)));
});

drop_dot.core_test.t_drop_dot$core_test49353.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_49476){
var state_val_49477 = (state_49476[(1)]);
if((state_val_49477 === (1))){
var state_49476__$1 = state_49476;
var statearr_49478_49514 = state_49476__$1;
(statearr_49478_49514[(2)] = null);

(statearr_49478_49514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49477 === (2))){
var inst_49473 = (state_49476[(2)]);
var inst_49474 = done.call(null);
var state_49476__$1 = (function (){var statearr_49479 = state_49476;
(statearr_49479[(7)] = inst_49473);

return statearr_49479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49476__$1,inst_49474);
} else {
if((state_val_49477 === (3))){
var inst_49430 = (state_49476[(2)]);
var inst_49431 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49432 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_49433 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49432,inst_49430,null];
var inst_49434 = cljs.core.PersistentHashMap.fromArrays(inst_49431,inst_49433);
var inst_49435 = cljs.test.do_report.call(null,inst_49434);
var state_49476__$1 = state_49476;
var statearr_49480_49515 = state_49476__$1;
(statearr_49480_49515[(2)] = inst_49435);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49477 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49476,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49439 = cljs.core.List.EMPTY;
var inst_49440 = cljs.core._conj.call(null,inst_49439,"val1");
var inst_49444 = cljs.core.async.chan.call(null,(1));
var inst_49445 = (function (){var c__9318__auto____$1 = inst_49444;
return ((function (c__9318__auto____$1,_,inst_49439,inst_49440,inst_49444,state_val_49477,c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,_,inst_49439,inst_49440,inst_49444,state_val_49477,c__9318__auto__,___9588__auto__){
return (function (state_49442){
var state_val_49443 = (state_49442[(1)]);
if((state_val_49443 === (1))){
var state_49442__$1 = state_49442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49442__$1,"val1");
} else {
return null;
}
});})(c__9318__auto____$1,_,inst_49439,inst_49440,inst_49444,state_val_49477,c__9318__auto__,___9588__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,_,inst_49439,inst_49440,inst_49444,state_val_49477,c__9318__auto__,___9588__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_49484 = [null,null,null,null,null,null,null];
(statearr_49484[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49484[(1)] = (1));

return statearr_49484;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49442){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49485){if((e49485 instanceof Object)){
var ex__9301__auto__ = e49485;
var statearr_49486_49516 = state_49442;
(statearr_49486_49516[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49517 = state_49442;
state_49442 = G__49517;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49442){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,_,inst_49439,inst_49440,inst_49444,state_val_49477,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49487 = f__9319__auto__.call(null);
(statearr_49487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_49487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});
;})(c__9318__auto____$1,_,inst_49439,inst_49440,inst_49444,state_val_49477,c__9318__auto__,___9588__auto__))
})();
var inst_49446 = cljs.core.async.impl.dispatch.run.call(null,inst_49445);
var state_49476__$1 = (function (){var statearr_49488 = state_49476;
(statearr_49488[(8)] = inst_49440);

(statearr_49488[(9)] = inst_49446);

return statearr_49488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49476__$1,(5),inst_49444);
} else {
if((state_val_49477 === (5))){
var inst_49440 = (state_49476[(8)]);
var inst_49450 = (state_49476[(10)]);
var inst_49449 = (state_49476[(11)]);
var inst_49448 = (state_49476[(2)]);
var inst_49449__$1 = cljs.core._conj.call(null,inst_49440,inst_49448);
var inst_49450__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_49449__$1);
var state_49476__$1 = (function (){var statearr_49489 = state_49476;
(statearr_49489[(10)] = inst_49450__$1);

(statearr_49489[(11)] = inst_49449__$1);

return statearr_49489;
})();
if(cljs.core.truth_(inst_49450__$1)){
var statearr_49490_49518 = state_49476__$1;
(statearr_49490_49518[(1)] = (6));

} else {
var statearr_49491_49519 = state_49476__$1;
(statearr_49491_49519[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49477 === (6))){
var inst_49449 = (state_49476[(11)]);
var inst_49452 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49453 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_49454 = cljs.core.cons.call(null,cljs.core._EQ_,inst_49449);
var inst_49455 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_49453,inst_49454,null];
var inst_49456 = cljs.core.PersistentHashMap.fromArrays(inst_49452,inst_49455);
var inst_49457 = cljs.test.do_report.call(null,inst_49456);
var state_49476__$1 = state_49476;
var statearr_49492_49520 = state_49476__$1;
(statearr_49492_49520[(2)] = inst_49457);

(statearr_49492_49520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49477 === (7))){
var inst_49449 = (state_49476[(11)]);
var inst_49459 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49460 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_49461 = cljs.core.List.EMPTY;
var inst_49462 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_49463 = cljs.core.cons.call(null,inst_49462,inst_49449);
var inst_49464 = cljs.core._conj.call(null,inst_49461,inst_49463);
var inst_49465 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_49466 = cljs.core._conj.call(null,inst_49464,inst_49465);
var inst_49467 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_49460,inst_49466,null];
var inst_49468 = cljs.core.PersistentHashMap.fromArrays(inst_49459,inst_49467);
var inst_49469 = cljs.test.do_report.call(null,inst_49468);
var state_49476__$1 = state_49476;
var statearr_49493_49521 = state_49476__$1;
(statearr_49493_49521[(2)] = inst_49469);

(statearr_49493_49521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49477 === (8))){
var inst_49450 = (state_49476[(10)]);
var inst_49471 = (state_49476[(2)]);
var state_49476__$1 = (function (){var statearr_49494 = state_49476;
(statearr_49494[(12)] = inst_49471);

return statearr_49494;
})();
var statearr_49495_49522 = state_49476__$1;
(statearr_49495_49522[(2)] = inst_49450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49476__$1);

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
var statearr_49499 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49499[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49499[(1)] = (1));

return statearr_49499;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49476){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49500){if((e49500 instanceof Object)){
var ex__9301__auto__ = e49500;
var statearr_49501_49523 = state_49476;
(statearr_49501_49523[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49524 = state_49476;
state_49476 = G__49524;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49476){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49502 = f__9319__auto__.call(null);
(statearr_49502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test49353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49354","meta49354",110094588,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test49353.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test49353.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test49353";

drop_dot.core_test.t_drop_dot$core_test49353.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test49353");
});

drop_dot.core_test.__GT_t_drop_dot$core_test49353 = (function drop_dot$core_test$__GT_t_drop_dot$core_test49353(meta49354){
return (new drop_dot.core_test.t_drop_dot$core_test49353(meta49354));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test49353(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"test/drop_dot/core_test.cljs",20,1,11,11,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
drop_dot.core_test.drop_fns = (function drop_dot$core_test$drop_fns(){
return cljs.test.test_var.call(null,drop_dot$core_test$drop_fns.cljs$lang$var);
});
drop_dot.core_test.drop_fns.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing drop-dot drop functions.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test49525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test49525 = (function (meta49526){
this.meta49526 = meta49526;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test49525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49527,meta49526__$1){
var self__ = this;
var _49527__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test49525(meta49526__$1));
});

drop_dot.core_test.t_drop_dot$core_test49525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49527){
var self__ = this;
var _49527__$1 = this;
return self__.meta49526;
});

drop_dot.core_test.t_drop_dot$core_test49525.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test49525.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_49532){
var state_val_49533 = (state_49532[(1)]);
if((state_val_49533 === (1))){
var inst_49529 = cljs.core.async.chan.call(null);
var inst_49530 = done.call(null);
var state_49532__$1 = (function (){var statearr_49534 = state_49532;
(statearr_49534[(7)] = inst_49529);

return statearr_49534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49532__$1,inst_49530);
} else {
return null;
}
});})(c__9318__auto__,___9588__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_49538 = [null,null,null,null,null,null,null,null];
(statearr_49538[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49538[(1)] = (1));

return statearr_49538;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49532){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49539){if((e49539 instanceof Object)){
var ex__9301__auto__ = e49539;
var statearr_49540_49555 = state_49532;
(statearr_49540_49555[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49556 = state_49532;
state_49532 = G__49556;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49532){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_49541 = f__9319__auto__.call(null);
(statearr_49541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test49525.prototype.apply = (function (self__,args49528){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args49528)));
});

drop_dot.core_test.t_drop_dot$core_test49525.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_49545){
var state_val_49546 = (state_49545[(1)]);
if((state_val_49546 === (1))){
var inst_49542 = cljs.core.async.chan.call(null);
var inst_49543 = done.call(null);
var state_49545__$1 = (function (){var statearr_49547 = state_49545;
(statearr_49547[(7)] = inst_49542);

return statearr_49547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49545__$1,inst_49543);
} else {
return null;
}
});})(c__9318__auto__,___9588__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___9588__auto__){
return (function() {
var drop_dot$core_test$state_machine__9298__auto__ = null;
var drop_dot$core_test$state_machine__9298__auto____0 = (function (){
var statearr_49551 = [null,null,null,null,null,null,null,null];
(statearr_49551[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49551[(1)] = (1));

return statearr_49551;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49545){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49552){if((e49552 instanceof Object)){
var ex__9301__auto__ = e49552;
var statearr_49553_49557 = state_49545;
(statearr_49553_49557[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49558 = state_49545;
state_49545 = G__49558;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49545){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49554 = f__9319__auto__.call(null);
(statearr_49554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
});

drop_dot.core_test.t_drop_dot$core_test49525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49526","meta49526",-1035448660,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test49525.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test49525.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test49525";

drop_dot.core_test.t_drop_dot$core_test49525.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test49525");
});

drop_dot.core_test.__GT_t_drop_dot$core_test49525 = (function drop_dot$core_test$__GT_t_drop_dot$core_test49525(meta49526){
return (new drop_dot.core_test.t_drop_dot$core_test49525(meta49526));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test49525(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.drop_fns.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.drop_fns;},new cljs.core.Symbol("drop-dot.core-test","drop-fns","drop-dot.core-test/drop-fns",-274950926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"drop-fns","drop-fns",-351659585,null),"test/drop_dot/core_test.cljs",18,1,18,18,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.drop_fns)?drop_dot.core_test.drop_fns.cljs$lang$test:null)]));
drop_dot.core_test.core_tests = (function drop_dot$core_test$core_tests(){
return cljs.test.test_var.call(null,drop_dot$core_test$core_tests.cljs$lang$var);
});
drop_dot.core_test.core_tests.cljs$lang$test = (function (){
if(typeof drop_dot.core_test.t_drop_dot$core_test49559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test49559 = (function (meta49560){
this.meta49560 = meta49560;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test49559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49561,meta49560__$1){
var self__ = this;
var _49561__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test49559(meta49560__$1));
});

drop_dot.core_test.t_drop_dot$core_test49559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49561){
var self__ = this;
var _49561__$1 = this;
return self__.meta49560;
});

drop_dot.core_test.t_drop_dot$core_test49559.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test49559.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_49604){
var state_val_49605 = (state_49604[(1)]);
if((state_val_49605 === (1))){
var state_49604__$1 = state_49604;
var statearr_49606_49685 = state_49604__$1;
(statearr_49606_49685[(2)] = null);

(statearr_49606_49685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49605 === (2))){
var inst_49601 = (state_49604[(2)]);
var inst_49602 = done.call(null);
var state_49604__$1 = (function (){var statearr_49607 = state_49604;
(statearr_49607[(7)] = inst_49601);

return statearr_49607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49604__$1,inst_49602);
} else {
if((state_val_49605 === (3))){
var inst_49563 = (state_49604[(2)]);
var inst_49564 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49565 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49566 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49565,inst_49563,null];
var inst_49567 = cljs.core.PersistentHashMap.fromArrays(inst_49564,inst_49566);
var inst_49568 = cljs.test.do_report.call(null,inst_49567);
var state_49604__$1 = state_49604;
var statearr_49608_49686 = state_49604__$1;
(statearr_49608_49686[(2)] = inst_49568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49604__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49605 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49604,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49572 = cljs.core.List.EMPTY;
var inst_49573 = cljs.core._conj.call(null,inst_49572,true);
var inst_49574 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_49604__$1 = (function (){var statearr_49609 = state_49604;
(statearr_49609[(8)] = inst_49573);

return statearr_49609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49604__$1,(5),inst_49574);
} else {
if((state_val_49605 === (5))){
var inst_49577 = (state_49604[(9)]);
var inst_49573 = (state_49604[(8)]);
var inst_49578 = (state_49604[(10)]);
var inst_49576 = (state_49604[(2)]);
var inst_49577__$1 = cljs.core._conj.call(null,inst_49573,inst_49576);
var inst_49578__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_49577__$1);
var state_49604__$1 = (function (){var statearr_49610 = state_49604;
(statearr_49610[(9)] = inst_49577__$1);

(statearr_49610[(10)] = inst_49578__$1);

return statearr_49610;
})();
if(cljs.core.truth_(inst_49578__$1)){
var statearr_49611_49687 = state_49604__$1;
(statearr_49611_49687[(1)] = (6));

} else {
var statearr_49612_49688 = state_49604__$1;
(statearr_49612_49688[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49605 === (6))){
var inst_49577 = (state_49604[(9)]);
var inst_49580 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49581 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49582 = cljs.core.cons.call(null,cljs.core._EQ_,inst_49577);
var inst_49583 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_49581,inst_49582,null];
var inst_49584 = cljs.core.PersistentHashMap.fromArrays(inst_49580,inst_49583);
var inst_49585 = cljs.test.do_report.call(null,inst_49584);
var state_49604__$1 = state_49604;
var statearr_49613_49689 = state_49604__$1;
(statearr_49613_49689[(2)] = inst_49585);

(statearr_49613_49689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49605 === (7))){
var inst_49577 = (state_49604[(9)]);
var inst_49587 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49588 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49589 = cljs.core.List.EMPTY;
var inst_49590 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_49591 = cljs.core.cons.call(null,inst_49590,inst_49577);
var inst_49592 = cljs.core._conj.call(null,inst_49589,inst_49591);
var inst_49593 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_49594 = cljs.core._conj.call(null,inst_49592,inst_49593);
var inst_49595 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_49588,inst_49594,null];
var inst_49596 = cljs.core.PersistentHashMap.fromArrays(inst_49587,inst_49595);
var inst_49597 = cljs.test.do_report.call(null,inst_49596);
var state_49604__$1 = state_49604;
var statearr_49614_49690 = state_49604__$1;
(statearr_49614_49690[(2)] = inst_49597);

(statearr_49614_49690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49605 === (8))){
var inst_49578 = (state_49604[(10)]);
var inst_49599 = (state_49604[(2)]);
var state_49604__$1 = (function (){var statearr_49615 = state_49604;
(statearr_49615[(11)] = inst_49599);

return statearr_49615;
})();
var statearr_49616_49691 = state_49604__$1;
(statearr_49616_49691[(2)] = inst_49578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49604__$1);

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
var statearr_49620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49620[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49620[(1)] = (1));

return statearr_49620;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49604){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49621){if((e49621 instanceof Object)){
var ex__9301__auto__ = e49621;
var statearr_49622_49692 = state_49604;
(statearr_49622_49692[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49693 = state_49604;
state_49604 = G__49693;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49604){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_49623 = f__9319__auto__.call(null);
(statearr_49623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test49559.prototype.apply = (function (self__,args49562){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args49562)));
});

drop_dot.core_test.t_drop_dot$core_test49559.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_49665){
var state_val_49666 = (state_49665[(1)]);
if((state_val_49666 === (1))){
var state_49665__$1 = state_49665;
var statearr_49667_49694 = state_49665__$1;
(statearr_49667_49694[(2)] = null);

(statearr_49667_49694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (2))){
var inst_49662 = (state_49665[(2)]);
var inst_49663 = done.call(null);
var state_49665__$1 = (function (){var statearr_49668 = state_49665;
(statearr_49668[(7)] = inst_49662);

return statearr_49668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49665__$1,inst_49663);
} else {
if((state_val_49666 === (3))){
var inst_49624 = (state_49665[(2)]);
var inst_49625 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49626 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49627 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49626,inst_49624,null];
var inst_49628 = cljs.core.PersistentHashMap.fromArrays(inst_49625,inst_49627);
var inst_49629 = cljs.test.do_report.call(null,inst_49628);
var state_49665__$1 = state_49665;
var statearr_49669_49695 = state_49665__$1;
(statearr_49669_49695[(2)] = inst_49629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49665,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49633 = cljs.core.List.EMPTY;
var inst_49634 = cljs.core._conj.call(null,inst_49633,true);
var inst_49635 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_49665__$1 = (function (){var statearr_49670 = state_49665;
(statearr_49670[(8)] = inst_49634);

return statearr_49670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49665__$1,(5),inst_49635);
} else {
if((state_val_49666 === (5))){
var inst_49638 = (state_49665[(9)]);
var inst_49639 = (state_49665[(10)]);
var inst_49634 = (state_49665[(8)]);
var inst_49637 = (state_49665[(2)]);
var inst_49638__$1 = cljs.core._conj.call(null,inst_49634,inst_49637);
var inst_49639__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_49638__$1);
var state_49665__$1 = (function (){var statearr_49671 = state_49665;
(statearr_49671[(9)] = inst_49638__$1);

(statearr_49671[(10)] = inst_49639__$1);

return statearr_49671;
})();
if(cljs.core.truth_(inst_49639__$1)){
var statearr_49672_49696 = state_49665__$1;
(statearr_49672_49696[(1)] = (6));

} else {
var statearr_49673_49697 = state_49665__$1;
(statearr_49673_49697[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (6))){
var inst_49638 = (state_49665[(9)]);
var inst_49641 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49642 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49643 = cljs.core.cons.call(null,cljs.core._EQ_,inst_49638);
var inst_49644 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_49642,inst_49643,null];
var inst_49645 = cljs.core.PersistentHashMap.fromArrays(inst_49641,inst_49644);
var inst_49646 = cljs.test.do_report.call(null,inst_49645);
var state_49665__$1 = state_49665;
var statearr_49674_49698 = state_49665__$1;
(statearr_49674_49698[(2)] = inst_49646);

(statearr_49674_49698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (7))){
var inst_49638 = (state_49665[(9)]);
var inst_49648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49650 = cljs.core.List.EMPTY;
var inst_49651 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_49652 = cljs.core.cons.call(null,inst_49651,inst_49638);
var inst_49653 = cljs.core._conj.call(null,inst_49650,inst_49652);
var inst_49654 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_49655 = cljs.core._conj.call(null,inst_49653,inst_49654);
var inst_49656 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_49649,inst_49655,null];
var inst_49657 = cljs.core.PersistentHashMap.fromArrays(inst_49648,inst_49656);
var inst_49658 = cljs.test.do_report.call(null,inst_49657);
var state_49665__$1 = state_49665;
var statearr_49675_49699 = state_49665__$1;
(statearr_49675_49699[(2)] = inst_49658);

(statearr_49675_49699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49666 === (8))){
var inst_49639 = (state_49665[(10)]);
var inst_49660 = (state_49665[(2)]);
var state_49665__$1 = (function (){var statearr_49676 = state_49665;
(statearr_49676[(11)] = inst_49660);

return statearr_49676;
})();
var statearr_49677_49700 = state_49665__$1;
(statearr_49677_49700[(2)] = inst_49639);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49665__$1);

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
var statearr_49681 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49681[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49681[(1)] = (1));

return statearr_49681;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49665){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49682){if((e49682 instanceof Object)){
var ex__9301__auto__ = e49682;
var statearr_49683_49701 = state_49665;
(statearr_49683_49701[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49702 = state_49665;
state_49665 = G__49702;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49665){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49684 = f__9319__auto__.call(null);
(statearr_49684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test49559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49560","meta49560",-401137926,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test49559.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test49559.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test49559";

drop_dot.core_test.t_drop_dot$core_test49559.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test49559");
});

drop_dot.core_test.__GT_t_drop_dot$core_test49559 = (function drop_dot$core_test$__GT_t_drop_dot$core_test49559(meta49560){
return (new drop_dot.core_test.t_drop_dot$core_test49559(meta49560));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test49559(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"test/drop_dot/core_test.cljs",20,1,38,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map