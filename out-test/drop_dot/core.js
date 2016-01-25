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
return (function (state_30668){
var state_val_30669 = (state_30668[(1)]);
if((state_val_30669 === (1))){
var state_30668__$1 = state_30668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30668__$1,(2),c,arg);
} else {
if((state_val_30669 === (2))){
var inst_30666 = (state_30668[(2)]);
var state_30668__$1 = state_30668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30668__$1,inst_30666);
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
var statearr_30673 = [null,null,null,null,null,null,null];
(statearr_30673[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_30673[(1)] = (1));

return statearr_30673;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_30668){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30674){if((e30674 instanceof Object)){
var ex__9301__auto__ = e30674;
var statearr_30675_30677 = state_30668;
(statearr_30675_30677[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30678 = state_30668;
state_30668 = G__30678;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_30668){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_30668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30676 = f__9319__auto__.call(null);
(statearr_30676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30676;
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
return (function (state_30694){
var state_val_30695 = (state_30694[(1)]);
if((state_val_30695 === (1))){
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30694__$1,(2),c,arg);
} else {
if((state_val_30695 === (2))){
var inst_30692 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30694__$1,inst_30692);
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
var statearr_30699 = [null,null,null,null,null,null,null];
(statearr_30699[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_30699[(1)] = (1));

return statearr_30699;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_30694){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30700){if((e30700 instanceof Object)){
var ex__9301__auto__ = e30700;
var statearr_30701_30703 = state_30694;
(statearr_30701_30703[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30704 = state_30694;
state_30694 = G__30704;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_30694){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_30694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30702 = f__9319__auto__.call(null);
(statearr_30702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30702;
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
return (function (state_30781){
var state_val_30782 = (state_30781[(1)]);
if((state_val_30782 === (1))){
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(2),input_chan);
} else {
if((state_val_30782 === (2))){
var inst_30759 = (state_30781[(2)]);
var inst_30760 = inst_30759;
var state_30781__$1 = (function (){var statearr_30783 = state_30781;
(statearr_30783[(7)] = inst_30760);

return statearr_30783;
})();
var statearr_30784_30811 = state_30781__$1;
(statearr_30784_30811[(2)] = null);

(statearr_30784_30811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (3))){
var inst_30760 = (state_30781[(7)]);
var inst_30762 = cljs.core.count.call(null,inst_30760);
var inst_30763 = cljs.core._EQ_.call(null,inst_30762,(0));
var state_30781__$1 = state_30781;
if(inst_30763){
var statearr_30785_30812 = state_30781__$1;
(statearr_30785_30812[(1)] = (5));

} else {
var statearr_30786_30813 = state_30781__$1;
(statearr_30786_30813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (4))){
var inst_30779 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30781__$1,inst_30779);
} else {
if((state_val_30782 === (5))){
var inst_30765 = cljs.core.println.call(null,"done");
var state_30781__$1 = state_30781;
var statearr_30787_30814 = state_30781__$1;
(statearr_30787_30814[(2)] = inst_30765);

(statearr_30787_30814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (6))){
var inst_30760 = (state_30781[(7)]);
var inst_30767 = cljs.core.async.chan.call(null);
var inst_30768 = cljs.core.first.call(null,inst_30760);
var inst_30769 = (function (){var v = inst_30760;
var rc = inst_30767;
var cmd = inst_30768;
return ((function (v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__){
return (function (state_30791){
var state_val_30792 = (state_30791[(1)]);
if((state_val_30792 === (1))){
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30791__$1,(2),rc,res);
} else {
if((state_val_30792 === (2))){
var inst_30789 = (state_30791[(2)]);
var state_30791__$1 = state_30791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30791__$1,inst_30789);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_30796 = [null,null,null,null,null,null,null];
(statearr_30796[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_30796[(1)] = (1));

return statearr_30796;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_30791){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30797){if((e30797 instanceof Object)){
var ex__9301__auto__ = e30797;
var statearr_30798_30815 = state_30791;
(statearr_30798_30815[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30816 = state_30791;
state_30791 = G__30816;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_30791){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_30791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30799 = f__9319__auto__.call(null);
(statearr_30799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_30760,inst_30767,inst_30768,state_val_30782,c__9318__auto__))
})();
var inst_30770 = drop_dot.core.pure_js.execAndPrint(inst_30768,inst_30769);
var state_30781__$1 = (function (){var statearr_30800 = state_30781;
(statearr_30800[(8)] = inst_30770);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(8),inst_30767);
} else {
if((state_val_30782 === (7))){
var inst_30777 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30801_30817 = state_30781__$1;
(statearr_30801_30817[(2)] = inst_30777);

(statearr_30801_30817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (8))){
var inst_30760 = (state_30781[(7)]);
var inst_30772 = (state_30781[(2)]);
var inst_30773 = cljs.core.rest.call(null,inst_30760);
var inst_30774 = cljs.core.vec.call(null,inst_30773);
var inst_30760__$1 = inst_30774;
var state_30781__$1 = (function (){var statearr_30802 = state_30781;
(statearr_30802[(9)] = inst_30772);

(statearr_30802[(7)] = inst_30760__$1);

return statearr_30802;
})();
var statearr_30803_30818 = state_30781__$1;
(statearr_30803_30818[(2)] = null);

(statearr_30803_30818[(1)] = (3));


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
var statearr_30807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30807[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_30807[(1)] = (1));

return statearr_30807;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_30781){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30808){if((e30808 instanceof Object)){
var ex__9301__auto__ = e30808;
var statearr_30809_30819 = state_30781;
(statearr_30809_30819[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30820 = state_30781;
state_30781 = G__30820;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_30781){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_30781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30810 = f__9319__auto__.call(null);
(statearr_30810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30810;
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
return (function (state_30832){
var state_val_30833 = (state_30832[(1)]);
if((state_val_30833 === (1))){
var state_30832__$1 = state_30832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30832__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_30837 = [null,null,null,null,null,null,null];
(statearr_30837[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_30837[(1)] = (1));

return statearr_30837;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_30832){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30838){if((e30838 instanceof Object)){
var ex__9301__auto__ = e30838;
var statearr_30839_30841 = state_30832;
(statearr_30839_30841[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30842 = state_30832;
state_30832 = G__30842;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_30832){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_30832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_30840 = f__9319__auto__.call(null);
(statearr_30840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,c))
);

return c__9318__auto__;
})());
});
drop_dot.core.dropdot_folder_exists_QMARK_ = (function drop_dot$core$dropdot_folder_exists_QMARK_(){
return drop_dot.core.pure_js.pathExists("~/Dropbox/.drop-dot");
});
drop_dot.core.dropbox_installed_QMARK_ = (function drop_dot$core$dropbox_installed_QMARK_(){
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
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,res,d){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,res,d){
return (function (state_30858){
var state_val_30859 = (state_30858[(1)]);
if((state_val_30859 === (1))){
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30858__$1,(2),d,res__$1);
} else {
if((state_val_30859 === (2))){
var inst_30856 = (state_30858[(2)]);
var state_30858__$1 = state_30858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30858__$1,inst_30856);
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
var statearr_30863 = [null,null,null,null,null,null,null];
(statearr_30863[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_30858){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__9301__auto__ = e30864;
var statearr_30865_30867 = state_30858;
(statearr_30865_30867[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30868 = state_30858;
state_30858 = G__30868;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_30858){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_30858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_30866 = f__9319__auto__.call(null);
(statearr_30866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30866;
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
return (function (state_30896){
var state_val_30897 = (state_30896[(1)]);
if((state_val_30897 === (1))){
var inst_30889 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_30896__$1 = state_30896;
if(cljs.core.truth_(inst_30889)){
var statearr_30898_30909 = state_30896__$1;
(statearr_30898_30909[(1)] = (2));

} else {
var statearr_30899_30910 = state_30896__$1;
(statearr_30899_30910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (2))){
var state_30896__$1 = state_30896;
var statearr_30900_30911 = state_30896__$1;
(statearr_30900_30911[(2)] = line);

(statearr_30900_30911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (3))){
var inst_30892 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_30896__$1 = state_30896;
var statearr_30901_30912 = state_30896__$1;
(statearr_30901_30912[(2)] = inst_30892);

(statearr_30901_30912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30897 === (4))){
var inst_30894 = (state_30896[(2)]);
var state_30896__$1 = state_30896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30896__$1,inst_30894);
} else {
return null;
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
var statearr_30905 = [null,null,null,null,null,null,null];
(statearr_30905[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_30905[(1)] = (1));

return statearr_30905;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_30896){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30906){if((e30906 instanceof Object)){
var ex__9301__auto__ = e30906;
var statearr_30907_30913 = state_30896;
(statearr_30907_30913[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30914 = state_30896;
state_30896 = G__30914;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_30896){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_30896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30908 = f__9319__auto__.call(null);
(statearr_30908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30908;
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
return (function (state_30979){
var state_val_30980 = (state_30979[(1)]);
if((state_val_30980 === (1))){
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30979__$1,(2),chan_verified_path);
} else {
if((state_val_30980 === (2))){
var inst_30968 = (state_30979[(7)]);
var inst_30968__$1 = (state_30979[(2)]);
var inst_30969 = (function (){var verified_path = inst_30968__$1;
var rc = cljs.core.async.chan;
return ((function (verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (1))){
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30984__$1,(2),drop_dot.core.c,res);
} else {
if((state_val_30985 === (2))){
var inst_30982 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_30989 = [null,null,null,null,null,null,null];
(statearr_30989[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_30989[(1)] = (1));

return statearr_30989;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_30984){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30990){if((e30990 instanceof Object)){
var ex__9301__auto__ = e30990;
var statearr_30991_31019 = state_30984;
(statearr_30991_31019[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31020 = state_30984;
state_30984 = G__31020;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30992 = f__9319__auto__.call(null);
(statearr_30992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_30992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function (state_30997){
var state_val_30998 = (state_30997[(1)]);
if((state_val_30998 === (1))){
var inst_30993 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30997__$1,(2),drop_dot.core.c,inst_30993);
} else {
if((state_val_30998 === (2))){
var inst_30995 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30997__$1,inst_30995);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_31002 = [null,null,null,null,null,null,null];
(statearr_31002[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_31002[(1)] = (1));

return statearr_31002;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_30997){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31003){if((e31003 instanceof Object)){
var ex__9301__auto__ = e31003;
var statearr_31004_31021 = state_30997;
(statearr_31004_31021[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31022 = state_30997;
state_30997 = G__31022;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_30997){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_30997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31005 = f__9319__auto__.call(null);
(statearr_31005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_31005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_30968,inst_30968__$1,state_val_30980,c__9318__auto__))
})();
var inst_30970 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_30968__$1);
var state_30979__$1 = (function (){var statearr_31006 = state_30979;
(statearr_31006[(7)] = inst_30968__$1);

(statearr_31006[(8)] = inst_30969);

return statearr_31006;
})();
if(cljs.core.truth_(inst_30970)){
var statearr_31007_31023 = state_30979__$1;
(statearr_31007_31023[(1)] = (3));

} else {
var statearr_31008_31024 = state_30979__$1;
(statearr_31008_31024[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (3))){
var inst_30968 = (state_30979[(7)]);
var state_30979__$1 = state_30979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30979__$1,(6),cljs.core.async.chan,inst_30968);
} else {
if((state_val_30980 === (4))){
var inst_30968 = (state_30979[(7)]);
var inst_30969 = (state_30979[(8)]);
var inst_30975 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_30968,inst_30969);
var state_30979__$1 = state_30979;
var statearr_31009_31025 = state_30979__$1;
(statearr_31009_31025[(2)] = inst_30975);

(statearr_31009_31025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30980 === (5))){
var inst_30977 = (state_30979[(2)]);
var state_30979__$1 = (function (){var statearr_31010 = state_30979;
(statearr_31010[(9)] = inst_30977);

return statearr_31010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30979__$1,cljs.core.async.chan);
} else {
if((state_val_30980 === (6))){
var inst_30973 = (state_30979[(2)]);
var state_30979__$1 = state_30979;
var statearr_31011_31026 = state_30979__$1;
(statearr_31011_31026[(2)] = inst_30973);

(statearr_31011_31026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_31015 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31015[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_31015[(1)] = (1));

return statearr_31015;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_30979){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31016){if((e31016 instanceof Object)){
var ex__9301__auto__ = e31016;
var statearr_31017_31027 = state_30979;
(statearr_31017_31027[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31028 = state_30979;
state_30979 = G__31028;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_30979){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_30979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31018 = f__9319__auto__.call(null);
(statearr_31018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31018;
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
return (function (state_31063){
var state_val_31064 = (state_31063[(1)]);
if((state_val_31064 === (1))){
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31063__$1,(2),c);
} else {
if((state_val_31064 === (2))){
var inst_31054 = (state_31063[(7)]);
var inst_31054__$1 = (state_31063[(2)]);
var inst_31055 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_31054__$1);
var state_31063__$1 = (function (){var statearr_31065 = state_31063;
(statearr_31065[(7)] = inst_31054__$1);

return statearr_31065;
})();
if(cljs.core.truth_(inst_31055)){
var statearr_31066_31077 = state_31063__$1;
(statearr_31066_31077[(1)] = (3));

} else {
var statearr_31067_31078 = state_31063__$1;
(statearr_31067_31078[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (3))){
var inst_31054 = (state_31063[(7)]);
var inst_31057 = cljs.core.println.call(null,inst_31054);
var state_31063__$1 = state_31063;
var statearr_31068_31079 = state_31063__$1;
(statearr_31068_31079[(2)] = inst_31057);

(statearr_31068_31079[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (4))){
var inst_31054 = (state_31063[(7)]);
var inst_31059 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_31054);
var state_31063__$1 = state_31063;
var statearr_31069_31080 = state_31063__$1;
(statearr_31069_31080[(2)] = inst_31059);

(statearr_31069_31080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (5))){
var inst_31061 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31063__$1,inst_31061);
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
var statearr_31073 = [null,null,null,null,null,null,null,null];
(statearr_31073[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_31073[(1)] = (1));

return statearr_31073;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_31063){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31074){if((e31074 instanceof Object)){
var ex__9301__auto__ = e31074;
var statearr_31075_31081 = state_31063;
(statearr_31075_31081[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31082 = state_31063;
state_31063 = G__31082;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_31063){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_31063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31076 = f__9319__auto__.call(null);
(statearr_31076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_a_chan_verified_linkee.call(null,drop_dot.core.line__GT_chan_verified_linkee.call(null,line));
});
drop_dot.core.chan_config__GT_exec_drop_dot = (function drop_dot$core$chan_config__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_31162){
var state_val_31163 = (state_31162[(1)]);
if((state_val_31163 === (7))){
var inst_31157 = (state_31162[(2)]);
var inst_31158 = cljs.core.println.call(null,"done");
var state_31162__$1 = (function (){var statearr_31165 = state_31162;
(statearr_31165[(7)] = inst_31157);

return statearr_31165;
})();
var statearr_31166_31191 = state_31162__$1;
(statearr_31166_31191[(2)] = inst_31158);

(statearr_31166_31191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (1))){
var inst_31137 = chan_config;
var state_31162__$1 = (function (){var statearr_31167 = state_31162;
(statearr_31167[(8)] = inst_31137);

return statearr_31167;
})();
var statearr_31168_31192 = state_31162__$1;
(statearr_31168_31192[(2)] = null);

(statearr_31168_31192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (4))){
var inst_31140 = (state_31162[(9)]);
var inst_31140__$1 = (state_31162[(2)]);
var state_31162__$1 = (function (){var statearr_31169 = state_31162;
(statearr_31169[(9)] = inst_31140__$1);

return statearr_31169;
})();
if(cljs.core.truth_(inst_31140__$1)){
var statearr_31170_31193 = state_31162__$1;
(statearr_31170_31193[(1)] = (5));

} else {
var statearr_31171_31194 = state_31162__$1;
(statearr_31171_31194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (13))){
var inst_31137 = (state_31162[(8)]);
var inst_31153 = (state_31162[(2)]);
var tmp31164 = inst_31137;
var inst_31137__$1 = tmp31164;
var state_31162__$1 = (function (){var statearr_31172 = state_31162;
(statearr_31172[(8)] = inst_31137__$1);

(statearr_31172[(10)] = inst_31153);

return statearr_31172;
})();
var statearr_31173_31195 = state_31162__$1;
(statearr_31173_31195[(2)] = null);

(statearr_31173_31195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (6))){
var state_31162__$1 = state_31162;
var statearr_31174_31196 = state_31162__$1;
(statearr_31174_31196[(2)] = null);

(statearr_31174_31196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (3))){
var inst_31160 = (state_31162[(2)]);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31162__$1,inst_31160);
} else {
if((state_val_31163 === (12))){
var state_31162__$1 = state_31162;
var statearr_31175_31197 = state_31162__$1;
(statearr_31175_31197[(2)] = null);

(statearr_31175_31197[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (2))){
var inst_31137 = (state_31162[(8)]);
var state_31162__$1 = state_31162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31162__$1,(4),inst_31137);
} else {
if((state_val_31163 === (11))){
var inst_31140 = (state_31162[(9)]);
var inst_31150 = drop_dot.core.link_line.call(null,inst_31140);
var state_31162__$1 = state_31162;
var statearr_31176_31198 = state_31162__$1;
(statearr_31176_31198[(2)] = inst_31150);

(statearr_31176_31198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (9))){
var state_31162__$1 = state_31162;
var statearr_31177_31199 = state_31162__$1;
(statearr_31177_31199[(2)] = null);

(statearr_31177_31199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (5))){
var inst_31142 = cljs.core._EQ_.call(null,cmd,"drop");
var state_31162__$1 = state_31162;
if(inst_31142){
var statearr_31178_31200 = state_31162__$1;
(statearr_31178_31200[(1)] = (8));

} else {
var statearr_31179_31201 = state_31162__$1;
(statearr_31179_31201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (10))){
var inst_31147 = (state_31162[(2)]);
var inst_31148 = cljs.core._EQ_.call(null,cmd,"link");
var state_31162__$1 = (function (){var statearr_31180 = state_31162;
(statearr_31180[(11)] = inst_31147);

return statearr_31180;
})();
if(inst_31148){
var statearr_31181_31202 = state_31162__$1;
(statearr_31181_31202[(1)] = (11));

} else {
var statearr_31182_31203 = state_31162__$1;
(statearr_31182_31203[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31163 === (8))){
var inst_31140 = (state_31162[(9)]);
var inst_31144 = drop_dot.core.drop_line.call(null,inst_31140);
var state_31162__$1 = state_31162;
var statearr_31183_31204 = state_31162__$1;
(statearr_31183_31204[(2)] = inst_31144);

(statearr_31183_31204[(1)] = (10));


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
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_31187 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31187[(0)] = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_31187[(1)] = (1));

return statearr_31187;
});
var drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_31162){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31188){if((e31188 instanceof Object)){
var ex__9301__auto__ = e31188;
var statearr_31189_31205 = state_31162;
(statearr_31189_31205[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31206 = state_31162;
state_31162 = G__31206;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_31162){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_31162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31190 = f__9319__auto__.call(null);
(statearr_31190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___31303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___31303,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___31303,c){
return (function (state_31267){
var state_val_31268 = (state_31267[(1)]);
if((state_val_31268 === (1))){
var inst_31255 = (state_31267[(7)]);
var inst_31256 = (state_31267[(8)]);
var inst_31257 = (state_31267[(9)]);
var inst_31255__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_31256__$1 = cljs.core.async.chan.call(null,(1));
var inst_31257__$1 = (function (){var res = inst_31255__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_31256__$1;
return ((function (res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c){
return (function (state_31272){
var state_val_31273 = (state_31272[(1)]);
if((state_val_31273 === (1))){
var state_31272__$1 = state_31272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31272__$1,(2),wcc,res__$1);
} else {
if((state_val_31273 === (2))){
var inst_31270 = (state_31272[(2)]);
var state_31272__$1 = state_31272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31272__$1,inst_31270);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_31277 = [null,null,null,null,null,null,null];
(statearr_31277[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_31277[(1)] = (1));

return statearr_31277;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_31272){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31278){if((e31278 instanceof Object)){
var ex__9301__auto__ = e31278;
var statearr_31279_31304 = state_31272;
(statearr_31279_31304[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31305 = state_31272;
state_31272 = G__31305;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_31272){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_31272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c))
})();
var state__9320__auto__ = (function (){var statearr_31280 = f__9319__auto__.call(null);
(statearr_31280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_31280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_31255,inst_31256,inst_31257,inst_31255__$1,inst_31256__$1,state_val_31268,c__9318__auto___31303,c))
})();
var inst_31258 = inst_31255__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_31257__$1);
var state_31267__$1 = (function (){var statearr_31281 = state_31267;
(statearr_31281[(7)] = inst_31255__$1);

(statearr_31281[(10)] = inst_31258);

(statearr_31281[(8)] = inst_31256__$1);

(statearr_31281[(9)] = inst_31257__$1);

return statearr_31281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(2),inst_31256__$1);
} else {
if((state_val_31268 === (2))){
var inst_31255 = (state_31267[(7)]);
var inst_31258 = (state_31267[(10)]);
var inst_31256 = (state_31267[(8)]);
var inst_31257 = (state_31267[(9)]);
var inst_31260 = (state_31267[(2)]);
var inst_31261 = [cljs.core.str(inst_31260)].join('');
var inst_31262 = parseInt(inst_31261);
var inst_31263 = (function (){var res = inst_31255;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_31256;
var wcc_jammer = inst_31257;
var get_wc = inst_31258;
var lines = inst_31262;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,state_val_31268,c__9318__auto___31303,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,state_val_31268,c__9318__auto___31303,c))
})();
var inst_31264 = (function (){var res = inst_31255;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_31256;
var wcc_jammer = inst_31257;
var get_wc = inst_31258;
var lines = inst_31262;
var close_if_done = inst_31263;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c){
return (function (state_31286){
var state_val_31287 = (state_31286[(1)]);
if((state_val_31287 === (1))){
var state_31286__$1 = state_31286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31286__$1,(2),c,res__$1);
} else {
if((state_val_31287 === (2))){
var inst_31283 = (state_31286[(2)]);
var inst_31284 = close_if_done.call(null);
var state_31286__$1 = (function (){var statearr_31288 = state_31286;
(statearr_31288[(7)] = inst_31283);

return statearr_31288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31286__$1,inst_31284);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_31292 = [null,null,null,null,null,null,null,null];
(statearr_31292[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_31292[(1)] = (1));

return statearr_31292;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_31286){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31293){if((e31293 instanceof Object)){
var ex__9301__auto__ = e31293;
var statearr_31294_31306 = state_31286;
(statearr_31294_31306[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31307 = state_31286;
state_31286 = G__31307;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_31286){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_31286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c))
})();
var state__9320__auto__ = (function (){var statearr_31295 = f__9319__auto__.call(null);
(statearr_31295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_31295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_31255,inst_31258,inst_31256,inst_31257,inst_31260,inst_31261,inst_31262,inst_31263,state_val_31268,c__9318__auto___31303,c))
})();
var inst_31265 = inst_31255.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_31264);
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31267__$1,inst_31265);
} else {
return null;
}
}
});})(c__9318__auto___31303,c))
;
return ((function (switch__9297__auto__,c__9318__auto___31303,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_31299 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31299[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_31299[(1)] = (1));

return statearr_31299;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_31267){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31300){if((e31300 instanceof Object)){
var ex__9301__auto__ = e31300;
var statearr_31301_31308 = state_31267;
(statearr_31301_31308[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31309 = state_31267;
state_31267 = G__31309;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___31303,c))
})();
var state__9320__auto__ = (function (){var statearr_31302 = f__9319__auto__.call(null);
(statearr_31302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___31303);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___31303,c))
);


return c;
});
drop_dot.core._main = (function drop_dot$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___31311 = arguments.length;
var i__7019__auto___31312 = (0);
while(true){
if((i__7019__auto___31312 < len__7018__auto___31311)){
args__7025__auto__.push((arguments[i__7019__auto___31312]));

var G__31313 = (i__7019__auto___31312 + (1));
i__7019__auto___31312 = G__31313;
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
if((cljs.core.not.call(null,drop_dot.core.dropbox_installed_QMARK_.call(null))) || (cljs.core.not.call(null,drop_dot.core.unix_OS_QMARK_.call(null))) || (cljs.core.not.call(null,drop_dot.core.dropdot_folder_exists_QMARK_.call(null)))){
cljs.core.println.call(null,"Failure..");
} else {
}

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

drop_dot.core._main.cljs$lang$applyTo = (function (seq31310){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31310));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map