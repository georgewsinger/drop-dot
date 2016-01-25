// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core_test');
goog.require('cljs.core');
goog.require('drop_dot.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
drop_dot.core_test.async_test = (function drop_dot$core_test$async_test(){
return cljs.test.test_var.call(null,drop_dot$core_test$async_test.cljs$lang$var);
});
drop_dot.core_test.async_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Testing some core.async functionality.");

try{if(typeof drop_dot.core_test.t_drop_dot$core_test13845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test13845 = (function (meta13846){
this.meta13846 = meta13846;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test13845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13847,meta13846__$1){
var self__ = this;
var _13847__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test13845(meta13846__$1));
});

drop_dot.core_test.t_drop_dot$core_test13845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13847){
var self__ = this;
var _13847__$1 = this;
return self__.meta13846;
});

drop_dot.core_test.t_drop_dot$core_test13845.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test13845.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___13221__auto__ = self____$1;
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,___13221__auto__,self____$1){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,___13221__auto__,self____$1){
return (function (state_13895){
var state_val_13896 = (state_13895[(1)]);
if((state_val_13896 === (1))){
var state_13895__$1 = state_13895;
var statearr_13897_13995 = state_13895__$1;
(statearr_13897_13995[(2)] = null);

(statearr_13897_13995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (2))){
var inst_13892 = (state_13895[(2)]);
var inst_13893 = done.call(null);
var state_13895__$1 = (function (){var statearr_13898 = state_13895;
(statearr_13898[(7)] = inst_13892);

return statearr_13898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13895__$1,inst_13893);
} else {
if((state_val_13896 === (3))){
var inst_13849 = (state_13895[(2)]);
var inst_13850 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13851 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_13852 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_13851,inst_13849,null];
var inst_13853 = cljs.core.PersistentHashMap.fromArrays(inst_13850,inst_13852);
var inst_13854 = cljs.test.do_report.call(null,inst_13853);
var state_13895__$1 = state_13895;
var statearr_13899_13996 = state_13895__$1;
(statearr_13899_13996[(2)] = inst_13854);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13895,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_13858 = cljs.core.List.EMPTY;
var inst_13859 = cljs.core._conj.call(null,inst_13858,"val1");
var inst_13863 = cljs.core.async.chan.call(null,(1));
var inst_13864 = (function (){var c__8450__auto____$1 = inst_13863;
return ((function (c__8450__auto____$1,_,inst_13858,inst_13859,inst_13863,state_val_13896,c__8450__auto__,___13221__auto__,self____$1){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,_,inst_13858,inst_13859,inst_13863,state_val_13896,c__8450__auto__,___13221__auto__,self____$1){
return (function (state_13861){
var state_val_13862 = (state_13861[(1)]);
if((state_val_13862 === (1))){
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13861__$1,"val1");
} else {
return null;
}
});})(c__8450__auto____$1,_,inst_13858,inst_13859,inst_13863,state_val_13896,c__8450__auto__,___13221__auto__,self____$1))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,_,inst_13858,inst_13859,inst_13863,state_val_13896,c__8450__auto__,___13221__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8339__auto__ = null;
var drop_dot$core_test$state_machine__8339__auto____0 = (function (){
var statearr_13903 = [null,null,null,null,null,null,null];
(statearr_13903[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13903[(1)] = (1));

return statearr_13903;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13861){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13904){if((e13904 instanceof Object)){
var ex__8342__auto__ = e13904;
var statearr_13905_13997 = state_13861;
(statearr_13905_13997[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13998 = state_13861;
state_13861 = G__13998;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13861){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,_,inst_13858,inst_13859,inst_13863,state_val_13896,c__8450__auto__,___13221__auto__,self____$1))
})();
var state__8452__auto__ = (function (){var statearr_13906 = f__8451__auto__.call(null);
(statearr_13906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_13906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});
;})(c__8450__auto____$1,_,inst_13858,inst_13859,inst_13863,state_val_13896,c__8450__auto__,___13221__auto__,self____$1))
})();
var inst_13865 = cljs.core.async.impl.dispatch.run.call(null,inst_13864);
var state_13895__$1 = (function (){var statearr_13907 = state_13895;
(statearr_13907[(8)] = inst_13859);

(statearr_13907[(9)] = inst_13865);

return statearr_13907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13895__$1,(5),inst_13863);
} else {
if((state_val_13896 === (5))){
var inst_13868 = (state_13895[(10)]);
var inst_13859 = (state_13895[(8)]);
var inst_13869 = (state_13895[(11)]);
var inst_13867 = (state_13895[(2)]);
var inst_13868__$1 = cljs.core._conj.call(null,inst_13859,inst_13867);
var inst_13869__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_13868__$1);
var state_13895__$1 = (function (){var statearr_13908 = state_13895;
(statearr_13908[(10)] = inst_13868__$1);

(statearr_13908[(11)] = inst_13869__$1);

return statearr_13908;
})();
if(cljs.core.truth_(inst_13869__$1)){
var statearr_13909_13999 = state_13895__$1;
(statearr_13909_13999[(1)] = (6));

} else {
var statearr_13910_14000 = state_13895__$1;
(statearr_13910_14000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (6))){
var inst_13868 = (state_13895[(10)]);
var inst_13871 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13872 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_13873 = cljs.core.cons.call(null,cljs.core._EQ_,inst_13868);
var inst_13874 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_13872,inst_13873,null];
var inst_13875 = cljs.core.PersistentHashMap.fromArrays(inst_13871,inst_13874);
var inst_13876 = cljs.test.do_report.call(null,inst_13875);
var state_13895__$1 = state_13895;
var statearr_13911_14001 = state_13895__$1;
(statearr_13911_14001[(2)] = inst_13876);

(statearr_13911_14001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (7))){
var inst_13868 = (state_13895[(10)]);
var inst_13878 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13879 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_13880 = cljs.core.List.EMPTY;
var inst_13881 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_13882 = cljs.core.cons.call(null,inst_13881,inst_13868);
var inst_13883 = cljs.core._conj.call(null,inst_13880,inst_13882);
var inst_13884 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_13885 = cljs.core._conj.call(null,inst_13883,inst_13884);
var inst_13886 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_13879,inst_13885,null];
var inst_13887 = cljs.core.PersistentHashMap.fromArrays(inst_13878,inst_13886);
var inst_13888 = cljs.test.do_report.call(null,inst_13887);
var state_13895__$1 = state_13895;
var statearr_13912_14002 = state_13895__$1;
(statearr_13912_14002[(2)] = inst_13888);

(statearr_13912_14002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13896 === (8))){
var inst_13869 = (state_13895[(11)]);
var inst_13890 = (state_13895[(2)]);
var state_13895__$1 = (function (){var statearr_13913 = state_13895;
(statearr_13913[(12)] = inst_13890);

return statearr_13913;
})();
var statearr_13914_14003 = state_13895__$1;
(statearr_13914_14003[(2)] = inst_13869);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13895__$1);

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
});})(c__8450__auto__,___13221__auto__,self____$1))
;
return ((function (switch__8338__auto__,c__8450__auto__,___13221__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8339__auto__ = null;
var drop_dot$core_test$state_machine__8339__auto____0 = (function (){
var statearr_13918 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13918[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13918[(1)] = (1));

return statearr_13918;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13895){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13919){if((e13919 instanceof Object)){
var ex__8342__auto__ = e13919;
var statearr_13920_14004 = state_13895;
(statearr_13920_14004[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14005 = state_13895;
state_13895 = G__14005;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13895){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,___13221__auto__,self____$1))
})();
var state__8452__auto__ = (function (){var statearr_13921 = f__8451__auto__.call(null);
(statearr_13921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,___13221__auto__,self____$1))
);

return c__8450__auto__;
});

drop_dot.core_test.t_drop_dot$core_test13845.prototype.apply = (function (self__,args13848){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13848)));
});

