// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.test');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
drop_dot.core.jam_first_callback_arg_into_chan = (function drop_dot$core$jam_first_callback_arg_into_chan(c){
return (function (arg){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_63388){
var state_val_63389 = (state_63388[(1)]);
if((state_val_63389 === (1))){
var state_63388__$1 = state_63388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63388__$1,(2),c,arg);
} else {
if((state_val_63389 === (2))){
var inst_63386 = (state_63388[(2)]);
var state_63388__$1 = state_63388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63388__$1,inst_63386);
} else {
return null;
}
}
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = null;
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0 = (function (){
var statearr_63393 = [null,null,null,null,null,null,null];
(statearr_63393[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_63393[(1)] = (1));

return statearr_63393;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_63388){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_63388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e63394){if((e63394 instanceof Object)){
var ex__10431__auto__ = e63394;
var statearr_63395_63397 = state_63388;
(statearr_63395_63397[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63398 = state_63388;
state_63388 = G__63398;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_63388){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_63388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_63396 = f__10449__auto__.call(null);
(statearr_63396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_63396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
});
drop_dot.core.jam_second_callback_arg_into_chan = (function drop_dot$core$jam_second_callback_arg_into_chan(c){
return (function (arg){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_63414){
var state_val_63415 = (state_63414[(1)]);
if((state_val_63415 === (1))){
var state_63414__$1 = state_63414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63414__$1,(2),c,arg);
} else {
if((state_val_63415 === (2))){
var inst_63412 = (state_63414[(2)]);
var state_63414__$1 = state_63414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63414__$1,inst_63412);
} else {
return null;
}
}
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = null;
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0 = (function (){
var statearr_63419 = [null,null,null,null,null,null,null];
(statearr_63419[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_63419[(1)] = (1));

return statearr_63419;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_63414){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_63414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e63420){if((e63420 instanceof Object)){
var ex__10431__auto__ = e63420;
var statearr_63421_63423 = state_63414;
(statearr_63421_63423[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63424 = state_63414;
state_63414 = G__63424;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_63414){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_63414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_63422 = f__10449__auto__.call(null);
(statearr_63422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_63422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
});
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,res,d){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,res,d){
return (function (state_63440){
var state_val_63441 = (state_63440[(1)]);
if((state_val_63441 === (1))){
var state_63440__$1 = state_63440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63440__$1,(2),d,res__$1);
} else {
if((state_val_63441 === (2))){
var inst_63438 = (state_63440[(2)]);
var state_63440__$1 = state_63440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63440__$1,inst_63438);
} else {
return null;
}
}
});})(c__10448__auto__,res,d))
;
return ((function (switch__10427__auto__,c__10448__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0 = (function (){
var statearr_63445 = [null,null,null,null,null,null,null];
(statearr_63445[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_63445[(1)] = (1));

return statearr_63445;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_63440){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_63440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e63446){if((e63446 instanceof Object)){
var ex__10431__auto__ = e63446;
var statearr_63447_63449 = state_63440;
(statearr_63447_63449[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63450 = state_63440;
state_63440 = G__63450;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_63440){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_63440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_63448 = f__10449__auto__.call(null);
(statearr_63448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_63448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__,res,d))
);

return c__10448__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_63478){
var state_val_63479 = (state_63478[(1)]);
if((state_val_63479 === (1))){
var inst_63471 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_63478__$1 = state_63478;
if(cljs.core.truth_(inst_63471)){
var statearr_63480_63491 = state_63478__$1;
(statearr_63480_63491[(1)] = (2));

} else {
var statearr_63481_63492 = state_63478__$1;
(statearr_63481_63492[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63479 === (2))){
var state_63478__$1 = state_63478;
var statearr_63482_63493 = state_63478__$1;
(statearr_63482_63493[(2)] = line);

(statearr_63482_63493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63479 === (3))){
var inst_63474 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_63478__$1 = state_63478;
var statearr_63483_63494 = state_63478__$1;
(statearr_63483_63494[(2)] = inst_63474);

(statearr_63483_63494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63479 === (4))){
var inst_63476 = (state_63478[(2)]);
var state_63478__$1 = state_63478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63478__$1,inst_63476);
} else {
return null;
}
}
}
}
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0 = (function (){
var statearr_63487 = [null,null,null,null,null,null,null];
(statearr_63487[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_63487[(1)] = (1));

return statearr_63487;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_63478){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_63478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e63488){if((e63488 instanceof Object)){
var ex__10431__auto__ = e63488;
var statearr_63489_63495 = state_63478;
(statearr_63489_63495[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63496 = state_63478;
state_63478 = G__63496;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_63478){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_63478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_63490 = f__10449__auto__.call(null);
(statearr_63490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_63490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
