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
return (function (state_22365){
var state_val_22366 = (state_22365[(1)]);
if((state_val_22366 === (1))){
var state_22365__$1 = state_22365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22365__$1,(2),c,arg);
} else {
if((state_val_22366 === (2))){
var inst_22363 = (state_22365[(2)]);
var state_22365__$1 = state_22365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22365__$1,inst_22363);
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
var statearr_22370 = [null,null,null,null,null,null,null];
(statearr_22370[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_22370[(1)] = (1));

return statearr_22370;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_22365){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22371){if((e22371 instanceof Object)){
var ex__9301__auto__ = e22371;
var statearr_22372_22374 = state_22365;
(statearr_22372_22374[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22375 = state_22365;
state_22365 = G__22375;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_22365){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_22365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22373 = f__9319__auto__.call(null);
(statearr_22373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22373;
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
return (function (state_22391){
var state_val_22392 = (state_22391[(1)]);
if((state_val_22392 === (1))){
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22391__$1,(2),c,arg);
} else {
if((state_val_22392 === (2))){
var inst_22389 = (state_22391[(2)]);
var state_22391__$1 = state_22391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22391__$1,inst_22389);
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
var statearr_22396 = [null,null,null,null,null,null,null];
(statearr_22396[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_22396[(1)] = (1));

return statearr_22396;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_22391){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22397){if((e22397 instanceof Object)){
var ex__9301__auto__ = e22397;
var statearr_22398_22400 = state_22391;
(statearr_22398_22400[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22401 = state_22391;
state_22391 = G__22401;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_22391){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_22391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22399 = f__9319__auto__.call(null);
(statearr_22399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22399;
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
return (function (state_22478){
var state_val_22479 = (state_22478[(1)]);
if((state_val_22479 === (1))){
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22478__$1,(2),input_chan);
} else {
if((state_val_22479 === (2))){
var inst_22456 = (state_22478[(2)]);
var inst_22457 = inst_22456;
var state_22478__$1 = (function (){var statearr_22480 = state_22478;
(statearr_22480[(7)] = inst_22457);

return statearr_22480;
})();
var statearr_22481_22508 = state_22478__$1;
(statearr_22481_22508[(2)] = null);

(statearr_22481_22508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (3))){
var inst_22457 = (state_22478[(7)]);
var inst_22459 = cljs.core.count.call(null,inst_22457);
var inst_22460 = cljs.core._EQ_.call(null,inst_22459,(0));
var state_22478__$1 = state_22478;
if(inst_22460){
var statearr_22482_22509 = state_22478__$1;
(statearr_22482_22509[(1)] = (5));

} else {
var statearr_22483_22510 = state_22478__$1;
(statearr_22483_22510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (4))){
var inst_22476 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22478__$1,inst_22476);
} else {
if((state_val_22479 === (5))){
var inst_22462 = cljs.core.println.call(null,"done");
var state_22478__$1 = state_22478;
var statearr_22484_22511 = state_22478__$1;
(statearr_22484_22511[(2)] = inst_22462);

(statearr_22484_22511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (6))){
var inst_22457 = (state_22478[(7)]);
var inst_22464 = cljs.core.async.chan.call(null);
var inst_22465 = cljs.core.first.call(null,inst_22457);
var inst_22466 = (function (){var v = inst_22457;
var rc = inst_22464;
var cmd = inst_22465;
return ((function (v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__){
return (function (state_22488){
var state_val_22489 = (state_22488[(1)]);
if((state_val_22489 === (1))){
var state_22488__$1 = state_22488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22488__$1,(2),rc,res);
} else {
if((state_val_22489 === (2))){
var inst_22486 = (state_22488[(2)]);
var state_22488__$1 = state_22488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22488__$1,inst_22486);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_22493 = [null,null,null,null,null,null,null];
(statearr_22493[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_22493[(1)] = (1));

return statearr_22493;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_22488){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22494){if((e22494 instanceof Object)){
var ex__9301__auto__ = e22494;
var statearr_22495_22512 = state_22488;
(statearr_22495_22512[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22513 = state_22488;
state_22488 = G__22513;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_22488){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_22488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22496 = f__9319__auto__.call(null);
(statearr_22496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_22496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_22457,inst_22464,inst_22465,state_val_22479,c__9318__auto__))
})();
var inst_22467 = drop_dot.core.pure_js.execAndPrint(inst_22465,inst_22466);
var state_22478__$1 = (function (){var statearr_22497 = state_22478;
(statearr_22497[(8)] = inst_22467);

return statearr_22497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22478__$1,(8),inst_22464);
} else {
if((state_val_22479 === (7))){
var inst_22474 = (state_22478[(2)]);
var state_22478__$1 = state_22478;
var statearr_22498_22514 = state_22478__$1;
(statearr_22498_22514[(2)] = inst_22474);

(statearr_22498_22514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22479 === (8))){
var inst_22457 = (state_22478[(7)]);
var inst_22469 = (state_22478[(2)]);
var inst_22470 = cljs.core.rest.call(null,inst_22457);
var inst_22471 = cljs.core.vec.call(null,inst_22470);
var inst_22457__$1 = inst_22471;
var state_22478__$1 = (function (){var statearr_22499 = state_22478;
(statearr_22499[(9)] = inst_22469);

(statearr_22499[(7)] = inst_22457__$1);

return statearr_22499;
})();
var statearr_22500_22515 = state_22478__$1;
(statearr_22500_22515[(2)] = null);

(statearr_22500_22515[(1)] = (3));


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
var statearr_22504 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22504[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_22504[(1)] = (1));

return statearr_22504;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_22478){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22505){if((e22505 instanceof Object)){
var ex__9301__auto__ = e22505;
var statearr_22506_22516 = state_22478;
(statearr_22506_22516[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22517 = state_22478;
state_22478 = G__22517;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_22478){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_22478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22507 = f__9319__auto__.call(null);
(statearr_22507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22507;
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
return (function (state_22529){
var state_val_22530 = (state_22529[(1)]);
if((state_val_22530 === (1))){
var state_22529__$1 = state_22529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22529__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_22534 = [null,null,null,null,null,null,null];
(statearr_22534[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_22534[(1)] = (1));

return statearr_22534;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_22529){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22535){if((e22535 instanceof Object)){
var ex__9301__auto__ = e22535;
var statearr_22536_22538 = state_22529;
(statearr_22536_22538[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22539 = state_22529;
state_22529 = G__22539;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_22529){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_22529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_22537 = f__9319__auto__.call(null);
(statearr_22537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,c))
);

return c__9318__auto__;
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
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,res,d){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,res,d){
return (function (state_22555){
var state_val_22556 = (state_22555[(1)]);
if((state_val_22556 === (1))){
var state_22555__$1 = state_22555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22555__$1,(2),d,res__$1);
} else {
if((state_val_22556 === (2))){
var inst_22553 = (state_22555[(2)]);
var state_22555__$1 = state_22555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22555__$1,inst_22553);
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
var statearr_22560 = [null,null,null,null,null,null,null];
(statearr_22560[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_22560[(1)] = (1));

return statearr_22560;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_22555){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22561){if((e22561 instanceof Object)){
var ex__9301__auto__ = e22561;
var statearr_22562_22564 = state_22555;
(statearr_22562_22564[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22565 = state_22555;
state_22555 = G__22565;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_22555){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_22555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_22563 = f__9319__auto__.call(null);
(statearr_22563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22563;
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
return (function (state_22593){
var state_val_22594 = (state_22593[(1)]);
if((state_val_22594 === (1))){
var inst_22586 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_22593__$1 = state_22593;
if(cljs.core.truth_(inst_22586)){
var statearr_22595_22606 = state_22593__$1;
(statearr_22595_22606[(1)] = (2));

} else {
var statearr_22596_22607 = state_22593__$1;
(statearr_22596_22607[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (2))){
var state_22593__$1 = state_22593;
var statearr_22597_22608 = state_22593__$1;
(statearr_22597_22608[(2)] = line);

(statearr_22597_22608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (3))){
var inst_22589 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_22593__$1 = state_22593;
var statearr_22598_22609 = state_22593__$1;
(statearr_22598_22609[(2)] = inst_22589);

(statearr_22598_22609[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22594 === (4))){
var inst_22591 = (state_22593[(2)]);
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22593__$1,inst_22591);
} else {
return null;
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
var statearr_22602 = [null,null,null,null,null,null,null];
(statearr_22602[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_22602[(1)] = (1));

return statearr_22602;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_22593){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22603){if((e22603 instanceof Object)){
var ex__9301__auto__ = e22603;
var statearr_22604_22610 = state_22593;
(statearr_22604_22610[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22611 = state_22593;
state_22593 = G__22611;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22605 = f__9319__auto__.call(null);
(statearr_22605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22605;
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
return (function (state_22676){
var state_val_22677 = (state_22676[(1)]);
if((state_val_22677 === (1))){
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22676__$1,(2),chan_verified_path);
} else {
if((state_val_22677 === (2))){
var inst_22665 = (state_22676[(7)]);
var inst_22665__$1 = (state_22676[(2)]);
var inst_22666 = (function (){var verified_path = inst_22665__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function (state_22681){
var state_val_22682 = (state_22681[(1)]);
if((state_val_22682 === (1))){
var state_22681__$1 = state_22681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22681__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_22682 === (2))){
var inst_22679 = (state_22681[(2)]);
var state_22681__$1 = state_22681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22681__$1,inst_22679);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_22686 = [null,null,null,null,null,null,null];
(statearr_22686[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_22686[(1)] = (1));

return statearr_22686;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_22681){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22687){if((e22687 instanceof Object)){
var ex__9301__auto__ = e22687;
var statearr_22688_22716 = state_22681;
(statearr_22688_22716[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22717 = state_22681;
state_22681 = G__22717;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_22681){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_22681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22689 = f__9319__auto__.call(null);
(statearr_22689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_22689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function (state_22694){
var state_val_22695 = (state_22694[(1)]);
if((state_val_22695 === (1))){
var inst_22690 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22694__$1,(2),drop_dot.core.c,inst_22690);
} else {
if((state_val_22695 === (2))){
var inst_22692 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22694__$1,inst_22692);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_22699 = [null,null,null,null,null,null,null];
(statearr_22699[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_22699[(1)] = (1));

return statearr_22699;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_22694){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22700){if((e22700 instanceof Object)){
var ex__9301__auto__ = e22700;
var statearr_22701_22718 = state_22694;
(statearr_22701_22718[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22719 = state_22694;
state_22694 = G__22719;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_22694){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_22694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22702 = f__9319__auto__.call(null);
(statearr_22702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_22702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_22665,inst_22665__$1,state_val_22677,c__9318__auto__))
})();
var inst_22667 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_22665__$1);
var state_22676__$1 = (function (){var statearr_22703 = state_22676;
(statearr_22703[(7)] = inst_22665__$1);

(statearr_22703[(8)] = inst_22666);

return statearr_22703;
})();
if(cljs.core.truth_(inst_22667)){
var statearr_22704_22720 = state_22676__$1;
(statearr_22704_22720[(1)] = (3));

} else {
var statearr_22705_22721 = state_22676__$1;
(statearr_22705_22721[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (3))){
var inst_22665 = (state_22676[(7)]);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22676__$1,(6),cljs.core.async.chan,inst_22665);
} else {
if((state_val_22677 === (4))){
var inst_22665 = (state_22676[(7)]);
var inst_22666 = (state_22676[(8)]);
var inst_22672 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_22665,inst_22666);
var state_22676__$1 = state_22676;
var statearr_22706_22722 = state_22676__$1;
(statearr_22706_22722[(2)] = inst_22672);

(statearr_22706_22722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (5))){
var inst_22674 = (state_22676[(2)]);
var state_22676__$1 = (function (){var statearr_22707 = state_22676;
(statearr_22707[(9)] = inst_22674);

return statearr_22707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22676__$1,cljs.core.async.chan);
} else {
if((state_val_22677 === (6))){
var inst_22670 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22708_22723 = state_22676__$1;
(statearr_22708_22723[(2)] = inst_22670);

(statearr_22708_22723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_22712 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22712[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_22712[(1)] = (1));

return statearr_22712;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_22676){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22713){if((e22713 instanceof Object)){
var ex__9301__auto__ = e22713;
var statearr_22714_22724 = state_22676;
(statearr_22714_22724[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22725 = state_22676;
state_22676 = G__22725;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_22676){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_22676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22715 = f__9319__auto__.call(null);
(statearr_22715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22715;
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
return (function (state_22760){
var state_val_22761 = (state_22760[(1)]);
if((state_val_22761 === (1))){
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22760__$1,(2),c);
} else {
if((state_val_22761 === (2))){
var inst_22751 = (state_22760[(7)]);
var inst_22751__$1 = (state_22760[(2)]);
var inst_22752 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_22751__$1);
var state_22760__$1 = (function (){var statearr_22762 = state_22760;
(statearr_22762[(7)] = inst_22751__$1);

return statearr_22762;
})();
if(cljs.core.truth_(inst_22752)){
var statearr_22763_22774 = state_22760__$1;
(statearr_22763_22774[(1)] = (3));

} else {
var statearr_22764_22775 = state_22760__$1;
(statearr_22764_22775[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22761 === (3))){
var inst_22751 = (state_22760[(7)]);
var inst_22754 = cljs.core.println.call(null,inst_22751);
var state_22760__$1 = state_22760;
var statearr_22765_22776 = state_22760__$1;
(statearr_22765_22776[(2)] = inst_22754);

(statearr_22765_22776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22761 === (4))){
var inst_22751 = (state_22760[(7)]);
var inst_22756 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_22751);
var state_22760__$1 = state_22760;
var statearr_22766_22777 = state_22760__$1;
(statearr_22766_22777[(2)] = inst_22756);

(statearr_22766_22777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22761 === (5))){
var inst_22758 = (state_22760[(2)]);
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22760__$1,inst_22758);
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
var statearr_22770 = [null,null,null,null,null,null,null,null];
(statearr_22770[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_22770[(1)] = (1));

return statearr_22770;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_22760){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22771){if((e22771 instanceof Object)){
var ex__9301__auto__ = e22771;
var statearr_22772_22778 = state_22760;
(statearr_22772_22778[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22779 = state_22760;
state_22760 = G__22779;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_22760){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_22760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22773 = f__9319__auto__.call(null);
(statearr_22773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_a_chan_verified_linkee.call(null,drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_22859){
var state_val_22860 = (state_22859[(1)]);
if((state_val_22860 === (7))){
var inst_22854 = (state_22859[(2)]);
var inst_22855 = cljs.core.println.call(null,"done");
var state_22859__$1 = (function (){var statearr_22862 = state_22859;
(statearr_22862[(7)] = inst_22854);

return statearr_22862;
})();
var statearr_22863_22888 = state_22859__$1;
(statearr_22863_22888[(2)] = inst_22855);

(statearr_22863_22888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (1))){
var inst_22834 = chan_config;
var state_22859__$1 = (function (){var statearr_22864 = state_22859;
(statearr_22864[(8)] = inst_22834);

return statearr_22864;
})();
var statearr_22865_22889 = state_22859__$1;
(statearr_22865_22889[(2)] = null);

(statearr_22865_22889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (4))){
var inst_22837 = (state_22859[(9)]);
var inst_22837__$1 = (state_22859[(2)]);
var state_22859__$1 = (function (){var statearr_22866 = state_22859;
(statearr_22866[(9)] = inst_22837__$1);

return statearr_22866;
})();
if(cljs.core.truth_(inst_22837__$1)){
var statearr_22867_22890 = state_22859__$1;
(statearr_22867_22890[(1)] = (5));

} else {
var statearr_22868_22891 = state_22859__$1;
(statearr_22868_22891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (13))){
var inst_22834 = (state_22859[(8)]);
var inst_22850 = (state_22859[(2)]);
var tmp22861 = inst_22834;
var inst_22834__$1 = tmp22861;
var state_22859__$1 = (function (){var statearr_22869 = state_22859;
(statearr_22869[(10)] = inst_22850);

(statearr_22869[(8)] = inst_22834__$1);

return statearr_22869;
})();
var statearr_22870_22892 = state_22859__$1;
(statearr_22870_22892[(2)] = null);

(statearr_22870_22892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (6))){
var state_22859__$1 = state_22859;
var statearr_22871_22893 = state_22859__$1;
(statearr_22871_22893[(2)] = null);

(statearr_22871_22893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (3))){
var inst_22857 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22859__$1,inst_22857);
} else {
if((state_val_22860 === (12))){
var state_22859__$1 = state_22859;
var statearr_22872_22894 = state_22859__$1;
(statearr_22872_22894[(2)] = null);

(statearr_22872_22894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (2))){
var inst_22834 = (state_22859[(8)]);
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22859__$1,(4),inst_22834);
} else {
if((state_val_22860 === (11))){
var inst_22837 = (state_22859[(9)]);
var inst_22847 = drop_dot.core.link_line.call(null,inst_22837);
var state_22859__$1 = state_22859;
var statearr_22873_22895 = state_22859__$1;
(statearr_22873_22895[(2)] = inst_22847);

(statearr_22873_22895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (9))){
var state_22859__$1 = state_22859;
var statearr_22874_22896 = state_22859__$1;
(statearr_22874_22896[(2)] = null);

(statearr_22874_22896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (5))){
var inst_22839 = cljs.core._EQ_.call(null,cmd,"drop");
var state_22859__$1 = state_22859;
if(inst_22839){
var statearr_22875_22897 = state_22859__$1;
(statearr_22875_22897[(1)] = (8));

} else {
var statearr_22876_22898 = state_22859__$1;
(statearr_22876_22898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (10))){
var inst_22844 = (state_22859[(2)]);
var inst_22845 = cljs.core._EQ_.call(null,cmd,"link");
var state_22859__$1 = (function (){var statearr_22877 = state_22859;
(statearr_22877[(11)] = inst_22844);

return statearr_22877;
})();
if(inst_22845){
var statearr_22878_22899 = state_22859__$1;
(statearr_22878_22899[(1)] = (11));

} else {
var statearr_22879_22900 = state_22859__$1;
(statearr_22879_22900[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22860 === (8))){
var inst_22837 = (state_22859[(9)]);
var inst_22841 = drop_dot.core.drop_line.call(null,inst_22837);
var state_22859__$1 = state_22859;
var statearr_22880_22901 = state_22859__$1;
(statearr_22880_22901[(2)] = inst_22841);

(statearr_22880_22901[(1)] = (10));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_22884 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22884[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_22884[(1)] = (1));

return statearr_22884;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_22859){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22885){if((e22885 instanceof Object)){
var ex__9301__auto__ = e22885;
var statearr_22886_22902 = state_22859;
(statearr_22886_22902[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22903 = state_22859;
state_22859 = G__22903;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_22859){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_22859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_22887 = f__9319__auto__.call(null);
(statearr_22887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_22887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___23000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___23000,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___23000,c){
return (function (state_22964){
var state_val_22965 = (state_22964[(1)]);
if((state_val_22965 === (1))){
var inst_22952 = (state_22964[(7)]);
var inst_22954 = (state_22964[(8)]);
var inst_22953 = (state_22964[(9)]);
var inst_22952__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_22953__$1 = cljs.core.async.chan.call(null,(1));
var inst_22954__$1 = (function (){var res = inst_22952__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_22953__$1;
return ((function (res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c){
return (function (state_22969){
var state_val_22970 = (state_22969[(1)]);
if((state_val_22970 === (1))){
var state_22969__$1 = state_22969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22969__$1,(2),wcc,res__$1);
} else {
if((state_val_22970 === (2))){
var inst_22967 = (state_22969[(2)]);
var state_22969__$1 = state_22969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22969__$1,inst_22967);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_22974 = [null,null,null,null,null,null,null];
(statearr_22974[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_22974[(1)] = (1));

return statearr_22974;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_22969){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22975){if((e22975 instanceof Object)){
var ex__9301__auto__ = e22975;
var statearr_22976_23001 = state_22969;
(statearr_22976_23001[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23002 = state_22969;
state_22969 = G__23002;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_22969){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_22969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c))
})();
var state__9320__auto__ = (function (){var statearr_22977 = f__9319__auto__.call(null);
(statearr_22977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_22977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_22952,inst_22954,inst_22953,inst_22952__$1,inst_22953__$1,state_val_22965,c__9318__auto___23000,c))
})();
var inst_22955 = inst_22952__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_22954__$1);
var state_22964__$1 = (function (){var statearr_22978 = state_22964;
(statearr_22978[(7)] = inst_22952__$1);

(statearr_22978[(8)] = inst_22954__$1);

(statearr_22978[(10)] = inst_22955);

(statearr_22978[(9)] = inst_22953__$1);

return statearr_22978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22964__$1,(2),inst_22953__$1);
} else {
if((state_val_22965 === (2))){
var inst_22952 = (state_22964[(7)]);
var inst_22954 = (state_22964[(8)]);
var inst_22955 = (state_22964[(10)]);
var inst_22953 = (state_22964[(9)]);
var inst_22957 = (state_22964[(2)]);
var inst_22958 = [cljs.core.str(inst_22957)].join('');
var inst_22959 = parseInt(inst_22958);
var inst_22960 = (function (){var res = inst_22952;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_22953;
var wcc_jammer = inst_22954;
var get_wc = inst_22955;
var lines = inst_22959;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,state_val_22965,c__9318__auto___23000,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,state_val_22965,c__9318__auto___23000,c))
})();
var inst_22961 = (function (){var res = inst_22952;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_22953;
var wcc_jammer = inst_22954;
var get_wc = inst_22955;
var lines = inst_22959;
var close_if_done = inst_22960;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c){
return (function (state_22983){
var state_val_22984 = (state_22983[(1)]);
if((state_val_22984 === (1))){
var state_22983__$1 = state_22983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22983__$1,(2),c,res__$1);
} else {
if((state_val_22984 === (2))){
var inst_22980 = (state_22983[(2)]);
var inst_22981 = close_if_done.call(null);
var state_22983__$1 = (function (){var statearr_22985 = state_22983;
(statearr_22985[(7)] = inst_22980);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22983__$1,inst_22981);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_22989 = [null,null,null,null,null,null,null,null];
(statearr_22989[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_22989[(1)] = (1));

return statearr_22989;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_22983){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22990){if((e22990 instanceof Object)){
var ex__9301__auto__ = e22990;
var statearr_22991_23003 = state_22983;
(statearr_22991_23003[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23004 = state_22983;
state_22983 = G__23004;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_22983){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_22983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c))
})();
var state__9320__auto__ = (function (){var statearr_22992 = f__9319__auto__.call(null);
(statearr_22992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_22992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_22952,inst_22954,inst_22955,inst_22953,inst_22957,inst_22958,inst_22959,inst_22960,state_val_22965,c__9318__auto___23000,c))
})();
var inst_22962 = inst_22952.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_22961);
var state_22964__$1 = state_22964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22964__$1,inst_22962);
} else {
return null;
}
}
});})(c__9318__auto___23000,c))
;
return ((function (switch__9297__auto__,c__9318__auto___23000,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_22996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22996[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_22996[(1)] = (1));

return statearr_22996;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_22964){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_22964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e22997){if((e22997 instanceof Object)){
var ex__9301__auto__ = e22997;
var statearr_22998_23005 = state_22964;
(statearr_22998_23005[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23006 = state_22964;
state_22964 = G__23006;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_22964){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_22964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___23000,c))
})();
var state__9320__auto__ = (function (){var statearr_22999 = f__9319__auto__.call(null);
(statearr_22999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___23000);

return statearr_22999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___23000,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___23008 = arguments.length;
var i__7019__auto___23009 = (0);
while(true){
if((i__7019__auto___23009 < len__7018__auto___23008)){
args__7025__auto__.push((arguments[i__7019__auto___23009]));

var G__23010 = (i__7019__auto___23009 + (1));
i__7019__auto___23009 = G__23010;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq23007){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23007));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map