drop_dot.core_test.t_drop_dot$core_test13845.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___13221__auto__ = this;
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,___13221__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,___13221__auto__){
return (function (state_13968){
var state_val_13969 = (state_13968[(1)]);
if((state_val_13969 === (1))){
var state_13968__$1 = state_13968;
var statearr_13970_14006 = state_13968__$1;
(statearr_13970_14006[(2)] = null);

(statearr_13970_14006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13969 === (2))){
var inst_13965 = (state_13968[(2)]);
var inst_13966 = done.call(null);
var state_13968__$1 = (function (){var statearr_13971 = state_13968;
(statearr_13971[(7)] = inst_13965);

return statearr_13971;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13968__$1,inst_13966);
} else {
if((state_val_13969 === (3))){
var inst_13922 = (state_13968[(2)]);
var inst_13923 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13924 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_13925 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_13924,inst_13922,null];
var inst_13926 = cljs.core.PersistentHashMap.fromArrays(inst_13923,inst_13925);
var inst_13927 = cljs.test.do_report.call(null,inst_13926);
var state_13968__$1 = state_13968;
var statearr_13972_14007 = state_13968__$1;
(statearr_13972_14007[(2)] = inst_13927);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13969 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13968,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_13931 = cljs.core.List.EMPTY;
var inst_13932 = cljs.core._conj.call(null,inst_13931,"val1");
var inst_13936 = cljs.core.async.chan.call(null,(1));
var inst_13937 = (function (){var c__8450__auto____$1 = inst_13936;
return ((function (c__8450__auto____$1,_,inst_13931,inst_13932,inst_13936,state_val_13969,c__8450__auto__,___13221__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,_,inst_13931,inst_13932,inst_13936,state_val_13969,c__8450__auto__,___13221__auto__){
return (function (state_13934){
var state_val_13935 = (state_13934[(1)]);
if((state_val_13935 === (1))){
var state_13934__$1 = state_13934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13934__$1,"val1");
} else {
return null;
}
});})(c__8450__auto____$1,_,inst_13931,inst_13932,inst_13936,state_val_13969,c__8450__auto__,___13221__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,_,inst_13931,inst_13932,inst_13936,state_val_13969,c__8450__auto__,___13221__auto__){
return (function() {
var drop_dot$core_test$state_machine__8339__auto__ = null;
var drop_dot$core_test$state_machine__8339__auto____0 = (function (){
var statearr_13976 = [null,null,null,null,null,null,null];
(statearr_13976[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13976[(1)] = (1));

return statearr_13976;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13934){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13977){if((e13977 instanceof Object)){
var ex__8342__auto__ = e13977;
var statearr_13978_14008 = state_13934;
(statearr_13978_14008[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14009 = state_13934;
state_13934 = G__14009;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13934){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,_,inst_13931,inst_13932,inst_13936,state_val_13969,c__8450__auto__,___13221__auto__))
})();
var state__8452__auto__ = (function (){var statearr_13979 = f__8451__auto__.call(null);
(statearr_13979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_13979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});
;})(c__8450__auto____$1,_,inst_13931,inst_13932,inst_13936,state_val_13969,c__8450__auto__,___13221__auto__))
})();
var inst_13938 = cljs.core.async.impl.dispatch.run.call(null,inst_13937);
var state_13968__$1 = (function (){var statearr_13980 = state_13968;
(statearr_13980[(8)] = inst_13932);

(statearr_13980[(9)] = inst_13938);

return statearr_13980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13968__$1,(5),inst_13936);
} else {
if((state_val_13969 === (5))){
var inst_13932 = (state_13968[(8)]);
var inst_13941 = (state_13968[(10)]);
var inst_13942 = (state_13968[(11)]);
var inst_13940 = (state_13968[(2)]);
var inst_13941__$1 = cljs.core._conj.call(null,inst_13932,inst_13940);
var inst_13942__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_13941__$1);
var state_13968__$1 = (function (){var statearr_13981 = state_13968;
(statearr_13981[(10)] = inst_13941__$1);

(statearr_13981[(11)] = inst_13942__$1);

return statearr_13981;
})();
if(cljs.core.truth_(inst_13942__$1)){
var statearr_13982_14010 = state_13968__$1;
(statearr_13982_14010[(1)] = (6));

} else {
var statearr_13983_14011 = state_13968__$1;
(statearr_13983_14011[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13969 === (6))){
var inst_13941 = (state_13968[(10)]);
var inst_13944 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13945 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_13946 = cljs.core.cons.call(null,cljs.core._EQ_,inst_13941);
var inst_13947 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_13945,inst_13946,null];
var inst_13948 = cljs.core.PersistentHashMap.fromArrays(inst_13944,inst_13947);
var inst_13949 = cljs.test.do_report.call(null,inst_13948);
var state_13968__$1 = state_13968;
var statearr_13984_14012 = state_13968__$1;
(statearr_13984_14012[(2)] = inst_13949);

(statearr_13984_14012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13969 === (7))){
var inst_13941 = (state_13968[(10)]);
var inst_13951 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13952 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val1");
var inst_13953 = cljs.core.List.EMPTY;
var inst_13954 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_13955 = cljs.core.cons.call(null,inst_13954,inst_13941);
var inst_13956 = cljs.core._conj.call(null,inst_13953,inst_13955);
var inst_13957 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_13958 = cljs.core._conj.call(null,inst_13956,inst_13957);
var inst_13959 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_13952,inst_13958,null];
var inst_13960 = cljs.core.PersistentHashMap.fromArrays(inst_13951,inst_13959);
var inst_13961 = cljs.test.do_report.call(null,inst_13960);
var state_13968__$1 = state_13968;
var statearr_13985_14013 = state_13968__$1;
(statearr_13985_14013[(2)] = inst_13961);

(statearr_13985_14013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13969 === (8))){
var inst_13942 = (state_13968[(11)]);
var inst_13963 = (state_13968[(2)]);
var state_13968__$1 = (function (){var statearr_13986 = state_13968;
(statearr_13986[(12)] = inst_13963);

return statearr_13986;
})();
var statearr_13987_14014 = state_13968__$1;
(statearr_13987_14014[(2)] = inst_13942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13968__$1);

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
});})(c__8450__auto__,___13221__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__,___13221__auto__){
return (function() {
var drop_dot$core_test$state_machine__8339__auto__ = null;
var drop_dot$core_test$state_machine__8339__auto____0 = (function (){
var statearr_13991 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13991[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13991[(1)] = (1));

return statearr_13991;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13968){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13992){if((e13992 instanceof Object)){
var ex__8342__auto__ = e13992;
var statearr_13993_14015 = state_13968;
(statearr_13993_14015[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14016 = state_13968;
state_13968 = G__14016;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13968){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,___13221__auto__))
})();
var state__8452__auto__ = (function (){var statearr_13994 = f__8451__auto__.call(null);
(statearr_13994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_13994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,___13221__auto__))
);

return c__8450__auto__;
});

drop_dot.core_test.t_drop_dot$core_test13845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13846","meta13846",714841682,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test13845.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test13845.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test13845";

drop_dot.core_test.t_drop_dot$core_test13845.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test13845");
});

drop_dot.core_test.__GT_t_drop_dot$core_test13845 = (function drop_dot$core_test$__GT_t_drop_dot$core_test13845(meta13846){
return (new drop_dot.core_test.t_drop_dot$core_test13845(meta13846));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test13845(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env14017 = cljs.test.empty_env.call(null);
var summary14018 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14017,summary14018){
return (function (){
cljs.test.set_env_BANG_.call(null,env14017);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__13257__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__13257__auto__,env14017,summary14018){
return (function (){
if((env__13257__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__13257__auto__,env14017,summary14018))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__13257__auto__,env14017,summary14018){
return (function (){
if((env__13257__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__13257__auto__,env14017,summary14018))
], null));
})());
});})(env14017,summary14018))
,((function (env14017,summary14018){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env14017,summary14018))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14017,summary14018){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary14018,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary14018),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env14017,summary14018))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14017,summary14018){
return (function (){
cljs.test.set_env_BANG_.call(null,env14017);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary14018));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary14018),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env14017,summary14018))
], null));
})());

//# sourceMappingURL=core_test.js.map