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
return (function (state_280703){
var state_val_280704 = (state_280703[(1)]);
if((state_val_280704 === (1))){
var state_280703__$1 = state_280703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_280703__$1,(2),c,arg);
} else {
if((state_val_280704 === (2))){
var inst_280701 = (state_280703[(2)]);
var state_280703__$1 = state_280703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280703__$1,inst_280701);
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
var statearr_280708 = [null,null,null,null,null,null,null];
(statearr_280708[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_280708[(1)] = (1));

return statearr_280708;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_280703){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280709){if((e280709 instanceof Object)){
var ex__10429__auto__ = e280709;
var statearr_280710_280712 = state_280703;
(statearr_280710_280712[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280713 = state_280703;
state_280703 = G__280713;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_280703){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_280703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_280711 = f__10447__auto__.call(null);
(statearr_280711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_280711;
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
return (function (state_280729){
var state_val_280730 = (state_280729[(1)]);
if((state_val_280730 === (1))){
var state_280729__$1 = state_280729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_280729__$1,(2),c,arg);
} else {
if((state_val_280730 === (2))){
var inst_280727 = (state_280729[(2)]);
var state_280729__$1 = state_280729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280729__$1,inst_280727);
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
var statearr_280734 = [null,null,null,null,null,null,null];
(statearr_280734[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_280734[(1)] = (1));

return statearr_280734;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_280729){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280735){if((e280735 instanceof Object)){
var ex__10429__auto__ = e280735;
var statearr_280736_280738 = state_280729;
(statearr_280736_280738[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280739 = state_280729;
state_280729 = G__280739;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_280729){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_280729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_280737 = f__10447__auto__.call(null);
(statearr_280737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_280737;
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
return (function (state_280816){
var state_val_280817 = (state_280816[(1)]);
if((state_val_280817 === (1))){
var state_280816__$1 = state_280816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_280816__$1,(2),input_chan);
} else {
if((state_val_280817 === (2))){
var inst_280794 = (state_280816[(2)]);
var inst_280795 = inst_280794;
var state_280816__$1 = (function (){var statearr_280818 = state_280816;
(statearr_280818[(7)] = inst_280795);

return statearr_280818;
})();
var statearr_280819_280846 = state_280816__$1;
(statearr_280819_280846[(2)] = null);

(statearr_280819_280846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280817 === (3))){
var inst_280795 = (state_280816[(7)]);
var inst_280797 = cljs.core.count.call(null,inst_280795);
var inst_280798 = cljs.core._EQ_.call(null,inst_280797,(0));
var state_280816__$1 = state_280816;
if(inst_280798){
var statearr_280820_280847 = state_280816__$1;
(statearr_280820_280847[(1)] = (5));

} else {
var statearr_280821_280848 = state_280816__$1;
(statearr_280821_280848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280817 === (4))){
var inst_280814 = (state_280816[(2)]);
var state_280816__$1 = state_280816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280816__$1,inst_280814);
} else {
if((state_val_280817 === (5))){
var inst_280800 = cljs.core.println.call(null,"done");
var state_280816__$1 = state_280816;
var statearr_280822_280849 = state_280816__$1;
(statearr_280822_280849[(2)] = inst_280800);

(statearr_280822_280849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280817 === (6))){
var inst_280795 = (state_280816[(7)]);
var inst_280802 = cljs.core.async.chan.call(null);
var inst_280803 = cljs.core.first.call(null,inst_280795);
var inst_280804 = (function (){var v = inst_280795;
var rc = inst_280802;
var cmd = inst_280803;
return ((function (v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__){
return (function (state_280826){
var state_val_280827 = (state_280826[(1)]);
if((state_val_280827 === (1))){
var state_280826__$1 = state_280826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_280826__$1,(2),rc,res);
} else {
if((state_val_280827 === (2))){
var inst_280824 = (state_280826[(2)]);
var state_280826__$1 = state_280826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280826__$1,inst_280824);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_280831 = [null,null,null,null,null,null,null];
(statearr_280831[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_280831[(1)] = (1));

return statearr_280831;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_280826){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280832){if((e280832 instanceof Object)){
var ex__10429__auto__ = e280832;
var statearr_280833_280850 = state_280826;
(statearr_280833_280850[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280851 = state_280826;
state_280826 = G__280851;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_280826){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_280826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_280834 = f__10447__auto__.call(null);
(statearr_280834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_280834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_280795,inst_280802,inst_280803,state_val_280817,c__10446__auto__))
})();
var inst_280805 = drop_dot.core.pure_js.execAndPrint(inst_280803,inst_280804);
var state_280816__$1 = (function (){var statearr_280835 = state_280816;
(statearr_280835[(8)] = inst_280805);

return statearr_280835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_280816__$1,(8),inst_280802);
} else {
if((state_val_280817 === (7))){
var inst_280812 = (state_280816[(2)]);
var state_280816__$1 = state_280816;
var statearr_280836_280852 = state_280816__$1;
(statearr_280836_280852[(2)] = inst_280812);

(statearr_280836_280852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280817 === (8))){
var inst_280795 = (state_280816[(7)]);
var inst_280807 = (state_280816[(2)]);
var inst_280808 = cljs.core.rest.call(null,inst_280795);
var inst_280809 = cljs.core.vec.call(null,inst_280808);
var inst_280795__$1 = inst_280809;
var state_280816__$1 = (function (){var statearr_280837 = state_280816;
(statearr_280837[(9)] = inst_280807);

(statearr_280837[(7)] = inst_280795__$1);

return statearr_280837;
})();
var statearr_280838_280853 = state_280816__$1;
(statearr_280838_280853[(2)] = null);

(statearr_280838_280853[(1)] = (3));


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
var statearr_280842 = [null,null,null,null,null,null,null,null,null,null];
(statearr_280842[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_280842[(1)] = (1));

return statearr_280842;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_280816){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280843){if((e280843 instanceof Object)){
var ex__10429__auto__ = e280843;
var statearr_280844_280854 = state_280816;
(statearr_280844_280854[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280855 = state_280816;
state_280816 = G__280855;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_280816){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_280816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_280845 = f__10447__auto__.call(null);
(statearr_280845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_280845;
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
return (function (state_280867){
var state_val_280868 = (state_280867[(1)]);
if((state_val_280868 === (1))){
var state_280867__$1 = state_280867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280867__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_280872 = [null,null,null,null,null,null,null];
(statearr_280872[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_280872[(1)] = (1));

return statearr_280872;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_280867){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280873){if((e280873 instanceof Object)){
var ex__10429__auto__ = e280873;
var statearr_280874_280876 = state_280867;
(statearr_280874_280876[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280877 = state_280867;
state_280867 = G__280877;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_280867){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_280867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_280875 = f__10447__auto__.call(null);
(statearr_280875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_280875;
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
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__,res,d){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__,res,d){
return (function (state_280893){
var state_val_280894 = (state_280893[(1)]);
if((state_val_280894 === (1))){
var state_280893__$1 = state_280893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_280893__$1,(2),d,res__$1);
} else {
if((state_val_280894 === (2))){
var inst_280891 = (state_280893[(2)]);
var state_280893__$1 = state_280893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280893__$1,inst_280891);
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
var statearr_280898 = [null,null,null,null,null,null,null];
(statearr_280898[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_280898[(1)] = (1));

return statearr_280898;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_280893){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280899){if((e280899 instanceof Object)){
var ex__10429__auto__ = e280899;
var statearr_280900_280902 = state_280893;
(statearr_280900_280902[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280903 = state_280893;
state_280893 = G__280903;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_280893){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_280893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_280901 = f__10447__auto__.call(null);
(statearr_280901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_280901;
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
return (function (state_280935){
var state_val_280936 = (state_280935[(1)]);
if((state_val_280936 === (1))){
var inst_280926 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_280935__$1 = state_280935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_280935__$1,(2),inst_280926);
} else {
if((state_val_280936 === (2))){
var inst_280928 = (state_280935[(2)]);
var state_280935__$1 = state_280935;
if(cljs.core.truth_(inst_280928)){
var statearr_280937_280948 = state_280935__$1;
(statearr_280937_280948[(1)] = (3));

} else {
var statearr_280938_280949 = state_280935__$1;
(statearr_280938_280949[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280936 === (3))){
var state_280935__$1 = state_280935;
var statearr_280939_280950 = state_280935__$1;
(statearr_280939_280950[(2)] = line);

(statearr_280939_280950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280936 === (4))){
var inst_280931 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_280935__$1 = state_280935;
var statearr_280940_280951 = state_280935__$1;
(statearr_280940_280951[(2)] = inst_280931);

(statearr_280940_280951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_280936 === (5))){
var inst_280933 = (state_280935[(2)]);
var state_280935__$1 = state_280935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_280935__$1,inst_280933);
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
var statearr_280944 = [null,null,null,null,null,null,null];
(statearr_280944[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_280944[(1)] = (1));

return statearr_280944;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_280935){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_280935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e280945){if((e280945 instanceof Object)){
var ex__10429__auto__ = e280945;
var statearr_280946_280952 = state_280935;
(statearr_280946_280952[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_280935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e280945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__280953 = state_280935;
state_280935 = G__280953;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_280935){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_280935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_280947 = f__10447__auto__.call(null);
(statearr_280947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_280947;
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
return (function (state_281007){
var state_val_281008 = (state_281007[(1)]);
if((state_val_281008 === (1))){
var state_281007__$1 = state_281007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_281007__$1,(2),chan_verified_path);
} else {
if((state_val_281008 === (2))){
var inst_280990 = (state_281007[(7)]);
var inst_280990__$1 = (state_281007[(2)]);
var inst_280991 = cljs.core.async.chan.call(null);
var inst_280992 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_280990__$1);
var state_281007__$1 = (function (){var statearr_281009 = state_281007;
(statearr_281009[(8)] = inst_280991);

(statearr_281009[(7)] = inst_280990__$1);

return statearr_281009;
})();
if(cljs.core.truth_(inst_280992)){
var statearr_281010_281024 = state_281007__$1;
(statearr_281010_281024[(1)] = (3));

} else {
var statearr_281011_281025 = state_281007__$1;
(statearr_281011_281025[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281008 === (3))){
var inst_280994 = cljs.core.println.call(null,"1");
var state_281007__$1 = state_281007;
var statearr_281012_281026 = state_281007__$1;
(statearr_281012_281026[(2)] = inst_280994);

(statearr_281012_281026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281008 === (4))){
var inst_280991 = (state_281007[(8)]);
var inst_280990 = (state_281007[(7)]);
var inst_280996 = cljs.core.println.call(null,inst_280990);
var state_281007__$1 = (function (){var statearr_281013 = state_281007;
(statearr_281013[(9)] = inst_280996);

return statearr_281013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_281007__$1,(6),inst_280991,inst_280990);
} else {
if((state_val_281008 === (5))){
var inst_280991 = (state_281007[(8)]);
var inst_281003 = (state_281007[(2)]);
var state_281007__$1 = (function (){var statearr_281014 = state_281007;
(statearr_281014[(10)] = inst_281003);

return statearr_281014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_281007__$1,(8),inst_280991);
} else {
if((state_val_281008 === (6))){
var inst_280991 = (state_281007[(8)]);
var inst_280998 = (state_281007[(2)]);
var state_281007__$1 = (function (){var statearr_281015 = state_281007;
(statearr_281015[(11)] = inst_280998);

return statearr_281015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_281007__$1,(7),inst_280991);
} else {
if((state_val_281008 === (7))){
var inst_281000 = (state_281007[(2)]);
var inst_281001 = cljs.core.println.call(null,inst_281000);
var state_281007__$1 = state_281007;
var statearr_281016_281027 = state_281007__$1;
(statearr_281016_281027[(2)] = inst_281001);

(statearr_281016_281027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281008 === (8))){
var inst_281005 = (state_281007[(2)]);
var state_281007__$1 = state_281007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_281007__$1,inst_281005);
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
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_281020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_281020[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_281020[(1)] = (1));

return statearr_281020;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_281007){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_281007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e281021){if((e281021 instanceof Object)){
var ex__10429__auto__ = e281021;
var statearr_281022_281028 = state_281007;
(statearr_281022_281028[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_281007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e281021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__281029 = state_281007;
state_281007 = G__281029;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_281007){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_281007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_281023 = f__10447__auto__.call(null);
(statearr_281023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_281023;
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
return (function (state_281064){
var state_val_281065 = (state_281064[(1)]);
if((state_val_281065 === (1))){
var state_281064__$1 = state_281064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_281064__$1,(2),c);
} else {
if((state_val_281065 === (2))){
var inst_281055 = (state_281064[(7)]);
var inst_281055__$1 = (state_281064[(2)]);
var inst_281056 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_281055__$1);
var state_281064__$1 = (function (){var statearr_281066 = state_281064;
(statearr_281066[(7)] = inst_281055__$1);

return statearr_281066;
})();
if(cljs.core.truth_(inst_281056)){
var statearr_281067_281078 = state_281064__$1;
(statearr_281067_281078[(1)] = (3));

} else {
var statearr_281068_281079 = state_281064__$1;
(statearr_281068_281079[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281065 === (3))){
var inst_281055 = (state_281064[(7)]);
var inst_281058 = cljs.core.println.call(null,inst_281055);
var state_281064__$1 = state_281064;
var statearr_281069_281080 = state_281064__$1;
(statearr_281069_281080[(2)] = inst_281058);

(statearr_281069_281080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281065 === (4))){
var inst_281055 = (state_281064[(7)]);
var inst_281060 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_281055);
var state_281064__$1 = state_281064;
var statearr_281070_281081 = state_281064__$1;
(statearr_281070_281081[(2)] = inst_281060);

(statearr_281070_281081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281065 === (5))){
var inst_281062 = (state_281064[(2)]);
var state_281064__$1 = state_281064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_281064__$1,inst_281062);
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
var statearr_281074 = [null,null,null,null,null,null,null,null];
(statearr_281074[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_281074[(1)] = (1));

return statearr_281074;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_281064){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_281064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e281075){if((e281075 instanceof Object)){
var ex__10429__auto__ = e281075;
var statearr_281076_281082 = state_281064;
(statearr_281076_281082[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_281064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e281075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__281083 = state_281064;
state_281064 = G__281083;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_281064){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_281064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_281077 = f__10447__auto__.call(null);
(statearr_281077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_281077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.drop_line = (function drop_dot$core$drop_line(line){
return drop_dot.core.drop_chan_verified_droppee.call(null,drop_dot.core.chan_verified_path__GT_chan_verified_droppee.call(null,drop_dot.core.line__GT_chan_verified_path.call(null,line)));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__10446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto__){
return (function (state_281145){
var state_val_281146 = (state_281145[(1)]);
if((state_val_281146 === (7))){
var inst_281141 = (state_281145[(2)]);
var state_281145__$1 = state_281145;
var statearr_281147_281168 = state_281145__$1;
(statearr_281147_281168[(2)] = inst_281141);

(statearr_281147_281168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (1))){
var inst_281126 = chan_config;
var state_281145__$1 = (function (){var statearr_281148 = state_281145;
(statearr_281148[(7)] = inst_281126);

return statearr_281148;
})();
var statearr_281149_281169 = state_281145__$1;
(statearr_281149_281169[(2)] = null);

(statearr_281149_281169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (4))){
var inst_281129 = (state_281145[(8)]);
var inst_281129__$1 = (state_281145[(2)]);
var state_281145__$1 = (function (){var statearr_281150 = state_281145;
(statearr_281150[(8)] = inst_281129__$1);

return statearr_281150;
})();
if(cljs.core.truth_(inst_281129__$1)){
var statearr_281151_281170 = state_281145__$1;
(statearr_281151_281170[(1)] = (5));

} else {
var statearr_281152_281171 = state_281145__$1;
(statearr_281152_281171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (6))){
var state_281145__$1 = state_281145;
var statearr_281153_281172 = state_281145__$1;
(statearr_281153_281172[(2)] = null);

(statearr_281153_281172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (3))){
var inst_281143 = (state_281145[(2)]);
var state_281145__$1 = state_281145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_281145__$1,inst_281143);
} else {
if((state_val_281146 === (2))){
var inst_281126 = (state_281145[(7)]);
var state_281145__$1 = state_281145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_281145__$1,(4),inst_281126);
} else {
if((state_val_281146 === (9))){
var inst_281129 = (state_281145[(8)]);
var inst_281135 = cljs.core.println.call(null,inst_281129);
var state_281145__$1 = state_281145;
var statearr_281155_281173 = state_281145__$1;
(statearr_281155_281173[(2)] = inst_281135);

(statearr_281155_281173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (5))){
var inst_281131 = cljs.core._EQ_.call(null,cmd,"drop");
var state_281145__$1 = state_281145;
if(inst_281131){
var statearr_281156_281174 = state_281145__$1;
(statearr_281156_281174[(1)] = (8));

} else {
var statearr_281157_281175 = state_281145__$1;
(statearr_281157_281175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (10))){
var inst_281126 = (state_281145[(7)]);
var inst_281137 = (state_281145[(2)]);
var tmp281154 = inst_281126;
var inst_281126__$1 = tmp281154;
var state_281145__$1 = (function (){var statearr_281158 = state_281145;
(statearr_281158[(9)] = inst_281137);

(statearr_281158[(7)] = inst_281126__$1);

return statearr_281158;
})();
var statearr_281159_281176 = state_281145__$1;
(statearr_281159_281176[(2)] = null);

(statearr_281159_281176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_281146 === (8))){
var inst_281129 = (state_281145[(8)]);
var inst_281133 = drop_dot.core.drop_line.call(null,inst_281129);
var state_281145__$1 = state_281145;
var statearr_281160_281177 = state_281145__$1;
(statearr_281160_281177[(2)] = inst_281133);

(statearr_281160_281177[(1)] = (10));


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
var statearr_281164 = [null,null,null,null,null,null,null,null,null,null];
(statearr_281164[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_281164[(1)] = (1));

return statearr_281164;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_281145){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_281145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e281165){if((e281165 instanceof Object)){
var ex__10429__auto__ = e281165;
var statearr_281166_281178 = state_281145;
(statearr_281166_281178[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_281145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e281165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__281179 = state_281145;
state_281145 = G__281179;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_281145){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_281145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_281167 = f__10447__auto__.call(null);
(statearr_281167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_281167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___281276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___281276,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___281276,c){
return (function (state_281240){
var state_val_281241 = (state_281240[(1)]);
if((state_val_281241 === (1))){
var inst_281228 = (state_281240[(7)]);
var inst_281230 = (state_281240[(8)]);
var inst_281229 = (state_281240[(9)]);
var inst_281228__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_281229__$1 = cljs.core.async.chan.call(null,(1));
var inst_281230__$1 = (function (){var res = inst_281228__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_281229__$1;
return ((function (res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c){
return (function (state_281245){
var state_val_281246 = (state_281245[(1)]);
if((state_val_281246 === (1))){
var state_281245__$1 = state_281245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_281245__$1,(2),wcc,res__$1);
} else {
if((state_val_281246 === (2))){
var inst_281243 = (state_281245[(2)]);
var state_281245__$1 = state_281245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_281245__$1,inst_281243);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_281250 = [null,null,null,null,null,null,null];
(statearr_281250[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_281250[(1)] = (1));

return statearr_281250;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_281245){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_281245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e281251){if((e281251 instanceof Object)){
var ex__10429__auto__ = e281251;
var statearr_281252_281277 = state_281245;
(statearr_281252_281277[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_281245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e281251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__281278 = state_281245;
state_281245 = G__281278;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_281245){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_281245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c))
})();
var state__10448__auto__ = (function (){var statearr_281253 = f__10447__auto__.call(null);
(statearr_281253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_281253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_281228,inst_281230,inst_281229,inst_281228__$1,inst_281229__$1,state_val_281241,c__10446__auto___281276,c))
})();
var inst_281231 = inst_281228__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_281230__$1);
var state_281240__$1 = (function (){var statearr_281254 = state_281240;
(statearr_281254[(7)] = inst_281228__$1);

(statearr_281254[(8)] = inst_281230__$1);

(statearr_281254[(9)] = inst_281229__$1);

(statearr_281254[(10)] = inst_281231);

return statearr_281254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_281240__$1,(2),inst_281229__$1);
} else {
if((state_val_281241 === (2))){
var inst_281228 = (state_281240[(7)]);
var inst_281230 = (state_281240[(8)]);
var inst_281229 = (state_281240[(9)]);
var inst_281231 = (state_281240[(10)]);
var inst_281233 = (state_281240[(2)]);
var inst_281234 = [cljs.core.str(inst_281233)].join('');
var inst_281235 = parseInt(inst_281234);
var inst_281236 = (function (){var res = inst_281228;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_281229;
var wcc_jammer = inst_281230;
var get_wc = inst_281231;
var lines = inst_281235;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,state_val_281241,c__10446__auto___281276,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,state_val_281241,c__10446__auto___281276,c))
})();
var inst_281237 = (function (){var res = inst_281228;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_281229;
var wcc_jammer = inst_281230;
var get_wc = inst_281231;
var lines = inst_281235;
var close_if_done = inst_281236;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c){
return (function (state_281259){
var state_val_281260 = (state_281259[(1)]);
if((state_val_281260 === (1))){
var state_281259__$1 = state_281259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_281259__$1,(2),c,res__$1);
} else {
if((state_val_281260 === (2))){
var inst_281256 = (state_281259[(2)]);
var inst_281257 = close_if_done.call(null);
var state_281259__$1 = (function (){var statearr_281261 = state_281259;
(statearr_281261[(7)] = inst_281256);

return statearr_281261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_281259__$1,inst_281257);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_281265 = [null,null,null,null,null,null,null,null];
(statearr_281265[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_281265[(1)] = (1));

return statearr_281265;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_281259){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_281259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e281266){if((e281266 instanceof Object)){
var ex__10429__auto__ = e281266;
var statearr_281267_281279 = state_281259;
(statearr_281267_281279[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_281259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e281266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__281280 = state_281259;
state_281259 = G__281280;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_281259){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_281259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c))
})();
var state__10448__auto__ = (function (){var statearr_281268 = f__10447__auto__.call(null);
(statearr_281268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_281268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_281228,inst_281230,inst_281229,inst_281231,inst_281233,inst_281234,inst_281235,inst_281236,state_val_281241,c__10446__auto___281276,c))
})();
var inst_281238 = inst_281228.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_281237);
var state_281240__$1 = state_281240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_281240__$1,inst_281238);
} else {
return null;
}
}
});})(c__10446__auto___281276,c))
;
return ((function (switch__10425__auto__,c__10446__auto___281276,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_281272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_281272[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_281272[(1)] = (1));

return statearr_281272;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_281240){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_281240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e281273){if((e281273 instanceof Object)){
var ex__10429__auto__ = e281273;
var statearr_281274_281281 = state_281240;
(statearr_281274_281281[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_281240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e281273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__281282 = state_281240;
state_281240 = G__281282;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_281240){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_281240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___281276,c))
})();
var state__10448__auto__ = (function (){var statearr_281275 = f__10447__auto__.call(null);
(statearr_281275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___281276);

return statearr_281275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___281276,c))
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
var len__9156__auto___281284 = arguments.length;
var i__9157__auto___281285 = (0);
while(true){
if((i__9157__auto___281285 < len__9156__auto___281284)){
args__9163__auto__.push((arguments[i__9157__auto___281285]));

var G__281286 = (i__9157__auto___281285 + (1));
i__9157__auto___281285 = G__281286;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq281283){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq281283));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map