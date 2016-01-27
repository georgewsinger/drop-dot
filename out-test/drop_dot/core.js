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
return (function (state_90249){
var state_val_90250 = (state_90249[(1)]);
if((state_val_90250 === (1))){
var state_90249__$1 = state_90249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90249__$1,(2),c,arg);
} else {
if((state_val_90250 === (2))){
var inst_90247 = (state_90249[(2)]);
var state_90249__$1 = state_90249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90249__$1,inst_90247);
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
var statearr_90254 = [null,null,null,null,null,null,null];
(statearr_90254[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_90254[(1)] = (1));

return statearr_90254;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_90249){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90255){if((e90255 instanceof Object)){
var ex__9301__auto__ = e90255;
var statearr_90256_90258 = state_90249;
(statearr_90256_90258[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90259 = state_90249;
state_90249 = G__90259;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_90249){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_90249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90257 = f__9319__auto__.call(null);
(statearr_90257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90257;
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
return (function (state_90275){
var state_val_90276 = (state_90275[(1)]);
if((state_val_90276 === (1))){
var state_90275__$1 = state_90275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90275__$1,(2),c,arg);
} else {
if((state_val_90276 === (2))){
var inst_90273 = (state_90275[(2)]);
var state_90275__$1 = state_90275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90275__$1,inst_90273);
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
var statearr_90280 = [null,null,null,null,null,null,null];
(statearr_90280[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_90280[(1)] = (1));

return statearr_90280;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_90275){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90281){if((e90281 instanceof Object)){
var ex__9301__auto__ = e90281;
var statearr_90282_90284 = state_90275;
(statearr_90282_90284[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90285 = state_90275;
state_90275 = G__90285;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_90275){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_90275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90283 = f__9319__auto__.call(null);
(statearr_90283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90283;
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
return (function (state_90362){
var state_val_90363 = (state_90362[(1)]);
if((state_val_90363 === (1))){
var state_90362__$1 = state_90362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90362__$1,(2),input_chan);
} else {
if((state_val_90363 === (2))){
var inst_90340 = (state_90362[(2)]);
var inst_90341 = inst_90340;
var state_90362__$1 = (function (){var statearr_90364 = state_90362;
(statearr_90364[(7)] = inst_90341);

return statearr_90364;
})();
var statearr_90365_90392 = state_90362__$1;
(statearr_90365_90392[(2)] = null);

(statearr_90365_90392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90363 === (3))){
var inst_90341 = (state_90362[(7)]);
var inst_90343 = cljs.core.count.call(null,inst_90341);
var inst_90344 = cljs.core._EQ_.call(null,inst_90343,(0));
var state_90362__$1 = state_90362;
if(inst_90344){
var statearr_90366_90393 = state_90362__$1;
(statearr_90366_90393[(1)] = (5));

} else {
var statearr_90367_90394 = state_90362__$1;
(statearr_90367_90394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90363 === (4))){
var inst_90360 = (state_90362[(2)]);
var state_90362__$1 = state_90362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90362__$1,inst_90360);
} else {
if((state_val_90363 === (5))){
var inst_90346 = cljs.core.println.call(null,"done");
var state_90362__$1 = state_90362;
var statearr_90368_90395 = state_90362__$1;
(statearr_90368_90395[(2)] = inst_90346);

(statearr_90368_90395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90363 === (6))){
var inst_90341 = (state_90362[(7)]);
var inst_90348 = cljs.core.async.chan.call(null);
var inst_90349 = cljs.core.first.call(null,inst_90341);
var inst_90350 = (function (){var v = inst_90341;
var rc = inst_90348;
var cmd = inst_90349;
return ((function (v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__){
return (function (state_90372){
var state_val_90373 = (state_90372[(1)]);
if((state_val_90373 === (1))){
var state_90372__$1 = state_90372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90372__$1,(2),rc,res);
} else {
if((state_val_90373 === (2))){
var inst_90370 = (state_90372[(2)]);
var state_90372__$1 = state_90372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90372__$1,inst_90370);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_90377 = [null,null,null,null,null,null,null];
(statearr_90377[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_90377[(1)] = (1));

return statearr_90377;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_90372){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90378){if((e90378 instanceof Object)){
var ex__9301__auto__ = e90378;
var statearr_90379_90396 = state_90372;
(statearr_90379_90396[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90397 = state_90372;
state_90372 = G__90397;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_90372){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_90372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90380 = f__9319__auto__.call(null);
(statearr_90380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_90341,inst_90348,inst_90349,state_val_90363,c__9318__auto__))
})();
var inst_90351 = drop_dot.core.pure_js.execAndPrint(inst_90349,inst_90350);
var state_90362__$1 = (function (){var statearr_90381 = state_90362;
(statearr_90381[(8)] = inst_90351);

return statearr_90381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90362__$1,(8),inst_90348);
} else {
if((state_val_90363 === (7))){
var inst_90358 = (state_90362[(2)]);
var state_90362__$1 = state_90362;
var statearr_90382_90398 = state_90362__$1;
(statearr_90382_90398[(2)] = inst_90358);

(statearr_90382_90398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90363 === (8))){
var inst_90341 = (state_90362[(7)]);
var inst_90353 = (state_90362[(2)]);
var inst_90354 = cljs.core.rest.call(null,inst_90341);
var inst_90355 = cljs.core.vec.call(null,inst_90354);
var inst_90341__$1 = inst_90355;
var state_90362__$1 = (function (){var statearr_90383 = state_90362;
(statearr_90383[(7)] = inst_90341__$1);

(statearr_90383[(9)] = inst_90353);

return statearr_90383;
})();
var statearr_90384_90399 = state_90362__$1;
(statearr_90384_90399[(2)] = null);

(statearr_90384_90399[(1)] = (3));


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
var statearr_90388 = [null,null,null,null,null,null,null,null,null,null];
(statearr_90388[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_90388[(1)] = (1));

return statearr_90388;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_90362){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90389){if((e90389 instanceof Object)){
var ex__9301__auto__ = e90389;
var statearr_90390_90400 = state_90362;
(statearr_90390_90400[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90401 = state_90362;
state_90362 = G__90401;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_90362){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_90362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90391 = f__9319__auto__.call(null);
(statearr_90391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90391;
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
return (function (state_90413){
var state_val_90414 = (state_90413[(1)]);
if((state_val_90414 === (1))){
var state_90413__$1 = state_90413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90413__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_90418 = [null,null,null,null,null,null,null];
(statearr_90418[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_90418[(1)] = (1));

return statearr_90418;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_90413){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90419){if((e90419 instanceof Object)){
var ex__9301__auto__ = e90419;
var statearr_90420_90422 = state_90413;
(statearr_90420_90422[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90423 = state_90413;
state_90413 = G__90423;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_90413){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_90413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_90421 = f__9319__auto__.call(null);
(statearr_90421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90421;
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
return (function (state_90439){
var state_val_90440 = (state_90439[(1)]);
if((state_val_90440 === (1))){
var state_90439__$1 = state_90439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90439__$1,(2),d,res__$1);
} else {
if((state_val_90440 === (2))){
var inst_90437 = (state_90439[(2)]);
var state_90439__$1 = state_90439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90439__$1,inst_90437);
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
var statearr_90444 = [null,null,null,null,null,null,null];
(statearr_90444[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_90444[(1)] = (1));

return statearr_90444;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_90439){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90445){if((e90445 instanceof Object)){
var ex__9301__auto__ = e90445;
var statearr_90446_90448 = state_90439;
(statearr_90446_90448[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90449 = state_90439;
state_90439 = G__90449;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_90439){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_90439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_90447 = f__9319__auto__.call(null);
(statearr_90447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90447;
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
return (function (state_90481){
var state_val_90482 = (state_90481[(1)]);
if((state_val_90482 === (1))){
var inst_90472 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_90481__$1 = state_90481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90481__$1,(2),inst_90472);
} else {
if((state_val_90482 === (2))){
var inst_90474 = (state_90481[(2)]);
var state_90481__$1 = state_90481;
if(cljs.core.truth_(inst_90474)){
var statearr_90483_90494 = state_90481__$1;
(statearr_90483_90494[(1)] = (3));

} else {
var statearr_90484_90495 = state_90481__$1;
(statearr_90484_90495[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90482 === (3))){
var state_90481__$1 = state_90481;
var statearr_90485_90496 = state_90481__$1;
(statearr_90485_90496[(2)] = line);

(statearr_90485_90496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90482 === (4))){
var inst_90477 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_90481__$1 = state_90481;
var statearr_90486_90497 = state_90481__$1;
(statearr_90486_90497[(2)] = inst_90477);

(statearr_90486_90497[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90482 === (5))){
var inst_90479 = (state_90481[(2)]);
var state_90481__$1 = state_90481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90481__$1,inst_90479);
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
var statearr_90490 = [null,null,null,null,null,null,null];
(statearr_90490[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_90490[(1)] = (1));

return statearr_90490;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_90481){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90491){if((e90491 instanceof Object)){
var ex__9301__auto__ = e90491;
var statearr_90492_90498 = state_90481;
(statearr_90492_90498[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90499 = state_90481;
state_90481 = G__90499;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_90481){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_90481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90493 = f__9319__auto__.call(null);
(statearr_90493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90493;
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
return (function (state_90570){
var state_val_90571 = (state_90570[(1)]);
if((state_val_90571 === (1))){
var state_90570__$1 = state_90570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90570__$1,(2),chan_verified_path);
} else {
if((state_val_90571 === (2))){
var inst_90557 = (state_90570[(7)]);
var inst_90556 = (state_90570[(8)]);
var inst_90556__$1 = (state_90570[(2)]);
var inst_90557__$1 = cljs.core.async.chan.call(null,(1));
var inst_90558 = (function (){var verified_path = inst_90556__$1;
var rc = inst_90557__$1;
return ((function (verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function (state_90576){
var state_val_90577 = (state_90576[(1)]);
if((state_val_90577 === (1))){
var inst_90572 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_90576__$1 = state_90576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90576__$1,(2),rc,inst_90572);
} else {
if((state_val_90577 === (2))){
var inst_90574 = (state_90576[(2)]);
var state_90576__$1 = state_90576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90576__$1,inst_90574);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_90581 = [null,null,null,null,null,null,null];
(statearr_90581[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90581[(1)] = (1));

return statearr_90581;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90576){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90582){if((e90582 instanceof Object)){
var ex__9301__auto__ = e90582;
var statearr_90583_90610 = state_90576;
(statearr_90583_90610[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90611 = state_90576;
state_90576 = G__90611;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90576){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90584 = f__9319__auto__.call(null);
(statearr_90584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function (state_90588){
var state_val_90589 = (state_90588[(1)]);
if((state_val_90589 === (1))){
var state_90588__$1 = state_90588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90588__$1,(2),rc,verified_path);
} else {
if((state_val_90589 === (2))){
var inst_90586 = (state_90588[(2)]);
var state_90588__$1 = state_90588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90588__$1,inst_90586);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_90593 = [null,null,null,null,null,null,null];
(statearr_90593[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90593[(1)] = (1));

return statearr_90593;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90588){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90594){if((e90594 instanceof Object)){
var ex__9301__auto__ = e90594;
var statearr_90595_90612 = state_90588;
(statearr_90595_90612[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90613 = state_90588;
state_90588 = G__90613;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90588){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90596 = f__9319__auto__.call(null);
(statearr_90596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_90557,inst_90556,inst_90556__$1,inst_90557__$1,state_val_90571,c__9318__auto__))
})();
var inst_90559 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90556__$1);
var state_90570__$1 = (function (){var statearr_90597 = state_90570;
(statearr_90597[(7)] = inst_90557__$1);

(statearr_90597[(9)] = inst_90558);

(statearr_90597[(8)] = inst_90556__$1);

return statearr_90597;
})();
if(cljs.core.truth_(inst_90559)){
var statearr_90598_90614 = state_90570__$1;
(statearr_90598_90614[(1)] = (3));

} else {
var statearr_90599_90615 = state_90570__$1;
(statearr_90599_90615[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (3))){
var inst_90557 = (state_90570[(7)]);
var inst_90556 = (state_90570[(8)]);
var state_90570__$1 = state_90570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90570__$1,(6),inst_90557,inst_90556);
} else {
if((state_val_90571 === (4))){
var inst_90558 = (state_90570[(9)]);
var inst_90556 = (state_90570[(8)]);
var inst_90564 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_90556,inst_90558);
var state_90570__$1 = state_90570;
var statearr_90600_90616 = state_90570__$1;
(statearr_90600_90616[(2)] = inst_90564);

(statearr_90600_90616[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (5))){
var inst_90557 = (state_90570[(7)]);
var inst_90566 = (state_90570[(2)]);
var state_90570__$1 = (function (){var statearr_90601 = state_90570;
(statearr_90601[(10)] = inst_90566);

return statearr_90601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90570__$1,(7),inst_90557);
} else {
if((state_val_90571 === (6))){
var inst_90562 = (state_90570[(2)]);
var state_90570__$1 = state_90570;
var statearr_90602_90617 = state_90570__$1;
(statearr_90602_90617[(2)] = inst_90562);

(statearr_90602_90617[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90571 === (7))){
var inst_90568 = (state_90570[(2)]);
var state_90570__$1 = state_90570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90570__$1,inst_90568);
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
var statearr_90606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90606[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90606[(1)] = (1));

return statearr_90606;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90570){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90607){if((e90607 instanceof Object)){
var ex__9301__auto__ = e90607;
var statearr_90608_90618 = state_90570;
(statearr_90608_90618[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90619 = state_90570;
state_90570 = G__90619;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90570){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90609 = f__9319__auto__.call(null);
(statearr_90609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90609;
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
return (function (state_90654){
var state_val_90655 = (state_90654[(1)]);
if((state_val_90655 === (1))){
var state_90654__$1 = state_90654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90654__$1,(2),c);
} else {
if((state_val_90655 === (2))){
var inst_90645 = (state_90654[(7)]);
var inst_90645__$1 = (state_90654[(2)]);
var inst_90646 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90645__$1);
var state_90654__$1 = (function (){var statearr_90656 = state_90654;
(statearr_90656[(7)] = inst_90645__$1);

return statearr_90656;
})();
if(cljs.core.truth_(inst_90646)){
var statearr_90657_90668 = state_90654__$1;
(statearr_90657_90668[(1)] = (3));

} else {
var statearr_90658_90669 = state_90654__$1;
(statearr_90658_90669[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (3))){
var inst_90645 = (state_90654[(7)]);
var inst_90648 = cljs.core.println.call(null,inst_90645);
var state_90654__$1 = state_90654;
var statearr_90659_90670 = state_90654__$1;
(statearr_90659_90670[(2)] = inst_90648);

(statearr_90659_90670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (4))){
var inst_90645 = (state_90654[(7)]);
var inst_90650 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_90645);
var state_90654__$1 = state_90654;
var statearr_90660_90671 = state_90654__$1;
(statearr_90660_90671[(2)] = inst_90650);

(statearr_90660_90671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90655 === (5))){
var inst_90652 = (state_90654[(2)]);
var state_90654__$1 = state_90654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90654__$1,inst_90652);
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
var statearr_90664 = [null,null,null,null,null,null,null,null];
(statearr_90664[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_90664[(1)] = (1));

return statearr_90664;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_90654){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90665){if((e90665 instanceof Object)){
var ex__9301__auto__ = e90665;
var statearr_90666_90672 = state_90654;
(statearr_90666_90672[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90673 = state_90654;
state_90654 = G__90673;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_90654){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_90654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90667 = f__9319__auto__.call(null);
(statearr_90667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90667;
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
return (function (state_90702){
var state_val_90703 = (state_90702[(1)]);
if((state_val_90703 === (1))){
var state_90702__$1 = state_90702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90702__$1,(2),rc,line);
} else {
if((state_val_90703 === (2))){
var inst_90700 = (state_90702[(2)]);
var state_90702__$1 = state_90702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90702__$1,inst_90700);
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
var statearr_90707 = [null,null,null,null,null,null,null];
(statearr_90707[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_90707[(1)] = (1));

return statearr_90707;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_90702){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90708){if((e90708 instanceof Object)){
var ex__9301__auto__ = e90708;
var statearr_90709_90724 = state_90702;
(statearr_90709_90724[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90725 = state_90702;
state_90702 = G__90725;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_90702){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_90702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_90710 = f__9319__auto__.call(null);
(statearr_90710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90710;
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
return (function (state_90715){
var state_val_90716 = (state_90715[(1)]);
if((state_val_90716 === (1))){
var inst_90711 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_90715__$1 = state_90715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90715__$1,(2),rc,inst_90711);
} else {
if((state_val_90716 === (2))){
var inst_90713 = (state_90715[(2)]);
var state_90715__$1 = state_90715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90715__$1,inst_90713);
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
var statearr_90720 = [null,null,null,null,null,null,null];
(statearr_90720[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_90720[(1)] = (1));

return statearr_90720;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_90715){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90721){if((e90721 instanceof Object)){
var ex__9301__auto__ = e90721;
var statearr_90722_90726 = state_90715;
(statearr_90722_90726[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90727 = state_90715;
state_90715 = G__90727;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_90715){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_90715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_90723 = f__9319__auto__.call(null);
(statearr_90723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90723;
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
drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking(chan_linkable_path){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_90798){
var state_val_90799 = (state_90798[(1)]);
if((state_val_90799 === (1))){
var state_90798__$1 = state_90798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90798__$1,(2),chan_linkable_path);
} else {
if((state_val_90799 === (2))){
var inst_90785 = (state_90798[(7)]);
var inst_90784 = (state_90798[(8)]);
var inst_90784__$1 = (state_90798[(2)]);
var inst_90785__$1 = cljs.core.async.chan.call(null,(1));
var inst_90786 = (function (){var linkable_path = inst_90784__$1;
var rc = inst_90785__$1;
return ((function (linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function (state_90804){
var state_val_90805 = (state_90804[(1)]);
if((state_val_90805 === (1))){
var inst_90800 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_90804__$1 = state_90804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90804__$1,(2),rc,inst_90800);
} else {
if((state_val_90805 === (2))){
var inst_90802 = (state_90804[(2)]);
var state_90804__$1 = state_90804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90804__$1,inst_90802);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90809 = [null,null,null,null,null,null,null];
(statearr_90809[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_90809[(1)] = (1));

return statearr_90809;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_90804){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90810){if((e90810 instanceof Object)){
var ex__9301__auto__ = e90810;
var statearr_90811_90838 = state_90804;
(statearr_90811_90838[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90839 = state_90804;
state_90804 = G__90839;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_90804){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_90804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90812 = f__9319__auto__.call(null);
(statearr_90812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function (state_90816){
var state_val_90817 = (state_90816[(1)]);
if((state_val_90817 === (1))){
var state_90816__$1 = state_90816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90816__$1,(2),rc,linkable_path);
} else {
if((state_val_90817 === (2))){
var inst_90814 = (state_90816[(2)]);
var state_90816__$1 = state_90816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90816__$1,inst_90814);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90821 = [null,null,null,null,null,null,null];
(statearr_90821[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_90821[(1)] = (1));

return statearr_90821;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_90816){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90822){if((e90822 instanceof Object)){
var ex__9301__auto__ = e90822;
var statearr_90823_90840 = state_90816;
(statearr_90823_90840[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90841 = state_90816;
state_90816 = G__90841;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_90816){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_90816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90824 = f__9319__auto__.call(null);
(statearr_90824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_90785,inst_90784,inst_90784__$1,inst_90785__$1,state_val_90799,c__9318__auto__))
})();
var inst_90787 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90784__$1);
var state_90798__$1 = (function (){var statearr_90825 = state_90798;
(statearr_90825[(9)] = inst_90786);

(statearr_90825[(7)] = inst_90785__$1);

(statearr_90825[(8)] = inst_90784__$1);

return statearr_90825;
})();
if(cljs.core.truth_(inst_90787)){
var statearr_90826_90842 = state_90798__$1;
(statearr_90826_90842[(1)] = (3));

} else {
var statearr_90827_90843 = state_90798__$1;
(statearr_90827_90843[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90799 === (3))){
var inst_90785 = (state_90798[(7)]);
var inst_90784 = (state_90798[(8)]);
var state_90798__$1 = state_90798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90798__$1,(6),inst_90785,inst_90784);
} else {
if((state_val_90799 === (4))){
var inst_90786 = (state_90798[(9)]);
var inst_90784 = (state_90798[(8)]);
var inst_90792 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_90784,inst_90786);
var state_90798__$1 = state_90798;
var statearr_90828_90844 = state_90798__$1;
(statearr_90828_90844[(2)] = inst_90792);

(statearr_90828_90844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90799 === (5))){
var inst_90785 = (state_90798[(7)]);
var inst_90794 = (state_90798[(2)]);
var state_90798__$1 = (function (){var statearr_90829 = state_90798;
(statearr_90829[(10)] = inst_90794);

return statearr_90829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90798__$1,(7),inst_90785);
} else {
if((state_val_90799 === (6))){
var inst_90790 = (state_90798[(2)]);
var state_90798__$1 = state_90798;
var statearr_90830_90845 = state_90798__$1;
(statearr_90830_90845[(2)] = inst_90790);

(statearr_90830_90845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90799 === (7))){
var inst_90796 = (state_90798[(2)]);
var state_90798__$1 = state_90798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90798__$1,inst_90796);
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
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90834[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_90834[(1)] = (1));

return statearr_90834;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_90798){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90835){if((e90835 instanceof Object)){
var ex__9301__auto__ = e90835;
var statearr_90836_90846 = state_90798;
(statearr_90836_90846[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90847 = state_90798;
state_90798 = G__90847;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_90798){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_90798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90837 = f__9319__auto__.call(null);
(statearr_90837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking = (function drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking(chan_linkable_path_that_wants_linking){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_90918){
var state_val_90919 = (state_90918[(1)]);
if((state_val_90919 === (1))){
var state_90918__$1 = state_90918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90918__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_90919 === (2))){
var inst_90905 = (state_90918[(7)]);
var inst_90904 = (state_90918[(8)]);
var inst_90904__$1 = (state_90918[(2)]);
var inst_90905__$1 = cljs.core.async.chan.call(null,(1));
var inst_90906 = (function (){var linkable_path = inst_90904__$1;
var rc = inst_90905__$1;
return ((function (linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function (state_90924){
var state_val_90925 = (state_90924[(1)]);
if((state_val_90925 === (1))){
var inst_90920 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_90924__$1 = state_90924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90924__$1,(2),rc,inst_90920);
} else {
if((state_val_90925 === (2))){
var inst_90922 = (state_90924[(2)]);
var state_90924__$1 = state_90924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90924__$1,inst_90922);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90929 = [null,null,null,null,null,null,null];
(statearr_90929[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_90929[(1)] = (1));

return statearr_90929;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_90924){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90930){if((e90930 instanceof Object)){
var ex__9301__auto__ = e90930;
var statearr_90931_90958 = state_90924;
(statearr_90931_90958[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90959 = state_90924;
state_90924 = G__90959;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_90924){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_90924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90932 = f__9319__auto__.call(null);
(statearr_90932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function (state_90936){
var state_val_90937 = (state_90936[(1)]);
if((state_val_90937 === (1))){
var state_90936__$1 = state_90936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90936__$1,(2),rc,linkable_path);
} else {
if((state_val_90937 === (2))){
var inst_90934 = (state_90936[(2)]);
var state_90936__$1 = state_90936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90936__$1,inst_90934);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90941 = [null,null,null,null,null,null,null];
(statearr_90941[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_90941[(1)] = (1));

return statearr_90941;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_90936){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90942){if((e90942 instanceof Object)){
var ex__9301__auto__ = e90942;
var statearr_90943_90960 = state_90936;
(statearr_90943_90960[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90961 = state_90936;
state_90936 = G__90961;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_90936){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_90936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90944 = f__9319__auto__.call(null);
(statearr_90944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_90944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_90905,inst_90904,inst_90904__$1,inst_90905__$1,state_val_90919,c__9318__auto__))
})();
var inst_90907 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_90904__$1);
var state_90918__$1 = (function (){var statearr_90945 = state_90918;
(statearr_90945[(9)] = inst_90906);

(statearr_90945[(7)] = inst_90905__$1);

(statearr_90945[(8)] = inst_90904__$1);

return statearr_90945;
})();
if(cljs.core.truth_(inst_90907)){
var statearr_90946_90962 = state_90918__$1;
(statearr_90946_90962[(1)] = (3));

} else {
var statearr_90947_90963 = state_90918__$1;
(statearr_90947_90963[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90919 === (3))){
var inst_90905 = (state_90918[(7)]);
var inst_90904 = (state_90918[(8)]);
var state_90918__$1 = state_90918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90918__$1,(6),inst_90905,inst_90904);
} else {
if((state_val_90919 === (4))){
var inst_90906 = (state_90918[(9)]);
var inst_90904 = (state_90918[(8)]);
var inst_90912 = drop_dot.core.pure_js.pathExists(inst_90904,inst_90906);
var state_90918__$1 = state_90918;
var statearr_90948_90964 = state_90918__$1;
(statearr_90948_90964[(2)] = inst_90912);

(statearr_90948_90964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90919 === (5))){
var inst_90905 = (state_90918[(7)]);
var inst_90914 = (state_90918[(2)]);
var state_90918__$1 = (function (){var statearr_90949 = state_90918;
(statearr_90949[(10)] = inst_90914);

return statearr_90949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90918__$1,(7),inst_90905);
} else {
if((state_val_90919 === (6))){
var inst_90910 = (state_90918[(2)]);
var state_90918__$1 = state_90918;
var statearr_90950_90965 = state_90918__$1;
(statearr_90950_90965[(2)] = inst_90910);

(statearr_90950_90965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90919 === (7))){
var inst_90916 = (state_90918[(2)]);
var state_90918__$1 = state_90918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90918__$1,inst_90916);
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
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90954[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_90954[(1)] = (1));

return statearr_90954;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_90918){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90955){if((e90955 instanceof Object)){
var ex__9301__auto__ = e90955;
var statearr_90956_90966 = state_90918;
(statearr_90956_90966[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90967 = state_90918;
state_90918 = G__90967;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_90918){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_90918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_90957 = f__9319__auto__.call(null);
(statearr_90957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_90957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__9318__auto___91000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___91000){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___91000){
return (function (state_90990){
var state_val_90991 = (state_90990[(1)]);
if((state_val_90991 === (1))){
var state_90990__$1 = state_90990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90990__$1,(2),c);
} else {
if((state_val_90991 === (2))){
var inst_90985 = (state_90990[(2)]);
var inst_90986 = drop_dot.core.pure_js.localExpandHomeDir(inst_90985);
var inst_90987 = drop_dot.core.pure_js.getDirname(inst_90986);
var inst_90988 = drop_dot.core.pure_js.getBasename(inst_90986);
var state_90990__$1 = (function (){var statearr_90992 = state_90990;
(statearr_90992[(7)] = inst_90987);

(statearr_90992[(8)] = inst_90988);

return statearr_90992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90990__$1,null);
} else {
return null;
}
}
});})(c__9318__auto___91000))
;
return ((function (switch__9297__auto__,c__9318__auto___91000){
return (function() {
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_90996 = [null,null,null,null,null,null,null,null,null];
(statearr_90996[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__);

(statearr_90996[(1)] = (1));

return statearr_90996;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_90990){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_90990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e90997){if((e90997 instanceof Object)){
var ex__9301__auto__ = e90997;
var statearr_90998_91001 = state_90990;
(statearr_90998_91001[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91002 = state_90990;
state_90990 = G__91002;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = function(state_90990){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_90990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___91000))
})();
var state__9320__auto__ = (function (){var statearr_90999 = f__9319__auto__.call(null);
(statearr_90999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___91000);

return statearr_90999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___91000))
);


return drop_dot.core.exec_vec_of_commands.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("mkdir -vp "),cljs.core.str(drop_dot.core.config_dirname)].join(''),[cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(drop_dot.core.linkable_basename),cljs.core.str(" "),cljs.core.str(drop_dot.core.config_path)].join('')], null));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line)));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_91081){
var state_val_91082 = (state_91081[(1)]);
if((state_val_91082 === (7))){
var inst_91077 = (state_91081[(2)]);
var state_91081__$1 = state_91081;
var statearr_91084_91109 = state_91081__$1;
(statearr_91084_91109[(2)] = inst_91077);

(statearr_91084_91109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (1))){
var inst_91056 = chan_config;
var state_91081__$1 = (function (){var statearr_91085 = state_91081;
(statearr_91085[(7)] = inst_91056);

return statearr_91085;
})();
var statearr_91086_91110 = state_91081__$1;
(statearr_91086_91110[(2)] = null);

(statearr_91086_91110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (4))){
var inst_91059 = (state_91081[(8)]);
var inst_91059__$1 = (state_91081[(2)]);
var state_91081__$1 = (function (){var statearr_91087 = state_91081;
(statearr_91087[(8)] = inst_91059__$1);

return statearr_91087;
})();
if(cljs.core.truth_(inst_91059__$1)){
var statearr_91088_91111 = state_91081__$1;
(statearr_91088_91111[(1)] = (5));

} else {
var statearr_91089_91112 = state_91081__$1;
(statearr_91089_91112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (13))){
var inst_91056 = (state_91081[(7)]);
var inst_91073 = (state_91081[(2)]);
var tmp91083 = inst_91056;
var inst_91056__$1 = tmp91083;
var state_91081__$1 = (function (){var statearr_91090 = state_91081;
(statearr_91090[(9)] = inst_91073);

(statearr_91090[(7)] = inst_91056__$1);

return statearr_91090;
})();
var statearr_91091_91113 = state_91081__$1;
(statearr_91091_91113[(2)] = null);

(statearr_91091_91113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (6))){
var state_91081__$1 = state_91081;
var statearr_91092_91114 = state_91081__$1;
(statearr_91092_91114[(2)] = null);

(statearr_91092_91114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (3))){
var inst_91079 = (state_91081[(2)]);
var state_91081__$1 = state_91081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91081__$1,inst_91079);
} else {
if((state_val_91082 === (12))){
var state_91081__$1 = state_91081;
var statearr_91093_91115 = state_91081__$1;
(statearr_91093_91115[(2)] = null);

(statearr_91093_91115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (2))){
var inst_91056 = (state_91081[(7)]);
var state_91081__$1 = state_91081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91081__$1,(4),inst_91056);
} else {
if((state_val_91082 === (11))){
var inst_91059 = (state_91081[(8)]);
var inst_91070 = drop_dot.core.link_line.call(null,inst_91059);
var state_91081__$1 = state_91081;
var statearr_91094_91116 = state_91081__$1;
(statearr_91094_91116[(2)] = inst_91070);

(statearr_91094_91116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (9))){
var inst_91059 = (state_91081[(8)]);
var inst_91065 = cljs.core.println.call(null,inst_91059);
var state_91081__$1 = state_91081;
var statearr_91095_91117 = state_91081__$1;
(statearr_91095_91117[(2)] = inst_91065);

(statearr_91095_91117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (5))){
var inst_91061 = cljs.core._EQ_.call(null,cmd,"drop");
var state_91081__$1 = state_91081;
if(inst_91061){
var statearr_91096_91118 = state_91081__$1;
(statearr_91096_91118[(1)] = (8));

} else {
var statearr_91097_91119 = state_91081__$1;
(statearr_91097_91119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (10))){
var inst_91067 = (state_91081[(2)]);
var inst_91068 = cljs.core._EQ_.call(null,cmd,"link");
var state_91081__$1 = (function (){var statearr_91098 = state_91081;
(statearr_91098[(10)] = inst_91067);

return statearr_91098;
})();
if(inst_91068){
var statearr_91099_91120 = state_91081__$1;
(statearr_91099_91120[(1)] = (11));

} else {
var statearr_91100_91121 = state_91081__$1;
(statearr_91100_91121[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91082 === (8))){
var inst_91059 = (state_91081[(8)]);
var inst_91063 = drop_dot.core.drop_line.call(null,inst_91059);
var state_91081__$1 = state_91081;
var statearr_91101_91122 = state_91081__$1;
(statearr_91101_91122[(2)] = inst_91063);

(statearr_91101_91122[(1)] = (10));


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
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_91105 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91105[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_91105[(1)] = (1));

return statearr_91105;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_91081){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91106){if((e91106 instanceof Object)){
var ex__9301__auto__ = e91106;
var statearr_91107_91123 = state_91081;
(statearr_91107_91123[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91124 = state_91081;
state_91081 = G__91124;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_91081){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_91081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_91108 = f__9319__auto__.call(null);
(statearr_91108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_91108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___91221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___91221,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___91221,c){
return (function (state_91185){
var state_val_91186 = (state_91185[(1)]);
if((state_val_91186 === (1))){
var inst_91174 = (state_91185[(7)]);
var inst_91175 = (state_91185[(8)]);
var inst_91173 = (state_91185[(9)]);
var inst_91173__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_91174__$1 = cljs.core.async.chan.call(null,(1));
var inst_91175__$1 = (function (){var res = inst_91173__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_91174__$1;
return ((function (res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c){
return (function (state_91190){
var state_val_91191 = (state_91190[(1)]);
if((state_val_91191 === (1))){
var state_91190__$1 = state_91190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91190__$1,(2),wcc,res__$1);
} else {
if((state_val_91191 === (2))){
var inst_91188 = (state_91190[(2)]);
var state_91190__$1 = state_91190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91190__$1,inst_91188);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_91195 = [null,null,null,null,null,null,null];
(statearr_91195[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_91195[(1)] = (1));

return statearr_91195;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_91190){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91196){if((e91196 instanceof Object)){
var ex__9301__auto__ = e91196;
var statearr_91197_91222 = state_91190;
(statearr_91197_91222[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91223 = state_91190;
state_91190 = G__91223;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_91190){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_91190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c))
})();
var state__9320__auto__ = (function (){var statearr_91198 = f__9319__auto__.call(null);
(statearr_91198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_91174,inst_91175,inst_91173,inst_91173__$1,inst_91174__$1,state_val_91186,c__9318__auto___91221,c))
})();
var inst_91176 = inst_91173__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_91175__$1);
var state_91185__$1 = (function (){var statearr_91199 = state_91185;
(statearr_91199[(7)] = inst_91174__$1);

(statearr_91199[(8)] = inst_91175__$1);

(statearr_91199[(9)] = inst_91173__$1);

(statearr_91199[(10)] = inst_91176);

return statearr_91199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91185__$1,(2),inst_91174__$1);
} else {
if((state_val_91186 === (2))){
var inst_91174 = (state_91185[(7)]);
var inst_91175 = (state_91185[(8)]);
var inst_91173 = (state_91185[(9)]);
var inst_91176 = (state_91185[(10)]);
var inst_91178 = (state_91185[(2)]);
var inst_91179 = [cljs.core.str(inst_91178)].join('');
var inst_91180 = parseInt(inst_91179);
var inst_91181 = (function (){var res = inst_91173;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_91174;
var wcc_jammer = inst_91175;
var get_wc = inst_91176;
var lines = inst_91180;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,state_val_91186,c__9318__auto___91221,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,state_val_91186,c__9318__auto___91221,c))
})();
var inst_91182 = (function (){var res = inst_91173;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_91174;
var wcc_jammer = inst_91175;
var get_wc = inst_91176;
var lines = inst_91180;
var close_if_done = inst_91181;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c){
return (function (state_91204){
var state_val_91205 = (state_91204[(1)]);
if((state_val_91205 === (1))){
var state_91204__$1 = state_91204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91204__$1,(2),c,res__$1);
} else {
if((state_val_91205 === (2))){
var inst_91201 = (state_91204[(2)]);
var inst_91202 = close_if_done.call(null);
var state_91204__$1 = (function (){var statearr_91206 = state_91204;
(statearr_91206[(7)] = inst_91201);

return statearr_91206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91204__$1,inst_91202);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_91210 = [null,null,null,null,null,null,null,null];
(statearr_91210[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_91210[(1)] = (1));

return statearr_91210;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_91204){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91211){if((e91211 instanceof Object)){
var ex__9301__auto__ = e91211;
var statearr_91212_91224 = state_91204;
(statearr_91212_91224[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91225 = state_91204;
state_91204 = G__91225;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_91204){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_91204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c))
})();
var state__9320__auto__ = (function (){var statearr_91213 = f__9319__auto__.call(null);
(statearr_91213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_91213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_91174,inst_91175,inst_91173,inst_91176,inst_91178,inst_91179,inst_91180,inst_91181,state_val_91186,c__9318__auto___91221,c))
})();
var inst_91183 = inst_91173.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_91182);
var state_91185__$1 = state_91185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91185__$1,inst_91183);
} else {
return null;
}
}
});})(c__9318__auto___91221,c))
;
return ((function (switch__9297__auto__,c__9318__auto___91221,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_91217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_91217[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_91217[(1)] = (1));

return statearr_91217;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_91185){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_91185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e91218){if((e91218 instanceof Object)){
var ex__9301__auto__ = e91218;
var statearr_91219_91226 = state_91185;
(statearr_91219_91226[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91227 = state_91185;
state_91185 = G__91227;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_91185){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_91185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___91221,c))
})();
var state__9320__auto__ = (function (){var statearr_91220 = f__9319__auto__.call(null);
(statearr_91220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___91221);

return statearr_91220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___91221,c))
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
var len__7018__auto___91229 = arguments.length;
var i__7019__auto___91230 = (0);
while(true){
if((i__7019__auto___91230 < len__7018__auto___91229)){
args__7025__auto__.push((arguments[i__7019__auto___91230]));

var G__91231 = (i__7019__auto___91230 + (1));
i__7019__auto___91230 = G__91231;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq91228){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91228));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map