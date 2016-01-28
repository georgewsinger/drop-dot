// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('drop_dot.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.nodejs.enable_util_print_BANG_.call(null);
drop_dot.core.pure_js = cljs.nodejs.require.call(null,"../js/pure-js.js");
drop_dot.core.chan_vec_cmd__GT_exec = (function drop_dot$core$chan_vec_cmd__GT_exec(input_chan){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_8669){
var state_val_8670 = (state_8669[(1)]);
if((state_val_8670 === (1))){
var state_8669__$1 = state_8669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8669__$1,(2),input_chan);
} else {
if((state_val_8670 === (2))){
var inst_8648 = (state_8669[(2)]);
var inst_8649 = inst_8648;
var state_8669__$1 = (function (){var statearr_8671 = state_8669;
(statearr_8671[(7)] = inst_8649);

return statearr_8671;
})();
var statearr_8672_8699 = state_8669__$1;
(statearr_8672_8699[(2)] = null);

(statearr_8672_8699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8670 === (3))){
var inst_8649 = (state_8669[(7)]);
var inst_8651 = cljs.core.count.call(null,inst_8649);
var inst_8652 = cljs.core._EQ_.call(null,inst_8651,(0));
var state_8669__$1 = state_8669;
if(inst_8652){
var statearr_8673_8700 = state_8669__$1;
(statearr_8673_8700[(1)] = (5));

} else {
var statearr_8674_8701 = state_8669__$1;
(statearr_8674_8701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8670 === (4))){
var inst_8667 = (state_8669[(2)]);
var state_8669__$1 = state_8669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8669__$1,inst_8667);
} else {
if((state_val_8670 === (5))){
var state_8669__$1 = state_8669;
var statearr_8675_8702 = state_8669__$1;
(statearr_8675_8702[(2)] = null);

(statearr_8675_8702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8670 === (6))){
var inst_8649 = (state_8669[(7)]);
var inst_8655 = cljs.core.async.chan.call(null);
var inst_8656 = cljs.core.first.call(null,inst_8649);
var inst_8657 = (function (){var v = inst_8649;
var rc = inst_8655;
var cmd = inst_8656;
return ((function (v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__){
return (function (res){
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__){
return (function (state_8679){
var state_val_8680 = (state_8679[(1)]);
if((state_val_8680 === (1))){
var state_8679__$1 = state_8679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8679__$1,(2),rc,res);
} else {
if((state_val_8680 === (2))){
var inst_8677 = (state_8679[(2)]);
var state_8679__$1 = state_8679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8679__$1,inst_8677);
} else {
return null;
}
}
});})(c__8550__auto____$1,v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____0 = (function (){
var statearr_8684 = [null,null,null,null,null,null,null];
(statearr_8684[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__);

(statearr_8684[(1)] = (1));

return statearr_8684;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____1 = (function (state_8679){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8685){if((e8685 instanceof Object)){
var ex__8533__auto__ = e8685;
var statearr_8686_8703 = state_8679;
(statearr_8686_8703[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8704 = state_8679;
state_8679 = G__8704;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__ = function(state_8679){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____1.call(this,state_8679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8687 = f__8551__auto__.call(null);
(statearr_8687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_8687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__))
);

return c__8550__auto____$1;
});
;})(v,rc,cmd,inst_8649,inst_8655,inst_8656,state_val_8670,c__8550__auto__))
})();
var inst_8658 = drop_dot.core.pure_js.execAndPrint(inst_8656,inst_8657);
var state_8669__$1 = (function (){var statearr_8688 = state_8669;
(statearr_8688[(8)] = inst_8658);

return statearr_8688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8669__$1,(8),inst_8655);
} else {
if((state_val_8670 === (7))){
var inst_8665 = (state_8669[(2)]);
var state_8669__$1 = state_8669;
var statearr_8689_8705 = state_8669__$1;
(statearr_8689_8705[(2)] = inst_8665);

(statearr_8689_8705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8670 === (8))){
var inst_8649 = (state_8669[(7)]);
var inst_8660 = (state_8669[(2)]);
var inst_8661 = cljs.core.rest.call(null,inst_8649);
var inst_8662 = cljs.core.vec.call(null,inst_8661);
var inst_8649__$1 = inst_8662;
var state_8669__$1 = (function (){var statearr_8690 = state_8669;
(statearr_8690[(9)] = inst_8660);

(statearr_8690[(7)] = inst_8649__$1);

return statearr_8690;
})();
var statearr_8691_8706 = state_8669__$1;
(statearr_8691_8706[(2)] = null);

(statearr_8691_8706[(1)] = (3));


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
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____0 = (function (){
var statearr_8695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_8695[(0)] = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__);

(statearr_8695[(1)] = (1));

return statearr_8695;
});
var drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____1 = (function (state_8669){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8696){if((e8696 instanceof Object)){
var ex__8533__auto__ = e8696;
var statearr_8697_8707 = state_8669;
(statearr_8697_8707[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8708 = state_8669;
state_8669 = G__8708;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__ = function(state_8669){
switch(arguments.length){
case 0:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____1.call(this,state_8669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____0;
drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto____1;
return drop_dot$core$chan_vec_cmd__GT_exec_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8698 = f__8551__auto__.call(null);
(statearr_8698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_8698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.exec_vec_of_commands = (function drop_dot$core$exec_vec_of_commands(v){
var c = cljs.core.async.chan.call(null);
return drop_dot.core.chan_vec_cmd__GT_exec.call(null,(function (){var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__,c){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__,c){
return (function (state_8720){
var state_val_8721 = (state_8720[(1)]);
if((state_val_8721 === (1))){
var state_8720__$1 = state_8720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8720__$1,v);
} else {
return null;
}
});})(c__8550__auto__,c))
;
return ((function (switch__8529__auto__,c__8550__auto__,c){
return (function() {
var drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto__ = null;
var drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto____0 = (function (){
var statearr_8725 = [null,null,null,null,null,null,null];
(statearr_8725[(0)] = drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto__);

(statearr_8725[(1)] = (1));

return statearr_8725;
});
var drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto____1 = (function (state_8720){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8726){if((e8726 instanceof Object)){
var ex__8533__auto__ = e8726;
var statearr_8727_8729 = state_8720;
(statearr_8727_8729[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8730 = state_8720;
state_8720 = G__8730;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto__ = function(state_8720){
switch(arguments.length){
case 0:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto____1.call(this,state_8720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto____0;
drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto____1;
return drop_dot$core$exec_vec_of_commands_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__,c))
})();
var state__8552__auto__ = (function (){var statearr_8728 = f__8551__auto__.call(null);
(statearr_8728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_8728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__,c))
);

return c__8550__auto__;
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
var res = cljs.nodejs.require.call(null,"../js/pure-js.js");
var d = cljs.core.async.chan.call(null);
res.confirmPathExists(line,((function (res,d){
return (function (res__$1){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__,res,d){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__,res,d){
return (function (state_8746){
var state_val_8747 = (state_8746[(1)]);
if((state_val_8747 === (1))){
var state_8746__$1 = state_8746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8746__$1,(2),d,res__$1);
} else {
if((state_val_8747 === (2))){
var inst_8744 = (state_8746[(2)]);
var state_8746__$1 = state_8746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8746__$1,inst_8744);
} else {
return null;
}
}
});})(c__8550__auto__,res,d))
;
return ((function (switch__8529__auto__,c__8550__auto__,res,d){
return (function() {
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto____0 = (function (){
var statearr_8751 = [null,null,null,null,null,null,null];
(statearr_8751[(0)] = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto__);

(statearr_8751[(1)] = (1));

return statearr_8751;
});
var drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto____1 = (function (state_8746){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8752){if((e8752 instanceof Object)){
var ex__8533__auto__ = e8752;
var statearr_8753_8755 = state_8746;
(statearr_8753_8755[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8756 = state_8746;
state_8746 = G__8756;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto__ = function(state_8746){
switch(arguments.length){
case 0:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto____1.call(this,state_8746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto____0;
drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto____1;
return drop_dot$core$chan_path_exists_QMARK__$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__,res,d))
})();
var state__8552__auto__ = (function (){var statearr_8754 = f__8551__auto__.call(null);
(statearr_8754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_8754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__,res,d))
);

return c__8550__auto__;
});})(res,d))
);

return d;
});
drop_dot.core.line__GT_chan_verified_path = (function drop_dot$core$line__GT_chan_verified_path(line){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_8788){
var state_val_8789 = (state_8788[(1)]);
if((state_val_8789 === (1))){
var inst_8779 = drop_dot.core.chan_path_exists_QMARK_.call(null,line);
var state_8788__$1 = state_8788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8788__$1,(2),inst_8779);
} else {
if((state_val_8789 === (2))){
var inst_8781 = (state_8788[(2)]);
var state_8788__$1 = state_8788;
if(cljs.core.truth_(inst_8781)){
var statearr_8790_8801 = state_8788__$1;
(statearr_8790_8801[(1)] = (3));

} else {
var statearr_8791_8802 = state_8788__$1;
(statearr_8791_8802[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8789 === (3))){
var state_8788__$1 = state_8788;
var statearr_8792_8803 = state_8788__$1;
(statearr_8792_8803[(2)] = line);

(statearr_8792_8803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8789 === (4))){
var inst_8784 = [cljs.core.str("ERROR: "),cljs.core.str(line),cljs.core.str(" does not exist on this machine.")].join('');
var state_8788__$1 = state_8788;
var statearr_8793_8804 = state_8788__$1;
(statearr_8793_8804[(2)] = inst_8784);

(statearr_8793_8804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8789 === (5))){
var inst_8786 = (state_8788[(2)]);
var state_8788__$1 = state_8788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8788__$1,inst_8786);
} else {
return null;
}
}
}
}
}
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto__ = null;
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto____0 = (function (){
var statearr_8797 = [null,null,null,null,null,null,null];
(statearr_8797[(0)] = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto__);

(statearr_8797[(1)] = (1));

return statearr_8797;
});
var drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto____1 = (function (state_8788){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8798){if((e8798 instanceof Object)){
var ex__8533__auto__ = e8798;
var statearr_8799_8805 = state_8788;
(statearr_8799_8805[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8806 = state_8788;
state_8788 = G__8806;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto__ = function(state_8788){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto____1.call(this,state_8788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto____0;
drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto____1;
return drop_dot$core$line__GT_chan_verified_path_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8800 = f__8551__auto__.call(null);
(statearr_8800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_8800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.protocol_msg_QMARK_ = (function drop_dot$core$protocol_msg_QMARK_(arg){
return (clojure.string.includes_QMARK_.call(null,arg,"ERROR: ")) || (clojure.string.includes_QMARK_.call(null,arg,"NOTICE: "));
});
drop_dot.core.chan_verified_path__GT_chan_verified_droppee = (function drop_dot$core$chan_verified_path__GT_chan_verified_droppee(chan_verified_path){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_8877){
var state_val_8878 = (state_8877[(1)]);
if((state_val_8878 === (1))){
var state_8877__$1 = state_8877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8877__$1,(2),chan_verified_path);
} else {
if((state_val_8878 === (2))){
var inst_8864 = (state_8877[(7)]);
var inst_8863 = (state_8877[(8)]);
var inst_8863__$1 = (state_8877[(2)]);
var inst_8864__$1 = cljs.core.async.chan.call(null,(1));
var inst_8865 = (function (){var verified_path = inst_8863__$1;
var rc = inst_8864__$1;
return ((function (verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function (state_8883){
var state_val_8884 = (state_8883[(1)]);
if((state_val_8884 === (1))){
var inst_8879 = [cljs.core.str("NOTICE: "),cljs.core.str(verified_path),cljs.core.str(" is already synced on this machine.")].join('');
var state_8883__$1 = state_8883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8883__$1,(2),rc,inst_8879);
} else {
if((state_val_8884 === (2))){
var inst_8881 = (state_8883[(2)]);
var state_8883__$1 = state_8883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8883__$1,inst_8881);
} else {
return null;
}
}
});})(c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0 = (function (){
var statearr_8888 = [null,null,null,null,null,null,null];
(statearr_8888[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__);

(statearr_8888[(1)] = (1));

return statearr_8888;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1 = (function (state_8883){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8889){if((e8889 instanceof Object)){
var ex__8533__auto__ = e8889;
var statearr_8890_8917 = state_8883;
(statearr_8890_8917[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8918 = state_8883;
state_8883 = G__8918;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__ = function(state_8883){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1.call(this,state_8883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8891 = f__8551__auto__.call(null);
(statearr_8891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_8891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
);

return c__8550__auto____$1;
} else {
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function (state_8895){
var state_val_8896 = (state_8895[(1)]);
if((state_val_8896 === (1))){
var state_8895__$1 = state_8895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8895__$1,(2),rc,verified_path);
} else {
if((state_val_8896 === (2))){
var inst_8893 = (state_8895[(2)]);
var state_8895__$1 = state_8895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8895__$1,inst_8893);
} else {
return null;
}
}
});})(c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0 = (function (){
var statearr_8900 = [null,null,null,null,null,null,null];
(statearr_8900[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__);

(statearr_8900[(1)] = (1));

return statearr_8900;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1 = (function (state_8895){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8901){if((e8901 instanceof Object)){
var ex__8533__auto__ = e8901;
var statearr_8902_8919 = state_8895;
(statearr_8902_8919[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8920 = state_8895;
state_8895 = G__8920;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__ = function(state_8895){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1.call(this,state_8895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8903 = f__8551__auto__.call(null);
(statearr_8903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_8903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
);

return c__8550__auto____$1;
}
});
;})(verified_path,rc,inst_8864,inst_8863,inst_8863__$1,inst_8864__$1,state_val_8878,c__8550__auto__))
})();
var inst_8866 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_8863__$1);
var state_8877__$1 = (function (){var statearr_8904 = state_8877;
(statearr_8904[(7)] = inst_8864__$1);

(statearr_8904[(8)] = inst_8863__$1);

(statearr_8904[(9)] = inst_8865);

return statearr_8904;
})();
if(cljs.core.truth_(inst_8866)){
var statearr_8905_8921 = state_8877__$1;
(statearr_8905_8921[(1)] = (3));

} else {
var statearr_8906_8922 = state_8877__$1;
(statearr_8906_8922[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (3))){
var inst_8864 = (state_8877[(7)]);
var inst_8863 = (state_8877[(8)]);
var state_8877__$1 = state_8877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8877__$1,(6),inst_8864,inst_8863);
} else {
if((state_val_8878 === (4))){
var inst_8863 = (state_8877[(8)]);
var inst_8865 = (state_8877[(9)]);
var inst_8871 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_8863,inst_8865);
var state_8877__$1 = state_8877;
var statearr_8907_8923 = state_8877__$1;
(statearr_8907_8923[(2)] = inst_8871);

(statearr_8907_8923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (5))){
var inst_8864 = (state_8877[(7)]);
var inst_8873 = (state_8877[(2)]);
var state_8877__$1 = (function (){var statearr_8908 = state_8877;
(statearr_8908[(10)] = inst_8873);

return statearr_8908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8877__$1,(7),inst_8864);
} else {
if((state_val_8878 === (6))){
var inst_8869 = (state_8877[(2)]);
var state_8877__$1 = state_8877;
var statearr_8909_8924 = state_8877__$1;
(statearr_8909_8924[(2)] = inst_8869);

(statearr_8909_8924[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8878 === (7))){
var inst_8875 = (state_8877[(2)]);
var state_8877__$1 = state_8877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8877__$1,inst_8875);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0 = (function (){
var statearr_8913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8913[(0)] = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__);

(statearr_8913[(1)] = (1));

return statearr_8913;
});
var drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1 = (function (state_8877){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8914){if((e8914 instanceof Object)){
var ex__8533__auto__ = e8914;
var statearr_8915_8925 = state_8877;
(statearr_8915_8925[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8926 = state_8877;
state_8877 = G__8926;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__ = function(state_8877){
switch(arguments.length){
case 0:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1.call(this,state_8877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____0;
drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto____1;
return drop_dot$core$chan_verified_path__GT_chan_verified_droppee_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8916 = f__8551__auto__.call(null);
(statearr_8916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_8916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.drop_chan_verified_droppee = (function drop_dot$core$drop_chan_verified_droppee(c){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_8961){
var state_val_8962 = (state_8961[(1)]);
if((state_val_8962 === (1))){
var state_8961__$1 = state_8961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8961__$1,(2),c);
} else {
if((state_val_8962 === (2))){
var inst_8952 = (state_8961[(7)]);
var inst_8952__$1 = (state_8961[(2)]);
var inst_8953 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_8952__$1);
var state_8961__$1 = (function (){var statearr_8963 = state_8961;
(statearr_8963[(7)] = inst_8952__$1);

return statearr_8963;
})();
if(cljs.core.truth_(inst_8953)){
var statearr_8964_8975 = state_8961__$1;
(statearr_8964_8975[(1)] = (3));

} else {
var statearr_8965_8976 = state_8961__$1;
(statearr_8965_8976[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8962 === (3))){
var inst_8952 = (state_8961[(7)]);
var inst_8955 = cljs.core.println.call(null,inst_8952);
var state_8961__$1 = state_8961;
var statearr_8966_8977 = state_8961__$1;
(statearr_8966_8977[(2)] = inst_8955);

(statearr_8966_8977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8962 === (4))){
var inst_8952 = (state_8961[(7)]);
var inst_8957 = drop_dot.core.pure_js.execDropOnVerifiedDroppee(inst_8952);
var state_8961__$1 = state_8961;
var statearr_8967_8978 = state_8961__$1;
(statearr_8967_8978[(2)] = inst_8957);

(statearr_8967_8978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8962 === (5))){
var inst_8959 = (state_8961[(2)]);
var state_8961__$1 = state_8961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8961__$1,inst_8959);
} else {
return null;
}
}
}
}
}
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto__ = null;
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto____0 = (function (){
var statearr_8971 = [null,null,null,null,null,null,null,null];
(statearr_8971[(0)] = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto__);

(statearr_8971[(1)] = (1));

return statearr_8971;
});
var drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto____1 = (function (state_8961){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_8961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e8972){if((e8972 instanceof Object)){
var ex__8533__auto__ = e8972;
var statearr_8973_8979 = state_8961;
(statearr_8973_8979[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8980 = state_8961;
state_8961 = G__8980;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto__ = function(state_8961){
switch(arguments.length){
case 0:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto____1.call(this,state_8961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto____0;
drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto____1;
return drop_dot$core$drop_chan_verified_droppee_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_8974 = f__8551__auto__.call(null);
(statearr_8974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_8974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
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
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__,basename,target_path,rc){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__,basename,target_path,rc){
return (function (state_9009){
var state_val_9010 = (state_9009[(1)]);
if((state_val_9010 === (1))){
var state_9009__$1 = state_9009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9009__$1,(2),rc,line);
} else {
if((state_val_9010 === (2))){
var inst_9007 = (state_9009[(2)]);
var state_9009__$1 = state_9009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9009__$1,inst_9007);
} else {
return null;
}
}
});})(c__8550__auto__,basename,target_path,rc))
;
return ((function (switch__8529__auto__,c__8550__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____0 = (function (){
var statearr_9014 = [null,null,null,null,null,null,null];
(statearr_9014[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__);

(statearr_9014[(1)] = (1));

return statearr_9014;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____1 = (function (state_9009){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9015){if((e9015 instanceof Object)){
var ex__8533__auto__ = e9015;
var statearr_9016_9031 = state_9009;
(statearr_9016_9031[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9032 = state_9009;
state_9009 = G__9032;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__ = function(state_9009){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____1.call(this,state_9009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__,basename,target_path,rc))
})();
var state__8552__auto__ = (function (){var statearr_9017 = f__8551__auto__.call(null);
(statearr_9017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_9017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__,basename,target_path,rc))
);

return c__8550__auto__;
} else {
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__,basename,target_path,rc){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__,basename,target_path,rc){
return (function (state_9022){
var state_val_9023 = (state_9022[(1)]);
if((state_val_9023 === (1))){
var inst_9018 = [cljs.core.str("ERROR: Invalid line: there is nothing to link "),cljs.core.str(line),cljs.core.str(" to in your ~/Dropbox/.dot-drop folder.")].join('');
var state_9022__$1 = state_9022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9022__$1,(2),rc,inst_9018);
} else {
if((state_val_9023 === (2))){
var inst_9020 = (state_9022[(2)]);
var state_9022__$1 = state_9022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9022__$1,inst_9020);
} else {
return null;
}
}
});})(c__8550__auto__,basename,target_path,rc))
;
return ((function (switch__8529__auto__,c__8550__auto__,basename,target_path,rc){
return (function() {
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__ = null;
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____0 = (function (){
var statearr_9027 = [null,null,null,null,null,null,null];
(statearr_9027[(0)] = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__);

(statearr_9027[(1)] = (1));

return statearr_9027;
});
var drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____1 = (function (state_9022){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9028){if((e9028 instanceof Object)){
var ex__8533__auto__ = e9028;
var statearr_9029_9033 = state_9022;
(statearr_9029_9033[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9034 = state_9022;
state_9022 = G__9034;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__ = function(state_9022){
switch(arguments.length){
case 0:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____1.call(this,state_9022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____0;
drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto____1;
return drop_dot$core$line__GT_chan_linkable_path_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__,basename,target_path,rc))
})();
var state__8552__auto__ = (function (){var statearr_9030 = f__8551__auto__.call(null);
(statearr_9030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_9030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__,basename,target_path,rc))
);

return c__8550__auto__;
}
});})(basename,target_path,rc))
;
drop_dot.core.pure_js.pathExists(target_path,cb);

return rc;
});
drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking = (function drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking(chan_linkable_path){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_9105){
var state_val_9106 = (state_9105[(1)]);
if((state_val_9106 === (1))){
var state_9105__$1 = state_9105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9105__$1,(2),chan_linkable_path);
} else {
if((state_val_9106 === (2))){
var inst_9092 = (state_9105[(7)]);
var inst_9091 = (state_9105[(8)]);
var inst_9091__$1 = (state_9105[(2)]);
var inst_9092__$1 = cljs.core.async.chan.call(null,(1));
var inst_9093 = (function (){var linkable_path = inst_9091__$1;
var rc = inst_9092__$1;
return ((function (linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function (state_9111){
var state_val_9112 = (state_9111[(1)]);
if((state_val_9112 === (1))){
var inst_9107 = [cljs.core.str("NOTICE: "),cljs.core.str(linkable_path),cljs.core.str(" is already synced.")].join('');
var state_9111__$1 = state_9111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9111__$1,(2),rc,inst_9107);
} else {
if((state_val_9112 === (2))){
var inst_9109 = (state_9111[(2)]);
var state_9111__$1 = state_9111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9111__$1,inst_9109);
} else {
return null;
}
}
});})(c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9116 = [null,null,null,null,null,null,null];
(statearr_9116[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__);

(statearr_9116[(1)] = (1));

return statearr_9116;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1 = (function (state_9111){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9117){if((e9117 instanceof Object)){
var ex__8533__auto__ = e9117;
var statearr_9118_9145 = state_9111;
(statearr_9118_9145[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9146 = state_9111;
state_9111 = G__9146;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__ = function(state_9111){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1.call(this,state_9111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9119 = f__8551__auto__.call(null);
(statearr_9119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_9119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
);

return c__8550__auto____$1;
} else {
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function (state_9123){
var state_val_9124 = (state_9123[(1)]);
if((state_val_9124 === (1))){
var state_9123__$1 = state_9123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9123__$1,(2),rc,linkable_path);
} else {
if((state_val_9124 === (2))){
var inst_9121 = (state_9123[(2)]);
var state_9123__$1 = state_9123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9123__$1,inst_9121);
} else {
return null;
}
}
});})(c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9128 = [null,null,null,null,null,null,null];
(statearr_9128[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__);

(statearr_9128[(1)] = (1));

return statearr_9128;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1 = (function (state_9123){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9129){if((e9129 instanceof Object)){
var ex__8533__auto__ = e9129;
var statearr_9130_9147 = state_9123;
(statearr_9130_9147[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9148 = state_9123;
state_9123 = G__9148;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__ = function(state_9123){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1.call(this,state_9123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9131 = f__8551__auto__.call(null);
(statearr_9131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_9131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
);

return c__8550__auto____$1;
}
});
;})(linkable_path,rc,inst_9092,inst_9091,inst_9091__$1,inst_9092__$1,state_val_9106,c__8550__auto__))
})();
var inst_9094 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_9091__$1);
var state_9105__$1 = (function (){var statearr_9132 = state_9105;
(statearr_9132[(7)] = inst_9092__$1);

(statearr_9132[(9)] = inst_9093);

(statearr_9132[(8)] = inst_9091__$1);

return statearr_9132;
})();
if(cljs.core.truth_(inst_9094)){
var statearr_9133_9149 = state_9105__$1;
(statearr_9133_9149[(1)] = (3));

} else {
var statearr_9134_9150 = state_9105__$1;
(statearr_9134_9150[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9106 === (3))){
var inst_9092 = (state_9105[(7)]);
var inst_9091 = (state_9105[(8)]);
var state_9105__$1 = state_9105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9105__$1,(6),inst_9092,inst_9091);
} else {
if((state_val_9106 === (4))){
var inst_9093 = (state_9105[(9)]);
var inst_9091 = (state_9105[(8)]);
var inst_9099 = drop_dot.core.pure_js.pointsWithinDropboxDropDot(inst_9091,inst_9093);
var state_9105__$1 = state_9105;
var statearr_9135_9151 = state_9105__$1;
(statearr_9135_9151[(2)] = inst_9099);

(statearr_9135_9151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9106 === (5))){
var inst_9092 = (state_9105[(7)]);
var inst_9101 = (state_9105[(2)]);
var state_9105__$1 = (function (){var statearr_9136 = state_9105;
(statearr_9136[(10)] = inst_9101);

return statearr_9136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9105__$1,(7),inst_9092);
} else {
if((state_val_9106 === (6))){
var inst_9097 = (state_9105[(2)]);
var state_9105__$1 = state_9105;
var statearr_9137_9152 = state_9105__$1;
(statearr_9137_9152[(2)] = inst_9097);

(statearr_9137_9152[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9106 === (7))){
var inst_9103 = (state_9105[(2)]);
var state_9105__$1 = state_9105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9105__$1,inst_9103);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9141[(0)] = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__);

(statearr_9141[(1)] = (1));

return statearr_9141;
});
var drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1 = (function (state_9105){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9142){if((e9142 instanceof Object)){
var ex__8533__auto__ = e9142;
var statearr_9143_9153 = state_9105;
(statearr_9143_9153[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9154 = state_9105;
state_9105 = G__9154;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__ = function(state_9105){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1.call(this,state_9105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____0;
drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto____1;
return drop_dot$core$chan_linkable_path__GT_chan_linkable_path_that_wants_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9144 = f__8551__auto__.call(null);
(statearr_9144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_9144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking = (function drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking(chan_linkable_path_that_wants_linking){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_9225){
var state_val_9226 = (state_9225[(1)]);
if((state_val_9226 === (1))){
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9225__$1,(2),chan_linkable_path_that_wants_linking);
} else {
if((state_val_9226 === (2))){
var inst_9211 = (state_9225[(7)]);
var inst_9212 = (state_9225[(8)]);
var inst_9211__$1 = (state_9225[(2)]);
var inst_9212__$1 = cljs.core.async.chan.call(null,(1));
var inst_9213 = (function (){var linkable_path = inst_9211__$1;
var rc = inst_9212__$1;
return ((function (linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function (res){
if(cljs.core._EQ_.call(null,res,true)){
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function (state_9231){
var state_val_9232 = (state_9231[(1)]);
if((state_val_9232 === (1))){
var inst_9227 = [cljs.core.str("ERROR: "),cljs.core.str(linkable_path),cljs.core.str(" already has a version on this system; please remove this file and re-run this command.")].join('');
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9231__$1,(2),rc,inst_9227);
} else {
if((state_val_9232 === (2))){
var inst_9229 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9231__$1,inst_9229);
} else {
return null;
}
}
});})(c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9236 = [null,null,null,null,null,null,null];
(statearr_9236[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__);

(statearr_9236[(1)] = (1));

return statearr_9236;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1 = (function (state_9231){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9237){if((e9237 instanceof Object)){
var ex__8533__auto__ = e9237;
var statearr_9238_9265 = state_9231;
(statearr_9238_9265[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9266 = state_9231;
state_9231 = G__9266;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__ = function(state_9231){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1.call(this,state_9231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9239 = f__8551__auto__.call(null);
(statearr_9239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_9239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
);

return c__8550__auto____$1;
} else {
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function (state_9243){
var state_val_9244 = (state_9243[(1)]);
if((state_val_9244 === (1))){
var state_9243__$1 = state_9243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9243__$1,(2),rc,linkable_path);
} else {
if((state_val_9244 === (2))){
var inst_9241 = (state_9243[(2)]);
var state_9243__$1 = state_9243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9243__$1,inst_9241);
} else {
return null;
}
}
});})(c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9248 = [null,null,null,null,null,null,null];
(statearr_9248[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__);

(statearr_9248[(1)] = (1));

return statearr_9248;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1 = (function (state_9243){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9249){if((e9249 instanceof Object)){
var ex__8533__auto__ = e9249;
var statearr_9250_9267 = state_9243;
(statearr_9250_9267[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9268 = state_9243;
state_9243 = G__9268;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__ = function(state_9243){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1.call(this,state_9243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9251 = f__8551__auto__.call(null);
(statearr_9251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_9251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
);

return c__8550__auto____$1;
}
});
;})(linkable_path,rc,inst_9211,inst_9212,inst_9211__$1,inst_9212__$1,state_val_9226,c__8550__auto__))
})();
var inst_9214 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_9211__$1);
var state_9225__$1 = (function (){var statearr_9252 = state_9225;
(statearr_9252[(9)] = inst_9213);

(statearr_9252[(7)] = inst_9211__$1);

(statearr_9252[(8)] = inst_9212__$1);

return statearr_9252;
})();
if(cljs.core.truth_(inst_9214)){
var statearr_9253_9269 = state_9225__$1;
(statearr_9253_9269[(1)] = (3));

} else {
var statearr_9254_9270 = state_9225__$1;
(statearr_9254_9270[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (3))){
var inst_9211 = (state_9225[(7)]);
var inst_9212 = (state_9225[(8)]);
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9225__$1,(6),inst_9212,inst_9211);
} else {
if((state_val_9226 === (4))){
var inst_9213 = (state_9225[(9)]);
var inst_9211 = (state_9225[(7)]);
var inst_9219 = drop_dot.core.pure_js.pathExists(inst_9211,inst_9213);
var state_9225__$1 = state_9225;
var statearr_9255_9271 = state_9225__$1;
(statearr_9255_9271[(2)] = inst_9219);

(statearr_9255_9271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (5))){
var inst_9212 = (state_9225[(8)]);
var inst_9221 = (state_9225[(2)]);
var state_9225__$1 = (function (){var statearr_9256 = state_9225;
(statearr_9256[(10)] = inst_9221);

return statearr_9256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9225__$1,(7),inst_9212);
} else {
if((state_val_9226 === (6))){
var inst_9217 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
var statearr_9257_9272 = state_9225__$1;
(statearr_9257_9272[(2)] = inst_9217);

(statearr_9257_9272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9226 === (7))){
var inst_9223 = (state_9225[(2)]);
var state_9225__$1 = state_9225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9225__$1,inst_9223);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9261[(0)] = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__);

(statearr_9261[(1)] = (1));

return statearr_9261;
});
var drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1 = (function (state_9225){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9262){if((e9262 instanceof Object)){
var ex__8533__auto__ = e9262;
var statearr_9263_9273 = state_9225;
(statearr_9263_9273[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9274 = state_9225;
state_9225 = G__9274;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__ = function(state_9225){
switch(arguments.length){
case 0:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1.call(this,state_9225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____0;
drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto____1;
return drop_dot$core$chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9264 = f__8551__auto__.call(null);
(statearr_9264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_9264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.link_chan_path_that_needs_linking = (function drop_dot$core$link_chan_path_that_needs_linking(c){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_9327){
var state_val_9328 = (state_9327[(1)]);
if((state_val_9328 === (1))){
var state_9327__$1 = state_9327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9327__$1,(2),c);
} else {
if((state_val_9328 === (2))){
var inst_9310 = (state_9327[(7)]);
var inst_9309 = (state_9327[(2)]);
var inst_9310__$1 = drop_dot.core.pure_js.localExpandHomeDir(inst_9309);
var inst_9311 = drop_dot.core.pure_js.getDirname(inst_9310__$1);
var inst_9312 = drop_dot.core.pure_js.getBasename(inst_9310__$1);
var inst_9313 = drop_dot.core.protocol_msg_QMARK_.call(null,inst_9310__$1);
var state_9327__$1 = (function (){var statearr_9329 = state_9327;
(statearr_9329[(8)] = inst_9311);

(statearr_9329[(7)] = inst_9310__$1);

(statearr_9329[(9)] = inst_9312);

return statearr_9329;
})();
if(cljs.core.truth_(inst_9313)){
var statearr_9330_9341 = state_9327__$1;
(statearr_9330_9341[(1)] = (3));

} else {
var statearr_9331_9342 = state_9327__$1;
(statearr_9331_9342[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9328 === (3))){
var inst_9310 = (state_9327[(7)]);
var inst_9315 = [cljs.core.str(inst_9310)].join('');
var inst_9316 = cljs.core.println.call(null,inst_9315);
var state_9327__$1 = state_9327;
var statearr_9332_9343 = state_9327__$1;
(statearr_9332_9343[(2)] = inst_9316);

(statearr_9332_9343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9328 === (4))){
var inst_9311 = (state_9327[(8)]);
var inst_9310 = (state_9327[(7)]);
var inst_9312 = (state_9327[(9)]);
var inst_9318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9319 = [cljs.core.str("mkdir -vp "),cljs.core.str(inst_9311)].join('');
var inst_9320 = [cljs.core.str("ln -sv ~/Dropbox/.drop-dot/"),cljs.core.str(inst_9312),cljs.core.str(" "),cljs.core.str(inst_9310)].join('');
var inst_9321 = [inst_9319,inst_9320];
var inst_9322 = (new cljs.core.PersistentVector(null,2,(5),inst_9318,inst_9321,null));
var inst_9323 = drop_dot.core.exec_vec_of_commands.call(null,inst_9322);
var state_9327__$1 = state_9327;
var statearr_9333_9344 = state_9327__$1;
(statearr_9333_9344[(2)] = inst_9323);

(statearr_9333_9344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9328 === (5))){
var inst_9325 = (state_9327[(2)]);
var state_9327__$1 = state_9327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9327__$1,inst_9325);
} else {
return null;
}
}
}
}
}
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto__ = null;
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto____0 = (function (){
var statearr_9337 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9337[(0)] = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto__);

(statearr_9337[(1)] = (1));

return statearr_9337;
});
var drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto____1 = (function (state_9327){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9338){if((e9338 instanceof Object)){
var ex__8533__auto__ = e9338;
var statearr_9339_9345 = state_9327;
(statearr_9339_9345[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9346 = state_9327;
state_9327 = G__9346;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto__ = function(state_9327){
switch(arguments.length){
case 0:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto____1.call(this,state_9327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto____0;
drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto____1;
return drop_dot$core$link_chan_path_that_needs_linking_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9340 = f__8551__auto__.call(null);
(statearr_9340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_9340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.link_line = (function drop_dot$core$link_line(line){
return drop_dot.core.link_chan_path_that_needs_linking.call(null,drop_dot.core.chan_linkable_path_that_wants_linking__GT_chan_linkable_path_without_conflict_that_needs_linking.call(null,drop_dot.core.chan_linkable_path__GT_chan_linkable_path_that_wants_linking.call(null,drop_dot.core.line__GT_chan_linkable_path.call(null,line))));
});
drop_dot.core.chan_config_paths__GT_exec_drop_dot = (function drop_dot$core$chan_config_paths__GT_exec_drop_dot(chan_config,cmd){
var c__8550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto__){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto__){
return (function (state_9423){
var state_val_9424 = (state_9423[(1)]);
if((state_val_9424 === (7))){
var inst_9419 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
var statearr_9426_9451 = state_9423__$1;
(statearr_9426_9451[(2)] = inst_9419);

(statearr_9426_9451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (1))){
var inst_9399 = chan_config;
var state_9423__$1 = (function (){var statearr_9427 = state_9423;
(statearr_9427[(7)] = inst_9399);

return statearr_9427;
})();
var statearr_9428_9452 = state_9423__$1;
(statearr_9428_9452[(2)] = null);

(statearr_9428_9452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (4))){
var inst_9402 = (state_9423[(8)]);
var inst_9402__$1 = (state_9423[(2)]);
var state_9423__$1 = (function (){var statearr_9429 = state_9423;
(statearr_9429[(8)] = inst_9402__$1);

return statearr_9429;
})();
if(cljs.core.truth_(inst_9402__$1)){
var statearr_9430_9453 = state_9423__$1;
(statearr_9430_9453[(1)] = (5));

} else {
var statearr_9431_9454 = state_9423__$1;
(statearr_9431_9454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (13))){
var inst_9399 = (state_9423[(7)]);
var inst_9415 = (state_9423[(2)]);
var tmp9425 = inst_9399;
var inst_9399__$1 = tmp9425;
var state_9423__$1 = (function (){var statearr_9432 = state_9423;
(statearr_9432[(9)] = inst_9415);

(statearr_9432[(7)] = inst_9399__$1);

return statearr_9432;
})();
var statearr_9433_9455 = state_9423__$1;
(statearr_9433_9455[(2)] = null);

(statearr_9433_9455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (6))){
var state_9423__$1 = state_9423;
var statearr_9434_9456 = state_9423__$1;
(statearr_9434_9456[(2)] = null);

(statearr_9434_9456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (3))){
var inst_9421 = (state_9423[(2)]);
var state_9423__$1 = state_9423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9423__$1,inst_9421);
} else {
if((state_val_9424 === (12))){
var state_9423__$1 = state_9423;
var statearr_9435_9457 = state_9423__$1;
(statearr_9435_9457[(2)] = null);

(statearr_9435_9457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (2))){
var inst_9399 = (state_9423[(7)]);
var state_9423__$1 = state_9423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9423__$1,(4),inst_9399);
} else {
if((state_val_9424 === (11))){
var inst_9402 = (state_9423[(8)]);
var inst_9412 = drop_dot.core.link_line.call(null,inst_9402);
var state_9423__$1 = state_9423;
var statearr_9436_9458 = state_9423__$1;
(statearr_9436_9458[(2)] = inst_9412);

(statearr_9436_9458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (9))){
var state_9423__$1 = state_9423;
var statearr_9437_9459 = state_9423__$1;
(statearr_9437_9459[(2)] = null);

(statearr_9437_9459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (5))){
var inst_9404 = cljs.core._EQ_.call(null,cmd,"drop");
var state_9423__$1 = state_9423;
if(inst_9404){
var statearr_9438_9460 = state_9423__$1;
(statearr_9438_9460[(1)] = (8));

} else {
var statearr_9439_9461 = state_9423__$1;
(statearr_9439_9461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (10))){
var inst_9409 = (state_9423[(2)]);
var inst_9410 = cljs.core._EQ_.call(null,cmd,"link");
var state_9423__$1 = (function (){var statearr_9440 = state_9423;
(statearr_9440[(10)] = inst_9409);

return statearr_9440;
})();
if(inst_9410){
var statearr_9441_9462 = state_9423__$1;
(statearr_9441_9462[(1)] = (11));

} else {
var statearr_9442_9463 = state_9423__$1;
(statearr_9442_9463[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9424 === (8))){
var inst_9402 = (state_9423[(8)]);
var inst_9406 = drop_dot.core.drop_line.call(null,inst_9402);
var state_9423__$1 = state_9423;
var statearr_9443_9464 = state_9423__$1;
(statearr_9443_9464[(2)] = inst_9406);

(statearr_9443_9464[(1)] = (10));


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
});})(c__8550__auto__))
;
return ((function (switch__8529__auto__,c__8550__auto__){
return (function() {
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto____0 = (function (){
var statearr_9447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9447[(0)] = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto__);

(statearr_9447[(1)] = (1));

return statearr_9447;
});
var drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto____1 = (function (state_9423){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9448){if((e9448 instanceof Object)){
var ex__8533__auto__ = e9448;
var statearr_9449_9465 = state_9423;
(statearr_9449_9465[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9466 = state_9423;
state_9423 = G__9466;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto__ = function(state_9423){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto____1.call(this,state_9423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto____0;
drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto____1;
return drop_dot$core$chan_config_paths__GT_exec_drop_dot_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto__))
})();
var state__8552__auto__ = (function (){var statearr_9450 = f__8551__auto__.call(null);
(statearr_9450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto__);

return statearr_9450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto__))
);

return c__8550__auto__;
});
drop_dot.core.chan_config_paths = (function drop_dot$core$chan_config_paths(){
var c = cljs.core.async.chan.call(null);
var c__8550__auto___9563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto___9563,c){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto___9563,c){
return (function (state_9527){
var state_val_9528 = (state_9527[(1)]);
if((state_val_9528 === (1))){
var inst_9515 = (state_9527[(7)]);
var inst_9516 = (state_9527[(8)]);
var inst_9517 = (state_9527[(9)]);
var inst_9515__$1 = cljs.nodejs.require.call(null,"../js/pure-js.js");
var inst_9516__$1 = cljs.core.async.chan.call(null,(1));
var inst_9517__$1 = (function (){var res = inst_9515__$1;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_9516__$1;
return ((function (res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c){
return (function (error,res__$1){
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c){
return (function (state_9532){
var state_val_9533 = (state_9532[(1)]);
if((state_val_9533 === (1))){
var state_9532__$1 = state_9532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9532__$1,(2),wcc,res__$1);
} else {
if((state_val_9533 === (2))){
var inst_9530 = (state_9532[(2)]);
var state_9532__$1 = state_9532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9532__$1,inst_9530);
} else {
return null;
}
}
});})(c__8550__auto____$1,res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0 = (function (){
var statearr_9537 = [null,null,null,null,null,null,null];
(statearr_9537[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8530__auto__);

(statearr_9537[(1)] = (1));

return statearr_9537;
});
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1 = (function (state_9532){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9538){if((e9538 instanceof Object)){
var ex__8533__auto__ = e9538;
var statearr_9539_9564 = state_9532;
(statearr_9539_9564[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9565 = state_9532;
state_9532 = G__9565;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__ = function(state_9532){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1.call(this,state_9532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c))
})();
var state__8552__auto__ = (function (){var statearr_9540 = f__8551__auto__.call(null);
(statearr_9540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_9540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c))
);

return c__8550__auto____$1;
});
;})(res,config_path,wcc,inst_9515,inst_9516,inst_9517,inst_9515__$1,inst_9516__$1,state_val_9528,c__8550__auto___9563,c))
})();
var inst_9518 = inst_9515__$1.getFileLineCount("~/Dropbox/.drop-dot/.drop-dot",inst_9517__$1);
var state_9527__$1 = (function (){var statearr_9541 = state_9527;
(statearr_9541[(7)] = inst_9515__$1);

(statearr_9541[(8)] = inst_9516__$1);

(statearr_9541[(10)] = inst_9518);

(statearr_9541[(9)] = inst_9517__$1);

return statearr_9541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9527__$1,(2),inst_9516__$1);
} else {
if((state_val_9528 === (2))){
var inst_9515 = (state_9527[(7)]);
var inst_9516 = (state_9527[(8)]);
var inst_9518 = (state_9527[(10)]);
var inst_9517 = (state_9527[(9)]);
var inst_9520 = (state_9527[(2)]);
var inst_9521 = [cljs.core.str(inst_9520)].join('');
var inst_9522 = parseInt(inst_9521);
var inst_9523 = (function (){var res = inst_9515;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_9516;
var wcc_jammer = inst_9517;
var get_wc = inst_9518;
var lines = inst_9522;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,state_val_9528,c__8550__auto___9563,c){
return (function (){
if(cljs.core._EQ_.call(null,lines,cljs.core.count.call(null,c.buf))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return null;
}
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,state_val_9528,c__8550__auto___9563,c))
})();
var inst_9524 = (function (){var res = inst_9515;
var config_path = "~/Dropbox/.drop-dot/.drop-dot";
var wcc = inst_9516;
var wcc_jammer = inst_9517;
var get_wc = inst_9518;
var lines = inst_9522;
var close_if_done = inst_9523;
return ((function (res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c){
return (function (res__$1){
var c__8550__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8550__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c){
return (function (){
var f__8551__auto__ = (function (){var switch__8529__auto__ = ((function (c__8550__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c){
return (function (state_9546){
var state_val_9547 = (state_9546[(1)]);
if((state_val_9547 === (1))){
var state_9546__$1 = state_9546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9546__$1,(2),c,res__$1);
} else {
if((state_val_9547 === (2))){
var inst_9543 = (state_9546[(2)]);
var inst_9544 = close_if_done.call(null);
var state_9546__$1 = (function (){var statearr_9548 = state_9546;
(statearr_9548[(7)] = inst_9543);

return statearr_9548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9546__$1,inst_9544);
} else {
return null;
}
}
});})(c__8550__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c))
;
return ((function (switch__8529__auto__,c__8550__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0 = (function (){
var statearr_9552 = [null,null,null,null,null,null,null,null];
(statearr_9552[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8530__auto__);

(statearr_9552[(1)] = (1));

return statearr_9552;
});
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1 = (function (state_9546){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9553){if((e9553 instanceof Object)){
var ex__8533__auto__ = e9553;
var statearr_9554_9566 = state_9546;
(statearr_9554_9566[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9567 = state_9546;
state_9546 = G__9567;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__ = function(state_9546){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1.call(this,state_9546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c))
})();
var state__8552__auto__ = (function (){var statearr_9555 = f__8551__auto__.call(null);
(statearr_9555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto____$1);

return statearr_9555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto____$1,res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c))
);

return c__8550__auto____$1;
});
;})(res,config_path,wcc,wcc_jammer,get_wc,lines,close_if_done,inst_9515,inst_9516,inst_9518,inst_9517,inst_9520,inst_9521,inst_9522,inst_9523,state_val_9528,c__8550__auto___9563,c))
})();
var inst_9525 = inst_9515.getLinesFromFile("~/Dropbox/.drop-dot/.drop-dot",inst_9524);
var state_9527__$1 = state_9527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9527__$1,inst_9525);
} else {
return null;
}
}
});})(c__8550__auto___9563,c))
;
return ((function (switch__8529__auto__,c__8550__auto___9563,c){
return (function() {
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto__ = null;
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0 = (function (){
var statearr_9559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9559[(0)] = drop_dot$core$chan_config_paths_$_state_machine__8530__auto__);

(statearr_9559[(1)] = (1));

return statearr_9559;
});
var drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1 = (function (state_9527){
while(true){
var ret_value__8531__auto__ = (function (){try{while(true){
var result__8532__auto__ = switch__8529__auto__.call(null,state_9527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8532__auto__;
}
break;
}
}catch (e9560){if((e9560 instanceof Object)){
var ex__8533__auto__ = e9560;
var statearr_9561_9568 = state_9527;
(statearr_9561_9568[(5)] = ex__8533__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9569 = state_9527;
state_9527 = G__9569;
continue;
} else {
return ret_value__8531__auto__;
}
break;
}
});
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__ = function(state_9527){
switch(arguments.length){
case 0:
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0.call(this);
case 1:
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1.call(this,state_9527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$0 = drop_dot$core$chan_config_paths_$_state_machine__8530__auto____0;
drop_dot$core$chan_config_paths_$_state_machine__8530__auto__.cljs$core$IFn$_invoke$arity$1 = drop_dot$core$chan_config_paths_$_state_machine__8530__auto____1;
return drop_dot$core$chan_config_paths_$_state_machine__8530__auto__;
})()
;})(switch__8529__auto__,c__8550__auto___9563,c))
})();
var state__8552__auto__ = (function (){var statearr_9562 = f__8551__auto__.call(null);
(statearr_9562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8550__auto___9563);

return statearr_9562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8552__auto__);
});})(c__8550__auto___9563,c))
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
var args__7221__auto__ = [];
var len__7214__auto___9571 = arguments.length;
var i__7215__auto___9572 = (0);
while(true){
if((i__7215__auto___9572 < len__7214__auto___9571)){
args__7221__auto__.push((arguments[i__7215__auto___9572]));

var G__9573 = (i__7215__auto___9572 + (1));
i__7215__auto___9572 = G__9573;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__6156__auto__ = argv.e;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__6156__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "$HOME";
}
})();
drop_dot.core.check_for_sys_requirements.call(null);

if(cljs.core._EQ_.call(null,arg,"drop")){
cljs.core.println.call(null,"Dropping files from your config into ~/Dropbox/.drop-dot");

drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"drop");
} else {
}

if(cljs.core._EQ_.call(null,arg,"link")){
cljs.core.println.call(null,"Linking files specified in  your config.");

return drop_dot.core.chan_config_paths__GT_exec_drop_dot.call(null,drop_dot.core.chan_config_paths.call(null),"link");
} else {
return null;
}
});

drop_dot.core._main.cljs$lang$maxFixedArity = (0);

drop_dot.core._main.cljs$lang$applyTo = (function (seq9570){
return drop_dot.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9570));
});
cljs.core._STAR_main_cli_fn_STAR_ = drop_dot.core._main;

//# sourceMappingURL=core.js.map