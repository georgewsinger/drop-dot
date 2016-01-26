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
return (function (state_286252){
var state_val_286253 = (state_286252[(1)]);
if((state_val_286253 === (1))){
var state_286252__$1 = state_286252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286252__$1,(2),c,arg);
} else {
if((state_val_286253 === (2))){
var inst_286250 = (state_286252[(2)]);
var state_286252__$1 = state_286252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286252__$1,inst_286250);
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
var statearr_286257 = [null,null,null,null,null,null,null];
(statearr_286257[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_286257[(1)] = (1));

return statearr_286257;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_286252){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286258){if((e286258 instanceof Object)){
var ex__10429__auto__ = e286258;
var statearr_286259_286261 = state_286252;
(statearr_286259_286261[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286262 = state_286252;
state_286252 = G__286262;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_286252){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_286252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286260 = f__10447__auto__.call(null);
(statearr_286260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286260;
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
return (function (state_286278){
var state_val_286279 = (state_286278[(1)]);
if((state_val_286279 === (1))){
var state_286278__$1 = state_286278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286278__$1,(2),c,arg);
} else {
if((state_val_286279 === (2))){
var inst_286276 = (state_286278[(2)]);
var state_286278__$1 = state_286278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286278__$1,inst_286276);
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
var statearr_286283 = [null,null,null,null,null,null,null];
(statearr_286283[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_286283[(1)] = (1));

return statearr_286283;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_286278){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286284){if((e286284 instanceof Object)){
var ex__10429__auto__ = e286284;
var statearr_286285_286287 = state_286278;
(statearr_286285_286287[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286288 = state_286278;
state_286278 = G__286288;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_286278){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_286278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286286 = f__10447__auto__.call(null);
(statearr_286286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286286;
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
return (function (state_286365){
var state_val_286366 = (state_286365[(1)]);
if((state_val_286366 === (1))){
var state_286365__$1 = state_286365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286365__$1,(2),input_chan);
} else {
if((state_val_286366 === (2))){
var inst_286343 = (state_286365[(2)]);
var inst_286344 = inst_286343;
var state_286365__$1 = (function (){var statearr_286367 = state_286365;
(statearr_286367[(7)] = inst_286344);

return statearr_286367;
})();
var statearr_286368_286395 = state_286365__$1;
(statearr_286368_286395[(2)] = null);

(statearr_286368_286395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286366 === (3))){
var inst_286344 = (state_286365[(7)]);
var inst_286346 = cljs.core.count.call(null,inst_286344);
var inst_286347 = cljs.core._EQ_.call(null,inst_286346,(0));
var state_286365__$1 = state_286365;
if(inst_286347){
var statearr_286369_286396 = state_286365__$1;
(statearr_286369_286396[(1)] = (5));

} else {
var statearr_286370_286397 = state_286365__$1;
(statearr_286370_286397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286366 === (4))){
var inst_286363 = (state_286365[(2)]);
var state_286365__$1 = state_286365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286365__$1,inst_286363);
} else {
if((state_val_286366 === (5))){
var inst_286349 = cljs.core.println.call(null,"done");
var state_286365__$1 = state_286365;
var statearr_286371_286398 = state_286365__$1;
(statearr_286371_286398[(2)] = inst_286349);

(statearr_286371_286398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286366 === (6))){
var inst_286344 = (state_286365[(7)]);
var inst_286351 = cljs.core.async.chan.call(null);
var inst_286352 = cljs.core.first.call(null,inst_286344);
var inst_286353 = (function (){var v = inst_286344;
var rc = inst_286351;
var cmd = inst_286352;
return ((function (v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__){
return (function (state_286375){
var state_val_286376 = (state_286375[(1)]);
if((state_val_286376 === (1))){
var state_286375__$1 = state_286375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286375__$1,(2),rc,res);
} else {
if((state_val_286376 === (2))){
var inst_286373 = (state_286375[(2)]);
var state_286375__$1 = state_286375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286375__$1,inst_286373);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_286380 = [null,null,null,null,null,null,null];
(statearr_286380[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_286380[(1)] = (1));

return statearr_286380;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_286375){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286381){if((e286381 instanceof Object)){
var ex__10429__auto__ = e286381;
var statearr_286382_286399 = state_286375;
(statearr_286382_286399[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286400 = state_286375;
state_286375 = G__286400;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_286375){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_286375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286383 = f__10447__auto__.call(null);
(statearr_286383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_286383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_286344,inst_286351,inst_286352,state_val_286366,c__10446__auto__))
})();
var inst_286354 = drop_dot.core.pure_js.execAndPrint(inst_286352,inst_286353);
var state_286365__$1 = (function (){var statearr_286384 = state_286365;
(statearr_286384[(8)] = inst_286354);

return statearr_286384;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286365__$1,(8),inst_286351);
} else {
if((state_val_286366 === (7))){
var inst_286361 = (state_286365[(2)]);
var state_286365__$1 = state_286365;
var statearr_286385_286401 = state_286365__$1;
(statearr_286385_286401[(2)] = inst_286361);

(statearr_286385_286401[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286366 === (8))){
var inst_286344 = (state_286365[(7)]);
var inst_286356 = (state_286365[(2)]);
var inst_286357 = cljs.core.rest.call(null,inst_286344);
var inst_286358 = cljs.core.vec.call(null,inst_286357);
var inst_286344__$1 = inst_286358;
var state_286365__$1 = (function (){var statearr_286386 = state_286365;
(statearr_286386[(7)] = inst_286344__$1);

(statearr_286386[(9)] = inst_286356);

return statearr_286386;
})();
var statearr_286387_286402 = state_286365__$1;
(statearr_286387_286402[(2)] = null);

(statearr_286387_286402[(1)] = (3));


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
var statearr_286391 = [null,null,null,null,null,null,null,null,null,null];
(statearr_286391[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_286391[(1)] = (1));

return statearr_286391;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_286365){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286392){if((e286392 instanceof Object)){
var ex__10429__auto__ = e286392;
var statearr_286393_286403 = state_286365;
(statearr_286393_286403[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286404 = state_286365;
state_286365 = G__286404;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_286365){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_286365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286394 = f__10447__auto__.call(null);
(statearr_286394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286394;
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
return (function (state_286416){
var state_val_286417 = (state_286416[(1)]);
if((state_val_286417 === (1))){
var state_286416__$1 = state_286416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286416__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_286421 = [null,null,null,null,null,null,null];
(statearr_286421[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_286421[(1)] = (1));

return statearr_286421;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_286416){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286422){if((e286422 instanceof Object)){
var ex__10429__auto__ = e286422;
var statearr_286423_286425 = state_286416;
(statearr_286423_286425[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286426 = state_286416;
state_286416 = G__286426;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_286416){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_286416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_286424 = f__10447__auto__.call(null);
(statearr_286424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286424;
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
return (function (state_286442){
var state_val_286443 = (state_286442[(1)]);
if((state_val_286443 === (1))){
var state_286442__$1 = state_286442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286442__$1,(2),d,res__$1);
} else {
if((state_val_286443 === (2))){
var inst_286440 = (state_286442[(2)]);
var state_286442__$1 = state_286442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286442__$1,inst_286440);
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
var statearr_286447 = [null,null,null,null,null,null,null];
(statearr_286447[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_286447[(1)] = (1));

return statearr_286447;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_286442){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286448){if((e286448 instanceof Object)){
var ex__10429__auto__ = e286448;
var statearr_286449_286451 = state_286442;
(statearr_286449_286451[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286452 = state_286442;
state_286442 = G__286452;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_286442){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_286442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_286450 = f__10447__auto__.call(null);
(statearr_286450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286450;
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
return (function (state_286484){
var state_val_286485 = (state_286484[(1)]);
if((state_val_286485 === (1))){
var inst_286475 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_286484__$1 = state_286484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286484__$1,(2),inst_286475);
} else {
if((state_val_286485 === (2))){
var inst_286477 = (state_286484[(2)]);
var state_286484__$1 = state_286484;
if(cljs.core.truth_(inst_286477)){
var statearr_286486_286497 = state_286484__$1;
(statearr_286486_286497[(1)] = (3));

} else {
var statearr_286487_286498 = state_286484__$1;
(statearr_286487_286498[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286485 === (3))){
var state_286484__$1 = state_286484;
var statearr_286488_286499 = state_286484__$1;
(statearr_286488_286499[(2)] = line);

(statearr_286488_286499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286485 === (4))){
var inst_286480 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_286484__$1 = state_286484;
var statearr_286489_286500 = state_286484__$1;
(statearr_286489_286500[(2)] = inst_286480);

(statearr_286489_286500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286485 === (5))){
var inst_286482 = (state_286484[(2)]);
var state_286484__$1 = state_286484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286484__$1,inst_286482);
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
var statearr_286493 = [null,null,null,null,null,null,null];
(statearr_286493[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_286493[(1)] = (1));

return statearr_286493;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_286484){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286494){if((e286494 instanceof Object)){
var ex__10429__auto__ = e286494;
var statearr_286495_286501 = state_286484;
(statearr_286495_286501[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286502 = state_286484;
state_286484 = G__286502;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_286484){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_286484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286496 = f__10447__auto__.call(null);
(statearr_286496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286496;
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
return (function (state_286573){
var state_val_286574 = (state_286573[(1)]);
if((state_val_286574 === (1))){
var state_286573__$1 = state_286573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286573__$1,(2),chan_verified_path);
} else {
if((state_val_286574 === (2))){
var inst_286559 = (state_286573[(7)]);
var inst_286560 = (state_286573[(8)]);
var inst_286559__$1 = (state_286573[(2)]);
var inst_286560__$1 = cljs.core.async.chan.call(null,(1));
var inst_286561 = (function (){var verified_path = inst_286559__$1;
var rc = inst_286560__$1;
return ((function (verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function (state_286579){
var state_val_286580 = (state_286579[(1)]);
if((state_val_286580 === (1))){
var inst_286575 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_286579__$1 = state_286579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286579__$1,(2),rc,inst_286575);
} else {
if((state_val_286580 === (2))){
var inst_286577 = (state_286579[(2)]);
var state_286579__$1 = state_286579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286579__$1,inst_286577);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_286584 = [null,null,null,null,null,null,null];
(statearr_286584[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_286584[(1)] = (1));

return statearr_286584;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_286579){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286585){if((e286585 instanceof Object)){
var ex__10429__auto__ = e286585;
var statearr_286586_286613 = state_286579;
(statearr_286586_286613[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286614 = state_286579;
state_286579 = G__286614;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_286579){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_286579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286587 = f__10447__auto__.call(null);
(statearr_286587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_286587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function (state_286591){
var state_val_286592 = (state_286591[(1)]);
if((state_val_286592 === (1))){
var state_286591__$1 = state_286591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286591__$1,(2),rc,verified_path);
} else {
if((state_val_286592 === (2))){
var inst_286589 = (state_286591[(2)]);
var state_286591__$1 = state_286591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286591__$1,inst_286589);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_286596 = [null,null,null,null,null,null,null];
(statearr_286596[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_286596[(1)] = (1));

return statearr_286596;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_286591){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286597){if((e286597 instanceof Object)){
var ex__10429__auto__ = e286597;
var statearr_286598_286615 = state_286591;
(statearr_286598_286615[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286616 = state_286591;
state_286591 = G__286616;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_286591){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_286591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286599 = f__10447__auto__.call(null);
(statearr_286599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_286599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_286559,inst_286560,inst_286559__$1,inst_286560__$1,state_val_286574,c__10446__auto__))
})();
var inst_286562 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_286559__$1);
var state_286573__$1 = (function (){var statearr_286600 = state_286573;
(statearr_286600[(7)] = inst_286559__$1);

(statearr_286600[(9)] = inst_286561);

(statearr_286600[(8)] = inst_286560__$1);

return statearr_286600;
})();
if(cljs.core.truth_(inst_286562)){
var statearr_286601_286617 = state_286573__$1;
(statearr_286601_286617[(1)] = (3));

} else {
var statearr_286602_286618 = state_286573__$1;
(statearr_286602_286618[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286574 === (3))){
var inst_286559 = (state_286573[(7)]);
var inst_286560 = (state_286573[(8)]);
var state_286573__$1 = state_286573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286573__$1,(6),inst_286560,inst_286559);
} else {
if((state_val_286574 === (4))){
var inst_286559 = (state_286573[(7)]);
var inst_286561 = (state_286573[(9)]);
var inst_286567 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_286559,inst_286561);
var state_286573__$1 = state_286573;
var statearr_286603_286619 = state_286573__$1;
(statearr_286603_286619[(2)] = inst_286567);

(statearr_286603_286619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286574 === (5))){
var inst_286560 = (state_286573[(8)]);
var inst_286569 = (state_286573[(2)]);
var state_286573__$1 = (function (){var statearr_286604 = state_286573;
(statearr_286604[(10)] = inst_286569);

return statearr_286604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286573__$1,(7),inst_286560);
} else {
if((state_val_286574 === (6))){
var inst_286565 = (state_286573[(2)]);
var state_286573__$1 = state_286573;
var statearr_286605_286620 = state_286573__$1;
(statearr_286605_286620[(2)] = inst_286565);

(statearr_286605_286620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286574 === (7))){
var inst_286571 = (state_286573[(2)]);
var state_286573__$1 = state_286573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286573__$1,inst_286571);
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
var statearr_286609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_286609[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_286609[(1)] = (1));

return statearr_286609;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_286573){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286610){if((e286610 instanceof Object)){
var ex__10429__auto__ = e286610;
var statearr_286611_286621 = state_286573;
(statearr_286611_286621[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286622 = state_286573;
state_286573 = G__286622;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_286573){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_286573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286612 = f__10447__auto__.call(null);
(statearr_286612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286612;
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
return (function (state_286657){
var state_val_286658 = (state_286657[(1)]);
if((state_val_286658 === (1))){
var state_286657__$1 = state_286657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286657__$1,(2),c);
} else {
if((state_val_286658 === (2))){
var inst_286648 = (state_286657[(7)]);
var inst_286648__$1 = (state_286657[(2)]);
var inst_286649 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_286648__$1);
var state_286657__$1 = (function (){var statearr_286659 = state_286657;
(statearr_286659[(7)] = inst_286648__$1);

return statearr_286659;
})();
if(cljs.core.truth_(inst_286649)){
var statearr_286660_286671 = state_286657__$1;
(statearr_286660_286671[(1)] = (3));

} else {
var statearr_286661_286672 = state_286657__$1;
(statearr_286661_286672[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286658 === (3))){
var inst_286648 = (state_286657[(7)]);
var inst_286651 = cljs.core.println.call(null,inst_286648);
var state_286657__$1 = state_286657;
var statearr_286662_286673 = state_286657__$1;
(statearr_286662_286673[(2)] = inst_286651);

(statearr_286662_286673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286658 === (4))){
var inst_286648 = (state_286657[(7)]);
var inst_286653 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_286648);
var state_286657__$1 = state_286657;
var statearr_286663_286674 = state_286657__$1;
(statearr_286663_286674[(2)] = inst_286653);

(statearr_286663_286674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286658 === (5))){
var inst_286655 = (state_286657[(2)]);
var state_286657__$1 = state_286657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286657__$1,inst_286655);
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
var statearr_286667 = [null,null,null,null,null,null,null,null];
(statearr_286667[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_286667[(1)] = (1));

return statearr_286667;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_286657){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286668){if((e286668 instanceof Object)){
var ex__10429__auto__ = e286668;
var statearr_286669_286675 = state_286657;
(statearr_286669_286675[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286676 = state_286657;
state_286657 = G__286676;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_286657){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_286657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286670 = f__10447__auto__.call(null);
(statearr_286670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286670;
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
return (function (state_286738){
var state_val_286739 = (state_286738[(1)]);
if((state_val_286739 === (7))){
var inst_286734 = (state_286738[(2)]);
var state_286738__$1 = state_286738;
var statearr_286740_286761 = state_286738__$1;
(statearr_286740_286761[(2)] = inst_286734);

(statearr_286740_286761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (1))){
var inst_286719 = chan_config;
var state_286738__$1 = (function (){var statearr_286741 = state_286738;
(statearr_286741[(7)] = inst_286719);

return statearr_286741;
})();
var statearr_286742_286762 = state_286738__$1;
(statearr_286742_286762[(2)] = null);

(statearr_286742_286762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (4))){
var inst_286722 = (state_286738[(8)]);
var inst_286722__$1 = (state_286738[(2)]);
var state_286738__$1 = (function (){var statearr_286743 = state_286738;
(statearr_286743[(8)] = inst_286722__$1);

return statearr_286743;
})();
if(cljs.core.truth_(inst_286722__$1)){
var statearr_286744_286763 = state_286738__$1;
(statearr_286744_286763[(1)] = (5));

} else {
var statearr_286745_286764 = state_286738__$1;
(statearr_286745_286764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (6))){
var state_286738__$1 = state_286738;
var statearr_286746_286765 = state_286738__$1;
(statearr_286746_286765[(2)] = null);

(statearr_286746_286765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (3))){
var inst_286736 = (state_286738[(2)]);
var state_286738__$1 = state_286738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286738__$1,inst_286736);
} else {
if((state_val_286739 === (2))){
var inst_286719 = (state_286738[(7)]);
var state_286738__$1 = state_286738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286738__$1,(4),inst_286719);
} else {
if((state_val_286739 === (9))){
var inst_286722 = (state_286738[(8)]);
var inst_286728 = cljs.core.println.call(null,inst_286722);
var state_286738__$1 = state_286738;
var statearr_286748_286766 = state_286738__$1;
(statearr_286748_286766[(2)] = inst_286728);

(statearr_286748_286766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (5))){
var inst_286724 = cljs.core._EQ_.call(null,cmd,"drop");
var state_286738__$1 = state_286738;
if(inst_286724){
var statearr_286749_286767 = state_286738__$1;
(statearr_286749_286767[(1)] = (8));

} else {
var statearr_286750_286768 = state_286738__$1;
(statearr_286750_286768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (10))){
var inst_286719 = (state_286738[(7)]);
var inst_286730 = (state_286738[(2)]);
var tmp286747 = inst_286719;
var inst_286719__$1 = tmp286747;
var state_286738__$1 = (function (){var statearr_286751 = state_286738;
(statearr_286751[(7)] = inst_286719__$1);

(statearr_286751[(9)] = inst_286730);

return statearr_286751;
})();
var statearr_286752_286769 = state_286738__$1;
(statearr_286752_286769[(2)] = null);

(statearr_286752_286769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286739 === (8))){
var inst_286722 = (state_286738[(8)]);
var inst_286726 = drop_dot.core.drop_line.call(null,inst_286722);
var state_286738__$1 = state_286738;
var statearr_286753_286770 = state_286738__$1;
(statearr_286753_286770[(2)] = inst_286726);

(statearr_286753_286770[(1)] = (10));


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
var statearr_286757 = [null,null,null,null,null,null,null,null,null,null];
(statearr_286757[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_286757[(1)] = (1));

return statearr_286757;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_286738){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286758){if((e286758 instanceof Object)){
var ex__10429__auto__ = e286758;
var statearr_286759_286771 = state_286738;
(statearr_286759_286771[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286772 = state_286738;
state_286738 = G__286772;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_286738){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_286738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_286760 = f__10447__auto__.call(null);
(statearr_286760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_286760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___286869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___286869,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___286869,c){
return (function (state_286833){
var state_val_286834 = (state_286833[(1)]);
if((state_val_286834 === (1))){
var inst_286822 = (state_286833[(7)]);
var inst_286823 = (state_286833[(8)]);
var inst_286821 = (state_286833[(9)]);
var inst_286821__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_286822__$1 = cljs.core.async.chan.call(null,(1));
var inst_286823__$1 = (function (){var res = inst_286821__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_286822__$1;
return ((function (res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c){
return (function (state_286838){
var state_val_286839 = (state_286838[(1)]);
if((state_val_286839 === (1))){
var state_286838__$1 = state_286838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286838__$1,(2),wcc,res__$1);
} else {
if((state_val_286839 === (2))){
var inst_286836 = (state_286838[(2)]);
var state_286838__$1 = state_286838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286838__$1,inst_286836);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_286843 = [null,null,null,null,null,null,null];
(statearr_286843[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_286843[(1)] = (1));

return statearr_286843;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_286838){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286844){if((e286844 instanceof Object)){
var ex__10429__auto__ = e286844;
var statearr_286845_286870 = state_286838;
(statearr_286845_286870[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286871 = state_286838;
state_286838 = G__286871;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_286838){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_286838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c))
})();
var state__10448__auto__ = (function (){var statearr_286846 = f__10447__auto__.call(null);
(statearr_286846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_286846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_286822,inst_286823,inst_286821,inst_286821__$1,inst_286822__$1,state_val_286834,c__10446__auto___286869,c))
})();
var inst_286824 = inst_286821__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_286823__$1);
var state_286833__$1 = (function (){var statearr_286847 = state_286833;
(statearr_286847[(7)] = inst_286822__$1);

(statearr_286847[(10)] = inst_286824);

(statearr_286847[(8)] = inst_286823__$1);

(statearr_286847[(9)] = inst_286821__$1);

return statearr_286847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286833__$1,(2),inst_286822__$1);
} else {
if((state_val_286834 === (2))){
var inst_286822 = (state_286833[(7)]);
var inst_286824 = (state_286833[(10)]);
var inst_286823 = (state_286833[(8)]);
var inst_286821 = (state_286833[(9)]);
var inst_286826 = (state_286833[(2)]);
var inst_286827 = [cljs.core.str(inst_286826)].join('');
var inst_286828 = parseInt(inst_286827);
var inst_286829 = (function (){var res = inst_286821;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_286822;
var wcc_jammer = inst_286823;
var get_wc = inst_286824;
var lines = inst_286828;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,state_val_286834,c__10446__auto___286869,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,state_val_286834,c__10446__auto___286869,c))
})();
var inst_286830 = (function (){var res = inst_286821;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_286822;
var wcc_jammer = inst_286823;
var get_wc = inst_286824;
var lines = inst_286828;
var close_if_done = inst_286829;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c){
return (function (state_286852){
var state_val_286853 = (state_286852[(1)]);
if((state_val_286853 === (1))){
var state_286852__$1 = state_286852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286852__$1,(2),c,res__$1);
} else {
if((state_val_286853 === (2))){
var inst_286849 = (state_286852[(2)]);
var inst_286850 = close_if_done.call(null);
var state_286852__$1 = (function (){var statearr_286854 = state_286852;
(statearr_286854[(7)] = inst_286849);

return statearr_286854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286852__$1,inst_286850);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_286858 = [null,null,null,null,null,null,null,null];
(statearr_286858[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_286858[(1)] = (1));

return statearr_286858;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_286852){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286859){if((e286859 instanceof Object)){
var ex__10429__auto__ = e286859;
var statearr_286860_286872 = state_286852;
(statearr_286860_286872[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286873 = state_286852;
state_286852 = G__286873;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_286852){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_286852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c))
})();
var state__10448__auto__ = (function (){var statearr_286861 = f__10447__auto__.call(null);
(statearr_286861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_286861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_286822,inst_286824,inst_286823,inst_286821,inst_286826,inst_286827,inst_286828,inst_286829,state_val_286834,c__10446__auto___286869,c))
})();
var inst_286831 = inst_286821.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_286830);
var state_286833__$1 = state_286833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286833__$1,inst_286831);
} else {
return null;
}
}
});})(c__10446__auto___286869,c))
;
return ((function (switch__10425__auto__,c__10446__auto___286869,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_286865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_286865[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_286865[(1)] = (1));

return statearr_286865;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_286833){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_286833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e286866){if((e286866 instanceof Object)){
var ex__10429__auto__ = e286866;
var statearr_286867_286874 = state_286833;
(statearr_286867_286874[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286875 = state_286833;
state_286833 = G__286875;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_286833){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_286833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___286869,c))
})();
var state__10448__auto__ = (function (){var statearr_286868 = f__10447__auto__.call(null);
(statearr_286868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___286869);

return statearr_286868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___286869,c))
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
var len__9156__auto___286877 = arguments.length;
var i__9157__auto___286878 = (0);
while(true){
if((i__9157__auto___286878 < len__9156__auto___286877)){
args__9163__auto__.push((arguments[i__9157__auto___286878]));

var G__286879 = (i__9157__auto___286878 + (1));
i__9157__auto___286878 = G__286879;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq286876){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq286876));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map