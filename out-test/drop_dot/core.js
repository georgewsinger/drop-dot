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
return (function (state_37498){
var state_val_37499 = (state_37498[(1)]);
if((state_val_37499 === (1))){
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37498__$1,(2),c,arg);
} else {
if((state_val_37499 === (2))){
var inst_37496 = (state_37498[(2)]);
var state_37498__$1 = state_37498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37498__$1,inst_37496);
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
var statearr_37503 = [null,null,null,null,null,null,null];
(statearr_37503[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__);

(statearr_37503[(1)] = (1));

return statearr_37503;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____1 = (function (state_37498){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37504){if((e37504 instanceof Object)){
var ex__8291__auto__ = e37504;
var statearr_37505_37507 = state_37498;
(statearr_37505_37507[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37508 = state_37498;
state_37498 = G__37508;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__ = function(state_37498){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____1.call(this,state_37498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37506 = f__8309__auto__.call(null);
(statearr_37506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37506;
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
return (function (state_37524){
var state_val_37525 = (state_37524[(1)]);
if((state_val_37525 === (1))){
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37524__$1,(2),c,arg);
} else {
if((state_val_37525 === (2))){
var inst_37522 = (state_37524[(2)]);
var state_37524__$1 = state_37524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37524__$1,inst_37522);
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
var statearr_37529 = [null,null,null,null,null,null,null];
(statearr_37529[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__);

(statearr_37529[(1)] = (1));

return statearr_37529;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____1 = (function (state_37524){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37530){if((e37530 instanceof Object)){
var ex__8291__auto__ = e37530;
var statearr_37531_37533 = state_37524;
(statearr_37531_37533[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37534 = state_37524;
state_37524 = G__37534;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__ = function(state_37524){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____1.call(this,state_37524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37532 = f__8309__auto__.call(null);
(statearr_37532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37532;
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
return (function (state_37611){
var state_val_37612 = (state_37611[(1)]);
if((state_val_37612 === (1))){
var state_37611__$1 = state_37611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37611__$1,(2),input_chan);
} else {
if((state_val_37612 === (2))){
var inst_37589 = (state_37611[(2)]);
var inst_37590 = inst_37589;
var state_37611__$1 = (function (){var statearr_37613 = state_37611;
(statearr_37613[(7)] = inst_37590);

return statearr_37613;
})();
var statearr_37614_37641 = state_37611__$1;
(statearr_37614_37641[(2)] = null);

(statearr_37614_37641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37612 === (3))){
var inst_37590 = (state_37611[(7)]);
var inst_37592 = cljs.core.count.call(null,inst_37590);
var inst_37593 = cljs.core._EQ_.call(null,inst_37592,(0));
var state_37611__$1 = state_37611;
if(inst_37593){
var statearr_37615_37642 = state_37611__$1;
(statearr_37615_37642[(1)] = (5));

} else {
var statearr_37616_37643 = state_37611__$1;
(statearr_37616_37643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37612 === (4))){
var inst_37609 = (state_37611[(2)]);
var state_37611__$1 = state_37611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37611__$1,inst_37609);
} else {
if((state_val_37612 === (5))){
var inst_37595 = cljs.core.println.call(null,"done");
var state_37611__$1 = state_37611;
var statearr_37617_37644 = state_37611__$1;
(statearr_37617_37644[(2)] = inst_37595);

(statearr_37617_37644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37612 === (6))){
var inst_37590 = (state_37611[(7)]);
var inst_37597 = cljs.core.async.chan.call(null);
var inst_37598 = cljs.core.first.call(null,inst_37590);
var inst_37599 = (function (){var v = inst_37590;
var rc = inst_37597;
var cmd = inst_37598;
return ((function (v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__){
return (function (res){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__){
return (function (state_37621){
var state_val_37622 = (state_37621[(1)]);
if((state_val_37622 === (1))){
var state_37621__$1 = state_37621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37621__$1,(2),rc,res);
} else {
if((state_val_37622 === (2))){
var inst_37619 = (state_37621[(2)]);
var state_37621__$1 = state_37621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37621__$1,inst_37619);
} else {
return null;
}
}
});})(c__8308__auto____$1,v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0 = (function (){
var statearr_37626 = [null,null,null,null,null,null,null];
(statearr_37626[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__);

(statearr_37626[(1)] = (1));

return statearr_37626;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1 = (function (state_37621){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37627){if((e37627 instanceof Object)){
var ex__8291__auto__ = e37627;
var statearr_37628_37645 = state_37621;
(statearr_37628_37645[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37646 = state_37621;
state_37621 = G__37646;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = function(state_37621){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1.call(this,state_37621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37629 = f__8309__auto__.call(null);
(statearr_37629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_37629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__))
);

return c__8308__auto____$1;
});
;})(v,rc,cmd,inst_37590,inst_37597,inst_37598,state_val_37612,c__8308__auto__))
})();
var inst_37600 = drop_dot.core.pure_js.execAndPrint(inst_37598,inst_37599);
var state_37611__$1 = (function (){var statearr_37630 = state_37611;
(statearr_37630[(8)] = inst_37600);

return statearr_37630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37611__$1,(8),inst_37597);
} else {
if((state_val_37612 === (7))){
var inst_37607 = (state_37611[(2)]);
var state_37611__$1 = state_37611;
var statearr_37631_37647 = state_37611__$1;
(statearr_37631_37647[(2)] = inst_37607);

(statearr_37631_37647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37612 === (8))){
var inst_37590 = (state_37611[(7)]);
var inst_37602 = (state_37611[(2)]);
var inst_37603 = cljs.core.rest.call(null,inst_37590);
var inst_37604 = cljs.core.vec.call(null,inst_37603);
var inst_37590__$1 = inst_37604;
var state_37611__$1 = (function (){var statearr_37632 = state_37611;
(statearr_37632[(7)] = inst_37590__$1);

(statearr_37632[(9)] = inst_37602);

return statearr_37632;
})();
var statearr_37633_37648 = state_37611__$1;
(statearr_37633_37648[(2)] = null);

(statearr_37633_37648[(1)] = (3));


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
var statearr_37637 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37637[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__);

(statearr_37637[(1)] = (1));

return statearr_37637;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1 = (function (state_37611){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37638){if((e37638 instanceof Object)){
var ex__8291__auto__ = e37638;
var statearr_37639_37649 = state_37611;
(statearr_37639_37649[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37650 = state_37611;
state_37611 = G__37650;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__ = function(state_37611){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1.call(this,state_37611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37640 = f__8309__auto__.call(null);
(statearr_37640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37640;
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
return (function (state_37662){
var state_val_37663 = (state_37662[(1)]);
if((state_val_37663 === (1))){
var state_37662__$1 = state_37662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37662__$1,v);
} else {
return null;
}
});})(c__8308__auto__,c))
;
return ((function (switch__8287__auto__,c__8308__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____0 = (function (){
var statearr_37667 = [null,null,null,null,null,null,null];
(statearr_37667[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__);

(statearr_37667[(1)] = (1));

return statearr_37667;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____1 = (function (state_37662){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37668){if((e37668 instanceof Object)){
var ex__8291__auto__ = e37668;
var statearr_37669_37671 = state_37662;
(statearr_37669_37671[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37672 = state_37662;
state_37662 = G__37672;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__ = function(state_37662){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____1.call(this,state_37662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,c))
})();
var state__8310__auto__ = (function (){var statearr_37670 = f__8309__auto__.call(null);
(statearr_37670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37670;
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
return (function (state_37688){
var state_val_37689 = (state_37688[(1)]);
if((state_val_37689 === (1))){
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37688__$1,(2),d,res__$1);
} else {
if((state_val_37689 === (2))){
var inst_37686 = (state_37688[(2)]);
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37688__$1,inst_37686);
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
var statearr_37693 = [null,null,null,null,null,null,null];
(statearr_37693[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__);

(statearr_37693[(1)] = (1));

return statearr_37693;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____1 = (function (state_37688){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37694){if((e37694 instanceof Object)){
var ex__8291__auto__ = e37694;
var statearr_37695_37697 = state_37688;
(statearr_37695_37697[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37698 = state_37688;
state_37688 = G__37698;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__ = function(state_37688){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____1.call(this,state_37688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,res,d))
})();
var state__8310__auto__ = (function (){var statearr_37696 = f__8309__auto__.call(null);
(statearr_37696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37696;
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
return (function (state_37730){
var state_val_37731 = (state_37730[(1)]);
if((state_val_37731 === (1))){
var inst_37721 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_37730__$1 = state_37730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37730__$1,(2),inst_37721);
} else {
if((state_val_37731 === (2))){
var inst_37723 = (state_37730[(2)]);
var state_37730__$1 = state_37730;
if(cljs.core.truth_(inst_37723)){
var statearr_37732_37743 = state_37730__$1;
(statearr_37732_37743[(1)] = (3));

} else {
var statearr_37733_37744 = state_37730__$1;
(statearr_37733_37744[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37731 === (3))){
var state_37730__$1 = state_37730;
var statearr_37734_37745 = state_37730__$1;
(statearr_37734_37745[(2)] = line);

(statearr_37734_37745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37731 === (4))){
var inst_37726 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_37730__$1 = state_37730;
var statearr_37735_37746 = state_37730__$1;
(statearr_37735_37746[(2)] = inst_37726);

(statearr_37735_37746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37731 === (5))){
var inst_37728 = (state_37730[(2)]);
var state_37730__$1 = state_37730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37730__$1,inst_37728);
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
var statearr_37739 = [null,null,null,null,null,null,null];
(statearr_37739[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__);

(statearr_37739[(1)] = (1));

return statearr_37739;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____1 = (function (state_37730){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37740){if((e37740 instanceof Object)){
var ex__8291__auto__ = e37740;
var statearr_37741_37747 = state_37730;
(statearr_37741_37747[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37748 = state_37730;
state_37730 = G__37748;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__ = function(state_37730){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____1.call(this,state_37730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37742 = f__8309__auto__.call(null);
(statearr_37742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37742;
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
return (function (state_37819){
var state_val_37820 = (state_37819[(1)]);
if((state_val_37820 === (1))){
var state_37819__$1 = state_37819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37819__$1,(2),chan_verified_path);
} else {
if((state_val_37820 === (2))){
var inst_37806 = (state_37819[(7)]);
var inst_37805 = (state_37819[(8)]);
var inst_37805__$1 = (state_37819[(2)]);
var inst_37806__$1 = cljs.core.async.chan.call(null,(1));
var inst_37807 = (function (){var verified_path = inst_37805__$1;
var rc = inst_37806__$1;
return ((function (verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function (state_37825){
var state_val_37826 = (state_37825[(1)]);
if((state_val_37826 === (1))){
var inst_37821 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_37825__$1 = state_37825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37825__$1,(2),rc,inst_37821);
} else {
if((state_val_37826 === (2))){
var inst_37823 = (state_37825[(2)]);
var state_37825__$1 = state_37825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37825__$1,inst_37823);
} else {
return null;
}
}
});})(c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0 = (function (){
var statearr_37830 = [null,null,null,null,null,null,null];
(statearr_37830[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_37830[(1)] = (1));

return statearr_37830;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_37825){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37831){if((e37831 instanceof Object)){
var ex__8291__auto__ = e37831;
var statearr_37832_37859 = state_37825;
(statearr_37832_37859[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37860 = state_37825;
state_37825 = G__37860;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_37825){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_37825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37833 = f__8309__auto__.call(null);
(statearr_37833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_37833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
);

return c__8308__auto____$1;
} else {
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function (state_37837){
var state_val_37838 = (state_37837[(1)]);
if((state_val_37838 === (1))){
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37837__$1,(2),rc,verified_path);
} else {
if((state_val_37838 === (2))){
var inst_37835 = (state_37837[(2)]);
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37837__$1,inst_37835);
} else {
return null;
}
}
});})(c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0 = (function (){
var statearr_37842 = [null,null,null,null,null,null,null];
(statearr_37842[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_37842[(1)] = (1));

return statearr_37842;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_37837){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37843){if((e37843 instanceof Object)){
var ex__8291__auto__ = e37843;
var statearr_37844_37861 = state_37837;
(statearr_37844_37861[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37862 = state_37837;
state_37837 = G__37862;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_37837){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_37837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37845 = f__8309__auto__.call(null);
(statearr_37845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_37845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
);

return c__8308__auto____$1;
}
});
;})(verified_path,rc,inst_37806,inst_37805,inst_37805__$1,inst_37806__$1,state_val_37820,c__8308__auto__))
})();
var inst_37808 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_37805__$1);
var state_37819__$1 = (function (){var statearr_37846 = state_37819;
(statearr_37846[(9)] = inst_37807);

(statearr_37846[(7)] = inst_37806__$1);

(statearr_37846[(8)] = inst_37805__$1);

return statearr_37846;
})();
if(cljs.core.truth_(inst_37808)){
var statearr_37847_37863 = state_37819__$1;
(statearr_37847_37863[(1)] = (3));

} else {
var statearr_37848_37864 = state_37819__$1;
(statearr_37848_37864[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (3))){
var inst_37806 = (state_37819[(7)]);
var inst_37805 = (state_37819[(8)]);
var state_37819__$1 = state_37819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37819__$1,(6),inst_37806,inst_37805);
} else {
if((state_val_37820 === (4))){
var inst_37807 = (state_37819[(9)]);
var inst_37805 = (state_37819[(8)]);
var inst_37813 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_37805,inst_37807);
var state_37819__$1 = state_37819;
var statearr_37849_37865 = state_37819__$1;
(statearr_37849_37865[(2)] = inst_37813);

(statearr_37849_37865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (5))){
var inst_37806 = (state_37819[(7)]);
var inst_37815 = (state_37819[(2)]);
var state_37819__$1 = (function (){var statearr_37850 = state_37819;
(statearr_37850[(10)] = inst_37815);

return statearr_37850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37819__$1,(7),inst_37806);
} else {
if((state_val_37820 === (6))){
var inst_37811 = (state_37819[(2)]);
var state_37819__$1 = state_37819;
var statearr_37851_37866 = state_37819__$1;
(statearr_37851_37866[(2)] = inst_37811);

(statearr_37851_37866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (7))){
var inst_37817 = (state_37819[(2)]);
var state_37819__$1 = state_37819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37819__$1,inst_37817);
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
var statearr_37855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37855[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_37855[(1)] = (1));

return statearr_37855;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_37819){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37856){if((e37856 instanceof Object)){
var ex__8291__auto__ = e37856;
var statearr_37857_37867 = state_37819;
(statearr_37857_37867[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37868 = state_37819;
state_37819 = G__37868;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_37819){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_37819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37858 = f__8309__auto__.call(null);
(statearr_37858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37858;
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
return (function (state_37903){
var state_val_37904 = (state_37903[(1)]);
if((state_val_37904 === (1))){
var state_37903__$1 = state_37903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37903__$1,(2),c);
} else {
if((state_val_37904 === (2))){
var inst_37894 = (state_37903[(7)]);
var inst_37894__$1 = (state_37903[(2)]);
var inst_37895 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_37894__$1);
var state_37903__$1 = (function (){var statearr_37905 = state_37903;
(statearr_37905[(7)] = inst_37894__$1);

return statearr_37905;
})();
if(cljs.core.truth_(inst_37895)){
var statearr_37906_37917 = state_37903__$1;
(statearr_37906_37917[(1)] = (3));

} else {
var statearr_37907_37918 = state_37903__$1;
(statearr_37907_37918[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (3))){
var inst_37894 = (state_37903[(7)]);
var inst_37897 = cljs.core.println.call(null,inst_37894);
var state_37903__$1 = state_37903;
var statearr_37908_37919 = state_37903__$1;
(statearr_37908_37919[(2)] = inst_37897);

(statearr_37908_37919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (4))){
var inst_37894 = (state_37903[(7)]);
var inst_37899 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_37894);
var state_37903__$1 = state_37903;
var statearr_37909_37920 = state_37903__$1;
(statearr_37909_37920[(2)] = inst_37899);

(statearr_37909_37920[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (5))){
var inst_37901 = (state_37903[(2)]);
var state_37903__$1 = state_37903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37903__$1,inst_37901);
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
var statearr_37913 = [null,null,null,null,null,null,null,null];
(statearr_37913[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__);

(statearr_37913[(1)] = (1));

return statearr_37913;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____1 = (function (state_37903){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37914){if((e37914 instanceof Object)){
var ex__8291__auto__ = e37914;
var statearr_37915_37921 = state_37903;
(statearr_37915_37921[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37922 = state_37903;
state_37903 = G__37922;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__ = function(state_37903){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____1.call(this,state_37903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_37916 = f__8309__auto__.call(null);
(statearr_37916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
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
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,basename,target_path,rc){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,basename,target_path,rc){
return (function (state_37951){
var state_val_37952 = (state_37951[(1)]);
if((state_val_37952 === (1))){
var state_37951__$1 = state_37951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37951__$1,(2),rc,line);
} else {
if((state_val_37952 === (2))){
var inst_37949 = (state_37951[(2)]);
var state_37951__$1 = state_37951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37951__$1,inst_37949);
} else {
return null;
}
}
});})(c__8308__auto__,basename,target_path,rc))
;
return ((function (switch__8287__auto__,c__8308__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____0 = (function (){
var statearr_37956 = [null,null,null,null,null,null,null];
(statearr_37956[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__);

(statearr_37956[(1)] = (1));

return statearr_37956;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____1 = (function (state_37951){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37957){if((e37957 instanceof Object)){
var ex__8291__auto__ = e37957;
var statearr_37958_37973 = state_37951;
(statearr_37958_37973[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37974 = state_37951;
state_37951 = G__37974;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__ = function(state_37951){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____1.call(this,state_37951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,basename,target_path,rc))
})();
var state__8310__auto__ = (function (){var statearr_37959 = f__8309__auto__.call(null);
(statearr_37959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,basename,target_path,rc))
);

return c__8308__auto__;
} else {
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,basename,target_path,rc){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,basename,target_path,rc){
return (function (state_37964){
var state_val_37965 = (state_37964[(1)]);
if((state_val_37965 === (1))){
var inst_37960 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_37964__$1 = state_37964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37964__$1,(2),rc,inst_37960);
} else {
if((state_val_37965 === (2))){
var inst_37962 = (state_37964[(2)]);
var state_37964__$1 = state_37964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37964__$1,inst_37962);
} else {
return null;
}
}
});})(c__8308__auto__,basename,target_path,rc))
;
return ((function (switch__8287__auto__,c__8308__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____0 = (function (){
var statearr_37969 = [null,null,null,null,null,null,null];
(statearr_37969[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__);

(statearr_37969[(1)] = (1));

return statearr_37969;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____1 = (function (state_37964){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_37964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e37970){if((e37970 instanceof Object)){
var ex__8291__auto__ = e37970;
var statearr_37971_37975 = state_37964;
(statearr_37971_37975[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37976 = state_37964;
state_37964 = G__37976;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__ = function(state_37964){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____1.call(this,state_37964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,basename,target_path,rc))
})();
var state__8310__auto__ = (function (){var statearr_37972 = f__8309__auto__.call(null);
(statearr_37972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_37972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,basename,target_path,rc))
);

return c__8308__auto__;
}
});})(basename,target_path,rc))
;
drop_dot.core.pure_js.pathExists(target_path,cb);

return rc;
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_38038){
var state_val_38039 = (state_38038[(1)]);
if((state_val_38039 === (7))){
var inst_38034 = (state_38038[(2)]);
var state_38038__$1 = state_38038;
var statearr_38040_38061 = state_38038__$1;
(statearr_38040_38061[(2)] = inst_38034);

(statearr_38040_38061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (1))){
var inst_38019 = chan_config;
var state_38038__$1 = (function (){var statearr_38041 = state_38038;
(statearr_38041[(7)] = inst_38019);

return statearr_38041;
})();
var statearr_38042_38062 = state_38038__$1;
(statearr_38042_38062[(2)] = null);

(statearr_38042_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (4))){
var inst_38022 = (state_38038[(8)]);
var inst_38022__$1 = (state_38038[(2)]);
var state_38038__$1 = (function (){var statearr_38043 = state_38038;
(statearr_38043[(8)] = inst_38022__$1);

return statearr_38043;
})();
if(cljs.core.truth_(inst_38022__$1)){
var statearr_38044_38063 = state_38038__$1;
(statearr_38044_38063[(1)] = (5));

} else {
var statearr_38045_38064 = state_38038__$1;
(statearr_38045_38064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (6))){
var state_38038__$1 = state_38038;
var statearr_38046_38065 = state_38038__$1;
(statearr_38046_38065[(2)] = null);

(statearr_38046_38065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (3))){
var inst_38036 = (state_38038[(2)]);
var state_38038__$1 = state_38038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38038__$1,inst_38036);
} else {
if((state_val_38039 === (2))){
var inst_38019 = (state_38038[(7)]);
var state_38038__$1 = state_38038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38038__$1,(4),inst_38019);
} else {
if((state_val_38039 === (9))){
var inst_38022 = (state_38038[(8)]);
var inst_38028 = cljs.core.println.call(null,inst_38022);
var state_38038__$1 = state_38038;
var statearr_38048_38066 = state_38038__$1;
(statearr_38048_38066[(2)] = inst_38028);

(statearr_38048_38066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (5))){
var inst_38024 = cljs.core._EQ_.call(null,cmd,"drop");
var state_38038__$1 = state_38038;
if(inst_38024){
var statearr_38049_38067 = state_38038__$1;
(statearr_38049_38067[(1)] = (8));

} else {
var statearr_38050_38068 = state_38038__$1;
(statearr_38050_38068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (10))){
var inst_38019 = (state_38038[(7)]);
var inst_38030 = (state_38038[(2)]);
var tmp38047 = inst_38019;
var inst_38019__$1 = tmp38047;
var state_38038__$1 = (function (){var statearr_38051 = state_38038;
(statearr_38051[(9)] = inst_38030);

(statearr_38051[(7)] = inst_38019__$1);

return statearr_38051;
})();
var statearr_38052_38069 = state_38038__$1;
(statearr_38052_38069[(2)] = null);

(statearr_38052_38069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (8))){
var inst_38022 = (state_38038[(8)]);
var inst_38026 = drop_dot.core.drop_line.call(null,inst_38022);
var state_38038__$1 = state_38038;
var statearr_38053_38070 = state_38038__$1;
(statearr_38053_38070[(2)] = inst_38026);

(statearr_38053_38070[(1)] = (10));


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
var statearr_38057 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38057[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__);

(statearr_38057[(1)] = (1));

return statearr_38057;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____1 = (function (state_38038){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_38038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e38058){if((e38058 instanceof Object)){
var ex__8291__auto__ = e38058;
var statearr_38059_38071 = state_38038;
(statearr_38059_38071[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38072 = state_38038;
state_38038 = G__38072;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__ = function(state_38038){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____1.call(this,state_38038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_38060 = f__8309__auto__.call(null);
(statearr_38060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_38060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__8308__auto___38169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto___38169,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto___38169,c){
return (function (state_38133){
var state_val_38134 = (state_38133[(1)]);
if((state_val_38134 === (1))){
var inst_38122 = (state_38133[(7)]);
var inst_38123 = (state_38133[(8)]);
var inst_38121 = (state_38133[(9)]);
var inst_38121__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_38122__$1 = cljs.core.async.chan.call(null,(1));
var inst_38123__$1 = (function (){var res = inst_38121__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_38122__$1;
return ((function (res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c){
return (function (error,res__$1){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c){
return (function (state_38138){
var state_val_38139 = (state_38138[(1)]);
if((state_val_38139 === (1))){
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38138__$1,(2),wcc,res__$1);
} else {
if((state_val_38139 === (2))){
var inst_38136 = (state_38138[(2)]);
var state_38138__$1 = state_38138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38138__$1,inst_38136);
} else {
return null;
}
}
});})(c__8308__auto____$1,res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null];
(statearr_38143[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8288__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1 = (function (state_38138){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_38138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e38144){if((e38144 instanceof Object)){
var ex__8291__auto__ = e38144;
var statearr_38145_38170 = state_38138;
(statearr_38145_38170[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38171 = state_38138;
state_38138 = G__38171;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = function(state_38138){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1.call(this,state_38138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c))
})();
var state__8310__auto__ = (function (){var statearr_38146 = f__8309__auto__.call(null);
(statearr_38146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c))
);

return c__8308__auto____$1;
});
;})(res,config_path,wcc,inst_38122,inst_38123,inst_38121,inst_38121__$1,inst_38122__$1,state_val_38134,c__8308__auto___38169,c))
})();
var inst_38124 = inst_38121__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_38123__$1);
var state_38133__$1 = (function (){var statearr_38147 = state_38133;
(statearr_38147[(7)] = inst_38122__$1);

(statearr_38147[(8)] = inst_38123__$1);

(statearr_38147[(9)] = inst_38121__$1);

(statearr_38147[(10)] = inst_38124);

return statearr_38147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38133__$1,(2),inst_38122__$1);
} else {
if((state_val_38134 === (2))){
var inst_38122 = (state_38133[(7)]);
var inst_38123 = (state_38133[(8)]);
var inst_38121 = (state_38133[(9)]);
var inst_38124 = (state_38133[(10)]);
var inst_38126 = (state_38133[(2)]);
var inst_38127 = [cljs.core.str(inst_38126)].join('');
var inst_38128 = parseInt(inst_38127);
var inst_38129 = (function (){var res = inst_38121;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_38122;
var wcc_jammer = inst_38123;
var get_wc = inst_38124;
var lines = inst_38128;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,state_val_38134,c__8308__auto___38169,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,state_val_38134,c__8308__auto___38169,c))
})();
var inst_38130 = (function (){var res = inst_38121;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_38122;
var wcc_jammer = inst_38123;
var get_wc = inst_38124;
var lines = inst_38128;
var close_if_done = inst_38129;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c){
return (function (res__$1){
var c__8308__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c){
return (function (state_38152){
var state_val_38153 = (state_38152[(1)]);
if((state_val_38153 === (1))){
var state_38152__$1 = state_38152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38152__$1,(2),c,res__$1);
} else {
if((state_val_38153 === (2))){
var inst_38149 = (state_38152[(2)]);
var inst_38150 = close_if_done.call(null);
var state_38152__$1 = (function (){var statearr_38154 = state_38152;
(statearr_38154[(7)] = inst_38149);

return statearr_38154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38152__$1,inst_38150);
} else {
return null;
}
}
});})(c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c))
;
return ((function (switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0 = (function (){
var statearr_38158 = [null,null,null,null,null,null,null,null];
(statearr_38158[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8288__auto__);

(statearr_38158[(1)] = (1));

return statearr_38158;
});
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1 = (function (state_38152){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_38152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e38159){if((e38159 instanceof Object)){
var ex__8291__auto__ = e38159;
var statearr_38160_38172 = state_38152;
(statearr_38160_38172[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38173 = state_38152;
state_38152 = G__38173;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = function(state_38152){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1.call(this,state_38152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c))
})();
var state__8310__auto__ = (function (){var statearr_38161 = f__8309__auto__.call(null);
(statearr_38161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto____$1);

return statearr_38161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c))
);

return c__8308__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_38122,inst_38123,inst_38121,inst_38124,inst_38126,inst_38127,inst_38128,inst_38129,state_val_38134,c__8308__auto___38169,c))
})();
var inst_38131 = inst_38121.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_38130);
var state_38133__$1 = state_38133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38133__$1,inst_38131);
} else {
return null;
}
}
});})(c__8308__auto___38169,c))
;
return ((function (switch__8287__auto__,c__8308__auto___38169,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0 = (function (){
var statearr_38165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38165[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8288__auto__);

(statearr_38165[(1)] = (1));

return statearr_38165;
});
var drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1 = (function (state_38133){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_38133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e38166){if((e38166 instanceof Object)){
var ex__8291__auto__ = e38166;
var statearr_38167_38174 = state_38133;
(statearr_38167_38174[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38175 = state_38133;
state_38133 = G__38175;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__ = function(state_38133){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1.call(this,state_38133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8288__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto___38169,c))
})();
var state__8310__auto__ = (function (){var statearr_38168 = f__8309__auto__.call(null);
(statearr_38168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto___38169);

return statearr_38168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto___38169,c))
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
var len__7018__auto___38177 = arguments.length;
var i__7019__auto___38178 = (0);
while(true){
if((i__7019__auto___38178 < len__7018__auto___38177)){
args__7025__auto__.push((arguments[i__7019__auto___38178]));

var G__38179 = (i__7019__auto___38178 + (1));
i__7019__auto___38178 = G__38179;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq38176){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38176));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map