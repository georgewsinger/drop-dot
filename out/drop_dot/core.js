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
return (function (state_328891){
var state_val_328892 = (state_328891[(1)]);
if((state_val_328892 === (1))){
var state_328891__$1 = state_328891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_328891__$1,(2),c,arg);
} else {
if((state_val_328892 === (2))){
var inst_328889 = (state_328891[(2)]);
var state_328891__$1 = state_328891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_328891__$1,inst_328889);
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
var statearr_328896 = [null,null,null,null,null,null,null];
(statearr_328896[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_328896[(1)] = (1));

return statearr_328896;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_328891){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_328891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e328897){if((e328897 instanceof Object)){
var ex__10429__auto__ = e328897;
var statearr_328898_328900 = state_328891;
(statearr_328898_328900[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e328897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__328901 = state_328891;
state_328891 = G__328901;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_328891){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_328891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_328899 = f__10447__auto__.call(null);
(statearr_328899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_328899;
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
return (function (state_328917){
var state_val_328918 = (state_328917[(1)]);
if((state_val_328918 === (1))){
var state_328917__$1 = state_328917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_328917__$1,(2),c,arg);
} else {
if((state_val_328918 === (2))){
var inst_328915 = (state_328917[(2)]);
var state_328917__$1 = state_328917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_328917__$1,inst_328915);
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
var statearr_328922 = [null,null,null,null,null,null,null];
(statearr_328922[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_328922[(1)] = (1));

return statearr_328922;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_328917){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_328917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e328923){if((e328923 instanceof Object)){
var ex__10429__auto__ = e328923;
var statearr_328924_328926 = state_328917;
(statearr_328924_328926[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_328917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e328923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__328927 = state_328917;
state_328917 = G__328927;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_328917){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_328917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_328925 = f__10447__auto__.call(null);
(statearr_328925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_328925;
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
return (function (state_329004){
var state_val_329005 = (state_329004[(1)]);
if((state_val_329005 === (1))){
var state_329004__$1 = state_329004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329004__$1,(2),input_chan);
} else {
if((state_val_329005 === (2))){
var inst_328982 = (state_329004[(2)]);
var inst_328983 = inst_328982;
var state_329004__$1 = (function (){var statearr_329006 = state_329004;
(statearr_329006[(7)] = inst_328983);

return statearr_329006;
})();
var statearr_329007_329034 = state_329004__$1;
(statearr_329007_329034[(2)] = null);

(statearr_329007_329034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329005 === (3))){
var inst_328983 = (state_329004[(7)]);
var inst_328985 = cljs.core.count.call(null,inst_328983);
var inst_328986 = cljs.core._EQ_.call(null,inst_328985,(0));
var state_329004__$1 = state_329004;
if(inst_328986){
var statearr_329008_329035 = state_329004__$1;
(statearr_329008_329035[(1)] = (5));

} else {
var statearr_329009_329036 = state_329004__$1;
(statearr_329009_329036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329005 === (4))){
var inst_329002 = (state_329004[(2)]);
var state_329004__$1 = state_329004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329004__$1,inst_329002);
} else {
if((state_val_329005 === (5))){
var inst_328988 = cljs.core.println.call(null,"done");
var state_329004__$1 = state_329004;
var statearr_329010_329037 = state_329004__$1;
(statearr_329010_329037[(2)] = inst_328988);

(statearr_329010_329037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329005 === (6))){
var inst_328983 = (state_329004[(7)]);
var inst_328990 = cljs.core.async.chan.call(null);
var inst_328991 = cljs.core.first.call(null,inst_328983);
var inst_328992 = (function (){var v = inst_328983;
var rc = inst_328990;
var cmd = inst_328991;
return ((function (v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__){
return (function (state_329014){
var state_val_329015 = (state_329014[(1)]);
if((state_val_329015 === (1))){
var state_329014__$1 = state_329014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329014__$1,(2),rc,res);
} else {
if((state_val_329015 === (2))){
var inst_329012 = (state_329014[(2)]);
var state_329014__$1 = state_329014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329014__$1,inst_329012);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_329019 = [null,null,null,null,null,null,null];
(statearr_329019[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_329019[(1)] = (1));

return statearr_329019;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_329014){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329020){if((e329020 instanceof Object)){
var ex__10429__auto__ = e329020;
var statearr_329021_329038 = state_329014;
(statearr_329021_329038[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329039 = state_329014;
state_329014 = G__329039;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_329014){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_329014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329022 = f__10447__auto__.call(null);
(statearr_329022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_328983,inst_328990,inst_328991,state_val_329005,c__10446__auto__))
})();
var inst_328993 = drop_dot.core.pure_js.execAndPrint(inst_328991,inst_328992);
var state_329004__$1 = (function (){var statearr_329023 = state_329004;
(statearr_329023[(8)] = inst_328993);

return statearr_329023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329004__$1,(8),inst_328990);
} else {
if((state_val_329005 === (7))){
var inst_329000 = (state_329004[(2)]);
var state_329004__$1 = state_329004;
var statearr_329024_329040 = state_329004__$1;
(statearr_329024_329040[(2)] = inst_329000);

(statearr_329024_329040[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329005 === (8))){
var inst_328983 = (state_329004[(7)]);
var inst_328995 = (state_329004[(2)]);
var inst_328996 = cljs.core.rest.call(null,inst_328983);
var inst_328997 = cljs.core.vec.call(null,inst_328996);
var inst_328983__$1 = inst_328997;
var state_329004__$1 = (function (){var statearr_329025 = state_329004;
(statearr_329025[(9)] = inst_328995);

(statearr_329025[(7)] = inst_328983__$1);

return statearr_329025;
})();
var statearr_329026_329041 = state_329004__$1;
(statearr_329026_329041[(2)] = null);

(statearr_329026_329041[(1)] = (3));


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
var statearr_329030 = [null,null,null,null,null,null,null,null,null,null];
(statearr_329030[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_329030[(1)] = (1));

return statearr_329030;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_329004){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329031){if((e329031 instanceof Object)){
var ex__10429__auto__ = e329031;
var statearr_329032_329042 = state_329004;
(statearr_329032_329042[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329043 = state_329004;
state_329004 = G__329043;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_329004){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_329004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329033 = f__10447__auto__.call(null);
(statearr_329033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329033;
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
return (function (state_329055){
var state_val_329056 = (state_329055[(1)]);
if((state_val_329056 === (1))){
var state_329055__$1 = state_329055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329055__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_329060 = [null,null,null,null,null,null,null];
(statearr_329060[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_329060[(1)] = (1));

return statearr_329060;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_329055){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329061){if((e329061 instanceof Object)){
var ex__10429__auto__ = e329061;
var statearr_329062_329064 = state_329055;
(statearr_329062_329064[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329065 = state_329055;
state_329055 = G__329065;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_329055){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_329055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_329063 = f__10447__auto__.call(null);
(statearr_329063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329063;
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
return (function (state_329081){
var state_val_329082 = (state_329081[(1)]);
if((state_val_329082 === (1))){
var state_329081__$1 = state_329081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329081__$1,(2),d,res__$1);
} else {
if((state_val_329082 === (2))){
var inst_329079 = (state_329081[(2)]);
var state_329081__$1 = state_329081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329081__$1,inst_329079);
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
var statearr_329086 = [null,null,null,null,null,null,null];
(statearr_329086[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_329086[(1)] = (1));

return statearr_329086;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_329081){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329087){if((e329087 instanceof Object)){
var ex__10429__auto__ = e329087;
var statearr_329088_329090 = state_329081;
(statearr_329088_329090[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329091 = state_329081;
state_329081 = G__329091;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_329081){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_329081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_329089 = f__10447__auto__.call(null);
(statearr_329089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329089;
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
return (function (state_329123){
var state_val_329124 = (state_329123[(1)]);
if((state_val_329124 === (1))){
var inst_329114 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_329123__$1 = state_329123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329123__$1,(2),inst_329114);
} else {
if((state_val_329124 === (2))){
var inst_329116 = (state_329123[(2)]);
var state_329123__$1 = state_329123;
if(cljs.core.truth_(inst_329116)){
var statearr_329125_329136 = state_329123__$1;
(statearr_329125_329136[(1)] = (3));

} else {
var statearr_329126_329137 = state_329123__$1;
(statearr_329126_329137[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329124 === (3))){
var state_329123__$1 = state_329123;
var statearr_329127_329138 = state_329123__$1;
(statearr_329127_329138[(2)] = line);

(statearr_329127_329138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329124 === (4))){
var inst_329119 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_329123__$1 = state_329123;
var statearr_329128_329139 = state_329123__$1;
(statearr_329128_329139[(2)] = inst_329119);

(statearr_329128_329139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329124 === (5))){
var inst_329121 = (state_329123[(2)]);
var state_329123__$1 = state_329123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329123__$1,inst_329121);
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
var statearr_329132 = [null,null,null,null,null,null,null];
(statearr_329132[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_329132[(1)] = (1));

return statearr_329132;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_329123){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329133){if((e329133 instanceof Object)){
var ex__10429__auto__ = e329133;
var statearr_329134_329140 = state_329123;
(statearr_329134_329140[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329141 = state_329123;
state_329123 = G__329141;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_329123){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_329123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329135 = f__10447__auto__.call(null);
(statearr_329135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329135;
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
return (function (state_329212){
var state_val_329213 = (state_329212[(1)]);
if((state_val_329213 === (1))){
var state_329212__$1 = state_329212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329212__$1,(2),chan_verified_path);
} else {
if((state_val_329213 === (2))){
var inst_329198 = (state_329212[(7)]);
var inst_329199 = (state_329212[(8)]);
var inst_329198__$1 = (state_329212[(2)]);
var inst_329199__$1 = cljs.core.async.chan.call(null,(1));
var inst_329200 = (function (){var verified_path = inst_329198__$1;
var rc = inst_329199__$1;
return ((function (verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function (state_329218){
var state_val_329219 = (state_329218[(1)]);
if((state_val_329219 === (1))){
var inst_329214 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_329218__$1 = state_329218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329218__$1,(2),rc,inst_329214);
} else {
if((state_val_329219 === (2))){
var inst_329216 = (state_329218[(2)]);
var state_329218__$1 = state_329218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329218__$1,inst_329216);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_329223 = [null,null,null,null,null,null,null];
(statearr_329223[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_329223[(1)] = (1));

return statearr_329223;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_329218){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329224){if((e329224 instanceof Object)){
var ex__10429__auto__ = e329224;
var statearr_329225_329252 = state_329218;
(statearr_329225_329252[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329253 = state_329218;
state_329218 = G__329253;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_329218){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_329218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329226 = f__10447__auto__.call(null);
(statearr_329226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function (state_329230){
var state_val_329231 = (state_329230[(1)]);
if((state_val_329231 === (1))){
var state_329230__$1 = state_329230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329230__$1,(2),rc,verified_path);
} else {
if((state_val_329231 === (2))){
var inst_329228 = (state_329230[(2)]);
var state_329230__$1 = state_329230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329230__$1,inst_329228);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_329235 = [null,null,null,null,null,null,null];
(statearr_329235[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_329235[(1)] = (1));

return statearr_329235;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_329230){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329236){if((e329236 instanceof Object)){
var ex__10429__auto__ = e329236;
var statearr_329237_329254 = state_329230;
(statearr_329237_329254[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329255 = state_329230;
state_329230 = G__329255;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_329230){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_329230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329238 = f__10447__auto__.call(null);
(statearr_329238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_329198,inst_329199,inst_329198__$1,inst_329199__$1,state_val_329213,c__10446__auto__))
})();
var inst_329201 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_329198__$1);
var state_329212__$1 = (function (){var statearr_329239 = state_329212;
(statearr_329239[(7)] = inst_329198__$1);

(statearr_329239[(8)] = inst_329199__$1);

(statearr_329239[(9)] = inst_329200);

return statearr_329239;
})();
if(cljs.core.truth_(inst_329201)){
var statearr_329240_329256 = state_329212__$1;
(statearr_329240_329256[(1)] = (3));

} else {
var statearr_329241_329257 = state_329212__$1;
(statearr_329241_329257[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329213 === (3))){
var inst_329198 = (state_329212[(7)]);
var inst_329199 = (state_329212[(8)]);
var state_329212__$1 = state_329212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329212__$1,(6),inst_329199,inst_329198);
} else {
if((state_val_329213 === (4))){
var inst_329198 = (state_329212[(7)]);
var inst_329200 = (state_329212[(9)]);
var inst_329206 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_329198,inst_329200);
var state_329212__$1 = state_329212;
var statearr_329242_329258 = state_329212__$1;
(statearr_329242_329258[(2)] = inst_329206);

(statearr_329242_329258[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329213 === (5))){
var inst_329199 = (state_329212[(8)]);
var inst_329208 = (state_329212[(2)]);
var state_329212__$1 = (function (){var statearr_329243 = state_329212;
(statearr_329243[(10)] = inst_329208);

return statearr_329243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329212__$1,(7),inst_329199);
} else {
if((state_val_329213 === (6))){
var inst_329204 = (state_329212[(2)]);
var state_329212__$1 = state_329212;
var statearr_329244_329259 = state_329212__$1;
(statearr_329244_329259[(2)] = inst_329204);

(statearr_329244_329259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329213 === (7))){
var inst_329210 = (state_329212[(2)]);
var state_329212__$1 = state_329212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329212__$1,inst_329210);
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
var statearr_329248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_329248[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_329248[(1)] = (1));

return statearr_329248;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_329212){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329249){if((e329249 instanceof Object)){
var ex__10429__auto__ = e329249;
var statearr_329250_329260 = state_329212;
(statearr_329250_329260[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329261 = state_329212;
state_329212 = G__329261;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_329212){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_329212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329251 = f__10447__auto__.call(null);
(statearr_329251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329251;
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
return (function (state_329296){
var state_val_329297 = (state_329296[(1)]);
if((state_val_329297 === (1))){
var state_329296__$1 = state_329296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329296__$1,(2),c);
} else {
if((state_val_329297 === (2))){
var inst_329287 = (state_329296[(7)]);
var inst_329287__$1 = (state_329296[(2)]);
var inst_329288 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_329287__$1);
var state_329296__$1 = (function (){var statearr_329298 = state_329296;
(statearr_329298[(7)] = inst_329287__$1);

return statearr_329298;
})();
if(cljs.core.truth_(inst_329288)){
var statearr_329299_329310 = state_329296__$1;
(statearr_329299_329310[(1)] = (3));

} else {
var statearr_329300_329311 = state_329296__$1;
(statearr_329300_329311[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329297 === (3))){
var inst_329287 = (state_329296[(7)]);
var inst_329290 = cljs.core.println.call(null,inst_329287);
var state_329296__$1 = state_329296;
var statearr_329301_329312 = state_329296__$1;
(statearr_329301_329312[(2)] = inst_329290);

(statearr_329301_329312[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329297 === (4))){
var inst_329287 = (state_329296[(7)]);
var inst_329292 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_329287);
var state_329296__$1 = state_329296;
var statearr_329302_329313 = state_329296__$1;
(statearr_329302_329313[(2)] = inst_329292);

(statearr_329302_329313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329297 === (5))){
var inst_329294 = (state_329296[(2)]);
var state_329296__$1 = state_329296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329296__$1,inst_329294);
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
var statearr_329306 = [null,null,null,null,null,null,null,null];
(statearr_329306[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_329306[(1)] = (1));

return statearr_329306;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_329296){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329307){if((e329307 instanceof Object)){
var ex__10429__auto__ = e329307;
var statearr_329308_329314 = state_329296;
(statearr_329308_329314[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329315 = state_329296;
state_329296 = G__329315;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_329296){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_329296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329309 = f__10447__auto__.call(null);
(statearr_329309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329309;
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
return (function (state_329344){
var state_val_329345 = (state_329344[(1)]);
if((state_val_329345 === (1))){
var state_329344__$1 = state_329344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329344__$1,(2),rc,line);
} else {
if((state_val_329345 === (2))){
var inst_329342 = (state_329344[(2)]);
var state_329344__$1 = state_329344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329344__$1,inst_329342);
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
var statearr_329349 = [null,null,null,null,null,null,null];
(statearr_329349[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_329349[(1)] = (1));

return statearr_329349;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_329344){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329350){if((e329350 instanceof Object)){
var ex__10429__auto__ = e329350;
var statearr_329351_329366 = state_329344;
(statearr_329351_329366[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329367 = state_329344;
state_329344 = G__329367;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_329344){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_329344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_329352 = f__10447__auto__.call(null);
(statearr_329352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329352;
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
return (function (state_329357){
var state_val_329358 = (state_329357[(1)]);
if((state_val_329358 === (1))){
var inst_329353 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_329357__$1 = state_329357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329357__$1,(2),rc,inst_329353);
} else {
if((state_val_329358 === (2))){
var inst_329355 = (state_329357[(2)]);
var state_329357__$1 = state_329357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329357__$1,inst_329355);
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
var statearr_329362 = [null,null,null,null,null,null,null];
(statearr_329362[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__);

(statearr_329362[(1)] = (1));

return statearr_329362;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1 = (function (state_329357){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329363){if((e329363 instanceof Object)){
var ex__10429__auto__ = e329363;
var statearr_329364_329368 = state_329357;
(statearr_329364_329368[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329369 = state_329357;
state_329357 = G__329369;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__ = function(state_329357){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1.call(this,state_329357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,basename,target_path,rc))
})();
var state__10448__auto__ = (function (){var statearr_329365 = f__10447__auto__.call(null);
(statearr_329365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329365;
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
drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking(chan_linkable_path){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_329440){
var state_val_329441 = (state_329440[(1)]);
if((state_val_329441 === (1))){
var state_329440__$1 = state_329440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329440__$1,(2),chan_linkable_path);
} else {
if((state_val_329441 === (2))){
var inst_329427 = (state_329440[(7)]);
var inst_329426 = (state_329440[(8)]);
var inst_329426__$1 = (state_329440[(2)]);
var inst_329427__$1 = cljs.core.async.chan.call(null,(1));
var inst_329428 = (function (){var linkable_path = inst_329426__$1;
var rc = inst_329427__$1;
return ((function (linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function (state_329446){
var state_val_329447 = (state_329446[(1)]);
if((state_val_329447 === (1))){
var inst_329442 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_329446__$1 = state_329446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329446__$1,(2),rc,inst_329442);
} else {
if((state_val_329447 === (2))){
var inst_329444 = (state_329446[(2)]);
var state_329446__$1 = state_329446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329446__$1,inst_329444);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_329451 = [null,null,null,null,null,null,null];
(statearr_329451[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_329451[(1)] = (1));

return statearr_329451;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_329446){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329452){if((e329452 instanceof Object)){
var ex__10429__auto__ = e329452;
var statearr_329453_329480 = state_329446;
(statearr_329453_329480[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329481 = state_329446;
state_329446 = G__329481;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_329446){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_329446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329454 = f__10447__auto__.call(null);
(statearr_329454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function (state_329458){
var state_val_329459 = (state_329458[(1)]);
if((state_val_329459 === (1))){
var state_329458__$1 = state_329458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329458__$1,(2),rc,linkable_path);
} else {
if((state_val_329459 === (2))){
var inst_329456 = (state_329458[(2)]);
var state_329458__$1 = state_329458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329458__$1,inst_329456);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_329463 = [null,null,null,null,null,null,null];
(statearr_329463[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_329463[(1)] = (1));

return statearr_329463;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_329458){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329464){if((e329464 instanceof Object)){
var ex__10429__auto__ = e329464;
var statearr_329465_329482 = state_329458;
(statearr_329465_329482[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329483 = state_329458;
state_329458 = G__329483;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_329458){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_329458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329466 = f__10447__auto__.call(null);
(statearr_329466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_329427,inst_329426,inst_329426__$1,inst_329427__$1,state_val_329441,c__10446__auto__))
})();
var inst_329429 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_329426__$1);
var state_329440__$1 = (function (){var statearr_329467 = state_329440;
(statearr_329467[(7)] = inst_329427__$1);

(statearr_329467[(8)] = inst_329426__$1);

(statearr_329467[(9)] = inst_329428);

return statearr_329467;
})();
if(cljs.core.truth_(inst_329429)){
var statearr_329468_329484 = state_329440__$1;
(statearr_329468_329484[(1)] = (3));

} else {
var statearr_329469_329485 = state_329440__$1;
(statearr_329469_329485[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329441 === (3))){
var inst_329427 = (state_329440[(7)]);
var inst_329426 = (state_329440[(8)]);
var state_329440__$1 = state_329440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329440__$1,(6),inst_329427,inst_329426);
} else {
if((state_val_329441 === (4))){
var inst_329426 = (state_329440[(8)]);
var inst_329428 = (state_329440[(9)]);
var inst_329434 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_329426,inst_329428);
var state_329440__$1 = state_329440;
var statearr_329470_329486 = state_329440__$1;
(statearr_329470_329486[(2)] = inst_329434);

(statearr_329470_329486[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329441 === (5))){
var inst_329427 = (state_329440[(7)]);
var inst_329436 = (state_329440[(2)]);
var state_329440__$1 = (function (){var statearr_329471 = state_329440;
(statearr_329471[(10)] = inst_329436);

return statearr_329471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329440__$1,(7),inst_329427);
} else {
if((state_val_329441 === (6))){
var inst_329432 = (state_329440[(2)]);
var state_329440__$1 = state_329440;
var statearr_329472_329487 = state_329440__$1;
(statearr_329472_329487[(2)] = inst_329432);

(statearr_329472_329487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329441 === (7))){
var inst_329438 = (state_329440[(2)]);
var state_329440__$1 = state_329440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329440__$1,inst_329438);
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
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_329476 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_329476[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__);

(statearr_329476[(1)] = (1));

return statearr_329476;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1 = (function (state_329440){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329477){if((e329477 instanceof Object)){
var ex__10429__auto__ = e329477;
var statearr_329478_329488 = state_329440;
(statearr_329478_329488[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329489 = state_329440;
state_329440 = G__329489;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__ = function(state_329440){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1.call(this,state_329440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329479 = f__10447__auto__.call(null);
(statearr_329479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329479;
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
return (function (state_329560){
var state_val_329561 = (state_329560[(1)]);
if((state_val_329561 === (1))){
var state_329560__$1 = state_329560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329560__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_329561 === (2))){
var inst_329546 = (state_329560[(7)]);
var inst_329547 = (state_329560[(8)]);
var inst_329546__$1 = (state_329560[(2)]);
var inst_329547__$1 = cljs.core.async.chan.call(null,(1));
var inst_329548 = (function (){var linkable_path = inst_329546__$1;
var rc = inst_329547__$1;
return ((function (linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function (state_329566){
var state_val_329567 = (state_329566[(1)]);
if((state_val_329567 === (1))){
var inst_329562 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_329566__$1 = state_329566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329566__$1,(2),rc,inst_329562);
} else {
if((state_val_329567 === (2))){
var inst_329564 = (state_329566[(2)]);
var state_329566__$1 = state_329566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329566__$1,inst_329564);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_329571 = [null,null,null,null,null,null,null];
(statearr_329571[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_329571[(1)] = (1));

return statearr_329571;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_329566){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329572){if((e329572 instanceof Object)){
var ex__10429__auto__ = e329572;
var statearr_329573_329600 = state_329566;
(statearr_329573_329600[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329601 = state_329566;
state_329566 = G__329601;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_329566){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_329566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329574 = f__10447__auto__.call(null);
(statearr_329574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function (state_329578){
var state_val_329579 = (state_329578[(1)]);
if((state_val_329579 === (1))){
var state_329578__$1 = state_329578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329578__$1,(2),rc,linkable_path);
} else {
if((state_val_329579 === (2))){
var inst_329576 = (state_329578[(2)]);
var state_329578__$1 = state_329578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329578__$1,inst_329576);
} else {
return null;
}
}
});})(c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_329583 = [null,null,null,null,null,null,null];
(statearr_329583[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_329583[(1)] = (1));

return statearr_329583;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_329578){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329584){if((e329584 instanceof Object)){
var ex__10429__auto__ = e329584;
var statearr_329585_329602 = state_329578;
(statearr_329585_329602[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329603 = state_329578;
state_329578 = G__329603;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_329578){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_329578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329586 = f__10447__auto__.call(null);
(statearr_329586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(linkable_path,rc,inst_329546,inst_329547,inst_329546__$1,inst_329547__$1,state_val_329561,c__10446__auto__))
})();
var inst_329549 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_329546__$1);
var state_329560__$1 = (function (){var statearr_329587 = state_329560;
(statearr_329587[(7)] = inst_329546__$1);

(statearr_329587[(8)] = inst_329547__$1);

(statearr_329587[(9)] = inst_329548);

return statearr_329587;
})();
if(cljs.core.truth_(inst_329549)){
var statearr_329588_329604 = state_329560__$1;
(statearr_329588_329604[(1)] = (3));

} else {
var statearr_329589_329605 = state_329560__$1;
(statearr_329589_329605[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329561 === (3))){
var inst_329546 = (state_329560[(7)]);
var inst_329547 = (state_329560[(8)]);
var state_329560__$1 = state_329560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329560__$1,(6),inst_329547,inst_329546);
} else {
if((state_val_329561 === (4))){
var inst_329546 = (state_329560[(7)]);
var inst_329548 = (state_329560[(9)]);
var inst_329554 = drop_dot.core.pure_js.pathExists(inst_329546,inst_329548);
var state_329560__$1 = state_329560;
var statearr_329590_329606 = state_329560__$1;
(statearr_329590_329606[(2)] = inst_329554);

(statearr_329590_329606[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329561 === (5))){
var inst_329547 = (state_329560[(8)]);
var inst_329556 = (state_329560[(2)]);
var state_329560__$1 = (function (){var statearr_329591 = state_329560;
(statearr_329591[(10)] = inst_329556);

return statearr_329591;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329560__$1,(7),inst_329547);
} else {
if((state_val_329561 === (6))){
var inst_329552 = (state_329560[(2)]);
var state_329560__$1 = state_329560;
var statearr_329592_329607 = state_329560__$1;
(statearr_329592_329607[(2)] = inst_329552);

(statearr_329592_329607[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329561 === (7))){
var inst_329558 = (state_329560[(2)]);
var state_329560__$1 = state_329560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329560__$1,inst_329558);
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
var statearr_329596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_329596[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__);

(statearr_329596[(1)] = (1));

return statearr_329596;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_329560){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329597){if((e329597 instanceof Object)){
var ex__10429__auto__ = e329597;
var statearr_329598_329608 = state_329560;
(statearr_329598_329608[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329609 = state_329560;
state_329560 = G__329609;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__ = function(state_329560){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_329560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329599 = f__10447__auto__.call(null);
(statearr_329599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__10446__auto___329642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___329642){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___329642){
return (function (state_329632){
var state_val_329633 = (state_329632[(1)]);
if((state_val_329633 === (1))){
var state_329632__$1 = state_329632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329632__$1,(2),c);
} else {
if((state_val_329633 === (2))){
var inst_329627 = (state_329632[(2)]);
var inst_329628 = drop_dot.core.pure_js.localExpandHomeDir(inst_329627);
var inst_329629 = drop_dot.core.pure_js.getDirname(inst_329628);
var inst_329630 = drop_dot.core.pure_js.getBasename(inst_329628);
var state_329632__$1 = (function (){var statearr_329634 = state_329632;
(statearr_329634[(7)] = inst_329630);

(statearr_329634[(8)] = inst_329629);

return statearr_329634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329632__$1,null);
} else {
return null;
}
}
});})(c__10446__auto___329642))
;
return ((function (switch__10425__auto__,c__10446__auto___329642){
return (function() {
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0 = (function (){
var statearr_329638 = [null,null,null,null,null,null,null,null,null];
(statearr_329638[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__);

(statearr_329638[(1)] = (1));

return statearr_329638;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1 = (function (state_329632){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329639){if((e329639 instanceof Object)){
var ex__10429__auto__ = e329639;
var statearr_329640_329643 = state_329632;
(statearr_329640_329643[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329644 = state_329632;
state_329632 = G__329644;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__ = function(state_329632){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1.call(this,state_329632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___329642))
})();
var state__10448__auto__ = (function (){var statearr_329641 = f__10447__auto__.call(null);
(statearr_329641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___329642);

return statearr_329641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___329642))
);


return drop_dot.core.exec_vec_of_commands.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("mkdir -vp "),cljs.core.str(drop_dot.core.config_dirname)].join(''),[cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(drop_dot.core.linkable_basename),cljs.core.str(" "),cljs.core.str(drop_dot.core.config_path)].join('')], null));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line)));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_329723){
var state_val_329724 = (state_329723[(1)]);
if((state_val_329724 === (7))){
var inst_329719 = (state_329723[(2)]);
var state_329723__$1 = state_329723;
var statearr_329726_329751 = state_329723__$1;
(statearr_329726_329751[(2)] = inst_329719);

(statearr_329726_329751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (1))){
var inst_329698 = chan_config;
var state_329723__$1 = (function (){var statearr_329727 = state_329723;
(statearr_329727[(7)] = inst_329698);

return statearr_329727;
})();
var statearr_329728_329752 = state_329723__$1;
(statearr_329728_329752[(2)] = null);

(statearr_329728_329752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (4))){
var inst_329701 = (state_329723[(8)]);
var inst_329701__$1 = (state_329723[(2)]);
var state_329723__$1 = (function (){var statearr_329729 = state_329723;
(statearr_329729[(8)] = inst_329701__$1);

return statearr_329729;
})();
if(cljs.core.truth_(inst_329701__$1)){
var statearr_329730_329753 = state_329723__$1;
(statearr_329730_329753[(1)] = (5));

} else {
var statearr_329731_329754 = state_329723__$1;
(statearr_329731_329754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (13))){
var inst_329698 = (state_329723[(7)]);
var inst_329715 = (state_329723[(2)]);
var tmp329725 = inst_329698;
var inst_329698__$1 = tmp329725;
var state_329723__$1 = (function (){var statearr_329732 = state_329723;
(statearr_329732[(7)] = inst_329698__$1);

(statearr_329732[(9)] = inst_329715);

return statearr_329732;
})();
var statearr_329733_329755 = state_329723__$1;
(statearr_329733_329755[(2)] = null);

(statearr_329733_329755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (6))){
var state_329723__$1 = state_329723;
var statearr_329734_329756 = state_329723__$1;
(statearr_329734_329756[(2)] = null);

(statearr_329734_329756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (3))){
var inst_329721 = (state_329723[(2)]);
var state_329723__$1 = state_329723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329723__$1,inst_329721);
} else {
if((state_val_329724 === (12))){
var state_329723__$1 = state_329723;
var statearr_329735_329757 = state_329723__$1;
(statearr_329735_329757[(2)] = null);

(statearr_329735_329757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (2))){
var inst_329698 = (state_329723[(7)]);
var state_329723__$1 = state_329723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329723__$1,(4),inst_329698);
} else {
if((state_val_329724 === (11))){
var inst_329701 = (state_329723[(8)]);
var inst_329712 = drop_dot.core.link_line.call(null,inst_329701);
var state_329723__$1 = state_329723;
var statearr_329736_329758 = state_329723__$1;
(statearr_329736_329758[(2)] = inst_329712);

(statearr_329736_329758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (9))){
var inst_329701 = (state_329723[(8)]);
var inst_329707 = cljs.core.println.call(null,inst_329701);
var state_329723__$1 = state_329723;
var statearr_329737_329759 = state_329723__$1;
(statearr_329737_329759[(2)] = inst_329707);

(statearr_329737_329759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (5))){
var inst_329703 = cljs.core._EQ_.call(null,cmd,"drop");
var state_329723__$1 = state_329723;
if(inst_329703){
var statearr_329738_329760 = state_329723__$1;
(statearr_329738_329760[(1)] = (8));

} else {
var statearr_329739_329761 = state_329723__$1;
(statearr_329739_329761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (10))){
var inst_329709 = (state_329723[(2)]);
var inst_329710 = cljs.core._EQ_.call(null,cmd,"link");
var state_329723__$1 = (function (){var statearr_329740 = state_329723;
(statearr_329740[(10)] = inst_329709);

return statearr_329740;
})();
if(inst_329710){
var statearr_329741_329762 = state_329723__$1;
(statearr_329741_329762[(1)] = (11));

} else {
var statearr_329742_329763 = state_329723__$1;
(statearr_329742_329763[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_329724 === (8))){
var inst_329701 = (state_329723[(8)]);
var inst_329705 = drop_dot.core.drop_line.call(null,inst_329701);
var state_329723__$1 = state_329723;
var statearr_329743_329764 = state_329723__$1;
(statearr_329743_329764[(2)] = inst_329705);

(statearr_329743_329764[(1)] = (10));


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
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0 = (function (){
var statearr_329747 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_329747[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_329747[(1)] = (1));

return statearr_329747;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_329723){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329748){if((e329748 instanceof Object)){
var ex__10429__auto__ = e329748;
var statearr_329749_329765 = state_329723;
(statearr_329749_329765[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329766 = state_329723;
state_329723 = G__329766;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_329723){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_329723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_329750 = f__10447__auto__.call(null);
(statearr_329750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_329750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___329863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___329863,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___329863,c){
return (function (state_329827){
var state_val_329828 = (state_329827[(1)]);
if((state_val_329828 === (1))){
var inst_329817 = (state_329827[(7)]);
var inst_329815 = (state_329827[(8)]);
var inst_329816 = (state_329827[(9)]);
var inst_329815__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_329816__$1 = cljs.core.async.chan.call(null,(1));
var inst_329817__$1 = (function (){var res = inst_329815__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_329816__$1;
return ((function (res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c){
return (function (state_329832){
var state_val_329833 = (state_329832[(1)]);
if((state_val_329833 === (1))){
var state_329832__$1 = state_329832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329832__$1,(2),wcc,res__$1);
} else {
if((state_val_329833 === (2))){
var inst_329830 = (state_329832[(2)]);
var state_329832__$1 = state_329832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329832__$1,inst_329830);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_329837 = [null,null,null,null,null,null,null];
(statearr_329837[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_329837[(1)] = (1));

return statearr_329837;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_329832){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329838){if((e329838 instanceof Object)){
var ex__10429__auto__ = e329838;
var statearr_329839_329864 = state_329832;
(statearr_329839_329864[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329865 = state_329832;
state_329832 = G__329865;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_329832){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_329832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c))
})();
var state__10448__auto__ = (function (){var statearr_329840 = f__10447__auto__.call(null);
(statearr_329840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_329817,inst_329815,inst_329816,inst_329815__$1,inst_329816__$1,state_val_329828,c__10446__auto___329863,c))
})();
var inst_329818 = inst_329815__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_329817__$1);
var state_329827__$1 = (function (){var statearr_329841 = state_329827;
(statearr_329841[(7)] = inst_329817__$1);

(statearr_329841[(8)] = inst_329815__$1);

(statearr_329841[(10)] = inst_329818);

(statearr_329841[(9)] = inst_329816__$1);

return statearr_329841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_329827__$1,(2),inst_329816__$1);
} else {
if((state_val_329828 === (2))){
var inst_329817 = (state_329827[(7)]);
var inst_329815 = (state_329827[(8)]);
var inst_329818 = (state_329827[(10)]);
var inst_329816 = (state_329827[(9)]);
var inst_329820 = (state_329827[(2)]);
var inst_329821 = [cljs.core.str(inst_329820)].join('');
var inst_329822 = parseInt(inst_329821);
var inst_329823 = (function (){var res = inst_329815;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_329816;
var wcc_jammer = inst_329817;
var get_wc = inst_329818;
var lines = inst_329822;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,state_val_329828,c__10446__auto___329863,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,state_val_329828,c__10446__auto___329863,c))
})();
var inst_329824 = (function (){var res = inst_329815;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_329816;
var wcc_jammer = inst_329817;
var get_wc = inst_329818;
var lines = inst_329822;
var close_if_done = inst_329823;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c){
return (function (state_329846){
var state_val_329847 = (state_329846[(1)]);
if((state_val_329847 === (1))){
var state_329846__$1 = state_329846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_329846__$1,(2),c,res__$1);
} else {
if((state_val_329847 === (2))){
var inst_329843 = (state_329846[(2)]);
var inst_329844 = close_if_done.call(null);
var state_329846__$1 = (function (){var statearr_329848 = state_329846;
(statearr_329848[(7)] = inst_329843);

return statearr_329848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329846__$1,inst_329844);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_329852 = [null,null,null,null,null,null,null,null];
(statearr_329852[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_329852[(1)] = (1));

return statearr_329852;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_329846){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329853){if((e329853 instanceof Object)){
var ex__10429__auto__ = e329853;
var statearr_329854_329866 = state_329846;
(statearr_329854_329866[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329867 = state_329846;
state_329846 = G__329867;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_329846){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_329846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c))
})();
var state__10448__auto__ = (function (){var statearr_329855 = f__10447__auto__.call(null);
(statearr_329855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_329855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_329817,inst_329815,inst_329818,inst_329816,inst_329820,inst_329821,inst_329822,inst_329823,state_val_329828,c__10446__auto___329863,c))
})();
var inst_329825 = inst_329815.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_329824);
var state_329827__$1 = state_329827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_329827__$1,inst_329825);
} else {
return null;
}
}
});})(c__10446__auto___329863,c))
;
return ((function (switch__10425__auto__,c__10446__auto___329863,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_329859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_329859[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_329859[(1)] = (1));

return statearr_329859;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_329827){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_329827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e329860){if((e329860 instanceof Object)){
var ex__10429__auto__ = e329860;
var statearr_329861_329868 = state_329827;
(statearr_329861_329868[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_329827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e329860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__329869 = state_329827;
state_329827 = G__329869;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_329827){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_329827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___329863,c))
})();
var state__10448__auto__ = (function (){var statearr_329862 = f__10447__auto__.call(null);
(statearr_329862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___329863);

return statearr_329862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___329863,c))
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
var len__9156__auto___329871 = arguments.length;
var i__9157__auto___329872 = (0);
while(true){
if((i__9157__auto___329872 < len__9156__auto___329871)){
args__9163__auto__.push((arguments[i__9157__auto___329872]));

var G__329873 = (i__9157__auto___329872 + (1));
i__9157__auto___329872 = G__329873;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq329870){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq329870));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map