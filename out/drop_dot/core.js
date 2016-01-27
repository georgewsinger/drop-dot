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
return (function (state_364154){
var state_val_364155 = (state_364154[(1)]);
if((state_val_364155 === (1))){
var state_364154__$1 = state_364154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364154__$1,(2),c,arg);
} else {
if((state_val_364155 === (2))){
var inst_364152 = (state_364154[(2)]);
var state_364154__$1 = state_364154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364154__$1,inst_364152);
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
var statearr_364159 = [null,null,null,null,null,null,null];
(statearr_364159[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_364159[(1)] = (1));

return statearr_364159;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_364154){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364160){if((e364160 instanceof Object)){
var ex__10429__auto__ = e364160;
var statearr_364161_364163 = state_364154;
(statearr_364161_364163[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364164 = state_364154;
state_364154 = G__364164;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_364154){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_364154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364162 = f__10447__auto__.call(null);
(statearr_364162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364162;
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
return (function (state_364180){
var state_val_364181 = (state_364180[(1)]);
if((state_val_364181 === (1))){
var state_364180__$1 = state_364180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364180__$1,(2),c,arg);
} else {
if((state_val_364181 === (2))){
var inst_364178 = (state_364180[(2)]);
var state_364180__$1 = state_364180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364180__$1,inst_364178);
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
var statearr_364185 = [null,null,null,null,null,null,null];
(statearr_364185[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_364185[(1)] = (1));

return statearr_364185;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_364180){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364186){if((e364186 instanceof Object)){
var ex__10429__auto__ = e364186;
var statearr_364187_364189 = state_364180;
(statearr_364187_364189[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364190 = state_364180;
state_364180 = G__364190;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_364180){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_364180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364188 = f__10447__auto__.call(null);
(statearr_364188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364188;
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
return (function (state_364265){
var state_val_364266 = (state_364265[(1)]);
if((state_val_364266 === (1))){
var state_364265__$1 = state_364265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364265__$1,(2),input_chan);
} else {
if((state_val_364266 === (2))){
var inst_364244 = (state_364265[(2)]);
var inst_364245 = inst_364244;
var state_364265__$1 = (function (){var statearr_364267 = state_364265;
(statearr_364267[(7)] = inst_364245);

return statearr_364267;
})();
var statearr_364268_364295 = state_364265__$1;
(statearr_364268_364295[(2)] = null);

(statearr_364268_364295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364266 === (3))){
var inst_364245 = (state_364265[(7)]);
var inst_364247 = cljs.core.count.call(null,inst_364245);
var inst_364248 = cljs.core._EQ_.call(null,inst_364247,(0));
var state_364265__$1 = state_364265;
if(inst_364248){
var statearr_364269_364296 = state_364265__$1;
(statearr_364269_364296[(1)] = (5));

} else {
var statearr_364270_364297 = state_364265__$1;
(statearr_364270_364297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364266 === (4))){
var inst_364263 = (state_364265[(2)]);
var state_364265__$1 = state_364265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364265__$1,inst_364263);
} else {
if((state_val_364266 === (5))){
var state_364265__$1 = state_364265;
var statearr_364271_364298 = state_364265__$1;
(statearr_364271_364298[(2)] = null);

(statearr_364271_364298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364266 === (6))){
var inst_364245 = (state_364265[(7)]);
var inst_364251 = cljs.core.async.chan.call(null);
var inst_364252 = cljs.core.first.call(null,inst_364245);
var inst_364253 = (function (){var v = inst_364245;
var rc = inst_364251;
var cmd = inst_364252;
return ((function (v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__){
return (function (state_364275){
var state_val_364276 = (state_364275[(1)]);
if((state_val_364276 === (1))){
var state_364275__$1 = state_364275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364275__$1,(2),rc,res);
} else {
if((state_val_364276 === (2))){
var inst_364273 = (state_364275[(2)]);
var state_364275__$1 = state_364275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364275__$1,inst_364273);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_364280 = [null,null,null,null,null,null,null];
(statearr_364280[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_364280[(1)] = (1));

return statearr_364280;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_364275){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364281){if((e364281 instanceof Object)){
var ex__10429__auto__ = e364281;
var statearr_364282_364299 = state_364275;
(statearr_364282_364299[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364300 = state_364275;
state_364275 = G__364300;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_364275){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_364275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364283 = f__10447__auto__.call(null);
(statearr_364283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_364245,inst_364251,inst_364252,state_val_364266,c__10446__auto__))
})();
var inst_364254 = drop_dot.core.pure_js.execAndPrint(inst_364252,inst_364253);
var state_364265__$1 = (function (){var statearr_364284 = state_364265;
(statearr_364284[(8)] = inst_364254);

return statearr_364284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364265__$1,(8),inst_364251);
} else {
if((state_val_364266 === (7))){
var inst_364261 = (state_364265[(2)]);
var state_364265__$1 = state_364265;
var statearr_364285_364301 = state_364265__$1;
(statearr_364285_364301[(2)] = inst_364261);

(statearr_364285_364301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364266 === (8))){
var inst_364245 = (state_364265[(7)]);
var inst_364256 = (state_364265[(2)]);
var inst_364257 = cljs.core.rest.call(null,inst_364245);
var inst_364258 = cljs.core.vec.call(null,inst_364257);
var inst_364245__$1 = inst_364258;
var state_364265__$1 = (function (){var statearr_364286 = state_364265;
(statearr_364286[(7)] = inst_364245__$1);

(statearr_364286[(9)] = inst_364256);

return statearr_364286;
})();
var statearr_364287_364302 = state_364265__$1;
(statearr_364287_364302[(2)] = null);

(statearr_364287_364302[(1)] = (3));


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
var statearr_364291 = [null,null,null,null,null,null,null,null,null,null];
(statearr_364291[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_364291[(1)] = (1));

return statearr_364291;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_364265){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364292){if((e364292 instanceof Object)){
var ex__10429__auto__ = e364292;
var statearr_364293_364303 = state_364265;
(statearr_364293_364303[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364304 = state_364265;
state_364265 = G__364304;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_364265){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_364265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364294 = f__10447__auto__.call(null);
(statearr_364294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364294;
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
return (function (state_364316){
var state_val_364317 = (state_364316[(1)]);
if((state_val_364317 === (1))){
var state_364316__$1 = state_364316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364316__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_364321 = [null,null,null,null,null,null,null];
(statearr_364321[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_364321[(1)] = (1));

return statearr_364321;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_364316){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364322){if((e364322 instanceof Object)){
var ex__10429__auto__ = e364322;
var statearr_364323_364325 = state_364316;
(statearr_364323_364325[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364326 = state_364316;
state_364316 = G__364326;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_364316){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_364316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_364324 = f__10447__auto__.call(null);
(statearr_364324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364324;
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
return (function (state_364342){
var state_val_364343 = (state_364342[(1)]);
if((state_val_364343 === (1))){
var state_364342__$1 = state_364342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364342__$1,(2),d,res__$1);
} else {
if((state_val_364343 === (2))){
var inst_364340 = (state_364342[(2)]);
var state_364342__$1 = state_364342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364342__$1,inst_364340);
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
var statearr_364347 = [null,null,null,null,null,null,null];
(statearr_364347[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_364347[(1)] = (1));

return statearr_364347;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_364342){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364348){if((e364348 instanceof Object)){
var ex__10429__auto__ = e364348;
var statearr_364349_364351 = state_364342;
(statearr_364349_364351[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364352 = state_364342;
state_364342 = G__364352;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_364342){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_364342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_364350 = f__10447__auto__.call(null);
(statearr_364350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364350;
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
return (function (state_364384){
var state_val_364385 = (state_364384[(1)]);
if((state_val_364385 === (1))){
var inst_364375 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_364384__$1 = state_364384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364384__$1,(2),inst_364375);
} else {
if((state_val_364385 === (2))){
var inst_364377 = (state_364384[(2)]);
var state_364384__$1 = state_364384;
if(cljs.core.truth_(inst_364377)){
var statearr_364386_364397 = state_364384__$1;
(statearr_364386_364397[(1)] = (3));

} else {
var statearr_364387_364398 = state_364384__$1;
(statearr_364387_364398[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364385 === (3))){
var state_364384__$1 = state_364384;
var statearr_364388_364399 = state_364384__$1;
(statearr_364388_364399[(2)] = line);

(statearr_364388_364399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364385 === (4))){
var inst_364380 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_364384__$1 = state_364384;
var statearr_364389_364400 = state_364384__$1;
(statearr_364389_364400[(2)] = inst_364380);

(statearr_364389_364400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364385 === (5))){
var inst_364382 = (state_364384[(2)]);
var state_364384__$1 = state_364384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364384__$1,inst_364382);
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
var statearr_364393 = [null,null,null,null,null,null,null];
(statearr_364393[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_364393[(1)] = (1));

return statearr_364393;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_364384){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364394){if((e364394 instanceof Object)){
var ex__10429__auto__ = e364394;
var statearr_364395_364401 = state_364384;
(statearr_364395_364401[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364402 = state_364384;
state_364384 = G__364402;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_364384){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_364384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364396 = f__10447__auto__.call(null);
(statearr_364396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364396;
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
return (function (state_364473){
var state_val_364474 = (state_364473[(1)]);
if((state_val_364474 === (1))){
var state_364473__$1 = state_364473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364473__$1,(2),chan_verified_path);
} else {
if((state_val_364474 === (2))){
var inst_364459 = (state_364473[(7)]);
var inst_364460 = (state_364473[(8)]);
var inst_364459__$1 = (state_364473[(2)]);
var inst_364460__$1 = cljs.core.async.chan.call(null,(1));
var inst_364461 = (function (){var verified_path = inst_364459__$1;
var rc = inst_364460__$1;
return ((function (verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function (state_364479){
var state_val_364480 = (state_364479[(1)]);
if((state_val_364480 === (1))){
var inst_364475 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_364479__$1 = state_364479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364479__$1,(2),rc,inst_364475);
} else {
if((state_val_364480 === (2))){
var inst_364477 = (state_364479[(2)]);
var state_364479__$1 = state_364479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364479__$1,inst_364477);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_364484 = [null,null,null,null,null,null,null];
(statearr_364484[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_364484[(1)] = (1));

return statearr_364484;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_364479){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364485){if((e364485 instanceof Object)){
var ex__10429__auto__ = e364485;
var statearr_364486_364513 = state_364479;
(statearr_364486_364513[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364514 = state_364479;
state_364479 = G__364514;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_364479){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_364479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364487 = f__10447__auto__.call(null);
(statearr_364487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function (state_364491){
var state_val_364492 = (state_364491[(1)]);
if((state_val_364492 === (1))){
var state_364491__$1 = state_364491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364491__$1,(2),rc,verified_path);
} else {
if((state_val_364492 === (2))){
var inst_364489 = (state_364491[(2)]);
var state_364491__$1 = state_364491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364491__$1,inst_364489);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_364496 = [null,null,null,null,null,null,null];
(statearr_364496[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_364496[(1)] = (1));

return statearr_364496;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_364491){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364497){if((e364497 instanceof Object)){
var ex__10429__auto__ = e364497;
var statearr_364498_364515 = state_364491;
(statearr_364498_364515[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364516 = state_364491;
state_364491 = G__364516;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_364491){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_364491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364499 = f__10447__auto__.call(null);
(statearr_364499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_364459,inst_364460,inst_364459__$1,inst_364460__$1,state_val_364474,c__10446__auto__))
})();
var inst_364462 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_364459__$1);
var state_364473__$1 = (function (){var statearr_364500 = state_364473;
(statearr_364500[(7)] = inst_364459__$1);

(statearr_364500[(8)] = inst_364460__$1);

(statearr_364500[(9)] = inst_364461);

return statearr_364500;
})();
if(cljs.core.truth_(inst_364462)){
var statearr_364501_364517 = state_364473__$1;
(statearr_364501_364517[(1)] = (3));

} else {
var statearr_364502_364518 = state_364473__$1;
(statearr_364502_364518[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364474 === (3))){
var inst_364459 = (state_364473[(7)]);
var inst_364460 = (state_364473[(8)]);
var state_364473__$1 = state_364473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364473__$1,(6),inst_364460,inst_364459);
} else {
if((state_val_364474 === (4))){
var inst_364459 = (state_364473[(7)]);
var inst_364461 = (state_364473[(9)]);
var inst_364467 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_364459,inst_364461);
var state_364473__$1 = state_364473;
var statearr_364503_364519 = state_364473__$1;
(statearr_364503_364519[(2)] = inst_364467);

(statearr_364503_364519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364474 === (5))){
var inst_364460 = (state_364473[(8)]);
var inst_364469 = (state_364473[(2)]);
var state_364473__$1 = (function (){var statearr_364504 = state_364473;
(statearr_364504[(10)] = inst_364469);

return statearr_364504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364473__$1,(7),inst_364460);
} else {
if((state_val_364474 === (6))){
var inst_364465 = (state_364473[(2)]);
var state_364473__$1 = state_364473;
var statearr_364505_364520 = state_364473__$1;
(statearr_364505_364520[(2)] = inst_364465);

(statearr_364505_364520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364474 === (7))){
var inst_364471 = (state_364473[(2)]);
var state_364473__$1 = state_364473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364473__$1,inst_364471);
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
var statearr_364509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_364509[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_364509[(1)] = (1));

return statearr_364509;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_364473){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364510){if((e364510 instanceof Object)){
var ex__10429__auto__ = e364510;
var statearr_364511_364521 = state_364473;
(statearr_364511_364521[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364522 = state_364473;
state_364473 = G__364522;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_364473){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_364473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364512 = f__10447__auto__.call(null);
(statearr_364512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364512;
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
return (function (state_364557){
var state_val_364558 = (state_364557[(1)]);
if((state_val_364558 === (1))){
var state_364557__$1 = state_364557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364557__$1,(2),c);
} else {
if((state_val_364558 === (2))){
var inst_364548 = (state_364557[(7)]);
var inst_364548__$1 = (state_364557[(2)]);
var inst_364549 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_364548__$1);
var state_364557__$1 = (function (){var statearr_364559 = state_364557;
(statearr_364559[(7)] = inst_364548__$1);

return statearr_364559;
})();
if(cljs.core.truth_(inst_364549)){
var statearr_364560_364571 = state_364557__$1;
(statearr_364560_364571[(1)] = (3));

} else {
var statearr_364561_364572 = state_364557__$1;
(statearr_364561_364572[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364558 === (3))){
var inst_364548 = (state_364557[(7)]);
var inst_364551 = cljs.core.println.call(null,inst_364548);
var state_364557__$1 = state_364557;
var statearr_364562_364573 = state_364557__$1;
(statearr_364562_364573[(2)] = inst_364551);

(statearr_364562_364573[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364558 === (4))){
var inst_364548 = (state_364557[(7)]);
var inst_364553 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_364548);
var state_364557__$1 = state_364557;
var statearr_364563_364574 = state_364557__$1;
(statearr_364563_364574[(2)] = inst_364553);

(statearr_364563_364574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364558 === (5))){
var inst_364555 = (state_364557[(2)]);
var state_364557__$1 = state_364557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364557__$1,inst_364555);
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
var statearr_364567 = [null,null,null,null,null,null,null,null];
(statearr_364567[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_364567[(1)] = (1));

return statearr_364567;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_364557){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364568){if((e364568 instanceof Object)){
var ex__10429__auto__ = e364568;
var statearr_364569_364575 = state_364557;
(statearr_364569_364575[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364576 = state_364557;
state_364557 = G__364576;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_364557){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_364557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364570 = f__10447__auto__.call(null);
(statearr_364570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364570;
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
return (function (state_364605){
var state_val_364606 = (state_364605[(1)]);
if((state_val_364606 === (1))){
var state_364605__$1 = state_364605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364605__$1,(2),rc,line);
} else {
if((state_val_364606 === (2))){
var inst_364603 = (state_364605[(2)]);
var state_364605__$1 = state_364605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364605__$1,inst_364603);
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
var statearr_364610 = [null,null,null,null,null,null,null];
(statearr_364610[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_364610[(1)] = (1));

return statearr_364610;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_364605){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364611){if((e364611 instanceof Object)){
var ex__10429__auto__ = e364611;
var statearr_364612_364627 = state_364605;
(statearr_364612_364627[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364628 = state_364605;
state_364605 = G__364628;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_364605){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_364605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_364613 = f__10447__auto__.call(null);
(statearr_364613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364613;
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
return (function (state_364618){
var state_val_364619 = (state_364618[(1)]);
if((state_val_364619 === (1))){
var inst_364614 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_364618__$1 = state_364618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364618__$1,(2),rc,inst_364614);
} else {
if((state_val_364619 === (2))){
var inst_364616 = (state_364618[(2)]);
var state_364618__$1 = state_364618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364618__$1,inst_364616);
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
var statearr_364623 = [null,null,null,null,null,null,null];
(statearr_364623[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_364623[(1)] = (1));

return statearr_364623;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_364618){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364624){if((e364624 instanceof Object)){
var ex__10429__auto__ = e364624;
var statearr_364625_364629 = state_364618;
(statearr_364625_364629[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364630 = state_364618;
state_364618 = G__364630;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_364618){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_364618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_364626 = f__10447__auto__.call(null);
(statearr_364626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364626;
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
return (function (state_364701){
var state_val_364702 = (state_364701[(1)]);
if((state_val_364702 === (1))){
var state_364701__$1 = state_364701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364701__$1,(2),chan_linkable_path);
} else {
if((state_val_364702 === (2))){
var inst_364687 = (state_364701[(7)]);
var inst_364688 = (state_364701[(8)]);
var inst_364687__$1 = (state_364701[(2)]);
var inst_364688__$1 = cljs.core.async.chan.call(null,(1));
var inst_364689 = (function (){var linkable_path = inst_364687__$1;
var rc = inst_364688__$1;
return ((function (linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function (state_364707){
var state_val_364708 = (state_364707[(1)]);
if((state_val_364708 === (1))){
var inst_364703 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_364707__$1 = state_364707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364707__$1,(2),rc,inst_364703);
} else {
if((state_val_364708 === (2))){
var inst_364705 = (state_364707[(2)]);
var state_364707__$1 = state_364707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364707__$1,inst_364705);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_364712 = [null,null,null,null,null,null,null];
(statearr_364712[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_364712[(1)] = (1));

return statearr_364712;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_364707){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364713){if((e364713 instanceof Object)){
var ex__10429__auto__ = e364713;
var statearr_364714_364741 = state_364707;
(statearr_364714_364741[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364742 = state_364707;
state_364707 = G__364742;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_364707){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_364707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364715 = f__10447__auto__.call(null);
(statearr_364715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function (state_364719){
var state_val_364720 = (state_364719[(1)]);
if((state_val_364720 === (1))){
var state_364719__$1 = state_364719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364719__$1,(2),rc,linkable_path);
} else {
if((state_val_364720 === (2))){
var inst_364717 = (state_364719[(2)]);
var state_364719__$1 = state_364719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364719__$1,inst_364717);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_364724 = [null,null,null,null,null,null,null];
(statearr_364724[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_364724[(1)] = (1));

return statearr_364724;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_364719){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364725){if((e364725 instanceof Object)){
var ex__10429__auto__ = e364725;
var statearr_364726_364743 = state_364719;
(statearr_364726_364743[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364744 = state_364719;
state_364719 = G__364744;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_364719){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_364719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364727 = f__10447__auto__.call(null);
(statearr_364727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_364687,inst_364688,inst_364687__$1,inst_364688__$1,state_val_364702,c__10446__auto__))
})();
var inst_364690 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_364687__$1);
var state_364701__$1 = (function (){var statearr_364728 = state_364701;
(statearr_364728[(9)] = inst_364689);

(statearr_364728[(7)] = inst_364687__$1);

(statearr_364728[(8)] = inst_364688__$1);

return statearr_364728;
})();
if(cljs.core.truth_(inst_364690)){
var statearr_364729_364745 = state_364701__$1;
(statearr_364729_364745[(1)] = (3));

} else {
var statearr_364730_364746 = state_364701__$1;
(statearr_364730_364746[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364702 === (3))){
var inst_364687 = (state_364701[(7)]);
var inst_364688 = (state_364701[(8)]);
var state_364701__$1 = state_364701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364701__$1,(6),inst_364688,inst_364687);
} else {
if((state_val_364702 === (4))){
var inst_364689 = (state_364701[(9)]);
var inst_364687 = (state_364701[(7)]);
var inst_364695 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_364687,inst_364689);
var state_364701__$1 = state_364701;
var statearr_364731_364747 = state_364701__$1;
(statearr_364731_364747[(2)] = inst_364695);

(statearr_364731_364747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364702 === (5))){
var inst_364688 = (state_364701[(8)]);
var inst_364697 = (state_364701[(2)]);
var state_364701__$1 = (function (){var statearr_364732 = state_364701;
(statearr_364732[(10)] = inst_364697);

return statearr_364732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364701__$1,(7),inst_364688);
} else {
if((state_val_364702 === (6))){
var inst_364693 = (state_364701[(2)]);
var state_364701__$1 = state_364701;
var statearr_364733_364748 = state_364701__$1;
(statearr_364733_364748[(2)] = inst_364693);

(statearr_364733_364748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364702 === (7))){
var inst_364699 = (state_364701[(2)]);
var state_364701__$1 = state_364701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364701__$1,inst_364699);
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
var statearr_364737 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_364737[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_364737[(1)] = (1));

return statearr_364737;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_364701){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364738){if((e364738 instanceof Object)){
var ex__10429__auto__ = e364738;
var statearr_364739_364749 = state_364701;
(statearr_364739_364749[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364750 = state_364701;
state_364701 = G__364750;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_364701){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_364701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364740 = f__10447__auto__.call(null);
(statearr_364740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364740;
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
return (function (state_364821){
var state_val_364822 = (state_364821[(1)]);
if((state_val_364822 === (1))){
var state_364821__$1 = state_364821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364821__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_364822 === (2))){
var inst_364808 = (state_364821[(7)]);
var inst_364807 = (state_364821[(8)]);
var inst_364807__$1 = (state_364821[(2)]);
var inst_364808__$1 = cljs.core.async.chan.call(null,(1));
var inst_364809 = (function (){var linkable_path = inst_364807__$1;
var rc = inst_364808__$1;
return ((function (linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function (state_364827){
var state_val_364828 = (state_364827[(1)]);
if((state_val_364828 === (1))){
var inst_364823 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_364827__$1 = state_364827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364827__$1,(2),rc,inst_364823);
} else {
if((state_val_364828 === (2))){
var inst_364825 = (state_364827[(2)]);
var state_364827__$1 = state_364827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364827__$1,inst_364825);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_364832 = [null,null,null,null,null,null,null];
(statearr_364832[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_364832[(1)] = (1));

return statearr_364832;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_364827){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364833){if((e364833 instanceof Object)){
var ex__10429__auto__ = e364833;
var statearr_364834_364861 = state_364827;
(statearr_364834_364861[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364862 = state_364827;
state_364827 = G__364862;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_364827){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_364827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364835 = f__10447__auto__.call(null);
(statearr_364835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function (state_364839){
var state_val_364840 = (state_364839[(1)]);
if((state_val_364840 === (1))){
var state_364839__$1 = state_364839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364839__$1,(2),rc,linkable_path);
} else {
if((state_val_364840 === (2))){
var inst_364837 = (state_364839[(2)]);
var state_364839__$1 = state_364839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364839__$1,inst_364837);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_364844 = [null,null,null,null,null,null,null];
(statearr_364844[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_364844[(1)] = (1));

return statearr_364844;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_364839){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364845){if((e364845 instanceof Object)){
var ex__10429__auto__ = e364845;
var statearr_364846_364863 = state_364839;
(statearr_364846_364863[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364864 = state_364839;
state_364839 = G__364864;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_364839){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_364839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364847 = f__10447__auto__.call(null);
(statearr_364847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_364847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_364808,inst_364807,inst_364807__$1,inst_364808__$1,state_val_364822,c__10446__auto__))
})();
var inst_364810 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_364807__$1);
var state_364821__$1 = (function (){var statearr_364848 = state_364821;
(statearr_364848[(9)] = inst_364809);

(statearr_364848[(7)] = inst_364808__$1);

(statearr_364848[(8)] = inst_364807__$1);

return statearr_364848;
})();
if(cljs.core.truth_(inst_364810)){
var statearr_364849_364865 = state_364821__$1;
(statearr_364849_364865[(1)] = (3));

} else {
var statearr_364850_364866 = state_364821__$1;
(statearr_364850_364866[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364822 === (3))){
var inst_364808 = (state_364821[(7)]);
var inst_364807 = (state_364821[(8)]);
var state_364821__$1 = state_364821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_364821__$1,(6),inst_364808,inst_364807);
} else {
if((state_val_364822 === (4))){
var inst_364809 = (state_364821[(9)]);
var inst_364807 = (state_364821[(8)]);
var inst_364815 = drop_dot.core.pure_js.pathExists(inst_364807,inst_364809);
var state_364821__$1 = state_364821;
var statearr_364851_364867 = state_364821__$1;
(statearr_364851_364867[(2)] = inst_364815);

(statearr_364851_364867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364822 === (5))){
var inst_364808 = (state_364821[(7)]);
var inst_364817 = (state_364821[(2)]);
var state_364821__$1 = (function (){var statearr_364852 = state_364821;
(statearr_364852[(10)] = inst_364817);

return statearr_364852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364821__$1,(7),inst_364808);
} else {
if((state_val_364822 === (6))){
var inst_364813 = (state_364821[(2)]);
var state_364821__$1 = state_364821;
var statearr_364853_364868 = state_364821__$1;
(statearr_364853_364868[(2)] = inst_364813);

(statearr_364853_364868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364822 === (7))){
var inst_364819 = (state_364821[(2)]);
var state_364821__$1 = state_364821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364821__$1,inst_364819);
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
var statearr_364857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_364857[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_364857[(1)] = (1));

return statearr_364857;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_364821){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364858){if((e364858 instanceof Object)){
var ex__10429__auto__ = e364858;
var statearr_364859_364869 = state_364821;
(statearr_364859_364869[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364870 = state_364821;
state_364821 = G__364870;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_364821){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_364821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364860 = f__10447__auto__.call(null);
(statearr_364860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364860;
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
return (function (state_364923){
var state_val_364924 = (state_364923[(1)]);
if((state_val_364924 === (1))){
var state_364923__$1 = state_364923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_364923__$1,(2),c);
} else {
if((state_val_364924 === (2))){
var inst_364906 = (state_364923[(7)]);
var inst_364905 = (state_364923[(2)]);
var inst_364906__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_364905);
var inst_364907 = drop_dot.core.pure_js.getDirname(inst_364906__$1);
var inst_364908 = drop_dot.core.pure_js.getBasename(inst_364906__$1);
var inst_364909 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_364906__$1);
var state_364923__$1 = (function (){var statearr_364925 = state_364923;
(statearr_364925[(8)] = inst_364908);

(statearr_364925[(7)] = inst_364906__$1);

(statearr_364925[(9)] = inst_364907);

return statearr_364925;
})();
if(cljs.core.truth_(inst_364909)){
var statearr_364926_364937 = state_364923__$1;
(statearr_364926_364937[(1)] = (3));

} else {
var statearr_364927_364938 = state_364923__$1;
(statearr_364927_364938[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364924 === (3))){
var inst_364906 = (state_364923[(7)]);
var inst_364911 = [cljs.core.str(inst_364906)].join('');
var inst_364912 = cljs.core.println.call(null,inst_364911);
var state_364923__$1 = state_364923;
var statearr_364928_364939 = state_364923__$1;
(statearr_364928_364939[(2)] = inst_364912);

(statearr_364928_364939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364924 === (4))){
var inst_364908 = (state_364923[(8)]);
var inst_364906 = (state_364923[(7)]);
var inst_364907 = (state_364923[(9)]);
var inst_364914 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_364915 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_364907)].join('');
var inst_364916 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_364908),cljs.core.str(" "),cljs.core.str(inst_364906)].join('');
var inst_364917 = [inst_364915,inst_364916];
var inst_364918 = (new cljs.core.PersistentVector(null,2,(5),inst_364914,inst_364917,null));
var inst_364919 = drop_dot.core.exec_vec_of_commands.call(null,inst_364918);
var state_364923__$1 = state_364923;
var statearr_364929_364940 = state_364923__$1;
(statearr_364929_364940[(2)] = inst_364919);

(statearr_364929_364940[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_364924 === (5))){
var inst_364921 = (state_364923[(2)]);
var state_364923__$1 = state_364923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_364923__$1,inst_364921);
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
var statearr_364933 = [null,null,null,null,null,null,null,null,null,null];
(statearr_364933[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__);

(statearr_364933[(1)] = (1));

return statearr_364933;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_364923){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_364923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e364934){if((e364934 instanceof Object)){
var ex__10429__auto__ = e364934;
var statearr_364935_364941 = state_364923;
(statearr_364935_364941[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_364923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e364934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__364942 = state_364923;
state_364923 = G__364942;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = function(state_364923){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_364923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_364936 = f__10447__auto__.call(null);
(statearr_364936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_364936;
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
return (function (state_365019){
var state_val_365020 = (state_365019[(1)]);
if((state_val_365020 === (7))){
var inst_365015 = (state_365019[(2)]);
var state_365019__$1 = state_365019;
var statearr_365022_365047 = state_365019__$1;
(statearr_365022_365047[(2)] = inst_365015);

(statearr_365022_365047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (1))){
var inst_364995 = chan_config;
var state_365019__$1 = (function (){var statearr_365023 = state_365019;
(statearr_365023[(7)] = inst_364995);

return statearr_365023;
})();
var statearr_365024_365048 = state_365019__$1;
(statearr_365024_365048[(2)] = null);

(statearr_365024_365048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (4))){
var inst_364998 = (state_365019[(8)]);
var inst_364998__$1 = (state_365019[(2)]);
var state_365019__$1 = (function (){var statearr_365025 = state_365019;
(statearr_365025[(8)] = inst_364998__$1);

return statearr_365025;
})();
if(cljs.core.truth_(inst_364998__$1)){
var statearr_365026_365049 = state_365019__$1;
(statearr_365026_365049[(1)] = (5));

} else {
var statearr_365027_365050 = state_365019__$1;
(statearr_365027_365050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (13))){
var inst_364995 = (state_365019[(7)]);
var inst_365011 = (state_365019[(2)]);
var tmp365021 = inst_364995;
var inst_364995__$1 = tmp365021;
var state_365019__$1 = (function (){var statearr_365028 = state_365019;
(statearr_365028[(7)] = inst_364995__$1);

(statearr_365028[(9)] = inst_365011);

return statearr_365028;
})();
var statearr_365029_365051 = state_365019__$1;
(statearr_365029_365051[(2)] = null);

(statearr_365029_365051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (6))){
var state_365019__$1 = state_365019;
var statearr_365030_365052 = state_365019__$1;
(statearr_365030_365052[(2)] = null);

(statearr_365030_365052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (3))){
var inst_365017 = (state_365019[(2)]);
var state_365019__$1 = state_365019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365019__$1,inst_365017);
} else {
if((state_val_365020 === (12))){
var state_365019__$1 = state_365019;
var statearr_365031_365053 = state_365019__$1;
(statearr_365031_365053[(2)] = null);

(statearr_365031_365053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (2))){
var inst_364995 = (state_365019[(7)]);
var state_365019__$1 = state_365019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_365019__$1,(4),inst_364995);
} else {
if((state_val_365020 === (11))){
var inst_364998 = (state_365019[(8)]);
var inst_365008 = drop_dot.core.link_line.call(null,inst_364998);
var state_365019__$1 = state_365019;
var statearr_365032_365054 = state_365019__$1;
(statearr_365032_365054[(2)] = inst_365008);

(statearr_365032_365054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (9))){
var state_365019__$1 = state_365019;
var statearr_365033_365055 = state_365019__$1;
(statearr_365033_365055[(2)] = null);

(statearr_365033_365055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (5))){
var inst_365000 = cljs.core._EQ_.call(null,cmd,"drop");
var state_365019__$1 = state_365019;
if(inst_365000){
var statearr_365034_365056 = state_365019__$1;
(statearr_365034_365056[(1)] = (8));

} else {
var statearr_365035_365057 = state_365019__$1;
(statearr_365035_365057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (10))){
var inst_365005 = (state_365019[(2)]);
var inst_365006 = cljs.core._EQ_.call(null,cmd,"link");
var state_365019__$1 = (function (){var statearr_365036 = state_365019;
(statearr_365036[(10)] = inst_365005);

return statearr_365036;
})();
if(inst_365006){
var statearr_365037_365058 = state_365019__$1;
(statearr_365037_365058[(1)] = (11));

} else {
var statearr_365038_365059 = state_365019__$1;
(statearr_365038_365059[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_365020 === (8))){
var inst_364998 = (state_365019[(8)]);
var inst_365002 = drop_dot.core.drop_line.call(null,inst_364998);
var state_365019__$1 = state_365019;
var statearr_365039_365060 = state_365019__$1;
(statearr_365039_365060[(2)] = inst_365002);

(statearr_365039_365060[(1)] = (10));


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
var statearr_365043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_365043[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_365043[(1)] = (1));

return statearr_365043;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_365019){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_365019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e365044){if((e365044 instanceof Object)){
var ex__10429__auto__ = e365044;
var statearr_365045_365061 = state_365019;
(statearr_365045_365061[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e365044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__365062 = state_365019;
state_365019 = G__365062;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_365019){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_365019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_365046 = f__10447__auto__.call(null);
(statearr_365046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_365046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___365159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___365159,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___365159,c){
return (function (state_365123){
var state_val_365124 = (state_365123[(1)]);
if((state_val_365124 === (1))){
var inst_365111 = (state_365123[(7)]);
var inst_365112 = (state_365123[(8)]);
var inst_365113 = (state_365123[(9)]);
var inst_365111__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_365112__$1 = cljs.core.async.chan.call(null,(1));
var inst_365113__$1 = (function (){var res = inst_365111__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_365112__$1;
return ((function (res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c){
return (function (state_365128){
var state_val_365129 = (state_365128[(1)]);
if((state_val_365129 === (1))){
var state_365128__$1 = state_365128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365128__$1,(2),wcc,res__$1);
} else {
if((state_val_365129 === (2))){
var inst_365126 = (state_365128[(2)]);
var state_365128__$1 = state_365128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365128__$1,inst_365126);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_365133 = [null,null,null,null,null,null,null];
(statearr_365133[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_365133[(1)] = (1));

return statearr_365133;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_365128){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_365128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e365134){if((e365134 instanceof Object)){
var ex__10429__auto__ = e365134;
var statearr_365135_365160 = state_365128;
(statearr_365135_365160[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e365134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__365161 = state_365128;
state_365128 = G__365161;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_365128){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_365128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c))
})();
var state__10448__auto__ = (function (){var statearr_365136 = f__10447__auto__.call(null);
(statearr_365136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_365136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_365111,inst_365112,inst_365113,inst_365111__$1,inst_365112__$1,state_val_365124,c__10446__auto___365159,c))
})();
var inst_365114 = inst_365111__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_365113__$1);
var state_365123__$1 = (function (){var statearr_365137 = state_365123;
(statearr_365137[(7)] = inst_365111__$1);

(statearr_365137[(8)] = inst_365112__$1);

(statearr_365137[(9)] = inst_365113__$1);

(statearr_365137[(10)] = inst_365114);

return statearr_365137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_365123__$1,(2),inst_365112__$1);
} else {
if((state_val_365124 === (2))){
var inst_365111 = (state_365123[(7)]);
var inst_365112 = (state_365123[(8)]);
var inst_365113 = (state_365123[(9)]);
var inst_365114 = (state_365123[(10)]);
var inst_365116 = (state_365123[(2)]);
var inst_365117 = [cljs.core.str(inst_365116)].join('');
var inst_365118 = parseInt(inst_365117);
var inst_365119 = (function (){var res = inst_365111;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_365112;
var wcc_jammer = inst_365113;
var get_wc = inst_365114;
var lines = inst_365118;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,state_val_365124,c__10446__auto___365159,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,state_val_365124,c__10446__auto___365159,c))
})();
var inst_365120 = (function (){var res = inst_365111;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_365112;
var wcc_jammer = inst_365113;
var get_wc = inst_365114;
var lines = inst_365118;
var close_if_done = inst_365119;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c){
return (function (state_365142){
var state_val_365143 = (state_365142[(1)]);
if((state_val_365143 === (1))){
var state_365142__$1 = state_365142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_365142__$1,(2),c,res__$1);
} else {
if((state_val_365143 === (2))){
var inst_365139 = (state_365142[(2)]);
var inst_365140 = close_if_done.call(null);
var state_365142__$1 = (function (){var statearr_365144 = state_365142;
(statearr_365144[(7)] = inst_365139);

return statearr_365144;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365142__$1,inst_365140);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_365148 = [null,null,null,null,null,null,null,null];
(statearr_365148[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_365148[(1)] = (1));

return statearr_365148;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_365142){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_365142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e365149){if((e365149 instanceof Object)){
var ex__10429__auto__ = e365149;
var statearr_365150_365162 = state_365142;
(statearr_365150_365162[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e365149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__365163 = state_365142;
state_365142 = G__365163;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_365142){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_365142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c))
})();
var state__10448__auto__ = (function (){var statearr_365151 = f__10447__auto__.call(null);
(statearr_365151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_365151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_365111,inst_365112,inst_365113,inst_365114,inst_365116,inst_365117,inst_365118,inst_365119,state_val_365124,c__10446__auto___365159,c))
})();
var inst_365121 = inst_365111.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_365120);
var state_365123__$1 = state_365123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_365123__$1,inst_365121);
} else {
return null;
}
}
});})(c__10446__auto___365159,c))
;
return ((function (switch__10425__auto__,c__10446__auto___365159,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_365155 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_365155[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_365155[(1)] = (1));

return statearr_365155;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_365123){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_365123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e365156){if((e365156 instanceof Object)){
var ex__10429__auto__ = e365156;
var statearr_365157_365164 = state_365123;
(statearr_365157_365164[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_365123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e365156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__365165 = state_365123;
state_365123 = G__365165;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_365123){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_365123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___365159,c))
})();
var state__10448__auto__ = (function (){var statearr_365158 = f__10447__auto__.call(null);
(statearr_365158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___365159);

return statearr_365158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___365159,c))
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
var len__9156__auto___365167 = arguments.length;
var i__9157__auto___365168 = (0);
while(true){
if((i__9157__auto___365168 < len__9156__auto___365167)){
args__9163__auto__.push((arguments[i__9157__auto___365168]));

var G__365169 = (i__9157__auto___365168 + (1));
i__9157__auto___365168 = G__365169;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq365166){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq365166));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map