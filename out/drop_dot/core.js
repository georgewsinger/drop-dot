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
return (function (state_65969){
var state_val_65970 = (state_65969[(1)]);
if((state_val_65970 === (1))){
var state_65969__$1 = state_65969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65969__$1,(2),c,arg);
} else {
if((state_val_65970 === (2))){
var inst_65967 = (state_65969[(2)]);
var state_65969__$1 = state_65969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65969__$1,inst_65967);
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
var statearr_65974 = [null,null,null,null,null,null,null];
(statearr_65974[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_65974[(1)] = (1));

return statearr_65974;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_65969){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_65969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e65975){if((e65975 instanceof Object)){
var ex__10431__auto__ = e65975;
var statearr_65976_65978 = state_65969;
(statearr_65976_65978[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65979 = state_65969;
state_65969 = G__65979;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_65969){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_65969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_65977 = f__10449__auto__.call(null);
(statearr_65977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_65977;
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
return (function (state_65995){
var state_val_65996 = (state_65995[(1)]);
if((state_val_65996 === (1))){
var state_65995__$1 = state_65995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65995__$1,(2),c,arg);
} else {
if((state_val_65996 === (2))){
var inst_65993 = (state_65995[(2)]);
var state_65995__$1 = state_65995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65995__$1,inst_65993);
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
var statearr_66000 = [null,null,null,null,null,null,null];
(statearr_66000[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__);

(statearr_66000[(1)] = (1));

return statearr_66000;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1 = (function (state_65995){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_65995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e66001){if((e66001 instanceof Object)){
var ex__10431__auto__ = e66001;
var statearr_66002_66004 = state_65995;
(statearr_66002_66004[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66005 = state_65995;
state_65995 = G__66005;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__ = function(state_65995){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1.call(this,state_65995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_66003 = f__10449__auto__.call(null);
(statearr_66003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_66003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
});
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__){
return (function (state_66082){
var state_val_66083 = (state_66082[(1)]);
if((state_val_66083 === (1))){
var state_66082__$1 = state_66082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66082__$1,(2),input_chan);
} else {
if((state_val_66083 === (2))){
var inst_66060 = (state_66082[(2)]);
var inst_66061 = inst_66060;
var state_66082__$1 = (function (){var statearr_66084 = state_66082;
(statearr_66084[(7)] = inst_66061);

return statearr_66084;
})();
var statearr_66085_66112 = state_66082__$1;
(statearr_66085_66112[(2)] = null);

(statearr_66085_66112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66083 === (3))){
var inst_66061 = (state_66082[(7)]);
var inst_66063 = cljs.core.count.call(null,inst_66061);
var inst_66064 = cljs.core._EQ_.call(null,inst_66063,(0));
var state_66082__$1 = state_66082;
if(inst_66064){
var statearr_66086_66113 = state_66082__$1;
(statearr_66086_66113[(1)] = (5));

} else {
var statearr_66087_66114 = state_66082__$1;
(statearr_66087_66114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66083 === (4))){
var inst_66080 = (state_66082[(2)]);
var state_66082__$1 = state_66082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66082__$1,inst_66080);
} else {
if((state_val_66083 === (5))){
var inst_66066 = cljs.core.println.call(null,"done");
var state_66082__$1 = state_66082;
var statearr_66088_66115 = state_66082__$1;
(statearr_66088_66115[(2)] = inst_66066);

(statearr_66088_66115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66083 === (6))){
var inst_66061 = (state_66082[(7)]);
var inst_66068 = cljs.core.async.chan.call(null);
var inst_66069 = cljs.core.first.call(null,inst_66061);
var inst_66070 = (function (){var v = inst_66061;
var rc = inst_66068;
var cmd = inst_66069;
return ((function (v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__){
return (function (res){
var c__10448__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto____$1,v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto____$1,v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__){
return (function (state_66092){
var state_val_66093 = (state_66092[(1)]);
if((state_val_66093 === (1))){
var state_66092__$1 = state_66092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66092__$1,(2),rc,res);
} else {
if((state_val_66093 === (2))){
var inst_66090 = (state_66092[(2)]);
var state_66092__$1 = state_66092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66092__$1,inst_66090);
} else {
return null;
}
}
});})(c__10448__auto____$1,v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto____$1,v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____0 = (function (){
var statearr_66097 = [null,null,null,null,null,null,null];
(statearr_66097[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__);

(statearr_66097[(1)] = (1));

return statearr_66097;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____1 = (function (state_66092){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_66092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e66098){if((e66098 instanceof Object)){
var ex__10431__auto__ = e66098;
var statearr_66099_66116 = state_66092;
(statearr_66099_66116[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66117 = state_66092;
state_66092 = G__66117;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__ = function(state_66092){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____1.call(this,state_66092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto____$1,v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_66100 = f__10449__auto__.call(null);
(statearr_66100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto____$1);

return statearr_66100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto____$1,v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__))
);

return c__10448__auto____$1;
});
;})(v,rc,cmd,inst_66061,inst_66068,inst_66069,state_val_66083,c__10448__auto__))
})();
var inst_66071 = drop_dot.core.pure_js.execAndPrint(inst_66069,inst_66070);
var state_66082__$1 = (function (){var statearr_66101 = state_66082;
(statearr_66101[(8)] = inst_66071);

return statearr_66101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66082__$1,(8),inst_66068);
} else {
if((state_val_66083 === (7))){
var inst_66078 = (state_66082[(2)]);
var state_66082__$1 = state_66082;
var statearr_66102_66118 = state_66082__$1;
(statearr_66102_66118[(2)] = inst_66078);

(statearr_66102_66118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66083 === (8))){
var inst_66061 = (state_66082[(7)]);
var inst_66073 = (state_66082[(2)]);
var inst_66074 = cljs.core.rest.call(null,inst_66061);
var inst_66075 = cljs.core.vec.call(null,inst_66074);
var inst_66061__$1 = inst_66075;
var state_66082__$1 = (function (){var statearr_66103 = state_66082;
(statearr_66103[(7)] = inst_66061__$1);

(statearr_66103[(9)] = inst_66073);

return statearr_66103;
})();
var statearr_66104_66119 = state_66082__$1;
(statearr_66104_66119[(2)] = null);

(statearr_66104_66119[(1)] = (3));


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
});})(c__10448__auto__))
;
return ((function (switch__10427__auto__,c__10448__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____0 = (function (){
var statearr_66108 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66108[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__);

(statearr_66108[(1)] = (1));

return statearr_66108;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____1 = (function (state_66082){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_66082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e66109){if((e66109 instanceof Object)){
var ex__10431__auto__ = e66109;
var statearr_66110_66120 = state_66082;
(statearr_66110_66120[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66121 = state_66082;
state_66082 = G__66121;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__ = function(state_66082){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____1.call(this,state_66082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_66111 = f__10449__auto__.call(null);
(statearr_66111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_66111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.call(null);
return drop_dot.core.chan_vec_cmd__GT_exec.call(null,(function (){var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,c){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,c){
return (function (state_66133){
var state_val_66134 = (state_66133[(1)]);
if((state_val_66134 === (1))){
var state_66133__$1 = state_66133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66133__$1,v);
} else {
return null;
}
});})(c__10448__auto__,c))
;
return ((function (switch__10427__auto__,c__10448__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto____0 = (function (){
var statearr_66138 = [null,null,null,null,null,null,null];
(statearr_66138[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto__);

(statearr_66138[(1)] = (1));

return statearr_66138;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto____1 = (function (state_66133){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_66133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e66139){if((e66139 instanceof Object)){
var ex__10431__auto__ = e66139;
var statearr_66140_66142 = state_66133;
(statearr_66140_66142[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66143 = state_66133;
state_66133 = G__66143;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto__ = function(state_66133){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto____1.call(this,state_66133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,c))
})();
var state__10450__auto__ = (function (){var statearr_66141 = f__10449__auto__.call(null);
(statearr_66141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_66141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__,c))
);

return c__10448__auto__;
})());
});
drop_dot.core.exec_vec_of_commands.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["echo 1","echo 2"], null));
drop_dot.core.chan_path_exists_QMARK_ = (function drop_dot$core$chan_path_exists_QMARK_(line){
var res = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__10448__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10448__auto__,res,d){
return (function (){
var f__10449__auto__ = (function (){var switch__10427__auto__ = ((function (c__10448__auto__,res,d){
return (function (state_66159){
var state_val_66160 = (state_66159[(1)]);
if((state_val_66160 === (1))){
var state_66159__$1 = state_66159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66159__$1,(2),d,res__$1);
} else {
if((state_val_66160 === (2))){
var inst_66157 = (state_66159[(2)]);
var state_66159__$1 = state_66159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66159__$1,inst_66157);
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
var statearr_66164 = [null,null,null,null,null,null,null];
(statearr_66164[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__);

(statearr_66164[(1)] = (1));

return statearr_66164;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1 = (function (state_66159){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_66159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e66165){if((e66165 instanceof Object)){
var ex__10431__auto__ = e66165;
var statearr_66166_66168 = state_66159;
(statearr_66166_66168[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66169 = state_66159;
state_66159 = G__66169;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__ = function(state_66159){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1.call(this,state_66159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__,res,d))
})();
var state__10450__auto__ = (function (){var statearr_66167 = f__10449__auto__.call(null);
(statearr_66167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_66167;
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
return (function (state_66197){
var state_val_66198 = (state_66197[(1)]);
if((state_val_66198 === (1))){
var inst_66190 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_66197__$1 = state_66197;
if(cljs.core.truth_(inst_66190)){
var statearr_66199_66210 = state_66197__$1;
(statearr_66199_66210[(1)] = (2));

} else {
var statearr_66200_66211 = state_66197__$1;
(statearr_66200_66211[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66198 === (2))){
var state_66197__$1 = state_66197;
var statearr_66201_66212 = state_66197__$1;
(statearr_66201_66212[(2)] = line);

(statearr_66201_66212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66198 === (3))){
var inst_66193 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_66197__$1 = state_66197;
var statearr_66202_66213 = state_66197__$1;
(statearr_66202_66213[(2)] = inst_66193);

(statearr_66202_66213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66198 === (4))){
var inst_66195 = (state_66197[(2)]);
var state_66197__$1 = state_66197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66197__$1,inst_66195);
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
var statearr_66206 = [null,null,null,null,null,null,null];
(statearr_66206[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__);

(statearr_66206[(1)] = (1));

return statearr_66206;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1 = (function (state_66197){
while(true){
var ret_value__10429__auto__ = (function (){try{while(true){
var result__10430__auto__ = switch__10427__auto__.call(null,state_66197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10430__auto__;
}
break;
}
}catch (e66207){if((e66207 instanceof Object)){
var ex__10431__auto__ = e66207;
var statearr_66208_66214 = state_66197;
(statearr_66208_66214[(5)] = ex__10431__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66215 = state_66197;
state_66197 = G__66215;
continue;
} else {
return ret_value__10429__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__ = function(state_66197){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1.call(this,state_66197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10428__auto__;
})()
;})(switch__10427__auto__,c__10448__auto__))
})();
var state__10450__auto__ = (function (){var statearr_66209 = f__10449__auto__.call(null);
(statearr_66209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10448__auto__);

return statearr_66209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10450__auto__);
});})(c__10448__auto__))
);

return c__10448__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
