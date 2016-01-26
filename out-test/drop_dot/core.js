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
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10504){
var state_val_10505 = (state_10504[(1)]);
if((state_val_10505 === (1))){
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10504__$1,(2),c,arg);
} else {
if((state_val_10505 === (2))){
var inst_10502 = (state_10504[(2)]);
var state_10504__$1 = state_10504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10504__$1,inst_10502);
} else {
return null;
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____0 = (function (){
var statearr_10509 = [null,null,null,null,null,null,null];
(statearr_10509[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__);

(statearr_10509[(1)] = (1));

return statearr_10509;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____1 = (function (state_10504){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10510){if((e10510 instanceof Object)){
var ex__8291__auto__ = e10510;
var statearr_10511_10513 = state_10504;
(statearr_10511_10513[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10514 = state_10504;
state_10504 = G__10514;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__ = function(state_10504){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____1.call(this,state_10504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10512 = f__8309__auto__.call(null);
(statearr_10512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10530){
var state_val_10531 = (state_10530[(1)]);
if((state_val_10531 === (1))){
var state_10530__$1 = state_10530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10530__$1,(2),c,arg);
} else {
if((state_val_10531 === (2))){
var inst_10528 = (state_10530[(2)]);
var state_10530__$1 = state_10530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10530__$1,inst_10528);
} else {
return null;
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____0 = (function (){
var statearr_10535 = [null,null,null,null,null,null,null];
(statearr_10535[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__);

(statearr_10535[(1)] = (1));

return statearr_10535;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____1 = (function (state_10530){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10536){if((e10536 instanceof Object)){
var ex__8291__auto__ = e10536;
var statearr_10537_10539 = state_10530;
(statearr_10537_10539[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10540 = state_10530;
state_10530 = G__10540;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__ = function(state_10530){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____1.call(this,state_10530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10538 = f__8309__auto__.call(null);
(statearr_10538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10617){
var state_val_10618 = (state_10617[(1)]);
if((state_val_10618 === (1))){
var state_10617__$1 = state_10617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10617__$1,(2),input_chan);
} else {
if((state_val_10618 === (2))){
var inst_10595 = (state_10617[(2)]);
var inst_10596 = inst_10595;
var state_10617__$1 = (function (){var statearr_10619 = state_10617;
(statearr_10619[(7)] = inst_10596);

return statearr_10619;
})();
var statearr_10620_10647 = state_10617__$1;
(statearr_10620_10647[(2)] = null);

(statearr_10620_10647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (3))){
var inst_10596 = (state_10617[(7)]);
var inst_10598 = cljs.core.count.call(null,inst_10596);
var inst_10599 = cljs.core._EQ_.call(null,inst_10598,(0));
var state_10617__$1 = state_10617;
if(inst_10599){
var statearr_10621_10648 = state_10617__$1;
(statearr_10621_10648[(1)] = (5));

} else {
var statearr_10622_10649 = state_10617__$1;
(statearr_10622_10649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (4))){
var inst_10615 = (state_10617[(2)]);
var state_10617__$1 = state_10617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10617__$1,inst_10615);
} else {
if((state_val_10618 === (5))){
var inst_10601 = cljs.core.println.call(null,"done");
var state_10617__$1 = state_10617;
var statearr_10623_10650 = state_10617__$1;
(statearr_10623_10650[(2)] = inst_10601);

(statearr_10623_10650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (6))){
var inst_10596 = (state_10617[(7)]);
var inst_10603 = cljs.core.async.chan.call(null);
var inst_10604 = cljs.core.first.call(null,inst_10596);
var inst_10605 = (function (){var v = inst_10596;
var rc = inst_10603;
var cmd = inst_10604;
return ((function (v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__){
return (function (res){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__){
return (function (state_10627){
var state_val_10628 = (state_10627[(1)]);
if((state_val_10628 === (1))){
var state_10627__$1 = state_10627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10627__$1,(2),rc,res);
} else {
if((state_val_10628 === (2))){
var inst_10625 = (state_10627[(2)]);
var state_10627__$1 = state_10627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10627__$1,inst_10625);
} else {
return null;
}
}
});})(c__8308__auto____$1,v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0 = (function (){
var statearr_10632 = [null,null,null,null,null,null,null];
(statearr_10632[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__);

(statearr_10632[(1)] = (1));

return statearr_10632;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1 = (function (state_10627){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10633){if((e10633 instanceof Object)){
var ex__8291__auto__ = e10633;
var statearr_10634_10651 = state_10627;
(statearr_10634_10651[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10652 = state_10627;
state_10627 = G__10652;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = function(state_10627){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1.call(this,state_10627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10635 = f__8309__auto__.call(null);
(statearr_10635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_10635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__))
);

return c__8308__auto____$1;
});
;})(v,rc,cmd,inst_10596,inst_10603,inst_10604,state_val_10618,c__8308__auto__))
})();
var inst_10606 = drop_dot.core.pure_js.execAndPrint(inst_10604,inst_10605);
var state_10617__$1 = (function (){var statearr_10636 = state_10617;
(statearr_10636[(8)] = inst_10606);

return statearr_10636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10617__$1,(8),inst_10603);
} else {
if((state_val_10618 === (7))){
var inst_10613 = (state_10617[(2)]);
var state_10617__$1 = state_10617;
var statearr_10637_10653 = state_10617__$1;
(statearr_10637_10653[(2)] = inst_10613);

(statearr_10637_10653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10618 === (8))){
var inst_10596 = (state_10617[(7)]);
var inst_10608 = (state_10617[(2)]);
var inst_10609 = cljs.core.rest.call(null,inst_10596);
var inst_10610 = cljs.core.vec.call(null,inst_10609);
var inst_10596__$1 = inst_10610;
var state_10617__$1 = (function (){var statearr_10638 = state_10617;
(statearr_10638[(9)] = inst_10608);

(statearr_10638[(7)] = inst_10596__$1);

return statearr_10638;
})();
var statearr_10639_10654 = state_10617__$1;
(statearr_10639_10654[(2)] = null);

(statearr_10639_10654[(1)] = (3));


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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0 = (function (){
var statearr_10643 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10643[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__);

(statearr_10643[(1)] = (1));

return statearr_10643;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1 = (function (state_10617){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10644){if((e10644 instanceof Object)){
var ex__8291__auto__ = e10644;
var statearr_10645_10655 = state_10617;
(statearr_10645_10655[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10656 = state_10617;
state_10617 = G__10656;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = function(state_10617){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1.call(this,state_10617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10646 = f__8309__auto__.call(null);
(statearr_10646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.call(null);
return drop_dot.core.chan_vec_cmd__GT_exec.call(null,(function (){var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,c){
return (function (state_10668){
var state_val_10669 = (state_10668[(1)]);
if((state_val_10669 === (1))){
var state_10668__$1 = state_10668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10668__$1,v);
} else {
return null;
}
});})(c__8308__auto__,c))
;
return ((function (switch__8287__auto__,c__8308__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____0 = (function (){
var statearr_10673 = [null,null,null,null,null,null,null];
(statearr_10673[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__);

(statearr_10673[(1)] = (1));

return statearr_10673;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____1 = (function (state_10668){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10674){if((e10674 instanceof Object)){
var ex__8291__auto__ = e10674;
var statearr_10675_10677 = state_10668;
(statearr_10675_10677[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10678 = state_10668;
state_10668 = G__10678;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__ = function(state_10668){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____1.call(this,state_10668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,c))
})();
var state__8310__auto__ = (function (){var statearr_10676 = f__8309__auto__.call(null);
(statearr_10676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,c))
);

return c__8308__auto__;
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
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,res,d){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,res,d){
return (function (state_10694){
var state_val_10695 = (state_10694[(1)]);
if((state_val_10695 === (1))){
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10694__$1,(2),d,res__$1);
} else {
if((state_val_10695 === (2))){
var inst_10692 = (state_10694[(2)]);
var state_10694__$1 = state_10694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10694__$1,inst_10692);
} else {
return null;
}
}
});})(c__8308__auto__,res,d))
;
return ((function (switch__8287__auto__,c__8308__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____0 = (function (){
var statearr_10699 = [null,null,null,null,null,null,null];
(statearr_10699[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__);

(statearr_10699[(1)] = (1));

return statearr_10699;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____1 = (function (state_10694){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10700){if((e10700 instanceof Object)){
var ex__8291__auto__ = e10700;
var statearr_10701_10703 = state_10694;
(statearr_10701_10703[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10704 = state_10694;
state_10694 = G__10704;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__ = function(state_10694){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____1.call(this,state_10694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,res,d))
})();
var state__8310__auto__ = (function (){var statearr_10702 = f__8309__auto__.call(null);
(statearr_10702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,res,d))
);

return c__8308__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10736){
var state_val_10737 = (state_10736[(1)]);
if((state_val_10737 === (1))){
var inst_10727 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_10736__$1 = state_10736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10736__$1,(2),inst_10727);
} else {
if((state_val_10737 === (2))){
var inst_10729 = (state_10736[(2)]);
var state_10736__$1 = state_10736;
if(cljs.core.truth_(inst_10729)){
var statearr_10738_10749 = state_10736__$1;
(statearr_10738_10749[(1)] = (3));

} else {
var statearr_10739_10750 = state_10736__$1;
(statearr_10739_10750[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10737 === (3))){
var state_10736__$1 = state_10736;
var statearr_10740_10751 = state_10736__$1;
(statearr_10740_10751[(2)] = line);

(statearr_10740_10751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10737 === (4))){
var inst_10732 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_10736__$1 = state_10736;
var statearr_10741_10752 = state_10736__$1;
(statearr_10741_10752[(2)] = inst_10732);

(statearr_10741_10752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10737 === (5))){
var inst_10734 = (state_10736[(2)]);
var state_10736__$1 = state_10736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10736__$1,inst_10734);
} else {
return null;
}
}
}
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____0 = (function (){
var statearr_10745 = [null,null,null,null,null,null,null];
(statearr_10745[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__);

(statearr_10745[(1)] = (1));

return statearr_10745;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____1 = (function (state_10736){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10746){if((e10746 instanceof Object)){
var ex__8291__auto__ = e10746;
var statearr_10747_10753 = state_10736;
(statearr_10747_10753[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10754 = state_10736;
state_10736 = G__10754;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__ = function(state_10736){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____1.call(this,state_10736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10748 = f__8309__auto__.call(null);
(statearr_10748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10825){
var state_val_10826 = (state_10825[(1)]);
if((state_val_10826 === (1))){
var state_10825__$1 = state_10825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10825__$1,(2),chan_verified_path);
} else {
if((state_val_10826 === (2))){
var inst_10812 = (state_10825[(7)]);
var inst_10811 = (state_10825[(8)]);
var inst_10811__$1 = (state_10825[(2)]);
var inst_10812__$1 = cljs.core.async.chan.call(null,(1));
var inst_10813 = (function (){var verified_path = inst_10811__$1;
var rc = inst_10812__$1;
return ((function (verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function (state_10831){
var state_val_10832 = (state_10831[(1)]);
if((state_val_10832 === (1))){
var inst_10827 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_10831__$1 = state_10831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10831__$1,(2),rc,inst_10827);
} else {
if((state_val_10832 === (2))){
var inst_10829 = (state_10831[(2)]);
var state_10831__$1 = state_10831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10831__$1,inst_10829);
} else {
return null;
}
}
});})(c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0 = (function (){
var statearr_10836 = [null,null,null,null,null,null,null];
(statearr_10836[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_10836[(1)] = (1));

return statearr_10836;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_10831){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10837){if((e10837 instanceof Object)){
var ex__8291__auto__ = e10837;
var statearr_10838_10865 = state_10831;
(statearr_10838_10865[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10866 = state_10831;
state_10831 = G__10866;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_10831){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_10831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10839 = f__8309__auto__.call(null);
(statearr_10839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_10839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
);

return c__8308__auto____$1;
} else {
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function (state_10843){
var state_val_10844 = (state_10843[(1)]);
if((state_val_10844 === (1))){
var state_10843__$1 = state_10843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10843__$1,(2),rc,verified_path);
} else {
if((state_val_10844 === (2))){
var inst_10841 = (state_10843[(2)]);
var state_10843__$1 = state_10843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10843__$1,inst_10841);
} else {
return null;
}
}
});})(c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0 = (function (){
var statearr_10848 = [null,null,null,null,null,null,null];
(statearr_10848[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_10848[(1)] = (1));

return statearr_10848;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_10843){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10849){if((e10849 instanceof Object)){
var ex__8291__auto__ = e10849;
var statearr_10850_10867 = state_10843;
(statearr_10850_10867[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10868 = state_10843;
state_10843 = G__10868;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_10843){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_10843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10851 = f__8309__auto__.call(null);
(statearr_10851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_10851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
);

return c__8308__auto____$1;
}
});
;})(verified_path,rc,inst_10812,inst_10811,inst_10811__$1,inst_10812__$1,state_val_10826,c__8308__auto__))
})();
var inst_10814 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_10811__$1);
var state_10825__$1 = (function (){var statearr_10852 = state_10825;
(statearr_10852[(7)] = inst_10812__$1);

(statearr_10852[(9)] = inst_10813);

(statearr_10852[(8)] = inst_10811__$1);

return statearr_10852;
})();
if(cljs.core.truth_(inst_10814)){
var statearr_10853_10869 = state_10825__$1;
(statearr_10853_10869[(1)] = (3));

} else {
var statearr_10854_10870 = state_10825__$1;
(statearr_10854_10870[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10826 === (3))){
var inst_10812 = (state_10825[(7)]);
var inst_10811 = (state_10825[(8)]);
var state_10825__$1 = state_10825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10825__$1,(6),inst_10812,inst_10811);
} else {
if((state_val_10826 === (4))){
var inst_10813 = (state_10825[(9)]);
var inst_10811 = (state_10825[(8)]);
var inst_10819 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_10811,inst_10813);
var state_10825__$1 = state_10825;
var statearr_10855_10871 = state_10825__$1;
(statearr_10855_10871[(2)] = inst_10819);

(statearr_10855_10871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10826 === (5))){
var inst_10812 = (state_10825[(7)]);
var inst_10821 = (state_10825[(2)]);
var state_10825__$1 = (function (){var statearr_10856 = state_10825;
(statearr_10856[(10)] = inst_10821);

return statearr_10856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10825__$1,(7),inst_10812);
} else {
if((state_val_10826 === (6))){
var inst_10817 = (state_10825[(2)]);
var state_10825__$1 = state_10825;
var statearr_10857_10872 = state_10825__$1;
(statearr_10857_10872[(2)] = inst_10817);

(statearr_10857_10872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10826 === (7))){
var inst_10823 = (state_10825[(2)]);
var state_10825__$1 = state_10825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10825__$1,inst_10823);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0 = (function (){
var statearr_10861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10861[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_10861[(1)] = (1));

return statearr_10861;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_10825){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10862){if((e10862 instanceof Object)){
var ex__8291__auto__ = e10862;
var statearr_10863_10873 = state_10825;
(statearr_10863_10873[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10874 = state_10825;
state_10825 = G__10874;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_10825){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_10825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10864 = f__8309__auto__.call(null);
(statearr_10864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10909){
var state_val_10910 = (state_10909[(1)]);
if((state_val_10910 === (1))){
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10909__$1,(2),c);
} else {
if((state_val_10910 === (2))){
var inst_10900 = (state_10909[(7)]);
var inst_10900__$1 = (state_10909[(2)]);
var inst_10901 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_10900__$1);
var state_10909__$1 = (function (){var statearr_10911 = state_10909;
(statearr_10911[(7)] = inst_10900__$1);

return statearr_10911;
})();
if(cljs.core.truth_(inst_10901)){
var statearr_10912_10923 = state_10909__$1;
(statearr_10912_10923[(1)] = (3));

} else {
var statearr_10913_10924 = state_10909__$1;
(statearr_10913_10924[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (3))){
var inst_10900 = (state_10909[(7)]);
var inst_10903 = cljs.core.println.call(null,inst_10900);
var state_10909__$1 = state_10909;
var statearr_10914_10925 = state_10909__$1;
(statearr_10914_10925[(2)] = inst_10903);

(statearr_10914_10925[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (4))){
var inst_10900 = (state_10909[(7)]);
var inst_10905 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_10900);
var state_10909__$1 = state_10909;
var statearr_10915_10926 = state_10909__$1;
(statearr_10915_10926[(2)] = inst_10905);

(statearr_10915_10926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10910 === (5))){
var inst_10907 = (state_10909[(2)]);
var state_10909__$1 = state_10909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10909__$1,inst_10907);
} else {
return null;
}
}
}
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____0 = (function (){
var statearr_10919 = [null,null,null,null,null,null,null,null];
(statearr_10919[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_10919[(1)] = (1));

return statearr_10919;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_10909){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e10920){if((e10920 instanceof Object)){
var ex__8291__auto__ = e10920;
var statearr_10921_10927 = state_10909;
(statearr_10921_10927[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10928 = state_10909;
state_10909 = G__10928;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_10909){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_10909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_10922 = f__8309__auto__.call(null);
(statearr_10922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_10922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_10990){
var state_val_10991 = (state_10990[(1)]);
if((state_val_10991 === (7))){
var inst_10986 = (state_10990[(2)]);
var state_10990__$1 = state_10990;
var statearr_10992_11013 = state_10990__$1;
(statearr_10992_11013[(2)] = inst_10986);

(statearr_10992_11013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (1))){
var inst_10971 = chan_config;
var state_10990__$1 = (function (){var statearr_10993 = state_10990;
(statearr_10993[(7)] = inst_10971);

return statearr_10993;
})();
var statearr_10994_11014 = state_10990__$1;
(statearr_10994_11014[(2)] = null);

(statearr_10994_11014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (4))){
var inst_10974 = (state_10990[(8)]);
var inst_10974__$1 = (state_10990[(2)]);
var state_10990__$1 = (function (){var statearr_10995 = state_10990;
(statearr_10995[(8)] = inst_10974__$1);

return statearr_10995;
})();
if(cljs.core.truth_(inst_10974__$1)){
var statearr_10996_11015 = state_10990__$1;
(statearr_10996_11015[(1)] = (5));

} else {
var statearr_10997_11016 = state_10990__$1;
(statearr_10997_11016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (6))){
var state_10990__$1 = state_10990;
var statearr_10998_11017 = state_10990__$1;
(statearr_10998_11017[(2)] = null);

(statearr_10998_11017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (3))){
var inst_10988 = (state_10990[(2)]);
var state_10990__$1 = state_10990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10990__$1,inst_10988);
} else {
if((state_val_10991 === (2))){
var inst_10971 = (state_10990[(7)]);
var state_10990__$1 = state_10990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10990__$1,(4),inst_10971);
} else {
if((state_val_10991 === (9))){
var inst_10974 = (state_10990[(8)]);
var inst_10980 = cljs.core.println.call(null,inst_10974);
var state_10990__$1 = state_10990;
var statearr_11000_11018 = state_10990__$1;
(statearr_11000_11018[(2)] = inst_10980);

(statearr_11000_11018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (5))){
var inst_10976 = cljs.core._EQ_.call(null,cmd,"drop");
var state_10990__$1 = state_10990;
if(inst_10976){
var statearr_11001_11019 = state_10990__$1;
(statearr_11001_11019[(1)] = (8));

} else {
var statearr_11002_11020 = state_10990__$1;
(statearr_11002_11020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (10))){
var inst_10971 = (state_10990[(7)]);
var inst_10982 = (state_10990[(2)]);
var tmp10999 = inst_10971;
var inst_10971__$1 = tmp10999;
var state_10990__$1 = (function (){var statearr_11003 = state_10990;
(statearr_11003[(7)] = inst_10971__$1);

(statearr_11003[(9)] = inst_10982);

return statearr_11003;
})();
var statearr_11004_11021 = state_10990__$1;
(statearr_11004_11021[(2)] = null);

(statearr_11004_11021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10991 === (8))){
var inst_10974 = (state_10990[(8)]);
var inst_10978 = drop_dot.core.drop_line.call(null,inst_10974);
var state_10990__$1 = state_10990;
var statearr_11005_11022 = state_10990__$1;
(statearr_11005_11022[(2)] = inst_10978);

(statearr_11005_11022[(1)] = (10));


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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____0 = (function (){
var statearr_11009 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11009[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__);

(statearr_11009[(1)] = (1));

return statearr_11009;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____1 = (function (state_10990){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_10990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11010){if((e11010 instanceof Object)){
var ex__8291__auto__ = e11010;
var statearr_11011_11023 = state_10990;
(statearr_11011_11023[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11024 = state_10990;
state_10990 = G__11024;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__ = function(state_10990){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____1.call(this,state_10990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_11012 = f__8309__auto__.call(null);
(statearr_11012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_11012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__8308__auto___11121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto___11121,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto___11121,c){
return (function (state_11085){
var state_val_11086 = (state_11085[(1)]);
if((state_val_11086 === (1))){
var inst_11075 = (state_11085[(7)]);
var inst_11074 = (state_11085[(8)]);
var inst_11073 = (state_11085[(9)]);
var inst_11073__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_11074__$1 = cljs.core.async.chan.call(null,(1));
var inst_11075__$1 = (function (){var res = inst_11073__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_11074__$1;
return ((function (res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c){
return (function (error,res__$1){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c){
return (function (state_11090){
var state_val_11091 = (state_11090[(1)]);
if((state_val_11091 === (1))){
var state_11090__$1 = state_11090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11090__$1,(2),wcc,res__$1);
} else {
if((state_val_11091 === (2))){
var inst_11088 = (state_11090[(2)]);
var state_11090__$1 = state_11090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11090__$1,inst_11088);
} else {
return null;
}
}
});})(c__8308__auto____$1,res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0 = (function (){
var statearr_11095 = [null,null,null,null,null,null,null];
(statearr_11095[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8288__auto__);

(statearr_11095[(1)] = (1));

return statearr_11095;
});
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1 = (function (state_11090){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11096){if((e11096 instanceof Object)){
var ex__8291__auto__ = e11096;
var statearr_11097_11122 = state_11090;
(statearr_11097_11122[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11123 = state_11090;
state_11090 = G__11123;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = function(state_11090){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1.call(this,state_11090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c))
})();
var state__8310__auto__ = (function (){var statearr_11098 = f__8309__auto__.call(null);
(statearr_11098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_11098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c))
);

return c__8308__auto____$1;
});
;})(res,config_path,wcc,inst_11075,inst_11074,inst_11073,inst_11073__$1,inst_11074__$1,state_val_11086,c__8308__auto___11121,c))
})();
var inst_11076 = inst_11073__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_11075__$1);
var state_11085__$1 = (function (){var statearr_11099 = state_11085;
(statearr_11099[(7)] = inst_11075__$1);

(statearr_11099[(10)] = inst_11076);

(statearr_11099[(8)] = inst_11074__$1);

(statearr_11099[(9)] = inst_11073__$1);

return statearr_11099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11085__$1,(2),inst_11074__$1);
} else {
if((state_val_11086 === (2))){
var inst_11075 = (state_11085[(7)]);
var inst_11076 = (state_11085[(10)]);
var inst_11074 = (state_11085[(8)]);
var inst_11073 = (state_11085[(9)]);
var inst_11078 = (state_11085[(2)]);
var inst_11079 = [cljs.core.str(inst_11078)].join('');
var inst_11080 = parseInt(inst_11079);
var inst_11081 = (function (){var res = inst_11073;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_11074;
var wcc_jammer = inst_11075;
var get_wc = inst_11076;
var lines = inst_11080;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,state_val_11086,c__8308__auto___11121,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,state_val_11086,c__8308__auto___11121,c))
})();
var inst_11082 = (function (){var res = inst_11073;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_11074;
var wcc_jammer = inst_11075;
var get_wc = inst_11076;
var lines = inst_11080;
var close_if_done = inst_11081;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c){
return (function (res__$1){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c){
return (function (state_11104){
var state_val_11105 = (state_11104[(1)]);
if((state_val_11105 === (1))){
var state_11104__$1 = state_11104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11104__$1,(2),c,res__$1);
} else {
if((state_val_11105 === (2))){
var inst_11101 = (state_11104[(2)]);
var inst_11102 = close_if_done.call(null);
var state_11104__$1 = (function (){var statearr_11106 = state_11104;
(statearr_11106[(7)] = inst_11101);

return statearr_11106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11104__$1,inst_11102);
} else {
return null;
}
}
});})(c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0 = (function (){
var statearr_11110 = [null,null,null,null,null,null,null,null];
(statearr_11110[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8288__auto__);

(statearr_11110[(1)] = (1));

return statearr_11110;
});
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1 = (function (state_11104){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11111){if((e11111 instanceof Object)){
var ex__8291__auto__ = e11111;
var statearr_11112_11124 = state_11104;
(statearr_11112_11124[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11125 = state_11104;
state_11104 = G__11125;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = function(state_11104){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1.call(this,state_11104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c))
})();
var state__8310__auto__ = (function (){var statearr_11113 = f__8309__auto__.call(null);
(statearr_11113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_11113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c))
);

return c__8308__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11075,inst_11076,inst_11074,inst_11073,inst_11078,inst_11079,inst_11080,inst_11081,state_val_11086,c__8308__auto___11121,c))
})();
var inst_11083 = inst_11073.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_11082);
var state_11085__$1 = state_11085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11085__$1,inst_11083);
} else {
return null;
}
}
});})(c__8308__auto___11121,c))
;
return ((function (switch__8287__auto__,c__8308__auto___11121,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0 = (function (){
var statearr_11117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11117[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8288__auto__);

(statearr_11117[(1)] = (1));

return statearr_11117;
});
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1 = (function (state_11085){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_11085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e11118){if((e11118 instanceof Object)){
var ex__8291__auto__ = e11118;
var statearr_11119_11126 = state_11085;
(statearr_11119_11126[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11127 = state_11085;
state_11085 = G__11127;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = function(state_11085){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1.call(this,state_11085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto___11121,c))
})();
var state__8310__auto__ = (function (){var statearr_11120 = f__8309__auto__.call(null);
(statearr_11120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto___11121);

return statearr_11120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto___11121,c))
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
var args__7025__auto__ = [];
var len__7018__auto___11129 = arguments.length;
var i__7019__auto___11130 = (0);
while(true){
if((i__7019__auto___11130 < len__7018__auto___11129)){
args__7025__auto__.push((arguments[i__7019__auto___11130]));

var G__11131 = (i__7019__auto___11130 + (1));
i__7019__auto___11130 = G__11131;
continue;
} else {
}
break;
}

var argseq__7026__auto__ = ((((0) < args__7025__auto__.length))?(new cljs.core.IndexedSeq(args__7025__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7026__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__5960__auto__ = argv.e;
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__5960__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
return "$HOME";
}
})();
drop_dot.core.check_for_sys_requirements.call(null);

if(cljs.core._EQ_.call(null,arg,"drop")){
cljs.core.println.call(null,"drop mode");

drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"drop");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
return cljs.core.println.call(null,"link mode");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq11128){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11128));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map