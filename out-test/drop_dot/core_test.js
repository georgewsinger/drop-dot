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
if(typeof drop_dot.core_test.t_drop_dot$core_test23013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test23013 = (function (meta23014){
this.meta23014 = meta23014;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test23013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23015,meta23014__$1){
var self__ = this;
var _23015__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test23013(meta23014__$1));
});

drop_dot.core_test.t_drop_dot$core_test23013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23015){
var self__ = this;
var _23015__$1 = this;
return self__.meta23014;
});

drop_dot.core_test.t_drop_dot$core_test23013.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test23013.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_23058){
var state_val_23059 = (state_23058[(1)]);
if((state_val_23059 === (1))){
var state_23058__$1 = state_23058;
var statearr_23060_23139 = state_23058__$1;
(statearr_23060_23139[(2)] = null);

(statearr_23060_23139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (2))){
var inst_23055 = (state_23058[(2)]);
var inst_23056 = done.call(null);
var state_23058__$1 = (function (){var statearr_23061 = state_23058;
(statearr_23061[(7)] = inst_23055);

return statearr_23061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23058__$1,inst_23056);
} else {
if((state_val_23059 === (3))){
var inst_23017 = (state_23058[(2)]);
var inst_23018 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_23019 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_23020 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_23019,inst_23017,null];
var inst_23021 = cljs.core.PersistentHashMap.fromArrays(inst_23018,inst_23020);
var inst_23022 = cljs.test.do_report.call(null,inst_23021);
var state_23058__$1 = state_23058;
var statearr_23062_23140 = state_23058__$1;
(statearr_23062_23140[(2)] = inst_23022);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23058,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23026 = cljs.core.List.EMPTY;
var inst_23027 = cljs.core._conj.call(null,inst_23026,true);
var inst_23028 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_23058__$1 = (function (){var statearr_23063 = state_23058;
(statearr_23063[(8)] = inst_23027);

return statearr_23063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23058__$1,(5),inst_23028);
} else {
if((state_val_23059 === (5))){
var inst_23027 = (state_23058[(8)]);
var inst_23032 = (state_23058[(9)]);
var inst_23031 = (state_23058[(10)]);
var inst_23030 = (state_23058[(2)]);
var inst_23031__$1 = cljs.core._conj.call(null,inst_23027,inst_23030);
var inst_23032__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_23031__$1);
var state_23058__$1 = (function (){var statearr_23064 = state_23058;
(statearr_23064[(9)] = inst_23032__$1);

(statearr_23064[(10)] = inst_23031__$1);

return statearr_23064;
})();
if(cljs.core.truth_(inst_23032__$1)){
var statearr_23065_23141 = state_23058__$1;
(statearr_23065_23141[(1)] = (6));

} else {
var statearr_23066_23142 = state_23058__$1;
(statearr_23066_23142[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (6))){
var inst_23031 = (state_23058[(10)]);
var inst_23034 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_23035 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_23036 = cljs.core.cons.call(null,cljs.core._EQ_,inst_23031);
var inst_23037 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_23035,inst_23036,null];
var inst_23038 = cljs.core.PersistentHashMap.fromArrays(inst_23034,inst_23037);
var inst_23039 = cljs.test.do_report.call(null,inst_23038);
var state_23058__$1 = state_23058;
var statearr_23067_23143 = state_23058__$1;
(statearr_23067_23143[(2)] = inst_23039);

(statearr_23067_23143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (7))){
var inst_23031 = (state_23058[(10)]);
var inst_23041 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_23042 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_23043 = cljs.core.List.EMPTY;
var inst_23044 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_23045 = cljs.core.cons.call(null,inst_23044,inst_23031);
var inst_23046 = cljs.core._conj.call(null,inst_23043,inst_23045);
var inst_23047 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_23048 = cljs.core._conj.call(null,inst_23046,inst_23047);
var inst_23049 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_23042,inst_23048,null];
var inst_23050 = cljs.core.PersistentHashMap.fromArrays(inst_23041,inst_23049);
var inst_23051 = cljs.test.do_report.call(null,inst_23050);
var state_23058__$1 = state_23058;
var statearr_23068_23144 = state_23058__$1;
(statearr_23068_23144[(2)] = inst_23051);

(statearr_23068_23144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23059 === (8))){
var inst_23032 = (state_23058[(9)]);
var inst_23053 = (state_23058[(2)]);
var state_23058__$1 = (function (){var statearr_23069 = state_23058;
(statearr_23069[(11)] = inst_23053);

return statearr_23069;
})();
var statearr_23070_23145 = state_23058__$1;
(statearr_23070_23145[(2)] = inst_23032);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23058__$1);

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
var statearr_23074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23074[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_23074[(1)] = (1));

return statearr_23074;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_23058){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_23058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e23075){if((e23075 instanceof Object)){
var ex__9301__auto__ = e23075;
var statearr_23076_23146 = state_23058;
(statearr_23076_23146[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23147 = state_23058;
state_23058 = G__23147;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_23058){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_23058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_23077 = f__9319__auto__.call(null);
(statearr_23077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_23077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test23013.prototype.apply = (function (self__,args23016){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args23016)));
});

drop_dot.core_test.t_drop_dot$core_test23013.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_23119){
var state_val_23120 = (state_23119[(1)]);
if((state_val_23120 === (1))){
var state_23119__$1 = state_23119;
var statearr_23121_23148 = state_23119__$1;
(statearr_23121_23148[(2)] = null);

(statearr_23121_23148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (2))){
var inst_23116 = (state_23119[(2)]);
var inst_23117 = done.call(null);
var state_23119__$1 = (function (){var statearr_23122 = state_23119;
(statearr_23122[(7)] = inst_23116);

return statearr_23122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23119__$1,inst_23117);
} else {
if((state_val_23120 === (3))){
var inst_23078 = (state_23119[(2)]);
var inst_23079 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_23080 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_23081 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_23080,inst_23078,null];
var inst_23082 = cljs.core.PersistentHashMap.fromArrays(inst_23079,inst_23081);
var inst_23083 = cljs.test.do_report.call(null,inst_23082);
var state_23119__$1 = state_23119;
var statearr_23123_23149 = state_23119__$1;
(statearr_23123_23149[(2)] = inst_23083);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23119,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_23087 = cljs.core.List.EMPTY;
var inst_23088 = cljs.core._conj.call(null,inst_23087,true);
var inst_23089 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_23119__$1 = (function (){var statearr_23124 = state_23119;
(statearr_23124[(8)] = inst_23088);

return statearr_23124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23119__$1,(5),inst_23089);
} else {
if((state_val_23120 === (5))){
var inst_23093 = (state_23119[(9)]);
var inst_23092 = (state_23119[(10)]);
var inst_23088 = (state_23119[(8)]);
var inst_23091 = (state_23119[(2)]);
var inst_23092__$1 = cljs.core._conj.call(null,inst_23088,inst_23091);
var inst_23093__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_23092__$1);
var state_23119__$1 = (function (){var statearr_23125 = state_23119;
(statearr_23125[(9)] = inst_23093__$1);

(statearr_23125[(10)] = inst_23092__$1);

return statearr_23125;
})();
if(cljs.core.truth_(inst_23093__$1)){
var statearr_23126_23150 = state_23119__$1;
(statearr_23126_23150[(1)] = (6));

} else {
var statearr_23127_23151 = state_23119__$1;
(statearr_23127_23151[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (6))){
var inst_23092 = (state_23119[(10)]);
var inst_23095 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_23096 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_23097 = cljs.core.cons.call(null,cljs.core._EQ_,inst_23092);
var inst_23098 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_23096,inst_23097,null];
var inst_23099 = cljs.core.PersistentHashMap.fromArrays(inst_23095,inst_23098);
var inst_23100 = cljs.test.do_report.call(null,inst_23099);
var state_23119__$1 = state_23119;
var statearr_23128_23152 = state_23119__$1;
(statearr_23128_23152[(2)] = inst_23100);

(statearr_23128_23152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (7))){
var inst_23092 = (state_23119[(10)]);
var inst_23102 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_23103 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_23104 = cljs.core.List.EMPTY;
var inst_23105 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_23106 = cljs.core.cons.call(null,inst_23105,inst_23092);
var inst_23107 = cljs.core._conj.call(null,inst_23104,inst_23106);
var inst_23108 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_23109 = cljs.core._conj.call(null,inst_23107,inst_23108);
var inst_23110 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_23103,inst_23109,null];
var inst_23111 = cljs.core.PersistentHashMap.fromArrays(inst_23102,inst_23110);
var inst_23112 = cljs.test.do_report.call(null,inst_23111);
var state_23119__$1 = state_23119;
var statearr_23129_23153 = state_23119__$1;
(statearr_23129_23153[(2)] = inst_23112);

(statearr_23129_23153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23120 === (8))){
var inst_23093 = (state_23119[(9)]);
var inst_23114 = (state_23119[(2)]);
var state_23119__$1 = (function (){var statearr_23130 = state_23119;
(statearr_23130[(11)] = inst_23114);

return statearr_23130;
})();
var statearr_23131_23154 = state_23119__$1;
(statearr_23131_23154[(2)] = inst_23093);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119__$1);

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
var statearr_23135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23135[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_23135[(1)] = (1));

return statearr_23135;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_23119){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_23119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e23136){if((e23136 instanceof Object)){
var ex__9301__auto__ = e23136;
var statearr_23137_23155 = state_23119;
(statearr_23137_23155[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23156 = state_23119;
state_23119 = G__23156;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_23119){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_23119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_23138 = f__9319__auto__.call(null);
(statearr_23138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_23138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test23013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23014","meta23014",1123120894,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test23013.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test23013.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test23013";

drop_dot.core_test.t_drop_dot$core_test23013.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test23013");
});

drop_dot.core_test.__GT_t_drop_dot$core_test23013 = (function drop_dot$core_test$__GT_t_drop_dot$core_test23013(meta23014){
return (new drop_dot.core_test.t_drop_dot$core_test23013(meta23014));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test23013(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__9520__auto___23160 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_installed_QMARK_.call(null));
var result__9521__auto___23161 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___23160);
if(cljs.core.truth_(result__9521__auto___23161)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___23160),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___23160)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23157){var t__9558__auto___23162 = e23157;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___23162,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto___23163 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__9521__auto___23164 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___23163);
if(cljs.core.truth_(result__9521__auto___23164)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___23163),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___23163)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e23158){var t__9558__auto___23165 = e23158;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___23165,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__9521__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto__);
if(cljs.core.truth_(result__9521__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9521__auto__;
}catch (e23159){var t__9558__auto__ = e23159;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env23166 = cljs.test.empty_env.call(null);
var summary23167 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23166,summary23167){
return (function (){
cljs.test.set_env_BANG_.call(null,env23166);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9624__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env23166,summary23167){
return (function (){
if((env__9624__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9624__auto__,env23166,summary23167))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)])),new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env23166,summary23167){
return (function (){
if((env__9624__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9624__auto__,env23166,summary23167))
], null));
})());
});})(env23166,summary23167))
,((function (env23166,summary23167){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env23166,summary23167))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23166,summary23167){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary23167,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary23167),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env23166,summary23167))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env23166,summary23167){
return (function (){
cljs.test.set_env_BANG_.call(null,env23166);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary23167));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary23167),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env23166,summary23167))
], null));
})());

//# sourceMappingURL=core_test.js.map