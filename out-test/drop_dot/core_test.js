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

try{if(typeof drop_dot.core_test.t_drop_dot$core_test13641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
drop_dot.core_test.t_drop_dot$core_test13641 = (function (meta13642){
this.meta13642 = meta13642;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
drop_dot.core_test.t_drop_dot$core_test13641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13643,meta13642__$1){
var self__ = this;
var _13643__$1 = this;
return (new drop_dot.core_test.t_drop_dot$core_test13641(meta13642__$1));
});

drop_dot.core_test.t_drop_dot$core_test13641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13643){
var self__ = this;
var _13643__$1 = this;
return self__.meta13642;
});

drop_dot.core_test.t_drop_dot$core_test13641.prototype.cljs$test$IAsyncTest$ = true;

drop_dot.core_test.t_drop_dot$core_test13641.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___13221__auto__ = self____$1;
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,___13221__auto__,self____$1){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,___13221__auto__,self____$1){
return (function (state_13691){
var state_val_13692 = (state_13691[(1)]);
if((state_val_13692 === (1))){
var state_13691__$1 = state_13691;
var statearr_13693_13791 = state_13691__$1;
(statearr_13693_13791[(2)] = null);

(statearr_13693_13791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (2))){
var inst_13688 = (state_13691[(2)]);
var inst_13689 = done.call(null);
var state_13691__$1 = (function (){var statearr_13694 = state_13691;
(statearr_13694[(7)] = inst_13688);

return statearr_13694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13691__$1,inst_13689);
} else {
if((state_val_13692 === (3))){
var inst_13645 = (state_13691[(2)]);
var inst_13646 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13647 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val2");
var inst_13648 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_13647,inst_13645,null];
var inst_13649 = cljs.core.PersistentHashMap.fromArrays(inst_13646,inst_13648);
var inst_13650 = cljs.test.do_report.call(null,inst_13649);
var state_13691__$1 = state_13691;
var statearr_13695_13792 = state_13691__$1;
(statearr_13695_13792[(2)] = inst_13650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13691__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13691,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_13654 = cljs.core.List.EMPTY;
var inst_13655 = cljs.core._conj.call(null,inst_13654,"val2");
var inst_13659 = cljs.core.async.chan.call(null,(1));
var inst_13660 = (function (){var c__8450__auto____$1 = inst_13659;
return ((function (c__8450__auto____$1,_,inst_13654,inst_13655,inst_13659,state_val_13692,c__8450__auto__,___13221__auto__,self____$1){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,_,inst_13654,inst_13655,inst_13659,state_val_13692,c__8450__auto__,___13221__auto__,self____$1){
return (function (state_13657){
var state_val_13658 = (state_13657[(1)]);
if((state_val_13658 === (1))){
var state_13657__$1 = state_13657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13657__$1,"val1");
} else {
return null;
}
});})(c__8450__auto____$1,_,inst_13654,inst_13655,inst_13659,state_val_13692,c__8450__auto__,___13221__auto__,self____$1))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,_,inst_13654,inst_13655,inst_13659,state_val_13692,c__8450__auto__,___13221__auto__,self____$1){
return (function() {
var drop_dot$core_test$state_machine__8339__auto__ = null;
var drop_dot$core_test$state_machine__8339__auto____0 = (function (){
var statearr_13699 = [null,null,null,null,null,null,null];
(statearr_13699[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13699[(1)] = (1));

return statearr_13699;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13657){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13700){if((e13700 instanceof Object)){
var ex__8342__auto__ = e13700;
var statearr_13701_13793 = state_13657;
(statearr_13701_13793[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13794 = state_13657;
state_13657 = G__13794;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13657){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,_,inst_13654,inst_13655,inst_13659,state_val_13692,c__8450__auto__,___13221__auto__,self____$1))
})();
var state__8452__auto__ = (function (){var statearr_13702 = f__8451__auto__.call(null);
(statearr_13702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_13702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});
;})(c__8450__auto____$1,_,inst_13654,inst_13655,inst_13659,state_val_13692,c__8450__auto__,___13221__auto__,self____$1))
})();
var inst_13661 = cljs.core.async.impl.dispatch.run.call(null,inst_13660);
var state_13691__$1 = (function (){var statearr_13703 = state_13691;
(statearr_13703[(8)] = inst_13655);

(statearr_13703[(9)] = inst_13661);

return statearr_13703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13691__$1,(5),inst_13659);
} else {
if((state_val_13692 === (5))){
var inst_13655 = (state_13691[(8)]);
var inst_13665 = (state_13691[(10)]);
var inst_13664 = (state_13691[(11)]);
var inst_13663 = (state_13691[(2)]);
var inst_13664__$1 = cljs.core._conj.call(null,inst_13655,inst_13663);
var inst_13665__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_13664__$1);
var state_13691__$1 = (function (){var statearr_13704 = state_13691;
(statearr_13704[(10)] = inst_13665__$1);

(statearr_13704[(11)] = inst_13664__$1);

return statearr_13704;
})();
if(cljs.core.truth_(inst_13665__$1)){
var statearr_13705_13795 = state_13691__$1;
(statearr_13705_13795[(1)] = (6));

} else {
var statearr_13706_13796 = state_13691__$1;
(statearr_13706_13796[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (6))){
var inst_13664 = (state_13691[(11)]);
var inst_13667 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13668 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val2");
var inst_13669 = cljs.core.cons.call(null,cljs.core._EQ_,inst_13664);
var inst_13670 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_13668,inst_13669,null];
var inst_13671 = cljs.core.PersistentHashMap.fromArrays(inst_13667,inst_13670);
var inst_13672 = cljs.test.do_report.call(null,inst_13671);
var state_13691__$1 = state_13691;
var statearr_13707_13797 = state_13691__$1;
(statearr_13707_13797[(2)] = inst_13672);

(statearr_13707_13797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (7))){
var inst_13664 = (state_13691[(11)]);
var inst_13674 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13675 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val2");
var inst_13676 = cljs.core.List.EMPTY;
var inst_13677 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_13678 = cljs.core.cons.call(null,inst_13677,inst_13664);
var inst_13679 = cljs.core._conj.call(null,inst_13676,inst_13678);
var inst_13680 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_13681 = cljs.core._conj.call(null,inst_13679,inst_13680);
var inst_13682 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_13675,inst_13681,null];
var inst_13683 = cljs.core.PersistentHashMap.fromArrays(inst_13674,inst_13682);
var inst_13684 = cljs.test.do_report.call(null,inst_13683);
var state_13691__$1 = state_13691;
var statearr_13708_13798 = state_13691__$1;
(statearr_13708_13798[(2)] = inst_13684);

(statearr_13708_13798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13692 === (8))){
var inst_13665 = (state_13691[(10)]);
var inst_13686 = (state_13691[(2)]);
var state_13691__$1 = (function (){var statearr_13709 = state_13691;
(statearr_13709[(12)] = inst_13686);

return statearr_13709;
})();
var statearr_13710_13799 = state_13691__$1;
(statearr_13710_13799[(2)] = inst_13665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13691__$1);

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
var statearr_13714 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13714[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13714[(1)] = (1));

return statearr_13714;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13691){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13715){if((e13715 instanceof Object)){
var ex__8342__auto__ = e13715;
var statearr_13716_13800 = state_13691;
(statearr_13716_13800[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13801 = state_13691;
state_13691 = G__13801;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13691){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,___13221__auto__,self____$1))
})();
var state__8452__auto__ = (function (){var statearr_13717 = f__8451__auto__.call(null);
(statearr_13717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_13717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,___13221__auto__,self____$1))
);

return c__8450__auto__;
});

drop_dot.core_test.t_drop_dot$core_test13641.prototype.apply = (function (self__,args13644){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args13644)));
});

drop_dot.core_test.t_drop_dot$core_test13641.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___13221__auto__ = this;
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,___13221__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,___13221__auto__){
return (function (state_13764){
var state_val_13765 = (state_13764[(1)]);
if((state_val_13765 === (1))){
var state_13764__$1 = state_13764;
var statearr_13766_13802 = state_13764__$1;
(statearr_13766_13802[(2)] = null);

(statearr_13766_13802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (2))){
var inst_13761 = (state_13764[(2)]);
var inst_13762 = done.call(null);
var state_13764__$1 = (function (){var statearr_13767 = state_13764;
(statearr_13767[(7)] = inst_13761);

return statearr_13767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13764__$1,inst_13762);
} else {
if((state_val_13765 === (3))){
var inst_13718 = (state_13764[(2)]);
var inst_13719 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13720 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val2");
var inst_13721 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_13720,inst_13718,null];
var inst_13722 = cljs.core.PersistentHashMap.fromArrays(inst_13719,inst_13721);
var inst_13723 = cljs.test.do_report.call(null,inst_13722);
var state_13764__$1 = state_13764;
var statearr_13768_13803 = state_13764__$1;
(statearr_13768_13803[(2)] = inst_13723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13764__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13764,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_13727 = cljs.core.List.EMPTY;
var inst_13728 = cljs.core._conj.call(null,inst_13727,"val2");
var inst_13732 = cljs.core.async.chan.call(null,(1));
var inst_13733 = (function (){var c__8450__auto____$1 = inst_13732;
return ((function (c__8450__auto____$1,_,inst_13727,inst_13728,inst_13732,state_val_13765,c__8450__auto__,___13221__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,_,inst_13727,inst_13728,inst_13732,state_val_13765,c__8450__auto__,___13221__auto__){
return (function (state_13730){
var state_val_13731 = (state_13730[(1)]);
if((state_val_13731 === (1))){
var state_13730__$1 = state_13730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13730__$1,"val1");
} else {
return null;
}
});})(c__8450__auto____$1,_,inst_13727,inst_13728,inst_13732,state_val_13765,c__8450__auto__,___13221__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,_,inst_13727,inst_13728,inst_13732,state_val_13765,c__8450__auto__,___13221__auto__){
return (function() {
var drop_dot$core_test$state_machine__8339__auto__ = null;
var drop_dot$core_test$state_machine__8339__auto____0 = (function (){
var statearr_13772 = [null,null,null,null,null,null,null];
(statearr_13772[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13772[(1)] = (1));

return statearr_13772;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13730){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13773){if((e13773 instanceof Object)){
var ex__8342__auto__ = e13773;
var statearr_13774_13804 = state_13730;
(statearr_13774_13804[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13805 = state_13730;
state_13730 = G__13805;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13730){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,_,inst_13727,inst_13728,inst_13732,state_val_13765,c__8450__auto__,___13221__auto__))
})();
var state__8452__auto__ = (function (){var statearr_13775 = f__8451__auto__.call(null);
(statearr_13775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_13775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});
;})(c__8450__auto____$1,_,inst_13727,inst_13728,inst_13732,state_val_13765,c__8450__auto__,___13221__auto__))
})();
var inst_13734 = cljs.core.async.impl.dispatch.run.call(null,inst_13733);
var state_13764__$1 = (function (){var statearr_13776 = state_13764;
(statearr_13776[(8)] = inst_13734);

(statearr_13776[(9)] = inst_13728);

return statearr_13776;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13764__$1,(5),inst_13732);
} else {
if((state_val_13765 === (5))){
var inst_13737 = (state_13764[(10)]);
var inst_13738 = (state_13764[(11)]);
var inst_13728 = (state_13764[(9)]);
var inst_13736 = (state_13764[(2)]);
var inst_13737__$1 = cljs.core._conj.call(null,inst_13728,inst_13736);
var inst_13738__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_13737__$1);
var state_13764__$1 = (function (){var statearr_13777 = state_13764;
(statearr_13777[(10)] = inst_13737__$1);

(statearr_13777[(11)] = inst_13738__$1);

return statearr_13777;
})();
if(cljs.core.truth_(inst_13738__$1)){
var statearr_13778_13806 = state_13764__$1;
(statearr_13778_13806[(1)] = (6));

} else {
var statearr_13779_13807 = state_13764__$1;
(statearr_13779_13807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (6))){
var inst_13737 = (state_13764[(10)]);
var inst_13740 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13741 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val2");
var inst_13742 = cljs.core.cons.call(null,cljs.core._EQ_,inst_13737);
var inst_13743 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_13741,inst_13742,null];
var inst_13744 = cljs.core.PersistentHashMap.fromArrays(inst_13740,inst_13743);
var inst_13745 = cljs.test.do_report.call(null,inst_13744);
var state_13764__$1 = state_13764;
var statearr_13780_13808 = state_13764__$1;
(statearr_13780_13808[(2)] = inst_13745);

(statearr_13780_13808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (7))){
var inst_13737 = (state_13764[(10)]);
var inst_13747 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_13748 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),cljs.core.list(new cljs.core.Symbol(null,"go","go",1493584872,null),"val1")),"val2");
var inst_13749 = cljs.core.List.EMPTY;
var inst_13750 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_13751 = cljs.core.cons.call(null,inst_13750,inst_13737);
var inst_13752 = cljs.core._conj.call(null,inst_13749,inst_13751);
var inst_13753 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_13754 = cljs.core._conj.call(null,inst_13752,inst_13753);
var inst_13755 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_13748,inst_13754,null];
var inst_13756 = cljs.core.PersistentHashMap.fromArrays(inst_13747,inst_13755);
var inst_13757 = cljs.test.do_report.call(null,inst_13756);
var state_13764__$1 = state_13764;
var statearr_13781_13809 = state_13764__$1;
(statearr_13781_13809[(2)] = inst_13757);

(statearr_13781_13809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13765 === (8))){
var inst_13738 = (state_13764[(11)]);
var inst_13759 = (state_13764[(2)]);
var state_13764__$1 = (function (){var statearr_13782 = state_13764;
(statearr_13782[(12)] = inst_13759);

return statearr_13782;
})();
var statearr_13783_13810 = state_13764__$1;
(statearr_13783_13810[(2)] = inst_13738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13764__$1);

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
var statearr_13787 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13787[(0)] = drop_dot$core_test$state_machine__8339__auto__);

(statearr_13787[(1)] = (1));

return statearr_13787;
});
var drop_dot$core_test$state_machine__8339__auto____1 = (function (state_13764){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_13764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e13788){if((e13788 instanceof Object)){
var ex__8342__auto__ = e13788;
var statearr_13789_13811 = state_13764;
(statearr_13789_13811[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13812 = state_13764;
state_13764 = G__13812;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core_test$state_machine__8339__auto__ = function(state_13764){
switch(arguments.length){
case 0:
return drop_dot$core_test$state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core_test$state_machine__8339__auto____1.call(this,state_13764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core_test$state_machine__8339__auto____0;
drop_dot$core_test$state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core_test$state_machine__8339__auto____1;
return drop_dot$core_test$state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,___13221__auto__))
})();
var state__8452__auto__ = (function (){var statearr_13790 = f__8451__auto__.call(null);
(statearr_13790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_13790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,___13221__auto__))
);

return c__8450__auto__;
});

drop_dot.core_test.t_drop_dot$core_test13641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13642","meta13642",89702056,null)], null);
});

drop_dot.core_test.t_drop_dot$core_test13641.cljs$lang$type = true;

drop_dot.core_test.t_drop_dot$core_test13641.cljs$lang$ctorStr = "drop-dot.core-test/t_drop_dot$core_test13641";

drop_dot.core_test.t_drop_dot$core_test13641.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"drop-dot.core-test/t_drop_dot$core_test13641");
});

drop_dot.core_test.__GT_t_drop_dot$core_test13641 = (function drop_dot$core_test$__GT_t_drop_dot$core_test13641(meta13642){
return (new drop_dot.core_test.t_drop_dot$core_test13641(meta13642));
});

}

