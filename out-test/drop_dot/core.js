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
return (function (state_181873){
var state_val_181874 = (state_181873[(1)]);
if((state_val_181874 === (1))){
var state_181873__$1 = state_181873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181873__$1,(2),c,arg);
} else {
if((state_val_181874 === (2))){
var inst_181871 = (state_181873[(2)]);
var state_181873__$1 = state_181873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181873__$1,inst_181871);
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
var statearr_181878 = [null,null,null,null,null,null,null];
(statearr_181878[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_181878[(1)] = (1));

return statearr_181878;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_181873){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_181873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e181879){if((e181879 instanceof Object)){
var ex__9301__auto__ = e181879;
var statearr_181880_181882 = state_181873;
(statearr_181880_181882[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e181879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__181883 = state_181873;
state_181873 = G__181883;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_181873){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_181873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_181881 = f__9319__auto__.call(null);
(statearr_181881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_181881;
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
return (function (state_181899){
var state_val_181900 = (state_181899[(1)]);
if((state_val_181900 === (1))){
var state_181899__$1 = state_181899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181899__$1,(2),c,arg);
} else {
if((state_val_181900 === (2))){
var inst_181897 = (state_181899[(2)]);
var state_181899__$1 = state_181899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181899__$1,inst_181897);
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
var statearr_181904 = [null,null,null,null,null,null,null];
(statearr_181904[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_181904[(1)] = (1));

return statearr_181904;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_181899){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_181899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e181905){if((e181905 instanceof Object)){
var ex__9301__auto__ = e181905;
var statearr_181906_181908 = state_181899;
(statearr_181906_181908[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e181905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__181909 = state_181899;
state_181899 = G__181909;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_181899){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_181899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_181907 = f__9319__auto__.call(null);
(statearr_181907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_181907;
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
return (function (state_181984){
var state_val_181985 = (state_181984[(1)]);
if((state_val_181985 === (1))){
var state_181984__$1 = state_181984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181984__$1,(2),input_chan);
} else {
if((state_val_181985 === (2))){
var inst_181963 = (state_181984[(2)]);
var inst_181964 = inst_181963;
var state_181984__$1 = (function (){var statearr_181986 = state_181984;
(statearr_181986[(7)] = inst_181964);

return statearr_181986;
})();
var statearr_181987_182014 = state_181984__$1;
(statearr_181987_182014[(2)] = null);

(statearr_181987_182014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_181985 === (3))){
var inst_181964 = (state_181984[(7)]);
var inst_181966 = cljs.core.count.call(null,inst_181964);
var inst_181967 = cljs.core._EQ_.call(null,inst_181966,(0));
var state_181984__$1 = state_181984;
if(inst_181967){
var statearr_181988_182015 = state_181984__$1;
(statearr_181988_182015[(1)] = (5));

} else {
var statearr_181989_182016 = state_181984__$1;
(statearr_181989_182016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_181985 === (4))){
var inst_181982 = (state_181984[(2)]);
var state_181984__$1 = state_181984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181984__$1,inst_181982);
} else {
if((state_val_181985 === (5))){
var state_181984__$1 = state_181984;
var statearr_181990_182017 = state_181984__$1;
(statearr_181990_182017[(2)] = null);

(statearr_181990_182017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_181985 === (6))){
var inst_181964 = (state_181984[(7)]);
var inst_181970 = cljs.core.async.chan.call(null);
var inst_181971 = cljs.core.first.call(null,inst_181964);
var inst_181972 = (function (){var v = inst_181964;
var rc = inst_181970;
var cmd = inst_181971;
return ((function (v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__){
return (function (state_181994){
var state_val_181995 = (state_181994[(1)]);
if((state_val_181995 === (1))){
var state_181994__$1 = state_181994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_181994__$1,(2),rc,res);
} else {
if((state_val_181995 === (2))){
var inst_181992 = (state_181994[(2)]);
var state_181994__$1 = state_181994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_181994__$1,inst_181992);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_181999 = [null,null,null,null,null,null,null];
(statearr_181999[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_181999[(1)] = (1));

return statearr_181999;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_181994){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_181994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182000){if((e182000 instanceof Object)){
var ex__9301__auto__ = e182000;
var statearr_182001_182018 = state_181994;
(statearr_182001_182018[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182019 = state_181994;
state_181994 = G__182019;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_181994){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_181994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182002 = f__9319__auto__.call(null);
(statearr_182002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_181964,inst_181970,inst_181971,state_val_181985,c__9318__auto__))
})();
var inst_181973 = drop_dot.core.pure_js.execAndPrint(inst_181971,inst_181972);
var state_181984__$1 = (function (){var statearr_182003 = state_181984;
(statearr_182003[(8)] = inst_181973);

return statearr_182003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_181984__$1,(8),inst_181970);
} else {
if((state_val_181985 === (7))){
var inst_181980 = (state_181984[(2)]);
var state_181984__$1 = state_181984;
var statearr_182004_182020 = state_181984__$1;
(statearr_182004_182020[(2)] = inst_181980);

(statearr_182004_182020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_181985 === (8))){
var inst_181964 = (state_181984[(7)]);
var inst_181975 = (state_181984[(2)]);
var inst_181976 = cljs.core.rest.call(null,inst_181964);
var inst_181977 = cljs.core.vec.call(null,inst_181976);
var inst_181964__$1 = inst_181977;
var state_181984__$1 = (function (){var statearr_182005 = state_181984;
(statearr_182005[(9)] = inst_181975);

(statearr_182005[(7)] = inst_181964__$1);

return statearr_182005;
})();
var statearr_182006_182021 = state_181984__$1;
(statearr_182006_182021[(2)] = null);

(statearr_182006_182021[(1)] = (3));


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
var statearr_182010 = [null,null,null,null,null,null,null,null,null,null];
(statearr_182010[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_182010[(1)] = (1));

return statearr_182010;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_181984){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_181984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182011){if((e182011 instanceof Object)){
var ex__9301__auto__ = e182011;
var statearr_182012_182022 = state_181984;
(statearr_182012_182022[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_181984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182023 = state_181984;
state_181984 = G__182023;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_181984){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_181984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182013 = f__9319__auto__.call(null);
(statearr_182013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182013;
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
return (function (state_182035){
var state_val_182036 = (state_182035[(1)]);
if((state_val_182036 === (1))){
var state_182035__$1 = state_182035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182035__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_182040 = [null,null,null,null,null,null,null];
(statearr_182040[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_182040[(1)] = (1));

return statearr_182040;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_182035){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182041){if((e182041 instanceof Object)){
var ex__9301__auto__ = e182041;
var statearr_182042_182044 = state_182035;
(statearr_182042_182044[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182045 = state_182035;
state_182035 = G__182045;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_182035){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_182035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_182043 = f__9319__auto__.call(null);
(statearr_182043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182043;
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
return (function (state_182061){
var state_val_182062 = (state_182061[(1)]);
if((state_val_182062 === (1))){
var state_182061__$1 = state_182061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182061__$1,(2),d,res__$1);
} else {
if((state_val_182062 === (2))){
var inst_182059 = (state_182061[(2)]);
var state_182061__$1 = state_182061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182061__$1,inst_182059);
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
var statearr_182066 = [null,null,null,null,null,null,null];
(statearr_182066[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_182066[(1)] = (1));

return statearr_182066;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_182061){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182067){if((e182067 instanceof Object)){
var ex__9301__auto__ = e182067;
var statearr_182068_182070 = state_182061;
(statearr_182068_182070[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182071 = state_182061;
state_182061 = G__182071;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_182061){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_182061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_182069 = f__9319__auto__.call(null);
(statearr_182069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182069;
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
return (function (state_182103){
var state_val_182104 = (state_182103[(1)]);
if((state_val_182104 === (1))){
var inst_182094 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_182103__$1 = state_182103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182103__$1,(2),inst_182094);
} else {
if((state_val_182104 === (2))){
var inst_182096 = (state_182103[(2)]);
var state_182103__$1 = state_182103;
if(cljs.core.truth_(inst_182096)){
var statearr_182105_182116 = state_182103__$1;
(statearr_182105_182116[(1)] = (3));

} else {
var statearr_182106_182117 = state_182103__$1;
(statearr_182106_182117[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182104 === (3))){
var state_182103__$1 = state_182103;
var statearr_182107_182118 = state_182103__$1;
(statearr_182107_182118[(2)] = line);

(statearr_182107_182118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182104 === (4))){
var inst_182099 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_182103__$1 = state_182103;
var statearr_182108_182119 = state_182103__$1;
(statearr_182108_182119[(2)] = inst_182099);

(statearr_182108_182119[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182104 === (5))){
var inst_182101 = (state_182103[(2)]);
var state_182103__$1 = state_182103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182103__$1,inst_182101);
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
var statearr_182112 = [null,null,null,null,null,null,null];
(statearr_182112[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_182112[(1)] = (1));

return statearr_182112;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_182103){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182113){if((e182113 instanceof Object)){
var ex__9301__auto__ = e182113;
var statearr_182114_182120 = state_182103;
(statearr_182114_182120[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182121 = state_182103;
state_182103 = G__182121;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_182103){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_182103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182115 = f__9319__auto__.call(null);
(statearr_182115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182115;
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
return (function (state_182192){
var state_val_182193 = (state_182192[(1)]);
if((state_val_182193 === (1))){
var state_182192__$1 = state_182192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182192__$1,(2),chan_verified_path);
} else {
if((state_val_182193 === (2))){
var inst_182179 = (state_182192[(7)]);
var inst_182178 = (state_182192[(8)]);
var inst_182178__$1 = (state_182192[(2)]);
var inst_182179__$1 = cljs.core.async.chan.call(null,(1));
var inst_182180 = (function (){var verified_path = inst_182178__$1;
var rc = inst_182179__$1;
return ((function (verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function (state_182198){
var state_val_182199 = (state_182198[(1)]);
if((state_val_182199 === (1))){
var inst_182194 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_182198__$1 = state_182198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182198__$1,(2),rc,inst_182194);
} else {
if((state_val_182199 === (2))){
var inst_182196 = (state_182198[(2)]);
var state_182198__$1 = state_182198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182198__$1,inst_182196);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_182203 = [null,null,null,null,null,null,null];
(statearr_182203[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_182203[(1)] = (1));

return statearr_182203;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_182198){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182204){if((e182204 instanceof Object)){
var ex__9301__auto__ = e182204;
var statearr_182205_182232 = state_182198;
(statearr_182205_182232[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182233 = state_182198;
state_182198 = G__182233;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_182198){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_182198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182206 = f__9319__auto__.call(null);
(statearr_182206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function (state_182210){
var state_val_182211 = (state_182210[(1)]);
if((state_val_182211 === (1))){
var state_182210__$1 = state_182210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182210__$1,(2),rc,verified_path);
} else {
if((state_val_182211 === (2))){
var inst_182208 = (state_182210[(2)]);
var state_182210__$1 = state_182210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182210__$1,inst_182208);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_182215 = [null,null,null,null,null,null,null];
(statearr_182215[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_182215[(1)] = (1));

return statearr_182215;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_182210){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182216){if((e182216 instanceof Object)){
var ex__9301__auto__ = e182216;
var statearr_182217_182234 = state_182210;
(statearr_182217_182234[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182235 = state_182210;
state_182210 = G__182235;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_182210){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_182210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182218 = f__9319__auto__.call(null);
(statearr_182218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_182179,inst_182178,inst_182178__$1,inst_182179__$1,state_val_182193,c__9318__auto__))
})();
var inst_182181 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_182178__$1);
var state_182192__$1 = (function (){var statearr_182219 = state_182192;
(statearr_182219[(7)] = inst_182179__$1);

(statearr_182219[(8)] = inst_182178__$1);

(statearr_182219[(9)] = inst_182180);

return statearr_182219;
})();
if(cljs.core.truth_(inst_182181)){
var statearr_182220_182236 = state_182192__$1;
(statearr_182220_182236[(1)] = (3));

} else {
var statearr_182221_182237 = state_182192__$1;
(statearr_182221_182237[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182193 === (3))){
var inst_182179 = (state_182192[(7)]);
var inst_182178 = (state_182192[(8)]);
var state_182192__$1 = state_182192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182192__$1,(6),inst_182179,inst_182178);
} else {
if((state_val_182193 === (4))){
var inst_182178 = (state_182192[(8)]);
var inst_182180 = (state_182192[(9)]);
var inst_182186 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_182178,inst_182180);
var state_182192__$1 = state_182192;
var statearr_182222_182238 = state_182192__$1;
(statearr_182222_182238[(2)] = inst_182186);

(statearr_182222_182238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182193 === (5))){
var inst_182179 = (state_182192[(7)]);
var inst_182188 = (state_182192[(2)]);
var state_182192__$1 = (function (){var statearr_182223 = state_182192;
(statearr_182223[(10)] = inst_182188);

return statearr_182223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182192__$1,(7),inst_182179);
} else {
if((state_val_182193 === (6))){
var inst_182184 = (state_182192[(2)]);
var state_182192__$1 = state_182192;
var statearr_182224_182239 = state_182192__$1;
(statearr_182224_182239[(2)] = inst_182184);

(statearr_182224_182239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182193 === (7))){
var inst_182190 = (state_182192[(2)]);
var state_182192__$1 = state_182192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182192__$1,inst_182190);
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
var statearr_182228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_182228[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_182228[(1)] = (1));

return statearr_182228;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_182192){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182229){if((e182229 instanceof Object)){
var ex__9301__auto__ = e182229;
var statearr_182230_182240 = state_182192;
(statearr_182230_182240[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182241 = state_182192;
state_182192 = G__182241;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_182192){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_182192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182231 = f__9319__auto__.call(null);
(statearr_182231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182231;
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
return (function (state_182276){
var state_val_182277 = (state_182276[(1)]);
if((state_val_182277 === (1))){
var state_182276__$1 = state_182276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182276__$1,(2),c);
} else {
if((state_val_182277 === (2))){
var inst_182267 = (state_182276[(7)]);
var inst_182267__$1 = (state_182276[(2)]);
var inst_182268 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_182267__$1);
var state_182276__$1 = (function (){var statearr_182278 = state_182276;
(statearr_182278[(7)] = inst_182267__$1);

return statearr_182278;
})();
if(cljs.core.truth_(inst_182268)){
var statearr_182279_182290 = state_182276__$1;
(statearr_182279_182290[(1)] = (3));

} else {
var statearr_182280_182291 = state_182276__$1;
(statearr_182280_182291[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182277 === (3))){
var inst_182267 = (state_182276[(7)]);
var inst_182270 = cljs.core.println.call(null,inst_182267);
var state_182276__$1 = state_182276;
var statearr_182281_182292 = state_182276__$1;
(statearr_182281_182292[(2)] = inst_182270);

(statearr_182281_182292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182277 === (4))){
var inst_182267 = (state_182276[(7)]);
var inst_182272 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_182267);
var state_182276__$1 = state_182276;
var statearr_182282_182293 = state_182276__$1;
(statearr_182282_182293[(2)] = inst_182272);

(statearr_182282_182293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182277 === (5))){
var inst_182274 = (state_182276[(2)]);
var state_182276__$1 = state_182276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182276__$1,inst_182274);
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
var statearr_182286 = [null,null,null,null,null,null,null,null];
(statearr_182286[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_182286[(1)] = (1));

return statearr_182286;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_182276){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182287){if((e182287 instanceof Object)){
var ex__9301__auto__ = e182287;
var statearr_182288_182294 = state_182276;
(statearr_182288_182294[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182295 = state_182276;
state_182276 = G__182295;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_182276){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_182276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182289 = f__9319__auto__.call(null);
(statearr_182289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182289;
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
return (function (state_182324){
var state_val_182325 = (state_182324[(1)]);
if((state_val_182325 === (1))){
var state_182324__$1 = state_182324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182324__$1,(2),rc,line);
} else {
if((state_val_182325 === (2))){
var inst_182322 = (state_182324[(2)]);
var state_182324__$1 = state_182324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182324__$1,inst_182322);
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
var statearr_182329 = [null,null,null,null,null,null,null];
(statearr_182329[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_182329[(1)] = (1));

return statearr_182329;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_182324){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182330){if((e182330 instanceof Object)){
var ex__9301__auto__ = e182330;
var statearr_182331_182346 = state_182324;
(statearr_182331_182346[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182347 = state_182324;
state_182324 = G__182347;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_182324){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_182324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_182332 = f__9319__auto__.call(null);
(statearr_182332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182332;
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
return (function (state_182337){
var state_val_182338 = (state_182337[(1)]);
if((state_val_182338 === (1))){
var inst_182333 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_182337__$1 = state_182337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182337__$1,(2),rc,inst_182333);
} else {
if((state_val_182338 === (2))){
var inst_182335 = (state_182337[(2)]);
var state_182337__$1 = state_182337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182337__$1,inst_182335);
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
var statearr_182342 = [null,null,null,null,null,null,null];
(statearr_182342[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_182342[(1)] = (1));

return statearr_182342;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_182337){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182343){if((e182343 instanceof Object)){
var ex__9301__auto__ = e182343;
var statearr_182344_182348 = state_182337;
(statearr_182344_182348[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182349 = state_182337;
state_182337 = G__182349;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_182337){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_182337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_182345 = f__9319__auto__.call(null);
(statearr_182345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182345;
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
return (function (state_182420){
var state_val_182421 = (state_182420[(1)]);
if((state_val_182421 === (1))){
var state_182420__$1 = state_182420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182420__$1,(2),chan_linkable_path);
} else {
if((state_val_182421 === (2))){
var inst_182407 = (state_182420[(7)]);
var inst_182406 = (state_182420[(8)]);
var inst_182406__$1 = (state_182420[(2)]);
var inst_182407__$1 = cljs.core.async.chan.call(null,(1));
var inst_182408 = (function (){var linkable_path = inst_182406__$1;
var rc = inst_182407__$1;
return ((function (linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function (state_182426){
var state_val_182427 = (state_182426[(1)]);
if((state_val_182427 === (1))){
var inst_182422 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_182426__$1 = state_182426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182426__$1,(2),rc,inst_182422);
} else {
if((state_val_182427 === (2))){
var inst_182424 = (state_182426[(2)]);
var state_182426__$1 = state_182426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182426__$1,inst_182424);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_182431 = [null,null,null,null,null,null,null];
(statearr_182431[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_182431[(1)] = (1));

return statearr_182431;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_182426){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182432){if((e182432 instanceof Object)){
var ex__9301__auto__ = e182432;
var statearr_182433_182460 = state_182426;
(statearr_182433_182460[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182461 = state_182426;
state_182426 = G__182461;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_182426){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_182426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182434 = f__9319__auto__.call(null);
(statearr_182434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function (state_182438){
var state_val_182439 = (state_182438[(1)]);
if((state_val_182439 === (1))){
var state_182438__$1 = state_182438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182438__$1,(2),rc,linkable_path);
} else {
if((state_val_182439 === (2))){
var inst_182436 = (state_182438[(2)]);
var state_182438__$1 = state_182438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182438__$1,inst_182436);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_182443 = [null,null,null,null,null,null,null];
(statearr_182443[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_182443[(1)] = (1));

return statearr_182443;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_182438){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182444){if((e182444 instanceof Object)){
var ex__9301__auto__ = e182444;
var statearr_182445_182462 = state_182438;
(statearr_182445_182462[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182463 = state_182438;
state_182438 = G__182463;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_182438){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_182438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182446 = f__9319__auto__.call(null);
(statearr_182446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_182407,inst_182406,inst_182406__$1,inst_182407__$1,state_val_182421,c__9318__auto__))
})();
var inst_182409 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_182406__$1);
var state_182420__$1 = (function (){var statearr_182447 = state_182420;
(statearr_182447[(9)] = inst_182408);

(statearr_182447[(7)] = inst_182407__$1);

(statearr_182447[(8)] = inst_182406__$1);

return statearr_182447;
})();
if(cljs.core.truth_(inst_182409)){
var statearr_182448_182464 = state_182420__$1;
(statearr_182448_182464[(1)] = (3));

} else {
var statearr_182449_182465 = state_182420__$1;
(statearr_182449_182465[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182421 === (3))){
var inst_182407 = (state_182420[(7)]);
var inst_182406 = (state_182420[(8)]);
var state_182420__$1 = state_182420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182420__$1,(6),inst_182407,inst_182406);
} else {
if((state_val_182421 === (4))){
var inst_182408 = (state_182420[(9)]);
var inst_182406 = (state_182420[(8)]);
var inst_182414 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_182406,inst_182408);
var state_182420__$1 = state_182420;
var statearr_182450_182466 = state_182420__$1;
(statearr_182450_182466[(2)] = inst_182414);

(statearr_182450_182466[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182421 === (5))){
var inst_182407 = (state_182420[(7)]);
var inst_182416 = (state_182420[(2)]);
var state_182420__$1 = (function (){var statearr_182451 = state_182420;
(statearr_182451[(10)] = inst_182416);

return statearr_182451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182420__$1,(7),inst_182407);
} else {
if((state_val_182421 === (6))){
var inst_182412 = (state_182420[(2)]);
var state_182420__$1 = state_182420;
var statearr_182452_182467 = state_182420__$1;
(statearr_182452_182467[(2)] = inst_182412);

(statearr_182452_182467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182421 === (7))){
var inst_182418 = (state_182420[(2)]);
var state_182420__$1 = state_182420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182420__$1,inst_182418);
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
var statearr_182456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_182456[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_182456[(1)] = (1));

return statearr_182456;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_182420){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182457){if((e182457 instanceof Object)){
var ex__9301__auto__ = e182457;
var statearr_182458_182468 = state_182420;
(statearr_182458_182468[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182469 = state_182420;
state_182420 = G__182469;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_182420){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_182420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182459 = f__9319__auto__.call(null);
(statearr_182459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182459;
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
return (function (state_182540){
var state_val_182541 = (state_182540[(1)]);
if((state_val_182541 === (1))){
var state_182540__$1 = state_182540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182540__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_182541 === (2))){
var inst_182527 = (state_182540[(7)]);
var inst_182526 = (state_182540[(8)]);
var inst_182526__$1 = (state_182540[(2)]);
var inst_182527__$1 = cljs.core.async.chan.call(null,(1));
var inst_182528 = (function (){var linkable_path = inst_182526__$1;
var rc = inst_182527__$1;
return ((function (linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function (state_182546){
var state_val_182547 = (state_182546[(1)]);
if((state_val_182547 === (1))){
var inst_182542 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_182546__$1 = state_182546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182546__$1,(2),rc,inst_182542);
} else {
if((state_val_182547 === (2))){
var inst_182544 = (state_182546[(2)]);
var state_182546__$1 = state_182546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182546__$1,inst_182544);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_182551 = [null,null,null,null,null,null,null];
(statearr_182551[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_182551[(1)] = (1));

return statearr_182551;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_182546){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182552){if((e182552 instanceof Object)){
var ex__9301__auto__ = e182552;
var statearr_182553_182580 = state_182546;
(statearr_182553_182580[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182581 = state_182546;
state_182546 = G__182581;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_182546){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_182546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182554 = f__9319__auto__.call(null);
(statearr_182554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function (state_182558){
var state_val_182559 = (state_182558[(1)]);
if((state_val_182559 === (1))){
var state_182558__$1 = state_182558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182558__$1,(2),rc,linkable_path);
} else {
if((state_val_182559 === (2))){
var inst_182556 = (state_182558[(2)]);
var state_182558__$1 = state_182558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182558__$1,inst_182556);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_182563 = [null,null,null,null,null,null,null];
(statearr_182563[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_182563[(1)] = (1));

return statearr_182563;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_182558){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182564){if((e182564 instanceof Object)){
var ex__9301__auto__ = e182564;
var statearr_182565_182582 = state_182558;
(statearr_182565_182582[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182583 = state_182558;
state_182558 = G__182583;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_182558){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_182558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182566 = f__9319__auto__.call(null);
(statearr_182566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_182527,inst_182526,inst_182526__$1,inst_182527__$1,state_val_182541,c__9318__auto__))
})();
var inst_182529 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_182526__$1);
var state_182540__$1 = (function (){var statearr_182567 = state_182540;
(statearr_182567[(7)] = inst_182527__$1);

(statearr_182567[(8)] = inst_182526__$1);

(statearr_182567[(9)] = inst_182528);

return statearr_182567;
})();
if(cljs.core.truth_(inst_182529)){
var statearr_182568_182584 = state_182540__$1;
(statearr_182568_182584[(1)] = (3));

} else {
var statearr_182569_182585 = state_182540__$1;
(statearr_182569_182585[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182541 === (3))){
var inst_182527 = (state_182540[(7)]);
var inst_182526 = (state_182540[(8)]);
var state_182540__$1 = state_182540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182540__$1,(6),inst_182527,inst_182526);
} else {
if((state_val_182541 === (4))){
var inst_182526 = (state_182540[(8)]);
var inst_182528 = (state_182540[(9)]);
var inst_182534 = drop_dot.core.pure_js.pathExists(inst_182526,inst_182528);
var state_182540__$1 = state_182540;
var statearr_182570_182586 = state_182540__$1;
(statearr_182570_182586[(2)] = inst_182534);

(statearr_182570_182586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182541 === (5))){
var inst_182527 = (state_182540[(7)]);
var inst_182536 = (state_182540[(2)]);
var state_182540__$1 = (function (){var statearr_182571 = state_182540;
(statearr_182571[(10)] = inst_182536);

return statearr_182571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182540__$1,(7),inst_182527);
} else {
if((state_val_182541 === (6))){
var inst_182532 = (state_182540[(2)]);
var state_182540__$1 = state_182540;
var statearr_182572_182587 = state_182540__$1;
(statearr_182572_182587[(2)] = inst_182532);

(statearr_182572_182587[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182541 === (7))){
var inst_182538 = (state_182540[(2)]);
var state_182540__$1 = state_182540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182540__$1,inst_182538);
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
var statearr_182576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_182576[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_182576[(1)] = (1));

return statearr_182576;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_182540){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182577){if((e182577 instanceof Object)){
var ex__9301__auto__ = e182577;
var statearr_182578_182588 = state_182540;
(statearr_182578_182588[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182589 = state_182540;
state_182540 = G__182589;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_182540){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_182540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182579 = f__9319__auto__.call(null);
(statearr_182579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182579;
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
return (function (state_182642){
var state_val_182643 = (state_182642[(1)]);
if((state_val_182643 === (1))){
var state_182642__$1 = state_182642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182642__$1,(2),c);
} else {
if((state_val_182643 === (2))){
var inst_182625 = (state_182642[(7)]);
var inst_182624 = (state_182642[(2)]);
var inst_182625__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_182624);
var inst_182626 = drop_dot.core.pure_js.getDirname(inst_182625__$1);
var inst_182627 = drop_dot.core.pure_js.getBasename(inst_182625__$1);
var inst_182628 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_182625__$1);
var state_182642__$1 = (function (){var statearr_182644 = state_182642;
(statearr_182644[(8)] = inst_182627);

(statearr_182644[(7)] = inst_182625__$1);

(statearr_182644[(9)] = inst_182626);

return statearr_182644;
})();
if(cljs.core.truth_(inst_182628)){
var statearr_182645_182656 = state_182642__$1;
(statearr_182645_182656[(1)] = (3));

} else {
var statearr_182646_182657 = state_182642__$1;
(statearr_182646_182657[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182643 === (3))){
var inst_182625 = (state_182642[(7)]);
var inst_182630 = [cljs.core.str(inst_182625)].join('');
var inst_182631 = cljs.core.println.call(null,inst_182630);
var state_182642__$1 = state_182642;
var statearr_182647_182658 = state_182642__$1;
(statearr_182647_182658[(2)] = inst_182631);

(statearr_182647_182658[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182643 === (4))){
var inst_182627 = (state_182642[(8)]);
var inst_182625 = (state_182642[(7)]);
var inst_182626 = (state_182642[(9)]);
var inst_182633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_182634 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_182626)].join('');
var inst_182635 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_182627),cljs.core.str(" "),cljs.core.str(inst_182625)].join('');
var inst_182636 = [inst_182634,inst_182635];
var inst_182637 = (new cljs.core.PersistentVector(null,2,(5),inst_182633,inst_182636,null));
var inst_182638 = drop_dot.core.exec_vec_of_commands.call(null,inst_182637);
var state_182642__$1 = state_182642;
var statearr_182648_182659 = state_182642__$1;
(statearr_182648_182659[(2)] = inst_182638);

(statearr_182648_182659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182643 === (5))){
var inst_182640 = (state_182642[(2)]);
var state_182642__$1 = state_182642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182642__$1,inst_182640);
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
var statearr_182652 = [null,null,null,null,null,null,null,null,null,null];
(statearr_182652[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__);

(statearr_182652[(1)] = (1));

return statearr_182652;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_182642){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182653){if((e182653 instanceof Object)){
var ex__9301__auto__ = e182653;
var statearr_182654_182660 = state_182642;
(statearr_182654_182660[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182661 = state_182642;
state_182642 = G__182661;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__ = function(state_182642){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_182642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182655 = f__9319__auto__.call(null);
(statearr_182655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182655;
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
return (function (state_182738){
var state_val_182739 = (state_182738[(1)]);
if((state_val_182739 === (7))){
var inst_182734 = (state_182738[(2)]);
var state_182738__$1 = state_182738;
var statearr_182741_182766 = state_182738__$1;
(statearr_182741_182766[(2)] = inst_182734);

(statearr_182741_182766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (1))){
var inst_182714 = chan_config;
var state_182738__$1 = (function (){var statearr_182742 = state_182738;
(statearr_182742[(7)] = inst_182714);

return statearr_182742;
})();
var statearr_182743_182767 = state_182738__$1;
(statearr_182743_182767[(2)] = null);

(statearr_182743_182767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (4))){
var inst_182717 = (state_182738[(8)]);
var inst_182717__$1 = (state_182738[(2)]);
var state_182738__$1 = (function (){var statearr_182744 = state_182738;
(statearr_182744[(8)] = inst_182717__$1);

return statearr_182744;
})();
if(cljs.core.truth_(inst_182717__$1)){
var statearr_182745_182768 = state_182738__$1;
(statearr_182745_182768[(1)] = (5));

} else {
var statearr_182746_182769 = state_182738__$1;
(statearr_182746_182769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (13))){
var inst_182714 = (state_182738[(7)]);
var inst_182730 = (state_182738[(2)]);
var tmp182740 = inst_182714;
var inst_182714__$1 = tmp182740;
var state_182738__$1 = (function (){var statearr_182747 = state_182738;
(statearr_182747[(9)] = inst_182730);

(statearr_182747[(7)] = inst_182714__$1);

return statearr_182747;
})();
var statearr_182748_182770 = state_182738__$1;
(statearr_182748_182770[(2)] = null);

(statearr_182748_182770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (6))){
var state_182738__$1 = state_182738;
var statearr_182749_182771 = state_182738__$1;
(statearr_182749_182771[(2)] = null);

(statearr_182749_182771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (3))){
var inst_182736 = (state_182738[(2)]);
var state_182738__$1 = state_182738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182738__$1,inst_182736);
} else {
if((state_val_182739 === (12))){
var state_182738__$1 = state_182738;
var statearr_182750_182772 = state_182738__$1;
(statearr_182750_182772[(2)] = null);

(statearr_182750_182772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (2))){
var inst_182714 = (state_182738[(7)]);
var state_182738__$1 = state_182738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182738__$1,(4),inst_182714);
} else {
if((state_val_182739 === (11))){
var inst_182717 = (state_182738[(8)]);
var inst_182727 = drop_dot.core.link_line.call(null,inst_182717);
var state_182738__$1 = state_182738;
var statearr_182751_182773 = state_182738__$1;
(statearr_182751_182773[(2)] = inst_182727);

(statearr_182751_182773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (9))){
var state_182738__$1 = state_182738;
var statearr_182752_182774 = state_182738__$1;
(statearr_182752_182774[(2)] = null);

(statearr_182752_182774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (5))){
var inst_182719 = cljs.core._EQ_.call(null,cmd,"drop");
var state_182738__$1 = state_182738;
if(inst_182719){
var statearr_182753_182775 = state_182738__$1;
(statearr_182753_182775[(1)] = (8));

} else {
var statearr_182754_182776 = state_182738__$1;
(statearr_182754_182776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (10))){
var inst_182724 = (state_182738[(2)]);
var inst_182725 = cljs.core._EQ_.call(null,cmd,"link");
var state_182738__$1 = (function (){var statearr_182755 = state_182738;
(statearr_182755[(10)] = inst_182724);

return statearr_182755;
})();
if(inst_182725){
var statearr_182756_182777 = state_182738__$1;
(statearr_182756_182777[(1)] = (11));

} else {
var statearr_182757_182778 = state_182738__$1;
(statearr_182757_182778[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_182739 === (8))){
var inst_182717 = (state_182738[(8)]);
var inst_182721 = drop_dot.core.drop_line.call(null,inst_182717);
var state_182738__$1 = state_182738;
var statearr_182758_182779 = state_182738__$1;
(statearr_182758_182779[(2)] = inst_182721);

(statearr_182758_182779[(1)] = (10));


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
var statearr_182762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_182762[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_182762[(1)] = (1));

return statearr_182762;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_182738){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182763){if((e182763 instanceof Object)){
var ex__9301__auto__ = e182763;
var statearr_182764_182780 = state_182738;
(statearr_182764_182780[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182781 = state_182738;
state_182738 = G__182781;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_182738){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_182738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_182765 = f__9319__auto__.call(null);
(statearr_182765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_182765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___182878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___182878,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___182878,c){
return (function (state_182842){
var state_val_182843 = (state_182842[(1)]);
if((state_val_182843 === (1))){
var inst_182832 = (state_182842[(7)]);
var inst_182830 = (state_182842[(8)]);
var inst_182831 = (state_182842[(9)]);
var inst_182830__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_182831__$1 = cljs.core.async.chan.call(null,(1));
var inst_182832__$1 = (function (){var res = inst_182830__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_182831__$1;
return ((function (res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c){
return (function (state_182847){
var state_val_182848 = (state_182847[(1)]);
if((state_val_182848 === (1))){
var state_182847__$1 = state_182847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182847__$1,(2),wcc,res__$1);
} else {
if((state_val_182848 === (2))){
var inst_182845 = (state_182847[(2)]);
var state_182847__$1 = state_182847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182847__$1,inst_182845);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_182852 = [null,null,null,null,null,null,null];
(statearr_182852[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_182852[(1)] = (1));

return statearr_182852;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_182847){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182853){if((e182853 instanceof Object)){
var ex__9301__auto__ = e182853;
var statearr_182854_182879 = state_182847;
(statearr_182854_182879[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182880 = state_182847;
state_182847 = G__182880;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_182847){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_182847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c))
})();
var state__9320__auto__ = (function (){var statearr_182855 = f__9319__auto__.call(null);
(statearr_182855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_182832,inst_182830,inst_182831,inst_182830__$1,inst_182831__$1,state_val_182843,c__9318__auto___182878,c))
})();
var inst_182833 = inst_182830__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_182832__$1);
var state_182842__$1 = (function (){var statearr_182856 = state_182842;
(statearr_182856[(7)] = inst_182832__$1);

(statearr_182856[(10)] = inst_182833);

(statearr_182856[(8)] = inst_182830__$1);

(statearr_182856[(9)] = inst_182831__$1);

return statearr_182856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182842__$1,(2),inst_182831__$1);
} else {
if((state_val_182843 === (2))){
var inst_182832 = (state_182842[(7)]);
var inst_182833 = (state_182842[(10)]);
var inst_182830 = (state_182842[(8)]);
var inst_182831 = (state_182842[(9)]);
var inst_182835 = (state_182842[(2)]);
var inst_182836 = [cljs.core.str(inst_182835)].join('');
var inst_182837 = parseInt(inst_182836);
var inst_182838 = (function (){var res = inst_182830;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_182831;
var wcc_jammer = inst_182832;
var get_wc = inst_182833;
var lines = inst_182837;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,state_val_182843,c__9318__auto___182878,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,state_val_182843,c__9318__auto___182878,c))
})();
var inst_182839 = (function (){var res = inst_182830;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_182831;
var wcc_jammer = inst_182832;
var get_wc = inst_182833;
var lines = inst_182837;
var close_if_done = inst_182838;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c){
return (function (state_182861){
var state_val_182862 = (state_182861[(1)]);
if((state_val_182862 === (1))){
var state_182861__$1 = state_182861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_182861__$1,(2),c,res__$1);
} else {
if((state_val_182862 === (2))){
var inst_182858 = (state_182861[(2)]);
var inst_182859 = close_if_done.call(null);
var state_182861__$1 = (function (){var statearr_182863 = state_182861;
(statearr_182863[(7)] = inst_182858);

return statearr_182863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182861__$1,inst_182859);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_182867 = [null,null,null,null,null,null,null,null];
(statearr_182867[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_182867[(1)] = (1));

return statearr_182867;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_182861){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182868){if((e182868 instanceof Object)){
var ex__9301__auto__ = e182868;
var statearr_182869_182881 = state_182861;
(statearr_182869_182881[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182882 = state_182861;
state_182861 = G__182882;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_182861){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_182861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c))
})();
var state__9320__auto__ = (function (){var statearr_182870 = f__9319__auto__.call(null);
(statearr_182870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_182870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_182832,inst_182833,inst_182830,inst_182831,inst_182835,inst_182836,inst_182837,inst_182838,state_val_182843,c__9318__auto___182878,c))
})();
var inst_182840 = inst_182830.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_182839);
var state_182842__$1 = state_182842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182842__$1,inst_182840);
} else {
return null;
}
}
});})(c__9318__auto___182878,c))
;
return ((function (switch__9297__auto__,c__9318__auto___182878,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_182874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_182874[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_182874[(1)] = (1));

return statearr_182874;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_182842){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_182842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e182875){if((e182875 instanceof Object)){
var ex__9301__auto__ = e182875;
var statearr_182876_182883 = state_182842;
(statearr_182876_182883[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e182875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__182884 = state_182842;
state_182842 = G__182884;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_182842){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_182842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___182878,c))
})();
var state__9320__auto__ = (function (){var statearr_182877 = f__9319__auto__.call(null);
(statearr_182877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___182878);

return statearr_182877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___182878,c))
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
var len__7018__auto___182886 = arguments.length;
var i__7019__auto___182887 = (0);
while(true){
if((i__7019__auto___182887 < len__7018__auto___182886)){
args__7025__auto__.push((arguments[i__7019__auto___182887]));

var G__182888 = (i__7019__auto___182887 + (1));
i__7019__auto___182887 = G__182888;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq182885){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq182885));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map