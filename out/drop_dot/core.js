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
return (function (state_314838){
var state_val_314839 = (state_314838[(1)]);
if((state_val_314839 === (1))){
var state_314838__$1 = state_314838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314838__$1,(2),c,arg);
} else {
if((state_val_314839 === (2))){
var inst_314836 = (state_314838[(2)]);
var state_314838__$1 = state_314838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314838__$1,inst_314836);
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
var statearr_314843 = [null,null,null,null,null,null,null];
(statearr_314843[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_314843[(1)] = (1));

return statearr_314843;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_314838){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_314838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e314844){if((e314844 instanceof Object)){
var ex__10429__auto__ = e314844;
var statearr_314845_314847 = state_314838;
(statearr_314845_314847[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e314844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__314848 = state_314838;
state_314838 = G__314848;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_314838){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_314838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_314846 = f__10447__auto__.call(null);
(statearr_314846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_314846;
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
return (function (state_314864){
var state_val_314865 = (state_314864[(1)]);
if((state_val_314865 === (1))){
var state_314864__$1 = state_314864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314864__$1,(2),c,arg);
} else {
if((state_val_314865 === (2))){
var inst_314862 = (state_314864[(2)]);
var state_314864__$1 = state_314864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314864__$1,inst_314862);
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
var statearr_314869 = [null,null,null,null,null,null,null];
(statearr_314869[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_314869[(1)] = (1));

return statearr_314869;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_314864){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_314864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e314870){if((e314870 instanceof Object)){
var ex__10429__auto__ = e314870;
var statearr_314871_314873 = state_314864;
(statearr_314871_314873[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e314870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__314874 = state_314864;
state_314864 = G__314874;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_314864){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_314864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_314872 = f__10447__auto__.call(null);
(statearr_314872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_314872;
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
return (function (state_314951){
var state_val_314952 = (state_314951[(1)]);
if((state_val_314952 === (1))){
var state_314951__$1 = state_314951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314951__$1,(2),input_chan);
} else {
if((state_val_314952 === (2))){
var inst_314929 = (state_314951[(2)]);
var inst_314930 = inst_314929;
var state_314951__$1 = (function (){var statearr_314953 = state_314951;
(statearr_314953[(7)] = inst_314930);

return statearr_314953;
})();
var statearr_314954_314981 = state_314951__$1;
(statearr_314954_314981[(2)] = null);

(statearr_314954_314981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_314952 === (3))){
var inst_314930 = (state_314951[(7)]);
var inst_314932 = cljs.core.count.call(null,inst_314930);
var inst_314933 = cljs.core._EQ_.call(null,inst_314932,(0));
var state_314951__$1 = state_314951;
if(inst_314933){
var statearr_314955_314982 = state_314951__$1;
(statearr_314955_314982[(1)] = (5));

} else {
var statearr_314956_314983 = state_314951__$1;
(statearr_314956_314983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_314952 === (4))){
var inst_314949 = (state_314951[(2)]);
var state_314951__$1 = state_314951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314951__$1,inst_314949);
} else {
if((state_val_314952 === (5))){
var inst_314935 = cljs.core.println.call(null,"done");
var state_314951__$1 = state_314951;
var statearr_314957_314984 = state_314951__$1;
(statearr_314957_314984[(2)] = inst_314935);

(statearr_314957_314984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_314952 === (6))){
var inst_314930 = (state_314951[(7)]);
var inst_314937 = cljs.core.async.chan.call(null);
var inst_314938 = cljs.core.first.call(null,inst_314930);
var inst_314939 = (function (){var v = inst_314930;
var rc = inst_314937;
var cmd = inst_314938;
return ((function (v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__){
return (function (state_314961){
var state_val_314962 = (state_314961[(1)]);
if((state_val_314962 === (1))){
var state_314961__$1 = state_314961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_314961__$1,(2),rc,res);
} else {
if((state_val_314962 === (2))){
var inst_314959 = (state_314961[(2)]);
var state_314961__$1 = state_314961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_314961__$1,inst_314959);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_314966 = [null,null,null,null,null,null,null];
(statearr_314966[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_314966[(1)] = (1));

return statearr_314966;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_314961){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_314961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e314967){if((e314967 instanceof Object)){
var ex__10429__auto__ = e314967;
var statearr_314968_314985 = state_314961;
(statearr_314968_314985[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e314967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__314986 = state_314961;
state_314961 = G__314986;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_314961){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_314961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_314969 = f__10447__auto__.call(null);
(statearr_314969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_314969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_314930,inst_314937,inst_314938,state_val_314952,c__10446__auto__))
})();
var inst_314940 = drop_dot.core.pure_js.execAndPrint(inst_314938,inst_314939);
var state_314951__$1 = (function (){var statearr_314970 = state_314951;
(statearr_314970[(8)] = inst_314940);

return statearr_314970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_314951__$1,(8),inst_314937);
} else {
if((state_val_314952 === (7))){
var inst_314947 = (state_314951[(2)]);
var state_314951__$1 = state_314951;
var statearr_314971_314987 = state_314951__$1;
(statearr_314971_314987[(2)] = inst_314947);

(statearr_314971_314987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_314952 === (8))){
var inst_314930 = (state_314951[(7)]);
var inst_314942 = (state_314951[(2)]);
var inst_314943 = cljs.core.rest.call(null,inst_314930);
var inst_314944 = cljs.core.vec.call(null,inst_314943);
var inst_314930__$1 = inst_314944;
var state_314951__$1 = (function (){var statearr_314972 = state_314951;
(statearr_314972[(9)] = inst_314942);

(statearr_314972[(7)] = inst_314930__$1);

return statearr_314972;
})();
var statearr_314973_314988 = state_314951__$1;
(statearr_314973_314988[(2)] = null);

(statearr_314973_314988[(1)] = (3));


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
var statearr_314977 = [null,null,null,null,null,null,null,null,null,null];
(statearr_314977[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_314977[(1)] = (1));

return statearr_314977;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_314951){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_314951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e314978){if((e314978 instanceof Object)){
var ex__10429__auto__ = e314978;
var statearr_314979_314989 = state_314951;
(statearr_314979_314989[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_314951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e314978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__314990 = state_314951;
state_314951 = G__314990;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_314951){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_314951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_314980 = f__10447__auto__.call(null);
(statearr_314980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_314980;
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
return (function (state_315002){
var state_val_315003 = (state_315002[(1)]);
if((state_val_315003 === (1))){
var state_315002__$1 = state_315002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315002__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_315007 = [null,null,null,null,null,null,null];
(statearr_315007[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_315007[(1)] = (1));

return statearr_315007;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_315002){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315008){if((e315008 instanceof Object)){
var ex__10429__auto__ = e315008;
var statearr_315009_315011 = state_315002;
(statearr_315009_315011[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315012 = state_315002;
state_315002 = G__315012;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_315002){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_315002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_315010 = f__10447__auto__.call(null);
(statearr_315010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315010;
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
return (function (state_315028){
var state_val_315029 = (state_315028[(1)]);
if((state_val_315029 === (1))){
var state_315028__$1 = state_315028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315028__$1,(2),d,res__$1);
} else {
if((state_val_315029 === (2))){
var inst_315026 = (state_315028[(2)]);
var state_315028__$1 = state_315028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315028__$1,inst_315026);
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
var statearr_315033 = [null,null,null,null,null,null,null];
(statearr_315033[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_315033[(1)] = (1));

return statearr_315033;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_315028){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315034){if((e315034 instanceof Object)){
var ex__10429__auto__ = e315034;
var statearr_315035_315037 = state_315028;
(statearr_315035_315037[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315038 = state_315028;
state_315028 = G__315038;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_315028){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_315028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_315036 = f__10447__auto__.call(null);
(statearr_315036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315036;
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
return (function (state_315070){
var state_val_315071 = (state_315070[(1)]);
if((state_val_315071 === (1))){
var inst_315061 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_315070__$1 = state_315070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315070__$1,(2),inst_315061);
} else {
if((state_val_315071 === (2))){
var inst_315063 = (state_315070[(2)]);
var state_315070__$1 = state_315070;
if(cljs.core.truth_(inst_315063)){
var statearr_315072_315083 = state_315070__$1;
(statearr_315072_315083[(1)] = (3));

} else {
var statearr_315073_315084 = state_315070__$1;
(statearr_315073_315084[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315071 === (3))){
var state_315070__$1 = state_315070;
var statearr_315074_315085 = state_315070__$1;
(statearr_315074_315085[(2)] = line);

(statearr_315074_315085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315071 === (4))){
var inst_315066 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_315070__$1 = state_315070;
var statearr_315075_315086 = state_315070__$1;
(statearr_315075_315086[(2)] = inst_315066);

(statearr_315075_315086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315071 === (5))){
var inst_315068 = (state_315070[(2)]);
var state_315070__$1 = state_315070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315070__$1,inst_315068);
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
var statearr_315079 = [null,null,null,null,null,null,null];
(statearr_315079[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_315079[(1)] = (1));

return statearr_315079;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_315070){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315080){if((e315080 instanceof Object)){
var ex__10429__auto__ = e315080;
var statearr_315081_315087 = state_315070;
(statearr_315081_315087[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315088 = state_315070;
state_315070 = G__315088;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_315070){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_315070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315082 = f__10447__auto__.call(null);
(statearr_315082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315082;
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
return (function (state_315159){
var state_val_315160 = (state_315159[(1)]);
if((state_val_315160 === (1))){
var state_315159__$1 = state_315159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315159__$1,(2),chan_verified_path);
} else {
if((state_val_315160 === (2))){
var inst_315145 = (state_315159[(7)]);
var inst_315146 = (state_315159[(8)]);
var inst_315145__$1 = (state_315159[(2)]);
var inst_315146__$1 = cljs.core.async.chan.call(null,(1));
var inst_315147 = (function (){var verified_path = inst_315145__$1;
var rc = inst_315146__$1;
return ((function (verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function (state_315165){
var state_val_315166 = (state_315165[(1)]);
if((state_val_315166 === (1))){
var inst_315161 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_315165__$1 = state_315165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315165__$1,(2),rc,inst_315161);
} else {
if((state_val_315166 === (2))){
var inst_315163 = (state_315165[(2)]);
var state_315165__$1 = state_315165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315165__$1,inst_315163);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_315170 = [null,null,null,null,null,null,null];
(statearr_315170[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_315170[(1)] = (1));

return statearr_315170;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_315165){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315171){if((e315171 instanceof Object)){
var ex__10429__auto__ = e315171;
var statearr_315172_315199 = state_315165;
(statearr_315172_315199[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315200 = state_315165;
state_315165 = G__315200;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_315165){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_315165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315173 = f__10447__auto__.call(null);
(statearr_315173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_315173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function (state_315177){
var state_val_315178 = (state_315177[(1)]);
if((state_val_315178 === (1))){
var state_315177__$1 = state_315177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315177__$1,(2),rc,verified_path);
} else {
if((state_val_315178 === (2))){
var inst_315175 = (state_315177[(2)]);
var state_315177__$1 = state_315177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315177__$1,inst_315175);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_315182 = [null,null,null,null,null,null,null];
(statearr_315182[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_315182[(1)] = (1));

return statearr_315182;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_315177){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315183){if((e315183 instanceof Object)){
var ex__10429__auto__ = e315183;
var statearr_315184_315201 = state_315177;
(statearr_315184_315201[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315202 = state_315177;
state_315177 = G__315202;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_315177){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_315177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315185 = f__10447__auto__.call(null);
(statearr_315185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_315185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_315145,inst_315146,inst_315145__$1,inst_315146__$1,state_val_315160,c__10446__auto__))
})();
var inst_315148 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_315145__$1);
var state_315159__$1 = (function (){var statearr_315186 = state_315159;
(statearr_315186[(7)] = inst_315145__$1);

(statearr_315186[(9)] = inst_315147);

(statearr_315186[(8)] = inst_315146__$1);

return statearr_315186;
})();
if(cljs.core.truth_(inst_315148)){
var statearr_315187_315203 = state_315159__$1;
(statearr_315187_315203[(1)] = (3));

} else {
var statearr_315188_315204 = state_315159__$1;
(statearr_315188_315204[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315160 === (3))){
var inst_315145 = (state_315159[(7)]);
var inst_315146 = (state_315159[(8)]);
var state_315159__$1 = state_315159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315159__$1,(6),inst_315146,inst_315145);
} else {
if((state_val_315160 === (4))){
var inst_315145 = (state_315159[(7)]);
var inst_315147 = (state_315159[(9)]);
var inst_315153 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_315145,inst_315147);
var state_315159__$1 = state_315159;
var statearr_315189_315205 = state_315159__$1;
(statearr_315189_315205[(2)] = inst_315153);

(statearr_315189_315205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315160 === (5))){
var inst_315146 = (state_315159[(8)]);
var inst_315155 = (state_315159[(2)]);
var state_315159__$1 = (function (){var statearr_315190 = state_315159;
(statearr_315190[(10)] = inst_315155);

return statearr_315190;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315159__$1,(7),inst_315146);
} else {
if((state_val_315160 === (6))){
var inst_315151 = (state_315159[(2)]);
var state_315159__$1 = state_315159;
var statearr_315191_315206 = state_315159__$1;
(statearr_315191_315206[(2)] = inst_315151);

(statearr_315191_315206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315160 === (7))){
var inst_315157 = (state_315159[(2)]);
var state_315159__$1 = state_315159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315159__$1,inst_315157);
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
var statearr_315195 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_315195[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_315195[(1)] = (1));

return statearr_315195;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_315159){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315196){if((e315196 instanceof Object)){
var ex__10429__auto__ = e315196;
var statearr_315197_315207 = state_315159;
(statearr_315197_315207[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315208 = state_315159;
state_315159 = G__315208;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_315159){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_315159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315198 = f__10447__auto__.call(null);
(statearr_315198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315198;
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
return (function (state_315243){
var state_val_315244 = (state_315243[(1)]);
if((state_val_315244 === (1))){
var state_315243__$1 = state_315243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315243__$1,(2),c);
} else {
if((state_val_315244 === (2))){
var inst_315234 = (state_315243[(7)]);
var inst_315234__$1 = (state_315243[(2)]);
var inst_315235 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_315234__$1);
var state_315243__$1 = (function (){var statearr_315245 = state_315243;
(statearr_315245[(7)] = inst_315234__$1);

return statearr_315245;
})();
if(cljs.core.truth_(inst_315235)){
var statearr_315246_315257 = state_315243__$1;
(statearr_315246_315257[(1)] = (3));

} else {
var statearr_315247_315258 = state_315243__$1;
(statearr_315247_315258[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315244 === (3))){
var inst_315234 = (state_315243[(7)]);
var inst_315237 = cljs.core.println.call(null,inst_315234);
var state_315243__$1 = state_315243;
var statearr_315248_315259 = state_315243__$1;
(statearr_315248_315259[(2)] = inst_315237);

(statearr_315248_315259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315244 === (4))){
var inst_315234 = (state_315243[(7)]);
var inst_315239 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_315234);
var state_315243__$1 = state_315243;
var statearr_315249_315260 = state_315243__$1;
(statearr_315249_315260[(2)] = inst_315239);

(statearr_315249_315260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315244 === (5))){
var inst_315241 = (state_315243[(2)]);
var state_315243__$1 = state_315243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315243__$1,inst_315241);
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
var statearr_315253 = [null,null,null,null,null,null,null,null];
(statearr_315253[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_315253[(1)] = (1));

return statearr_315253;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_315243){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315254){if((e315254 instanceof Object)){
var ex__10429__auto__ = e315254;
var statearr_315255_315261 = state_315243;
(statearr_315255_315261[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315262 = state_315243;
state_315243 = G__315262;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_315243){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_315243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315256 = f__10447__auto__.call(null);
(statearr_315256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315256;
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
return (function (state_315291){
var state_val_315292 = (state_315291[(1)]);
if((state_val_315292 === (1))){
var state_315291__$1 = state_315291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315291__$1,(2),rc,line);
} else {
if((state_val_315292 === (2))){
var inst_315289 = (state_315291[(2)]);
var state_315291__$1 = state_315291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315291__$1,inst_315289);
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
var statearr_315296 = [null,null,null,null,null,null,null];
(statearr_315296[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_315296[(1)] = (1));

return statearr_315296;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_315291){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315297){if((e315297 instanceof Object)){
var ex__10429__auto__ = e315297;
var statearr_315298_315313 = state_315291;
(statearr_315298_315313[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315314 = state_315291;
state_315291 = G__315314;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_315291){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_315291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_315299 = f__10447__auto__.call(null);
(statearr_315299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315299;
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
return (function (state_315304){
var state_val_315305 = (state_315304[(1)]);
if((state_val_315305 === (1))){
var inst_315300 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_315304__$1 = state_315304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315304__$1,(2),rc,inst_315300);
} else {
if((state_val_315305 === (2))){
var inst_315302 = (state_315304[(2)]);
var state_315304__$1 = state_315304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315304__$1,inst_315302);
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
var statearr_315309 = [null,null,null,null,null,null,null];
(statearr_315309[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_315309[(1)] = (1));

return statearr_315309;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_315304){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315310){if((e315310 instanceof Object)){
var ex__10429__auto__ = e315310;
var statearr_315311_315315 = state_315304;
(statearr_315311_315315[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315316 = state_315304;
state_315304 = G__315316;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_315304){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_315304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_315312 = f__10447__auto__.call(null);
(statearr_315312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315312;
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
drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking(chan_linkable_path){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_315387){
var state_val_315388 = (state_315387[(1)]);
if((state_val_315388 === (1))){
var state_315387__$1 = state_315387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315387__$1,(2),chan_linkable_path);
} else {
if((state_val_315388 === (2))){
var inst_315373 = (state_315387[(7)]);
var inst_315374 = (state_315387[(8)]);
var inst_315373__$1 = (state_315387[(2)]);
var inst_315374__$1 = cljs.core.async.chan.call(null,(1));
var inst_315375 = (function (){var linkable_path = inst_315373__$1;
var rc = inst_315374__$1;
return ((function (linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function (state_315393){
var state_val_315394 = (state_315393[(1)]);
if((state_val_315394 === (1))){
var inst_315389 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_315393__$1 = state_315393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315393__$1,(2),rc,inst_315389);
} else {
if((state_val_315394 === (2))){
var inst_315391 = (state_315393[(2)]);
var state_315393__$1 = state_315393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315393__$1,inst_315391);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_315398 = [null,null,null,null,null,null,null];
(statearr_315398[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_315398[(1)] = (1));

return statearr_315398;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_315393){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315399){if((e315399 instanceof Object)){
var ex__10429__auto__ = e315399;
var statearr_315400_315427 = state_315393;
(statearr_315400_315427[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315428 = state_315393;
state_315393 = G__315428;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_315393){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_315393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315401 = f__10447__auto__.call(null);
(statearr_315401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_315401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function (state_315405){
var state_val_315406 = (state_315405[(1)]);
if((state_val_315406 === (1))){
var state_315405__$1 = state_315405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315405__$1,(2),rc,linkable_path);
} else {
if((state_val_315406 === (2))){
var inst_315403 = (state_315405[(2)]);
var state_315405__$1 = state_315405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315405__$1,inst_315403);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_315410 = [null,null,null,null,null,null,null];
(statearr_315410[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_315410[(1)] = (1));

return statearr_315410;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_315405){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315411){if((e315411 instanceof Object)){
var ex__10429__auto__ = e315411;
var statearr_315412_315429 = state_315405;
(statearr_315412_315429[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315430 = state_315405;
state_315405 = G__315430;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_315405){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_315405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315413 = f__10447__auto__.call(null);
(statearr_315413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_315413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_315373,inst_315374,inst_315373__$1,inst_315374__$1,state_val_315388,c__10446__auto__))
})();
var inst_315376 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_315373__$1);
var state_315387__$1 = (function (){var statearr_315414 = state_315387;
(statearr_315414[(9)] = inst_315375);

(statearr_315414[(7)] = inst_315373__$1);

(statearr_315414[(8)] = inst_315374__$1);

return statearr_315414;
})();
if(cljs.core.truth_(inst_315376)){
var statearr_315415_315431 = state_315387__$1;
(statearr_315415_315431[(1)] = (3));

} else {
var statearr_315416_315432 = state_315387__$1;
(statearr_315416_315432[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315388 === (3))){
var inst_315373 = (state_315387[(7)]);
var inst_315374 = (state_315387[(8)]);
var state_315387__$1 = state_315387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315387__$1,(6),inst_315374,inst_315373);
} else {
if((state_val_315388 === (4))){
var inst_315375 = (state_315387[(9)]);
var inst_315373 = (state_315387[(7)]);
var inst_315381 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_315373,inst_315375);
var state_315387__$1 = state_315387;
var statearr_315417_315433 = state_315387__$1;
(statearr_315417_315433[(2)] = inst_315381);

(statearr_315417_315433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315388 === (5))){
var inst_315374 = (state_315387[(8)]);
var inst_315383 = (state_315387[(2)]);
var state_315387__$1 = (function (){var statearr_315418 = state_315387;
(statearr_315418[(10)] = inst_315383);

return statearr_315418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315387__$1,(7),inst_315374);
} else {
if((state_val_315388 === (6))){
var inst_315379 = (state_315387[(2)]);
var state_315387__$1 = state_315387;
var statearr_315419_315434 = state_315387__$1;
(statearr_315419_315434[(2)] = inst_315379);

(statearr_315419_315434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315388 === (7))){
var inst_315385 = (state_315387[(2)]);
var state_315387__$1 = state_315387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315387__$1,inst_315385);
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
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_315423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_315423[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_315423[(1)] = (1));

return statearr_315423;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_315387){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315424){if((e315424 instanceof Object)){
var ex__10429__auto__ = e315424;
var statearr_315425_315435 = state_315387;
(statearr_315425_315435[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315436 = state_315387;
state_315387 = G__315436;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_315387){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_315387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315426 = f__10447__auto__.call(null);
(statearr_315426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_315498){
var state_val_315499 = (state_315498[(1)]);
if((state_val_315499 === (7))){
var inst_315494 = (state_315498[(2)]);
var state_315498__$1 = state_315498;
var statearr_315500_315521 = state_315498__$1;
(statearr_315500_315521[(2)] = inst_315494);

(statearr_315500_315521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (1))){
var inst_315479 = chan_config;
var state_315498__$1 = (function (){var statearr_315501 = state_315498;
(statearr_315501[(7)] = inst_315479);

return statearr_315501;
})();
var statearr_315502_315522 = state_315498__$1;
(statearr_315502_315522[(2)] = null);

(statearr_315502_315522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (4))){
var inst_315482 = (state_315498[(8)]);
var inst_315482__$1 = (state_315498[(2)]);
var state_315498__$1 = (function (){var statearr_315503 = state_315498;
(statearr_315503[(8)] = inst_315482__$1);

return statearr_315503;
})();
if(cljs.core.truth_(inst_315482__$1)){
var statearr_315504_315523 = state_315498__$1;
(statearr_315504_315523[(1)] = (5));

} else {
var statearr_315505_315524 = state_315498__$1;
(statearr_315505_315524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (6))){
var state_315498__$1 = state_315498;
var statearr_315506_315525 = state_315498__$1;
(statearr_315506_315525[(2)] = null);

(statearr_315506_315525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (3))){
var inst_315496 = (state_315498[(2)]);
var state_315498__$1 = state_315498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315498__$1,inst_315496);
} else {
if((state_val_315499 === (2))){
var inst_315479 = (state_315498[(7)]);
var state_315498__$1 = state_315498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315498__$1,(4),inst_315479);
} else {
if((state_val_315499 === (9))){
var inst_315482 = (state_315498[(8)]);
var inst_315488 = cljs.core.println.call(null,inst_315482);
var state_315498__$1 = state_315498;
var statearr_315508_315526 = state_315498__$1;
(statearr_315508_315526[(2)] = inst_315488);

(statearr_315508_315526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (5))){
var inst_315484 = cljs.core._EQ_.call(null,cmd,"drop");
var state_315498__$1 = state_315498;
if(inst_315484){
var statearr_315509_315527 = state_315498__$1;
(statearr_315509_315527[(1)] = (8));

} else {
var statearr_315510_315528 = state_315498__$1;
(statearr_315510_315528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (10))){
var inst_315479 = (state_315498[(7)]);
var inst_315490 = (state_315498[(2)]);
var tmp315507 = inst_315479;
var inst_315479__$1 = tmp315507;
var state_315498__$1 = (function (){var statearr_315511 = state_315498;
(statearr_315511[(7)] = inst_315479__$1);

(statearr_315511[(9)] = inst_315490);

return statearr_315511;
})();
var statearr_315512_315529 = state_315498__$1;
(statearr_315512_315529[(2)] = null);

(statearr_315512_315529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_315499 === (8))){
var inst_315482 = (state_315498[(8)]);
var inst_315486 = drop_dot.core.drop_line.call(null,inst_315482);
var state_315498__$1 = state_315498;
var statearr_315513_315530 = state_315498__$1;
(statearr_315513_315530[(2)] = inst_315486);

(statearr_315513_315530[(1)] = (10));


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
});})(c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0 = (function (){
var statearr_315517 = [null,null,null,null,null,null,null,null,null,null];
(statearr_315517[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_315517[(1)] = (1));

return statearr_315517;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_315498){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315518){if((e315518 instanceof Object)){
var ex__10429__auto__ = e315518;
var statearr_315519_315531 = state_315498;
(statearr_315519_315531[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315532 = state_315498;
state_315498 = G__315532;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_315498){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_315498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_315520 = f__10447__auto__.call(null);
(statearr_315520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_315520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___315629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___315629,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___315629,c){
return (function (state_315593){
var state_val_315594 = (state_315593[(1)]);
if((state_val_315594 === (1))){
var inst_315581 = (state_315593[(7)]);
var inst_315582 = (state_315593[(8)]);
var inst_315583 = (state_315593[(9)]);
var inst_315581__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_315582__$1 = cljs.core.async.chan.call(null,(1));
var inst_315583__$1 = (function (){var res = inst_315581__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_315582__$1;
return ((function (res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c){
return (function (state_315598){
var state_val_315599 = (state_315598[(1)]);
if((state_val_315599 === (1))){
var state_315598__$1 = state_315598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315598__$1,(2),wcc,res__$1);
} else {
if((state_val_315599 === (2))){
var inst_315596 = (state_315598[(2)]);
var state_315598__$1 = state_315598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315598__$1,inst_315596);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_315603 = [null,null,null,null,null,null,null];
(statearr_315603[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_315603[(1)] = (1));

return statearr_315603;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_315598){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315604){if((e315604 instanceof Object)){
var ex__10429__auto__ = e315604;
var statearr_315605_315630 = state_315598;
(statearr_315605_315630[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315631 = state_315598;
state_315598 = G__315631;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_315598){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_315598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c))
})();
var state__10448__auto__ = (function (){var statearr_315606 = f__10447__auto__.call(null);
(statearr_315606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_315606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_315581,inst_315582,inst_315583,inst_315581__$1,inst_315582__$1,state_val_315594,c__10446__auto___315629,c))
})();
var inst_315584 = inst_315581__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_315583__$1);
var state_315593__$1 = (function (){var statearr_315607 = state_315593;
(statearr_315607[(7)] = inst_315581__$1);

(statearr_315607[(10)] = inst_315584);

(statearr_315607[(8)] = inst_315582__$1);

(statearr_315607[(9)] = inst_315583__$1);

return statearr_315607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_315593__$1,(2),inst_315582__$1);
} else {
if((state_val_315594 === (2))){
var inst_315581 = (state_315593[(7)]);
var inst_315584 = (state_315593[(10)]);
var inst_315582 = (state_315593[(8)]);
var inst_315583 = (state_315593[(9)]);
var inst_315586 = (state_315593[(2)]);
var inst_315587 = [cljs.core.str(inst_315586)].join('');
var inst_315588 = parseInt(inst_315587);
var inst_315589 = (function (){var res = inst_315581;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_315582;
var wcc_jammer = inst_315583;
var get_wc = inst_315584;
var lines = inst_315588;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,state_val_315594,c__10446__auto___315629,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,state_val_315594,c__10446__auto___315629,c))
})();
var inst_315590 = (function (){var res = inst_315581;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_315582;
var wcc_jammer = inst_315583;
var get_wc = inst_315584;
var lines = inst_315588;
var close_if_done = inst_315589;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c){
return (function (state_315612){
var state_val_315613 = (state_315612[(1)]);
if((state_val_315613 === (1))){
var state_315612__$1 = state_315612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_315612__$1,(2),c,res__$1);
} else {
if((state_val_315613 === (2))){
var inst_315609 = (state_315612[(2)]);
var inst_315610 = close_if_done.call(null);
var state_315612__$1 = (function (){var statearr_315614 = state_315612;
(statearr_315614[(7)] = inst_315609);

return statearr_315614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315612__$1,inst_315610);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_315618 = [null,null,null,null,null,null,null,null];
(statearr_315618[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_315618[(1)] = (1));

return statearr_315618;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_315612){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315619){if((e315619 instanceof Object)){
var ex__10429__auto__ = e315619;
var statearr_315620_315632 = state_315612;
(statearr_315620_315632[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315633 = state_315612;
state_315612 = G__315633;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_315612){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_315612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c))
})();
var state__10448__auto__ = (function (){var statearr_315621 = f__10447__auto__.call(null);
(statearr_315621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_315621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_315581,inst_315584,inst_315582,inst_315583,inst_315586,inst_315587,inst_315588,inst_315589,state_val_315594,c__10446__auto___315629,c))
})();
var inst_315591 = inst_315581.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_315590);
var state_315593__$1 = state_315593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_315593__$1,inst_315591);
} else {
return null;
}
}
});})(c__10446__auto___315629,c))
;
return ((function (switch__10425__auto__,c__10446__auto___315629,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_315625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_315625[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_315625[(1)] = (1));

return statearr_315625;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_315593){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_315593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e315626){if((e315626 instanceof Object)){
var ex__10429__auto__ = e315626;
var statearr_315627_315634 = state_315593;
(statearr_315627_315634[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_315593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e315626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__315635 = state_315593;
state_315593 = G__315635;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_315593){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_315593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___315629,c))
})();
var state__10448__auto__ = (function (){var statearr_315628 = f__10447__auto__.call(null);
(statearr_315628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___315629);

return statearr_315628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___315629,c))
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
var len__9156__auto___315637 = arguments.length;
var i__9157__auto___315638 = (0);
while(true){
if((i__9157__auto___315638 < len__9156__auto___315637)){
args__9163__auto__.push((arguments[i__9157__auto___315638]));

var G__315639 = (i__9157__auto___315638 + (1));
i__9157__auto___315638 = G__315639;
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
cljs.core.println.call(null,"drop mode");

drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"drop");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
return cljs.core.println.call(null,"link mode");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq315636){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq315636));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map