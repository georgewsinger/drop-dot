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
if(typeof drop_dot.core_test.t_drop_dot$core_test48946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test48946 = (function (meta48947){
this.meta48947 = meta48947;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test48946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48948,meta48947__$1){
var self__ = this;
var _48948__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test48946(meta48947__$1));
});

drop_dot.core_test.t_drop_dot$core_test48946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48948){
var self__ = this;
var _48948__$1 = this;
return self__.meta48947;
});

drop_dot.core_test.t_drop_dot$core_test48946.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test48946.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_48991){
var state_val_48992 = (state_48991[(1)]);
if((state_val_48992 === (1))){
var state_48991__$1 = state_48991;
var statearr_48993_49072 = state_48991__$1;
(statearr_48993_49072[(2)] = null);

(statearr_48993_49072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (2))){
var inst_48988 = (state_48991[(2)]);
var inst_48989 = done.call(null);
var state_48991__$1 = (function (){var statearr_48994 = state_48991;
(statearr_48994[(7)] = inst_48988);

return statearr_48994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48991__$1,inst_48989);
} else {
if((state_val_48992 === (3))){
var inst_48950 = (state_48991[(2)]);
var inst_48951 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_48952 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_48953 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_48952,inst_48950,null];
var inst_48954 = cljs.core.PersistentHashMap.fromArrays(inst_48951,inst_48953);
var inst_48955 = cljs.test.do_report.call(null,inst_48954);
var state_48991__$1 = state_48991;
var statearr_48995_49073 = state_48991__$1;
(statearr_48995_49073[(2)] = inst_48955);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48991,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48959 = cljs.core.List.EMPTY;
var inst_48960 = cljs.core._conj.call(null,inst_48959,true);
var inst_48961 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_48991__$1 = (function (){var statearr_48996 = state_48991;
(statearr_48996[(8)] = inst_48960);

return statearr_48996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48991__$1,(5),inst_48961);
} else {
if((state_val_48992 === (5))){
var inst_48960 = (state_48991[(8)]);
var inst_48965 = (state_48991[(9)]);
var inst_48964 = (state_48991[(10)]);
var inst_48963 = (state_48991[(2)]);
var inst_48964__$1 = cljs.core._conj.call(null,inst_48960,inst_48963);
var inst_48965__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_48964__$1);
var state_48991__$1 = (function (){var statearr_48997 = state_48991;
(statearr_48997[(9)] = inst_48965__$1);

(statearr_48997[(10)] = inst_48964__$1);

return statearr_48997;
})();
if(cljs.core.truth_(inst_48965__$1)){
var statearr_48998_49074 = state_48991__$1;
(statearr_48998_49074[(1)] = (6));

} else {
var statearr_48999_49075 = state_48991__$1;
(statearr_48999_49075[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (6))){
var inst_48964 = (state_48991[(10)]);
var inst_48967 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_48968 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_48969 = cljs.core.cons.call(null,cljs.core._EQ_,inst_48964);
var inst_48970 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_48968,inst_48969,null];
var inst_48971 = cljs.core.PersistentHashMap.fromArrays(inst_48967,inst_48970);
var inst_48972 = cljs.test.do_report.call(null,inst_48971);
var state_48991__$1 = state_48991;
var statearr_49000_49076 = state_48991__$1;
(statearr_49000_49076[(2)] = inst_48972);

(statearr_49000_49076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (7))){
var inst_48964 = (state_48991[(10)]);
var inst_48974 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_48975 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_48976 = cljs.core.List.EMPTY;
var inst_48977 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_48978 = cljs.core.cons.call(null,inst_48977,inst_48964);
var inst_48979 = cljs.core._conj.call(null,inst_48976,inst_48978);
var inst_48980 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_48981 = cljs.core._conj.call(null,inst_48979,inst_48980);
var inst_48982 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_48975,inst_48981,null];
var inst_48983 = cljs.core.PersistentHashMap.fromArrays(inst_48974,inst_48982);
var inst_48984 = cljs.test.do_report.call(null,inst_48983);
var state_48991__$1 = state_48991;
var statearr_49001_49077 = state_48991__$1;
(statearr_49001_49077[(2)] = inst_48984);

(statearr_49001_49077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (8))){
var inst_48965 = (state_48991[(9)]);
var inst_48986 = (state_48991[(2)]);
var state_48991__$1 = (function (){var statearr_49002 = state_48991;
(statearr_49002[(11)] = inst_48986);

return statearr_49002;
})();
var statearr_49003_49078 = state_48991__$1;
(statearr_49003_49078[(2)] = inst_48965);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48991__$1);

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
var statearr_49007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49007[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49007[(1)] = (1));

return statearr_49007;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_48991){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49008){if((e49008 instanceof Object)){
var ex__9301__auto__ = e49008;
var statearr_49009_49079 = state_48991;
(statearr_49009_49079[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49080 = state_48991;
state_48991 = G__49080;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_48991){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_48991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_49010 = f__9319__auto__.call(null);
(statearr_49010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test48946.prototype.apply = (function (self__,args48949){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args48949)));
});

drop_dot.core_test.t_drop_dot$core_test48946.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_49052){
var state_val_49053 = (state_49052[(1)]);
if((state_val_49053 === (1))){
var state_49052__$1 = state_49052;
var statearr_49054_49081 = state_49052__$1;
(statearr_49054_49081[(2)] = null);

(statearr_49054_49081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (2))){
var inst_49049 = (state_49052[(2)]);
var inst_49050 = done.call(null);
var state_49052__$1 = (function (){var statearr_49055 = state_49052;
(statearr_49055[(7)] = inst_49049);

return statearr_49055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49052__$1,inst_49050);
} else {
if((state_val_49053 === (3))){
var inst_49011 = (state_49052[(2)]);
var inst_49012 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49013 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49014 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_49013,inst_49011,null];
var inst_49015 = cljs.core.PersistentHashMap.fromArrays(inst_49012,inst_49014);
var inst_49016 = cljs.test.do_report.call(null,inst_49015);
var state_49052__$1 = state_49052;
var statearr_49056_49082 = state_49052__$1;
(statearr_49056_49082[(2)] = inst_49016);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49052,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49020 = cljs.core.List.EMPTY;
var inst_49021 = cljs.core._conj.call(null,inst_49020,true);
var inst_49022 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_49052__$1 = (function (){var statearr_49057 = state_49052;
(statearr_49057[(8)] = inst_49021);

return statearr_49057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49052__$1,(5),inst_49022);
} else {
if((state_val_49053 === (5))){
var inst_49026 = (state_49052[(9)]);
var inst_49025 = (state_49052[(10)]);
var inst_49021 = (state_49052[(8)]);
var inst_49024 = (state_49052[(2)]);
var inst_49025__$1 = cljs.core._conj.call(null,inst_49021,inst_49024);
var inst_49026__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_49025__$1);
var state_49052__$1 = (function (){var statearr_49058 = state_49052;
(statearr_49058[(9)] = inst_49026__$1);

(statearr_49058[(10)] = inst_49025__$1);

return statearr_49058;
})();
if(cljs.core.truth_(inst_49026__$1)){
var statearr_49059_49083 = state_49052__$1;
(statearr_49059_49083[(1)] = (6));

} else {
var statearr_49060_49084 = state_49052__$1;
(statearr_49060_49084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (6))){
var inst_49025 = (state_49052[(10)]);
var inst_49028 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49029 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49030 = cljs.core.cons.call(null,cljs.core._EQ_,inst_49025);
var inst_49031 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_49029,inst_49030,null];
var inst_49032 = cljs.core.PersistentHashMap.fromArrays(inst_49028,inst_49031);
var inst_49033 = cljs.test.do_report.call(null,inst_49032);
var state_49052__$1 = state_49052;
var statearr_49061_49085 = state_49052__$1;
(statearr_49061_49085[(2)] = inst_49033);

(statearr_49061_49085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (7))){
var inst_49025 = (state_49052[(10)]);
var inst_49035 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_49036 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_49037 = cljs.core.List.EMPTY;
var inst_49038 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_49039 = cljs.core.cons.call(null,inst_49038,inst_49025);
var inst_49040 = cljs.core._conj.call(null,inst_49037,inst_49039);
var inst_49041 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_49042 = cljs.core._conj.call(null,inst_49040,inst_49041);
var inst_49043 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_49036,inst_49042,null];
var inst_49044 = cljs.core.PersistentHashMap.fromArrays(inst_49035,inst_49043);
var inst_49045 = cljs.test.do_report.call(null,inst_49044);
var state_49052__$1 = state_49052;
var statearr_49062_49086 = state_49052__$1;
(statearr_49062_49086[(2)] = inst_49045);

(statearr_49062_49086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (8))){
var inst_49026 = (state_49052[(9)]);
var inst_49047 = (state_49052[(2)]);
var state_49052__$1 = (function (){var statearr_49063 = state_49052;
(statearr_49063[(11)] = inst_49047);

return statearr_49063;
})();
var statearr_49064_49087 = state_49052__$1;
(statearr_49064_49087[(2)] = inst_49026);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49052__$1);

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
var statearr_49068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49068[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_49068[(1)] = (1));

return statearr_49068;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_49052){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_49052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e49069){if((e49069 instanceof Object)){
var ex__9301__auto__ = e49069;
var statearr_49070_49088 = state_49052;
(statearr_49070_49088[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49089 = state_49052;
state_49052 = G__49089;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_49052){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_49052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_49071 = f__9319__auto__.call(null);
(statearr_49071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_49071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test48946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta48947","meta48947",-1451194965,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test48946.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test48946.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test48946";

drop_dot.core_test.t_drop_dot$core_test48946.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test48946");
});

drop_dot.core_test.__GT_t_drop_dot$core_test48946 = (function drop_dot$core_test$__GT_t_drop_dot$core_test48946(meta48947){
return (new drop_dot.core_test.t_drop_dot$core_test48946(meta48947));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test48946(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__9520__auto___49093 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_installed_QMARK_.call(null));
var result__9521__auto___49094 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___49093);
if(cljs.core.truth_(result__9521__auto___49094)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___49093),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___49093)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e49090){var t__9558__auto___49095 = e49090;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-installed?","core/dropbox-installed?",1472655823,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___49095,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto___49096 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__9521__auto___49097 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___49096);
if(cljs.core.truth_(result__9521__auto___49097)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___49096),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___49096)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e49091){var t__9558__auto___49098 = e49091;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___49098,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__9521__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto__);
if(cljs.core.truth_(result__9521__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9521__auto__;
}catch (e49092){var t__9558__auto__ = e49092;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env49099 = cljs.test.empty_env.call(null);
var summary49100 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env49099,summary49100){
return (function (){
cljs.test.set_env_BANG_.call(null,env49099);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9624__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env49099,summary49100){
return (function (){
if((env__9624__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9624__auto__,env49099,summary49100))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)])),new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env49099,summary49100){
return (function (){
if((env__9624__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9624__auto__,env49099,summary49100))
], null));
})());
});})(env49099,summary49100))
,((function (env49099,summary49100){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env49099,summary49100))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env49099,summary49100){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary49100,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary49100),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env49099,summary49100))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env49099,summary49100){
return (function (){
cljs.test.set_env_BANG_.call(null,env49099);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary49100));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary49100),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env49099,summary49100))
], null));
})());

//# sourceMappingURL=core_test.js.map