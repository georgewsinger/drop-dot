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
return (function (state_288253){
var state_val_288254 = (state_288253[(1)]);
if((state_val_288254 === (1))){
var state_288253__$1 = state_288253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288253__$1,(2),c,arg);
} else {
if((state_val_288254 === (2))){
var inst_288251 = (state_288253[(2)]);
var state_288253__$1 = state_288253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288253__$1,inst_288251);
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
var statearr_288258 = [null,null,null,null,null,null,null];
(statearr_288258[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_288258[(1)] = (1));

return statearr_288258;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_288253){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288259){if((e288259 instanceof Object)){
var ex__10429__auto__ = e288259;
var statearr_288260_288262 = state_288253;
(statearr_288260_288262[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288263 = state_288253;
state_288253 = G__288263;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_288253){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_288253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288261 = f__10447__auto__.call(null);
(statearr_288261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288261;
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
return (function (state_288279){
var state_val_288280 = (state_288279[(1)]);
if((state_val_288280 === (1))){
var state_288279__$1 = state_288279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288279__$1,(2),c,arg);
} else {
if((state_val_288280 === (2))){
var inst_288277 = (state_288279[(2)]);
var state_288279__$1 = state_288279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288279__$1,inst_288277);
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
var statearr_288284 = [null,null,null,null,null,null,null];
(statearr_288284[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_288284[(1)] = (1));

return statearr_288284;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_288279){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288285){if((e288285 instanceof Object)){
var ex__10429__auto__ = e288285;
var statearr_288286_288288 = state_288279;
(statearr_288286_288288[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288289 = state_288279;
state_288279 = G__288289;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_288279){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_288279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288287 = f__10447__auto__.call(null);
(statearr_288287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288287;
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
return (function (state_288366){
var state_val_288367 = (state_288366[(1)]);
if((state_val_288367 === (1))){
var state_288366__$1 = state_288366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288366__$1,(2),input_chan);
} else {
if((state_val_288367 === (2))){
var inst_288344 = (state_288366[(2)]);
var inst_288345 = inst_288344;
var state_288366__$1 = (function (){var statearr_288368 = state_288366;
(statearr_288368[(7)] = inst_288345);

return statearr_288368;
})();
var statearr_288369_288396 = state_288366__$1;
(statearr_288369_288396[(2)] = null);

(statearr_288369_288396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288367 === (3))){
var inst_288345 = (state_288366[(7)]);
var inst_288347 = cljs.core.count.call(null,inst_288345);
var inst_288348 = cljs.core._EQ_.call(null,inst_288347,(0));
var state_288366__$1 = state_288366;
if(inst_288348){
var statearr_288370_288397 = state_288366__$1;
(statearr_288370_288397[(1)] = (5));

} else {
var statearr_288371_288398 = state_288366__$1;
(statearr_288371_288398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288367 === (4))){
var inst_288364 = (state_288366[(2)]);
var state_288366__$1 = state_288366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288366__$1,inst_288364);
} else {
if((state_val_288367 === (5))){
var inst_288350 = cljs.core.println.call(null,"done");
var state_288366__$1 = state_288366;
var statearr_288372_288399 = state_288366__$1;
(statearr_288372_288399[(2)] = inst_288350);

(statearr_288372_288399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288367 === (6))){
var inst_288345 = (state_288366[(7)]);
var inst_288352 = cljs.core.async.chan.call(null);
var inst_288353 = cljs.core.first.call(null,inst_288345);
var inst_288354 = (function (){var v = inst_288345;
var rc = inst_288352;
var cmd = inst_288353;
return ((function (v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__){
return (function (state_288376){
var state_val_288377 = (state_288376[(1)]);
if((state_val_288377 === (1))){
var state_288376__$1 = state_288376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288376__$1,(2),rc,res);
} else {
if((state_val_288377 === (2))){
var inst_288374 = (state_288376[(2)]);
var state_288376__$1 = state_288376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288376__$1,inst_288374);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_288381 = [null,null,null,null,null,null,null];
(statearr_288381[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_288381[(1)] = (1));

return statearr_288381;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_288376){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288382){if((e288382 instanceof Object)){
var ex__10429__auto__ = e288382;
var statearr_288383_288400 = state_288376;
(statearr_288383_288400[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288401 = state_288376;
state_288376 = G__288401;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_288376){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_288376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288384 = f__10447__auto__.call(null);
(statearr_288384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_288345,inst_288352,inst_288353,state_val_288367,c__10446__auto__))
})();
var inst_288355 = drop_dot.core.pure_js.execAndPrint(inst_288353,inst_288354);
var state_288366__$1 = (function (){var statearr_288385 = state_288366;
(statearr_288385[(8)] = inst_288355);

return statearr_288385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288366__$1,(8),inst_288352);
} else {
if((state_val_288367 === (7))){
var inst_288362 = (state_288366[(2)]);
var state_288366__$1 = state_288366;
var statearr_288386_288402 = state_288366__$1;
(statearr_288386_288402[(2)] = inst_288362);

(statearr_288386_288402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288367 === (8))){
var inst_288345 = (state_288366[(7)]);
var inst_288357 = (state_288366[(2)]);
var inst_288358 = cljs.core.rest.call(null,inst_288345);
var inst_288359 = cljs.core.vec.call(null,inst_288358);
var inst_288345__$1 = inst_288359;
var state_288366__$1 = (function (){var statearr_288387 = state_288366;
(statearr_288387[(7)] = inst_288345__$1);

(statearr_288387[(9)] = inst_288357);

return statearr_288387;
})();
var statearr_288388_288403 = state_288366__$1;
(statearr_288388_288403[(2)] = null);

(statearr_288388_288403[(1)] = (3));


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
var statearr_288392 = [null,null,null,null,null,null,null,null,null,null];
(statearr_288392[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_288392[(1)] = (1));

return statearr_288392;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_288366){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288393){if((e288393 instanceof Object)){
var ex__10429__auto__ = e288393;
var statearr_288394_288404 = state_288366;
(statearr_288394_288404[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288405 = state_288366;
state_288366 = G__288405;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_288366){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_288366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288395 = f__10447__auto__.call(null);
(statearr_288395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288395;
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
return (function (state_288417){
var state_val_288418 = (state_288417[(1)]);
if((state_val_288418 === (1))){
var state_288417__$1 = state_288417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288417__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_288422 = [null,null,null,null,null,null,null];
(statearr_288422[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_288422[(1)] = (1));

return statearr_288422;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_288417){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288423){if((e288423 instanceof Object)){
var ex__10429__auto__ = e288423;
var statearr_288424_288426 = state_288417;
(statearr_288424_288426[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288427 = state_288417;
state_288417 = G__288427;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_288417){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_288417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_288425 = f__10447__auto__.call(null);
(statearr_288425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288425;
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
return (function (state_288443){
var state_val_288444 = (state_288443[(1)]);
if((state_val_288444 === (1))){
var state_288443__$1 = state_288443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288443__$1,(2),d,res__$1);
} else {
if((state_val_288444 === (2))){
var inst_288441 = (state_288443[(2)]);
var state_288443__$1 = state_288443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288443__$1,inst_288441);
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
var statearr_288448 = [null,null,null,null,null,null,null];
(statearr_288448[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_288448[(1)] = (1));

return statearr_288448;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_288443){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288449){if((e288449 instanceof Object)){
var ex__10429__auto__ = e288449;
var statearr_288450_288452 = state_288443;
(statearr_288450_288452[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288453 = state_288443;
state_288443 = G__288453;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_288443){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_288443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_288451 = f__10447__auto__.call(null);
(statearr_288451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288451;
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
return (function (state_288485){
var state_val_288486 = (state_288485[(1)]);
if((state_val_288486 === (1))){
var inst_288476 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_288485__$1 = state_288485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288485__$1,(2),inst_288476);
} else {
if((state_val_288486 === (2))){
var inst_288478 = (state_288485[(2)]);
var state_288485__$1 = state_288485;
if(cljs.core.truth_(inst_288478)){
var statearr_288487_288498 = state_288485__$1;
(statearr_288487_288498[(1)] = (3));

} else {
var statearr_288488_288499 = state_288485__$1;
(statearr_288488_288499[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288486 === (3))){
var state_288485__$1 = state_288485;
var statearr_288489_288500 = state_288485__$1;
(statearr_288489_288500[(2)] = line);

(statearr_288489_288500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288486 === (4))){
var inst_288481 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_288485__$1 = state_288485;
var statearr_288490_288501 = state_288485__$1;
(statearr_288490_288501[(2)] = inst_288481);

(statearr_288490_288501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288486 === (5))){
var inst_288483 = (state_288485[(2)]);
var state_288485__$1 = state_288485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288485__$1,inst_288483);
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
var statearr_288494 = [null,null,null,null,null,null,null];
(statearr_288494[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_288494[(1)] = (1));

return statearr_288494;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_288485){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288495){if((e288495 instanceof Object)){
var ex__10429__auto__ = e288495;
var statearr_288496_288502 = state_288485;
(statearr_288496_288502[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288503 = state_288485;
state_288485 = G__288503;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_288485){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_288485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288497 = f__10447__auto__.call(null);
(statearr_288497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288497;
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
return (function (state_288574){
var state_val_288575 = (state_288574[(1)]);
if((state_val_288575 === (1))){
var state_288574__$1 = state_288574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288574__$1,(2),chan_verified_path);
} else {
if((state_val_288575 === (2))){
var inst_288561 = (state_288574[(7)]);
var inst_288560 = (state_288574[(8)]);
var inst_288560__$1 = (state_288574[(2)]);
var inst_288561__$1 = cljs.core.async.chan.call(null,(1));
var inst_288562 = (function (){var verified_path = inst_288560__$1;
var rc = inst_288561__$1;
return ((function (verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function (state_288580){
var state_val_288581 = (state_288580[(1)]);
if((state_val_288581 === (1))){
var inst_288576 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_288580__$1 = state_288580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288580__$1,(2),rc,inst_288576);
} else {
if((state_val_288581 === (2))){
var inst_288578 = (state_288580[(2)]);
var state_288580__$1 = state_288580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288580__$1,inst_288578);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_288585 = [null,null,null,null,null,null,null];
(statearr_288585[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_288585[(1)] = (1));

return statearr_288585;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_288580){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288586){if((e288586 instanceof Object)){
var ex__10429__auto__ = e288586;
var statearr_288587_288614 = state_288580;
(statearr_288587_288614[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288615 = state_288580;
state_288580 = G__288615;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_288580){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_288580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288588 = f__10447__auto__.call(null);
(statearr_288588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function (state_288592){
var state_val_288593 = (state_288592[(1)]);
if((state_val_288593 === (1))){
var state_288592__$1 = state_288592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288592__$1,(2),rc,verified_path);
} else {
if((state_val_288593 === (2))){
var inst_288590 = (state_288592[(2)]);
var state_288592__$1 = state_288592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288592__$1,inst_288590);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_288597 = [null,null,null,null,null,null,null];
(statearr_288597[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_288597[(1)] = (1));

return statearr_288597;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_288592){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288598){if((e288598 instanceof Object)){
var ex__10429__auto__ = e288598;
var statearr_288599_288616 = state_288592;
(statearr_288599_288616[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288617 = state_288592;
state_288592 = G__288617;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_288592){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_288592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288600 = f__10447__auto__.call(null);
(statearr_288600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_288561,inst_288560,inst_288560__$1,inst_288561__$1,state_val_288575,c__10446__auto__))
})();
var inst_288563 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_288560__$1);
var state_288574__$1 = (function (){var statearr_288601 = state_288574;
(statearr_288601[(7)] = inst_288561__$1);

(statearr_288601[(8)] = inst_288560__$1);

(statearr_288601[(9)] = inst_288562);

return statearr_288601;
})();
if(cljs.core.truth_(inst_288563)){
var statearr_288602_288618 = state_288574__$1;
(statearr_288602_288618[(1)] = (3));

} else {
var statearr_288603_288619 = state_288574__$1;
(statearr_288603_288619[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288575 === (3))){
var inst_288561 = (state_288574[(7)]);
var inst_288560 = (state_288574[(8)]);
var state_288574__$1 = state_288574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288574__$1,(6),inst_288561,inst_288560);
} else {
if((state_val_288575 === (4))){
var inst_288560 = (state_288574[(8)]);
var inst_288562 = (state_288574[(9)]);
var inst_288568 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_288560,inst_288562);
var state_288574__$1 = state_288574;
var statearr_288604_288620 = state_288574__$1;
(statearr_288604_288620[(2)] = inst_288568);

(statearr_288604_288620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288575 === (5))){
var inst_288561 = (state_288574[(7)]);
var inst_288570 = (state_288574[(2)]);
var state_288574__$1 = (function (){var statearr_288605 = state_288574;
(statearr_288605[(10)] = inst_288570);

return statearr_288605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288574__$1,(7),inst_288561);
} else {
if((state_val_288575 === (6))){
var inst_288566 = (state_288574[(2)]);
var state_288574__$1 = state_288574;
var statearr_288606_288621 = state_288574__$1;
(statearr_288606_288621[(2)] = inst_288566);

(statearr_288606_288621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288575 === (7))){
var inst_288572 = (state_288574[(2)]);
var state_288574__$1 = state_288574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288574__$1,inst_288572);
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
var statearr_288610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_288610[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_288610[(1)] = (1));

return statearr_288610;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_288574){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288611){if((e288611 instanceof Object)){
var ex__10429__auto__ = e288611;
var statearr_288612_288622 = state_288574;
(statearr_288612_288622[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288623 = state_288574;
state_288574 = G__288623;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_288574){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_288574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288613 = f__10447__auto__.call(null);
(statearr_288613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288613;
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
return (function (state_288658){
var state_val_288659 = (state_288658[(1)]);
if((state_val_288659 === (1))){
var state_288658__$1 = state_288658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288658__$1,(2),c);
} else {
if((state_val_288659 === (2))){
var inst_288649 = (state_288658[(7)]);
var inst_288649__$1 = (state_288658[(2)]);
var inst_288650 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_288649__$1);
var state_288658__$1 = (function (){var statearr_288660 = state_288658;
(statearr_288660[(7)] = inst_288649__$1);

return statearr_288660;
})();
if(cljs.core.truth_(inst_288650)){
var statearr_288661_288672 = state_288658__$1;
(statearr_288661_288672[(1)] = (3));

} else {
var statearr_288662_288673 = state_288658__$1;
(statearr_288662_288673[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288659 === (3))){
var inst_288649 = (state_288658[(7)]);
var inst_288652 = cljs.core.println.call(null,inst_288649);
var state_288658__$1 = state_288658;
var statearr_288663_288674 = state_288658__$1;
(statearr_288663_288674[(2)] = inst_288652);

(statearr_288663_288674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288659 === (4))){
var inst_288649 = (state_288658[(7)]);
var inst_288654 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_288649);
var state_288658__$1 = state_288658;
var statearr_288664_288675 = state_288658__$1;
(statearr_288664_288675[(2)] = inst_288654);

(statearr_288664_288675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288659 === (5))){
var inst_288656 = (state_288658[(2)]);
var state_288658__$1 = state_288658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288658__$1,inst_288656);
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
var statearr_288668 = [null,null,null,null,null,null,null,null];
(statearr_288668[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_288668[(1)] = (1));

return statearr_288668;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_288658){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288669){if((e288669 instanceof Object)){
var ex__10429__auto__ = e288669;
var statearr_288670_288676 = state_288658;
(statearr_288670_288676[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288677 = state_288658;
state_288658 = G__288677;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_288658){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_288658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288671 = f__10447__auto__.call(null);
(statearr_288671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_288739){
var state_val_288740 = (state_288739[(1)]);
if((state_val_288740 === (7))){
var inst_288735 = (state_288739[(2)]);
var state_288739__$1 = state_288739;
var statearr_288741_288762 = state_288739__$1;
(statearr_288741_288762[(2)] = inst_288735);

(statearr_288741_288762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (1))){
var inst_288720 = chan_config;
var state_288739__$1 = (function (){var statearr_288742 = state_288739;
(statearr_288742[(7)] = inst_288720);

return statearr_288742;
})();
var statearr_288743_288763 = state_288739__$1;
(statearr_288743_288763[(2)] = null);

(statearr_288743_288763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (4))){
var inst_288723 = (state_288739[(8)]);
var inst_288723__$1 = (state_288739[(2)]);
var state_288739__$1 = (function (){var statearr_288744 = state_288739;
(statearr_288744[(8)] = inst_288723__$1);

return statearr_288744;
})();
if(cljs.core.truth_(inst_288723__$1)){
var statearr_288745_288764 = state_288739__$1;
(statearr_288745_288764[(1)] = (5));

} else {
var statearr_288746_288765 = state_288739__$1;
(statearr_288746_288765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (6))){
var state_288739__$1 = state_288739;
var statearr_288747_288766 = state_288739__$1;
(statearr_288747_288766[(2)] = null);

(statearr_288747_288766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (3))){
var inst_288737 = (state_288739[(2)]);
var state_288739__$1 = state_288739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288739__$1,inst_288737);
} else {
if((state_val_288740 === (2))){
var inst_288720 = (state_288739[(7)]);
var state_288739__$1 = state_288739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288739__$1,(4),inst_288720);
} else {
if((state_val_288740 === (9))){
var inst_288723 = (state_288739[(8)]);
var inst_288729 = cljs.core.println.call(null,inst_288723);
var state_288739__$1 = state_288739;
var statearr_288749_288767 = state_288739__$1;
(statearr_288749_288767[(2)] = inst_288729);

(statearr_288749_288767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (5))){
var inst_288725 = cljs.core._EQ_.call(null,cmd,"drop");
var state_288739__$1 = state_288739;
if(inst_288725){
var statearr_288750_288768 = state_288739__$1;
(statearr_288750_288768[(1)] = (8));

} else {
var statearr_288751_288769 = state_288739__$1;
(statearr_288751_288769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (10))){
var inst_288720 = (state_288739[(7)]);
var inst_288731 = (state_288739[(2)]);
var tmp288748 = inst_288720;
var inst_288720__$1 = tmp288748;
var state_288739__$1 = (function (){var statearr_288752 = state_288739;
(statearr_288752[(9)] = inst_288731);

(statearr_288752[(7)] = inst_288720__$1);

return statearr_288752;
})();
var statearr_288753_288770 = state_288739__$1;
(statearr_288753_288770[(2)] = null);

(statearr_288753_288770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288740 === (8))){
var inst_288723 = (state_288739[(8)]);
var inst_288727 = drop_dot.core.drop_line.call(null,inst_288723);
var state_288739__$1 = state_288739;
var statearr_288754_288771 = state_288739__$1;
(statearr_288754_288771[(2)] = inst_288727);

(statearr_288754_288771[(1)] = (10));


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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0 = (function (){
var statearr_288758 = [null,null,null,null,null,null,null,null,null,null];
(statearr_288758[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_288758[(1)] = (1));

return statearr_288758;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_288739){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288759){if((e288759 instanceof Object)){
var ex__10429__auto__ = e288759;
var statearr_288760_288772 = state_288739;
(statearr_288760_288772[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288773 = state_288739;
state_288739 = G__288773;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_288739){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_288739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288761 = f__10447__auto__.call(null);
(statearr_288761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___288870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___288870,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___288870,c){
return (function (state_288834){
var state_val_288835 = (state_288834[(1)]);
if((state_val_288835 === (1))){
var inst_288824 = (state_288834[(7)]);
var inst_288822 = (state_288834[(8)]);
var inst_288823 = (state_288834[(9)]);
var inst_288822__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_288823__$1 = cljs.core.async.chan.call(null,(1));
var inst_288824__$1 = (function (){var res = inst_288822__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_288823__$1;
return ((function (res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c){
return (function (state_288839){
var state_val_288840 = (state_288839[(1)]);
if((state_val_288840 === (1))){
var state_288839__$1 = state_288839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288839__$1,(2),wcc,res__$1);
} else {
if((state_val_288840 === (2))){
var inst_288837 = (state_288839[(2)]);
var state_288839__$1 = state_288839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288839__$1,inst_288837);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_288844 = [null,null,null,null,null,null,null];
(statearr_288844[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_288844[(1)] = (1));

return statearr_288844;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_288839){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288845){if((e288845 instanceof Object)){
var ex__10429__auto__ = e288845;
var statearr_288846_288871 = state_288839;
(statearr_288846_288871[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288872 = state_288839;
state_288839 = G__288872;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_288839){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_288839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c))
})();
var state__10448__auto__ = (function (){var statearr_288847 = f__10447__auto__.call(null);
(statearr_288847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_288824,inst_288822,inst_288823,inst_288822__$1,inst_288823__$1,state_val_288835,c__10446__auto___288870,c))
})();
var inst_288825 = inst_288822__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_288824__$1);
var state_288834__$1 = (function (){var statearr_288848 = state_288834;
(statearr_288848[(7)] = inst_288824__$1);

(statearr_288848[(8)] = inst_288822__$1);

(statearr_288848[(9)] = inst_288823__$1);

(statearr_288848[(10)] = inst_288825);

return statearr_288848;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288834__$1,(2),inst_288823__$1);
} else {
if((state_val_288835 === (2))){
var inst_288824 = (state_288834[(7)]);
var inst_288822 = (state_288834[(8)]);
var inst_288823 = (state_288834[(9)]);
var inst_288825 = (state_288834[(10)]);
var inst_288827 = (state_288834[(2)]);
var inst_288828 = [cljs.core.str(inst_288827)].join('');
var inst_288829 = parseInt(inst_288828);
var inst_288830 = (function (){var res = inst_288822;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_288823;
var wcc_jammer = inst_288824;
var get_wc = inst_288825;
var lines = inst_288829;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,state_val_288835,c__10446__auto___288870,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,state_val_288835,c__10446__auto___288870,c))
})();
var inst_288831 = (function (){var res = inst_288822;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_288823;
var wcc_jammer = inst_288824;
var get_wc = inst_288825;
var lines = inst_288829;
var close_if_done = inst_288830;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c){
return (function (state_288853){
var state_val_288854 = (state_288853[(1)]);
if((state_val_288854 === (1))){
var state_288853__$1 = state_288853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288853__$1,(2),c,res__$1);
} else {
if((state_val_288854 === (2))){
var inst_288850 = (state_288853[(2)]);
var inst_288851 = close_if_done.call(null);
var state_288853__$1 = (function (){var statearr_288855 = state_288853;
(statearr_288855[(7)] = inst_288850);

return statearr_288855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288853__$1,inst_288851);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_288859 = [null,null,null,null,null,null,null,null];
(statearr_288859[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_288859[(1)] = (1));

return statearr_288859;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_288853){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288860){if((e288860 instanceof Object)){
var ex__10429__auto__ = e288860;
var statearr_288861_288873 = state_288853;
(statearr_288861_288873[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288874 = state_288853;
state_288853 = G__288874;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_288853){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_288853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c))
})();
var state__10448__auto__ = (function (){var statearr_288862 = f__10447__auto__.call(null);
(statearr_288862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288824,inst_288822,inst_288823,inst_288825,inst_288827,inst_288828,inst_288829,inst_288830,state_val_288835,c__10446__auto___288870,c))
})();
var inst_288832 = inst_288822.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_288831);
var state_288834__$1 = state_288834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288834__$1,inst_288832);
} else {
return null;
}
}
});})(c__10446__auto___288870,c))
;
return ((function (switch__10425__auto__,c__10446__auto___288870,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_288866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_288866[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_288866[(1)] = (1));

return statearr_288866;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_288834){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288867){if((e288867 instanceof Object)){
var ex__10429__auto__ = e288867;
var statearr_288868_288875 = state_288834;
(statearr_288868_288875[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288876 = state_288834;
state_288834 = G__288876;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_288834){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_288834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___288870,c))
})();
var state__10448__auto__ = (function (){var statearr_288869 = f__10447__auto__.call(null);
(statearr_288869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___288870);

return statearr_288869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___288870,c))
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
var len__9156__auto___288878 = arguments.length;
var i__9157__auto___288879 = (0);
while(true){
if((i__9157__auto___288879 < len__9156__auto___288878)){
args__9163__auto__.push((arguments[i__9157__auto___288879]));

var G__288880 = (i__9157__auto___288879 + (1));
i__9157__auto___288879 = G__288880;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq288877){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq288877));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map