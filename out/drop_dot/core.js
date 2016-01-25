// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_();
drop_dot.core.pure_js = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("/home/george/Dropbox/drop-dot/js/get-lines-from-file.js") : cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js"));
drop_dot.core.jam_first_callback_arg_into_chan = (function drop_dot$core$jam_first_callback_arg_into_chan(c){
return (function (arg){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13089){
var state_val_13090 = (state_13089[(1)]);
if((state_val_13090 === (1))){
var state_13089__$1 = state_13089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13089__$1,(2),c,arg);
} else {
if((state_val_13090 === (2))){
var inst_13087 = (state_13089[(2)]);
var state_13089__$1 = state_13089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13089__$1,inst_13087);
} else {
return null;
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto____0 = (function (){
var statearr_13094 = [null,null,null,null,null,null,null];
(statearr_13094[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto__);

(statearr_13094[(1)] = (1));

return statearr_13094;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto____1 = (function (state_13089){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13089);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13095){if((e13095 instanceof Object)){
var ex__10102__auto__ = e13095;
var statearr_13096_13098 = state_13089;
(statearr_13096_13098[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13089);

return cljs.core.cst$kw$recur;
} else {
throw e13095;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13099 = state_13089;
state_13089 = G__13099;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto__ = function(state_13089){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto____1.call(this,state_13089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13097 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13115){
var state_val_13116 = (state_13115[(1)]);
if((state_val_13116 === (1))){
var state_13115__$1 = state_13115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13115__$1,(2),c,arg);
} else {
if((state_val_13116 === (2))){
var inst_13113 = (state_13115[(2)]);
var state_13115__$1 = state_13115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13115__$1,inst_13113);
} else {
return null;
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto____0 = (function (){
var statearr_13120 = [null,null,null,null,null,null,null];
(statearr_13120[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto__);

(statearr_13120[(1)] = (1));

return statearr_13120;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto____1 = (function (state_13115){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13115);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13121){if((e13121 instanceof Object)){
var ex__10102__auto__ = e13121;
var statearr_13122_13124 = state_13115;
(statearr_13122_13124[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13115);

return cljs.core.cst$kw$recur;
} else {
throw e13121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13125 = state_13115;
state_13115 = G__13125;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto__ = function(state_13115){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto____1.call(this,state_13115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13123 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13202){
var state_val_13203 = (state_13202[(1)]);
if((state_val_13203 === (1))){
var state_13202__$1 = state_13202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13202__$1,(2),input_chan);
} else {
if((state_val_13203 === (2))){
var inst_13180 = (state_13202[(2)]);
var inst_13181 = inst_13180;
var state_13202__$1 = (function (){var statearr_13204 = state_13202;
(statearr_13204[(7)] = inst_13181);

return statearr_13204;
})();
var statearr_13205_13232 = state_13202__$1;
(statearr_13205_13232[(2)] = null);

(statearr_13205_13232[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13203 === (3))){
var inst_13181 = (state_13202[(7)]);
var inst_13183 = cljs.core.count(inst_13181);
var inst_13184 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13183,(0));
var state_13202__$1 = state_13202;
if(inst_13184){
var statearr_13206_13233 = state_13202__$1;
(statearr_13206_13233[(1)] = (5));

} else {
var statearr_13207_13234 = state_13202__$1;
(statearr_13207_13234[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13203 === (4))){
var inst_13200 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13202__$1,inst_13200);
} else {
if((state_val_13203 === (5))){
var inst_13186 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["done"], 0));
var state_13202__$1 = state_13202;
var statearr_13208_13235 = state_13202__$1;
(statearr_13208_13235[(2)] = inst_13186);

(statearr_13208_13235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13203 === (6))){
var inst_13181 = (state_13202[(7)]);
var inst_13188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_13189 = cljs.core.first(inst_13181);
var inst_13190 = (function (){var v = inst_13181;
var rc = inst_13188;
var cmd = inst_13189;
return ((function (v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__){
return (function (res){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__){
return (function (state_13212){
var state_val_13213 = (state_13212[(1)]);
if((state_val_13213 === (1))){
var state_13212__$1 = state_13212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13212__$1,(2),rc,res);
} else {
if((state_val_13213 === (2))){
var inst_13210 = (state_13212[(2)]);
var state_13212__$1 = state_13212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13212__$1,inst_13210);
} else {
return null;
}
}
});})(c__10212__auto____$1,v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0 = (function (){
var statearr_13217 = [null,null,null,null,null,null,null];
(statearr_13217[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__);

(statearr_13217[(1)] = (1));

return statearr_13217;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1 = (function (state_13212){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13212);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13218){if((e13218 instanceof Object)){
var ex__10102__auto__ = e13218;
var statearr_13219_13236 = state_13212;
(statearr_13219_13236[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13212);

return cljs.core.cst$kw$recur;
} else {
throw e13218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13237 = state_13212;
state_13212 = G__13237;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = function(state_13212){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1.call(this,state_13212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13220 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__))
);

return c__10212__auto____$1;
});
;})(v,rc,cmd,inst_13181,inst_13188,inst_13189,state_val_13203,c__10212__auto__))
})();
var inst_13191 = drop_dot.core.pure_js.execAndPrint(inst_13189,inst_13190);
var state_13202__$1 = (function (){var statearr_13221 = state_13202;
(statearr_13221[(8)] = inst_13191);

return statearr_13221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13202__$1,(8),inst_13188);
} else {
if((state_val_13203 === (7))){
var inst_13198 = (state_13202[(2)]);
var state_13202__$1 = state_13202;
var statearr_13222_13238 = state_13202__$1;
(statearr_13222_13238[(2)] = inst_13198);

(statearr_13222_13238[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13203 === (8))){
var inst_13181 = (state_13202[(7)]);
var inst_13193 = (state_13202[(2)]);
var inst_13194 = cljs.core.rest(inst_13181);
var inst_13195 = cljs.core.vec(inst_13194);
var inst_13181__$1 = inst_13195;
var state_13202__$1 = (function (){var statearr_13223 = state_13202;
(statearr_13223[(7)] = inst_13181__$1);

(statearr_13223[(9)] = inst_13193);

return statearr_13223;
})();
var statearr_13224_13239 = state_13202__$1;
(statearr_13224_13239[(2)] = null);

(statearr_13224_13239[(1)] = (3));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0 = (function (){
var statearr_13228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13228[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__);

(statearr_13228[(1)] = (1));

return statearr_13228;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1 = (function (state_13202){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13202);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13229){if((e13229 instanceof Object)){
var ex__10102__auto__ = e13229;
var statearr_13230_13240 = state_13202;
(statearr_13230_13240[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13202);

return cljs.core.cst$kw$recur;
} else {
throw e13229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13241 = state_13202;
state_13202 = G__13241;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__ = function(state_13202){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1.call(this,state_13202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13231 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return drop_dot.core.chan_vec_cmd__GT_exec((function (){var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,c){
return (function (state_13253){
var state_val_13254 = (state_13253[(1)]);
if((state_val_13254 === (1))){
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13253__$1,v);
} else {
return null;
}
});})(c__10212__auto__,c))
;
return ((function (switch__10098__auto__,c__10212__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____0 = (function (){
var statearr_13258 = [null,null,null,null,null,null,null];
(statearr_13258[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__);

(statearr_13258[(1)] = (1));

return statearr_13258;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____1 = (function (state_13253){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13253);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13259){if((e13259 instanceof Object)){
var ex__10102__auto__ = e13259;
var statearr_13260_13262 = state_13253;
(statearr_13260_13262[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13253);

return cljs.core.cst$kw$recur;
} else {
throw e13259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13263 = state_13253;
state_13253 = G__13263;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__ = function(state_13253){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____1.call(this,state_13253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,c))
})();
var state__10214__auto__ = (function (){var statearr_13261 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,c))
);

return c__10212__auto__;
})());
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("/home/george/Dropbox/drop-dot/js/get-lines-from-file.js") : cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js"));
var d = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__,res,d){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__,res,d){
return (function (state_13279){
var state_val_13280 = (state_13279[(1)]);
if((state_val_13280 === (1))){
var state_13279__$1 = state_13279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13279__$1,(2),d,res__$1);
} else {
if((state_val_13280 === (2))){
var inst_13277 = (state_13279[(2)]);
var state_13279__$1 = state_13279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13279__$1,inst_13277);
} else {
return null;
}
}
});})(c__10212__auto__,res,d))
;
return ((function (switch__10098__auto__,c__10212__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____0 = (function (){
var statearr_13284 = [null,null,null,null,null,null,null];
(statearr_13284[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__);

(statearr_13284[(1)] = (1));

return statearr_13284;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____1 = (function (state_13279){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13279);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13285){if((e13285 instanceof Object)){
var ex__10102__auto__ = e13285;
var statearr_13286_13288 = state_13279;
(statearr_13286_13288[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13279);

return cljs.core.cst$kw$recur;
} else {
throw e13285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13289 = state_13279;
state_13279 = G__13289;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__ = function(state_13279){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____1.call(this,state_13279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__,res,d))
})();
var state__10214__auto__ = (function (){var statearr_13287 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__,res,d))
);

return c__10212__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13317){
var state_val_13318 = (state_13317[(1)]);
if((state_val_13318 === (1))){
var inst_13310 = drop_dot.core.chan_path_exists_QMARK_(line);
var state_13317__$1 = state_13317;
if(cljs.core.truth_(inst_13310)){
var statearr_13319_13330 = state_13317__$1;
(statearr_13319_13330[(1)] = (2));

} else {
var statearr_13320_13331 = state_13317__$1;
(statearr_13320_13331[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13318 === (2))){
var state_13317__$1 = state_13317;
var statearr_13321_13332 = state_13317__$1;
(statearr_13321_13332[(2)] = line);

(statearr_13321_13332[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13318 === (3))){
var inst_13313 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_13317__$1 = state_13317;
var statearr_13322_13333 = state_13317__$1;
(statearr_13322_13333[(2)] = inst_13313);

(statearr_13322_13333[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13318 === (4))){
var inst_13315 = (state_13317[(2)]);
var state_13317__$1 = state_13317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13317__$1,inst_13315);
} else {
return null;
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____0 = (function (){
var statearr_13326 = [null,null,null,null,null,null,null];
(statearr_13326[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__);

(statearr_13326[(1)] = (1));

return statearr_13326;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____1 = (function (state_13317){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13317);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13327){if((e13327 instanceof Object)){
var ex__10102__auto__ = e13327;
var statearr_13328_13334 = state_13317;
(statearr_13328_13334[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13317);

return cljs.core.cst$kw$recur;
} else {
throw e13327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13335 = state_13317;
state_13317 = G__13335;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__ = function(state_13317){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____1.call(this,state_13317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13329 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_(arg,"ERROR: ")) || (clojure.string.includes_QMARK_(arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13400){
var state_val_13401 = (state_13400[(1)]);
if((state_val_13401 === (1))){
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13400__$1,(2),chan_verified_path);
} else {
if((state_val_13401 === (2))){
var inst_13389 = (state_13400[(7)]);
var inst_13389__$1 = (state_13400[(2)]);
var inst_13390 = (function (){var verified_path = inst_13389__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function (res){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,true)){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function (state_13405){
var state_val_13406 = (state_13405[(1)]);
if((state_val_13406 === (1))){
var state_13405__$1 = state_13405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13405__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_13406 === (2))){
var inst_13403 = (state_13405[(2)]);
var state_13405__$1 = state_13405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13405__$1,inst_13403);
} else {
return null;
}
}
});})(c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13410 = [null,null,null,null,null,null,null];
(statearr_13410[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13410[(1)] = (1));

return statearr_13410;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13405){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13405);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13411){if((e13411 instanceof Object)){
var ex__10102__auto__ = e13411;
var statearr_13412_13440 = state_13405;
(statearr_13412_13440[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13405);

return cljs.core.cst$kw$recur;
} else {
throw e13411;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13441 = state_13405;
state_13405 = G__13441;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13405){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13413 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
);

return c__10212__auto____$1;
} else {
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function (state_13418){
var state_val_13419 = (state_13418[(1)]);
if((state_val_13419 === (1))){
var inst_13414 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13418__$1,(2),drop_dot.core.c,inst_13414);
} else {
if((state_val_13419 === (2))){
var inst_13416 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13418__$1,inst_13416);
} else {
return null;
}
}
});})(c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13423 = [null,null,null,null,null,null,null];
(statearr_13423[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13423[(1)] = (1));

return statearr_13423;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13418){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13418);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13424){if((e13424 instanceof Object)){
var ex__10102__auto__ = e13424;
var statearr_13425_13442 = state_13418;
(statearr_13425_13442[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13418);

return cljs.core.cst$kw$recur;
} else {
throw e13424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13443 = state_13418;
state_13418 = G__13443;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13418){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13426 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
);

return c__10212__auto____$1;
}
});
;})(verified_path,rc,inst_13389,inst_13389__$1,state_val_13401,c__10212__auto__))
})();
var inst_13391 = drop_dot.core.protocol_msg_QMARK_(inst_13389__$1);
var state_13400__$1 = (function (){var statearr_13427 = state_13400;
(statearr_13427[(8)] = inst_13390);

(statearr_13427[(7)] = inst_13389__$1);

return statearr_13427;
})();
if(cljs.core.truth_(inst_13391)){
var statearr_13428_13444 = state_13400__$1;
(statearr_13428_13444[(1)] = (3));

} else {
var statearr_13429_13445 = state_13400__$1;
(statearr_13429_13445[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13401 === (3))){
var inst_13389 = (state_13400[(7)]);
var state_13400__$1 = state_13400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13400__$1,(6),cljs.core.async.chan,inst_13389);
} else {
if((state_val_13401 === (4))){
var inst_13390 = (state_13400[(8)]);
var inst_13389 = (state_13400[(7)]);
var inst_13396 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_13389,inst_13390);
var state_13400__$1 = state_13400;
var statearr_13430_13446 = state_13400__$1;
(statearr_13430_13446[(2)] = inst_13396);

(statearr_13430_13446[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13401 === (5))){
var inst_13398 = (state_13400[(2)]);
var state_13400__$1 = (function (){var statearr_13431 = state_13400;
(statearr_13431[(9)] = inst_13398);

return statearr_13431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13400__$1,cljs.core.async.chan);
} else {
if((state_val_13401 === (6))){
var inst_13394 = (state_13400[(2)]);
var state_13400__$1 = state_13400;
var statearr_13432_13447 = state_13400__$1;
(statearr_13432_13447[(2)] = inst_13394);

(statearr_13432_13447[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13436 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13436[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13436[(1)] = (1));

return statearr_13436;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13400){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13400);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13437){if((e13437 instanceof Object)){
var ex__10102__auto__ = e13437;
var statearr_13438_13448 = state_13400;
(statearr_13438_13448[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13400);

return cljs.core.cst$kw$recur;
} else {
throw e13437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13449 = state_13400;
state_13400 = G__13449;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13400){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13439 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13484){
var state_val_13485 = (state_13484[(1)]);
if((state_val_13485 === (1))){
var state_13484__$1 = state_13484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13484__$1,(2),c);
} else {
if((state_val_13485 === (2))){
var inst_13475 = (state_13484[(7)]);
var inst_13475__$1 = (state_13484[(2)]);
var inst_13476 = drop_dot.core.protocol_msg_QMARK_(inst_13475__$1);
var state_13484__$1 = (function (){var statearr_13486 = state_13484;
(statearr_13486[(7)] = inst_13475__$1);

return statearr_13486;
})();
if(cljs.core.truth_(inst_13476)){
var statearr_13487_13498 = state_13484__$1;
(statearr_13487_13498[(1)] = (3));

} else {
var statearr_13488_13499 = state_13484__$1;
(statearr_13488_13499[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13485 === (3))){
var inst_13475 = (state_13484[(7)]);
var inst_13478 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_13475], 0));
var state_13484__$1 = state_13484;
var statearr_13489_13500 = state_13484__$1;
(statearr_13489_13500[(2)] = inst_13478);

(statearr_13489_13500[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13485 === (4))){
var inst_13475 = (state_13484[(7)]);
var inst_13480 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_13475);
var state_13484__$1 = state_13484;
var statearr_13490_13501 = state_13484__$1;
(statearr_13490_13501[(2)] = inst_13480);

(statearr_13490_13501[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13485 === (5))){
var inst_13482 = (state_13484[(2)]);
var state_13484__$1 = state_13484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13484__$1,inst_13482);
} else {
return null;
}
}
}
}
}
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____0 = (function (){
var statearr_13494 = [null,null,null,null,null,null,null,null];
(statearr_13494[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__);

(statearr_13494[(1)] = (1));

return statearr_13494;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____1 = (function (state_13484){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13484);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13495){if((e13495 instanceof Object)){
var ex__10102__auto__ = e13495;
var statearr_13496_13502 = state_13484;
(statearr_13496_13502[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13484);

return cljs.core.cst$kw$recur;
} else {
throw e13495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13503 = state_13484;
state_13484 = G__13503;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__ = function(state_13484){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____1.call(this,state_13484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13497 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee(drop_dot.core.chan_verified_path__GT_chan_verified_droppee(drop_dot.core.line__GT_chan_verified_path(line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
var G__13505 = (drop_dot.core.line__GT_chan_verified_linkee.cljs$core$IFn$_invoke$arity$1 ? drop_dot.core.line__GT_chan_verified_linkee.cljs$core$IFn$_invoke$arity$1(line) : drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
return (drop_dot.core.link_a_chan_verified_linkee.cljs$core$IFn$_invoke$arity$1 ? drop_dot.core.link_a_chan_verified_linkee.cljs$core$IFn$_invoke$arity$1(G__13505) : drop_dot.core.link_a_chan_verified_linkee.call(null,G__13505));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__10212__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto__){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto__){
return (function (state_13585){
var state_val_13586 = (state_13585[(1)]);
if((state_val_13586 === (7))){
var inst_13580 = (state_13585[(2)]);
var inst_13581 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["done"], 0));
var state_13585__$1 = (function (){var statearr_13588 = state_13585;
(statearr_13588[(7)] = inst_13580);

return statearr_13588;
})();
var statearr_13589_13614 = state_13585__$1;
(statearr_13589_13614[(2)] = inst_13581);

(statearr_13589_13614[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (1))){
var inst_13560 = chan_config;
var state_13585__$1 = (function (){var statearr_13590 = state_13585;
(statearr_13590[(8)] = inst_13560);

return statearr_13590;
})();
var statearr_13591_13615 = state_13585__$1;
(statearr_13591_13615[(2)] = null);

(statearr_13591_13615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (4))){
var inst_13563 = (state_13585[(9)]);
var inst_13563__$1 = (state_13585[(2)]);
var state_13585__$1 = (function (){var statearr_13592 = state_13585;
(statearr_13592[(9)] = inst_13563__$1);

return statearr_13592;
})();
if(cljs.core.truth_(inst_13563__$1)){
var statearr_13593_13616 = state_13585__$1;
(statearr_13593_13616[(1)] = (5));

} else {
var statearr_13594_13617 = state_13585__$1;
(statearr_13594_13617[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (13))){
var inst_13560 = (state_13585[(8)]);
var inst_13576 = (state_13585[(2)]);
var tmp13587 = inst_13560;
var inst_13560__$1 = tmp13587;
var state_13585__$1 = (function (){var statearr_13595 = state_13585;
(statearr_13595[(10)] = inst_13576);

(statearr_13595[(8)] = inst_13560__$1);

return statearr_13595;
})();
var statearr_13596_13618 = state_13585__$1;
(statearr_13596_13618[(2)] = null);

(statearr_13596_13618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (6))){
var state_13585__$1 = state_13585;
var statearr_13597_13619 = state_13585__$1;
(statearr_13597_13619[(2)] = null);

(statearr_13597_13619[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (3))){
var inst_13583 = (state_13585[(2)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13585__$1,inst_13583);
} else {
if((state_val_13586 === (12))){
var state_13585__$1 = state_13585;
var statearr_13598_13620 = state_13585__$1;
(statearr_13598_13620[(2)] = null);

(statearr_13598_13620[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (2))){
var inst_13560 = (state_13585[(8)]);
var state_13585__$1 = state_13585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13585__$1,(4),inst_13560);
} else {
if((state_val_13586 === (11))){
var inst_13563 = (state_13585[(9)]);
var inst_13573 = drop_dot.core.link_line(inst_13563);
var state_13585__$1 = state_13585;
var statearr_13599_13621 = state_13585__$1;
(statearr_13599_13621[(2)] = inst_13573);

(statearr_13599_13621[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (9))){
var state_13585__$1 = state_13585;
var statearr_13600_13622 = state_13585__$1;
(statearr_13600_13622[(2)] = null);

(statearr_13600_13622[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (5))){
var inst_13565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,"drop");
var state_13585__$1 = state_13585;
if(inst_13565){
var statearr_13601_13623 = state_13585__$1;
(statearr_13601_13623[(1)] = (8));

} else {
var statearr_13602_13624 = state_13585__$1;
(statearr_13602_13624[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (10))){
var inst_13570 = (state_13585[(2)]);
var inst_13571 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd,"link");
var state_13585__$1 = (function (){var statearr_13603 = state_13585;
(statearr_13603[(11)] = inst_13570);

return statearr_13603;
})();
if(inst_13571){
var statearr_13604_13625 = state_13585__$1;
(statearr_13604_13625[(1)] = (11));

} else {
var statearr_13605_13626 = state_13585__$1;
(statearr_13605_13626[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13586 === (8))){
var inst_13563 = (state_13585[(9)]);
var inst_13567 = drop_dot.core.drop_line(inst_13563);
var state_13585__$1 = state_13585;
var statearr_13606_13627 = state_13585__$1;
(statearr_13606_13627[(2)] = inst_13567);

(statearr_13606_13627[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__10212__auto__))
;
return ((function (switch__10098__auto__,c__10212__auto__){
return (function() {
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto____0 = (function (){
var statearr_13610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13610[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto__);

(statearr_13610[(1)] = (1));

return statearr_13610;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto____1 = (function (state_13585){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13585);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13611){if((e13611 instanceof Object)){
var ex__10102__auto__ = e13611;
var statearr_13612_13628 = state_13585;
(statearr_13612_13628[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13585);

return cljs.core.cst$kw$recur;
} else {
throw e13611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13629 = state_13585;
state_13585 = G__13629;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto__ = function(state_13585){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto____1.call(this,state_13585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto__))
})();
var state__10214__auto__ = (function (){var statearr_13613 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto__);

return statearr_13613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto__))
);

return c__10212__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__10212__auto___13726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto___13726,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto___13726,c){
return (function (state_13690){
var state_val_13691 = (state_13690[(1)]);
if((state_val_13691 === (1))){
var inst_13678 = (state_13690[(7)]);
var inst_13679 = (state_13690[(8)]);
var inst_13680 = (state_13690[(9)]);
var inst_13678__$1 = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("/home/george/Dropbox/drop-dot/js/get-lines-from-file.js") : cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js"));
var inst_13679__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13680__$1 = (function (){var res = inst_13678__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_13679__$1;
return ((function (res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c){
return (function (error,res__$1){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c){
return (function (state_13695){
var state_val_13696 = (state_13695[(1)]);
if((state_val_13696 === (1))){
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13695__$1,(2),wcc,res__$1);
} else {
if((state_val_13696 === (2))){
var inst_13693 = (state_13695[(2)]);
var state_13695__$1 = state_13695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13695__$1,inst_13693);
} else {
return null;
}
}
});})(c__10212__auto____$1,res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0 = (function (){
var statearr_13700 = [null,null,null,null,null,null,null];
(statearr_13700[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10099__auto__);

(statearr_13700[(1)] = (1));

return statearr_13700;
});
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1 = (function (state_13695){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13695);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13701){if((e13701 instanceof Object)){
var ex__10102__auto__ = e13701;
var statearr_13702_13727 = state_13695;
(statearr_13702_13727[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13695);

return cljs.core.cst$kw$recur;
} else {
throw e13701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13728 = state_13695;
state_13695 = G__13728;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = function(state_13695){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1.call(this,state_13695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c))
})();
var state__10214__auto__ = (function (){var statearr_13703 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c))
);

return c__10212__auto____$1;
});
;})(res,config_path,wcc,inst_13678,inst_13679,inst_13680,inst_13678__$1,inst_13679__$1,state_val_13691,c__10212__auto___13726,c))
})();
var inst_13681 = inst_13678__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_13680__$1);
var state_13690__$1 = (function (){var statearr_13704 = state_13690;
(statearr_13704[(7)] = inst_13678__$1);

(statearr_13704[(10)] = inst_13681);

(statearr_13704[(8)] = inst_13679__$1);

(statearr_13704[(9)] = inst_13680__$1);

return statearr_13704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13690__$1,(2),inst_13679__$1);
} else {
if((state_val_13691 === (2))){
var inst_13678 = (state_13690[(7)]);
var inst_13681 = (state_13690[(10)]);
var inst_13679 = (state_13690[(8)]);
var inst_13680 = (state_13690[(9)]);
var inst_13683 = (state_13690[(2)]);
var inst_13684 = [cljs.core.str(inst_13683)].join('');
var inst_13685 = parseInt(inst_13684);
var inst_13686 = (function (){var res = inst_13678;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_13679;
var wcc_jammer = inst_13680;
var get_wc = inst_13681;
var lines = inst_13685;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,state_val_13691,c__10212__auto___13726,c){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.count(c.buf))){
return cljs.core.async.close_BANG_(c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,state_val_13691,c__10212__auto___13726,c))
})();
var inst_13687 = (function (){var res = inst_13678;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_13679;
var wcc_jammer = inst_13680;
var get_wc = inst_13681;
var lines = inst_13685;
var close_if_done = inst_13686;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c){
return (function (res__$1){
var c__10212__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c){
return (function (){
var f__10213__auto__ = (function (){var switch__10098__auto__ = ((function (c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c){
return (function (state_13709){
var state_val_13710 = (state_13709[(1)]);
if((state_val_13710 === (1))){
var state_13709__$1 = state_13709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13709__$1,(2),c,res__$1);
} else {
if((state_val_13710 === (2))){
var inst_13706 = (state_13709[(2)]);
var inst_13707 = (close_if_done.cljs$core$IFn$_invoke$arity$0 ? close_if_done.cljs$core$IFn$_invoke$arity$0() : close_if_done.call(null));
var state_13709__$1 = (function (){var statearr_13711 = state_13709;
(statearr_13711[(7)] = inst_13706);

return statearr_13711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13709__$1,inst_13707);
} else {
return null;
}
}
});})(c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c))
;
return ((function (switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0 = (function (){
var statearr_13715 = [null,null,null,null,null,null,null,null];
(statearr_13715[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10099__auto__);

(statearr_13715[(1)] = (1));

return statearr_13715;
});
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1 = (function (state_13709){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13709);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13716){if((e13716 instanceof Object)){
var ex__10102__auto__ = e13716;
var statearr_13717_13729 = state_13709;
(statearr_13717_13729[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13709);

return cljs.core.cst$kw$recur;
} else {
throw e13716;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13730 = state_13709;
state_13709 = G__13730;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = function(state_13709){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1.call(this,state_13709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c))
})();
var state__10214__auto__ = (function (){var statearr_13718 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto____$1);

return statearr_13718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c))
);

return c__10212__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_13678,inst_13681,inst_13679,inst_13680,inst_13683,inst_13684,inst_13685,inst_13686,state_val_13691,c__10212__auto___13726,c))
})();
var inst_13688 = inst_13678.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_13687);
var state_13690__$1 = state_13690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13690__$1,inst_13688);
} else {
return null;
}
}
});})(c__10212__auto___13726,c))
;
return ((function (switch__10098__auto__,c__10212__auto___13726,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0 = (function (){
var statearr_13722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13722[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10099__auto__);

(statearr_13722[(1)] = (1));

return statearr_13722;
});
var drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1 = (function (state_13690){
while(true){
var ret_value__10100__auto__ = (function (){try{while(true){
var result__10101__auto__ = switch__10098__auto__(state_13690);
if(cljs.core.keyword_identical_QMARK_(result__10101__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__10101__auto__;
}
break;
}
}catch (e13723){if((e13723 instanceof Object)){
var ex__10102__auto__ = e13723;
var statearr_13724_13731 = state_13690;
(statearr_13724_13731[(5)] = ex__10102__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13690);

return cljs.core.cst$kw$recur;
} else {
throw e13723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__10100__auto__,cljs.core.cst$kw$recur)){
var G__13732 = state_13690;
state_13690 = G__13732;
continue;
} else {
return ret_value__10100__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__ = function(state_13690){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1.call(this,state_13690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10099__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10099__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10099__auto__;
})()
;})(switch__10098__auto__,c__10212__auto___13726,c))
})();
var state__10214__auto__ = (function (){var statearr_13725 = (f__10213__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10213__auto__.cljs$core$IFn$_invoke$arity$0() : f__10213__auto__.call(null));
(statearr_13725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10212__auto___13726);

return statearr_13725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10214__auto__);
});})(c__10212__auto___13726,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___13735 = arguments.length;
var i__7215__auto___13736 = (0);
while(true){
if((i__7215__auto___13736 < len__7214__auto___13735)){
args__7221__auto__.push((arguments[i__7215__auto___13736]));

var G__13737 = (i__7215__auto___13736 + (1));
i__7215__auto___13736 = G__13737;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("minimist") : cljs.nodejs.require.call(null,"minimist"));
var argv = (function (){var G__13734 = cljs.core.clj__GT_js(cljs.core.vec(args));
return (minimist.cljs$core$IFn$_invoke$arity$1 ? minimist.cljs$core$IFn$_invoke$arity$1(G__13734) : minimist.call(null,G__13734));
})();
var e = (function (){var or__6156__auto__ = argv.e;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__6156__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "$HOME";
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,"drop")){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["drop mode"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,"link")){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["link mode"], 0));
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq13733){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13733));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;
