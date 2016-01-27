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
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40532){
var state_val_40533 = (state_40532[(1)]);
if((state_val_40533 === (1))){
var state_40532__$1 = state_40532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40532__$1,(2),c,arg);
} else {
if((state_val_40533 === (2))){
var inst_40530 = (state_40532[(2)]);
var state_40532__$1 = state_40532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40532__$1,inst_40530);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0 = (function (){
var statearr_40537 = [null,null,null,null,null,null,null];
(statearr_40537[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_40537[(1)] = (1));

return statearr_40537;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_40532){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40538){if((e40538 instanceof Object)){
var ex__9301__auto__ = e40538;
var statearr_40539_40541 = state_40532;
(statearr_40539_40541[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40542 = state_40532;
state_40532 = G__40542;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_40532){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_40532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40540 = f__9319__auto__.call(null);
(statearr_40540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40558){
var state_val_40559 = (state_40558[(1)]);
if((state_val_40559 === (1))){
var state_40558__$1 = state_40558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40558__$1,(2),c,arg);
} else {
if((state_val_40559 === (2))){
var inst_40556 = (state_40558[(2)]);
var state_40558__$1 = state_40558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40558__$1,inst_40556);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0 = (function (){
var statearr_40563 = [null,null,null,null,null,null,null];
(statearr_40563[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_40563[(1)] = (1));

return statearr_40563;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_40558){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40564){if((e40564 instanceof Object)){
var ex__9301__auto__ = e40564;
var statearr_40565_40567 = state_40558;
(statearr_40565_40567[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40568 = state_40558;
state_40558 = G__40568;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_40558){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_40558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40566 = f__9319__auto__.call(null);
(statearr_40566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40645){
var state_val_40646 = (state_40645[(1)]);
if((state_val_40646 === (1))){
var state_40645__$1 = state_40645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40645__$1,(2),input_chan);
} else {
if((state_val_40646 === (2))){
var inst_40623 = (state_40645[(2)]);
var inst_40624 = inst_40623;
var state_40645__$1 = (function (){var statearr_40647 = state_40645;
(statearr_40647[(7)] = inst_40624);

return statearr_40647;
})();
var statearr_40648_40675 = state_40645__$1;
(statearr_40648_40675[(2)] = null);

(statearr_40648_40675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40646 === (3))){
var inst_40624 = (state_40645[(7)]);
var inst_40626 = cljs.core.count.call(null,inst_40624);
var inst_40627 = cljs.core._EQ_.call(null,inst_40626,(0));
var state_40645__$1 = state_40645;
if(inst_40627){
var statearr_40649_40676 = state_40645__$1;
(statearr_40649_40676[(1)] = (5));

} else {
var statearr_40650_40677 = state_40645__$1;
(statearr_40650_40677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40646 === (4))){
var inst_40643 = (state_40645[(2)]);
var state_40645__$1 = state_40645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40645__$1,inst_40643);
} else {
if((state_val_40646 === (5))){
var inst_40629 = cljs.core.println.call(null,"done");
var state_40645__$1 = state_40645;
var statearr_40651_40678 = state_40645__$1;
(statearr_40651_40678[(2)] = inst_40629);

(statearr_40651_40678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40646 === (6))){
var inst_40624 = (state_40645[(7)]);
var inst_40631 = cljs.core.async.chan.call(null);
var inst_40632 = cljs.core.first.call(null,inst_40624);
var inst_40633 = (function (){var v = inst_40624;
var rc = inst_40631;
var cmd = inst_40632;
return ((function (v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__){
return (function (state_40655){
var state_val_40656 = (state_40655[(1)]);
if((state_val_40656 === (1))){
var state_40655__$1 = state_40655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40655__$1,(2),rc,res);
} else {
if((state_val_40656 === (2))){
var inst_40653 = (state_40655[(2)]);
var state_40655__$1 = state_40655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40655__$1,inst_40653);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_40660 = [null,null,null,null,null,null,null];
(statearr_40660[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_40660[(1)] = (1));

return statearr_40660;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_40655){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40661){if((e40661 instanceof Object)){
var ex__9301__auto__ = e40661;
var statearr_40662_40679 = state_40655;
(statearr_40662_40679[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40680 = state_40655;
state_40655 = G__40680;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_40655){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_40655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40663 = f__9319__auto__.call(null);
(statearr_40663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_40663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_40624,inst_40631,inst_40632,state_val_40646,c__9318__auto__))
})();
var inst_40634 = drop_dot.core.pure_js.execAndPrint(inst_40632,inst_40633);
var state_40645__$1 = (function (){var statearr_40664 = state_40645;
(statearr_40664[(8)] = inst_40634);

return statearr_40664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40645__$1,(8),inst_40631);
} else {
if((state_val_40646 === (7))){
var inst_40641 = (state_40645[(2)]);
var state_40645__$1 = state_40645;
var statearr_40665_40681 = state_40645__$1;
(statearr_40665_40681[(2)] = inst_40641);

(statearr_40665_40681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40646 === (8))){
var inst_40624 = (state_40645[(7)]);
var inst_40636 = (state_40645[(2)]);
var inst_40637 = cljs.core.rest.call(null,inst_40624);
var inst_40638 = cljs.core.vec.call(null,inst_40637);
var inst_40624__$1 = inst_40638;
var state_40645__$1 = (function (){var statearr_40666 = state_40645;
(statearr_40666[(7)] = inst_40624__$1);

(statearr_40666[(9)] = inst_40636);

return statearr_40666;
})();
var statearr_40667_40682 = state_40645__$1;
(statearr_40667_40682[(2)] = null);

(statearr_40667_40682[(1)] = (3));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_40671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40671[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_40671[(1)] = (1));

return statearr_40671;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_40645){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40672){if((e40672 instanceof Object)){
var ex__9301__auto__ = e40672;
var statearr_40673_40683 = state_40645;
(statearr_40673_40683[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40684 = state_40645;
state_40645 = G__40684;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_40645){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_40645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40674 = f__9319__auto__.call(null);
(statearr_40674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.call(null);
return drop_dot.core.chan_vec_cmd__GT_exec.call(null,(function (){var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,c){
return (function (state_40696){
var state_val_40697 = (state_40696[(1)]);
if((state_val_40697 === (1))){
var state_40696__$1 = state_40696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40696__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_40701 = [null,null,null,null,null,null,null];
(statearr_40701[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_40701[(1)] = (1));

return statearr_40701;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_40696){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40702){if((e40702 instanceof Object)){
var ex__9301__auto__ = e40702;
var statearr_40703_40705 = state_40696;
(statearr_40703_40705[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40706 = state_40696;
state_40696 = G__40706;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_40696){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_40696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_40704 = f__9319__auto__.call(null);
(statearr_40704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,c))
);

return c__9318__auto__;
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
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,res,d){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,res,d){
return (function (state_40722){
var state_val_40723 = (state_40722[(1)]);
if((state_val_40723 === (1))){
var state_40722__$1 = state_40722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40722__$1,(2),d,res__$1);
} else {
if((state_val_40723 === (2))){
var inst_40720 = (state_40722[(2)]);
var state_40722__$1 = state_40722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40722__$1,inst_40720);
} else {
return null;
}
}
});})(c__9318__auto__,res,d))
;
return ((function (switch__9297__auto__,c__9318__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0 = (function (){
var statearr_40727 = [null,null,null,null,null,null,null];
(statearr_40727[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_40727[(1)] = (1));

return statearr_40727;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_40722){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40728){if((e40728 instanceof Object)){
var ex__9301__auto__ = e40728;
var statearr_40729_40731 = state_40722;
(statearr_40729_40731[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40732 = state_40722;
state_40722 = G__40732;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_40722){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_40722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_40730 = f__9319__auto__.call(null);
(statearr_40730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,res,d))
);

return c__9318__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40764){
var state_val_40765 = (state_40764[(1)]);
if((state_val_40765 === (1))){
var inst_40755 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_40764__$1 = state_40764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40764__$1,(2),inst_40755);
} else {
if((state_val_40765 === (2))){
var inst_40757 = (state_40764[(2)]);
var state_40764__$1 = state_40764;
if(cljs.core.truth_(inst_40757)){
var statearr_40766_40777 = state_40764__$1;
(statearr_40766_40777[(1)] = (3));

} else {
var statearr_40767_40778 = state_40764__$1;
(statearr_40767_40778[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40765 === (3))){
var state_40764__$1 = state_40764;
var statearr_40768_40779 = state_40764__$1;
(statearr_40768_40779[(2)] = line);

(statearr_40768_40779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40765 === (4))){
var inst_40760 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_40764__$1 = state_40764;
var statearr_40769_40780 = state_40764__$1;
(statearr_40769_40780[(2)] = inst_40760);

(statearr_40769_40780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40765 === (5))){
var inst_40762 = (state_40764[(2)]);
var state_40764__$1 = state_40764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40764__$1,inst_40762);
} else {
return null;
}
}
}
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0 = (function (){
var statearr_40773 = [null,null,null,null,null,null,null];
(statearr_40773[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_40773[(1)] = (1));

return statearr_40773;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_40764){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40774){if((e40774 instanceof Object)){
var ex__9301__auto__ = e40774;
var statearr_40775_40781 = state_40764;
(statearr_40775_40781[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40782 = state_40764;
state_40764 = G__40782;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_40764){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_40764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40776 = f__9319__auto__.call(null);
(statearr_40776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40853){
var state_val_40854 = (state_40853[(1)]);
if((state_val_40854 === (1))){
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40853__$1,(2),chan_verified_path);
} else {
if((state_val_40854 === (2))){
var inst_40840 = (state_40853[(7)]);
var inst_40839 = (state_40853[(8)]);
var inst_40839__$1 = (state_40853[(2)]);
var inst_40840__$1 = cljs.core.async.chan.call(null,(1));
var inst_40841 = (function (){var verified_path = inst_40839__$1;
var rc = inst_40840__$1;
return ((function (verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function (state_40859){
var state_val_40860 = (state_40859[(1)]);
if((state_val_40860 === (1))){
var inst_40855 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_40859__$1 = state_40859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40859__$1,(2),rc,inst_40855);
} else {
if((state_val_40860 === (2))){
var inst_40857 = (state_40859[(2)]);
var state_40859__$1 = state_40859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40859__$1,inst_40857);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_40864 = [null,null,null,null,null,null,null];
(statearr_40864[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_40864[(1)] = (1));

return statearr_40864;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_40859){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40865){if((e40865 instanceof Object)){
var ex__9301__auto__ = e40865;
var statearr_40866_40893 = state_40859;
(statearr_40866_40893[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40894 = state_40859;
state_40859 = G__40894;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_40859){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_40859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40867 = f__9319__auto__.call(null);
(statearr_40867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_40867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function (state_40871){
var state_val_40872 = (state_40871[(1)]);
if((state_val_40872 === (1))){
var state_40871__$1 = state_40871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40871__$1,(2),rc,verified_path);
} else {
if((state_val_40872 === (2))){
var inst_40869 = (state_40871[(2)]);
var state_40871__$1 = state_40871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40871__$1,inst_40869);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_40876 = [null,null,null,null,null,null,null];
(statearr_40876[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_40876[(1)] = (1));

return statearr_40876;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_40871){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40877){if((e40877 instanceof Object)){
var ex__9301__auto__ = e40877;
var statearr_40878_40895 = state_40871;
(statearr_40878_40895[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40896 = state_40871;
state_40871 = G__40896;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_40871){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_40871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40879 = f__9319__auto__.call(null);
(statearr_40879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_40879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_40840,inst_40839,inst_40839__$1,inst_40840__$1,state_val_40854,c__9318__auto__))
})();
var inst_40842 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_40839__$1);
var state_40853__$1 = (function (){var statearr_40880 = state_40853;
(statearr_40880[(7)] = inst_40840__$1);

(statearr_40880[(9)] = inst_40841);

(statearr_40880[(8)] = inst_40839__$1);

return statearr_40880;
})();
if(cljs.core.truth_(inst_40842)){
var statearr_40881_40897 = state_40853__$1;
(statearr_40881_40897[(1)] = (3));

} else {
var statearr_40882_40898 = state_40853__$1;
(statearr_40882_40898[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (3))){
var inst_40840 = (state_40853[(7)]);
var inst_40839 = (state_40853[(8)]);
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40853__$1,(6),inst_40840,inst_40839);
} else {
if((state_val_40854 === (4))){
var inst_40841 = (state_40853[(9)]);
var inst_40839 = (state_40853[(8)]);
var inst_40847 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_40839,inst_40841);
var state_40853__$1 = state_40853;
var statearr_40883_40899 = state_40853__$1;
(statearr_40883_40899[(2)] = inst_40847);

(statearr_40883_40899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (5))){
var inst_40840 = (state_40853[(7)]);
var inst_40849 = (state_40853[(2)]);
var state_40853__$1 = (function (){var statearr_40884 = state_40853;
(statearr_40884[(10)] = inst_40849);

return statearr_40884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40853__$1,(7),inst_40840);
} else {
if((state_val_40854 === (6))){
var inst_40845 = (state_40853[(2)]);
var state_40853__$1 = state_40853;
var statearr_40885_40900 = state_40853__$1;
(statearr_40885_40900[(2)] = inst_40845);

(statearr_40885_40900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (7))){
var inst_40851 = (state_40853[(2)]);
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40853__$1,inst_40851);
} else {
return null;
}
}
}
}
}
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_40889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40889[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_40889[(1)] = (1));

return statearr_40889;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_40853){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40890){if((e40890 instanceof Object)){
var ex__9301__auto__ = e40890;
var statearr_40891_40901 = state_40853;
(statearr_40891_40901[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40902 = state_40853;
state_40853 = G__40902;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_40853){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_40853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40892 = f__9319__auto__.call(null);
(statearr_40892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40937){
var state_val_40938 = (state_40937[(1)]);
if((state_val_40938 === (1))){
var state_40937__$1 = state_40937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40937__$1,(2),c);
} else {
if((state_val_40938 === (2))){
var inst_40928 = (state_40937[(7)]);
var inst_40928__$1 = (state_40937[(2)]);
var inst_40929 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_40928__$1);
var state_40937__$1 = (function (){var statearr_40939 = state_40937;
(statearr_40939[(7)] = inst_40928__$1);

return statearr_40939;
})();
if(cljs.core.truth_(inst_40929)){
var statearr_40940_40951 = state_40937__$1;
(statearr_40940_40951[(1)] = (3));

} else {
var statearr_40941_40952 = state_40937__$1;
(statearr_40941_40952[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40938 === (3))){
var inst_40928 = (state_40937[(7)]);
var inst_40931 = cljs.core.println.call(null,inst_40928);
var state_40937__$1 = state_40937;
var statearr_40942_40953 = state_40937__$1;
(statearr_40942_40953[(2)] = inst_40931);

(statearr_40942_40953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40938 === (4))){
var inst_40928 = (state_40937[(7)]);
var inst_40933 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_40928);
var state_40937__$1 = state_40937;
var statearr_40943_40954 = state_40937__$1;
(statearr_40943_40954[(2)] = inst_40933);

(statearr_40943_40954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40938 === (5))){
var inst_40935 = (state_40937[(2)]);
var state_40937__$1 = state_40937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40937__$1,inst_40935);
} else {
return null;
}
}
}
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_40947 = [null,null,null,null,null,null,null,null];
(statearr_40947[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_40947[(1)] = (1));

return statearr_40947;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_40937){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40948){if((e40948 instanceof Object)){
var ex__9301__auto__ = e40948;
var statearr_40949_40955 = state_40937;
(statearr_40949_40955[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40956 = state_40937;
state_40937 = G__40956;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_40937){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_40937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40950 = f__9319__auto__.call(null);
(statearr_40950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
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
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,basename,target_path,rc){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,basename,target_path,rc){
return (function (state_40985){
var state_val_40986 = (state_40985[(1)]);
if((state_val_40986 === (1))){
var state_40985__$1 = state_40985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40985__$1,(2),rc,line);
} else {
if((state_val_40986 === (2))){
var inst_40983 = (state_40985[(2)]);
var state_40985__$1 = state_40985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40985__$1,inst_40983);
} else {
return null;
}
}
});})(c__9318__auto__,basename,target_path,rc))
;
return ((function (switch__9297__auto__,c__9318__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0 = (function (){
var statearr_40990 = [null,null,null,null,null,null,null];
(statearr_40990[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_40990[(1)] = (1));

return statearr_40990;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_40985){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40991){if((e40991 instanceof Object)){
var ex__9301__auto__ = e40991;
var statearr_40992_41007 = state_40985;
(statearr_40992_41007[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41008 = state_40985;
state_40985 = G__41008;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_40985){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_40985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_40993 = f__9319__auto__.call(null);
(statearr_40993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,basename,target_path,rc))
);

return c__9318__auto__;
} else {
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,basename,target_path,rc){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,basename,target_path,rc){
return (function (state_40998){
var state_val_40999 = (state_40998[(1)]);
if((state_val_40999 === (1))){
var inst_40994 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_40998__$1 = state_40998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40998__$1,(2),rc,inst_40994);
} else {
if((state_val_40999 === (2))){
var inst_40996 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40998__$1,inst_40996);
} else {
return null;
}
}
});})(c__9318__auto__,basename,target_path,rc))
;
return ((function (switch__9297__auto__,c__9318__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0 = (function (){
var statearr_41003 = [null,null,null,null,null,null,null];
(statearr_41003[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_41003[(1)] = (1));

return statearr_41003;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_40998){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41004){if((e41004 instanceof Object)){
var ex__9301__auto__ = e41004;
var statearr_41005_41009 = state_40998;
(statearr_41005_41009[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41010 = state_40998;
state_40998 = G__41010;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_40998){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_40998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_41006 = f__9319__auto__.call(null);
(statearr_41006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,basename,target_path,rc))
);

return c__9318__auto__;
}
});})(basename,target_path,rc))
;
drop_dot.core.pure_js.pathExists(target_path,cb);

return rc;
});
drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking(chan_linkable_path){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_41081){
var state_val_41082 = (state_41081[(1)]);
if((state_val_41082 === (1))){
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41081__$1,(2),chan_linkable_path);
} else {
if((state_val_41082 === (2))){
var inst_41067 = (state_41081[(7)]);
var inst_41068 = (state_41081[(8)]);
var inst_41067__$1 = (state_41081[(2)]);
var inst_41068__$1 = cljs.core.async.chan.call(null,(1));
var inst_41069 = (function (){var linkable_path = inst_41067__$1;
var rc = inst_41068__$1;
return ((function (linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function (state_41087){
var state_val_41088 = (state_41087[(1)]);
if((state_val_41088 === (1))){
var inst_41083 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_41087__$1 = state_41087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41087__$1,(2),rc,inst_41083);
} else {
if((state_val_41088 === (2))){
var inst_41085 = (state_41087[(2)]);
var state_41087__$1 = state_41087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41087__$1,inst_41085);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_41092 = [null,null,null,null,null,null,null];
(statearr_41092[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_41092[(1)] = (1));

return statearr_41092;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_41087){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41093){if((e41093 instanceof Object)){
var ex__9301__auto__ = e41093;
var statearr_41094_41121 = state_41087;
(statearr_41094_41121[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41122 = state_41087;
state_41087 = G__41122;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_41087){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_41087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41095 = f__9319__auto__.call(null);
(statearr_41095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function (state_41099){
var state_val_41100 = (state_41099[(1)]);
if((state_val_41100 === (1))){
var state_41099__$1 = state_41099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41099__$1,(2),rc,linkable_path);
} else {
if((state_val_41100 === (2))){
var inst_41097 = (state_41099[(2)]);
var state_41099__$1 = state_41099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41099__$1,inst_41097);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_41104 = [null,null,null,null,null,null,null];
(statearr_41104[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_41104[(1)] = (1));

return statearr_41104;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_41099){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41105){if((e41105 instanceof Object)){
var ex__9301__auto__ = e41105;
var statearr_41106_41123 = state_41099;
(statearr_41106_41123[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41124 = state_41099;
state_41099 = G__41124;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_41099){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_41099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41107 = f__9319__auto__.call(null);
(statearr_41107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_41067,inst_41068,inst_41067__$1,inst_41068__$1,state_val_41082,c__9318__auto__))
})();
var inst_41070 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_41067__$1);
var state_41081__$1 = (function (){var statearr_41108 = state_41081;
(statearr_41108[(7)] = inst_41067__$1);

(statearr_41108[(8)] = inst_41068__$1);

(statearr_41108[(9)] = inst_41069);

return statearr_41108;
})();
if(cljs.core.truth_(inst_41070)){
var statearr_41109_41125 = state_41081__$1;
(statearr_41109_41125[(1)] = (3));

} else {
var statearr_41110_41126 = state_41081__$1;
(statearr_41110_41126[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (3))){
var inst_41067 = (state_41081[(7)]);
var inst_41068 = (state_41081[(8)]);
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41081__$1,(6),inst_41068,inst_41067);
} else {
if((state_val_41082 === (4))){
var inst_41067 = (state_41081[(7)]);
var inst_41069 = (state_41081[(9)]);
var inst_41075 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_41067,inst_41069);
var state_41081__$1 = state_41081;
var statearr_41111_41127 = state_41081__$1;
(statearr_41111_41127[(2)] = inst_41075);

(statearr_41111_41127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (5))){
var inst_41068 = (state_41081[(8)]);
var inst_41077 = (state_41081[(2)]);
var state_41081__$1 = (function (){var statearr_41112 = state_41081;
(statearr_41112[(10)] = inst_41077);

return statearr_41112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41081__$1,(7),inst_41068);
} else {
if((state_val_41082 === (6))){
var inst_41073 = (state_41081[(2)]);
var state_41081__$1 = state_41081;
var statearr_41113_41128 = state_41081__$1;
(statearr_41113_41128[(2)] = inst_41073);

(statearr_41113_41128[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41082 === (7))){
var inst_41079 = (state_41081[(2)]);
var state_41081__$1 = state_41081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41081__$1,inst_41079);
} else {
return null;
}
}
}
}
}
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_41117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41117[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_41117[(1)] = (1));

return statearr_41117;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_41081){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41118){if((e41118 instanceof Object)){
var ex__9301__auto__ = e41118;
var statearr_41119_41129 = state_41081;
(statearr_41119_41129[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41130 = state_41081;
state_41081 = G__41130;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_41081){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_41081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41120 = f__9319__auto__.call(null);
(statearr_41120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_41192){
var state_val_41193 = (state_41192[(1)]);
if((state_val_41193 === (7))){
var inst_41188 = (state_41192[(2)]);
var state_41192__$1 = state_41192;
var statearr_41194_41215 = state_41192__$1;
(statearr_41194_41215[(2)] = inst_41188);

(statearr_41194_41215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (1))){
var inst_41173 = chan_config;
var state_41192__$1 = (function (){var statearr_41195 = state_41192;
(statearr_41195[(7)] = inst_41173);

return statearr_41195;
})();
var statearr_41196_41216 = state_41192__$1;
(statearr_41196_41216[(2)] = null);

(statearr_41196_41216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (4))){
var inst_41176 = (state_41192[(8)]);
var inst_41176__$1 = (state_41192[(2)]);
var state_41192__$1 = (function (){var statearr_41197 = state_41192;
(statearr_41197[(8)] = inst_41176__$1);

return statearr_41197;
})();
if(cljs.core.truth_(inst_41176__$1)){
var statearr_41198_41217 = state_41192__$1;
(statearr_41198_41217[(1)] = (5));

} else {
var statearr_41199_41218 = state_41192__$1;
(statearr_41199_41218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (6))){
var state_41192__$1 = state_41192;
var statearr_41200_41219 = state_41192__$1;
(statearr_41200_41219[(2)] = null);

(statearr_41200_41219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (3))){
var inst_41190 = (state_41192[(2)]);
var state_41192__$1 = state_41192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41192__$1,inst_41190);
} else {
if((state_val_41193 === (2))){
var inst_41173 = (state_41192[(7)]);
var state_41192__$1 = state_41192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41192__$1,(4),inst_41173);
} else {
if((state_val_41193 === (9))){
var inst_41176 = (state_41192[(8)]);
var inst_41182 = cljs.core.println.call(null,inst_41176);
var state_41192__$1 = state_41192;
var statearr_41202_41220 = state_41192__$1;
(statearr_41202_41220[(2)] = inst_41182);

(statearr_41202_41220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (5))){
var inst_41178 = cljs.core._EQ_.call(null,cmd,"drop");
var state_41192__$1 = state_41192;
if(inst_41178){
var statearr_41203_41221 = state_41192__$1;
(statearr_41203_41221[(1)] = (8));

} else {
var statearr_41204_41222 = state_41192__$1;
(statearr_41204_41222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (10))){
var inst_41173 = (state_41192[(7)]);
var inst_41184 = (state_41192[(2)]);
var tmp41201 = inst_41173;
var inst_41173__$1 = tmp41201;
var state_41192__$1 = (function (){var statearr_41205 = state_41192;
(statearr_41205[(9)] = inst_41184);

(statearr_41205[(7)] = inst_41173__$1);

return statearr_41205;
})();
var statearr_41206_41223 = state_41192__$1;
(statearr_41206_41223[(2)] = null);

(statearr_41206_41223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41193 === (8))){
var inst_41176 = (state_41192[(8)]);
var inst_41180 = drop_dot.core.drop_line.call(null,inst_41176);
var state_41192__$1 = state_41192;
var statearr_41207_41224 = state_41192__$1;
(statearr_41207_41224[(2)] = inst_41180);

(statearr_41207_41224[(1)] = (10));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_41211 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41211[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_41211[(1)] = (1));

return statearr_41211;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_41192){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41212){if((e41212 instanceof Object)){
var ex__9301__auto__ = e41212;
var statearr_41213_41225 = state_41192;
(statearr_41213_41225[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41226 = state_41192;
state_41192 = G__41226;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_41192){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_41192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41214 = f__9319__auto__.call(null);
(statearr_41214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___41323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___41323,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___41323,c){
return (function (state_41287){
var state_val_41288 = (state_41287[(1)]);
if((state_val_41288 === (1))){
var inst_41275 = (state_41287[(7)]);
var inst_41276 = (state_41287[(8)]);
var inst_41277 = (state_41287[(9)]);
var inst_41275__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_41276__$1 = cljs.core.async.chan.call(null,(1));
var inst_41277__$1 = (function (){var res = inst_41275__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_41276__$1;
return ((function (res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c){
return (function (state_41292){
var state_val_41293 = (state_41292[(1)]);
if((state_val_41293 === (1))){
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41292__$1,(2),wcc,res__$1);
} else {
if((state_val_41293 === (2))){
var inst_41290 = (state_41292[(2)]);
var state_41292__$1 = state_41292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41292__$1,inst_41290);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_41297 = [null,null,null,null,null,null,null];
(statearr_41297[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_41297[(1)] = (1));

return statearr_41297;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_41292){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41298){if((e41298 instanceof Object)){
var ex__9301__auto__ = e41298;
var statearr_41299_41324 = state_41292;
(statearr_41299_41324[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41325 = state_41292;
state_41292 = G__41325;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_41292){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_41292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c))
})();
var state__9320__auto__ = (function (){var statearr_41300 = f__9319__auto__.call(null);
(statearr_41300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_41275,inst_41276,inst_41277,inst_41275__$1,inst_41276__$1,state_val_41288,c__9318__auto___41323,c))
})();
var inst_41278 = inst_41275__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_41277__$1);
var state_41287__$1 = (function (){var statearr_41301 = state_41287;
(statearr_41301[(10)] = inst_41278);

(statearr_41301[(7)] = inst_41275__$1);

(statearr_41301[(8)] = inst_41276__$1);

(statearr_41301[(9)] = inst_41277__$1);

return statearr_41301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41287__$1,(2),inst_41276__$1);
} else {
if((state_val_41288 === (2))){
var inst_41278 = (state_41287[(10)]);
var inst_41275 = (state_41287[(7)]);
var inst_41276 = (state_41287[(8)]);
var inst_41277 = (state_41287[(9)]);
var inst_41280 = (state_41287[(2)]);
var inst_41281 = [cljs.core.str(inst_41280)].join('');
var inst_41282 = parseInt(inst_41281);
var inst_41283 = (function (){var res = inst_41275;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_41276;
var wcc_jammer = inst_41277;
var get_wc = inst_41278;
var lines = inst_41282;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,state_val_41288,c__9318__auto___41323,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,state_val_41288,c__9318__auto___41323,c))
})();
var inst_41284 = (function (){var res = inst_41275;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_41276;
var wcc_jammer = inst_41277;
var get_wc = inst_41278;
var lines = inst_41282;
var close_if_done = inst_41283;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c){
return (function (state_41306){
var state_val_41307 = (state_41306[(1)]);
if((state_val_41307 === (1))){
var state_41306__$1 = state_41306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41306__$1,(2),c,res__$1);
} else {
if((state_val_41307 === (2))){
var inst_41303 = (state_41306[(2)]);
var inst_41304 = close_if_done.call(null);
var state_41306__$1 = (function (){var statearr_41308 = state_41306;
(statearr_41308[(7)] = inst_41303);

return statearr_41308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41306__$1,inst_41304);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_41312 = [null,null,null,null,null,null,null,null];
(statearr_41312[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_41312[(1)] = (1));

return statearr_41312;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_41306){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41313){if((e41313 instanceof Object)){
var ex__9301__auto__ = e41313;
var statearr_41314_41326 = state_41306;
(statearr_41314_41326[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41327 = state_41306;
state_41306 = G__41327;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_41306){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_41306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c))
})();
var state__9320__auto__ = (function (){var statearr_41315 = f__9319__auto__.call(null);
(statearr_41315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_41315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_41278,inst_41275,inst_41276,inst_41277,inst_41280,inst_41281,inst_41282,inst_41283,state_val_41288,c__9318__auto___41323,c))
})();
var inst_41285 = inst_41275.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_41284);
var state_41287__$1 = state_41287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41287__$1,inst_41285);
} else {
return null;
}
}
});})(c__9318__auto___41323,c))
;
return ((function (switch__9297__auto__,c__9318__auto___41323,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_41319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41319[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_41319[(1)] = (1));

return statearr_41319;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_41287){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41320){if((e41320 instanceof Object)){
var ex__9301__auto__ = e41320;
var statearr_41321_41328 = state_41287;
(statearr_41321_41328[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41329 = state_41287;
state_41287 = G__41329;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_41287){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_41287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___41323,c))
})();
var state__9320__auto__ = (function (){var statearr_41322 = f__9319__auto__.call(null);
(statearr_41322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___41323);

return statearr_41322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___41323,c))
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
var len__7018__auto___41331 = arguments.length;
var i__7019__auto___41332 = (0);
while(true){
if((i__7019__auto___41332 < len__7018__auto___41331)){
args__7025__auto__.push((arguments[i__7019__auto___41332]));

var G__41333 = (i__7019__auto___41332 + (1));
i__7019__auto___41332 = G__41333;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq41330){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41330));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map