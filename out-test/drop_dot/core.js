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
return (function (state_66550){
var state_val_66551 = (state_66550[(1)]);
if((state_val_66551 === (1))){
var state_66550__$1 = state_66550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66550__$1,(2),c,arg);
} else {
if((state_val_66551 === (2))){
var inst_66548 = (state_66550[(2)]);
var state_66550__$1 = state_66550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66550__$1,inst_66548);
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
var statearr_66555 = [null,null,null,null,null,null,null];
(statearr_66555[(0)] = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_66555[(1)] = (1));

return statearr_66555;
});
var drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_66550){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66556){if((e66556 instanceof Object)){
var ex__9301__auto__ = e66556;
var statearr_66557_66559 = state_66550;
(statearr_66557_66559[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66560 = state_66550;
state_66550 = G__66560;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_66550){
switch(arguments.length){
case 0:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_66550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_first_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66558 = f__9319__auto__.call(null);
(statearr_66558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66558;
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
return (function (state_66576){
var state_val_66577 = (state_66576[(1)]);
if((state_val_66577 === (1))){
var state_66576__$1 = state_66576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66576__$1,(2),c,arg);
} else {
if((state_val_66577 === (2))){
var inst_66574 = (state_66576[(2)]);
var state_66576__$1 = state_66576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66576__$1,inst_66574);
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
var statearr_66581 = [null,null,null,null,null,null,null];
(statearr_66581[(0)] = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__);

(statearr_66581[(1)] = (1));

return statearr_66581;
});
var drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1 = (function (state_66576){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66582){if((e66582 instanceof Object)){
var ex__9301__auto__ = e66582;
var statearr_66583_66585 = state_66576;
(statearr_66583_66585[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66586 = state_66576;
state_66576 = G__66586;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__ = function(state_66576){
switch(arguments.length){
case 0:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1.call(this,state_66576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____0;
drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto____1;
return drop_dot$core$jam_second_callback_arg_into_chan_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66584 = f__9319__auto__.call(null);
(statearr_66584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66584;
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
return (function (state_66663){
var state_val_66664 = (state_66663[(1)]);
if((state_val_66664 === (1))){
var state_66663__$1 = state_66663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66663__$1,(2),input_chan);
} else {
if((state_val_66664 === (2))){
var inst_66641 = (state_66663[(2)]);
var inst_66642 = inst_66641;
var state_66663__$1 = (function (){var statearr_66665 = state_66663;
(statearr_66665[(7)] = inst_66642);

return statearr_66665;
})();
var statearr_66666_66693 = state_66663__$1;
(statearr_66666_66693[(2)] = null);

(statearr_66666_66693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66664 === (3))){
var inst_66642 = (state_66663[(7)]);
var inst_66644 = cljs.core.count.call(null,inst_66642);
var inst_66645 = cljs.core._EQ_.call(null,inst_66644,(0));
var state_66663__$1 = state_66663;
if(inst_66645){
var statearr_66667_66694 = state_66663__$1;
(statearr_66667_66694[(1)] = (5));

} else {
var statearr_66668_66695 = state_66663__$1;
(statearr_66668_66695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66664 === (4))){
var inst_66661 = (state_66663[(2)]);
var state_66663__$1 = state_66663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66663__$1,inst_66661);
} else {
if((state_val_66664 === (5))){
var inst_66647 = cljs.core.println.call(null,"done");
var state_66663__$1 = state_66663;
var statearr_66669_66696 = state_66663__$1;
(statearr_66669_66696[(2)] = inst_66647);

(statearr_66669_66696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66664 === (6))){
var inst_66642 = (state_66663[(7)]);
var inst_66649 = cljs.core.async.chan.call(null);
var inst_66650 = cljs.core.first.call(null,inst_66642);
var inst_66651 = (function (){var v = inst_66642;
var rc = inst_66649;
var cmd = inst_66650;
return ((function (v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__){
return (function (res){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__){
return (function (state_66673){
var state_val_66674 = (state_66673[(1)]);
if((state_val_66674 === (1))){
var state_66673__$1 = state_66673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66673__$1,(2),rc,res);
} else {
if((state_val_66674 === (2))){
var inst_66671 = (state_66673[(2)]);
var state_66673__$1 = state_66673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66673__$1,inst_66671);
} else {
return null;
}
}
});})(c__9318__auto____$1,v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0 = (function (){
var statearr_66678 = [null,null,null,null,null,null,null];
(statearr_66678[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_66678[(1)] = (1));

return statearr_66678;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_66673){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66679){if((e66679 instanceof Object)){
var ex__9301__auto__ = e66679;
var statearr_66680_66697 = state_66673;
(statearr_66680_66697[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66698 = state_66673;
state_66673 = G__66698;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_66673){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_66673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66681 = f__9319__auto__.call(null);
(statearr_66681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_66681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__))
);

return c__9318__auto____$1;
});
;})(v,rc,cmd,inst_66642,inst_66649,inst_66650,state_val_66664,c__9318__auto__))
})();
var inst_66652 = drop_dot.core.pure_js.execAndPrint(inst_66650,inst_66651);
var state_66663__$1 = (function (){var statearr_66682 = state_66663;
(statearr_66682[(8)] = inst_66652);

return statearr_66682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66663__$1,(8),inst_66649);
} else {
if((state_val_66664 === (7))){
var inst_66659 = (state_66663[(2)]);
var state_66663__$1 = state_66663;
var statearr_66683_66699 = state_66663__$1;
(statearr_66683_66699[(2)] = inst_66659);

(statearr_66683_66699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66664 === (8))){
var inst_66642 = (state_66663[(7)]);
var inst_66654 = (state_66663[(2)]);
var inst_66655 = cljs.core.rest.call(null,inst_66642);
var inst_66656 = cljs.core.vec.call(null,inst_66655);
var inst_66642__$1 = inst_66656;
var state_66663__$1 = (function (){var statearr_66684 = state_66663;
(statearr_66684[(7)] = inst_66642__$1);

(statearr_66684[(9)] = inst_66654);

return statearr_66684;
})();
var statearr_66685_66700 = state_66663__$1;
(statearr_66685_66700[(2)] = null);

(statearr_66685_66700[(1)] = (3));


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
var statearr_66689 = [null,null,null,null,null,null,null,null,null,null];
(statearr_66689[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__);

(statearr_66689[(1)] = (1));

return statearr_66689;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1 = (function (state_66663){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66690){if((e66690 instanceof Object)){
var ex__9301__auto__ = e66690;
var statearr_66691_66701 = state_66663;
(statearr_66691_66701[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66702 = state_66663;
state_66663 = G__66702;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__ = function(state_66663){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1.call(this,state_66663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66692 = f__9319__auto__.call(null);
(statearr_66692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66692;
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
return (function (state_66714){
var state_val_66715 = (state_66714[(1)]);
if((state_val_66715 === (1))){
var state_66714__$1 = state_66714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66714__$1,v);
} else {
return null;
}
});})(c__9318__auto__,c))
;
return ((function (switch__9297__auto__,c__9318__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0 = (function (){
var statearr_66719 = [null,null,null,null,null,null,null];
(statearr_66719[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__);

(statearr_66719[(1)] = (1));

return statearr_66719;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1 = (function (state_66714){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66720){if((e66720 instanceof Object)){
var ex__9301__auto__ = e66720;
var statearr_66721_66723 = state_66714;
(statearr_66721_66723[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66724 = state_66714;
state_66714 = G__66724;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__ = function(state_66714){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1.call(this,state_66714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,c))
})();
var state__9320__auto__ = (function (){var statearr_66722 = f__9319__auto__.call(null);
(statearr_66722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66722;
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
return (function (state_66740){
var state_val_66741 = (state_66740[(1)]);
if((state_val_66741 === (1))){
var state_66740__$1 = state_66740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66740__$1,(2),d,res__$1);
} else {
if((state_val_66741 === (2))){
var inst_66738 = (state_66740[(2)]);
var state_66740__$1 = state_66740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66740__$1,inst_66738);
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
var statearr_66745 = [null,null,null,null,null,null,null];
(statearr_66745[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__);

(statearr_66745[(1)] = (1));

return statearr_66745;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1 = (function (state_66740){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66746){if((e66746 instanceof Object)){
var ex__9301__auto__ = e66746;
var statearr_66747_66749 = state_66740;
(statearr_66747_66749[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66750 = state_66740;
state_66740 = G__66750;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__ = function(state_66740){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1.call(this,state_66740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,res,d))
})();
var state__9320__auto__ = (function (){var statearr_66748 = f__9319__auto__.call(null);
(statearr_66748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66748;
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
return (function (state_66782){
var state_val_66783 = (state_66782[(1)]);
if((state_val_66783 === (1))){
var inst_66773 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_66782__$1 = state_66782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66782__$1,(2),inst_66773);
} else {
if((state_val_66783 === (2))){
var inst_66775 = (state_66782[(2)]);
var state_66782__$1 = state_66782;
if(cljs.core.truth_(inst_66775)){
var statearr_66784_66795 = state_66782__$1;
(statearr_66784_66795[(1)] = (3));

} else {
var statearr_66785_66796 = state_66782__$1;
(statearr_66785_66796[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66783 === (3))){
var state_66782__$1 = state_66782;
var statearr_66786_66797 = state_66782__$1;
(statearr_66786_66797[(2)] = line);

(statearr_66786_66797[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66783 === (4))){
var inst_66778 = [cljs.core.str("ERROR: Config "),cljs.core.str(line),cljs.core.str(" does not exist.")].join('');
var state_66782__$1 = state_66782;
var statearr_66787_66798 = state_66782__$1;
(statearr_66787_66798[(2)] = inst_66778);

(statearr_66787_66798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66783 === (5))){
var inst_66780 = (state_66782[(2)]);
var state_66782__$1 = state_66782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66782__$1,inst_66780);
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
var statearr_66791 = [null,null,null,null,null,null,null];
(statearr_66791[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__);

(statearr_66791[(1)] = (1));

return statearr_66791;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1 = (function (state_66782){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66792){if((e66792 instanceof Object)){
var ex__9301__auto__ = e66792;
var statearr_66793_66799 = state_66782;
(statearr_66793_66799[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66800 = state_66782;
state_66782 = G__66800;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__ = function(state_66782){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1.call(this,state_66782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66794 = f__9319__auto__.call(null);
(statearr_66794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66794;
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
return (function (state_66871){
var state_val_66872 = (state_66871[(1)]);
if((state_val_66872 === (1))){
var state_66871__$1 = state_66871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66871__$1,(2),chan_verified_path);
} else {
if((state_val_66872 === (2))){
var inst_66857 = (state_66871[(7)]);
var inst_66858 = (state_66871[(8)]);
var inst_66857__$1 = (state_66871[(2)]);
var inst_66858__$1 = cljs.core.async.chan.call(null,(1));
var inst_66859 = (function (){var verified_path = inst_66857__$1;
var rc = inst_66858__$1;
return ((function (verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function (state_66877){
var state_val_66878 = (state_66877[(1)]);
if((state_val_66878 === (1))){
var inst_66873 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced.")].join('');
var state_66877__$1 = state_66877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66877__$1,(2),rc,inst_66873);
} else {
if((state_val_66878 === (2))){
var inst_66875 = (state_66877[(2)]);
var state_66877__$1 = state_66877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66877__$1,inst_66875);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_66882 = [null,null,null,null,null,null,null];
(statearr_66882[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_66882[(1)] = (1));

return statearr_66882;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_66877){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66883){if((e66883 instanceof Object)){
var ex__9301__auto__ = e66883;
var statearr_66884_66911 = state_66877;
(statearr_66884_66911[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66912 = state_66877;
state_66877 = G__66912;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_66877){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_66877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66885 = f__9319__auto__.call(null);
(statearr_66885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_66885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function (state_66889){
var state_val_66890 = (state_66889[(1)]);
if((state_val_66890 === (1))){
var state_66889__$1 = state_66889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66889__$1,(2),rc,verified_path);
} else {
if((state_val_66890 === (2))){
var inst_66887 = (state_66889[(2)]);
var state_66889__$1 = state_66889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66889__$1,inst_66887);
} else {
return null;
}
}
});})(c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0 = (function (){
var statearr_66894 = [null,null,null,null,null,null,null];
(statearr_66894[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_66894[(1)] = (1));

return statearr_66894;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_66889){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66895){if((e66895 instanceof Object)){
var ex__9301__auto__ = e66895;
var statearr_66896_66913 = state_66889;
(statearr_66896_66913[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66914 = state_66889;
state_66889 = G__66914;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_66889){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_66889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66897 = f__9319__auto__.call(null);
(statearr_66897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_66897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(verified_path,rc,inst_66857,inst_66858,inst_66857__$1,inst_66858__$1,state_val_66872,c__9318__auto__))
})();
var inst_66860 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_66857__$1);
var state_66871__$1 = (function (){var statearr_66898 = state_66871;
(statearr_66898[(7)] = inst_66857__$1);

(statearr_66898[(8)] = inst_66858__$1);

(statearr_66898[(9)] = inst_66859);

return statearr_66898;
})();
if(cljs.core.truth_(inst_66860)){
var statearr_66899_66915 = state_66871__$1;
(statearr_66899_66915[(1)] = (3));

} else {
var statearr_66900_66916 = state_66871__$1;
(statearr_66900_66916[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66872 === (3))){
var inst_66857 = (state_66871[(7)]);
var inst_66858 = (state_66871[(8)]);
var state_66871__$1 = state_66871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66871__$1,(6),inst_66858,inst_66857);
} else {
if((state_val_66872 === (4))){
var inst_66857 = (state_66871[(7)]);
var inst_66859 = (state_66871[(9)]);
var inst_66865 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_66857,inst_66859);
var state_66871__$1 = state_66871;
var statearr_66901_66917 = state_66871__$1;
(statearr_66901_66917[(2)] = inst_66865);

(statearr_66901_66917[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66872 === (5))){
var inst_66858 = (state_66871[(8)]);
var inst_66867 = (state_66871[(2)]);
var state_66871__$1 = (function (){var statearr_66902 = state_66871;
(statearr_66902[(10)] = inst_66867);

return statearr_66902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66871__$1,(7),inst_66858);
} else {
if((state_val_66872 === (6))){
var inst_66863 = (state_66871[(2)]);
var state_66871__$1 = state_66871;
var statearr_66903_66918 = state_66871__$1;
(statearr_66903_66918[(2)] = inst_66863);

(statearr_66903_66918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66872 === (7))){
var inst_66869 = (state_66871[(2)]);
var state_66871__$1 = state_66871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66871__$1,inst_66869);
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
var statearr_66907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66907[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_66907[(1)] = (1));

return statearr_66907;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_66871){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66908){if((e66908 instanceof Object)){
var ex__9301__auto__ = e66908;
var statearr_66909_66919 = state_66871;
(statearr_66909_66919[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66920 = state_66871;
state_66871 = G__66920;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_66871){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_66871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66910 = f__9319__auto__.call(null);
(statearr_66910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66910;
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
return (function (state_66955){
var state_val_66956 = (state_66955[(1)]);
if((state_val_66956 === (1))){
var state_66955__$1 = state_66955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66955__$1,(2),c);
} else {
if((state_val_66956 === (2))){
var inst_66946 = (state_66955[(7)]);
var inst_66946__$1 = (state_66955[(2)]);
var inst_66947 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_66946__$1);
var state_66955__$1 = (function (){var statearr_66957 = state_66955;
(statearr_66957[(7)] = inst_66946__$1);

return statearr_66957;
})();
if(cljs.core.truth_(inst_66947)){
var statearr_66958_66969 = state_66955__$1;
(statearr_66958_66969[(1)] = (3));

} else {
var statearr_66959_66970 = state_66955__$1;
(statearr_66959_66970[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66956 === (3))){
var inst_66946 = (state_66955[(7)]);
var inst_66949 = cljs.core.println.call(null,inst_66946);
var state_66955__$1 = state_66955;
var statearr_66960_66971 = state_66955__$1;
(statearr_66960_66971[(2)] = inst_66949);

(statearr_66960_66971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66956 === (4))){
var inst_66946 = (state_66955[(7)]);
var inst_66951 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_66946);
var state_66955__$1 = state_66955;
var statearr_66961_66972 = state_66955__$1;
(statearr_66961_66972[(2)] = inst_66951);

(statearr_66961_66972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66956 === (5))){
var inst_66953 = (state_66955[(2)]);
var state_66955__$1 = state_66955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66955__$1,inst_66953);
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
var statearr_66965 = [null,null,null,null,null,null,null,null];
(statearr_66965[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__);

(statearr_66965[(1)] = (1));

return statearr_66965;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1 = (function (state_66955){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_66955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e66966){if((e66966 instanceof Object)){
var ex__9301__auto__ = e66966;
var statearr_66967_66973 = state_66955;
(statearr_66967_66973[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66974 = state_66955;
state_66955 = G__66974;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__ = function(state_66955){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1.call(this,state_66955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_66968 = f__9319__auto__.call(null);
(statearr_66968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_66968;
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
return (function (state_67003){
var state_val_67004 = (state_67003[(1)]);
if((state_val_67004 === (1))){
var state_67003__$1 = state_67003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67003__$1,(2),rc,line);
} else {
if((state_val_67004 === (2))){
var inst_67001 = (state_67003[(2)]);
var state_67003__$1 = state_67003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67003__$1,inst_67001);
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
var statearr_67008 = [null,null,null,null,null,null,null];
(statearr_67008[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_67008[(1)] = (1));

return statearr_67008;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_67003){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67009){if((e67009 instanceof Object)){
var ex__9301__auto__ = e67009;
var statearr_67010_67025 = state_67003;
(statearr_67010_67025[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67026 = state_67003;
state_67003 = G__67026;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_67003){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_67003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_67011 = f__9319__auto__.call(null);
(statearr_67011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_67011;
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
return (function (state_67016){
var state_val_67017 = (state_67016[(1)]);
if((state_val_67017 === (1))){
var inst_67012 = [cljs.core.str("ERROR: Invalid line: there is nothing to sync "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_67016__$1 = state_67016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67016__$1,(2),rc,inst_67012);
} else {
if((state_val_67017 === (2))){
var inst_67014 = (state_67016[(2)]);
var state_67016__$1 = state_67016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67016__$1,inst_67014);
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
var statearr_67021 = [null,null,null,null,null,null,null];
(statearr_67021[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__);

(statearr_67021[(1)] = (1));

return statearr_67021;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1 = (function (state_67016){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67022){if((e67022 instanceof Object)){
var ex__9301__auto__ = e67022;
var statearr_67023_67027 = state_67016;
(statearr_67023_67027[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67028 = state_67016;
state_67016 = G__67028;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__ = function(state_67016){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1.call(this,state_67016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,basename,target_path,rc))
})();
var state__9320__auto__ = (function (){var statearr_67024 = f__9319__auto__.call(null);
(statearr_67024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_67024;
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
drop_dot.core.chan_linkable_path__GT_chan_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking(chan_linkable_path){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_67099){
var state_val_67100 = (state_67099[(1)]);
if((state_val_67100 === (1))){
var state_67099__$1 = state_67099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67099__$1,(2),chan_linkable_path);
} else {
if((state_val_67100 === (2))){
var inst_67085 = (state_67099[(7)]);
var inst_67086 = (state_67099[(8)]);
var inst_67085__$1 = (state_67099[(2)]);
var inst_67086__$1 = cljs.core.async.chan.call(null,(1));
var inst_67087 = (function (){var linkable_path = inst_67085__$1;
var rc = inst_67086__$1;
return ((function (linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function (state_67105){
var state_val_67106 = (state_67105[(1)]);
if((state_val_67106 === (1))){
var inst_67101 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_67105__$1 = state_67105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67105__$1,(2),rc,inst_67101);
} else {
if((state_val_67106 === (2))){
var inst_67103 = (state_67105[(2)]);
var state_67105__$1 = state_67105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67105__$1,inst_67103);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_67110 = [null,null,null,null,null,null,null];
(statearr_67110[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_67110[(1)] = (1));

return statearr_67110;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_67105){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67111){if((e67111 instanceof Object)){
var ex__9301__auto__ = e67111;
var statearr_67112_67139 = state_67105;
(statearr_67112_67139[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67140 = state_67105;
state_67105 = G__67140;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_67105){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_67105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67113 = f__9319__auto__.call(null);
(statearr_67113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_67113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function (state_67117){
var state_val_67118 = (state_67117[(1)]);
if((state_val_67118 === (1))){
var state_67117__$1 = state_67117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67117__$1,(2),rc,linkable_path);
} else {
if((state_val_67118 === (2))){
var inst_67115 = (state_67117[(2)]);
var state_67117__$1 = state_67117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67117__$1,inst_67115);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_67122 = [null,null,null,null,null,null,null];
(statearr_67122[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_67122[(1)] = (1));

return statearr_67122;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_67117){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67123){if((e67123 instanceof Object)){
var ex__9301__auto__ = e67123;
var statearr_67124_67141 = state_67117;
(statearr_67124_67141[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67142 = state_67117;
state_67117 = G__67142;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_67117){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_67117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67125 = f__9319__auto__.call(null);
(statearr_67125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_67125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_67085,inst_67086,inst_67085__$1,inst_67086__$1,state_val_67100,c__9318__auto__))
})();
var inst_67088 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_67085__$1);
var state_67099__$1 = (function (){var statearr_67126 = state_67099;
(statearr_67126[(9)] = inst_67087);

(statearr_67126[(7)] = inst_67085__$1);

(statearr_67126[(8)] = inst_67086__$1);

return statearr_67126;
})();
if(cljs.core.truth_(inst_67088)){
var statearr_67127_67143 = state_67099__$1;
(statearr_67127_67143[(1)] = (3));

} else {
var statearr_67128_67144 = state_67099__$1;
(statearr_67128_67144[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67100 === (3))){
var inst_67085 = (state_67099[(7)]);
var inst_67086 = (state_67099[(8)]);
var state_67099__$1 = state_67099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67099__$1,(6),inst_67086,inst_67085);
} else {
if((state_val_67100 === (4))){
var inst_67087 = (state_67099[(9)]);
var inst_67085 = (state_67099[(7)]);
var inst_67093 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_67085,inst_67087);
var state_67099__$1 = state_67099;
var statearr_67129_67145 = state_67099__$1;
(statearr_67129_67145[(2)] = inst_67093);

(statearr_67129_67145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67100 === (5))){
var inst_67086 = (state_67099[(8)]);
var inst_67095 = (state_67099[(2)]);
var state_67099__$1 = (function (){var statearr_67130 = state_67099;
(statearr_67130[(10)] = inst_67095);

return statearr_67130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67099__$1,(7),inst_67086);
} else {
if((state_val_67100 === (6))){
var inst_67091 = (state_67099[(2)]);
var state_67099__$1 = state_67099;
var statearr_67131_67146 = state_67099__$1;
(statearr_67131_67146[(2)] = inst_67091);

(statearr_67131_67146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67100 === (7))){
var inst_67097 = (state_67099[(2)]);
var state_67099__$1 = state_67099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67099__$1,inst_67097);
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
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_67135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67135[(0)] = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__);

(statearr_67135[(1)] = (1));

return statearr_67135;
});
var drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1 = (function (state_67099){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67136){if((e67136 instanceof Object)){
var ex__9301__auto__ = e67136;
var statearr_67137_67147 = state_67099;
(statearr_67137_67147[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67148 = state_67099;
state_67099 = G__67148;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__ = function(state_67099){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1.call(this,state_67099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_path_that_wants_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67138 = f__9319__auto__.call(null);
(statearr_67138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_67138;
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
return (function (state_67219){
var state_val_67220 = (state_67219[(1)]);
if((state_val_67220 === (1))){
var state_67219__$1 = state_67219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67219__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_67220 === (2))){
var inst_67206 = (state_67219[(7)]);
var inst_67205 = (state_67219[(8)]);
var inst_67205__$1 = (state_67219[(2)]);
var inst_67206__$1 = cljs.core.async.chan.call(null,(1));
var inst_67207 = (function (){var linkable_path = inst_67205__$1;
var rc = inst_67206__$1;
return ((function (linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function (state_67225){
var state_val_67226 = (state_67225[(1)]);
if((state_val_67226 === (1))){
var inst_67221 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_67225__$1 = state_67225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67225__$1,(2),rc,inst_67221);
} else {
if((state_val_67226 === (2))){
var inst_67223 = (state_67225[(2)]);
var state_67225__$1 = state_67225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67225__$1,inst_67223);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_67230 = [null,null,null,null,null,null,null];
(statearr_67230[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_67230[(1)] = (1));

return statearr_67230;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_67225){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67231){if((e67231 instanceof Object)){
var ex__9301__auto__ = e67231;
var statearr_67232_67259 = state_67225;
(statearr_67232_67259[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67260 = state_67225;
state_67225 = G__67260;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_67225){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_67225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67233 = f__9319__auto__.call(null);
(statearr_67233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_67233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
);

return c__9318__auto____$1;
} else {
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function (state_67237){
var state_val_67238 = (state_67237[(1)]);
if((state_val_67238 === (1))){
var state_67237__$1 = state_67237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67237__$1,(2),rc,linkable_path);
} else {
if((state_val_67238 === (2))){
var inst_67235 = (state_67237[(2)]);
var state_67237__$1 = state_67237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67237__$1,inst_67235);
} else {
return null;
}
}
});})(c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0 = (function (){
var statearr_67242 = [null,null,null,null,null,null,null];
(statearr_67242[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_67242[(1)] = (1));

return statearr_67242;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_67237){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67243){if((e67243 instanceof Object)){
var ex__9301__auto__ = e67243;
var statearr_67244_67261 = state_67237;
(statearr_67244_67261[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67262 = state_67237;
state_67237 = G__67262;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_67237){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_67237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67245 = f__9319__auto__.call(null);
(statearr_67245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_67245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
);

return c__9318__auto____$1;
}
});
;})(linkable_path,rc,inst_67206,inst_67205,inst_67205__$1,inst_67206__$1,state_val_67220,c__9318__auto__))
})();
var inst_67208 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_67205__$1);
var state_67219__$1 = (function (){var statearr_67246 = state_67219;
(statearr_67246[(7)] = inst_67206__$1);

(statearr_67246[(9)] = inst_67207);

(statearr_67246[(8)] = inst_67205__$1);

return statearr_67246;
})();
if(cljs.core.truth_(inst_67208)){
var statearr_67247_67263 = state_67219__$1;
(statearr_67247_67263[(1)] = (3));

} else {
var statearr_67248_67264 = state_67219__$1;
(statearr_67248_67264[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67220 === (3))){
var inst_67206 = (state_67219[(7)]);
var inst_67205 = (state_67219[(8)]);
var state_67219__$1 = state_67219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67219__$1,(6),inst_67206,inst_67205);
} else {
if((state_val_67220 === (4))){
var inst_67207 = (state_67219[(9)]);
var inst_67205 = (state_67219[(8)]);
var inst_67213 = drop_dot.core.pure_js.pathExists(inst_67205,inst_67207);
var state_67219__$1 = state_67219;
var statearr_67249_67265 = state_67219__$1;
(statearr_67249_67265[(2)] = inst_67213);

(statearr_67249_67265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67220 === (5))){
var inst_67206 = (state_67219[(7)]);
var inst_67215 = (state_67219[(2)]);
var state_67219__$1 = (function (){var statearr_67250 = state_67219;
(statearr_67250[(10)] = inst_67215);

return statearr_67250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67219__$1,(7),inst_67206);
} else {
if((state_val_67220 === (6))){
var inst_67211 = (state_67219[(2)]);
var state_67219__$1 = state_67219;
var statearr_67251_67266 = state_67219__$1;
(statearr_67251_67266[(2)] = inst_67211);

(statearr_67251_67266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67220 === (7))){
var inst_67217 = (state_67219[(2)]);
var state_67219__$1 = state_67219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67219__$1,inst_67217);
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
var statearr_67255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67255[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__);

(statearr_67255[(1)] = (1));

return statearr_67255;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1 = (function (state_67219){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67256){if((e67256 instanceof Object)){
var ex__9301__auto__ = e67256;
var statearr_67257_67267 = state_67219;
(statearr_67257_67267[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67268 = state_67219;
state_67219 = G__67268;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__ = function(state_67219){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1.call(this,state_67219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67258 = f__9319__auto__.call(null);
(statearr_67258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_67258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_67330){
var state_val_67331 = (state_67330[(1)]);
if((state_val_67331 === (7))){
var inst_67326 = (state_67330[(2)]);
var state_67330__$1 = state_67330;
var statearr_67332_67353 = state_67330__$1;
(statearr_67332_67353[(2)] = inst_67326);

(statearr_67332_67353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (1))){
var inst_67311 = chan_config;
var state_67330__$1 = (function (){var statearr_67333 = state_67330;
(statearr_67333[(7)] = inst_67311);

return statearr_67333;
})();
var statearr_67334_67354 = state_67330__$1;
(statearr_67334_67354[(2)] = null);

(statearr_67334_67354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (4))){
var inst_67314 = (state_67330[(8)]);
var inst_67314__$1 = (state_67330[(2)]);
var state_67330__$1 = (function (){var statearr_67335 = state_67330;
(statearr_67335[(8)] = inst_67314__$1);

return statearr_67335;
})();
if(cljs.core.truth_(inst_67314__$1)){
var statearr_67336_67355 = state_67330__$1;
(statearr_67336_67355[(1)] = (5));

} else {
var statearr_67337_67356 = state_67330__$1;
(statearr_67337_67356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (6))){
var state_67330__$1 = state_67330;
var statearr_67338_67357 = state_67330__$1;
(statearr_67338_67357[(2)] = null);

(statearr_67338_67357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (3))){
var inst_67328 = (state_67330[(2)]);
var state_67330__$1 = state_67330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67330__$1,inst_67328);
} else {
if((state_val_67331 === (2))){
var inst_67311 = (state_67330[(7)]);
var state_67330__$1 = state_67330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67330__$1,(4),inst_67311);
} else {
if((state_val_67331 === (9))){
var inst_67314 = (state_67330[(8)]);
var inst_67320 = cljs.core.println.call(null,inst_67314);
var state_67330__$1 = state_67330;
var statearr_67340_67358 = state_67330__$1;
(statearr_67340_67358[(2)] = inst_67320);

(statearr_67340_67358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (5))){
var inst_67316 = cljs.core._EQ_.call(null,cmd,"drop");
var state_67330__$1 = state_67330;
if(inst_67316){
var statearr_67341_67359 = state_67330__$1;
(statearr_67341_67359[(1)] = (8));

} else {
var statearr_67342_67360 = state_67330__$1;
(statearr_67342_67360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (10))){
var inst_67311 = (state_67330[(7)]);
var inst_67322 = (state_67330[(2)]);
var tmp67339 = inst_67311;
var inst_67311__$1 = tmp67339;
var state_67330__$1 = (function (){var statearr_67343 = state_67330;
(statearr_67343[(9)] = inst_67322);

(statearr_67343[(7)] = inst_67311__$1);

return statearr_67343;
})();
var statearr_67344_67361 = state_67330__$1;
(statearr_67344_67361[(2)] = null);

(statearr_67344_67361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67331 === (8))){
var inst_67314 = (state_67330[(8)]);
var inst_67318 = drop_dot.core.drop_line.call(null,inst_67314);
var state_67330__$1 = state_67330;
var statearr_67345_67362 = state_67330__$1;
(statearr_67345_67362[(2)] = inst_67318);

(statearr_67345_67362[(1)] = (10));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0 = (function (){
var statearr_67349 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67349[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__);

(statearr_67349[(1)] = (1));

return statearr_67349;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1 = (function (state_67330){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67350){if((e67350 instanceof Object)){
var ex__9301__auto__ = e67350;
var statearr_67351_67363 = state_67330;
(statearr_67351_67363[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67364 = state_67330;
state_67330 = G__67364;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__ = function(state_67330){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1.call(this,state_67330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_67352 = f__9319__auto__.call(null);
(statearr_67352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_67352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__9318__auto___67461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto___67461,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto___67461,c){
return (function (state_67425){
var state_val_67426 = (state_67425[(1)]);
if((state_val_67426 === (1))){
var inst_67413 = (state_67425[(7)]);
var inst_67414 = (state_67425[(8)]);
var inst_67415 = (state_67425[(9)]);
var inst_67413__$1 = cljs.nodejs.require.call(null,"/home/george/Dropbox/drop-dot/js/get-lines-from-file.js");
var inst_67414__$1 = cljs.core.async.chan.call(null,(1));
var inst_67415__$1 = (function (){var res = inst_67413__$1;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_67414__$1;
return ((function (res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c){
return (function (error,res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c){
return (function (state_67430){
var state_val_67431 = (state_67430[(1)]);
if((state_val_67431 === (1))){
var state_67430__$1 = state_67430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67430__$1,(2),wcc,res__$1);
} else {
if((state_val_67431 === (2))){
var inst_67428 = (state_67430[(2)]);
var state_67430__$1 = state_67430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67430__$1,inst_67428);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_67435 = [null,null,null,null,null,null,null];
(statearr_67435[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_67435[(1)] = (1));

return statearr_67435;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_67430){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67436){if((e67436 instanceof Object)){
var ex__9301__auto__ = e67436;
var statearr_67437_67462 = state_67430;
(statearr_67437_67462[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67463 = state_67430;
state_67430 = G__67463;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_67430){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_67430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c))
})();
var state__9320__auto__ = (function (){var statearr_67438 = f__9319__auto__.call(null);
(statearr_67438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_67438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,inst_67413,inst_67414,inst_67415,inst_67413__$1,inst_67414__$1,state_val_67426,c__9318__auto___67461,c))
})();
var inst_67416 = inst_67413__$1.getFileLineCount("/home/george/Dropbox/drop-dot/js/file.in",inst_67415__$1);
var state_67425__$1 = (function (){var statearr_67439 = state_67425;
(statearr_67439[(7)] = inst_67413__$1);

(statearr_67439[(10)] = inst_67416);

(statearr_67439[(8)] = inst_67414__$1);

(statearr_67439[(9)] = inst_67415__$1);

return statearr_67439;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67425__$1,(2),inst_67414__$1);
} else {
if((state_val_67426 === (2))){
var inst_67413 = (state_67425[(7)]);
var inst_67416 = (state_67425[(10)]);
var inst_67414 = (state_67425[(8)]);
var inst_67415 = (state_67425[(9)]);
var inst_67418 = (state_67425[(2)]);
var inst_67419 = [cljs.core.str(inst_67418)].join('');
var inst_67420 = parseInt(inst_67419);
var inst_67421 = (function (){var res = inst_67413;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_67414;
var wcc_jammer = inst_67415;
var get_wc = inst_67416;
var lines = inst_67420;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,state_val_67426,c__9318__auto___67461,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,state_val_67426,c__9318__auto___67461,c))
})();
var inst_67422 = (function (){var res = inst_67413;
var config_path = "/home/george/Dropbox/drop-dot/js/file.in";
var wcc = inst_67414;
var wcc_jammer = inst_67415;
var get_wc = inst_67416;
var lines = inst_67420;
var close_if_done = inst_67421;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c){
return (function (res__$1){
var c__9318__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c){
return (function (state_67444){
var state_val_67445 = (state_67444[(1)]);
if((state_val_67445 === (1))){
var state_67444__$1 = state_67444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67444__$1,(2),c,res__$1);
} else {
if((state_val_67445 === (2))){
var inst_67441 = (state_67444[(2)]);
var inst_67442 = close_if_done.call(null);
var state_67444__$1 = (function (){var statearr_67446 = state_67444;
(statearr_67446[(7)] = inst_67441);

return statearr_67446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67444__$1,inst_67442);
} else {
return null;
}
}
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c))
;
return ((function (switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_67450 = [null,null,null,null,null,null,null,null];
(statearr_67450[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_67450[(1)] = (1));

return statearr_67450;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_67444){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67451){if((e67451 instanceof Object)){
var ex__9301__auto__ = e67451;
var statearr_67452_67464 = state_67444;
(statearr_67452_67464[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67465 = state_67444;
state_67444 = G__67465;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_67444){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_67444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c))
})();
var state__9320__auto__ = (function (){var statearr_67453 = f__9319__auto__.call(null);
(statearr_67453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto____$1);

return statearr_67453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c))
);

return c__9318__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_67413,inst_67416,inst_67414,inst_67415,inst_67418,inst_67419,inst_67420,inst_67421,state_val_67426,c__9318__auto___67461,c))
})();
var inst_67423 = inst_67413.getLinesFromFile("/home/george/Dropbox/drop-dot/js/file.in",inst_67422);
var state_67425__$1 = state_67425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67425__$1,inst_67423);
} else {
return null;
}
}
});})(c__9318__auto___67461,c))
;
return ((function (switch__9297__auto__,c__9318__auto___67461,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0 = (function (){
var statearr_67457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67457[(0)] = drop_dot$core$chan_config_paths_$_state_machine__9298__auto__);

(statearr_67457[(1)] = (1));

return statearr_67457;
});
var drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1 = (function (state_67425){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_67425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e67458){if((e67458 instanceof Object)){
var ex__9301__auto__ = e67458;
var statearr_67459_67466 = state_67425;
(statearr_67459_67466[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67467 = state_67425;
state_67425 = G__67467;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__ = function(state_67425){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1.call(this,state_67425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__9298__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto___67461,c))
})();
var state__9320__auto__ = (function (){var statearr_67460 = f__9319__auto__.call(null);
(statearr_67460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto___67461);

return statearr_67460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto___67461,c))
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
var len__7018__auto___67469 = arguments.length;
var i__7019__auto___67470 = (0);
while(true){
if((i__7019__auto___67470 < len__7018__auto___67469)){
args__7025__auto__.push((arguments[i__7019__auto___67470]));

var G__67471 = (i__7019__auto___67470 + (1));
i__7019__auto___67470 = G__67471;
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

drop_dot.core._main.cljs$lang$applyTo = (function (seq67468){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67468));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map