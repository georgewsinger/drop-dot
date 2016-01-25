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
return (function (state_48298){
var state_val_48299 = (state_48298[(1)]);
if((state_val_48299 === (1))){
var state_48298__$1 = state_48298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48298__$1,(2),c,arg);
} else {
if((state_val_48299 === (2))){
var inst_48296 = (state_48298[(2)]);
var state_48298__$1 = state_48298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48298__$1,inst_48296);
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
var statearr_48303 = [null,null,null,null,null,null,null];
(statearr_48303[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_48303[(1)] = (1));

return statearr_48303;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_48298){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48304){if((e48304 instanceof Object)){
var ex__9301__auto__ = e48304;
var statearr_48305_48307 = state_48298;
(statearr_48305_48307[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48308 = state_48298;
state_48298 = G__48308;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_48298){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_48298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48306 = f__9319__auto__.call(null);
(statearr_48306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48306;
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
return (function (state_48324){
var state_val_48325 = (state_48324[(1)]);
if((state_val_48325 === (1))){
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48324__$1,(2),c,arg);
} else {
if((state_val_48325 === (2))){
var inst_48322 = (state_48324[(2)]);
var state_48324__$1 = state_48324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48324__$1,inst_48322);
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
var statearr_48329 = [null,null,null,null,null,null,null];
(statearr_48329[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_48329[(1)] = (1));

return statearr_48329;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_48324){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48330){if((e48330 instanceof Object)){
var ex__9301__auto__ = e48330;
var statearr_48331_48333 = state_48324;
(statearr_48331_48333[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48334 = state_48324;
state_48324 = G__48334;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_48324){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_48324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48332 = f__9319__auto__.call(null);
(statearr_48332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48332;
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
return (function (state_48411){
var state_val_48412 = (state_48411[(1)]);
if((state_val_48412 === (1))){
var state_48411__$1 = state_48411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48411__$1,(2),input_chan);
} else {
if((state_val_48412 === (2))){
var inst_48389 = (state_48411[(2)]);
var inst_48390 = inst_48389;
var state_48411__$1 = (function (){var statearr_48413 = state_48411;
(statearr_48413[(7)] = inst_48390);

return statearr_48413;
})();
var statearr_48414_48441 = state_48411__$1;
(statearr_48414_48441[(2)] = null);

(statearr_48414_48441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48412 === (3))){
var inst_48390 = (state_48411[(7)]);
var inst_48392 = cljs.core.count.call(null,inst_48390);
var inst_48393 = cljs.core._EQ_.call(null,inst_48392,(0));
var state_48411__$1 = state_48411;
if(inst_48393){
var statearr_48415_48442 = state_48411__$1;
(statearr_48415_48442[(1)] = (5));

} else {
var statearr_48416_48443 = state_48411__$1;
(statearr_48416_48443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48412 === (4))){
var inst_48409 = (state_48411[(2)]);
var state_48411__$1 = state_48411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48411__$1,inst_48409);
} else {
if((state_val_48412 === (5))){
var inst_48395 = cljs.core.println.call(null,"done");
var state_48411__$1 = state_48411;
var statearr_48417_48444 = state_48411__$1;
(statearr_48417_48444[(2)] = inst_48395);

(statearr_48417_48444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48412 === (6))){
var inst_48390 = (state_48411[(7)]);
var inst_48397 = cljs.core.async.chan.call(null);
var inst_48398 = cljs.core.first.call(null,inst_48390);
var inst_48399 = (function (){var v = inst_48390;
var rc = inst_48397;
var cmd = inst_48398;
return ((function (v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__){
return (function (state_48421){
var state_val_48422 = (state_48421[(1)]);
if((state_val_48422 === (1))){
var state_48421__$1 = state_48421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48421__$1,(2),rc,res);
} else {
if((state_val_48422 === (2))){
var inst_48419 = (state_48421[(2)]);
var state_48421__$1 = state_48421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48421__$1,inst_48419);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_48426 = [null,null,null,null,null,null,null];
(statearr_48426[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_48426[(1)] = (1));

return statearr_48426;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_48421){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48427){if((e48427 instanceof Object)){
var ex__9301__auto__ = e48427;
var statearr_48428_48445 = state_48421;
(statearr_48428_48445[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48446 = state_48421;
state_48421 = G__48446;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_48421){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_48421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48429 = f__9319__auto__.call(null);
(statearr_48429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_48429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_48390,inst_48397,inst_48398,state_val_48412,c__9318__auto__))
})();
var inst_48400 = drop_dot.core.pure_js.execAndPrint(inst_48398,inst_48399);
var state_48411__$1 = (function (){var statearr_48430 = state_48411;
(statearr_48430[(8)] = inst_48400);

return statearr_48430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48411__$1,(8),inst_48397);
} else {
if((state_val_48412 === (7))){
var inst_48407 = (state_48411[(2)]);
var state_48411__$1 = state_48411;
var statearr_48431_48447 = state_48411__$1;
(statearr_48431_48447[(2)] = inst_48407);

(statearr_48431_48447[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48412 === (8))){
var inst_48390 = (state_48411[(7)]);
var inst_48402 = (state_48411[(2)]);
var inst_48403 = cljs.core.rest.call(null,inst_48390);
var inst_48404 = cljs.core.vec.call(null,inst_48403);
var inst_48390__$1 = inst_48404;
var state_48411__$1 = (function (){var statearr_48432 = state_48411;
(statearr_48432[(9)] = inst_48402);

(statearr_48432[(7)] = inst_48390__$1);

return statearr_48432;
})();
var statearr_48433_48448 = state_48411__$1;
(statearr_48433_48448[(2)] = null);

(statearr_48433_48448[(1)] = (3));


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
var statearr_48437 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48437[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_48437[(1)] = (1));

return statearr_48437;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_48411){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48438){if((e48438 instanceof Object)){
var ex__9301__auto__ = e48438;
var statearr_48439_48449 = state_48411;
(statearr_48439_48449[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48450 = state_48411;
state_48411 = G__48450;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_48411){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_48411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48440 = f__9319__auto__.call(null);
(statearr_48440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48440;
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
return (function (state_48462){
var state_val_48463 = (state_48462[(1)]);
if((state_val_48463 === (1))){
var state_48462__$1 = state_48462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48462__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_48467 = [null,null,null,null,null,null,null];
(statearr_48467[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_48467[(1)] = (1));

return statearr_48467;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_48462){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48468){if((e48468 instanceof Object)){
var ex__9301__auto__ = e48468;
var statearr_48469_48471 = state_48462;
(statearr_48469_48471[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48472 = state_48462;
state_48462 = G__48472;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_48462){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_48462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_48470 = f__9319__auto__.call(null);
(statearr_48470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48470;
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
return (function (state_48488){
var state_val_48489 = (state_48488[(1)]);
if((state_val_48489 === (1))){
var state_48488__$1 = state_48488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48488__$1,(2),d,res__$1);
} else {
if((state_val_48489 === (2))){
var inst_48486 = (state_48488[(2)]);
var state_48488__$1 = state_48488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48488__$1,inst_48486);
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
var statearr_48493 = [null,null,null,null,null,null,null];
(statearr_48493[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_48493[(1)] = (1));

return statearr_48493;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_48488){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48494){if((e48494 instanceof Object)){
var ex__9301__auto__ = e48494;
var statearr_48495_48497 = state_48488;
(statearr_48495_48497[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48498 = state_48488;
state_48488 = G__48498;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_48488){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_48488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_48496 = f__9319__auto__.call(null);
(statearr_48496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48496;
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
return (function (state_48526){
var state_val_48527 = (state_48526[(1)]);
if((state_val_48527 === (1))){
var inst_48519 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_48526__$1 = state_48526;
if(cljs.core.truth_(inst_48519)){
var statearr_48528_48539 = state_48526__$1;
(statearr_48528_48539[(1)] = (2));

} else {
var statearr_48529_48540 = state_48526__$1;
(statearr_48529_48540[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (2))){
var state_48526__$1 = state_48526;
var statearr_48530_48541 = state_48526__$1;
(statearr_48530_48541[(2)] = line);

(statearr_48530_48541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (3))){
var inst_48522 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_48526__$1 = state_48526;
var statearr_48531_48542 = state_48526__$1;
(statearr_48531_48542[(2)] = inst_48522);

(statearr_48531_48542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48527 === (4))){
var inst_48524 = (state_48526[(2)]);
var state_48526__$1 = state_48526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48526__$1,inst_48524);
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
var statearr_48535 = [null,null,null,null,null,null,null];
(statearr_48535[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_48535[(1)] = (1));

return statearr_48535;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_48526){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48536){if((e48536 instanceof Object)){
var ex__9301__auto__ = e48536;
var statearr_48537_48543 = state_48526;
(statearr_48537_48543[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48544 = state_48526;
state_48526 = G__48544;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_48526){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_48526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48538 = f__9319__auto__.call(null);
(statearr_48538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48538;
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
return (function (state_48609){
var state_val_48610 = (state_48609[(1)]);
if((state_val_48610 === (1))){
var state_48609__$1 = state_48609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48609__$1,(2),chan_verified_path);
} else {
if((state_val_48610 === (2))){
var inst_48598 = (state_48609[(7)]);
var inst_48598__$1 = (state_48609[(2)]);
var inst_48599 = (function (){var verified_path = inst_48598__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function (state_48614){
var state_val_48615 = (state_48614[(1)]);
if((state_val_48615 === (1))){
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48614__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_48615 === (2))){
var inst_48612 = (state_48614[(2)]);
var state_48614__$1 = state_48614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48614__$1,inst_48612);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_48619 = [null,null,null,null,null,null,null];
(statearr_48619[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_48619[(1)] = (1));

return statearr_48619;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_48614){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48620){if((e48620 instanceof Object)){
var ex__9301__auto__ = e48620;
var statearr_48621_48649 = state_48614;
(statearr_48621_48649[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48650 = state_48614;
state_48614 = G__48650;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_48614){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_48614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48622 = f__9319__auto__.call(null);
(statearr_48622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_48622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function (state_48627){
var state_val_48628 = (state_48627[(1)]);
if((state_val_48628 === (1))){
var inst_48623 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48627__$1,(2),drop_dot.core.c,inst_48623);
} else {
if((state_val_48628 === (2))){
var inst_48625 = (state_48627[(2)]);
var state_48627__$1 = state_48627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48627__$1,inst_48625);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_48632 = [null,null,null,null,null,null,null];
(statearr_48632[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_48632[(1)] = (1));

return statearr_48632;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_48627){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48633){if((e48633 instanceof Object)){
var ex__9301__auto__ = e48633;
var statearr_48634_48651 = state_48627;
(statearr_48634_48651[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48652 = state_48627;
state_48627 = G__48652;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_48627){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_48627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48635 = f__9319__auto__.call(null);
(statearr_48635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_48635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_48598,inst_48598__$1,state_val_48610,c__9318__auto__))
})();
var inst_48600 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_48598__$1);
var state_48609__$1 = (function (){var statearr_48636 = state_48609;
(statearr_48636[(8)] = inst_48599);

(statearr_48636[(7)] = inst_48598__$1);

return statearr_48636;
})();
if(cljs.core.truth_(inst_48600)){
var statearr_48637_48653 = state_48609__$1;
(statearr_48637_48653[(1)] = (3));

} else {
var statearr_48638_48654 = state_48609__$1;
(statearr_48638_48654[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48610 === (3))){
var inst_48598 = (state_48609[(7)]);
var state_48609__$1 = state_48609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48609__$1,(6),cljs.core.async.chan,inst_48598);
} else {
if((state_val_48610 === (4))){
var inst_48599 = (state_48609[(8)]);
var inst_48598 = (state_48609[(7)]);
var inst_48605 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_48598,inst_48599);
var state_48609__$1 = state_48609;
var statearr_48639_48655 = state_48609__$1;
(statearr_48639_48655[(2)] = inst_48605);

(statearr_48639_48655[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48610 === (5))){
var inst_48607 = (state_48609[(2)]);
var state_48609__$1 = (function (){var statearr_48640 = state_48609;
(statearr_48640[(9)] = inst_48607);

return statearr_48640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48609__$1,cljs.core.async.chan);
} else {
if((state_val_48610 === (6))){
var inst_48603 = (state_48609[(2)]);
var state_48609__$1 = state_48609;
var statearr_48641_48656 = state_48609__$1;
(statearr_48641_48656[(2)] = inst_48603);

(statearr_48641_48656[(1)] = (5));


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
var statearr_48645 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48645[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_48645[(1)] = (1));

return statearr_48645;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_48609){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48646){if((e48646 instanceof Object)){
var ex__9301__auto__ = e48646;
var statearr_48647_48657 = state_48609;
(statearr_48647_48657[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48658 = state_48609;
state_48609 = G__48658;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_48609){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_48609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48648 = f__9319__auto__.call(null);
(statearr_48648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48648;
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
return (function (state_48693){
var state_val_48694 = (state_48693[(1)]);
if((state_val_48694 === (1))){
var state_48693__$1 = state_48693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48693__$1,(2),c);
} else {
if((state_val_48694 === (2))){
var inst_48684 = (state_48693[(7)]);
var inst_48684__$1 = (state_48693[(2)]);
var inst_48685 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_48684__$1);
var state_48693__$1 = (function (){var statearr_48695 = state_48693;
(statearr_48695[(7)] = inst_48684__$1);

return statearr_48695;
})();
if(cljs.core.truth_(inst_48685)){
var statearr_48696_48707 = state_48693__$1;
(statearr_48696_48707[(1)] = (3));

} else {
var statearr_48697_48708 = state_48693__$1;
(statearr_48697_48708[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (3))){
var inst_48684 = (state_48693[(7)]);
var inst_48687 = cljs.core.println.call(null,inst_48684);
var state_48693__$1 = state_48693;
var statearr_48698_48709 = state_48693__$1;
(statearr_48698_48709[(2)] = inst_48687);

(statearr_48698_48709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (4))){
var inst_48684 = (state_48693[(7)]);
var inst_48689 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_48684);
var state_48693__$1 = state_48693;
var statearr_48699_48710 = state_48693__$1;
(statearr_48699_48710[(2)] = inst_48689);

(statearr_48699_48710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48694 === (5))){
var inst_48691 = (state_48693[(2)]);
var state_48693__$1 = state_48693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48693__$1,inst_48691);
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
var statearr_48703 = [null,null,null,null,null,null,null,null];
(statearr_48703[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_48703[(1)] = (1));

return statearr_48703;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_48693){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48704){if((e48704 instanceof Object)){
var ex__9301__auto__ = e48704;
var statearr_48705_48711 = state_48693;
(statearr_48705_48711[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48712 = state_48693;
state_48693 = G__48712;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_48693){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_48693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48706 = f__9319__auto__.call(null);
(statearr_48706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48706;
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
return (function (state_48792){
var state_val_48793 = (state_48792[(1)]);
if((state_val_48793 === (7))){
var inst_48787 = (state_48792[(2)]);
var inst_48788 = cljs.core.println.call(null,"done");
var state_48792__$1 = (function (){var statearr_48795 = state_48792;
(statearr_48795[(7)] = inst_48787);

return statearr_48795;
})();
var statearr_48796_48821 = state_48792__$1;
(statearr_48796_48821[(2)] = inst_48788);

(statearr_48796_48821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (1))){
var inst_48767 = chan_config;
var state_48792__$1 = (function (){var statearr_48797 = state_48792;
(statearr_48797[(8)] = inst_48767);

return statearr_48797;
})();
var statearr_48798_48822 = state_48792__$1;
(statearr_48798_48822[(2)] = null);

(statearr_48798_48822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (4))){
var inst_48770 = (state_48792[(9)]);
var inst_48770__$1 = (state_48792[(2)]);
var state_48792__$1 = (function (){var statearr_48799 = state_48792;
(statearr_48799[(9)] = inst_48770__$1);

return statearr_48799;
})();
if(cljs.core.truth_(inst_48770__$1)){
var statearr_48800_48823 = state_48792__$1;
(statearr_48800_48823[(1)] = (5));

} else {
var statearr_48801_48824 = state_48792__$1;
(statearr_48801_48824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (13))){
var inst_48767 = (state_48792[(8)]);
var inst_48783 = (state_48792[(2)]);
var tmp48794 = inst_48767;
var inst_48767__$1 = tmp48794;
var state_48792__$1 = (function (){var statearr_48802 = state_48792;
(statearr_48802[(10)] = inst_48783);

(statearr_48802[(8)] = inst_48767__$1);

return statearr_48802;
})();
var statearr_48803_48825 = state_48792__$1;
(statearr_48803_48825[(2)] = null);

(statearr_48803_48825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (6))){
var state_48792__$1 = state_48792;
var statearr_48804_48826 = state_48792__$1;
(statearr_48804_48826[(2)] = null);

(statearr_48804_48826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (3))){
var inst_48790 = (state_48792[(2)]);
var state_48792__$1 = state_48792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48792__$1,inst_48790);
} else {
if((state_val_48793 === (12))){
var state_48792__$1 = state_48792;
var statearr_48805_48827 = state_48792__$1;
(statearr_48805_48827[(2)] = null);

(statearr_48805_48827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (2))){
var inst_48767 = (state_48792[(8)]);
var state_48792__$1 = state_48792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48792__$1,(4),inst_48767);
} else {
if((state_val_48793 === (11))){
var inst_48770 = (state_48792[(9)]);
var inst_48780 = drop_dot.core.link_line.call(null,inst_48770);
var state_48792__$1 = state_48792;
var statearr_48806_48828 = state_48792__$1;
(statearr_48806_48828[(2)] = inst_48780);

(statearr_48806_48828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (9))){
var state_48792__$1 = state_48792;
var statearr_48807_48829 = state_48792__$1;
(statearr_48807_48829[(2)] = null);

(statearr_48807_48829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (5))){
var inst_48772 = cljs.core._EQ_.call(null,cmd,"drop");
var state_48792__$1 = state_48792;
if(inst_48772){
var statearr_48808_48830 = state_48792__$1;
(statearr_48808_48830[(1)] = (8));

} else {
var statearr_48809_48831 = state_48792__$1;
(statearr_48809_48831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (10))){
var inst_48777 = (state_48792[(2)]);
var inst_48778 = cljs.core._EQ_.call(null,cmd,"link");
var state_48792__$1 = (function (){var statearr_48810 = state_48792;
(statearr_48810[(11)] = inst_48777);

return statearr_48810;
})();
if(inst_48778){
var statearr_48811_48832 = state_48792__$1;
(statearr_48811_48832[(1)] = (11));

} else {
var statearr_48812_48833 = state_48792__$1;
(statearr_48812_48833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48793 === (8))){
var inst_48770 = (state_48792[(9)]);
var inst_48774 = drop_dot.core.drop_line.call(null,inst_48770);
var state_48792__$1 = state_48792;
var statearr_48813_48834 = state_48792__$1;
(statearr_48813_48834[(2)] = inst_48774);

(statearr_48813_48834[(1)] = (10));


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
var statearr_48817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48817[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_48817[(1)] = (1));

return statearr_48817;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_48792){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48818){if((e48818 instanceof Object)){
var ex__9301__auto__ = e48818;
var statearr_48819_48835 = state_48792;
(statearr_48819_48835[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48836 = state_48792;
state_48792 = G__48836;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_48792){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_48792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_48820 = f__9319__auto__.call(null);
(statearr_48820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_48820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___48933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___48933,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___48933,c){
return (function (state_48897){
var state_val_48898 = (state_48897[(1)]);
if((state_val_48898 === (1))){
var inst_48887 = (state_48897[(7)]);
var inst_48886 = (state_48897[(8)]);
var inst_48885 = (state_48897[(9)]);
var inst_48885__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_48886__$1 = cljs.core.async.chan.call(null,(1));
var inst_48887__$1 = (function (){var res = inst_48885__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_48886__$1;
return ((function (res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c){
return (function (state_48902){
var state_val_48903 = (state_48902[(1)]);
if((state_val_48903 === (1))){
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48902__$1,(2),wcc,res__$1);
} else {
if((state_val_48903 === (2))){
var inst_48900 = (state_48902[(2)]);
var state_48902__$1 = state_48902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48902__$1,inst_48900);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_48907 = [null,null,null,null,null,null,null];
(statearr_48907[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_48907[(1)] = (1));

return statearr_48907;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_48902){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48908){if((e48908 instanceof Object)){
var ex__9301__auto__ = e48908;
var statearr_48909_48934 = state_48902;
(statearr_48909_48934[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48935 = state_48902;
state_48902 = G__48935;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_48902){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_48902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c))
})();
var state__9320__auto__ = (function (){var statearr_48910 = f__9319__auto__.call(null);
(statearr_48910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_48910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_48887,inst_48886,inst_48885,inst_48885__$1,inst_48886__$1,state_val_48898,c__9318__auto___48933,c))
})();
var inst_48888 = inst_48885__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_48887__$1);
var state_48897__$1 = (function (){var statearr_48911 = state_48897;
(statearr_48911[(7)] = inst_48887__$1);

(statearr_48911[(8)] = inst_48886__$1);

(statearr_48911[(10)] = inst_48888);

(statearr_48911[(9)] = inst_48885__$1);

return statearr_48911;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48897__$1,(2),inst_48886__$1);
} else {
if((state_val_48898 === (2))){
var inst_48887 = (state_48897[(7)]);
var inst_48886 = (state_48897[(8)]);
var inst_48888 = (state_48897[(10)]);
var inst_48885 = (state_48897[(9)]);
var inst_48890 = (state_48897[(2)]);
var inst_48891 = [cljs.core.str(inst_48890)].join('');
var inst_48892 = parseInt(inst_48891);
var inst_48893 = (function (){var res = inst_48885;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_48886;
var wcc_jammer = inst_48887;
var get_wc = inst_48888;
var lines = inst_48892;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,state_val_48898,c__9318__auto___48933,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,state_val_48898,c__9318__auto___48933,c))
})();
var inst_48894 = (function (){var res = inst_48885;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_48886;
var wcc_jammer = inst_48887;
var get_wc = inst_48888;
var lines = inst_48892;
var close_if_done = inst_48893;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c){
return (function (state_48916){
var state_val_48917 = (state_48916[(1)]);
if((state_val_48917 === (1))){
var state_48916__$1 = state_48916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48916__$1,(2),c,res__$1);
} else {
if((state_val_48917 === (2))){
var inst_48913 = (state_48916[(2)]);
var inst_48914 = close_if_done.call(null);
var state_48916__$1 = (function (){var statearr_48918 = state_48916;
(statearr_48918[(7)] = inst_48913);

return statearr_48918;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48916__$1,inst_48914);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_48922 = [null,null,null,null,null,null,null,null];
(statearr_48922[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_48922[(1)] = (1));

return statearr_48922;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_48916){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48923){if((e48923 instanceof Object)){
var ex__9301__auto__ = e48923;
var statearr_48924_48936 = state_48916;
(statearr_48924_48936[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48937 = state_48916;
state_48916 = G__48937;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_48916){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_48916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c))
})();
var state__9320__auto__ = (function (){var statearr_48925 = f__9319__auto__.call(null);
(statearr_48925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_48925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_48887,inst_48886,inst_48888,inst_48885,inst_48890,inst_48891,inst_48892,inst_48893,state_val_48898,c__9318__auto___48933,c))
})();
var inst_48895 = inst_48885.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_48894);
var state_48897__$1 = state_48897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48897__$1,inst_48895);
} else {
return null;
}
}
});})(c__9318__auto___48933,c))
;
return ((function (switch__9297__auto__,c__9318__auto___48933,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_48929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48929[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_48929[(1)] = (1));

return statearr_48929;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_48897){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_48897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e48930){if((e48930 instanceof Object)){
var ex__9301__auto__ = e48930;
var statearr_48931_48938 = state_48897;
(statearr_48931_48938[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48939 = state_48897;
state_48897 = G__48939;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_48897){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_48897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___48933,c))
})();
var state__9320__auto__ = (function (){var statearr_48932 = f__9319__auto__.call(null);
(statearr_48932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___48933);

return statearr_48932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___48933,c))
);


return c;
});
drop_dot.core.user_not_an_idiot_QMARK_ = (function drop_dot$core$user_not_an_idiot_QMARK_(){
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
var len__7018__auto___48941 = arguments.length;
var i__7019__auto___48942 = (0);
while(true){
if((i__7019__auto___48942 < len__7018__auto___48941)){
args__7025__auto__.push((arguments[i__7019__auto___48942]));

var G__48943 = (i__7019__auto___48942 + (1));
i__7019__auto___48942 = G__48943;
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
drop_dot.core.user_not_an_idiot_QMARK_.call(null);

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

drop_dot.core._main.cljs$lang$applyTo = (function (seq48940){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48940));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map