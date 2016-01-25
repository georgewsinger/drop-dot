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
if(typeof drop_dot.core_test.t_drop_dot$core_test21980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test21980 = (function (meta21981){
this.meta21981 = meta21981;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test21980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21982,meta21981__$1){
var self__ = this;
var _21982__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test21980(meta21981__$1));
});

drop_dot.core_test.t_drop_dot$core_test21980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21982){
var self__ = this;
var _21982__$1 = this;
return self__.meta21981;
});

drop_dot.core_test.t_drop_dot$core_test21980.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test21980.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___9588__auto__ = self____$1;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__,self____$1){
return (function (state_22025){
var state_val_22026 = (state_22025[(1)]);
if((state_val_22026 === (1))){
var state_22025__$1 = state_22025;
var statearr_22027_22106 = state_22025__$1;
(statearr_22027_22106[(2)] = null);

(statearr_22027_22106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (2))){
var inst_22022 = (state_22025[(2)]);
var inst_22023 = done.call(null);
var state_22025__$1 = (function (){var statearr_22028 = state_22025;
(statearr_22028[(7)] = inst_22022);

return statearr_22028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22025__$1,inst_22023);
} else {
if((state_val_22026 === (3))){
var inst_21984 = (state_22025[(2)]);
var inst_21985 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_21986 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_21987 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_21986,inst_21984,null];
var inst_21988 = cljs.core.PersistentHashMap.fromArrays(inst_21985,inst_21987);
var inst_21989 = cljs.test.do_report.call(null,inst_21988);
var state_22025__$1 = state_22025;
var statearr_22029_22107 = state_22025__$1;
(statearr_22029_22107[(2)] = inst_21989);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22025__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22025,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_21993 = cljs.core.List.EMPTY;
var inst_21994 = cljs.core._conj.call(null,inst_21993,true);
var inst_21995 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_22025__$1 = (function (){var statearr_22030 = state_22025;
(statearr_22030[(8)] = inst_21994);

return statearr_22030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22025__$1,(5),inst_21995);
} else {
if((state_val_22026 === (5))){
var inst_21998 = (state_22025[(9)]);
var inst_21999 = (state_22025[(10)]);
var inst_21994 = (state_22025[(8)]);
var inst_21997 = (state_22025[(2)]);
var inst_21998__$1 = cljs.core._conj.call(null,inst_21994,inst_21997);
var inst_21999__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_21998__$1);
var state_22025__$1 = (function (){var statearr_22031 = state_22025;
(statearr_22031[(9)] = inst_21998__$1);

(statearr_22031[(10)] = inst_21999__$1);

return statearr_22031;
})();
if(cljs.core.truth_(inst_21999__$1)){
var statearr_22032_22108 = state_22025__$1;
(statearr_22032_22108[(1)] = (6));

} else {
var statearr_22033_22109 = state_22025__$1;
(statearr_22033_22109[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (6))){
var inst_21998 = (state_22025[(9)]);
var inst_22001 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22002 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_22003 = cljs.core.cons.call(null,cljs.core._EQ_,inst_21998);
var inst_22004 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_22002,inst_22003,null];
var inst_22005 = cljs.core.PersistentHashMap.fromArrays(inst_22001,inst_22004);
var inst_22006 = cljs.test.do_report.call(null,inst_22005);
var state_22025__$1 = state_22025;
var statearr_22034_22110 = state_22025__$1;
(statearr_22034_22110[(2)] = inst_22006);

(statearr_22034_22110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (7))){
var inst_21998 = (state_22025[(9)]);
var inst_22008 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22009 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_22010 = cljs.core.List.EMPTY;
var inst_22011 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_22012 = cljs.core.cons.call(null,inst_22011,inst_21998);
var inst_22013 = cljs.core._conj.call(null,inst_22010,inst_22012);
var inst_22014 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_22015 = cljs.core._conj.call(null,inst_22013,inst_22014);
var inst_22016 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_22009,inst_22015,null];
var inst_22017 = cljs.core.PersistentHashMap.fromArrays(inst_22008,inst_22016);
var inst_22018 = cljs.test.do_report.call(null,inst_22017);
var state_22025__$1 = state_22025;
var statearr_22035_22111 = state_22025__$1;
(statearr_22035_22111[(2)] = inst_22018);

(statearr_22035_22111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22026 === (8))){
var inst_21999 = (state_22025[(10)]);
var inst_22020 = (state_22025[(2)]);
var state_22025__$1 = (function (){var statearr_22036 = state_22025;
(statearr_22036[(11)] = inst_22020);

return statearr_22036;
})();
var statearr_22037_22112 = state_22025__$1;
(statearr_22037_22112[(2)] = inst_21999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22025__$1);

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
var statearr_22041 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22041[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_22041[(1)] = (1));

return statearr_22041;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_22025){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22042){if((e22042 instanceof Object)){
var ex__9301__auto__ = e22042;
var statearr_22043_22113 = state_22025;
(statearr_22043_22113[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22114 = state_22025;
state_22025 = G__22114;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_22025){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_22025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_22044 = f__9319__auto__.call(null);
(statearr_22044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__,self____$1))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test21980.prototype.apply = (function (self__,args21983){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21983)));
});

drop_dot.core_test.t_drop_dot$core_test21980.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___9588__auto__ = this;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing core-tests.");

try{var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___9588__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___9588__auto__){
return (function (state_22086){
var state_val_22087 = (state_22086[(1)]);
if((state_val_22087 === (1))){
var state_22086__$1 = state_22086;
var statearr_22088_22115 = state_22086__$1;
(statearr_22088_22115[(2)] = null);

(statearr_22088_22115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (2))){
var inst_22083 = (state_22086[(2)]);
var inst_22084 = done.call(null);
var state_22086__$1 = (function (){var statearr_22089 = state_22086;
(statearr_22089[(7)] = inst_22083);

return statearr_22089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22086__$1,inst_22084);
} else {
if((state_val_22087 === (3))){
var inst_22045 = (state_22086[(2)]);
var inst_22046 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22047 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_22048 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_22047,inst_22045,null];
var inst_22049 = cljs.core.PersistentHashMap.fromArrays(inst_22046,inst_22048);
var inst_22050 = cljs.test.do_report.call(null,inst_22049);
var state_22086__$1 = state_22086;
var statearr_22090_22116 = state_22086__$1;
(statearr_22090_22116[(2)] = inst_22050);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22086__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22086,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_22054 = cljs.core.List.EMPTY;
var inst_22055 = cljs.core._conj.call(null,inst_22054,true);
var inst_22056 = drop_dot.core.chan_path_exists_QMARK_.call(null,"/home/george/Dropbox");
var state_22086__$1 = (function (){var statearr_22091 = state_22086;
(statearr_22091[(8)] = inst_22055);

return statearr_22091;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22086__$1,(5),inst_22056);
} else {
if((state_val_22087 === (5))){
var inst_22060 = (state_22086[(9)]);
var inst_22055 = (state_22086[(8)]);
var inst_22059 = (state_22086[(10)]);
var inst_22058 = (state_22086[(2)]);
var inst_22059__$1 = cljs.core._conj.call(null,inst_22055,inst_22058);
var inst_22060__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_22059__$1);
var state_22086__$1 = (function (){var statearr_22092 = state_22086;
(statearr_22092[(9)] = inst_22060__$1);

(statearr_22092[(10)] = inst_22059__$1);

return statearr_22092;
})();
if(cljs.core.truth_(inst_22060__$1)){
var statearr_22093_22117 = state_22086__$1;
(statearr_22093_22117[(1)] = (6));

} else {
var statearr_22094_22118 = state_22086__$1;
(statearr_22094_22118[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (6))){
var inst_22059 = (state_22086[(10)]);
var inst_22062 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22063 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_22064 = cljs.core.cons.call(null,cljs.core._EQ_,inst_22059);
var inst_22065 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_22063,inst_22064,null];
var inst_22066 = cljs.core.PersistentHashMap.fromArrays(inst_22062,inst_22065);
var inst_22067 = cljs.test.do_report.call(null,inst_22066);
var state_22086__$1 = state_22086;
var statearr_22095_22119 = state_22086__$1;
(statearr_22095_22119[(2)] = inst_22067);

(statearr_22095_22119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (7))){
var inst_22059 = (state_22086[(10)]);
var inst_22069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_22070 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol("core","chan-path-exists?","core/chan-path-exists?",-677452081,null),"/home/george/Dropbox")),true);
var inst_22071 = cljs.core.List.EMPTY;
var inst_22072 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_22073 = cljs.core.cons.call(null,inst_22072,inst_22059);
var inst_22074 = cljs.core._conj.call(null,inst_22071,inst_22073);
var inst_22075 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_22076 = cljs.core._conj.call(null,inst_22074,inst_22075);
var inst_22077 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_22070,inst_22076,null];
var inst_22078 = cljs.core.PersistentHashMap.fromArrays(inst_22069,inst_22077);
var inst_22079 = cljs.test.do_report.call(null,inst_22078);
var state_22086__$1 = state_22086;
var statearr_22096_22120 = state_22086__$1;
(statearr_22096_22120[(2)] = inst_22079);

(statearr_22096_22120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22087 === (8))){
var inst_22060 = (state_22086[(9)]);
var inst_22081 = (state_22086[(2)]);
var state_22086__$1 = (function (){var statearr_22097 = state_22086;
(statearr_22097[(11)] = inst_22081);

return statearr_22097;
})();
var statearr_22098_22121 = state_22086__$1;
(statearr_22098_22121[(2)] = inst_22060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22086__$1);

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
var statearr_22102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22102[(0)] = drop_dot$core_test$state_machine__9298__auto__);

(statearr_22102[(1)] = (1));

return statearr_22102;
});
var drop_dot$core_test$state_machine__9298__auto____1 = (function (state_22086){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22103){if((e22103 instanceof Object)){
var ex__9301__auto__ = e22103;
var statearr_22104_22122 = state_22086;
(statearr_22104_22122[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22123 = state_22086;
state_22086 = G__22123;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__9298__auto__ = function(state_22086){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__9298__auto____1.call(this,state_22086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__9298__auto____0;
drop_dot$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__9298__auto____1;
return drop_dot$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___9588__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22105 = f__9319__auto__.call(null);
(statearr_22105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___9588__auto__))
);

return c__9318__auto__;
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.t_drop_dot$core_test21980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta21981","meta21981",191697595,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test21980.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test21980.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test21980";

drop_dot.core_test.t_drop_dot$core_test21980.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test21980");
});

drop_dot.core_test.__GT_t_drop_dot$core_test21980 = (function drop_dot$core_test$__GT_t_drop_dot$core_test21980(meta21981){
return (new drop_dot.core_test.t_drop_dot$core_test21980(meta21981));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test21980(null));
});

drop_dot.core_test.core_tests.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)]));
drop_dot.core_test.support_functions = (function drop_dot$core_test$support_functions(){
return cljs.test.test_var.call(null,drop_dot$core_test$support_functions.cljs$lang$var);
});
drop_dot.core_test.support_functions.cljs$lang$test = (function (){
try{var values__9520__auto___22127 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropbox_exists_QMARK_.call(null));
var result__9521__auto___22128 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___22127);
if(cljs.core.truth_(result__9521__auto___22128)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-exists?","core/dropbox-exists?",1354704549,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___22127),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-exists?","core/dropbox-exists?",1354704549,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___22127)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22124){var t__9558__auto___22129 = e22124;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropbox-exists?","core/dropbox-exists?",1354704549,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___22129,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto___22130 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.unix_OS_QMARK_.call(null));
var result__9521__auto___22131 = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto___22130);
if(cljs.core.truth_(result__9521__auto___22131)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto___22130),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto___22130)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e22125){var t__9558__auto___22132 = e22125;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","unix-OS?","core/unix-OS?",1384429663,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto___22132,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__9520__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),drop_dot.core.dropdot_folder_exists_QMARK_.call(null));
var result__9521__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9520__auto__);
if(cljs.core.truth_(result__9521__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9520__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9520__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9521__auto__;
}catch (e22126){var t__9558__auto__ = e22126;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","dropdot-folder-exists?","core/dropdot-folder-exists?",-183146696,null)),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__9558__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

drop_dot.core_test.support_functions.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env22133 = cljs.test.empty_env.call(null);
var summary22134 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22133,summary22134){
return (function (){
cljs.test.set_env_BANG_.call(null,env22133);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9624__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env22133,summary22134){
return (function (){
if((env__9624__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9624__auto__,env22133,summary22134))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return drop_dot.core_test.core_tests;},new cljs.core.Symbol("drop-dot.core-test","core-tests","drop-dot.core-test/core-tests",-646020023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"core-tests","core-tests",-571720950,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.core_tests)?drop_dot.core_test.core_tests.cljs$lang$test:null)])),new cljs.core.Var(function(){return drop_dot.core_test.support_functions;},new cljs.core.Symbol("drop-dot.core-test","support-functions","drop-dot.core-test/support-functions",182588706,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"support-functions","support-functions",124821089,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",27,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.support_functions)?drop_dot.core_test.support_functions.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9624__auto__,env22133,summary22134){
return (function (){
if((env__9624__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9624__auto__,env22133,summary22134))
], null));
})());
});})(env22133,summary22134))
,((function (env22133,summary22134){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env22133,summary22134))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22133,summary22134){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary22134,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary22134),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env22133,summary22134))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env22133,summary22134){
return (function (){
cljs.test.set_env_BANG_.call(null,env22133);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary22134));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary22134),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env22133,summary22134))
], null));
})());

//# sourceMappingURL=core_test.js.map