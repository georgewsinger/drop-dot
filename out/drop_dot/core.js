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
return (function (state_19449){
var state_val_19450 = (state_19449[(1)]);
if((state_val_19450 === (1))){
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19449__$1,(2),c,arg);
} else {
if((state_val_19450 === (2))){
var inst_19447 = (state_19449[(2)]);
var state_19449__$1 = state_19449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19449__$1,inst_19447);
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
var statearr_19454 = [null,null,null,null,null,null,null];
(statearr_19454[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_19454[(1)] = (1));

return statearr_19454;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_19449){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19455){if((e19455 instanceof Object)){
var ex__10429__auto__ = e19455;
var statearr_19456_19458 = state_19449;
(statearr_19456_19458[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19459 = state_19449;
state_19449 = G__19459;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_19449){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_19449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19457 = f__10447__auto__.call(null);
(statearr_19457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19457;
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
return (function (state_19475){
var state_val_19476 = (state_19475[(1)]);
if((state_val_19476 === (1))){
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19475__$1,(2),c,arg);
} else {
if((state_val_19476 === (2))){
var inst_19473 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19475__$1,inst_19473);
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
var statearr_19480 = [null,null,null,null,null,null,null];
(statearr_19480[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_19480[(1)] = (1));

return statearr_19480;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_19475){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19481){if((e19481 instanceof Object)){
var ex__10429__auto__ = e19481;
var statearr_19482_19484 = state_19475;
(statearr_19482_19484[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19485 = state_19475;
state_19475 = G__19485;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_19475){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_19475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19483 = f__10447__auto__.call(null);
(statearr_19483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19483;
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
return (function (state_19562){
var state_val_19563 = (state_19562[(1)]);
if((state_val_19563 === (1))){
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19562__$1,(2),input_chan);
} else {
if((state_val_19563 === (2))){
var inst_19540 = (state_19562[(2)]);
var inst_19541 = inst_19540;
var state_19562__$1 = (function (){var statearr_19564 = state_19562;
(statearr_19564[(7)] = inst_19541);

return statearr_19564;
})();
var statearr_19565_19592 = state_19562__$1;
(statearr_19565_19592[(2)] = null);

(statearr_19565_19592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (3))){
var inst_19541 = (state_19562[(7)]);
var inst_19543 = cljs.core.count.call(null,inst_19541);
var inst_19544 = cljs.core._EQ_.call(null,inst_19543,(0));
var state_19562__$1 = state_19562;
if(inst_19544){
var statearr_19566_19593 = state_19562__$1;
(statearr_19566_19593[(1)] = (5));

} else {
var statearr_19567_19594 = state_19562__$1;
(statearr_19567_19594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (4))){
var inst_19560 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19562__$1,inst_19560);
} else {
if((state_val_19563 === (5))){
var inst_19546 = cljs.core.println.call(null,"done");
var state_19562__$1 = state_19562;
var statearr_19568_19595 = state_19562__$1;
(statearr_19568_19595[(2)] = inst_19546);

(statearr_19568_19595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (6))){
var inst_19541 = (state_19562[(7)]);
var inst_19548 = cljs.core.async.chan.call(null);
var inst_19549 = cljs.core.first.call(null,inst_19541);
var inst_19550 = (function (){var v = inst_19541;
var rc = inst_19548;
var cmd = inst_19549;
return ((function (v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__){
return (function (state_19572){
var state_val_19573 = (state_19572[(1)]);
if((state_val_19573 === (1))){
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19572__$1,(2),rc,res);
} else {
if((state_val_19573 === (2))){
var inst_19570 = (state_19572[(2)]);
var state_19572__$1 = state_19572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19572__$1,inst_19570);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_19577 = [null,null,null,null,null,null,null];
(statearr_19577[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_19577[(1)] = (1));

return statearr_19577;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_19572){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19578){if((e19578 instanceof Object)){
var ex__10429__auto__ = e19578;
var statearr_19579_19596 = state_19572;
(statearr_19579_19596[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19597 = state_19572;
state_19572 = G__19597;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_19572){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_19572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19580 = f__10447__auto__.call(null);
(statearr_19580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_19541,inst_19548,inst_19549,state_val_19563,c__10446__auto__))
})();
var inst_19551 = drop_dot.core.pure_js.execAndPrint(inst_19549,inst_19550);
var state_19562__$1 = (function (){var statearr_19581 = state_19562;
(statearr_19581[(8)] = inst_19551);

return statearr_19581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19562__$1,(8),inst_19548);
} else {
if((state_val_19563 === (7))){
var inst_19558 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
var statearr_19582_19598 = state_19562__$1;
(statearr_19582_19598[(2)] = inst_19558);

(statearr_19582_19598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (8))){
var inst_19541 = (state_19562[(7)]);
var inst_19553 = (state_19562[(2)]);
var inst_19554 = cljs.core.rest.call(null,inst_19541);
var inst_19555 = cljs.core.vec.call(null,inst_19554);
var inst_19541__$1 = inst_19555;
var state_19562__$1 = (function (){var statearr_19583 = state_19562;
(statearr_19583[(7)] = inst_19541__$1);

(statearr_19583[(9)] = inst_19553);

return statearr_19583;
})();
var statearr_19584_19599 = state_19562__$1;
(statearr_19584_19599[(2)] = null);

(statearr_19584_19599[(1)] = (3));


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
var statearr_19588 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19588[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_19588[(1)] = (1));

return statearr_19588;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_19562){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19589){if((e19589 instanceof Object)){
var ex__10429__auto__ = e19589;
var statearr_19590_19600 = state_19562;
(statearr_19590_19600[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19601 = state_19562;
state_19562 = G__19601;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_19562){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_19562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19591 = f__10447__auto__.call(null);
(statearr_19591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19591;
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
return (function (state_19613){
var state_val_19614 = (state_19613[(1)]);
if((state_val_19614 === (1))){
var state_19613__$1 = state_19613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19613__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_19618 = [null,null,null,null,null,null,null];
(statearr_19618[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_19618[(1)] = (1));

return statearr_19618;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_19613){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19619){if((e19619 instanceof Object)){
var ex__10429__auto__ = e19619;
var statearr_19620_19622 = state_19613;
(statearr_19620_19622[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19623 = state_19613;
state_19613 = G__19623;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_19613){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_19613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_19621 = f__10447__auto__.call(null);
(statearr_19621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__,c))
);

return c__10446__auto__;
})());
});
drop_dot.core.dropdot_folder_exists_QMARK_ = (function drop_dot$core$dropdot_folder_exists_QMARK_(){
return drop_dot.core.pure_js.pathExists("~/Dropbox/.drop-dot");
});
drop_dot.core.dropbox_installed_QMARK_ = (function drop_dot$core$dropbox_installed_QMARK_(){
return drop_dot.core.pure_js.pathExists("~/Dropbox");
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
return (function (state_19639){
var state_val_19640 = (state_19639[(1)]);
if((state_val_19640 === (1))){
var state_19639__$1 = state_19639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19639__$1,(2),d,res__$1);
} else {
if((state_val_19640 === (2))){
var inst_19637 = (state_19639[(2)]);
var state_19639__$1 = state_19639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19639__$1,inst_19637);
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
var statearr_19644 = [null,null,null,null,null,null,null];
(statearr_19644[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_19644[(1)] = (1));

return statearr_19644;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_19639){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19645){if((e19645 instanceof Object)){
var ex__10429__auto__ = e19645;
var statearr_19646_19648 = state_19639;
(statearr_19646_19648[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19649 = state_19639;
state_19639 = G__19649;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_19639){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_19639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_19647 = f__10447__auto__.call(null);
(statearr_19647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19647;
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
return (function (state_19677){
var state_val_19678 = (state_19677[(1)]);
if((state_val_19678 === (1))){
var inst_19670 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_19677__$1 = state_19677;
if(cljs.core.truth_(inst_19670)){
var statearr_19679_19690 = state_19677__$1;
(statearr_19679_19690[(1)] = (2));

} else {
var statearr_19680_19691 = state_19677__$1;
(statearr_19680_19691[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (2))){
var state_19677__$1 = state_19677;
var statearr_19681_19692 = state_19677__$1;
(statearr_19681_19692[(2)] = line);

(statearr_19681_19692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (3))){
var inst_19673 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_19677__$1 = state_19677;
var statearr_19682_19693 = state_19677__$1;
(statearr_19682_19693[(2)] = inst_19673);

(statearr_19682_19693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19678 === (4))){
var inst_19675 = (state_19677[(2)]);
var state_19677__$1 = state_19677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19677__$1,inst_19675);
} else {
return null;
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
var statearr_19686 = [null,null,null,null,null,null,null];
(statearr_19686[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_19686[(1)] = (1));

return statearr_19686;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_19677){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19687){if((e19687 instanceof Object)){
var ex__10429__auto__ = e19687;
var statearr_19688_19694 = state_19677;
(statearr_19688_19694[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19695 = state_19677;
state_19677 = G__19695;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_19677){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_19677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19689 = f__10447__auto__.call(null);
(statearr_19689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19689;
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
return (function (state_19760){
var state_val_19761 = (state_19760[(1)]);
if((state_val_19761 === (1))){
var state_19760__$1 = state_19760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19760__$1,(2),chan_verified_path);
} else {
if((state_val_19761 === (2))){
var inst_19749 = (state_19760[(7)]);
var inst_19749__$1 = (state_19760[(2)]);
var inst_19750 = (function (){var verified_path = inst_19749__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function (state_19765){
var state_val_19766 = (state_19765[(1)]);
if((state_val_19766 === (1))){
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19765__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_19766 === (2))){
var inst_19763 = (state_19765[(2)]);
var state_19765__$1 = state_19765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19765__$1,inst_19763);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_19770 = [null,null,null,null,null,null,null];
(statearr_19770[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19770[(1)] = (1));

return statearr_19770;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19765){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19771){if((e19771 instanceof Object)){
var ex__10429__auto__ = e19771;
var statearr_19772_19800 = state_19765;
(statearr_19772_19800[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19801 = state_19765;
state_19765 = G__19801;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19765){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19773 = f__10447__auto__.call(null);
(statearr_19773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function (state_19778){
var state_val_19779 = (state_19778[(1)]);
if((state_val_19779 === (1))){
var inst_19774 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_19778__$1 = state_19778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19778__$1,(2),drop_dot.core.c,inst_19774);
} else {
if((state_val_19779 === (2))){
var inst_19776 = (state_19778[(2)]);
var state_19778__$1 = state_19778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19778__$1,inst_19776);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_19783 = [null,null,null,null,null,null,null];
(statearr_19783[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19783[(1)] = (1));

return statearr_19783;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19778){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19784){if((e19784 instanceof Object)){
var ex__10429__auto__ = e19784;
var statearr_19785_19802 = state_19778;
(statearr_19785_19802[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19803 = state_19778;
state_19778 = G__19803;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19778){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19786 = f__10447__auto__.call(null);
(statearr_19786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_19749,inst_19749__$1,state_val_19761,c__10446__auto__))
})();
var inst_19751 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_19749__$1);
var state_19760__$1 = (function (){var statearr_19787 = state_19760;
(statearr_19787[(7)] = inst_19749__$1);

(statearr_19787[(8)] = inst_19750);

return statearr_19787;
})();
if(cljs.core.truth_(inst_19751)){
var statearr_19788_19804 = state_19760__$1;
(statearr_19788_19804[(1)] = (3));

} else {
var statearr_19789_19805 = state_19760__$1;
(statearr_19789_19805[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (3))){
var inst_19749 = (state_19760[(7)]);
var state_19760__$1 = state_19760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19760__$1,(6),cljs.core.async.chan,inst_19749);
} else {
if((state_val_19761 === (4))){
var inst_19749 = (state_19760[(7)]);
var inst_19750 = (state_19760[(8)]);
var inst_19756 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_19749,inst_19750);
var state_19760__$1 = state_19760;
var statearr_19790_19806 = state_19760__$1;
(statearr_19790_19806[(2)] = inst_19756);

(statearr_19790_19806[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19761 === (5))){
var inst_19758 = (state_19760[(2)]);
var state_19760__$1 = (function (){var statearr_19791 = state_19760;
(statearr_19791[(9)] = inst_19758);

return statearr_19791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19760__$1,cljs.core.async.chan);
} else {
if((state_val_19761 === (6))){
var inst_19754 = (state_19760[(2)]);
var state_19760__$1 = state_19760;
var statearr_19792_19807 = state_19760__$1;
(statearr_19792_19807[(2)] = inst_19754);

(statearr_19792_19807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_19796 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19796[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19796[(1)] = (1));

return statearr_19796;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19760){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19797){if((e19797 instanceof Object)){
var ex__10429__auto__ = e19797;
var statearr_19798_19808 = state_19760;
(statearr_19798_19808[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19809 = state_19760;
state_19760 = G__19809;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19760){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19799 = f__10447__auto__.call(null);
(statearr_19799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19799;
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
return (function (state_19844){
var state_val_19845 = (state_19844[(1)]);
if((state_val_19845 === (1))){
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19844__$1,(2),c);
} else {
if((state_val_19845 === (2))){
var inst_19835 = (state_19844[(7)]);
var inst_19835__$1 = (state_19844[(2)]);
var inst_19836 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_19835__$1);
var state_19844__$1 = (function (){var statearr_19846 = state_19844;
(statearr_19846[(7)] = inst_19835__$1);

return statearr_19846;
})();
if(cljs.core.truth_(inst_19836)){
var statearr_19847_19858 = state_19844__$1;
(statearr_19847_19858[(1)] = (3));

} else {
var statearr_19848_19859 = state_19844__$1;
(statearr_19848_19859[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (3))){
var inst_19835 = (state_19844[(7)]);
var inst_19838 = cljs.core.println.call(null,inst_19835);
var state_19844__$1 = state_19844;
var statearr_19849_19860 = state_19844__$1;
(statearr_19849_19860[(2)] = inst_19838);

(statearr_19849_19860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (4))){
var inst_19835 = (state_19844[(7)]);
var inst_19840 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_19835);
var state_19844__$1 = state_19844;
var statearr_19850_19861 = state_19844__$1;
(statearr_19850_19861[(2)] = inst_19840);

(statearr_19850_19861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19845 === (5))){
var inst_19842 = (state_19844[(2)]);
var state_19844__$1 = state_19844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19844__$1,inst_19842);
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
var statearr_19854 = [null,null,null,null,null,null,null,null];
(statearr_19854[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19854[(1)] = (1));

return statearr_19854;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19844){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19855){if((e19855 instanceof Object)){
var ex__10429__auto__ = e19855;
var statearr_19856_19862 = state_19844;
(statearr_19856_19862[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19863 = state_19844;
state_19844 = G__19863;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19844){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19857 = f__10447__auto__.call(null);
(statearr_19857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_a_chan_verified_linkee.call(null,drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_19943){
var state_val_19944 = (state_19943[(1)]);
if((state_val_19944 === (7))){
var inst_19938 = (state_19943[(2)]);
var inst_19939 = cljs.core.println.call(null,"done");
var state_19943__$1 = (function (){var statearr_19946 = state_19943;
(statearr_19946[(7)] = inst_19938);

return statearr_19946;
})();
var statearr_19947_19972 = state_19943__$1;
(statearr_19947_19972[(2)] = inst_19939);

(statearr_19947_19972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (1))){
var inst_19918 = chan_config;
var state_19943__$1 = (function (){var statearr_19948 = state_19943;
(statearr_19948[(8)] = inst_19918);

return statearr_19948;
})();
var statearr_19949_19973 = state_19943__$1;
(statearr_19949_19973[(2)] = null);

(statearr_19949_19973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (4))){
var inst_19921 = (state_19943[(9)]);
var inst_19921__$1 = (state_19943[(2)]);
var state_19943__$1 = (function (){var statearr_19950 = state_19943;
(statearr_19950[(9)] = inst_19921__$1);

return statearr_19950;
})();
if(cljs.core.truth_(inst_19921__$1)){
var statearr_19951_19974 = state_19943__$1;
(statearr_19951_19974[(1)] = (5));

} else {
var statearr_19952_19975 = state_19943__$1;
(statearr_19952_19975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (13))){
var inst_19918 = (state_19943[(8)]);
var inst_19934 = (state_19943[(2)]);
var tmp19945 = inst_19918;
var inst_19918__$1 = tmp19945;
var state_19943__$1 = (function (){var statearr_19953 = state_19943;
(statearr_19953[(8)] = inst_19918__$1);

(statearr_19953[(10)] = inst_19934);

return statearr_19953;
})();
var statearr_19954_19976 = state_19943__$1;
(statearr_19954_19976[(2)] = null);

(statearr_19954_19976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (6))){
var state_19943__$1 = state_19943;
var statearr_19955_19977 = state_19943__$1;
(statearr_19955_19977[(2)] = null);

(statearr_19955_19977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (3))){
var inst_19941 = (state_19943[(2)]);
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19943__$1,inst_19941);
} else {
if((state_val_19944 === (12))){
var state_19943__$1 = state_19943;
var statearr_19956_19978 = state_19943__$1;
(statearr_19956_19978[(2)] = null);

(statearr_19956_19978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (2))){
var inst_19918 = (state_19943[(8)]);
var state_19943__$1 = state_19943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19943__$1,(4),inst_19918);
} else {
if((state_val_19944 === (11))){
var inst_19921 = (state_19943[(9)]);
var inst_19931 = drop_dot.core.link_line.call(null,inst_19921);
var state_19943__$1 = state_19943;
var statearr_19957_19979 = state_19943__$1;
(statearr_19957_19979[(2)] = inst_19931);

(statearr_19957_19979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (9))){
var state_19943__$1 = state_19943;
var statearr_19958_19980 = state_19943__$1;
(statearr_19958_19980[(2)] = null);

(statearr_19958_19980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (5))){
var inst_19923 = cljs.core._EQ_.call(null,cmd,"drop");
var state_19943__$1 = state_19943;
if(inst_19923){
var statearr_19959_19981 = state_19943__$1;
(statearr_19959_19981[(1)] = (8));

} else {
var statearr_19960_19982 = state_19943__$1;
(statearr_19960_19982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (10))){
var inst_19928 = (state_19943[(2)]);
var inst_19929 = cljs.core._EQ_.call(null,cmd,"link");
var state_19943__$1 = (function (){var statearr_19961 = state_19943;
(statearr_19961[(11)] = inst_19928);

return statearr_19961;
})();
if(inst_19929){
var statearr_19962_19983 = state_19943__$1;
(statearr_19962_19983[(1)] = (11));

} else {
var statearr_19963_19984 = state_19943__$1;
(statearr_19963_19984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19944 === (8))){
var inst_19921 = (state_19943[(9)]);
var inst_19925 = drop_dot.core.drop_line.call(null,inst_19921);
var state_19943__$1 = state_19943;
var statearr_19964_19985 = state_19943__$1;
(statearr_19964_19985[(2)] = inst_19925);

(statearr_19964_19985[(1)] = (10));


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
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0 = (function (){
var statearr_19968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19968[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_19968[(1)] = (1));

return statearr_19968;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_19943){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19969){if((e19969 instanceof Object)){
var ex__10429__auto__ = e19969;
var statearr_19970_19986 = state_19943;
(statearr_19970_19986[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19987 = state_19943;
state_19943 = G__19987;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_19943){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_19943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19971 = f__10447__auto__.call(null);
(statearr_19971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___20084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___20084,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___20084,c){
return (function (state_20048){
var state_val_20049 = (state_20048[(1)]);
if((state_val_20049 === (1))){
var inst_20037 = (state_20048[(7)]);
var inst_20036 = (state_20048[(8)]);
var inst_20038 = (state_20048[(9)]);
var inst_20036__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_20037__$1 = cljs.core.async.chan.call(null,(1));
var inst_20038__$1 = (function (){var res = inst_20036__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_20037__$1;
return ((function (res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c){
return (function (state_20053){
var state_val_20054 = (state_20053[(1)]);
if((state_val_20054 === (1))){
var state_20053__$1 = state_20053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20053__$1,(2),wcc,res__$1);
} else {
if((state_val_20054 === (2))){
var inst_20051 = (state_20053[(2)]);
var state_20053__$1 = state_20053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20053__$1,inst_20051);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_20058 = [null,null,null,null,null,null,null];
(statearr_20058[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_20058[(1)] = (1));

return statearr_20058;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_20053){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_20053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e20059){if((e20059 instanceof Object)){
var ex__10429__auto__ = e20059;
var statearr_20060_20085 = state_20053;
(statearr_20060_20085[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20086 = state_20053;
state_20053 = G__20086;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_20053){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_20053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c))
})();
var state__10448__auto__ = (function (){var statearr_20061 = f__10447__auto__.call(null);
(statearr_20061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_20061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_20037,inst_20036,inst_20038,inst_20036__$1,inst_20037__$1,state_val_20049,c__10446__auto___20084,c))
})();
var inst_20039 = inst_20036__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_20038__$1);
var state_20048__$1 = (function (){var statearr_20062 = state_20048;
(statearr_20062[(7)] = inst_20037__$1);

(statearr_20062[(10)] = inst_20039);

(statearr_20062[(8)] = inst_20036__$1);

(statearr_20062[(9)] = inst_20038__$1);

return statearr_20062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20048__$1,(2),inst_20037__$1);
} else {
if((state_val_20049 === (2))){
var inst_20037 = (state_20048[(7)]);
var inst_20039 = (state_20048[(10)]);
var inst_20036 = (state_20048[(8)]);
var inst_20038 = (state_20048[(9)]);
var inst_20041 = (state_20048[(2)]);
var inst_20042 = [cljs.core.str(inst_20041)].join('');
var inst_20043 = parseInt(inst_20042);
var inst_20044 = (function (){var res = inst_20036;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_20037;
var wcc_jammer = inst_20038;
var get_wc = inst_20039;
var lines = inst_20043;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,state_val_20049,c__10446__auto___20084,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,state_val_20049,c__10446__auto___20084,c))
})();
var inst_20045 = (function (){var res = inst_20036;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_20037;
var wcc_jammer = inst_20038;
var get_wc = inst_20039;
var lines = inst_20043;
var close_if_done = inst_20044;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c){
return (function (state_20067){
var state_val_20068 = (state_20067[(1)]);
if((state_val_20068 === (1))){
var state_20067__$1 = state_20067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20067__$1,(2),c,res__$1);
} else {
if((state_val_20068 === (2))){
var inst_20064 = (state_20067[(2)]);
var inst_20065 = close_if_done.call(null);
var state_20067__$1 = (function (){var statearr_20069 = state_20067;
(statearr_20069[(7)] = inst_20064);

return statearr_20069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20067__$1,inst_20065);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_20073 = [null,null,null,null,null,null,null,null];
(statearr_20073[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_20073[(1)] = (1));

return statearr_20073;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_20067){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_20067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e20074){if((e20074 instanceof Object)){
var ex__10429__auto__ = e20074;
var statearr_20075_20087 = state_20067;
(statearr_20075_20087[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20088 = state_20067;
state_20067 = G__20088;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_20067){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_20067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c))
})();
var state__10448__auto__ = (function (){var statearr_20076 = f__10447__auto__.call(null);
(statearr_20076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_20076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_20037,inst_20039,inst_20036,inst_20038,inst_20041,inst_20042,inst_20043,inst_20044,state_val_20049,c__10446__auto___20084,c))
})();
var inst_20046 = inst_20036.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_20045);
var state_20048__$1 = state_20048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20048__$1,inst_20046);
} else {
return null;
}
}
});})(c__10446__auto___20084,c))
;
return ((function (switch__10425__auto__,c__10446__auto___20084,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_20080 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20080[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_20080[(1)] = (1));

return statearr_20080;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_20048){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_20048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e20081){if((e20081 instanceof Object)){
var ex__10429__auto__ = e20081;
var statearr_20082_20089 = state_20048;
(statearr_20082_20089[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20090 = state_20048;
state_20048 = G__20090;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_20048){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_20048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___20084,c))
})();
var state__10448__auto__ = (function (){var statearr_20083 = f__10447__auto__.call(null);
(statearr_20083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___20084);

return statearr_20083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___20084,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9163__auto__ = [];
var len__9156__auto___20092 = arguments.length;
var i__9157__auto___20093 = (0);
while(true){
if((i__9157__auto___20093 < len__9156__auto___20092)){
args__9163__auto__.push((arguments[i__9157__auto___20093]));

var G__20094 = (i__9157__auto___20093 + (1));
i__9157__auto___20093 = G__20094;
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
if(cljs.core._EQ_.call(null,arg,"drop")){
cljs.core.println.call(null,"drop mode");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
return cljs.core.println.call(null,"link mode");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq20091){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20091));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map