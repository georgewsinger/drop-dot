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
return (function (state_296029){
var state_val_296030 = (state_296029[(1)]);
if((state_val_296030 === (1))){
var state_296029__$1 = state_296029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296029__$1,(2),c,arg);
} else {
if((state_val_296030 === (2))){
var inst_296027 = (state_296029[(2)]);
var state_296029__$1 = state_296029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296029__$1,inst_296027);
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
var statearr_296034 = [null,null,null,null,null,null,null];
(statearr_296034[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_296034[(1)] = (1));

return statearr_296034;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_296029){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296035){if((e296035 instanceof Object)){
var ex__10429__auto__ = e296035;
var statearr_296036_296038 = state_296029;
(statearr_296036_296038[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296039 = state_296029;
state_296029 = G__296039;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_296029){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_296029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296037 = f__10447__auto__.call(null);
(statearr_296037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296037;
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
return (function (state_296055){
var state_val_296056 = (state_296055[(1)]);
if((state_val_296056 === (1))){
var state_296055__$1 = state_296055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296055__$1,(2),c,arg);
} else {
if((state_val_296056 === (2))){
var inst_296053 = (state_296055[(2)]);
var state_296055__$1 = state_296055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296055__$1,inst_296053);
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
var statearr_296060 = [null,null,null,null,null,null,null];
(statearr_296060[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_296060[(1)] = (1));

return statearr_296060;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_296055){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296061){if((e296061 instanceof Object)){
var ex__10429__auto__ = e296061;
var statearr_296062_296064 = state_296055;
(statearr_296062_296064[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296065 = state_296055;
state_296055 = G__296065;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_296055){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_296055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296063 = f__10447__auto__.call(null);
(statearr_296063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296063;
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
return (function (state_296142){
var state_val_296143 = (state_296142[(1)]);
if((state_val_296143 === (1))){
var state_296142__$1 = state_296142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296142__$1,(2),input_chan);
} else {
if((state_val_296143 === (2))){
var inst_296120 = (state_296142[(2)]);
var inst_296121 = inst_296120;
var state_296142__$1 = (function (){var statearr_296144 = state_296142;
(statearr_296144[(7)] = inst_296121);

return statearr_296144;
})();
var statearr_296145_296172 = state_296142__$1;
(statearr_296145_296172[(2)] = null);

(statearr_296145_296172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296143 === (3))){
var inst_296121 = (state_296142[(7)]);
var inst_296123 = cljs.core.count.call(null,inst_296121);
var inst_296124 = cljs.core._EQ_.call(null,inst_296123,(0));
var state_296142__$1 = state_296142;
if(inst_296124){
var statearr_296146_296173 = state_296142__$1;
(statearr_296146_296173[(1)] = (5));

} else {
var statearr_296147_296174 = state_296142__$1;
(statearr_296147_296174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296143 === (4))){
var inst_296140 = (state_296142[(2)]);
var state_296142__$1 = state_296142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296142__$1,inst_296140);
} else {
if((state_val_296143 === (5))){
var inst_296126 = cljs.core.println.call(null,"done");
var state_296142__$1 = state_296142;
var statearr_296148_296175 = state_296142__$1;
(statearr_296148_296175[(2)] = inst_296126);

(statearr_296148_296175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296143 === (6))){
var inst_296121 = (state_296142[(7)]);
var inst_296128 = cljs.core.async.chan.call(null);
var inst_296129 = cljs.core.first.call(null,inst_296121);
var inst_296130 = (function (){var v = inst_296121;
var rc = inst_296128;
var cmd = inst_296129;
return ((function (v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__){
return (function (state_296152){
var state_val_296153 = (state_296152[(1)]);
if((state_val_296153 === (1))){
var state_296152__$1 = state_296152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296152__$1,(2),rc,res);
} else {
if((state_val_296153 === (2))){
var inst_296150 = (state_296152[(2)]);
var state_296152__$1 = state_296152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296152__$1,inst_296150);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_296157 = [null,null,null,null,null,null,null];
(statearr_296157[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_296157[(1)] = (1));

return statearr_296157;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_296152){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296158){if((e296158 instanceof Object)){
var ex__10429__auto__ = e296158;
var statearr_296159_296176 = state_296152;
(statearr_296159_296176[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296177 = state_296152;
state_296152 = G__296177;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_296152){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_296152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296160 = f__10447__auto__.call(null);
(statearr_296160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_296160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_296121,inst_296128,inst_296129,state_val_296143,c__10446__auto__))
})();
var inst_296131 = drop_dot.core.pure_js.execAndPrint(inst_296129,inst_296130);
var state_296142__$1 = (function (){var statearr_296161 = state_296142;
(statearr_296161[(8)] = inst_296131);

return statearr_296161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296142__$1,(8),inst_296128);
} else {
if((state_val_296143 === (7))){
var inst_296138 = (state_296142[(2)]);
var state_296142__$1 = state_296142;
var statearr_296162_296178 = state_296142__$1;
(statearr_296162_296178[(2)] = inst_296138);

(statearr_296162_296178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296143 === (8))){
var inst_296121 = (state_296142[(7)]);
var inst_296133 = (state_296142[(2)]);
var inst_296134 = cljs.core.rest.call(null,inst_296121);
var inst_296135 = cljs.core.vec.call(null,inst_296134);
var inst_296121__$1 = inst_296135;
var state_296142__$1 = (function (){var statearr_296163 = state_296142;
(statearr_296163[(7)] = inst_296121__$1);

(statearr_296163[(9)] = inst_296133);

return statearr_296163;
})();
var statearr_296164_296179 = state_296142__$1;
(statearr_296164_296179[(2)] = null);

(statearr_296164_296179[(1)] = (3));


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
var statearr_296168 = [null,null,null,null,null,null,null,null,null,null];
(statearr_296168[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_296168[(1)] = (1));

return statearr_296168;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_296142){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296169){if((e296169 instanceof Object)){
var ex__10429__auto__ = e296169;
var statearr_296170_296180 = state_296142;
(statearr_296170_296180[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296181 = state_296142;
state_296142 = G__296181;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_296142){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_296142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296171 = f__10447__auto__.call(null);
(statearr_296171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296171;
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
return (function (state_296193){
var state_val_296194 = (state_296193[(1)]);
if((state_val_296194 === (1))){
var state_296193__$1 = state_296193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296193__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_296198 = [null,null,null,null,null,null,null];
(statearr_296198[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_296198[(1)] = (1));

return statearr_296198;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_296193){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296199){if((e296199 instanceof Object)){
var ex__10429__auto__ = e296199;
var statearr_296200_296202 = state_296193;
(statearr_296200_296202[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296203 = state_296193;
state_296193 = G__296203;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_296193){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_296193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_296201 = f__10447__auto__.call(null);
(statearr_296201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296201;
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
return (function (state_296219){
var state_val_296220 = (state_296219[(1)]);
if((state_val_296220 === (1))){
var state_296219__$1 = state_296219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296219__$1,(2),d,res__$1);
} else {
if((state_val_296220 === (2))){
var inst_296217 = (state_296219[(2)]);
var state_296219__$1 = state_296219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296219__$1,inst_296217);
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
var statearr_296224 = [null,null,null,null,null,null,null];
(statearr_296224[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_296224[(1)] = (1));

return statearr_296224;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_296219){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296225){if((e296225 instanceof Object)){
var ex__10429__auto__ = e296225;
var statearr_296226_296228 = state_296219;
(statearr_296226_296228[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296229 = state_296219;
state_296219 = G__296229;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_296219){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_296219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_296227 = f__10447__auto__.call(null);
(statearr_296227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296227;
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
return (function (state_296261){
var state_val_296262 = (state_296261[(1)]);
if((state_val_296262 === (1))){
var inst_296252 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_296261__$1 = state_296261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296261__$1,(2),inst_296252);
} else {
if((state_val_296262 === (2))){
var inst_296254 = (state_296261[(2)]);
var state_296261__$1 = state_296261;
if(cljs.core.truth_(inst_296254)){
var statearr_296263_296274 = state_296261__$1;
(statearr_296263_296274[(1)] = (3));

} else {
var statearr_296264_296275 = state_296261__$1;
(statearr_296264_296275[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296262 === (3))){
var state_296261__$1 = state_296261;
var statearr_296265_296276 = state_296261__$1;
(statearr_296265_296276[(2)] = line);

(statearr_296265_296276[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296262 === (4))){
var inst_296257 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_296261__$1 = state_296261;
var statearr_296266_296277 = state_296261__$1;
(statearr_296266_296277[(2)] = inst_296257);

(statearr_296266_296277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296262 === (5))){
var inst_296259 = (state_296261[(2)]);
var state_296261__$1 = state_296261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296261__$1,inst_296259);
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
var statearr_296270 = [null,null,null,null,null,null,null];
(statearr_296270[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_296270[(1)] = (1));

return statearr_296270;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_296261){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296271){if((e296271 instanceof Object)){
var ex__10429__auto__ = e296271;
var statearr_296272_296278 = state_296261;
(statearr_296272_296278[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296279 = state_296261;
state_296261 = G__296279;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_296261){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_296261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296273 = f__10447__auto__.call(null);
(statearr_296273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296273;
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
return (function (state_296350){
var state_val_296351 = (state_296350[(1)]);
if((state_val_296351 === (1))){
var state_296350__$1 = state_296350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296350__$1,(2),chan_verified_path);
} else {
if((state_val_296351 === (2))){
var inst_296336 = (state_296350[(7)]);
var inst_296337 = (state_296350[(8)]);
var inst_296336__$1 = (state_296350[(2)]);
var inst_296337__$1 = cljs.core.async.chan.call(null,(1));
var inst_296338 = (function (){var verified_path = inst_296336__$1;
var rc = inst_296337__$1;
return ((function (verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function (state_296356){
var state_val_296357 = (state_296356[(1)]);
if((state_val_296357 === (1))){
var inst_296352 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_296356__$1 = state_296356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296356__$1,(2),rc,inst_296352);
} else {
if((state_val_296357 === (2))){
var inst_296354 = (state_296356[(2)]);
var state_296356__$1 = state_296356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296356__$1,inst_296354);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_296361 = [null,null,null,null,null,null,null];
(statearr_296361[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_296361[(1)] = (1));

return statearr_296361;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_296356){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296362){if((e296362 instanceof Object)){
var ex__10429__auto__ = e296362;
var statearr_296363_296390 = state_296356;
(statearr_296363_296390[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296391 = state_296356;
state_296356 = G__296391;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_296356){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_296356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296364 = f__10447__auto__.call(null);
(statearr_296364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_296364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function (state_296368){
var state_val_296369 = (state_296368[(1)]);
if((state_val_296369 === (1))){
var state_296368__$1 = state_296368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296368__$1,(2),rc,verified_path);
} else {
if((state_val_296369 === (2))){
var inst_296366 = (state_296368[(2)]);
var state_296368__$1 = state_296368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296368__$1,inst_296366);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_296373 = [null,null,null,null,null,null,null];
(statearr_296373[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_296373[(1)] = (1));

return statearr_296373;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_296368){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296374){if((e296374 instanceof Object)){
var ex__10429__auto__ = e296374;
var statearr_296375_296392 = state_296368;
(statearr_296375_296392[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296393 = state_296368;
state_296368 = G__296393;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_296368){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_296368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296376 = f__10447__auto__.call(null);
(statearr_296376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_296376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_296336,inst_296337,inst_296336__$1,inst_296337__$1,state_val_296351,c__10446__auto__))
})();
var inst_296339 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_296336__$1);
var state_296350__$1 = (function (){var statearr_296377 = state_296350;
(statearr_296377[(7)] = inst_296336__$1);

(statearr_296377[(9)] = inst_296338);

(statearr_296377[(8)] = inst_296337__$1);

return statearr_296377;
})();
if(cljs.core.truth_(inst_296339)){
var statearr_296378_296394 = state_296350__$1;
(statearr_296378_296394[(1)] = (3));

} else {
var statearr_296379_296395 = state_296350__$1;
(statearr_296379_296395[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296351 === (3))){
var inst_296336 = (state_296350[(7)]);
var inst_296337 = (state_296350[(8)]);
var state_296350__$1 = state_296350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296350__$1,(6),inst_296337,inst_296336);
} else {
if((state_val_296351 === (4))){
var inst_296336 = (state_296350[(7)]);
var inst_296338 = (state_296350[(9)]);
var inst_296344 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_296336,inst_296338);
var state_296350__$1 = state_296350;
var statearr_296380_296396 = state_296350__$1;
(statearr_296380_296396[(2)] = inst_296344);

(statearr_296380_296396[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296351 === (5))){
var inst_296337 = (state_296350[(8)]);
var inst_296346 = (state_296350[(2)]);
var state_296350__$1 = (function (){var statearr_296381 = state_296350;
(statearr_296381[(10)] = inst_296346);

return statearr_296381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296350__$1,(7),inst_296337);
} else {
if((state_val_296351 === (6))){
var inst_296342 = (state_296350[(2)]);
var state_296350__$1 = state_296350;
var statearr_296382_296397 = state_296350__$1;
(statearr_296382_296397[(2)] = inst_296342);

(statearr_296382_296397[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296351 === (7))){
var inst_296348 = (state_296350[(2)]);
var state_296350__$1 = state_296350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296350__$1,inst_296348);
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
var statearr_296386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_296386[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_296386[(1)] = (1));

return statearr_296386;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_296350){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296387){if((e296387 instanceof Object)){
var ex__10429__auto__ = e296387;
var statearr_296388_296398 = state_296350;
(statearr_296388_296398[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296399 = state_296350;
state_296350 = G__296399;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_296350){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_296350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296389 = f__10447__auto__.call(null);
(statearr_296389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296389;
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
return (function (state_296434){
var state_val_296435 = (state_296434[(1)]);
if((state_val_296435 === (1))){
var state_296434__$1 = state_296434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296434__$1,(2),c);
} else {
if((state_val_296435 === (2))){
var inst_296425 = (state_296434[(7)]);
var inst_296425__$1 = (state_296434[(2)]);
var inst_296426 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_296425__$1);
var state_296434__$1 = (function (){var statearr_296436 = state_296434;
(statearr_296436[(7)] = inst_296425__$1);

return statearr_296436;
})();
if(cljs.core.truth_(inst_296426)){
var statearr_296437_296448 = state_296434__$1;
(statearr_296437_296448[(1)] = (3));

} else {
var statearr_296438_296449 = state_296434__$1;
(statearr_296438_296449[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296435 === (3))){
var inst_296425 = (state_296434[(7)]);
var inst_296428 = cljs.core.println.call(null,inst_296425);
var state_296434__$1 = state_296434;
var statearr_296439_296450 = state_296434__$1;
(statearr_296439_296450[(2)] = inst_296428);

(statearr_296439_296450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296435 === (4))){
var inst_296425 = (state_296434[(7)]);
var inst_296430 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_296425);
var state_296434__$1 = state_296434;
var statearr_296440_296451 = state_296434__$1;
(statearr_296440_296451[(2)] = inst_296430);

(statearr_296440_296451[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296435 === (5))){
var inst_296432 = (state_296434[(2)]);
var state_296434__$1 = state_296434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296434__$1,inst_296432);
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
var statearr_296444 = [null,null,null,null,null,null,null,null];
(statearr_296444[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_296444[(1)] = (1));

return statearr_296444;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_296434){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296445){if((e296445 instanceof Object)){
var ex__10429__auto__ = e296445;
var statearr_296446_296452 = state_296434;
(statearr_296446_296452[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296453 = state_296434;
state_296434 = G__296453;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_296434){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_296434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296447 = f__10447__auto__.call(null);
(statearr_296447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296447;
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
return (function (state_296482){
var state_val_296483 = (state_296482[(1)]);
if((state_val_296483 === (1))){
var state_296482__$1 = state_296482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296482__$1,(2),rc,line);
} else {
if((state_val_296483 === (2))){
var inst_296480 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296482__$1,inst_296480);
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
var statearr_296487 = [null,null,null,null,null,null,null];
(statearr_296487[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_296487[(1)] = (1));

return statearr_296487;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_296482){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296488){if((e296488 instanceof Object)){
var ex__10429__auto__ = e296488;
var statearr_296489_296504 = state_296482;
(statearr_296489_296504[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296505 = state_296482;
state_296482 = G__296505;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_296482){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_296482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_296490 = f__10447__auto__.call(null);
(statearr_296490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296490;
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
return (function (state_296495){
var state_val_296496 = (state_296495[(1)]);
if((state_val_296496 === (1))){
var inst_296491 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_296495__$1 = state_296495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296495__$1,(2),rc,inst_296491);
} else {
if((state_val_296496 === (2))){
var inst_296493 = (state_296495[(2)]);
var state_296495__$1 = state_296495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296495__$1,inst_296493);
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
var statearr_296500 = [null,null,null,null,null,null,null];
(statearr_296500[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_296500[(1)] = (1));

return statearr_296500;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_296495){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296501){if((e296501 instanceof Object)){
var ex__10429__auto__ = e296501;
var statearr_296502_296506 = state_296495;
(statearr_296502_296506[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296507 = state_296495;
state_296495 = G__296507;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_296495){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_296495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_296503 = f__10447__auto__.call(null);
(statearr_296503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296503;
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
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_296569){
var state_val_296570 = (state_296569[(1)]);
if((state_val_296570 === (7))){
var inst_296565 = (state_296569[(2)]);
var state_296569__$1 = state_296569;
var statearr_296571_296592 = state_296569__$1;
(statearr_296571_296592[(2)] = inst_296565);

(statearr_296571_296592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (1))){
var inst_296550 = chan_config;
var state_296569__$1 = (function (){var statearr_296572 = state_296569;
(statearr_296572[(7)] = inst_296550);

return statearr_296572;
})();
var statearr_296573_296593 = state_296569__$1;
(statearr_296573_296593[(2)] = null);

(statearr_296573_296593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (4))){
var inst_296553 = (state_296569[(8)]);
var inst_296553__$1 = (state_296569[(2)]);
var state_296569__$1 = (function (){var statearr_296574 = state_296569;
(statearr_296574[(8)] = inst_296553__$1);

return statearr_296574;
})();
if(cljs.core.truth_(inst_296553__$1)){
var statearr_296575_296594 = state_296569__$1;
(statearr_296575_296594[(1)] = (5));

} else {
var statearr_296576_296595 = state_296569__$1;
(statearr_296576_296595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (6))){
var state_296569__$1 = state_296569;
var statearr_296577_296596 = state_296569__$1;
(statearr_296577_296596[(2)] = null);

(statearr_296577_296596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (3))){
var inst_296567 = (state_296569[(2)]);
var state_296569__$1 = state_296569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296569__$1,inst_296567);
} else {
if((state_val_296570 === (2))){
var inst_296550 = (state_296569[(7)]);
var state_296569__$1 = state_296569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296569__$1,(4),inst_296550);
} else {
if((state_val_296570 === (9))){
var inst_296553 = (state_296569[(8)]);
var inst_296559 = cljs.core.println.call(null,inst_296553);
var state_296569__$1 = state_296569;
var statearr_296579_296597 = state_296569__$1;
(statearr_296579_296597[(2)] = inst_296559);

(statearr_296579_296597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (5))){
var inst_296555 = cljs.core._EQ_.call(null,cmd,"drop");
var state_296569__$1 = state_296569;
if(inst_296555){
var statearr_296580_296598 = state_296569__$1;
(statearr_296580_296598[(1)] = (8));

} else {
var statearr_296581_296599 = state_296569__$1;
(statearr_296581_296599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (10))){
var inst_296550 = (state_296569[(7)]);
var inst_296561 = (state_296569[(2)]);
var tmp296578 = inst_296550;
var inst_296550__$1 = tmp296578;
var state_296569__$1 = (function (){var statearr_296582 = state_296569;
(statearr_296582[(7)] = inst_296550__$1);

(statearr_296582[(9)] = inst_296561);

return statearr_296582;
})();
var statearr_296583_296600 = state_296569__$1;
(statearr_296583_296600[(2)] = null);

(statearr_296583_296600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296570 === (8))){
var inst_296553 = (state_296569[(8)]);
var inst_296557 = drop_dot.core.drop_line.call(null,inst_296553);
var state_296569__$1 = state_296569;
var statearr_296584_296601 = state_296569__$1;
(statearr_296584_296601[(2)] = inst_296557);

(statearr_296584_296601[(1)] = (10));


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
var statearr_296588 = [null,null,null,null,null,null,null,null,null,null];
(statearr_296588[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_296588[(1)] = (1));

return statearr_296588;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_296569){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296589){if((e296589 instanceof Object)){
var ex__10429__auto__ = e296589;
var statearr_296590_296602 = state_296569;
(statearr_296590_296602[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296603 = state_296569;
state_296569 = G__296603;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_296569){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_296569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_296591 = f__10447__auto__.call(null);
(statearr_296591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_296591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___296700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___296700,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___296700,c){
return (function (state_296664){
var state_val_296665 = (state_296664[(1)]);
if((state_val_296665 === (1))){
var inst_296654 = (state_296664[(7)]);
var inst_296653 = (state_296664[(8)]);
var inst_296652 = (state_296664[(9)]);
var inst_296652__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_296653__$1 = cljs.core.async.chan.call(null,(1));
var inst_296654__$1 = (function (){var res = inst_296652__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_296653__$1;
return ((function (res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c){
return (function (state_296669){
var state_val_296670 = (state_296669[(1)]);
if((state_val_296670 === (1))){
var state_296669__$1 = state_296669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296669__$1,(2),wcc,res__$1);
} else {
if((state_val_296670 === (2))){
var inst_296667 = (state_296669[(2)]);
var state_296669__$1 = state_296669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296669__$1,inst_296667);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_296674 = [null,null,null,null,null,null,null];
(statearr_296674[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_296674[(1)] = (1));

return statearr_296674;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_296669){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296675){if((e296675 instanceof Object)){
var ex__10429__auto__ = e296675;
var statearr_296676_296701 = state_296669;
(statearr_296676_296701[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296702 = state_296669;
state_296669 = G__296702;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_296669){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_296669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c))
})();
var state__10448__auto__ = (function (){var statearr_296677 = f__10447__auto__.call(null);
(statearr_296677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_296677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_296654,inst_296653,inst_296652,inst_296652__$1,inst_296653__$1,state_val_296665,c__10446__auto___296700,c))
})();
var inst_296655 = inst_296652__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_296654__$1);
var state_296664__$1 = (function (){var statearr_296678 = state_296664;
(statearr_296678[(7)] = inst_296654__$1);

(statearr_296678[(10)] = inst_296655);

(statearr_296678[(8)] = inst_296653__$1);

(statearr_296678[(9)] = inst_296652__$1);

return statearr_296678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296664__$1,(2),inst_296653__$1);
} else {
if((state_val_296665 === (2))){
var inst_296654 = (state_296664[(7)]);
var inst_296655 = (state_296664[(10)]);
var inst_296653 = (state_296664[(8)]);
var inst_296652 = (state_296664[(9)]);
var inst_296657 = (state_296664[(2)]);
var inst_296658 = [cljs.core.str(inst_296657)].join('');
var inst_296659 = parseInt(inst_296658);
var inst_296660 = (function (){var res = inst_296652;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_296653;
var wcc_jammer = inst_296654;
var get_wc = inst_296655;
var lines = inst_296659;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,state_val_296665,c__10446__auto___296700,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,state_val_296665,c__10446__auto___296700,c))
})();
var inst_296661 = (function (){var res = inst_296652;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_296653;
var wcc_jammer = inst_296654;
var get_wc = inst_296655;
var lines = inst_296659;
var close_if_done = inst_296660;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c){
return (function (state_296683){
var state_val_296684 = (state_296683[(1)]);
if((state_val_296684 === (1))){
var state_296683__$1 = state_296683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296683__$1,(2),c,res__$1);
} else {
if((state_val_296684 === (2))){
var inst_296680 = (state_296683[(2)]);
var inst_296681 = close_if_done.call(null);
var state_296683__$1 = (function (){var statearr_296685 = state_296683;
(statearr_296685[(7)] = inst_296680);

return statearr_296685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296683__$1,inst_296681);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_296689 = [null,null,null,null,null,null,null,null];
(statearr_296689[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_296689[(1)] = (1));

return statearr_296689;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_296683){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296690){if((e296690 instanceof Object)){
var ex__10429__auto__ = e296690;
var statearr_296691_296703 = state_296683;
(statearr_296691_296703[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296704 = state_296683;
state_296683 = G__296704;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_296683){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_296683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c))
})();
var state__10448__auto__ = (function (){var statearr_296692 = f__10447__auto__.call(null);
(statearr_296692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_296692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_296654,inst_296655,inst_296653,inst_296652,inst_296657,inst_296658,inst_296659,inst_296660,state_val_296665,c__10446__auto___296700,c))
})();
var inst_296662 = inst_296652.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_296661);
var state_296664__$1 = state_296664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296664__$1,inst_296662);
} else {
return null;
}
}
});})(c__10446__auto___296700,c))
;
return ((function (switch__10425__auto__,c__10446__auto___296700,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_296696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_296696[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_296696[(1)] = (1));

return statearr_296696;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_296664){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_296664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e296697){if((e296697 instanceof Object)){
var ex__10429__auto__ = e296697;
var statearr_296698_296705 = state_296664;
(statearr_296698_296705[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296706 = state_296664;
state_296664 = G__296706;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_296664){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_296664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___296700,c))
})();
var state__10448__auto__ = (function (){var statearr_296699 = f__10447__auto__.call(null);
(statearr_296699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___296700);

return statearr_296699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___296700,c))
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
var len__9156__auto___296708 = arguments.length;
var i__9157__auto___296709 = (0);
while(true){
if((i__9157__auto___296709 < len__9156__auto___296708)){
args__9163__auto__.push((arguments[i__9157__auto___296709]));

var G__296710 = (i__9157__auto___296709 + (1));
i__9157__auto___296709 = G__296710;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq296707){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq296707));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map