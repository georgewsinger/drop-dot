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
return (function (state_21332){
var state_val_21333 = (state_21332[(1)]);
if((state_val_21333 === (1))){
var state_21332__$1 = state_21332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21332__$1,(2),c,arg);
} else {
if((state_val_21333 === (2))){
var inst_21330 = (state_21332[(2)]);
var state_21332__$1 = state_21332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21332__$1,inst_21330);
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
var statearr_21337 = [null,null,null,null,null,null,null];
(statearr_21337[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_21337[(1)] = (1));

return statearr_21337;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_21332){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21338){if((e21338 instanceof Object)){
var ex__9301__auto__ = e21338;
var statearr_21339_21341 = state_21332;
(statearr_21339_21341[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21342 = state_21332;
state_21332 = G__21342;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_21332){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_21332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21340 = f__9319__auto__.call(null);
(statearr_21340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21340;
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
return (function (state_21358){
var state_val_21359 = (state_21358[(1)]);
if((state_val_21359 === (1))){
var state_21358__$1 = state_21358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21358__$1,(2),c,arg);
} else {
if((state_val_21359 === (2))){
var inst_21356 = (state_21358[(2)]);
var state_21358__$1 = state_21358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21358__$1,inst_21356);
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
var statearr_21363 = [null,null,null,null,null,null,null];
(statearr_21363[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_21363[(1)] = (1));

return statearr_21363;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_21358){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21364){if((e21364 instanceof Object)){
var ex__9301__auto__ = e21364;
var statearr_21365_21367 = state_21358;
(statearr_21365_21367[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21368 = state_21358;
state_21358 = G__21368;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_21358){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_21358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21366 = f__9319__auto__.call(null);
(statearr_21366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21366;
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
return (function (state_21445){
var state_val_21446 = (state_21445[(1)]);
if((state_val_21446 === (1))){
var state_21445__$1 = state_21445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21445__$1,(2),input_chan);
} else {
if((state_val_21446 === (2))){
var inst_21423 = (state_21445[(2)]);
var inst_21424 = inst_21423;
var state_21445__$1 = (function (){var statearr_21447 = state_21445;
(statearr_21447[(7)] = inst_21424);

return statearr_21447;
})();
var statearr_21448_21475 = state_21445__$1;
(statearr_21448_21475[(2)] = null);

(statearr_21448_21475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21446 === (3))){
var inst_21424 = (state_21445[(7)]);
var inst_21426 = cljs.core.count.call(null,inst_21424);
var inst_21427 = cljs.core._EQ_.call(null,inst_21426,(0));
var state_21445__$1 = state_21445;
if(inst_21427){
var statearr_21449_21476 = state_21445__$1;
(statearr_21449_21476[(1)] = (5));

} else {
var statearr_21450_21477 = state_21445__$1;
(statearr_21450_21477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21446 === (4))){
var inst_21443 = (state_21445[(2)]);
var state_21445__$1 = state_21445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21445__$1,inst_21443);
} else {
if((state_val_21446 === (5))){
var inst_21429 = cljs.core.println.call(null,"done");
var state_21445__$1 = state_21445;
var statearr_21451_21478 = state_21445__$1;
(statearr_21451_21478[(2)] = inst_21429);

(statearr_21451_21478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21446 === (6))){
var inst_21424 = (state_21445[(7)]);
var inst_21431 = cljs.core.async.chan.call(null);
var inst_21432 = cljs.core.first.call(null,inst_21424);
var inst_21433 = (function (){var v = inst_21424;
var rc = inst_21431;
var cmd = inst_21432;
return ((function (v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__){
return (function (state_21455){
var state_val_21456 = (state_21455[(1)]);
if((state_val_21456 === (1))){
var state_21455__$1 = state_21455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21455__$1,(2),rc,res);
} else {
if((state_val_21456 === (2))){
var inst_21453 = (state_21455[(2)]);
var state_21455__$1 = state_21455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21455__$1,inst_21453);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_21460 = [null,null,null,null,null,null,null];
(statearr_21460[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_21460[(1)] = (1));

return statearr_21460;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_21455){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object)){
var ex__9301__auto__ = e21461;
var statearr_21462_21479 = state_21455;
(statearr_21462_21479[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21480 = state_21455;
state_21455 = G__21480;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_21455){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_21455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21463 = f__9319__auto__.call(null);
(statearr_21463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_21424,inst_21431,inst_21432,state_val_21446,c__9318__auto__))
})();
var inst_21434 = drop_dot.core.pure_js.execAndPrint(inst_21432,inst_21433);
var state_21445__$1 = (function (){var statearr_21464 = state_21445;
(statearr_21464[(8)] = inst_21434);

return statearr_21464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21445__$1,(8),inst_21431);
} else {
if((state_val_21446 === (7))){
var inst_21441 = (state_21445[(2)]);
var state_21445__$1 = state_21445;
var statearr_21465_21481 = state_21445__$1;
(statearr_21465_21481[(2)] = inst_21441);

(statearr_21465_21481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21446 === (8))){
var inst_21424 = (state_21445[(7)]);
var inst_21436 = (state_21445[(2)]);
var inst_21437 = cljs.core.rest.call(null,inst_21424);
var inst_21438 = cljs.core.vec.call(null,inst_21437);
var inst_21424__$1 = inst_21438;
var state_21445__$1 = (function (){var statearr_21466 = state_21445;
(statearr_21466[(9)] = inst_21436);

(statearr_21466[(7)] = inst_21424__$1);

return statearr_21466;
})();
var statearr_21467_21482 = state_21445__$1;
(statearr_21467_21482[(2)] = null);

(statearr_21467_21482[(1)] = (3));


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
var statearr_21471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21471[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_21471[(1)] = (1));

return statearr_21471;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_21445){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21472){if((e21472 instanceof Object)){
var ex__9301__auto__ = e21472;
var statearr_21473_21483 = state_21445;
(statearr_21473_21483[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21484 = state_21445;
state_21445 = G__21484;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_21445){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_21445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21474 = f__9319__auto__.call(null);
(statearr_21474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21474;
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
return (function (state_21496){
var state_val_21497 = (state_21496[(1)]);
if((state_val_21497 === (1))){
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21496__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_21501 = [null,null,null,null,null,null,null];
(statearr_21501[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_21501[(1)] = (1));

return statearr_21501;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_21496){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21502){if((e21502 instanceof Object)){
var ex__9301__auto__ = e21502;
var statearr_21503_21505 = state_21496;
(statearr_21503_21505[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21506 = state_21496;
state_21496 = G__21506;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_21496){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_21496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_21504 = f__9319__auto__.call(null);
(statearr_21504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21504;
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
drop_dot.core.dropbox_exists_QMARK_ = (function drop_dot$core$dropbox_exists_QMARK_(){
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
return (function (state_21522){
var state_val_21523 = (state_21522[(1)]);
if((state_val_21523 === (1))){
var state_21522__$1 = state_21522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21522__$1,(2),d,res__$1);
} else {
if((state_val_21523 === (2))){
var inst_21520 = (state_21522[(2)]);
var state_21522__$1 = state_21522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21522__$1,inst_21520);
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
var statearr_21527 = [null,null,null,null,null,null,null];
(statearr_21527[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_21527[(1)] = (1));

return statearr_21527;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_21522){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21528){if((e21528 instanceof Object)){
var ex__9301__auto__ = e21528;
var statearr_21529_21531 = state_21522;
(statearr_21529_21531[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21532 = state_21522;
state_21522 = G__21532;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_21522){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_21522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_21530 = f__9319__auto__.call(null);
(statearr_21530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21530;
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
return (function (state_21560){
var state_val_21561 = (state_21560[(1)]);
if((state_val_21561 === (1))){
var inst_21553 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_21560__$1 = state_21560;
if(cljs.core.truth_(inst_21553)){
var statearr_21562_21573 = state_21560__$1;
(statearr_21562_21573[(1)] = (2));

} else {
var statearr_21563_21574 = state_21560__$1;
(statearr_21563_21574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21561 === (2))){
var state_21560__$1 = state_21560;
var statearr_21564_21575 = state_21560__$1;
(statearr_21564_21575[(2)] = line);

(statearr_21564_21575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21561 === (3))){
var inst_21556 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_21560__$1 = state_21560;
var statearr_21565_21576 = state_21560__$1;
(statearr_21565_21576[(2)] = inst_21556);

(statearr_21565_21576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21561 === (4))){
var inst_21558 = (state_21560[(2)]);
var state_21560__$1 = state_21560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21560__$1,inst_21558);
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
var statearr_21569 = [null,null,null,null,null,null,null];
(statearr_21569[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_21569[(1)] = (1));

return statearr_21569;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_21560){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21570){if((e21570 instanceof Object)){
var ex__9301__auto__ = e21570;
var statearr_21571_21577 = state_21560;
(statearr_21571_21577[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21578 = state_21560;
state_21560 = G__21578;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_21560){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_21560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21572 = f__9319__auto__.call(null);
(statearr_21572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21572;
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
return (function (state_21643){
var state_val_21644 = (state_21643[(1)]);
if((state_val_21644 === (1))){
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21643__$1,(2),chan_verified_path);
} else {
if((state_val_21644 === (2))){
var inst_21632 = (state_21643[(7)]);
var inst_21632__$1 = (state_21643[(2)]);
var inst_21633 = (function (){var verified_path = inst_21632__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function (state_21648){
var state_val_21649 = (state_21648[(1)]);
if((state_val_21649 === (1))){
var state_21648__$1 = state_21648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21648__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_21649 === (2))){
var inst_21646 = (state_21648[(2)]);
var state_21648__$1 = state_21648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21648__$1,inst_21646);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_21653 = [null,null,null,null,null,null,null];
(statearr_21653[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_21653[(1)] = (1));

return statearr_21653;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_21648){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21654){if((e21654 instanceof Object)){
var ex__9301__auto__ = e21654;
var statearr_21655_21683 = state_21648;
(statearr_21655_21683[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21684 = state_21648;
state_21648 = G__21684;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_21648){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_21648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21656 = f__9319__auto__.call(null);
(statearr_21656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_21656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function (state_21661){
var state_val_21662 = (state_21661[(1)]);
if((state_val_21662 === (1))){
var inst_21657 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_21661__$1 = state_21661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21661__$1,(2),drop_dot.core.c,inst_21657);
} else {
if((state_val_21662 === (2))){
var inst_21659 = (state_21661[(2)]);
var state_21661__$1 = state_21661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21661__$1,inst_21659);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_21666 = [null,null,null,null,null,null,null];
(statearr_21666[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_21666[(1)] = (1));

return statearr_21666;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_21661){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21667){if((e21667 instanceof Object)){
var ex__9301__auto__ = e21667;
var statearr_21668_21685 = state_21661;
(statearr_21668_21685[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21686 = state_21661;
state_21661 = G__21686;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_21661){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_21661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21669 = f__9319__auto__.call(null);
(statearr_21669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_21669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_21632,inst_21632__$1,state_val_21644,c__9318__auto__))
})();
var inst_21634 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_21632__$1);
var state_21643__$1 = (function (){var statearr_21670 = state_21643;
(statearr_21670[(7)] = inst_21632__$1);

(statearr_21670[(8)] = inst_21633);

return statearr_21670;
})();
if(cljs.core.truth_(inst_21634)){
var statearr_21671_21687 = state_21643__$1;
(statearr_21671_21687[(1)] = (3));

} else {
var statearr_21672_21688 = state_21643__$1;
(statearr_21672_21688[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (3))){
var inst_21632 = (state_21643[(7)]);
var state_21643__$1 = state_21643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21643__$1,(6),cljs.core.async.chan,inst_21632);
} else {
if((state_val_21644 === (4))){
var inst_21632 = (state_21643[(7)]);
var inst_21633 = (state_21643[(8)]);
var inst_21639 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_21632,inst_21633);
var state_21643__$1 = state_21643;
var statearr_21673_21689 = state_21643__$1;
(statearr_21673_21689[(2)] = inst_21639);

(statearr_21673_21689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21644 === (5))){
var inst_21641 = (state_21643[(2)]);
var state_21643__$1 = (function (){var statearr_21674 = state_21643;
(statearr_21674[(9)] = inst_21641);

return statearr_21674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21643__$1,cljs.core.async.chan);
} else {
if((state_val_21644 === (6))){
var inst_21637 = (state_21643[(2)]);
var state_21643__$1 = state_21643;
var statearr_21675_21690 = state_21643__$1;
(statearr_21675_21690[(2)] = inst_21637);

(statearr_21675_21690[(1)] = (5));


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
var statearr_21679 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21679[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_21679[(1)] = (1));

return statearr_21679;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_21643){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21680){if((e21680 instanceof Object)){
var ex__9301__auto__ = e21680;
var statearr_21681_21691 = state_21643;
(statearr_21681_21691[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21692 = state_21643;
state_21643 = G__21692;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_21643){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_21643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21682 = f__9319__auto__.call(null);
(statearr_21682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21682;
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
return (function (state_21727){
var state_val_21728 = (state_21727[(1)]);
if((state_val_21728 === (1))){
var state_21727__$1 = state_21727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21727__$1,(2),c);
} else {
if((state_val_21728 === (2))){
var inst_21718 = (state_21727[(7)]);
var inst_21718__$1 = (state_21727[(2)]);
var inst_21719 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_21718__$1);
var state_21727__$1 = (function (){var statearr_21729 = state_21727;
(statearr_21729[(7)] = inst_21718__$1);

return statearr_21729;
})();
if(cljs.core.truth_(inst_21719)){
var statearr_21730_21741 = state_21727__$1;
(statearr_21730_21741[(1)] = (3));

} else {
var statearr_21731_21742 = state_21727__$1;
(statearr_21731_21742[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21728 === (3))){
var inst_21718 = (state_21727[(7)]);
var inst_21721 = cljs.core.println.call(null,inst_21718);
var state_21727__$1 = state_21727;
var statearr_21732_21743 = state_21727__$1;
(statearr_21732_21743[(2)] = inst_21721);

(statearr_21732_21743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21728 === (4))){
var inst_21718 = (state_21727[(7)]);
var inst_21723 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_21718);
var state_21727__$1 = state_21727;
var statearr_21733_21744 = state_21727__$1;
(statearr_21733_21744[(2)] = inst_21723);

(statearr_21733_21744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21728 === (5))){
var inst_21725 = (state_21727[(2)]);
var state_21727__$1 = state_21727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21727__$1,inst_21725);
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
var statearr_21737 = [null,null,null,null,null,null,null,null];
(statearr_21737[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_21737[(1)] = (1));

return statearr_21737;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_21727){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21738){if((e21738 instanceof Object)){
var ex__9301__auto__ = e21738;
var statearr_21739_21745 = state_21727;
(statearr_21739_21745[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21746 = state_21727;
state_21727 = G__21746;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_21727){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_21727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21740 = f__9319__auto__.call(null);
(statearr_21740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21740;
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
return (function (state_21826){
var state_val_21827 = (state_21826[(1)]);
if((state_val_21827 === (7))){
var inst_21821 = (state_21826[(2)]);
var inst_21822 = cljs.core.println.call(null,"done");
var state_21826__$1 = (function (){var statearr_21829 = state_21826;
(statearr_21829[(7)] = inst_21821);

return statearr_21829;
})();
var statearr_21830_21855 = state_21826__$1;
(statearr_21830_21855[(2)] = inst_21822);

(statearr_21830_21855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (1))){
var inst_21801 = chan_config;
var state_21826__$1 = (function (){var statearr_21831 = state_21826;
(statearr_21831[(8)] = inst_21801);

return statearr_21831;
})();
var statearr_21832_21856 = state_21826__$1;
(statearr_21832_21856[(2)] = null);

(statearr_21832_21856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (4))){
var inst_21804 = (state_21826[(9)]);
var inst_21804__$1 = (state_21826[(2)]);
var state_21826__$1 = (function (){var statearr_21833 = state_21826;
(statearr_21833[(9)] = inst_21804__$1);

return statearr_21833;
})();
if(cljs.core.truth_(inst_21804__$1)){
var statearr_21834_21857 = state_21826__$1;
(statearr_21834_21857[(1)] = (5));

} else {
var statearr_21835_21858 = state_21826__$1;
(statearr_21835_21858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (13))){
var inst_21801 = (state_21826[(8)]);
var inst_21817 = (state_21826[(2)]);
var tmp21828 = inst_21801;
var inst_21801__$1 = tmp21828;
var state_21826__$1 = (function (){var statearr_21836 = state_21826;
(statearr_21836[(10)] = inst_21817);

(statearr_21836[(8)] = inst_21801__$1);

return statearr_21836;
})();
var statearr_21837_21859 = state_21826__$1;
(statearr_21837_21859[(2)] = null);

(statearr_21837_21859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (6))){
var state_21826__$1 = state_21826;
var statearr_21838_21860 = state_21826__$1;
(statearr_21838_21860[(2)] = null);

(statearr_21838_21860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (3))){
var inst_21824 = (state_21826[(2)]);
var state_21826__$1 = state_21826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21826__$1,inst_21824);
} else {
if((state_val_21827 === (12))){
var state_21826__$1 = state_21826;
var statearr_21839_21861 = state_21826__$1;
(statearr_21839_21861[(2)] = null);

(statearr_21839_21861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (2))){
var inst_21801 = (state_21826[(8)]);
var state_21826__$1 = state_21826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21826__$1,(4),inst_21801);
} else {
if((state_val_21827 === (11))){
var inst_21804 = (state_21826[(9)]);
var inst_21814 = drop_dot.core.link_line.call(null,inst_21804);
var state_21826__$1 = state_21826;
var statearr_21840_21862 = state_21826__$1;
(statearr_21840_21862[(2)] = inst_21814);

(statearr_21840_21862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (9))){
var state_21826__$1 = state_21826;
var statearr_21841_21863 = state_21826__$1;
(statearr_21841_21863[(2)] = null);

(statearr_21841_21863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (5))){
var inst_21806 = cljs.core._EQ_.call(null,cmd,"drop");
var state_21826__$1 = state_21826;
if(inst_21806){
var statearr_21842_21864 = state_21826__$1;
(statearr_21842_21864[(1)] = (8));

} else {
var statearr_21843_21865 = state_21826__$1;
(statearr_21843_21865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (10))){
var inst_21811 = (state_21826[(2)]);
var inst_21812 = cljs.core._EQ_.call(null,cmd,"link");
var state_21826__$1 = (function (){var statearr_21844 = state_21826;
(statearr_21844[(11)] = inst_21811);

return statearr_21844;
})();
if(inst_21812){
var statearr_21845_21866 = state_21826__$1;
(statearr_21845_21866[(1)] = (11));

} else {
var statearr_21846_21867 = state_21826__$1;
(statearr_21846_21867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21827 === (8))){
var inst_21804 = (state_21826[(9)]);
var inst_21808 = drop_dot.core.drop_line.call(null,inst_21804);
var state_21826__$1 = state_21826;
var statearr_21847_21868 = state_21826__$1;
(statearr_21847_21868[(2)] = inst_21808);

(statearr_21847_21868[(1)] = (10));


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
var statearr_21851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21851[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_21851[(1)] = (1));

return statearr_21851;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_21826){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21852){if((e21852 instanceof Object)){
var ex__9301__auto__ = e21852;
var statearr_21853_21869 = state_21826;
(statearr_21853_21869[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21870 = state_21826;
state_21826 = G__21870;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_21826){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_21826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_21854 = f__9319__auto__.call(null);
(statearr_21854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_21854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___21967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___21967,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___21967,c){
return (function (state_21931){
var state_val_21932 = (state_21931[(1)]);
if((state_val_21932 === (1))){
var inst_21920 = (state_21931[(7)]);
var inst_21921 = (state_21931[(8)]);
var inst_21919 = (state_21931[(9)]);
var inst_21919__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_21920__$1 = cljs.core.async.chan.call(null,(1));
var inst_21921__$1 = (function (){var res = inst_21919__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_21920__$1;
return ((function (res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c){
return (function (state_21936){
var state_val_21937 = (state_21936[(1)]);
if((state_val_21937 === (1))){
var state_21936__$1 = state_21936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21936__$1,(2),wcc,res__$1);
} else {
if((state_val_21937 === (2))){
var inst_21934 = (state_21936[(2)]);
var state_21936__$1 = state_21936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21936__$1,inst_21934);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_21941 = [null,null,null,null,null,null,null];
(statearr_21941[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_21941[(1)] = (1));

return statearr_21941;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_21936){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21942){if((e21942 instanceof Object)){
var ex__9301__auto__ = e21942;
var statearr_21943_21968 = state_21936;
(statearr_21943_21968[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21969 = state_21936;
state_21936 = G__21969;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_21936){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_21936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c))
})();
var state__9320__auto__ = (function (){var statearr_21944 = f__9319__auto__.call(null);
(statearr_21944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_21944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_21920,inst_21921,inst_21919,inst_21919__$1,inst_21920__$1,state_val_21932,c__9318__auto___21967,c))
})();
var inst_21922 = inst_21919__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_21921__$1);
var state_21931__$1 = (function (){var statearr_21945 = state_21931;
(statearr_21945[(7)] = inst_21920__$1);

(statearr_21945[(8)] = inst_21921__$1);

(statearr_21945[(9)] = inst_21919__$1);

(statearr_21945[(10)] = inst_21922);

return statearr_21945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21931__$1,(2),inst_21920__$1);
} else {
if((state_val_21932 === (2))){
var inst_21920 = (state_21931[(7)]);
var inst_21921 = (state_21931[(8)]);
var inst_21919 = (state_21931[(9)]);
var inst_21922 = (state_21931[(10)]);
var inst_21924 = (state_21931[(2)]);
var inst_21925 = [cljs.core.str(inst_21924)].join('');
var inst_21926 = parseInt(inst_21925);
var inst_21927 = (function (){var res = inst_21919;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_21920;
var wcc_jammer = inst_21921;
var get_wc = inst_21922;
var lines = inst_21926;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,state_val_21932,c__9318__auto___21967,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,state_val_21932,c__9318__auto___21967,c))
})();
var inst_21928 = (function (){var res = inst_21919;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_21920;
var wcc_jammer = inst_21921;
var get_wc = inst_21922;
var lines = inst_21926;
var close_if_done = inst_21927;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c){
return (function (state_21950){
var state_val_21951 = (state_21950[(1)]);
if((state_val_21951 === (1))){
var state_21950__$1 = state_21950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21950__$1,(2),c,res__$1);
} else {
if((state_val_21951 === (2))){
var inst_21947 = (state_21950[(2)]);
var inst_21948 = close_if_done.call(null);
var state_21950__$1 = (function (){var statearr_21952 = state_21950;
(statearr_21952[(7)] = inst_21947);

return statearr_21952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21950__$1,inst_21948);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_21956 = [null,null,null,null,null,null,null,null];
(statearr_21956[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_21956[(1)] = (1));

return statearr_21956;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_21950){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21957){if((e21957 instanceof Object)){
var ex__9301__auto__ = e21957;
var statearr_21958_21970 = state_21950;
(statearr_21958_21970[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21971 = state_21950;
state_21950 = G__21971;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_21950){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_21950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c))
})();
var state__9320__auto__ = (function (){var statearr_21959 = f__9319__auto__.call(null);
(statearr_21959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_21959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_21920,inst_21921,inst_21919,inst_21922,inst_21924,inst_21925,inst_21926,inst_21927,state_val_21932,c__9318__auto___21967,c))
})();
var inst_21929 = inst_21919.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_21928);
var state_21931__$1 = state_21931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21931__$1,inst_21929);
} else {
return null;
}
}
});})(c__9318__auto___21967,c))
;
return ((function (switch__9297__auto__,c__9318__auto___21967,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_21963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21963[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_21963[(1)] = (1));

return statearr_21963;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_21931){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_21931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e21964){if((e21964 instanceof Object)){
var ex__9301__auto__ = e21964;
var statearr_21965_21972 = state_21931;
(statearr_21965_21972[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21973 = state_21931;
state_21931 = G__21973;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_21931){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_21931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___21967,c))
})();
var state__9320__auto__ = (function (){var statearr_21966 = f__9319__auto__.call(null);
(statearr_21966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___21967);

return statearr_21966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___21967,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___21975 = arguments.length;
var i__7019__auto___21976 = (0);
while(true){
if((i__7019__auto___21976 < len__7018__auto___21975)){
args__7025__auto__.push((arguments[i__7019__auto___21976]));

var G__21977 = (i__7019__auto___21976 + (1));
i__7019__auto___21976 = G__21977;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq21974){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21974));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map