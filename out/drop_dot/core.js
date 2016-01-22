// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.t1 = (function drop_dot$core$t1(){
var c = cljs.core.async.chan.call(null,(1));
var c__10448__auto___27336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___27336,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___27336,c){
return (function (state_27327){
var state_val_27328 = (state_27327[(1)]);
if((state_val_27328 === (1))){
var state_27327__$1 = state_27327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27327__$1,(2),c,(5));
} else {
if((state_val_27328 === (2))){
var inst_27325 = (state_27327[(2)]);
var state_27327__$1 = state_27327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27327__$1,inst_27325);
} else {
return null;
}
}
});})(c__10448__auto___27336,c))
;
return ((function (switch__10427__auto__,c__10448__auto___27336,c){
return (function() {
var drop_dot$core$t1_$_state_machine__10428__auto__ = null;
var drop_dot$core$t1_$_state_machine__10428__auto____0 = (function (){
var statearr_27332 = [null,null,null,null,null,null,null];
(statearr_27332[(0)] = drop_dot$core$t1_$_state_machine__10428__auto__);

(statearr_27332[(1)] = (1));

return statearr_27332;
});
var drop_dot$core$t1_$_state_machine__10428__auto____1 = (function (state_27327){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27333){if((e27333 instanceof Object)){
var ex__10431__auto__ = e27333;
var statearr_27334_27337 = state_27327;
(statearr_27334_27337[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27338 = state_27327;
state_27327 = G__27338;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$t1_$_state_machine__10428__auto__ = function(state_27327){
switch(arguments.length){
case 0:
return drop_dot$core$t1_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$t1_$_state_machine__10428__auto____1.call(this,state_27327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$t1_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$t1_$_state_machine__10428__auto____0;
drop_dot$core$t1_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$t1_$_state_machine__10428__auto____1;
return drop_dot$core$t1_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___27336,c))
})();
var state__10450__auto__ = (function (){var statearr_27335 = f__10449__auto__.call(null);
(statearr_27335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___27336);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___27336,c))
);


return c;
});
var c__10448__auto___27352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___27352){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___27352){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (1))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27343__$1,(2),drop_dot.core.t1);
} else {
if((state_val_27344 === (2))){
var inst_27340 = (state_27343[(2)]);
var inst_27341 = cljs.core.println.call(null,inst_27340);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
return null;
}
}
});})(c__10448__auto___27352))
;
return ((function (switch__10427__auto__,c__10448__auto___27352){
return (function() {
var drop_dot$core$state_machine__10428__auto__ = null;
var drop_dot$core$state_machine__10428__auto____0 = (function (){
var statearr_27348 = [null,null,null,null,null,null,null];
(statearr_27348[(0)] = drop_dot$core$state_machine__10428__auto__);

(statearr_27348[(1)] = (1));

return statearr_27348;
});
var drop_dot$core$state_machine__10428__auto____1 = (function (state_27343){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27349){if((e27349 instanceof Object)){
var ex__10431__auto__ = e27349;
var statearr_27350_27353 = state_27343;
(statearr_27350_27353[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27354 = state_27343;
state_27343 = G__27354;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$state_machine__10428__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return drop_dot$core$state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$state_machine__10428__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$state_machine__10428__auto____0;
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$state_machine__10428__auto____1;
return drop_dot$core$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___27352))
})();
var state__10450__auto__ = (function (){var statearr_27351 = f__10449__auto__.call(null);
(statearr_27351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___27352);

return statearr_27351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___27352))
);

drop_dot.core.chan_config_files = (function drop_dot$core$chan_config_files(){
var c = cljs.core.async.chan.call(null);
var c__10448__auto___27451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___27451,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___27451,c){
return (function (state_27415){
var state_val_27416 = (state_27415[(1)]);
if((state_val_27416 === (1))){
var inst_27403 = (state_27415[(7)]);
var inst_27404 = (state_27415[(8)]);
var inst_27405 = (state_27415[(9)]);
var inst_27403__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_27404__$1 = cljs.core.async.chan.call(null,(1));
var inst_27405__$1 = (function (){var res = inst_27403__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_27404__$1;
return ((function (res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c){
return (function (error,res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c){
return (function (state_27420){
var state_val_27421 = (state_27420[(1)]);
if((state_val_27421 === (1))){
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27420__$1,(2),wcc,res__$1);
} else {
if((state_val_27421 === (2))){
var inst_27418 = (state_27420[(2)]);
var state_27420__$1 = state_27420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27420__$1,inst_27418);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c){
return (function() {
var drop_dot$core$chan_config_files_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_files_$_state_machine__10428__auto____0 = (function (){
var statearr_27425 = [null,null,null,null,null,null,null];
(statearr_27425[(0)] = drop_dot$core$chan_config_files_$_state_machine__10428__auto__);

(statearr_27425[(1)] = (1));

return statearr_27425;
});
var drop_dot$core$chan_config_files_$_state_machine__10428__auto____1 = (function (state_27420){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27426){if((e27426 instanceof Object)){
var ex__10431__auto__ = e27426;
var statearr_27427_27452 = state_27420;
(statearr_27427_27452[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27453 = state_27420;
state_27420 = G__27453;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_files_$_state_machine__10428__auto__ = function(state_27420){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_files_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_files_$_state_machine__10428__auto____1.call(this,state_27420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_files_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_files_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_files_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_files_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_files_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c))
})();
var state__10450__auto__ = (function (){var statearr_27428 = f__10449__auto__.call(null);
(statearr_27428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_27428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,inst_27403,inst_27404,inst_27405,inst_27403__$1,inst_27404__$1,state_val_27416,c__10448__auto___27451,c))
})();
var inst_27406 = inst_27403__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_27405__$1);
var state_27415__$1 = (function (){var statearr_27429 = state_27415;
(statearr_27429[(7)] = inst_27403__$1);

(statearr_27429[(8)] = inst_27404__$1);

(statearr_27429[(9)] = inst_27405__$1);

(statearr_27429[(10)] = inst_27406);

return statearr_27429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27415__$1,(2),inst_27404__$1);
} else {
if((state_val_27416 === (2))){
var inst_27403 = (state_27415[(7)]);
var inst_27404 = (state_27415[(8)]);
var inst_27405 = (state_27415[(9)]);
var inst_27406 = (state_27415[(10)]);
var inst_27408 = (state_27415[(2)]);
var inst_27409 = [cljs.core.str(inst_27408)].join('');
var inst_27410 = parseInt(inst_27409);
var inst_27411 = (function (){var res = inst_27403;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_27404;
var wcc_jammer = inst_27405;
var get_wc = inst_27406;
var lines = inst_27410;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,state_val_27416,c__10448__auto___27451,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,state_val_27416,c__10448__auto___27451,c))
})();
var inst_27412 = (function (){var res = inst_27403;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_27404;
var wcc_jammer = inst_27405;
var get_wc = inst_27406;
var lines = inst_27410;
var close_if_done = inst_27411;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c){
return (function (res__$1){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c){
return (function (state_27434){
var state_val_27435 = (state_27434[(1)]);
if((state_val_27435 === (1))){
var state_27434__$1 = state_27434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27434__$1,(2),c,res__$1);
} else {
if((state_val_27435 === (2))){
var inst_27431 = (state_27434[(2)]);
var inst_27432 = close_if_done.call(null);
var state_27434__$1 = (function (){var statearr_27436 = state_27434;
(statearr_27436[(7)] = inst_27431);

return statearr_27436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27434__$1,inst_27432);
} else {
return null;
}
}
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c){
return (function() {
var drop_dot$core$chan_config_files_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_files_$_state_machine__10428__auto____0 = (function (){
var statearr_27440 = [null,null,null,null,null,null,null,null];
(statearr_27440[(0)] = drop_dot$core$chan_config_files_$_state_machine__10428__auto__);

(statearr_27440[(1)] = (1));

return statearr_27440;
});
var drop_dot$core$chan_config_files_$_state_machine__10428__auto____1 = (function (state_27434){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27441){if((e27441 instanceof Object)){
var ex__10431__auto__ = e27441;
var statearr_27442_27454 = state_27434;
(statearr_27442_27454[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27455 = state_27434;
state_27434 = G__27455;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_files_$_state_machine__10428__auto__ = function(state_27434){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_files_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_files_$_state_machine__10428__auto____1.call(this,state_27434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_files_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_files_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_files_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_files_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_files_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c))
})();
var state__10450__auto__ = (function (){var statearr_27443 = f__10449__auto__.call(null);
(statearr_27443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_27443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c))
);

return c__10448__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_27403,inst_27404,inst_27405,inst_27406,inst_27408,inst_27409,inst_27410,inst_27411,state_val_27416,c__10448__auto___27451,c))
})();
var inst_27413 = inst_27403.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_27412);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27415__$1,inst_27413);
} else {
return null;
}
}
});})(c__10448__auto___27451,c))
;
return ((function (switch__10427__auto__,c__10448__auto___27451,c){
return (function() {
var drop_dot$core$chan_config_files_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_config_files_$_state_machine__10428__auto____0 = (function (){
var statearr_27447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27447[(0)] = drop_dot$core$chan_config_files_$_state_machine__10428__auto__);

(statearr_27447[(1)] = (1));

return statearr_27447;
});
var drop_dot$core$chan_config_files_$_state_machine__10428__auto____1 = (function (state_27415){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27448){if((e27448 instanceof Object)){
var ex__10431__auto__ = e27448;
var statearr_27449_27456 = state_27415;
(statearr_27449_27456[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27457 = state_27415;
state_27415 = G__27457;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_config_files_$_state_machine__10428__auto__ = function(state_27415){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_files_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_files_$_state_machine__10428__auto____1.call(this,state_27415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_files_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_files_$_state_machine__10428__auto____0;
drop_dot$core$chan_config_files_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_files_$_state_machine__10428__auto____1;
return drop_dot$core$chan_config_files_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___27451,c))
})();
var state__10450__auto__ = (function (){var statearr_27450 = f__10449__auto__.call(null);
(statearr_27450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___27451);

return statearr_27450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___27451,c))
);


return c;
});
cljs.core.type.call(null,drop_dot.core.chan_config_files.call(null));
drop_dot.core.hey = drop_dot.core.chan_config_files.call(null);
var c__10448__auto___27471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___27471){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___27471){
return (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (1))){
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(2),drop_dot.core.hey);
} else {
if((state_val_27463 === (2))){
var inst_27459 = (state_27462[(2)]);
var inst_27460 = cljs.core.println.call(null,inst_27459);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
return null;
}
}
});})(c__10448__auto___27471))
;
return ((function (switch__10427__auto__,c__10448__auto___27471){
return (function() {
var drop_dot$core$state_machine__10428__auto__ = null;
var drop_dot$core$state_machine__10428__auto____0 = (function (){
var statearr_27467 = [null,null,null,null,null,null,null];
(statearr_27467[(0)] = drop_dot$core$state_machine__10428__auto__);

(statearr_27467[(1)] = (1));

return statearr_27467;
});
var drop_dot$core$state_machine__10428__auto____1 = (function (state_27462){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27468){if((e27468 instanceof Object)){
var ex__10431__auto__ = e27468;
var statearr_27469_27472 = state_27462;
(statearr_27469_27472[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27473 = state_27462;
state_27462 = G__27473;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$state_machine__10428__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return drop_dot$core$state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$state_machine__10428__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$state_machine__10428__auto____0;
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$state_machine__10428__auto____1;
return drop_dot$core$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___27471))
})();
var state__10450__auto__ = (function (){var statearr_27470 = f__10449__auto__.call(null);
(statearr_27470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___27471);

return statearr_27470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___27471))
);

var c__10448__auto___27488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto___27488){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto___27488){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (1))){
var inst_27474 = drop_dot.core.chan_config_files.call(null);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(2),inst_27474);
} else {
if((state_val_27480 === (2))){
var inst_27476 = (state_27479[(2)]);
var inst_27477 = cljs.core.println.call(null,inst_27476);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
return null;
}
}
});})(c__10448__auto___27488))
;
return ((function (switch__10427__auto__,c__10448__auto___27488){
return (function() {
var drop_dot$core$state_machine__10428__auto__ = null;
var drop_dot$core$state_machine__10428__auto____0 = (function (){
var statearr_27484 = [null,null,null,null,null,null,null];
(statearr_27484[(0)] = drop_dot$core$state_machine__10428__auto__);

(statearr_27484[(1)] = (1));

return statearr_27484;
});
var drop_dot$core$state_machine__10428__auto____1 = (function (state_27479){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e27485){if((e27485 instanceof Object)){
var ex__10431__auto__ = e27485;
var statearr_27486_27489 = state_27479;
(statearr_27486_27489[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27490 = state_27479;
state_27479 = G__27490;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$state_machine__10428__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return drop_dot$core$state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$state_machine__10428__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$state_machine__10428__auto____0;
drop_dot$core$state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$state_machine__10428__auto____1;
return drop_dot$core$state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto___27488))
})();
var state__10450__auto__ = (function (){var statearr_27487 = f__10449__auto__.call(null);
(statearr_27487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto___27488);

return statearr_27487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto___27488))
);

drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9165__auto__ = [];
var len__9158__auto___27492 = arguments.length;
var i__9159__auto___27493 = (0);
while(true){
if((i__9159__auto___27493 < len__9158__auto___27492)){
args__9165__auto__.push((arguments[i__9159__auto___27493]));

var G__27494 = (i__9159__auto___27493 + (1));
i__9159__auto___27493 = G__27494;
continue;
} else {
}
break;
}

var argseq__9166__auto__ = ((((0) < args__9165__auto__.length))?(new cljs.core.IndexedSeq(args__9165__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9166__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__8100__auto__ = argv.e;
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__8100__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__8100__auto__)){
return or__8100__auto__;
} else {
return "$HOME";
}
})();
cljs.core.println.call(null,argv);

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

drop_dot.core._main.cljs$lang$applyTo = (function (seq27491){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27491));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map