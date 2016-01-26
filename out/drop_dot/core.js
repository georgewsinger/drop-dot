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
return (function (state_287586){
var state_val_287587 = (state_287586[(1)]);
if((state_val_287587 === (1))){
var state_287586__$1 = state_287586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287586__$1,(2),c,arg);
} else {
if((state_val_287587 === (2))){
var inst_287584 = (state_287586[(2)]);
var state_287586__$1 = state_287586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287586__$1,inst_287584);
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
var statearr_287591 = [null,null,null,null,null,null,null];
(statearr_287591[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_287591[(1)] = (1));

return statearr_287591;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_287586){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287592){if((e287592 instanceof Object)){
var ex__10429__auto__ = e287592;
var statearr_287593_287595 = state_287586;
(statearr_287593_287595[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287596 = state_287586;
state_287586 = G__287596;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_287586){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_287586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287594 = f__10447__auto__.call(null);
(statearr_287594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287594;
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
return (function (state_287612){
var state_val_287613 = (state_287612[(1)]);
if((state_val_287613 === (1))){
var state_287612__$1 = state_287612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287612__$1,(2),c,arg);
} else {
if((state_val_287613 === (2))){
var inst_287610 = (state_287612[(2)]);
var state_287612__$1 = state_287612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287612__$1,inst_287610);
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
var statearr_287617 = [null,null,null,null,null,null,null];
(statearr_287617[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__);

(statearr_287617[(1)] = (1));

return statearr_287617;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1 = (function (state_287612){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287618){if((e287618 instanceof Object)){
var ex__10429__auto__ = e287618;
var statearr_287619_287621 = state_287612;
(statearr_287619_287621[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287622 = state_287612;
state_287612 = G__287622;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__ = function(state_287612){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1.call(this,state_287612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287620 = f__10447__auto__.call(null);
(statearr_287620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287620;
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
return (function (state_287699){
var state_val_287700 = (state_287699[(1)]);
if((state_val_287700 === (1))){
var state_287699__$1 = state_287699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287699__$1,(2),input_chan);
} else {
if((state_val_287700 === (2))){
var inst_287677 = (state_287699[(2)]);
var inst_287678 = inst_287677;
var state_287699__$1 = (function (){var statearr_287701 = state_287699;
(statearr_287701[(7)] = inst_287678);

return statearr_287701;
})();
var statearr_287702_287729 = state_287699__$1;
(statearr_287702_287729[(2)] = null);

(statearr_287702_287729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287700 === (3))){
var inst_287678 = (state_287699[(7)]);
var inst_287680 = cljs.core.count.call(null,inst_287678);
var inst_287681 = cljs.core._EQ_.call(null,inst_287680,(0));
var state_287699__$1 = state_287699;
if(inst_287681){
var statearr_287703_287730 = state_287699__$1;
(statearr_287703_287730[(1)] = (5));

} else {
var statearr_287704_287731 = state_287699__$1;
(statearr_287704_287731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287700 === (4))){
var inst_287697 = (state_287699[(2)]);
var state_287699__$1 = state_287699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287699__$1,inst_287697);
} else {
if((state_val_287700 === (5))){
var inst_287683 = cljs.core.println.call(null,"done");
var state_287699__$1 = state_287699;
var statearr_287705_287732 = state_287699__$1;
(statearr_287705_287732[(2)] = inst_287683);

(statearr_287705_287732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287700 === (6))){
var inst_287678 = (state_287699[(7)]);
var inst_287685 = cljs.core.async.chan.call(null);
var inst_287686 = cljs.core.first.call(null,inst_287678);
var inst_287687 = (function (){var v = inst_287678;
var rc = inst_287685;
var cmd = inst_287686;
return ((function (v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__){
return (function (res){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__){
return (function (state_287709){
var state_val_287710 = (state_287709[(1)]);
if((state_val_287710 === (1))){
var state_287709__$1 = state_287709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287709__$1,(2),rc,res);
} else {
if((state_val_287710 === (2))){
var inst_287707 = (state_287709[(2)]);
var state_287709__$1 = state_287709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287709__$1,inst_287707);
} else {
return null;
}
}
});})(c__10446__auto____$1,v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0 = (function (){
var statearr_287714 = [null,null,null,null,null,null,null];
(statearr_287714[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_287714[(1)] = (1));

return statearr_287714;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_287709){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287715){if((e287715 instanceof Object)){
var ex__10429__auto__ = e287715;
var statearr_287716_287733 = state_287709;
(statearr_287716_287733[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287734 = state_287709;
state_287709 = G__287734;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_287709){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_287709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287717 = f__10447__auto__.call(null);
(statearr_287717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_287717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__))
);

return c__10446__auto____$1;
});
;})(v,rc,cmd,inst_287678,inst_287685,inst_287686,state_val_287700,c__10446__auto__))
})();
var inst_287688 = drop_dot.core.pure_js.execAndPrint(inst_287686,inst_287687);
var state_287699__$1 = (function (){var statearr_287718 = state_287699;
(statearr_287718[(8)] = inst_287688);

return statearr_287718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287699__$1,(8),inst_287685);
} else {
if((state_val_287700 === (7))){
var inst_287695 = (state_287699[(2)]);
var state_287699__$1 = state_287699;
var statearr_287719_287735 = state_287699__$1;
(statearr_287719_287735[(2)] = inst_287695);

(statearr_287719_287735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287700 === (8))){
var inst_287678 = (state_287699[(7)]);
var inst_287690 = (state_287699[(2)]);
var inst_287691 = cljs.core.rest.call(null,inst_287678);
var inst_287692 = cljs.core.vec.call(null,inst_287691);
var inst_287678__$1 = inst_287692;
var state_287699__$1 = (function (){var statearr_287720 = state_287699;
(statearr_287720[(7)] = inst_287678__$1);

(statearr_287720[(9)] = inst_287690);

return statearr_287720;
})();
var statearr_287721_287736 = state_287699__$1;
(statearr_287721_287736[(2)] = null);

(statearr_287721_287736[(1)] = (3));


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
var statearr_287725 = [null,null,null,null,null,null,null,null,null,null];
(statearr_287725[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__);

(statearr_287725[(1)] = (1));

return statearr_287725;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1 = (function (state_287699){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287726){if((e287726 instanceof Object)){
var ex__10429__auto__ = e287726;
var statearr_287727_287737 = state_287699;
(statearr_287727_287737[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287738 = state_287699;
state_287699 = G__287738;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__ = function(state_287699){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1.call(this,state_287699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287728 = f__10447__auto__.call(null);
(statearr_287728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287728;
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
return (function (state_287750){
var state_val_287751 = (state_287750[(1)]);
if((state_val_287751 === (1))){
var state_287750__$1 = state_287750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287750__$1,v);
} else {
return null;
}
});})(c__10446__auto__,c))
;
return ((function (switch__10425__auto__,c__10446__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0 = (function (){
var statearr_287755 = [null,null,null,null,null,null,null];
(statearr_287755[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__);

(statearr_287755[(1)] = (1));

return statearr_287755;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1 = (function (state_287750){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287756){if((e287756 instanceof Object)){
var ex__10429__auto__ = e287756;
var statearr_287757_287759 = state_287750;
(statearr_287757_287759[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287760 = state_287750;
state_287750 = G__287760;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__ = function(state_287750){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1.call(this,state_287750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,c))
})();
var state__10448__auto__ = (function (){var statearr_287758 = f__10447__auto__.call(null);
(statearr_287758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287758;
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
return (function (state_287776){
var state_val_287777 = (state_287776[(1)]);
if((state_val_287777 === (1))){
var state_287776__$1 = state_287776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287776__$1,(2),d,res__$1);
} else {
if((state_val_287777 === (2))){
var inst_287774 = (state_287776[(2)]);
var state_287776__$1 = state_287776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287776__$1,inst_287774);
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
var statearr_287781 = [null,null,null,null,null,null,null];
(statearr_287781[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__);

(statearr_287781[(1)] = (1));

return statearr_287781;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1 = (function (state_287776){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287782){if((e287782 instanceof Object)){
var ex__10429__auto__ = e287782;
var statearr_287783_287785 = state_287776;
(statearr_287783_287785[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287786 = state_287776;
state_287776 = G__287786;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__ = function(state_287776){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1.call(this,state_287776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__,res,d))
})();
var state__10448__auto__ = (function (){var statearr_287784 = f__10447__auto__.call(null);
(statearr_287784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287784;
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
return (function (state_287818){
var state_val_287819 = (state_287818[(1)]);
if((state_val_287819 === (1))){
var inst_287809 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_287818__$1 = state_287818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287818__$1,(2),inst_287809);
} else {
if((state_val_287819 === (2))){
var inst_287811 = (state_287818[(2)]);
var state_287818__$1 = state_287818;
if(cljs.core.truth_(inst_287811)){
var statearr_287820_287831 = state_287818__$1;
(statearr_287820_287831[(1)] = (3));

} else {
var statearr_287821_287832 = state_287818__$1;
(statearr_287821_287832[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287819 === (3))){
var state_287818__$1 = state_287818;
var statearr_287822_287833 = state_287818__$1;
(statearr_287822_287833[(2)] = line);

(statearr_287822_287833[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287819 === (4))){
var inst_287814 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_287818__$1 = state_287818;
var statearr_287823_287834 = state_287818__$1;
(statearr_287823_287834[(2)] = inst_287814);

(statearr_287823_287834[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287819 === (5))){
var inst_287816 = (state_287818[(2)]);
var state_287818__$1 = state_287818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287818__$1,inst_287816);
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
var statearr_287827 = [null,null,null,null,null,null,null];
(statearr_287827[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__);

(statearr_287827[(1)] = (1));

return statearr_287827;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1 = (function (state_287818){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287828){if((e287828 instanceof Object)){
var ex__10429__auto__ = e287828;
var statearr_287829_287835 = state_287818;
(statearr_287829_287835[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287836 = state_287818;
state_287818 = G__287836;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__ = function(state_287818){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1.call(this,state_287818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287830 = f__10447__auto__.call(null);
(statearr_287830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287830;
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
return (function (state_287907){
var state_val_287908 = (state_287907[(1)]);
if((state_val_287908 === (1))){
var state_287907__$1 = state_287907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287907__$1,(2),chan_verified_path);
} else {
if((state_val_287908 === (2))){
var inst_287893 = (state_287907[(7)]);
var inst_287894 = (state_287907[(8)]);
var inst_287893__$1 = (state_287907[(2)]);
var inst_287894__$1 = cljs.core.async.chan.call(null,(1));
var inst_287895 = (function (){var verified_path = inst_287893__$1;
var rc = inst_287894__$1;
return ((function (verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function (state_287913){
var state_val_287914 = (state_287913[(1)]);
if((state_val_287914 === (1))){
var inst_287909 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_287913__$1 = state_287913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287913__$1,(2),rc,inst_287909);
} else {
if((state_val_287914 === (2))){
var inst_287911 = (state_287913[(2)]);
var state_287913__$1 = state_287913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287913__$1,inst_287911);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_287918 = [null,null,null,null,null,null,null];
(statearr_287918[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_287918[(1)] = (1));

return statearr_287918;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_287913){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287919){if((e287919 instanceof Object)){
var ex__10429__auto__ = e287919;
var statearr_287920_287947 = state_287913;
(statearr_287920_287947[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287948 = state_287913;
state_287913 = G__287948;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_287913){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_287913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287921 = f__10447__auto__.call(null);
(statearr_287921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_287921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
);

return c__10446__auto____$1;
} else {
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function (state_287925){
var state_val_287926 = (state_287925[(1)]);
if((state_val_287926 === (1))){
var state_287925__$1 = state_287925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287925__$1,(2),rc,verified_path);
} else {
if((state_val_287926 === (2))){
var inst_287923 = (state_287925[(2)]);
var state_287925__$1 = state_287925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287925__$1,inst_287923);
} else {
return null;
}
}
});})(c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0 = (function (){
var statearr_287930 = [null,null,null,null,null,null,null];
(statearr_287930[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_287930[(1)] = (1));

return statearr_287930;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_287925){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287931){if((e287931 instanceof Object)){
var ex__10429__auto__ = e287931;
var statearr_287932_287949 = state_287925;
(statearr_287932_287949[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287950 = state_287925;
state_287925 = G__287950;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_287925){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_287925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287933 = f__10447__auto__.call(null);
(statearr_287933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_287933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
);

return c__10446__auto____$1;
}
});
;})(verified_path,rc,inst_287893,inst_287894,inst_287893__$1,inst_287894__$1,state_val_287908,c__10446__auto__))
})();
var inst_287896 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_287893__$1);
var state_287907__$1 = (function (){var statearr_287934 = state_287907;
(statearr_287934[(9)] = inst_287895);

(statearr_287934[(7)] = inst_287893__$1);

(statearr_287934[(8)] = inst_287894__$1);

return statearr_287934;
})();
if(cljs.core.truth_(inst_287896)){
var statearr_287935_287951 = state_287907__$1;
(statearr_287935_287951[(1)] = (3));

} else {
var statearr_287936_287952 = state_287907__$1;
(statearr_287936_287952[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287908 === (3))){
var inst_287893 = (state_287907[(7)]);
var inst_287894 = (state_287907[(8)]);
var state_287907__$1 = state_287907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287907__$1,(6),inst_287894,inst_287893);
} else {
if((state_val_287908 === (4))){
var inst_287895 = (state_287907[(9)]);
var inst_287893 = (state_287907[(7)]);
var inst_287901 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_287893,inst_287895);
var state_287907__$1 = state_287907;
var statearr_287937_287953 = state_287907__$1;
(statearr_287937_287953[(2)] = inst_287901);

(statearr_287937_287953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287908 === (5))){
var inst_287894 = (state_287907[(8)]);
var inst_287903 = (state_287907[(2)]);
var state_287907__$1 = (function (){var statearr_287938 = state_287907;
(statearr_287938[(10)] = inst_287903);

return statearr_287938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287907__$1,(7),inst_287894);
} else {
if((state_val_287908 === (6))){
var inst_287899 = (state_287907[(2)]);
var state_287907__$1 = state_287907;
var statearr_287939_287954 = state_287907__$1;
(statearr_287939_287954[(2)] = inst_287899);

(statearr_287939_287954[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287908 === (7))){
var inst_287905 = (state_287907[(2)]);
var state_287907__$1 = state_287907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287907__$1,inst_287905);
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
var statearr_287943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_287943[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_287943[(1)] = (1));

return statearr_287943;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_287907){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e287944){if((e287944 instanceof Object)){
var ex__10429__auto__ = e287944;
var statearr_287945_287955 = state_287907;
(statearr_287945_287955[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287956 = state_287907;
state_287907 = G__287956;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_287907){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_287907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_287946 = f__10447__auto__.call(null);
(statearr_287946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_287946;
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
return (function (state_287991){
var state_val_287992 = (state_287991[(1)]);
if((state_val_287992 === (1))){
var state_287991__$1 = state_287991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287991__$1,(2),c);
} else {
if((state_val_287992 === (2))){
var inst_287982 = (state_287991[(7)]);
var inst_287982__$1 = (state_287991[(2)]);
var inst_287983 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_287982__$1);
var state_287991__$1 = (function (){var statearr_287993 = state_287991;
(statearr_287993[(7)] = inst_287982__$1);

return statearr_287993;
})();
if(cljs.core.truth_(inst_287983)){
var statearr_287994_288005 = state_287991__$1;
(statearr_287994_288005[(1)] = (3));

} else {
var statearr_287995_288006 = state_287991__$1;
(statearr_287995_288006[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287992 === (3))){
var inst_287982 = (state_287991[(7)]);
var inst_287985 = cljs.core.println.call(null,inst_287982);
var state_287991__$1 = state_287991;
var statearr_287996_288007 = state_287991__$1;
(statearr_287996_288007[(2)] = inst_287985);

(statearr_287996_288007[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287992 === (4))){
var inst_287982 = (state_287991[(7)]);
var inst_287987 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_287982);
var state_287991__$1 = state_287991;
var statearr_287997_288008 = state_287991__$1;
(statearr_287997_288008[(2)] = inst_287987);

(statearr_287997_288008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287992 === (5))){
var inst_287989 = (state_287991[(2)]);
var state_287991__$1 = state_287991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287991__$1,inst_287989);
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
var statearr_288001 = [null,null,null,null,null,null,null,null];
(statearr_288001[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__);

(statearr_288001[(1)] = (1));

return statearr_288001;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1 = (function (state_287991){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_287991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288002){if((e288002 instanceof Object)){
var ex__10429__auto__ = e288002;
var statearr_288003_288009 = state_287991;
(statearr_288003_288009[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288010 = state_287991;
state_287991 = G__288010;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__ = function(state_287991){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1.call(this,state_287991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288004 = f__10447__auto__.call(null);
(statearr_288004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288004;
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
return (function (state_288072){
var state_val_288073 = (state_288072[(1)]);
if((state_val_288073 === (7))){
var inst_288068 = (state_288072[(2)]);
var state_288072__$1 = state_288072;
var statearr_288074_288095 = state_288072__$1;
(statearr_288074_288095[(2)] = inst_288068);

(statearr_288074_288095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (1))){
var inst_288053 = chan_config;
var state_288072__$1 = (function (){var statearr_288075 = state_288072;
(statearr_288075[(7)] = inst_288053);

return statearr_288075;
})();
var statearr_288076_288096 = state_288072__$1;
(statearr_288076_288096[(2)] = null);

(statearr_288076_288096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (4))){
var inst_288056 = (state_288072[(8)]);
var inst_288056__$1 = (state_288072[(2)]);
var state_288072__$1 = (function (){var statearr_288077 = state_288072;
(statearr_288077[(8)] = inst_288056__$1);

return statearr_288077;
})();
if(cljs.core.truth_(inst_288056__$1)){
var statearr_288078_288097 = state_288072__$1;
(statearr_288078_288097[(1)] = (5));

} else {
var statearr_288079_288098 = state_288072__$1;
(statearr_288079_288098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (6))){
var state_288072__$1 = state_288072;
var statearr_288080_288099 = state_288072__$1;
(statearr_288080_288099[(2)] = null);

(statearr_288080_288099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (3))){
var inst_288070 = (state_288072[(2)]);
var state_288072__$1 = state_288072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288072__$1,inst_288070);
} else {
if((state_val_288073 === (2))){
var inst_288053 = (state_288072[(7)]);
var state_288072__$1 = state_288072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288072__$1,(4),inst_288053);
} else {
if((state_val_288073 === (9))){
var inst_288056 = (state_288072[(8)]);
var inst_288062 = cljs.core.println.call(null,inst_288056);
var state_288072__$1 = state_288072;
var statearr_288082_288100 = state_288072__$1;
(statearr_288082_288100[(2)] = inst_288062);

(statearr_288082_288100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (5))){
var inst_288058 = cljs.core._EQ_.call(null,cmd,"drop");
var state_288072__$1 = state_288072;
if(inst_288058){
var statearr_288083_288101 = state_288072__$1;
(statearr_288083_288101[(1)] = (8));

} else {
var statearr_288084_288102 = state_288072__$1;
(statearr_288084_288102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (10))){
var inst_288053 = (state_288072[(7)]);
var inst_288064 = (state_288072[(2)]);
var tmp288081 = inst_288053;
var inst_288053__$1 = tmp288081;
var state_288072__$1 = (function (){var statearr_288085 = state_288072;
(statearr_288085[(7)] = inst_288053__$1);

(statearr_288085[(9)] = inst_288064);

return statearr_288085;
})();
var statearr_288086_288103 = state_288072__$1;
(statearr_288086_288103[(2)] = null);

(statearr_288086_288103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288073 === (8))){
var inst_288056 = (state_288072[(8)]);
var inst_288060 = drop_dot.core.drop_line.call(null,inst_288056);
var state_288072__$1 = state_288072;
var statearr_288087_288104 = state_288072__$1;
(statearr_288087_288104[(2)] = inst_288060);

(statearr_288087_288104[(1)] = (10));


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
var statearr_288091 = [null,null,null,null,null,null,null,null,null,null];
(statearr_288091[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__);

(statearr_288091[(1)] = (1));

return statearr_288091;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1 = (function (state_288072){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288092){if((e288092 instanceof Object)){
var ex__10429__auto__ = e288092;
var statearr_288093_288105 = state_288072;
(statearr_288093_288105[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288106 = state_288072;
state_288072 = G__288106;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__ = function(state_288072){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1.call(this,state_288072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto__))
})();
var state__10448__auto__ = (function (){var statearr_288094 = f__10447__auto__.call(null);
(statearr_288094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto__);

return statearr_288094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto__))
);

return c__10446__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__10446__auto___288203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto___288203,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto___288203,c){
return (function (state_288167){
var state_val_288168 = (state_288167[(1)]);
if((state_val_288168 === (1))){
var inst_288156 = (state_288167[(7)]);
var inst_288157 = (state_288167[(8)]);
var inst_288155 = (state_288167[(9)]);
var inst_288155__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_288156__$1 = cljs.core.async.chan.call(null,(1));
var inst_288157__$1 = (function (){var res = inst_288155__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_288156__$1;
return ((function (res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c){
return (function (error,res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c){
return (function (state_288172){
var state_val_288173 = (state_288172[(1)]);
if((state_val_288173 === (1))){
var state_288172__$1 = state_288172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288172__$1,(2),wcc,res__$1);
} else {
if((state_val_288173 === (2))){
var inst_288170 = (state_288172[(2)]);
var state_288172__$1 = state_288172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288172__$1,inst_288170);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_288177 = [null,null,null,null,null,null,null];
(statearr_288177[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_288177[(1)] = (1));

return statearr_288177;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_288172){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288178){if((e288178 instanceof Object)){
var ex__10429__auto__ = e288178;
var statearr_288179_288204 = state_288172;
(statearr_288179_288204[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288205 = state_288172;
state_288172 = G__288205;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_288172){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_288172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c))
})();
var state__10448__auto__ = (function (){var statearr_288180 = f__10447__auto__.call(null);
(statearr_288180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,inst_288156,inst_288157,inst_288155,inst_288155__$1,inst_288156__$1,state_val_288168,c__10446__auto___288203,c))
})();
var inst_288158 = inst_288155__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_288157__$1);
var state_288167__$1 = (function (){var statearr_288181 = state_288167;
(statearr_288181[(10)] = inst_288158);

(statearr_288181[(7)] = inst_288156__$1);

(statearr_288181[(8)] = inst_288157__$1);

(statearr_288181[(9)] = inst_288155__$1);

return statearr_288181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288167__$1,(2),inst_288156__$1);
} else {
if((state_val_288168 === (2))){
var inst_288158 = (state_288167[(10)]);
var inst_288156 = (state_288167[(7)]);
var inst_288157 = (state_288167[(8)]);
var inst_288155 = (state_288167[(9)]);
var inst_288160 = (state_288167[(2)]);
var inst_288161 = [cljs.core.str(inst_288160)].join('');
var inst_288162 = parseInt(inst_288161);
var inst_288163 = (function (){var res = inst_288155;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_288156;
var wcc_jammer = inst_288157;
var get_wc = inst_288158;
var lines = inst_288162;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,state_val_288168,c__10446__auto___288203,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,state_val_288168,c__10446__auto___288203,c))
})();
var inst_288164 = (function (){var res = inst_288155;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_288156;
var wcc_jammer = inst_288157;
var get_wc = inst_288158;
var lines = inst_288162;
var close_if_done = inst_288163;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c){
return (function (res__$1){
var c__10446__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c){
return (function (){
var f__10447__auto__ = (function (){var switch__10425__auto__ = ((function (c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c){
return (function (state_288186){
var state_val_288187 = (state_288186[(1)]);
if((state_val_288187 === (1))){
var state_288186__$1 = state_288186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288186__$1,(2),c,res__$1);
} else {
if((state_val_288187 === (2))){
var inst_288183 = (state_288186[(2)]);
var inst_288184 = close_if_done.call(null);
var state_288186__$1 = (function (){var statearr_288188 = state_288186;
(statearr_288188[(7)] = inst_288183);

return statearr_288188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288186__$1,inst_288184);
} else {
return null;
}
}
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c))
;
return ((function (switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_288192 = [null,null,null,null,null,null,null,null];
(statearr_288192[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_288192[(1)] = (1));

return statearr_288192;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_288186){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288193){if((e288193 instanceof Object)){
var ex__10429__auto__ = e288193;
var statearr_288194_288206 = state_288186;
(statearr_288194_288206[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288207 = state_288186;
state_288186 = G__288207;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_288186){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_288186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c))
})();
var state__10448__auto__ = (function (){var statearr_288195 = f__10447__auto__.call(null);
(statearr_288195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto____$1);

return statearr_288195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c))
);

return c__10446__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_288158,inst_288156,inst_288157,inst_288155,inst_288160,inst_288161,inst_288162,inst_288163,state_val_288168,c__10446__auto___288203,c))
})();
var inst_288165 = inst_288155.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_288164);
var state_288167__$1 = state_288167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288167__$1,inst_288165);
} else {
return null;
}
}
});})(c__10446__auto___288203,c))
;
return ((function (switch__10425__auto__,c__10446__auto___288203,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0 = (function (){
var statearr_288199 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_288199[(0)] = drop_dot$core$chan_config_paths_$_state_machine__10426__auto__);

(statearr_288199[(1)] = (1));

return statearr_288199;
});
var drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1 = (function (state_288167){
while(true){
var ret_value__10427__auto__ = (function (){try{while(true){
var result__10428__auto__ = switch__10425__auto__.call(null,state_288167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10428__auto__;
}
break;
}
}catch (e288200){if((e288200 instanceof Object)){
var ex__10429__auto__ = e288200;
var statearr_288201_288208 = state_288167;
(statearr_288201_288208[(5)] = ex__10429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288209 = state_288167;
state_288167 = G__288209;
continue;
} else {
return ret_value__10427__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__ = function(state_288167){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1.call(this,state_288167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__10426__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__10426__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__10426__auto__;
})()
;})(switch__10425__auto__,c__10446__auto___288203,c))
})();
var state__10448__auto__ = (function (){var statearr_288202 = f__10447__auto__.call(null);
(statearr_288202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10446__auto___288203);

return statearr_288202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10448__auto__);
});})(c__10446__auto___288203,c))
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
var len__9156__auto___288211 = arguments.length;
var i__9157__auto___288212 = (0);
while(true){
if((i__9157__auto___288212 < len__9156__auto___288211)){
args__9163__auto__.push((arguments[i__9157__auto___288212]));

var G__288213 = (i__9157__auto___288212 + (1));
i__9157__auto___288212 = G__288213;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq288210){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq288210));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map