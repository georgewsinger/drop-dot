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
return (function (state_323946){
var state_val_323947 = (state_323946[(1)]);
if((state_val_323947 === (1))){
var state_323946__$1 = state_323946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_323946__$1,(2),c,arg);
} else {
if((state_val_323947 === (2))){
var inst_323944 = (state_323946[(2)]);
var state_323946__$1 = state_323946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_323946__$1,inst_323944);
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
var statearr_323951 = [null,null,null,null,null,null,null];
(statearr_323951[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_323951[(1)] = (1));

return statearr_323951;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_323946){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_323946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e323952){if((e323952 instanceof Object)){
var ex__10429__auto__ = e323952;
var statearr_323953_323955 = state_323946;
(statearr_323953_323955[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_323946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e323952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__323956 = state_323946;
state_323946 = G__323956;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_323946){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_323946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_323954 = f__10447__auto__.call(null);
(statearr_323954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_323954;
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
return (function (state_323972){
var state_val_323973 = (state_323972[(1)]);
if((state_val_323973 === (1))){
var state_323972__$1 = state_323972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_323972__$1,(2),c,arg);
} else {
if((state_val_323973 === (2))){
var inst_323970 = (state_323972[(2)]);
var state_323972__$1 = state_323972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_323972__$1,inst_323970);
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
var statearr_323977 = [null,null,null,null,null,null,null];
(statearr_323977[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_323977[(1)] = (1));

return statearr_323977;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_323972){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_323972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e323978){if((e323978 instanceof Object)){
var ex__10429__auto__ = e323978;
var statearr_323979_323981 = state_323972;
(statearr_323979_323981[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_323972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e323978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__323982 = state_323972;
state_323972 = G__323982;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_323972){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_323972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_323980 = f__10447__auto__.call(null);
(statearr_323980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_323980;
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
return (function (state_324059){
var state_val_324060 = (state_324059[(1)]);
if((state_val_324060 === (1))){
var state_324059__$1 = state_324059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324059__$1,(2),input_chan);
} else {
if((state_val_324060 === (2))){
var inst_324037 = (state_324059[(2)]);
var inst_324038 = inst_324037;
var state_324059__$1 = (function (){var statearr_324061 = state_324059;
(statearr_324061[(7)] = inst_324038);

return statearr_324061;
})();
var statearr_324062_324089 = state_324059__$1;
(statearr_324062_324089[(2)] = null);

(statearr_324062_324089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324060 === (3))){
var inst_324038 = (state_324059[(7)]);
var inst_324040 = cljs.core.count.call(null,inst_324038);
var inst_324041 = cljs.core._EQ_.call(null,inst_324040,(0));
var state_324059__$1 = state_324059;
if(inst_324041){
var statearr_324063_324090 = state_324059__$1;
(statearr_324063_324090[(1)] = (5));

} else {
var statearr_324064_324091 = state_324059__$1;
(statearr_324064_324091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324060 === (4))){
var inst_324057 = (state_324059[(2)]);
var state_324059__$1 = state_324059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324059__$1,inst_324057);
} else {
if((state_val_324060 === (5))){
var inst_324043 = cljs.core.println.call(null,"done");
var state_324059__$1 = state_324059;
var statearr_324065_324092 = state_324059__$1;
(statearr_324065_324092[(2)] = inst_324043);

(statearr_324065_324092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324060 === (6))){
var inst_324038 = (state_324059[(7)]);
var inst_324045 = cljs.core.async.chan.call(null);
var inst_324046 = cljs.core.first.call(null,inst_324038);
var inst_324047 = (function (){var v = inst_324038;
var rc = inst_324045;
var cmd = inst_324046;
return ((function (v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__){
return (function (state_324069){
var state_val_324070 = (state_324069[(1)]);
if((state_val_324070 === (1))){
var state_324069__$1 = state_324069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324069__$1,(2),rc,res);
} else {
if((state_val_324070 === (2))){
var inst_324067 = (state_324069[(2)]);
var state_324069__$1 = state_324069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324069__$1,inst_324067);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_324074 = [null,null,null,null,null,null,null];
(statearr_324074[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_324074[(1)] = (1));

return statearr_324074;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_324069){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324075){if((e324075 instanceof Object)){
var ex__10429__auto__ = e324075;
var statearr_324076_324093 = state_324069;
(statearr_324076_324093[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324094 = state_324069;
state_324069 = G__324094;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_324069){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_324069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324077 = f__10447__auto__.call(null);
(statearr_324077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_324038,inst_324045,inst_324046,state_val_324060,c__10446__auto__))
})();
var inst_324048 = drop_dot.core.pure_js.execAndPrint(inst_324046,inst_324047);
var state_324059__$1 = (function (){var statearr_324078 = state_324059;
(statearr_324078[(8)] = inst_324048);

return statearr_324078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324059__$1,(8),inst_324045);
} else {
if((state_val_324060 === (7))){
var inst_324055 = (state_324059[(2)]);
var state_324059__$1 = state_324059;
var statearr_324079_324095 = state_324059__$1;
(statearr_324079_324095[(2)] = inst_324055);

(statearr_324079_324095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324060 === (8))){
var inst_324038 = (state_324059[(7)]);
var inst_324050 = (state_324059[(2)]);
var inst_324051 = cljs.core.rest.call(null,inst_324038);
var inst_324052 = cljs.core.vec.call(null,inst_324051);
var inst_324038__$1 = inst_324052;
var state_324059__$1 = (function (){var statearr_324080 = state_324059;
(statearr_324080[(9)] = inst_324050);

(statearr_324080[(7)] = inst_324038__$1);

return statearr_324080;
})();
var statearr_324081_324096 = state_324059__$1;
(statearr_324081_324096[(2)] = null);

(statearr_324081_324096[(1)] = (3));


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
var statearr_324085 = [null,null,null,null,null,null,null,null,null,null];
(statearr_324085[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_324085[(1)] = (1));

return statearr_324085;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_324059){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324086){if((e324086 instanceof Object)){
var ex__10429__auto__ = e324086;
var statearr_324087_324097 = state_324059;
(statearr_324087_324097[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324098 = state_324059;
state_324059 = G__324098;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_324059){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_324059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324088 = f__10447__auto__.call(null);
(statearr_324088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324088;
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
return (function (state_324110){
var state_val_324111 = (state_324110[(1)]);
if((state_val_324111 === (1))){
var state_324110__$1 = state_324110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324110__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_324115 = [null,null,null,null,null,null,null];
(statearr_324115[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_324115[(1)] = (1));

return statearr_324115;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_324110){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324116){if((e324116 instanceof Object)){
var ex__10429__auto__ = e324116;
var statearr_324117_324119 = state_324110;
(statearr_324117_324119[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324120 = state_324110;
state_324110 = G__324120;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_324110){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_324110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_324118 = f__10447__auto__.call(null);
(statearr_324118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324118;
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
return (function (state_324136){
var state_val_324137 = (state_324136[(1)]);
if((state_val_324137 === (1))){
var state_324136__$1 = state_324136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324136__$1,(2),d,res__$1);
} else {
if((state_val_324137 === (2))){
var inst_324134 = (state_324136[(2)]);
var state_324136__$1 = state_324136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324136__$1,inst_324134);
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
var statearr_324141 = [null,null,null,null,null,null,null];
(statearr_324141[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_324141[(1)] = (1));

return statearr_324141;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_324136){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324142){if((e324142 instanceof Object)){
var ex__10429__auto__ = e324142;
var statearr_324143_324145 = state_324136;
(statearr_324143_324145[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324146 = state_324136;
state_324136 = G__324146;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_324136){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_324136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_324144 = f__10447__auto__.call(null);
(statearr_324144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324144;
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
return (function (state_324178){
var state_val_324179 = (state_324178[(1)]);
if((state_val_324179 === (1))){
var inst_324169 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_324178__$1 = state_324178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324178__$1,(2),inst_324169);
} else {
if((state_val_324179 === (2))){
var inst_324171 = (state_324178[(2)]);
var state_324178__$1 = state_324178;
if(cljs.core.truth_(inst_324171)){
var statearr_324180_324191 = state_324178__$1;
(statearr_324180_324191[(1)] = (3));

} else {
var statearr_324181_324192 = state_324178__$1;
(statearr_324181_324192[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324179 === (3))){
var state_324178__$1 = state_324178;
var statearr_324182_324193 = state_324178__$1;
(statearr_324182_324193[(2)] = line);

(statearr_324182_324193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324179 === (4))){
var inst_324174 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_324178__$1 = state_324178;
var statearr_324183_324194 = state_324178__$1;
(statearr_324183_324194[(2)] = inst_324174);

(statearr_324183_324194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324179 === (5))){
var inst_324176 = (state_324178[(2)]);
var state_324178__$1 = state_324178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324178__$1,inst_324176);
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
var statearr_324187 = [null,null,null,null,null,null,null];
(statearr_324187[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_324187[(1)] = (1));

return statearr_324187;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_324178){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324188){if((e324188 instanceof Object)){
var ex__10429__auto__ = e324188;
var statearr_324189_324195 = state_324178;
(statearr_324189_324195[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324196 = state_324178;
state_324178 = G__324196;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_324178){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_324178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324190 = f__10447__auto__.call(null);
(statearr_324190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324190;
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
return (function (state_324267){
var state_val_324268 = (state_324267[(1)]);
if((state_val_324268 === (1))){
var state_324267__$1 = state_324267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324267__$1,(2),chan_verified_path);
} else {
if((state_val_324268 === (2))){
var inst_324253 = (state_324267[(7)]);
var inst_324254 = (state_324267[(8)]);
var inst_324253__$1 = (state_324267[(2)]);
var inst_324254__$1 = cljs.core.async.chan.call(null,(1));
var inst_324255 = (function (){var verified_path = inst_324253__$1;
var rc = inst_324254__$1;
return ((function (verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function (state_324273){
var state_val_324274 = (state_324273[(1)]);
if((state_val_324274 === (1))){
var inst_324269 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_324273__$1 = state_324273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324273__$1,(2),rc,inst_324269);
} else {
if((state_val_324274 === (2))){
var inst_324271 = (state_324273[(2)]);
var state_324273__$1 = state_324273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324273__$1,inst_324271);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_324278 = [null,null,null,null,null,null,null];
(statearr_324278[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_324278[(1)] = (1));

return statearr_324278;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_324273){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324279){if((e324279 instanceof Object)){
var ex__10429__auto__ = e324279;
var statearr_324280_324307 = state_324273;
(statearr_324280_324307[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324308 = state_324273;
state_324273 = G__324308;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_324273){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_324273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324281 = f__10447__auto__.call(null);
(statearr_324281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function (state_324285){
var state_val_324286 = (state_324285[(1)]);
if((state_val_324286 === (1))){
var state_324285__$1 = state_324285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324285__$1,(2),rc,verified_path);
} else {
if((state_val_324286 === (2))){
var inst_324283 = (state_324285[(2)]);
var state_324285__$1 = state_324285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324285__$1,inst_324283);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_324290 = [null,null,null,null,null,null,null];
(statearr_324290[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_324290[(1)] = (1));

return statearr_324290;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_324285){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324291){if((e324291 instanceof Object)){
var ex__10429__auto__ = e324291;
var statearr_324292_324309 = state_324285;
(statearr_324292_324309[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324310 = state_324285;
state_324285 = G__324310;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_324285){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_324285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324293 = f__10447__auto__.call(null);
(statearr_324293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_324253,inst_324254,inst_324253__$1,inst_324254__$1,state_val_324268,c__10446__auto__))
})();
var inst_324256 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_324253__$1);
var state_324267__$1 = (function (){var statearr_324294 = state_324267;
(statearr_324294[(7)] = inst_324253__$1);

(statearr_324294[(9)] = inst_324255);

(statearr_324294[(8)] = inst_324254__$1);

return statearr_324294;
})();
if(cljs.core.truth_(inst_324256)){
var statearr_324295_324311 = state_324267__$1;
(statearr_324295_324311[(1)] = (3));

} else {
var statearr_324296_324312 = state_324267__$1;
(statearr_324296_324312[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324268 === (3))){
var inst_324253 = (state_324267[(7)]);
var inst_324254 = (state_324267[(8)]);
var state_324267__$1 = state_324267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324267__$1,(6),inst_324254,inst_324253);
} else {
if((state_val_324268 === (4))){
var inst_324253 = (state_324267[(7)]);
var inst_324255 = (state_324267[(9)]);
var inst_324261 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_324253,inst_324255);
var state_324267__$1 = state_324267;
var statearr_324297_324313 = state_324267__$1;
(statearr_324297_324313[(2)] = inst_324261);

(statearr_324297_324313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324268 === (5))){
var inst_324254 = (state_324267[(8)]);
var inst_324263 = (state_324267[(2)]);
var state_324267__$1 = (function (){var statearr_324298 = state_324267;
(statearr_324298[(10)] = inst_324263);

return statearr_324298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324267__$1,(7),inst_324254);
} else {
if((state_val_324268 === (6))){
var inst_324259 = (state_324267[(2)]);
var state_324267__$1 = state_324267;
var statearr_324299_324314 = state_324267__$1;
(statearr_324299_324314[(2)] = inst_324259);

(statearr_324299_324314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324268 === (7))){
var inst_324265 = (state_324267[(2)]);
var state_324267__$1 = state_324267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324267__$1,inst_324265);
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
var statearr_324303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_324303[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_324303[(1)] = (1));

return statearr_324303;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_324267){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324304){if((e324304 instanceof Object)){
var ex__10429__auto__ = e324304;
var statearr_324305_324315 = state_324267;
(statearr_324305_324315[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324316 = state_324267;
state_324267 = G__324316;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_324267){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_324267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324306 = f__10447__auto__.call(null);
(statearr_324306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324306;
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
return (function (state_324351){
var state_val_324352 = (state_324351[(1)]);
if((state_val_324352 === (1))){
var state_324351__$1 = state_324351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324351__$1,(2),c);
} else {
if((state_val_324352 === (2))){
var inst_324342 = (state_324351[(7)]);
var inst_324342__$1 = (state_324351[(2)]);
var inst_324343 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_324342__$1);
var state_324351__$1 = (function (){var statearr_324353 = state_324351;
(statearr_324353[(7)] = inst_324342__$1);

return statearr_324353;
})();
if(cljs.core.truth_(inst_324343)){
var statearr_324354_324365 = state_324351__$1;
(statearr_324354_324365[(1)] = (3));

} else {
var statearr_324355_324366 = state_324351__$1;
(statearr_324355_324366[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324352 === (3))){
var inst_324342 = (state_324351[(7)]);
var inst_324345 = cljs.core.println.call(null,inst_324342);
var state_324351__$1 = state_324351;
var statearr_324356_324367 = state_324351__$1;
(statearr_324356_324367[(2)] = inst_324345);

(statearr_324356_324367[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324352 === (4))){
var inst_324342 = (state_324351[(7)]);
var inst_324347 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_324342);
var state_324351__$1 = state_324351;
var statearr_324357_324368 = state_324351__$1;
(statearr_324357_324368[(2)] = inst_324347);

(statearr_324357_324368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324352 === (5))){
var inst_324349 = (state_324351[(2)]);
var state_324351__$1 = state_324351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324351__$1,inst_324349);
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
var statearr_324361 = [null,null,null,null,null,null,null,null];
(statearr_324361[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_324361[(1)] = (1));

return statearr_324361;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_324351){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324362){if((e324362 instanceof Object)){
var ex__10429__auto__ = e324362;
var statearr_324363_324369 = state_324351;
(statearr_324363_324369[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324370 = state_324351;
state_324351 = G__324370;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_324351){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_324351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324364 = f__10447__auto__.call(null);
(statearr_324364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324364;
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
return (function (state_324399){
var state_val_324400 = (state_324399[(1)]);
if((state_val_324400 === (1))){
var state_324399__$1 = state_324399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324399__$1,(2),rc,line);
} else {
if((state_val_324400 === (2))){
var inst_324397 = (state_324399[(2)]);
var state_324399__$1 = state_324399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324399__$1,inst_324397);
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
var statearr_324404 = [null,null,null,null,null,null,null];
(statearr_324404[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_324404[(1)] = (1));

return statearr_324404;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_324399){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324405){if((e324405 instanceof Object)){
var ex__10429__auto__ = e324405;
var statearr_324406_324421 = state_324399;
(statearr_324406_324421[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324422 = state_324399;
state_324399 = G__324422;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_324399){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_324399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_324407 = f__10447__auto__.call(null);
(statearr_324407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324407;
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
return (function (state_324412){
var state_val_324413 = (state_324412[(1)]);
if((state_val_324413 === (1))){
var inst_324408 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_324412__$1 = state_324412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324412__$1,(2),rc,inst_324408);
} else {
if((state_val_324413 === (2))){
var inst_324410 = (state_324412[(2)]);
var state_324412__$1 = state_324412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324412__$1,inst_324410);
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
var statearr_324417 = [null,null,null,null,null,null,null];
(statearr_324417[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_324417[(1)] = (1));

return statearr_324417;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_324412){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324418){if((e324418 instanceof Object)){
var ex__10429__auto__ = e324418;
var statearr_324419_324423 = state_324412;
(statearr_324419_324423[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324424 = state_324412;
state_324412 = G__324424;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_324412){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_324412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_324420 = f__10447__auto__.call(null);
(statearr_324420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324420;
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
return (function (state_324495){
var state_val_324496 = (state_324495[(1)]);
if((state_val_324496 === (1))){
var state_324495__$1 = state_324495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324495__$1,(2),chan_linkable_path);
} else {
if((state_val_324496 === (2))){
var inst_324481 = (state_324495[(7)]);
var inst_324482 = (state_324495[(8)]);
var inst_324481__$1 = (state_324495[(2)]);
var inst_324482__$1 = cljs.core.async.chan.call(null,(1));
var inst_324483 = (function (){var linkable_path = inst_324481__$1;
var rc = inst_324482__$1;
return ((function (linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function (state_324501){
var state_val_324502 = (state_324501[(1)]);
if((state_val_324502 === (1))){
var inst_324497 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_324501__$1 = state_324501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324501__$1,(2),rc,inst_324497);
} else {
if((state_val_324502 === (2))){
var inst_324499 = (state_324501[(2)]);
var state_324501__$1 = state_324501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324501__$1,inst_324499);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_324506 = [null,null,null,null,null,null,null];
(statearr_324506[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_324506[(1)] = (1));

return statearr_324506;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_324501){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324507){if((e324507 instanceof Object)){
var ex__10429__auto__ = e324507;
var statearr_324508_324535 = state_324501;
(statearr_324508_324535[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324536 = state_324501;
state_324501 = G__324536;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_324501){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_324501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324509 = f__10447__auto__.call(null);
(statearr_324509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function (state_324513){
var state_val_324514 = (state_324513[(1)]);
if((state_val_324514 === (1))){
var state_324513__$1 = state_324513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324513__$1,(2),rc,linkable_path);
} else {
if((state_val_324514 === (2))){
var inst_324511 = (state_324513[(2)]);
var state_324513__$1 = state_324513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324513__$1,inst_324511);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_324518 = [null,null,null,null,null,null,null];
(statearr_324518[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_324518[(1)] = (1));

return statearr_324518;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_324513){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324519){if((e324519 instanceof Object)){
var ex__10429__auto__ = e324519;
var statearr_324520_324537 = state_324513;
(statearr_324520_324537[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324538 = state_324513;
state_324513 = G__324538;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_324513){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_324513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324521 = f__10447__auto__.call(null);
(statearr_324521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_324481,inst_324482,inst_324481__$1,inst_324482__$1,state_val_324496,c__10446__auto__))
})();
var inst_324484 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_324481__$1);
var state_324495__$1 = (function (){var statearr_324522 = state_324495;
(statearr_324522[(9)] = inst_324483);

(statearr_324522[(7)] = inst_324481__$1);

(statearr_324522[(8)] = inst_324482__$1);

return statearr_324522;
})();
if(cljs.core.truth_(inst_324484)){
var statearr_324523_324539 = state_324495__$1;
(statearr_324523_324539[(1)] = (3));

} else {
var statearr_324524_324540 = state_324495__$1;
(statearr_324524_324540[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324496 === (3))){
var inst_324481 = (state_324495[(7)]);
var inst_324482 = (state_324495[(8)]);
var state_324495__$1 = state_324495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324495__$1,(6),inst_324482,inst_324481);
} else {
if((state_val_324496 === (4))){
var inst_324483 = (state_324495[(9)]);
var inst_324481 = (state_324495[(7)]);
var inst_324489 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_324481,inst_324483);
var state_324495__$1 = state_324495;
var statearr_324525_324541 = state_324495__$1;
(statearr_324525_324541[(2)] = inst_324489);

(statearr_324525_324541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324496 === (5))){
var inst_324482 = (state_324495[(8)]);
var inst_324491 = (state_324495[(2)]);
var state_324495__$1 = (function (){var statearr_324526 = state_324495;
(statearr_324526[(10)] = inst_324491);

return statearr_324526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324495__$1,(7),inst_324482);
} else {
if((state_val_324496 === (6))){
var inst_324487 = (state_324495[(2)]);
var state_324495__$1 = state_324495;
var statearr_324527_324542 = state_324495__$1;
(statearr_324527_324542[(2)] = inst_324487);

(statearr_324527_324542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324496 === (7))){
var inst_324493 = (state_324495[(2)]);
var state_324495__$1 = state_324495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324495__$1,inst_324493);
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
var statearr_324531 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_324531[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_324531[(1)] = (1));

return statearr_324531;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_324495){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324532){if((e324532 instanceof Object)){
var ex__10429__auto__ = e324532;
var statearr_324533_324543 = state_324495;
(statearr_324533_324543[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324544 = state_324495;
state_324495 = G__324544;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_324495){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_324495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324534 = f__10447__auto__.call(null);
(statearr_324534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking = (function drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking(chan_linkable_path_that_wants_linking){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_324615){
var state_val_324616 = (state_324615[(1)]);
if((state_val_324616 === (1))){
var state_324615__$1 = state_324615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324615__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_324616 === (2))){
var inst_324601 = (state_324615[(7)]);
var inst_324602 = (state_324615[(8)]);
var inst_324601__$1 = (state_324615[(2)]);
var inst_324602__$1 = cljs.core.async.chan.call(null,(1));
var inst_324603 = (function (){var linkable_path = inst_324601__$1;
var rc = inst_324602__$1;
return ((function (linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function (state_324621){
var state_val_324622 = (state_324621[(1)]);
if((state_val_324622 === (1))){
var inst_324617 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_324621__$1 = state_324621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324621__$1,(2),rc,inst_324617);
} else {
if((state_val_324622 === (2))){
var inst_324619 = (state_324621[(2)]);
var state_324621__$1 = state_324621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324621__$1,inst_324619);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_324626 = [null,null,null,null,null,null,null];
(statearr_324626[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_324626[(1)] = (1));

return statearr_324626;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_324621){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324627){if((e324627 instanceof Object)){
var ex__10429__auto__ = e324627;
var statearr_324628_324655 = state_324621;
(statearr_324628_324655[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324656 = state_324621;
state_324621 = G__324656;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_324621){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_324621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324629 = f__10447__auto__.call(null);
(statearr_324629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function (state_324633){
var state_val_324634 = (state_324633[(1)]);
if((state_val_324634 === (1))){
var state_324633__$1 = state_324633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324633__$1,(2),rc,linkable_path);
} else {
if((state_val_324634 === (2))){
var inst_324631 = (state_324633[(2)]);
var state_324633__$1 = state_324633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324633__$1,inst_324631);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_324638 = [null,null,null,null,null,null,null];
(statearr_324638[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_324638[(1)] = (1));

return statearr_324638;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_324633){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324639){if((e324639 instanceof Object)){
var ex__10429__auto__ = e324639;
var statearr_324640_324657 = state_324633;
(statearr_324640_324657[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324658 = state_324633;
state_324633 = G__324658;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_324633){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_324633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324641 = f__10447__auto__.call(null);
(statearr_324641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_324601,inst_324602,inst_324601__$1,inst_324602__$1,state_val_324616,c__10446__auto__))
})();
var inst_324604 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_324601__$1);
var state_324615__$1 = (function (){var statearr_324642 = state_324615;
(statearr_324642[(9)] = inst_324603);

(statearr_324642[(7)] = inst_324601__$1);

(statearr_324642[(8)] = inst_324602__$1);

return statearr_324642;
})();
if(cljs.core.truth_(inst_324604)){
var statearr_324643_324659 = state_324615__$1;
(statearr_324643_324659[(1)] = (3));

} else {
var statearr_324644_324660 = state_324615__$1;
(statearr_324644_324660[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324616 === (3))){
var inst_324601 = (state_324615[(7)]);
var inst_324602 = (state_324615[(8)]);
var state_324615__$1 = state_324615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324615__$1,(6),inst_324602,inst_324601);
} else {
if((state_val_324616 === (4))){
var inst_324603 = (state_324615[(9)]);
var inst_324601 = (state_324615[(7)]);
var inst_324609 = drop_dot.core.pure_js.pathExists(inst_324601,inst_324603);
var state_324615__$1 = state_324615;
var statearr_324645_324661 = state_324615__$1;
(statearr_324645_324661[(2)] = inst_324609);

(statearr_324645_324661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324616 === (5))){
var inst_324602 = (state_324615[(8)]);
var inst_324611 = (state_324615[(2)]);
var state_324615__$1 = (function (){var statearr_324646 = state_324615;
(statearr_324646[(10)] = inst_324611);

return statearr_324646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324615__$1,(7),inst_324602);
} else {
if((state_val_324616 === (6))){
var inst_324607 = (state_324615[(2)]);
var state_324615__$1 = state_324615;
var statearr_324647_324662 = state_324615__$1;
(statearr_324647_324662[(2)] = inst_324607);

(statearr_324647_324662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324616 === (7))){
var inst_324613 = (state_324615[(2)]);
var state_324615__$1 = state_324615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324615__$1,inst_324613);
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
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_324651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_324651[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_324651[(1)] = (1));

return statearr_324651;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_324615){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324652){if((e324652 instanceof Object)){
var ex__10429__auto__ = e324652;
var statearr_324653_324663 = state_324615;
(statearr_324653_324663[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324664 = state_324615;
state_324615 = G__324664;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_324615){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_324615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324654 = f__10447__auto__.call(null);
(statearr_324654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324654;
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
return (function (state_324726){
var state_val_324727 = (state_324726[(1)]);
if((state_val_324727 === (7))){
var inst_324722 = (state_324726[(2)]);
var state_324726__$1 = state_324726;
var statearr_324728_324749 = state_324726__$1;
(statearr_324728_324749[(2)] = inst_324722);

(statearr_324728_324749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (1))){
var inst_324707 = chan_config;
var state_324726__$1 = (function (){var statearr_324729 = state_324726;
(statearr_324729[(7)] = inst_324707);

return statearr_324729;
})();
var statearr_324730_324750 = state_324726__$1;
(statearr_324730_324750[(2)] = null);

(statearr_324730_324750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (4))){
var inst_324710 = (state_324726[(8)]);
var inst_324710__$1 = (state_324726[(2)]);
var state_324726__$1 = (function (){var statearr_324731 = state_324726;
(statearr_324731[(8)] = inst_324710__$1);

return statearr_324731;
})();
if(cljs.core.truth_(inst_324710__$1)){
var statearr_324732_324751 = state_324726__$1;
(statearr_324732_324751[(1)] = (5));

} else {
var statearr_324733_324752 = state_324726__$1;
(statearr_324733_324752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (6))){
var state_324726__$1 = state_324726;
var statearr_324734_324753 = state_324726__$1;
(statearr_324734_324753[(2)] = null);

(statearr_324734_324753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (3))){
var inst_324724 = (state_324726[(2)]);
var state_324726__$1 = state_324726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324726__$1,inst_324724);
} else {
if((state_val_324727 === (2))){
var inst_324707 = (state_324726[(7)]);
var state_324726__$1 = state_324726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324726__$1,(4),inst_324707);
} else {
if((state_val_324727 === (9))){
var inst_324710 = (state_324726[(8)]);
var inst_324716 = cljs.core.println.call(null,inst_324710);
var state_324726__$1 = state_324726;
var statearr_324736_324754 = state_324726__$1;
(statearr_324736_324754[(2)] = inst_324716);

(statearr_324736_324754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (5))){
var inst_324712 = cljs.core._EQ_.call(null,cmd,"drop");
var state_324726__$1 = state_324726;
if(inst_324712){
var statearr_324737_324755 = state_324726__$1;
(statearr_324737_324755[(1)] = (8));

} else {
var statearr_324738_324756 = state_324726__$1;
(statearr_324738_324756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (10))){
var inst_324707 = (state_324726[(7)]);
var inst_324718 = (state_324726[(2)]);
var tmp324735 = inst_324707;
var inst_324707__$1 = tmp324735;
var state_324726__$1 = (function (){var statearr_324739 = state_324726;
(statearr_324739[(7)] = inst_324707__$1);

(statearr_324739[(9)] = inst_324718);

return statearr_324739;
})();
var statearr_324740_324757 = state_324726__$1;
(statearr_324740_324757[(2)] = null);

(statearr_324740_324757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_324727 === (8))){
var inst_324710 = (state_324726[(8)]);
var inst_324714 = drop_dot.core.drop_line.call(null,inst_324710);
var state_324726__$1 = state_324726;
var statearr_324741_324758 = state_324726__$1;
(statearr_324741_324758[(2)] = inst_324714);

(statearr_324741_324758[(1)] = (10));


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
var statearr_324745 = [null,null,null,null,null,null,null,null,null,null];
(statearr_324745[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_324745[(1)] = (1));

return statearr_324745;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_324726){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324746){if((e324746 instanceof Object)){
var ex__10429__auto__ = e324746;
var statearr_324747_324759 = state_324726;
(statearr_324747_324759[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324760 = state_324726;
state_324726 = G__324760;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_324726){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_324726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_324748 = f__10447__auto__.call(null);
(statearr_324748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_324748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___324857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___324857,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___324857,c){
return (function (state_324821){
var state_val_324822 = (state_324821[(1)]);
if((state_val_324822 === (1))){
var inst_324810 = (state_324821[(7)]);
var inst_324809 = (state_324821[(8)]);
var inst_324811 = (state_324821[(9)]);
var inst_324809__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_324810__$1 = cljs.core.async.chan.call(null,(1));
var inst_324811__$1 = (function (){var res = inst_324809__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_324810__$1;
return ((function (res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c){
return (function (state_324826){
var state_val_324827 = (state_324826[(1)]);
if((state_val_324827 === (1))){
var state_324826__$1 = state_324826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324826__$1,(2),wcc,res__$1);
} else {
if((state_val_324827 === (2))){
var inst_324824 = (state_324826[(2)]);
var state_324826__$1 = state_324826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324826__$1,inst_324824);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_324831 = [null,null,null,null,null,null,null];
(statearr_324831[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_324831[(1)] = (1));

return statearr_324831;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_324826){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324832){if((e324832 instanceof Object)){
var ex__10429__auto__ = e324832;
var statearr_324833_324858 = state_324826;
(statearr_324833_324858[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324859 = state_324826;
state_324826 = G__324859;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_324826){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_324826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c))
})();
var state__10448__auto__ = (function (){var statearr_324834 = f__10447__auto__.call(null);
(statearr_324834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_324810,inst_324809,inst_324811,inst_324809__$1,inst_324810__$1,state_val_324822,c__10446__auto___324857,c))
})();
var inst_324812 = inst_324809__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_324811__$1);
var state_324821__$1 = (function (){var statearr_324835 = state_324821;
(statearr_324835[(7)] = inst_324810__$1);

(statearr_324835[(8)] = inst_324809__$1);

(statearr_324835[(9)] = inst_324811__$1);

(statearr_324835[(10)] = inst_324812);

return statearr_324835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_324821__$1,(2),inst_324810__$1);
} else {
if((state_val_324822 === (2))){
var inst_324810 = (state_324821[(7)]);
var inst_324809 = (state_324821[(8)]);
var inst_324811 = (state_324821[(9)]);
var inst_324812 = (state_324821[(10)]);
var inst_324814 = (state_324821[(2)]);
var inst_324815 = [cljs.core.str(inst_324814)].join('');
var inst_324816 = parseInt(inst_324815);
var inst_324817 = (function (){var res = inst_324809;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_324810;
var wcc_jammer = inst_324811;
var get_wc = inst_324812;
var lines = inst_324816;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,state_val_324822,c__10446__auto___324857,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,state_val_324822,c__10446__auto___324857,c))
})();
var inst_324818 = (function (){var res = inst_324809;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_324810;
var wcc_jammer = inst_324811;
var get_wc = inst_324812;
var lines = inst_324816;
var close_if_done = inst_324817;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c){
return (function (state_324840){
var state_val_324841 = (state_324840[(1)]);
if((state_val_324841 === (1))){
var state_324840__$1 = state_324840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_324840__$1,(2),c,res__$1);
} else {
if((state_val_324841 === (2))){
var inst_324837 = (state_324840[(2)]);
var inst_324838 = close_if_done.call(null);
var state_324840__$1 = (function (){var statearr_324842 = state_324840;
(statearr_324842[(7)] = inst_324837);

return statearr_324842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324840__$1,inst_324838);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_324846 = [null,null,null,null,null,null,null,null];
(statearr_324846[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_324846[(1)] = (1));

return statearr_324846;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_324840){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324847){if((e324847 instanceof Object)){
var ex__10429__auto__ = e324847;
var statearr_324848_324860 = state_324840;
(statearr_324848_324860[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324861 = state_324840;
state_324840 = G__324861;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_324840){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_324840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c))
})();
var state__10448__auto__ = (function (){var statearr_324849 = f__10447__auto__.call(null);
(statearr_324849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_324849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_324810,inst_324809,inst_324811,inst_324812,inst_324814,inst_324815,inst_324816,inst_324817,state_val_324822,c__10446__auto___324857,c))
})();
var inst_324819 = inst_324809.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_324818);
var state_324821__$1 = state_324821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_324821__$1,inst_324819);
} else {
return null;
}
}
});})(c__10446__auto___324857,c))
;
return ((function (switch__10425__auto__,c__10446__auto___324857,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_324853 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_324853[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_324853[(1)] = (1));

return statearr_324853;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_324821){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_324821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e324854){if((e324854 instanceof Object)){
var ex__10429__auto__ = e324854;
var statearr_324855_324862 = state_324821;
(statearr_324855_324862[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_324821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e324854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__324863 = state_324821;
state_324821 = G__324863;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_324821){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_324821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___324857,c))
})();
var state__10448__auto__ = (function (){var statearr_324856 = f__10447__auto__.call(null);
(statearr_324856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___324857);

return statearr_324856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___324857,c))
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
var len__9156__auto___324865 = arguments.length;
var i__9157__auto___324866 = (0);
while(true){
if((i__9157__auto___324866 < len__9156__auto___324865)){
args__9163__auto__.push((arguments[i__9157__auto___324866]));

var G__324867 = (i__9157__auto___324866 + (1));
i__9157__auto___324866 = G__324867;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq324864){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq324864));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map