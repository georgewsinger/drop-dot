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
return (function (state_112224){
var state_val_112225 = (state_112224[(1)]);
if((state_val_112225 === (1))){
var state_112224__$1 = state_112224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112224__$1,(2),c,arg);
} else {
if((state_val_112225 === (2))){
var inst_112222 = (state_112224[(2)]);
var state_112224__$1 = state_112224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112224__$1,inst_112222);
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
var statearr_112229 = [null,null,null,null,null,null,null];
(statearr_112229[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_112229[(1)] = (1));

return statearr_112229;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_112224){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112230){if((e112230 instanceof Object)){
var ex__10429__auto__ = e112230;
var statearr_112231_112233 = state_112224;
(statearr_112231_112233[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112234 = state_112224;
state_112224 = G__112234;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_112224){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_112224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112232 = f__10447__auto__.call(null);
(statearr_112232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112232;
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
return (function (state_112250){
var state_val_112251 = (state_112250[(1)]);
if((state_val_112251 === (1))){
var state_112250__$1 = state_112250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112250__$1,(2),c,arg);
} else {
if((state_val_112251 === (2))){
var inst_112248 = (state_112250[(2)]);
var state_112250__$1 = state_112250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112250__$1,inst_112248);
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
var statearr_112255 = [null,null,null,null,null,null,null];
(statearr_112255[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_112255[(1)] = (1));

return statearr_112255;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_112250){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112256){if((e112256 instanceof Object)){
var ex__10429__auto__ = e112256;
var statearr_112257_112259 = state_112250;
(statearr_112257_112259[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112260 = state_112250;
state_112250 = G__112260;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_112250){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_112250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112258 = f__10447__auto__.call(null);
(statearr_112258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112258;
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
return (function (state_112337){
var state_val_112338 = (state_112337[(1)]);
if((state_val_112338 === (1))){
var state_112337__$1 = state_112337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112337__$1,(2),input_chan);
} else {
if((state_val_112338 === (2))){
var inst_112315 = (state_112337[(2)]);
var inst_112316 = inst_112315;
var state_112337__$1 = (function (){var statearr_112339 = state_112337;
(statearr_112339[(7)] = inst_112316);

return statearr_112339;
})();
var statearr_112340_112367 = state_112337__$1;
(statearr_112340_112367[(2)] = null);

(statearr_112340_112367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112338 === (3))){
var inst_112316 = (state_112337[(7)]);
var inst_112318 = cljs.core.count.call(null,inst_112316);
var inst_112319 = cljs.core._EQ_.call(null,inst_112318,(0));
var state_112337__$1 = state_112337;
if(inst_112319){
var statearr_112341_112368 = state_112337__$1;
(statearr_112341_112368[(1)] = (5));

} else {
var statearr_112342_112369 = state_112337__$1;
(statearr_112342_112369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112338 === (4))){
var inst_112335 = (state_112337[(2)]);
var state_112337__$1 = state_112337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112337__$1,inst_112335);
} else {
if((state_val_112338 === (5))){
var inst_112321 = cljs.core.println.call(null,"done");
var state_112337__$1 = state_112337;
var statearr_112343_112370 = state_112337__$1;
(statearr_112343_112370[(2)] = inst_112321);

(statearr_112343_112370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112338 === (6))){
var inst_112316 = (state_112337[(7)]);
var inst_112323 = cljs.core.async.chan.call(null);
var inst_112324 = cljs.core.first.call(null,inst_112316);
var inst_112325 = (function (){var v = inst_112316;
var rc = inst_112323;
var cmd = inst_112324;
return ((function (v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__){
return (function (state_112347){
var state_val_112348 = (state_112347[(1)]);
if((state_val_112348 === (1))){
var state_112347__$1 = state_112347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112347__$1,(2),rc,res);
} else {
if((state_val_112348 === (2))){
var inst_112345 = (state_112347[(2)]);
var state_112347__$1 = state_112347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112347__$1,inst_112345);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_112352 = [null,null,null,null,null,null,null];
(statearr_112352[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_112352[(1)] = (1));

return statearr_112352;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_112347){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112353){if((e112353 instanceof Object)){
var ex__10429__auto__ = e112353;
var statearr_112354_112371 = state_112347;
(statearr_112354_112371[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112372 = state_112347;
state_112347 = G__112372;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_112347){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_112347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112355 = f__10447__auto__.call(null);
(statearr_112355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_112355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_112316,inst_112323,inst_112324,state_val_112338,c__10446__auto__))
})();
var inst_112326 = drop_dot.core.pure_js.execAndPrint(inst_112324,inst_112325);
var state_112337__$1 = (function (){var statearr_112356 = state_112337;
(statearr_112356[(8)] = inst_112326);

return statearr_112356;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112337__$1,(8),inst_112323);
} else {
if((state_val_112338 === (7))){
var inst_112333 = (state_112337[(2)]);
var state_112337__$1 = state_112337;
var statearr_112357_112373 = state_112337__$1;
(statearr_112357_112373[(2)] = inst_112333);

(statearr_112357_112373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112338 === (8))){
var inst_112316 = (state_112337[(7)]);
var inst_112328 = (state_112337[(2)]);
var inst_112329 = cljs.core.rest.call(null,inst_112316);
var inst_112330 = cljs.core.vec.call(null,inst_112329);
var inst_112316__$1 = inst_112330;
var state_112337__$1 = (function (){var statearr_112358 = state_112337;
(statearr_112358[(7)] = inst_112316__$1);

(statearr_112358[(9)] = inst_112328);

return statearr_112358;
})();
var statearr_112359_112374 = state_112337__$1;
(statearr_112359_112374[(2)] = null);

(statearr_112359_112374[(1)] = (3));


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
var statearr_112363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_112363[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_112363[(1)] = (1));

return statearr_112363;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_112337){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112364){if((e112364 instanceof Object)){
var ex__10429__auto__ = e112364;
var statearr_112365_112375 = state_112337;
(statearr_112365_112375[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112376 = state_112337;
state_112337 = G__112376;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_112337){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_112337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112366 = f__10447__auto__.call(null);
(statearr_112366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112366;
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
return (function (state_112388){
var state_val_112389 = (state_112388[(1)]);
if((state_val_112389 === (1))){
var state_112388__$1 = state_112388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112388__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_112393 = [null,null,null,null,null,null,null];
(statearr_112393[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_112393[(1)] = (1));

return statearr_112393;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_112388){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112394){if((e112394 instanceof Object)){
var ex__10429__auto__ = e112394;
var statearr_112395_112397 = state_112388;
(statearr_112395_112397[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112398 = state_112388;
state_112388 = G__112398;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_112388){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_112388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_112396 = f__10447__auto__.call(null);
(statearr_112396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112396;
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
return (function (state_112414){
var state_val_112415 = (state_112414[(1)]);
if((state_val_112415 === (1))){
var state_112414__$1 = state_112414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112414__$1,(2),d,res__$1);
} else {
if((state_val_112415 === (2))){
var inst_112412 = (state_112414[(2)]);
var state_112414__$1 = state_112414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112414__$1,inst_112412);
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
var statearr_112419 = [null,null,null,null,null,null,null];
(statearr_112419[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_112419[(1)] = (1));

return statearr_112419;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_112414){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112420){if((e112420 instanceof Object)){
var ex__10429__auto__ = e112420;
var statearr_112421_112423 = state_112414;
(statearr_112421_112423[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112424 = state_112414;
state_112414 = G__112424;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_112414){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_112414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_112422 = f__10447__auto__.call(null);
(statearr_112422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112422;
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
return (function (state_112452){
var state_val_112453 = (state_112452[(1)]);
if((state_val_112453 === (1))){
var inst_112445 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_112452__$1 = state_112452;
if(cljs.core.truth_(inst_112445)){
var statearr_112454_112465 = state_112452__$1;
(statearr_112454_112465[(1)] = (2));

} else {
var statearr_112455_112466 = state_112452__$1;
(statearr_112455_112466[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112453 === (2))){
var state_112452__$1 = state_112452;
var statearr_112456_112467 = state_112452__$1;
(statearr_112456_112467[(2)] = line);

(statearr_112456_112467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112453 === (3))){
var inst_112448 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_112452__$1 = state_112452;
var statearr_112457_112468 = state_112452__$1;
(statearr_112457_112468[(2)] = inst_112448);

(statearr_112457_112468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112453 === (4))){
var inst_112450 = (state_112452[(2)]);
var state_112452__$1 = state_112452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112452__$1,inst_112450);
} else {
return null;
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
var statearr_112461 = [null,null,null,null,null,null,null];
(statearr_112461[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_112461[(1)] = (1));

return statearr_112461;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_112452){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112462){if((e112462 instanceof Object)){
var ex__10429__auto__ = e112462;
var statearr_112463_112469 = state_112452;
(statearr_112463_112469[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112470 = state_112452;
state_112452 = G__112470;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_112452){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_112452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112464 = f__10447__auto__.call(null);
(statearr_112464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112464;
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
return (function (state_112535){
var state_val_112536 = (state_112535[(1)]);
if((state_val_112536 === (1))){
var state_112535__$1 = state_112535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112535__$1,(2),chan_verified_path);
} else {
if((state_val_112536 === (2))){
var inst_112524 = (state_112535[(7)]);
var inst_112524__$1 = (state_112535[(2)]);
var inst_112525 = (function (){var verified_path = inst_112524__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function (state_112540){
var state_val_112541 = (state_112540[(1)]);
if((state_val_112541 === (1))){
var state_112540__$1 = state_112540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112540__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_112541 === (2))){
var inst_112538 = (state_112540[(2)]);
var state_112540__$1 = state_112540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112540__$1,inst_112538);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_112545 = [null,null,null,null,null,null,null];
(statearr_112545[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_112545[(1)] = (1));

return statearr_112545;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_112540){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112546){if((e112546 instanceof Object)){
var ex__10429__auto__ = e112546;
var statearr_112547_112575 = state_112540;
(statearr_112547_112575[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112576 = state_112540;
state_112540 = G__112576;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_112540){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_112540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112548 = f__10447__auto__.call(null);
(statearr_112548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_112548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function (state_112553){
var state_val_112554 = (state_112553[(1)]);
if((state_val_112554 === (1))){
var inst_112549 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_112553__$1 = state_112553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112553__$1,(2),drop_dot.core.c,inst_112549);
} else {
if((state_val_112554 === (2))){
var inst_112551 = (state_112553[(2)]);
var state_112553__$1 = state_112553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112553__$1,inst_112551);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_112558 = [null,null,null,null,null,null,null];
(statearr_112558[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_112558[(1)] = (1));

return statearr_112558;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_112553){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112559){if((e112559 instanceof Object)){
var ex__10429__auto__ = e112559;
var statearr_112560_112577 = state_112553;
(statearr_112560_112577[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112578 = state_112553;
state_112553 = G__112578;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_112553){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_112553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112561 = f__10447__auto__.call(null);
(statearr_112561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_112561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_112524,inst_112524__$1,state_val_112536,c__10446__auto__))
})();
var inst_112526 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_112524__$1);
var state_112535__$1 = (function (){var statearr_112562 = state_112535;
(statearr_112562[(8)] = inst_112525);

(statearr_112562[(7)] = inst_112524__$1);

return statearr_112562;
})();
if(cljs.core.truth_(inst_112526)){
var statearr_112563_112579 = state_112535__$1;
(statearr_112563_112579[(1)] = (3));

} else {
var statearr_112564_112580 = state_112535__$1;
(statearr_112564_112580[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112536 === (3))){
var inst_112524 = (state_112535[(7)]);
var state_112535__$1 = state_112535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112535__$1,(6),cljs.core.async.chan,inst_112524);
} else {
if((state_val_112536 === (4))){
var inst_112525 = (state_112535[(8)]);
var inst_112524 = (state_112535[(7)]);
var inst_112531 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_112524,inst_112525);
var state_112535__$1 = state_112535;
var statearr_112565_112581 = state_112535__$1;
(statearr_112565_112581[(2)] = inst_112531);

(statearr_112565_112581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112536 === (5))){
var inst_112533 = (state_112535[(2)]);
var state_112535__$1 = (function (){var statearr_112566 = state_112535;
(statearr_112566[(9)] = inst_112533);

return statearr_112566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112535__$1,cljs.core.async.chan);
} else {
if((state_val_112536 === (6))){
var inst_112529 = (state_112535[(2)]);
var state_112535__$1 = state_112535;
var statearr_112567_112582 = state_112535__$1;
(statearr_112567_112582[(2)] = inst_112529);

(statearr_112567_112582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_112571 = [null,null,null,null,null,null,null,null,null,null];
(statearr_112571[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_112571[(1)] = (1));

return statearr_112571;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_112535){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112572){if((e112572 instanceof Object)){
var ex__10429__auto__ = e112572;
var statearr_112573_112583 = state_112535;
(statearr_112573_112583[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112584 = state_112535;
state_112535 = G__112584;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_112535){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_112535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112574 = f__10447__auto__.call(null);
(statearr_112574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112574;
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
return (function (state_112619){
var state_val_112620 = (state_112619[(1)]);
if((state_val_112620 === (1))){
var state_112619__$1 = state_112619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112619__$1,(2),c);
} else {
if((state_val_112620 === (2))){
var inst_112610 = (state_112619[(7)]);
var inst_112610__$1 = (state_112619[(2)]);
var inst_112611 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_112610__$1);
var state_112619__$1 = (function (){var statearr_112621 = state_112619;
(statearr_112621[(7)] = inst_112610__$1);

return statearr_112621;
})();
if(cljs.core.truth_(inst_112611)){
var statearr_112622_112633 = state_112619__$1;
(statearr_112622_112633[(1)] = (3));

} else {
var statearr_112623_112634 = state_112619__$1;
(statearr_112623_112634[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112620 === (3))){
var inst_112610 = (state_112619[(7)]);
var inst_112613 = cljs.core.println.call(null,inst_112610);
var state_112619__$1 = state_112619;
var statearr_112624_112635 = state_112619__$1;
(statearr_112624_112635[(2)] = inst_112613);

(statearr_112624_112635[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112620 === (4))){
var inst_112610 = (state_112619[(7)]);
var inst_112615 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_112610);
var state_112619__$1 = state_112619;
var statearr_112625_112636 = state_112619__$1;
(statearr_112625_112636[(2)] = inst_112615);

(statearr_112625_112636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112620 === (5))){
var inst_112617 = (state_112619[(2)]);
var state_112619__$1 = state_112619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112619__$1,inst_112617);
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
var statearr_112629 = [null,null,null,null,null,null,null,null];
(statearr_112629[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_112629[(1)] = (1));

return statearr_112629;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_112619){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112630){if((e112630 instanceof Object)){
var ex__10429__auto__ = e112630;
var statearr_112631_112637 = state_112619;
(statearr_112631_112637[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112638 = state_112619;
state_112619 = G__112638;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_112619){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_112619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112632 = f__10447__auto__.call(null);
(statearr_112632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_a_chan_verified_linkee.call(null,drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_112718){
var state_val_112719 = (state_112718[(1)]);
if((state_val_112719 === (7))){
var inst_112713 = (state_112718[(2)]);
var inst_112714 = cljs.core.println.call(null,"done");
var state_112718__$1 = (function (){var statearr_112721 = state_112718;
(statearr_112721[(7)] = inst_112713);

return statearr_112721;
})();
var statearr_112722_112747 = state_112718__$1;
(statearr_112722_112747[(2)] = inst_112714);

(statearr_112722_112747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (1))){
var inst_112693 = chan_config;
var state_112718__$1 = (function (){var statearr_112723 = state_112718;
(statearr_112723[(8)] = inst_112693);

return statearr_112723;
})();
var statearr_112724_112748 = state_112718__$1;
(statearr_112724_112748[(2)] = null);

(statearr_112724_112748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (4))){
var inst_112696 = (state_112718[(9)]);
var inst_112696__$1 = (state_112718[(2)]);
var state_112718__$1 = (function (){var statearr_112725 = state_112718;
(statearr_112725[(9)] = inst_112696__$1);

return statearr_112725;
})();
if(cljs.core.truth_(inst_112696__$1)){
var statearr_112726_112749 = state_112718__$1;
(statearr_112726_112749[(1)] = (5));

} else {
var statearr_112727_112750 = state_112718__$1;
(statearr_112727_112750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (13))){
var inst_112693 = (state_112718[(8)]);
var inst_112709 = (state_112718[(2)]);
var tmp112720 = inst_112693;
var inst_112693__$1 = tmp112720;
var state_112718__$1 = (function (){var statearr_112728 = state_112718;
(statearr_112728[(8)] = inst_112693__$1);

(statearr_112728[(10)] = inst_112709);

return statearr_112728;
})();
var statearr_112729_112751 = state_112718__$1;
(statearr_112729_112751[(2)] = null);

(statearr_112729_112751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (6))){
var state_112718__$1 = state_112718;
var statearr_112730_112752 = state_112718__$1;
(statearr_112730_112752[(2)] = null);

(statearr_112730_112752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (3))){
var inst_112716 = (state_112718[(2)]);
var state_112718__$1 = state_112718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112718__$1,inst_112716);
} else {
if((state_val_112719 === (12))){
var state_112718__$1 = state_112718;
var statearr_112731_112753 = state_112718__$1;
(statearr_112731_112753[(2)] = null);

(statearr_112731_112753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (2))){
var inst_112693 = (state_112718[(8)]);
var state_112718__$1 = state_112718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112718__$1,(4),inst_112693);
} else {
if((state_val_112719 === (11))){
var inst_112696 = (state_112718[(9)]);
var inst_112706 = drop_dot.core.link_line.call(null,inst_112696);
var state_112718__$1 = state_112718;
var statearr_112732_112754 = state_112718__$1;
(statearr_112732_112754[(2)] = inst_112706);

(statearr_112732_112754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (9))){
var state_112718__$1 = state_112718;
var statearr_112733_112755 = state_112718__$1;
(statearr_112733_112755[(2)] = null);

(statearr_112733_112755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (5))){
var inst_112698 = cljs.core._EQ_.call(null,cmd,"drop");
var state_112718__$1 = state_112718;
if(inst_112698){
var statearr_112734_112756 = state_112718__$1;
(statearr_112734_112756[(1)] = (8));

} else {
var statearr_112735_112757 = state_112718__$1;
(statearr_112735_112757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (10))){
var inst_112703 = (state_112718[(2)]);
var inst_112704 = cljs.core._EQ_.call(null,cmd,"link");
var state_112718__$1 = (function (){var statearr_112736 = state_112718;
(statearr_112736[(11)] = inst_112703);

return statearr_112736;
})();
if(inst_112704){
var statearr_112737_112758 = state_112718__$1;
(statearr_112737_112758[(1)] = (11));

} else {
var statearr_112738_112759 = state_112718__$1;
(statearr_112738_112759[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_112719 === (8))){
var inst_112696 = (state_112718[(9)]);
var inst_112700 = drop_dot.core.drop_line.call(null,inst_112696);
var state_112718__$1 = state_112718;
var statearr_112739_112760 = state_112718__$1;
(statearr_112739_112760[(2)] = inst_112700);

(statearr_112739_112760[(1)] = (10));


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
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0 = (function (){
var statearr_112743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_112743[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_112743[(1)] = (1));

return statearr_112743;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_112718){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112744){if((e112744 instanceof Object)){
var ex__10429__auto__ = e112744;
var statearr_112745_112761 = state_112718;
(statearr_112745_112761[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112762 = state_112718;
state_112718 = G__112762;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_112718){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_112718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_112746 = f__10447__auto__.call(null);
(statearr_112746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_112746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___112859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___112859,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___112859,c){
return (function (state_112823){
var state_val_112824 = (state_112823[(1)]);
if((state_val_112824 === (1))){
var inst_112812 = (state_112823[(7)]);
var inst_112813 = (state_112823[(8)]);
var inst_112811 = (state_112823[(9)]);
var inst_112811__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_112812__$1 = cljs.core.async.chan.call(null,(1));
var inst_112813__$1 = (function (){var res = inst_112811__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_112812__$1;
return ((function (res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c){
return (function (state_112828){
var state_val_112829 = (state_112828[(1)]);
if((state_val_112829 === (1))){
var state_112828__$1 = state_112828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112828__$1,(2),wcc,res__$1);
} else {
if((state_val_112829 === (2))){
var inst_112826 = (state_112828[(2)]);
var state_112828__$1 = state_112828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112828__$1,inst_112826);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_112833 = [null,null,null,null,null,null,null];
(statearr_112833[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_112833[(1)] = (1));

return statearr_112833;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_112828){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112834){if((e112834 instanceof Object)){
var ex__10429__auto__ = e112834;
var statearr_112835_112860 = state_112828;
(statearr_112835_112860[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112861 = state_112828;
state_112828 = G__112861;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_112828){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_112828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c))
})();
var state__10448__auto__ = (function (){var statearr_112836 = f__10447__auto__.call(null);
(statearr_112836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_112836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_112812,inst_112813,inst_112811,inst_112811__$1,inst_112812__$1,state_val_112824,c__10446__auto___112859,c))
})();
var inst_112814 = inst_112811__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_112813__$1);
var state_112823__$1 = (function (){var statearr_112837 = state_112823;
(statearr_112837[(7)] = inst_112812__$1);

(statearr_112837[(8)] = inst_112813__$1);

(statearr_112837[(9)] = inst_112811__$1);

(statearr_112837[(10)] = inst_112814);

return statearr_112837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_112823__$1,(2),inst_112812__$1);
} else {
if((state_val_112824 === (2))){
var inst_112812 = (state_112823[(7)]);
var inst_112813 = (state_112823[(8)]);
var inst_112811 = (state_112823[(9)]);
var inst_112814 = (state_112823[(10)]);
var inst_112816 = (state_112823[(2)]);
var inst_112817 = [cljs.core.str(inst_112816)].join('');
var inst_112818 = parseInt(inst_112817);
var inst_112819 = (function (){var res = inst_112811;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_112812;
var wcc_jammer = inst_112813;
var get_wc = inst_112814;
var lines = inst_112818;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,state_val_112824,c__10446__auto___112859,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,state_val_112824,c__10446__auto___112859,c))
})();
var inst_112820 = (function (){var res = inst_112811;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_112812;
var wcc_jammer = inst_112813;
var get_wc = inst_112814;
var lines = inst_112818;
var close_if_done = inst_112819;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c){
return (function (state_112842){
var state_val_112843 = (state_112842[(1)]);
if((state_val_112843 === (1))){
var state_112842__$1 = state_112842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_112842__$1,(2),c,res__$1);
} else {
if((state_val_112843 === (2))){
var inst_112839 = (state_112842[(2)]);
var inst_112840 = close_if_done.call(null);
var state_112842__$1 = (function (){var statearr_112844 = state_112842;
(statearr_112844[(7)] = inst_112839);

return statearr_112844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112842__$1,inst_112840);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_112848 = [null,null,null,null,null,null,null,null];
(statearr_112848[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_112848[(1)] = (1));

return statearr_112848;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_112842){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112849){if((e112849 instanceof Object)){
var ex__10429__auto__ = e112849;
var statearr_112850_112862 = state_112842;
(statearr_112850_112862[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112863 = state_112842;
state_112842 = G__112863;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_112842){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_112842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c))
})();
var state__10448__auto__ = (function (){var statearr_112851 = f__10447__auto__.call(null);
(statearr_112851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_112851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_112812,inst_112813,inst_112811,inst_112814,inst_112816,inst_112817,inst_112818,inst_112819,state_val_112824,c__10446__auto___112859,c))
})();
var inst_112821 = inst_112811.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_112820);
var state_112823__$1 = state_112823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_112823__$1,inst_112821);
} else {
return null;
}
}
});})(c__10446__auto___112859,c))
;
return ((function (switch__10425__auto__,c__10446__auto___112859,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_112855 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_112855[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_112855[(1)] = (1));

return statearr_112855;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_112823){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_112823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e112856){if((e112856 instanceof Object)){
var ex__10429__auto__ = e112856;
var statearr_112857_112864 = state_112823;
(statearr_112857_112864[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_112823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e112856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__112865 = state_112823;
state_112823 = G__112865;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_112823){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_112823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___112859,c))
})();
var state__10448__auto__ = (function (){var statearr_112858 = f__10447__auto__.call(null);
(statearr_112858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___112859);

return statearr_112858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___112859,c))
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
var args__9163__auto__ = [];
var len__9156__auto___112867 = arguments.length;
var i__9157__auto___112868 = (0);
while(true){
if((i__9157__auto___112868 < len__9156__auto___112867)){
args__9163__auto__.push((arguments[i__9157__auto___112868]));

var G__112869 = (i__9157__auto___112868 + (1));
i__9157__auto___112868 = G__112869;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq112866){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq112866));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map