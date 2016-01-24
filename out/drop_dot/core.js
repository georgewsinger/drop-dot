// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('cljs.test');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.jam_first_callback_arg_into_chan = (function drop_dot$core$jam_first_callback_arg_into_chan(c){
return (function (arg){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_60009){
var state_val_60010 = (state_60009[(1)]);
if((state_val_60010 === (1))){
var state_60009__$1 = state_60009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60009__$1,(2),c,arg);
} else {
if((state_val_60010 === (2))){
var inst_60007 = (state_60009[(2)]);
var state_60009__$1 = state_60009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60009__$1,inst_60007);
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
var statearr_60014 = [null,null,null,null,null,null,null];
(statearr_60014[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_60014[(1)] = (1));

return statearr_60014;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_60009){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_60009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e60015){if((e60015 instanceof Object)){
var ex__10431__auto__ = e60015;
var statearr_60016_60018 = state_60009;
(statearr_60016_60018[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60019 = state_60009;
state_60009 = G__60019;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_60009){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_60009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_60017 = f__10449__auto__.call(null);
(statearr_60017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_60017;
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
return (function (state_60035){
var state_val_60036 = (state_60035[(1)]);
if((state_val_60036 === (1))){
var state_60035__$1 = state_60035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60035__$1,(2),c,arg);
} else {
if((state_val_60036 === (2))){
var inst_60033 = (state_60035[(2)]);
var state_60035__$1 = state_60035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60035__$1,inst_60033);
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
var statearr_60040 = [null,null,null,null,null,null,null];
(statearr_60040[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_60040[(1)] = (1));

return statearr_60040;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_60035){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_60035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e60041){if((e60041 instanceof Object)){
var ex__10431__auto__ = e60041;
var statearr_60042_60044 = state_60035;
(statearr_60042_60044[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60045 = state_60035;
state_60035 = G__60045;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_60035){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_60035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_60043 = f__10449__auto__.call(null);
(statearr_60043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_60043;
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
return (function (state_60061){
var state_val_60062 = (state_60061[(1)]);
if((state_val_60062 === (1))){
var state_60061__$1 = state_60061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60061__$1,(2),d,res__$1);
} else {
if((state_val_60062 === (2))){
var inst_60059 = (state_60061[(2)]);
var state_60061__$1 = state_60061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60061__$1,inst_60059);
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
var statearr_60066 = [null,null,null,null,null,null,null];
(statearr_60066[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_60066[(1)] = (1));

return statearr_60066;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_60061){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_60061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e60067){if((e60067 instanceof Object)){
var ex__10431__auto__ = e60067;
var statearr_60068_60070 = state_60061;
(statearr_60068_60070[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60071 = state_60061;
state_60061 = G__60071;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_60061){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_60061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_60069 = f__10449__auto__.call(null);
(statearr_60069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_60069;
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
return (function (state_60099){
var state_val_60100 = (state_60099[(1)]);
if((state_val_60100 === (1))){
var inst_60092 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_60099__$1 = state_60099;
if(cljs.core.truth_(inst_60092)){
var statearr_60101_60112 = state_60099__$1;
(statearr_60101_60112[(1)] = (2));

} else {
var statearr_60102_60113 = state_60099__$1;
(statearr_60102_60113[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60100 === (2))){
var state_60099__$1 = state_60099;
var statearr_60103_60114 = state_60099__$1;
(statearr_60103_60114[(2)] = line);

(statearr_60103_60114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60100 === (3))){
var inst_60095 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_60099__$1 = state_60099;
var statearr_60104_60115 = state_60099__$1;
(statearr_60104_60115[(2)] = inst_60095);

(statearr_60104_60115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60100 === (4))){
var inst_60097 = (state_60099[(2)]);
var state_60099__$1 = state_60099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60099__$1,inst_60097);
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
var statearr_60108 = [null,null,null,null,null,null,null];
(statearr_60108[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_60108[(1)] = (1));

return statearr_60108;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_60099){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_60099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e60109){if((e60109 instanceof Object)){
var ex__10431__auto__ = e60109;
var statearr_60110_60116 = state_60099;
(statearr_60110_60116[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60117 = state_60099;
state_60099 = G__60117;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_60099){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_60099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_60111 = f__10449__auto__.call(null);
(statearr_60111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_60111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(){
return null;
});