return (new drop_dot.core_test.t_drop_dot$core_test13641(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

drop_dot.core_test.async_test.cljs$lang$var = new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]));
cljs.test.run_block.call(null,(function (){var env13813 = cljs.test.empty_env.call(null);
var summary13814 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13813,summary13814){
return (function (){
cljs.test.set_env_BANG_.call(null,env13813);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__13257__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__13257__auto__,env13813,summary13814){
return (function (){
if((env__13257__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__13257__auto__,env13813,summary13814))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return drop_dot.core_test.async_test;},new cljs.core.Symbol("drop-dot.core-test","async-test","drop-dot.core-test/async-test",32248164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Symbol(null,"async-test","async-test",1048222369,null),"/home/george/Dropbox/drop-dot/test/drop_dot/core_test.cljs",20,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(drop_dot.core_test.async_test)?drop_dot.core_test.async_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__13257__auto__,env13813,summary13814){
return (function (){
if((env__13257__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__13257__auto__,env13813,summary13814))
], null));
})());
});})(env13813,summary13814))
,((function (env13813,summary13814){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"drop-dot.core-test","drop-dot.core-test",-2070038256,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env13813,summary13814))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13813,summary13814){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary13814,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary13814),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env13813,summary13814))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env13813,summary13814){
return (function (){
cljs.test.set_env_BANG_.call(null,env13813);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary13814));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary13814),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env13813,summary13814))
], null));
})());

//# sourceMappingURL=core_test.js.map