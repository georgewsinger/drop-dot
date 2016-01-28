// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
drop_dot.core.jam_first_callback_arg_into_chan = (function drop_dot$core$jam_first_callback_arg_into_chan(c){
return (function (arg){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_372528){
var state_val_372529 = (state_372528[(1)]);
if((state_val_372529 === (1))){
var state_372528__$1 = state_372528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372528__$1,(2),c,arg);
} else {
if((state_val_372529 === (2))){
var inst_372526 = (state_372528[(2)]);
var state_372528__$1 = state_372528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372528__$1,inst_372526);
} else {
return null;
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0 = (function (){
var statearr_372533 = [null,null,null,null,null,null,null];
(statearr_372533[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_372533[(1)] = (1));

return statearr_372533;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_372528){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372534){if((e372534 instanceof Object)){
var ex__10429__auto__ = e372534;
var statearr_372535_372537 = state_372528;
(statearr_372535_372537[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372538 = state_372528;
state_372528 = G__372538;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_372528){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_372528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372536 = f__10447__auto__.call(null);
(statearr_372536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_372554){
var state_val_372555 = (state_372554[(1)]);
if((state_val_372555 === (1))){
var state_372554__$1 = state_372554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372554__$1,(2),c,arg);
} else {
if((state_val_372555 === (2))){
var inst_372552 = (state_372554[(2)]);
var state_372554__$1 = state_372554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372554__$1,inst_372552);
} else {
return null;
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0 = (function (){
var statearr_372559 = [null,null,null,null,null,null,null];
(statearr_372559[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_372559[(1)] = (1));

return statearr_372559;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_372554){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372560){if((e372560 instanceof Object)){
var ex__10429__auto__ = e372560;
var statearr_372561_372563 = state_372554;
(statearr_372561_372563[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372564 = state_372554;
state_372554 = G__372564;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_372554){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_372554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372562 = f__10447__auto__.call(null);
(statearr_372562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_372639){
var state_val_372640 = (state_372639[(1)]);
if((state_val_372640 === (1))){
var state_372639__$1 = state_372639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372639__$1,(2),input_chan);
} else {
if((state_val_372640 === (2))){
var inst_372618 = (state_372639[(2)]);
var inst_372619 = inst_372618;
var state_372639__$1 = (function (){var statearr_372641 = state_372639;
(statearr_372641[(7)] = inst_372619);

return statearr_372641;
})();
var statearr_372642_372669 = state_372639__$1;
(statearr_372642_372669[(2)] = null);

(statearr_372642_372669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372640 === (3))){
var inst_372619 = (state_372639[(7)]);
var inst_372621 = cljs.core.count.call(null,inst_372619);
var inst_372622 = cljs.core._EQ_.call(null,inst_372621,(0));
var state_372639__$1 = state_372639;
if(inst_372622){
var statearr_372643_372670 = state_372639__$1;
(statearr_372643_372670[(1)] = (5));

} else {
var statearr_372644_372671 = state_372639__$1;
(statearr_372644_372671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372640 === (4))){
var inst_372637 = (state_372639[(2)]);
var state_372639__$1 = state_372639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372639__$1,inst_372637);
} else {
if((state_val_372640 === (5))){
var state_372639__$1 = state_372639;
var statearr_372645_372672 = state_372639__$1;
(statearr_372645_372672[(2)] = null);

(statearr_372645_372672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372640 === (6))){
var inst_372619 = (state_372639[(7)]);
var inst_372625 = cljs.core.async.chan.call(null);
var inst_372626 = cljs.core.first.call(null,inst_372619);
var inst_372627 = (function (){var v = inst_372619;
var rc = inst_372625;
var cmd = inst_372626;
return ((function (v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__){
return (function (state_372649){
var state_val_372650 = (state_372649[(1)]);
if((state_val_372650 === (1))){
var state_372649__$1 = state_372649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372649__$1,(2),rc,res);
} else {
if((state_val_372650 === (2))){
var inst_372647 = (state_372649[(2)]);
var state_372649__$1 = state_372649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372649__$1,inst_372647);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_372654 = [null,null,null,null,null,null,null];
(statearr_372654[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_372654[(1)] = (1));

return statearr_372654;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_372649){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372655){if((e372655 instanceof Object)){
var ex__10429__auto__ = e372655;
var statearr_372656_372673 = state_372649;
(statearr_372656_372673[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372674 = state_372649;
state_372649 = G__372674;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_372649){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_372649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372657 = f__10447__auto__.call(null);
(statearr_372657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_372657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_372619,inst_372625,inst_372626,state_val_372640,c__10446__auto__))
})();
var inst_372628 = drop_dot.core.pure_js.execAndPrint(inst_372626,inst_372627);
var state_372639__$1 = (function (){var statearr_372658 = state_372639;
(statearr_372658[(8)] = inst_372628);

return statearr_372658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372639__$1,(8),inst_372625);
} else {
if((state_val_372640 === (7))){
var inst_372635 = (state_372639[(2)]);
var state_372639__$1 = state_372639;
var statearr_372659_372675 = state_372639__$1;
(statearr_372659_372675[(2)] = inst_372635);

(statearr_372659_372675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372640 === (8))){
var inst_372619 = (state_372639[(7)]);
var inst_372630 = (state_372639[(2)]);
var inst_372631 = cljs.core.rest.call(null,inst_372619);
var inst_372632 = cljs.core.vec.call(null,inst_372631);
var inst_372619__$1 = inst_372632;
var state_372639__$1 = (function (){var statearr_372660 = state_372639;
(statearr_372660[(9)] = inst_372630);

(statearr_372660[(7)] = inst_372619__$1);

return statearr_372660;
})();
var statearr_372661_372676 = state_372639__$1;
(statearr_372661_372676[(2)] = null);

(statearr_372661_372676[(1)] = (3));


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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_372665 = [null,null,null,null,null,null,null,null,null,null];
(statearr_372665[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_372665[(1)] = (1));

return statearr_372665;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_372639){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372666){if((e372666 instanceof Object)){
var ex__10429__auto__ = e372666;
var statearr_372667_372677 = state_372639;
(statearr_372667_372677[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372678 = state_372639;
state_372639 = G__372678;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_372639){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_372639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372668 = f__10447__auto__.call(null);
(statearr_372668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.call(null);
return drop_dot.core.chan_vec_cmd__GT_exec.call(null,(function (){var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,c){
return (function (state_372690){
var state_val_372691 = (state_372690[(1)]);
if((state_val_372691 === (1))){
var state_372690__$1 = state_372690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372690__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_372695 = [null,null,null,null,null,null,null];
(statearr_372695[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_372695[(1)] = (1));

return statearr_372695;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_372690){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372696){if((e372696 instanceof Object)){
var ex__10429__auto__ = e372696;
var statearr_372697_372699 = state_372690;
(statearr_372697_372699[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372700 = state_372690;
state_372690 = G__372700;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_372690){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_372690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_372698 = f__10447__auto__.call(null);
(statearr_372698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__,c))
);

return c__10446__auto__;
})());
});
drop_dot.core.dropdot_folder_exists_QMARK_ = (function drop_dot$core$dropdot_folder_exists_QMARK_(){
return drop_dot.core.pure_js.dirExists("~/Dropbox/.drop-dot");
});
drop_dot.core.dropbox_installed_QMARK_ = (function drop_dot$core$dropbox_installed_QMARK_(){
return drop_dot.core.pure_js.dirExists("~/Dropbox");
});
drop_dot.core.unix_OS_QMARK_ = (function drop_dot$core$unix_OS_QMARK_(){
return (cljs.core._EQ_.call(null,(cljs.nodejs.process["platform"]),"linux")) || (cljs.core._EQ_.call(null,(cljs.nodejs.process["platform"]),"darwin"));
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,res,d){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,res,d){
return (function (state_372716){
var state_val_372717 = (state_372716[(1)]);
if((state_val_372717 === (1))){
var state_372716__$1 = state_372716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372716__$1,(2),d,res__$1);
} else {
if((state_val_372717 === (2))){
var inst_372714 = (state_372716[(2)]);
var state_372716__$1 = state_372716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372716__$1,inst_372714);
} else {
return null;
}
}
});})(c__10446__auto__,res,d))
;
return ((function (switch__10425__auto__,c__10446__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0 = (function (){
var statearr_372721 = [null,null,null,null,null,null,null];
(statearr_372721[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_372721[(1)] = (1));

return statearr_372721;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_372716){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372722){if((e372722 instanceof Object)){
var ex__10429__auto__ = e372722;
var statearr_372723_372725 = state_372716;
(statearr_372723_372725[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372726 = state_372716;
state_372716 = G__372726;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_372716){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_372716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_372724 = f__10447__auto__.call(null);
(statearr_372724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__,res,d))
);

return c__10446__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_372758){
var state_val_372759 = (state_372758[(1)]);
if((state_val_372759 === (1))){
var inst_372749 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_372758__$1 = state_372758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372758__$1,(2),inst_372749);
} else {
if((state_val_372759 === (2))){
var inst_372751 = (state_372758[(2)]);
var state_372758__$1 = state_372758;
if(cljs.core.truth_(inst_372751)){
var statearr_372760_372771 = state_372758__$1;
(statearr_372760_372771[(1)] = (3));

} else {
var statearr_372761_372772 = state_372758__$1;
(statearr_372761_372772[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372759 === (3))){
var state_372758__$1 = state_372758;
var statearr_372762_372773 = state_372758__$1;
(statearr_372762_372773[(2)] = line);

(statearr_372762_372773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372759 === (4))){
var inst_372754 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_372758__$1 = state_372758;
var statearr_372763_372774 = state_372758__$1;
(statearr_372763_372774[(2)] = inst_372754);

(statearr_372763_372774[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372759 === (5))){
var inst_372756 = (state_372758[(2)]);
var state_372758__$1 = state_372758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372758__$1,inst_372756);
} else {
return null;
}
}
}
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0 = (function (){
var statearr_372767 = [null,null,null,null,null,null,null];
(statearr_372767[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_372767[(1)] = (1));

return statearr_372767;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_372758){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372768){if((e372768 instanceof Object)){
var ex__10429__auto__ = e372768;
var statearr_372769_372775 = state_372758;
(statearr_372769_372775[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372776 = state_372758;
state_372758 = G__372776;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_372758){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_372758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372770 = f__10447__auto__.call(null);
(statearr_372770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_372847){
var state_val_372848 = (state_372847[(1)]);
if((state_val_372848 === (1))){
var state_372847__$1 = state_372847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372847__$1,(2),chan_verified_path);
} else {
if((state_val_372848 === (2))){
var inst_372834 = (state_372847[(7)]);
var inst_372833 = (state_372847[(8)]);
var inst_372833__$1 = (state_372847[(2)]);
var inst_372834__$1 = cljs.core.async.chan.call(null,(1));
var inst_372835 = (function (){var verified_path = inst_372833__$1;
var rc = inst_372834__$1;
return ((function (verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function (state_372853){
var state_val_372854 = (state_372853[(1)]);
if((state_val_372854 === (1))){
var inst_372849 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_372853__$1 = state_372853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372853__$1,(2),rc,inst_372849);
} else {
if((state_val_372854 === (2))){
var inst_372851 = (state_372853[(2)]);
var state_372853__$1 = state_372853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372853__$1,inst_372851);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_372858 = [null,null,null,null,null,null,null];
(statearr_372858[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_372858[(1)] = (1));

return statearr_372858;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_372853){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372859){if((e372859 instanceof Object)){
var ex__10429__auto__ = e372859;
var statearr_372860_372887 = state_372853;
(statearr_372860_372887[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372888 = state_372853;
state_372853 = G__372888;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_372853){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_372853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372861 = f__10447__auto__.call(null);
(statearr_372861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_372861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function (state_372865){
var state_val_372866 = (state_372865[(1)]);
if((state_val_372866 === (1))){
var state_372865__$1 = state_372865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372865__$1,(2),rc,verified_path);
} else {
if((state_val_372866 === (2))){
var inst_372863 = (state_372865[(2)]);
var state_372865__$1 = state_372865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372865__$1,inst_372863);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_372870 = [null,null,null,null,null,null,null];
(statearr_372870[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_372870[(1)] = (1));

return statearr_372870;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_372865){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372871){if((e372871 instanceof Object)){
var ex__10429__auto__ = e372871;
var statearr_372872_372889 = state_372865;
(statearr_372872_372889[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372890 = state_372865;
state_372865 = G__372890;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_372865){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_372865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372873 = f__10447__auto__.call(null);
(statearr_372873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_372873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_372834,inst_372833,inst_372833__$1,inst_372834__$1,state_val_372848,c__10446__auto__))
})();
var inst_372836 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_372833__$1);
var state_372847__$1 = (function (){var statearr_372874 = state_372847;
(statearr_372874[(7)] = inst_372834__$1);

(statearr_372874[(9)] = inst_372835);

(statearr_372874[(8)] = inst_372833__$1);

return statearr_372874;
})();
if(cljs.core.truth_(inst_372836)){
var statearr_372875_372891 = state_372847__$1;
(statearr_372875_372891[(1)] = (3));

} else {
var statearr_372876_372892 = state_372847__$1;
(statearr_372876_372892[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372848 === (3))){
var inst_372834 = (state_372847[(7)]);
var inst_372833 = (state_372847[(8)]);
var state_372847__$1 = state_372847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372847__$1,(6),inst_372834,inst_372833);
} else {
if((state_val_372848 === (4))){
var inst_372835 = (state_372847[(9)]);
var inst_372833 = (state_372847[(8)]);
var inst_372841 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_372833,inst_372835);
var state_372847__$1 = state_372847;
var statearr_372877_372893 = state_372847__$1;
(statearr_372877_372893[(2)] = inst_372841);

(statearr_372877_372893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372848 === (5))){
var inst_372834 = (state_372847[(7)]);
var inst_372843 = (state_372847[(2)]);
var state_372847__$1 = (function (){var statearr_372878 = state_372847;
(statearr_372878[(10)] = inst_372843);

return statearr_372878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372847__$1,(7),inst_372834);
} else {
if((state_val_372848 === (6))){
var inst_372839 = (state_372847[(2)]);
var state_372847__$1 = state_372847;
var statearr_372879_372894 = state_372847__$1;
(statearr_372879_372894[(2)] = inst_372839);

(statearr_372879_372894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372848 === (7))){
var inst_372845 = (state_372847[(2)]);
var state_372847__$1 = state_372847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372847__$1,inst_372845);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_372883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_372883[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_372883[(1)] = (1));

return statearr_372883;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_372847){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372884){if((e372884 instanceof Object)){
var ex__10429__auto__ = e372884;
var statearr_372885_372895 = state_372847;
(statearr_372885_372895[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372896 = state_372847;
state_372847 = G__372896;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_372847){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_372847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372886 = f__10447__auto__.call(null);
(statearr_372886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_372931){
var state_val_372932 = (state_372931[(1)]);
if((state_val_372932 === (1))){
var state_372931__$1 = state_372931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372931__$1,(2),c);
} else {
if((state_val_372932 === (2))){
var inst_372922 = (state_372931[(7)]);
var inst_372922__$1 = (state_372931[(2)]);
var inst_372923 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_372922__$1);
var state_372931__$1 = (function (){var statearr_372933 = state_372931;
(statearr_372933[(7)] = inst_372922__$1);

return statearr_372933;
})();
if(cljs.core.truth_(inst_372923)){
var statearr_372934_372945 = state_372931__$1;
(statearr_372934_372945[(1)] = (3));

} else {
var statearr_372935_372946 = state_372931__$1;
(statearr_372935_372946[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372932 === (3))){
var inst_372922 = (state_372931[(7)]);
var inst_372925 = cljs.core.println.call(null,inst_372922);
var state_372931__$1 = state_372931;
var statearr_372936_372947 = state_372931__$1;
(statearr_372936_372947[(2)] = inst_372925);

(statearr_372936_372947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372932 === (4))){
var inst_372922 = (state_372931[(7)]);
var inst_372927 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_372922);
var state_372931__$1 = state_372931;
var statearr_372937_372948 = state_372931__$1;
(statearr_372937_372948[(2)] = inst_372927);

(statearr_372937_372948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372932 === (5))){
var inst_372929 = (state_372931[(2)]);
var state_372931__$1 = state_372931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372931__$1,inst_372929);
} else {
return null;
}
}
}
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_372941 = [null,null,null,null,null,null,null,null];
(statearr_372941[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_372941[(1)] = (1));

return statearr_372941;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_372931){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372942){if((e372942 instanceof Object)){
var ex__10429__auto__ = e372942;
var statearr_372943_372949 = state_372931;
(statearr_372943_372949[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372950 = state_372931;
state_372931 = G__372950;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_372931){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_372931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_372944 = f__10447__auto__.call(null);
(statearr_372944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.line__GT_chan_linkable_path = (function drop_dot$core$line__GT_chan_linkable_path(line){
var basename = drop_dot.core.pure_js.getBasename(line);
var target_path = [cljs.core.str("~/Dropbox/.drop-dot/"),cljs.core.str(basename)].join('');
var rc = cljs.core.async.chan.call(null,(1));
var cb = ((function (basename,target_path,rc){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,basename,target_path,rc){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,basename,target_path,rc){
return (function (state_372979){
var state_val_372980 = (state_372979[(1)]);
if((state_val_372980 === (1))){
var state_372979__$1 = state_372979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372979__$1,(2),rc,line);
} else {
if((state_val_372980 === (2))){
var inst_372977 = (state_372979[(2)]);
var state_372979__$1 = state_372979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372979__$1,inst_372977);
} else {
return null;
}
}
});})(c__10446__auto__,basename,target_path,rc))
;
return ((function (switch__10425__auto__,c__10446__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0 = (function (){
var statearr_372984 = [null,null,null,null,null,null,null];
(statearr_372984[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_372984[(1)] = (1));

return statearr_372984;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_372979){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372985){if((e372985 instanceof Object)){
var ex__10429__auto__ = e372985;
var statearr_372986_373001 = state_372979;
(statearr_372986_373001[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373002 = state_372979;
state_372979 = G__373002;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_372979){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_372979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_372987 = f__10447__auto__.call(null);
(statearr_372987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_372987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__,basename,target_path,rc))
);

return c__10446__auto__;
} else {
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,basename,target_path,rc){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,basename,target_path,rc){
return (function (state_372992){
var state_val_372993 = (state_372992[(1)]);
if((state_val_372993 === (1))){
var inst_372988 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_372992__$1 = state_372992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372992__$1,(2),rc,inst_372988);
} else {
if((state_val_372993 === (2))){
var inst_372990 = (state_372992[(2)]);
var state_372992__$1 = state_372992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372992__$1,inst_372990);
} else {
return null;
}
}
});})(c__10446__auto__,basename,target_path,rc))
;
return ((function (switch__10425__auto__,c__10446__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0 = (function (){
var statearr_372997 = [null,null,null,null,null,null,null];
(statearr_372997[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_372997[(1)] = (1));

return statearr_372997;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_372992){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_372992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e372998){if((e372998 instanceof Object)){
var ex__10429__auto__ = e372998;
var statearr_372999_373003 = state_372992;
(statearr_372999_373003[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373004 = state_372992;
state_372992 = G__373004;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_372992){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_372992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_373000 = f__10447__auto__.call(null);
(statearr_373000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_373000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__,basename,target_path,rc))
);

return c__10446__auto__;
}
});})(basename,target_path,rc))
;
drop_dot.core.pure_js.pathExists(target_path,cb);

return rc;
});
drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking(chan_linkable_path){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_373075){
var state_val_373076 = (state_373075[(1)]);
if((state_val_373076 === (1))){
var state_373075__$1 = state_373075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373075__$1,(2),chan_linkable_path);
} else {
if((state_val_373076 === (2))){
var inst_373061 = (state_373075[(7)]);
var inst_373062 = (state_373075[(8)]);
var inst_373061__$1 = (state_373075[(2)]);
var inst_373062__$1 = cljs.core.async.chan.call(null,(1));
var inst_373063 = (function (){var linkable_path = inst_373061__$1;
var rc = inst_373062__$1;
return ((function (linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function (state_373081){
var state_val_373082 = (state_373081[(1)]);
if((state_val_373082 === (1))){
var inst_373077 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_373081__$1 = state_373081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373081__$1,(2),rc,inst_373077);
} else {
if((state_val_373082 === (2))){
var inst_373079 = (state_373081[(2)]);
var state_373081__$1 = state_373081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373081__$1,inst_373079);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373086 = [null,null,null,null,null,null,null];
(statearr_373086[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_373086[(1)] = (1));

return statearr_373086;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_373081){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373087){if((e373087 instanceof Object)){
var ex__10429__auto__ = e373087;
var statearr_373088_373115 = state_373081;
(statearr_373088_373115[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373116 = state_373081;
state_373081 = G__373116;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_373081){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_373081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373089 = f__10447__auto__.call(null);
(statearr_373089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_373089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function (state_373093){
var state_val_373094 = (state_373093[(1)]);
if((state_val_373094 === (1))){
var state_373093__$1 = state_373093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373093__$1,(2),rc,linkable_path);
} else {
if((state_val_373094 === (2))){
var inst_373091 = (state_373093[(2)]);
var state_373093__$1 = state_373093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373093__$1,inst_373091);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373098 = [null,null,null,null,null,null,null];
(statearr_373098[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_373098[(1)] = (1));

return statearr_373098;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_373093){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373099){if((e373099 instanceof Object)){
var ex__10429__auto__ = e373099;
var statearr_373100_373117 = state_373093;
(statearr_373100_373117[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373118 = state_373093;
state_373093 = G__373118;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_373093){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_373093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373101 = f__10447__auto__.call(null);
(statearr_373101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_373101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_373061,inst_373062,inst_373061__$1,inst_373062__$1,state_val_373076,c__10446__auto__))
})();
var inst_373064 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_373061__$1);
var state_373075__$1 = (function (){var statearr_373102 = state_373075;
(statearr_373102[(7)] = inst_373061__$1);

(statearr_373102[(9)] = inst_373063);

(statearr_373102[(8)] = inst_373062__$1);

return statearr_373102;
})();
if(cljs.core.truth_(inst_373064)){
var statearr_373103_373119 = state_373075__$1;
(statearr_373103_373119[(1)] = (3));

} else {
var statearr_373104_373120 = state_373075__$1;
(statearr_373104_373120[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373076 === (3))){
var inst_373061 = (state_373075[(7)]);
var inst_373062 = (state_373075[(8)]);
var state_373075__$1 = state_373075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373075__$1,(6),inst_373062,inst_373061);
} else {
if((state_val_373076 === (4))){
var inst_373061 = (state_373075[(7)]);
var inst_373063 = (state_373075[(9)]);
var inst_373069 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_373061,inst_373063);
var state_373075__$1 = state_373075;
var statearr_373105_373121 = state_373075__$1;
(statearr_373105_373121[(2)] = inst_373069);

(statearr_373105_373121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373076 === (5))){
var inst_373062 = (state_373075[(8)]);
var inst_373071 = (state_373075[(2)]);
var state_373075__$1 = (function (){var statearr_373106 = state_373075;
(statearr_373106[(10)] = inst_373071);

return statearr_373106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373075__$1,(7),inst_373062);
} else {
if((state_val_373076 === (6))){
var inst_373067 = (state_373075[(2)]);
var state_373075__$1 = state_373075;
var statearr_373107_373122 = state_373075__$1;
(statearr_373107_373122[(2)] = inst_373067);

(statearr_373107_373122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373076 === (7))){
var inst_373073 = (state_373075[(2)]);
var state_373075__$1 = state_373075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373075__$1,inst_373073);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_373111[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_373111[(1)] = (1));

return statearr_373111;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_373075){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373112){if((e373112 instanceof Object)){
var ex__10429__auto__ = e373112;
var statearr_373113_373123 = state_373075;
(statearr_373113_373123[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373124 = state_373075;
state_373075 = G__373124;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_373075){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_373075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373114 = f__10447__auto__.call(null);
(statearr_373114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_373114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking = (function drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking(chan_linkable_path_that_wants_linking){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_373195){
var state_val_373196 = (state_373195[(1)]);
if((state_val_373196 === (1))){
var state_373195__$1 = state_373195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373195__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_373196 === (2))){
var inst_373182 = (state_373195[(7)]);
var inst_373181 = (state_373195[(8)]);
var inst_373181__$1 = (state_373195[(2)]);
var inst_373182__$1 = cljs.core.async.chan.call(null,(1));
var inst_373183 = (function (){var linkable_path = inst_373181__$1;
var rc = inst_373182__$1;
return ((function (linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function (state_373201){
var state_val_373202 = (state_373201[(1)]);
if((state_val_373202 === (1))){
var inst_373197 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_373201__$1 = state_373201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373201__$1,(2),rc,inst_373197);
} else {
if((state_val_373202 === (2))){
var inst_373199 = (state_373201[(2)]);
var state_373201__$1 = state_373201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373201__$1,inst_373199);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373206 = [null,null,null,null,null,null,null];
(statearr_373206[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_373206[(1)] = (1));

return statearr_373206;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_373201){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373207){if((e373207 instanceof Object)){
var ex__10429__auto__ = e373207;
var statearr_373208_373235 = state_373201;
(statearr_373208_373235[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373236 = state_373201;
state_373201 = G__373236;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_373201){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_373201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373209 = f__10447__auto__.call(null);
(statearr_373209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_373209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function (state_373213){
var state_val_373214 = (state_373213[(1)]);
if((state_val_373214 === (1))){
var state_373213__$1 = state_373213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373213__$1,(2),rc,linkable_path);
} else {
if((state_val_373214 === (2))){
var inst_373211 = (state_373213[(2)]);
var state_373213__$1 = state_373213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373213__$1,inst_373211);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373218 = [null,null,null,null,null,null,null];
(statearr_373218[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_373218[(1)] = (1));

return statearr_373218;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_373213){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373219){if((e373219 instanceof Object)){
var ex__10429__auto__ = e373219;
var statearr_373220_373237 = state_373213;
(statearr_373220_373237[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373238 = state_373213;
state_373213 = G__373238;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_373213){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_373213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373221 = f__10447__auto__.call(null);
(statearr_373221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_373221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_373182,inst_373181,inst_373181__$1,inst_373182__$1,state_val_373196,c__10446__auto__))
})();
var inst_373184 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_373181__$1);
var state_373195__$1 = (function (){var statearr_373222 = state_373195;
(statearr_373222[(7)] = inst_373182__$1);

(statearr_373222[(9)] = inst_373183);

(statearr_373222[(8)] = inst_373181__$1);

return statearr_373222;
})();
if(cljs.core.truth_(inst_373184)){
var statearr_373223_373239 = state_373195__$1;
(statearr_373223_373239[(1)] = (3));

} else {
var statearr_373224_373240 = state_373195__$1;
(statearr_373224_373240[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373196 === (3))){
var inst_373182 = (state_373195[(7)]);
var inst_373181 = (state_373195[(8)]);
var state_373195__$1 = state_373195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373195__$1,(6),inst_373182,inst_373181);
} else {
if((state_val_373196 === (4))){
var inst_373183 = (state_373195[(9)]);
var inst_373181 = (state_373195[(8)]);
var inst_373189 = drop_dot.core.pure_js.pathExists(inst_373181,inst_373183);
var state_373195__$1 = state_373195;
var statearr_373225_373241 = state_373195__$1;
(statearr_373225_373241[(2)] = inst_373189);

(statearr_373225_373241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373196 === (5))){
var inst_373182 = (state_373195[(7)]);
var inst_373191 = (state_373195[(2)]);
var state_373195__$1 = (function (){var statearr_373226 = state_373195;
(statearr_373226[(10)] = inst_373191);

return statearr_373226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373195__$1,(7),inst_373182);
} else {
if((state_val_373196 === (6))){
var inst_373187 = (state_373195[(2)]);
var state_373195__$1 = state_373195;
var statearr_373227_373242 = state_373195__$1;
(statearr_373227_373242[(2)] = inst_373187);

(statearr_373227_373242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373196 === (7))){
var inst_373193 = (state_373195[(2)]);
var state_373195__$1 = state_373195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373195__$1,inst_373193);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_373231[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_373231[(1)] = (1));

return statearr_373231;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_373195){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373232){if((e373232 instanceof Object)){
var ex__10429__auto__ = e373232;
var statearr_373233_373243 = state_373195;
(statearr_373233_373243[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373244 = state_373195;
state_373195 = G__373244;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_373195){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_373195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373234 = f__10447__auto__.call(null);
(statearr_373234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_373234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_373297){
var state_val_373298 = (state_373297[(1)]);
if((state_val_373298 === (1))){
var state_373297__$1 = state_373297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373297__$1,(2),c);
} else {
if((state_val_373298 === (2))){
var inst_373280 = (state_373297[(7)]);
var inst_373279 = (state_373297[(2)]);
var inst_373280__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_373279);
var inst_373281 = drop_dot.core.pure_js.getDirname(inst_373280__$1);
var inst_373282 = drop_dot.core.pure_js.getBasename(inst_373280__$1);
var inst_373283 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_373280__$1);
var state_373297__$1 = (function (){var statearr_373299 = state_373297;
(statearr_373299[(8)] = inst_373281);

(statearr_373299[(9)] = inst_373282);

(statearr_373299[(7)] = inst_373280__$1);

return statearr_373299;
})();
if(cljs.core.truth_(inst_373283)){
var statearr_373300_373311 = state_373297__$1;
(statearr_373300_373311[(1)] = (3));

} else {
var statearr_373301_373312 = state_373297__$1;
(statearr_373301_373312[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373298 === (3))){
var inst_373280 = (state_373297[(7)]);
var inst_373285 = [cljs.core.str(inst_373280)].join('');
var inst_373286 = cljs.core.println.call(null,inst_373285);
var state_373297__$1 = state_373297;
var statearr_373302_373313 = state_373297__$1;
(statearr_373302_373313[(2)] = inst_373286);

(statearr_373302_373313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373298 === (4))){
var inst_373281 = (state_373297[(8)]);
var inst_373282 = (state_373297[(9)]);
var inst_373280 = (state_373297[(7)]);
var inst_373288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_373289 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_373281)].join('');
var inst_373290 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_373282),cljs.core.str(" "),cljs.core.str(inst_373280)].join('');
var inst_373291 = [inst_373289,inst_373290];
var inst_373292 = (new cljs.core.PersistentVector(null,2,(5),inst_373288,inst_373291,null));
var inst_373293 = drop_dot.core.exec_vec_of_commands.call(null,inst_373292);
var state_373297__$1 = state_373297;
var statearr_373303_373314 = state_373297__$1;
(statearr_373303_373314[(2)] = inst_373293);

(statearr_373303_373314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373298 === (5))){
var inst_373295 = (state_373297[(2)]);
var state_373297__$1 = state_373297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373297__$1,inst_373295);
} else {
return null;
}
}
}
}
}
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_373307 = [null,null,null,null,null,null,null,null,null,null];
(statearr_373307[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__);

(statearr_373307[(1)] = (1));

return statearr_373307;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_373297){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373308){if((e373308 instanceof Object)){
var ex__10429__auto__ = e373308;
var statearr_373309_373315 = state_373297;
(statearr_373309_373315[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373316 = state_373297;
state_373297 = G__373316;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = function(state_373297){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_373297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373310 = f__10447__auto__.call(null);
(statearr_373310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_373310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_chan_path_that_needs_linking.call(null,drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line))));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_373393){
var state_val_373394 = (state_373393[(1)]);
if((state_val_373394 === (7))){
var inst_373389 = (state_373393[(2)]);
var state_373393__$1 = state_373393;
var statearr_373396_373421 = state_373393__$1;
(statearr_373396_373421[(2)] = inst_373389);

(statearr_373396_373421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (1))){
var inst_373369 = chan_config;
var state_373393__$1 = (function (){var statearr_373397 = state_373393;
(statearr_373397[(7)] = inst_373369);

return statearr_373397;
})();
var statearr_373398_373422 = state_373393__$1;
(statearr_373398_373422[(2)] = null);

(statearr_373398_373422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (4))){
var inst_373372 = (state_373393[(8)]);
var inst_373372__$1 = (state_373393[(2)]);
var state_373393__$1 = (function (){var statearr_373399 = state_373393;
(statearr_373399[(8)] = inst_373372__$1);

return statearr_373399;
})();
if(cljs.core.truth_(inst_373372__$1)){
var statearr_373400_373423 = state_373393__$1;
(statearr_373400_373423[(1)] = (5));

} else {
var statearr_373401_373424 = state_373393__$1;
(statearr_373401_373424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (13))){
var inst_373369 = (state_373393[(7)]);
var inst_373385 = (state_373393[(2)]);
var tmp373395 = inst_373369;
var inst_373369__$1 = tmp373395;
var state_373393__$1 = (function (){var statearr_373402 = state_373393;
(statearr_373402[(7)] = inst_373369__$1);

(statearr_373402[(9)] = inst_373385);

return statearr_373402;
})();
var statearr_373403_373425 = state_373393__$1;
(statearr_373403_373425[(2)] = null);

(statearr_373403_373425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (6))){
var state_373393__$1 = state_373393;
var statearr_373404_373426 = state_373393__$1;
(statearr_373404_373426[(2)] = null);

(statearr_373404_373426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (3))){
var inst_373391 = (state_373393[(2)]);
var state_373393__$1 = state_373393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373393__$1,inst_373391);
} else {
if((state_val_373394 === (12))){
var state_373393__$1 = state_373393;
var statearr_373405_373427 = state_373393__$1;
(statearr_373405_373427[(2)] = null);

(statearr_373405_373427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (2))){
var inst_373369 = (state_373393[(7)]);
var state_373393__$1 = state_373393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373393__$1,(4),inst_373369);
} else {
if((state_val_373394 === (11))){
var inst_373372 = (state_373393[(8)]);
var inst_373382 = drop_dot.core.link_line.call(null,inst_373372);
var state_373393__$1 = state_373393;
var statearr_373406_373428 = state_373393__$1;
(statearr_373406_373428[(2)] = inst_373382);

(statearr_373406_373428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (9))){
var state_373393__$1 = state_373393;
var statearr_373407_373429 = state_373393__$1;
(statearr_373407_373429[(2)] = null);

(statearr_373407_373429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (5))){
var inst_373374 = cljs.core._EQ_.call(null,cmd,"drop");
var state_373393__$1 = state_373393;
if(inst_373374){
var statearr_373408_373430 = state_373393__$1;
(statearr_373408_373430[(1)] = (8));

} else {
var statearr_373409_373431 = state_373393__$1;
(statearr_373409_373431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (10))){
var inst_373379 = (state_373393[(2)]);
var inst_373380 = cljs.core._EQ_.call(null,cmd,"link");
var state_373393__$1 = (function (){var statearr_373410 = state_373393;
(statearr_373410[(10)] = inst_373379);

return statearr_373410;
})();
if(inst_373380){
var statearr_373411_373432 = state_373393__$1;
(statearr_373411_373432[(1)] = (11));

} else {
var statearr_373412_373433 = state_373393__$1;
(statearr_373412_373433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373394 === (8))){
var inst_373372 = (state_373393[(8)]);
var inst_373376 = drop_dot.core.drop_line.call(null,inst_373372);
var state_373393__$1 = state_373393;
var statearr_373413_373434 = state_373393__$1;
(statearr_373413_373434[(2)] = inst_373376);

(statearr_373413_373434[(1)] = (10));


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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0 = (function (){
var statearr_373417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_373417[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_373417[(1)] = (1));

return statearr_373417;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_373393){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373418){if((e373418 instanceof Object)){
var ex__10429__auto__ = e373418;
var statearr_373419_373435 = state_373393;
(statearr_373419_373435[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373436 = state_373393;
state_373393 = G__373436;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_373393){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_373393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_373420 = f__10447__auto__.call(null);
(statearr_373420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_373420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___373533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___373533,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___373533,c){
return (function (state_373497){
var state_val_373498 = (state_373497[(1)]);
if((state_val_373498 === (1))){
var inst_373487 = (state_373497[(7)]);
var inst_373485 = (state_373497[(8)]);
var inst_373486 = (state_373497[(9)]);
var inst_373485__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_373486__$1 = cljs.core.async.chan.call(null,(1));
var inst_373487__$1 = (function (){var res = inst_373485__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_373486__$1;
return ((function (res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c){
return (function (state_373502){
var state_val_373503 = (state_373502[(1)]);
if((state_val_373503 === (1))){
var state_373502__$1 = state_373502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373502__$1,(2),wcc,res__$1);
} else {
if((state_val_373503 === (2))){
var inst_373500 = (state_373502[(2)]);
var state_373502__$1 = state_373502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373502__$1,inst_373500);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_373507 = [null,null,null,null,null,null,null];
(statearr_373507[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_373507[(1)] = (1));

return statearr_373507;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_373502){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373508){if((e373508 instanceof Object)){
var ex__10429__auto__ = e373508;
var statearr_373509_373534 = state_373502;
(statearr_373509_373534[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373535 = state_373502;
state_373502 = G__373535;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_373502){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_373502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c))
})();
var state__10448__auto__ = (function (){var statearr_373510 = f__10447__auto__.call(null);
(statearr_373510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_373510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_373487,inst_373485,inst_373486,inst_373485__$1,inst_373486__$1,state_val_373498,c__10446__auto___373533,c))
})();
var inst_373488 = inst_373485__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_373487__$1);
var state_373497__$1 = (function (){var statearr_373511 = state_373497;
(statearr_373511[(10)] = inst_373488);

(statearr_373511[(7)] = inst_373487__$1);

(statearr_373511[(8)] = inst_373485__$1);

(statearr_373511[(9)] = inst_373486__$1);

return statearr_373511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373497__$1,(2),inst_373486__$1);
} else {
if((state_val_373498 === (2))){
var inst_373488 = (state_373497[(10)]);
var inst_373487 = (state_373497[(7)]);
var inst_373485 = (state_373497[(8)]);
var inst_373486 = (state_373497[(9)]);
var inst_373490 = (state_373497[(2)]);
var inst_373491 = [cljs.core.str(inst_373490)].join('');
var inst_373492 = parseInt(inst_373491);
var inst_373493 = (function (){var res = inst_373485;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_373486;
var wcc_jammer = inst_373487;
var get_wc = inst_373488;
var lines = inst_373492;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,state_val_373498,c__10446__auto___373533,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,state_val_373498,c__10446__auto___373533,c))
})();
var inst_373494 = (function (){var res = inst_373485;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_373486;
var wcc_jammer = inst_373487;
var get_wc = inst_373488;
var lines = inst_373492;
var close_if_done = inst_373493;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c){
return (function (state_373516){
var state_val_373517 = (state_373516[(1)]);
if((state_val_373517 === (1))){
var state_373516__$1 = state_373516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373516__$1,(2),c,res__$1);
} else {
if((state_val_373517 === (2))){
var inst_373513 = (state_373516[(2)]);
var inst_373514 = close_if_done.call(null);
var state_373516__$1 = (function (){var statearr_373518 = state_373516;
(statearr_373518[(7)] = inst_373513);

return statearr_373518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373516__$1,inst_373514);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_373522 = [null,null,null,null,null,null,null,null];
(statearr_373522[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_373522[(1)] = (1));

return statearr_373522;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_373516){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373523){if((e373523 instanceof Object)){
var ex__10429__auto__ = e373523;
var statearr_373524_373536 = state_373516;
(statearr_373524_373536[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373537 = state_373516;
state_373516 = G__373537;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_373516){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_373516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c))
})();
var state__10448__auto__ = (function (){var statearr_373525 = f__10447__auto__.call(null);
(statearr_373525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_373525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_373488,inst_373487,inst_373485,inst_373486,inst_373490,inst_373491,inst_373492,inst_373493,state_val_373498,c__10446__auto___373533,c))
})();
var inst_373495 = inst_373485.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_373494);
var state_373497__$1 = state_373497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373497__$1,inst_373495);
} else {
return null;
}
}
});})(c__10446__auto___373533,c))
;
return ((function (switch__10425__auto__,c__10446__auto___373533,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_373529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_373529[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_373529[(1)] = (1));

return statearr_373529;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_373497){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_373497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e373530){if((e373530 instanceof Object)){
var ex__10429__auto__ = e373530;
var statearr_373531_373538 = state_373497;
(statearr_373531_373538[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373539 = state_373497;
state_373497 = G__373539;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_373497){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_373497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___373533,c))
})();
var state__10448__auto__ = (function (){var statearr_373532 = f__10447__auto__.call(null);
(statearr_373532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___373533);

return statearr_373532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___373533,c))
);


return c;
});
drop_dot.core.check_for_sys_requirements = (function drop_dot$core$check_for_sys_requirements(){
if(cljs.core.not.call(null,drop_dot.core.dropbox_installed_QMARK_.call(null))){
cljs.core.println.call(null,"Dropbox not installed.");

cljs.nodejs.process.exit();
} else {
}

if(cljs.core.not.call(null,drop_dot.core.unix_OS_QMARK_.call(null))){
cljs.core.println.call(null,"Dot-drop requires a UNIX system to run.");

cljs.nodejs.process.exit();
} else {
}

if(cljs.core.not.call(null,drop_dot.core.dropbox_installed_QMARK_.call(null))){
cljs.core.println.call(null,"Please install Dropbox in your home folder before running this program.");

return cljs.nodejs.process.exit();
} else {
return null;
}
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9163__auto__ = [];
var len__9156__auto___373541 = arguments.length;
var i__9157__auto___373542 = (0);
while(true){
if((i__9157__auto___373542 < len__9156__auto___373541)){
args__9163__auto__.push((arguments[i__9157__auto___373542]));

var G__373543 = (i__9157__auto___373542 + (1));
i__9157__auto___373542 = G__373543;
continue;
} else {
}
break;
}

var argseq__9164__auto__ = ((((0) < args__9163__auto__.length))?(new cljs.core.IndexedSeq(args__9163__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9164__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__8098__auto__ = argv.e;
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__8098__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__8098__auto__)){
return or__8098__auto__;
} else {
return "$HOME";
}
})();
drop_dot.core.check_for_sys_requirements.call(null);

if(cljs.core._EQ_.call(null,arg,"drop")){
cljs.core.println.call(null,"DROP!");

drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"drop");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
cljs.core.println.call(null,"LINK!");

return drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"link");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq373540){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq373540));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map