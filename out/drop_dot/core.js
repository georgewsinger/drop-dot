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
return (function (state_18764){
var state_val_18765 = (state_18764[(1)]);
if((state_val_18765 === (1))){
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18764__$1,(2),c,arg);
} else {
if((state_val_18765 === (2))){
var inst_18762 = (state_18764[(2)]);
var state_18764__$1 = state_18764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18764__$1,inst_18762);
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
var statearr_18769 = [null,null,null,null,null,null,null];
(statearr_18769[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_18769[(1)] = (1));

return statearr_18769;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_18764){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e18770){if((e18770 instanceof Object)){
var ex__10429__auto__ = e18770;
var statearr_18771_18773 = state_18764;
(statearr_18771_18773[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18774 = state_18764;
state_18764 = G__18774;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_18764){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_18764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_18772 = f__10447__auto__.call(null);
(statearr_18772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_18772;
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
return (function (state_18790){
var state_val_18791 = (state_18790[(1)]);
if((state_val_18791 === (1))){
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18790__$1,(2),c,arg);
} else {
if((state_val_18791 === (2))){
var inst_18788 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18790__$1,inst_18788);
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
var statearr_18795 = [null,null,null,null,null,null,null];
(statearr_18795[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_18795[(1)] = (1));

return statearr_18795;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_18790){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e18796){if((e18796 instanceof Object)){
var ex__10429__auto__ = e18796;
var statearr_18797_18799 = state_18790;
(statearr_18797_18799[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18800 = state_18790;
state_18790 = G__18800;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_18790){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_18790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_18798 = f__10447__auto__.call(null);
(statearr_18798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_18798;
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
return (function (state_18877){
var state_val_18878 = (state_18877[(1)]);
if((state_val_18878 === (1))){
var state_18877__$1 = state_18877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18877__$1,(2),input_chan);
} else {
if((state_val_18878 === (2))){
var inst_18855 = (state_18877[(2)]);
var inst_18856 = inst_18855;
var state_18877__$1 = (function (){var statearr_18879 = state_18877;
(statearr_18879[(7)] = inst_18856);

return statearr_18879;
})();
var statearr_18880_18907 = state_18877__$1;
(statearr_18880_18907[(2)] = null);

(statearr_18880_18907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (3))){
var inst_18856 = (state_18877[(7)]);
var inst_18858 = cljs.core.count.call(null,inst_18856);
var inst_18859 = cljs.core._EQ_.call(null,inst_18858,(0));
var state_18877__$1 = state_18877;
if(inst_18859){
var statearr_18881_18908 = state_18877__$1;
(statearr_18881_18908[(1)] = (5));

} else {
var statearr_18882_18909 = state_18877__$1;
(statearr_18882_18909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (4))){
var inst_18875 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18877__$1,inst_18875);
} else {
if((state_val_18878 === (5))){
var inst_18861 = cljs.core.println.call(null,"done");
var state_18877__$1 = state_18877;
var statearr_18883_18910 = state_18877__$1;
(statearr_18883_18910[(2)] = inst_18861);

(statearr_18883_18910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (6))){
var inst_18856 = (state_18877[(7)]);
var inst_18863 = cljs.core.async.chan.call(null);
var inst_18864 = cljs.core.first.call(null,inst_18856);
var inst_18865 = (function (){var v = inst_18856;
var rc = inst_18863;
var cmd = inst_18864;
return ((function (v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__){
return (function (state_18887){
var state_val_18888 = (state_18887[(1)]);
if((state_val_18888 === (1))){
var state_18887__$1 = state_18887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18887__$1,(2),rc,res);
} else {
if((state_val_18888 === (2))){
var inst_18885 = (state_18887[(2)]);
var state_18887__$1 = state_18887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18887__$1,inst_18885);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_18892 = [null,null,null,null,null,null,null];
(statearr_18892[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_18892[(1)] = (1));

return statearr_18892;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_18887){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e18893){if((e18893 instanceof Object)){
var ex__10429__auto__ = e18893;
var statearr_18894_18911 = state_18887;
(statearr_18894_18911[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18912 = state_18887;
state_18887 = G__18912;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_18887){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_18887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_18895 = f__10447__auto__.call(null);
(statearr_18895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_18895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_18856,inst_18863,inst_18864,state_val_18878,c__10446__auto__))
})();
var inst_18866 = drop_dot.core.pure_js.execAndPrint(inst_18864,inst_18865);
var state_18877__$1 = (function (){var statearr_18896 = state_18877;
(statearr_18896[(8)] = inst_18866);

return statearr_18896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18877__$1,(8),inst_18863);
} else {
if((state_val_18878 === (7))){
var inst_18873 = (state_18877[(2)]);
var state_18877__$1 = state_18877;
var statearr_18897_18913 = state_18877__$1;
(statearr_18897_18913[(2)] = inst_18873);

(statearr_18897_18913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18878 === (8))){
var inst_18856 = (state_18877[(7)]);
var inst_18868 = (state_18877[(2)]);
var inst_18869 = cljs.core.rest.call(null,inst_18856);
var inst_18870 = cljs.core.vec.call(null,inst_18869);
var inst_18856__$1 = inst_18870;
var state_18877__$1 = (function (){var statearr_18898 = state_18877;
(statearr_18898[(7)] = inst_18856__$1);

(statearr_18898[(9)] = inst_18868);

return statearr_18898;
})();
var statearr_18899_18914 = state_18877__$1;
(statearr_18899_18914[(2)] = null);

(statearr_18899_18914[(1)] = (3));


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
var statearr_18903 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18903[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_18903[(1)] = (1));

return statearr_18903;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_18877){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e18904){if((e18904 instanceof Object)){
var ex__10429__auto__ = e18904;
var statearr_18905_18915 = state_18877;
(statearr_18905_18915[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18916 = state_18877;
state_18877 = G__18916;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_18877){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_18877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_18906 = f__10447__auto__.call(null);
(statearr_18906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_18906;
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
return (function (state_18928){
var state_val_18929 = (state_18928[(1)]);
if((state_val_18929 === (1))){
var state_18928__$1 = state_18928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18928__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_18933 = [null,null,null,null,null,null,null];
(statearr_18933[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_18933[(1)] = (1));

return statearr_18933;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_18928){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e18934){if((e18934 instanceof Object)){
var ex__10429__auto__ = e18934;
var statearr_18935_18937 = state_18928;
(statearr_18935_18937[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18938 = state_18928;
state_18928 = G__18938;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_18928){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_18928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_18936 = f__10447__auto__.call(null);
(statearr_18936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_18936;
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
drop_dot.core.dropbox_exists_QMARK_ = (function drop_dot$core$dropbox_exists_QMARK_(){
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
return (function (state_18954){
var state_val_18955 = (state_18954[(1)]);
if((state_val_18955 === (1))){
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18954__$1,(2),d,res__$1);
} else {
if((state_val_18955 === (2))){
var inst_18952 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18954__$1,inst_18952);
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
var statearr_18959 = [null,null,null,null,null,null,null];
(statearr_18959[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_18959[(1)] = (1));

return statearr_18959;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_18954){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e18960){if((e18960 instanceof Object)){
var ex__10429__auto__ = e18960;
var statearr_18961_18963 = state_18954;
(statearr_18961_18963[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18964 = state_18954;
state_18954 = G__18964;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_18954){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_18954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_18962 = f__10447__auto__.call(null);
(statearr_18962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_18962;
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
return (function (state_18992){
var state_val_18993 = (state_18992[(1)]);
if((state_val_18993 === (1))){
var inst_18985 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_18992__$1 = state_18992;
if(cljs.core.truth_(inst_18985)){
var statearr_18994_19005 = state_18992__$1;
(statearr_18994_19005[(1)] = (2));

} else {
var statearr_18995_19006 = state_18992__$1;
(statearr_18995_19006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (2))){
var state_18992__$1 = state_18992;
var statearr_18996_19007 = state_18992__$1;
(statearr_18996_19007[(2)] = line);

(statearr_18996_19007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (3))){
var inst_18988 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_18992__$1 = state_18992;
var statearr_18997_19008 = state_18992__$1;
(statearr_18997_19008[(2)] = inst_18988);

(statearr_18997_19008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18993 === (4))){
var inst_18990 = (state_18992[(2)]);
var state_18992__$1 = state_18992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18992__$1,inst_18990);
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
var statearr_19001 = [null,null,null,null,null,null,null];
(statearr_19001[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_19001[(1)] = (1));

return statearr_19001;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_18992){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_18992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19002){if((e19002 instanceof Object)){
var ex__10429__auto__ = e19002;
var statearr_19003_19009 = state_18992;
(statearr_19003_19009[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19010 = state_18992;
state_18992 = G__19010;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_18992){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_18992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19004 = f__10447__auto__.call(null);
(statearr_19004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19004;
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
return (function (state_19075){
var state_val_19076 = (state_19075[(1)]);
if((state_val_19076 === (1))){
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19075__$1,(2),chan_verified_path);
} else {
if((state_val_19076 === (2))){
var inst_19064 = (state_19075[(7)]);
var inst_19064__$1 = (state_19075[(2)]);
var inst_19065 = (function (){var verified_path = inst_19064__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function (state_19080){
var state_val_19081 = (state_19080[(1)]);
if((state_val_19081 === (1))){
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19080__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_19081 === (2))){
var inst_19078 = (state_19080[(2)]);
var state_19080__$1 = state_19080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19080__$1,inst_19078);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_19085 = [null,null,null,null,null,null,null];
(statearr_19085[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19085[(1)] = (1));

return statearr_19085;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19080){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19086){if((e19086 instanceof Object)){
var ex__10429__auto__ = e19086;
var statearr_19087_19115 = state_19080;
(statearr_19087_19115[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19116 = state_19080;
state_19080 = G__19116;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19080){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19088 = f__10447__auto__.call(null);
(statearr_19088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function (state_19093){
var state_val_19094 = (state_19093[(1)]);
if((state_val_19094 === (1))){
var inst_19089 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19093__$1,(2),drop_dot.core.c,inst_19089);
} else {
if((state_val_19094 === (2))){
var inst_19091 = (state_19093[(2)]);
var state_19093__$1 = state_19093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19093__$1,inst_19091);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_19098 = [null,null,null,null,null,null,null];
(statearr_19098[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19098[(1)] = (1));

return statearr_19098;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19093){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19099){if((e19099 instanceof Object)){
var ex__10429__auto__ = e19099;
var statearr_19100_19117 = state_19093;
(statearr_19100_19117[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19118 = state_19093;
state_19093 = G__19118;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19093){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19101 = f__10447__auto__.call(null);
(statearr_19101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_19064,inst_19064__$1,state_val_19076,c__10446__auto__))
})();
var inst_19066 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_19064__$1);
var state_19075__$1 = (function (){var statearr_19102 = state_19075;
(statearr_19102[(8)] = inst_19065);

(statearr_19102[(7)] = inst_19064__$1);

return statearr_19102;
})();
if(cljs.core.truth_(inst_19066)){
var statearr_19103_19119 = state_19075__$1;
(statearr_19103_19119[(1)] = (3));

} else {
var statearr_19104_19120 = state_19075__$1;
(statearr_19104_19120[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (3))){
var inst_19064 = (state_19075[(7)]);
var state_19075__$1 = state_19075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19075__$1,(6),cljs.core.async.chan,inst_19064);
} else {
if((state_val_19076 === (4))){
var inst_19065 = (state_19075[(8)]);
var inst_19064 = (state_19075[(7)]);
var inst_19071 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_19064,inst_19065);
var state_19075__$1 = state_19075;
var statearr_19105_19121 = state_19075__$1;
(statearr_19105_19121[(2)] = inst_19071);

(statearr_19105_19121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19076 === (5))){
var inst_19073 = (state_19075[(2)]);
var state_19075__$1 = (function (){var statearr_19106 = state_19075;
(statearr_19106[(9)] = inst_19073);

return statearr_19106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19075__$1,cljs.core.async.chan);
} else {
if((state_val_19076 === (6))){
var inst_19069 = (state_19075[(2)]);
var state_19075__$1 = state_19075;
var statearr_19107_19122 = state_19075__$1;
(statearr_19107_19122[(2)] = inst_19069);

(statearr_19107_19122[(1)] = (5));


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
var statearr_19111 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19111[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19111[(1)] = (1));

return statearr_19111;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19075){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19112){if((e19112 instanceof Object)){
var ex__10429__auto__ = e19112;
var statearr_19113_19123 = state_19075;
(statearr_19113_19123[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19124 = state_19075;
state_19075 = G__19124;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19075){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19114 = f__10447__auto__.call(null);
(statearr_19114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19114;
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
return (function (state_19159){
var state_val_19160 = (state_19159[(1)]);
if((state_val_19160 === (1))){
var state_19159__$1 = state_19159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19159__$1,(2),c);
} else {
if((state_val_19160 === (2))){
var inst_19150 = (state_19159[(7)]);
var inst_19150__$1 = (state_19159[(2)]);
var inst_19151 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_19150__$1);
var state_19159__$1 = (function (){var statearr_19161 = state_19159;
(statearr_19161[(7)] = inst_19150__$1);

return statearr_19161;
})();
if(cljs.core.truth_(inst_19151)){
var statearr_19162_19173 = state_19159__$1;
(statearr_19162_19173[(1)] = (3));

} else {
var statearr_19163_19174 = state_19159__$1;
(statearr_19163_19174[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19160 === (3))){
var inst_19150 = (state_19159[(7)]);
var inst_19153 = cljs.core.println.call(null,inst_19150);
var state_19159__$1 = state_19159;
var statearr_19164_19175 = state_19159__$1;
(statearr_19164_19175[(2)] = inst_19153);

(statearr_19164_19175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19160 === (4))){
var inst_19150 = (state_19159[(7)]);
var inst_19155 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_19150);
var state_19159__$1 = state_19159;
var statearr_19165_19176 = state_19159__$1;
(statearr_19165_19176[(2)] = inst_19155);

(statearr_19165_19176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19160 === (5))){
var inst_19157 = (state_19159[(2)]);
var state_19159__$1 = state_19159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19159__$1,inst_19157);
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
var statearr_19169 = [null,null,null,null,null,null,null,null];
(statearr_19169[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_19169[(1)] = (1));

return statearr_19169;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_19159){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19170){if((e19170 instanceof Object)){
var ex__10429__auto__ = e19170;
var statearr_19171_19177 = state_19159;
(statearr_19171_19177[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19178 = state_19159;
state_19159 = G__19178;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_19159){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_19159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19172 = f__10447__auto__.call(null);
(statearr_19172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19172;
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
return (function (state_19258){
var state_val_19259 = (state_19258[(1)]);
if((state_val_19259 === (7))){
var inst_19253 = (state_19258[(2)]);
var inst_19254 = cljs.core.println.call(null,"done");
var state_19258__$1 = (function (){var statearr_19261 = state_19258;
(statearr_19261[(7)] = inst_19253);

return statearr_19261;
})();
var statearr_19262_19287 = state_19258__$1;
(statearr_19262_19287[(2)] = inst_19254);

(statearr_19262_19287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (1))){
var inst_19233 = chan_config;
var state_19258__$1 = (function (){var statearr_19263 = state_19258;
(statearr_19263[(8)] = inst_19233);

return statearr_19263;
})();
var statearr_19264_19288 = state_19258__$1;
(statearr_19264_19288[(2)] = null);

(statearr_19264_19288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (4))){
var inst_19236 = (state_19258[(9)]);
var inst_19236__$1 = (state_19258[(2)]);
var state_19258__$1 = (function (){var statearr_19265 = state_19258;
(statearr_19265[(9)] = inst_19236__$1);

return statearr_19265;
})();
if(cljs.core.truth_(inst_19236__$1)){
var statearr_19266_19289 = state_19258__$1;
(statearr_19266_19289[(1)] = (5));

} else {
var statearr_19267_19290 = state_19258__$1;
(statearr_19267_19290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (13))){
var inst_19233 = (state_19258[(8)]);
var inst_19249 = (state_19258[(2)]);
var tmp19260 = inst_19233;
var inst_19233__$1 = tmp19260;
var state_19258__$1 = (function (){var statearr_19268 = state_19258;
(statearr_19268[(10)] = inst_19249);

(statearr_19268[(8)] = inst_19233__$1);

return statearr_19268;
})();
var statearr_19269_19291 = state_19258__$1;
(statearr_19269_19291[(2)] = null);

(statearr_19269_19291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (6))){
var state_19258__$1 = state_19258;
var statearr_19270_19292 = state_19258__$1;
(statearr_19270_19292[(2)] = null);

(statearr_19270_19292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (3))){
var inst_19256 = (state_19258[(2)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19258__$1,inst_19256);
} else {
if((state_val_19259 === (12))){
var state_19258__$1 = state_19258;
var statearr_19271_19293 = state_19258__$1;
(statearr_19271_19293[(2)] = null);

(statearr_19271_19293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (2))){
var inst_19233 = (state_19258[(8)]);
var state_19258__$1 = state_19258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19258__$1,(4),inst_19233);
} else {
if((state_val_19259 === (11))){
var inst_19236 = (state_19258[(9)]);
var inst_19246 = drop_dot.core.link_line.call(null,inst_19236);
var state_19258__$1 = state_19258;
var statearr_19272_19294 = state_19258__$1;
(statearr_19272_19294[(2)] = inst_19246);

(statearr_19272_19294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (9))){
var state_19258__$1 = state_19258;
var statearr_19273_19295 = state_19258__$1;
(statearr_19273_19295[(2)] = null);

(statearr_19273_19295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (5))){
var inst_19238 = cljs.core._EQ_.call(null,cmd,"drop");
var state_19258__$1 = state_19258;
if(inst_19238){
var statearr_19274_19296 = state_19258__$1;
(statearr_19274_19296[(1)] = (8));

} else {
var statearr_19275_19297 = state_19258__$1;
(statearr_19275_19297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (10))){
var inst_19243 = (state_19258[(2)]);
var inst_19244 = cljs.core._EQ_.call(null,cmd,"link");
var state_19258__$1 = (function (){var statearr_19276 = state_19258;
(statearr_19276[(11)] = inst_19243);

return statearr_19276;
})();
if(inst_19244){
var statearr_19277_19298 = state_19258__$1;
(statearr_19277_19298[(1)] = (11));

} else {
var statearr_19278_19299 = state_19258__$1;
(statearr_19278_19299[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19259 === (8))){
var inst_19236 = (state_19258[(9)]);
var inst_19240 = drop_dot.core.drop_line.call(null,inst_19236);
var state_19258__$1 = state_19258;
var statearr_19279_19300 = state_19258__$1;
(statearr_19279_19300[(2)] = inst_19240);

(statearr_19279_19300[(1)] = (10));


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
var statearr_19283 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19283[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_19283[(1)] = (1));

return statearr_19283;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_19258){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19284){if((e19284 instanceof Object)){
var ex__10429__auto__ = e19284;
var statearr_19285_19301 = state_19258;
(statearr_19285_19301[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19302 = state_19258;
state_19258 = G__19302;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_19258){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_19258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_19286 = f__10447__auto__.call(null);
(statearr_19286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_19286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___19399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___19399,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___19399,c){
return (function (state_19363){
var state_val_19364 = (state_19363[(1)]);
if((state_val_19364 === (1))){
var inst_19353 = (state_19363[(7)]);
var inst_19352 = (state_19363[(8)]);
var inst_19351 = (state_19363[(9)]);
var inst_19351__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_19352__$1 = cljs.core.async.chan.call(null,(1));
var inst_19353__$1 = (function (){var res = inst_19351__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_19352__$1;
return ((function (res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c){
return (function (state_19368){
var state_val_19369 = (state_19368[(1)]);
if((state_val_19369 === (1))){
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19368__$1,(2),wcc,res__$1);
} else {
if((state_val_19369 === (2))){
var inst_19366 = (state_19368[(2)]);
var state_19368__$1 = state_19368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19368__$1,inst_19366);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_19373 = [null,null,null,null,null,null,null];
(statearr_19373[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_19373[(1)] = (1));

return statearr_19373;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_19368){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19374){if((e19374 instanceof Object)){
var ex__10429__auto__ = e19374;
var statearr_19375_19400 = state_19368;
(statearr_19375_19400[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19401 = state_19368;
state_19368 = G__19401;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_19368){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_19368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c))
})();
var state__10448__auto__ = (function (){var statearr_19376 = f__10447__auto__.call(null);
(statearr_19376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_19353,inst_19352,inst_19351,inst_19351__$1,inst_19352__$1,state_val_19364,c__10446__auto___19399,c))
})();
var inst_19354 = inst_19351__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_19353__$1);
var state_19363__$1 = (function (){var statearr_19377 = state_19363;
(statearr_19377[(7)] = inst_19353__$1);

(statearr_19377[(10)] = inst_19354);

(statearr_19377[(8)] = inst_19352__$1);

(statearr_19377[(9)] = inst_19351__$1);

return statearr_19377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19363__$1,(2),inst_19352__$1);
} else {
if((state_val_19364 === (2))){
var inst_19353 = (state_19363[(7)]);
var inst_19354 = (state_19363[(10)]);
var inst_19352 = (state_19363[(8)]);
var inst_19351 = (state_19363[(9)]);
var inst_19356 = (state_19363[(2)]);
var inst_19357 = [cljs.core.str(inst_19356)].join('');
var inst_19358 = parseInt(inst_19357);
var inst_19359 = (function (){var res = inst_19351;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_19352;
var wcc_jammer = inst_19353;
var get_wc = inst_19354;
var lines = inst_19358;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,state_val_19364,c__10446__auto___19399,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,state_val_19364,c__10446__auto___19399,c))
})();
var inst_19360 = (function (){var res = inst_19351;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_19352;
var wcc_jammer = inst_19353;
var get_wc = inst_19354;
var lines = inst_19358;
var close_if_done = inst_19359;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c){
return (function (state_19382){
var state_val_19383 = (state_19382[(1)]);
if((state_val_19383 === (1))){
var state_19382__$1 = state_19382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19382__$1,(2),c,res__$1);
} else {
if((state_val_19383 === (2))){
var inst_19379 = (state_19382[(2)]);
var inst_19380 = close_if_done.call(null);
var state_19382__$1 = (function (){var statearr_19384 = state_19382;
(statearr_19384[(7)] = inst_19379);

return statearr_19384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19382__$1,inst_19380);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_19388 = [null,null,null,null,null,null,null,null];
(statearr_19388[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_19388[(1)] = (1));

return statearr_19388;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_19382){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19389){if((e19389 instanceof Object)){
var ex__10429__auto__ = e19389;
var statearr_19390_19402 = state_19382;
(statearr_19390_19402[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19403 = state_19382;
state_19382 = G__19403;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_19382){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_19382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c))
})();
var state__10448__auto__ = (function (){var statearr_19391 = f__10447__auto__.call(null);
(statearr_19391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_19391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_19353,inst_19354,inst_19352,inst_19351,inst_19356,inst_19357,inst_19358,inst_19359,state_val_19364,c__10446__auto___19399,c))
})();
var inst_19361 = inst_19351.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_19360);
var state_19363__$1 = state_19363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19363__$1,inst_19361);
} else {
return null;
}
}
});})(c__10446__auto___19399,c))
;
return ((function (switch__10425__auto__,c__10446__auto___19399,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_19395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19395[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_19395[(1)] = (1));

return statearr_19395;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_19363){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_19363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e19396){if((e19396 instanceof Object)){
var ex__10429__auto__ = e19396;
var statearr_19397_19404 = state_19363;
(statearr_19397_19404[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19405 = state_19363;
state_19363 = G__19405;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_19363){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_19363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___19399,c))
})();
var state__10448__auto__ = (function (){var statearr_19398 = f__10447__auto__.call(null);
(statearr_19398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___19399);

return statearr_19398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___19399,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__9163__auto__ = [];
var len__9156__auto___19407 = arguments.length;
var i__9157__auto___19408 = (0);
while(true){
if((i__9157__auto___19408 < len__9156__auto___19407)){
args__9163__auto__.push((arguments[i__9157__auto___19408]));

var G__19409 = (i__9157__auto___19408 + (1));
i__9157__auto___19408 = G__19409;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq19406){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19406));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map