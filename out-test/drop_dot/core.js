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
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11296){
var state_val_11297 = (state_11296[(1)]);
if((state_val_11297 === (1))){
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11296__$1,(2),c,arg);
} else {
if((state_val_11297 === (2))){
var inst_11294 = (state_11296[(2)]);
var state_11296__$1 = state_11296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11296__$1,inst_11294);
} else {
return null;
}
}
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto____0 = (function (){
var statearr_11301 = [null,null,null,null,null,null,null];
(statearr_11301[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto__);

(statearr_11301[(1)] = (1));

return statearr_11301;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto____1 = (function (state_11296){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11302){if((e11302 instanceof Object)){
var ex__8342__auto__ = e11302;
var statearr_11303_11305 = state_11296;
(statearr_11303_11305[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11306 = state_11296;
state_11296 = G__11306;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto__ = function(state_11296){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto____1.call(this,state_11296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11304 = f__8451__auto__.call(null);
(statearr_11304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11322){
var state_val_11323 = (state_11322[(1)]);
if((state_val_11323 === (1))){
var state_11322__$1 = state_11322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11322__$1,(2),c,arg);
} else {
if((state_val_11323 === (2))){
var inst_11320 = (state_11322[(2)]);
var state_11322__$1 = state_11322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11322__$1,inst_11320);
} else {
return null;
}
}
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto____0 = (function (){
var statearr_11327 = [null,null,null,null,null,null,null];
(statearr_11327[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto__);

(statearr_11327[(1)] = (1));

return statearr_11327;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto____1 = (function (state_11322){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11328){if((e11328 instanceof Object)){
var ex__8342__auto__ = e11328;
var statearr_11329_11331 = state_11322;
(statearr_11329_11331[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11332 = state_11322;
state_11322 = G__11332;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto__ = function(state_11322){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto____1.call(this,state_11322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11330 = f__8451__auto__.call(null);
(statearr_11330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11409){
var state_val_11410 = (state_11409[(1)]);
if((state_val_11410 === (1))){
var state_11409__$1 = state_11409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11409__$1,(2),input_chan);
} else {
if((state_val_11410 === (2))){
var inst_11387 = (state_11409[(2)]);
var inst_11388 = inst_11387;
var state_11409__$1 = (function (){var statearr_11411 = state_11409;
(statearr_11411[(7)] = inst_11388);

return statearr_11411;
})();
var statearr_11412_11439 = state_11409__$1;
(statearr_11412_11439[(2)] = null);

(statearr_11412_11439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (3))){
var inst_11388 = (state_11409[(7)]);
var inst_11390 = cljs.core.count.call(null,inst_11388);
var inst_11391 = cljs.core._EQ_.call(null,inst_11390,(0));
var state_11409__$1 = state_11409;
if(inst_11391){
var statearr_11413_11440 = state_11409__$1;
(statearr_11413_11440[(1)] = (5));

} else {
var statearr_11414_11441 = state_11409__$1;
(statearr_11414_11441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (4))){
var inst_11407 = (state_11409[(2)]);
var state_11409__$1 = state_11409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11409__$1,inst_11407);
} else {
if((state_val_11410 === (5))){
var inst_11393 = cljs.core.println.call(null,"done");
var state_11409__$1 = state_11409;
var statearr_11415_11442 = state_11409__$1;
(statearr_11415_11442[(2)] = inst_11393);

(statearr_11415_11442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (6))){
var inst_11388 = (state_11409[(7)]);
var inst_11395 = cljs.core.async.chan.call(null);
var inst_11396 = cljs.core.first.call(null,inst_11388);
var inst_11397 = (function (){var v = inst_11388;
var rc = inst_11395;
var cmd = inst_11396;
return ((function (v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__){
return (function (res){
var c__8450__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto____$1,v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__){
return (function (state_11419){
var state_val_11420 = (state_11419[(1)]);
if((state_val_11420 === (1))){
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11419__$1,(2),rc,res);
} else {
if((state_val_11420 === (2))){
var inst_11417 = (state_11419[(2)]);
var state_11419__$1 = state_11419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11419__$1,inst_11417);
} else {
return null;
}
}
});})(c__8450__auto____$1,v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____0 = (function (){
var statearr_11424 = [null,null,null,null,null,null,null];
(statearr_11424[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__);

(statearr_11424[(1)] = (1));

return statearr_11424;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____1 = (function (state_11419){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11425){if((e11425 instanceof Object)){
var ex__8342__auto__ = e11425;
var statearr_11426_11443 = state_11419;
(statearr_11426_11443[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11444 = state_11419;
state_11419 = G__11444;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__ = function(state_11419){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____1.call(this,state_11419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11427 = f__8451__auto__.call(null);
(statearr_11427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_11427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto____$1,v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__))
);

return c__8450__auto____$1;
});
;})(v,rc,cmd,inst_11388,inst_11395,inst_11396,state_val_11410,c__8450__auto__))
})();
var inst_11398 = drop_dot.core.pure_js.execAndPrint(inst_11396,inst_11397);
var state_11409__$1 = (function (){var statearr_11428 = state_11409;
(statearr_11428[(8)] = inst_11398);

return statearr_11428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11409__$1,(8),inst_11395);
} else {
if((state_val_11410 === (7))){
var inst_11405 = (state_11409[(2)]);
var state_11409__$1 = state_11409;
var statearr_11429_11445 = state_11409__$1;
(statearr_11429_11445[(2)] = inst_11405);

(statearr_11429_11445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11410 === (8))){
var inst_11388 = (state_11409[(7)]);
var inst_11400 = (state_11409[(2)]);
var inst_11401 = cljs.core.rest.call(null,inst_11388);
var inst_11402 = cljs.core.vec.call(null,inst_11401);
var inst_11388__$1 = inst_11402;
var state_11409__$1 = (function (){var statearr_11430 = state_11409;
(statearr_11430[(9)] = inst_11400);

(statearr_11430[(7)] = inst_11388__$1);

return statearr_11430;
})();
var statearr_11431_11446 = state_11409__$1;
(statearr_11431_11446[(2)] = null);

(statearr_11431_11446[(1)] = (3));


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
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____0 = (function (){
var statearr_11435 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11435[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__);

(statearr_11435[(1)] = (1));

return statearr_11435;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____1 = (function (state_11409){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11436){if((e11436 instanceof Object)){
var ex__8342__auto__ = e11436;
var statearr_11437_11447 = state_11409;
(statearr_11437_11447[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11448 = state_11409;
state_11409 = G__11448;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__ = function(state_11409){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____1.call(this,state_11409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11438 = f__8451__auto__.call(null);
(statearr_11438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.call(null);
return drop_dot.core.chan_vec_cmd__GT_exec.call(null,(function (){var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,c){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,c){
return (function (state_11460){
var state_val_11461 = (state_11460[(1)]);
if((state_val_11461 === (1))){
var state_11460__$1 = state_11460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11460__$1,v);
} else {
return null;
}
});})(c__8450__auto__,c))
;
return ((function (switch__8338__auto__,c__8450__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto____0 = (function (){
var statearr_11465 = [null,null,null,null,null,null,null];
(statearr_11465[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto__);

(statearr_11465[(1)] = (1));

return statearr_11465;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto____1 = (function (state_11460){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11466){if((e11466 instanceof Object)){
var ex__8342__auto__ = e11466;
var statearr_11467_11469 = state_11460;
(statearr_11467_11469[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11470 = state_11460;
state_11460 = G__11470;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto__ = function(state_11460){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto____1.call(this,state_11460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,c))
})();
var state__8452__auto__ = (function (){var statearr_11468 = f__8451__auto__.call(null);
(statearr_11468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,c))
);

return c__8450__auto__;
})());
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__,res,d){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__,res,d){
return (function (state_11486){
var state_val_11487 = (state_11486[(1)]);
if((state_val_11487 === (1))){
var state_11486__$1 = state_11486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11486__$1,(2),d,res__$1);
} else {
if((state_val_11487 === (2))){
var inst_11484 = (state_11486[(2)]);
var state_11486__$1 = state_11486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11486__$1,inst_11484);
} else {
return null;
}
}
});})(c__8450__auto__,res,d))
;
return ((function (switch__8338__auto__,c__8450__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto____0 = (function (){
var statearr_11491 = [null,null,null,null,null,null,null];
(statearr_11491[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto__);

(statearr_11491[(1)] = (1));

return statearr_11491;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto____1 = (function (state_11486){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11492){if((e11492 instanceof Object)){
var ex__8342__auto__ = e11492;
var statearr_11493_11495 = state_11486;
(statearr_11493_11495[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11496 = state_11486;
state_11486 = G__11496;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto__ = function(state_11486){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto____1.call(this,state_11486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__,res,d))
})();
var state__8452__auto__ = (function (){var statearr_11494 = f__8451__auto__.call(null);
(statearr_11494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__,res,d))
);

return c__8450__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11524){
var state_val_11525 = (state_11524[(1)]);
if((state_val_11525 === (1))){
var inst_11517 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_11524__$1 = state_11524;
if(cljs.core.truth_(inst_11517)){
var statearr_11526_11537 = state_11524__$1;
(statearr_11526_11537[(1)] = (2));

} else {
var statearr_11527_11538 = state_11524__$1;
(statearr_11527_11538[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (2))){
var state_11524__$1 = state_11524;
var statearr_11528_11539 = state_11524__$1;
(statearr_11528_11539[(2)] = line);

(statearr_11528_11539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (3))){
var inst_11520 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_11524__$1 = state_11524;
var statearr_11529_11540 = state_11524__$1;
(statearr_11529_11540[(2)] = inst_11520);

(statearr_11529_11540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11525 === (4))){
var inst_11522 = (state_11524[(2)]);
var state_11524__$1 = state_11524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11524__$1,inst_11522);
} else {
return null;
}
}
}
}
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto____0 = (function (){
var statearr_11533 = [null,null,null,null,null,null,null];
(statearr_11533[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto__);

(statearr_11533[(1)] = (1));

return statearr_11533;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto____1 = (function (state_11524){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11534){if((e11534 instanceof Object)){
var ex__8342__auto__ = e11534;
var statearr_11535_11541 = state_11524;
(statearr_11535_11541[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11542 = state_11524;
state_11524 = G__11542;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto__ = function(state_11524){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto____1.call(this,state_11524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11536 = f__8451__auto__.call(null);
(statearr_11536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11607){
var state_val_11608 = (state_11607[(1)]);
if((state_val_11608 === (1))){
var state_11607__$1 = state_11607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11607__$1,(2),chan_verified_path);
} else {
if((state_val_11608 === (2))){
var inst_11596 = (state_11607[(7)]);
var inst_11596__$1 = (state_11607[(2)]);
var inst_11597 = (function (){var verified_path = inst_11596__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__8450__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function (state_11612){
var state_val_11613 = (state_11612[(1)]);
if((state_val_11613 === (1))){
var state_11612__$1 = state_11612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11612__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_11613 === (2))){
var inst_11610 = (state_11612[(2)]);
var state_11612__$1 = state_11612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11612__$1,inst_11610);
} else {
return null;
}
}
});})(c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0 = (function (){
var statearr_11617 = [null,null,null,null,null,null,null];
(statearr_11617[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__);

(statearr_11617[(1)] = (1));

return statearr_11617;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1 = (function (state_11612){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11618){if((e11618 instanceof Object)){
var ex__8342__auto__ = e11618;
var statearr_11619_11647 = state_11612;
(statearr_11619_11647[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11648 = state_11612;
state_11612 = G__11648;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__ = function(state_11612){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1.call(this,state_11612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11620 = f__8451__auto__.call(null);
(statearr_11620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_11620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
);

return c__8450__auto____$1;
} else {
var c__8450__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function (state_11625){
var state_val_11626 = (state_11625[(1)]);
if((state_val_11626 === (1))){
var inst_11621 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_11625__$1 = state_11625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11625__$1,(2),drop_dot.core.c,inst_11621);
} else {
if((state_val_11626 === (2))){
var inst_11623 = (state_11625[(2)]);
var state_11625__$1 = state_11625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11625__$1,inst_11623);
} else {
return null;
}
}
});})(c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0 = (function (){
var statearr_11630 = [null,null,null,null,null,null,null];
(statearr_11630[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__);

(statearr_11630[(1)] = (1));

return statearr_11630;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1 = (function (state_11625){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11631){if((e11631 instanceof Object)){
var ex__8342__auto__ = e11631;
var statearr_11632_11649 = state_11625;
(statearr_11632_11649[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11650 = state_11625;
state_11625 = G__11650;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__ = function(state_11625){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1.call(this,state_11625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11633 = f__8451__auto__.call(null);
(statearr_11633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_11633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto____$1,verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
);

return c__8450__auto____$1;
}
});
;})(verified_path,rc,inst_11596,inst_11596__$1,state_val_11608,c__8450__auto__))
})();
var inst_11598 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_11596__$1);
var state_11607__$1 = (function (){var statearr_11634 = state_11607;
(statearr_11634[(8)] = inst_11597);

(statearr_11634[(7)] = inst_11596__$1);

return statearr_11634;
})();
if(cljs.core.truth_(inst_11598)){
var statearr_11635_11651 = state_11607__$1;
(statearr_11635_11651[(1)] = (3));

} else {
var statearr_11636_11652 = state_11607__$1;
(statearr_11636_11652[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11608 === (3))){
var inst_11596 = (state_11607[(7)]);
var state_11607__$1 = state_11607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11607__$1,(6),cljs.core.async.chan,inst_11596);
} else {
if((state_val_11608 === (4))){
var inst_11597 = (state_11607[(8)]);
var inst_11596 = (state_11607[(7)]);
var inst_11603 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_11596,inst_11597);
var state_11607__$1 = state_11607;
var statearr_11637_11653 = state_11607__$1;
(statearr_11637_11653[(2)] = inst_11603);

(statearr_11637_11653[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11608 === (5))){
var inst_11605 = (state_11607[(2)]);
var state_11607__$1 = (function (){var statearr_11638 = state_11607;
(statearr_11638[(9)] = inst_11605);

return statearr_11638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11607__$1,cljs.core.async.chan);
} else {
if((state_val_11608 === (6))){
var inst_11601 = (state_11607[(2)]);
var state_11607__$1 = state_11607;
var statearr_11639_11654 = state_11607__$1;
(statearr_11639_11654[(2)] = inst_11601);

(statearr_11639_11654[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0 = (function (){
var statearr_11643 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11643[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__);

(statearr_11643[(1)] = (1));

return statearr_11643;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1 = (function (state_11607){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11644){if((e11644 instanceof Object)){
var ex__8342__auto__ = e11644;
var statearr_11645_11655 = state_11607;
(statearr_11645_11655[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11656 = state_11607;
state_11607 = G__11656;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__ = function(state_11607){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1.call(this,state_11607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11646 = f__8451__auto__.call(null);
(statearr_11646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11691){
var state_val_11692 = (state_11691[(1)]);
if((state_val_11692 === (1))){
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11691__$1,(2),c);
} else {
if((state_val_11692 === (2))){
var inst_11682 = (state_11691[(7)]);
var inst_11682__$1 = (state_11691[(2)]);
var inst_11683 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_11682__$1);
var state_11691__$1 = (function (){var statearr_11693 = state_11691;
(statearr_11693[(7)] = inst_11682__$1);

return statearr_11693;
})();
if(cljs.core.truth_(inst_11683)){
var statearr_11694_11705 = state_11691__$1;
(statearr_11694_11705[(1)] = (3));

} else {
var statearr_11695_11706 = state_11691__$1;
(statearr_11695_11706[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (3))){
var inst_11682 = (state_11691[(7)]);
var inst_11685 = cljs.core.println.call(null,inst_11682);
var state_11691__$1 = state_11691;
var statearr_11696_11707 = state_11691__$1;
(statearr_11696_11707[(2)] = inst_11685);

(statearr_11696_11707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (4))){
var inst_11682 = (state_11691[(7)]);
var inst_11687 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_11682);
var state_11691__$1 = state_11691;
var statearr_11697_11708 = state_11691__$1;
(statearr_11697_11708[(2)] = inst_11687);

(statearr_11697_11708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (5))){
var inst_11689 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11691__$1,inst_11689);
} else {
return null;
}
}
}
}
}
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto____0 = (function (){
var statearr_11701 = [null,null,null,null,null,null,null,null];
(statearr_11701[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto__);

(statearr_11701[(1)] = (1));

return statearr_11701;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto____1 = (function (state_11691){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11702){if((e11702 instanceof Object)){
var ex__8342__auto__ = e11702;
var statearr_11703_11709 = state_11691;
(statearr_11703_11709[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11710 = state_11691;
state_11691 = G__11710;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto__ = function(state_11691){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto____1.call(this,state_11691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11704 = f__8451__auto__.call(null);
(statearr_11704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_a_chan_verified_linkee.call(null,drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_11790){
var state_val_11791 = (state_11790[(1)]);
if((state_val_11791 === (7))){
var inst_11785 = (state_11790[(2)]);
var inst_11786 = cljs.core.println.call(null,"done");
var state_11790__$1 = (function (){var statearr_11793 = state_11790;
(statearr_11793[(7)] = inst_11785);

return statearr_11793;
})();
var statearr_11794_11819 = state_11790__$1;
(statearr_11794_11819[(2)] = inst_11786);

(statearr_11794_11819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (1))){
var inst_11765 = chan_config;
var state_11790__$1 = (function (){var statearr_11795 = state_11790;
(statearr_11795[(8)] = inst_11765);

return statearr_11795;
})();
var statearr_11796_11820 = state_11790__$1;
(statearr_11796_11820[(2)] = null);

(statearr_11796_11820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (4))){
var inst_11768 = (state_11790[(9)]);
var inst_11768__$1 = (state_11790[(2)]);
var state_11790__$1 = (function (){var statearr_11797 = state_11790;
(statearr_11797[(9)] = inst_11768__$1);

return statearr_11797;
})();
if(cljs.core.truth_(inst_11768__$1)){
var statearr_11798_11821 = state_11790__$1;
(statearr_11798_11821[(1)] = (5));

} else {
var statearr_11799_11822 = state_11790__$1;
(statearr_11799_11822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (13))){
var inst_11765 = (state_11790[(8)]);
var inst_11781 = (state_11790[(2)]);
var tmp11792 = inst_11765;
var inst_11765__$1 = tmp11792;
var state_11790__$1 = (function (){var statearr_11800 = state_11790;
(statearr_11800[(8)] = inst_11765__$1);

(statearr_11800[(10)] = inst_11781);

return statearr_11800;
})();
var statearr_11801_11823 = state_11790__$1;
(statearr_11801_11823[(2)] = null);

(statearr_11801_11823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (6))){
var state_11790__$1 = state_11790;
var statearr_11802_11824 = state_11790__$1;
(statearr_11802_11824[(2)] = null);

(statearr_11802_11824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (3))){
var inst_11788 = (state_11790[(2)]);
var state_11790__$1 = state_11790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11790__$1,inst_11788);
} else {
if((state_val_11791 === (12))){
var state_11790__$1 = state_11790;
var statearr_11803_11825 = state_11790__$1;
(statearr_11803_11825[(2)] = null);

(statearr_11803_11825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (2))){
var inst_11765 = (state_11790[(8)]);
var state_11790__$1 = state_11790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11790__$1,(4),inst_11765);
} else {
if((state_val_11791 === (11))){
var inst_11768 = (state_11790[(9)]);
var inst_11778 = drop_dot.core.link_line.call(null,inst_11768);
var state_11790__$1 = state_11790;
var statearr_11804_11826 = state_11790__$1;
(statearr_11804_11826[(2)] = inst_11778);

(statearr_11804_11826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (9))){
var state_11790__$1 = state_11790;
var statearr_11805_11827 = state_11790__$1;
(statearr_11805_11827[(2)] = null);

(statearr_11805_11827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (5))){
var inst_11770 = cljs.core._EQ_.call(null,cmd,"drop");
var state_11790__$1 = state_11790;
if(inst_11770){
var statearr_11806_11828 = state_11790__$1;
(statearr_11806_11828[(1)] = (8));

} else {
var statearr_11807_11829 = state_11790__$1;
(statearr_11807_11829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (10))){
var inst_11775 = (state_11790[(2)]);
var inst_11776 = cljs.core._EQ_.call(null,cmd,"link");
var state_11790__$1 = (function (){var statearr_11808 = state_11790;
(statearr_11808[(11)] = inst_11775);

return statearr_11808;
})();
if(inst_11776){
var statearr_11809_11830 = state_11790__$1;
(statearr_11809_11830[(1)] = (11));

} else {
var statearr_11810_11831 = state_11790__$1;
(statearr_11810_11831[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11791 === (8))){
var inst_11768 = (state_11790[(9)]);
var inst_11772 = drop_dot.core.drop_line.call(null,inst_11768);
var state_11790__$1 = state_11790;
var statearr_11811_11832 = state_11790__$1;
(statearr_11811_11832[(2)] = inst_11772);

(statearr_11811_11832[(1)] = (10));


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
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto____0 = (function (){
var statearr_11815 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11815[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto__);

(statearr_11815[(1)] = (1));

return statearr_11815;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto____1 = (function (state_11790){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11816){if((e11816 instanceof Object)){
var ex__8342__auto__ = e11816;
var statearr_11817_11833 = state_11790;
(statearr_11817_11833[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11834 = state_11790;
state_11790 = G__11834;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto__ = function(state_11790){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto____1.call(this,state_11790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_11818 = f__8451__auto__.call(null);
(statearr_11818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_11818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__8450__auto___11931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto___11931,c){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto___11931,c){
return (function (state_11895){
var state_val_11896 = (state_11895[(1)]);
if((state_val_11896 === (1))){
var inst_11884 = (state_11895[(7)]);
var inst_11885 = (state_11895[(8)]);
var inst_11883 = (state_11895[(9)]);
var inst_11883__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_11884__$1 = cljs.core.async.chan.call(null,(1));
var inst_11885__$1 = (function (){var res = inst_11883__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_11884__$1;
return ((function (res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c){
return (function (error,res__$1){
var c__8450__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto____$1,res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c){
return (function (state_11900){
var state_val_11901 = (state_11900[(1)]);
if((state_val_11901 === (1))){
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11900__$1,(2),wcc,res__$1);
} else {
if((state_val_11901 === (2))){
var inst_11898 = (state_11900[(2)]);
var state_11900__$1 = state_11900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11900__$1,inst_11898);
} else {
return null;
}
}
});})(c__8450__auto____$1,res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0 = (function (){
var statearr_11905 = [null,null,null,null,null,null,null];
(statearr_11905[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8339__auto__);

(statearr_11905[(1)] = (1));

return statearr_11905;
});
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1 = (function (state_11900){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11906){if((e11906 instanceof Object)){
var ex__8342__auto__ = e11906;
var statearr_11907_11932 = state_11900;
(statearr_11907_11932[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11933 = state_11900;
state_11900 = G__11933;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__ = function(state_11900){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1.call(this,state_11900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c))
})();
var state__8452__auto__ = (function (){var statearr_11908 = f__8451__auto__.call(null);
(statearr_11908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_11908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto____$1,res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c))
);

return c__8450__auto____$1;
});
;})(res,config_path,wcc,inst_11884,inst_11885,inst_11883,inst_11883__$1,inst_11884__$1,state_val_11896,c__8450__auto___11931,c))
})();
var inst_11886 = inst_11883__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_11885__$1);
var state_11895__$1 = (function (){var statearr_11909 = state_11895;
(statearr_11909[(7)] = inst_11884__$1);

(statearr_11909[(8)] = inst_11885__$1);

(statearr_11909[(10)] = inst_11886);

(statearr_11909[(9)] = inst_11883__$1);

return statearr_11909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11895__$1,(2),inst_11884__$1);
} else {
if((state_val_11896 === (2))){
var inst_11884 = (state_11895[(7)]);
var inst_11885 = (state_11895[(8)]);
var inst_11886 = (state_11895[(10)]);
var inst_11883 = (state_11895[(9)]);
var inst_11888 = (state_11895[(2)]);
var inst_11889 = [cljs.core.str(inst_11888)].join('');
var inst_11890 = parseInt(inst_11889);
var inst_11891 = (function (){var res = inst_11883;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_11884;
var wcc_jammer = inst_11885;
var get_wc = inst_11886;
var lines = inst_11890;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,state_val_11896,c__8450__auto___11931,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,state_val_11896,c__8450__auto___11931,c))
})();
var inst_11892 = (function (){var res = inst_11883;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_11884;
var wcc_jammer = inst_11885;
var get_wc = inst_11886;
var lines = inst_11890;
var close_if_done = inst_11891;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c){
return (function (res__$1){
var c__8450__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c){
return (function (state_11914){
var state_val_11915 = (state_11914[(1)]);
if((state_val_11915 === (1))){
var state_11914__$1 = state_11914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11914__$1,(2),c,res__$1);
} else {
if((state_val_11915 === (2))){
var inst_11911 = (state_11914[(2)]);
var inst_11912 = close_if_done.call(null);
var state_11914__$1 = (function (){var statearr_11916 = state_11914;
(statearr_11916[(7)] = inst_11911);

return statearr_11916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11914__$1,inst_11912);
} else {
return null;
}
}
});})(c__8450__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c))
;
return ((function (switch__8338__auto__,c__8450__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0 = (function (){
var statearr_11920 = [null,null,null,null,null,null,null,null];
(statearr_11920[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8339__auto__);

(statearr_11920[(1)] = (1));

return statearr_11920;
});
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1 = (function (state_11914){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11921){if((e11921 instanceof Object)){
var ex__8342__auto__ = e11921;
var statearr_11922_11934 = state_11914;
(statearr_11922_11934[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11935 = state_11914;
state_11914 = G__11935;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__ = function(state_11914){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1.call(this,state_11914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c))
})();
var state__8452__auto__ = (function (){var statearr_11923 = f__8451__auto__.call(null);
(statearr_11923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto____$1);

return statearr_11923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c))
);

return c__8450__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_11884,inst_11885,inst_11886,inst_11883,inst_11888,inst_11889,inst_11890,inst_11891,state_val_11896,c__8450__auto___11931,c))
})();
var inst_11893 = inst_11883.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_11892);
var state_11895__$1 = state_11895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11895__$1,inst_11893);
} else {
return null;
}
}
});})(c__8450__auto___11931,c))
;
return ((function (switch__8338__auto__,c__8450__auto___11931,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0 = (function (){
var statearr_11927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11927[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8339__auto__);

(statearr_11927[(1)] = (1));

return statearr_11927;
});
var drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1 = (function (state_11895){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_11895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e11928){if((e11928 instanceof Object)){
var ex__8342__auto__ = e11928;
var statearr_11929_11936 = state_11895;
(statearr_11929_11936[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11937 = state_11895;
state_11895 = G__11937;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__ = function(state_11895){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1.call(this,state_11895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8339__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8339__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto___11931,c))
})();
var state__8452__auto__ = (function (){var statearr_11930 = f__8451__auto__.call(null);
(statearr_11930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto___11931);

return statearr_11930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto___11931,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___11939 = arguments.length;
var i__7019__auto___11940 = (0);
while(true){
if((i__7019__auto___11940 < len__7018__auto___11939)){
args__7025__auto__.push((arguments[i__7019__auto___11940]));

var G__11941 = (i__7019__auto___11940 + (1));
i__7019__auto___11940 = G__11941;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq11938){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11938));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map