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
return (function (state_24272){
var state_val_24273 = (state_24272[(1)]);
if((state_val_24273 === (1))){
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24272__$1,(2),c,arg);
} else {
if((state_val_24273 === (2))){
var inst_24270 = (state_24272[(2)]);
var state_24272__$1 = state_24272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24272__$1,inst_24270);
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
var statearr_24277 = [null,null,null,null,null,null,null];
(statearr_24277[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_24277[(1)] = (1));

return statearr_24277;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_24272){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24278){if((e24278 instanceof Object)){
var ex__9301__auto__ = e24278;
var statearr_24279_24281 = state_24272;
(statearr_24279_24281[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24282 = state_24272;
state_24272 = G__24282;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_24272){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_24272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24280 = f__9319__auto__.call(null);
(statearr_24280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24280;
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
return (function (state_24298){
var state_val_24299 = (state_24298[(1)]);
if((state_val_24299 === (1))){
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24298__$1,(2),c,arg);
} else {
if((state_val_24299 === (2))){
var inst_24296 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24298__$1,inst_24296);
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
var statearr_24303 = [null,null,null,null,null,null,null];
(statearr_24303[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_24303[(1)] = (1));

return statearr_24303;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_24298){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24304){if((e24304 instanceof Object)){
var ex__9301__auto__ = e24304;
var statearr_24305_24307 = state_24298;
(statearr_24305_24307[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24308 = state_24298;
state_24298 = G__24308;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_24298){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_24298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24306 = f__9319__auto__.call(null);
(statearr_24306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24306;
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
return (function (state_24383){
var state_val_24384 = (state_24383[(1)]);
if((state_val_24384 === (1))){
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24383__$1,(2),input_chan);
} else {
if((state_val_24384 === (2))){
var inst_24362 = (state_24383[(2)]);
var inst_24363 = inst_24362;
var state_24383__$1 = (function (){var statearr_24385 = state_24383;
(statearr_24385[(7)] = inst_24363);

return statearr_24385;
})();
var statearr_24386_24413 = state_24383__$1;
(statearr_24386_24413[(2)] = null);

(statearr_24386_24413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (3))){
var inst_24363 = (state_24383[(7)]);
var inst_24365 = cljs.core.count.call(null,inst_24363);
var inst_24366 = cljs.core._EQ_.call(null,inst_24365,(0));
var state_24383__$1 = state_24383;
if(inst_24366){
var statearr_24387_24414 = state_24383__$1;
(statearr_24387_24414[(1)] = (5));

} else {
var statearr_24388_24415 = state_24383__$1;
(statearr_24388_24415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (4))){
var inst_24381 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24383__$1,inst_24381);
} else {
if((state_val_24384 === (5))){
var state_24383__$1 = state_24383;
var statearr_24389_24416 = state_24383__$1;
(statearr_24389_24416[(2)] = null);

(statearr_24389_24416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (6))){
var inst_24363 = (state_24383[(7)]);
var inst_24369 = cljs.core.async.chan.call(null);
var inst_24370 = cljs.core.first.call(null,inst_24363);
var inst_24371 = (function (){var v = inst_24363;
var rc = inst_24369;
var cmd = inst_24370;
return ((function (v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__){
return (function (state_24393){
var state_val_24394 = (state_24393[(1)]);
if((state_val_24394 === (1))){
var state_24393__$1 = state_24393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24393__$1,(2),rc,res);
} else {
if((state_val_24394 === (2))){
var inst_24391 = (state_24393[(2)]);
var state_24393__$1 = state_24393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24393__$1,inst_24391);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_24398 = [null,null,null,null,null,null,null];
(statearr_24398[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_24398[(1)] = (1));

return statearr_24398;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_24393){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24399){if((e24399 instanceof Object)){
var ex__9301__auto__ = e24399;
var statearr_24400_24417 = state_24393;
(statearr_24400_24417[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24418 = state_24393;
state_24393 = G__24418;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_24393){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_24393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24401 = f__9319__auto__.call(null);
(statearr_24401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_24363,inst_24369,inst_24370,state_val_24384,c__9318__auto__))
})();
var inst_24372 = drop_dot.core.pure_js.execAndPrint(inst_24370,inst_24371);
var state_24383__$1 = (function (){var statearr_24402 = state_24383;
(statearr_24402[(8)] = inst_24372);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24383__$1,(8),inst_24369);
} else {
if((state_val_24384 === (7))){
var inst_24379 = (state_24383[(2)]);
var state_24383__$1 = state_24383;
var statearr_24403_24419 = state_24383__$1;
(statearr_24403_24419[(2)] = inst_24379);

(statearr_24403_24419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24384 === (8))){
var inst_24363 = (state_24383[(7)]);
var inst_24374 = (state_24383[(2)]);
var inst_24375 = cljs.core.rest.call(null,inst_24363);
var inst_24376 = cljs.core.vec.call(null,inst_24375);
var inst_24363__$1 = inst_24376;
var state_24383__$1 = (function (){var statearr_24404 = state_24383;
(statearr_24404[(7)] = inst_24363__$1);

(statearr_24404[(9)] = inst_24374);

return statearr_24404;
})();
var statearr_24405_24420 = state_24383__$1;
(statearr_24405_24420[(2)] = null);

(statearr_24405_24420[(1)] = (3));


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
var statearr_24409 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24409[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_24409[(1)] = (1));

return statearr_24409;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_24383){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24410){if((e24410 instanceof Object)){
var ex__9301__auto__ = e24410;
var statearr_24411_24421 = state_24383;
(statearr_24411_24421[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24422 = state_24383;
state_24383 = G__24422;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_24383){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_24383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24412 = f__9319__auto__.call(null);
(statearr_24412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24412;
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
return (function (state_24434){
var state_val_24435 = (state_24434[(1)]);
if((state_val_24435 === (1))){
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24434__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_24439 = [null,null,null,null,null,null,null];
(statearr_24439[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_24439[(1)] = (1));

return statearr_24439;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_24434){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24440){if((e24440 instanceof Object)){
var ex__9301__auto__ = e24440;
var statearr_24441_24443 = state_24434;
(statearr_24441_24443[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24444 = state_24434;
state_24434 = G__24444;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_24442 = f__9319__auto__.call(null);
(statearr_24442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24442;
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
return (function (state_24460){
var state_val_24461 = (state_24460[(1)]);
if((state_val_24461 === (1))){
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24460__$1,(2),d,res__$1);
} else {
if((state_val_24461 === (2))){
var inst_24458 = (state_24460[(2)]);
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24460__$1,inst_24458);
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
var statearr_24465 = [null,null,null,null,null,null,null];
(statearr_24465[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_24465[(1)] = (1));

return statearr_24465;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_24460){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24466){if((e24466 instanceof Object)){
var ex__9301__auto__ = e24466;
var statearr_24467_24469 = state_24460;
(statearr_24467_24469[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24470 = state_24460;
state_24460 = G__24470;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_24460){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_24460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_24468 = f__9319__auto__.call(null);
(statearr_24468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24468;
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
return (function (state_24502){
var state_val_24503 = (state_24502[(1)]);
if((state_val_24503 === (1))){
var inst_24493 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24502__$1,(2),inst_24493);
} else {
if((state_val_24503 === (2))){
var inst_24495 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
if(cljs.core.truth_(inst_24495)){
var statearr_24504_24515 = state_24502__$1;
(statearr_24504_24515[(1)] = (3));

} else {
var statearr_24505_24516 = state_24502__$1;
(statearr_24505_24516[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (3))){
var state_24502__$1 = state_24502;
var statearr_24506_24517 = state_24502__$1;
(statearr_24506_24517[(2)] = line);

(statearr_24506_24517[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (4))){
var inst_24498 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_24502__$1 = state_24502;
var statearr_24507_24518 = state_24502__$1;
(statearr_24507_24518[(2)] = inst_24498);

(statearr_24507_24518[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24503 === (5))){
var inst_24500 = (state_24502[(2)]);
var state_24502__$1 = state_24502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24502__$1,inst_24500);
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
var statearr_24511 = [null,null,null,null,null,null,null];
(statearr_24511[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_24511[(1)] = (1));

return statearr_24511;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_24502){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24512){if((e24512 instanceof Object)){
var ex__9301__auto__ = e24512;
var statearr_24513_24519 = state_24502;
(statearr_24513_24519[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24520 = state_24502;
state_24502 = G__24520;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_24502){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_24502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24514 = f__9319__auto__.call(null);
(statearr_24514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24514;
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
return (function (state_24591){
var state_val_24592 = (state_24591[(1)]);
if((state_val_24592 === (1))){
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24591__$1,(2),chan_verified_path);
} else {
if((state_val_24592 === (2))){
var inst_24577 = (state_24591[(7)]);
var inst_24578 = (state_24591[(8)]);
var inst_24577__$1 = (state_24591[(2)]);
var inst_24578__$1 = cljs.core.async.chan.call(null,(1));
var inst_24579 = (function (){var verified_path = inst_24577__$1;
var rc = inst_24578__$1;
return ((function (verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function (state_24597){
var state_val_24598 = (state_24597[(1)]);
if((state_val_24598 === (1))){
var inst_24593 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24597__$1,(2),rc,inst_24593);
} else {
if((state_val_24598 === (2))){
var inst_24595 = (state_24597[(2)]);
var state_24597__$1 = state_24597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24597__$1,inst_24595);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_24602 = [null,null,null,null,null,null,null];
(statearr_24602[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_24602[(1)] = (1));

return statearr_24602;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_24597){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24603){if((e24603 instanceof Object)){
var ex__9301__auto__ = e24603;
var statearr_24604_24631 = state_24597;
(statearr_24604_24631[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24632 = state_24597;
state_24597 = G__24632;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_24597){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_24597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24605 = f__9319__auto__.call(null);
(statearr_24605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function (state_24609){
var state_val_24610 = (state_24609[(1)]);
if((state_val_24610 === (1))){
var state_24609__$1 = state_24609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24609__$1,(2),rc,verified_path);
} else {
if((state_val_24610 === (2))){
var inst_24607 = (state_24609[(2)]);
var state_24609__$1 = state_24609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24609__$1,inst_24607);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_24614 = [null,null,null,null,null,null,null];
(statearr_24614[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_24614[(1)] = (1));

return statearr_24614;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_24609){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24615){if((e24615 instanceof Object)){
var ex__9301__auto__ = e24615;
var statearr_24616_24633 = state_24609;
(statearr_24616_24633[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24634 = state_24609;
state_24609 = G__24634;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_24609){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_24609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24617 = f__9319__auto__.call(null);
(statearr_24617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_24577,inst_24578,inst_24577__$1,inst_24578__$1,state_val_24592,c__9318__auto__))
})();
var inst_24580 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_24577__$1);
var state_24591__$1 = (function (){var statearr_24618 = state_24591;
(statearr_24618[(9)] = inst_24579);

(statearr_24618[(7)] = inst_24577__$1);

(statearr_24618[(8)] = inst_24578__$1);

return statearr_24618;
})();
if(cljs.core.truth_(inst_24580)){
var statearr_24619_24635 = state_24591__$1;
(statearr_24619_24635[(1)] = (3));

} else {
var statearr_24620_24636 = state_24591__$1;
(statearr_24620_24636[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (3))){
var inst_24577 = (state_24591[(7)]);
var inst_24578 = (state_24591[(8)]);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24591__$1,(6),inst_24578,inst_24577);
} else {
if((state_val_24592 === (4))){
var inst_24579 = (state_24591[(9)]);
var inst_24577 = (state_24591[(7)]);
var inst_24585 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_24577,inst_24579);
var state_24591__$1 = state_24591;
var statearr_24621_24637 = state_24591__$1;
(statearr_24621_24637[(2)] = inst_24585);

(statearr_24621_24637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (5))){
var inst_24578 = (state_24591[(8)]);
var inst_24587 = (state_24591[(2)]);
var state_24591__$1 = (function (){var statearr_24622 = state_24591;
(statearr_24622[(10)] = inst_24587);

return statearr_24622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24591__$1,(7),inst_24578);
} else {
if((state_val_24592 === (6))){
var inst_24583 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
var statearr_24623_24638 = state_24591__$1;
(statearr_24623_24638[(2)] = inst_24583);

(statearr_24623_24638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24592 === (7))){
var inst_24589 = (state_24591[(2)]);
var state_24591__$1 = state_24591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24591__$1,inst_24589);
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
var statearr_24627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24627[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_24627[(1)] = (1));

return statearr_24627;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_24591){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24628){if((e24628 instanceof Object)){
var ex__9301__auto__ = e24628;
var statearr_24629_24639 = state_24591;
(statearr_24629_24639[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24640 = state_24591;
state_24591 = G__24640;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_24591){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_24591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24630 = f__9319__auto__.call(null);
(statearr_24630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24630;
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
return (function (state_24675){
var state_val_24676 = (state_24675[(1)]);
if((state_val_24676 === (1))){
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24675__$1,(2),c);
} else {
if((state_val_24676 === (2))){
var inst_24666 = (state_24675[(7)]);
var inst_24666__$1 = (state_24675[(2)]);
var inst_24667 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_24666__$1);
var state_24675__$1 = (function (){var statearr_24677 = state_24675;
(statearr_24677[(7)] = inst_24666__$1);

return statearr_24677;
})();
if(cljs.core.truth_(inst_24667)){
var statearr_24678_24689 = state_24675__$1;
(statearr_24678_24689[(1)] = (3));

} else {
var statearr_24679_24690 = state_24675__$1;
(statearr_24679_24690[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (3))){
var inst_24666 = (state_24675[(7)]);
var inst_24669 = cljs.core.println.call(null,inst_24666);
var state_24675__$1 = state_24675;
var statearr_24680_24691 = state_24675__$1;
(statearr_24680_24691[(2)] = inst_24669);

(statearr_24680_24691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (4))){
var inst_24666 = (state_24675[(7)]);
var inst_24671 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_24666);
var state_24675__$1 = state_24675;
var statearr_24681_24692 = state_24675__$1;
(statearr_24681_24692[(2)] = inst_24671);

(statearr_24681_24692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (5))){
var inst_24673 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24675__$1,inst_24673);
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
var statearr_24685 = [null,null,null,null,null,null,null,null];
(statearr_24685[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_24685[(1)] = (1));

return statearr_24685;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_24675){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24686){if((e24686 instanceof Object)){
var ex__9301__auto__ = e24686;
var statearr_24687_24693 = state_24675;
(statearr_24687_24693[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24694 = state_24675;
state_24675 = G__24694;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_24675){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_24675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24688 = f__9319__auto__.call(null);
(statearr_24688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24688;
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
return (function (state_24723){
var state_val_24724 = (state_24723[(1)]);
if((state_val_24724 === (1))){
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24723__$1,(2),rc,line);
} else {
if((state_val_24724 === (2))){
var inst_24721 = (state_24723[(2)]);
var state_24723__$1 = state_24723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24723__$1,inst_24721);
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
var statearr_24728 = [null,null,null,null,null,null,null];
(statearr_24728[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_24728[(1)] = (1));

return statearr_24728;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_24723){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24729){if((e24729 instanceof Object)){
var ex__9301__auto__ = e24729;
var statearr_24730_24745 = state_24723;
(statearr_24730_24745[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24746 = state_24723;
state_24723 = G__24746;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_24723){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_24723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_24731 = f__9319__auto__.call(null);
(statearr_24731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24731;
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
return (function (state_24736){
var state_val_24737 = (state_24736[(1)]);
if((state_val_24737 === (1))){
var inst_24732 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24736__$1,(2),rc,inst_24732);
} else {
if((state_val_24737 === (2))){
var inst_24734 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24736__$1,inst_24734);
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
var statearr_24741 = [null,null,null,null,null,null,null];
(statearr_24741[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_24741[(1)] = (1));

return statearr_24741;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_24736){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24742){if((e24742 instanceof Object)){
var ex__9301__auto__ = e24742;
var statearr_24743_24747 = state_24736;
(statearr_24743_24747[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24748 = state_24736;
state_24736 = G__24748;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_24744 = f__9319__auto__.call(null);
(statearr_24744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24744;
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
return (function (state_24819){
var state_val_24820 = (state_24819[(1)]);
if((state_val_24820 === (1))){
var state_24819__$1 = state_24819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24819__$1,(2),chan_linkable_path);
} else {
if((state_val_24820 === (2))){
var inst_24805 = (state_24819[(7)]);
var inst_24806 = (state_24819[(8)]);
var inst_24805__$1 = (state_24819[(2)]);
var inst_24806__$1 = cljs.core.async.chan.call(null,(1));
var inst_24807 = (function (){var linkable_path = inst_24805__$1;
var rc = inst_24806__$1;
return ((function (linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function (state_24825){
var state_val_24826 = (state_24825[(1)]);
if((state_val_24826 === (1))){
var inst_24821 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_24825__$1 = state_24825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24825__$1,(2),rc,inst_24821);
} else {
if((state_val_24826 === (2))){
var inst_24823 = (state_24825[(2)]);
var state_24825__$1 = state_24825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24825__$1,inst_24823);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_24830 = [null,null,null,null,null,null,null];
(statearr_24830[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_24830[(1)] = (1));

return statearr_24830;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_24825){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24831){if((e24831 instanceof Object)){
var ex__9301__auto__ = e24831;
var statearr_24832_24859 = state_24825;
(statearr_24832_24859[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24860 = state_24825;
state_24825 = G__24860;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_24825){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_24825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24833 = f__9319__auto__.call(null);
(statearr_24833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function (state_24837){
var state_val_24838 = (state_24837[(1)]);
if((state_val_24838 === (1))){
var state_24837__$1 = state_24837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24837__$1,(2),rc,linkable_path);
} else {
if((state_val_24838 === (2))){
var inst_24835 = (state_24837[(2)]);
var state_24837__$1 = state_24837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24837__$1,inst_24835);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_24842 = [null,null,null,null,null,null,null];
(statearr_24842[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_24842[(1)] = (1));

return statearr_24842;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_24837){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24843){if((e24843 instanceof Object)){
var ex__9301__auto__ = e24843;
var statearr_24844_24861 = state_24837;
(statearr_24844_24861[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24862 = state_24837;
state_24837 = G__24862;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_24837){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_24837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24845 = f__9319__auto__.call(null);
(statearr_24845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_24805,inst_24806,inst_24805__$1,inst_24806__$1,state_val_24820,c__9318__auto__))
})();
var inst_24808 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_24805__$1);
var state_24819__$1 = (function (){var statearr_24846 = state_24819;
(statearr_24846[(7)] = inst_24805__$1);

(statearr_24846[(8)] = inst_24806__$1);

(statearr_24846[(9)] = inst_24807);

return statearr_24846;
})();
if(cljs.core.truth_(inst_24808)){
var statearr_24847_24863 = state_24819__$1;
(statearr_24847_24863[(1)] = (3));

} else {
var statearr_24848_24864 = state_24819__$1;
(statearr_24848_24864[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (3))){
var inst_24805 = (state_24819[(7)]);
var inst_24806 = (state_24819[(8)]);
var state_24819__$1 = state_24819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24819__$1,(6),inst_24806,inst_24805);
} else {
if((state_val_24820 === (4))){
var inst_24805 = (state_24819[(7)]);
var inst_24807 = (state_24819[(9)]);
var inst_24813 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_24805,inst_24807);
var state_24819__$1 = state_24819;
var statearr_24849_24865 = state_24819__$1;
(statearr_24849_24865[(2)] = inst_24813);

(statearr_24849_24865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (5))){
var inst_24806 = (state_24819[(8)]);
var inst_24815 = (state_24819[(2)]);
var state_24819__$1 = (function (){var statearr_24850 = state_24819;
(statearr_24850[(10)] = inst_24815);

return statearr_24850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24819__$1,(7),inst_24806);
} else {
if((state_val_24820 === (6))){
var inst_24811 = (state_24819[(2)]);
var state_24819__$1 = state_24819;
var statearr_24851_24866 = state_24819__$1;
(statearr_24851_24866[(2)] = inst_24811);

(statearr_24851_24866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24820 === (7))){
var inst_24817 = (state_24819[(2)]);
var state_24819__$1 = state_24819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24819__$1,inst_24817);
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
var statearr_24855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24855[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_24855[(1)] = (1));

return statearr_24855;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_24819){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24856){if((e24856 instanceof Object)){
var ex__9301__auto__ = e24856;
var statearr_24857_24867 = state_24819;
(statearr_24857_24867[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24868 = state_24819;
state_24819 = G__24868;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_24819){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_24819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24858 = f__9319__auto__.call(null);
(statearr_24858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24858;
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
return (function (state_24939){
var state_val_24940 = (state_24939[(1)]);
if((state_val_24940 === (1))){
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24939__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_24940 === (2))){
var inst_24926 = (state_24939[(7)]);
var inst_24925 = (state_24939[(8)]);
var inst_24925__$1 = (state_24939[(2)]);
var inst_24926__$1 = cljs.core.async.chan.call(null,(1));
var inst_24927 = (function (){var linkable_path = inst_24925__$1;
var rc = inst_24926__$1;
return ((function (linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function (state_24945){
var state_val_24946 = (state_24945[(1)]);
if((state_val_24946 === (1))){
var inst_24941 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24945__$1,(2),rc,inst_24941);
} else {
if((state_val_24946 === (2))){
var inst_24943 = (state_24945[(2)]);
var state_24945__$1 = state_24945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24945__$1,inst_24943);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_24950 = [null,null,null,null,null,null,null];
(statearr_24950[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_24950[(1)] = (1));

return statearr_24950;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_24945){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24951){if((e24951 instanceof Object)){
var ex__9301__auto__ = e24951;
var statearr_24952_24979 = state_24945;
(statearr_24952_24979[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24980 = state_24945;
state_24945 = G__24980;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_24945){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_24945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24953 = f__9319__auto__.call(null);
(statearr_24953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function (state_24957){
var state_val_24958 = (state_24957[(1)]);
if((state_val_24958 === (1))){
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24957__$1,(2),rc,linkable_path);
} else {
if((state_val_24958 === (2))){
var inst_24955 = (state_24957[(2)]);
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24957__$1,inst_24955);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_24962 = [null,null,null,null,null,null,null];
(statearr_24962[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_24962[(1)] = (1));

return statearr_24962;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_24957){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24963){if((e24963 instanceof Object)){
var ex__9301__auto__ = e24963;
var statearr_24964_24981 = state_24957;
(statearr_24964_24981[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24982 = state_24957;
state_24957 = G__24982;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_24957){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_24957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24965 = f__9319__auto__.call(null);
(statearr_24965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_24965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_24926,inst_24925,inst_24925__$1,inst_24926__$1,state_val_24940,c__9318__auto__))
})();
var inst_24928 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_24925__$1);
var state_24939__$1 = (function (){var statearr_24966 = state_24939;
(statearr_24966[(7)] = inst_24926__$1);

(statearr_24966[(9)] = inst_24927);

(statearr_24966[(8)] = inst_24925__$1);

return statearr_24966;
})();
if(cljs.core.truth_(inst_24928)){
var statearr_24967_24983 = state_24939__$1;
(statearr_24967_24983[(1)] = (3));

} else {
var statearr_24968_24984 = state_24939__$1;
(statearr_24968_24984[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (3))){
var inst_24926 = (state_24939[(7)]);
var inst_24925 = (state_24939[(8)]);
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24939__$1,(6),inst_24926,inst_24925);
} else {
if((state_val_24940 === (4))){
var inst_24927 = (state_24939[(9)]);
var inst_24925 = (state_24939[(8)]);
var inst_24933 = drop_dot.core.pure_js.pathExists(inst_24925,inst_24927);
var state_24939__$1 = state_24939;
var statearr_24969_24985 = state_24939__$1;
(statearr_24969_24985[(2)] = inst_24933);

(statearr_24969_24985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (5))){
var inst_24926 = (state_24939[(7)]);
var inst_24935 = (state_24939[(2)]);
var state_24939__$1 = (function (){var statearr_24970 = state_24939;
(statearr_24970[(10)] = inst_24935);

return statearr_24970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24939__$1,(7),inst_24926);
} else {
if((state_val_24940 === (6))){
var inst_24931 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24971_24986 = state_24939__$1;
(statearr_24971_24986[(2)] = inst_24931);

(statearr_24971_24986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (7))){
var inst_24937 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24939__$1,inst_24937);
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
var statearr_24975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24975[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_24975[(1)] = (1));

return statearr_24975;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_24939){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_24939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e24976){if((e24976 instanceof Object)){
var ex__9301__auto__ = e24976;
var statearr_24977_24987 = state_24939;
(statearr_24977_24987[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24988 = state_24939;
state_24939 = G__24988;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_24939){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_24939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_24978 = f__9319__auto__.call(null);
(statearr_24978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_24978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_25041){
var state_val_25042 = (state_25041[(1)]);
if((state_val_25042 === (1))){
var state_25041__$1 = state_25041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25041__$1,(2),c);
} else {
if((state_val_25042 === (2))){
var inst_25024 = (state_25041[(7)]);
var inst_25023 = (state_25041[(2)]);
var inst_25024__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_25023);
var inst_25025 = drop_dot.core.pure_js.getDirname(inst_25024__$1);
var inst_25026 = drop_dot.core.pure_js.getBasename(inst_25024__$1);
var inst_25027 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_25024__$1);
var state_25041__$1 = (function (){var statearr_25043 = state_25041;
(statearr_25043[(7)] = inst_25024__$1);

(statearr_25043[(8)] = inst_25025);

(statearr_25043[(9)] = inst_25026);

return statearr_25043;
})();
if(cljs.core.truth_(inst_25027)){
var statearr_25044_25055 = state_25041__$1;
(statearr_25044_25055[(1)] = (3));

} else {
var statearr_25045_25056 = state_25041__$1;
(statearr_25045_25056[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (3))){
var inst_25024 = (state_25041[(7)]);
var inst_25029 = [cljs.core.str(inst_25024)].join('');
var inst_25030 = cljs.core.println.call(null,inst_25029);
var state_25041__$1 = state_25041;
var statearr_25046_25057 = state_25041__$1;
(statearr_25046_25057[(2)] = inst_25030);

(statearr_25046_25057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (4))){
var inst_25024 = (state_25041[(7)]);
var inst_25025 = (state_25041[(8)]);
var inst_25026 = (state_25041[(9)]);
var inst_25032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25033 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_25025)].join('');
var inst_25034 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_25026),cljs.core.str(" "),cljs.core.str(inst_25024)].join('');
var inst_25035 = [inst_25033,inst_25034];
var inst_25036 = (new cljs.core.PersistentVector(null,2,(5),inst_25032,inst_25035,null));
var inst_25037 = drop_dot.core.exec_vec_of_commands.call(null,inst_25036);
var state_25041__$1 = state_25041;
var statearr_25047_25058 = state_25041__$1;
(statearr_25047_25058[(2)] = inst_25037);

(statearr_25047_25058[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25042 === (5))){
var inst_25039 = (state_25041[(2)]);
var state_25041__$1 = state_25041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25041__$1,inst_25039);
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
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_25051 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25051[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__);

(statearr_25051[(1)] = (1));

return statearr_25051;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_25041){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25052){if((e25052 instanceof Object)){
var ex__9301__auto__ = e25052;
var statearr_25053_25059 = state_25041;
(statearr_25053_25059[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25060 = state_25041;
state_25041 = G__25060;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = function(state_25041){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_25041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_25054 = f__9319__auto__.call(null);
(statearr_25054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_25054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_chan_path_that_needs_linking.call(null,drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line))));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_25137){
var state_val_25138 = (state_25137[(1)]);
if((state_val_25138 === (7))){
var inst_25133 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
var statearr_25140_25165 = state_25137__$1;
(statearr_25140_25165[(2)] = inst_25133);

(statearr_25140_25165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (1))){
var inst_25113 = chan_config;
var state_25137__$1 = (function (){var statearr_25141 = state_25137;
(statearr_25141[(7)] = inst_25113);

return statearr_25141;
})();
var statearr_25142_25166 = state_25137__$1;
(statearr_25142_25166[(2)] = null);

(statearr_25142_25166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (4))){
var inst_25116 = (state_25137[(8)]);
var inst_25116__$1 = (state_25137[(2)]);
var state_25137__$1 = (function (){var statearr_25143 = state_25137;
(statearr_25143[(8)] = inst_25116__$1);

return statearr_25143;
})();
if(cljs.core.truth_(inst_25116__$1)){
var statearr_25144_25167 = state_25137__$1;
(statearr_25144_25167[(1)] = (5));

} else {
var statearr_25145_25168 = state_25137__$1;
(statearr_25145_25168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (13))){
var inst_25113 = (state_25137[(7)]);
var inst_25129 = (state_25137[(2)]);
var tmp25139 = inst_25113;
var inst_25113__$1 = tmp25139;
var state_25137__$1 = (function (){var statearr_25146 = state_25137;
(statearr_25146[(7)] = inst_25113__$1);

(statearr_25146[(9)] = inst_25129);

return statearr_25146;
})();
var statearr_25147_25169 = state_25137__$1;
(statearr_25147_25169[(2)] = null);

(statearr_25147_25169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (6))){
var state_25137__$1 = state_25137;
var statearr_25148_25170 = state_25137__$1;
(statearr_25148_25170[(2)] = null);

(statearr_25148_25170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (3))){
var inst_25135 = (state_25137[(2)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25137__$1,inst_25135);
} else {
if((state_val_25138 === (12))){
var state_25137__$1 = state_25137;
var statearr_25149_25171 = state_25137__$1;
(statearr_25149_25171[(2)] = null);

(statearr_25149_25171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (2))){
var inst_25113 = (state_25137[(7)]);
var state_25137__$1 = state_25137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25137__$1,(4),inst_25113);
} else {
if((state_val_25138 === (11))){
var inst_25116 = (state_25137[(8)]);
var inst_25126 = drop_dot.core.link_line.call(null,inst_25116);
var state_25137__$1 = state_25137;
var statearr_25150_25172 = state_25137__$1;
(statearr_25150_25172[(2)] = inst_25126);

(statearr_25150_25172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (9))){
var state_25137__$1 = state_25137;
var statearr_25151_25173 = state_25137__$1;
(statearr_25151_25173[(2)] = null);

(statearr_25151_25173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (5))){
var inst_25118 = cljs.core._EQ_.call(null,cmd,"drop");
var state_25137__$1 = state_25137;
if(inst_25118){
var statearr_25152_25174 = state_25137__$1;
(statearr_25152_25174[(1)] = (8));

} else {
var statearr_25153_25175 = state_25137__$1;
(statearr_25153_25175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (10))){
var inst_25123 = (state_25137[(2)]);
var inst_25124 = cljs.core._EQ_.call(null,cmd,"link");
var state_25137__$1 = (function (){var statearr_25154 = state_25137;
(statearr_25154[(10)] = inst_25123);

return statearr_25154;
})();
if(inst_25124){
var statearr_25155_25176 = state_25137__$1;
(statearr_25155_25176[(1)] = (11));

} else {
var statearr_25156_25177 = state_25137__$1;
(statearr_25156_25177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25138 === (8))){
var inst_25116 = (state_25137[(8)]);
var inst_25120 = drop_dot.core.drop_line.call(null,inst_25116);
var state_25137__$1 = state_25137;
var statearr_25157_25178 = state_25137__$1;
(statearr_25157_25178[(2)] = inst_25120);

(statearr_25157_25178[(1)] = (10));


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
var statearr_25161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25161[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_25161[(1)] = (1));

return statearr_25161;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_25137){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25162){if((e25162 instanceof Object)){
var ex__9301__auto__ = e25162;
var statearr_25163_25179 = state_25137;
(statearr_25163_25179[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25180 = state_25137;
state_25137 = G__25180;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_25137){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_25137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_25164 = f__9319__auto__.call(null);
(statearr_25164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_25164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___25277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___25277,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___25277,c){
return (function (state_25241){
var state_val_25242 = (state_25241[(1)]);
if((state_val_25242 === (1))){
var inst_25229 = (state_25241[(7)]);
var inst_25230 = (state_25241[(8)]);
var inst_25231 = (state_25241[(9)]);
var inst_25229__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_25230__$1 = cljs.core.async.chan.call(null,(1));
var inst_25231__$1 = (function (){var res = inst_25229__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_25230__$1;
return ((function (res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c){
return (function (state_25246){
var state_val_25247 = (state_25246[(1)]);
if((state_val_25247 === (1))){
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25246__$1,(2),wcc,res__$1);
} else {
if((state_val_25247 === (2))){
var inst_25244 = (state_25246[(2)]);
var state_25246__$1 = state_25246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25246__$1,inst_25244);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_25251 = [null,null,null,null,null,null,null];
(statearr_25251[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_25251[(1)] = (1));

return statearr_25251;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_25246){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25252){if((e25252 instanceof Object)){
var ex__9301__auto__ = e25252;
var statearr_25253_25278 = state_25246;
(statearr_25253_25278[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25279 = state_25246;
state_25246 = G__25279;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_25246){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_25246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c))
})();
var state__9320__auto__ = (function (){var statearr_25254 = f__9319__auto__.call(null);
(statearr_25254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_25229,inst_25230,inst_25231,inst_25229__$1,inst_25230__$1,state_val_25242,c__9318__auto___25277,c))
})();
var inst_25232 = inst_25229__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_25231__$1);
var state_25241__$1 = (function (){var statearr_25255 = state_25241;
(statearr_25255[(7)] = inst_25229__$1);

(statearr_25255[(10)] = inst_25232);

(statearr_25255[(8)] = inst_25230__$1);

(statearr_25255[(9)] = inst_25231__$1);

return statearr_25255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25241__$1,(2),inst_25230__$1);
} else {
if((state_val_25242 === (2))){
var inst_25229 = (state_25241[(7)]);
var inst_25232 = (state_25241[(10)]);
var inst_25230 = (state_25241[(8)]);
var inst_25231 = (state_25241[(9)]);
var inst_25234 = (state_25241[(2)]);
var inst_25235 = [cljs.core.str(inst_25234)].join('');
var inst_25236 = parseInt(inst_25235);
var inst_25237 = (function (){var res = inst_25229;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_25230;
var wcc_jammer = inst_25231;
var get_wc = inst_25232;
var lines = inst_25236;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,state_val_25242,c__9318__auto___25277,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,state_val_25242,c__9318__auto___25277,c))
})();
var inst_25238 = (function (){var res = inst_25229;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_25230;
var wcc_jammer = inst_25231;
var get_wc = inst_25232;
var lines = inst_25236;
var close_if_done = inst_25237;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c){
return (function (state_25260){
var state_val_25261 = (state_25260[(1)]);
if((state_val_25261 === (1))){
var state_25260__$1 = state_25260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25260__$1,(2),c,res__$1);
} else {
if((state_val_25261 === (2))){
var inst_25257 = (state_25260[(2)]);
var inst_25258 = close_if_done.call(null);
var state_25260__$1 = (function (){var statearr_25262 = state_25260;
(statearr_25262[(7)] = inst_25257);

return statearr_25262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25260__$1,inst_25258);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_25266 = [null,null,null,null,null,null,null,null];
(statearr_25266[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_25266[(1)] = (1));

return statearr_25266;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_25260){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25267){if((e25267 instanceof Object)){
var ex__9301__auto__ = e25267;
var statearr_25268_25280 = state_25260;
(statearr_25268_25280[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25281 = state_25260;
state_25260 = G__25281;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_25260){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_25260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c))
})();
var state__9320__auto__ = (function (){var statearr_25269 = f__9319__auto__.call(null);
(statearr_25269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_25269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_25229,inst_25232,inst_25230,inst_25231,inst_25234,inst_25235,inst_25236,inst_25237,state_val_25242,c__9318__auto___25277,c))
})();
var inst_25239 = inst_25229.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_25238);
var state_25241__$1 = state_25241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25241__$1,inst_25239);
} else {
return null;
}
}
});})(c__9318__auto___25277,c))
;
return ((function (switch__9297__auto__,c__9318__auto___25277,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_25273 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25273[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_25273[(1)] = (1));

return statearr_25273;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_25241){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_25241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e25274){if((e25274 instanceof Object)){
var ex__9301__auto__ = e25274;
var statearr_25275_25282 = state_25241;
(statearr_25275_25282[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25283 = state_25241;
state_25241 = G__25283;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_25241){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_25241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___25277,c))
})();
var state__9320__auto__ = (function (){var statearr_25276 = f__9319__auto__.call(null);
(statearr_25276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___25277);

return statearr_25276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___25277,c))
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
var len__7018__auto___25285 = arguments.length;
var i__7019__auto___25286 = (0);
while(true){
if((i__7019__auto___25286 < len__7018__auto___25285)){
args__7025__auto__.push((arguments[i__7019__auto___25286]));

var G__25287 = (i__7019__auto___25286 + (1));
i__7019__auto___25286 = G__25287;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq25284){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25284));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map